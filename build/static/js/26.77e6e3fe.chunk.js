(this.webpackJsonpGreatLakes=this.webpackJsonpGreatLakes||[]).push([[26,41],{1602:function(t,e,n){"use strict";n.r(e);var a=n(15),c=n(0),l=n(180),r=n(594),o=n(1623),s=n(614),i=n(155),d=n(558),m=n(3),b=function(){var t=i.a.Option,e=Object(c.useState)("start"),n=Object(a.a)(e,2),r=n[0],o=n[1],s=Object(c.useState)("start"),d=Object(a.a)(s,2),b=d[0],u=d[1],h=Object(c.useState)("row"),j=Object(a.a)(h,2),p=j[0],x=j[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(l.a,{alignItems:r,justifyContent:b,flexDirection:p,children:Object(m.jsx)(m.Fragment,{children:["danger","warning","success"].map((function(t,e){return Object(m.jsx)("div",{className:"bg-".concat(t," m-2"),style:{width:40,height:1===e?25:40,borderRadius:4}},t)}))})}),Object(m.jsx)("div",{className:"mt-4",children:Object(m.jsxs)(l.a,{alignItems:"center",mobileFlex:!1,children:[Object(m.jsx)("span",{className:"font-weight-semibold mr-3",children:"alignItems: "}),Object(m.jsx)(i.a,{defaultValue:"start",style:{width:120},onChange:function(t){o(t)},children:["start","end","center","baseline","stretch"].map((function(e){return Object(m.jsx)(t,{value:e,children:e},e)}))}),Object(m.jsxs)(l.a,{alignItems:"center",mobileFlex:!1,className:"ml-md-4",children:[Object(m.jsx)("span",{className:"font-weight-semibold mr-3",children:"justifyContent: "}),Object(m.jsx)(i.a,{defaultValue:"start",style:{width:120},onChange:function(t){u(t)},children:["start","end","center","between","around","stretch"].map((function(e){return Object(m.jsx)(t,{value:e,children:e},e)}))})]}),Object(m.jsxs)(l.a,{alignItems:"center",mobileFlex:!1,className:"ml-md-4",children:[Object(m.jsx)("span",{className:"font-weight-semibold mr-3",children:"flexDirection: "}),Object(m.jsx)(i.a,{defaultValue:"row",style:{width:120},onChange:function(t){x(t)},children:["row","column","row-reverse","column-reverse"].map((function(e){return Object(m.jsx)(t,{value:e,children:e},e)}))})]})]})})]})};e.default=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Flex"}),Object(m.jsxs)("div",{className:"mt-4",children:[Object(m.jsx)(r.default,{name:"Location",desc:"src/components/shared-components/Flex.js"}),Object(m.jsx)(r.default,{name:"Description",desc:"Flex component"}),Object(m.jsx)("div",{className:"mt-4",children:Object(m.jsxs)(d.a,{title:"Example",children:[Object(m.jsx)(b,{}),Object(m.jsx)("div",{className:"mt-4",children:Object(m.jsx)(o.a,{className:"hl-code",language:"jsx",style:s.a,children:"import React, { useState } from 'react'\nimport Flex from 'components/shared-components/Flex'\nimport { Select } from 'antd'\n\nexport default const Demo = () =>  {\n\tconst { Option } = Select;\n\tconst arr = ['danger', 'warning', 'success']\n\tconst alignItemsList = ['start', 'end', 'center', 'baseline', 'stretch']\n\tconst justifyContentList = ['start', 'end', 'center', 'between', 'around', 'stretch']\n\tconst flexDirectionList = ['row', 'column', 'row-reverse', 'column-reverse']\n\tconst [alignItems, setAlignItems] = useState('start')\n\tconst [justifyContent, setJustifyContent] = useState('start');\n\tconst [flexDirection, setFlexDirection] = useState('row');\n\treturn (\n\t\t<>\n\t\t\t<Flex \n\t\t\t\talignItems={alignItems}\n\t\t\t\tjustifyContent={justifyContent}\n\t\t\t\tflexDirection={flexDirection}\n\t\t\t>\n\t\t\t\t<>\n\t\t\t\t\t{arr.map((elm, index) => (\n\t\t\t\t\t\t<div \n\t\t\t\t\t\t\tkey={elm} \n\t\t\t\t\t\t\tclassName={`bg-${elm} m-2`} \n\t\t\t\t\t\t\tstyle={{width: 40, height: index === 1 ? 25 : 40, borderRadius: 4}}\n\t\t\t\t\t\t></div>\n\t\t\t\t\t))}\n\t\t\t\t</>\n\t\t\t</Flex>\n\t\t\t<div className=\"mt-4\">\n\t\t\t\t<Flex alignItems=\"center\" mobileFlex={false}>\n\t\t\t\t\t<span className=\"font-weight-semibold mr-3\">alignItems: </span>\n\t\t\t\t\t<Select defaultValue=\"start\" style={{ width: 120 }} onChange={val => {setAlignItems(val)}}>\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\talignItemsList.map(elm => (\n\t\t\t\t\t\t\t\t<Option key={elm} value={elm}>{elm}</Option>\n\t\t\t\t\t\t\t))\n\t\t\t\t\t\t}\n\t\t\t\t\t</Select>\n\t\t\t\t\t<Flex alignItems=\"center\" mobileFlex={false} className=\"ml-md-4\">\n\t\t\t\t\t\t<span className=\"font-weight-semibold mr-3\">justifyContent: </span>\n\t\t\t\t\t\t<Select defaultValue=\"start\" style={{ width: 120 }} onChange={val => {setJustifyContent(val)}}>\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tjustifyContentList.map(elm => (\n\t\t\t\t\t\t\t\t\t<Option key={elm} value={elm}>{elm}</Option>\n\t\t\t\t\t\t\t\t))\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t</Select>\n\t\t\t\t\t</Flex>\n\t\t\t\t\t<Flex alignItems=\"center\" mobileFlex={false} className=\"ml-md-4\">\n\t\t\t\t\t\t<span className=\"font-weight-semibold mr-3\">flexDirection: </span>\n\t\t\t\t\t\t<Select defaultValue=\"row\" style={{ width: 120 }} onChange={val => {setFlexDirection(val)}}>\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tflexDirectionList.map(elm => (\n\t\t\t\t\t\t\t\t\t<Option key={elm} value={elm}>{elm}</Option>\n\t\t\t\t\t\t\t\t))\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t</Select>\n\t\t\t\t\t</Flex>\n\t\t\t\t</Flex>\n\t\t\t</div>\n\t\t</>\n\t)\n}\n"})})]})}),Object(m.jsx)("h4",{className:"mt-4",children:"Props"}),Object(m.jsx)("div",{className:"api-container border-0 p-0",children:Object(m.jsxs)("table",{children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Property"}),Object(m.jsx)("th",{children:"Description"}),Object(m.jsx)("th",{children:"Type"}),Object(m.jsx)("th",{children:"Default"})]})}),Object(m.jsxs)("tbody",{children:[Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"alignItems"}),Object(m.jsx)("td",{children:"Alignment of flex items on the cross axis"}),Object(m.jsx)("td",{children:"start, end, center, baseline, stretch"}),Object(m.jsx)("td",{})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"justifyContent"}),Object(m.jsx)("td",{children:"Alignment of flex items on the main axis"}),Object(m.jsx)("td",{children:"start, end, center, between, around, stretch"}),Object(m.jsx)("td",{})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"flexDirection"}),Object(m.jsx)("td",{children:"Set the direction of flex items in a flex container"}),Object(m.jsx)("td",{children:"row, column, row-reverse, column-reverse"}),Object(m.jsx)("td",{})]}),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"mobileFlex"}),Object(m.jsx)("td",{children:"Enable flex in mobile view"}),Object(m.jsx)("td",{children:"boolean"}),Object(m.jsx)("td",{children:"true"})]})]})]})})]})]})}},558:function(t,e,n){"use strict";var a=n(7),c=n.n(a),l=n(5),r=n.n(l),o=n(0),s=n(6),i=n.n(s),d=n(45),m=n(72),b=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(t);c<a.length;c++)e.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(n[a[c]]=t[a[c]])}return n},u=function(t){var e=t.prefixCls,n=t.className,a=t.hoverable,l=void 0===a||a,s=b(t,["prefixCls","className","hoverable"]);return o.createElement(m.a,null,(function(t){var a=(0,t.getPrefixCls)("card",e),d=i()("".concat(a,"-grid"),n,c()({},"".concat(a,"-grid-hoverable"),l));return o.createElement("div",r()({},s,{className:d}))}))},h=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(t);c<a.length;c++)e.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(n[a[c]]=t[a[c]])}return n},j=function(t){return o.createElement(m.a,null,(function(e){var n=e.getPrefixCls,a=t.prefixCls,c=t.className,l=t.avatar,s=t.title,d=t.description,m=h(t,["prefixCls","className","avatar","title","description"]),b=n("card",a),u=i()("".concat(b,"-meta"),c),j=l?o.createElement("div",{className:"".concat(b,"-meta-avatar")},l):null,p=s?o.createElement("div",{className:"".concat(b,"-meta-title")},s):null,x=d?o.createElement("div",{className:"".concat(b,"-meta-description")},d):null,f=p||x?o.createElement("div",{className:"".concat(b,"-meta-detail")},p,x):null;return o.createElement("div",r()({},m,{className:u}),j,f)}))},p=n(556),x=n(549),f=n(550),g=n(83),O=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(t);c<a.length;c++)e.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(t,a[c])&&(n[a[c]]=t[a[c]])}return n};var y=function(t){var e,n,a,l=o.useContext(m.b),s=l.getPrefixCls,b=l.direction,h=o.useContext(g.b),j=t.prefixCls,y=t.className,v=t.extra,C=t.headStyle,E=void 0===C?{}:C,w=t.bodyStyle,F=void 0===w?{}:w,N=t.title,S=t.loading,k=t.bordered,D=void 0===k||k,I=t.size,A=t.type,P=t.cover,z=t.actions,T=t.tabList,B=t.children,L=t.activeTabKey,H=t.defaultActiveTabKey,M=t.tabBarExtraContent,K=t.hoverable,V=t.tabProps,R=void 0===V?{}:V,J=O(t,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),W=s("card",j),G=0===F.padding||"0px"===F.padding?{padding:24}:void 0,$=o.createElement("div",{className:"".concat(W,"-loading-block")}),q=o.createElement("div",{className:"".concat(W,"-loading-content"),style:G},o.createElement(x.a,{gutter:8},o.createElement(f.a,{span:22},$)),o.createElement(x.a,{gutter:8},o.createElement(f.a,{span:8},$),o.createElement(f.a,{span:15},$)),o.createElement(x.a,{gutter:8},o.createElement(f.a,{span:6},$),o.createElement(f.a,{span:18},$)),o.createElement(x.a,{gutter:8},o.createElement(f.a,{span:13},$),o.createElement(f.a,{span:9},$)),o.createElement(x.a,{gutter:8},o.createElement(f.a,{span:4},$),o.createElement(f.a,{span:3},$),o.createElement(f.a,{span:16},$))),Q=void 0!==L,U=r()(r()({},R),(e={},c()(e,Q?"activeKey":"defaultActiveKey",Q?L:H),c()(e,"tabBarExtraContent",M),e)),X=T&&T.length?o.createElement(p.a,r()({size:"large"},U,{className:"".concat(W,"-head-tabs"),onChange:function(e){t.onTabChange&&t.onTabChange(e)}}),T.map((function(t){return o.createElement(p.a.TabPane,{tab:t.tab,disabled:t.disabled,key:t.key})}))):null;(N||v||X)&&(a=o.createElement("div",{className:"".concat(W,"-head"),style:E},o.createElement("div",{className:"".concat(W,"-head-wrapper")},N&&o.createElement("div",{className:"".concat(W,"-head-title")},N),v&&o.createElement("div",{className:"".concat(W,"-extra")},v)),X));var Y=P?o.createElement("div",{className:"".concat(W,"-cover")},P):null,Z=o.createElement("div",{className:"".concat(W,"-body"),style:F},S?q:B),_=z&&z.length?o.createElement("ul",{className:"".concat(W,"-actions")},function(t){return t.map((function(e,n){return o.createElement("li",{style:{width:"".concat(100/t.length,"%")},key:"action-".concat(n)},o.createElement("span",null,e))}))}(z)):null,tt=Object(d.a)(J,["onTabChange"]),et=I||h,nt=i()(W,(n={},c()(n,"".concat(W,"-loading"),S),c()(n,"".concat(W,"-bordered"),D),c()(n,"".concat(W,"-hoverable"),K),c()(n,"".concat(W,"-contain-grid"),function(){var e;return o.Children.forEach(t.children,(function(t){t&&t.type&&t.type===u&&(e=!0)})),e}()),c()(n,"".concat(W,"-contain-tabs"),T&&T.length),c()(n,"".concat(W,"-").concat(et),et),c()(n,"".concat(W,"-type-").concat(A),!!A),c()(n,"".concat(W,"-rtl"),"rtl"===b),n),y);return o.createElement("div",r()({},tt,{className:nt}),a,Y,Z,_)};y.Grid=u,y.Meta=j;e.a=y},594:function(t,e,n){"use strict";n.r(e);n(0);var a=n(3);e.default=function(t){var e=t.name,n=t.desc;return Object(a.jsxs)("div",{className:"mb-3",children:[Object(a.jsxs)("span",{className:"font-weight-bold text-dark",children:[e,":"]}),Object(a.jsxs)("span",{className:"text-gray-light",children:[" ",n]})]})}},614:function(t,e,n){"use strict";e.a={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}}}]);
//# sourceMappingURL=26.77e6e3fe.chunk.js.map