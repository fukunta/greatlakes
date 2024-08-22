(this.webpackJsonpGreatLakes=this.webpackJsonpGreatLakes||[]).push([[21,41],{1068:function(e,t,a){"use strict";a(0);var c=a(3),n=function(e){var t;switch(e.size){case"lg":t=Object(c.jsx)("h1",{className:"mb-0 font-weight-bold",children:e.value});break;case"md":t=Object(c.jsx)("h2",{className:"mb-0 font-weight-bold",children:e.value});break;case"sm":t=Object(c.jsx)("h3",{className:"mb-0 font-weight-bold",children:e.value});break;default:t=Object(c.jsx)("h3",{className:"mb-0 font-weight-bold",children:e.value})}return t},r=function(e){var t=e.size,a=e.value,r=e.title;return Object(c.jsxs)("div",{children:[Object(c.jsx)(n,{value:a,size:t}),Object(c.jsx)("p",{className:"mb-0 text-muted",children:r})]})};r.defaultProps={size:"md"},t.a=r},1594:function(e,t,a){"use strict";a.r(t);a(0);var c=a(1068),n=a(591),r=a(1620),l=a(611),o=a(555),s=a(3),i=function(){return Object(s.jsxs)("div",{className:"d-flex align-items-center",children:[Object(s.jsx)("div",{className:"mr-5",children:Object(s.jsx)(c.a,{size:"lg",value:"1,128",title:"Active Users"})}),Object(s.jsx)("div",{className:"mr-5",children:Object(s.jsx)(c.a,{size:"md",value:"1,128",title:"Active Users"})}),Object(s.jsx)("div",{children:Object(s.jsx)(c.a,{size:"sm",value:"1,128",title:"Active Users"})})]})};t.default=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"CustomStatistic"}),Object(s.jsxs)("div",{className:"mt-4",children:[Object(s.jsx)(n.default,{name:"Location",desc:"src/components/shared-components/CustomStatistic.js"}),Object(s.jsx)(n.default,{name:"Description",desc:"highlight data with description"}),Object(s.jsx)("div",{className:"mt-4",children:Object(s.jsxs)(o.a,{title:"Example",children:[Object(s.jsx)(i,{}),Object(s.jsx)("div",{className:"mt-4",children:Object(s.jsx)(r.a,{className:"hl-code",language:"jsx",style:l.a,children:"import React from 'react'\nimport CustomStatistic from 'components/shared-components/CustomStatistic'\n\nexport default const Demo = () =>  (\n\t<div className=\"d-flex align-items-center\">\n\t\t<div className=\"mr-5\">\n\t\t\t<CustomStatistic size={'lg'} value={'1,128'} title={'Active Users'}/>\n\t\t</div>\n\t\t<div className=\"mr-5\">\n\t\t\t<CustomStatistic size={'md'} value={'1,128'} title={'Active Users'}/>\n\t\t</div>\n\t\t<div>\n\t\t\t<CustomStatistic size={'sm'} value={'1,128'} title={'Active Users'}/>\n\t\t</div>\n\t</div>\n)"})})]})}),Object(s.jsx)("h4",{className:"mt-4",children:"Props"}),Object(s.jsx)("div",{className:"api-container border-0 p-0",children:Object(s.jsxs)("table",{children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Property"}),Object(s.jsx)("th",{children:"Description"}),Object(s.jsx)("th",{children:"Type"}),Object(s.jsx)("th",{children:"Default"})]})}),Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"value"}),Object(s.jsx)("td",{children:"Display value"}),Object(s.jsx)("td",{children:"string | number"}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"title"}),Object(s.jsx)("td",{children:"Display title"}),Object(s.jsx)("td",{children:"string"}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"size"}),Object(s.jsx)("td",{children:"Value size"}),Object(s.jsx)("td",{children:"sm | md | lg"}),Object(s.jsx)("td",{children:"md"})]})]})]})})]})]})}},555:function(e,t,a){"use strict";var c=a(7),n=a.n(c),r=a(5),l=a.n(r),o=a(0),s=a(6),i=a.n(s),d=a(45),m=a(72),b=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},u=function(e){var t=e.prefixCls,a=e.className,c=e.hoverable,r=void 0===c||c,s=b(e,["prefixCls","className","hoverable"]);return o.createElement(m.a,null,(function(e){var c=(0,e.getPrefixCls)("card",t),d=i()("".concat(c,"-grid"),a,n()({},"".concat(c,"-grid-hoverable"),r));return o.createElement("div",l()({},s,{className:d}))}))},p=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},h=function(e){return o.createElement(m.a,null,(function(t){var a=t.getPrefixCls,c=e.prefixCls,n=e.className,r=e.avatar,s=e.title,d=e.description,m=p(e,["prefixCls","className","avatar","title","description"]),b=a("card",c),u=i()("".concat(b,"-meta"),n),h=r?o.createElement("div",{className:"".concat(b,"-meta-avatar")},r):null,j=s?o.createElement("div",{className:"".concat(b,"-meta-title")},s):null,v=d?o.createElement("div",{className:"".concat(b,"-meta-description")},d):null,x=j||v?o.createElement("div",{className:"".concat(b,"-meta-detail")},j,v):null;return o.createElement("div",l()({},m,{className:u}),h,x)}))},j=a(553),v=a(546),x=a(547),f=a(83),g=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a};var O=function(e){var t,a,c,r=o.useContext(m.b),s=r.getPrefixCls,b=r.direction,p=o.useContext(f.b),h=e.prefixCls,O=e.className,y=e.extra,E=e.headStyle,C=void 0===E?{}:E,N=e.bodyStyle,w=void 0===N?{}:N,F=e.title,S=e.loading,z=e.bordered,k=void 0===z||z,A=e.size,P=e.type,D=e.cover,T=e.actions,B=e.tabList,H=e.children,M=e.activeTabKey,K=e.defaultActiveTabKey,U=e.tabBarExtraContent,I=e.hoverable,L=e.tabProps,W=void 0===L?{}:L,G=g(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),R=s("card",h),J=0===w.padding||"0px"===w.padding?{padding:24}:void 0,V=o.createElement("div",{className:"".concat(R,"-loading-block")}),q=o.createElement("div",{className:"".concat(R,"-loading-content"),style:J},o.createElement(v.a,{gutter:8},o.createElement(x.a,{span:22},V)),o.createElement(v.a,{gutter:8},o.createElement(x.a,{span:8},V),o.createElement(x.a,{span:15},V)),o.createElement(v.a,{gutter:8},o.createElement(x.a,{span:6},V),o.createElement(x.a,{span:18},V)),o.createElement(v.a,{gutter:8},o.createElement(x.a,{span:13},V),o.createElement(x.a,{span:9},V)),o.createElement(v.a,{gutter:8},o.createElement(x.a,{span:4},V),o.createElement(x.a,{span:3},V),o.createElement(x.a,{span:16},V))),Q=void 0!==M,X=l()(l()({},W),(t={},n()(t,Q?"activeKey":"defaultActiveKey",Q?M:K),n()(t,"tabBarExtraContent",U),t)),Y=B&&B.length?o.createElement(j.a,l()({size:"large"},X,{className:"".concat(R,"-head-tabs"),onChange:function(t){e.onTabChange&&e.onTabChange(t)}}),B.map((function(e){return o.createElement(j.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(F||y||Y)&&(c=o.createElement("div",{className:"".concat(R,"-head"),style:C},o.createElement("div",{className:"".concat(R,"-head-wrapper")},F&&o.createElement("div",{className:"".concat(R,"-head-title")},F),y&&o.createElement("div",{className:"".concat(R,"-extra")},y)),Y));var Z=D?o.createElement("div",{className:"".concat(R,"-cover")},D):null,$=o.createElement("div",{className:"".concat(R,"-body"),style:w},S?q:H),_=T&&T.length?o.createElement("ul",{className:"".concat(R,"-actions")},function(e){return e.map((function(t,a){return o.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},o.createElement("span",null,t))}))}(T)):null,ee=Object(d.a)(G,["onTabChange"]),te=A||p,ae=i()(R,(a={},n()(a,"".concat(R,"-loading"),S),n()(a,"".concat(R,"-bordered"),k),n()(a,"".concat(R,"-hoverable"),I),n()(a,"".concat(R,"-contain-grid"),function(){var t;return o.Children.forEach(e.children,(function(e){e&&e.type&&e.type===u&&(t=!0)})),t}()),n()(a,"".concat(R,"-contain-tabs"),B&&B.length),n()(a,"".concat(R,"-").concat(te),te),n()(a,"".concat(R,"-type-").concat(P),!!P),n()(a,"".concat(R,"-rtl"),"rtl"===b),a),O);return o.createElement("div",l()({},ee,{className:ae}),c,Z,$,_)};O.Grid=u,O.Meta=h;t.a=O},591:function(e,t,a){"use strict";a.r(t);a(0);var c=a(3);t.default=function(e){var t=e.name,a=e.desc;return Object(c.jsxs)("div",{className:"mb-3",children:[Object(c.jsxs)("span",{className:"font-weight-bold text-dark",children:[t,":"]}),Object(c.jsxs)("span",{className:"text-gray-light",children:[" ",a]})]})}},611:function(e,t,a){"use strict";t.a={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}}}]);
//# sourceMappingURL=21.c338974c.chunk.js.map