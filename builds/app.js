const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.use(express.static(__dirname));
app.use('/', router);

app.listen(process.env.port || 20740);

console.log('Web Server is listening at port '+ (process.env.port || 20740));