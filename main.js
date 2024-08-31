(()=>{"use strict";var e={16:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),o=n.n(r),i=n(314),a=n.n(i)()(o());a.push([e.id,"*{\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n}\nbody, html{\n    height: 100%\n}\n\n.header-wrap{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    \n}\nbody{\n    display: grid;\n    grid-template-rows: 1fr 4fr;\n}\n.weather-content{\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    \n    \n}\n.weather-display{\n    flex-shrink: 1;\n    width: 100%;\n    height: 500px;\n   \n    padding: 8px;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    \n}\n\n.current-temp{\n    font-size: 2.5rem;\n    display: inline;\n}\n.min-max{\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n}\n.current-temp-wrap{\n    width: auto;\n    text-align: center;\n}\n.current-weather{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    \n}\n.deg-wrap{\n    display: flex;\n    justify-content:center;\n}\n\n.inactive{\n    color: rgb(185, 185, 185)\n}\n.active{\n    color: black;\n}\n.toggle:hover{\n    cursor:pointer;\n}\n\n.condition-detail{\n   display: grid;\n   grid-template-columns: 1fr 1fr 1fr 1fr;\n   text-align: center;\n   font-size: 1rem;\n   align-items: center;\n   \n}\n.condition-detail .condition{\n    font-size: 1.6rem;\n}\n.forecast{\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    text-align: center;\n    gap: .5rem;\n}\n@media (max-width: 768px) {\n    .weather-display {\n        height: auto;\n        padding: 4px;\n    }\n\n    .current-temp {\n        font-size: 2rem;\n    }\n\n    .condition-detail .condition {\n        font-size: 1.4rem;\n    }\n\n    .forecast {\n        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));\n        gap: 0.5rem;\n    }\n}\n\n@media (max-width: 480px) {\n    .current-temp {\n        font-size: 1.5rem;\n    }\n\n    .condition-detail .condition {\n        font-size: 1.2rem;\n    }\n\n    .forecast {\n        grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));\n        gap: 0.25rem;\n    }\n}\n",""]);const c=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=i[d]||0,p="".concat(d," ").concat(u);i[d]=u+1;var l=n(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(f);else{var m=o(f,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var u=n(i[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0;var r=n(72),o=n.n(r),i=n(825),a=n.n(i),c=n(659),s=n.n(c),d=n(56),u=n.n(d),p=n(540),l=n.n(p),f=n(113),m=n.n(f),g=n(16),h={};async function y(e){try{let t=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?unitGroup=us&iconSet=icons2&key=SB4XPNB9C6RX2EVSB6W5GTMBT&contentType=json`);if(!t.ok)throw new Error(`Invalid Address! Status ${t.status}`);return await t.json()}catch(e){return console.error("Error fetching weather data",e),alert(e),{}}}async function v(e){try{let t=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?unitGroup=uk&iconSet=icons2&key=SB4XPNB9C6RX2EVSB6W5GTMBT&contentType=json`);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return await t.json()}catch(e){return console.error("Error fetching weather data",e),{}}}h.styleTagTransform=m(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),o()(g.A,h),g.A&&g.A.locals&&g.A.locals;const w=e=>{switch(e){case"0":return"Mon";case"1":return"Tue";case"2":return"Wed";case"3":return"Thu";case"4":return"Fri";case"5":return"Sat";case"6":return"Sun"}};async function x(e){try{let[t,n]=await Promise.all([y(e),v(e)]);return{weatherDataFahrenheit:t,weatherDataCelsius:n,getTemp:e=>"us"===e?t.currentConditions.temp:n.currentConditions.temp,getAddress:()=>t.resolvedAddress,getConditions:()=>t.currentConditions.conditions,getFiveDayForecast:e=>("us"===e?t.days:n.days).slice(1,6).map((e=>{const t=new Date(e.datetime).getDay();return{maxTemp:e.tempmax,lowTemp:e.tempmin,dayOfWeekIndex:t,dayOfWeek:w(t.toString()),iconLogo:e.icon}})),getDescription:()=>t.description,getHumidity:()=>t.currentConditions.humidity,getWindSpeed:()=>t.currentConditions.windspeed,getUvIndex:()=>t.currentConditions.uvindex,getPrecipProb:()=>t.currentConditions.precipprob,getCurrentMax:e=>"us"===e?t.days[0].tempmax:n.days[0].tempmax,getCurrentMin:e=>"us"===e?t.days[0].tempmin:n.days[0].tempmin,getCurrentIcon:()=>t.currentConditions.icon}}catch(e){return console.log(e),{}}}const b=n.p+"49a92278086475c7c840.png",S=n.p+"d5b481d65d6728015aa7.png",C=n.p+"ff85b2e81d3543451d70.png",T=n.p+"bec51c6b905e71a69c73.png",A=n.p+"e5a324637505df18d2e5.png",E=n.p+"9ccf1783955d7c47bce4.png",k=n.p+"e82491d914f1b4e751e7.png",q=n.p+"4e3195e20db723b75b2f.png",$=n.p+"c2788e154501ed6e195a.png",j=n.p+"560fa082b9506b2826e8.png",L=n.p+"89c8d14229f87a236fe0.png",M=n.p+"302ae48c90c390866931.png",I=n.p+"fbefbc64a4c9b84edb6a.png",P=n.p+"0335ffe923ac8081fcd9.png",F=n.p+"653aae7993df59bc9edf.png",B=n.p+"992f3427910628059ef4.png",D=n.p+"f72b71c0da5cb78e0844.png",N=n.p+"f216f30e368ba0b6eef0.png",W=n.p+"08dc25396dd350cafbce.png",z=n.p+"b94c0677a77e0021caf4.png",O=n.p+"68c58b5ee4603ed53a41.png",H=n.p+"7689f6c733214fb7a9f8.png";function G(){const e=document.querySelector("#location-input"),t=document.querySelector(".address"),n=document.querySelector(".search"),r=document.querySelector(".current-temp"),o=document.querySelector(".min-temp"),i=document.querySelector(".max-temp"),a=document.querySelector(".condition"),c=document.querySelector(".humidity"),s=document.querySelector(".precip-prob"),d=document.querySelector(".wind-speed"),u=document.querySelector(".uv-index"),p=document.querySelectorAll(".toggle"),l=document.querySelectorAll(".forecast-item"),f=document.querySelectorAll(".high-low-forecast"),m=document.querySelectorAll(".forecast img"),g=document.querySelector(".current-icon"),h={"clear-day":b,"clear-night":S,cloudy:C,fog:T,hail:A,"partly-cloudy-day":E,"partly-cloudy-night":k,"rain-snow-showers-day":q,"rain-snow-showers-night":$,"rain-snow":j,rain:L,"showers-day":M,"showers-night":I,sleet:P,"snow-showers-day":F,"snow-showers-night":B,snow:D,"thunder-rain":N,"thunder-showers-day":W,"thunder-showers-night":z,thunder:O,wind:H},y=e=>h[e];return{getSearchButton:()=>n,getLocationInput:()=>e,getToggles:()=>p,updateScreen:(e,n)=>{const p=e.getFiveDayForecast(n);t.textContent=e.getAddress(),r.textContent=`${e.getTemp(n).toFixed(1)}`,i.textContent=`H: ${e.getCurrentMax(n)}º`,o.textContent=`L: ${e.getCurrentMin(n)}º`,a.textContent=`${e.getConditions()}`,c.textContent=`${e.getHumidity()}%`,s.textContent=`${e.getPrecipProb()}%`,d.textContent=`${e.getWindSpeed()} mph`,u.textContent=`${e.getUvIndex()}`,l.forEach(((e,t)=>{e.textContent=p[t].dayOfWeek})),f.forEach(((e,t)=>{e.textContent=`${p[t].maxTemp.toFixed(1)}º/${p[t].lowTemp.toFixed(1)}º`})),m.forEach(((e,t)=>{let n=y(p[t].iconLogo);e.setAttribute("src",n)})),g.setAttribute("src",y(e.getCurrentIcon()))}}}!async function(){G();let e=G().getSearchButton(),t=G().getLocationInput(),n=G().getToggles(),r="us",o=await x("New York");G().updateScreen(o,r),e.addEventListener("click",(async e=>{e.preventDefault();let n=t.value||"New York",i=await x(n);G().updateScreen(i,r),o=i})),t.addEventListener("keydown",(async e=>{if("Enter"===e.key){e.preventDefault();let t=e.target.value||"New York",n=await x(t);G().updateScreen(n,r),o=n}})),n.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("id")!==r&&(r="us"===r?"uk":"us",G().updateScreen(o,r),n.forEach((e=>{e.getAttribute("id")===r?(e.classList.remove("inactive"),e.classList.add("active")):(e.classList.remove("active"),e.classList.add("inactive"))})))}))}))}()})();