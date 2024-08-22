(this.webpackJsonpGreatLakes=this.webpackJsonpGreatLakes||[]).push([[23,41],{1404:function(e,t,a){"use strict";var n=a(4),c=a(30),o=a(0),r=a(6),l=a.n(r),s=a(88),i=o.forwardRef((function(e,t){var a=e.className,r=e.component,i=e.viewBox,d=e.spin,m=e.rotate,p=e.tabIndex,b=e.onClick,u=e.children,h=Object(c.a)(e,["className","component","viewBox","spin","rotate","tabIndex","onClick","children"]);Object(s.g)(Boolean(r||u),"Should have `component` prop or `children`."),Object(s.f)();var f=l()("anticon",a),v=l()({"anticon-spin":!!d}),g=m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0,j=Object(n.a)(Object(n.a)({},s.e),{},{className:v,style:g,viewBox:i});i||delete j.viewBox;var x=p;return void 0===x&&b&&(x=-1),o.createElement("span",Object.assign({role:"img"},h,{ref:t,tabIndex:x,onClick:b,className:f}),r?o.createElement(r,Object.assign({},j),u):u?(Object(s.g)(Boolean(i)||1===o.Children.count(u)&&o.isValidElement(u)&&"use"===o.Children.only(u).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),o.createElement("svg",Object.assign({},j,{viewBox:i}),u)):null)}));i.displayName="AntdIcon",t.a=i},1632:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(1404),r=a(3),l=c.a.forwardRef((function(e,t){return Object(r.jsx)(o.a,{component:e.svg,className:e.className})})),s=a(591),i=a(1620),d=a(611),m=a(555),p=function(){return Object(r.jsx)(l,{className:"text-primary font-size-xl",svg:function(){return Object(r.jsx)("svg",{width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 1024 1024",children:Object(r.jsx)("path",{d:"M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z"})})}})};t.default=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"CustomIcon"}),Object(r.jsxs)("div",{className:"mt-4",children:[Object(r.jsx)(s.default,{name:"Location",desc:"src/components/util-components/CustomIcon.js"}),Object(r.jsx)(s.default,{name:"Description",desc:"Custom allow you to use custom icon in this template"})]}),Object(r.jsxs)("div",{className:"mt-4",children:[Object(r.jsxs)(m.a,{title:"Example",children:[Object(r.jsx)(p,{}),Object(r.jsx)("div",{className:"mt-4",children:Object(r.jsx)(i.a,{className:"hl-code",language:"jsx",style:d.a,children:'import React from \'react\'\nimport CustomIcon from \'components/util-components/CustomIcon\'\n\nexport default const Demo = () => {\n\n\tconst HeartSvg = () => (\n\t\t<svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">\n\t\t\t<path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3\n\t\t\t \t0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9\n\t\t\t\t6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 \n\t\t\t\t68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7\n\t\t\t\t15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 \n\t\t\t\t48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" \n\t\t\t/>\n\t\t</svg>\n\t);\n\n\treturn (\n\t\t<CustomIcon className="text-primary font-size-xl" svg={HeartSvg} />\n\t)\n}'})})]}),Object(r.jsx)("h4",{className:"mt-4",children:"Props"}),Object(r.jsx)("div",{className:"api-container border-0 p-0",children:Object(r.jsxs)("table",{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Property"}),Object(r.jsx)("th",{children:"Description"}),Object(r.jsx)("th",{children:"Type"})]})}),Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"svg"}),Object(r.jsx)("td",{children:"SVG content"}),Object(r.jsx)("td",{children:"string"})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"className"}),Object(r.jsx)("td",{children:"CSS class"}),Object(r.jsx)("td",{children:"string"})]})]})]})})]})]})}},555:function(e,t,a){"use strict";var n=a(7),c=a.n(n),o=a(5),r=a.n(o),l=a(0),s=a(6),i=a.n(s),d=a(45),m=a(72),p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},b=function(e){var t=e.prefixCls,a=e.className,n=e.hoverable,o=void 0===n||n,s=p(e,["prefixCls","className","hoverable"]);return l.createElement(m.a,null,(function(e){var n=(0,e.getPrefixCls)("card",t),d=i()("".concat(n,"-grid"),a,c()({},"".concat(n,"-grid-hoverable"),o));return l.createElement("div",r()({},s,{className:d}))}))},u=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},h=function(e){return l.createElement(m.a,null,(function(t){var a=t.getPrefixCls,n=e.prefixCls,c=e.className,o=e.avatar,s=e.title,d=e.description,m=u(e,["prefixCls","className","avatar","title","description"]),p=a("card",n),b=i()("".concat(p,"-meta"),c),h=o?l.createElement("div",{className:"".concat(p,"-meta-avatar")},o):null,f=s?l.createElement("div",{className:"".concat(p,"-meta-title")},s):null,v=d?l.createElement("div",{className:"".concat(p,"-meta-description")},d):null,g=f||v?l.createElement("div",{className:"".concat(p,"-meta-detail")},f,v):null;return l.createElement("div",r()({},m,{className:b}),h,g)}))},f=a(553),v=a(546),g=a(547),j=a(83),x=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};var y=function(e){var t,a,n,o=l.useContext(m.b),s=o.getPrefixCls,p=o.direction,u=l.useContext(j.b),h=e.prefixCls,y=e.className,O=e.extra,C=e.headStyle,E=void 0===C?{}:C,N=e.bodyStyle,w=void 0===N?{}:N,F=e.title,S=e.loading,k=e.bordered,B=void 0===k||k,z=e.size,P=e.type,A=e.cover,I=e.actions,T=e.tabList,D=e.children,H=e.activeTabKey,M=e.defaultActiveTabKey,K=e.tabBarExtraContent,L=e.hoverable,R=e.tabProps,G=void 0===R?{}:R,W=x(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),J=s("card",h),V=0===w.padding||"0px"===w.padding?{padding:24}:void 0,q=l.createElement("div",{className:"".concat(J,"-loading-block")}),Q=l.createElement("div",{className:"".concat(J,"-loading-content"),style:V},l.createElement(v.a,{gutter:8},l.createElement(g.a,{span:22},q)),l.createElement(v.a,{gutter:8},l.createElement(g.a,{span:8},q),l.createElement(g.a,{span:15},q)),l.createElement(v.a,{gutter:8},l.createElement(g.a,{span:6},q),l.createElement(g.a,{span:18},q)),l.createElement(v.a,{gutter:8},l.createElement(g.a,{span:13},q),l.createElement(g.a,{span:9},q)),l.createElement(v.a,{gutter:8},l.createElement(g.a,{span:4},q),l.createElement(g.a,{span:3},q),l.createElement(g.a,{span:16},q))),U=void 0!==H,X=r()(r()({},G),(t={},c()(t,U?"activeKey":"defaultActiveKey",U?H:M),c()(t,"tabBarExtraContent",K),t)),Y=T&&T.length?l.createElement(f.a,r()({size:"large"},X,{className:"".concat(J,"-head-tabs"),onChange:function(t){e.onTabChange&&e.onTabChange(t)}}),T.map((function(e){return l.createElement(f.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(F||O||Y)&&(n=l.createElement("div",{className:"".concat(J,"-head"),style:E},l.createElement("div",{className:"".concat(J,"-head-wrapper")},F&&l.createElement("div",{className:"".concat(J,"-head-title")},F),O&&l.createElement("div",{className:"".concat(J,"-extra")},O)),Y));var Z=A?l.createElement("div",{className:"".concat(J,"-cover")},A):null,$=l.createElement("div",{className:"".concat(J,"-body"),style:w},S?Q:D),_=I&&I.length?l.createElement("ul",{className:"".concat(J,"-actions")},function(e){return e.map((function(t,a){return l.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},l.createElement("span",null,t))}))}(I)):null,ee=Object(d.a)(W,["onTabChange"]),te=z||u,ae=i()(J,(a={},c()(a,"".concat(J,"-loading"),S),c()(a,"".concat(J,"-bordered"),B),c()(a,"".concat(J,"-hoverable"),L),c()(a,"".concat(J,"-contain-grid"),function(){var t;return l.Children.forEach(e.children,(function(e){e&&e.type&&e.type===b&&(t=!0)})),t}()),c()(a,"".concat(J,"-contain-tabs"),T&&T.length),c()(a,"".concat(J,"-").concat(te),te),c()(a,"".concat(J,"-type-").concat(P),!!P),c()(a,"".concat(J,"-rtl"),"rtl"===p),a),y);return l.createElement("div",r()({},ee,{className:ae}),n,Z,$,_)};y.Grid=b,y.Meta=h;t.a=y},591:function(e,t,a){"use strict";a.r(t);a(0);var n=a(3);t.default=function(e){var t=e.name,a=e.desc;return Object(n.jsxs)("div",{className:"mb-3",children:[Object(n.jsxs)("span",{className:"font-weight-bold text-dark",children:[t,":"]}),Object(n.jsxs)("span",{className:"text-gray-light",children:[" ",a]})]})}},611:function(e,t,a){"use strict";t.a={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}}}]);
//# sourceMappingURL=23.97a35c40.chunk.js.map