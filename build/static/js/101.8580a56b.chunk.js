(this.webpackJsonpGreatLakes=this.webpackJsonpGreatLakes||[]).push([[101],{309:function(e,t,c){"use strict";var n=c(7),r=c.n(n),a=c(5),o=c.n(a),s=c(70),i=c.n(s),l=c(0),u=c(6),f=c.n(u),d=c(588),p=c(72),m=function(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(c[n[r]]=e[n[r]])}return c};var b=["xs","sm","md","lg","xl","xxl"],j=l.forwardRef((function(e,t){var c,n=l.useContext(p.b),a=n.getPrefixCls,s=n.direction,u=l.useContext(d.a),j=u.gutter,h=u.wrap,x=e.prefixCls,g=e.span,y=e.order,O=e.offset,v=e.push,w=e.pull,N=e.className,C=e.children,P=e.flex,k=e.style,E=m(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),A=a("col",x),R={};b.forEach((function(t){var c,n={},a=e[t];"number"===typeof a?n.span=a:"object"===i()(a)&&(n=a||{}),delete E[t],R=o()(o()({},R),(c={},r()(c,"".concat(A,"-").concat(t,"-").concat(n.span),void 0!==n.span),r()(c,"".concat(A,"-").concat(t,"-order-").concat(n.order),n.order||0===n.order),r()(c,"".concat(A,"-").concat(t,"-offset-").concat(n.offset),n.offset||0===n.offset),r()(c,"".concat(A,"-").concat(t,"-push-").concat(n.push),n.push||0===n.push),r()(c,"".concat(A,"-").concat(t,"-pull-").concat(n.pull),n.pull||0===n.pull),r()(c,"".concat(A,"-rtl"),"rtl"===s),c))}));var S=f()(A,(c={},r()(c,"".concat(A,"-").concat(g),void 0!==g),r()(c,"".concat(A,"-order-").concat(y),y),r()(c,"".concat(A,"-offset-").concat(O),O),r()(c,"".concat(A,"-push-").concat(v),v),r()(c,"".concat(A,"-pull-").concat(w),w),c),N,R),L=o()({},k);return j&&(L=o()(o()(o()({},j[0]>0?{paddingLeft:j[0]/2,paddingRight:j[0]/2}:{}),j[1]>0?{paddingTop:j[1]/2,paddingBottom:j[1]/2}:{}),L)),P&&(L.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(P),"auto"!==P||!1!==h||L.minWidth||(L.minWidth=0)),l.createElement("div",o()({},E,{style:L,className:S,ref:t}),C)}));j.displayName="Col",t.a=j},311:function(e,t,c){"use strict";var n=c(5),r=c.n(n),a=c(7),o=c.n(a),s=c(70),i=c.n(s),l=c(37),u=c.n(l),f=c(0),d=c(6),p=c.n(d),m=c(72),b=c(588),j=c(71),h=c(137),x=function(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(c[n[r]]=e[n[r]])}return c},g=(Object(j.a)("top","middle","bottom","stretch"),Object(j.a)("start","end","center","space-around","space-between"),f.forwardRef((function(e,t){var c,n=e.prefixCls,a=e.justify,s=e.align,l=e.className,d=e.style,j=e.children,g=e.gutter,y=void 0===g?0:g,O=e.wrap,v=x(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),w=f.useContext(m.b),N=w.getPrefixCls,C=w.direction,P=f.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),k=u()(P,2),E=k[0],A=k[1],R=f.useRef(y);f.useEffect((function(){var e=h.a.subscribe((function(e){var t=R.current||0;(!Array.isArray(t)&&"object"===i()(t)||Array.isArray(t)&&("object"===i()(t[0])||"object"===i()(t[1])))&&A(e)}));return function(){return h.a.unsubscribe(e)}}),[]);var S=N("row",n),L=function(){var e=[0,0];return(Array.isArray(y)?y:[y,0]).forEach((function(t,c){if("object"===i()(t))for(var n=0;n<h.b.length;n++){var r=h.b[n];if(E[r]&&void 0!==t[r]){e[c]=t[r];break}}else e[c]=t||0})),e}(),T=p()(S,(c={},o()(c,"".concat(S,"-no-wrap"),!1===O),o()(c,"".concat(S,"-").concat(a),a),o()(c,"".concat(S,"-").concat(s),s),o()(c,"".concat(S,"-rtl"),"rtl"===C),c),l),D=r()(r()(r()({},L[0]>0?{marginLeft:L[0]/-2,marginRight:L[0]/-2}:{}),L[1]>0?{marginTop:L[1]/-2,marginBottom:L[1]/2}:{}),d);return f.createElement(b.a.Provider,{value:{gutter:L,wrap:O}},f.createElement("div",r()({},v,{className:T,style:D,ref:t}),j))})));g.displayName="Row",t.a=g},3417:function(e,t,c){"use strict";c.r(t);c(0);var n=c(549),r=c(550),a=c(120),o=c(491),s=c(2),i=c(62),l=c(180),u=c(46),f=c(3);t.default=function(){var e=Object(u.c)((function(e){return e.theme.currentTheme}));return Object(f.jsx)("div",{className:"h-100 ".concat("light"===e?"bg-white":""),children:Object(f.jsxs)("div",{className:"container-fluid d-flex flex-column justify-content-between h-100 px-md-4 pb-md-4 pt-md-1",children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===e?"logo.png":"logo-white.png"),alt:""})}),Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)(n.a,{align:"middle",children:[Object(f.jsxs)(r.a,{xs:24,sm:24,md:8,children:[Object(f.jsx)("h1",{className:"font-weight-bold mb-4 display-4",children:"Page not found"}),Object(f.jsx)("p",{className:"font-size-md mb-4",children:"We've noticed you lost your way, no worries, we will help you to found the correct path."}),Object(f.jsx)(i.c,{to:"/app",children:Object(f.jsx)(a.a,{type:"primary",icon:Object(f.jsx)(o.a,{}),children:"Go back"})})]}),Object(f.jsx)(r.a,{xs:24,sm:24,md:{span:14,offset:2},children:Object(f.jsx)("img",{className:"img-fluid mt-md-0 mt-4",src:"/img/others/img-20.png",alt:""})})]})}),Object(f.jsxs)(l.a,{mobileFlex:!1,justifyContent:"between",children:[Object(f.jsxs)("span",{children:["Copyright  \xa9  ","".concat((new Date).getFullYear())," ",Object(f.jsx)("span",{className:"font-weight-semibold",children:"".concat(s.b)})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("a",{className:"text-gray",href:"/#",onClick:function(e){return e.preventDefault()},children:"Term & Conditions"}),Object(f.jsx)("span",{className:"mx-2 text-muted",children:" | "}),Object(f.jsx)("a",{className:"text-gray",href:"/#",onClick:function(e){return e.preventDefault()},children:"Privacy & Policy"})]})]})]})})}},549:function(e,t,c){"use strict";var n=c(311);t.a=n.a},550:function(e,t,c){"use strict";var n=c(309);t.a=n.a},588:function(e,t,c){"use strict";var n=c(0),r=Object(n.createContext)({});t.a=r}}]);
//# sourceMappingURL=101.8580a56b.chunk.js.map