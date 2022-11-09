parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"PXDV":[function(require,module,exports) {
"use strict";var e,t;function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.StorageField=exports.StartFeatures=exports.NEXT_LEVEL_TRANSITION_TIME=exports.LevelData=exports.ComplexityTranslation=exports.ComplexityExtraPointsFactor=exports.Complexity=exports.AppRoute=void 0;var o={Home:"/index.html",Lose:"/lose.html",Level1:"/level1.html",Level2:"/level2.html",Level3:"/level3.html",Win:"/win.html",Rules:"/rules.html"};exports.AppRoute=o;var i={Name:"name",Theme:"theme",Complexity:"complexity",Lvl:"lvl",HeartsCount:"hearts",Points:"points",TimeLeft:"timeLeft"};exports.StorageField=i;var s={Easy:"easy",Medium:"medium",Hard:"hard"};exports.Complexity=s;var a=(r(e={},s.Easy,"лёгкий"),r(e,s.Medium,"средний"),r(e,s.Hard,"сложный"),e);exports.ComplexityTranslation=a;var n=(r(t={},s.Easy,10),r(t,s.Medium,5),r(t,s.Hard,1),t);exports.ComplexityExtraPointsFactor=n;var l={Level:1,HeartsCount:3,Points:0};exports.StartFeatures=l;var m={1:{Complexity:{easy:{WinPoints:5,ErrorPoints:-1,Time:30},medium:{WinPoints:7,ErrorPoints:-3,Time:20},hard:{WinPoints:15,ErrorPoints:-5,Time:15}}},2:{Complexity:{easy:{WinPoints:10,ErrorPoints:-3,Time:60},medium:{WinPoints:15,ErrorPoints:-5,Time:40},hard:{WinPoints:20,ErrorPoints:-7,Time:30}}},3:{Complexity:{easy:{WinPoints:15,ErrorPoints:-5,Time:60},medium:{WinPoints:20,ErrorPoints:-7,Time:40},hard:{WinPoints:30,ErrorPoints:-9,Time:30}}}};exports.LevelData=m;var p=2e3;exports.NEXT_LEVEL_TRANSITION_TIME=p;
},{}],"mi2Z":[function(require,module,exports) {
module.exports="/black_heart.89920485.png";
},{}],"z4ia":[function(require,module,exports) {
module.exports="/red_heart.20b71e85.png";
},{}],"FtZX":[function(require,module,exports) {
module.exports={black_heart:require("./black_heart.png"),red_heart:require("./red_heart.png")};
},{"./black_heart.png":"mi2Z","./red_heart.png":"z4ia"}],"lrkN":[function(require,module,exports) {
module.exports="/background.d64f15ef.jpg";
},{}],"NhTQ":[function(require,module,exports) {
module.exports="/field.97b30bff.jpg";
},{}],"XDqR":[function(require,module,exports) {
module.exports="/sea.a7052f3a.jpg";
},{}],"YoXf":[function(require,module,exports) {
module.exports="/valley.5f1dd211.jpg";
},{}],"kgY2":[function(require,module,exports) {
module.exports={background:require("./background.jpg"),field:require("./field.jpg"),sea:require("./sea.jpg"),valley:require("./valley.jpg")};
},{"./background.jpg":"lrkN","./field.jpg":"NhTQ","./sea.jpg":"XDqR","./valley.jpg":"YoXf"}],"eTjE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.startLevel=exports.setTheme=exports.resetStorage=exports.reducePoints=exports.reduceHeartsCount=exports.redirect=exports.launchTimer=exports.goNextLevel=exports.getCurrentUserData=void 0;var e=require("./const.js"),t=o(require("../img/game/hearts/*.png")),r=o(require("../img/game/themes/*.jpg"));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(e,t){e.preventDefault(),location.replace(t)};exports.redirect=a;var l=function(e){document.querySelector(".bg").style.background="url(".concat(r.default[e],") no-repeat center")};exports.setTheme=l;var n=function(){return{name:localStorage.getItem(e.StorageField.Name),theme:localStorage.getItem(e.StorageField.Theme),complexity:localStorage.getItem(e.StorageField.Complexity),lvl:localStorage.getItem(e.StorageField.Lvl),points:localStorage.getItem(e.StorageField.Points),heartsCount:localStorage.getItem(e.StorageField.HeartsCount),timeLeft:localStorage.getItem(e.StorageField.TimeLeft)}};exports.getCurrentUserData=n;var c=function(){var t=n(),r=t.complexity,o=t.lvl,a=t.points,l=document.querySelector(".player-points__number"),c=Number(a)+e.LevelData[o].Complexity[r].ErrorPoints;localStorage.setItem(e.StorageField.Points,c<0?0:c),l.innerText=c<0?0:c};exports.reducePoints=c;var s=function(){var r=n().heartsCount,o=document.querySelector(".hearts"),a=e.StartFeatures.HeartsCount-1,l=e.StartFeatures.HeartsCount-2;switch(r-1){case a:o.children[a].src=t.default.black_heart,localStorage.setItem(e.StorageField.HeartsCount,a);break;case l:o.children[l].src=t.default.black_heart,localStorage.setItem(e.StorageField.HeartsCount,l);break;case 0:o.children[0].src=t.default.black_heart,location.replace(e.AppRoute.Lose)}};exports.reduceHeartsCount=s;var i=function(){var t=document.querySelector(".header__timer"),r=document.querySelector(".footer__check"),o=n(),a=o.timeLeft,l=o.complexity,c=o.lvl,s=a||e.LevelData[c].Complexity[l].Time,i=Math.floor(s/60),u=s%60,m=setInterval(function(){r.classList.contains("passed")?clearInterval(m):(localStorage.setItem(e.StorageField.TimeLeft,60*i+u),t.innerText="0".concat(i,":").concat(u/10>=1?u:"0".concat(u)),0===u&&0===i&&(location.replace(e.AppRoute.Lose),clearInterval(m)),u--,i<1&&u<10&&t.classList.toggle("end"),u<0&&(i--,u=59))},1e3)};exports.launchTimer=i;var u=function(){for(var r=n(),o=r.name,c=r.theme,s=r.complexity,u=r.lvl,m=r.points,d=r.heartsCount,S=document.querySelector(".footer__author"),p=document.querySelector(".level-info__player-name"),g=document.querySelector(".player-points__number"),v=document.querySelector(".win-points__number"),x=document.querySelector(".error-points__number"),f=document.querySelector(".menu__item-link"),y=document.querySelector(".hearts"),_=0;_<e.StartFeatures.HeartsCount-d&&d!==e.StartFeatures.HeartsCount;_++)y.children[e.StartFeatures.HeartsCount-1-_].src=t.default.black_heart;p.innerText=o,g.innerText=m,v.innerText="+"+e.LevelData[u].Complexity[s].WinPoints,x.innerText=e.LevelData[u].Complexity[s].ErrorPoints,S.style.display="none",window.addEventListener("load",function(){return i()}),f.addEventListener("click",function(t){return a(t,e.AppRoute.Home)}),l(c)};exports.startLevel=u;var m=function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&localStorage.setItem(e.StorageField.Points,e.StartFeatures.Points),localStorage.setItem(e.StorageField.TimeLeft,""),localStorage.setItem(e.StorageField.Lvl,e.StartFeatures.Level),localStorage.setItem(e.StorageField.HeartsCount,e.StartFeatures.HeartsCount)};exports.resetStorage=m;var d=function(){var t=document.querySelector(".extra-points__number"),r=n(),o=r.complexity,a=r.points,l=r.timeLeft,c=r.lvl,s=Number(a)+e.LevelData[c].Complexity[o].WinPoints,i=Math.round(l/e.ComplexityExtraPointsFactor[o]);t.innerText=i,localStorage.setItem(e.StorageField.Points,s+i)},S=function(t){var r=n().lvl,o=document.querySelector(".modal");document.querySelector(".footer__check").classList.add("passed"),o.classList.remove("hidden"),d(),localStorage.setItem(e.StorageField.Lvl,Number(r)+1),localStorage.setItem(e.StorageField.TimeLeft,""),setTimeout(function(){location.replace(t)},e.NEXT_LEVEL_TRANSITION_TIME)};exports.goNextLevel=S;
},{"./const.js":"PXDV","../img/game/hearts/*.png":"FtZX","../img/game/themes/*.jpg":"kgY2"}],"OeGu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getShuffledArray=exports.getRandomInt=void 0;var r=function(r){for(var t=r.length-1;t>0;t--){var e=Math.floor(Math.random()*(t+1)),o=[r[e],r[t]];r[t]=o[0],r[e]=o[1]}return r};exports.getShuffledArray=r;var t=function(r,t){return r=Math.ceil(r),t=Math.floor(t),Math.floor(Math.random()*(t-r+1))+r};exports.getRandomInt=t;
},{}],"hODH":[function(require,module,exports) {
module.exports="/0_1.3f5daad1.png";
},{}],"ojW2":[function(require,module,exports) {
module.exports="/0_2.af8cb65a.png";
},{}],"kkik":[function(require,module,exports) {
module.exports="/0_3.ea895fcd.png";
},{}],"Vu3n":[function(require,module,exports) {
module.exports="/2_1.fdc13da4.png";
},{}],"xLGA":[function(require,module,exports) {
module.exports="/2_3.8eba92ce.png";
},{}],"eQLP":[function(require,module,exports) {
module.exports="/2_2.0153ace4.png";
},{}],"TFWk":[function(require,module,exports) {
module.exports="/2_4.f35bdbaf.png";
},{}],"LdSr":[function(require,module,exports) {
module.exports="/3_1.4baf5149.png";
},{}],"UI3L":[function(require,module,exports) {
module.exports="/3_2.447c16c1.png";
},{}],"U3i6":[function(require,module,exports) {
module.exports="/4_1.a1b529ef.png";
},{}],"btyd":[function(require,module,exports) {
module.exports="/4_2.244566fc.png";
},{}],"JQrR":[function(require,module,exports) {
module.exports="/4_3.31a1d2a4.png";
},{}],"LpqA":[function(require,module,exports) {
module.exports="/4_4.339d15c3.png";
},{}],"fwuh":[function(require,module,exports) {
module.exports="/5_1.7f83f57f.png";
},{}],"xc5B":[function(require,module,exports) {
module.exports="/5_10.4b54c751.png";
},{}],"tUFQ":[function(require,module,exports) {
module.exports="/5_2.f46fb406.png";
},{}],"TMXs":[function(require,module,exports) {
module.exports="/5_3.46f1ea78.png";
},{}],"VGAz":[function(require,module,exports) {
module.exports="/5_4.eafba682.png";
},{}],"cpif":[function(require,module,exports) {
module.exports="/0_4.65c23d81.png";
},{}],"POf2":[function(require,module,exports) {
module.exports="/5_5.e619d901.png";
},{}],"furh":[function(require,module,exports) {
module.exports="/5_6.c4019c94.png";
},{}],"QCYC":[function(require,module,exports) {
module.exports="/5_7.0758addb.png";
},{}],"yz1J":[function(require,module,exports) {
module.exports="/5_9.69b2b913.png";
},{}],"MFY6":[function(require,module,exports) {
module.exports="/6_1.4e7f27a8.png";
},{}],"iX7Y":[function(require,module,exports) {
module.exports="/5_8.bb7ba609.png";
},{}],"xzal":[function(require,module,exports) {
module.exports="/6_2.fbdaad16.png";
},{}],"yfaz":[function(require,module,exports) {
module.exports="/6_3.8ab5b8bd.png";
},{}],"FiVR":[function(require,module,exports) {
module.exports="/9_1.4aa969a2.png";
},{}],"udyJ":[function(require,module,exports) {
module.exports="/9_3.ecd15c42.png";
},{}],"CcoN":[function(require,module,exports) {
module.exports="/9_2.f2ac692c.png";
},{}],"gQ8r":[function(require,module,exports) {
module.exports={"0_1":require("./0_1.png"),"0_2":require("./0_2.png"),"0_3":require("./0_3.png"),"2_1":require("./2_1.png"),"2_3":require("./2_3.png"),"2_2":require("./2_2.png"),"2_4":require("./2_4.png"),"3_1":require("./3_1.png"),"3_2":require("./3_2.png"),"4_1":require("./4_1.png"),"4_2":require("./4_2.png"),"4_3":require("./4_3.png"),"4_4":require("./4_4.png"),"5_1":require("./5_1.png"),"5_10":require("./5_10.png"),"5_2":require("./5_2.png"),"5_3":require("./5_3.png"),"5_4":require("./5_4.png"),"0_4":require("./0_4.png"),"5_5":require("./5_5.png"),"5_6":require("./5_6.png"),"5_7":require("./5_7.png"),"5_9":require("./5_9.png"),"6_1":require("./6_1.png"),"5_8":require("./5_8.png"),"6_2":require("./6_2.png"),"6_3":require("./6_3.png"),"9_1":require("./9_1.png"),"9_3":require("./9_3.png"),"9_2":require("./9_2.png")};
},{"./0_1.png":"hODH","./0_2.png":"ojW2","./0_3.png":"kkik","./2_1.png":"Vu3n","./2_3.png":"xLGA","./2_2.png":"eQLP","./2_4.png":"TFWk","./3_1.png":"LdSr","./3_2.png":"UI3L","./4_1.png":"U3i6","./4_2.png":"btyd","./4_3.png":"JQrR","./4_4.png":"LpqA","./5_1.png":"fwuh","./5_10.png":"xc5B","./5_2.png":"tUFQ","./5_3.png":"TMXs","./5_4.png":"VGAz","./0_4.png":"cpif","./5_5.png":"POf2","./5_6.png":"furh","./5_7.png":"QCYC","./5_9.png":"yz1J","./6_1.png":"MFY6","./5_8.png":"iX7Y","./6_2.png":"xzal","./6_3.png":"yfaz","./9_1.png":"FiVR","./9_3.png":"udyJ","./9_2.png":"CcoN"}],"Wqq2":[function(require,module,exports) {
"use strict";var e,t=require("./common.js"),r=require("./const.js"),n=require("./functions.js"),i=a(require("../img/level1/*.png"));function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return s(e)||u(e)||l(e)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}function u(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function s(e){if(Array.isArray(e))return d(e)}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(0,t.startLevel)();var y=(m(e={},r.Complexity.Easy,8),m(e,r.Complexity.Medium,16),m(e,r.Complexity.Hard,24),e),f={2:"два",4:"четыре",6:"шесть"},p=(0,t.getCurrentUserData)(),b=p.complexity,h=(0,n.getShuffledArray)(Object.keys(i.default)),v=(0,n.getShuffledArray)(o(Object.keys(f))),C=v[0],g=[],x=document.querySelector(".header-level-1"),A=document.querySelector(".numbers-list"),j=document.querySelector(".footer__check"),S=function(e,t){for(var r=(0,n.getRandomInt)(0,e-1),a=h.findIndex(function(e){return e.charAt(0)===C}),o=0;o<e;o++){var c=document.createElement("div");c.className="numbers-list__item numbers-".concat(t);var l=document.createElement("img");l.setAttribute("draggable",!1),o===r?(l.src=i.default[h[a]],h.splice(a,1)):l.src=i.default[h[o]],h[o].charAt(0)===C&&(l.dataset.correct=!0),c.appendChild(l);var u=l.src.split("/").at(-1).charAt(0);u===C&&g.push(u),A.appendChild(c)}},E=function(e){x.innerText="Найди все числа ".concat(e)};switch(b){case r.Complexity.Easy:E(f[C]),S(y[r.Complexity.Easy],r.Complexity.Easy);break;case r.Complexity.Medium:A.classList.add(r.Complexity.Medium),E(f[C]),S(y[r.Complexity.Medium],r.Complexity.Medium);break;case r.Complexity.Hard:A.classList.add(r.Complexity.Hard),E(f[C]),S(y[r.Complexity.Hard],r.Complexity.Hard)}A.addEventListener("click",function(e){e.target.closest("div").classList.toggle("chosen")}),j.addEventListener("click",function(){Array.from(A.children).map(function(e){if(e.classList.contains("chosen"))return e.firstChild.src.split("/").at(-1).charAt(0)}).join("")!==g.join("")?((0,t.reduceHeartsCount)(),(0,t.reducePoints)()):(0,t.goNextLevel)(r.AppRoute.Level2)});
},{"./common.js":"eTjE","./const.js":"PXDV","./functions.js":"OeGu","../img/level1/*.png":"gQ8r"}]},{},["Wqq2"], null)
//# sourceMappingURL=/level1.b4d7d575.js.map