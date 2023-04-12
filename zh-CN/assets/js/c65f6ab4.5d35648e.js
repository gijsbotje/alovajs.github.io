"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),s=n(6550),u=n(1980),i=n(7392),c=n(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,i]=h({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=u??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),f(e)}),[i,f,o]),tabValues:o}}var g=n(2389);const b="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==s&&(d(t),u(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",v,null==l?void 0:l.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function T(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(T,(0,a.Z)({key:String(t)},e))}},9111:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const s={title:"\u7ba1\u7406\u989d\u5916\u7684\u72b6\u6001",sidebar_position:60},u=void 0,i={unversionedId:"next-step/manage-extra-states",id:"next-step/manage-extra-states",title:"\u7ba1\u7406\u989d\u5916\u7684\u72b6\u6001",description:"\u5728\u4e4b\u524d\u7684\u8de8\u9875\u9762/\u6a21\u5757\u66f4\u65b0\u54cd\u5e94\u72b6\u6001\u7ae0\u8282\u4e2d\uff0c\u4ecb\u7ecd\u4e86\u5982\u4f55\u8de8\u9875\u9762\u6216\u6a21\u5757\u66f4\u65b0\u54cd\u5e94\u72b6\u6001\uff0c\u4f46\u5728\u6b64\u7ae0\u8282\u4e2d\u6211\u4eec\u53ea\u4ecb\u7ecd\u4e86\u901a\u8fc7updateState\u66f4\u65b0\u5728useRequest\u548cuseWatcher\u4e2d\u8fd4\u56de\u7684data\u72b6\u6001\uff0cdata \u7684\u503c\u603b\u662f\u548c\u54cd\u5e94\u6570\u636e\u4e00\u81f4\uff0c\u4f46\u5728\u5f88\u591a\u60c5\u51b5\u4e0b\u6211\u4eec\u4f1a\u4f7f\u7528\u989d\u5916\u7684\u72b6\u6001\u6765\u5c55\u793a\uff08\u5982\u72b6\u6001 A\uff09\u6570\u636e\uff0c\u5e76\u5728\u8bf7\u6c42\u6210\u529f\u540e\u5c06 data \u6570\u636e\u9644\u52a0\u5230\u989d\u5916\u7684\u72b6\u6001 A \u4e2d\uff0c\u5982\u4e0b\u62c9\u52a0\u8f7d\u7684\u5206\u9875\u65b9\u6848\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5c31\u9700\u8981\u5c06\u989d\u5916\u7684\u72b6\u6001 A \u8fdb\u884c\u7ba1\u7406\uff0c\u4fbf\u4e8e\u5b9e\u73b0\u8de8\u9875\u9762/\u6a21\u5757\u66f4\u65b0\u5b83\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/06-next-step/06-manage-extra-states.md",sourceDirName:"06-next-step",slug:"/next-step/manage-extra-states",permalink:"/zh-CN/next-step/manage-extra-states",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/06-next-step/06-manage-extra-states.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"\u7ba1\u7406\u989d\u5916\u7684\u72b6\u6001",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u52a8\u5931\u6548\u7f13\u5b58",permalink:"/zh-CN/next-step/auto-invalidate-cache"},next:{title:"\u5e76\u884c\u8bf7\u6c42",permalink:"/zh-CN/next-step/parallel-request"}},c={},d=[{value:"\u66f4\u65b0\u5355\u4e2a\u72b6\u6001",id:"\u66f4\u65b0\u5355\u4e2a\u72b6\u6001",level:2},{value:"\u66f4\u65b0\u591a\u4e2a\u72b6\u6001",id:"\u66f4\u65b0\u591a\u4e2a\u72b6\u6001",level:2},{value:"data \u72b6\u6001\u66f4\u65b0\u7684\u7b80\u5199",id:"data-\u72b6\u6001\u66f4\u65b0\u7684\u7b80\u5199",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u4e4b\u524d\u7684",(0,r.kt)("a",{parentName:"p",href:"/learning/update-response-data-across-modules"},"\u8de8\u9875\u9762/\u6a21\u5757\u66f4\u65b0\u54cd\u5e94\u72b6\u6001"),"\u7ae0\u8282\u4e2d\uff0c\u4ecb\u7ecd\u4e86\u5982\u4f55\u8de8\u9875\u9762\u6216\u6a21\u5757\u66f4\u65b0\u54cd\u5e94\u72b6\u6001\uff0c\u4f46\u5728\u6b64\u7ae0\u8282\u4e2d\u6211\u4eec\u53ea\u4ecb\u7ecd\u4e86\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"updateState"),"\u66f4\u65b0\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"useWatcher"),"\u4e2d\u8fd4\u56de\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\u72b6\u6001\uff0cdata \u7684\u503c\u603b\u662f\u548c\u54cd\u5e94\u6570\u636e\u4e00\u81f4\uff0c\u4f46\u5728\u5f88\u591a\u60c5\u51b5\u4e0b\u6211\u4eec\u4f1a\u4f7f\u7528\u989d\u5916\u7684\u72b6\u6001\u6765\u5c55\u793a\uff08\u5982\u72b6\u6001 A\uff09\u6570\u636e\uff0c\u5e76\u5728\u8bf7\u6c42\u6210\u529f\u540e\u5c06 data \u6570\u636e\u9644\u52a0\u5230\u989d\u5916\u7684\u72b6\u6001 A \u4e2d\uff0c\u5982\u4e0b\u62c9\u52a0\u8f7d\u7684\u5206\u9875\u65b9\u6848\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5c31\u9700\u8981\u5c06\u989d\u5916\u7684\u72b6\u6001 A \u8fdb\u884c\u7ba1\u7406\uff0c\u4fbf\u4e8e\u5b9e\u73b0\u8de8\u9875\u9762/\u6a21\u5757\u66f4\u65b0\u5b83\u3002"),(0,r.kt)("h2",{id:"\u66f4\u65b0\u5355\u4e2a\u72b6\u6001"},"\u66f4\u65b0\u5355\u4e2a\u72b6\u6001"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5728 use hook \u8c03\u7528\u65f6\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"managedStates"),"\u7ba1\u7406\u989d\u5916\u7684\u72b6\u6001\uff0c\u5e76\u5728\u5176\u4ed6\u6a21\u5757/\u9875\u9762\u4e2d\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"updateState"),"\u65f6\uff0c\u81ea\u52a8\u6307\u5b9a\u72b6\u6001\u540d\u79f0\u6765\u66f4\u65b0\u5b83\u3002"),(0,r.kt)(o.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// a.vue\nconst todoList = page =>\n  alova.Get('/todo', {\n    name: 'todoList'\n  });\n\nconst allTodo = ref([]);\nuseRequest(todoList, {\n  // ...\n\n  // highlight-start\n  // \u5c06allTodo\u4f5c\u4e3a\u989d\u5916\u7684\u72b6\u6001\u8fdb\u884c\u7ba1\u7406\n  managedStates: {\n    allTodo\n  }\n  // highlight-end\n});\n\n// b.vue\n// ...\nconst handleSuccess = () => {\n  // highlight-start\n  // \u4f20\u5165\u4e00\u4e2a\u5bf9\u8c61\u5e76\u6307\u5b9a\u72b6\u6001\u540d\u6765\u67e5\u627e\n  updateState('todoList', {\n    allTodo: allTodoData => {\n      // \u65b0\u589e\u4e00\u6761todo\u9879\n      allTodoData.push({\n        title: 'new todo',\n        time: '10:00'\n      });\n      return allTodoData;\n    }\n  });\n  // highlight-end\n};\n"))),(0,r.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// a.jsx\nconst PageA = () => {\n  const todoList = page =>\n    alova.Get('/todo', {\n      name: 'todoList'\n    });\n\n  const [allTodo, setAllTodo] = allTodoState = useState([]);\n  useRequest(todoList, {\n    // ...\n\n    // highlight-start\n    // \u5c06allTodo\u4f5c\u4e3a\u989d\u5916\u7684\u72b6\u6001\u8fdb\u884c\u7ba1\u7406\n    managedStates: {\n      allTodo: allTodoState\n    }\n    // highlight-end\n  });\n\n  return (\n    // ...\n  );\n}\n\n// b.jsx\nconst PageB = () => {\n  // ...\n  const handleSuccess = () => {\n    // highlight-start\n    // \u4f20\u5165\u4e00\u4e2a\u5bf9\u8c61\u5e76\u6307\u5b9a\u72b6\u6001\u540d\u6765\u67e5\u627e\n    updateState('todoList', {\n      allTodo: allTodoData => {\n        // \u65b0\u589e\u4e00\u6761todo\u9879\n        allTodoData.push({\n          title: 'new todo',\n          time: '10:00'\n        });\n        return allTodoData;\n      }\n    });\n    // highlight-end\n  };\n\n  return (\n    // ...\n  );\n}\n"))),(0,r.kt)(l.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// a.svelte\nconst todoList = page =>\n  alova.Get('/todo', {\n    name: 'todoList'\n  });\n\nconst allTodo = ref([]);\nuseRequest(todoList, {\n  // ...\n\n  // highlight-start\n  // \u5c06allTodo\u4f5c\u4e3a\u989d\u5916\u7684\u72b6\u6001\u8fdb\u884c\u7ba1\u7406\n  managedStates: {\n    allTodo\n  }\n  // highlight-end\n});\n\n// b.svelte\n// ...\nconst handleSuccess = () => {\n  // highlight-start\n  // \u4f20\u5165\u4e00\u4e2a\u5bf9\u8c61\u5e76\u6307\u5b9a\u72b6\u6001\u540d\u6765\u67e5\u627e\n  updateState('todoList', {\n    allTodo: allTodoData => {\n      // \u65b0\u589e\u4e00\u6761todo\u9879\n      allTodoData.push({\n        title: 'new todo',\n        time: '10:00'\n      });\n      return allTodoData;\n    }\n  });\n  // highlight-end\n};\n")))),(0,r.kt)("h2",{id:"\u66f4\u65b0\u591a\u4e2a\u72b6\u6001"},"\u66f4\u65b0\u591a\u4e2a\u72b6\u6001"),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\u6211\u4eec\u5b9e\u73b0\u4e86\u8de8\u9875\u9762\u5bf9\u5355\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"allTodo"),"\u72b6\u6001\u8fdb\u884c\u66f4\u65b0\uff0c\u5b9e\u9645\u4e0a\uff0c\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"updateState"),"\u7684\u5bf9\u8c61\u63cf\u8ff0\u65b9\u5f0f\u53ef\u4ee5\u540c\u65f6\u66f4\u65b0\u4efb\u610f\u591a\u4e2a\u72b6\u6001\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"updateState('todoList', {\n  state1: state1Data => {\n    // ...\n  },\n  state2: state2Data => {\n    // ...\n  },\n  state3: state3Data => {\n    // ...\n  }\n  // ...\n});\n")),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4ee5\u4e0a 3 \u4e2a\u989d\u5916\u7684\u72b6\u6001\u5728\u66f4\u65b0\u524d\uff0c\u9700\u8981\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"managedStates"),"\u5c5e\u6027\u6765\u7ba1\u7406\u8d77\u6765\u3002"),(0,r.kt)("h2",{id:"data-\u72b6\u6001\u66f4\u65b0\u7684\u7b80\u5199"},"data \u72b6\u6001\u66f4\u65b0\u7684\u7b80\u5199"),(0,r.kt)("p",null,"\u5f53\u53ea\u66f4\u65b0 data \u72b6\u6001\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f20\u5165\u56de\u8c03\u51fd\u6570\u5373\u53ef\uff0c\u800c\u4e0d\u9700\u8981\u6307\u5b9a\u4e3a\u5bf9\u8c61\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"updateState('todoList', {\n  data: dataRaw => {\n    // ...\n  }\n});\n\n// \u4ee5\u4e0b\u4e3a\u7b80\u5199\nupdateState('todoList', dataRaw => {\n  // ...\n});\n")))}m.isMDXComponent=!0}}]);