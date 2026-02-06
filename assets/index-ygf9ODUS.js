(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const dv="modulepreload",hv=function(t){return"/GalacticGolf/"+t},ih={},pv=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=Promise.allSettled(n.map(l=>{if(l=hv(l),l in ih)return;ih[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":dv,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((h,p)=>{d.addEventListener("load",h),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function Jm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var eg={exports:{}},nc={},tg={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=Symbol.for("react.element"),mv=Symbol.for("react.portal"),gv=Symbol.for("react.fragment"),_v=Symbol.for("react.strict_mode"),vv=Symbol.for("react.profiler"),xv=Symbol.for("react.provider"),yv=Symbol.for("react.context"),Sv=Symbol.for("react.forward_ref"),Mv=Symbol.for("react.suspense"),Ev=Symbol.for("react.memo"),Tv=Symbol.for("react.lazy"),rh=Symbol.iterator;function wv(t){return t===null||typeof t!="object"?null:(t=rh&&t[rh]||t["@@iterator"],typeof t=="function"?t:null)}var ng={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ig=Object.assign,rg={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=rg,this.updater=n||ng}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sg(){}sg.prototype=Ks.prototype;function jf(t,e,n){this.props=t,this.context=e,this.refs=rg,this.updater=n||ng}var Yf=jf.prototype=new sg;Yf.constructor=jf;ig(Yf,Ks.prototype);Yf.isPureReactComponent=!0;var sh=Array.isArray,og=Object.prototype.hasOwnProperty,qf={current:null},ag={key:!0,ref:!0,__self:!0,__source:!0};function lg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)og.call(e,i)&&!ag.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ra,type:t,key:s,ref:o,props:r,_owner:qf.current}}function Av(t,e){return{$$typeof:ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $f(t){return typeof t=="object"&&t!==null&&t.$$typeof===ra}function bv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var oh=/\/+/g;function Rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bv(""+t.key):e.toString(36)}function ll(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ra:case mv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Rc(o,0):i,sh(r)?(n="",t!=null&&(n=t.replace(oh,"$&/")+"/"),ll(r,e,n,"",function(c){return c})):r!=null&&($f(r)&&(r=Av(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(oh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",sh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Rc(s,a);o+=ll(s,e,n,l,r)}else if(l=wv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Rc(s,a++),o+=ll(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ma(t,e,n){if(t==null)return t;var i=[],r=0;return ll(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Rv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},cl={transition:null},Cv={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:cl,ReactCurrentOwner:qf};function cg(){throw Error("act(...) is not supported in production builds of React.")}je.Children={map:ma,forEach:function(t,e,n){ma(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ma(t,function(){e++}),e},toArray:function(t){return ma(t,function(e){return e})||[]},only:function(t){if(!$f(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Ks;je.Fragment=gv;je.Profiler=vv;je.PureComponent=jf;je.StrictMode=_v;je.Suspense=Mv;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cv;je.act=cg;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ig({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)og.call(e,l)&&!ag.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ra,type:t.type,key:r,ref:s,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:yv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xv,_context:t},t.Consumer=t};je.createElement=lg;je.createFactory=function(t){var e=lg.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:Sv,render:t}};je.isValidElement=$f;je.lazy=function(t){return{$$typeof:Tv,_payload:{_status:-1,_result:t},_init:Rv}};je.memo=function(t,e){return{$$typeof:Ev,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};je.unstable_act=cg;je.useCallback=function(t,e){return sn.current.useCallback(t,e)};je.useContext=function(t){return sn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};je.useEffect=function(t,e){return sn.current.useEffect(t,e)};je.useId=function(){return sn.current.useId()};je.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return sn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};je.useRef=function(t){return sn.current.useRef(t)};je.useState=function(t){return sn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return sn.current.useTransition()};je.version="18.3.1";tg.exports=je;var Ei=tg.exports;const ug=Jm(Ei);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pv=Ei,Lv=Symbol.for("react.element"),Dv=Symbol.for("react.fragment"),Nv=Object.prototype.hasOwnProperty,Iv=Pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uv={key:!0,ref:!0,__self:!0,__source:!0};function fg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Nv.call(e,i)&&!Uv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Lv,type:t,key:s,ref:o,props:r,_owner:Iv.current}}nc.Fragment=Dv;nc.jsx=fg;nc.jsxs=fg;eg.exports=nc;var Z=eg.exports,zu={},dg={exports:{}},En={},hg={exports:{}},pg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,O){var V=I.length;I.push(O);e:for(;0<V;){var q=V-1>>>1,oe=I[q];if(0<r(oe,O))I[q]=O,I[V]=oe,V=q;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var O=I[0],V=I.pop();if(V!==O){I[0]=V;e:for(var q=0,oe=I.length,X=oe>>>1;q<X;){var K=2*(q+1)-1,ce=I[K],_e=K+1,ve=I[_e];if(0>r(ce,V))_e<oe&&0>r(ve,ce)?(I[q]=ve,I[_e]=V,q=_e):(I[q]=ce,I[K]=V,q=K);else if(_e<oe&&0>r(ve,V))I[q]=ve,I[_e]=V,q=_e;else break e}}return O}function r(I,O){var V=I.sortIndex-O.sortIndex;return V!==0?V:I.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(I){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=I)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function M(I){if(x=!1,g(I),!v)if(n(l)!==null)v=!0,Y(R);else{var O=n(c);O!==null&&$(M,O.startTime-I)}}function R(I,O){v=!1,x&&(x=!1,u(N),N=-1),p=!0;var V=h;try{for(g(O),d=n(l);d!==null&&(!(d.expirationTime>O)||I&&!F());){var q=d.callback;if(typeof q=="function"){d.callback=null,h=d.priorityLevel;var oe=q(d.expirationTime<=O);O=t.unstable_now(),typeof oe=="function"?d.callback=oe:d===n(l)&&i(l),g(O)}else i(l);d=n(l)}if(d!==null)var X=!0;else{var K=n(c);K!==null&&$(M,K.startTime-O),X=!1}return X}finally{d=null,h=V,p=!1}}var A=!1,w=null,N=-1,y=5,E=-1;function F(){return!(t.unstable_now()-E<y)}function j(){if(w!==null){var I=t.unstable_now();E=I;var O=!0;try{O=w(!0,I)}finally{O?Q():(A=!1,w=null)}}else A=!1}var Q;if(typeof _=="function")Q=function(){_(j)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,z=D.port2;D.port1.onmessage=j,Q=function(){z.postMessage(null)}}else Q=function(){m(j,0)};function Y(I){w=I,A||(A=!0,Q())}function $(I,O){N=m(function(){I(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Y(R))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var V=h;h=O;try{return I()}finally{h=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,O){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var V=h;h=I;try{return O()}finally{h=V}},t.unstable_scheduleCallback=function(I,O,V){var q=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?q+V:q):V=q,I){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=V+oe,I={id:f++,callback:O,priorityLevel:I,startTime:V,expirationTime:oe,sortIndex:-1},V>q?(I.sortIndex=V,e(c,I),n(l)===null&&I===n(c)&&(x?(u(N),N=-1):x=!0,$(M,V-q))):(I.sortIndex=oe,e(l,I),v||p||(v=!0,Y(R))),I},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(I){var O=h;return function(){var V=h;h=O;try{return I.apply(this,arguments)}finally{h=V}}}})(pg);hg.exports=pg;var Ov=hg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv=Ei,Mn=Ov;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mg=new Set,Oo={};function Hr(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(Oo[t]=e,t=0;t<e.length;t++)mg.add(e[t])}var Ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ku=Object.prototype.hasOwnProperty,zv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ah={},lh={};function kv(t){return ku.call(lh,t)?!0:ku.call(ah,t)?!1:zv.test(t)?lh[t]=!0:(ah[t]=!0,!1)}function Bv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Hv(t,e,n,i){if(e===null||typeof e>"u"||Bv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kf=/[\-:]([a-z])/g;function Zf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kf,Zf);Vt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kf,Zf);Vt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kf,Zf);Vt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qf(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Hv(e,n,r,i)&&(n=null),i||r===null?kv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ci=Fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ga=Symbol.for("react.element"),hs=Symbol.for("react.portal"),ps=Symbol.for("react.fragment"),Jf=Symbol.for("react.strict_mode"),Bu=Symbol.for("react.profiler"),gg=Symbol.for("react.provider"),_g=Symbol.for("react.context"),ed=Symbol.for("react.forward_ref"),Hu=Symbol.for("react.suspense"),Gu=Symbol.for("react.suspense_list"),td=Symbol.for("react.memo"),Oi=Symbol.for("react.lazy"),vg=Symbol.for("react.offscreen"),ch=Symbol.iterator;function to(t){return t===null||typeof t!="object"?null:(t=ch&&t[ch]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Cc;function yo(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var Pc=!1;function Lc(t,e){if(!t||Pc)return"";Pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Pc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yo(t):""}function Gv(t){switch(t.tag){case 5:return yo(t.type);case 16:return yo("Lazy");case 13:return yo("Suspense");case 19:return yo("SuspenseList");case 0:case 2:case 15:return t=Lc(t.type,!1),t;case 11:return t=Lc(t.type.render,!1),t;case 1:return t=Lc(t.type,!0),t;default:return""}}function Vu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ps:return"Fragment";case hs:return"Portal";case Bu:return"Profiler";case Jf:return"StrictMode";case Hu:return"Suspense";case Gu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _g:return(t.displayName||"Context")+".Consumer";case gg:return(t._context.displayName||"Context")+".Provider";case ed:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case td:return e=t.displayName||null,e!==null?e:Vu(t.type)||"Memo";case Oi:e=t._payload,t=t._init;try{return Vu(t(e))}catch{}}return null}function Vv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vu(e);case 8:return e===Jf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wv(t){var e=xg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _a(t){t._valueTracker||(t._valueTracker=Wv(t))}function yg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=xg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wu(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function uh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sg(t,e){e=e.checked,e!=null&&Qf(t,"checked",e,!1)}function Xu(t,e){Sg(t,e);var n=rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ju(t,e.type,n):e.hasOwnProperty("defaultValue")&&ju(t,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ju(t,e,n){(e!=="number"||Ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var So=Array.isArray;function Rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Yu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(So(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rr(n)}}function Mg(t,e){var n=rr(e.value),i=rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function hh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Eg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Eg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var va,Tg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(va=va||document.createElement("div"),va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xv=["Webkit","ms","Moz","O"];Object.keys(wo).forEach(function(t){Xv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wo[e]=wo[t]})});function wg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wo.hasOwnProperty(t)&&wo[t]?(""+e).trim():e+"px"}function Ag(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=wg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var jv=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $u(t,e){if(e){if(jv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Ku(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zu=null;function nd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qu=null,Cs=null,Ps=null;function ph(t){if(t=aa(t)){if(typeof Qu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=ac(e),Qu(t.stateNode,t.type,e))}}function bg(t){Cs?Ps?Ps.push(t):Ps=[t]:Cs=t}function Rg(){if(Cs){var t=Cs,e=Ps;if(Ps=Cs=null,ph(t),e)for(t=0;t<e.length;t++)ph(e[t])}}function Cg(t,e){return t(e)}function Pg(){}var Dc=!1;function Lg(t,e,n){if(Dc)return t(e,n);Dc=!0;try{return Cg(t,e,n)}finally{Dc=!1,(Cs!==null||Ps!==null)&&(Pg(),Rg())}}function zo(t,e){var n=t.stateNode;if(n===null)return null;var i=ac(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Ju=!1;if(Ti)try{var no={};Object.defineProperty(no,"passive",{get:function(){Ju=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{Ju=!1}function Yv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Ao=!1,El=null,Tl=!1,ef=null,qv={onError:function(t){Ao=!0,El=t}};function $v(t,e,n,i,r,s,o,a,l){Ao=!1,El=null,Yv.apply(qv,arguments)}function Kv(t,e,n,i,r,s,o,a,l){if($v.apply(this,arguments),Ao){if(Ao){var c=El;Ao=!1,El=null}else throw Error(ne(198));Tl||(Tl=!0,ef=c)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Dg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mh(t){if(Gr(t)!==t)throw Error(ne(188))}function Zv(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return mh(r),t;if(s===i)return mh(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Ng(t){return t=Zv(t),t!==null?Ig(t):null}function Ig(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ig(t);if(e!==null)return e;t=t.sibling}return null}var Ug=Mn.unstable_scheduleCallback,gh=Mn.unstable_cancelCallback,Qv=Mn.unstable_shouldYield,Jv=Mn.unstable_requestPaint,Et=Mn.unstable_now,ex=Mn.unstable_getCurrentPriorityLevel,id=Mn.unstable_ImmediatePriority,Og=Mn.unstable_UserBlockingPriority,wl=Mn.unstable_NormalPriority,tx=Mn.unstable_LowPriority,Fg=Mn.unstable_IdlePriority,ic=null,ii=null;function nx(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(ic,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:sx,ix=Math.log,rx=Math.LN2;function sx(t){return t>>>=0,t===0?32:31-(ix(t)/rx|0)|0}var xa=64,ya=4194304;function Mo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Al(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Mo(a):(s&=o,s!==0&&(i=Mo(s)))}else o=n&~r,o!==0?i=Mo(o):s!==0&&(i=Mo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function ox(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ax(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=ox(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function tf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function zg(){var t=xa;return xa<<=1,!(xa&4194240)&&(xa=64),t}function Nc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function lx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function rd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function kg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Bg,sd,Hg,Gg,Vg,nf=!1,Sa=[],ji=null,Yi=null,qi=null,ko=new Map,Bo=new Map,Bi=[],cx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _h(t,e){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":qi=null;break;case"pointerover":case"pointerout":ko.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(e.pointerId)}}function io(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=aa(e),e!==null&&sd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ux(t,e,n,i,r){switch(e){case"focusin":return ji=io(ji,t,e,n,i,r),!0;case"dragenter":return Yi=io(Yi,t,e,n,i,r),!0;case"mouseover":return qi=io(qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ko.set(s,io(ko.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Bo.set(s,io(Bo.get(s)||null,t,e,n,i,r)),!0}return!1}function Wg(t){var e=Er(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=Dg(n),e!==null){t.blockedOn=e,Vg(t.priority,function(){Hg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zu=i,n.target.dispatchEvent(i),Zu=null}else return e=aa(n),e!==null&&sd(e),t.blockedOn=n,!1;e.shift()}return!0}function vh(t,e,n){ul(t)&&n.delete(e)}function fx(){nf=!1,ji!==null&&ul(ji)&&(ji=null),Yi!==null&&ul(Yi)&&(Yi=null),qi!==null&&ul(qi)&&(qi=null),ko.forEach(vh),Bo.forEach(vh)}function ro(t,e){t.blockedOn===e&&(t.blockedOn=null,nf||(nf=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,fx)))}function Ho(t){function e(r){return ro(r,t)}if(0<Sa.length){ro(Sa[0],t);for(var n=1;n<Sa.length;n++){var i=Sa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ji!==null&&ro(ji,t),Yi!==null&&ro(Yi,t),qi!==null&&ro(qi,t),ko.forEach(e),Bo.forEach(e),n=0;n<Bi.length;n++)i=Bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Bi.length&&(n=Bi[0],n.blockedOn===null);)Wg(n),n.blockedOn===null&&Bi.shift()}var Ls=Ci.ReactCurrentBatchConfig,bl=!0;function dx(t,e,n,i){var r=tt,s=Ls.transition;Ls.transition=null;try{tt=1,od(t,e,n,i)}finally{tt=r,Ls.transition=s}}function hx(t,e,n,i){var r=tt,s=Ls.transition;Ls.transition=null;try{tt=4,od(t,e,n,i)}finally{tt=r,Ls.transition=s}}function od(t,e,n,i){if(bl){var r=rf(t,e,n,i);if(r===null)Vc(t,e,i,Rl,n),_h(t,i);else if(ux(r,t,e,n,i))i.stopPropagation();else if(_h(t,i),e&4&&-1<cx.indexOf(t)){for(;r!==null;){var s=aa(r);if(s!==null&&Bg(s),s=rf(t,e,n,i),s===null&&Vc(t,e,i,Rl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Vc(t,e,i,null,n)}}var Rl=null;function rf(t,e,n,i){if(Rl=null,t=nd(i),t=Er(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Dg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Rl=t,null}function Xg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ex()){case id:return 1;case Og:return 4;case wl:case tx:return 16;case Fg:return 536870912;default:return 16}default:return 16}}var Gi=null,ad=null,fl=null;function jg(){if(fl)return fl;var t,e=ad,n=e.length,i,r="value"in Gi?Gi.value:Gi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return fl=r.slice(t,1<i?1-i:void 0)}function dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ma(){return!0}function xh(){return!1}function Tn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ma:xh,this.isPropagationStopped=xh,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ld=Tn(Zs),oa=_t({},Zs,{view:0,detail:0}),px=Tn(oa),Ic,Uc,so,rc=_t({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(Ic=t.screenX-so.screenX,Uc=t.screenY-so.screenY):Uc=Ic=0,so=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:Uc}}),yh=Tn(rc),mx=_t({},rc,{dataTransfer:0}),gx=Tn(mx),_x=_t({},oa,{relatedTarget:0}),Oc=Tn(_x),vx=_t({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),xx=Tn(vx),yx=_t({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sx=Tn(yx),Mx=_t({},Zs,{data:0}),Sh=Tn(Mx),Ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ax(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wx[t])?!!e[t]:!1}function cd(){return Ax}var bx=_t({},oa,{key:function(t){if(t.key){var e=Ex[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Tx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cd,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Rx=Tn(bx),Cx=_t({},rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mh=Tn(Cx),Px=_t({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cd}),Lx=Tn(Px),Dx=_t({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nx=Tn(Dx),Ix=_t({},rc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ux=Tn(Ix),Ox=[9,13,27,32],ud=Ti&&"CompositionEvent"in window,bo=null;Ti&&"documentMode"in document&&(bo=document.documentMode);var Fx=Ti&&"TextEvent"in window&&!bo,Yg=Ti&&(!ud||bo&&8<bo&&11>=bo),Eh=" ",Th=!1;function qg(t,e){switch(t){case"keyup":return Ox.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $g(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ms=!1;function zx(t,e){switch(t){case"compositionend":return $g(e);case"keypress":return e.which!==32?null:(Th=!0,Eh);case"textInput":return t=e.data,t===Eh&&Th?null:t;default:return null}}function kx(t,e){if(ms)return t==="compositionend"||!ud&&qg(t,e)?(t=jg(),fl=ad=Gi=null,ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Yg&&e.locale!=="ko"?null:e.data;default:return null}}var Bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Bx[t.type]:e==="textarea"}function Kg(t,e,n,i){bg(i),e=Cl(e,"onChange"),0<e.length&&(n=new ld("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ro=null,Go=null;function Hx(t){a0(t,0)}function sc(t){var e=vs(t);if(yg(e))return t}function Gx(t,e){if(t==="change")return e}var Zg=!1;if(Ti){var Fc;if(Ti){var zc="oninput"in document;if(!zc){var Ah=document.createElement("div");Ah.setAttribute("oninput","return;"),zc=typeof Ah.oninput=="function"}Fc=zc}else Fc=!1;Zg=Fc&&(!document.documentMode||9<document.documentMode)}function bh(){Ro&&(Ro.detachEvent("onpropertychange",Qg),Go=Ro=null)}function Qg(t){if(t.propertyName==="value"&&sc(Go)){var e=[];Kg(e,Go,t,nd(t)),Lg(Hx,e)}}function Vx(t,e,n){t==="focusin"?(bh(),Ro=e,Go=n,Ro.attachEvent("onpropertychange",Qg)):t==="focusout"&&bh()}function Wx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sc(Go)}function Xx(t,e){if(t==="click")return sc(e)}function jx(t,e){if(t==="input"||t==="change")return sc(e)}function Yx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:Yx;function Vo(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ku.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function Rh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ch(t,e){var n=Rh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rh(n)}}function Jg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function e0(){for(var t=window,e=Ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ml(t.document)}return e}function fd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qx(t){var e=e0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Jg(n.ownerDocument.documentElement,n)){if(i!==null&&fd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ch(n,s);var o=Ch(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $x=Ti&&"documentMode"in document&&11>=document.documentMode,gs=null,sf=null,Co=null,of=!1;function Ph(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;of||gs==null||gs!==Ml(i)||(i=gs,"selectionStart"in i&&fd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Co&&Vo(Co,i)||(Co=i,i=Cl(sf,"onSelect"),0<i.length&&(e=new ld("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=gs)))}function Ea(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _s={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionend:Ea("Transition","TransitionEnd")},kc={},t0={};Ti&&(t0=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function oc(t){if(kc[t])return kc[t];if(!_s[t])return t;var e=_s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in t0)return kc[t]=e[n];return t}var n0=oc("animationend"),i0=oc("animationiteration"),r0=oc("animationstart"),s0=oc("transitionend"),o0=new Map,Lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,e){o0.set(t,e),Hr(e,[t])}for(var Bc=0;Bc<Lh.length;Bc++){var Hc=Lh[Bc],Kx=Hc.toLowerCase(),Zx=Hc[0].toUpperCase()+Hc.slice(1);ar(Kx,"on"+Zx)}ar(n0,"onAnimationEnd");ar(i0,"onAnimationIteration");ar(r0,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(s0,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function Dh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Kv(i,e,void 0,t),t.currentTarget=null}function a0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Dh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Dh(r,a,c),s=l}}}if(Tl)throw t=ef,Tl=!1,ef=null,t}function at(t,e){var n=e[ff];n===void 0&&(n=e[ff]=new Set);var i=t+"__bubble";n.has(i)||(l0(e,t,2,!1),n.add(i))}function Gc(t,e,n){var i=0;e&&(i|=4),l0(n,t,i,e)}var Ta="_reactListening"+Math.random().toString(36).slice(2);function Wo(t){if(!t[Ta]){t[Ta]=!0,mg.forEach(function(n){n!=="selectionchange"&&(Qx.has(n)||Gc(n,!1,t),Gc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ta]||(e[Ta]=!0,Gc("selectionchange",!1,e))}}function l0(t,e,n,i){switch(Xg(e)){case 1:var r=dx;break;case 4:r=hx;break;default:r=od}n=r.bind(null,e,n,t),r=void 0,!Ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Vc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Lg(function(){var c=s,f=nd(n),d=[];e:{var h=o0.get(t);if(h!==void 0){var p=ld,v=t;switch(t){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":p=Rx;break;case"focusin":v="focus",p=Oc;break;case"focusout":v="blur",p=Oc;break;case"beforeblur":case"afterblur":p=Oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Lx;break;case n0:case i0:case r0:p=xx;break;case s0:p=Nx;break;case"scroll":p=px;break;case"wheel":p=Ux;break;case"copy":case"cut":case"paste":p=Sx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Mh}var x=(e&4)!==0,m=!x&&t==="scroll",u=x?h!==null?h+"Capture":null:h;x=[];for(var _=c,g;_!==null;){g=_;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,u!==null&&(M=zo(_,u),M!=null&&x.push(Xo(_,M,g)))),m)break;_=_.return}0<x.length&&(h=new p(h,v,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Zu&&(v=n.relatedTarget||n.fromElement)&&(Er(v)||v[wi]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Er(v):null,v!==null&&(m=Gr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=yh,M="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Mh,M="onPointerLeave",u="onPointerEnter",_="pointer"),m=p==null?h:vs(p),g=v==null?h:vs(v),h=new x(M,_+"leave",p,n,f),h.target=m,h.relatedTarget=g,M=null,Er(f)===c&&(x=new x(u,_+"enter",v,n,f),x.target=g,x.relatedTarget=m,M=x),m=M,p&&v)t:{for(x=p,u=v,_=0,g=x;g;g=Wr(g))_++;for(g=0,M=u;M;M=Wr(M))g++;for(;0<_-g;)x=Wr(x),_--;for(;0<g-_;)u=Wr(u),g--;for(;_--;){if(x===u||u!==null&&x===u.alternate)break t;x=Wr(x),u=Wr(u)}x=null}else x=null;p!==null&&Nh(d,h,p,x,!1),v!==null&&m!==null&&Nh(d,m,v,x,!0)}}e:{if(h=c?vs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=Gx;else if(wh(h))if(Zg)R=jx;else{R=Wx;var A=Vx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=Xx);if(R&&(R=R(t,c))){Kg(d,R,n,f);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&ju(h,"number",h.value)}switch(A=c?vs(c):window,t){case"focusin":(wh(A)||A.contentEditable==="true")&&(gs=A,sf=c,Co=null);break;case"focusout":Co=sf=gs=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,Ph(d,n,f);break;case"selectionchange":if($x)break;case"keydown":case"keyup":Ph(d,n,f)}var w;if(ud)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else ms?qg(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Yg&&n.locale!=="ko"&&(ms||N!=="onCompositionStart"?N==="onCompositionEnd"&&ms&&(w=jg()):(Gi=f,ad="value"in Gi?Gi.value:Gi.textContent,ms=!0)),A=Cl(c,N),0<A.length&&(N=new Sh(N,t,null,n,f),d.push({event:N,listeners:A}),w?N.data=w:(w=$g(n),w!==null&&(N.data=w)))),(w=Fx?zx(t,n):kx(t,n))&&(c=Cl(c,"onBeforeInput"),0<c.length&&(f=new Sh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=w))}a0(d,e)})}function Xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=zo(t,n),s!=null&&i.unshift(Xo(t,s,r)),s=zo(t,e),s!=null&&i.push(Xo(t,s,r))),t=t.return}return i}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=zo(n,s),l!=null&&o.unshift(Xo(n,l,a))):r||(l=zo(n,s),l!=null&&o.push(Xo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Jx=/\r\n?/g,ey=/\u0000|\uFFFD/g;function Ih(t){return(typeof t=="string"?t:""+t).replace(Jx,`
`).replace(ey,"")}function wa(t,e,n){if(e=Ih(e),Ih(t)!==e&&n)throw Error(ne(425))}function Pl(){}var af=null,lf=null;function cf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uf=typeof setTimeout=="function"?setTimeout:void 0,ty=typeof clearTimeout=="function"?clearTimeout:void 0,Uh=typeof Promise=="function"?Promise:void 0,ny=typeof queueMicrotask=="function"?queueMicrotask:typeof Uh<"u"?function(t){return Uh.resolve(null).then(t).catch(iy)}:uf;function iy(t){setTimeout(function(){throw t})}function Wc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ho(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ho(e)}function $i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Oh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),ti="__reactFiber$"+Qs,jo="__reactProps$"+Qs,wi="__reactContainer$"+Qs,ff="__reactEvents$"+Qs,ry="__reactListeners$"+Qs,sy="__reactHandles$"+Qs;function Er(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wi]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Oh(t);t!==null;){if(n=t[ti])return n;t=Oh(t)}return e}t=n,n=t.parentNode}return null}function aa(t){return t=t[ti]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function ac(t){return t[jo]||null}var df=[],xs=-1;function lr(t){return{current:t}}function ct(t){0>xs||(t.current=df[xs],df[xs]=null,xs--)}function rt(t,e){xs++,df[xs]=t.current,t.current=e}var sr={},Kt=lr(sr),un=lr(!1),Dr=sr;function Fs(t,e){var n=t.type.contextTypes;if(!n)return sr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function Ll(){ct(un),ct(Kt)}function Fh(t,e,n){if(Kt.current!==sr)throw Error(ne(168));rt(Kt,e),rt(un,n)}function c0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,Vv(t)||"Unknown",r));return _t({},n,i)}function Dl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,Dr=Kt.current,rt(Kt,t),rt(un,un.current),!0}function zh(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=c0(t,e,Dr),i.__reactInternalMemoizedMergedChildContext=t,ct(un),ct(Kt),rt(Kt,t)):ct(un),rt(un,n)}var mi=null,lc=!1,Xc=!1;function u0(t){mi===null?mi=[t]:mi.push(t)}function oy(t){lc=!0,u0(t)}function cr(){if(!Xc&&mi!==null){Xc=!0;var t=0,e=tt;try{var n=mi;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}mi=null,lc=!1}catch(r){throw mi!==null&&(mi=mi.slice(t+1)),Ug(id,cr),r}finally{tt=e,Xc=!1}}return null}var ys=[],Ss=0,Nl=null,Il=0,bn=[],Rn=0,Nr=null,xi=1,yi="";function _r(t,e){ys[Ss++]=Il,ys[Ss++]=Nl,Nl=t,Il=e}function f0(t,e,n){bn[Rn++]=xi,bn[Rn++]=yi,bn[Rn++]=Nr,Nr=t;var i=xi;t=yi;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,xi=1<<32-jn(e)+r|n<<r|i,yi=s+t}else xi=1<<s|n<<r|i,yi=t}function dd(t){t.return!==null&&(_r(t,1),f0(t,1,0))}function hd(t){for(;t===Nl;)Nl=ys[--Ss],ys[Ss]=null,Il=ys[--Ss],ys[Ss]=null;for(;t===Nr;)Nr=bn[--Rn],bn[Rn]=null,yi=bn[--Rn],bn[Rn]=null,xi=bn[--Rn],bn[Rn]=null}var Sn=null,xn=null,ft=!1,Wn=null;function d0(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,xn=$i(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:xi,overflow:yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,xn=null,!0):!1;default:return!1}}function hf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pf(t){if(ft){var e=xn;if(e){var n=e;if(!kh(t,e)){if(hf(t))throw Error(ne(418));e=$i(n.nextSibling);var i=Sn;e&&kh(t,e)?d0(i,n):(t.flags=t.flags&-4097|2,ft=!1,Sn=t)}}else{if(hf(t))throw Error(ne(418));t.flags=t.flags&-4097|2,ft=!1,Sn=t}}}function Bh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function Aa(t){if(t!==Sn)return!1;if(!ft)return Bh(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cf(t.type,t.memoizedProps)),e&&(e=xn)){if(hf(t))throw h0(),Error(ne(418));for(;e;)d0(t,e),e=$i(e.nextSibling)}if(Bh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=$i(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=Sn?$i(t.stateNode.nextSibling):null;return!0}function h0(){for(var t=xn;t;)t=$i(t.nextSibling)}function zs(){xn=Sn=null,ft=!1}function pd(t){Wn===null?Wn=[t]:Wn.push(t)}var ay=Ci.ReactCurrentBatchConfig;function oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function ba(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hh(t){var e=t._init;return e(t._payload)}function p0(t){function e(u,_){if(t){var g=u.deletions;g===null?(u.deletions=[_],u.flags|=16):g.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=Ji(u,_),u.index=0,u.sibling=null,u}function s(u,_,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<_?(u.flags|=2,_):g):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,g,M){return _===null||_.tag!==6?(_=Qc(g,u.mode,M),_.return=u,_):(_=r(_,g),_.return=u,_)}function l(u,_,g,M){var R=g.type;return R===ps?f(u,_,g.props.children,M,g.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Oi&&Hh(R)===_.type)?(M=r(_,g.props),M.ref=oo(u,_,g),M.return=u,M):(M=xl(g.type,g.key,g.props,null,u.mode,M),M.ref=oo(u,_,g),M.return=u,M)}function c(u,_,g,M){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Jc(g,u.mode,M),_.return=u,_):(_=r(_,g.children||[]),_.return=u,_)}function f(u,_,g,M,R){return _===null||_.tag!==7?(_=br(g,u.mode,M,R),_.return=u,_):(_=r(_,g),_.return=u,_)}function d(u,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Qc(""+_,u.mode,g),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ga:return g=xl(_.type,_.key,_.props,null,u.mode,g),g.ref=oo(u,null,_),g.return=u,g;case hs:return _=Jc(_,u.mode,g),_.return=u,_;case Oi:var M=_._init;return d(u,M(_._payload),g)}if(So(_)||to(_))return _=br(_,u.mode,g,null),_.return=u,_;ba(u,_)}return null}function h(u,_,g,M){var R=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:a(u,_,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ga:return g.key===R?l(u,_,g,M):null;case hs:return g.key===R?c(u,_,g,M):null;case Oi:return R=g._init,h(u,_,R(g._payload),M)}if(So(g)||to(g))return R!==null?null:f(u,_,g,M,null);ba(u,g)}return null}function p(u,_,g,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(g)||null,a(_,u,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ga:return u=u.get(M.key===null?g:M.key)||null,l(_,u,M,R);case hs:return u=u.get(M.key===null?g:M.key)||null,c(_,u,M,R);case Oi:var A=M._init;return p(u,_,g,A(M._payload),R)}if(So(M)||to(M))return u=u.get(g)||null,f(_,u,M,R,null);ba(_,M)}return null}function v(u,_,g,M){for(var R=null,A=null,w=_,N=_=0,y=null;w!==null&&N<g.length;N++){w.index>N?(y=w,w=null):y=w.sibling;var E=h(u,w,g[N],M);if(E===null){w===null&&(w=y);break}t&&w&&E.alternate===null&&e(u,w),_=s(E,_,N),A===null?R=E:A.sibling=E,A=E,w=y}if(N===g.length)return n(u,w),ft&&_r(u,N),R;if(w===null){for(;N<g.length;N++)w=d(u,g[N],M),w!==null&&(_=s(w,_,N),A===null?R=w:A.sibling=w,A=w);return ft&&_r(u,N),R}for(w=i(u,w);N<g.length;N++)y=p(w,u,N,g[N],M),y!==null&&(t&&y.alternate!==null&&w.delete(y.key===null?N:y.key),_=s(y,_,N),A===null?R=y:A.sibling=y,A=y);return t&&w.forEach(function(F){return e(u,F)}),ft&&_r(u,N),R}function x(u,_,g,M){var R=to(g);if(typeof R!="function")throw Error(ne(150));if(g=R.call(g),g==null)throw Error(ne(151));for(var A=R=null,w=_,N=_=0,y=null,E=g.next();w!==null&&!E.done;N++,E=g.next()){w.index>N?(y=w,w=null):y=w.sibling;var F=h(u,w,E.value,M);if(F===null){w===null&&(w=y);break}t&&w&&F.alternate===null&&e(u,w),_=s(F,_,N),A===null?R=F:A.sibling=F,A=F,w=y}if(E.done)return n(u,w),ft&&_r(u,N),R;if(w===null){for(;!E.done;N++,E=g.next())E=d(u,E.value,M),E!==null&&(_=s(E,_,N),A===null?R=E:A.sibling=E,A=E);return ft&&_r(u,N),R}for(w=i(u,w);!E.done;N++,E=g.next())E=p(w,u,N,E.value,M),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?N:E.key),_=s(E,_,N),A===null?R=E:A.sibling=E,A=E);return t&&w.forEach(function(j){return e(u,j)}),ft&&_r(u,N),R}function m(u,_,g,M){if(typeof g=="object"&&g!==null&&g.type===ps&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ga:e:{for(var R=g.key,A=_;A!==null;){if(A.key===R){if(R=g.type,R===ps){if(A.tag===7){n(u,A.sibling),_=r(A,g.props.children),_.return=u,u=_;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Oi&&Hh(R)===A.type){n(u,A.sibling),_=r(A,g.props),_.ref=oo(u,A,g),_.return=u,u=_;break e}n(u,A);break}else e(u,A);A=A.sibling}g.type===ps?(_=br(g.props.children,u.mode,M,g.key),_.return=u,u=_):(M=xl(g.type,g.key,g.props,null,u.mode,M),M.ref=oo(u,_,g),M.return=u,u=M)}return o(u);case hs:e:{for(A=g.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(u,_.sibling),_=r(_,g.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=Jc(g,u.mode,M),_.return=u,u=_}return o(u);case Oi:return A=g._init,m(u,_,A(g._payload),M)}if(So(g))return v(u,_,g,M);if(to(g))return x(u,_,g,M);ba(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,g),_.return=u,u=_):(n(u,_),_=Qc(g,u.mode,M),_.return=u,u=_),o(u)):n(u,_)}return m}var ks=p0(!0),m0=p0(!1),Ul=lr(null),Ol=null,Ms=null,md=null;function gd(){md=Ms=Ol=null}function _d(t){var e=Ul.current;ct(Ul),t._currentValue=e}function mf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){Ol=t,md=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(md!==t)if(t={context:t,memoizedValue:e,next:null},Ms===null){if(Ol===null)throw Error(ne(308));Ms=t,Ol.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return e}var Tr=null;function vd(t){Tr===null?Tr=[t]:Tr.push(t)}function g0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,vd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ai(t,i)}function Ai(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fi=!1;function xd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ai(t,n)}return r=i.interleaved,r===null?(e.next=e,vd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ai(t,n)}function hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rd(t,n)}}function Gh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fl(t,e,n,i){var r=t.updateQueue;Fi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(h=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=_t({},d,h);break e;case 2:Fi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ur|=o,t.lanes=o,t.memoizedState=d}}function Vh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var la={},ri=lr(la),Yo=lr(la),qo=lr(la);function wr(t){if(t===la)throw Error(ne(174));return t}function yd(t,e){switch(rt(qo,e),rt(Yo,t),rt(ri,la),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qu(e,t)}ct(ri),rt(ri,e)}function Bs(){ct(ri),ct(Yo),ct(qo)}function v0(t){wr(qo.current);var e=wr(ri.current),n=qu(e,t.type);e!==n&&(rt(Yo,t),rt(ri,n))}function Sd(t){Yo.current===t&&(ct(ri),ct(Yo))}var pt=lr(0);function zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function Md(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var pl=Ci.ReactCurrentDispatcher,Yc=Ci.ReactCurrentBatchConfig,Ir=0,mt=null,Ct=null,Ut=null,kl=!1,Po=!1,$o=0,ly=0;function Xt(){throw Error(ne(321))}function Ed(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function Td(t,e,n,i,r,s){if(Ir=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pl.current=t===null||t.memoizedState===null?dy:hy,t=n(i,r),Po){s=0;do{if(Po=!1,$o=0,25<=s)throw Error(ne(301));s+=1,Ut=Ct=null,e.updateQueue=null,pl.current=py,t=n(i,r)}while(Po)}if(pl.current=Bl,e=Ct!==null&&Ct.next!==null,Ir=0,Ut=Ct=mt=null,kl=!1,e)throw Error(ne(300));return t}function wd(){var t=$o!==0;return $o=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?mt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Fn(){if(Ct===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Ut===null?mt.memoizedState:Ut.next;if(e!==null)Ut=e,Ct=t;else{if(t===null)throw Error(ne(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Ut===null?mt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Ko(t,e){return typeof e=="function"?e(t):e}function qc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Ir&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,mt.lanes|=f,Ur|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,qn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Ur|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $c(t){var e=Fn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);qn(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function x0(){}function y0(t,e){var n=mt,i=Fn(),r=e(),s=!qn(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,Ad(E0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,Zo(9,M0.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(ne(349));Ir&30||S0(n,e,r)}return r}function S0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function M0(t,e,n,i){e.value=n,e.getSnapshot=i,T0(e)&&w0(t)}function E0(t,e,n){return n(function(){T0(e)&&w0(t)})}function T0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function w0(t){var e=Ai(t,1);e!==null&&Yn(e,t,1,-1)}function Wh(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:t},e.queue=t,t=t.dispatch=fy.bind(null,mt,t),[e.memoizedState,t]}function Zo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function A0(){return Fn().memoizedState}function ml(t,e,n,i){var r=Zn();mt.flags|=t,r.memoizedState=Zo(1|e,n,void 0,i===void 0?null:i)}function cc(t,e,n,i){var r=Fn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&Ed(i,o.deps)){r.memoizedState=Zo(e,n,s,i);return}}mt.flags|=t,r.memoizedState=Zo(1|e,n,s,i)}function Xh(t,e){return ml(8390656,8,t,e)}function Ad(t,e){return cc(2048,8,t,e)}function b0(t,e){return cc(4,2,t,e)}function R0(t,e){return cc(4,4,t,e)}function C0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function P0(t,e,n){return n=n!=null?n.concat([t]):null,cc(4,4,C0.bind(null,e,t),n)}function bd(){}function L0(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ed(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function D0(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ed(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function N0(t,e,n){return Ir&21?(qn(n,e)||(n=zg(),mt.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function cy(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=Yc.transition;Yc.transition={};try{t(!1),e()}finally{tt=n,Yc.transition=i}}function I0(){return Fn().memoizedState}function uy(t,e,n){var i=Qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},U0(t))O0(e,n);else if(n=g0(t,e,n,i),n!==null){var r=nn();Yn(n,t,i,r),F0(n,e,i)}}function fy(t,e,n){var i=Qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(U0(t))O0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,qn(a,o)){var l=e.interleaved;l===null?(r.next=r,vd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=g0(t,e,r,i),n!==null&&(r=nn(),Yn(n,t,i,r),F0(n,e,i))}}function U0(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function O0(t,e){Po=kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function F0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,rd(t,n)}}var Bl={readContext:On,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},dy={readContext:On,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:Xh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ml(4194308,4,C0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return ml(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=uy.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:Wh,useDebugValue:bd,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=Wh(!1),e=t[0];return t=cy.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Zn();if(ft){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Ft===null)throw Error(ne(349));Ir&30||S0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Xh(E0.bind(null,i,s,t),[t]),i.flags|=2048,Zo(9,M0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Ft.identifierPrefix;if(ft){var n=yi,i=xi;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=$o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ly++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hy={readContext:On,useCallback:L0,useContext:On,useEffect:Ad,useImperativeHandle:P0,useInsertionEffect:b0,useLayoutEffect:R0,useMemo:D0,useReducer:qc,useRef:A0,useState:function(){return qc(Ko)},useDebugValue:bd,useDeferredValue:function(t){var e=Fn();return N0(e,Ct.memoizedState,t)},useTransition:function(){var t=qc(Ko)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:x0,useSyncExternalStore:y0,useId:I0,unstable_isNewReconciler:!1},py={readContext:On,useCallback:L0,useContext:On,useEffect:Ad,useImperativeHandle:P0,useInsertionEffect:b0,useLayoutEffect:R0,useMemo:D0,useReducer:$c,useRef:A0,useState:function(){return $c(Ko)},useDebugValue:bd,useDeferredValue:function(t){var e=Fn();return Ct===null?e.memoizedState=t:N0(e,Ct.memoizedState,t)},useTransition:function(){var t=$c(Ko)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:x0,useSyncExternalStore:y0,useId:I0,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uc={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=Qi(t),s=Mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,r),e!==null&&(Yn(e,t,r,i),hl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=Qi(t),s=Mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,r),e!==null&&(Yn(e,t,r,i),hl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=Qi(t),r=Mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ki(t,r,i),e!==null&&(Yn(e,t,i,n),hl(e,t,i))}};function jh(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Vo(n,i)||!Vo(r,s):!0}function z0(t,e,n){var i=!1,r=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=fn(e)?Dr:Kt.current,i=e.contextTypes,s=(i=i!=null)?Fs(t,r):sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&uc.enqueueReplaceState(e,e.state,null)}function _f(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},xd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=fn(e)?Dr:Kt.current,r.context=Fs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&uc.enqueueReplaceState(r,r.state,null),Fl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e){try{var n="",i=e;do n+=Gv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var my=typeof WeakMap=="function"?WeakMap:Map;function k0(t,e,n){n=Mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Gl||(Gl=!0,Rf=i),vf(t,e)},n}function B0(t,e,n){n=Mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vf(t,e),typeof i!="function"&&(Zi===null?Zi=new Set([this]):Zi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new my;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Cy.bind(null,t,e,n),e.then(t,t))}function $h(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mi(-1,1),e.tag=2,Ki(n,e,1))),n.lanes|=1),t)}var gy=Ci.ReactCurrentOwner,cn=!1;function Jt(t,e,n,i){e.child=t===null?m0(e,null,n,i):ks(e,t.child,n,i)}function Zh(t,e,n,i,r){n=n.render;var s=e.ref;return Ds(e,r),i=Td(t,e,n,i,s,r),n=wd(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(ft&&n&&dd(e),e.flags|=1,Jt(t,e,i,r),e.child)}function Qh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Ud(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,H0(t,e,s,i,r)):(t=xl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Vo,n(o,i)&&t.ref===e.ref)return bi(t,e,r)}return e.flags|=1,t=Ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function H0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Vo(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,bi(t,e,r)}return xf(t,e,n,i,r)}function G0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(Ts,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(Ts,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,rt(Ts,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,rt(Ts,_n),_n|=i;return Jt(t,e,r,n),e.child}function V0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xf(t,e,n,i,r){var s=fn(n)?Dr:Kt.current;return s=Fs(e,s),Ds(e,r),n=Td(t,e,n,i,s,r),i=wd(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(ft&&i&&dd(e),e.flags|=1,Jt(t,e,n,r),e.child)}function Jh(t,e,n,i,r){if(fn(n)){var s=!0;Dl(e)}else s=!1;if(Ds(e,r),e.stateNode===null)gl(t,e),z0(e,n,i),_f(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=On(c):(c=fn(n)?Dr:Kt.current,c=Fs(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Yh(e,o,i,c),Fi=!1;var h=e.memoizedState;o.state=h,Fl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||un.current||Fi?(typeof f=="function"&&(gf(e,n,f,i),l=e.memoizedState),(a=Fi||jh(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,_0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Gn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=fn(n)?Dr:Kt.current,l=Fs(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Yh(e,o,i,l),Fi=!1,h=e.memoizedState,o.state=h,Fl(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||un.current||Fi?(typeof p=="function"&&(gf(e,n,p,i),v=e.memoizedState),(c=Fi||jh(e,n,c,i,h,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return yf(t,e,n,i,s,r)}function yf(t,e,n,i,r,s){V0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&zh(e,n,!1),bi(t,e,s);i=e.stateNode,gy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ks(e,t.child,null,s),e.child=ks(e,null,a,s)):Jt(t,e,a,s),e.memoizedState=i.state,r&&zh(e,n,!0),e.child}function W0(t){var e=t.stateNode;e.pendingContext?Fh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fh(t,e.context,!1),yd(t,e.containerInfo)}function ep(t,e,n,i,r){return zs(),pd(r),e.flags|=256,Jt(t,e,n,i),e.child}var Sf={dehydrated:null,treeContext:null,retryLane:0};function Mf(t){return{baseLanes:t,cachePool:null,transitions:null}}function X0(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(pt,r&1),t===null)return pf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=hc(o,i,0,null),t=br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mf(n),e.memoizedState=Sf,t):Rd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return _y(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ji(a,s):(s=br(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Mf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sf,i}return s=t.child,t=s.sibling,i=Ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Rd(t,e){return e=hc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ra(t,e,n,i){return i!==null&&pd(i),ks(e,t.child,null,n),t=Rd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _y(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Kc(Error(ne(422))),Ra(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=hc({mode:"visible",children:i.children},r,0,null),s=br(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ks(e,t.child,null,o),e.child.memoizedState=Mf(o),e.memoizedState=Sf,s);if(!(e.mode&1))return Ra(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Kc(s,i,void 0),Ra(t,e,o,i)}if(a=(o&t.childLanes)!==0,cn||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ai(t,r),Yn(i,t,r,-1))}return Id(),i=Kc(Error(ne(421))),Ra(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Py.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,xn=$i(r.nextSibling),Sn=e,ft=!0,Wn=null,t!==null&&(bn[Rn++]=xi,bn[Rn++]=yi,bn[Rn++]=Nr,xi=t.id,yi=t.overflow,Nr=e),e=Rd(e,i.children),e.flags|=4096,e)}function tp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),mf(t.return,e,n)}function Zc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function j0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tp(t,n,e);else if(t.tag===19)tp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&zl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Zc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&zl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Zc(e,!0,n,null,s);break;case"together":Zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vy(t,e,n){switch(e.tag){case 3:W0(e),zs();break;case 5:v0(e);break;case 1:fn(e.type)&&Dl(e);break;case 4:yd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Ul,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?X0(t,e,n):(rt(pt,pt.current&1),t=bi(t,e,n),t!==null?t.sibling:null);rt(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return j0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,G0(t,e,n)}return bi(t,e,n)}var Y0,Ef,q0,$0;Y0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ef=function(){};q0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(ri.current);var s=null;switch(n){case"input":r=Wu(t,r),i=Wu(t,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=Yu(t,r),i=Yu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Pl)}$u(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};$0=function(t,e,n,i){n!==i&&(e.flags|=4)};function ao(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function xy(t,e,n){var i=e.pendingProps;switch(hd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return fn(e.type)&&Ll(),jt(e),null;case 3:return i=e.stateNode,Bs(),ct(un),ct(Kt),Md(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Aa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(Lf(Wn),Wn=null))),Ef(t,e),jt(e),null;case 5:Sd(e);var r=wr(qo.current);if(n=e.type,t!==null&&e.stateNode!=null)q0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return jt(e),null}if(t=wr(ri.current),Aa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[jo]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<Eo.length;r++)at(Eo[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":uh(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":dh(i,s),at("invalid",i)}$u(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&wa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&wa(i.textContent,a,t),r=["children",""+a]):Oo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(n){case"input":_a(i),fh(i,s,!0);break;case"textarea":_a(i),hh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Pl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Eg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ti]=e,t[jo]=i,Y0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ku(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<Eo.length;r++)at(Eo[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":uh(t,i),r=Wu(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),at("invalid",t);break;case"textarea":dh(t,i),r=Yu(t,i),at("invalid",t);break;default:r=i}$u(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ag(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Tg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fo(t,l):typeof l=="number"&&Fo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&Qf(t,s,l,o))}switch(n){case"input":_a(t),fh(t,i,!1);break;case"textarea":_a(t),hh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+rr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Pl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)$0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=wr(qo.current),wr(ri.current),Aa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:wa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return jt(e),null;case 13:if(ct(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&xn!==null&&e.mode&1&&!(e.flags&128))h0(),zs(),e.flags|=98560,s=!1;else if(s=Aa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[ti]=e}else zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Wn!==null&&(Lf(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Pt===0&&(Pt=3):Id())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Bs(),Ef(t,e),t===null&&Wo(e.stateNode.containerInfo),jt(e),null;case 10:return _d(e.type._context),jt(e),null;case 17:return fn(e.type)&&Ll(),jt(e),null;case 19:if(ct(pt),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ao(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=zl(t),o!==null){for(e.flags|=128,ao(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Gs&&(e.flags|=128,i=!0,ao(s,!1),e.lanes=4194304)}else{if(!i)if(t=zl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return jt(e),null}else 2*Et()-s.renderingStartTime>Gs&&n!==1073741824&&(e.flags|=128,i=!0,ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=pt.current,rt(pt,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return Nd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function yy(t,e){switch(hd(e),e.tag){case 1:return fn(e.type)&&Ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Bs(),ct(un),ct(Kt),Md(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sd(e),null;case 13:if(ct(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(pt),null;case 4:return Bs(),null;case 10:return _d(e.type._context),null;case 22:case 23:return Nd(),null;case 24:return null;default:return null}}var Ca=!1,$t=!1,Sy=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function Tf(t,e,n){try{n()}catch(i){yt(t,e,i)}}var np=!1;function My(t,e){if(af=bl,t=e0(),fd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lf={focusedElem:t,selectionRange:n},bl=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Gn(e.type,x),m);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(M){yt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return v=np,np=!1,v}function Lo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Tf(e,n,s)}r=r.next}while(r!==i)}}function fc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function K0(t){var e=t.alternate;e!==null&&(t.alternate=null,K0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[jo],delete e[ff],delete e[ry],delete e[sy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z0(t){return t.tag===5||t.tag===3||t.tag===4}function ip(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pl));else if(i!==4&&(t=t.child,t!==null))for(Af(t,e,n),t=t.sibling;t!==null;)Af(t,e,n),t=t.sibling}function bf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(bf(t,e,n),t=t.sibling;t!==null;)bf(t,e,n),t=t.sibling}var kt=null,Vn=!1;function Pi(t,e,n){for(n=n.child;n!==null;)Q0(t,e,n),n=n.sibling}function Q0(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(ic,n)}catch{}switch(n.tag){case 5:$t||Es(n,e);case 6:var i=kt,r=Vn;kt=null,Pi(t,e,n),kt=i,Vn=r,kt!==null&&(Vn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Vn?(t=kt,n=n.stateNode,t.nodeType===8?Wc(t.parentNode,n):t.nodeType===1&&Wc(t,n),Ho(t)):Wc(kt,n.stateNode));break;case 4:i=kt,r=Vn,kt=n.stateNode.containerInfo,Vn=!0,Pi(t,e,n),kt=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Tf(n,e,o),r=r.next}while(r!==i)}Pi(t,e,n);break;case 1:if(!$t&&(Es(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){yt(n,e,a)}Pi(t,e,n);break;case 21:Pi(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,Pi(t,e,n),$t=i):Pi(t,e,n);break;default:Pi(t,e,n)}}function rp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Sy),e.forEach(function(i){var r=Ly.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Vn=!1;break e;case 3:kt=a.stateNode.containerInfo,Vn=!0;break e;case 4:kt=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(kt===null)throw Error(ne(160));Q0(s,o,r),kt=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)J0(e,t),e=e.sibling}function J0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),Kn(t),i&4){try{Lo(3,t,t.return),fc(3,t)}catch(x){yt(t,t.return,x)}try{Lo(5,t,t.return)}catch(x){yt(t,t.return,x)}}break;case 1:zn(e,t),Kn(t),i&512&&n!==null&&Es(n,n.return);break;case 5:if(zn(e,t),Kn(t),i&512&&n!==null&&Es(n,n.return),t.flags&32){var r=t.stateNode;try{Fo(r,"")}catch(x){yt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Sg(r,s),Ku(a,o);var c=Ku(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?Ag(r,d):f==="dangerouslySetInnerHTML"?Tg(r,d):f==="children"?Fo(r,d):Qf(r,f,d,c)}switch(a){case"input":Xu(r,s);break;case"textarea":Mg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Rs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Rs(r,!!s.multiple,s.defaultValue,!0):Rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[jo]=s}catch(x){yt(t,t.return,x)}}break;case 6:if(zn(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){yt(t,t.return,x)}}break;case 3:if(zn(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ho(e.containerInfo)}catch(x){yt(t,t.return,x)}break;case 4:zn(e,t),Kn(t);break;case 13:zn(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ld=Et())),i&4&&rp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||f,zn(e,t),$t=c):zn(e,t),Kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(pe=t,f=t.child;f!==null;){for(d=pe=f;pe!==null;){switch(h=pe,p=h.child,h.tag){case 0:case 11:case 14:case 15:Lo(4,h,h.return);break;case 1:Es(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){yt(i,n,x)}}break;case 5:Es(h,h.return);break;case 22:if(h.memoizedState!==null){op(d);continue}}p!==null?(p.return=h,pe=p):op(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=wg("display",o))}catch(x){yt(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){yt(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:zn(e,t),Kn(t),i&4&&rp(t);break;case 21:break;default:zn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Z0(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Fo(r,""),i.flags&=-33);var s=ip(t);bf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=ip(t);Af(t,a,o);break;default:throw Error(ne(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ey(t,e,n){pe=t,e_(t)}function e_(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ca;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=Ca;var c=$t;if(Ca=o,($t=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?ap(r):l!==null?(l.return=o,pe=l):ap(r);for(;s!==null;)pe=s,e_(s),s=s.sibling;pe=r,Ca=a,$t=c}sp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):sp(t)}}function sp(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||fc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Ho(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}$t||e.flags&512&&wf(e)}catch(h){yt(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function op(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function ap(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fc(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{wf(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{wf(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var Ty=Math.ceil,Hl=Ci.ReactCurrentDispatcher,Cd=Ci.ReactCurrentOwner,Un=Ci.ReactCurrentBatchConfig,Ze=0,Ft=null,bt=null,Ht=0,_n=0,Ts=lr(0),Pt=0,Qo=null,Ur=0,dc=0,Pd=0,Do=null,ln=null,Ld=0,Gs=1/0,pi=null,Gl=!1,Rf=null,Zi=null,Pa=!1,Vi=null,Vl=0,No=0,Cf=null,_l=-1,vl=0;function nn(){return Ze&6?Et():_l!==-1?_l:_l=Et()}function Qi(t){return t.mode&1?Ze&2&&Ht!==0?Ht&-Ht:ay.transition!==null?(vl===0&&(vl=zg()),vl):(t=tt,t!==0||(t=window.event,t=t===void 0?16:Xg(t.type)),t):1}function Yn(t,e,n,i){if(50<No)throw No=0,Cf=null,Error(ne(185));sa(t,n,i),(!(Ze&2)||t!==Ft)&&(t===Ft&&(!(Ze&2)&&(dc|=n),Pt===4&&Hi(t,Ht)),dn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(Gs=Et()+500,lc&&cr()))}function dn(t,e){var n=t.callbackNode;ax(t,e);var i=Al(t,t===Ft?Ht:0);if(i===0)n!==null&&gh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&gh(n),e===1)t.tag===0?oy(lp.bind(null,t)):u0(lp.bind(null,t)),ny(function(){!(Ze&6)&&cr()}),n=null;else{switch(kg(i)){case 1:n=id;break;case 4:n=Og;break;case 16:n=wl;break;case 536870912:n=Fg;break;default:n=wl}n=l_(n,t_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function t_(t,e){if(_l=-1,vl=0,Ze&6)throw Error(ne(327));var n=t.callbackNode;if(Ns()&&t.callbackNode!==n)return null;var i=Al(t,t===Ft?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Wl(t,i);else{e=i;var r=Ze;Ze|=2;var s=i_();(Ft!==t||Ht!==e)&&(pi=null,Gs=Et()+500,Ar(t,e));do try{by();break}catch(a){n_(t,a)}while(!0);gd(),Hl.current=s,Ze=r,bt!==null?e=0:(Ft=null,Ht=0,e=Pt)}if(e!==0){if(e===2&&(r=tf(t),r!==0&&(i=r,e=Pf(t,r))),e===1)throw n=Qo,Ar(t,0),Hi(t,i),dn(t,Et()),n;if(e===6)Hi(t,i);else{if(r=t.current.alternate,!(i&30)&&!wy(r)&&(e=Wl(t,i),e===2&&(s=tf(t),s!==0&&(i=s,e=Pf(t,s))),e===1))throw n=Qo,Ar(t,0),Hi(t,i),dn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:vr(t,ln,pi);break;case 3:if(Hi(t,i),(i&130023424)===i&&(e=Ld+500-Et(),10<e)){if(Al(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=uf(vr.bind(null,t,ln,pi),e);break}vr(t,ln,pi);break;case 4:if(Hi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ty(i/1960))-i,10<i){t.timeoutHandle=uf(vr.bind(null,t,ln,pi),i);break}vr(t,ln,pi);break;case 5:vr(t,ln,pi);break;default:throw Error(ne(329))}}}return dn(t,Et()),t.callbackNode===n?t_.bind(null,t):null}function Pf(t,e){var n=Do;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=Wl(t,e),t!==2&&(e=ln,ln=n,e!==null&&Lf(e)),t}function Lf(t){ln===null?ln=t:ln.push.apply(ln,t)}function wy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hi(t,e){for(e&=~Pd,e&=~dc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function lp(t){if(Ze&6)throw Error(ne(327));Ns();var e=Al(t,0);if(!(e&1))return dn(t,Et()),null;var n=Wl(t,e);if(t.tag!==0&&n===2){var i=tf(t);i!==0&&(e=i,n=Pf(t,i))}if(n===1)throw n=Qo,Ar(t,0),Hi(t,e),dn(t,Et()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,ln,pi),dn(t,Et()),null}function Dd(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(Gs=Et()+500,lc&&cr())}}function Or(t){Vi!==null&&Vi.tag===0&&!(Ze&6)&&Ns();var e=Ze;Ze|=1;var n=Un.transition,i=tt;try{if(Un.transition=null,tt=1,t)return t()}finally{tt=i,Un.transition=n,Ze=e,!(Ze&6)&&cr()}}function Nd(){_n=Ts.current,ct(Ts)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ty(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(hd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ll();break;case 3:Bs(),ct(un),ct(Kt),Md();break;case 5:Sd(i);break;case 4:Bs();break;case 13:ct(pt);break;case 19:ct(pt);break;case 10:_d(i.type._context);break;case 22:case 23:Nd()}n=n.return}if(Ft=t,bt=t=Ji(t.current,null),Ht=_n=e,Pt=0,Qo=null,Pd=dc=Ur=0,ln=Do=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Tr=null}return t}function n_(t,e){do{var n=bt;try{if(gd(),pl.current=Bl,kl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}kl=!1}if(Ir=0,Ut=Ct=mt=null,Po=!1,$o=0,Cd.current=null,n===null||n.return===null){Pt=1,Qo=e,bt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=$h(o);if(p!==null){p.flags&=-257,Kh(p,o,a,s,e),p.mode&1&&qh(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){qh(s,c,e),Id();break e}l=Error(ne(426))}}else if(ft&&a.mode&1){var m=$h(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Kh(m,o,a,s,e),pd(Hs(l,a));break e}}s=l=Hs(l,a),Pt!==4&&(Pt=2),Do===null?Do=[s]:Do.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=k0(s,l,e);Gh(s,u);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Zi===null||!Zi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=B0(s,a,e);Gh(s,M);break e}}s=s.return}while(s!==null)}s_(n)}catch(R){e=R,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function i_(){var t=Hl.current;return Hl.current=Bl,t===null?Bl:t}function Id(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ft===null||!(Ur&268435455)&&!(dc&268435455)||Hi(Ft,Ht)}function Wl(t,e){var n=Ze;Ze|=2;var i=i_();(Ft!==t||Ht!==e)&&(pi=null,Ar(t,e));do try{Ay();break}catch(r){n_(t,r)}while(!0);if(gd(),Ze=n,Hl.current=i,bt!==null)throw Error(ne(261));return Ft=null,Ht=0,Pt}function Ay(){for(;bt!==null;)r_(bt)}function by(){for(;bt!==null&&!Qv();)r_(bt)}function r_(t){var e=a_(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?s_(t):bt=e,Cd.current=null}function s_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yy(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,bt=null;return}}else if(n=xy(n,e,_n),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Pt===0&&(Pt=5)}function vr(t,e,n){var i=tt,r=Un.transition;try{Un.transition=null,tt=1,Ry(t,e,n,i)}finally{Un.transition=r,tt=i}return null}function Ry(t,e,n,i){do Ns();while(Vi!==null);if(Ze&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(lx(t,s),t===Ft&&(bt=Ft=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pa||(Pa=!0,l_(wl,function(){return Ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var o=tt;tt=1;var a=Ze;Ze|=4,Cd.current=null,My(t,n),J0(n,t),qx(lf),bl=!!af,lf=af=null,t.current=n,Ey(n),Jv(),Ze=a,tt=o,Un.transition=s}else t.current=n;if(Pa&&(Pa=!1,Vi=t,Vl=r),s=t.pendingLanes,s===0&&(Zi=null),nx(n.stateNode),dn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Gl)throw Gl=!1,t=Rf,Rf=null,t;return Vl&1&&t.tag!==0&&Ns(),s=t.pendingLanes,s&1?t===Cf?No++:(No=0,Cf=t):No=0,cr(),null}function Ns(){if(Vi!==null){var t=kg(Vl),e=Un.transition,n=tt;try{if(Un.transition=null,tt=16>t?16:t,Vi===null)var i=!1;else{if(t=Vi,Vi=null,Vl=0,Ze&6)throw Error(ne(331));var r=Ze;for(Ze|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var f=pe;switch(f.tag){case 0:case 11:case 15:Lo(8,f,s)}var d=f.child;if(d!==null)d.return=f,pe=d;else for(;pe!==null;){f=pe;var h=f.sibling,p=f.return;if(K0(f),f===c){pe=null;break}if(h!==null){h.return=p,pe=h;break}pe=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Lo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,pe=u;break e}pe=s.return}}var _=t.current;for(pe=_;pe!==null;){o=pe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,pe=g;else e:for(o=_;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fc(9,a)}}catch(R){yt(a,a.return,R)}if(a===o){pe=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,pe=M;break e}pe=a.return}}if(Ze=r,cr(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(ic,t)}catch{}i=!0}return i}finally{tt=n,Un.transition=e}}return!1}function cp(t,e,n){e=Hs(n,e),e=k0(t,e,1),t=Ki(t,e,1),e=nn(),t!==null&&(sa(t,1,e),dn(t,e))}function yt(t,e,n){if(t.tag===3)cp(t,t,n);else for(;e!==null;){if(e.tag===3){cp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zi===null||!Zi.has(i))){t=Hs(n,t),t=B0(e,t,1),e=Ki(e,t,1),t=nn(),e!==null&&(sa(e,1,t),dn(e,t));break}}e=e.return}}function Cy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Ht&n)===n&&(Pt===4||Pt===3&&(Ht&130023424)===Ht&&500>Et()-Ld?Ar(t,0):Pd|=n),dn(t,e)}function o_(t,e){e===0&&(t.mode&1?(e=ya,ya<<=1,!(ya&130023424)&&(ya=4194304)):e=1);var n=nn();t=Ai(t,e),t!==null&&(sa(t,e,n),dn(t,n))}function Py(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),o_(t,n)}function Ly(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),o_(t,n)}var a_;a_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,vy(t,e,n);cn=!!(t.flags&131072)}else cn=!1,ft&&e.flags&1048576&&f0(e,Il,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;gl(t,e),t=e.pendingProps;var r=Fs(e,Kt.current);Ds(e,n),r=Td(null,e,i,t,r,n);var s=wd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,Dl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,xd(e),r.updater=uc,e.stateNode=r,r._reactInternals=e,_f(e,i,t,n),e=yf(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&dd(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(gl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ny(i),t=Gn(i,t),r){case 0:e=xf(null,e,i,t,n);break e;case 1:e=Jh(null,e,i,t,n);break e;case 11:e=Zh(null,e,i,t,n);break e;case 14:e=Qh(null,e,i,Gn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),xf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Jh(t,e,i,r,n);case 3:e:{if(W0(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,_0(t,e),Fl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Hs(Error(ne(423)),e),e=ep(t,e,i,n,r);break e}else if(i!==r){r=Hs(Error(ne(424)),e),e=ep(t,e,i,n,r);break e}else for(xn=$i(e.stateNode.containerInfo.firstChild),Sn=e,ft=!0,Wn=null,n=m0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zs(),i===r){e=bi(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return v0(e),t===null&&pf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,cf(i,r)?o=null:s!==null&&cf(i,s)&&(e.flags|=32),V0(t,e),Jt(t,e,o,n),e.child;case 6:return t===null&&pf(e),null;case 13:return X0(t,e,n);case 4:return yd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ks(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Zh(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(Ul,i._currentValue),i._currentValue=o,s!==null)if(qn(s.value,o)){if(s.children===r.children&&!un.current){e=bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Mi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),mf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ds(e,n),r=On(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),Qh(t,e,i,r,n);case 15:return H0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),gl(t,e),e.tag=1,fn(i)?(t=!0,Dl(e)):t=!1,Ds(e,n),z0(e,i,r),_f(e,i,r,n),yf(null,e,i,!0,t,n);case 19:return j0(t,e,n);case 22:return G0(t,e,n)}throw Error(ne(156,e.tag))};function l_(t,e){return Ug(t,e)}function Dy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,i){return new Dy(t,e,n,i)}function Ud(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ny(t){if(typeof t=="function")return Ud(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ed)return 11;if(t===td)return 14}return 2}function Ji(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Ud(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ps:return br(n.children,r,s,e);case Jf:o=8,r|=8;break;case Bu:return t=In(12,n,e,r|2),t.elementType=Bu,t.lanes=s,t;case Hu:return t=In(13,n,e,r),t.elementType=Hu,t.lanes=s,t;case Gu:return t=In(19,n,e,r),t.elementType=Gu,t.lanes=s,t;case vg:return hc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gg:o=10;break e;case _g:o=9;break e;case ed:o=11;break e;case td:o=14;break e;case Oi:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=In(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function br(t,e,n,i){return t=In(7,t,i,e),t.lanes=n,t}function hc(t,e,n,i){return t=In(22,t,i,e),t.elementType=vg,t.lanes=n,t.stateNode={isHidden:!1},t}function Qc(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function Jc(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Iy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nc(0),this.expirationTimes=Nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Od(t,e,n,i,r,s,o,a,l){return t=new Iy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xd(s),t}function Uy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function c_(t){if(!t)return sr;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(fn(n))return c0(t,n,e)}return e}function u_(t,e,n,i,r,s,o,a,l){return t=Od(n,i,!0,t,r,s,o,a,l),t.context=c_(null),n=t.current,i=nn(),r=Qi(n),s=Mi(i,r),s.callback=e??null,Ki(n,s,r),t.current.lanes=r,sa(t,r,i),dn(t,i),t}function pc(t,e,n,i){var r=e.current,s=nn(),o=Qi(r);return n=c_(n),e.context===null?e.context=n:e.pendingContext=n,e=Mi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ki(r,e,o),t!==null&&(Yn(t,r,o,s),hl(t,r,o)),o}function Xl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function up(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Fd(t,e){up(t,e),(t=t.alternate)&&up(t,e)}function Oy(){return null}var f_=typeof reportError=="function"?reportError:function(t){console.error(t)};function zd(t){this._internalRoot=t}mc.prototype.render=zd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));pc(t,e,null,null)};mc.prototype.unmount=zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){pc(null,t,null,null)}),e[wi]=null}};function mc(t){this._internalRoot=t}mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Gg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bi.length&&e!==0&&e<Bi[n].priority;n++);Bi.splice(n,0,t),n===0&&Wg(t)}};function kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fp(){}function Fy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Xl(o);s.call(c)}}var o=u_(e,i,t,0,null,!1,!1,"",fp);return t._reactRootContainer=o,t[wi]=o.current,Wo(t.nodeType===8?t.parentNode:t),Or(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Xl(l);a.call(c)}}var l=Od(t,0,!1,null,null,!1,!1,"",fp);return t._reactRootContainer=l,t[wi]=l.current,Wo(t.nodeType===8?t.parentNode:t),Or(function(){pc(e,l,n,i)}),l}function _c(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Xl(o);a.call(l)}}pc(e,o,t,r)}else o=Fy(n,e,t,r,i);return Xl(o)}Bg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mo(e.pendingLanes);n!==0&&(rd(e,n|1),dn(e,Et()),!(Ze&6)&&(Gs=Et()+500,cr()))}break;case 13:Or(function(){var i=Ai(t,1);if(i!==null){var r=nn();Yn(i,t,1,r)}}),Fd(t,1)}};sd=function(t){if(t.tag===13){var e=Ai(t,134217728);if(e!==null){var n=nn();Yn(e,t,134217728,n)}Fd(t,134217728)}};Hg=function(t){if(t.tag===13){var e=Qi(t),n=Ai(t,e);if(n!==null){var i=nn();Yn(n,t,e,i)}Fd(t,e)}};Gg=function(){return tt};Vg=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};Qu=function(t,e,n){switch(e){case"input":if(Xu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ac(i);if(!r)throw Error(ne(90));yg(i),Xu(i,r)}}}break;case"textarea":Mg(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};Cg=Dd;Pg=Or;var zy={usingClientEntryPoint:!1,Events:[aa,vs,ac,bg,Rg,Dd]},lo={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ky={bundleType:lo.bundleType,version:lo.version,rendererPackageName:lo.rendererPackageName,rendererConfig:lo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ng(t),t===null?null:t.stateNode},findFiberByHostInstance:lo.findFiberByHostInstance||Oy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{ic=La.inject(ky),ii=La}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zy;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(e))throw Error(ne(200));return Uy(t,e,null,n)};En.createRoot=function(t,e){if(!kd(t))throw Error(ne(299));var n=!1,i="",r=f_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Od(t,1,!1,null,null,n,!1,i,r),t[wi]=e.current,Wo(t.nodeType===8?t.parentNode:t),new zd(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Ng(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Or(t)};En.hydrate=function(t,e,n){if(!gc(e))throw Error(ne(200));return _c(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!kd(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=f_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=u_(e,null,t,1,n??null,r,!1,s,o),t[wi]=e.current,Wo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new mc(e)};En.render=function(t,e,n){if(!gc(e))throw Error(ne(200));return _c(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!gc(t))throw Error(ne(40));return t._reactRootContainer?(Or(function(){_c(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1};En.unstable_batchedUpdates=Dd;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!gc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return _c(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function d_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d_)}catch(t){console.error(t)}}d_(),dg.exports=En;var By=dg.exports,dp=By;zu.createRoot=dp.createRoot,zu.hydrateRoot=dp.hydrateRoot;const Hy={},hp=t=>{let e;const n=new Set,i=(f,d)=>{const h=typeof f=="function"?f(e):f;if(!Object.is(h,e)){const p=e;e=d??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(v=>v(e,p))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(Hy?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,l);return l},Gy=t=>t?hp(t):hp;var h_={exports:{}},p_={},m_={exports:{}},g_={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vs=Ei;function Vy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wy=typeof Object.is=="function"?Object.is:Vy,Xy=Vs.useState,jy=Vs.useEffect,Yy=Vs.useLayoutEffect,qy=Vs.useDebugValue;function $y(t,e){var n=e(),i=Xy({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return Yy(function(){r.value=n,r.getSnapshot=e,eu(r)&&s({inst:r})},[t,n,e]),jy(function(){return eu(r)&&s({inst:r}),t(function(){eu(r)&&s({inst:r})})},[t]),qy(n),n}function eu(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wy(t,n)}catch{return!0}}function Ky(t,e){return e()}var Zy=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Ky:$y;g_.useSyncExternalStore=Vs.useSyncExternalStore!==void 0?Vs.useSyncExternalStore:Zy;m_.exports=g_;var Qy=m_.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vc=Ei,Jy=Qy;function eS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var tS=typeof Object.is=="function"?Object.is:eS,nS=Jy.useSyncExternalStore,iS=vc.useRef,rS=vc.useEffect,sS=vc.useMemo,oS=vc.useDebugValue;p_.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=iS(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=sS(function(){function l(p){if(!c){if(c=!0,f=p,p=i(p),r!==void 0&&o.hasValue){var v=o.value;if(r(v,p))return d=v}return d=p}if(v=d,tS(f,p))return v;var x=i(p);return r!==void 0&&r(v,x)?(f=p,v):(f=p,d=x)}var c=!1,f,d,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,i,r]);var a=nS(t,s[0],s[1]);return rS(function(){o.hasValue=!0,o.value=a},[a]),oS(a),a};h_.exports=p_;var aS=h_.exports;const lS=Jm(aS),__={},{useDebugValue:cS}=ug,{useSyncExternalStoreWithSelector:uS}=lS;let pp=!1;const fS=t=>t;function dS(t,e=fS,n){(__?"production":void 0)!=="production"&&n&&!pp&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),pp=!0);const i=uS(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return cS(i),i}const mp=t=>{(__?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?Gy(t):t,n=(i,r)=>dS(e,i,r);return Object.assign(n,e),n},hS=t=>t?mp(t):mp;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bd="160",gi={ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pS=0,gp=1,mS=2,v_=1,gS=2,fi=3,or=0,rn=1,Ln=2,er=0,Is=1,yr=2,_p=3,vp=4,_S=5,Sr=100,vS=101,xS=102,xp=103,yp=104,yS=200,SS=201,MS=202,ES=203,Df=204,Nf=205,TS=206,wS=207,AS=208,bS=209,RS=210,CS=211,PS=212,LS=213,DS=214,NS=0,IS=1,US=2,jl=3,OS=4,FS=5,zS=6,kS=7,x_=0,BS=1,HS=2,tr=0,GS=1,VS=2,WS=3,XS=4,jS=5,YS=6,y_=300,Ws=301,Xs=302,If=303,Uf=304,xc=306,Yl=1e3,Dn=1001,Of=1002,en=1003,Sp=1004,tu=1005,Cn=1006,qS=1007,Jo=1008,nr=1009,$S=1010,KS=1011,Hd=1012,S_=1013,Wi=1014,Xi=1015,ea=1016,M_=1017,E_=1018,Rr=1020,ZS=1021,Xn=1023,QS=1024,JS=1025,Cr=1026,js=1027,eM=1028,T_=1029,tM=1030,w_=1031,A_=1033,nu=33776,iu=33777,ru=33778,su=33779,Mp=35840,Ep=35841,Tp=35842,wp=35843,b_=36196,Ap=37492,bp=37496,Rp=37808,Cp=37809,Pp=37810,Lp=37811,Dp=37812,Np=37813,Ip=37814,Up=37815,Op=37816,Fp=37817,zp=37818,kp=37819,Bp=37820,Hp=37821,ou=36492,Gp=36494,Vp=36495,nM=36283,Wp=36284,Xp=36285,jp=36286,R_=3e3,Pr=3001,iM=3200,rM=3201,C_=0,sM=1,Nn="",Bt="srgb",Ri="srgb-linear",Gd="display-p3",yc="display-p3-linear",ql="linear",lt="srgb",$l="rec709",Kl="p3",Xr=7680,Yp=519,oM=512,aM=513,lM=514,P_=515,cM=516,uM=517,fM=518,dM=519,Ff=35044,qp="300 es",zf=1035,Si=2e3,Zl=2001;class Vr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yl=Math.PI/180,kf=180/Math.PI;function ir(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function tn(t,e,n){return Math.max(e,Math.min(n,t))}function hM(t,e){return(t%e+e)%e}function au(t,e,n){return(1-n)*t+n*e}function $p(t){return(t&t-1)===0&&t!==0}function Bf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function vi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function it(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const pM={DEG2RAD:yl};class Ae{constructor(e=0,n=0){Ae.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,n,i,r,s,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],v=i[8],x=r[0],m=r[3],u=r[6],_=r[1],g=r[4],M=r[7],R=r[2],A=r[5],w=r[8];return s[0]=o*x+a*_+l*R,s[3]=o*m+a*g+l*A,s[6]=o*u+a*M+l*w,s[1]=c*x+f*_+d*R,s[4]=c*m+f*g+d*A,s[7]=c*u+f*M+d*w,s[2]=h*x+p*_+v*R,s[5]=h*m+p*g+v*A,s[8]=h*u+p*M+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,p=c*s-o*l,v=n*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*c-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(lu.makeScale(e,n)),this}rotate(e){return this.premultiply(lu.makeRotation(-e)),this}translate(e,n){return this.premultiply(lu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lu=new Xe;function L_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ql(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function mM(){const t=Ql("canvas");return t.style.display="block",t}const Kp={};function Io(t){t in Kp||(Kp[t]=!0,console.warn(t))}const Zp=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qp=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Da={[Ri]:{transfer:ql,primaries:$l,toReference:t=>t,fromReference:t=>t},[Bt]:{transfer:lt,primaries:$l,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[yc]:{transfer:ql,primaries:Kl,toReference:t=>t.applyMatrix3(Qp),fromReference:t=>t.applyMatrix3(Zp)},[Gd]:{transfer:lt,primaries:Kl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Qp),fromReference:t=>t.applyMatrix3(Zp).convertLinearToSRGB()}},gM=new Set([Ri,yc]),nt={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!gM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Da[e].toReference,r=Da[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Da[t].primaries},getTransfer:function(t){return t===Nn?ql:Da[t].transfer}};function Us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function cu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let jr;class D_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{jr===void 0&&(jr=Ql("canvas")),jr.width=e.width,jr.height=e.height;const i=jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=jr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ql("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Us(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Us(n[i]/255)*255):n[i]=Us(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _M=0;class N_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=ir(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(uu(r[o].image)):s.push(uu(r[o]))}else s=uu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function uu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?D_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vM=0;class hn extends Vr{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Dn,r=Dn,s=Cn,o=Jo,a=Xn,l=nr,c=hn.DEFAULT_ANISOTROPY,f=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=ir(),this.name="",this.source=new N_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Pr?Bt:Nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yl:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Of:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yl:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Of:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Bt?Pr:R_}set encoding(e){Io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Pr?Bt:Nn}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=y_;hn.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,n=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],v=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,M=(p+1)/2,R=(u+1)/2,A=(f+h)/4,w=(d+x)/4,N=(v+m)/4;return g>M&&g>R?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=w/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=N/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=N/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(d-x)/_,this.z=(h-f)/_,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xM extends Vr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new dt(0,0,e,n),this.scissorTest=!1,this.viewport=new dt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Io("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Pr?Bt:Nn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new N_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends xM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class I_ extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yM extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=en,this.minFilter=en,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(d!==x||l!==h||c!==p||f!==v){let m=1-a;const u=l*h+c*p+f*v+d*x,_=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const R=Math.sqrt(g),A=Math.atan2(R,u*_);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const M=a*_;if(l=l*m+h*M,c=c*m+p*M,f=f*m+v*M,d=d*m+x*M,m===1-a){const R=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=R,c*=R,f*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+f*d+l*p-c*h,e[n+1]=l*v+f*h+c*d-a*p,e[n+2]=c*v+f*p+a*h-l*d,e[n+3]=f*v-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*p*v,this._y=c*p*d-h*f*v,this._z=c*f*v+h*p*d,this._w=c*f*d-h*p*v;break;case"YXZ":this._x=h*f*d+c*p*v,this._y=c*p*d-h*f*v,this._z=c*f*v-h*p*d,this._w=c*f*d+h*p*v;break;case"ZXY":this._x=h*f*d-c*p*v,this._y=c*p*d+h*f*v,this._z=c*f*v+h*p*d,this._w=c*f*d-h*p*v;break;case"ZYX":this._x=h*f*d-c*p*v,this._y=c*p*d+h*f*v,this._z=c*f*v-h*p*d,this._w=c*f*d+h*p*v;break;case"YZX":this._x=h*f*d+c*p*v,this._y=c*p*d+h*f*v,this._z=c*f*v-h*p*d,this._w=c*f*d-h*p*v;break;case"XZY":this._x=h*f*d-c*p*v,this._y=c*p*d-h*f*v,this._z=c*f*v+h*p*d,this._w=c*f*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,n=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Jp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Jp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fu.copy(this).projectOnVector(e),this.sub(fu)}reflect(e){return this.sub(fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fu=new L,Jp=new zr;class ca{constructor(e=new L(1/0,1/0,1/0),n=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Na.copy(i.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(co),Ia.subVectors(this.max,co),Yr.subVectors(e.a,co),qr.subVectors(e.b,co),$r.subVectors(e.c,co),Li.subVectors(qr,Yr),Di.subVectors($r,qr),hr.subVectors(Yr,$r);let n=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-hr.z,hr.y,Li.z,0,-Li.x,Di.z,0,-Di.x,hr.z,0,-hr.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-hr.y,hr.x,0];return!du(n,Yr,qr,$r,Ia)||(n=[1,0,0,0,1,0,0,0,1],!du(n,Yr,qr,$r,Ia))?!1:(Ua.crossVectors(Li,Di),n=[Ua.x,Ua.y,Ua.z],du(n,Yr,qr,$r,Ia))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new L,new L,new L,new L,new L,new L,new L,new L],kn=new L,Na=new ca,Yr=new L,qr=new L,$r=new L,Li=new L,Di=new L,hr=new L,co=new L,Ia=new L,Ua=new L,pr=new L;function du(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){pr.fromArray(t,s);const a=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),c=n.dot(pr),f=i.dot(pr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const SM=new ca,uo=new L,hu=new L;class ua{constructor(e=new L,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):SM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;uo.subVectors(e,this.center);const n=uo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(uo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(uo.copy(e.center).add(hu)),this.expandByPoint(uo.copy(e.center).sub(hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new L,pu=new L,Oa=new L,Ni=new L,mu=new L,Fa=new L,gu=new L;class fa{constructor(e=new L,n=new L(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,n),ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){pu.copy(e).add(n).multiplyScalar(.5),Oa.copy(n).sub(e).normalize(),Ni.copy(this.origin).sub(pu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Oa),a=Ni.dot(this.direction),l=-Ni.dot(Oa),c=Ni.lengthSq(),f=Math.abs(1-o*o);let d,h,p,v;if(f>0)if(d=o*l-a,h=o*a-l,v=s*f,d>=0)if(h>=-v)if(h<=v){const x=1/f;d*=x,h*=x,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(pu).addScaledVector(Oa,h),p}intersectSphere(e,n){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,n,i,r,s){mu.subVectors(n,e),Fa.subVectors(i,e),gu.crossVectors(mu,Fa);let o=this.direction.dot(gu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,e);const l=a*this.direction.dot(Fa.crossVectors(Ni,Fa));if(l<0)return null;const c=a*this.direction.dot(mu.cross(Ni));if(c<0||l+c>o)return null;const f=-a*Ni.dot(gu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,o,a,l,c,f,d,h,p,v,x,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,p,v,x,m)}set(e,n,i,r,s,o,a,l,c,f,d,h,p,v,x,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=v,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),s=1/Kr.setFromMatrixColumn(e,1).length(),o=1/Kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*d,v=a*f,x=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,v=c*f,x=c*d;n[0]=h+x*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-v,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,v=c*f,x=c*d;n[0]=h-x*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*f,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*d,v=a*f,x=a*d;n[0]=l*f,n[4]=v*c-p,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*f,n[4]=x-h*d,n[8]=v*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+v,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+x,n[5]=o*f,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MM,e,EM)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Ii.crossVectors(i,mn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Ii.crossVectors(i,mn)),Ii.normalize(),za.crossVectors(mn,Ii),r[0]=Ii.x,r[4]=za.x,r[8]=mn.x,r[1]=Ii.y,r[5]=za.y,r[9]=mn.y,r[2]=Ii.z,r[6]=za.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],v=i[2],x=i[6],m=i[10],u=i[14],_=i[3],g=i[7],M=i[11],R=i[15],A=r[0],w=r[4],N=r[8],y=r[12],E=r[1],F=r[5],j=r[9],Q=r[13],D=r[2],z=r[6],Y=r[10],$=r[14],I=r[3],O=r[7],V=r[11],q=r[15];return s[0]=o*A+a*E+l*D+c*I,s[4]=o*w+a*F+l*z+c*O,s[8]=o*N+a*j+l*Y+c*V,s[12]=o*y+a*Q+l*$+c*q,s[1]=f*A+d*E+h*D+p*I,s[5]=f*w+d*F+h*z+p*O,s[9]=f*N+d*j+h*Y+p*V,s[13]=f*y+d*Q+h*$+p*q,s[2]=v*A+x*E+m*D+u*I,s[6]=v*w+x*F+m*z+u*O,s[10]=v*N+x*j+m*Y+u*V,s[14]=v*y+x*Q+m*$+u*q,s[3]=_*A+g*E+M*D+R*I,s[7]=_*w+g*F+M*z+R*O,s[11]=_*N+g*j+M*Y+R*V,s[15]=_*y+g*Q+M*$+R*q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],p=e[14],v=e[3],x=e[7],m=e[11],u=e[15];return v*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+x*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*f-s*l*f)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],p=e[11],v=e[12],x=e[13],m=e[14],u=e[15],_=d*m*c-x*h*c+x*l*p-a*m*p-d*l*u+a*h*u,g=v*h*c-f*m*c-v*l*p+o*m*p+f*l*u-o*h*u,M=f*x*c-v*d*c+v*a*p-o*x*p-f*a*u+o*d*u,R=v*d*l-f*x*l-v*a*h+o*x*h+f*a*m-o*d*m,A=n*_+i*g+r*M+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=_*w,e[1]=(x*h*s-d*m*s-x*r*p+i*m*p+d*r*u-i*h*u)*w,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*u+i*l*u)*w,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*w,e[4]=g*w,e[5]=(f*m*s-v*h*s+v*r*p-n*m*p-f*r*u+n*h*u)*w,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*u-n*l*u)*w,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*p+n*l*p)*w,e[8]=M*w,e[9]=(v*d*s-f*x*s-v*i*p+n*x*p+f*i*u-n*d*u)*w,e[10]=(o*x*s-v*a*s+v*i*c-n*x*c-o*i*u+n*a*u)*w,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*p-n*a*p)*w,e[12]=R*w,e[13]=(f*x*r-v*d*r+v*i*h-n*x*h-f*i*m+n*d*m)*w,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*w,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,p=s*f,v=s*d,x=o*f,m=o*d,u=a*d,_=l*c,g=l*f,M=l*d,R=i.x,A=i.y,w=i.z;return r[0]=(1-(x+u))*R,r[1]=(p+M)*R,r[2]=(v-g)*R,r[3]=0,r[4]=(p-M)*A,r[5]=(1-(h+u))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(v+g)*w,r[9]=(m-_)*w,r[10]=(1-(h+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Kr.set(r[0],r[1],r[2]).length();const o=Kr.set(r[4],r[5],r[6]).length(),a=Kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,f=1/o,d=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=f,Bn.elements[5]*=f,Bn.elements[6]*=f,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,n.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Si){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(a===Si)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Zl)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Si){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*f;let v,x;if(a===Si)v=(o+s)*d,x=-2*d;else if(a===Zl)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Kr=new L,Bn=new gt,MM=new L(0,0,0),EM=new L(1,1,1),Ii=new L,za=new L,mn=new L,em=new gt,tm=new zr;class Sc{constructor(e=0,n=0,i=0,r=Sc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(em,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tm.setFromEuler(this),this.setFromQuaternion(tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sc.DEFAULT_ORDER="XYZ";class Vd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TM=0;const nm=new L,Zr=new zr,li=new gt,ka=new L,fo=new L,wM=new L,AM=new zr,im=new L(1,0,0),rm=new L(0,1,0),sm=new L(0,0,1),bM={type:"added"},RM={type:"removed"};class Gt extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new L,n=new Sc,i=new zr,r=new L(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Xe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(im,e)}rotateY(e){return this.rotateOnAxis(rm,e)}rotateZ(e){return this.rotateOnAxis(sm,e)}translateOnAxis(e,n){return nm.copy(e).applyQuaternion(this.quaternion),this.position.add(nm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(im,e)}translateY(e){return this.translateOnAxis(rm,e)}translateZ(e){return this.translateOnAxis(sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ka.copy(e):ka.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(fo,ka,this.up):li.lookAt(ka,fo,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(li),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(RM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,e,wM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fo,AM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new L(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new L,ci=new L,_u=new L,ui=new L,Qr=new L,Jr=new L,om=new L,vu=new L,xu=new L,yu=new L;let Ba=!1;class Pn{constructor(e=new L,n=new L,i=new L){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hn.subVectors(r,n),ci.subVectors(i,n),_u.subVectors(e,n);const o=Hn.dot(Hn),a=Hn.dot(ci),l=Hn.dot(_u),c=ci.dot(ci),f=ci.dot(_u),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*f)*h,v=(o*f-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ba=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),ci.subVectors(e,n),Hn.cross(ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Hn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Pn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ba===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ba=!0),Pn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Pn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Qr.subVectors(r,i),Jr.subVectors(s,i),vu.subVectors(e,i);const l=Qr.dot(vu),c=Jr.dot(vu);if(l<=0&&c<=0)return n.copy(i);xu.subVectors(e,r);const f=Qr.dot(xu),d=Jr.dot(xu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Qr,o);yu.subVectors(e,s);const p=Qr.dot(yu),v=Jr.dot(yu);if(v>=0&&p<=v)return n.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Jr,a);const m=f*v-p*d;if(m<=0&&d-f>=0&&p-v>=0)return om.subVectors(s,r),a=(d-f)/(d-f+(p-v)),n.copy(r).addScaledVector(om,a);const u=1/(m+x+h);return o=x*u,a=h*u,n.copy(i).addScaledVector(Qr,o).addScaledVector(Jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const U_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function Su(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ve{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=hM(e,1),n=tn(n,0,1),i=tn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Su(o,s,e+1/3),this.g=Su(o,s,e),this.b=Su(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=Bt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bt){const i=U_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=cu(e.r),this.g=cu(e.g),this.b=cu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return nt.fromWorkingColorSpace(qt.copy(this),e),Math.round(tn(qt.r*255,0,255))*65536+Math.round(tn(qt.g*255,0,255))*256+Math.round(tn(qt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Bt){nt.fromWorkingColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==Bt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+n,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ui),e.getHSL(Ha);const i=au(Ui.h,Ha.h,n),r=au(Ui.s,Ha.s,n),s=au(Ui.l,Ha.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Ve;Ve.NAMES=U_;let CM=0;class ur extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=Is,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Df,this.blendDst=Nf,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=jl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Df&&(i.blendSrc=this.blendSrc),this.blendDst!==Nf&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class an extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=x_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new L,Ga=new Ae;class Ot{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ff,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ga.fromBufferAttribute(this,n),Ga.applyMatrix3(e),this.setXY(n,Ga.x,Ga.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=vi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vi(n,this.array)),n}setX(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vi(n,this.array)),n}setY(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vi(n,this.array)),n}setW(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ff&&(e.usage=this.usage),e}}class O_ extends Ot{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class F_ extends Ot{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Rt extends Ot{constructor(e,n,i){super(new Float32Array(e),n,i)}}let PM=0;const An=new gt,Mu=new Gt,es=new L,gn=new ca,ho=new ca,It=new L;class At extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(L_(e)?F_:O_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return Mu.lookAt(e),Mu.updateMatrix(),this.applyMatrix4(Mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Rt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ca);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ho.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(gn.min,ho.min),gn.expandByPoint(It),It.addVectors(gn.max,ho.max),gn.expandByPoint(It)):(gn.expandByPoint(ho.min),gn.expandByPoint(ho.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)It.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(e,c),It.add(es)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let E=0;E<a;E++)c[E]=new L,f[E]=new L;const d=new L,h=new L,p=new L,v=new Ae,x=new Ae,m=new Ae,u=new L,_=new L;function g(E,F,j){d.fromArray(r,E*3),h.fromArray(r,F*3),p.fromArray(r,j*3),v.fromArray(o,E*2),x.fromArray(o,F*2),m.fromArray(o,j*2),h.sub(d),p.sub(d),x.sub(v),m.sub(v);const Q=1/(x.x*m.y-m.x*x.y);isFinite(Q)&&(u.copy(h).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(Q),_.copy(p).multiplyScalar(x.x).addScaledVector(h,-m.x).multiplyScalar(Q),c[E].add(u),c[F].add(u),c[j].add(u),f[E].add(_),f[F].add(_),f[j].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let E=0,F=M.length;E<F;++E){const j=M[E],Q=j.start,D=j.count;for(let z=Q,Y=Q+D;z<Y;z+=3)g(i[z+0],i[z+1],i[z+2])}const R=new L,A=new L,w=new L,N=new L;function y(E){w.fromArray(s,E*3),N.copy(w);const F=c[E];R.copy(F),R.sub(w.multiplyScalar(w.dot(F))).normalize(),A.crossVectors(N,F);const Q=A.dot(f[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=Q}for(let E=0,F=M.length;E<F;++E){const j=M[E],Q=j.start,D=j.count;for(let z=Q,Y=Q+D;z<Y;z+=3)y(i[z+0]),y(i[z+1]),y(i[z+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ot(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,f=new L,d=new L;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let u=0;u<f;u++)h[v++]=c[p++]}return new Ot(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new At,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const am=new gt,mr=new fa,Va=new ua,lm=new L,ts=new L,ns=new L,is=new L,Eu=new L,Wa=new L,Xa=new Ae,ja=new Ae,Ya=new Ae,cm=new L,um=new L,fm=new L,qa=new L,$a=new L;class ut extends Gt{constructor(e=new At,n=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Wa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Eu.fromBufferAttribute(d,e),o?Wa.addScaledVector(Eu,f):Wa.addScaledVector(Eu.sub(n),f))}n.add(Wa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(Va.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Va,lm)===null||mr.origin.distanceToSquared(lm)>(e.far-e.near)**2))&&(am.copy(s).invert(),mr.copy(e.ray).applyMatrix4(am),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],u=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,R=g;M<R;M+=3){const A=a.getX(M),w=a.getX(M+1),N=a.getX(M+2);r=Ka(this,u,e,i,c,f,d,A,w,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const _=a.getX(m),g=a.getX(m+1),M=a.getX(m+2);r=Ka(this,o,e,i,c,f,d,_,g,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],u=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=_,R=g;M<R;M+=3){const A=M,w=M+1,N=M+2;r=Ka(this,u,e,i,c,f,d,A,w,N),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,u=x;m<u;m+=3){const _=m,g=m+1,M=m+2;r=Ka(this,o,e,i,c,f,d,_,g,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function LM(t,e,n,i,r,s,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===or,a),l===null)return null;$a.copy(a),$a.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo($a);return c<n.near||c>n.far?null:{distance:c,point:$a.clone(),object:t}}function Ka(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ts),t.getVertexPosition(l,ns),t.getVertexPosition(c,is);const f=LM(t,e,n,i,ts,ns,is,qa);if(f){r&&(Xa.fromBufferAttribute(r,a),ja.fromBufferAttribute(r,l),Ya.fromBufferAttribute(r,c),f.uv=Pn.getInterpolation(qa,ts,ns,is,Xa,ja,Ya,new Ae)),s&&(Xa.fromBufferAttribute(s,a),ja.fromBufferAttribute(s,l),Ya.fromBufferAttribute(s,c),f.uv1=Pn.getInterpolation(qa,ts,ns,is,Xa,ja,Ya,new Ae),f.uv2=f.uv1),o&&(cm.fromBufferAttribute(o,a),um.fromBufferAttribute(o,l),fm.fromBufferAttribute(o,c),f.normal=Pn.getInterpolation(qa,ts,ns,is,cm,um,fm,new L),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};Pn.getNormal(ts,ns,is,d.normal),f.face=d}return f}class da extends At{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(f,3)),this.setAttribute("uv",new Rt(d,2));function v(x,m,u,_,g,M,R,A,w,N,y){const E=M/w,F=R/N,j=M/2,Q=R/2,D=A/2,z=w+1,Y=N+1;let $=0,I=0;const O=new L;for(let V=0;V<Y;V++){const q=V*F-Q;for(let oe=0;oe<z;oe++){const X=oe*E-j;O[x]=X*_,O[m]=q*g,O[u]=D,c.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[u]=A>0?1:-1,f.push(O.x,O.y,O.z),d.push(oe/w),d.push(1-V/N),$+=1}}for(let V=0;V<N;V++)for(let q=0;q<w;q++){const oe=h+q+z*V,X=h+q+z*(V+1),K=h+(q+1)+z*(V+1),ce=h+(q+1)+z*V;l.push(oe,X,ce),l.push(X,K,ce),I+=6}a.addGroup(p,I,y),p+=I,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=Ys(t[n]);for(const r in i)e[r]=i[r]}return e}function DM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function z_(t){return t.getRenderTarget()===null?t.outputColorSpace:nt.workingColorSpace}const NM={clone:Ys,merge:Qt};var IM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IM,this.fragmentShader=UM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=DM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class k_ extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vn extends k_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=kf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kf*2*Math.atan(Math.tan(yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(yl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const rs=-90,ss=1;class OM extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(rs,ss,e,n);r.layers=this.layers,this.add(r);const s=new vn(rs,ss,e,n);s.layers=this.layers,this.add(s);const o=new vn(rs,ss,e,n);o.layers=this.layers,this.add(o);const a=new vn(rs,ss,e,n);a.layers=this.layers,this.add(a);const l=new vn(rs,ss,e,n);l.layers=this.layers,this.add(l);const c=new vn(rs,ss,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class B_ extends hn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Ws,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class FM extends Fr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Io("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Pr?Bt:Nn),this.texture=new B_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Cn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new da(5,5,5),s=new kr({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:er});s.uniforms.tEquirect.value=n;const o=new ut(r,s),a=n.minFilter;return n.minFilter===Jo&&(n.minFilter=Cn),new OM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Tu=new L,zM=new L,kM=new Xe;class ki{constructor(e=new L(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Tu.subVectors(i,n).cross(zM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Tu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||kM.getNormalMatrix(e),r=this.coplanarPoint(Tu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new ua,Za=new L;class Wd{constructor(e=new ki,n=new ki,i=new ki,r=new ki,s=new ki,o=new ki){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Si){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],p=r[8],v=r[9],x=r[10],m=r[11],u=r[12],_=r[13],g=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,m-p,M-u).normalize(),i[1].setComponents(l+s,h+c,m+p,M+u).normalize(),i[2].setComponents(l+o,h+f,m+v,M+_).normalize(),i[3].setComponents(l-o,h-f,m-v,M-_).normalize(),i[4].setComponents(l-a,h-d,m-x,M-g).normalize(),n===Si)i[5].setComponents(l+a,h+d,m+x,M+g).normalize();else if(n===Zl)i[5].setComponents(a,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Za.x=r.normal.x>0?e.max.x:e.min.x,Za.y=r.normal.y>0?e.max.y:e.min.y,Za.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Za)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function H_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function BM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const d=c.array,h=c.usage,p=d.byteLength,v=t.createBuffer();t.bindBuffer(f,v),t.bufferData(f,d,h),c.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,f,d){const h=f.array,p=f._updateRange,v=f.updateRanges;if(t.bindBuffer(d,c),p.count===-1&&v.length===0&&t.bufferSubData(d,0,h),v.length!==0){for(let x=0,m=v.length;x<m;x++){const u=v[x];n?t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,f),d.version=c.version}}return{get:o,remove:a,update:l}}class Xd extends At{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,p=[],v=[],x=[],m=[];for(let u=0;u<f;u++){const _=u*h-o;for(let g=0;g<c;g++){const M=g*d-s;v.push(M,-_,0),x.push(0,0,1),m.push(g/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const g=_+c*u,M=_+c*(u+1),R=_+1+c*(u+1),A=_+1+c*u;p.push(g,M,A),p.push(M,R,A)}this.setIndex(p),this.setAttribute("position",new Rt(v,3)),this.setAttribute("normal",new Rt(x,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xd(e.width,e.height,e.widthSegments,e.heightSegments)}}var HM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,VM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$M=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ZM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,iE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_E="gl_FragColor = linearToOutputTexel( gl_FragColor );",vE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,xE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ME=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,PE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,IE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,UE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,YE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$E=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ZE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,nT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,iT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,rT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_T=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ST=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ET=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,PT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$T=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ew=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_w=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,vw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:HM,alphahash_pars_fragment:GM,alphamap_fragment:VM,alphamap_pars_fragment:WM,alphatest_fragment:XM,alphatest_pars_fragment:jM,aomap_fragment:YM,aomap_pars_fragment:qM,batching_pars_vertex:$M,batching_vertex:KM,begin_vertex:ZM,beginnormal_vertex:QM,bsdfs:JM,iridescence_fragment:eE,bumpmap_pars_fragment:tE,clipping_planes_fragment:nE,clipping_planes_pars_fragment:iE,clipping_planes_pars_vertex:rE,clipping_planes_vertex:sE,color_fragment:oE,color_pars_fragment:aE,color_pars_vertex:lE,color_vertex:cE,common:uE,cube_uv_reflection_fragment:fE,defaultnormal_vertex:dE,displacementmap_pars_vertex:hE,displacementmap_vertex:pE,emissivemap_fragment:mE,emissivemap_pars_fragment:gE,colorspace_fragment:_E,colorspace_pars_fragment:vE,envmap_fragment:xE,envmap_common_pars_fragment:yE,envmap_pars_fragment:SE,envmap_pars_vertex:ME,envmap_physical_pars_fragment:IE,envmap_vertex:EE,fog_vertex:TE,fog_pars_vertex:wE,fog_fragment:AE,fog_pars_fragment:bE,gradientmap_pars_fragment:RE,lightmap_fragment:CE,lightmap_pars_fragment:PE,lights_lambert_fragment:LE,lights_lambert_pars_fragment:DE,lights_pars_begin:NE,lights_toon_fragment:UE,lights_toon_pars_fragment:OE,lights_phong_fragment:FE,lights_phong_pars_fragment:zE,lights_physical_fragment:kE,lights_physical_pars_fragment:BE,lights_fragment_begin:HE,lights_fragment_maps:GE,lights_fragment_end:VE,logdepthbuf_fragment:WE,logdepthbuf_pars_fragment:XE,logdepthbuf_pars_vertex:jE,logdepthbuf_vertex:YE,map_fragment:qE,map_pars_fragment:$E,map_particle_fragment:KE,map_particle_pars_fragment:ZE,metalnessmap_fragment:QE,metalnessmap_pars_fragment:JE,morphcolor_vertex:eT,morphnormal_vertex:tT,morphtarget_pars_vertex:nT,morphtarget_vertex:iT,normal_fragment_begin:rT,normal_fragment_maps:sT,normal_pars_fragment:oT,normal_pars_vertex:aT,normal_vertex:lT,normalmap_pars_fragment:cT,clearcoat_normal_fragment_begin:uT,clearcoat_normal_fragment_maps:fT,clearcoat_pars_fragment:dT,iridescence_pars_fragment:hT,opaque_fragment:pT,packing:mT,premultiplied_alpha_fragment:gT,project_vertex:_T,dithering_fragment:vT,dithering_pars_fragment:xT,roughnessmap_fragment:yT,roughnessmap_pars_fragment:ST,shadowmap_pars_fragment:MT,shadowmap_pars_vertex:ET,shadowmap_vertex:TT,shadowmask_pars_fragment:wT,skinbase_vertex:AT,skinning_pars_vertex:bT,skinning_vertex:RT,skinnormal_vertex:CT,specularmap_fragment:PT,specularmap_pars_fragment:LT,tonemapping_fragment:DT,tonemapping_pars_fragment:NT,transmission_fragment:IT,transmission_pars_fragment:UT,uv_pars_fragment:OT,uv_pars_vertex:FT,uv_vertex:zT,worldpos_vertex:kT,background_vert:BT,background_frag:HT,backgroundCube_vert:GT,backgroundCube_frag:VT,cube_vert:WT,cube_frag:XT,depth_vert:jT,depth_frag:YT,distanceRGBA_vert:qT,distanceRGBA_frag:$T,equirect_vert:KT,equirect_frag:ZT,linedashed_vert:QT,linedashed_frag:JT,meshbasic_vert:ew,meshbasic_frag:tw,meshlambert_vert:nw,meshlambert_frag:iw,meshmatcap_vert:rw,meshmatcap_frag:sw,meshnormal_vert:ow,meshnormal_frag:aw,meshphong_vert:lw,meshphong_frag:cw,meshphysical_vert:uw,meshphysical_frag:fw,meshtoon_vert:dw,meshtoon_frag:hw,points_vert:pw,points_frag:mw,shadow_vert:gw,shadow_frag:_w,sprite_vert:vw,sprite_frag:xw},le={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Jn={basic:{uniforms:Qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Qt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Qt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Qt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Qt([le.points,le.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Qt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Qt([le.common,le.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Qt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Qt([le.sprite,le.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Qt([le.common,le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Qt([le.lights,le.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Jn.physical={uniforms:Qt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Qa={r:0,b:0,g:0};function yw(t,e,n,i,r,s,o){const a=new Ve(0);let l=s===!0?0:1,c,f,d=null,h=0,p=null;function v(m,u){let _=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?n:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),_=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===xc)?(f===void 0&&(f=new ut(new da(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:Ys(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=nt.getTransfer(g.colorSpace)!==lt,(d!==g||h!==g.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new ut(new Xd(2,2),new kr({name:"BackgroundMaterial",uniforms:Ys(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=nt.getTransfer(g.colorSpace)!==lt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,u){m.getRGB(Qa,z_(t)),i.buffers.color.setClear(Qa.r,Qa.g,Qa.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:v}}function Sw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,f=!1;function d(D,z,Y,$,I){let O=!1;if(o){const V=x($,Y,z);c!==V&&(c=V,p(c.object)),O=u(D,$,Y,I),O&&_(D,$,Y,I)}else{const V=z.wireframe===!0;(c.geometry!==$.id||c.program!==Y.id||c.wireframe!==V)&&(c.geometry=$.id,c.program=Y.id,c.wireframe=V,O=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,N(D,z,Y,$),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function v(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function x(D,z,Y){const $=Y.wireframe===!0;let I=a[D.id];I===void 0&&(I={},a[D.id]=I);let O=I[z.id];O===void 0&&(O={},I[z.id]=O);let V=O[$];return V===void 0&&(V=m(h()),O[$]=V),V}function m(D){const z=[],Y=[],$=[];for(let I=0;I<r;I++)z[I]=0,Y[I]=0,$[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Y,attributeDivisors:$,object:D,attributes:{},index:null}}function u(D,z,Y,$){const I=c.attributes,O=z.attributes;let V=0;const q=Y.getAttributes();for(const oe in q)if(q[oe].location>=0){const K=I[oe];let ce=O[oe];if(ce===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;V++}return c.attributesNum!==V||c.index!==$}function _(D,z,Y,$){const I={},O=z.attributes;let V=0;const q=Y.getAttributes();for(const oe in q)if(q[oe].location>=0){let K=O[oe];K===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(K=D.instanceColor));const ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),I[oe]=ce,V++}c.attributes=I,c.attributesNum=V,c.index=$}function g(){const D=c.newAttributes;for(let z=0,Y=D.length;z<Y;z++)D[z]=0}function M(D){R(D,0)}function R(D,z){const Y=c.newAttributes,$=c.enabledAttributes,I=c.attributeDivisors;Y[D]=1,$[D]===0&&(t.enableVertexAttribArray(D),$[D]=1),I[D]!==z&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,z),I[D]=z)}function A(){const D=c.newAttributes,z=c.enabledAttributes;for(let Y=0,$=z.length;Y<$;Y++)z[Y]!==D[Y]&&(t.disableVertexAttribArray(Y),z[Y]=0)}function w(D,z,Y,$,I,O,V){V===!0?t.vertexAttribIPointer(D,z,Y,I,O):t.vertexAttribPointer(D,z,Y,$,I,O)}function N(D,z,Y,$){if(i.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const I=$.attributes,O=Y.getAttributes(),V=z.defaultAttributeValues;for(const q in O){const oe=O[q];if(oe.location>=0){let X=I[q];if(X===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){const K=X.normalized,ce=X.itemSize,_e=n.get(X);if(_e===void 0)continue;const ve=_e.buffer,Ie=_e.type,Ue=_e.bytesPerElement,Re=i.isWebGL2===!0&&(Ie===t.INT||Ie===t.UNSIGNED_INT||X.gpuType===S_);if(X.isInterleavedBufferAttribute){const Ye=X.data,B=Ye.stride,zt=X.offset;if(Ye.isInstancedInterleavedBuffer){for(let Te=0;Te<oe.locationSize;Te++)R(oe.location+Te,Ye.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let Te=0;Te<oe.locationSize;Te++)M(oe.location+Te);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let Te=0;Te<oe.locationSize;Te++)w(oe.location+Te,ce/oe.locationSize,Ie,K,B*Ue,(zt+ce/oe.locationSize*Te)*Ue,Re)}else{if(X.isInstancedBufferAttribute){for(let Ye=0;Ye<oe.locationSize;Ye++)R(oe.location+Ye,X.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ye=0;Ye<oe.locationSize;Ye++)M(oe.location+Ye);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let Ye=0;Ye<oe.locationSize;Ye++)w(oe.location+Ye,ce/oe.locationSize,Ie,K,ce*Ue,ce/oe.locationSize*Ye*Ue,Re)}}else if(V!==void 0){const K=V[q];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(oe.location,K);break;case 3:t.vertexAttrib3fv(oe.location,K);break;case 4:t.vertexAttrib4fv(oe.location,K);break;default:t.vertexAttrib1fv(oe.location,K)}}}}A()}function y(){j();for(const D in a){const z=a[D];for(const Y in z){const $=z[Y];for(const I in $)v($[I].object),delete $[I];delete z[Y]}delete a[D]}}function E(D){if(a[D.id]===void 0)return;const z=a[D.id];for(const Y in z){const $=z[Y];for(const I in $)v($[I].object),delete $[I];delete z[Y]}delete a[D.id]}function F(D){for(const z in a){const Y=a[z];if(Y[D.id]===void 0)continue;const $=Y[D.id];for(const I in $)v($[I].object),delete $[I];delete Y[D.id]}}function j(){Q(),f=!0,c!==l&&(c=l,p(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:Q,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:F,initAttributes:g,enableAttribute:M,disableUnusedAttributes:A}}function Mw(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let p,v;if(r)p=t,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,f,d,h),n.update(d,s,h)}function c(f,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<h;v++)this.render(f[v],d[v]);else{p.multiDrawArraysWEBGL(s,f,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=d[x];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Ew(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,M=o||e.has("OES_texture_float"),R=g&&M,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:A}}function Tw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ki,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?f(null):c();else{const _=s?0:i,g=_*4;let M=u.clippingState||null;l.value=M,M=f(v,h,g,p);for(let R=0;R!==g;++R)M[R]=n[R];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,v){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const u=p+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,M=p;g!==x;++g,M+=4)o.copy(d[g]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function ww(t){let e=new WeakMap;function n(o,a){return a===If?o.mapping=Ws:a===Uf&&(o.mapping=Xs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===If||a===Uf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new FM(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Aw extends k_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ws=4,dm=[.125,.215,.35,.446,.526,.582],Mr=20,wu=new Aw,hm=new Ve;let Au=null,bu=0,Ru=0;const xr=(1+Math.sqrt(5))/2,os=1/xr,pm=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,xr,os),new L(0,xr,-os),new L(os,0,xr),new L(-os,0,xr),new L(xr,os,0),new L(-xr,os,0)];class mm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Au=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Au,bu,Ru),e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Au=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:ea,format:Xn,colorSpace:Ri,depthBuffer:!1},r=gm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bw(s)),this._blurMaterial=Rw(s,e,n)}return r}_compileMaterial(e){const n=new ut(this._lodPlanes[0],e);this._renderer.compile(n,wu)}_sceneToCubeUV(e,n,i,r){const a=new vn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(hm),f.toneMapping=tr,f.autoClear=!1;const p=new an({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),v=new ut(new da,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(hm),x=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const g=this._cubeSize;Ja(r,_*g,u>2?g:0,g,g),f.setRenderTarget(r),x&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ws||e.mapping===Xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_m());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ja(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,wu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=pm[(r-1)%pm.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new ut(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Mr-1),x=s/v,m=isFinite(s)?1+Math.floor(f*x):Mr;m>Mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mr}`);const u=[];let _=0;for(let w=0;w<Mr;++w){const N=w/x,y=Math.exp(-N*N/2);u.push(y),w===0?_+=y:w<m&&(_+=2*y)}for(let w=0;w<u.length;w++)u[w]=u[w]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=v,h.mipInt.value=g-i;const M=this._sizeLods[r],R=3*M*(r>g-ws?r-g+ws:0),A=4*(this._cubeSize-M);Ja(n,R,A,3*M,2*M),l.setRenderTarget(n),l.render(d,wu)}}function bw(t){const e=[],n=[],i=[];let r=t;const s=t-ws+1+dm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ws?l=dm[o-t+ws-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,v=6,x=3,m=2,u=1,_=new Float32Array(x*v*p),g=new Float32Array(m*v*p),M=new Float32Array(u*v*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,N=A>2?0:-1,y=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];_.set(y,x*v*A),g.set(h,m*v*A);const E=[A,A,A,A,A,A];M.set(E,u*v*A)}const R=new At;R.setAttribute("position",new Ot(_,x)),R.setAttribute("uv",new Ot(g,m)),R.setAttribute("faceIndex",new Ot(M,u)),e.push(R),r>ws&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function gm(t,e,n){const i=new Fr(t,e,n);return i.texture.mapping=xc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ja(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Rw(t,e,n){const i=new Float32Array(Mr),r=new L(0,1,0);return new kr({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function _m(){return new kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function vm(){return new kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function jd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===If||l===Uf,f=l===Ws||l===Xs;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new mm(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new mm(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Pw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Lw(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const x=p[v];for(let m=0,u=x.length;m<u;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,v=d.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let g=0,M=_.length;g<M;g+=3){const R=_[g+0],A=_[g+1],w=_[g+2];h.push(R,A,A,w,w,R)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,M=_.length/3-1;g<M;g+=3){const R=g+0,A=g+1,w=g+2;h.push(R,A,A,w,w,R)}}else return;const m=new(L_(h)?F_:O_)(h,1);m.version=x;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function Dw(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function f(p,v){t.drawElements(s,v,a,p*l),n.update(v,s,1)}function d(p,v,x){if(x===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,v,a,p*l,x),n.update(v,s,x)}function h(p,v,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<x;u++)this.render(p[u]/l,v[u]);else{m.multiDrawElementsWEBGL(s,v,0,a,p,0,x);let u=0;for(let _=0;_<x;_++)u+=v[_];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function Nw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Iw(t,e){return t[0]-e[0]}function Uw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Ow(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new dt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=p!==void 0?p.length:0;let x=s.get(f);if(x===void 0||x.count!==v){let D=function(){j.dispose(),s.delete(f),f.removeEventListener("dispose",D)};x!==void 0&&x.texture.dispose();const _=f.morphAttributes.position!==void 0,g=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let N=0;_===!0&&(N=1),g===!0&&(N=2),M===!0&&(N=3);let y=f.attributes.position.count*N,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const F=new Float32Array(y*E*4*v),j=new I_(F,y,E,v);j.type=Xi,j.needsUpdate=!0;const Q=N*4;for(let z=0;z<v;z++){const Y=R[z],$=A[z],I=w[z],O=y*E*4*z;for(let V=0;V<Y.count;V++){const q=V*Q;_===!0&&(o.fromBufferAttribute(Y,V),F[O+q+0]=o.x,F[O+q+1]=o.y,F[O+q+2]=o.z,F[O+q+3]=0),g===!0&&(o.fromBufferAttribute($,V),F[O+q+4]=o.x,F[O+q+5]=o.y,F[O+q+6]=o.z,F[O+q+7]=0),M===!0&&(o.fromBufferAttribute(I,V),F[O+q+8]=o.x,F[O+q+9]=o.y,F[O+q+10]=o.z,F[O+q+11]=I.itemSize===4?o.w:1)}}x={count:v,texture:j,size:new Ae(y,E)},s.set(f,x),f.addEventListener("dispose",D)}let m=0;for(let _=0;_<h.length;_++)m+=h[_];const u=f.morphTargetsRelative?1:1-m;d.getUniforms().setValue(t,"morphTargetBaseInfluence",u),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",x.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",x.size)}else{const p=h===void 0?0:h.length;let v=i[f.id];if(v===void 0||v.length!==p){v=[];for(let g=0;g<p;g++)v[g]=[g,0];i[f.id]=v}for(let g=0;g<p;g++){const M=v[g];M[0]=g,M[1]=h[g]}v.sort(Uw);for(let g=0;g<8;g++)g<p&&v[g][1]?(a[g][0]=v[g][0],a[g][1]=v[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(Iw);const x=f.morphAttributes.position,m=f.morphAttributes.normal;let u=0;for(let g=0;g<8;g++){const M=a[g],R=M[0],A=M[1];R!==Number.MAX_SAFE_INTEGER&&A?(x&&f.getAttribute("morphTarget"+g)!==x[R]&&f.setAttribute("morphTarget"+g,x[R]),m&&f.getAttribute("morphNormal"+g)!==m[R]&&f.setAttribute("morphNormal"+g,m[R]),r[g]=A,u+=A):(x&&f.hasAttribute("morphTarget"+g)===!0&&f.deleteAttribute("morphTarget"+g),m&&f.hasAttribute("morphNormal"+g)===!0&&f.deleteAttribute("morphNormal"+g),r[g]=0)}const _=f.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Fw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class G_ extends hn{constructor(e,n,i,r,s,o,a,l,c,f){if(f=f!==void 0?f:Cr,f!==Cr&&f!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Cr&&(i=Wi),i===void 0&&f===js&&(i=Rr),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const V_=new hn,W_=new G_(1,1);W_.compareFunction=P_;const X_=new I_,j_=new yM,Y_=new B_,xm=[],ym=[],Sm=new Float32Array(16),Mm=new Float32Array(9),Em=new Float32Array(4);function Js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=xm[r];if(s===void 0&&(s=new Float32Array(r),xm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Mc(t,e){let n=ym[e];n===void 0&&(n=new Int32Array(e),ym[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function zw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function Bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function Hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function Gw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;Em.set(i),t.uniformMatrix2fv(this.addr,!1,Em),Dt(n,i)}}function Vw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;Mm.set(i),t.uniformMatrix3fv(this.addr,!1,Mm),Dt(n,i)}}function Ww(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;Sm.set(i),t.uniformMatrix4fv(this.addr,!1,Sm),Dt(n,i)}}function Xw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function Yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function $w(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function Zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function Qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function Jw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?W_:V_;n.setTexture2D(e||s,r)}function e1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||j_,r)}function t1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Y_,r)}function n1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||X_,r)}function i1(t){switch(t){case 5126:return zw;case 35664:return kw;case 35665:return Bw;case 35666:return Hw;case 35674:return Gw;case 35675:return Vw;case 35676:return Ww;case 5124:case 35670:return Xw;case 35667:case 35671:return jw;case 35668:case 35672:return Yw;case 35669:case 35673:return qw;case 5125:return $w;case 36294:return Kw;case 36295:return Zw;case 36296:return Qw;case 35678:case 36198:case 36298:case 36306:case 35682:return Jw;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return n1}}function r1(t,e){t.uniform1fv(this.addr,e)}function s1(t,e){const n=Js(e,this.size,2);t.uniform2fv(this.addr,n)}function o1(t,e){const n=Js(e,this.size,3);t.uniform3fv(this.addr,n)}function a1(t,e){const n=Js(e,this.size,4);t.uniform4fv(this.addr,n)}function l1(t,e){const n=Js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function c1(t,e){const n=Js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function u1(t,e){const n=Js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function f1(t,e){t.uniform1iv(this.addr,e)}function d1(t,e){t.uniform2iv(this.addr,e)}function h1(t,e){t.uniform3iv(this.addr,e)}function p1(t,e){t.uniform4iv(this.addr,e)}function m1(t,e){t.uniform1uiv(this.addr,e)}function g1(t,e){t.uniform2uiv(this.addr,e)}function _1(t,e){t.uniform3uiv(this.addr,e)}function v1(t,e){t.uniform4uiv(this.addr,e)}function x1(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||V_,s[o])}function y1(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||j_,s[o])}function S1(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Y_,s[o])}function M1(t,e,n){const i=this.cache,r=e.length,s=Mc(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||X_,s[o])}function E1(t){switch(t){case 5126:return r1;case 35664:return s1;case 35665:return o1;case 35666:return a1;case 35674:return l1;case 35675:return c1;case 35676:return u1;case 5124:case 35670:return f1;case 35667:case 35671:return d1;case 35668:case 35672:return h1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return _1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return S1;case 36289:case 36303:case 36311:case 36292:return M1}}class T1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=i1(n.type)}}class w1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=E1(n.type)}}class A1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Cu=/(\w+)(\])?(\[|\.)?/g;function Tm(t,e){t.seq.push(e),t.map[e.id]=e}function b1(t,e,n){const i=t.name,r=i.length;for(Cu.lastIndex=0;;){const s=Cu.exec(i),o=Cu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Tm(n,c===void 0?new T1(a,t,e):new w1(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new A1(a),Tm(n,d)),n=d}}}class Sl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);b1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function wm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const R1=37297;let C1=0;function P1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function L1(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===Kl&&n===$l?i="LinearDisplayP3ToLinearSRGB":e===$l&&n===Kl&&(i="LinearSRGBToLinearDisplayP3"),t){case Ri:case yc:return[i,"LinearTransferOETF"];case Bt:case Gd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Am(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+P1(t.getShaderSource(e),o)}else return r}function D1(t,e){const n=L1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function N1(t,e){let n;switch(e){case GS:n="Linear";break;case VS:n="Reinhard";break;case WS:n="OptimizedCineon";break;case XS:n="ACESFilmic";break;case YS:n="AgX";break;case jS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function I1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function U1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(As).join(`
`)}function O1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function F1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function As(t){return t!==""}function bm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hf(t){return t.replace(z1,B1)}const k1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function B1(t,e){let n=Be[e];if(n===void 0){const i=k1.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hf(n)}const H1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cm(t){return t.replace(H1,G1)}function G1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===v_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===gS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function W1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function X1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function j1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case x_:e="ENVMAP_BLENDING_MULTIPLY";break;case BS:e="ENVMAP_BLENDING_MIX";break;case HS:e="ENVMAP_BLENDING_ADD";break}return e}function Y1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function q1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=V1(n),c=W1(n),f=X1(n),d=j1(n),h=Y1(n),p=n.isWebGL2?"":I1(n),v=U1(n),x=O1(s),m=r.createProgram();let u,_,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(As).join(`
`),u.length>0&&(u+=`
`),_=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(As).join(`
`),_.length>0&&(_+=`
`)):(u=[Pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),_=[p,Pm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==tr?"#define TONE_MAPPING":"",n.toneMapping!==tr?Be.tonemapping_pars_fragment:"",n.toneMapping!==tr?N1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,D1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(As).join(`
`)),o=Hf(o),o=bm(o,n),o=Rm(o,n),a=Hf(a),a=bm(a,n),a=Rm(a,n),o=Cm(o),a=Cm(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=g+u+o,R=g+_+a,A=wm(r,r.VERTEX_SHADER,M),w=wm(r,r.FRAGMENT_SHADER,R);r.attachShader(m,A),r.attachShader(m,w),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function N(j){if(t.debug.checkShaderErrors){const Q=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(A).trim(),z=r.getShaderInfoLog(w).trim();let Y=!0,$=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,A,w);else{const I=Am(r,A,"vertex"),O=Am(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+I+`
`+O)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(D===""||z==="")&&($=!1);$&&(j.diagnostics={runnable:Y,programLog:Q,vertexShader:{log:D,prefix:u},fragmentShader:{log:z,prefix:_}})}r.deleteShader(A),r.deleteShader(w),y=new Sl(r,m),E=F1(r,m)}let y;this.getUniforms=function(){return y===void 0&&N(this),y};let E;this.getAttributes=function(){return E===void 0&&N(this),E};let F=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(m,R1)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=C1++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=w,this}let $1=0;class K1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Z1(e),n.set(e,i)),i}}class Z1{constructor(e){this.id=$1++,this.code=e,this.usedTimes=0}}function Q1(t,e,n,i,r,s,o){const a=new Vd,l=new K1,c=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function m(y,E,F,j,Q){const D=j.fog,z=Q.geometry,Y=y.isMeshStandardMaterial?j.environment:null,$=(y.isMeshStandardMaterial?n:e).get(y.envMap||Y),I=$&&$.mapping===xc?$.image.height:null,O=v[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const V=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,q=V!==void 0?V.length:0;let oe=0;z.morphAttributes.position!==void 0&&(oe=1),z.morphAttributes.normal!==void 0&&(oe=2),z.morphAttributes.color!==void 0&&(oe=3);let X,K,ce,_e;if(O){const St=Jn[O];X=St.vertexShader,K=St.fragmentShader}else X=y.vertexShader,K=y.fragmentShader,l.update(y),ce=l.getVertexShaderID(y),_e=l.getFragmentShaderID(y);const ve=t.getRenderTarget(),Ie=Q.isInstancedMesh===!0,Ue=Q.isBatchedMesh===!0,Re=!!y.map,Ye=!!y.matcap,B=!!$,zt=!!y.aoMap,Te=!!y.lightMap,Le=!!y.bumpMap,xe=!!y.normalMap,st=!!y.displacementMap,Fe=!!y.emissiveMap,b=!!y.metalnessMap,S=!!y.roughnessMap,k=y.anisotropy>0,ie=y.clearcoat>0,ee=y.iridescence>0,re=y.sheen>0,ye=y.transmission>0,fe=k&&!!y.anisotropyMap,ge=ie&&!!y.clearcoatMap,be=ie&&!!y.clearcoatNormalMap,ze=ie&&!!y.clearcoatRoughnessMap,J=ee&&!!y.iridescenceMap,et=ee&&!!y.iridescenceThicknessMap,He=re&&!!y.sheenColorMap,De=re&&!!y.sheenRoughnessMap,Ee=!!y.specularMap,de=!!y.specularColorMap,C=!!y.specularIntensityMap,se=ye&&!!y.transmissionMap,Se=ye&&!!y.thicknessMap,me=!!y.gradientMap,te=!!y.alphaMap,P=y.alphaTest>0,ae=!!y.alphaHash,ue=!!y.extensions,Ce=!!z.attributes.uv1,we=!!z.attributes.uv2,qe=!!z.attributes.uv3;let $e=tr;return y.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&($e=t.toneMapping),{isWebGL2:f,shaderID:O,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:K,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ue,instancing:Ie,instancingColor:Ie&&Q.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ve===null?t.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ri,map:Re,matcap:Ye,envMap:B,envMapMode:B&&$.mapping,envMapCubeUVHeight:I,aoMap:zt,lightMap:Te,bumpMap:Le,normalMap:xe,displacementMap:h&&st,emissiveMap:Fe,normalMapObjectSpace:xe&&y.normalMapType===sM,normalMapTangentSpace:xe&&y.normalMapType===C_,metalnessMap:b,roughnessMap:S,anisotropy:k,anisotropyMap:fe,clearcoat:ie,clearcoatMap:ge,clearcoatNormalMap:be,clearcoatRoughnessMap:ze,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:et,sheen:re,sheenColorMap:He,sheenRoughnessMap:De,specularMap:Ee,specularColorMap:de,specularIntensityMap:C,transmission:ye,transmissionMap:se,thicknessMap:Se,gradientMap:me,opaque:y.transparent===!1&&y.blending===Is,alphaMap:te,alphaTest:P,alphaHash:ae,combine:y.combine,mapUv:Re&&x(y.map.channel),aoMapUv:zt&&x(y.aoMap.channel),lightMapUv:Te&&x(y.lightMap.channel),bumpMapUv:Le&&x(y.bumpMap.channel),normalMapUv:xe&&x(y.normalMap.channel),displacementMapUv:st&&x(y.displacementMap.channel),emissiveMapUv:Fe&&x(y.emissiveMap.channel),metalnessMapUv:b&&x(y.metalnessMap.channel),roughnessMapUv:S&&x(y.roughnessMap.channel),anisotropyMapUv:fe&&x(y.anisotropyMap.channel),clearcoatMapUv:ge&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:be&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:et&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:He&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(y.sheenRoughnessMap.channel),specularMapUv:Ee&&x(y.specularMap.channel),specularColorMapUv:de&&x(y.specularColorMap.channel),specularIntensityMapUv:C&&x(y.specularIntensityMap.channel),transmissionMapUv:se&&x(y.transmissionMap.channel),thicknessMapUv:Se&&x(y.thicknessMap.channel),alphaMapUv:te&&x(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(xe||k),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:we,vertexUv3s:qe,pointsUvs:Q.isPoints===!0&&!!z.attributes.uv&&(Re||te),fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Q.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:oe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:$e,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Re&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ln,flipSided:y.side===rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ue&&y.extensions.derivatives===!0,extensionFragDepth:ue&&y.extensions.fragDepth===!0,extensionDrawBuffers:ue&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function u(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)E.push(F),E.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(_(E,y),g(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function _(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function g(y,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function M(y){const E=v[y.type];let F;if(E){const j=Jn[E];F=NM.clone(j.uniforms)}else F=y.uniforms;return F}function R(y,E){let F;for(let j=0,Q=c.length;j<Q;j++){const D=c[j];if(D.cacheKey===E){F=D,++F.usedTimes;break}}return F===void 0&&(F=new q1(t,E,y,s),c.push(F)),F}function A(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),y.destroy()}}function w(y){l.remove(y)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:M,acquireProgram:R,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:N}}function J1(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function eA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Lm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Dm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,v,x,m){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=x,u.group=m),e++,u}function a(d,h,p,v,x,m){const u=o(d,h,p,v,x,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(d,h,p,v,x,m){const u=o(d,h,p,v,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||eA),i.length>1&&i.sort(h||Lm),r.length>1&&r.sort(h||Lm)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function tA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Dm,t.set(i,[o])):r>=s.length?(o=new Dm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function nA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new L,color:new Ve};break;case"SpotLight":n={position:new L,direction:new L,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new L,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new L,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=n,n}}}function iA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let rA=0;function sA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function oA(t,e){const n=new nA,i=iA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new L);const s=new L,o=new gt,a=new gt;function l(f,d){let h=0,p=0,v=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let x=0,m=0,u=0,_=0,g=0,M=0,R=0,A=0,w=0,N=0,y=0;f.sort(sA);const E=d===!0?Math.PI:1;for(let j=0,Q=f.length;j<Q;j++){const D=f[j],z=D.color,Y=D.intensity,$=D.distance,I=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*Y*E,p+=z.g*Y*E,v+=z.b*Y*E;else if(D.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(D.sh.coefficients[O],Y);y++}else if(D.isDirectionalLight){const O=n.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){const V=D.shadow,q=i.get(D);q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,r.directionalShadow[x]=q,r.directionalShadowMap[x]=I,r.directionalShadowMatrix[x]=D.shadow.matrix,M++}r.directional[x]=O,x++}else if(D.isSpotLight){const O=n.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(z).multiplyScalar(Y*E),O.distance=$,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,r.spot[u]=O;const V=D.shadow;if(D.map&&(r.spotLightMap[w]=D.map,w++,V.updateMatrices(D),D.castShadow&&N++),r.spotLightMatrix[u]=V.matrix,D.castShadow){const q=i.get(D);q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,r.spotShadow[u]=q,r.spotShadowMap[u]=I,A++}u++}else if(D.isRectAreaLight){const O=n.get(D);O.color.copy(z).multiplyScalar(Y),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),r.rectArea[_]=O,_++}else if(D.isPointLight){const O=n.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity*E),O.distance=D.distance,O.decay=D.decay,D.castShadow){const V=D.shadow,q=i.get(D);q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,q.shadowCameraNear=V.camera.near,q.shadowCameraFar=V.camera.far,r.pointShadow[m]=q,r.pointShadowMap[m]=I,r.pointShadowMatrix[m]=D.shadow.matrix,R++}r.point[m]=O,m++}else if(D.isHemisphereLight){const O=n.get(D);O.skyColor.copy(D.color).multiplyScalar(Y*E),O.groundColor.copy(D.groundColor).multiplyScalar(Y*E),r.hemi[g]=O,g++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const F=r.hash;(F.directionalLength!==x||F.pointLength!==m||F.spotLength!==u||F.rectAreaLength!==_||F.hemiLength!==g||F.numDirectionalShadows!==M||F.numPointShadows!==R||F.numSpotShadows!==A||F.numSpotMaps!==w||F.numLightProbes!==y)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=_,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=A+w-N,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=y,F.directionalLength=x,F.pointLength=m,F.spotLength=u,F.rectAreaLength=_,F.hemiLength=g,F.numDirectionalShadows=M,F.numPointShadows=R,F.numSpotShadows=A,F.numSpotMaps=w,F.numLightProbes=y,r.version=rA++)}function c(f,d){let h=0,p=0,v=0,x=0,m=0;const u=d.matrixWorldInverse;for(let _=0,g=f.length;_<g;_++){const M=f[_];if(M.isDirectionalLight){const R=r.directional[h];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),h++}else if(M.isSpotLight){const R=r.spot[v];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),v++}else if(M.isRectAreaLight){const R=r.rectArea[x];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(u),a.identity(),o.copy(M.matrixWorld),o.premultiply(u),a.extractRotation(o),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){const R=r.point[p];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(u),p++}else if(M.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function Nm(t,e){const n=new oA(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function aA(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Nm(t,e),n.set(s,[l])):o>=a.length?(l=new Nm(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class lA extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cA extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dA(t,e,n){let i=new Wd;const r=new Ae,s=new Ae,o=new dt,a=new lA({depthPacking:rM}),l=new cA,c={},f=n.maxTextureSize,d={[or]:rn,[rn]:or,[Ln]:Ln},h=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:uA,fragmentShader:fA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new At;v.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ut(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v_;let u=this.type;this.render=function(A,w,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=t.getRenderTarget(),E=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),j=t.state;j.setBlending(er),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Q=u!==fi&&this.type===fi,D=u===fi&&this.type!==fi;for(let z=0,Y=A.length;z<Y;z++){const $=A[z],I=$.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const O=I.getFrameExtents();if(r.multiply(O),s.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/O.x),r.x=s.x*O.x,I.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/O.y),r.y=s.y*O.y,I.mapSize.y=s.y)),I.map===null||Q===!0||D===!0){const q=this.type!==fi?{minFilter:en,magFilter:en}:{};I.map!==null&&I.map.dispose(),I.map=new Fr(r.x,r.y,q),I.map.texture.name=$.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const V=I.getViewportCount();for(let q=0;q<V;q++){const oe=I.getViewport(q);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),j.viewport(o),I.updateMatrices($,q),i=I.getFrustum(),M(w,N,I.camera,$,this.type)}I.isPointLightShadow!==!0&&this.type===fi&&_(I,N),I.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(y,E,F)};function _(A,w){const N=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Fr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,N,h,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,N,p,x,null)}function g(A,w,N,y){let E=null;const F=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)E=F;else if(E=N.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const j=E.uuid,Q=w.uuid;let D=c[j];D===void 0&&(D={},c[j]=D);let z=D[Q];z===void 0&&(z=E.clone(),D[Q]=z,w.addEventListener("dispose",R)),E=z}if(E.visible=w.visible,E.wireframe=w.wireframe,y===fi?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:d[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const j=t.properties.get(E);j.light=N}return E}function M(A,w,N,y,E){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===fi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const Q=e.update(A),D=A.material;if(Array.isArray(D)){const z=Q.groups;for(let Y=0,$=z.length;Y<$;Y++){const I=z[Y],O=D[I.materialIndex];if(O&&O.visible){const V=g(A,O,y,E);A.onBeforeShadow(t,A,w,N,Q,V,I),t.renderBufferDirect(N,null,Q,V,A,I),A.onAfterShadow(t,A,w,N,Q,V,I)}}}else if(D.visible){const z=g(A,D,y,E);A.onBeforeShadow(t,A,w,N,Q,z,null),t.renderBufferDirect(N,null,Q,z,A,null),A.onAfterShadow(t,A,w,N,Q,z,null)}}const j=A.children;for(let Q=0,D=j.length;Q<D;Q++)M(j[Q],w,N,y,E)}function R(A){A.target.removeEventListener("dispose",R);for(const N in c){const y=c[N],E=A.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}function hA(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const ae=new dt;let ue=null;const Ce=new dt(0,0,0,0);return{setMask:function(we){ue!==we&&!P&&(t.colorMask(we,we,we,we),ue=we)},setLocked:function(we){P=we},setClear:function(we,qe,$e,vt,St){St===!0&&(we*=vt,qe*=vt,$e*=vt),ae.set(we,qe,$e,vt),Ce.equals(ae)===!1&&(t.clearColor(we,qe,$e,vt),Ce.copy(ae))},reset:function(){P=!1,ue=null,Ce.set(-1,0,0,0)}}}function s(){let P=!1,ae=null,ue=null,Ce=null;return{setTest:function(we){we?Ue(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(we){ae!==we&&!P&&(t.depthMask(we),ae=we)},setFunc:function(we){if(ue!==we){switch(we){case NS:t.depthFunc(t.NEVER);break;case IS:t.depthFunc(t.ALWAYS);break;case US:t.depthFunc(t.LESS);break;case jl:t.depthFunc(t.LEQUAL);break;case OS:t.depthFunc(t.EQUAL);break;case FS:t.depthFunc(t.GEQUAL);break;case zS:t.depthFunc(t.GREATER);break;case kS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=we}},setLocked:function(we){P=we},setClear:function(we){Ce!==we&&(t.clearDepth(we),Ce=we)},reset:function(){P=!1,ae=null,ue=null,Ce=null}}}function o(){let P=!1,ae=null,ue=null,Ce=null,we=null,qe=null,$e=null,vt=null,St=null;return{setTest:function(Qe){P||(Qe?Ue(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(Qe){ae!==Qe&&!P&&(t.stencilMask(Qe),ae=Qe)},setFunc:function(Qe,Tt,$n){(ue!==Qe||Ce!==Tt||we!==$n)&&(t.stencilFunc(Qe,Tt,$n),ue=Qe,Ce=Tt,we=$n)},setOp:function(Qe,Tt,$n){(qe!==Qe||$e!==Tt||vt!==$n)&&(t.stencilOp(Qe,Tt,$n),qe=Qe,$e=Tt,vt=$n)},setLocked:function(Qe){P=Qe},setClear:function(Qe){St!==Qe&&(t.clearStencil(Qe),St=Qe)},reset:function(){P=!1,ae=null,ue=null,Ce=null,we=null,qe=null,$e=null,vt=null,St=null}}}const a=new r,l=new s,c=new o,f=new WeakMap,d=new WeakMap;let h={},p={},v=new WeakMap,x=[],m=null,u=!1,_=null,g=null,M=null,R=null,A=null,w=null,N=null,y=new Ve(0,0,0),E=0,F=!1,j=null,Q=null,D=null,z=null,Y=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,O=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(V)[1]),I=O>=1):V.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),I=O>=2);let q=null,oe={};const X=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),ce=new dt().fromArray(X),_e=new dt().fromArray(K);function ve(P,ae,ue,Ce){const we=new Uint8Array(4),qe=t.createTexture();t.bindTexture(P,qe),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<ue;$e++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(ae,0,t.RGBA,1,1,Ce,0,t.RGBA,t.UNSIGNED_BYTE,we):t.texImage2D(ae+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,we);return qe}const Ie={};Ie[t.TEXTURE_2D]=ve(t.TEXTURE_2D,t.TEXTURE_2D,1),Ie[t.TEXTURE_CUBE_MAP]=ve(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ie[t.TEXTURE_2D_ARRAY]=ve(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ie[t.TEXTURE_3D]=ve(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ue(t.DEPTH_TEST),l.setFunc(jl),Fe(!1),b(gp),Ue(t.CULL_FACE),xe(er);function Ue(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function Re(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function Ye(P,ae){return p[P]!==ae?(t.bindFramebuffer(P,ae),p[P]=ae,i&&(P===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ae),P===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ae)),!0):!1}function B(P,ae){let ue=x,Ce=!1;if(P)if(ue=v.get(ae),ue===void 0&&(ue=[],v.set(ae,ue)),P.isWebGLMultipleRenderTargets){const we=P.texture;if(ue.length!==we.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let qe=0,$e=we.length;qe<$e;qe++)ue[qe]=t.COLOR_ATTACHMENT0+qe;ue.length=we.length,Ce=!0}}else ue[0]!==t.COLOR_ATTACHMENT0&&(ue[0]=t.COLOR_ATTACHMENT0,Ce=!0);else ue[0]!==t.BACK&&(ue[0]=t.BACK,Ce=!0);Ce&&(n.isWebGL2?t.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function zt(P){return m!==P?(t.useProgram(P),m=P,!0):!1}const Te={[Sr]:t.FUNC_ADD,[vS]:t.FUNC_SUBTRACT,[xS]:t.FUNC_REVERSE_SUBTRACT};if(i)Te[xp]=t.MIN,Te[yp]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Te[xp]=P.MIN_EXT,Te[yp]=P.MAX_EXT)}const Le={[yS]:t.ZERO,[SS]:t.ONE,[MS]:t.SRC_COLOR,[Df]:t.SRC_ALPHA,[RS]:t.SRC_ALPHA_SATURATE,[AS]:t.DST_COLOR,[TS]:t.DST_ALPHA,[ES]:t.ONE_MINUS_SRC_COLOR,[Nf]:t.ONE_MINUS_SRC_ALPHA,[bS]:t.ONE_MINUS_DST_COLOR,[wS]:t.ONE_MINUS_DST_ALPHA,[CS]:t.CONSTANT_COLOR,[PS]:t.ONE_MINUS_CONSTANT_COLOR,[LS]:t.CONSTANT_ALPHA,[DS]:t.ONE_MINUS_CONSTANT_ALPHA};function xe(P,ae,ue,Ce,we,qe,$e,vt,St,Qe){if(P===er){u===!0&&(Re(t.BLEND),u=!1);return}if(u===!1&&(Ue(t.BLEND),u=!0),P!==_S){if(P!==_||Qe!==F){if((g!==Sr||A!==Sr)&&(t.blendEquation(t.FUNC_ADD),g=Sr,A=Sr),Qe)switch(P){case Is:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yr:t.blendFunc(t.ONE,t.ONE);break;case _p:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Is:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yr:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case _p:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,R=null,w=null,N=null,y.set(0,0,0),E=0,_=P,F=Qe}return}we=we||ae,qe=qe||ue,$e=$e||Ce,(ae!==g||we!==A)&&(t.blendEquationSeparate(Te[ae],Te[we]),g=ae,A=we),(ue!==M||Ce!==R||qe!==w||$e!==N)&&(t.blendFuncSeparate(Le[ue],Le[Ce],Le[qe],Le[$e]),M=ue,R=Ce,w=qe,N=$e),(vt.equals(y)===!1||St!==E)&&(t.blendColor(vt.r,vt.g,vt.b,St),y.copy(vt),E=St),_=P,F=!1}function st(P,ae){P.side===Ln?Re(t.CULL_FACE):Ue(t.CULL_FACE);let ue=P.side===rn;ae&&(ue=!ue),Fe(ue),P.blending===Is&&P.transparent===!1?xe(er):xe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const Ce=P.stencilWrite;c.setTest(Ce),Ce&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),k(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ue(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(P){j!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),j=P)}function b(P){P!==pS?(Ue(t.CULL_FACE),P!==Q&&(P===gp?t.cullFace(t.BACK):P===mS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),Q=P}function S(P){P!==D&&(I&&t.lineWidth(P),D=P)}function k(P,ae,ue){P?(Ue(t.POLYGON_OFFSET_FILL),(z!==ae||Y!==ue)&&(t.polygonOffset(ae,ue),z=ae,Y=ue)):Re(t.POLYGON_OFFSET_FILL)}function ie(P){P?Ue(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function ee(P){P===void 0&&(P=t.TEXTURE0+$-1),q!==P&&(t.activeTexture(P),q=P)}function re(P,ae,ue){ue===void 0&&(q===null?ue=t.TEXTURE0+$-1:ue=q);let Ce=oe[ue];Ce===void 0&&(Ce={type:void 0,texture:void 0},oe[ue]=Ce),(Ce.type!==P||Ce.texture!==ae)&&(q!==ue&&(t.activeTexture(ue),q=ue),t.bindTexture(P,ae||Ie[P]),Ce.type=P,Ce.texture=ae)}function ye(){const P=oe[q];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function fe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function He(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function C(P){ce.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),ce.copy(P))}function se(P){_e.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),_e.copy(P))}function Se(P,ae){let ue=d.get(ae);ue===void 0&&(ue=new WeakMap,d.set(ae,ue));let Ce=ue.get(P);Ce===void 0&&(Ce=t.getUniformBlockIndex(ae,P.name),ue.set(P,Ce))}function me(P,ae){const Ce=d.get(ae).get(P);f.get(ae)!==Ce&&(t.uniformBlockBinding(ae,Ce,P.__bindingPointIndex),f.set(ae,Ce))}function te(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},q=null,oe={},p={},v=new WeakMap,x=[],m=null,u=!1,_=null,g=null,M=null,R=null,A=null,w=null,N=null,y=new Ve(0,0,0),E=0,F=!1,j=null,Q=null,D=null,z=null,Y=null,ce.set(0,0,t.canvas.width,t.canvas.height),_e.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ue,disable:Re,bindFramebuffer:Ye,drawBuffers:B,useProgram:zt,setBlending:xe,setMaterial:st,setFlipSided:Fe,setCullFace:b,setLineWidth:S,setPolygonOffset:k,setScissorTest:ie,activeTexture:ee,bindTexture:re,unbindTexture:ye,compressedTexImage2D:fe,compressedTexImage3D:ge,texImage2D:Ee,texImage3D:de,updateUBOMapping:Se,uniformBlockBinding:me,texStorage2D:He,texStorage3D:De,texSubImage2D:be,texSubImage3D:ze,compressedTexSubImage2D:J,compressedTexSubImage3D:et,scissor:C,viewport:se,reset:te}}function pA(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,S){return p?new OffscreenCanvas(b,S):Ql("canvas")}function x(b,S,k,ie){let ee=1;if((b.width>ie||b.height>ie)&&(ee=ie/Math.max(b.width,b.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const re=S?Bf:Math.floor,ye=re(ee*b.width),fe=re(ee*b.height);d===void 0&&(d=v(ye,fe));const ge=k?v(ye,fe):d;return ge.width=ye,ge.height=fe,ge.getContext("2d").drawImage(b,0,0,ye,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ye+"x"+fe+")."),ge}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return $p(b.width)&&$p(b.height)}function u(b){return a?!1:b.wrapS!==Dn||b.wrapT!==Dn||b.minFilter!==en&&b.minFilter!==Cn}function _(b,S){return b.generateMipmaps&&S&&b.minFilter!==en&&b.minFilter!==Cn}function g(b){t.generateMipmap(b)}function M(b,S,k,ie,ee=!1){if(a===!1)return S;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let re=S;if(S===t.RED&&(k===t.FLOAT&&(re=t.R32F),k===t.HALF_FLOAT&&(re=t.R16F),k===t.UNSIGNED_BYTE&&(re=t.R8)),S===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(re=t.R8UI),k===t.UNSIGNED_SHORT&&(re=t.R16UI),k===t.UNSIGNED_INT&&(re=t.R32UI),k===t.BYTE&&(re=t.R8I),k===t.SHORT&&(re=t.R16I),k===t.INT&&(re=t.R32I)),S===t.RG&&(k===t.FLOAT&&(re=t.RG32F),k===t.HALF_FLOAT&&(re=t.RG16F),k===t.UNSIGNED_BYTE&&(re=t.RG8)),S===t.RGBA){const ye=ee?ql:nt.getTransfer(ie);k===t.FLOAT&&(re=t.RGBA32F),k===t.HALF_FLOAT&&(re=t.RGBA16F),k===t.UNSIGNED_BYTE&&(re=ye===lt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function R(b,S,k){return _(b,k)===!0||b.isFramebufferTexture&&b.minFilter!==en&&b.minFilter!==Cn?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function A(b){return b===en||b===Sp||b===tu?t.NEAREST:t.LINEAR}function w(b){const S=b.target;S.removeEventListener("dispose",w),y(S),S.isVideoTexture&&f.delete(S)}function N(b){const S=b.target;S.removeEventListener("dispose",N),F(S)}function y(b){const S=i.get(b);if(S.__webglInit===void 0)return;const k=b.source,ie=h.get(k);if(ie){const ee=ie[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(b),Object.keys(ie).length===0&&h.delete(k)}i.remove(b)}function E(b){const S=i.get(b);t.deleteTexture(S.__webglTexture);const k=b.source,ie=h.get(k);delete ie[S.__cacheKey],o.memory.textures--}function F(b){const S=b.texture,k=i.get(b),ie=i.get(S);if(ie.__webglTexture!==void 0&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(k.__webglFramebuffer[ee]))for(let re=0;re<k.__webglFramebuffer[ee].length;re++)t.deleteFramebuffer(k.__webglFramebuffer[ee][re]);else t.deleteFramebuffer(k.__webglFramebuffer[ee]);k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer[ee])}else{if(Array.isArray(k.__webglFramebuffer))for(let ee=0;ee<k.__webglFramebuffer.length;ee++)t.deleteFramebuffer(k.__webglFramebuffer[ee]);else t.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&t.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ee=0;ee<k.__webglColorRenderbuffer.length;ee++)k.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(k.__webglColorRenderbuffer[ee]);k.__webglDepthRenderbuffer&&t.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ee=0,re=S.length;ee<re;ee++){const ye=i.get(S[ee]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(S[ee])}i.remove(S),i.remove(b)}let j=0;function Q(){j=0}function D(){const b=j;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),j+=1,b}function z(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function Y(b,S){const k=i.get(b);if(b.isVideoTexture&&st(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const ie=b.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(k,b,S);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+S)}function $(b,S){const k=i.get(b);if(b.version>0&&k.__version!==b.version){ce(k,b,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+S)}function I(b,S){const k=i.get(b);if(b.version>0&&k.__version!==b.version){ce(k,b,S);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+S)}function O(b,S){const k=i.get(b);if(b.version>0&&k.__version!==b.version){_e(k,b,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+S)}const V={[Yl]:t.REPEAT,[Dn]:t.CLAMP_TO_EDGE,[Of]:t.MIRRORED_REPEAT},q={[en]:t.NEAREST,[Sp]:t.NEAREST_MIPMAP_NEAREST,[tu]:t.NEAREST_MIPMAP_LINEAR,[Cn]:t.LINEAR,[qS]:t.LINEAR_MIPMAP_NEAREST,[Jo]:t.LINEAR_MIPMAP_LINEAR},oe={[oM]:t.NEVER,[dM]:t.ALWAYS,[aM]:t.LESS,[P_]:t.LEQUAL,[lM]:t.EQUAL,[fM]:t.GEQUAL,[cM]:t.GREATER,[uM]:t.NOTEQUAL};function X(b,S,k){if(k?(t.texParameteri(b,t.TEXTURE_WRAP_S,V[S.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,V[S.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,V[S.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,q[S.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,q[S.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(S.wrapS!==Dn||S.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,A(S.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==en&&S.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,oe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===en||S.minFilter!==tu&&S.minFilter!==Jo||S.type===Xi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===ea&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(t.texParameterf(b,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function K(b,S){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",w));const ie=S.source;let ee=h.get(ie);ee===void 0&&(ee={},h.set(ie,ee));const re=z(S);if(re!==b.__cacheKey){ee[re]===void 0&&(ee[re]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[re].usedTimes++;const ye=ee[b.__cacheKey];ye!==void 0&&(ee[b.__cacheKey].usedTimes--,ye.usedTimes===0&&E(S)),b.__cacheKey=re,b.__webglTexture=ee[re].texture}return k}function ce(b,S,k){let ie=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=t.TEXTURE_3D);const ee=K(b,S),re=S.source;n.bindTexture(ie,b.__webglTexture,t.TEXTURE0+k);const ye=i.get(re);if(re.version!==ye.__version||ee===!0){n.activeTexture(t.TEXTURE0+k);const fe=nt.getPrimaries(nt.workingColorSpace),ge=S.colorSpace===Nn?null:nt.getPrimaries(S.colorSpace),be=S.colorSpace===Nn||fe===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const ze=u(S)&&m(S.image)===!1;let J=x(S.image,ze,!1,r.maxTextureSize);J=Fe(S,J);const et=m(J)||a,He=s.convert(S.format,S.colorSpace);let De=s.convert(S.type),Ee=M(S.internalFormat,He,De,S.colorSpace,S.isVideoTexture);X(ie,S,et);let de;const C=S.mipmaps,se=a&&S.isVideoTexture!==!0&&Ee!==b_,Se=ye.__version===void 0||ee===!0,me=R(S,J,et);if(S.isDepthTexture)Ee=t.DEPTH_COMPONENT,a?S.type===Xi?Ee=t.DEPTH_COMPONENT32F:S.type===Wi?Ee=t.DEPTH_COMPONENT24:S.type===Rr?Ee=t.DEPTH24_STENCIL8:Ee=t.DEPTH_COMPONENT16:S.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Cr&&Ee===t.DEPTH_COMPONENT&&S.type!==Hd&&S.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Wi,De=s.convert(S.type)),S.format===js&&Ee===t.DEPTH_COMPONENT&&(Ee=t.DEPTH_STENCIL,S.type!==Rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Rr,De=s.convert(S.type))),Se&&(se?n.texStorage2D(t.TEXTURE_2D,1,Ee,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,Ee,J.width,J.height,0,He,De,null));else if(S.isDataTexture)if(C.length>0&&et){se&&Se&&n.texStorage2D(t.TEXTURE_2D,me,Ee,C[0].width,C[0].height);for(let te=0,P=C.length;te<P;te++)de=C[te],se?n.texSubImage2D(t.TEXTURE_2D,te,0,0,de.width,de.height,He,De,de.data):n.texImage2D(t.TEXTURE_2D,te,Ee,de.width,de.height,0,He,De,de.data);S.generateMipmaps=!1}else se?(Se&&n.texStorage2D(t.TEXTURE_2D,me,Ee,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,J.width,J.height,He,De,J.data)):n.texImage2D(t.TEXTURE_2D,0,Ee,J.width,J.height,0,He,De,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){se&&Se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ee,C[0].width,C[0].height,J.depth);for(let te=0,P=C.length;te<P;te++)de=C[te],S.format!==Xn?He!==null?se?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,J.depth,He,de.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,Ee,de.width,de.height,J.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,J.depth,He,De,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,Ee,de.width,de.height,J.depth,0,He,De,de.data)}else{se&&Se&&n.texStorage2D(t.TEXTURE_2D,me,Ee,C[0].width,C[0].height);for(let te=0,P=C.length;te<P;te++)de=C[te],S.format!==Xn?He!==null?se?n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,de.width,de.height,He,de.data):n.compressedTexImage2D(t.TEXTURE_2D,te,Ee,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?n.texSubImage2D(t.TEXTURE_2D,te,0,0,de.width,de.height,He,De,de.data):n.texImage2D(t.TEXTURE_2D,te,Ee,de.width,de.height,0,He,De,de.data)}else if(S.isDataArrayTexture)se?(Se&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ee,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,He,De,J.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,J.width,J.height,J.depth,0,He,De,J.data);else if(S.isData3DTexture)se?(Se&&n.texStorage3D(t.TEXTURE_3D,me,Ee,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,He,De,J.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,J.width,J.height,J.depth,0,He,De,J.data);else if(S.isFramebufferTexture){if(Se)if(se)n.texStorage2D(t.TEXTURE_2D,me,Ee,J.width,J.height);else{let te=J.width,P=J.height;for(let ae=0;ae<me;ae++)n.texImage2D(t.TEXTURE_2D,ae,Ee,te,P,0,He,De,null),te>>=1,P>>=1}}else if(C.length>0&&et){se&&Se&&n.texStorage2D(t.TEXTURE_2D,me,Ee,C[0].width,C[0].height);for(let te=0,P=C.length;te<P;te++)de=C[te],se?n.texSubImage2D(t.TEXTURE_2D,te,0,0,He,De,de):n.texImage2D(t.TEXTURE_2D,te,Ee,He,De,de);S.generateMipmaps=!1}else se?(Se&&n.texStorage2D(t.TEXTURE_2D,me,Ee,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,He,De,J)):n.texImage2D(t.TEXTURE_2D,0,Ee,He,De,J);_(S,et)&&g(ie),ye.__version=re.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function _e(b,S,k){if(S.image.length!==6)return;const ie=K(b,S),ee=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+k);const re=i.get(ee);if(ee.version!==re.__version||ie===!0){n.activeTexture(t.TEXTURE0+k);const ye=nt.getPrimaries(nt.workingColorSpace),fe=S.colorSpace===Nn?null:nt.getPrimaries(S.colorSpace),ge=S.colorSpace===Nn||ye===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const be=S.isCompressedTexture||S.image[0].isCompressedTexture,ze=S.image[0]&&S.image[0].isDataTexture,J=[];for(let te=0;te<6;te++)!be&&!ze?J[te]=x(S.image[te],!1,!0,r.maxCubemapSize):J[te]=ze?S.image[te].image:S.image[te],J[te]=Fe(S,J[te]);const et=J[0],He=m(et)||a,De=s.convert(S.format,S.colorSpace),Ee=s.convert(S.type),de=M(S.internalFormat,De,Ee,S.colorSpace),C=a&&S.isVideoTexture!==!0,se=re.__version===void 0||ie===!0;let Se=R(S,et,He);X(t.TEXTURE_CUBE_MAP,S,He);let me;if(be){C&&se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,de,et.width,et.height);for(let te=0;te<6;te++){me=J[te].mipmaps;for(let P=0;P<me.length;P++){const ae=me[P];S.format!==Xn?De!==null?C?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,P,0,0,ae.width,ae.height,De,ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,P,de,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,P,0,0,ae.width,ae.height,De,Ee,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,P,de,ae.width,ae.height,0,De,Ee,ae.data)}}}else{me=S.mipmaps,C&&se&&(me.length>0&&Se++,n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,de,J[0].width,J[0].height));for(let te=0;te<6;te++)if(ze){C?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,J[te].width,J[te].height,De,Ee,J[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,de,J[te].width,J[te].height,0,De,Ee,J[te].data);for(let P=0;P<me.length;P++){const ue=me[P].image[te].image;C?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,P+1,0,0,ue.width,ue.height,De,Ee,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,P+1,de,ue.width,ue.height,0,De,Ee,ue.data)}}else{C?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,De,Ee,J[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,de,De,Ee,J[te]);for(let P=0;P<me.length;P++){const ae=me[P];C?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,P+1,0,0,De,Ee,ae.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,P+1,de,De,Ee,ae.image[te])}}}_(S,He)&&g(t.TEXTURE_CUBE_MAP),re.__version=ee.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function ve(b,S,k,ie,ee,re){const ye=s.convert(k.format,k.colorSpace),fe=s.convert(k.type),ge=M(k.internalFormat,ye,fe,k.colorSpace);if(!i.get(S).__hasExternalTextures){const ze=Math.max(1,S.width>>re),J=Math.max(1,S.height>>re);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,re,ge,ze,J,S.depth,0,ye,fe,null):n.texImage2D(ee,re,ge,ze,J,0,ye,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),xe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,i.get(k).__webglTexture,0,Le(S)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,i.get(k).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(b,S,k){if(t.bindRenderbuffer(t.RENDERBUFFER,b),S.depthBuffer&&!S.stencilBuffer){let ie=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(k||xe(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Xi?ie=t.DEPTH_COMPONENT32F:ee.type===Wi&&(ie=t.DEPTH_COMPONENT24));const re=Le(S);xe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re,ie,S.width,S.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ie,S.width,S.height)}else t.renderbufferStorage(t.RENDERBUFFER,ie,S.width,S.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(S.depthBuffer&&S.stencilBuffer){const ie=Le(S);k&&xe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,S.width,S.height):xe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,t.DEPTH24_STENCIL8,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const ie=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<ie.length;ee++){const re=ie[ee],ye=s.convert(re.format,re.colorSpace),fe=s.convert(re.type),ge=M(re.internalFormat,ye,fe,re.colorSpace),be=Le(S);k&&xe(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,ge,S.width,S.height):xe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,ge,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ge,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ue(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const ie=i.get(S.depthTexture).__webglTexture,ee=Le(S);if(S.depthTexture.format===Cr)xe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(S.depthTexture.format===js)xe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Re(b){const S=i.get(b),k=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ue(S.__webglFramebuffer,b)}else if(k){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]=t.createRenderbuffer(),Ie(S.__webglDepthbuffer[ie],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),Ie(S.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ye(b,S,k){const ie=i.get(b);S!==void 0&&ve(ie.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Re(b)}function B(b){const S=b.texture,k=i.get(b),ie=i.get(S);b.addEventListener("dispose",N),b.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=S.version,o.memory.textures++);const ee=b.isWebGLCubeRenderTarget===!0,re=b.isWebGLMultipleRenderTargets===!0,ye=m(b)||a;if(ee){k.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[fe]=[];for(let ge=0;ge<S.mipmaps.length;ge++)k.__webglFramebuffer[fe][ge]=t.createFramebuffer()}else k.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)k.__webglFramebuffer[fe]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(re)if(r.drawBuffers){const fe=b.texture;for(let ge=0,be=fe.length;ge<be;ge++){const ze=i.get(fe[ge]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&xe(b)===!1){const fe=re?S:[S];k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ge=0;ge<fe.length;ge++){const be=fe[ge];k.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[ge]);const ze=s.convert(be.format,be.colorSpace),J=s.convert(be.type),et=M(be.internalFormat,ze,J,be.colorSpace,b.isXRRenderTarget===!0),He=Le(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,He,et,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,k.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),Ie(k.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),X(t.TEXTURE_CUBE_MAP,S,ye);for(let fe=0;fe<6;fe++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)ve(k.__webglFramebuffer[fe][ge],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else ve(k.__webglFramebuffer[fe],b,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);_(S,ye)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){const fe=b.texture;for(let ge=0,be=fe.length;ge<be;ge++){const ze=fe[ge],J=i.get(ze);n.bindTexture(t.TEXTURE_2D,J.__webglTexture),X(t.TEXTURE_2D,ze,ye),ve(k.__webglFramebuffer,b,ze,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,0),_(ze,ye)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?fe=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(fe,ie.__webglTexture),X(fe,S,ye),a&&S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)ve(k.__webglFramebuffer[ge],b,S,t.COLOR_ATTACHMENT0,fe,ge);else ve(k.__webglFramebuffer,b,S,t.COLOR_ATTACHMENT0,fe,0);_(S,ye)&&g(fe),n.unbindTexture()}b.depthBuffer&&Re(b)}function zt(b){const S=m(b)||a,k=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ie=0,ee=k.length;ie<ee;ie++){const re=k[ie];if(_(re,S)){const ye=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,fe=i.get(re).__webglTexture;n.bindTexture(ye,fe),g(ye),n.unbindTexture()}}}function Te(b){if(a&&b.samples>0&&xe(b)===!1){const S=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],k=b.width,ie=b.height;let ee=t.COLOR_BUFFER_BIT;const re=[],ye=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(b),ge=b.isWebGLMultipleRenderTargets===!0;if(ge)for(let be=0;be<S.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let be=0;be<S.length;be++){re.push(t.COLOR_ATTACHMENT0+be),b.depthBuffer&&re.push(ye);const ze=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(ze===!1&&(b.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ge&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[be]),ze===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ye]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ye])),ge){const J=i.get(S[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,J,0)}t.blitFramebuffer(0,0,k,ie,0,0,k,ie,ee,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let be=0;be<S.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,fe.__webglColorRenderbuffer[be]);const ze=i.get(S[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Le(b){return Math.min(r.maxSamples,b.samples)}function xe(b){const S=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function st(b){const S=o.render.frame;f.get(b)!==S&&(f.set(b,S),b.update())}function Fe(b,S){const k=b.colorSpace,ie=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===zf||k!==Ri&&k!==Nn&&(nt.getTransfer(k)===lt?a===!1?e.has("EXT_sRGB")===!0&&ie===Xn?(b.format=zf,b.minFilter=Cn,b.generateMipmaps=!1):S=D_.sRGBToLinear(S):(ie!==Xn||ee!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}this.allocateTextureUnit=D,this.resetTextureUnits=Q,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=I,this.setTextureCube=O,this.rebindTextures=Ye,this.setupRenderTarget=B,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=xe}function mA(t,e,n){const i=n.isWebGL2;function r(s,o=Nn){let a;const l=nt.getTransfer(o);if(s===nr)return t.UNSIGNED_BYTE;if(s===M_)return t.UNSIGNED_SHORT_4_4_4_4;if(s===E_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===$S)return t.BYTE;if(s===KS)return t.SHORT;if(s===Hd)return t.UNSIGNED_SHORT;if(s===S_)return t.INT;if(s===Wi)return t.UNSIGNED_INT;if(s===Xi)return t.FLOAT;if(s===ea)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ZS)return t.ALPHA;if(s===Xn)return t.RGBA;if(s===QS)return t.LUMINANCE;if(s===JS)return t.LUMINANCE_ALPHA;if(s===Cr)return t.DEPTH_COMPONENT;if(s===js)return t.DEPTH_STENCIL;if(s===zf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===eM)return t.RED;if(s===T_)return t.RED_INTEGER;if(s===tM)return t.RG;if(s===w_)return t.RG_INTEGER;if(s===A_)return t.RGBA_INTEGER;if(s===nu||s===iu||s===ru||s===su)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===nu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===iu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ru)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===nu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===iu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ru)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===su)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Mp||s===Ep||s===Tp||s===wp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Mp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ep)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Tp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===wp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===b_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ap||s===bp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ap)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===bp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Rp||s===Cp||s===Pp||s===Lp||s===Dp||s===Np||s===Ip||s===Up||s===Op||s===Fp||s===zp||s===kp||s===Bp||s===Hp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Rp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Pp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Lp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Np)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ip)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Up)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Op)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===zp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===kp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hp)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ou||s===Gp||s===Vp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ou)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Vp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===nM||s===Wp||s===Xp||s===jp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ou)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Wp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Rr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class gA extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class To extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _A={type:"move"};class Pu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new To,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new To,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new To,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_A)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new To;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class vA extends Vr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,v=null;const x=n.getContextAttributes();let m=null,u=null;const _=[],g=[],M=new Ae;let R=null;const A=new vn;A.layers.enable(1),A.viewport=new dt;const w=new vn;w.layers.enable(2),w.viewport=new dt;const N=[A,w],y=new gA;y.layers.enable(1),y.layers.enable(2);let E=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=_[X];return K===void 0&&(K=new Pu,_[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=_[X];return K===void 0&&(K=new Pu,_[X]=K),K.getGripSpace()},this.getHand=function(X){let K=_[X];return K===void 0&&(K=new Pu,_[X]=K),K.getHandSpace()};function j(X){const K=g.indexOf(X.inputSource);if(K===-1)return;const ce=_[K];ce!==void 0&&(ce.update(X.inputSource,X.frame,c||o),ce.dispatchEvent({type:X.type,data:X.inputSource}))}function Q(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",D);for(let X=0;X<_.length;X++){const K=g[X];K!==null&&(g[X]=null,_[X].disconnect(K))}E=null,F=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,u=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,K),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),u=new Fr(p.framebufferWidth,p.framebufferHeight,{format:Xn,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let K=null,ce=null,_e=null;x.depth&&(_e=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,K=x.stencil?js:Cr,ce=x.stencil?Rr:Wi);const ve={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(ve),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Fr(h.textureWidth,h.textureHeight,{format:Xn,type:nr,depthTexture:new G_(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ie=e.properties.get(u);Ie.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(X){for(let K=0;K<X.removed.length;K++){const ce=X.removed[K],_e=g.indexOf(ce);_e>=0&&(g[_e]=null,_[_e].disconnect(ce))}for(let K=0;K<X.added.length;K++){const ce=X.added[K];let _e=g.indexOf(ce);if(_e===-1){for(let Ie=0;Ie<_.length;Ie++)if(Ie>=g.length){g.push(ce),_e=Ie;break}else if(g[Ie]===null){g[Ie]=ce,_e=Ie;break}if(_e===-1)break}const ve=_[_e];ve&&ve.connect(ce)}}const z=new L,Y=new L;function $(X,K,ce){z.setFromMatrixPosition(K.matrixWorld),Y.setFromMatrixPosition(ce.matrixWorld);const _e=z.distanceTo(Y),ve=K.projectionMatrix.elements,Ie=ce.projectionMatrix.elements,Ue=ve[14]/(ve[10]-1),Re=ve[14]/(ve[10]+1),Ye=(ve[9]+1)/ve[5],B=(ve[9]-1)/ve[5],zt=(ve[8]-1)/ve[0],Te=(Ie[8]+1)/Ie[0],Le=Ue*zt,xe=Ue*Te,st=_e/(-zt+Te),Fe=st*-zt;K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Fe),X.translateZ(st),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const b=Ue+st,S=Re+st,k=Le-Fe,ie=xe+(_e-Fe),ee=Ye*Re/S*b,re=B*Re/S*b;X.projectionMatrix.makePerspective(k,ie,ee,re,b,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function I(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;y.near=w.near=A.near=X.near,y.far=w.far=A.far=X.far,(E!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,F=y.far);const K=X.parent,ce=y.cameras;I(y,K);for(let _e=0;_e<ce.length;_e++)I(ce[_e],K);ce.length===2?$(y,A,w):y.projectionMatrix.copy(A.projectionMatrix),O(X,y,K)};function O(X,K,ce){ce===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(ce.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=kf*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let V=null;function q(X,K){if(f=K.getViewerPose(c||o),v=K,f!==null){const ce=f.views;p!==null&&(e.setRenderTargetFramebuffer(u,p.framebuffer),e.setRenderTarget(u));let _e=!1;ce.length!==y.cameras.length&&(y.cameras.length=0,_e=!0);for(let ve=0;ve<ce.length;ve++){const Ie=ce[ve];let Ue=null;if(p!==null)Ue=p.getViewport(Ie);else{const Ye=d.getViewSubImage(h,Ie);Ue=Ye.viewport,ve===0&&(e.setRenderTargetTextures(u,Ye.colorTexture,h.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(u))}let Re=N[ve];Re===void 0&&(Re=new vn,Re.layers.enable(ve),Re.viewport=new dt,N[ve]=Re),Re.matrix.fromArray(Ie.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ie.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ve===0&&(y.matrix.copy(Re.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_e===!0&&y.cameras.push(Re)}}for(let ce=0;ce<_.length;ce++){const _e=g[ce],ve=_[ce];_e!==null&&ve!==void 0&&ve.update(_e,K,c||o)}V&&V(X,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),v=null}const oe=new H_;oe.setAnimationLoop(q),this.setAnimationLoop=function(X){V=X},this.dispose=function(){}}}function xA(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,z_(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,g,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,_,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===rn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===rn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=e.get(u).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*g,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=g*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===rn&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yA(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const M=g.program;i.uniformBlockBinding(_,M)}function c(_,g){let M=r[_.id];M===void 0&&(v(_),M=f(_),r[_.id]=M,_.addEventListener("dispose",m));const R=g.program;i.updateUBOMapping(_,R);const A=e.render.frame;s[_.id]!==A&&(h(_),s[_.id]=A)}function f(_){const g=d();_.__bindingPointIndex=g;const M=t.createBuffer(),R=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],M=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,w=M.length;A<w;A++){const N=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,E=N.length;y<E;y++){const F=N[y];if(p(F,A,y,R)===!0){const j=F.__offset,Q=Array.isArray(F.value)?F.value:[F.value];let D=0;for(let z=0;z<Q.length;z++){const Y=Q[z],$=x(Y);typeof Y=="number"||typeof Y=="boolean"?(F.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,j+D,F.__data)):Y.isMatrix3?(F.__data[0]=Y.elements[0],F.__data[1]=Y.elements[1],F.__data[2]=Y.elements[2],F.__data[3]=0,F.__data[4]=Y.elements[3],F.__data[5]=Y.elements[4],F.__data[6]=Y.elements[5],F.__data[7]=0,F.__data[8]=Y.elements[6],F.__data[9]=Y.elements[7],F.__data[10]=Y.elements[8],F.__data[11]=0):(Y.toArray(F.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,j,F.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,M,R){const A=_.value,w=g+"_"+M;if(R[w]===void 0)return typeof A=="number"||typeof A=="boolean"?R[w]=A:R[w]=A.clone(),!0;{const N=R[w];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return R[w]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function v(_){const g=_.uniforms;let M=0;const R=16;for(let w=0,N=g.length;w<N;w++){const y=Array.isArray(g[w])?g[w]:[g[w]];for(let E=0,F=y.length;E<F;E++){const j=y[E],Q=Array.isArray(j.value)?j.value:[j.value];for(let D=0,z=Q.length;D<z;D++){const Y=Q[D],$=x(Y),I=M%R;I!==0&&R-I<$.boundary&&(M+=R-I),j.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=M,M+=$.storage}}}const A=M%R;return A>0&&(M+=R-A),_.__size=M,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class q_{constructor(e={}){const{canvas:n=mM(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this._useLegacyLights=!1,this.toneMapping=tr,this.toneMappingExposure=1;const g=this;let M=!1,R=0,A=0,w=null,N=-1,y=null;const E=new dt,F=new dt;let j=null;const Q=new Ve(0);let D=0,z=n.width,Y=n.height,$=1,I=null,O=null;const V=new dt(0,0,z,Y),q=new dt(0,0,z,Y);let oe=!1;const X=new Wd;let K=!1,ce=!1,_e=null;const ve=new gt,Ie=new Ae,Ue=new L,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return w===null?$:1}let B=i;function zt(T,U){for(let G=0;G<T.length;G++){const W=T[G],H=n.getContext(W,U);if(H!==null)return H}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bd}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",ae,!1),B===null){const U=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&U.shift(),B=zt(U,T),B===null)throw zt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Te,Le,xe,st,Fe,b,S,k,ie,ee,re,ye,fe,ge,be,ze,J,et,He,De,Ee,de,C,se;function Se(){Te=new Pw(B),Le=new Ew(B,Te,e),Te.init(Le),de=new mA(B,Te,Le),xe=new hA(B,Te,Le),st=new Nw(B),Fe=new J1,b=new pA(B,Te,xe,Fe,Le,de,st),S=new ww(g),k=new Cw(g),ie=new BM(B,Le),C=new Sw(B,Te,ie,Le),ee=new Lw(B,ie,st,C),re=new Fw(B,ee,ie,st),He=new Ow(B,Le,b),ze=new Tw(Fe),ye=new Q1(g,S,k,Te,Le,C,ze),fe=new xA(g,Fe),ge=new tA,be=new aA(Te,Le),et=new yw(g,S,k,xe,re,h,l),J=new dA(g,re,Le),se=new yA(B,st,Le,xe),De=new Mw(B,Te,st,Le),Ee=new Dw(B,Te,st,Le),st.programs=ye.programs,g.capabilities=Le,g.extensions=Te,g.properties=Fe,g.renderLists=ge,g.shadowMap=J,g.state=xe,g.info=st}Se();const me=new vA(g,B);this.xr=me,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(z,Y,!1))},this.getSize=function(T){return T.set(z,Y)},this.setSize=function(T,U,G=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,Y=U,n.width=Math.floor(T*$),n.height=Math.floor(U*$),G===!0&&(n.style.width=T+"px",n.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(z*$,Y*$).floor()},this.setDrawingBufferSize=function(T,U,G){z=T,Y=U,$=G,n.width=Math.floor(T*G),n.height=Math.floor(U*G),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(V)},this.setViewport=function(T,U,G,W){T.isVector4?V.set(T.x,T.y,T.z,T.w):V.set(T,U,G,W),xe.viewport(E.copy(V).multiplyScalar($).floor())},this.getScissor=function(T){return T.copy(q)},this.setScissor=function(T,U,G,W){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,U,G,W),xe.scissor(F.copy(q).multiplyScalar($).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(T){xe.setScissorTest(oe=T)},this.setOpaqueSort=function(T){I=T},this.setTransparentSort=function(T){O=T},this.getClearColor=function(T){return T.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(T=!0,U=!0,G=!0){let W=0;if(T){let H=!1;if(w!==null){const he=w.texture.format;H=he===A_||he===w_||he===T_}if(H){const he=w.texture.type,Me=he===nr||he===Wi||he===Hd||he===Rr||he===M_||he===E_,Pe=et.getClearColor(),Ne=et.getClearAlpha(),Ge=Pe.r,Oe=Pe.g,ke=Pe.b;Me?(p[0]=Ge,p[1]=Oe,p[2]=ke,p[3]=Ne,B.clearBufferuiv(B.COLOR,0,p)):(v[0]=Ge,v[1]=Oe,v[2]=ke,v[3]=Ne,B.clearBufferiv(B.COLOR,0,v))}else W|=B.COLOR_BUFFER_BIT}U&&(W|=B.DEPTH_BUFFER_BIT),G&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),ge.dispose(),be.dispose(),Fe.dispose(),S.dispose(),k.dispose(),re.dispose(),C.dispose(),se.dispose(),ye.dispose(),me.dispose(),me.removeEventListener("sessionstart",St),me.removeEventListener("sessionend",Qe),_e&&(_e.dispose(),_e=null),Tt.stop()};function te(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=st.autoReset,U=J.enabled,G=J.autoUpdate,W=J.needsUpdate,H=J.type;Se(),st.autoReset=T,J.enabled=U,J.autoUpdate=G,J.needsUpdate=W,J.type=H}function ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){const U=T.target;U.removeEventListener("dispose",ue),Ce(U)}function Ce(T){we(T),Fe.remove(T)}function we(T){const U=Fe.get(T).programs;U!==void 0&&(U.forEach(function(G){ye.releaseProgram(G)}),T.isShaderMaterial&&ye.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,G,W,H,he){U===null&&(U=Re);const Me=H.isMesh&&H.matrixWorld.determinant()<0,Pe=lv(T,U,G,W,H);xe.setMaterial(W,Me);let Ne=G.index,Ge=1;if(W.wireframe===!0){if(Ne=ee.getWireframeAttribute(G),Ne===void 0)return;Ge=2}const Oe=G.drawRange,ke=G.attributes.position;let Mt=Oe.start*Ge,pn=(Oe.start+Oe.count)*Ge;he!==null&&(Mt=Math.max(Mt,he.start*Ge),pn=Math.min(pn,(he.start+he.count)*Ge)),Ne!==null?(Mt=Math.max(Mt,0),pn=Math.min(pn,Ne.count)):ke!=null&&(Mt=Math.max(Mt,0),pn=Math.min(pn,ke.count));const Nt=pn-Mt;if(Nt<0||Nt===1/0)return;C.setup(H,W,Pe,G,Ne);let si,ht=De;if(Ne!==null&&(si=ie.get(Ne),ht=Ee,ht.setIndex(si)),H.isMesh)W.wireframe===!0?(xe.setLineWidth(W.wireframeLinewidth*Ye()),ht.setMode(B.LINES)):ht.setMode(B.TRIANGLES);else if(H.isLine){let We=W.linewidth;We===void 0&&(We=1),xe.setLineWidth(We*Ye()),H.isLineSegments?ht.setMode(B.LINES):H.isLineLoop?ht.setMode(B.LINE_LOOP):ht.setMode(B.LINE_STRIP)}else H.isPoints?ht.setMode(B.POINTS):H.isSprite&&ht.setMode(B.TRIANGLES);if(H.isBatchedMesh)ht.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ht.renderInstances(Mt,Nt,H.count);else if(G.isInstancedBufferGeometry){const We=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Tc=Math.min(G.instanceCount,We);ht.renderInstances(Mt,Nt,Tc)}else ht.render(Mt,Nt)};function qe(T,U,G){T.transparent===!0&&T.side===Ln&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,pa(T,U,G),T.side=or,T.needsUpdate=!0,pa(T,U,G),T.side=Ln):pa(T,U,G)}this.compile=function(T,U,G=null){G===null&&(G=T),m=be.get(G),m.init(),_.push(m),G.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==G&&T.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(g._useLegacyLights);const W=new Set;return T.traverse(function(H){const he=H.material;if(he)if(Array.isArray(he))for(let Me=0;Me<he.length;Me++){const Pe=he[Me];qe(Pe,G,H),W.add(Pe)}else qe(he,G,H),W.add(he)}),_.pop(),m=null,W},this.compileAsync=function(T,U,G=null){const W=this.compile(T,U,G);return new Promise(H=>{function he(){if(W.forEach(function(Me){Fe.get(Me).currentProgram.isReady()&&W.delete(Me)}),W.size===0){H(T);return}setTimeout(he,10)}Te.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let $e=null;function vt(T){$e&&$e(T)}function St(){Tt.stop()}function Qe(){Tt.start()}const Tt=new H_;Tt.setAnimationLoop(vt),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(T){$e=T,me.setAnimationLoop(T),T===null?Tt.stop():Tt.start()},me.addEventListener("sessionstart",St),me.addEventListener("sessionend",Qe),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(U),U=me.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,U,w),m=be.get(T,_.length),m.init(),_.push(m),ve.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(ve),ce=this.localClippingEnabled,K=ze.init(this.clippingPlanes,ce),x=ge.get(T,u.length),x.init(),u.push(x),$n(T,U,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(I,O),this.info.render.frame++,K===!0&&ze.beginShadows();const G=m.state.shadowsArray;if(J.render(G,T,U),K===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(x,T),m.setupLights(g._useLegacyLights),U.isArrayCamera){const W=U.cameras;for(let H=0,he=W.length;H<he;H++){const Me=W[H];Zd(x,T,Me,Me.viewport)}}else Zd(x,T,U);w!==null&&(b.updateMultisampleRenderTarget(w),b.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(g,T,U),C.resetDefaultState(),N=-1,y=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function $n(T,U,G,W){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||X.intersectsSprite(T)){W&&Ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ve);const Me=re.update(T),Pe=T.material;Pe.visible&&x.push(T,Me,Pe,G,Ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||X.intersectsObject(T))){const Me=re.update(T),Pe=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ue.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Ue.copy(Me.boundingSphere.center)),Ue.applyMatrix4(T.matrixWorld).applyMatrix4(ve)),Array.isArray(Pe)){const Ne=Me.groups;for(let Ge=0,Oe=Ne.length;Ge<Oe;Ge++){const ke=Ne[Ge],Mt=Pe[ke.materialIndex];Mt&&Mt.visible&&x.push(T,Me,Mt,G,Ue.z,ke)}}else Pe.visible&&x.push(T,Me,Pe,G,Ue.z,null)}}const he=T.children;for(let Me=0,Pe=he.length;Me<Pe;Me++)$n(he[Me],U,G,W)}function Zd(T,U,G,W){const H=T.opaque,he=T.transmissive,Me=T.transparent;m.setupLightsView(G),K===!0&&ze.setGlobalState(g.clippingPlanes,G),he.length>0&&av(H,he,U,G),W&&xe.viewport(E.copy(W)),H.length>0&&ha(H,U,G),he.length>0&&ha(he,U,G),Me.length>0&&ha(Me,U,G),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function av(T,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const he=Le.isWebGL2;_e===null&&(_e=new Fr(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?ea:nr,minFilter:Jo,samples:he?4:0})),g.getDrawingBufferSize(Ie),he?_e.setSize(Ie.x,Ie.y):_e.setSize(Bf(Ie.x),Bf(Ie.y));const Me=g.getRenderTarget();g.setRenderTarget(_e),g.getClearColor(Q),D=g.getClearAlpha(),D<1&&g.setClearColor(16777215,.5),g.clear();const Pe=g.toneMapping;g.toneMapping=tr,ha(T,G,W),b.updateMultisampleRenderTarget(_e),b.updateRenderTargetMipmap(_e);let Ne=!1;for(let Ge=0,Oe=U.length;Ge<Oe;Ge++){const ke=U[Ge],Mt=ke.object,pn=ke.geometry,Nt=ke.material,si=ke.group;if(Nt.side===Ln&&Mt.layers.test(W.layers)){const ht=Nt.side;Nt.side=rn,Nt.needsUpdate=!0,Qd(Mt,G,W,pn,Nt,si),Nt.side=ht,Nt.needsUpdate=!0,Ne=!0}}Ne===!0&&(b.updateMultisampleRenderTarget(_e),b.updateRenderTargetMipmap(_e)),g.setRenderTarget(Me),g.setClearColor(Q,D),g.toneMapping=Pe}function ha(T,U,G){const W=U.isScene===!0?U.overrideMaterial:null;for(let H=0,he=T.length;H<he;H++){const Me=T[H],Pe=Me.object,Ne=Me.geometry,Ge=W===null?Me.material:W,Oe=Me.group;Pe.layers.test(G.layers)&&Qd(Pe,U,G,Ne,Ge,Oe)}}function Qd(T,U,G,W,H,he){T.onBeforeRender(g,U,G,W,H,he),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(g,U,G,W,T,he),H.transparent===!0&&H.side===Ln&&H.forceSinglePass===!1?(H.side=rn,H.needsUpdate=!0,g.renderBufferDirect(G,U,W,H,T,he),H.side=or,H.needsUpdate=!0,g.renderBufferDirect(G,U,W,H,T,he),H.side=Ln):g.renderBufferDirect(G,U,W,H,T,he),T.onAfterRender(g,U,G,W,H,he)}function pa(T,U,G){U.isScene!==!0&&(U=Re);const W=Fe.get(T),H=m.state.lights,he=m.state.shadowsArray,Me=H.state.version,Pe=ye.getParameters(T,H.state,he,U,G),Ne=ye.getProgramCacheKey(Pe);let Ge=W.programs;W.environment=T.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(T.isMeshStandardMaterial?k:S).get(T.envMap||W.environment),Ge===void 0&&(T.addEventListener("dispose",ue),Ge=new Map,W.programs=Ge);let Oe=Ge.get(Ne);if(Oe!==void 0){if(W.currentProgram===Oe&&W.lightsStateVersion===Me)return eh(T,Pe),Oe}else Pe.uniforms=ye.getUniforms(T),T.onBuild(G,Pe,g),T.onBeforeCompile(Pe,g),Oe=ye.acquireProgram(Pe,Ne),Ge.set(Ne,Oe),W.uniforms=Pe.uniforms;const ke=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=ze.uniform),eh(T,Pe),W.needsLights=uv(T),W.lightsStateVersion=Me,W.needsLights&&(ke.ambientLightColor.value=H.state.ambient,ke.lightProbe.value=H.state.probe,ke.directionalLights.value=H.state.directional,ke.directionalLightShadows.value=H.state.directionalShadow,ke.spotLights.value=H.state.spot,ke.spotLightShadows.value=H.state.spotShadow,ke.rectAreaLights.value=H.state.rectArea,ke.ltc_1.value=H.state.rectAreaLTC1,ke.ltc_2.value=H.state.rectAreaLTC2,ke.pointLights.value=H.state.point,ke.pointLightShadows.value=H.state.pointShadow,ke.hemisphereLights.value=H.state.hemi,ke.directionalShadowMap.value=H.state.directionalShadowMap,ke.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ke.spotShadowMap.value=H.state.spotShadowMap,ke.spotLightMatrix.value=H.state.spotLightMatrix,ke.spotLightMap.value=H.state.spotLightMap,ke.pointShadowMap.value=H.state.pointShadowMap,ke.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Oe,W.uniformsList=null,Oe}function Jd(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Sl.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function eh(T,U){const G=Fe.get(T);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function lv(T,U,G,W,H){U.isScene!==!0&&(U=Re),b.resetTextureUnits();const he=U.fog,Me=W.isMeshStandardMaterial?U.environment:null,Pe=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ri,Ne=(W.isMeshStandardMaterial?k:S).get(W.envMap||Me),Ge=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Oe=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ke=!!G.morphAttributes.position,Mt=!!G.morphAttributes.normal,pn=!!G.morphAttributes.color;let Nt=tr;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Nt=g.toneMapping);const si=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ht=si!==void 0?si.length:0,We=Fe.get(W),Tc=m.state.lights;if(K===!0&&(ce===!0||T!==y)){const wn=T===y&&W.id===N;ze.setState(W,T,wn)}let xt=!1;W.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Tc.state.version||We.outputColorSpace!==Pe||H.isBatchedMesh&&We.batching===!1||!H.isBatchedMesh&&We.batching===!0||H.isInstancedMesh&&We.instancing===!1||!H.isInstancedMesh&&We.instancing===!0||H.isSkinnedMesh&&We.skinning===!1||!H.isSkinnedMesh&&We.skinning===!0||H.isInstancedMesh&&We.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&We.instancingColor===!1&&H.instanceColor!==null||We.envMap!==Ne||W.fog===!0&&We.fog!==he||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ze.numPlanes||We.numIntersection!==ze.numIntersection)||We.vertexAlphas!==Ge||We.vertexTangents!==Oe||We.morphTargets!==ke||We.morphNormals!==Mt||We.morphColors!==pn||We.toneMapping!==Nt||Le.isWebGL2===!0&&We.morphTargetsCount!==ht)&&(xt=!0):(xt=!0,We.__version=W.version);let fr=We.currentProgram;xt===!0&&(fr=pa(W,U,H));let th=!1,eo=!1,wc=!1;const Wt=fr.getUniforms(),dr=We.uniforms;if(xe.useProgram(fr.program)&&(th=!0,eo=!0,wc=!0),W.id!==N&&(N=W.id,eo=!0),th||y!==T){Wt.setValue(B,"projectionMatrix",T.projectionMatrix),Wt.setValue(B,"viewMatrix",T.matrixWorldInverse);const wn=Wt.map.cameraPosition;wn!==void 0&&wn.setValue(B,Ue.setFromMatrixPosition(T.matrixWorld)),Le.logarithmicDepthBuffer&&Wt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Wt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,eo=!0,wc=!0)}if(H.isSkinnedMesh){Wt.setOptional(B,H,"bindMatrix"),Wt.setOptional(B,H,"bindMatrixInverse");const wn=H.skeleton;wn&&(Le.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Wt.setValue(B,"boneTexture",wn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Wt.setOptional(B,H,"batchingTexture"),Wt.setValue(B,"batchingTexture",H._matricesTexture,b));const Ac=G.morphAttributes;if((Ac.position!==void 0||Ac.normal!==void 0||Ac.color!==void 0&&Le.isWebGL2===!0)&&He.update(H,G,fr),(eo||We.receiveShadow!==H.receiveShadow)&&(We.receiveShadow=H.receiveShadow,Wt.setValue(B,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(dr.envMap.value=Ne,dr.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),eo&&(Wt.setValue(B,"toneMappingExposure",g.toneMappingExposure),We.needsLights&&cv(dr,wc),he&&W.fog===!0&&fe.refreshFogUniforms(dr,he),fe.refreshMaterialUniforms(dr,W,$,Y,_e),Sl.upload(B,Jd(We),dr,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Sl.upload(B,Jd(We),dr,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Wt.setValue(B,"center",H.center),Wt.setValue(B,"modelViewMatrix",H.modelViewMatrix),Wt.setValue(B,"normalMatrix",H.normalMatrix),Wt.setValue(B,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const wn=W.uniformsGroups;for(let bc=0,fv=wn.length;bc<fv;bc++)if(Le.isWebGL2){const nh=wn[bc];se.update(nh,fr),se.bind(nh,fr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fr}function cv(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function uv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,U,G){Fe.get(T.texture).__webglTexture=U,Fe.get(T.depthTexture).__webglTexture=G;const W=Fe.get(T);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const G=Fe.get(T);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,G=0){w=T,R=U,A=G;let W=!0,H=null,he=!1,Me=!1;if(T){const Ne=Fe.get(T);Ne.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(B.FRAMEBUFFER,null),W=!1):Ne.__webglFramebuffer===void 0?b.setupRenderTarget(T):Ne.__hasExternalTextures&&b.rebindTextures(T,Fe.get(T.texture).__webglTexture,Fe.get(T.depthTexture).__webglTexture);const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Me=!0);const Oe=Fe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?H=Oe[U][G]:H=Oe[U],he=!0):Le.isWebGL2&&T.samples>0&&b.useMultisampledRTT(T)===!1?H=Fe.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?H=Oe[G]:H=Oe,E.copy(T.viewport),F.copy(T.scissor),j=T.scissorTest}else E.copy(V).multiplyScalar($).floor(),F.copy(q).multiplyScalar($).floor(),j=oe;if(xe.bindFramebuffer(B.FRAMEBUFFER,H)&&Le.drawBuffers&&W&&xe.drawBuffers(T,H),xe.viewport(E),xe.scissor(F),xe.setScissorTest(j),he){const Ne=Fe.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ne.__webglTexture,G)}else if(Me){const Ne=Fe.get(T.texture),Ge=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ne.__webglTexture,G||0,Ge)}N=-1},this.readRenderTargetPixels=function(T,U,G,W,H,he,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Fe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Pe=Pe[Me]),Pe){xe.bindFramebuffer(B.FRAMEBUFFER,Pe);try{const Ne=T.texture,Ge=Ne.format,Oe=Ne.type;if(Ge!==Xn&&de.convert(Ge)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Oe===ea&&(Te.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Oe!==nr&&de.convert(Oe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===Xi&&(Le.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-W&&G>=0&&G<=T.height-H&&B.readPixels(U,G,W,H,de.convert(Ge),de.convert(Oe),he)}finally{const Ne=w!==null?Fe.get(w).__webglFramebuffer:null;xe.bindFramebuffer(B.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(T,U,G=0){const W=Math.pow(2,-G),H=Math.floor(U.image.width*W),he=Math.floor(U.image.height*W);b.setTexture2D(U,0),B.copyTexSubImage2D(B.TEXTURE_2D,G,0,0,T.x,T.y,H,he),xe.unbindTexture()},this.copyTextureToTexture=function(T,U,G,W=0){const H=U.image.width,he=U.image.height,Me=de.convert(G.format),Pe=de.convert(G.type);b.setTexture2D(G,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment),U.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,T.x,T.y,H,he,Me,Pe,U.image.data):U.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,Me,U.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,W,T.x,T.y,Me,Pe,U.image),W===0&&G.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(T,U,G,W,H=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=T.max.x-T.min.x+1,Me=T.max.y-T.min.y+1,Pe=T.max.z-T.min.z+1,Ne=de.convert(W.format),Ge=de.convert(W.type);let Oe;if(W.isData3DTexture)b.setTexture3D(W,0),Oe=B.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)b.setTexture2DArray(W,0),Oe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const ke=B.getParameter(B.UNPACK_ROW_LENGTH),Mt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),pn=B.getParameter(B.UNPACK_SKIP_PIXELS),Nt=B.getParameter(B.UNPACK_SKIP_ROWS),si=B.getParameter(B.UNPACK_SKIP_IMAGES),ht=G.isCompressedTexture?G.mipmaps[H]:G.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ht.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ht.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,T.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,T.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,T.min.z),G.isDataTexture||G.isData3DTexture?B.texSubImage3D(Oe,H,U.x,U.y,U.z,he,Me,Pe,Ne,Ge,ht.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Oe,H,U.x,U.y,U.z,he,Me,Pe,Ne,ht.data)):B.texSubImage3D(Oe,H,U.x,U.y,U.z,he,Me,Pe,Ne,Ge,ht),B.pixelStorei(B.UNPACK_ROW_LENGTH,ke),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Mt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,pn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Nt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,si),H===0&&W.generateMipmaps&&B.generateMipmap(Oe),xe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){R=0,A=0,w=null,xe.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Gd?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===yc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Bt?Pr:R_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Pr?Bt:Ri}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class SA extends q_{}SA.prototype.isWebGL1Renderer=!0;class MA extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class EA{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Ff,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ir()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ir()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ir()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new L;class Jl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}setX(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=vi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=vi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=vi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=vi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Ot(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Jl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ds extends ur{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let as;const po=new L,ls=new L,cs=new L,us=new Ae,mo=new Ae,$_=new gt,el=new L,go=new L,tl=new L,Im=new Ae,Lu=new Ae,Um=new Ae;class _o extends Gt{constructor(e=new ds){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new At;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new EA(n,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new Jl(i,3,0,!1)),as.setAttribute("uv",new Jl(i,2,3,!1))}this.geometry=as,this.material=e,this.center=new Ae(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),$_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-cs.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;nl(el.set(-.5,-.5,0),cs,o,ls,r,s),nl(go.set(.5,-.5,0),cs,o,ls,r,s),nl(tl.set(.5,.5,0),cs,o,ls,r,s),Im.set(0,0),Lu.set(1,0),Um.set(1,1);let a=e.ray.intersectTriangle(el,go,tl,!1,po);if(a===null&&(nl(go.set(-.5,.5,0),cs,o,ls,r,s),Lu.set(0,1),a=e.ray.intersectTriangle(el,tl,go,!1,po),a===null))return;const l=e.ray.origin.distanceTo(po);l<e.near||l>e.far||n.push({distance:l,point:po.clone(),uv:Pn.getInterpolation(po,el,go,tl,Im,Lu,Um,new Ae),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function nl(t,e,n,i,r,s){us.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(mo.x=s*us.x-r*us.y,mo.y=r*us.x+s*us.y):mo.copy(us),t.copy(e),t.x+=mo.x,t.y+=mo.y,t.applyMatrix4($_)}class bs extends ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Om=new L,Fm=new L,zm=new gt,Du=new fa,il=new ua;class vo extends Gt{constructor(e=new At,n=new bs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Om.fromBufferAttribute(n,r-1),Fm.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Om.distanceTo(Fm);e.setAttribute("lineDistance",new Rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(r),il.radius+=s,e.ray.intersectsSphere(il)===!1)return;zm.copy(r).invert(),Du.copy(e.ray).applyMatrix4(zm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,f=new L,d=new L,h=new L,p=this.isLineSegments?2:1,v=i.index,m=i.attributes.position;if(v!==null){const u=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let g=u,M=_-1;g<M;g+=p){const R=v.getX(g),A=v.getX(g+1);if(c.fromBufferAttribute(m,R),f.fromBufferAttribute(m,A),Du.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(h);N<e.near||N>e.far||n.push({distance:N,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let g=u,M=_-1;g<M;g+=p){if(c.fromBufferAttribute(m,g),f.fromBufferAttribute(m,g+1),Du.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||n.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class K_ extends ur{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const km=new gt,Gf=new fa,rl=new ua,sl=new L;class TA extends Gt{constructor(e=new At,n=new K_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(r),rl.radius+=s,e.ray.intersectsSphere(rl)===!1)return;km.copy(r).invert(),Gf.copy(e.ray).applyMatrix4(km);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=h,x=p;v<x;v++){const m=c.getX(v);sl.fromBufferAttribute(d,m),Bm(sl,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=h,x=p;v<x;v++)sl.fromBufferAttribute(d,v),Bm(sl,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Bm(t,e,n,i,r,s,o){const a=Gf.distanceSqToPoint(t);if(a<n){const l=new L;Gf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class fs extends hn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ta extends At{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],h=[],p=[];let v=0;const x=[],m=i/2;let u=0;_(),o===!1&&(e>0&&g(!0),n>0&&g(!1)),this.setIndex(f),this.setAttribute("position",new Rt(d,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(p,2));function _(){const M=new L,R=new L;let A=0;const w=(n-e)/i;for(let N=0;N<=s;N++){const y=[],E=N/s,F=E*(n-e)+e;for(let j=0;j<=r;j++){const Q=j/r,D=Q*l+a,z=Math.sin(D),Y=Math.cos(D);R.x=F*z,R.y=-E*i+m,R.z=F*Y,d.push(R.x,R.y,R.z),M.set(z,w,Y).normalize(),h.push(M.x,M.y,M.z),p.push(Q,1-E),y.push(v++)}x.push(y)}for(let N=0;N<r;N++)for(let y=0;y<s;y++){const E=x[y][N],F=x[y+1][N],j=x[y+1][N+1],Q=x[y][N+1];f.push(E,F,Q),f.push(F,j,Q),A+=6}c.addGroup(u,A,0),u+=A}function g(M){const R=v,A=new Ae,w=new L;let N=0;const y=M===!0?e:n,E=M===!0?1:-1;for(let j=1;j<=r;j++)d.push(0,m*E,0),h.push(0,E,0),p.push(.5,.5),v++;const F=v;for(let j=0;j<=r;j++){const D=j/r*l+a,z=Math.cos(D),Y=Math.sin(D);w.x=y*Y,w.y=m*E,w.z=y*z,d.push(w.x,w.y,w.z),h.push(0,E,0),A.x=z*.5+.5,A.y=Y*.5*E+.5,p.push(A.x,A.y),v++}for(let j=0;j<r;j++){const Q=R+j,D=F+j;M===!0?f.push(D,D+1,Q):f.push(D+1,D,Q),N+=3}c.addGroup(u,N,M===!0?1:2),u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yd extends ta{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Yd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Uo extends At{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],f=[];let d=e;const h=(n-e)/r,p=new L,v=new Ae;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const u=s+m/i*o;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/n+1)/2,v.y=(p.y/n+1)/2,f.push(v.x,v.y)}d+=h}for(let x=0;x<r;x++){const m=x*(i+1);for(let u=0;u<i;u++){const _=u+m,g=_,M=_+i+1,R=_+i+2,A=_+1;a.push(g,M,A),a.push(M,R,A)}}this.setIndex(a),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Qn extends At{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new L,h=new L,p=[],v=[],x=[],m=[];for(let u=0;u<=i;u++){const _=[],g=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let R=0;R<=n;R++){const A=R/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+g*a),d.y=e*Math.cos(o+g*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+g*a),v.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(A+M,1-g),_.push(c++)}f.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){const g=f[u][_+1],M=f[u][_],R=f[u+1][_],A=f[u+1][_+1];(u!==0||o>0)&&p.push(g,M,A),(u!==i-1||l<Math.PI)&&p.push(M,R,A)}this.setIndex(p),this.setAttribute("position",new Rt(v,3)),this.setAttribute("normal",new Rt(x,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ec extends At{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new L,d=new L,h=new L;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const x=v/r*s,m=p/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(x),d.y=(e+n*Math.cos(m))*Math.sin(x),d.z=n*Math.sin(m),a.push(d.x,d.y,d.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const x=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,u=(r+1)*(p-1)+v,_=(r+1)*p+v;o.push(x,m,_),o.push(m,u,_)}this.setIndex(o),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ol extends ur{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=C_,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wA extends bs{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Z_ extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Nu=new gt,Hm=new L,Gm=new L;class AA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wd,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Hm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Hm),Gm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Gm),n.updateMatrixWorld(),Nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vm=new gt,xo=new L,Iu=new L;class bA extends AA{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),xo.setFromMatrixPosition(e.matrixWorld),i.position.copy(xo),Iu.copy(i.position),Iu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Iu),i.updateMatrixWorld(),r.makeTranslation(-xo.x,-xo.y,-xo.z),Vm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vm)}}class RA extends Z_{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new bA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class CA extends Z_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class PA{constructor(e,n,i=0,r=1/0){this.ray=new fa(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Vd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Vf(e,this,i,n),i.sort(Wm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Vf(e[r],this,i,n);return i.sort(Wm),i}}function Wm(t,e){return t.distance-e.distance}function Vf(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)Vf(r[s],e,n,!0)}}class Xm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(tn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bd);const jm={type:"change"},Uu={type:"start"},Ym={type:"end"},al=new fa,qm=new ki,LA=Math.cos(70*pM.DEG2RAD);class DA extends Vr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gi.ROTATE,MIDDLE:gi.DOLLY,RIGHT:gi.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",be),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",be),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(jm),i.update(),s=r.NONE},this.update=function(){const C=new L,se=new zr().setFromUnitVectors(e.up,new L(0,1,0)),Se=se.clone().invert(),me=new L,te=new zr,P=new L,ae=2*Math.PI;return function(Ce=null){const we=i.object.position;C.copy(we).sub(i.target),C.applyQuaternion(se),a.setFromVector3(C),i.autoRotate&&s===r.NONE&&j(E(Ce)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let qe=i.minAzimuthAngle,$e=i.maxAzimuthAngle;isFinite(qe)&&isFinite($e)&&(qe<-Math.PI?qe+=ae:qe>Math.PI&&(qe-=ae),$e<-Math.PI?$e+=ae:$e>Math.PI&&($e-=ae),qe<=$e?a.theta=Math.max(qe,Math.min($e,a.theta)):a.theta=a.theta>(qe+$e)/2?Math.max(qe,a.theta):Math.min($e,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&A||i.object.isOrthographicCamera?a.radius=V(a.radius):a.radius=V(a.radius*c),C.setFromSpherical(a),C.applyQuaternion(Se),we.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),f.set(0,0,0));let vt=!1;if(i.zoomToCursor&&A){let St=null;if(i.object.isPerspectiveCamera){const Qe=C.length();St=V(Qe*c);const Tt=Qe-St;i.object.position.addScaledVector(M,Tt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Qe=new L(R.x,R.y,0);Qe.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),vt=!0;const Tt=new L(R.x,R.y,0);Tt.unproject(i.object),i.object.position.sub(Tt).add(Qe),i.object.updateMatrixWorld(),St=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;St!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(St).add(i.object.position):(al.origin.copy(i.object.position),al.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(al.direction))<LA?e.lookAt(i.target):(qm.setFromNormalAndCoplanarPoint(i.object.up,i.target),al.intersectPlane(qm,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),vt=!0);return c=1,A=!1,vt||me.distanceToSquared(i.object.position)>o||8*(1-te.dot(i.object.quaternion))>o||P.distanceToSquared(i.target)>0?(i.dispatchEvent(jm),me.copy(i.object.position),te.copy(i.object.quaternion),P.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",et),i.domElement.removeEventListener("pointerdown",b),i.domElement.removeEventListener("pointercancel",k),i.domElement.removeEventListener("wheel",re),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",k),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",be),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Xm,l=new Xm;let c=1;const f=new L,d=new Ae,h=new Ae,p=new Ae,v=new Ae,x=new Ae,m=new Ae,u=new Ae,_=new Ae,g=new Ae,M=new L,R=new Ae;let A=!1;const w=[],N={};let y=!1;function E(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function F(C){const se=Math.abs(C*.01);return Math.pow(.95,i.zoomSpeed*se)}function j(C){l.theta-=C}function Q(C){l.phi-=C}const D=function(){const C=new L;return function(Se,me){C.setFromMatrixColumn(me,0),C.multiplyScalar(-Se),f.add(C)}}(),z=function(){const C=new L;return function(Se,me){i.screenSpacePanning===!0?C.setFromMatrixColumn(me,1):(C.setFromMatrixColumn(me,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(Se),f.add(C)}}(),Y=function(){const C=new L;return function(Se,me){const te=i.domElement;if(i.object.isPerspectiveCamera){const P=i.object.position;C.copy(P).sub(i.target);let ae=C.length();ae*=Math.tan(i.object.fov/2*Math.PI/180),D(2*Se*ae/te.clientHeight,i.object.matrix),z(2*me*ae/te.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(D(Se*(i.object.right-i.object.left)/i.object.zoom/te.clientWidth,i.object.matrix),z(me*(i.object.top-i.object.bottom)/i.object.zoom/te.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function $(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function I(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function O(C,se){if(!i.zoomToCursor)return;A=!0;const Se=i.domElement.getBoundingClientRect(),me=C-Se.left,te=se-Se.top,P=Se.width,ae=Se.height;R.x=me/P*2-1,R.y=-(te/ae)*2+1,M.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function V(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function q(C){d.set(C.clientX,C.clientY)}function oe(C){O(C.clientX,C.clientX),u.set(C.clientX,C.clientY)}function X(C){v.set(C.clientX,C.clientY)}function K(C){h.set(C.clientX,C.clientY),p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const se=i.domElement;j(2*Math.PI*p.x/se.clientHeight),Q(2*Math.PI*p.y/se.clientHeight),d.copy(h),i.update()}function ce(C){_.set(C.clientX,C.clientY),g.subVectors(_,u),g.y>0?$(F(g.y)):g.y<0&&I(F(g.y)),u.copy(_),i.update()}function _e(C){x.set(C.clientX,C.clientY),m.subVectors(x,v).multiplyScalar(i.panSpeed),Y(m.x,m.y),v.copy(x),i.update()}function ve(C){O(C.clientX,C.clientY),C.deltaY<0?I(F(C.deltaY)):C.deltaY>0&&$(F(C.deltaY)),i.update()}function Ie(C){let se=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?Q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,i.keyPanSpeed),se=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?Q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(0,-i.keyPanSpeed),se=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?j(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(i.keyPanSpeed,0),se=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?j(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Y(-i.keyPanSpeed,0),se=!0;break}se&&(C.preventDefault(),i.update())}function Ue(C){if(w.length===1)d.set(C.pageX,C.pageY);else{const se=de(C),Se=.5*(C.pageX+se.x),me=.5*(C.pageY+se.y);d.set(Se,me)}}function Re(C){if(w.length===1)v.set(C.pageX,C.pageY);else{const se=de(C),Se=.5*(C.pageX+se.x),me=.5*(C.pageY+se.y);v.set(Se,me)}}function Ye(C){const se=de(C),Se=C.pageX-se.x,me=C.pageY-se.y,te=Math.sqrt(Se*Se+me*me);u.set(0,te)}function B(C){i.enableZoom&&Ye(C),i.enablePan&&Re(C)}function zt(C){i.enableZoom&&Ye(C),i.enableRotate&&Ue(C)}function Te(C){if(w.length==1)h.set(C.pageX,C.pageY);else{const Se=de(C),me=.5*(C.pageX+Se.x),te=.5*(C.pageY+Se.y);h.set(me,te)}p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const se=i.domElement;j(2*Math.PI*p.x/se.clientHeight),Q(2*Math.PI*p.y/se.clientHeight),d.copy(h)}function Le(C){if(w.length===1)x.set(C.pageX,C.pageY);else{const se=de(C),Se=.5*(C.pageX+se.x),me=.5*(C.pageY+se.y);x.set(Se,me)}m.subVectors(x,v).multiplyScalar(i.panSpeed),Y(m.x,m.y),v.copy(x)}function xe(C){const se=de(C),Se=C.pageX-se.x,me=C.pageY-se.y,te=Math.sqrt(Se*Se+me*me);_.set(0,te),g.set(0,Math.pow(_.y/u.y,i.zoomSpeed)),$(g.y),u.copy(_);const P=(C.pageX+se.x)*.5,ae=(C.pageY+se.y)*.5;O(P,ae)}function st(C){i.enableZoom&&xe(C),i.enablePan&&Le(C)}function Fe(C){i.enableZoom&&xe(C),i.enableRotate&&Te(C)}function b(C){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",S),i.domElement.addEventListener("pointerup",k)),He(C),C.pointerType==="touch"?ze(C):ie(C))}function S(C){i.enabled!==!1&&(C.pointerType==="touch"?J(C):ee(C))}function k(C){De(C),w.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",S),i.domElement.removeEventListener("pointerup",k)),i.dispatchEvent(Ym),s=r.NONE}function ie(C){let se;switch(C.button){case 0:se=i.mouseButtons.LEFT;break;case 1:se=i.mouseButtons.MIDDLE;break;case 2:se=i.mouseButtons.RIGHT;break;default:se=-1}switch(se){case gi.DOLLY:if(i.enableZoom===!1)return;oe(C),s=r.DOLLY;break;case gi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;X(C),s=r.PAN}else{if(i.enableRotate===!1)return;q(C),s=r.ROTATE}break;case gi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;q(C),s=r.ROTATE}else{if(i.enablePan===!1)return;X(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Uu)}function ee(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;K(C);break;case r.DOLLY:if(i.enableZoom===!1)return;ce(C);break;case r.PAN:if(i.enablePan===!1)return;_e(C);break}}function re(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(Uu),ve(ye(C)),i.dispatchEvent(Ym))}function ye(C){const se=C.deltaMode,Se={clientX:C.clientX,clientY:C.clientY,deltaY:C.deltaY};switch(se){case 1:Se.deltaY*=16;break;case 2:Se.deltaY*=100;break}return C.ctrlKey&&!y&&(Se.deltaY*=10),Se}function fe(C){C.key==="Control"&&(y=!0,document.addEventListener("keyup",ge,{passive:!0,capture:!0}))}function ge(C){C.key==="Control"&&(y=!1,document.removeEventListener("keyup",ge,{passive:!0,capture:!0}))}function be(C){i.enabled===!1||i.enablePan===!1||Ie(C)}function ze(C){switch(Ee(C),w.length){case 1:switch(i.touches.ONE){case zi.ROTATE:if(i.enableRotate===!1)return;Ue(C),s=r.TOUCH_ROTATE;break;case zi.PAN:if(i.enablePan===!1)return;Re(C),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case zi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;B(C),s=r.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;zt(C),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Uu)}function J(C){switch(Ee(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Te(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Le(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;st(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Fe(C),i.update();break;default:s=r.NONE}}function et(C){i.enabled!==!1&&C.preventDefault()}function He(C){w.push(C.pointerId)}function De(C){delete N[C.pointerId];for(let se=0;se<w.length;se++)if(w[se]==C.pointerId){w.splice(se,1);return}}function Ee(C){let se=N[C.pointerId];se===void 0&&(se=new Ae,N[C.pointerId]=se),se.set(C.pageX,C.pageY)}function de(C){const se=C.pointerId===w[0]?w[1]:w[0];return N[se]}i.domElement.addEventListener("contextmenu",et),i.domElement.addEventListener("pointerdown",b),i.domElement.addEventListener("pointercancel",k),i.domElement.addEventListener("wheel",re,{passive:!1}),document.addEventListener("keydown",fe,{passive:!0,capture:!0}),this.update()}}const Ke=149597870700,di=66743e-15,Q_=1e9;function ot(t){return t/Q_}function NA(t){return t*Q_}const IA=2e6,UA=150*Ke,OA=200*Ke,FA=15*Ke,zA=90,J_=5e4,ev=2e6,tv=1e5,kA=100,BA=1e4,Je=t=>t*Math.PI/180,hi=1500,qd=800,HA=1200,nv=30,GA=10;function VA(t){return t<.5?.05:t<1?.08:t<1.5?.1:t<2?.15:t<6?5:t<12?15:t<22?40:80}function iv(t){return t<.5?4:t<1?2.5:t<1.5?2:t<2?1.5:1}const na={name:"Sun",mass:1989e27,radius:69634e4,mu:di*1989e27*hi,color:"#ffdd44",renderScaleFactor:1500},yn={Mercury:{name:"Mercury",mass:33011e19,radius:2439700,mu:di*33011e19*hi,color:"#b5b5b5",renderScaleFactor:8e4,orbitalElements:{a:.387098*Ke,e:.20563,i:Je(7.005),omega:Je(48.331),w:Je(29.124),M0:Je(174.796)}},Venus:{name:"Venus",mass:48675e20,radius:6051800,mu:di*48675e20*hi,color:"#e6c87a",renderScaleFactor:5e4,orbitalElements:{a:.723332*Ke,e:.006772,i:Je(3.39458),omega:Je(76.68),w:Je(54.884),M0:Je(50.115)}},Earth:{name:"Earth",mass:597237e19,radius:6371e3,mu:di*597237e19*hi,color:"#4a9eff",renderScaleFactor:5e4,orbitalElements:{a:1.000001018*Ke,e:.0167086,i:Je(5e-5),omega:Je(-11.26064),w:Je(114.20783),M0:Je(358.617)}},Mars:{name:"Mars",mass:64171e19,radius:3389500,mu:di*64171e19*hi,color:"#ff6644",renderScaleFactor:6e4,orbitalElements:{a:1.52368055*Ke,e:.0934,i:Je(1.85),omega:Je(49.558),w:Je(286.502),M0:Je(19.373)}},Jupiter:{name:"Jupiter",mass:18982e23,radius:69911e3,mu:di*18982e23*hi,color:"#d4a574",renderScaleFactor:15e3,orbitalElements:{a:5.2038*Ke,e:.0489,i:Je(1.303),omega:Je(100.464),w:Je(273.867),M0:Je(20.02)}},Saturn:{name:"Saturn",mass:56834e22,radius:58232e3,mu:di*56834e22*hi,color:"#f4d59e",renderScaleFactor:18e3,orbitalElements:{a:9.5826*Ke,e:.0565,i:Je(2.485),omega:Je(113.665),w:Je(339.392),M0:Je(317.02)}},Uranus:{name:"Uranus",mass:8681e22,radius:25362e3,mu:di*8681e22*hi,color:"#7de3f4",renderScaleFactor:3e4,orbitalElements:{a:19.19126*Ke,e:.04717,i:Je(.773),omega:Je(74.006),w:Je(96.998857),M0:Je(142.2386)}},Neptune:{name:"Neptune",mass:102413e21,radius:24622e3,mu:di*102413e21*hi,color:"#4a6eff",renderScaleFactor:3e4,orbitalElements:{a:30.07*Ke,e:.008678,i:Je(1.77),omega:Je(131.784),w:Je(276.336),M0:Je(256.228)}}};for(const t of Object.values(yn))if(t.orbitalElements){const e=t.orbitalElements.a;t.meanMotion=Math.sqrt(na.mu/(e*e*e))}function WA(){return Object.values(yn)}const $m=["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];function XA(t,e,n=1e-10,i=50){t=t%(2*Math.PI),t<0&&(t+=2*Math.PI);let r=e<.8?t:Math.PI;for(let s=0;s<i;s++){const o=Math.sin(r),a=r-e*o-t,l=1-e*Math.cos(r),c=a/l;if(r=r-c,Math.abs(c)<n)return r}return r}function jA(t,e){const n=Math.cos(t)-e,i=Math.sqrt(1-e*e)*Math.sin(t);return Math.atan2(i,n)}function YA(t,e,n){return t*(1-e*Math.cos(n))}function rv(t,e,n,i,r,s){const o=Math.cos(s),a=Math.sin(s),l=Math.cos(r),c=Math.sin(r),f=Math.cos(i),d=Math.sin(i),h=o*f-a*d*l,p=a*f+o*d*l,v=d*c,x=-o*d-a*f*l,m=-a*d+o*f*l,u=f*c;return{x:t*h+e*x,y:t*p+e*m,z:t*v+e*u}}function tc(t,e){if(t.name==="Sun"||!t.orbitalElements||!t.meanMotion)return{x:0,y:0,z:0};const{a:n,e:i,i:r,omega:s,w:o,M0:a}=t.orbitalElements,l=t.meanMotion,c=n/Ke,f=VA(c),d=a+l*e*GA*f,h=XA(d,i),p=jA(h,i),v=YA(n,i,h),x=v*Math.cos(p),m=v*Math.sin(p);return rv(x,m,0,o,r,s)}function qA(t,e){const n=tc(t,e);if(!t.orbitalElements)return n;const i=t.orbitalElements.a/Ke,r=iv(i);return{x:n.x*r,y:n.y*r,z:n.z*r}}function $A(t,e=128){if(!t.orbitalElements)return[];const{a:n,e:i,i:r,omega:s,w:o}=t.orbitalElements,a=[],l=n/Ke,c=iv(l);for(let f=0;f<=e;f++){const d=f/e*2*Math.PI,h=n*(1-i*i)/(1+i*Math.cos(d)),p=h*Math.cos(d)*c,v=h*Math.sin(d)*c,m=rv(p,v,0,o,r,s);a.push(m)}return a}function Ec(t,e){const n=t.x-e.x,i=t.y-e.y,r=t.z-e.z;return Math.sqrt(n*n+i*i+r*r)}function Br(t){return Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)}function _i(t){const e=Br(t);return e===0?{x:0,y:0,z:0}:{x:t.x/e,y:t.y/e,z:t.z/e}}function qs(t,e){return{x:t.x+e.x,y:t.y+e.y,z:t.z+e.z}}function Lr(t,e){return{x:t.x-e.x,y:t.y-e.y,z:t.z-e.z}}function ni(t,e){return{x:t.x*e,y:t.y*e,z:t.z*e}}function $d(t,e){return t.x*e.x+t.y*e.y+t.z*e.z}function KA(t,e,n){return{x:t.x+(e.x-t.x)*n,y:t.y+(e.y-t.y)*n,z:t.z+(e.z-t.z)*n}}function ei(t){return{x:t.x,y:t.y,z:t.z}}function Km(){return{x:0,y:0,z:0}}const Ou=500,Zm=.3;class ZA{scene;camera;renderer;controls;sunMesh;planetMeshes=new Map;orbitLines=new Map;ballMesh;trailLine;trailPositions=[];trailGeometry;aimLine;aimTube;aimSprites=[];suggestedLine;previewLine;startMarker;showOrbitLines=!0;disposed=!1;constructor(e){this.scene=new MA,this.scene.background=new Ve(657946),this.camera=new vn(60,e.clientWidth/e.clientHeight,1,1e5),this.camera.position.set(0,5e3,1e4),this.renderer=new q_({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(this.renderer.domElement),this.controls=new DA(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.minDistance=50,this.controls.maxDistance=8e4,this.controls.enableRotate=!0,this.controls.enablePan=!0,this.controls.enableZoom=!0,this.controls.mouseButtons={LEFT:gi.PAN,MIDDLE:gi.DOLLY,RIGHT:gi.ROTATE},this.controls.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.renderer.domElement.addEventListener("contextmenu",r=>{r.preventDefault()}),this.setupLighting(),this.createStarfield(),this.sunMesh=this.createSun(),this.createPlanets(),this.createOrbitLines(),this.ballMesh=this.createBall();const{line:n,geometry:i}=this.createTrail();this.trailLine=n,this.trailGeometry=i,this.aimLine=this.createAimLine(),this.aimTube=this.createAimTube(),this.createAimSprites(),this.suggestedLine=this.createSuggestedLine(),this.previewLine=this.createPreviewLine(),this.startMarker=this.createStartMarker(),window.addEventListener("resize",this.handleResize)}setupLighting(){const e=new RA(16777215,2,0,.5);e.position.set(0,0,0),this.scene.add(e);const n=new CA(4210784,.4);this.scene.add(n)}createStarfield(){const n=new Float32Array(24e3),i=new Float32Array(8e3*3);for(let a=0;a<8e3;a++){const l=Math.random()*Math.PI*2,c=Math.acos(2*Math.random()-1),f=25e3+Math.random()*1e4;n[a*3]=f*Math.sin(c)*Math.cos(l),n[a*3+1]=f*Math.sin(c)*Math.sin(l),n[a*3+2]=f*Math.cos(c);const d=.5+Math.random()*.5;i[a*3]=d,i[a*3+1]=d,i[a*3+2]=d+Math.random()*.2}const r=new At;r.setAttribute("position",new Ot(n,3)),r.setAttribute("color",new Ot(i,3));const s=new K_({size:3,vertexColors:!0,transparent:!0,opacity:.9}),o=new TA(r,s);this.scene.add(o)}createSun(){const e=this.getBodyRenderRadius(na),n=new Qn(e,32,32),i=new an({color:new Ve(na.color)}),r=new ut(n,i);r.position.set(0,0,0),this.scene.add(r);const s=new ds({map:this.createGlowTexture(),color:16768324,transparent:!0,blending:yr}),o=new _o(s);return o.scale.set(e*6,e*6,1),r.add(o),r}createGlowTexture(){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d"),i=n.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,"rgba(255, 255, 200, 1)"),i.addColorStop(.2,"rgba(255, 220, 100, 0.5)"),i.addColorStop(.5,"rgba(255, 180, 50, 0.2)"),i.addColorStop(1,"rgba(255, 150, 0, 0)"),n.fillStyle=i,n.fillRect(0,0,128,128),new fs(e)}getBodyRenderRadius(e){const n=e.name==="Sun"?nv:qd,i=ot(e.radius*n);return Math.max(80,i)}createPlanets(){for(const e of $m){const n=yn[e],i=this.getBodyRenderRadius(n),r=new Qn(i,48,48),s=this.createPlanetTexture(e),o=new ol({map:s,roughness:.7,metalness:.1}),a=new ut(r,o);if(this.scene.add(a),this.planetMeshes.set(e,a),["Earth","Venus","Jupiter","Saturn","Uranus","Neptune"].includes(e)){const f=this.createAtmosphereGlow(i,n.color);a.add(f)}const l=new ds({map:this.createPlanetGlowTexture(n.color),transparent:!0,blending:yr}),c=new _o(l);c.scale.set(i*4,i*4,1),a.add(c),e==="Saturn"?this.addSaturnRings(a,i):e==="Uranus"&&this.addUranusRings(a,i)}}createPlanetTexture(e){const n=document.createElement("canvas");n.width=512,n.height=256;const i=n.getContext("2d");switch(e){case"Mercury":this.drawMercuryTexture(i);break;case"Venus":this.drawVenusTexture(i);break;case"Earth":this.drawEarthTexture(i);break;case"Mars":this.drawMarsTexture(i);break;case"Jupiter":this.drawJupiterTexture(i);break;case"Saturn":this.drawSaturnTexture(i);break;case"Uranus":this.drawUranusTexture(i);break;case"Neptune":this.drawNeptuneTexture(i);break}const r=new fs(n);return r.wrapS=Yl,r.wrapT=Dn,r}drawMercuryTexture(e){const n=e.createLinearGradient(0,0,512,256);n.addColorStop(0,"#8a8a8a"),n.addColorStop(.5,"#6e6e6e"),n.addColorStop(1,"#5a5a5a"),e.fillStyle=n,e.fillRect(0,0,512,256);for(let i=0;i<60;i++){const r=Math.random()*512,s=Math.random()*256,o=3+Math.random()*15;e.beginPath(),e.arc(r,s,o,0,Math.PI*2),e.fillStyle=`rgba(80, 80, 80, ${.3+Math.random()*.4})`,e.fill(),e.beginPath(),e.arc(r,s,o,0,Math.PI*2),e.strokeStyle="rgba(120, 120, 120, 0.5)",e.lineWidth=2,e.stroke()}}drawVenusTexture(e){const n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#e8d5a3"),n.addColorStop(.3,"#d4c08a"),n.addColorStop(.7,"#c9b07a"),n.addColorStop(1,"#bfa06a"),e.fillStyle=n,e.fillRect(0,0,512,256);for(let i=0;i<8;i++){const r=i*32+Math.random()*20;e.beginPath(),e.moveTo(0,r);for(let s=0;s<512;s+=20)e.lineTo(s,r+Math.sin(s*.02)*10);e.strokeStyle=`rgba(200, 180, 140, ${.3+Math.random()*.3})`,e.lineWidth=8+Math.random()*12,e.stroke()}}drawEarthTexture(e){e.fillStyle="#1a5f8a",e.fillRect(0,0,512,256),e.fillStyle="#3d7a3d",e.beginPath(),e.ellipse(100,80,60,50,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(130,180,30,50,.3,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(270,100,35,40,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(280,170,40,55,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(380,80,80,50,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(430,190,35,25,.5,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.fillRect(0,0,512,20),e.fillRect(0,236,512,20),e.fillStyle="rgba(255, 255, 255, 0.4)";for(let n=0;n<15;n++){const i=Math.random()*512,r=30+Math.random()*196;e.beginPath(),e.ellipse(i,r,30+Math.random()*40,10+Math.random()*15,Math.random(),0,Math.PI*2),e.fill()}}drawMarsTexture(e){const n=e.createLinearGradient(0,0,512,256);n.addColorStop(0,"#c1440e"),n.addColorStop(.5,"#a33c0e"),n.addColorStop(1,"#8b3008"),e.fillStyle=n,e.fillRect(0,0,512,256),e.fillStyle="rgba(100, 40, 20, 0.5)",e.beginPath(),e.ellipse(200,120,80,40,.2,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(400,150,60,50,-.3,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.8)",e.beginPath(),e.ellipse(256,10,100,20,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(256,246,80,15,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(150, 80, 50, 0.6)",e.beginPath(),e.arc(150,100,25,0,Math.PI*2),e.fill()}drawJupiterTexture(e){e.fillStyle="#d4a574",e.fillRect(0,0,512,256);const n=["#c9a06a","#e8c896","#a87d50","#d4b08a","#8b6340","#c4956a"];let i=0;for(let r=0;r<12;r++){const s=15+Math.random()*25;e.fillStyle=n[r%n.length],e.fillRect(0,i,512,s),i+=s}e.fillStyle="#c85a3a",e.beginPath(),e.ellipse(350,140,40,25,.1,0,Math.PI*2),e.fill(),e.fillStyle="#a84828",e.beginPath(),e.ellipse(350,140,25,15,.1,0,Math.PI*2),e.fill();for(let r=0;r<20;r++){const s=Math.random()*512,o=Math.random()*256;e.beginPath(),e.ellipse(s,o,5+Math.random()*15,3+Math.random()*8,Math.random()*Math.PI,0,Math.PI*2),e.fillStyle=`rgba(200, 160, 120, ${.2+Math.random()*.3})`,e.fill()}}drawSaturnTexture(e){e.fillStyle="#e8d8a8",e.fillRect(0,0,512,256);const n=["#dcc890","#f0e8c0","#c8b878","#e0d0a0","#d0c088"];let i=0;for(let r=0;r<10;r++){const s=20+Math.random()*30;e.fillStyle=n[r%n.length],e.fillRect(0,i,512,s),i+=s}}drawUranusTexture(e){const n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#7de3f4"),n.addColorStop(.5,"#5ac8dc"),n.addColorStop(1,"#4ab8cc"),e.fillStyle=n,e.fillRect(0,0,512,256);for(let i=0;i<6;i++){const r=i*45;e.fillStyle=`rgba(100, 200, 220, ${.1+Math.random()*.2})`,e.fillRect(0,r,512,20+Math.random()*20)}}drawNeptuneTexture(e){const n=e.createLinearGradient(0,0,0,256);n.addColorStop(0,"#4a6eff"),n.addColorStop(.5,"#3858d0"),n.addColorStop(1,"#2848b0"),e.fillStyle=n,e.fillRect(0,0,512,256);for(let i=0;i<5;i++){const r=30+i*50;e.beginPath(),e.moveTo(0,r);for(let s=0;s<512;s+=10)e.lineTo(s,r+Math.sin(s*.03+i)*8);e.strokeStyle=`rgba(100, 140, 255, ${.3+Math.random()*.3})`,e.lineWidth=10+Math.random()*15,e.stroke()}e.fillStyle="rgba(30, 50, 120, 0.6)",e.beginPath(),e.ellipse(200,130,35,20,0,0,Math.PI*2),e.fill()}createAtmosphereGlow(e,n){const i=new Qn(e*1.05,32,32),r=new an({color:new Ve(n),transparent:!0,opacity:.15,side:rn});return new ut(i,r)}addSaturnRings(e,n){const i=[{inner:1.2,outer:1.5,color:"#a08060",opacity:.7},{inner:1.5,outer:1.8,color:"#c0a080",opacity:.5},{inner:1.85,outer:2.2,color:"#d0b090",opacity:.6}];for(const r of i){const s=new Uo(n*r.inner,n*r.outer,64),o=new an({color:r.color,side:Ln,transparent:!0,opacity:r.opacity}),a=new ut(s,o);a.rotation.x=Math.PI/2,e.add(a)}}addUranusRings(e,n){const i=new Uo(n*1.5,n*1.7,64),r=new an({color:"#404050",side:Ln,transparent:!0,opacity:.3}),s=new ut(i,r);s.rotation.x=Math.PI/2,s.rotation.z=Math.PI*.1,e.add(s)}createPlanetGlowTexture(e){const n=document.createElement("canvas");n.width=128,n.height=128;const i=n.getContext("2d"),r=new Ve(e),s=Math.floor(r.r*255),o=Math.floor(r.g*255),a=Math.floor(r.b*255),l=i.createRadialGradient(64,64,0,64,64,64);return l.addColorStop(0,`rgba(${s}, ${o}, ${a}, 1)`),l.addColorStop(.2,`rgba(${s}, ${o}, ${a}, 0.6)`),l.addColorStop(.5,`rgba(${s}, ${o}, ${a}, 0.2)`),l.addColorStop(1,`rgba(${s}, ${o}, ${a}, 0)`),i.fillStyle=l,i.fillRect(0,0,128,128),new fs(n)}createOrbitLines(){for(const e of $m){const n=yn[e],r=$A(n,128).map(l=>new L(ot(l.x),ot(l.z),ot(l.y))),s=new At().setFromPoints(r),o=new bs({color:new Ve(n.color),transparent:!0,opacity:.25}),a=new vo(s,o);this.scene.add(a),this.orbitLines.set(e,a)}}createBall(){const e=new To,n=120,i=new Qn(4*n,48,32);i.scale(1,.25,1);const r=new ol({color:2767434,metalness:.9,roughness:.2,emissive:1714746,emissiveIntensity:.3}),s=new ut(i,r);e.add(s);const o=new Qn(2*n,32,24,0,Math.PI*2,0,Math.PI/2),a=new an({color:65535,transparent:!0,opacity:.85}),l=new ut(o,a);l.position.y=.7*n,e.add(l);const c=new Qn(1.2*n,24,16,0,Math.PI*2,0,Math.PI/2),f=new an({color:16777215,transparent:!0,opacity:.5}),d=new ut(c,f);d.position.y=.9*n,e.add(d);const h=new Yd(2*n,1.5*n,32),p=new ol({color:1714746,metalness:.9,roughness:.3}),v=new ut(h,p);v.rotation.x=Math.PI,v.position.y=-.8*n,e.add(v);const x=new ec(4.2*n,.4*n,16,48),m=new an({color:65416}),u=new ut(x,m);u.rotation.x=Math.PI/2,e.add(u);const _=new ec(4.8*n,.15*n,8,48),g=new an({color:16729190}),M=new ut(_,g);M.rotation.x=Math.PI/2,e.add(M);for(let y=0;y<12;y++){const E=new Qn(.6*n,12,12),F=y%3===0,j=new an({color:F?65535:16737860}),Q=new ut(E,j),D=y/12*Math.PI*2;Q.position.x=Math.cos(D)*4.5*n,Q.position.z=Math.sin(D)*4.5*n,Q.position.y=-.3*n,e.add(Q)}for(let y=-1;y<=1;y+=2){const E=new ta(.3*n,.5*n,2*n,8),F=new ol({color:3820122,metalness:.95,roughness:.1}),j=new ut(E,F);j.rotation.x=Math.PI/2,j.position.set(y*2.5*n,0,3*n),e.add(j);const Q=new Qn(.4*n,8,8),D=new an({color:16711748}),z=new ut(Q,D);z.position.set(y*2.5*n,0,4*n),e.add(z)}this.scene.add(e);const R=new ds({map:this.createEngineGlowTexture(),color:65416,transparent:!0,blending:yr}),A=new _o(R);A.scale.set(600,600,1),A.position.y=-50,e.add(A);const w=new ds({map:this.createBallGlowTexture(),color:4521864,transparent:!0,blending:yr}),N=new _o(w);return N.scale.set(1e3,1e3,1),e.add(N),e}createEngineGlowTexture(){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d"),i=n.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,"rgba(0, 255, 136, 1)"),i.addColorStop(.3,"rgba(0, 255, 136, 0.5)"),i.addColorStop(.6,"rgba(0, 200, 100, 0.2)"),i.addColorStop(1,"rgba(0, 150, 80, 0)"),n.fillStyle=i,n.fillRect(0,0,128,128),new fs(e)}createBallGlowTexture(){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d"),i=n.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,"rgba(68, 255, 170, 1)"),i.addColorStop(.2,"rgba(68, 255, 170, 0.6)"),i.addColorStop(.5,"rgba(68, 255, 170, 0.2)"),i.addColorStop(1,"rgba(68, 255, 170, 0)"),n.fillStyle=i,n.fillRect(0,0,128,128),new fs(e)}createTrail(){const e=new At,n=new Float32Array(Ou*3),i=new Float32Array(Ou*3);e.setAttribute("position",new Ot(n,3)),e.setAttribute("color",new Ot(i,3)),e.setDrawRange(0,0);const r=new bs({vertexColors:!0,transparent:!0}),s=new vo(e,r);return this.scene.add(s),{line:s,geometry:e}}createAimLine(){const e=new At,n=new Float32Array(2*3);e.setAttribute("position",new Ot(n,3));const i=new bs({color:65280,transparent:!1}),r=new vo(e,i);return r.visible=!1,this.scene.add(r),r}createAimTube(){const e=new ta(500,500,1,8),n=new an({color:65280}),i=new ut(e,n);return i.visible=!1,this.scene.add(i),i}createAimSprites(){for(let n=0;n<20;n++){const i=new ds({map:this.createAimSpriteTexture(),color:65280,transparent:!0,blending:yr}),r=new _o(i);r.scale.set(400,400,1),r.visible=!1,this.scene.add(r),this.aimSprites.push(r)}}createAimSpriteTexture(){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d"),i=n.createRadialGradient(32,32,0,32,32,32);return i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.3,"rgba(255, 255, 255, 0.8)"),i.addColorStop(.7,"rgba(255, 255, 255, 0.3)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),n.fillStyle=i,n.fillRect(0,0,64,64),new fs(e)}createSuggestedLine(){const e=new At,n=new Float32Array(2*3);e.setAttribute("position",new Ot(n,3));const i=new wA({color:16755268,transparent:!0,opacity:.5,dashSize:1,gapSize:.5}),r=new vo(e,i);return r.visible=!1,this.scene.add(r),r}createPreviewLine(){const n=new At,i=new Float32Array(100*3);n.setAttribute("position",new Ot(i,3)),n.setDrawRange(0,0);const r=new bs({color:4521898,transparent:!0,opacity:.4}),s=new vo(n,r);return s.visible=!1,this.scene.add(s),s}createStartMarker(){const e=new Uo(500,800,64),n=new an({color:4521898,side:Ln,transparent:!0,opacity:.8}),i=new ut(e,n);return i.rotation.x=-Math.PI/2,this.scene.add(i),i}updatePlanetPositions(e,n){for(const[i,r]of e){const s=this.planetMeshes.get(i);if(s){const o=yn[i],a=n!==void 0?qA(o,n):r;s.position.set(ot(a.x),ot(a.z),ot(a.y))}}}updateBallPosition(e){const n=ot(e.x),i=ot(e.z),r=ot(e.y);this.ballMesh.position.set(n,i,r)}addTrailPoint(e){const n=new L(ot(e.x),ot(e.z),ot(e.y));this.trailPositions.push(n),this.trailPositions.length>Ou&&this.trailPositions.shift(),this.updateTrailGeometry()}updateTrailGeometry(){const e=this.trailGeometry.attributes.position.array,n=this.trailGeometry.attributes.color.array,i=this.trailPositions.length;for(let r=0;r<i;r++){const s=this.trailPositions[r];e[r*3]=s.x,e[r*3+1]=s.y,e[r*3+2]=s.z;const o=r/i,a=o<Zm?o/Zm:1;n[r*3]=.27*a,n[r*3+1]=1*a,n[r*3+2]=.67*a}this.trailGeometry.attributes.position.needsUpdate=!0,this.trailGeometry.attributes.color.needsUpdate=!0,this.trailGeometry.setDrawRange(0,i)}clearTrail(){this.trailPositions=[],this.trailGeometry.setDrawRange(0,0)}updateAimLine(e,n,i,r=0){this.aimLine.visible=!1,this.aimTube.visible=!1;for(const f of this.aimSprites)f.visible=!1;if(!i)return;const s=new L(ot(e.x),ot(e.z),ot(e.y)),o=new L(ot(n.x),ot(n.z),ot(n.y));let a,l,c;if(r<.5)a=r*2,l=1,c=0;else{const f=(r-.5)*2;a=1,l=1-f,c=0}for(let f=0;f<this.aimSprites.length;f++){const d=f/(this.aimSprites.length-1),h=this.aimSprites[f];h.position.lerpVectors(s,o,d),h.visible=!0;const p=200+d*600;h.scale.set(p,p,1),h.material.color.setRGB(a,l,c)}}updateSuggestedLine(e,n,i){this.suggestedLine.visible=!1}updatePreviewLine(e,n){if(this.previewLine.visible=n,!n||e.length===0)return;const i=this.previewLine.geometry.attributes.position.array,r=Math.min(e.length,100);for(let s=0;s<r;s++)i[s*3]=ot(e[s].x),i[s*3+1]=ot(e[s].z),i[s*3+2]=ot(e[s].y);this.previewLine.geometry.attributes.position.needsUpdate=!0,this.previewLine.geometry.setDrawRange(0,r)}updateStartMarker(e){this.startMarker.position.set(ot(e.x),ot(e.z),ot(e.y))}setOrbitLinesVisible(e){this.showOrbitLines=e;for(const n of this.orbitLines.values())n.visible=e}focusBall(){const e=this.ballMesh.position,n=Math.sqrt(e.x*e.x+e.y*e.y+e.z*e.z),i=.7,r=new L(e.x*i,e.y*i,e.z*i);this.controls.target.copy(r);const s=Math.max(5e3,n*1.2);this.camera.position.set(r.x,s,r.z+s*.5),this.controls.update()}focusTarget(e){const n=this.planetMeshes.get(e);if(!n)return;const i=n.position;this.controls.target.set(i.x,i.y,i.z);const r=yn[e],s=this.getBodyRenderRadius(r)*8;this.camera.position.set(i.x+s,i.y+s*.5,i.z+s)}resetView(){this.controls.target.set(0,0,0),this.camera.position.set(0,3e3,5e3),this.controls.update()}focusSystem(){this.controls.target.set(0,0,0),this.camera.position.set(0,3e3,5e3),this.controls.update()}followBall(){const e=this.ballMesh.position,n=e.x*.6,i=e.y*.6,r=e.z*.6,s=.05;this.controls.target.x+=(n-this.controls.target.x)*s,this.controls.target.y+=(i-this.controls.target.y)*s,this.controls.target.z+=(r-this.controls.target.z)*s,this.controls.update()}handleResize=()=>{if(this.disposed)return;const e=this.renderer.domElement.parentElement;if(!e)return;const n=e.clientWidth,i=e.clientHeight;this.camera.aspect=n/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(n,i)};render(){this.disposed||(this.controls.update(),this.renderer.render(this.scene,this.camera))}dispose(){this.disposed=!0,window.removeEventListener("resize",this.handleResize),this.renderer.domElement.parentElement&&(this.renderer.domElement.parentElement.removeChild(this.renderer.domElement),console.log("Canvas removed from DOM on dispose")),this.renderer.dispose(),this.controls.dispose()}}function Wf(t,e){let n=Km();const i=Lr(Km(),t),r=Br(i);if(r>0){const s=na.mu/(r*r),o=ni(i,s/r);n=qs(n,o)}for(const[s,o]of e){const a=yn[s],l=Lr(o,t),c=Br(l);if(c>0){const f=a.mu/(c*c),d=ni(l,f/c);n=qs(n,d)}}return n}function sv(t,e,n){const i=Wf(t.position,e),r={x:t.velocity.x+i.x*n*.5,y:t.velocity.y+i.y*n*.5,z:t.velocity.z+i.z*n*.5},s={x:t.position.x+r.x*n,y:t.position.y+r.y*n,z:t.position.z+r.z*n},o=Wf(s,e),a={x:r.x+o.x*n*.5,y:r.y+o.y*n*.5,z:r.z+o.z*n*.5};return{position:s,velocity:a}}function QA(t,e){let n=1/0;for(const[i,r]of e){const s=yn[i],a=Ec(t,r)/s.radius;a<n&&(n=a)}return n<25?16:n<60?8:2}function ia(t){const e=new Map;for(const n of WA()){const i=tc(n,t);e.set(n.name,i)}return e}function ov(t,e,n){const i=ia(n),r=QA(t.position,i),s=e/r;let o={...t,position:ei(t.position),velocity:ei(t.velocity)};for(let a=0;a<r;a++)o=sv(o,i,s);return{ball:o,planetPositions:i,newSimTime:n+e}}function JA(){try{const t={position:{x:15e10,y:0,z:0},velocity:{x:0,y:0,z:0}},e=ia(0);for(const[r,s]of e)if(!isFinite(s.x)||!isFinite(s.y)||!isFinite(s.z))return{ok:!1,message:`Planet ${r} has non-finite position`};const n=Wf(t.position,e);if(!isFinite(n.x)||!isFinite(n.y)||!isFinite(n.z))return{ok:!1,message:"Gravity returns non-finite values"};const i=ov(t,1e3,0);return!isFinite(i.ball.position.x)||!isFinite(i.ball.velocity.x)?{ok:!1,message:"Integration produces non-finite values"}:{ok:!0,message:"Physics OK"}}catch(t){return{ok:!1,message:`Physics check threw: ${t}`}}}const Fu=5,eb=300,tb=70*(Math.PI/180),nb=.12,ib=3,Qm=50;class rb{camera;domElement;raycaster;state={isAiming:!1,isDragging:!1,startScreenPos:null,currentScreenPos:null,aimDirection:null,power:0,velocity:null};ballStartPosition={x:0,y:0,z:0};speedHint={min:0,max:0,recommended:0};targetPosition=null;aimAssistEnabled=!0;onLaunch=null;constructor(e,n){this.camera=e,this.domElement=n,this.raycaster=new PA,this.bindEvents()}bindEvents(){document.addEventListener("mousedown",this.handleMouseDown),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),document.addEventListener("touchstart",this.handleTouchStart,{passive:!1}),document.addEventListener("touchmove",this.handleTouchMove,{passive:!1}),document.addEventListener("touchend",this.handleTouchEnd)}setHoleConfig(e,n,i){this.ballStartPosition=ei(e),this.speedHint=n,this.targetPosition=ei(i)}updateTargetPosition(e){this.targetPosition=ei(e)}setAimAssistEnabled(e){this.aimAssistEnabled=e}setOnLaunch(e){this.onLaunch=e}enableAiming(){this.state.isAiming=!0,console.log("Aiming ENABLED - click and drag to aim")}disableAiming(){this.state.isAiming=!1,this.state.isDragging=!1,this.state.aimDirection=null,this.state.velocity=null}handleMouseDown=e=>{console.log("mousedown",{isAiming:this.state.isAiming,button:e.button}),!(!this.state.isAiming||e.button!==0)&&(this.state.isDragging=!0,this.state.startScreenPos={x:e.clientX,y:e.clientY},this.state.currentScreenPos={x:e.clientX,y:e.clientY},console.log("Started dragging"))};handleMouseMove=e=>{this.state.isDragging&&(this.state.currentScreenPos={x:e.clientX,y:e.clientY},this.updateAimFromDrag())};handleMouseUp=e=>{if(console.log("mouseup",{isDragging:this.state.isDragging,velocity:this.state.velocity}),!this.state.isDragging)return;let n=this.state.velocity;if(!n)if(console.log("Using fallback velocity"),this.targetPosition){const i=_i(Lr(this.targetPosition,this.ballStartPosition));n=ni(i,this.speedHint.recommended||1e4)}else n={x:this.speedHint.recommended||1e4,y:0,z:0};console.log("Launching with velocity:",n),n&&this.onLaunch&&this.onLaunch(n),this.state.isDragging=!1,this.state.startScreenPos=null,this.state.currentScreenPos=null,this.state.aimDirection=null,this.state.power=0,this.state.velocity=null};handleMouseLeave=()=>{this.state.isDragging&&(this.state.isDragging=!1,this.state.startScreenPos=null,this.state.currentScreenPos=null,this.state.aimDirection=null,this.state.power=0,this.state.velocity=null)};handleTouchStart=e=>{if(!this.state.isAiming||e.touches.length!==1)return;const n=e.touches[0];this.state.isDragging=!0,this.state.startScreenPos={x:n.clientX,y:n.clientY},this.state.currentScreenPos={x:n.clientX,y:n.clientY}};handleTouchMove=e=>{if(!this.state.isDragging||e.touches.length!==1)return;e.preventDefault();const n=e.touches[0];this.state.currentScreenPos={x:n.clientX,y:n.clientY},this.updateAimFromDrag()};handleTouchEnd=()=>{this.state.isDragging&&(this.state.velocity&&this.onLaunch&&this.onLaunch(this.state.velocity),this.state.isDragging=!1,this.state.startScreenPos=null,this.state.currentScreenPos=null,this.state.aimDirection=null,this.state.power=0,this.state.velocity=null)};updateAimFromDrag(){if(!this.state.startScreenPos||!this.state.currentScreenPos)return;const e=this.state.currentScreenPos.x-this.state.startScreenPos.x,n=this.state.currentScreenPos.y-this.state.startScreenPos.y,i=Math.sqrt(e*e+n*n);if(i<Fu){this.state.aimDirection=null,this.state.power=0,this.state.velocity=null;return}const r=-e/i,s=n/i;let o=_i({x:r,y:s,z:0});this.aimAssistEnabled&&this.targetPosition&&(o=this.applyAimAssist(o)),this.state.aimDirection=o,this.state.power=Math.min(1,Math.max(0,(i-Fu)/(eb-Fu)));const a=this.speedHint.min+this.state.power*(this.speedHint.max-this.speedHint.min);this.state.velocity=ni(o,a)}screenDragToWorldDir(e,n){const i=new L,r=new L;this.camera.getWorldDirection(new L),i.setFromMatrixColumn(this.camera.matrixWorld,0),r.setFromMatrixColumn(this.camera.matrixWorld,1);let s=new L(i.x,0,i.z),o=new L(r.x,0,r.z);s.length()<.01?s.set(1,0,0):s.normalize(),o.length()<.01?o.set(0,0,1):o.normalize();const a=new L().addScaledVector(s,e).addScaledVector(o,-n);return a.length()<.001?{x:1,y:0,z:0}:(a.normalize(),{x:a.x,y:a.z,z:a.y})}applyAimAssist(e){if(!this.targetPosition)return e;const n=Lr(this.targetPosition,this.ballStartPosition),i={x:n.x,y:n.y,z:0},r=_i(i),s={x:e.x,y:e.y,z:0},o=_i(s),a=$d(o,r);if(Math.acos(Math.min(1,Math.max(-1,a)))<tb){const c=KA(e,r,nb);return _i(c)}return e}getSuggestedDirection(){if(!this.targetPosition)return null;const e=Lr(this.targetPosition,this.ballStartPosition);return _i(e)}getPreviewTrajectory(e){if(!this.state.velocity)return[];const n=[],i={position:ei(this.ballStartPosition),velocity:ei(this.state.velocity)},r=ia(e),s=ib*1e6/Qm;let o=i;for(let a=0;a<Qm;a++)n.push(ei(o.position)),o=sv(o,r,s);return n}getAimLineEndpoints(){if(!this.state.aimDirection)return null;const e=ni(this.state.aimDirection,-1),n=Br(this.ballStartPosition),i=n*.2,r=n*.8,s=i+(r-i)*this.state.power,o=qs(this.ballStartPosition,ni(e,s));return{start:this.ballStartPosition,end:o}}getSuggestedLineEndpoints(){const e=this.getSuggestedDirection();if(!e)return null;const n=NA(4e3),i=qs(this.ballStartPosition,ni(e,n));return{start:this.ballStartPosition,end:i}}dispose(){document.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("touchstart",this.handleTouchStart),document.removeEventListener("touchmove",this.handleTouchMove),document.removeEventListener("touchend",this.handleTouchEnd)}}function sb(t){return t.radius*HA}const ob=1.2,ab=3,lb=.55;function cb(t,e,n,i){const r=yn[n],s=i.get(n);if(!s)return!1;const o=Ec(t,s),a=sb(r);return o<a}function ub(t){return Br(t)<na.radius*nv*ob}function fb(t,e,n){for(const[i,r]of n){if(i===e)continue;const s=yn[i],o=Ec(t.position,r),a=s.radius*qd+IA;if(o<a){const l=_i(Lr(t.position,r)),c=$d(t.velocity,l),f={x:t.velocity.x-2*c*l.x,y:t.velocity.y-2*c*l.y,z:t.velocity.z-2*c*l.z},d=ni(f,lb),p=qs(r,ni(l,a+1e3));return{bounced:!0,planet:i,newBall:{position:p,velocity:d}}}}return{bounced:!1}}function db(t,e,n){if(Br(t)<UA)return!1;const r=_i(t);if($d(e,r)<=0)return!1;for(const o of n.values())if(Ec(t,o)<FA)return!1;return!0}function hb(t){return Br(t)>OA}function pb(t,e,n,i){if(cb(t.position,t.velocity,e,n))return{type:"target_captured",planet:e};if(ub(t.position))return{type:"sun_fail"};if(hb(t.position))return{type:"bounds_fail"};if(db(t.position,t.velocity,n))return{type:"deep_space_rescue"};const r=fb(t,e,n);return r.bounced&&r.newBall&&r.planet?i>=ab?{type:"max_bumps"}:{type:"bounce",planet:r.planet,newBall:r.newBall}:{type:"none"}}function mb(t,e,n){const i=_i(n);return qs(t,ni(i,e*qd*1.1))}const $s=[{id:1,name:"Invade Jupiter",target:"Jupiter",par:2,timeOffsetSeconds:0,startPositionMeters:{x:20*Ke,y:8*Ke,z:0},speedHint:{min:2e5,max:8e5,recommended:4e5},cameraHint:"BALL"},{id:2,name:"Conquer Saturn",target:"Saturn",par:3,timeOffsetSeconds:12e5,startPositionMeters:{x:25*Ke,y:-10*Ke,z:0},speedHint:{min:25e4,max:9e5,recommended:5e5},cameraHint:"BALL"},{id:3,name:"Assault on Mars",target:"Mars",par:2,timeOffsetSeconds:26e5,startPositionMeters:{x:15*Ke,y:10*Ke,z:0},speedHint:{min:15e4,max:6e5,recommended:3e5},cameraHint:"BALL"},{id:4,name:"Venus Strike",target:"Venus",par:3,timeOffsetSeconds:32e5,startPositionMeters:{x:-18*Ke,y:12*Ke,z:0},speedHint:{min:18e4,max:7e5,recommended:35e4},cameraHint:"BALL"},{id:5,name:"Mercury Raid",target:"Mercury",par:4,timeOffsetSeconds:44e5,startPositionMeters:{x:-15*Ke,y:-15*Ke,z:0},speedHint:{min:2e5,max:8e5,recommended:45e4},cameraHint:"BALL"},{id:6,name:"DESTROY EARTH",target:"Earth",par:2,timeOffsetSeconds:56e5,startPositionMeters:{x:16*Ke,y:-8*Ke,z:0},speedHint:{min:15e4,max:6e5,recommended:32e4},cameraHint:"BALL"},{id:7,name:"Uranus Ambush",target:"Uranus",par:4,timeOffsetSeconds:69e5,startPositionMeters:{x:30*Ke,y:15*Ke,z:0},speedHint:{min:3e5,max:11e5,recommended:6e5},cameraHint:"BALL"},{id:8,name:"Neptune Siege",target:"Neptune",par:5,timeOffsetSeconds:78e5,startPositionMeters:{x:40*Ke,y:-15*Ke,z:0},speedHint:{min:35e4,max:12e5,recommended:7e5},cameraHint:"BALL"},{id:9,name:"FINAL CONQUEST",target:"Neptune",par:5,timeOffsetSeconds:9e6,startPositionMeters:{x:-35*Ke,y:35*Ke,z:2*Ke},speedHint:{min:4e5,max:15e5,recommended:8e5},cameraHint:"BALL"}];function gb(t){return $s.find(e=>e.id===t)}function _b(){return $s.reduce((t,e)=>t+e.par,0)}const Xf=$s.length;class vb{scene;aimController;state;ball;simTime=0;realTimeElapsed=0;lastFrameTime=0;animationId=null;currentHoleDef;onStateChange=null;constructor(e){this.scene=new ZA(e),this.aimController=new rb(this.scene.camera,this.scene.renderer.domElement),this.aimController.setOnLaunch(this.handleLaunch.bind(this)),this.state={phase:"aiming",currentHole:1,strokes:0,bumpsThisAttempt:0,scores:[],timeScale:tv,aimAssistEnabled:!0,orbitLinesEnabled:!0,hintsEnabled:!0,lastToast:null,toastTimestamp:0},this.ball={position:{x:0,y:0,z:0},velocity:{x:0,y:0,z:0}},this.currentHoleDef=$s[0],this.setupHole(this.currentHoleDef);const n=JA();n.ok||(console.error("Physics health check failed:",n.message),this.showToast(`Error: ${n.message}`)),this.startLoop()}setOnStateChange(e){this.onStateChange=e,e(this.state)}notifyStateChange(){this.onStateChange&&this.onStateChange({...this.state})}showToast(e){this.state.lastToast=e,this.state.toastTimestamp=Date.now(),this.notifyStateChange()}setupHole(e){this.currentHoleDef=e,this.simTime=e.timeOffsetSeconds,this.realTimeElapsed=0,this.state.bumpsThisAttempt=0,this.ball.position=ei(e.startPositionMeters),this.ball.velocity={x:0,y:0,z:0};const n=Math.sqrt(this.ball.position.x**2+this.ball.position.y**2+this.ball.position.z**2)/1496e8;console.log("=== SETTING UP HOLE ==="),console.log("Hole:",e.name),console.log("Target:",e.target),console.log("Ship distance from Sun:",n.toFixed(1),"AU"),console.log("Speed range:",(e.speedHint.min/1e3).toFixed(0),"-",(e.speedHint.max/1e3).toFixed(0),"km/s");const i=ia(this.simTime);this.scene.updatePlanetPositions(i,this.simTime),this.scene.updateBallPosition(this.ball.position),this.scene.updateStartMarker(this.ball.position),this.scene.startMarker.visible=!0,console.log("Planet positions:",Object.fromEntries(i)),this.scene.clearTrail();const r=tc(yn[e.target],this.simTime);this.aimController.setHoleConfig(e.startPositionMeters,e.speedHint,r),this.aimController.enableAiming(),this.scene.focusBall()}handleLaunch(e){const n=Math.sqrt(e.x**2+e.y**2+e.z**2);if(console.log("=== LAUNCHING ==="),console.log("Speed:",(n/1e3).toFixed(0),"km/s"),this.state.phase!=="aiming"){console.log("Not in aiming phase, ignoring");return}this.ball.velocity=ei(e),this.state.strokes+=1,this.state.phase="simulating",this.realTimeElapsed=0,this.aimController.disableAiming(),this.scene.updateAimLine({x:0,y:0,z:0},{x:0,y:0,z:0},!1,0),this.scene.updatePreviewLine([],!1),this.scene.startMarker.visible=!1,console.log("Launch successful! Phase:",this.state.phase),this.notifyStateChange()}startLoop(){this.lastFrameTime=performance.now(),this.loop()}loop=()=>{this.animationId=requestAnimationFrame(this.loop);const e=performance.now(),n=(e-this.lastFrameTime)/1e3;this.lastFrameTime=e,this.state.phase==="simulating"?this.updateSimulation(n):this.state.phase==="aiming"&&(this.updateAiming(),this.simTime+=n*this.state.timeScale);const i=ia(this.simTime);this.scene.updatePlanetPositions(i,this.simTime),this.scene.render()};updateSimulation(e){this.realTimeElapsed+=e;const n=1496e8,i=1e9,r=Math.sqrt(this.ball.position.x**2+this.ball.position.y**2+this.ball.position.z**2),s=Math.sqrt(this.ball.velocity.x**2+this.ball.velocity.y**2+this.ball.velocity.z**2);if(Math.floor(this.realTimeElapsed*2)!==Math.floor((this.realTimeElapsed-e)*2)&&(console.log("=== SIMULATION FRAME ==="),console.log("Distance from Sun:",(r/n).toFixed(2),"AU"),console.log("Speed:",(s/1e3).toFixed(0),"km/s"),console.log("Ball position (meters):",{x:this.ball.position.x.toExponential(2),y:this.ball.position.y.toExponential(2),z:this.ball.position.z.toExponential(2)}),console.log("Ball position (render units):",{x:(this.ball.position.x/i).toFixed(0),y:(this.ball.position.y/i).toFixed(0),z:(this.ball.position.z/i).toFixed(0)}),console.log("Ball mesh position:",this.scene.ballMesh.position.toArray().map(c=>c.toFixed(0))),console.log("Real time elapsed:",this.realTimeElapsed.toFixed(1),"s")),this.realTimeElapsed>zA){this.handleFail("Time limit exceeded");return}let o=e*this.state.timeScale;o=Math.max(kA,Math.min(BA,o));const a=ov(this.ball,o,this.simTime);this.ball=a.ball,this.simTime=a.newSimTime;const l=pb(this.ball,this.currentHoleDef.target,a.planetPositions,this.state.bumpsThisAttempt);this.handleCollision(l,a.planetPositions),this.scene.updateBallPosition(this.ball.position),this.scene.addTrailPoint(this.ball.position),this.scene.followBall()}handleCollision(e,n){switch(e.type){case"target_captured":this.handleSuccess(e.planet,n);break;case"bounce":this.ball=e.newBall,this.state.bumpsThisAttempt+=1,this.showToast("Gravity assist!");break;case"sun_fail":this.handleFail("Incinerated!");break;case"deep_space_rescue":this.handleFail("Lost in deep space — reset");break;case"bounds_fail":this.handleFail("Out of bounds");break;case"max_bumps":this.handleFail("Too many collisions");break}}handleSuccess(e,n){this.state.phase="success",this.state.scores.push({holeId:this.state.currentHole,strokes:this.state.strokes,par:this.currentHoleDef.par});const i=n.get(e),r=Lr(this.ball.position,i),s=mb(i,yn[e].radius,r);this.ball.position=s,this.scene.updateBallPosition(this.ball.position),this.showToast(`Captured by ${e}!`),this.notifyStateChange()}handleFail(e){this.state.phase="fail",this.showToast(e),this.notifyStateChange(),setTimeout(()=>{this.resetShot()},1500)}updateAiming(){const e=this.aimController.state,n=tc(yn[this.currentHoleDef.target],this.simTime);this.aimController.updateTargetPosition(n);const i=this.aimController.getAimLineEndpoints();if(i?this.scene.updateAimLine(i.start,i.end,!0,e.power):this.scene.updateAimLine({x:0,y:0,z:0},{x:0,y:0,z:0},!1,0),e.isDragging&&e.velocity){const r=this.aimController.getPreviewTrajectory(this.simTime);this.scene.updatePreviewLine(r,!0)}else this.scene.updatePreviewLine([],!1)}resetShot(){this.state.phase="aiming",this.state.bumpsThisAttempt=0,this.setupHole(this.currentHoleDef),this.notifyStateChange()}nextHole(){if(this.state.currentHole>=Xf){this.state.phase="scorecard",this.notifyStateChange();return}this.state.currentHole+=1,this.state.strokes=0,this.state.phase="aiming";const e=gb(this.state.currentHole);e&&this.setupHole(e),this.notifyStateChange()}restartGame(){this.state={phase:"aiming",currentHole:1,strokes:0,bumpsThisAttempt:0,scores:[],timeScale:this.state.timeScale,aimAssistEnabled:this.state.aimAssistEnabled,orbitLinesEnabled:this.state.orbitLinesEnabled,hintsEnabled:this.state.hintsEnabled,lastToast:null,toastTimestamp:0},this.setupHole($s[0]),this.notifyStateChange()}setTimeScale(e){this.state.timeScale=Math.max(J_,Math.min(ev,e)),this.notifyStateChange()}setAimAssist(e){this.state.aimAssistEnabled=e,this.aimController.setAimAssistEnabled(e),this.notifyStateChange()}setOrbitLines(e){this.state.orbitLinesEnabled=e,this.scene.setOrbitLinesVisible(e),this.notifyStateChange()}setHints(e){this.state.hintsEnabled=e,this.notifyStateChange()}focusBall(){this.scene.focusBall()}focusTarget(){this.scene.focusTarget(this.currentHoleDef.target)}resetView(){this.scene.resetView()}getCurrentHoleDef(){return this.currentHoleDef}getAimState(){return this.aimController.state}dispose(){this.animationId!==null&&cancelAnimationFrame(this.animationId),this.aimController.dispose(),this.scene.dispose()}}const Kd=hS((t,e)=>({game:null,phase:"aiming",currentHole:1,strokes:0,scores:[],timeScale:tv,aimAssistEnabled:!0,orbitLinesEnabled:!0,hintsEnabled:!0,lastToast:null,toastTimestamp:0,currentHoleDef:null,isAiming:!1,isDragging:!1,power:0,initGame:n=>{const{game:i}=e();i&&i.dispose();const r=new vb(n);r.setOnStateChange(a=>{e().syncState(a)});const o=setInterval(()=>{const{game:a}=e();if(a){const l=a.getAimState();t({isAiming:l.isAiming,isDragging:l.isDragging,power:l.power})}},16);r._aimSyncInterval=o,t({game:r,currentHoleDef:r.getCurrentHoleDef()})},disposeGame:()=>{const{game:n}=e();n&&(n._aimSyncInterval&&clearInterval(n._aimSyncInterval),n.dispose(),t({game:null}))},syncState:n=>{const{game:i}=e();t({phase:n.phase,currentHole:n.currentHole,strokes:n.strokes,scores:n.scores,timeScale:n.timeScale,aimAssistEnabled:n.aimAssistEnabled,orbitLinesEnabled:n.orbitLinesEnabled,hintsEnabled:n.hintsEnabled,lastToast:n.lastToast,toastTimestamp:n.toastTimestamp,currentHoleDef:i?.getCurrentHoleDef()||null})},resetShot:()=>{e().game?.resetShot()},nextHole:()=>{e().game?.nextHole()},restartGame:()=>{e().game?.restartGame()},setTimeScale:n=>{e().game?.setTimeScale(n)},setAimAssist:n=>{e().game?.setAimAssist(n)},setOrbitLines:n=>{e().game?.setOrbitLines(n)},setHints:n=>{e().game?.setHints(n)},focusBall:()=>{e().game?.focusBall()},focusTarget:()=>{e().game?.focusTarget()},resetView:()=>{e().game?.resetView()}})),xb=()=>{const{phase:t,currentHole:e,strokes:n,currentHoleDef:i,timeScale:r,aimAssistEnabled:s,orbitLinesEnabled:o,hintsEnabled:a,lastToast:l,toastTimestamp:c,isAiming:f,isDragging:d,power:h,resetShot:p,nextHole:v,setTimeScale:x,setAimAssist:m,setOrbitLines:u,setHints:_,focusBall:g,focusTarget:M,resetView:R}=Kd(),[A,w]=Ei.useState(!1);Ei.useEffect(()=>{if(l&&c>0){w(!0);const y=setTimeout(()=>{w(!1)},2500);return()=>clearTimeout(y)}},[l,c]);const N=y=>y>=1e6?`${(y/1e6).toFixed(1)}M`:`${(y/1e3).toFixed(0)}K`;return Z.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[Z.jsx("div",{className:"absolute top-4 left-4 pointer-events-auto",children:Z.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white min-w-[220px] border border-green-500/30",children:[Z.jsxs("div",{className:"text-xl font-bold mb-2 text-green-400",children:["Mission ",e,"/",Xf]}),i&&Z.jsxs(Z.Fragment,{children:[Z.jsx("div",{className:"text-sm text-green-300/80 mb-2",children:i.name}),Z.jsxs("div",{className:"flex gap-4 text-sm",children:[Z.jsxs("div",{children:["Target: ",Z.jsx("span",{className:"text-red-400 font-bold",children:i.target})]}),Z.jsxs("div",{children:["Req: ",Z.jsxs("span",{className:"text-yellow-400",children:[i.par," tries"]})]})]}),Z.jsxs("div",{className:"mt-2 text-lg",children:["Attempts: ",Z.jsx("span",{className:"text-green-400 font-bold",children:n})]})]})]})}),Z.jsx("div",{className:"absolute top-4 right-4 pointer-events-auto",children:Z.jsxs("div",{className:"bg-black/60 backdrop-blur-sm rounded-lg p-4 text-white min-w-[220px]",children:[Z.jsxs("div",{className:"mb-3",children:[Z.jsxs("label",{className:"text-sm text-gray-300 block mb-1",children:["Time Scale: ",N(r),"x"]}),Z.jsx("input",{type:"range",min:J_,max:ev,step:5e4,value:r,onChange:y=>x(Number(y.target.value)),className:"w-full accent-cyan-500"})]}),Z.jsxs("div",{className:"space-y-2 text-sm",children:[Z.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[Z.jsx("input",{type:"checkbox",checked:s,onChange:y=>m(y.target.checked),className:"accent-cyan-500"}),Z.jsx("span",{children:"Aim Assist"})]}),Z.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[Z.jsx("input",{type:"checkbox",checked:o,onChange:y=>u(y.target.checked),className:"accent-cyan-500"}),Z.jsx("span",{children:"Orbit Lines"})]}),Z.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[Z.jsx("input",{type:"checkbox",checked:a,onChange:y=>_(y.target.checked),className:"accent-cyan-500"}),Z.jsx("span",{children:"Hints"})]})]})]})}),t==="aiming"&&d&&Z.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",children:Z.jsx("div",{className:"bg-black/80 backdrop-blur-sm rounded-full px-6 py-3 text-white text-center",children:Z.jsxs("div",{className:"text-2xl font-bold",children:[Math.round(h*100),"%"]})})}),t==="aiming"&&!d&&Z.jsx("div",{className:"absolute top-24 left-1/2 -translate-x-1/2 pointer-events-none",children:Z.jsxs("div",{className:"bg-green-700/90 backdrop-blur-sm rounded-lg px-6 py-4 text-center border border-green-400/50",children:[Z.jsx("div",{className:"text-green-300 text-xl font-bold mb-1",children:"Launch your invasion fleet!"}),Z.jsx("div",{className:"text-white text-sm",children:"Click anywhere + Drag to aim, release to launch"})]})}),t==="success"&&Z.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto",children:Z.jsxs("div",{className:"bg-black/90 backdrop-blur-sm rounded-lg p-6 text-white text-center border-2 border-green-500",children:[Z.jsx("div",{className:"text-3xl font-bold text-green-400 mb-2",children:"PLANET CONQUERED!"}),Z.jsxs("div",{className:"text-green-300 text-lg mb-4",children:["Invasion successful in ",n," attempt",n!==1?"s":""]}),Z.jsx("button",{onClick:v,className:"px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg font-bold transition-colors text-lg",children:e>=Xf?"View Conquest Report":"Next Target"})]})}),Z.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-auto",children:Z.jsxs("div",{className:"flex gap-2",children:[Z.jsx("button",{onClick:p,disabled:t==="success"||t==="scorecard",className:"px-4 py-2 bg-black/60 hover:bg-black/80 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg backdrop-blur-sm transition-colors",children:"Reset Shot"}),Z.jsx("button",{onClick:g,className:"px-4 py-2 bg-black/60 hover:bg-black/80 text-white rounded-lg backdrop-blur-sm transition-colors",children:"Focus Ball"}),Z.jsx("button",{onClick:M,className:"px-4 py-2 bg-black/60 hover:bg-black/80 text-white rounded-lg backdrop-blur-sm transition-colors",children:"Focus Target"}),Z.jsx("button",{onClick:R,className:"px-4 py-2 bg-black/60 hover:bg-black/80 text-white rounded-lg backdrop-blur-sm transition-colors",children:"Reset View"})]})}),t==="aiming"&&a&&i&&Z.jsx("div",{className:"absolute bottom-20 left-1/2 -translate-x-1/2 pointer-events-none",children:Z.jsxs("div",{className:"bg-black/40 backdrop-blur-sm rounded px-3 py-1 text-white/60 text-sm",children:["Recommended speed: ~",(i.speedHint.recommended/1e3).toFixed(0)," km/s"]})}),A&&l&&Z.jsx("div",{className:"absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-fade-in",children:Z.jsx("div",{className:"bg-black/80 backdrop-blur-sm rounded-lg px-6 py-3 text-white text-xl font-bold",children:l})}),Z.jsx("div",{className:"absolute bottom-4 left-4 pointer-events-none",children:Z.jsxs("div",{className:"bg-black/80 rounded px-3 py-2 text-xs font-mono border border-green-500/50",children:[Z.jsxs("div",{className:"text-green-400",children:["Phase: ",t]}),Z.jsxs("div",{className:f?"text-green-400":"text-red-400",children:["Aiming: ",f?"READY":"OFF"]}),Z.jsxs("div",{className:d?"text-yellow-400 font-bold":"text-white/50",children:["Dragging: ",d?"YES!":"no"]}),Z.jsxs("div",{className:"text-cyan-400",children:["Power: ",(h*100).toFixed(0),"%"]})]})}),d&&Z.jsx("div",{className:"absolute inset-0 pointer-events-none border-4 border-green-500/50 animate-pulse"}),Z.jsx("div",{className:"absolute bottom-4 right-4 pointer-events-none",children:Z.jsx("div",{className:"text-white/30 text-xs font-mono",children:"v1.5.0"})})]})},yb=()=>{const{scores:t,restartGame:e}=Kd(),n=t.reduce((a,l)=>a+l.strokes,0),i=_b(),r=n-i,s=a=>a<0?Z.jsx("span",{className:"inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white font-bold text-sm",children:a}):a===0?Z.jsx("span",{className:"inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-600 text-white font-bold text-sm",children:"E"}):Z.jsxs("span",{className:"inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white font-bold text-sm",children:["+",a]}),o=a=>$s.find(c=>c.id===a)?.target||"";return Z.jsx("div",{className:"fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50",children:Z.jsxs("div",{className:"bg-gray-900 rounded-xl p-8 max-w-2xl w-full mx-4 shadow-2xl border border-gray-700",children:[Z.jsx("h1",{className:"text-4xl font-bold text-center text-white mb-8",children:"Final Scorecard"}),Z.jsx("div",{className:"overflow-x-auto",children:Z.jsxs("table",{className:"w-full text-white",children:[Z.jsx("thead",{children:Z.jsxs("tr",{className:"border-b border-gray-700",children:[Z.jsx("th",{className:"py-3 px-4 text-left text-gray-400",children:"Hole"}),Z.jsx("th",{className:"py-3 px-4 text-left text-gray-400",children:"Target"}),Z.jsx("th",{className:"py-3 px-4 text-center text-gray-400",children:"Par"}),Z.jsx("th",{className:"py-3 px-4 text-center text-gray-400",children:"Strokes"}),Z.jsx("th",{className:"py-3 px-4 text-center text-gray-400",children:"Diff"})]})}),Z.jsx("tbody",{children:t.map(a=>{const l=a.strokes-a.par;return Z.jsxs("tr",{className:"border-b border-gray-800",children:[Z.jsx("td",{className:"py-3 px-4 font-bold",children:a.holeId}),Z.jsx("td",{className:"py-3 px-4 text-cyan-400",children:o(a.holeId)}),Z.jsx("td",{className:"py-3 px-4 text-center text-yellow-400",children:a.par}),Z.jsx("td",{className:"py-3 px-4 text-center text-green-400 font-bold",children:a.strokes}),Z.jsx("td",{className:"py-3 px-4 text-center",children:s(l)})]},a.holeId)})}),Z.jsx("tfoot",{children:Z.jsxs("tr",{className:"border-t-2 border-gray-600",children:[Z.jsx("td",{className:"py-4 px-4 font-bold text-lg",colSpan:2,children:"TOTAL"}),Z.jsx("td",{className:"py-4 px-4 text-center text-yellow-400 font-bold text-lg",children:i}),Z.jsx("td",{className:"py-4 px-4 text-center text-green-400 font-bold text-lg",children:n}),Z.jsx("td",{className:"py-4 px-4 text-center",children:s(r)})]})})]})}),Z.jsxs("div",{className:"text-center mt-6",children:[r<0&&Z.jsx("p",{className:"text-2xl text-green-400 font-bold",children:"Under Par! Excellent work!"}),r===0&&Z.jsx("p",{className:"text-2xl text-gray-300 font-bold",children:"Even Par! Well played!"}),r>0&&r<=5&&Z.jsx("p",{className:"text-2xl text-yellow-400 font-bold",children:"Nice round! Keep practicing!"}),r>5&&Z.jsx("p",{className:"text-2xl text-orange-400 font-bold",children:"The cosmos is challenging. Try again!"})]}),Z.jsx("div",{className:"flex justify-center mt-8",children:Z.jsx("button",{onClick:e,className:"px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold text-lg transition-colors",children:"Play Again"})})]})})},Sb=()=>{const t=Ei.useRef(null),{initGame:e,disposeGame:n,phase:i}=Kd();return Ei.useEffect(()=>(t.current&&e(t.current),()=>{n()}),[e,n]),Z.jsxs("div",{className:"w-screen h-screen overflow-hidden bg-space-dark relative",children:[Z.jsx("div",{ref:t,className:"w-full h-full"}),Z.jsx(xb,{}),i==="scorecard"&&Z.jsx(yb,{}),Z.jsxs("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none",children:[Z.jsx("h1",{className:"text-3xl font-bold text-green-400 tracking-wider drop-shadow-lg",children:"ALIEN INVASION"}),Z.jsx("p",{className:"text-center text-green-300/60 text-sm",children:"Conquer the Solar System!"})]})]})},Mb=new URLSearchParams(window.location.search),Eb=Mb.get("test");Eb==="standalone"?pv(async()=>{const{runStandaloneTest:t}=await import("./test-standalone-amVkHs7G.js");return{runStandaloneTest:t}},[]).then(({runStandaloneTest:t})=>{t()}):zu.createRoot(document.getElementById("root")).render(Z.jsx(ug.StrictMode,{children:Z.jsx(Sb,{})}));export{da as B,Ve as C,an as M,vn as P,MA as S,q_ as W,ut as a};
//# sourceMappingURL=index-ygf9ODUS.js.map
