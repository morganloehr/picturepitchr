// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());




// Place any jQuery/helper plugins in here.

/*! VelocityJS.org (0.11.9). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
!function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e(window.Velocity?window.jQuery:require("jquery")):"function"==typeof define&&define.amd?window.Velocity?define(e):define(["jquery"],e):e(window.jQuery)}(function(e){return function(t,r,a,i){function o(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var i=e[t];i&&a.push(i)}return a}function n(e){return m.isNode(e)?[e]:e}function s(e){var t=$.data(e,"velocity");return null===t?i:t}function l(e){return function(t){return Math.round(t*e)*(1/e)}}function u(e,t,a,i){function o(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+n(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*n(t,r)*e+s(t)}function c(t,r){for(var i=0;m>i;++i){var o=u(r,e,a);if(0===o)return r;var n=l(r,e,a)-t;r-=n/o}return r}function p(){for(var t=0;x>t;++t)P[t]=l(t*b,e,a)}function d(t,r,i){var o,n,s=0;do n=r+(i-r)/2,o=l(n,e,a)-t,o>0?i=n:r=n;while(Math.abs(o)>h&&++s<v);return n}function f(t){for(var r=0,i=1,o=x-1;i!=o&&P[i]<=t;++i)r+=b;--i;var n=(t-P[i])/(P[i+1]-P[i]),s=r+n*b,l=u(s,e,a);return l>=y?c(t,s):0==l?s:d(t,r,r+b)}function g(){w=!0,(e!=t||a!=i)&&p()}var m=4,y=.001,h=1e-7,v=10,x=11,b=1/(x-1),S="Float32Array"in r;if(4!==arguments.length)return!1;for(var V=0;4>V;++V)if("number"!=typeof arguments[V]||isNaN(arguments[V])||!isFinite(arguments[V]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var P=S?new Float32Array(x):new Array(x),w=!1,C=function(r){return w||g(),e===t&&a===i?r:0===r?0:1===r?1:l(f(r),t,i)};C.getControlPoints=function(){return[{x:e,y:t},{x:a,y:i}]};var T="generateBezier("+[e,t,a,i]+")";return C.toString=function(){return T},C}function c(e,t){var r=e;return m.isString(e)?v.Easings[e]||(r=!1):r=m.isArray(e)&&1===e.length?l.apply(null,e):m.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):m.isArray(e)&&4===e.length?u.apply(null,e):!1,r===!1&&(r=v.Easings[v.defaults.easing]?v.defaults.easing:h),r}function p(e){if(e)for(var t=(new Date).getTime(),r=0,a=v.State.calls.length;a>r;r++)if(v.State.calls[r]){var o=v.State.calls[r],n=o[0],l=o[2],u=o[3];u||(u=v.State.calls[r][3]=t-16);for(var c=Math.min((t-u)/l.duration,1),g=0,y=n.length;y>g;g++){var h=n[g],x=h.element;if(s(x)){var S=!1;l.display!==i&&null!==l.display&&"none"!==l.display&&("flex"===l.display&&b.setPropertyValue(x,"display",(f?"-ms-":"-webkit-")+l.display),b.setPropertyValue(x,"display",l.display)),l.visibility&&"hidden"!==l.visibility&&b.setPropertyValue(x,"visibility",l.visibility);for(var P in h)if("element"!==P){var w=h[P],C,T=m.isString(w.easing)?v.Easings[w.easing]:w.easing;if(C=1===c?w.endValue:w.startValue+(w.endValue-w.startValue)*T(c),w.currentValue=C,b.Hooks.registered[P]){var k=b.Hooks.getRoot(P),A=s(x).rootPropertyValueCache[k];A&&(w.rootPropertyValue=A)}var E=b.setPropertyValue(x,P,w.currentValue+(0===parseFloat(C)?"":w.unitType),w.rootPropertyValue,w.scrollData);b.Hooks.registered[P]&&(s(x).rootPropertyValueCache[k]=b.Normalizations.registered[k]?b.Normalizations.registered[k]("extract",null,E[1]):E[1]),"transform"===E[0]&&(S=!0)}l.mobileHA&&s(x).transformCache.translate3d===i&&(s(x).transformCache.translate3d="(0px, 0px, 0px)",S=!0),S&&b.flushTransformCache(x)}}l.display!==i&&"none"!==l.display&&(v.State.calls[r][2].display=!1),l.visibility&&"hidden"!==l.visibility&&(v.State.calls[r][2].visibility=!1),l.progress&&l.progress.call(o[1],o[1],c,Math.max(0,u+l.duration-t),u),1===c&&d(r)}v.State.isTicking&&V(p)}function d(e,t){if(!v.State.calls[e])return!1;for(var r=v.State.calls[e][0],a=v.State.calls[e][1],o=v.State.calls[e][2],n=v.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&b.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&b.setPropertyValue(p,"visibility",o.visibility)),($.queue(p)[1]===i||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&s(p)){s(p).isAnimating=!1,s(p).rootPropertyValueCache={};var d=!1;$.each(b.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,a=s(p).transformCache[t];s(p).transformCache[t]!==i&&new RegExp("^\\("+r+"[^.]").test(a)&&(d=!0,delete s(p).transformCache[t])}),o.mobileHA&&(d=!0,delete s(p).transformCache.translate3d),d&&b.flushTransformCache(p),b.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(a,a)}catch(f){setTimeout(function(){throw f},1)}n&&o.loop!==!0&&n(a),o.loop!==!0||t||v(p,"reverse",{loop:!0,delay:o.delay}),o.queue!==!1&&$.dequeue(p,o.queue)}v.State.calls[e]=!1;for(var g=0,m=v.State.calls.length;m>g;g++)if(v.State.calls[g]!==!1){l=!0;break}l===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var f=function(){if(a.documentMode)return a.documentMode;for(var e=7;e>4;e--){var t=a.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return i}(),g=function(){var e=0;return r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==i&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||r.Zepto&&r.Zepto.zepto.isZ(e))},isSVG:function(e){return r.SVGElement&&e instanceof SVGElement},isEmptyObject:function(e){var t;for(t in e)return!1;return!0}},$;if(e&&e.fn!==i?$=e:r.Velocity&&r.Velocity.Utilities&&($=r.Velocity.Utilities),!$)throw new Error("Velocity: Either jQuery or Velocity's jQuery shim must first be loaded.");if(t.Velocity!==i&&t.Velocity.Utilities==i)throw new Error("Velocity: Namespace is occupied.");if(7>=f){if(e)return void(e.fn.velocity=e.fn.animate);throw new Error("Velocity: In IE<=7, Velocity falls back to jQuery, which must first be loaded.")}if(8===f&&!e)throw new Error("Velocity: In IE8, Velocity requires jQuery proper to be loaded; Velocity's jQuery shim does not work with IE8.");var y=400,h="swing",v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:r.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:a.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Sequences:{},Easings:{},Promise:r.Promise,defaults:{queue:"",duration:y,easing:h,begin:null,complete:null,progress:null,display:i,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,"velocity",{isSVG:m.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},animate:null,hook:null,mock:!1,version:{major:0,minor:11,patch:9},debug:!1};r.pageYOffset!==i?(v.State.scrollAnchor=r,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=a.documentElement||a.body.parentNode||a.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop");var x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var i={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:i.v,dv:e(i)}}function r(r,a){var i={dx:r.v,dv:e(r)},o=t(r,.5*a,i),n=t(r,.5*a,o),s=t(r,a,n),l=1/6*(i.dx+2*(o.dx+n.dx)+s.dx),u=1/6*(i.dv+2*(o.dv+n.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,i){var o={x:-1,v:0,tension:null,friction:null},n=[0],s=0,l=1e-4,u=.016,c,p,d;for(e=parseFloat(e)||500,t=parseFloat(t)||20,i=i||null,o.tension=e,o.friction=t,c=null!==i,c?(s=a(e,t),p=s/i*u):p=u;;)if(d=r(d||o,p),n.push(1+d.x),s+=16,!(Math.abs(d.x)>l&&Math.abs(d.v)>l))break;return c?function(e){return n[e*(n.length-1)|0]}:s}}();v.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},$.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){v.Easings[t[0]]=u.apply(null,t[1])});var b=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<b.Lists.colors.length;e++)b.Hooks.templates[b.Lists.colors[e]]=["Red Green Blue Alpha","255 255 255 1"];var t,r,a;if(f)for(t in b.Hooks.templates){r=b.Hooks.templates[t],a=r[0].split(" ");var i=r[1].match(b.RegEx.valueSplit);"Color"===a[0]&&(a.push(a.shift()),i.push(i.shift()),b.Hooks.templates[t]=[a.join(" "),i.join(" ")])}for(t in b.Hooks.templates){r=b.Hooks.templates[t],a=r[0].split(" ");for(var e in a){var o=t+a[e],n=e;b.Hooks.registered[o]=[t,n]}}},getRoot:function(e){var t=b.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return b.RegEx.valueUnwrap.test(t)&&(t=t.match(b.Hooks.RegEx.valueUnwrap)[1]),b.Values.isCSSNullValue(t)&&(t=b.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=b.Hooks.registered[e];if(r){var a=r[0],i=r[1];return t=b.Hooks.cleanRootPropertyValue(a,t),t.toString().match(b.RegEx.valueSplit)[i]}return t},injectValue:function(e,t,r){var a=b.Hooks.registered[e];if(a){var i=a[0],o=a[1],n,s;return r=b.Hooks.cleanRootPropertyValue(i,r),n=r.toString().match(b.RegEx.valueSplit),n[o]=t,s=n.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return b.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(b.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},opacity:function(e,t,r){if(8>=f)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=f||v.State.isGingerbread||(b.Lists.transformsBase=b.Lists.transformsBase.concat(b.Lists.transforms3D));for(var e=0;e<b.Lists.transformsBase.length;e++)!function(){var t=b.Lists.transformsBase[e];b.Normalizations.registered[t]=function(e,r,a){switch(e){case"name":return"transform";case"extract":return s(r)===i||s(r).transformCache[t]===i?/^scale/i.test(t)?1:0:s(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(a);break;case"scal":case"scale":v.State.isAndroid&&s(r).transformCache[t]===i&&1>a&&(a=1),o=!/(\d)$/i.test(a);break;case"skew":o=!/(deg|\d)$/i.test(a);break;case"rotate":o=!/(deg|\d)$/i.test(a)}return o||(s(r).transformCache[t]="("+a+")"),s(r).transformCache[t]}}}();for(var e=0;e<b.Lists.colors.length;e++)!function(){var t=b.Lists.colors[e];b.Normalizations.registered[t]=function(e,r,a){switch(e){case"name":return t;case"extract":var o;if(b.RegEx.wrappedValueAlreadyExtracted.test(a))o=a;else{var n,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(a)?n=s[a]!==i?s[a]:s.black:b.RegEx.isHex.test(a)?n="rgb("+b.Values.hexToRgb(a).join(" ")+")":/^rgba?\(/i.test(a)||(n=s.black),o=(n||a).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=f||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=f?4===a.split(" ").length&&(a=a.split(/\s+/).slice(0,3).join(" ")):3===a.split(" ").length&&(a+=" 1"),(8>=f?"rgb":"rgba")+"("+a.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var i;if(i=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(v.State.prefixElement.style[i]))return v.State.prefixMatches[e]=i,[i,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,t,a,o){function n(e,t){function a(){u&&b.setPropertyValue(e,"display","none")}var l=0;if(8>=f)l=$.css(e,t);else{var u=!1;if(/^(width|height)$/.test(t)&&0===b.getPropertyValue(e,"display")&&(u=!0,b.setPropertyValue(e,"display",b.Values.getDisplayType(e))),!o){if("height"===t&&"border-box"!==b.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(b.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(b.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(b.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(b.getPropertyValue(e,"paddingBottom"))||0);return a(),c}if("width"===t&&"border-box"!==b.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(b.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(b.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(b.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(b.getPropertyValue(e,"paddingRight"))||0);return a(),p}}var d;d=s(e)===i?r.getComputedStyle(e,null):s(e).computedStyle?s(e).computedStyle:s(e).computedStyle=r.getComputedStyle(e,null),(f||v.State.isFirefox)&&"borderColor"===t&&(t="borderTopColor"),l=9===f&&"filter"===t?d.getPropertyValue(t):d[t],(""===l||null===l)&&(l=e.style[t]),a()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(t)){var g=n(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(t))&&(l=$(e).position()[t]+"px")}return l}var l;if(b.Hooks.registered[t]){var u=t,c=b.Hooks.getRoot(u);a===i&&(a=b.getPropertyValue(e,b.Names.prefixCheck(c)[0])),b.Normalizations.registered[c]&&(a=b.Normalizations.registered[c]("extract",e,a)),l=b.Hooks.extractValue(u,a)}else if(b.Normalizations.registered[t]){var p,d;p=b.Normalizations.registered[t]("name",e),"transform"!==p&&(d=n(e,b.Names.prefixCheck(p)[0]),b.Values.isCSSNullValue(d)&&b.Hooks.templates[t]&&(d=b.Hooks.templates[t][1])),l=b.Normalizations.registered[t]("extract",e,d)}return/^[\d-]/.test(l)||(l=s(e)&&s(e).isSVG&&b.Names.SVGAttribute(t)?/^(height|width)$/i.test(t)?e.getBBox()[t]:e.getAttribute(t):n(e,b.Names.prefixCheck(t)[0])),b.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+t+": "+l),l},setPropertyValue:function(e,t,a,i,o){var n=t;if("scroll"===t)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?r.scrollTo(a,o.alternateValue):r.scrollTo(o.alternateValue,a);else if(b.Normalizations.registered[t]&&"transform"===b.Normalizations.registered[t]("name",e))b.Normalizations.registered[t]("inject",e,a),n="transform",a=s(e).transformCache[t];else{if(b.Hooks.registered[t]){var l=t,u=b.Hooks.getRoot(t);i=i||b.getPropertyValue(e,u),a=b.Hooks.injectValue(l,a,i),t=u}if(b.Normalizations.registered[t]&&(a=b.Normalizations.registered[t]("inject",e,a),t=b.Normalizations.registered[t]("name",e)),n=b.Names.prefixCheck(t)[0],8>=f)try{e.style[n]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+n+"]")}else s(e)&&s(e).isSVG&&b.Names.SVGAttribute(t)?e.setAttribute(t,a):e.style[n]=a;v.debug>=2&&console.log("Set "+t+" ("+n+"): "+a)}return[n,a]},flushTransformCache:function(e){function t(t){return parseFloat(b.getPropertyValue(e,t))}var r="";if((f||v.State.isAndroid&&!v.State.isChrome)&&s(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(s(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var i,o;$.each(s(e).transformCache,function(t){return i=s(e).transformCache[t],"transformPerspective"===t?(o=i,!0):(9===f&&"rotateZ"===t&&(t="rotate"),void(r+=t+i+" "))}),o&&(r="perspective"+o+" "+r)}b.setPropertyValue(e,"transform",r)}};b.Hooks.register(),b.Normalizations.register(),v.hook=function(e,t,r){var a=i;return m.isWrapped(e)&&(e=[].slice.call(e)),$.each(n(e),function(e,o){if(s(o)===i&&v.init(o),r===i)a===i&&(a=v.CSS.getPropertyValue(o,t));else{var n=v.CSS.setPropertyValue(o,t,r);"transform"===n[0]&&v.CSS.flushTransformCache(o),a=n}}),a};var S=function(){function e(){return u?T.promise||null:f}function t(){function e(e){function d(e,r){var a=i,o=i,s=i;return m.isArray(e)?(a=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||b.RegEx.isHex.test(e[1])?s=e[1]:(m.isString(e[1])&&!b.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(o=r?e[1]:c(e[1],n.duration),e[2]!==i&&(s=e[2]))):a=e,r||(o=o||n.easing),m.isFunction(a)&&(a=a.call(t,P,V)),m.isFunction(s)&&(s=s.call(t,P,V)),[a||0,o,s]}function f(e,t){var r,a;return a=(t||0).toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=b.Values.getUnitType(e)),[a,r]}function g(){var e={myParent:t.parentNode||a.body,position:b.getPropertyValue(t,"position"),fontSize:b.getPropertyValue(t,"fontSize")},i=e.position===j.lastPosition&&e.myParent===j.lastParent,o=e.fontSize===j.lastFontSize;j.lastParent=e.myParent,j.lastPosition=e.position,j.lastFontSize=e.fontSize;var n=100,l={};if(o&&i)l.emToPx=j.lastEmToPx,l.percentToPxWidth=j.lastPercentToPxWidth,l.percentToPxHeight=j.lastPercentToPxHeight;else{var u=s(t).isSVG?a.createElementNS("http://www.w3.org/2000/svg","rect"):a.createElement("div");v.init(u),e.myParent.appendChild(u),$.each(["overflow","overflowX","overflowY"],function(e,t){v.CSS.setPropertyValue(u,t,"hidden")}),v.CSS.setPropertyValue(u,"position",e.position),v.CSS.setPropertyValue(u,"fontSize",e.fontSize),v.CSS.setPropertyValue(u,"boxSizing","content-box"),$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){v.CSS.setPropertyValue(u,t,n+"%")}),v.CSS.setPropertyValue(u,"paddingLeft",n+"em"),l.percentToPxWidth=j.lastPercentToPxWidth=(parseFloat(b.getPropertyValue(u,"width",null,!0))||1)/n,l.percentToPxHeight=j.lastPercentToPxHeight=(parseFloat(b.getPropertyValue(u,"height",null,!0))||1)/n,l.emToPx=j.lastEmToPx=(parseFloat(b.getPropertyValue(u,"paddingLeft"))||1)/n,e.myParent.removeChild(u)}return null===j.remToPx&&(j.remToPx=parseFloat(b.getPropertyValue(a.body,"fontSize"))||16),null===j.vwToPx&&(j.vwToPx=parseFloat(r.innerWidth)/100,j.vhToPx=parseFloat(r.innerHeight)/100),l.remToPx=j.remToPx,l.vwToPx=j.vwToPx,l.vhToPx=j.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),t),l}if(n.begin&&0===P)try{n.begin.call(h,h)}catch(y){setTimeout(function(){throw y},1)}if("scroll"===k){var w=/^x$/i.test(n.axis)?"Left":"Top",C=parseFloat(n.offset)||0,A,E,F;n.container?m.isWrapped(n.container)||m.isNode(n.container)?(n.container=n.container[0]||n.container,A=n.container["scroll"+w],F=A+$(t).position()[w.toLowerCase()]+C):n.container=null:(A=v.State.scrollAnchor[v.State["scrollProperty"+w]],E=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===w?"Top":"Left")]],F=$(t).offset()[w.toLowerCase()]+C),l={scroll:{rootPropertyValue:!1,startValue:A,currentValue:A,endValue:F,unitType:"",easing:n.easing,scrollData:{container:n.container,direction:w,alternateValue:E}},element:t},v.debug&&console.log("tweensContainer (scroll): ",l.scroll,t)}else if("reverse"===k){if(!s(t).tweensContainer)return void $.dequeue(t,n.queue);"none"===s(t).opts.display&&(s(t).opts.display="auto"),"hidden"===s(t).opts.visibility&&(s(t).opts.visibility="visible"),s(t).opts.loop=!1,s(t).opts.begin=null,s(t).opts.complete=null,S.easing||delete n.easing,S.duration||delete n.duration,n=$.extend({},s(t).opts,n);var H=$.extend(!0,{},s(t).tweensContainer);for(var N in H)if("element"!==N){var z=H[N].startValue;H[N].startValue=H[N].currentValue=H[N].endValue,H[N].endValue=z,m.isEmptyObject(S)||(H[N].easing=n.easing),v.debug&&console.log("reverse tweensContainer ("+N+"): "+JSON.stringify(H[N]),t)}l=H}else if("start"===k){var H;s(t).tweensContainer&&s(t).isAnimating===!0&&(H=s(t).tweensContainer),$.each(x,function(e,t){if(RegExp("^"+b.Lists.colors.join("$|^")+"$").test(e)){var r=d(t,!0),a=r[0],o=r[1],n=r[2];if(b.RegEx.isHex.test(a)){for(var s=["Red","Green","Blue"],l=b.Values.hexToRgb(a),u=n?b.Values.hexToRgb(n):i,c=0;c<s.length;c++)x[e+s[c]]=[l[c],o,u?u[c]:u];delete x[e]}}});for(var R in x){var q=d(x[R]),O=q[0],I=q[1],M=q[2];R=b.Names.camelCase(R);var B=b.Hooks.getRoot(R),W=!1;if(s(t).isSVG||b.Names.prefixCheck(B)[1]!==!1||b.Normalizations.registered[B]!==i){(n.display!==i&&null!==n.display&&"none"!==n.display||n.visibility&&"hidden"!==n.visibility)&&/opacity|filter/.test(R)&&!M&&0!==O&&(M=0),n._cacheValues&&H&&H[R]?(M===i&&(M=H[R].endValue+H[R].unitType),W=s(t).rootPropertyValueCache[B]):b.Hooks.registered[R]?M===i?(W=b.getPropertyValue(t,B),M=b.getPropertyValue(t,R,W)):W=b.Hooks.templates[B][1]:M===i&&(M=b.getPropertyValue(t,R));var G,Y,Q,X=!1;if(G=f(R,M),M=G[0],Q=G[1],G=f(R,O),O=G[0].replace(/^([+-\/*])=/,function(e,t){return X=t,""}),Y=G[1],M=parseFloat(M)||0,O=parseFloat(O)||0,"%"===Y&&(/^(fontSize|lineHeight)$/.test(R)?(O/=100,Y="em"):/^scale/.test(R)?(O/=100,Y=""):/(Red|Green|Blue)$/i.test(R)&&(O=O/100*255,Y="")),/[\/*]/.test(X))Y=Q;else if(Q!==Y&&0!==M)if(0===O)Y=Q;else{u=u||g();var U=/margin|padding|left|right|width|text|word|letter/i.test(R)||/X$/.test(R)||"x"===R?"x":"y";switch(Q){case"%":M*="x"===U?u.percentToPxWidth:u.percentToPxHeight;break;case"px":break;default:M*=u[Q+"ToPx"]}switch(Y){case"%":M*=1/("x"===U?u.percentToPxWidth:u.percentToPxHeight);break;case"px":break;default:M*=1/u[Y+"ToPx"]}}switch(X){case"+":O=M+O;break;case"-":O=M-O;break;case"*":O=M*O;break;case"/":O=M/O}l[R]={rootPropertyValue:W,startValue:M,currentValue:M,endValue:O,unitType:Y,easing:I},v.debug&&console.log("tweensContainer ("+R+"): "+JSON.stringify(l[R]),t)}else v.debug&&console.log("Skipping ["+B+"] due to a lack of browser support.")}l.element=t}l.element&&(b.Values.addClass(t,"velocity-animating"),L.push(l),""===n.queue&&(s(t).tweensContainer=l,s(t).opts=n),s(t).isAnimating=!0,P===V-1?(v.State.calls.length>1e4&&(v.State.calls=o(v.State.calls)),v.State.calls.push([L,h,n,null,T.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,p())):P++)}var t=this,n=$.extend({},v.defaults,S),l={},u;if(s(t)===i&&v.init(t),parseFloat(n.delay)&&n.queue!==!1&&$.queue(t,n.queue,function(e){v.velocityQueueEntryFlag=!0,s(t).delayTimer={setTimeout:setTimeout(e,parseFloat(n.delay)),next:e}}),v.mock===!0)n.duration=1;else switch(n.duration.toString().toLowerCase()){case"fast":n.duration=200;break;case"normal":n.duration=y;break;case"slow":n.duration=600;break;default:n.duration=parseFloat(n.duration)||1}n.easing=c(n.easing,n.duration),n.begin&&!m.isFunction(n.begin)&&(n.begin=null),n.progress&&!m.isFunction(n.progress)&&(n.progress=null),n.complete&&!m.isFunction(n.complete)&&(n.complete=null),n.display!==i&&null!==n.display&&(n.display=n.display.toString().toLowerCase(),"auto"===n.display&&(n.display=v.CSS.Values.getDisplayType(t))),n.visibility&&(n.visibility=n.visibility.toString().toLowerCase()),n.mobileHA=n.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,n.queue===!1?n.delay?setTimeout(e,n.delay):e():$.queue(t,n.queue,function(t,r){return r===!0?(T.promise&&T.resolver(h),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==n.queue&&"fx"!==n.queue||"inprogress"===$.queue(t)[0]||$.dequeue(t)}var l=arguments[0]&&($.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties)),u,f,g,h,x,S;if(m.isWrapped(this)?(u=!1,g=0,h=this,f=this):(u=!0,g=1,h=l?arguments[0].elements:arguments[0]),h=m.isWrapped(h)?[].slice.call(h):h){l?(x=arguments[0].properties,S=arguments[0].options):(x=arguments[g],S=arguments[g+1]);var V=m.isArray(h)||m.isNodeList(h)?h.length:1,P=0;if("stop"!==x&&!$.isPlainObject(S)){var w=g+1;S={};for(var C=w;C<arguments.length;C++)!m.isArray(arguments[C])&&/^\d/.test(arguments[C])?S.duration=parseFloat(arguments[C]):m.isString(arguments[C])||m.isArray(arguments[C])?S.easing=arguments[C]:m.isFunction(arguments[C])&&(S.complete=arguments[C])}var T={promise:null,resolver:null,rejecter:null};u&&v.Promise&&(T.promise=new v.Promise(function(e,t){T.resolver=e,T.rejecter=t}));var k;switch(x){case"scroll":k="scroll";break;case"reverse":k="reverse";break;case"stop":$.each(n(h),function(e,t){s(t)&&s(t).delayTimer&&(clearTimeout(s(t).delayTimer.setTimeout),s(t).delayTimer.next&&s(t).delayTimer.next(),delete s(t).delayTimer)});var A=[];return $.each(v.State.calls,function(e,t){t&&$.each(n(t[1]),function(r,a){var o=m.isString(S)?S:"";return S!==i&&t[2].queue!==o?!0:void $.each(n(h),function(t,r){r===a&&(S!==i&&($.each($.queue(r,o),function(e,t){m.isFunction(t)&&t(null,!0)}),$.queue(r,o,[])),s(r)&&""===o&&$.each(s(r).tweensContainer,function(e,t){t.endValue=t.currentValue}),A.push(e))})})}),$.each(A,function(e,t){d(t,!0)}),T.promise&&T.resolver(h),e();default:if(!$.isPlainObject(x)||m.isEmptyObject(x)){if(m.isString(x)&&v.Sequences[x]){var E=$.extend({},S),F=E.duration,H=E.delay||0;return E.backwards===!0&&(h=(m.isWrapped(h)?[].slice.call(h):h).reverse()),$.each(n(h),function(e,t){parseFloat(E.stagger)?E.delay=H+parseFloat(E.stagger)*e:m.isFunction(E.stagger)&&(E.delay=H+E.stagger.call(t,e,V)),E.drag&&(E.duration=parseFloat(F)||(/^(callout|transition)/.test(x)?1e3:y),E.duration=Math.max(E.duration*(E.backwards?1-e/V:(e+1)/V),.75*E.duration,200)),v.Sequences[x].call(t,t,E||{},e,V,h,T.promise?T:i)}),e()}var N="Velocity: First argument ("+x+") was not a property map, a known action, or a registered sequence. Aborting.";return T.promise?T.rejecter(new Error(N)):console.log(N),e()}k="start"}var j={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},L=[];$.each(n(h),function(e,r){m.isNode(r)&&t.call(r)});var E=$.extend({},v.defaults,S),z;if(E.loop=parseInt(E.loop),z=2*E.loop-1,E.loop)for(var R=0;z>R;R++){var q={delay:E.delay};R===z-1&&(q.display=E.display,q.visibility=E.visibility,q.complete=E.complete),v(h,"reverse",q)}return e()}};v=$.extend(S,v),v.animate=S;var V=r.requestAnimationFrame||g;v.State.isMobile||a.hidden===i||a.addEventListener("visibilitychange",function(){a.hidden?(V=function(e){return setTimeout(function(){e(!0)},16)},p()):V=r.requestAnimationFrame||g});var P;return e&&e.fn!==i?P=e:r.Zepto&&(P=r.Zepto),(P||r).Velocity=v,P&&(P.fn.velocity=S,P.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Sequences["slide"+t]=function(e,r,a,o,n,s){var l=$.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},d={};l.display===i&&(l.display="Down"===t?"inline"===v.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(e){u&&u.call(e,e),d.overflowY=e.style.overflowY,e.style.overflowY="hidden";for(var r in p){d[r]=e.style[r];var a=v.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}},l.complete=function(e){for(var t in d)e.style[t]=d[t];c&&c.call(e,e),s&&s.resolver(n||e)},v(e,p,l)}}),$.each(["In","Out"],function(e,t){v.Sequences["fade"+t]=function(e,r,a,o,n,s){var l=$.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=a!==o-1?l.begin=null:function(){c&&c.call(e,e),s&&s.resolver(n||e)},l.display===i&&(l.display="In"===t?"auto":"none"),v(this,u,l)}}),v}(e||window,window,document)});

/**********************
   Velocity UI Pack
**********************/

