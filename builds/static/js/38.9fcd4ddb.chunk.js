(this.webpackJsonpGreatLakes=this.webpackJsonpGreatLakes||[]).push([[38],{1609:function(t,e,n){"use strict";n.r(e);n(0);var o=n(1620),c=n(611),r=n(3);e.default=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Routing"}),Object(r.jsxs)("p",{children:["Emilus use ",Object(r.jsx)("a",{href:"https://reactrouter.com/",target:"_blank",rel:"noopener noreferrer",children:"react-router"})," as base routing system. To add a new route in the template, you can follow the steps below."]}),Object(r.jsxs)("div",{className:"mt-4",children:[Object(r.jsx)("h4",{className:"font-weight-bold",children:"Create new route"}),Object(r.jsxs)("p",{children:["We place all our post login page components in",Object(r.jsx)("code",{children:"src/views/app-views"})," folder,",Object(r.jsx)("code",{children:"index.js"})," in this folder is the entry point of all pages, you can basically set your pages in this file. Refer below mentioned code to create a route:"]}),Object(r.jsx)(o.a,{className:"hl-code",language:"jsx",style:c.a,children:"import React, { lazy } from 'react';\n\nconst myNewComponent = lazy(() => import('myNewComponentPath'))\n\nconst Apps = ({ match }) => (\n\t<Switch>\n\t\t<Redirect exact from={`${match.url}`} to={`${match.url}/new-component-path`} />\n\t\t<Route path={`${match.url}/new-component-path`} component={myNewComponent} />\n\t</Switch>\n);\n\nexport default Apps;\n"})]}),Object(r.jsxs)("div",{className:"mt-4",children:[Object(r.jsx)("h4",{className:"font-weight-bold",children:"Navigating"}),Object(r.jsxs)("p",{children:["You can config your navigation bar in ",Object(r.jsx)("code",{children:"configs/NavigationConfig.js"}),". We grouped up the navigation tree as an array, add object as the code below to the array for new menu item."]}),Object(r.jsx)(o.a,{className:"hl-code",language:"javascript",style:c.a,children:"import { DashboardOutlined } from '@ant-design/icons'\n\nconst navigationConfig = [\n  {\n\t\tkey: 'new-component-key',\n\t\tpath: '/app/new-component-path',\n\t\ttitle: 'myNewComponent',\n\t\ticon: DashboardOutlined,\n\t\tbreadcrumb: false,\n\t\tsubmenu: []\n\t}\n]\n\nexport default navigationConfig;\n"}),Object(r.jsx)("h4",{className:"font-weight-bold mt-4",children:"Nested"}),Object(r.jsx)("p",{children:"Refer below code to create a nested menu item:"}),Object(r.jsx)(o.a,{className:"hl-code",language:"javascript",style:c.a,children:"import { DashboardOutlined } from '@ant-design/icons'\n\nconst navigationConfig = [\n  {\n\t\tkey: 'new-component-key',\n\t\tpath: '',\n\t\ttitle: 'myNewComponent',\n\t\ticon: DashboardOutlined,\n\t\tbreadcrumb: false,\n\t\tsubmenu: [\n\t\t\t{\n\t\t\t\tkey: 'new-component-child-key',\n\t\t\t\tpath: '',\n\t\t\t\ttitle: 'myNewComponentFirstLevel',\n\t\t\t\ticon: DashboardOutlined,\n\t\t\t\tbreadcrumb: true,\n\t\t\t\tsubmenu: [\n\t\t\t\t\t{\n\t\t\t\t\t\tkey: 'new-component-child-key-1',\n\t\t\t\t\t\tpath: '/app/new-component-path-1',\n\t\t\t\t\t\ttitle: 'myNewComponentSecondLevelOne',\n\t\t\t\t\t\ticon: DashboardOutlined,\n\t\t\t\t\t\tbreadcrumb: true,\n\t\t\t\t\t\tsubmenu: []\n\t\t\t\t\t}\n\t\t\t\t\t{\n\t\t\t\t\t\tkey: 'new-component-child-key-2',\n\t\t\t\t\t\tpath: '/app/new-component-path-2',\n\t\t\t\t\t\ttitle: 'myNewComponentSecondLevelTwo',\n\t\t\t\t\t\ticon: DashboardOutlined,\n\t\t\t\t\t\tbreadcrumb: true,\n\t\t\t\t\t\tsubmenu: []\n\t\t\t\t\t}\n\t\t\t\t]\n\t\t\t}\n\t\t]\n\t}\n]\n\nexport default navigationConfig;\n"})]}),Object(r.jsxs)("div",{className:"api-container border-0 p-0 mt-5",children:[Object(r.jsx)("p",{children:"The properties of config are as follows:"}),Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Property"}),Object(r.jsx)("th",{children:"Description"}),Object(r.jsx)("th",{children:"Type"})]})}),Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"key"}),Object(r.jsx)("td",{children:"The unique identifier of menu item"}),Object(r.jsx)("td",{children:"string | number"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"path"}),Object(r.jsx)("td",{children:"Path to destination page"}),Object(r.jsx)("td",{children:"string"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"title"}),Object(r.jsx)("td",{children:"Menu item title, accept IntlMessage key"}),Object(r.jsx)("td",{children:"string"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"icon"}),Object(r.jsx)("td",{children:"Set icon beside menu title"}),Object(r.jsx)("td",{children:"ReactNode"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"breadcrumb"}),Object(r.jsx)("td",{children:"Displaay breadcrumb on page"}),Object(r.jsx)("td",{children:"boolean"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"submenu"}),Object(r.jsx)("td",{children:"Whether have child in this menu item, only accept properties in this table"}),Object(r.jsx)("td",{children:"array"})]})]})]})]})]})}},611:function(t,e,n){"use strict";e.a={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}}}]);
//# sourceMappingURL=38.9fcd4ddb.chunk.js.map