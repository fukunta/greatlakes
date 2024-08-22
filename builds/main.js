const { app, BrowserWindow, ipcMain, Menu } = require("electron");

const server = require("./app");
const path = require('path');
const iconPath = path.join(__dirname, "img", "icon.png");
const { autoUpdater } = require('electron-updater');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    width: 800,
    height: 600,
    center: true,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: iconPath,
  });
  mainWindow.maximize();
  mainWindow.show()
  mainWindow.setTitle("Great Lakes App");
  mainWindow.loadURL("http://localhost:20740");
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
  mainWindow.once('ready-to-show', () => {
    autoUpdater.checkForUpdatesAndNotify();
  });
}

app.on("ready", ()=>{
  Menu.setApplicationMenu(null);
  createWindow();
});

app.on("resize", function (e, x, y) {
  mainWindow.setSize(x, y);
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});

autoUpdater.on('update-available', () => {
  mainWindow.webContents.send('update_available');
});
autoUpdater.on('update-downloaded', () => {
  mainWindow.webContents.send('update_downloaded');
});

ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall();
});