/* VelocityJS.org UI Pack (4.1.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */

(function() {

    /*************
        Setup
    *************/

    var Container = (window.jQuery || window.Zepto || window);

    if (!Container.Velocity || !Container.Velocity.Utilities) {
        window.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting.");

        return;
    }

    if (!Container.Velocity.version || (Container.Velocity.version.major <= 0 && Container.Velocity.version.minor <= 11 && Container.Velocity.version.patch < 8)) {
        var abortError = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";

        alert(abortError);
        throw new Error(abortError);
    }

    /******************
       Register UI
    ******************/

    Container.Velocity.RegisterUI = function (effectName, properties) {
        /* Animate the expansion/contraction of the elements' parent's height for In/Out effects. */
        function animateParentHeight (elements, direction, totalDuration, stagger) {
            var totalHeightDelta = 0,
                parentNode;

            /* Sum the total height (including padding and margin) of all targeted elements. */
            Container.Velocity.Utilities.each(elements.nodeType ? [ elements ] : elements, function(i, element) {
                if (stagger) {
                    /* Increase the totalDuration by the successive delay amounts produced by the stagger option. */
                    totalDuration += i * stagger;
                }

                parentNode = element.parentNode;

                Container.Velocity.Utilities.each([ "height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(i, property) {
                    totalHeightDelta += parseFloat(Container.Velocity.CSS.getPropertyValue(element, property));
                });
            });

            /* Animate the parent element's height adjustment (with a varying duration multiplier for aesthetic benefits). */
            Container.Velocity.animate(
                parentNode,
                { height: (direction === "In" ? "+" : "-") + "=" + totalHeightDelta },
                { queue: false, easing: "ease-in-out", duration: totalDuration * (direction === "In" ? 0.6 : 1) }
            );
        }

        /* Register a custom sequence for each effect. */
        Container.Velocity.Sequences[effectName] = function (element, sequenceOptions, elementsIndex, elementsSize, elements, promiseData) {
            var finalElement = (elementsIndex === elementsSize - 1);

            /* Iterate through each effect's call array. */
            for (var callIndex = 0; callIndex < properties.calls.length; callIndex++) {
                var call = properties.calls[callIndex],
                    propertyMap = call[0],
                    sequenceDuration = (sequenceOptions.duration || properties.defaultDuration || 1000),
                    durationPercentage = call[1],
                    callOptions = call[2] || {},
                    opts = {};

                /* Assign the whitelisted per-call options. */
                opts.duration = sequenceDuration * (durationPercentage || 1);
                opts.queue = sequenceOptions.queue || "";
                opts.easing = callOptions.easing || "ease";
                opts.delay = callOptions.delay || 0;
                opts._cacheValues = callOptions._cacheValues || true;

                /* Special processing for the first effect call. */
                if (callIndex === 0) {
                    /* If a delay was passed into the sequence, combine it with the first call's delay. */
                    opts.delay += (sequenceOptions.delay || 0);

                    if (elementsIndex === 0) {
                        opts.begin = function() {
                            /* Only trigger a begin callback on the first effect call with the first element in the set. */
                            sequenceOptions.begin && sequenceOptions.begin.call(elements, elements);

                            /* Only trigger animateParentHeight() if we're using an In/Out transition. */
                            var direction = effectName.match(/(In|Out)$/);
                            if (sequenceOptions.animateParentHeight && direction) {
                                animateParentHeight(elements, direction[0], sequenceDuration + opts.delay, sequenceOptions.stagger);
                            }
                        }
                    }

                    /* If the user isn't overriding the display option, default to "auto" for "In"-suffixed transitions. */
                    if (sequenceOptions.display !== null) {
                        if (sequenceOptions.display !== undefined && sequenceOptions.display !== "none") {
                            opts.display = sequenceOptions.display;
                        } else if (/In$/.test(effectName)) {
                            /* Inline elements cannot be subjected to transforms, so we switch them to inline-block. */
                            var defaultDisplay = Container.Velocity.CSS.Values.getDisplayType(element);
                            opts.display = (defaultDisplay === "inline") ? "inline-block" : defaultDisplay;
                        }
                    }

                    if (sequenceOptions.visibility && sequenceOptions.visibility !== "hidden") {
                        opts.visibility = sequenceOptions.visibility;
                    }
                }

                /* Special processing for the last effect call. */
                if (callIndex === properties.calls.length - 1) {
                    /* Append promise resolving onto the user's sequence callback. */
                    function injectFinalCallbacks () {
                        if ((sequenceOptions.display === undefined || sequenceOptions.display === "none") && /Out$/.test(effectName)) {
                            Container.Velocity.Utilities.each(elements.nodeType ? [ elements ] : elements, function(i, element) {
                                Container.Velocity.CSS.setPropertyValue(element, "display", "none");
                            });
                        }

                        sequenceOptions.complete && sequenceOptions.complete.call(elements, elements);

                        if (promiseData) {
                            promiseData.resolver(elements || element);
                        }
                    }

                    opts.complete = function() {
                        if (properties.reset) {
                            for (var resetProperty in properties.reset) {
                                var resetValue = properties.reset[resetProperty];

                                /* Format each non-array value in the reset property map to [ value, value ] so that changes apply
                                   immediately and DOM querying is avoided (via forcefeeding). */
                                if (typeof resetValue === "string" || typeof resetValue === "number") {
                                    properties.reset[resetProperty] = [ properties.reset[resetProperty], properties.reset[resetProperty] ];
                                }
                            }

                            /* So that the reset values are applied instantly upon the next rAF tick, use a zero duration and parallel queueing. */
                            var resetOptions = { duration: 0, queue: false };

                            /* Since the reset option uses up the complete callback, we trigger the user's complete callback at the end of ours. */
                            if (finalElement) {
                                resetOptions.complete = injectFinalCallbacks;
                            }

                            Container.Velocity.animate(element, properties.reset, resetOptions);
                        /* Only trigger the user's complete callback on the last effect call with the last element in the set. */
                        } else if (finalElement) {
                            injectFinalCallbacks();
                        }
                    };

                    if (sequenceOptions.visibility === "hidden") {
                        opts.visibility = sequenceOptions.visibility;
                    }
                }

                Container.Velocity.animate(element, propertyMap, opts);
            }
        };

        /* Return the Velocity object so that RegisterUI calls can be chained. */
        return Container.Velocity;
    };

    /*********************
       Packaged Effects
    *********************/

    /* Externalize the packagedEffects data so that they can optionally be modified and re-registered. */
    /* Support: <=IE8: Callouts will have no effect, and transitions will simply fade in/out. IE9/Android 2.3: Most effects are fully supported, the rest fade in/out. All other browsers: full support. */
    Container.Velocity.RegisterUI.packagedEffects =
        {

            /* Animate.css */
            "callout.pulse": {
                defaultDuration: 825,
                calls: [
                    [ { scaleX: 1.3, scaleY: 1.3 }, 0.50 ],
                    [ { scaleX: 1, scaleY: 1 }, 0.50 ]
                ]
            },
            /* Animate.css */
            "callout.pulse2": {
                defaultDuration: 300,
                calls: [
                    [ { scaleX: 2, scaleY: 2 }, 0.50 ],
                    [ { scaleX: 1, scaleY: 1 }, 0.50 ]
                ]
            },
            "transition.fadeIn": {
                defaultDuration: 1000,
                calls: [
                    [ { opacity: [ 1, 0 ] } ]
                ]
            },
            "transition.fadeOut": {
                defaultDuration: 500,
                calls: [
                    [ { opacity: [ 0, 1 ] } ]
                ]
            },

            /* Animate.css */
            "transition.bounceIn": {
                defaultDuration: 1200,
                calls: [
                    [ { opacity: [ 1, 0 ], scaleX: [ 1.05, 0.3 ], scaleY: [ 1.05, 0.3 ] }, 0.40 ],
                    [ { scaleX: 0.9, scaleY: 0.9, translateZ: 0 }, 0.20 ],
                    [ { scaleX: 1, scaleY: 1 }, 0.50 ]
                ]
            },
            /* Animate.css */
            "transition.bounceOut": {
                defaultDuration: 800,
                calls: [
                    [ { scaleX: 0.95, scaleY: 0.95 }, 0.40 ],
                    [ { scaleX: 1.1, scaleY: 1.1, translateZ: 0 }, 0.40 ],
                    [ { opacity: [ 0, 1 ], scaleX: 0.3, scaleY: 0.3 }, 0.20 ]
                ],
                reset: { scaleX: 1, scaleY: 1 }
            },
            /* Animate.css */
            "transition.bounceUpIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ -30, 1000 ] }, 0.60, { easing: "easeOutCirc" } ],
                    [ { translateY: 10 }, 0.20 ],
                    [ { translateY: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "transition.bounceUpOut": {
                defaultDuration: 1000,
                calls: [
                    [ { translateY: 20 }, 0.20 ],
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateY: -1000 }, 0.80 ]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideDownIn": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 0, -20 ], translateZ: 0 } ]
                ]
            },
            "transition.slideUpBigIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 0, 75 ], translateZ: 0 } ]
                ]
            },
            "transition.slideUpBigOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0, 1 ], translateY: -75, translateZ: 0 } ]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideDownBigIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 0, -75 ], translateZ: 0 } ]
                ]
            },
            "transition.slideDownBigOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0, 1 ], translateY: 75, translateZ: 0 } ]
                ],
                reset: { translateY: 0 }
            },
        };

    /* Register the packaged effects. */
    for (var effectName in Container.Velocity.RegisterUI.packagedEffects) {
        Container.Velocity.RegisterUI(effectName, Container.Velocity.RegisterUI.packagedEffects[effectName]);
    }
})();



// SMOOTH SCROLL

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 800);
            return false;
        }
    }
});
