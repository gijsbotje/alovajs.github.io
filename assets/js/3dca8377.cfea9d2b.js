"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[533],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Controlled Caching",sidebar_position:90},s=void 0,c={unversionedId:"next-step/controlled-cache",id:"next-step/controlled-cache",title:"Controlled Caching",description:"v2.1.0+",source:"@site/docs/06-next-step/09-controlled-cache.md",sourceDirName:"06-next-step",slug:"/next-step/controlled-cache",permalink:"/next-step/controlled-cache",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/06-next-step/09-controlled-cache.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{title:"Controlled Caching",sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"serial request",permalink:"/next-step/serial-request"},next:{title:"Download/Upload progress",permalink:"/next-step/download-upload-progress"}},i={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Tips",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"v2.1.0+")),(0,a.kt)("p",null,"When sending a request, by default, it will first check whether there is matching cache data, and if it matches, it will use it as the response data to return. If in some scenarios, the user needs to use a custom cache, he must first use ",(0,a.kt)("inlineCode",{parentName:"p"},"setCache")," to synchronize It is only feasible to set cached data, which undoubtedly increases the burden on users. This is an uncontrolled cache."),(0,a.kt)("p",null,"If you want to use ",(0,a.kt)("strong",{parentName:"p"},"IndexedDB")," custom management cache data with uncontrolled caching, you may first pre-set the hit cache for upcoming requests, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const getFile = fileName => {\n  const fileGetter = alovaInstance.GET(`/file/${fileName}`);\n  const tx = db.transaction(['files']);\n  const getRequest = tx.objectStore('files').get(fileName);\n  getRequest.onsuccess = ({ result }) => {\n    setCache(fileGetter, result);\n  };\n  return fileGetter;\n};\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c But the above writing method is not recommended"),", for the following reasons:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Each call to ",(0,a.kt)("inlineCode",{parentName:"li"},"getFile")," will set up a cache, but fileGetter is not necessarily used to send requests;"),(0,a.kt)("li",{parentName:"ol"},"IndexedDB is an asynchronous interface. If the step of matching the cache occurs before IndexedDB triggers onsuccess, then the cached data will not be matched, and their order is unpredictable;"),(0,a.kt)("li",{parentName:"ol"},"Custom cache management tasks and methods are separate, but in fact they should be aggregated together;")),(0,a.kt)("p",null,"In this case, you can use controlled caching to solve the above problem. Using controlled caching is also very simple. You can set localCache in the method as an asynchronous or synchronous function, and return custom data as a hit in this function The cached data is returned."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const getFile = fileName =>\n  alovaInstance.GET(`/file/${fileName}`, {\n    // Controlled caching functions support asynchronous and synchronous functions\n    localCache() {\n      return new Promise((resolve, reject) => {\n        const tx = db.transaction(['files']);\n        const getRequest = tx.objectStore('files').get(fileName);\n        getRequest.onsuccess = resolve;\n        getRequest.onerror = reject;\n      });\n    }\n  });\n")),(0,a.kt)("admonition",{title:"reminder",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can also cooperate with ",(0,a.kt)("a",{parentName:"p",href:"/response-data-management/transform-response-data"},"special usage of transformData")," to implement custom cache storage task.")))}p.isMDXComponent=!0}}]);