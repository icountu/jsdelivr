webshims.register("dom-extend",function(e,t,r,a,n){"use strict";if(t.assumeARIA=e.support.getSetAttribute||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),e.parseHTML||t.error("Webshims needs jQuery 1.8+ to work properly. Please update your jQuery version or downgrade webshims."),1==t.cfg.extendNative&&t.warn("extendNative configuration will be set to false by default with next release. In case you rely on it set it to 'true' otherwise to 'false'. See http://bit.ly/16OOTQO"),!t.cfg.no$Switch){var i=function(){if(!r.jQuery||r.$&&r.jQuery!=r.$||r.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly.."),r.$&&(r.$=t.$),r.jQuery=t.$),t.M!=Modernizr){t.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var e in Modernizr)e in t.M||(t.M[e]=Modernizr[e]);Modernizr=t.M}};i(),setTimeout(i,90),t.ready("DOM",i),e(i),t.ready("WINDOWLOAD",i)}var o=t.modules,s=/\s*,\s*/,l={},u={},c={},d={},p={},f=e.fn.val,h=function(t,r,a,n,i){return i?f.call(e(t)):f.call(e(t),a)};e.widget||function(){var t=e.cleanData;e.cleanData=function(r){if(!e.widget)for(var a,n=0;null!=(a=r[n]);n++)try{e(a).triggerHandler("remove")}catch(i){}t(r)}}(),e.fn.val=function(t){var r=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return r&&1===r.nodeType?e.prop(r,"value",t,"val",!0):f.call(this);if(e.isArray(t))return f.apply(this,arguments);var a=e.isFunction(t);return this.each(function(i){if(r=this,1===r.nodeType)if(a){var o=t.call(r,i,e.prop(r,"value",n,"val",!0));null==o&&(o=""),e.prop(r,"value",o,"val")}else e.prop(r,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,r,n,i){return i||(i=a),e(i)[n?"onTrigger":"on"](t,r),this.on("remove",function(a){a.originalEvent||e(i).off(t,r)}),this};var m="_webshimsLib"+Math.round(1e3*Math.random()),v=function(t,r,a){if(t=t.jquery?t[0]:t,!t)return a||{};var i=e.data(t,m);return a!==n&&(i||(i=e.data(t,m,{})),r&&(i[r]=a)),r?i&&i[r]:i};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var r=[];return this.each(function(){var a=v(this,"shadowData"),n=a&&a[t.prop]||this;-1==e.inArray(n,r)&&r.push(n)}),this.pushStack(r)}}),["removeAttr","prop","attr"].forEach(function(r){l[r]=e[r],e[r]=function(t,a,i,o,s){var d="val"==o,f=d?h:l[r];if(!t||!u[a]||1!==t.nodeType||!d&&o&&"attr"==r&&e.attrFn[a])return f(t,a,i,o,s);var m,v,g,y=(t.nodeName||"").toLowerCase(),b=c[y],w="attr"!=r||i!==!1&&null!==i?r:"removeAttr";if(b||(b=c["*"]),b&&(b=b[a]),b&&(m=b[w]),m){if("value"==a&&(v=m.isVal,m.isVal=d),"removeAttr"===w)return m.value.call(t);if(i===n)return m.get?m.get.call(t):m.value;m.set&&("attr"==r&&i===!0&&(i=a),g=m.set.call(t,i)),"value"==a&&(m.isVal=v)}else g=f(t,a,i,o,s);if((i!==n||"removeAttr"===w)&&p[y]&&p[y][a]){var T;T="removeAttr"==w?!1:"prop"==w?!!i:!0,p[y][a].forEach(function(e){(!e.only||(e.only="prop"&&"prop"==r)||"attr"==e.only&&"prop"!=r)&&e.call(t,i,T,d?"val":w,r)})}return g},d[r]=function(e,a,i){c[e]||(c[e]={}),c[e][a]||(c[e][a]={});var o=c[e][a][r],s=function(e,t,n){return t&&t[e]?t[e]:n&&n[e]?n[e]:"prop"==r&&"value"==a?function(e){var t=this;return i.isVal?h(t,a,e,!1,0===arguments.length):l[r](t,a,e)}:"prop"==r&&"value"==e&&i.value.apply?function(){var e=l[r](this,a);return e&&e.apply&&(e=e.apply(this,arguments)),e}:function(e){return l[r](this,a,e)}};c[e][a][r]=i,i.value===n&&(i.set||(i.set=i.writeable?s("set",i,o):t.cfg.useStrict&&"prop"==a?function(){throw a+" is readonly on "+e}:function(){t.info(a+" is readonly on "+e)}),i.get||(i.get=s("get",i,o))),["value","get","set"].forEach(function(e){i[e]&&(i["_sup"+e]=s(e,o))})}});var g=function(){var e=t.getPrototypeOf(a.createElement("foobar")),r=Object.prototype.hasOwnProperty,n=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(i,o,s){var l,u;if(!(n&&(l=a.createElement(i))&&(u=t.getPrototypeOf(l))&&e!==u)||l[o]&&r.call(l,o))s._supvalue=function(){var e=v(this,"propValue");return e&&e[o]&&e[o].apply?e[o].apply(this,arguments):e&&e[o]},y.extendValue(i,o,s.value);else{var c=l[o];s._supvalue=function(){return c&&c.apply?c.apply(this,arguments):c},u[o]=s.value}s.value._supvalue=s._supvalue}}(),y=function(){var r={};t.addReady(function(a,i){var o={},s=function(t){o[t]||(o[t]=e(a.getElementsByTagName(t)),i[0]&&e.nodeName(i[0],t)&&(o[t]=o[t].add(i)))};e.each(r,function(e,r){return s(e),r&&r.forEach?(r.forEach(function(t){o[e].each(t)}),n):(t.warn("Error: with "+e+"-property. methods: "+r),n)}),o=null});var i,o=e([]),s=function(t,n){r[t]?r[t].push(n):r[t]=[n],e.isDOMReady&&(i||e(a.getElementsByTagName(t))).each(n)};return{createTmpCache:function(t){return e.isDOMReady&&(i=i||e(a.getElementsByTagName(t))),i||o},flushTmpCache:function(){i=null},content:function(t,r){s(t,function(){var t=e.attr(this,r);null!=t&&e.attr(this,r,t)})},createElement:function(e,t){s(e,t)},extendValue:function(t,r,a){s(t,function(){e(this).each(function(){var e=v(this,"propValue",{});e[r]=this[r],this[r]=a})})}}}(),b=function(e,t){e.defaultValue===n&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(r){r=e(r);var a=r.prop("id");return a||(t++,a="ID-"+t,r.eq(0).prop("id",a)),a}}(),implement:function(e,r){var a=v(e,"implemented")||v(e,"implemented",{});return a[r]?(t.warn(r+" already implemented for element #"+e.id),!1):(a[r]=!0,!0)},extendUNDEFProp:function(t,r){e.each(r,function(e,r){e in t||(t[e]=r)})},createPropDefault:b,data:v,moveToFirstEvent:function(t,r,a){var n,i=(e._data(t,"events")||{})[r];i&&i.length>1&&(n=i.pop(),a||(a="bind"),"bind"==a&&i.delegateCount?i.splice(i.delegateCount,0,n):i.unshift(n)),t=null},addShadowDom:function(){var n,i,o,s={init:!1,runs:0,test:function(){var e=s.getHeight(),t=s.getWidth();e!=s.height||t!=s.width?(s.height=e,s.width=t,s.handler({type:"docresize"}),s.runs++,9>s.runs&&setTimeout(s.test,90)):s.runs=0},handler:function(t){clearTimeout(n),n=setTimeout(function(){if("resize"==t.type){var n=e(r).width(),l=e(r).width();if(l==i&&n==o)return;i=l,o=n,s.height=s.getHeight(),s.width=s.getWidth()}e(a).triggerHandler("updateshadowdom")},"resize"==t.type?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var r=a.body,n=a.documentElement;s[t]=function(){return Math.max(r["scroll"+e],n["scroll"+e],r["offset"+e],n["offset"+e],n["client"+e])}})},start:function(){!this.init&&a.body&&(this.init=!0,this._create(),this.height=s.getHeight(),this.width=s.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(r).bind("resize",this.handler),function(){var t,r=e.fn.animate;e.fn.animate=function(){return clearTimeout(t),t=setTimeout(function(){s.test()},99),r.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){s.start()})},function(r,a,n){if(r&&a){n=n||{},r.jquery&&(r=r[0]),a.jquery&&(a=a[0]);var i=e.data(r,m)||e.data(r,m,{}),o=e.data(a,m)||e.data(a,m,{}),s={};n.shadowFocusElement?n.shadowFocusElement&&(n.shadowFocusElement.jquery&&(n.shadowFocusElement=n.shadowFocusElement[0]),s=e.data(n.shadowFocusElement,m)||e.data(n.shadowFocusElement,m,s)):n.shadowFocusElement=a,e(r).on("remove",function(t){t.originalEvent||e(a).remove()}),i.hasShadow=a,s.nativeElement=o.nativeElement=r,s.shadowData=o.shadowData=i.shadowData={nativeElement:r,shadowElement:a,shadowFocusElement:n.shadowFocusElement},n.shadowChilds&&n.shadowChilds.each(function(){v(this,"shadowData",o.shadowData)}),n.data&&(s.shadowData.data=o.shadowData.data=i.shadowData.data=n.data),n=null}t.docObserve()}}(),propTypes:{standard:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){b(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=a.createElement("a");return t.style.display="none",function(r,a){b(r),r.prop||(r.prop={set:function(e){r.attr.set.call(this,e)},get:function(){var r,n=this.getAttribute(a);if(null==n)return"";if(t.setAttribute("href",n+""),!e.support.hrefNormalized){try{e(t).insertAfter(this),r=t.getAttribute("href",4)}catch(i){r=t.getAttribute("href",4)}e(t).detach()}return r||t.href}})}}(),enumarated:function(e){b(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(r,a){"string"==typeof a&&(a=a.split(s)),a.forEach(function(a){t.defineNodeNamesProperty(r,a,{prop:{set:function(t){e.attr(this,a,t)},get:function(){return e.attr(this,a)||""}}})})},defineNodeNameProperty:function(r,a,n){return u[a]=!0,n.reflect&&t.propTypes[n.propType||"standard"](n,a),["prop","attr","removeAttr"].forEach(function(i){var o=n[i];o&&(o="prop"===i?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),d[i](r,a,o),"*"!=r&&t.cfg.extendNative&&"prop"==i&&o.value&&e.isFunction(o.value)&&g(r,a,o),n[i]=o)}),n.initAttr&&y.content(r,a),n},defineNodeNameProperties:function(e,r,a,n){for(var i in r)!n&&r[i].initAttr&&y.createTmpCache(e),a&&(r[i][a]||(r[i][a]={},["value","set","get"].forEach(function(e){e in r[i]&&(r[i][a][e]=r[i][e],delete r[i][e])}))),r[i]=t.defineNodeNameProperty(e,i,r[i]);return n||y.flushTmpCache(),r},createElement:function(r,a,n){var i;return e.isFunction(a)&&(a={after:a}),y.createTmpCache(r),a.before&&y.createElement(r,a.before),n&&(i=t.defineNodeNameProperties(r,n,!1,!0)),a.after&&y.createElement(r,a.after),y.flushTmpCache(),i},onNodeNamesPropertyModify:function(t,r,a,n){"string"==typeof t&&(t=t.split(s)),e.isFunction(a)&&(a={set:a}),t.forEach(function(e){p[e]||(p[e]={}),"string"==typeof r&&(r=r.split(s)),a.initAttr&&y.createTmpCache(e),r.forEach(function(t){p[e][t]||(p[e][t]=[],u[t]=!0),a.set&&(n&&(a.set.only=n),p[e][t].push(a.set)),a.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(r,a,i){i||(i={}),e.isFunction(i)&&(i.set=i),t.defineNodeNamesProperty(r,a,{attr:{set:function(e){this.setAttribute(a,e),i.set&&i.set.call(this,!0)},get:function(){var e=this.getAttribute(a);return null==e?n:a}},removeAttr:{value:function(){this.removeAttribute(a),i.set&&i.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:i.initAttr||!1})},contentAttr:function(e,t,r){if(e.nodeName){var a;return r===n?(a=e.attributes[t]||{},r=a.specified?a.value:null,null==r?n:r):("boolean"==typeof r?r?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,r),n)}},activeLang:function(){var r,a,n=[],i={},s=/:\/\/|^\.*\//,l=function(r,a,n){var i;return a&&n&&-1!==e.inArray(a,n.availabeLangs||[])?(r.loading=!0,i=n.langSrc,s.test(i)||(i=t.cfg.basePath+i),t.loader.loadScript(i+a+".js",function(){r.langObj[a]?(r.loading=!1,c(r,!0)):e(function(){r.langObj[a]&&c(r,!0),r.loading=!1})}),!0):!1},u=function(e){i[e]&&i[e].forEach(function(e){e.callback(r,a,"")})},c=function(e,t){if(e.activeLang!=r&&e.activeLang!==a){var n=o[e.module].options;e.langObj[r]||a&&e.langObj[a]?(e.activeLang=r,e.callback(e.langObj[r]||e.langObj[a],r),u(e.module)):t||l(e,r,n)||l(e,a,n)||!e.langObj[""]||""===e.activeLang||(e.activeLang="",e.callback(e.langObj[""],r),u(e.module))}},d=function(t){return"string"==typeof t&&t!==r?(r=t,a=r.split("-")[0],r==a&&(a=!1),e.each(n,function(e,t){c(t)})):"object"==typeof t&&(t.register?(i[t.register]||(i[t.register]=[]),i[t.register].push(t),t.callback(r,a,"")):(t.activeLang||(t.activeLang=""),n.push(t),c(t))),r};return d}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,r){t[e]=function(e,a,n,i){"string"==typeof e&&(e=e.split(s));var o={};return e.forEach(function(e){o[e]=t[r](e,a,n,i)}),o}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!(!e.webshims.assumeARIA||"content"in t.createElement("template")||(e(function(){var t=e("main").attr({role:"main"});t.length>1?webshims.error("only one main element allowed in document"):t.is("article *, section *")&&webshims.error("main not allowed inside of article/section elements")}),"hidden"in t.createElement("a")))){var r={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},a=function(e,t){var r=e.getAttribute("role");r||e.setAttribute("role",t)};e.webshims.addReady(function(n,i){if(e.each(r,function(t,r){for(var o=e(t,n).add(i.filter(t)),s=0,l=o.length;l>s;s++)a(o[s],r)}),n===t){var o=t.getElementsByTagName("header")[0],s=t.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&a(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||a(u,"contentinfo")}})}}(jQuery,document),webshims.register("mediaelement-jaris",function(e,t,r,a,n,i){"use strict";var o=t.mediaelement,s=r.swfmini,l=Modernizr.audio&&Modernizr.video,u=s.hasFlashPlayerVersion("9.0.115"),c=0,d="ActiveXObject"in r&&l,p={paused:!0,ended:!1,currentSrc:"",duration:r.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(e){return e?(t.error("buffered index size error"),n):0},end:function(e){return e?(t.error("buffered index size error"),n):0},length:0}},f=Object.keys(p),h={currentTime:0,volume:1,muted:!1};Object.keys(h);var m=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,currentTime:0,_ppFlag:n,_calledMeta:!1,lastDuration:0},p,h),v=function(e){try{e.nodeName}catch(r){return null}var a=t.data(e,"mediaelement");return a&&"third"==a.isActive?a:null},g=function(t,r){r=e.Event(r),r.preventDefault(),e.event.trigger(r,n,t)},y=i.playerPath||t.cfg.basePath+"swf/"+(i.playerName||"JarisFLVPlayer.swf");t.extendUNDEFProp(i.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent",allowNetworking:"all"}),t.extendUNDEFProp(i.vars,{controltype:"1",jsapi:"1"}),t.extendUNDEFProp(i.attrs,{bgcolor:"#000000"});var b=function(e,t){3>e&&clearTimeout(t._canplaythroughTimer),e>=3&&3>t.readyState&&(t.readyState=e,g(t._elem,"canplay"),t.paused||g(t._elem,"playing"),clearTimeout(t._canplaythroughTimer),t._canplaythroughTimer=setTimeout(function(){b(4,t)},4e3)),e>=4&&4>t.readyState&&(t.readyState=e,g(t._elem,"canplaythrough")),t.readyState=e};o.jarisEvent={};var w,T={onPlayPause:function(e,t,r){var a,n;if(null==r)try{a=t.api.api_get("isPlaying")}catch(i){}else a=r;a==t.paused&&(t.paused=!a,n=t.paused?"pause":"play",t._ppFlag=!0,g(t._elem,n),3>t.readyState&&b(3,t),t.paused||g(t._elem,"playing"))},onNotBuffering:function(e,t){b(3,t)},onDataInitialized:function(e,t){var r,a=t.duration;t.duration=e.duration,a==t.duration||isNaN(t.duration)||t._calledMeta&&2>(r=Math.abs(t.lastDuration-t.duration))||(t.videoHeight=e.height,t.videoWidth=e.width,t.networkState||(t.networkState=2),1>t.readyState&&b(1,t),clearTimeout(t._durationChangeTimer),t._calledMeta&&t.duration?t._durationChangeTimer=setTimeout(function(){t.lastDuration=t.duration,g(t._elem,"durationchange")},r>50?0:r>9?9:99):(t.lastDuration=t.duration,t.duration&&g(t._elem,"durationchange"),t._calledMeta||g(t._elem,"loadedmetadata")),t._calledMeta=!0)},onBuffering:function(e,t){t.ended&&(t.ended=!1),b(1,t),g(t._elem,"waiting")},onTimeUpdate:function(e,t){t.ended&&(t.ended=!1),3>t.readyState&&(b(3,t),g(t._elem,"playing")),g(t._elem,"timeupdate")},onProgress:function(t,r){if(r.ended&&(r.ended=!1),r.duration&&!isNaN(r.duration)){var a=t.loaded/t.total;a>.02&&.2>a?b(3,r):a>.2&&(a>.99&&(r.networkState=1),b(4,r)),r._bufferedEnd&&r._bufferedEnd>a&&(r._bufferedStart=r.currentTime||0),r._bufferedEnd=a,r.buffered.length=1,e.event.trigger("progress",n,r._elem,!0)}},onPlaybackFinished:function(e,t){4>t.readyState&&b(4,t),t.ended=!0,g(t._elem,"ended")},onVolumeChange:function(e,t){(t.volume!=e.volume||t.muted!=e.mute)&&(t.volume=e.volume,t.muted=e.mute,g(t._elem,"volumechange"))},ready:function(){var r=function(e){var t=!0;try{e.api.api_get("volume")}catch(r){t=!1}return t};return function(a,i){var o=0,s=function(){return o>9?(i.tryedReframeing=0,n):(o++,i.tryedReframeing++,r(i)?(i.wasSwfReady=!0,i.tryedReframeing=0,x(i),E(i)):6>i.tryedReframeing?3>i.tryedReframeing?(i.reframeTimer=setTimeout(s,9),i.shadowElem.css({overflow:"visible"}),setTimeout(function(){i.shadowElem.css({overflow:"hidden"})},1)):(i.shadowElem.css({overflow:"hidden"}),e(i._elem).mediaLoad()):(clearTimeout(i.reframeTimer),t.error("reframing error")),n)};i&&i.api&&(i.tryedReframeing||(i.tryedReframeing=0),clearTimeout(w),clearTimeout(i.reframeTimer),i.shadowElem.removeClass("flashblocker-assumed"),o?i.reframeTimer=setTimeout(s,9):s())}}()};T.onMute=T.onVolumeChange;var E=function(e){var r,a=e.actionQueue.length,n=0;if(a&&"third"==e.isActive)for(;e.actionQueue.length&&a>n;){n++,r=e.actionQueue.shift();try{e.api[r.fn].apply(e.api,r.args)}catch(i){t.warn(i)}}e.actionQueue.length&&(e.actionQueue=[])},x=function(t){t&&((t._ppFlag===n&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===n||!t.paused))try{e(t._elem).play(),t._ppFlag=!0}catch(r){}},1),t.muted&&e.prop(t._elem,"muted",!0),1!=t.volume&&e.prop(t._elem,"volume",t.volume))},N=e.noop;if(l){var A={play:1,playing:1},k=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],C=k.map(function(e){return e+".webshimspolyfill"}).join(" "),S=function(r){var a=t.data(r.target,"mediaelement");if(a){var n=r.originalEvent&&r.originalEvent.type===r.type;n==("third"==a.activating)&&(r.stopImmediatePropagation(),A[r.type]&&(a.isActive!=a.activating?e(r.target).pause():n&&(e.prop(r.target,"pause")._supvalue||e.noop).apply(r.target)))}};N=function(r){e(r).off(C).on(C,S),k.forEach(function(e){t.moveToFirstEvent(r,e)})},N(a)}o.setActive=function(r,a,n){if(n||(n=t.data(r,"mediaelement")),n&&n.isActive!=a){"html5"!=a&&"third"!=a&&t.warn("wrong type for mediaelement activating: "+a);var i=t.data(r,"shadowData");n.activating=a,e(r).pause(),n.isActive=a,"third"==a?(i.shadowElement=i.shadowFocusElement=n.shadowElem[0],e(r).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(e(r).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),i.shadowElement=i.shadowFocusElement=!1),e(r).trigger("mediaelementapichange")}};var _=function(){var e=["_calledMeta","lastDuration","_bufferedEnd","_bufferedStart","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth"],t=e.length;return function(r){if(r){var a=t,n=r.networkState;for(b(0,r),clearTimeout(r._durationChangeTimer);--a>-1;)delete r[e[a]];r.actionQueue=[],r.buffered.length=0,n&&g(r._elem,"emptied")}}}(),P=function(t,r){var a,n=t._elem,i=t.shadowElem;e(n)[r?"addClass":"removeClass"]("webshims-controls"),"audio"!=t._elemNodeName||r?i.css({width:n.style.width||(a=e(n).attr("width"))&&a+"px"||e(n).width(),height:n.style.height||(a=e(n).attr("height"))&&a+"px"||e(n).height()}):i.css({width:0,height:0})},O=function(){var t={"":1,auto:1};return function(r){var a=e.attr(r,"preload");return null==a||"none"==a||e.prop(r,"autoplay")?!1:(a=e.prop(r,"preload"),!!(t[a]||"metadata"==a&&e(r).is(".preload-in-doubt, video:not([poster])")))}}(),D={A:/&amp;/g,a:/&/g,e:/\=/g,q:/\?/g},F=function(e){return e.replace?e.replace(D.A,"%26").replace(D.a,"%26").replace(D.e,"%3D").replace(D.q,"%3F"):e};o.createSWF=function(r,a,d){if(!u)return setTimeout(function(){e(r).mediaLoad()},1),n;1>c?c=1:c++,d||(d=t.data(r,"mediaelement")),(e.attr(r,"height")||e.attr(r,"width"))&&t.warn("width or height content attributes used. Webshims prefers the usage of CSS (computed styles or inline styles) to detect size of a video/audio. It's really more powerfull.");var p,f="audio/rtmp"==a.type||"video/rtmp"==a.type,h=e.extend({},i.vars,{poster:F(e.attr(r,"poster")&&e.prop(r,"poster")||""),source:F(a.streamId||a.srcProp),server:F(a.server||"")}),v=e(r).data("vars")||{},g=e.prop(r,"controls"),b="jarisplayer-"+t.getID(r),E=e.extend({},i.params,e(r).data("params")),x=r.nodeName.toLowerCase(),A=e.extend({},i.attrs,{name:b,id:b},e(r).data("attrs")),k=function(){P(d,e.prop(r,"controls"))};d&&d.swfCreated?(o.setActive(r,"third",d),d.currentSrc=a.srcProp,d.shadowElem.html('<div id="'+b+'">'),d.api=!1,d.actionQueue=[],p=d.shadowElem,_(d)):(p=e('<div class="polyfill-'+x+' polyfill-mediaelement" id="wrapper-'+b+'"><div id="'+b+'"></div>').css({position:"relative",overflow:"hidden"}),d=t.data(r,"mediaelement",t.objectCreate(m,{actionQueue:{value:[]},shadowElem:{value:p},_elemNodeName:{value:x},_elem:{value:r},currentSrc:{value:a.srcProp},swfCreated:{value:!0},id:{value:b.replace(/-/g,"")},buffered:{value:{start:function(e){return e>=d.buffered.length?(t.error("buffered index size error"),n):0},end:function(e){return e>=d.buffered.length?(t.error("buffered index size error"),n):(d.duration-d._bufferedStart)*d._bufferedEnd+d._bufferedStart},length:0}}})),P(d,g),p.insertBefore(r),l&&e.extend(d,{volume:e.prop(r,"volume"),muted:e.prop(r,"muted"),paused:e.prop(r,"paused")}),t.addShadowDom(r,p),t.data(r,"mediaelement")||t.data(r,"mediaelement",d),N(r),o.setActive(r,"third",d),e(r).on({updatemediaelementdimensions:k}).onWSOff("updateshadowdom",k).on("remove",function(e){!e.originalEvent&&o.jarisEvent[d.id]&&o.jarisEvent[d.id].elem==r&&(delete o.jarisEvent[d.id],clearTimeout(w),clearTimeout(d.flashBlock)),p.remove()})),o.jarisEvent[d.id]&&o.jarisEvent[d.id].elem==r||(o.jarisEvent[d.id]=function(e){if("ready"==e.type){var t=function(){d.api&&(O(r)&&d.api.api_preload(),T.ready(e,d))};d.api?t():setTimeout(t,9)}else d.currentTime=e.position,d.api&&(!d._calledMeta&&isNaN(e.duration)&&d.duration!=e.duration&&isNaN(d.duration)&&T.onDataInitialized(e,d),d._ppFlag||"onPlayPause"==e.type||T.onPlayPause(e,d),T[e.type]&&T[e.type](e,d)),d.duration=e.duration},o.jarisEvent[d.id].elem=r),e.extend(h,{id:b,evtId:d.id,controls:""+g,autostart:"false",nodename:x},v),f?h.streamtype="rtmp":"audio/mpeg"==a.type||"audio/mp3"==a.type?(h.type="audio",h.streamtype="file"):"video/youtube"==a.type&&(h.streamtype="youtube"),i.changeSWF(h,r,a,d,"embed"),clearTimeout(d.flashBlock),s.embedSWF(y,b,"100%","100%","9.0.115",!1,h,E,A,function(a){if(a.success){var n=function(){(!a.ref.parentNode&&p[0].parentNode||"none"==a.ref.style.display)&&(p.addClass("flashblocker-assumed"),e(r).trigger("flashblocker"),t.warn("flashblocker assumed")),e(a.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})};d.api=a.ref,g||e(a.ref).attr("tabindex","-1").css("outline","none"),d.flashBlock=setTimeout(n,99),w||(clearTimeout(w),w=setTimeout(function(){n();var r=e(a.ref);r[0].offsetWidth>1&&r[0].offsetHeight>1&&0===location.protocol.indexOf("file:")?t.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(2>r[0].offsetWidth||2>r[0].offsetHeight)&&t.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),r=null},8e3))}})};var M=function(e,t,r,a){return a=a||v(e),a?(a.api&&a.api[t]?a.api[t].apply(a.api,r||[]):(a.actionQueue.push({fn:t,args:r}),a.actionQueue.length>10&&setTimeout(function(){a.actionQueue.length>5&&a.actionQueue.shift()},99)),a):!1};if(["audio","video"].forEach(function(r){var a,n={},i=function(e){("audio"!=r||"videoHeight"!=e&&"videoWidth"!=e)&&(n[e]={get:function(){var t=v(this);return t?t[e]:l&&a[e].prop._supget?a[e].prop._supget.apply(this):m[e]},writeable:!1})},o=function(e,t){i(e),delete n[e].writeable,n[e].set=t};o("volume",function(e){var r=v(this);if(r)e*=1,isNaN(e)||((0>e||e>1)&&t.error("volume greater or less than allowed "+e/100),M(this,"api_volume",[e],r),r.volume!=e&&(r.volume=e,g(r._elem,"volumechange")),r=null);else if(a.volume.prop._supset)return a.volume.prop._supset.apply(this,arguments)}),o("muted",function(e){var t=v(this);if(t)e=!!e,M(this,"api_muted",[e],t),t.muted!=e&&(t.muted=e,g(t._elem,"volumechange")),t=null;else if(a.muted.prop._supset)return a.muted.prop._supset.apply(this,arguments)}),o("currentTime",function(e){var t=v(this);if(t)e*=1,isNaN(e)||M(this,"api_seek",[e],t);else if(a.currentTime.prop._supset)return a.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(e){n[e]={value:function(){var t=v(this);if(t)t.stopPlayPause&&clearTimeout(t.stopPlayPause),M(this,"play"==e?"api_play":"api_pause",[],t),t._ppFlag=!0,t.paused!=("play"!=e)&&(t.paused="play"!=e,g(t._elem,e));else if(a[e].prop._supvalue)return a[e].prop._supvalue.apply(this,arguments)}}}),f.forEach(i),t.onNodeNamesPropertyModify(r,"controls",function(t,a){var n=v(this);e(this)[a?"addClass":"removeClass"]("webshims-controls"),n&&("audio"==r&&P(n,a),M(this,"api_controls",[a],n))}),t.onNodeNamesPropertyModify(r,"preload",function(){var r,a,n;O(this)&&(r=v(this),r?M(this,"api_preload",[],r):!d||!this.paused||this.error||e.data(this,"mediaerror")||this.readyState||this.networkState||this.autoplay||!e(this).is(":not(.nonnative-api-active)")||(n=this,a=t.data(n,"mediaelementBase")||t.data(n,"mediaelementBase",{}),clearTimeout(a.loadTimer),a.loadTimer=setTimeout(function(){e(n).mediaLoad()},9)))}),a=t.defineNodeNameProperties(r,n,"prop")}),u&&e.cleanData){var j=e.cleanData,I={object:1,OBJECT:1};e.cleanData=function(e){var t,r;if(e&&(r=e.length)&&c)for(t=0;r>t;t++)if(I[e[t].nodeName]&&"api_pause"in e[t]){c--;try{e[t].api_pause()}catch(a){}}return j.apply(this,arguments)}}l||(["poster","src"].forEach(function(e){t.defineNodeNamesProperty("src"==e?["audio","video","source"]:["video"],e,{reflect:!0,propType:"src"})}),t.defineNodeNamesProperty(["audio","video"],"preload",{reflect:!0,propType:"enumarated",defaultValue:"",limitedTo:["","auto","metadata","none"]}),["autoplay","controls"].forEach(function(e){t.defineNodeNamesBooleanProperty(["audio","video"],e)}),t.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});