(this.webpackJsonpGreatLakes=this.webpackJsonpGreatLakes||[]).push([[15],{1038:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c}));var o=n(100),r=n.n(o),i=n(31);function a(t){var e,n=function(n){return function(){e=null,t.apply(void 0,r()(n))}},o=function(){if(null==e){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];e=Object(i.a)(n(o))}};return o.cancel=function(){return i.a.cancel(e)},o}function c(){return function(t,e,n){var o=n.value,r=!1;return{configurable:!0,get:function(){if(r||this===t.prototype||this.hasOwnProperty(e))return o;var n=a(o.bind(this));return r=!0,Object.defineProperty(this,e,{value:n,configurable:!0,writable:!0}),r=!1,n}}}}},1409:function(t,e,n){"use strict";var o=n(5),r=n.n(o),i=n(7),a=n.n(i),c=n(44),s=n.n(c),l=n(50),f=n.n(l),u=n(51),p=n.n(u),d=n(52),h=n.n(d),v=n(74),g=n.n(v),m=n(0),y=n(6),x=n.n(y),b=n(45),k=n(94),w=n(70),C=n(1038),O=n(113);function T(t){return t!==window?t.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function E(t,e,n){if(void 0!==n&&e.top>t.top-n)return n+e.top}function L(t,e,n){if(void 0!==n&&e.bottom<t.bottom+n)return n+(window.innerHeight-e.bottom)}var N=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],P=[];function j(t,e){if(t){var n=P.find((function(e){return e.target===t}));n?n.affixList.push(e):(n={target:t,affixList:[e],eventHandlers:{}},P.push(n),N.forEach((function(e){n.eventHandlers[e]=Object(O.a)(t,e,(function(){n.affixList.forEach((function(t){t.lazyUpdatePosition()}))}))})))}}function S(t){var e=P.find((function(e){var n=e.affixList.some((function(e){return e===t}));return n&&(e.affixList=e.affixList.filter((function(e){return e!==t}))),n}));e&&0===e.affixList.length&&(P=P.filter((function(t){return t!==e})),N.forEach((function(t){var n=e.eventHandlers[t];n&&n.remove&&n.remove()})))}var A,R=function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===("undefined"===typeof Reflect?"undefined":g()(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};function B(){return"undefined"!==typeof window?window:null}!function(t){t[t.None=0]="None",t[t.Prepare=1]="Prepare"}(A||(A={}));var D=function(t){p()(n,t);var e=h()(n);function n(){var t;return s()(this,n),(t=e.apply(this,arguments)).state={status:A.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var e=t.props.offsetBottom,n=t.props.offsetTop;return void 0===e&&void 0===n&&(n=0),n},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(e){t.placeholderNode=e},t.saveFixedNode=function(e){t.fixedNode=e},t.measure=function(){var e=t.state,n=e.status,o=e.lastAffix,r=t.props.onChange,i=t.getTargetFunc();if(n===A.Prepare&&t.fixedNode&&t.placeholderNode&&i){var a=t.getOffsetTop(),c=t.getOffsetBottom(),s=i();if(s){var l={status:A.None},f=T(s),u=T(t.placeholderNode),p=E(u,f,a),d=L(u,f,c);void 0!==p?(l.affixStyle={position:"fixed",top:p,width:u.width,height:u.height},l.placeholderStyle={width:u.width,height:u.height}):void 0!==d&&(l.affixStyle={position:"fixed",bottom:d,width:u.width,height:u.height},l.placeholderStyle={width:u.width,height:u.height}),l.lastAffix=!!l.affixStyle,r&&o!==l.lastAffix&&r(l.lastAffix),t.setState(l)}}},t.prepareMeasure=function(){t.setState({status:A.Prepare,affixStyle:void 0,placeholderStyle:void 0})},t.render=function(){var e=t.context.getPrefixCls,n=t.state,o=n.affixStyle,i=n.placeholderStyle,c=t.props,s=c.prefixCls,l=c.children,f=x()(a()({},e("affix",s),o)),u=Object(b.a)(t.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return m.createElement(k.a,{onResize:function(){t.updatePosition()}},m.createElement("div",r()({},u,{ref:t.savePlaceholderNode}),o&&m.createElement("div",{style:i,"aria-hidden":"true"}),m.createElement("div",{className:f,ref:t.saveFixedNode,style:o},m.createElement(k.a,{onResize:function(){t.updatePosition()}},l))))},t}return f()(n,[{key:"getTargetFunc",value:function(){var t=this.context.getTargetContainer,e=this.props.target;return void 0!==e?e:t||B}},{key:"componentDidMount",value:function(){var t=this,e=this.getTargetFunc();e&&(this.timeout=setTimeout((function(){j(e(),t),t.updatePosition()})))}},{key:"componentDidUpdate",value:function(t){var e=this.state.prevTarget,n=this.getTargetFunc(),o=null;n&&(o=n()||null),e!==o&&(S(this),o&&(j(o,this),this.updatePosition()),this.setState({prevTarget:o})),t.offsetTop===this.props.offsetTop&&t.offsetBottom===this.props.offsetBottom||this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),S(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var t=this.getTargetFunc(),e=this.state.affixStyle;if(t&&e){var n=this.getOffsetTop(),o=this.getOffsetBottom(),r=t();if(r&&this.placeholderNode){var i=T(r),a=T(this.placeholderNode),c=E(a,i,n),s=L(a,i,o);if(void 0!==c&&e.top===c||void 0!==s&&e.bottom===s)return}}this.prepareMeasure()}}]),n}(m.Component);D.contextType=w.b,R([Object(C.b)()],D.prototype,"updatePosition",null),R([Object(C.b)()],D.prototype,"lazyUpdatePosition",null);e.a=D},299:function(t,e,n){"use strict";var o=n(7),r=n.n(o),i=n(5),a=n.n(i),c=n(74),s=n.n(c),l=n(0),f=n(6),u=n.n(f),p=n(575),d=n(70),h=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n};var v=["xs","sm","md","lg","xl","xxl"],g=l.forwardRef((function(t,e){var n,o=l.useContext(d.b),i=o.getPrefixCls,c=o.direction,f=l.useContext(p.a),g=f.gutter,m=f.wrap,y=t.prefixCls,x=t.span,b=t.order,k=t.offset,w=t.push,C=t.pull,O=t.className,T=t.children,E=t.flex,L=t.style,N=h(t,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),P=i("col",y),j={};v.forEach((function(e){var n,o={},i=t[e];"number"===typeof i?o.span=i:"object"===s()(i)&&(o=i||{}),delete N[e],j=a()(a()({},j),(n={},r()(n,"".concat(P,"-").concat(e,"-").concat(o.span),void 0!==o.span),r()(n,"".concat(P,"-").concat(e,"-order-").concat(o.order),o.order||0===o.order),r()(n,"".concat(P,"-").concat(e,"-offset-").concat(o.offset),o.offset||0===o.offset),r()(n,"".concat(P,"-").concat(e,"-push-").concat(o.push),o.push||0===o.push),r()(n,"".concat(P,"-").concat(e,"-pull-").concat(o.pull),o.pull||0===o.pull),r()(n,"".concat(P,"-rtl"),"rtl"===c),n))}));var S=u()(P,(n={},r()(n,"".concat(P,"-").concat(x),void 0!==x),r()(n,"".concat(P,"-order-").concat(b),b),r()(n,"".concat(P,"-offset-").concat(k),k),r()(n,"".concat(P,"-push-").concat(w),w),r()(n,"".concat(P,"-pull-").concat(C),C),n),O,j),A=a()({},L);return g&&(A=a()(a()(a()({},g[0]>0?{paddingLeft:g[0]/2,paddingRight:g[0]/2}:{}),g[1]>0?{paddingTop:g[1]/2,paddingBottom:g[1]/2}:{}),A)),E&&(A.flex=function(t){return"number"===typeof t?"".concat(t," ").concat(t," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(t)?"0 0 ".concat(t):t}(E),"auto"!==E||!1!==m||A.minWidth||(A.minWidth=0)),l.createElement("div",a()({},N,{style:A,className:S,ref:e}),T)}));g.displayName="Col",e.a=g},301:function(t,e,n){"use strict";var o=n(5),r=n.n(o),i=n(7),a=n.n(i),c=n(74),s=n.n(c),l=n(36),f=n.n(l),u=n(0),p=n(6),d=n.n(p),h=n(70),v=n(575),g=n(69),m=n(137),y=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n},x=(Object(g.a)("top","middle","bottom","stretch"),Object(g.a)("start","end","center","space-around","space-between"),u.forwardRef((function(t,e){var n,o=t.prefixCls,i=t.justify,c=t.align,l=t.className,p=t.style,g=t.children,x=t.gutter,b=void 0===x?0:x,k=t.wrap,w=y(t,["prefixCls","justify","align","className","style","children","gutter","wrap"]),C=u.useContext(h.b),O=C.getPrefixCls,T=C.direction,E=u.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),L=f()(E,2),N=L[0],P=L[1],j=u.useRef(b);u.useEffect((function(){var t=m.a.subscribe((function(t){var e=j.current||0;(!Array.isArray(e)&&"object"===s()(e)||Array.isArray(e)&&("object"===s()(e[0])||"object"===s()(e[1])))&&P(t)}));return function(){return m.a.unsubscribe(t)}}),[]);var S=O("row",o),A=function(){var t=[0,0];return(Array.isArray(b)?b:[b,0]).forEach((function(e,n){if("object"===s()(e))for(var o=0;o<m.b.length;o++){var r=m.b[o];if(N[r]&&void 0!==e[r]){t[n]=e[r];break}}else t[n]=e||0})),t}(),R=d()(S,(n={},a()(n,"".concat(S,"-no-wrap"),!1===k),a()(n,"".concat(S,"-").concat(i),i),a()(n,"".concat(S,"-").concat(c),c),a()(n,"".concat(S,"-rtl"),"rtl"===T),n),l),B=r()(r()(r()({},A[0]>0?{marginLeft:A[0]/-2,marginRight:A[0]/-2}:{}),A[1]>0?{marginTop:A[1]/-2,marginBottom:A[1]/2}:{}),p);return u.createElement(v.a.Provider,{value:{gutter:A,wrap:k}},u.createElement("div",r()({},w,{className:R,style:B,ref:e}),g))})));x.displayName="Row",e.a=x},3353:function(t,e,n){"use strict";var o=n(5),r=n.n(o),i=n(7),a=n.n(i),c=n(44),s=n.n(c),l=n(50),f=n.n(l),u=n(136),p=n.n(u),d=n(51),h=n.n(d),v=n(52),g=n.n(v),m=n(0),y=n(6),x=n.n(y),b=n(113),k=n(1409),w=n(70),C=n(509),O=n(507),T=m.createContext(null);function E(){return window}function L(t,e){if(!t.getClientRects().length)return 0;var n=t.getBoundingClientRect();return n.width||n.height?e===window?(e=t.ownerDocument.documentElement,n.top-e.clientTop):n.top-e.getBoundingClientRect().top:n.top}var N=/#(\S+)$/,P=function(t){h()(n,t);var e=g()(n);function n(){var t;return s()(this,n),(t=e.apply(this,arguments)).state={activeLink:null},t.wrapperRef=m.createRef(),t.links=[],t.registerLink=function(e){t.links.includes(e)||t.links.push(e)},t.unregisterLink=function(e){var n=t.links.indexOf(e);-1!==n&&t.links.splice(n,1)},t.getContainer=function(){var e=t.context.getTargetContainer;return(t.props.getContainer||e||E)()},t.handleScrollTo=function(e){var n=t.props,o=n.offsetTop,r=n.targetOffset;t.setCurrentActiveLink(e);var i=t.getContainer(),a=Object(O.a)(i,!0),c=N.exec(e);if(c){var s=document.getElementById(c[1]);if(s){var l=a+L(s,i);l-=void 0!==r?r:o||0,t.animating=!0,Object(C.a)(l,{callback:function(){t.animating=!1},getContainer:t.getContainer})}}},t.saveInkNode=function(e){t.inkNode=e},t.setCurrentActiveLink=function(e){var n=t.state.activeLink,o=t.props.onChange;n!==e&&(t.setState({activeLink:e}),o&&o(e))},t.handleScroll=function(){if(!t.animating){var e=t.props,n=e.offsetTop,o=e.bounds,r=e.targetOffset,i=t.getCurrentAnchor(void 0!==r?r:n||0,o);t.setCurrentActiveLink(i)}},t.updateInk=function(){var e=p()(t),n=e.prefixCls,o=e.wrapperRef.current,r=null===o||void 0===o?void 0:o.getElementsByClassName("".concat(n,"-link-title-active"))[0];r&&(t.inkNode.style.top="".concat(r.offsetTop+r.clientHeight/2-4.5,"px"))},t.render=function(){var e=t.context,n=e.getPrefixCls,o=e.direction,i=t.props,c=i.prefixCls,s=i.className,l=void 0===s?"":s,f=i.style,u=i.offsetTop,p=i.affix,d=i.showInkInFixed,h=i.children,v=t.state.activeLink,g=n("anchor",c);t.prefixCls=g;var y=x()("".concat(g,"-ink-ball"),{visible:v}),b=x()("".concat(g,"-wrapper"),a()({},"".concat(g,"-rtl"),"rtl"===o),l),w=x()(g,{fixed:!p&&!d}),C=r()({maxHeight:u?"calc(100vh - ".concat(u,"px)"):"100vh"},f),O=m.createElement("div",{ref:t.wrapperRef,className:b,style:C},m.createElement("div",{className:w},m.createElement("div",{className:"".concat(g,"-ink")},m.createElement("span",{className:y,ref:t.saveInkNode})),h));return m.createElement(T.Provider,{value:{registerLink:t.registerLink,unregisterLink:t.unregisterLink,activeLink:t.state.activeLink,scrollTo:t.handleScrollTo,onClick:t.props.onClick}},p?m.createElement(k.a,{offsetTop:u,target:t.getContainer},O):O)},t}return f()(n,[{key:"componentDidMount",value:function(){this.scrollContainer=this.getContainer(),this.scrollEvent=Object(b.a)(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll()}},{key:"componentDidUpdate",value:function(){if(this.scrollEvent){var t=this.getContainer();this.scrollContainer!==t&&(this.scrollContainer=t,this.scrollEvent.remove(),this.scrollEvent=Object(b.a)(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll())}this.updateInk()}},{key:"componentWillUnmount",value:function(){this.scrollEvent&&this.scrollEvent.remove()}},{key:"getCurrentAnchor",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=this.props.getCurrentAnchor;if("function"===typeof n)return n();var o=[],r=this.getContainer();if(this.links.forEach((function(n){var i=N.exec(n.toString());if(i){var a=document.getElementById(i[1]);if(a){var c=L(a,r);c<t+e&&o.push({link:n,top:c})}}})),o.length){var i=o.reduce((function(t,e){return e.top>t.top?e:t}));return i.link}return""}}]),n}(m.Component);P.defaultProps={affix:!0,showInkInFixed:!1},P.contextType=w.b;var j=function(t){h()(n,t);var e=g()(n);function n(){var t;return s()(this,n),(t=e.apply(this,arguments)).handleClick=function(e){var n=t.context,o=n.scrollTo,r=n.onClick,i=t.props,a=i.href,c=i.title;r&&r(e,{title:c,href:a}),o(a)},t.renderAnchorLink=function(e){var n=e.getPrefixCls,o=t.props,r=o.prefixCls,i=o.href,c=o.title,s=o.children,l=o.className,f=o.target,u=n("anchor",r),p=t.context.activeLink===i,d=x()("".concat(u,"-link"),a()({},"".concat(u,"-link-active"),p),l),h=x()("".concat(u,"-link-title"),a()({},"".concat(u,"-link-title-active"),p));return m.createElement("div",{className:d},m.createElement("a",{className:h,href:i,title:"string"===typeof c?c:"",target:f,onClick:t.handleClick},c),s)},t}return f()(n,[{key:"componentDidMount",value:function(){this.context.registerLink(this.props.href)}},{key:"componentDidUpdate",value:function(t){var e=t.href,n=this.props.href;e!==n&&(this.context.unregisterLink(e),this.context.registerLink(n))}},{key:"componentWillUnmount",value:function(){this.context.unregisterLink(this.props.href)}},{key:"render",value:function(){return m.createElement(w.a,null,this.renderAnchorLink)}}]),n}(m.Component);j.defaultProps={href:"#"},j.contextType=T;var S=j;P.Link=S;e.a=P},507:function(t,e,n){"use strict";function o(t){return null!==t&&void 0!==t&&t===t.window}function r(t,e){if("undefined"===typeof window)return 0;var n=e?"scrollTop":"scrollLeft",r=0;return o(t)?r=t[e?"pageYOffset":"pageXOffset"]:t instanceof Document?r=t.documentElement[n]:t&&(r=t[n]),t&&!o(t)&&"number"!==typeof r&&(r=(t.ownerDocument||t).documentElement[n]),r}n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r}))},509:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n(31),r=n(507);function i(t,e,n,o){var r=n-e;return(t/=o/2)<1?r/2*t*t*t+e:r/2*((t-=2)*t*t+2)+e}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.getContainer,a=void 0===n?function(){return window}:n,c=e.callback,s=e.duration,l=void 0===s?450:s,f=a(),u=Object(r.a)(f,!0),p=Date.now(),d=function e(){var n=Date.now()-p,a=i(n>l?l:n,u,t,l);Object(r.b)(f)?f.scrollTo(window.pageXOffset,a):f instanceof HTMLDocument||"HTMLDocument"===f.constructor.name?f.documentElement.scrollTop=a:f.scrollTop=a,n<l?Object(o.a)(e):"function"===typeof c&&c()};Object(o.a)(d)}},536:function(t,e,n){"use strict";var o=n(301);e.a=o.a},537:function(t,e,n){"use strict";var o=n(299);e.a=o.a},575:function(t,e,n){"use strict";var o=n(0),r=Object(o.createContext)({});e.a=r}}]);
//# sourceMappingURL=15.996d74f9.chunk.js.map