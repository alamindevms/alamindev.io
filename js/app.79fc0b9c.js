(function(e){function t(t){for(var a,r,c=t[0],s=t[1],i=t[2],g=0,d=[];g<c.length;g++)r=c[g],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(d.length)d.shift()();return l.push.apply(l,i||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],a=!0,c=1;c<o.length;c++){var s=o[c];0!==n[s]&&(a=!1)}a&&(l.splice(t--,1),e=r(r.s=o[0]))}return e}var a={},n={app:0},l=[];function r(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=a,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(o,a,function(t){return e[t]}.bind(null,a));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/alamimndev.io/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var u=s;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"19e7":function(e,t,o){e.exports=o.p+"img/twitter.ebe8b931.svg"},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("7a23"),n={class:"h-screen w-full flex flex-col justify-between bg-blueGray-800 relative"},l={key:0},r=Object(a["g"])("p",{class:"text-outline absolute top-10 left-5 lg:left-10 text-[4vh] lg:text-[10vh]"},"About",-1),c=Object(a["g"])("p",{class:"text-outline absolute top-10 right-5 lg:right-10 text-[4vh] lg:text-[10vh]"},"Project",-1),s=Object(a["g"])("p",{class:"text-outline absolute bottom-10 right-5 lg:right-10 text-[5vh] lg:text-[10vh]"},"Address",-1),i=Object(a["g"])("div",{class:"text-outline path fixed bottom-0 left-0"},null,-1),u=Object(a["g"])("div",{class:"text-outline path second fixed bottom-0 left-0"},null,-1),g=[r,c,s,i,u],d={class:"h-full w-full flex justify-center items-center px-6"};function b(e,t,o,r,c,s){var i=Object(a["m"])("Header"),u=Object(a["m"])("Footer"),b=Object(a["m"])("about"),p=Object(a["m"])("project"),f=Object(a["m"])("contact"),m=Object(a["m"])("not-found");return Object(a["k"])(),Object(a["f"])(a["a"],null,[Object(a["g"])("main",n,[Object(a["j"])(a["b"],{"enter-active-class":"transition duration-1000 ease-in-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-1000 ease-in-out","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:Object(a["n"])((function(){return[c.textAnim?(Object(a["k"])(),Object(a["f"])("div",l,g)):Object(a["e"])("",!0)]})),_:1}),Object(a["j"])(i),Object(a["g"])("div",d,[Object(a["g"])("input",{type:"text",onChange:t[0]||(t[0]=function(e){return s.searchMe(e)}),class:"h-10 w-80 lg:w-4/12 px-4 text-blueGray-200 bg-blueGray-900 border border-blueGray-600 rounded-md placeholder-blueGray-500 placeholder-opacity-50 focus:outline-none focus:ring-1 focus:ring-blueGray-700 focus:shadow-2xl",placeholder:"Search me ( about / portfolio / address )"},null,32)]),Object(a["j"])(u)]),Object(a["j"])(a["b"],{"enter-active-class":"transition duration-300 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-200 ease-out","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:Object(a["n"])((function(){return["profile"==c.searchValue?(Object(a["k"])(),Object(a["d"])(b,{key:0,onChangeModel:t[1]||(t[1]=function(e){return s.cheangePage(e)})})):"project"==c.searchValue?(Object(a["k"])(),Object(a["d"])(p,{key:1,onChangeModel:t[2]||(t[2]=function(e){return s.cheangePage(e)})})):"contact"==c.searchValue?(Object(a["k"])(),Object(a["d"])(f,{key:2,onChangeModel:t[3]||(t[3]=function(e){return s.cheangePage(e)})})):"not-found"==c.searchValue?(Object(a["k"])(),Object(a["d"])(m,{key:3,onChangeModel:t[4]||(t[4]=function(e){return s.cheangePage(e)})})):Object(a["e"])("",!0)]})),_:1})],64)}o("498a");var p=o("e61d"),f=o.n(p),m=o("19e7"),j=o.n(m),h=o("cab8"),x=o.n(h),O={class:"container mx-auto px-4 lg:px-0 py-4"},v=Object(a["h"])('<ul class="flex items-center justify-center gap-5"><li><a href="https://www.facebook.com/alaminhossainpro" target="_blank"><img class="h-8 w-8" src="'+f.a+'" alt=""></a></li><li><a href="https://twitter.com/alamindevms" target="_blank"><img class="h-8 w-8" src="'+j.a+'" alt=""></a></li><li><a href="https://www.linkedin.com/in/alaminhossainpro/" target="_blank"><img class="h-8 w-8" src="'+x.a+'" alt=""></a></li></ul>',1),y=[v];function w(e,t,o,n,l,r){return Object(a["k"])(),Object(a["f"])("div",O,y)}var k={name:"Header"},M=o("6b0d"),G=o.n(M);const P=G()(k,[["render",w]]);var C=P,A={class:"container mx-auto px-4 lg:px-0 text-center"},_=Object(a["g"])("p",{class:"text-sm py-4 text-blueGray-900"},"Copyright@2021 || All Right Reserved By Al Amin",-1),B=[_];function V(e,t,o,n,l,r){return Object(a["k"])(),Object(a["f"])("div",A,B)}var I={name:"Footer"};const S=G()(I,[["render",V]]);var $=S,D={class:"flex justify-between items-center p-2"},F=Object(a["i"])(" Project "),H=Object(a["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(a["g"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1),T=[F,H],z={class:"flex flex-col lg:flex-row gap-5 lg:gap-10 px-4 lg:px-10 py-6 lg:py-16 w-full lg:w-10/12 mx-auto"},E=Object(a["g"])("div",{class:"w-full lg:w-96"},[Object(a["g"])("img",{class:"h-auto w-full rounded-md",src:"assets/images/alamin.jpg",alt:""})],-1),J={class:"flex-1 space-y-6 py-4"},N=Object(a["g"])("div",{class:"space-y-1"},[Object(a["g"])("h1",{class:"text-3xl font-semibold text-gray-700"},"Al Amin Hossain"),Object(a["g"])("h3",{class:"text-base font-light text-gray-600"},"Web Application Developer (Front End)")],-1),R=Object(a["g"])("div",{class:"space-y-2"},[Object(a["g"])("p",{class:"text-sm text-gray-600 leading-5 font-light"},[Object(a["i"])(" Hi, I'm Bangladeshi. "),Object(a["g"])("br"),Object(a["i"])(" I'm passionate about my duty. Working as a frontend developer in a local IT company. ")]),Object(a["g"])("p",{class:"text-sm text-gray-600 leading-5 font-light"},"Basically, I do the front part of an application. But I know little about backend and API. I'm very excited to learn backend.")],-1),L={class:"flex gap-4 items-center"},W=Object(a["g"])("a",{href:"assets/images/alamin.jpg",download:"",class:"bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-md text-white text-sm transition-all duration-300"},"Download CV",-1);function q(e,t,o,n,l,r){var c=Object(a["m"])("page-modal");return Object(a["k"])(),Object(a["d"])(c,null,{default:Object(a["n"])((function(){return[Object(a["g"])("div",null,[Object(a["g"])("div",D,[Object(a["g"])("button",{onClick:t[0]||(t[0]=function(t){return e.$emit("changeModel","project")}),class:"ml-auto flex items-center gap-2 text-sm font-light px-4 py-2 rounded-md text-blueGray-600 hover:text-blueGray-900 transition-all duration-300"},T)]),Object(a["g"])("div",z,[E,Object(a["g"])("div",J,[N,R,Object(a["g"])("div",L,[Object(a["g"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("changeModel","project")}),class:"bg-blueGray-700 hover:bg-blueGray-800 px-4 py-2 rounded-md text-white text-sm transition-all duration-300"},"Project"),W])])])])]})),_:1})}var K={class:"fixed inset-0 z-50 p-5 lg:p-14 bg-gray-900 bg-opacity-90",ref:"modelBody"},Q=Object(a["g"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1),U=[Q],X={class:"bg-gray-50 shadow-lg h-full rounded overflow-hidden overflow-y-auto"};function Y(e,t,o,n,l,r){return Object(a["k"])(),Object(a["f"])("section",K,[(Object(a["k"])(),Object(a["f"])("svg",{onClick:t[0]||(t[0]=function(){return r.hideModelAction&&r.hideModelAction.apply(r,arguments)}),class:"h-6 w-6 absolute top-2 lg:top-5 right-2 lg:right-5 text-red-500 lg:text-white cursor-pointer z-[51]",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",stroke:"currentColor"},U)),Object(a["g"])("div",X,[Object(a["l"])(e.$slots,"default")])],512)}var Z={name:"PageModal",data:function(){return{hideModel:!1}},methods:{hideModelAction:function(){this.$refs.modelBody.style.display="none",window.location.reload()}}};const ee=G()(Z,[["render",Y]]);var te=ee,oe={name:"About",components:{PageModal:te}};const ae=G()(oe,[["render",q]]);var ne=ae,le={class:"flex justify-between items-center p-2"},re=Object(a["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(a["g"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),ce=Object(a["i"])(" Profile "),se=[re,ce],ie=Object(a["i"])(" Contact "),ue=Object(a["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(a["g"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1),ge=[ie,ue],de=Object(a["g"])("div",{class:"px-4 lg:px-10 py-6 lg:py-12 w-full lg:w-10/12 mx-auto space-y-2 lg:space-y-6"},[Object(a["g"])("h1",{class:"text-3xl font-semibold text-gray-700"},"Project"),Object(a["g"])("div",{class:"grid grid-cols-1 lg:grid-cols-3 gap-4"},[Object(a["g"])("div",{class:"col-span-1 bg-gray-50 rounded-md overflow-hidden relative group"},[Object(a["g"])("div",{class:"absolute inset-0 bg-gray-900 bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-300 cursor-pointer"},[Object(a["g"])("a",{href:"https://scape.com.bd/",target:"_blank",class:"h-full w-full flex items-center justify-center"},[Object(a["g"])("span",{class:"text-white text-lg font-semibold"},"Scape Development Engineers")])]),Object(a["g"])("img",{class:"h-60 w-full object-cover",src:"assets/images/scape.png",alt:""})]),Object(a["g"])("div",{class:"col-span-1 bg-gray-50 rounded-md overflow-hidden relative group"},[Object(a["g"])("div",{class:"absolute inset-0 bg-gray-900 bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-300 cursor-pointer"},[Object(a["g"])("a",{href:"https://tourhobe.com/",target:"_blank",class:"h-full w-full flex items-center justify-center"},[Object(a["g"])("span",{class:"text-white text-lg font-semibold"},"Tourhobe")])]),Object(a["g"])("img",{class:"h-60 w-full object-cover",src:"assets/images/tourhobe.png",alt:""})]),Object(a["g"])("div",{class:"col-span-1 bg-gray-50 rounded-md overflow-hidden relative group"},[Object(a["g"])("div",{class:"absolute inset-0 bg-gray-900 bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-300 cursor-pointer"},[Object(a["g"])("a",{href:"https://dedf.org/",target:"_blank",class:"h-full w-full flex items-center justify-center"},[Object(a["g"])("span",{class:"text-white text-lg font-semibold"},"DEDF")])]),Object(a["g"])("img",{class:"h-60 w-full object-cover",src:"assets/images/dedf.png",alt:""})]),Object(a["g"])("div",{class:"col-span-1 bg-gray-50 rounded-md overflow-hidden relative group"},[Object(a["g"])("div",{class:"absolute inset-0 bg-gray-900 bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-300 cursor-pointer"},[Object(a["g"])("a",{href:"https://rosemaryhub.com/",target:"_blank",class:"h-full w-full flex items-center justify-center"},[Object(a["g"])("span",{class:"text-white text-lg font-semibold"},"Rosemaryhub")])]),Object(a["g"])("img",{class:"h-60 w-full object-cover",src:"assets/images/rosemaryhub.png",alt:""})])])],-1);function be(e,t,o,n,l,r){var c=Object(a["m"])("page-modal");return Object(a["k"])(),Object(a["d"])(c,null,{default:Object(a["n"])((function(){return[Object(a["g"])("div",le,[Object(a["g"])("button",{onClick:t[0]||(t[0]=function(t){return e.$emit("changeModel","profile")}),class:"flex items-center gap-2 text-sm font-light px-4 py-2 rounded-md text-blueGray-600 hover:text-blueGray-900 transition-all duration-300"},se),Object(a["g"])("button",{onClick:t[1]||(t[1]=function(t){return e.$emit("changeModel","contact")}),class:"flex items-center gap-2 text-sm font-light px-4 py-2 rounded-md text-blueGray-600 hover:text-blueGray-900 transition-all duration-300"},ge)]),de]})),_:1})}var pe={name:"Project",components:{PageModal:te}};const fe=G()(pe,[["render",be]]);var me=fe,je={class:"flex justify-between items-center p-2"},he=Object(a["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(a["g"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1),xe=Object(a["i"])(" Project "),Oe=[he,xe],ve=Object(a["g"])("div",{class:"p-4 lg:p-5 w-full lg:w-10/12 mx-auto space-y-2 lg:space-y-6"},[Object(a["g"])("h1",{class:"text-3xl font-semibold text-gray-700"},"Get In Touch"),Object(a["g"])("div",{class:"grid grid-cols-1 lg:grid-cols-2 gap-4"},[Object(a["g"])("div",{class:"col-span-1 bg-blueGray-100 rounded-md p-4"},[Object(a["g"])("form",{class:"space-y-4"},[Object(a["g"])("div",{class:"space-y-1"},[Object(a["g"])("label",{class:"text-sm font-medium text-blueGray-800"},"Name"),Object(a["g"])("input",{type:"text",class:"text-sm font-medium text-blueGray-700 px-3 border border-blueGray-400 rounded-md h-10 w-full focus:outline-none",placeholder:"Jhon Doe"})]),Object(a["g"])("div",{class:"space-y-1"},[Object(a["g"])("label",{class:"text-sm font-medium text-blueGray-800"},"Email"),Object(a["g"])("input",{type:"email",class:"text-sm font-medium text-blueGray-700 px-3 border border-blueGray-400 rounded-md h-10 w-full focus:outline-none",placeholder:"example@mail.com"})]),Object(a["g"])("div",{class:"space-y-1"},[Object(a["g"])("label",{class:"text-sm font-medium text-blueGray-800"},"Note"),Object(a["g"])("textarea",{class:"text-sm font-medium text-blueGray-700 px-3 border border-blueGray-400 rounded-md h-48 w-full focus:outline-none"})]),Object(a["g"])("button",{type:"submit",class:"bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-md text-white text-sm transition-all duration-300"},"Send")])]),Object(a["g"])("div",{class:"col-span-1 flex flex-col justify-center space-y-5 py-4"},[Object(a["g"])("div",{class:"flex items-center justify-center gap-4"},[Object(a["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(a["g"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})]),Object(a["g"])("span",{class:"flex-1"},"alamin.mistrisolution@gmail.com")]),Object(a["g"])("div",{class:"flex items-center justify-center gap-4"},[Object(a["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 mt-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(a["g"])("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})]),Object(a["g"])("span",{class:"flex-1"},"https://github.com/alamindevms")])])])],-1);function ye(e,t,o,n,l,r){var c=Object(a["m"])("page-modal");return Object(a["k"])(),Object(a["d"])(c,null,{default:Object(a["n"])((function(){return[Object(a["g"])("div",je,[Object(a["g"])("button",{onClick:t[0]||(t[0]=function(t){return e.$emit("changeModel","project")}),class:"flex items-center gap-2 text-sm font-light px-4 py-2 rounded-md text-blueGray-600 hover:text-blueGray-900 transition-all duration-300"},Oe)]),ve]})),_:1})}var we={name:"Contact",components:{PageModal:te}};const ke=G()(we,[["render",ye]]);var Me=ke,Ge={class:"flex justify-between items-center p-2"},Pe=Object(a["i"])(" Profile "),Ce=Object(a["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(a["g"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1),Ae=[Pe,Ce],_e=Object(a["g"])("div",{class:"flex justify-center items-center w-10/12 h-full mx-auto"},[Object(a["g"])("div",{class:"w-96 h-96"},[Object(a["g"])("img",{class:"h-full w-full rounded-md",src:"assets/images/404.svg",alt:""})])],-1);function Be(e,t,o,n,l,r){var c=Object(a["m"])("page-modal");return Object(a["k"])(),Object(a["d"])(c,null,{default:Object(a["n"])((function(){return[Object(a["g"])("div",Ge,[Object(a["g"])("button",{onClick:t[0]||(t[0]=function(t){return e.$emit("changeModel","profile")}),class:"ml-auto flex items-center gap-2 text-sm font-light px-4 py-2 rounded-md text-blueGray-600 hover:text-blueGray-900 transition-all duration-300"},Ae)]),_e]})),_:1})}var Ve={components:{PageModal:te}};const Ie=G()(Ve,[["render",Be]]);var Se=Ie,$e={name:"App",components:{Header:C,Footer:$,About:ne,Project:me,Contact:Me,NotFound:Se},data:function(){return{showMe:null,searchValue:null,textAnim:null}},mounted:function(){var e=this;setTimeout((function(t){console.log(t),e.textAnim=!0}),500)},methods:{searchMe:function(e){var t=e.target.value.trim();console.log(t),this.searchValue="about"==t||"profile"==t?"profile":"project"==t||"portfolio"==t||"demo"==t?"project":"contact"==t||"address"==t||"chat"==t?"contact":"not-found",e.target.value=""},cheangePage:function(e){this.searchValue=e}}};const De=G()($e,[["render",b]]);var Fe=De;o("ba8c");Object(a["c"])(Fe).mount("#app")},ba8c:function(e,t,o){},cab8:function(e,t,o){e.exports=o.p+"img/linkedin.73e2e519.svg"},e61d:function(e,t,o){e.exports=o.p+"img/facebook.b02c5585.svg"}});
//# sourceMappingURL=app.79fc0b9c.js.map