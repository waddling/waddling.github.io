(self.webpackChunkwaddling_github_io=self.webpackChunkwaddling_github_io||[]).push([[351],{2993:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(t)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(t[u],a[u]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=t.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(t[u]!==a[u])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(e&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!t.$$typeof)&&!i(t[l[u]],a[l[u]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return i(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},1046:function(t,e,n){"use strict";n.d(e,{w_:function(){return l},Pd:function(){return i}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},c=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function u(t){return t&&t.map((function(t,e){return r.createElement(t.tag,a({key:e},t.attr),u(t.child))}))}function l(t){return function(e){return r.createElement(s,a({attr:a({},t.attr)},e),u(t.child))}}function s(t){var e=function(e){var n,o=t.attr,i=t.size,u=t.title,l=c(t,["attr","size","title"]),s=i||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,l,{className:n,style:a(a({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),t.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(t){return e(t)})):e(o)}},4839:function(t,e,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=t(l.map((function(t){return t.props}))),f.canUseDOM?e(u):n&&(u=n(u))}var f=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,l=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var t=l.indexOf(this);l.splice(t,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},9226:function(t,e,n){"use strict";n.d(e,{tZ:function(){return r}});var r=n(5366).tZ},3618:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var r=n(7294),o=n(3431),i=n(1566),a=n(1512),c=n(9470),u=n(9226),l=n(5444),s=function(){var t=[{title:"About",slug:"/about"},{title:"Blog",slug:"/blog"}];return(0,u.tZ)(r.Fragment,null,t&&t.length>0&&(0,u.tZ)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontWeight:"300",fontSize:[1,"18px"],".active":{color:"heading"}}},t.map((function(t){return(0,u.tZ)(i.rU,{key:t.slug,as:l.Link,activeClassName:"active",to:t.slug},t.title)}))))},f=n(1046),p=n(3201),d=function(){var t=[{name:"Github",url:"https://github.com/waddling"},{name:"LinkedIn",url:"https://www.linkedin.com/in/yeonjunkim99/"},{name:"Twitch",url:"https://www.twitch.tv/waddlingwaddler"},{name:"Twitter",url:"https://twitter.com/theYeonAndOnly"},{name:"YouTube",url:"https://www.youtube.com/channel/UCnEr9C1WqFSy0n94YxSJ5Vg"}];return(0,u.tZ)(r.Fragment,null,t&&t.length>0&&(0,u.tZ)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:[1,"18px"]}},t.map((function(t){return(0,u.tZ)(i.rU,{key:t.url,href:t.url},(0,u.tZ)(f.Pd.Provider,{value:{style:{verticalAlign:"bottom"}}},function(t){switch(t){case"Github":return(0,u.tZ)(p.hJX,null);case"LinkedIn":return(0,u.tZ)(p.ltd,null);case"Twitch":return(0,u.tZ)(p.aWC,null);case"Twitter":return(0,u.tZ)(p.fWC,null);case"YouTube":return(0,u.tZ)(p.V2E,null);default:return(0,u.tZ)(p.g_g,null)}}(t.name)))}))))},h=function(t){var e=t.siteTitle;return(0,u.tZ)("header",{sx:{mb:[5,6]}},(0,u.tZ)(l.Link,{to:"/","aria-label":e+" - Back to home",sx:{color:"heading",textDecoration:"none"}},(0,u.tZ)("div",{sx:{my:0,fontFamily:"Quicksand",fontWeight:"normal",fontSize:[3,4]}},e)),(0,u.tZ)("div",{sx:{boxSizing:"border-box",display:"flex",variant:"dividers.bottom",alignItems:"center",justifyContent:"space-between",mt:3,color:"secondary",a:{color:"secondary",":hover":{color:"heading"}},flexFlow:"wrap"}},(0,u.tZ)(s,null),(0,u.tZ)(d,null)))},y=function(){var t=(0,a.Z)().name;return(0,u.tZ)("footer",{sx:{boxSizing:"border-box",display:"flex",justifyContent:"space-between",mt:[6],fontSize:"80%",color:"secondary",a:{variant:"links.secondary"},flexDirection:["column","column","row"],variant:"dividers.top"}},(0,u.tZ)("div",null,"© ",(new Date).getFullYear()," by ",t,". All rights reserved."),(0,u.tZ)("div",null,"Theme inspired by"," ",(0,u.tZ)(i.rU,{"aria-label":"Link to the theme author's website",href:"https://www.lekoarts.de/en"},"LekoArts"),"","."))},m=function(t){var e=t.children,n=t.className,u=void 0===n?"":n,l=(0,a.Z)().siteTitle;return r.createElement(r.Fragment,null,r.createElement(o.xB,{styles:function(t){return{"*":{boxSizing:"inherit"},html:{WebkitTextSizeAdjust:"100%"},img:{borderStyle:"none"},pre:{fontFamily:"monospace",fontSize:"1em"},"[hidden]":{display:"none"},"::selection":{backgroundColor:t.colors.text,color:t.colors.background},a:{transition:"all 0.3s ease-in-out",color:"text"}}}}),r.createElement(c.Z,null),r.createElement(i.W2,null,r.createElement(h,{siteTitle:l||"Title"}),r.createElement(i.xu,{className:u},r.createElement("main",null,e)),r.createElement(y,null)))}},9470:function(t,e,n){"use strict";n.d(e,{Z:function(){return bt}});var r,o,i,a,c=n(7294),u=n(5697),l=n.n(u),s=n(4839),f=n.n(s),p=n(2993),d=n.n(p),h=n(6494),y=n.n(h),m="bodyAttributes",b="htmlAttributes",v="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(g).map((function(t){return g[t]})),"charset"),T="cssText",O="href",C="http-equiv",A="innerHTML",S="itemprop",E="name",x="property",k="rel",j="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",Z="defer",N="encodeSpecialCharacters",M="onChangeClientState",_="titleTemplate",R=Object.keys(L).reduce((function(t,e){return t[L[e]]=e,t}),{}),z=[g.NOSCRIPT,g.SCRIPT,g.STYLE],F="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Y=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},q=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},H=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},W=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(t){var e=$(t,g.TITLE),n=$(t,_);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=$(t,I);return e||r||void 0},V=function(t){return $(t,M)||function(){}},G=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return U({},t,e)}),{})},J=function(t,e){return e.filter((function(t){return void 0!==t[g.BASE]})).map((function(t){return t[g.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},Q=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+D(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===e.indexOf(u)||n===k&&"canonical"===t[n].toLowerCase()||u===k&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(c)||c!==A&&c!==T&&c!==S||(n=c)}if(!n||!t[n])return!1;var l=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=y()({},r[c],o[c]);r[c]=u}return t}),[]).reverse()},$=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},X=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){X(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:n.g.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,it=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,l=t.scriptTags,s=t.styleTags,f=t.title,p=t.titleAttributes;ut(g.BODY,r),ut(g.HTML,o),ct(f,p);var d={baseTag:lt(g.BASE,n),linkTags:lt(g.LINK,i),metaTags:lt(g.META,a),noscriptTags:lt(g.NOSCRIPT,c),scriptTags:lt(g.SCRIPT,l),styleTags:lt(g.STYLE,s)},h={},y={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(y[t]=d[t].oldTags)})),e&&e(),u(t,h,y)},at=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ut(g.TITLE,e)},ut=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(F),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),c=0;c<a.length;c++){var u=a[c],l=e[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(F):n.getAttribute(F)!==a.join(",")&&n.setAttribute(F,a.join(","))}},lt=function(t,e){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===A)n.innerHTML=e.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute(F,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},st=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[L[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case g.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[F]=!0,o=ft(n,r),[c.createElement(g.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=st(n),i=at(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+W(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+W(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case m:case b:return{toComponent:function(){return ft(e)},toString:function(){return st(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[F]=!0,r);return Object.keys(e).forEach((function(t){var n=L[t]||t;if(n===A||n===T){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),c.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===A||t===T)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+W(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===z.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.scriptTags,l=t.styleTags,s=t.title,f=void 0===s?"":s,p=t.titleAttributes;return{base:pt(g.BASE,e,r),bodyAttributes:pt(m,n,r),htmlAttributes:pt(b,o,r),link:pt(g.LINK,i,r),meta:pt(g.META,a,r),noscript:pt(g.NOSCRIPT,c,r),script:pt(g.SCRIPT,u,r),style:pt(g.STYLE,l,r),title:pt(g.TITLE,{title:f,titleAttributes:p},r)}},ht=f()((function(t){return{baseTag:J([O,P],t),bodyAttributes:G(m,t),defer:$(t,Z),encode:$(t,N),htmlAttributes:G(b,t),linkTags:Q(g.LINK,[k,O],t),metaTags:Q(g.META,[E,w,C,x,S],t),noscriptTags:Q(g.NOSCRIPT,[A],t),onChangeClientState:V(t),scriptTags:Q(g.SCRIPT,[j,A],t),styleTags:Q(g.STYLE,[T],t),title:K(t),titleAttributes:G(v,t)}}),(function(t){ot&&nt(ot),t.defer?ot=et((function(){it(t,(function(){ot=null}))})):(it(t),ot=null)}),dt)((function(){return null})),yt=(o=ht,a=i=function(t){function e(){return B(this,e),H(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!d()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:e};case g.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return U({},r,((e={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case g.TITLE:return U({},o,((e={})[r.type]=a,e.titleAttributes=U({},i),e));case g.BODY:return U({},o,{bodyAttributes:U({},i)});case g.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((n={})[r.type]=U({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=U({},e);return Object.keys(t).forEach((function(e){var r;n=U({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return c.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[R[n]||n]=t[n],e}),e)}(q(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=q(t,["children"]),r=U({},n);return e&&(r=this.mapChildrenToProps(e,r)),c.createElement(o,r)},Y(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(c.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);yt.renderStatic=yt.rewind;var mt=n(1512),bt=function(t){var e=t.description,n=void 0===e?"":e,r=t.pathname,o=void 0===r?"":r,i=t.lang,a=void 0===i?"en":i,u=t.meta,l=t.title,s=void 0===l?"":l,f=t.children,p=void 0===f?null:f,d=(0,mt.Z)(),h=d.siteTitle,y=d.siteUrl,m=d.siteDescription,b=d.siteLanguage,v=d.author,g=(d.name,{title:s||h,description:n||m,url:""+y+(o||""),lang:a||b});return c.createElement(yt,{htmlAttributes:{lang:a},title:s,titleTemplate:h?"%s | "+h:void 0,meta:[{name:"description",content:g.description},{property:"og:title",content:g.title},{property:"og:url",content:g.url},{property:"og:description",content:g.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:v||""},{name:"twitter:title",content:g.title},{name:"twitter:description",content:g.description}].concat(u||[])},p)}},1512:function(t,e,n){"use strict";var r=n(5444);e.Z=function(){return(0,r.useStaticQuery)("1518425861").site.siteMetadata}}}]);
//# sourceMappingURL=commons-42cf97d09448ed766ad7.js.map