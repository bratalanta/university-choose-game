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
},{}],"wSIJ":[function(require,module,exports) {
module.exports="/h_1.3bdb3175.png";
},{}],"vwag":[function(require,module,exports) {
module.exports="/h_2.59dd3f18.png";
},{}],"EOOh":[function(require,module,exports) {
module.exports="/h_3.ec322741.png";
},{}],"A8zK":[function(require,module,exports) {
module.exports="/h_4.37b93ec3.png";
},{}],"zTK1":[function(require,module,exports) {
module.exports="/h_5.252acbd6.png";
},{}],"bhRQ":[function(require,module,exports) {
module.exports="/h_6.bb7da35d.png";
},{}],"Gmqm":[function(require,module,exports) {
module.exports="/h_7.8117e99b.png";
},{}],"zWIB":[function(require,module,exports) {
module.exports="/h_8.5deec334.png";
},{}],"pfjp":[function(require,module,exports) {
module.exports="/w_1.2663ca3f.png";
},{}],"XSqD":[function(require,module,exports) {
module.exports="/w_10.cb30b7d2.png";
},{}],"YCgE":[function(require,module,exports) {
module.exports="/w_11.fd8ce874.png";
},{}],"plyc":[function(require,module,exports) {
module.exports="/w_2.33d3630a.png";
},{}],"Tfp3":[function(require,module,exports) {
module.exports="/w_12.3a2e9ddf.png";
},{}],"ulFS":[function(require,module,exports) {
module.exports="/w_3.6f9012b6.png";
},{}],"wDWT":[function(require,module,exports) {
module.exports="/w_4.cb87545d.png";
},{}],"VBOC":[function(require,module,exports) {
module.exports="/w_5.be4b1955.png";
},{}],"AB5p":[function(require,module,exports) {
module.exports="/w_6.42c2bf0b.png";
},{}],"EYyW":[function(require,module,exports) {
module.exports="/w_7.911565b3.png";
},{}],"sOT9":[function(require,module,exports) {
module.exports="/w_8.076a7cf7.png";
},{}],"VNnH":[function(require,module,exports) {
module.exports="/w_9.24ca58ef.png";
},{}],"fGGY":[function(require,module,exports) {
module.exports={h_1:require("./h_1.png"),h_2:require("./h_2.png"),h_3:require("./h_3.png"),h_4:require("./h_4.png"),h_5:require("./h_5.png"),h_6:require("./h_6.png"),h_7:require("./h_7.png"),h_8:require("./h_8.png"),w_1:require("./w_1.png"),w_10:require("./w_10.png"),w_11:require("./w_11.png"),w_2:require("./w_2.png"),w_12:require("./w_12.png"),w_3:require("./w_3.png"),w_4:require("./w_4.png"),w_5:require("./w_5.png"),w_6:require("./w_6.png"),w_7:require("./w_7.png"),w_8:require("./w_8.png"),w_9:require("./w_9.png")};
},{"./h_1.png":"wSIJ","./h_2.png":"vwag","./h_3.png":"EOOh","./h_4.png":"A8zK","./h_5.png":"zTK1","./h_6.png":"bhRQ","./h_7.png":"Gmqm","./h_8.png":"zWIB","./w_1.png":"pfjp","./w_10.png":"XSqD","./w_11.png":"YCgE","./w_2.png":"plyc","./w_12.png":"Tfp3","./w_3.png":"ulFS","./w_4.png":"wDWT","./w_5.png":"VBOC","./w_6.png":"AB5p","./w_7.png":"EYyW","./w_8.png":"sOT9","./w_9.png":"VNnH"}],"iQMh":[function(require,module,exports) {
"use strict";var e,t=require("./common.js"),n=require("./const.js"),r=require("./functions.js"),a=c(require("../img/level2/*.png"));function c(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(0,t.startLevel)();var i=(0,t.getCurrentUserData)(),f=i.complexity,l=document.querySelector(".content-full"),u=document.querySelector(".footer__check"),d=(o(e={},n.Complexity.Easy,8),o(e,n.Complexity.Medium,14),o(e,n.Complexity.Hard,20),e),s="70",g=l.offsetWidth/2-s/2,p=999999,v=(0,r.getShuffledArray)(Object.keys(a.default)),m=0,y=0,h=0,x=0,L=function(e){m=e.clientX-e.target.offsetLeft,y=e.clientY-e.target.offsetTop;var t=e.target.cloneNode(!0);e.dataTransfer.setDragImage(t,p,p)},E=function(e){e.clientY-y>=0&&e.clientY-y<l.offsetHeight-s&&(e.target.style.top="".concat(e.clientY-y,"px"),h=e.clientY-y),e.clientX-m>=0&&e.clientX-m<l.offsetWidth-s&&(e.target.style.left="".concat(e.clientX-m,"px"),x=e.clientX-m)},b=function(e){e.target.style.left="".concat(x,"px"),e.target.style.top="".concat(h,"px")};document.addEventListener("dragover",function(e){e.preventDefault()}),document.addEventListener("dragenter",function(e){e.preventDefault()});for(var q=0;q<d[f];q++){var j=document.createElement("img");j.setAttribute("draggable",!0),j.src=a.default[v[q]],j.style.top="".concat((0,r.getRandomInt)(s,l.offsetHeight-s),"px"),j.style.left="".concat((0,r.getRandomInt)(s,l.offsetWidth-s),"px"),l.append(j),j.addEventListener("dragstart",L),j.addEventListener("drag",E),j.addEventListener("dragend",b)}u.addEventListener("click",function(){var e=[],r=[];Array.from(l.children).forEach(function(t){if("DIV"!=t.tagName){var n=t.src.split("/").at(-1).charAt(0);t.offsetLeft<=g?e.push(n):r.push(n)}}),e.every(function(t){return t===e[0]})&&r.every(function(e){return e===r[0]})?(0,t.goNextLevel)(n.AppRoute.Level3):((0,t.reduceHeartsCount)(),(0,t.reducePoints)())});
},{"./common.js":"eTjE","./const.js":"PXDV","./functions.js":"OeGu","../img/level2/*.png":"fGGY"}]},{},["iQMh"], null)
//# sourceMappingURL=/level2.4c105baa.js.map