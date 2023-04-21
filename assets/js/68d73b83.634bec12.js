"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[74],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,A=function(e,t){if(null==e)return{};var r,a,A={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(A[r]=e[r]);return A}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(A[r]=e[r])}return A}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,A=e.mdxType,n=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=i(r),d=A,c=m["".concat(l,".").concat(d)]||m[d]||u[d]||n;return r?a.createElement(c,s(s({ref:t},p),{},{components:r})):a.createElement(c,s({ref:t},p))}));function d(e,t){var r=arguments,A=t&&t.mdxType;if("string"==typeof e||A){var n=r.length,s=new Array(n);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:A,s[1]=o;for(var i=2;i<n;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},663:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>i});var a=r(7462),A=(r(7294),r(3905));const n={id:"brush",title:"Brush",sidebar_label:"Brush"},s=void 0,o={unversionedId:"concepts/brush",id:"concepts/brush",title:"Brush",description:"Brushes can be used to easily draw complex shapes and patterns, without having to copy and paste them. The user can also change their color and size.",source:"@site/docs/concepts/brush.md",sourceDirName:"concepts",slug:"/concepts/brush",permalink:"/Pixelorama-Docs/concepts/brush",draft:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/concepts/brush.md",tags:[],version:"current",lastUpdatedBy:"yoyoyodog123",lastUpdatedAt:1682075135,formattedLastUpdatedAt:"Apr 21, 2023",frontMatter:{id:"brush",title:"Brush",sidebar_label:"Brush"},sidebar:"docs",previous:{title:"Transforming",permalink:"/Pixelorama-Docs/user_manual/transforming"},next:{title:"Cel",permalink:"/Pixelorama-Docs/concepts/cel"}},l={},i=[{value:"Brush Types",id:"brush-types",level:2},{value:"Making Your Own Custom Brushes",id:"making-your-own-custom-brushes",level:2},{value:"File Brushes",id:"file-brushes",level:3},{value:"Random Brushes",id:"random-brushes",level:3},{value:"Project Brushes",id:"project-brushes",level:3}],p={toc:i};function u(e){let{components:t,...n}=e;return(0,A.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("p",null,"Brushes can be used to easily draw complex shapes and patterns, without having to copy and paste them. The user can also change their color and size."),(0,A.kt)("h2",{id:"brush-types"},"Brush Types"),(0,A.kt)("p",null,"Pixelorama comes with three default brushes, the usual pixel/square brush, a hollow circle and a filled circle brush. These brushes are based on algorithms, while all of the other brushes as of right now are based on image data. The main difference is that the image-based brushes are scaled the same way that images are being scaled, which may not always have the result we desire. The image-based brushes are also divided into two types, File brushes and Project brushes. File brushes are being stored as external ",(0,A.kt)("inlineCode",{parentName:"p"},".png")," files, while project brushes are stored in the ",(0,A.kt)("a",{parentName:"p",href:"project"},"project")," itself. File brushes can also be Random brushes. Each time you draw using a random brush, the result will be something different!"),(0,A.kt)("p",null,'Image-based brushes will also have one extra option in the tool settings; a "Brush Color From" slider which goes from 0 to 100. If it\'s set to 0, the resulting color(s) of the brush will come entirely from the image data themselves. Otherwise, if set to 100, the brush color will come from the currently selected color. This setting is important to have because, since image-based brushes rely on image data, this means that they also get to keep the original colors of the image data.'),(0,A.kt)("h2",{id:"making-your-own-custom-brushes"},"Making Your Own Custom Brushes"),(0,A.kt)("h3",{id:"file-brushes"},"File Brushes"),(0,A.kt)("p",null,"Pixelorama gives you the option to create your own custom brushes, which you can later use to draw. There are two brush types, File and Project brushes. File brushes are ",(0,A.kt)("inlineCode",{parentName:"p"},".png")," files saved in the ",(0,A.kt)("inlineCode",{parentName:"p"},"pixelorama_data/Brushes"),' directory. They are available for all projects. To create a "File" custom brush, all you need to do is create your brush, and save it as a ',(0,A.kt)("inlineCode",{parentName:"p"},".png")," file in the ",(0,A.kt)("inlineCode",{parentName:"p"},"pixelorama_data/Brushes"),' directory. They will be found on the "File" tab.'),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"File brushes tab",src:r(943).Z,width:"241",height:"149"})),(0,A.kt)("h3",{id:"random-brushes"},"Random Brushes"),(0,A.kt)("p",null,"To make a random brush, save your sprites as multiple ",(0,A.kt)("inlineCode",{parentName:"p"},".png")," files, with ",(0,A.kt)("inlineCode",{parentName:"p"},'"~"')," at the beginning of their filename, and save them in the same sub-directory. For example, if you want to save a grass random brush, you can create a ",(0,A.kt)("inlineCode",{parentName:"p"},"pixelorama_data/Brushes/Grass")," directory, and name the files something like ",(0,A.kt)("inlineCode",{parentName:"p"},"~Grass1.png"),", ",(0,A.kt)("inlineCode",{parentName:"p"},"~Grass2.png"),", ",(0,A.kt)("inlineCode",{parentName:"p"},"~Grass3.png"),", ",(0,A.kt)("inlineCode",{parentName:"p"},"~Grass4.png"),", and so on. The more files you add, the more variation (random values) your random brush will have."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Random brush files",src:r(977).Z,width:"518",height:"76"})),(0,A.kt)("h3",{id:"project-brushes"},"Project Brushes"),(0,A.kt)("p",null,"Project brushes are project-dependent, which means that they're not available for all projects. They are saved inside ",(0,A.kt)("inlineCode",{parentName:"p"},".pxo")," files. To create a Project brush you can ",(0,A.kt)("a",{parentName:"p",href:"../user_manual/selecting"},"select")," the part of the drawing you want to save as brush, and press ",(0,A.kt)("kbd",null,"Control + B"),' or go to Edit, New Brush. They will be found on the "Project" tab.'),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Project brushes tab",src:r(1773).Z,width:"226",height:"144"})))}u.isMDXComponent=!0},943:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"},977:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgYAAABMCAMAAAAhvY+xAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAmVBMVEUgICAfHx+TrgBsgAAdHR1ETBcaGhoYGBgcHBwXFxcgTJne////////3plMICAgdLz//7x0ICB0vP/emUwgIEyZ3v+8dCBMmd7e/96ZTCB0vLz/vLy8/7yZdCAgIHS8/950dCDe/7y8//+Z3t68mZne3pl0vN68vN7/vHSZdJmZmbzemZnevHT//96Z3ry8dHQgdHT/3ry83t49H5H4AAAAAWJLR0QMgbNRYwAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAd0SU1FB+UHEBQKLlVyRfcAAANUSURBVHja7ZmLVuIwEIbThIjUrAUK1O6luOxFdlf39v4PtzNJ8XLUHoHOrOj/HWg91pOPSf9OGzQGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD/kd0CptdqyozlnaPXQLaSLFpI54y4ybU/idfk0552KqZYl4SJYuDjqTHuaCAeA28cu6RNLk6YN168JiqIPFSXkTfZOIEypsy6TQyGx9InJ8aANvImb12MgbSJC4oxEDeZdJooBxImjgFVwhfPSCMGnmMgbvKWTw9VJm2icmxqcSOlGDiR2cssnxgqRiEGto2BU4qBfWkxcPGCFYwBObz8lHH75HmTNlFNlDcuTCHaSjGw3scYWCcZA6cSA5dqUYiBd1oxSN3Uq8XAS8XAK8Ugzhm1thcUA5uajrcKgeNG+mJiwOXI950UA48YbBkDeg3VYjBUi8FQJQb0Fq/pJgYiC8bB0XAUGUp/AQLT8zVl2eC4RfrrUJiesQn/hoEJAAAAAK+e/CSEN6cPHyvGEx3TNIRSxTSbh7BQmj1TPXqkX1MVwr4nKj+rjXk7eXjK3r3vMQYdpvyDaZa1hqk5N/nHiYaJXKseY9Blmu4d7Nm8a4imxxh0m8zsU61k6rGoblP1+cupiunr3lO3uTSa5cV4Qq15ndpm2zvbGWuW306oaTfL77F3U3v6sf21221qVRqmYq1TU36ZxxiIm3hT7lcTf9IqXNXNqh2ojrOUpuo6BtTdqCk1qzU/LTSrhamuti+k02SmpY6pCmujYqL21sZAYfbSLXUHU0FPFfllShkNEscpAonykxik8nYM+OB0wTt68yfa5k7+FNNsXhodE/0mTo24qSrNphvI15Suou1Ns58T6hmL9Hft8KSKd+iKe2d156ZQ881pt0KeYrp+MBA3XT9RSZt+rUJIj/YHUVNFS412+CK2FBODnDYcAz5InYjc7fA7trUu0+Z2LW/6vTkibkqdXMt0tm9N1GHiYwUHKfz5Wxe8CC3SSnQTg+VFaBMZP0bY5SGny1TxlVNqmHj1vVCp6SYG0qZm1W9Njy6x7g3W59obpgMx3R9+2uf3YzAdhunu8LxMHcvEGaYDMQEAAAAAAAAAAAAAAAAAAAAAAAAAAABeH/8AhpObGP9JKO8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDctMTZUMjA6MTA6MzkrMDA6MDC+SnKDAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA3LTE2VDIwOjEwOjM5KzAwOjAwzxfKPwAAAABJRU5ErkJggg=="},1773:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOIAAACQCAMAAAAiJEcvAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABdFBMVEUkJCT///8jIyMWFhYVFRUUFBQXFxcREREdHR0cHBwYGBhdXV0rKyshISEgICDGxsa+vr6ZmZk5OTkeHh40NDQfHx9WVlYZGRkwMDAlJSVzc3Ovr682Njaurq6lpaVQUFAqKipRUVFaWlpKSkptbW20tLQ6Ojq4uLiTk5Orq6vAwMCfn587Ozs1NTW8vLxOTk6/v78xMTFXV1eWlpYtLS0zMzNsbGykpKRFRUVISEhSUlJHR0eenp4/Pz/ExMQoKChmZmazs7MiIiJpaWmRkZE3Nzd9fX2Ojo6pqalGRkZVVVW3t7djY2OVlZVERERgYGC1tbUmJiYAAACmpqYyMjJJSUlfX1+wsLCYmJheXl6ysrKNjY2np6dTU1OsrKwvLy8aGhonJycuLi5YWFhDQ0N1dXWhoaFhYWHCwsJvb2+JiYksLCxbW1spKSnBwcGjo6NAQECqqqqtra1kZGRra2tMTExubm6QkJCoqKg9PT1imv/78jb9Gp0zAAAAAWJLR0QB/wIt3gAAAAd0SU1FB+UHEBQKMdh6SAIAAAMHSURBVHja7d1pV9pAFAbgABomLgQriBQRsBSRylKrbdPNVm2LCFVbtfu+0c3um/3znSDlhEISSFCS4X2/JOQwJ/c5uRlmPsFxDs1wcpyuPpdq+vlW0u8mBuOulGCizJbGkj6t4i1DVClTZ+j+YMHVdaKJMkEEseeIA4NyhvhhXhjUIHpEUfSOHFEyRn22IfrlAxkL6BDHSfBoSMmYCNezJiPWJtLoEklQjGo0p9WJ1CcTh2JTx/xqRC5+nCSmk2ESmUmdmCXpDCHZmdzISTIXSp2az4livHvEhdNnzmq+i1KV6D/nDEycV3sXcxcuksSlsUWfNxu8fMVJiePhxNLyylWvFLx23fxTVJbZ7th8PLTa0lNckL0F1UalSawRUizRk9ANSlyncHGjuELIpmSeqCyzfuzN/Wh2wK3WiFvbmu9ilbiTpCe3tylx54587S4leub1iO2VaXhs+t5974NZ/uEjFeLw1OMnT5/pEbcyWa44LTdqOvWce1HwZVa5lyXy6rWnQ0RapvGxZcnzJjzAv1Wbbt7F3kc+6BFJNr/78VNluol9LuclUviyW4qSr6lvnSKWJeNj16gpFeWXOrG6kYlt/PS3V6YpYqAc5Tc7QBz9vmFJYlny/6CNmuwAcS63fGBEM42a+en99Ztfn+zCMry9Mg0vG+RGtcFOo6FRQewxInb9ViK6DyuGiWbDGb61XQIiiDYjNk5SQvVY/cLev/xRpnZ1z+rEJtOwINRO2SQqgGwQHdpEB4i2JAr1Hxkk/idkkCiAyALRwTqxQdgrREEnNiIKjcIKscmDq3ukIFqsUQXmiY1IBonN1qjMEevnVRBBBLF7043A7uqmiRC7fhCxJcZ+8WB2GqwThWa/kQwQiTaRgGgLYg2psuVngshsQAQRRBBBBBFEEEEEEUQQQQQRRBBBBBFEEEEEEUQQQQQRRBBBBBFEEEEEEUQQQQQRRBBBBBFEEEEEEUQQQQQRRBBBBBFEEEEEEUQQQQQRRBBBBBFEEEEE8ZCIzIfrQkgL/0tFOne7vzVwm2HkD243AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA3LTE2VDIwOjEwOjM5KzAwOjAwvkpygwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNy0xNlQyMDoxMDozOSswMDowMM8Xyj8AAAAZdEVYdFNvZnR3YXJlAGdub21lLXNjcmVlbnNob3TvA78+AAAAAElFTkSuQmCC"}}]);