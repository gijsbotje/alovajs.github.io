"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=l(n),f=r,p=h["".concat(c,".").concat(f)]||h[f]||d[f]||o;return n?a.createElement(p,s(s({ref:t},u),{},{components:n})):a.createElement(p,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(7462),r=n(7294),o=n(6010),s=n(2466),i=n(6550),c=n(1980),l=n(7392),u=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,l]=p({queryString:n,groupId:a}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=c??d;return f({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),l(e),m(e)}),[l,m,o]),tabValues:o}}var g=n(2389);const b="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:c,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),h=e=>{const t=e.currentTarget,n=u.indexOf(t),a=l[n].value;a!==i&&(d(t),c(a))},f=e=>{var t;let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:f,onClick:h},s,{className:(0,o.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=m(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},7967:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),s=n(5162);const i={title:"Data fetch",sidebar_position:30},c=void 0,l={unversionedId:"request-timing/use-fetcher",id:"request-timing/use-fetcher",title:"Data fetch",description:"When you have the following needs:",source:"@site/docs/04-request-timing/03-use-fetcher.md",sourceDirName:"04-request-timing",slug:"/request-timing/use-fetcher",permalink:"/request-timing/use-fetcher",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/04-request-timing/03-use-fetcher.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Data fetch",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Status Change Request",permalink:"/request-timing/use-watcher"},next:{title:"Response data management",permalink:"/category/response-data-management"}},u={},d=[{value:"Update views across modules/components",id:"update-views-across-modulescomponents",level:2},{value:"preload data",id:"preload-data",level:2},{value:"Force send request",id:"force-send-request",level:2},{value:"Set static value",id:"set-static-value",level:3},{value:"Dynamically set the force value",id:"dynamically-set-the-force-value",level:3},{value:"fetch function parameter passing rules",id:"fetch-function-parameter-passing-rules",level:2},{value:"Received in onSuccess, onError, onComplete callback functions",id:"received-in-onsuccess-onerror-oncomplete-callback-functions",level:3},{value:"Received in the force function",id:"received-in-the-force-function",level:3},{value:"Compare with useRequest and useWatcher",id:"compare-with-userequest-and-usewatcher",level:2}],h={toc:d};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you have the following needs:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Preload the data that will be used in the subsequent process and store it in the cache, so that users no longer wait for the data loading process;"),(0,r.kt)("li",{parentName:"ol"},"It is convenient to update data across pages (similar to the global state), for example, after modifying an item in the todo list and re-fetching the latest data, the interface will be refreshed after the response.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useFetcher")," is the hook used to implement the above scenarios. The response data obtained through it cannot be received directly, but the data fetched through it will not only update the cache, but also update the corresponding state, thereby re-rendering the view."),(0,r.kt)("p",null,"You can use it to pre-fetch data and save it in the cache, or gracefully update the state across components, such as modifying an item in the todo list and re-fetching the latest data, and the interface will be refreshed after the response"),(0,r.kt)("h2",{id:"update-views-across-modulescomponents"},"Update views across modules/components"),(0,r.kt)("p",null,"Next, let's modify a certain todo data, and re-fetch the latest todo list data to update the view."),(0,r.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  \x3c!-- Render the unified fetch state. --\x3e\n  <div v-if=\"fetching\">{{ Fetching data in background... }}</div>\n\n  \x3c!-- ... --\x3e\n  <button @click=\"handleSubmit\">Modify todo items</button>\n</template>\n\n<script setup>\n  const getTodoList = currentPage => {\n    return alovaInstance.Get('/todo/list', {\n      // Note: The name attribute is set here to filter out the required Method instance when the Method instance cannot be specified directly\n      // For details, see the subsequent \"Method Instance Matcher\" chapter\n      name: 'todoList',\n      params: {\n        currentPage,\n        pageSize: 10\n      }\n    });\n  };\n\n  const {\n    // The fetching attribute is the same as loading, it is true when a fetch request is sent, and it is false after the request ends\n    fetching,\n    error,\n    onSuccess,\n    onError,\n    onComplete,\n\n    // After calling fetch, a request to fetch data will be sent, and fetch can be called repeatedly to fetch data from different interfaces\n    fetch\n  } = useFetcher();\n\n  // Trigger the data fetch in the event\n  const handleSubmit = () => {\n    // todo item modification...\n\n    // Start to fetch the updated data\n    // Situation 1: When you clearly know that the data on the first page of todoList is fetched, pass in a Method instance\n    fetch(getTodoList(1));\n\n    // Situation 2: When you only know to fetch the last requested data of todoList, use the Method instance matcher to filter\n    fetch({\n      name: 'todoList',\n      filter: (method, index, ary) => {\n        // Return true to specify the Method instance that needs to be fetched\n        return index === ary.length - 1;\n      }\n    });\n  };\n<\/script>\n"))),(0,r.kt)(s.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const getTodoList = currentPage => {\nreturn alovaInstance. Get('/todo/list', {\n// Note: The name attribute is set here to filter out the required Method instance when the Method instance cannot be specified directly\n// For details, see the subsequent \"Method Instance Matcher\" chapter\nname: 'todoList',\nparams: {\ncurrentPage,\npageSize: 10\n}\n});\n};\n\nconst App = () => {\nconst {\n// The fetching attribute is the same as loading, it is true when a fetch request is sent, and it is false after the request ends\nfetching,\nerror,\nonSuccess,\nonError,\nonComplete,\n\n// After calling fetch, a request to fetch data will be sent, and fetch can be called repeatedly to fetch data from different interfaces\nfetch\n} = useFetcher();\n\n// Trigger the data fetch in the event\nconst handleSubmit = () => {\n// Assume the modification of the todo item has been completed...\n\n// Start to fetch the updated data\n// Situation 1: When you clearly know that the data on the first page of todoList is fetched, pass in a Method instance\nfetch(getTodoList(1));\n\n// Situation 2: When you only know to fetch the last requested data of todoList, use the Method instance matcher to filter\nfetch({\nname: 'todoList',\nfilter: (method, index, ary) => {\n// Return true to specify the Method instance that needs to be fetched\nreturn index === ary. length - 1;\n}\n});\n};\n\nreturn (\n{/* Render the unified fetch state */}\n{ fetching ? <div>{{ Fetching data in the background... }}</div> : null }\n{/* ... */}\n<button onClick={handleSubmit}>Modify todo items</button>\n);\n};\n"))),(0,r.kt)(s.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  const getTodoList = currentPage => {\n    return alovaInstance.Get('/todo/list', {\n      // Note: The name attribute is set here to filter out the required Method instance when the Method instance cannot be specified directly\n      // For details, see the subsequent \"Method Instance Matcher\" chapter\n      name: 'todoList',\n      params: {\n        currentPage,\n        pageSize: 10\n      }\n    });\n  };\n\n  const {\n    // The fetching attribute is the same as loading, it is true when a fetch request is sent, and it is false after the request ends\n    fetching,\n    error,\n    onSuccess,\n    onError,\n    onComplete,\n\n    // After calling fetch, a request to fetch data will be sent, and fetch can be called repeatedly to fetch data from different interfaces\n    fetch\n  } = useFetcher();\n\n  // Trigger the data fetch in the event\n  const handleSubmit = () => {\n    // Assume the modification of the todo item has been completed...\n\n    // Start to fetch the updated data\n    // Situation 1: When you clearly know that the data on the first page of todoList is fetched, pass in a Method instance\n    fetch(getTodoList(1));\n\n    // Situation 2: When you only know to fetch the last requested data of todoList, use the Method instance matcher to filter\n    fetch({\n      name: 'todoList',\n      filter: (method, index, ary) => {\n        // Return true to specify the Method instance that needs to be fetched\n        return index === ary.length - 1;\n      }\n    });\n  };\n<\/script>\n\n\x3c!-- Render a unified fetch state --\x3e\n{#if $fetching}\n<div>{{ fetching data in background... }}</div>\n{/if}\n\x3c!-- ... --\x3e\n<button on:click=\"{handleSubmit}\">Modify todo items</button>\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"See ",(0,r.kt)("a",{parentName:"p",href:"../next-step/method-instance-matcher"},"Method instance matcher")," for more usage methods of ",(0,r.kt)("inlineCode",{parentName:"p"},"Method")," instance matcher")),(0,r.kt)("h2",{id:"preload-data"},"preload data"),(0,r.kt)("p",null,"The following implements the preloading function of the next page of data in the paging scenario of the todo list."),(0,r.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  \x3c!-- ... --\x3e\n</template>\n\n<script setup>\n  // method instance creation function\n  const getTodoList = currentPage => {\n    return alovaInstance.Get('/todo/list', {\n      params: {\n        currentPage,\n        pageSize: 10\n      }\n    });\n  };\n\n  const { fetch } = useFetcher();\n\n  const currentPage = ref(1);\n  const { data, onSuccess } = useWatcher(() => getTodoList(currentPage.value), [currentPage], {\n    immediate: true\n  });\n\n  // Pre-fetch the data of the next page when the current page request is successful\n  // Realize that there is no need to wait for the request when turning the page to the next page\n  onSuccess(() => {\n    fetch(getTodoList(currentPage.value + 1));\n  });\n<\/script>\n"))),(0,r.kt)(s.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react';\n\n// method instance creation function\nconst getTodoList = currentPage => {\n  return alovaInstance.Get('/todo/list', {\n    params: {\n      currentPage,\n      pageSize: 10\n    }\n  });\n};\n\nconst App = () => {\n  const { fetch } = useFetcher();\n  const [currentPage, setCurrentPage] = useState(1);\n  const { data, onSuccess } = useWatcher(() => getTodoList(currentPage), [currentPage], {\n    immediate: true\n  });\n\n  // Pre-fetch the data of the next page when the current page request is successful\n  // Realize that there is no need to wait for the request when turning the page to the next page\n  onSuccess(() => {\n    fetch(getTodoList(currentPage + 1));\n  });\n\n  return {\n    /* ... */\n  };\n};\n"))),(0,r.kt)(s.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  import { writable } from 'svelte/store';\n\n  // method instance creation function\n  const getTodoList = currentPage => {\n    return alovaInstance.Get('/todo/list', {\n      params: {\n        currentPage,\n        pageSize: 10\n      }\n    });\n  };\n\n  const { fetch } = useFetcher();\n  const currentPage = writable(1);\n  const { data, onSuccess } = useWatcher(() => getTodoList($currentPage), [currentPage], {\n    immediate: true\n  });\n\n  // Pre-fetch the data of the next page when the current page request is successful\n  // Realize that there is no need to wait for the request when turning the page to the next page\n  onSuccess(() => {\n    fetch(getTodoList($currentPage + 1));\n  });\n<\/script>\n\n\x3c!-- views... --\x3e\n")))),(0,r.kt)("admonition",{title:"Notes",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"After the useFetcher request is completed, only the cache is updated, and if it is found that there is still a ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," state under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Method")," instance, it will also be updated synchronously, so as to ensure that the page data is consistent. This is ",(0,r.kt)("inlineCode",{parentName:"p"},"useFetcher")," used to update views across modules/components ensure.")),(0,r.kt)("h2",{id:"force-send-request"},"Force send request"),(0,r.kt)("p",null,"Same as ",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useWatcher"),", you can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"force")," parameter in ",(0,r.kt)("inlineCode",{parentName:"p"},"useFetcher")," to set whether to send the request."),(0,r.kt)("h3",{id:"set-static-value"},"Set static value"),(0,r.kt)("p",null,"force is false by default. When set to true, the cache will be penetrated every time and a request will be sent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"useFetcher({ force: true });\n")),(0,r.kt)("h3",{id:"dynamically-set-the-force-value"},"Dynamically set the force value"),(0,r.kt)("p",null,"In actual situations, we often need to set whether to force the request to be sent according to different situations. At this time, force can be set as a function, which can be passed in through the fetch function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"useFetcher({\n  force: isForce => {\n    return isForce;\n  }\n});\n")),(0,r.kt)("h2",{id:"fetch-function-parameter-passing-rules"},"fetch function parameter passing rules"),(0,r.kt)("p",null,"In the above example, the fetch function is called to trigger data fetching. The fetch function can also pass in custom parameters starting from the second parameter, and these parameters will be received by the following four functions:"),(0,r.kt)("h3",{id:"received-in-onsuccess-onerror-oncomplete-callback-functions"},"Received in onSuccess, onError, onComplete callback functions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"event.sendArgs")," in onSuccess, onError, and onComplete callback functions are received in the form of an array"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { fetch, onSuccess, onError, onComplete } = useFetcher();\nonSuccess(event => {\n  // The value of sendArgs is ['a', 'b']\n  console.log(event.sendArgs);\n});\nonError(event => {\n  // The value of sendArgs is ['a', 'b']\n  console.log(event.sendArgs);\n});\nonComplete(event => {\n  // The value of sendArgs is ['a', 'b']\n  console.log(event.sendArgs);\n});\n\n// fetch data\nfetch(getTodoList(10), 'a', 'b');\n")),(0,r.kt)("h3",{id:"received-in-the-force-function"},"Received in the force function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { fetch } = useFetcher({\n  force: isForce => {\n    // The value of isForce is true\n    return isForce;\n  }\n});\nfetch(getTodoList(10), true);\n")),(0,r.kt)("h2",{id:"compare-with-userequest-and-usewatcher"},"Compare with useRequest and useWatcher"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"useFetcher does not return the ",(0,r.kt)("inlineCode",{parentName:"li"},"data")," field, the pre-fetched data will be saved in the cache, and the status data of the corresponding location will be updated;"),(0,r.kt)("li",{parentName:"ol"},"Rename ",(0,r.kt)("inlineCode",{parentName:"li"},"loading")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"fetching"),";"),(0,r.kt)("li",{parentName:"ol"},"There is no ",(0,r.kt)("inlineCode",{parentName:"li"},"send")," function, but there is a ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch")," function, which can be reused to fetch data from different interfaces. At this time, you can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"fetching")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"error")," states to render views uniformly, so as to achieve unified processing the goal of;")))}f.isMDXComponent=!0}}]);