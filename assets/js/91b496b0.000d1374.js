"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={layout:"post",title:"CVE-2025-22828: Unauthorised access to annotations",tags:["announcement"],authors:["nux"],slug:"unauthorised-access-to-annotations"},s=void 0,c={permalink:"/blog/unauthorised-access-to-annotations",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2025-01-13-Unauthorised-access-to-annotations/index.md",source:"@site/blog/2025-01-13-Unauthorised-access-to-annotations/index.md",title:"CVE-2025-22828: Unauthorised access to annotations",description:"CVE-2025-22828: Unauthorised access to annotations",date:"2025-01-13T00:00:00.000Z",formattedDate:"January 13, 2025",tags:[{label:"announcement",permalink:"/blog/tags/announcement"}],hasTruncateMarker:!0,authors:[{name:"Nux",title:"PMC Member",url:"https://www.nux.ro",imageURL:"https://github.com/NuxRo.png",key:"nux"}],frontMatter:{layout:"post",title:"CVE-2025-22828: Unauthorised access to annotations",tags:["announcement"],authors:["nux"],slug:"unauthorised-access-to-annotations"},nextItem:{title:"Explore the Sessions from the CloudStack Collaboration Conference 2024!",permalink:"/blog/ccc-2024-roundup"}},i={authorsImageUrls:[void 0]},u=[{value:"CVE-2025-22828: Unauthorised access to annotations",id:"cve-2025-22828-unauthorised-access-to-annotations",level:2},{value:"Description:",id:"description",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"cve-2025-22828-unauthorised-access-to-annotations"},(0,o.kt)("a",{parentName:"h2",href:"https://www.cve.org/CVERecord?id=CVE-2025-22828"},"CVE-2025-22828"),": Unauthorised access to annotations"),(0,o.kt)("p",null,"Severity: Low"),(0,o.kt)("p",null,"Affected versions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Apache CloudStack 4.16.0 or later")),(0,o.kt)("h2",{id:"description"},"Description:"),(0,o.kt)("p",null,"CloudStack users can add and read comments (annotations) on resources they are authorised to access."))}d.isMDXComponent=!0}}]);