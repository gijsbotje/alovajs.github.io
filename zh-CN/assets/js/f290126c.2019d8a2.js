"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[4168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u8bf7\u6c42\u65b9\u6cd5\u5b9e\u4f8b",sidebar_position:20},i=void 0,l={unversionedId:"learning/method-instance",id:"learning/method-instance",title:"\u8bf7\u6c42\u65b9\u6cd5\u5b9e\u4f8b",description:"\u5728 alova \u4e2d\uff0c\u6bcf\u4e2a\u8bf7\u6c42\u90fd\u5bf9\u5e94\u4e00\u4e2a method \u5b9e\u4f8b\uff0c\u5b83\u63cf\u8ff0\u4e86\u4e00\u6b21\u8bf7\u6c42\u7684 url\u3001\u8bf7\u6c42\u5934\u3001\u8bf7\u6c42\u53c2\u6570\uff0c\u4ee5\u53ca\u54cd\u5e94\u6570\u636e\u5904\u7406\u3001\u7f13\u5b58\u6570\u636e\u5904\u7406\u7b49\u8bf7\u6c42\u884c\u4e3a\u53c2\u6570\uff0c\u4f46\u5b83\u4e0d\u4f1a\u5b9e\u9645\u53d1\u51fa\u8bf7\u6c42\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/03-learning/02-method-instance.md",sourceDirName:"03-learning",slug:"/learning/method-instance",permalink:"/zh-CN/learning/method-instance",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/03-learning/02-method-instance.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"\u8bf7\u6c42\u65b9\u6cd5\u5b9e\u4f8b",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"\u4e86\u89e3alova\u5b9e\u4f8b",permalink:"/zh-CN/learning/alova-instance"},next:{title:"\u53d1\u9001\u8bf7\u6c42",permalink:"/zh-CN/learning/use-request"}},s={},p=[{value:"\u521b\u5efa\u5b9e\u4f8b",id:"\u521b\u5efa\u5b9e\u4f8b",level:2},{value:"\u8bbe\u7f6e\u66f4\u7ec6\u7c92\u5ea6\u7684\u8d85\u65f6\u65f6\u95f4",id:"\u8bbe\u7f6e\u66f4\u7ec6\u7c92\u5ea6\u7684\u8d85\u65f6\u65f6\u95f4",level:2},{value:"\u8bf7\u6c42\u65b9\u6cd5\u7c7b\u578b",id:"\u8bf7\u6c42\u65b9\u6cd5\u7c7b\u578b",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728 alova \u4e2d\uff0c\u6bcf\u4e2a\u8bf7\u6c42\u90fd\u5bf9\u5e94\u4e00\u4e2a method \u5b9e\u4f8b\uff0c\u5b83\u63cf\u8ff0\u4e86\u4e00\u6b21\u8bf7\u6c42\u7684 url\u3001\u8bf7\u6c42\u5934\u3001\u8bf7\u6c42\u53c2\u6570\uff0c\u4ee5\u53ca\u54cd\u5e94\u6570\u636e\u5904\u7406\u3001\u7f13\u5b58\u6570\u636e\u5904\u7406\u7b49\u8bf7\u6c42\u884c\u4e3a\u53c2\u6570\uff0c\u4f46\u5b83\u4e0d\u4f1a\u5b9e\u9645\u53d1\u51fa\u8bf7\u6c42\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efa\u5b9e\u4f8b"},"\u521b\u5efa\u5b9e\u4f8b"),(0,a.kt)("p",null,"method \u5b9e\u4f8b\u7684\u521b\u5efa\u4e5f\u548c axios \u7684\u8bf7\u6c42\u53d1\u9001\u51fd\u6570\u975e\u5e38\u7c7b\u4f3c\uff0c\u4f60\u9700\u8981\u4f7f\u7528\u4e0a\u4e00\u8282\u4e2d\u521b\u5efa\u7684 alova \u5b9e\u4f8b\u6765\u521b\u5efa method \u5b9e\u4f8b\uff0c\u4e0b\u9762\u6211\u4eec\u5148\u6765\u521b\u5efa\u4e00\u4e2a\u83b7\u53d6 todo \u5217\u8868\u7684 Method \u5b9e\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u521b\u5efa\u4e00\u4e2aGet\u5b9e\u4f8b\uff0c\u63cf\u8ff0\u4e00\u6b21Get\u8bf7\u6c42\u7684\u4fe1\u606f\nconst todoListGetter = alovaInstance.Get('/todo/list', {\n  // \u8bf7\u6c42\u5934\n  headers: {\n    'Content-Type': 'application/json;charset=UTF-8'\n  },\n  // params\u53c2\u6570\u5c06\u4f1a\u4ee5?\u7684\u5f62\u5f0f\u62fc\u63a5\u5728url\u540e\u9762\n  params: {\n    userId: 1\n  }\n});\n")),(0,a.kt)("p",null,"\u63a5\u7740\u518d\u521b\u5efa\u4e00\u4e2a\u63d0\u4ea4 todo \u9879\u7684 POST \u8bf7\u6c42 Method \u5b9e\u4f8b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u521b\u5efaPost\u5b9e\u4f8b\nconst createTodoPoster = alovaInstance.Post(\n  '/todo/create',\n  // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u662fhttp body\u6570\u636e\n  {\n    title: 'test todo',\n    time: '12:00'\n  },\n  // \u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u8bf7\u6c42\u914d\u7f6e\u76f8\u5173\u4fe1\u606f\n  {\n    headers: {\n      'Content-Type': 'application/json;charset=UTF-8'\n    },\n    params: {\n      // ...\n    }\n  }\n);\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f \u6ce8\u610f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"Method"),"\u5b9e\u4f8b\u91cc\u53ea\u662f\u4fdd\u5b58\u4e86\u8bf7\u6c42\u6240\u9700\u8981\u7684\u4fe1\u606f\uff0c\u5b83\u4e0d\u4f1a\u53d1\u51fa\u8bf7\u6c42\uff0c\u800c\u662f\u9700\u8981\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"use hook"),"\u53d1\u9001\u8bf7\u6c42\uff08\u540e\u7eed\u5c06\u8be6\u7ec6\u8bb2\u89e3\uff09\uff0c\u8fd9\u70b9\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"axios"),"\u4e0d\u540c\u3002")),(0,a.kt)("h2",{id:"\u8bbe\u7f6e\u66f4\u7ec6\u7c92\u5ea6\u7684\u8d85\u65f6\u65f6\u95f4"},"\u8bbe\u7f6e\u66f4\u7ec6\u7c92\u5ea6\u7684\u8d85\u65f6\u65f6\u95f4"),(0,a.kt)("p",null,"\u5168\u5c40\u7684\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\u4f5c\u7528\u4e8e\u6240\u6709\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Method"),"\u5b9e\u4f8b\uff0c\u4f46\u5f88\u591a\u65f6\u5019\u6211\u4eec\u9700\u8981\u6839\u636e\u7279\u6b8a\u8bf7\u6c42\u8bbe\u7f6e\u4e0d\u540c\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u8bf7\u6c42\u7ea7\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5b83\u5c06\u8986\u76d6\u5168\u5c40\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"timeout"),"\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u8bf7\u6c42\u7ea7\u522b\u7684\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\nconst todoListGetter = alovaInstance.Get('/todo/list', {\n  // ...\n  // highlight-start\n  timeout: 10000\n  // highlight-end\n});\n")),(0,a.kt)("h2",{id:"\u8bf7\u6c42\u65b9\u6cd5\u7c7b\u578b"},"\u8bf7\u6c42\u65b9\u6cd5\u7c7b\u578b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Alova"),"\u63d0\u4f9b\u4e86\u5305\u62ec GET\u3001POST\u3001PUT\u3001DELETE\u3001HEAD\u3001OPTIONS\u3001PATCH \u4e03\u79cd\u8bf7\u6c42\u65b9\u6cd5\u7684\u62bd\u8c61\u5b9e\u4f8b\uff0c\u5177\u4f53\u7684\u4f7f\u7528\u65b9\u5f0f\u53ef\u4ee5\u9605\u8bfb ",(0,a.kt)("a",{parentName:"p",href:"/next-step/method-details"},"\u8bf7\u6c42\u65b9\u6cd5\u8be6\u89e3"),"\u3002"))}u.isMDXComponent=!0}}]);