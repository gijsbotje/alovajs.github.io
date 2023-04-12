"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[4068],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,v=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return t?n.createElement(v,l(l({ref:a},u),{},{components:t})):n.createElement(v,l({ref:a},u))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=c;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(7294),o=t(6010);const r="tabItem_Ymn6";function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>y});var n=t(7462),o=t(7294),r=t(6010),l=t(2466),i=t(6550),s=t(1980),p=t(7392),u=t(12);function d(e){return function(e){var a;return(null==(a=o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:a.filter(Boolean))??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:o}}=e;return{value:a,label:t,attributes:n,default:o}}))}function c(e){const{values:a,children:t}=e;return(0,o.useMemo)((()=>{const e=a??d(t);return function(e){const a=(0,p.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function v(e){let{queryString:a=!1,groupId:t}=e;const n=(0,i.k6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,r=c(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[s,p]=v({queryString:t,groupId:n}),[d,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,u.Nk)(t);return[n,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:n}),k=(()=>{const e=s??d;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),f(e)}),[p,f,r]),tabValues:r}}var k=t(2389);const g="tabList__CuJ",h="tabItem_LNqP";function b(e){let{className:a,block:t,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const a=e.currentTarget,t=u.indexOf(a),n=p[t].value;n!==i&&(d(a),s(n))},m=e=>{var a;let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}null==(a=t)||a.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},a)},p.map((e=>{let{value:a,label:t,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>u.push(e),onKeyDown:m,onClick:c},l,{className:(0,r.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":i===a})}),t??a)})))}function T(e){let{lazy:a,children:t,selectedValue:n}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function w(e){const a=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g)},o.createElement(b,(0,n.Z)({},e,a)),o.createElement(T,(0,n.Z)({},e,a)))}function y(e){const a=(0,k.Z)();return o.createElement(w,(0,n.Z)({key:String(a)},e))}},9484:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=t(7462),o=(t(7294),t(3905)),r=t(4866),l=t(5162);const i={title:"Taro\u9002\u914d\u5668",sidebar_position:40},s=void 0,p={unversionedId:"extension/alova-adapter-taro",id:"extension/alova-adapter-taro",title:"Taro\u9002\u914d\u5668",description:"\u6b64\u63d2\u4ef6\u53ea\u652f\u6301 react 16.8+\u3001vue3 \u7248\u672c\u7684 taro \u5e94\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/09-extension/04-alova-adapter-taro.md",sourceDirName:"09-extension",slug:"/extension/alova-adapter-taro",permalink:"/zh-CN/extension/alova-adapter-taro",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/09-extension/04-alova-adapter-taro.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Taro\u9002\u914d\u5668",sidebar_position:40},sidebar:"tutorialSidebar",previous:{title:"axios\u9002\u914d\u5668",permalink:"/zh-CN/extension/alova-adapter-axios"},next:{title:"Uniapp\u9002\u914d\u5668",permalink:"/zh-CN/extension/alova-adapter-uniapp"}},u={},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u521b\u5efa alova",id:"\u521b\u5efa-alova",level:3},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42",level:3},{value:"\u4e0a\u4f20",id:"\u4e0a\u4f20",level:3},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:3},{value:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",id:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",level:2},{value:"Typescript",id:"typescript",level:2},{value:"method \u914d\u7f6e",id:"method-\u914d\u7f6e",level:3},{value:"\u54cd\u5e94\u6570\u636e",id:"\u54cd\u5e94\u6570\u636e",level:3}],c={toc:d};function m(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6b64\u63d2\u4ef6\u53ea\u652f\u6301 react 16.8+\u3001vue3 \u7248\u672c\u7684 taro \u5e94\u7528\u3002")),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"1",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @alova/adapter-taro --save\n"))),(0,o.kt)(l.Z,{value:"2",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @alova/adapter-taro\n")))),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 Taro \u5f00\u53d1 React-Native \u5e94\u7528\uff0c\u8bf7\u786e\u4fdd",(0,o.kt)("inlineCode",{parentName:"p"},"metro >= 0.76.0"),"\uff0c\u5e76\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"metro.config.js"),"\u4e2d\u5f00\u542f",(0,o.kt)("inlineCode",{parentName:"p"},"resolver.unstable_enablePackageExports")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/metro/docs/configuration/#unstable_enablepackageexports-experimental"},"\u5173\u4e8e metro \u7684 unstable_enablePackageExports \u53c2\u6570"))),(0,o.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,o.kt)("h3",{id:"\u521b\u5efa-alova"},"\u521b\u5efa alova"),(0,o.kt)("p",null,"\u8c03\u7528 ",(0,o.kt)("strong",{parentName:"p"},"AdapterTaro")," \u5c06\u8fd4\u56de",(0,o.kt)("em",{parentName:"p"},"\u8bf7\u6c42\u9002\u914d\u5668"),"\u3001",(0,o.kt)("em",{parentName:"p"},"\u5b58\u50a8\u9002\u914d\u5668"),"\uff0c\u4ee5\u53ca",(0,o.kt)("em",{parentName:"p"},"ReactHook"),"\uff0c\u56e0\u6b64\u4f60\u4e0d\u518d\u9700\u8981\u8bbe\u7f6e\u8fd9\u4e09\u4e2a\u9879\uff0c\u4f7f\u7528\u65b9\u6cd5\u5b8c\u5168\u4e00\u81f4\u3002"),(0,o.kt)(r.Z,{groupId:"framework",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova } from 'alova';\nimport AdapterTaro from '@alova/adapter-taro';\n\nconst alovaInst = createAlova(\n  baseURL: 'https://api.alovajs.org',\n  ...AdapterTaro()\n);\n"))),(0,o.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova } from 'alova';\nimport AdapterTaroVue from '@alova/adapter-taro/vue';\n\nconst alovaInst = createAlova(\n  baseURL: 'https://api.alovajs.org',\n  ...AdapterTaroVue()\n);\n")))),(0,o.kt)("h3",{id:"\u8bf7\u6c42"},"\u8bf7\u6c42"),(0,o.kt)("p",null,"\u8bf7\u6c42\u7684\u4f7f\u7528\u65b9\u6cd5\u4e0e web \u73af\u5883\u4e2d\u4f7f\u7528\u5b8c\u5168\u4e00\u81f4\u3002\u5df2\u7ecf\u5b8c\u5168\u517c\u5bb9",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.request"),"\uff0c\u4f60\u53ef\u4ee5\u5728\u521b\u5efa method \u5b9e\u4f8b\u7684",(0,o.kt)("em",{parentName:"p"},"config"),"\u4e2d\u6307\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.request"),"\u652f\u6301\u7684",(0,o.kt)("a",{parentName:"p",href:"https://taro-docs.jd.com/docs/apis/network/request/"},"\u5168\u90e8\u914d\u7f6e\u9879")),(0,o.kt)(r.Z,{groupId:"framework",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const list = () =>\n  alovaInst.Get('/list', {\n    // \u8bbe\u7f6e\u7684\u53c2\u6570\u5c06\u4f20\u9012\u7ed9Taro.request\n    enableHttp2: true\n  });\n\nconst App = () => {\n  const { loading, data } = useRequest(list);\n\n  return (\n    { loading ? <View>\u52a0\u8f7d\u4e2d...</View> : null }\n    <View>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{ JSON.stringify(data) }</View>\n  )\n};\n"))),(0,o.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<tempate>\n  <view v-if=\"loading\">\u52a0\u8f7d\u4e2d...</view>\n  <view>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{{ data }}</view>\n</tempate>\n\n<script setup>\n  const list = () =>\n    alovaInst.Get('/list', {\n      // \u8bbe\u7f6e\u7684\u53c2\u6570\u5c06\u4f20\u9012\u7ed9Taro.request\n      enableHttp2: true\n    });\n  const { loading, data } = useRequest(list);\n<\/script>\n")))),(0,o.kt)("h3",{id:"\u4e0a\u4f20"},"\u4e0a\u4f20"),(0,o.kt)("p",null,"\u5728 method \u5b9e\u4f8b\u7684",(0,o.kt)("em",{parentName:"p"},"config"),"\u4e2d\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"requestType: 'upload'"),"\u65f6\u8868\u793a\u4e0a\u4f20\u6587\u4ef6\uff0c\u8bf7\u6c42\u9002\u914d\u5668\u5c06\u4f1a\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.uploadFile"),"\uff0c\u4e0a\u4f20\u7684\u6587\u4ef6\u6570\u636e\u653e\u5728 method \u5b9e\u4f8b\u7684 data \u4e2d\uff0c\u4f60\u9700\u8981\u5728 data \u4e2d\u6307\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"filePath"),"\uff0c\u8fd9 2 \u4e2a\u53c2\u6570\u5c06\u4f20\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.uploadFile"),"\u4e2d\uff0c\u540c\u65f6\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5728 data \u4e2d\u6307\u5b9a\u8fd9 2 \u4e2a\u53c2\u6570\u5916\u7684\u5176\u4ed6\u53c2\u6570\uff0c\u8bf7\u6c42\u9002\u914d\u5668\u4f1a\u5c06\u5b83\u4eec\u4f20\u5165\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"formData"),"\u53c2\u6570\u4e2d\u3002"),(0,o.kt)("p",null,"\u540c\u6837\u7684\uff0c\u5df2\u7ecf\u5b8c\u5168\u517c\u5bb9",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.uploadFile"),"\uff0c\u4f60\u53ef\u4ee5\u5728\u521b\u5efa method \u5b9e\u4f8b\u7684",(0,o.kt)("em",{parentName:"p"},"config"),"\u4e2d\u6307\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.uploadFile"),"\u652f\u6301\u7684",(0,o.kt)("a",{parentName:"p",href:"https://taro-docs.jd.com/docs/apis/network/upload/uploadFile"},"\u5168\u90e8\u914d\u7f6e\u9879"),"\uff0c\u5982\u679c\u8fd8\u6709\u989d\u5916\u7684\u53c2\u6570\u9700\u8981\u8bbe\u7f6e\uff0c\u8bf7\u5728 method \u5b9e\u4f8b\u7684",(0,o.kt)("em",{parentName:"p"},"config"),"\u4e2d\u6307\u5b9a\u3002"),(0,o.kt)(r.Z,{groupId:"framework",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const uploadFile = (name, filePath, formData) =>\n  alovaInst.Post(\n    '/uploadImg',\n    {\n      name,\n      filePath,\n\n      // \u989d\u5916\u6570\u636e\u5c06\u4f20\u5165uni.uploadFile\u7684formData\u4e2d\n      ...formData\n    },\n    {\n      // \u8bbe\u7f6e\u8bf7\u6c42\u65b9\u5f0f\u4e3a\u4e0a\u4f20\uff0c\u9002\u914d\u5668\u5185\u5c06\u8c03\u7528uni.uploadFile\n      requestType: 'upload',\n\n      // \u5f00\u542f\u4e0a\u4f20\u8fdb\u5ea6\n      enableUpload: true\n    }\n  );\n\nconst App = () => {\n  const { loading, data, uploading, send } = useRequest(uploadFile, {\n    immediate: false\n  });\n\n  const handleImageChoose = () => {\n    Taro.chooseImage({\n      success: chooseImageRes => {\n        const tempFilePaths = chooseImageRes.tempFilePaths;\n        send('fileName', tempFilePaths[0], {\n          extra1: 'a',\n          extra2: 'b'\n        });\n      }\n    });\n  };\n\n  return (\n    { loading ? <View>\u4e0a\u4f20\u4e2d...</View> : null }\n    <View>\u4e0a\u4f20\u8fdb\u5ea6\uff1a{ uploading.loaded }/{ uploading.total }</View>\n    <Button onClick={handleImageChoose}>\u4e0a\u4f20\u56fe\u7247</Button>\n    {/* ... */}\n  )\n}\n"))),(0,o.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<tempate>\n  <view v-if=\"loading\">\u4e0a\u4f20\u4e2d...</view>\n  <view>\u4e0a\u4f20\u8fdb\u5ea6\uff1a{{ uploading.loaded }}/{{ uploading.total }}</view>\n  <button @click=\"handleImageChoose\">\u4e0a\u4f20\u56fe\u7247</button>\n  \x3c!-- ... --\x3e\n</tempate>\n\n<script setup>\n  const uploadFile = (name, filePath, formData) =>\n    alovaInst.Post(\n      '/uploadImg',\n      {\n        name,\n        filePath,\n\n        // \u989d\u5916\u6570\u636e\u5c06\u4f20\u5165uni.uploadFile\u7684formData\u4e2d\n        ...formData\n      },\n      {\n        // \u8bbe\u7f6e\u8bf7\u6c42\u65b9\u5f0f\u4e3a\u4e0a\u4f20\uff0c\u9002\u914d\u5668\u5185\u5c06\u8c03\u7528uni.uploadFile\n        requestType: 'upload',\n\n        // \u5f00\u542f\u4e0a\u4f20\u8fdb\u5ea6\n        enableUpload: true\n      }\n    );\n\n  const { loading, data, uploading, send } = useRequest(uploadFile, {\n    immediate: false\n  });\n\n  const handleImageChoose = () => {\n    Taro.chooseImage({\n      success: chooseImageRes => {\n        const tempFilePaths = chooseImageRes.tempFilePaths;\n        send('fileName', tempFilePaths[0], {\n          extra1: 'a',\n          extra2: 'b'\n        });\n      }\n    });\n  };\n<\/script>\n")))),(0,o.kt)("h3",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,o.kt)("p",null,"\u5728 method \u5b9e\u4f8b\u7684",(0,o.kt)("em",{parentName:"p"},"config"),"\u4e2d\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"requestType: 'download'"),"\u65f6\u8868\u793a\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u6c42\u9002\u914d\u5668\u5c06\u4f1a\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.downloadFile"),"\u3002"),(0,o.kt)("p",null,"\u540c\u6837\u7684\uff0c\u5df2\u7ecf\u5b8c\u5168\u517c\u5bb9",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.downloadFile"),"\uff0c\u4f60\u53ef\u4ee5\u5728\u521b\u5efa method \u5b9e\u4f8b\u7684",(0,o.kt)("em",{parentName:"p"},"config"),"\u4e2d\u6307\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.downloadFile"),"\u652f\u6301\u7684",(0,o.kt)("a",{parentName:"p",href:"https://taro-docs.jd.com/docs/apis/network/download/downloadFile"},"\u5168\u90e8\u914d\u7f6e\u9879"),"\uff0c\u5982\u679c\u8fd8\u6709\u989d\u5916\u7684\u53c2\u6570\u9700\u8981\u8bbe\u7f6e\uff0c\u8bf7\u5728 method \u5b9e\u4f8b\u7684",(0,o.kt)("em",{parentName:"p"},"config"),"\u4e2d\u6307\u5b9a\u3002"),(0,o.kt)(r.Z,{groupId:"framework",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const downloadFile = filePath =>\n  alovaInst.Get('/bigImage.jpg', {\n    // \u8bbe\u7f6e\u8bf7\u6c42\u65b9\u5f0f\u4e3a\u4e0b\u8f7d\uff0c\u9002\u914d\u5668\u5185\u5c06\u8c03\u7528uni.downloadFile\n    requestType: 'download',\n    filePath,\n\n    // \u5f00\u542f\u4e0b\u8f7d\u8fdb\u5ea6\n    enableDownload: true\n  });\n\nconst App = () => {\n  const { loading, data, downloading, send } = useRequest(downloadFile, {\n    immediate: false\n  });\n  const handleImageDownload = () => {\n    send('file_save_path');\n  };\n\n  return (\n    { loading ? <View>\u4e0b\u8f7d\u4e2d...</View> : null }\n    <View>\u4e0b\u8f7d\u8fdb\u5ea6\uff1a{ downloading.loaded }/{ downloading.total }</View>\n    <Button onClick={handleImageDownload}>\u4e0b\u8f7d\u56fe\u7247</Button>\n    {/* ... */}\n  );\n}\n"))),(0,o.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<tempate>\n  <view v-if=\"loading\">\u4e0b\u8f7d\u4e2d...</view>\n  <view>\u4e0b\u8f7d\u8fdb\u5ea6\uff1a{{ downloading.loaded }}/{{ downloading.total }}</view>\n  <button @click=\"handleImageDownload\">\u4e0b\u8f7d\u56fe\u7247</button>\n  \x3c!-- ... --\x3e\n</tempate>\n\n<script setup>\n  const downloadFile = filePath =>\n    alovaInst.Get('/bigImage.jpg', {\n      // \u8bbe\u7f6e\u8bf7\u6c42\u65b9\u5f0f\u4e3a\u4e0b\u8f7d\uff0c\u9002\u914d\u5668\u5185\u5c06\u8c03\u7528uni.downloadFile\n      requestType: 'download',\n      filePath,\n\n      // \u5f00\u542f\u4e0b\u8f7d\u8fdb\u5ea6\n      enableDownload: true\n    });\n\n  const { loading, data, downloading, send } = useRequest(downloadFile, {\n    immediate: false\n  });\n\n  const handleImageDownload = () => {\n    send('file_save_path');\n  };\n<\/script>\n")))),(0,o.kt)("h2",{id:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9"},"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9"),(0,o.kt)("p",null,"\u5728\u4f7f\u7528 Taro \u5f00\u53d1\u5e94\u7528\u65f6\uff0c\u6211\u4eec\u4ecd\u7136\u53ef\u80fd\u9700\u8981\u7528\u5230\u6a21\u62df\u8bf7\u6c42\uff0c\u53ea\u662f\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,o.kt)("a",{parentName:"p",href:"/extension/alova-mock"},"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668(@alova/mock)"),"\u7684\u54cd\u5e94\u6570\u636e\u662f\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"Response"),"\u5b9e\u4f8b\uff0c\u5373\u9ed8\u8ba4\u517c\u5bb9",(0,o.kt)("inlineCode",{parentName:"p"},"GlobalFetch"),"\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5f53\u5728 Taro \u73af\u5883\u4e0b\u4f7f\u7528\u65f6\uff0c\u6211\u4eec\u9700\u8981\u8ba9\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u7684\u54cd\u5e94\u6570\u636e\u662f\u517c\u5bb9 Taro \u9002\u914d\u5668\u7684\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"@alova/adapter-taro"),"\u5305\u4e2d\u5bfc\u51fa\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"taroMockResponse"),"\u4f5c\u4e3a\u54cd\u5e94\u9002\u914d\u5668\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { defineMock, createAlovaMockAdapter } from '@alova/mock';\nimport AdapterTaro, { taroRequestAdapter, taroMockResponse } from '@alova/adapter-taro';\n\nconst mocks = defineMock({\n  // ...\n});\n\n// \u6a21\u62df\u6570\u636e\u8bf7\u6c42\u9002\u914d\u5668\nexport default createAlovaMockAdapter([mocks], {\n  // \u6307\u5b9ataro\u8bf7\u6c42\u9002\u914d\u5668\u540e\uff0c\u672a\u5339\u914d\u6a21\u62df\u63a5\u53e3\u7684\u8bf7\u6c42\u5c06\u4f7f\u7528\u8fd9\u4e2a\u9002\u914d\u5668\u53d1\u9001\u8bf7\u6c42\n  httpAdapter: taroRequestAdapter,\n\n  //  \u6a21\u62df\u54cd\u5e94\u9002\u914d\u5668\uff0c\u6307\u5b9a\u540e\u54cd\u5e94\u6570\u636e\u5c06\u8f6c\u6362\u4e3ataro\u517c\u5bb9\u7684\u6570\u636e\u683c\u5f0f\n  onMockResponse: taroMockResponse\n});\n\nexport const alovaInst = createAlova({\n  baseURL: 'https://api.alovajs.org',\n  timeout: 5000,\n  ...AdapterTaro({\n    // \u901a\u8fc7\u73af\u5883\u53d8\u91cf\u63a7\u5236\u662f\u5426\u4f7f\u7528\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\n    mockRequest: process.env.NODE_ENV === 'development' ? mockAdapter : undefined\n  })\n  // ...\n});\n")),(0,o.kt)("h2",{id:"typescript"},"Typescript"),(0,o.kt)("p",null,"taro \u8bf7\u6c42\u9002\u914d\u5668 \u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u7c7b\u578b\u9002\u914d\uff0cmethod \u914d\u7f6e\u3001\u54cd\u5e94\u6570\u636e\u7684\u7c7b\u578b\u5c06\u4e0e taro \u7684\u7c7b\u578b\u5b8c\u5168\u5339\u914d\u3002"),(0,o.kt)("h3",{id:"method-\u914d\u7f6e"},"method \u914d\u7f6e"),(0,o.kt)("p",null,"\u5728\u521b\u5efa method \u5b9e\u4f8b\u65f6\uff0c\u9664\u4e86 method \u4e2d\u901a\u7528\u7684\u914d\u7f6e\u9879\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.request"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.uploadFile"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.downloadFile"),"\u4e2d\u7684\u914d\u7f6e\u9879\uff0c\u6211\u4eec\u5df2\u7ecf\u5728\u7c7b\u578b\u4e2d\u53bb\u9664\u4e86\u548c method \u5b9e\u4f8b\u901a\u7528\u914d\u7f6e\u51b2\u7a81\u7684\u9879\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * Taro.request\u8bf7\u6c42\u989d\u5916\u53c2\u6570\n */\nexport type TaroRequestConfig = Omit<\n  Taro.request.Option,\n  'url' | 'data' | 'header' | 'method' | 'timeout' | 'success' | 'fail' | 'complete'\n>;\n\n/**\n * Taro.uploadFile\u989d\u5916\u53c2\u6570\n */\nexport type TaroUploadConfig = Omit<\n  Taro.uploadFile.Option,\n  'url' | 'filePath' | 'name' | 'header' | 'formData' | 'timeout' | 'success' | 'fail' | 'complete'\n>;\n\n/**\n * Taro.downloadFile\u989d\u5916\u53c2\u6570\n */\nexport type TaroDownloadConfig = Omit<\n  Taro.downloadFile.Option,\n  'url' | 'header' | 'timeout' | 'success' | 'fail' | 'complete'\n>;\n\n/**\n * \u5408\u5e76\u7684\u8bf7\u6c42\u914d\u7f6e\u53c2\u6570\n */\nexport type TaroConfig = {\n  /**\n   * \u8bf7\u6c42\u7c7b\u578b\uff0cupload\u8868\u793a\u4e0a\u4f20\uff0cdownload\u8868\u793a\u4e0b\u8f7d\uff0c\u4e0d\u586b\u5199\u8868\u793a\u6b63\u5e38\u8bf7\u6c42\n   */\n  requestType?: 'upload' | 'download';\n} & TaroRequestConfig &\n  TaroUploadConfig &\n  TaroDownloadConfig;\n")),(0,o.kt)("h3",{id:"\u54cd\u5e94\u6570\u636e"},"\u54cd\u5e94\u6570\u636e"),(0,o.kt)("p",null,"\u56e0\u4e3a taro \u8bf7\u6c42\u9002\u914d\u5668\u540c\u65f6\u517c\u5bb9\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.request"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.uploadFile"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.downloadFile"),"\uff0c\u4f46\u5b83\u4eec\u7684\u54cd\u5e94\u503c\u7c7b\u578b\u7a0d\u6709\u4e0d\u540c\uff0c\u6240\u4ee5\u54cd\u5e94\u6570\u636e\u7c7b\u578b\u662f\u8fd9\u6837\u7684\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type TaroResponse =\n  // Taro.request\u7684\u54cd\u5e94\u7c7b\u578b\n  | Taro.request.SuccessCallbackResult<any>\n\n  // Taro.uploadFile\u7684\u54cd\u5e94\u7c7b\u578b\n  | Taro.uploadFile.SuccessCallbackResult\n\n  // Taro.downloadFile\u7684\u54cd\u5e94\u7c7b\u578b\n  | Taro.downloadFile.FileSuccessCallbackResult;\n")),(0,o.kt)("p",null,"\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u9700\u8981\u5728\u5168\u5c40\u5904\u7406\u54cd\u5e94\u6570\u636e\uff0c\u5efa\u8bae\u5206\u5f00\u573a\u666f\u5224\u65ad\u8fd4\u56de\u6570\u636e\uff0c\u4e00\u4e2a\u7b80\u5355\u7684\u5b9e\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const alovaInst = createAlova(\n  baseURL: 'https://api.alovajs.org',\n  ...AdapterTaro(),\n  responded(response) {\n    const { statusCode, data } = response as Taro.request.SuccessCallbackResult<any>;\n    if (statusCode >= 400) {\n      throw new Error('\u8bf7\u6c42\u9519\u8bef');\n    }\n    return data || null;\n  }\n});\n")))}m.isMDXComponent=!0}}]);