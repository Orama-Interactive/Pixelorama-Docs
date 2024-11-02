"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[801],{8218:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=a(4848),s=a(8453);const o={id:"shading",title:"Shading",sidebar_label:"Shading"},n=void 0,r={id:"user_manual/shading",title:"Shading",description:"Pixelorama's shading tool can be used to easily add lighting and shadows to the artwork. You can use it the same way you use the Pencil or Eraser tools, you mouse press on where the pixels of the sprite where you want to apply the shading. Similar to Pencil and Eraser, you can change the affected area size and brush. As of right now, there are two modes of shading, Simple Shading and Hue Shifting, which you can switch from the tool's options.",source:"@site/docs/user_manual/shading.md",sourceDirName:"user_manual",slug:"/user_manual/shading",permalink:"/Pixelorama-Docs/user_manual/shading",draft:!1,unlisted:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/shading.md",tags:[],version:"current",lastUpdatedBy:"Variable",lastUpdatedAt:1730557813e3,frontMatter:{id:"shading",title:"Shading",sidebar_label:"Shading"},sidebar:"docs",previous:{title:"Selecting",permalink:"/Pixelorama-Docs/user_manual/selecting"},next:{title:"Shortcut settings",permalink:"/Pixelorama-Docs/user_manual/shortcut_settings"}},h={},l=[{value:"Simple Shading",id:"simple-shading",level:2},{value:"Hue Shifting",id:"hue-shifting",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Pixelorama's shading tool can be used to easily add lighting and shadows to the artwork. You can use it the same way you use the ",(0,i.jsx)(t.a,{href:"drawing",children:"Pencil or Eraser tools"}),", you mouse press on where the pixels of the sprite where you want to apply the shading. Similar to Pencil and Eraser, you can change the affected area size and brush. As of right now, there are two modes of shading, Simple Shading and Hue Shifting, which you can switch from the tool's options."]}),"\n",(0,i.jsx)(t.h2,{id:"simple-shading",children:"Simple Shading"}),"\n",(0,i.jsxs)(t.p,{children:["This is a fairly straightforward method of shading. You can choose to either lighten or darken the area where you clicked, as well as the shading value. The bigger the number, the more shading will be applied. All it does is simply increase (with lighting) or decrease (with shading) the ",(0,i.jsx)(t.code,{children:"Value"})," of the pixel's colors, which represents the color's brightness. It essentially just makes the same colors brighter or darker."]}),"\n",(0,i.jsx)(t.h2,{id:"hue-shifting",children:"Hue Shifting"}),"\n",(0,i.jsxs)(t.p,{children:["Hue Shifting is a bit more complex than Simple Shading. Instead of just shifting the ",(0,i.jsx)(t.code,{children:"Value"})," of the color, we also shift their ",(0,i.jsx)(t.code,{children:"Hue"})," and ",(0,i.jsx)(t.code,{children:"Saturation"})," too. When we are brightening the colors, we shift their hue to move towards yellow (the limit is set to roughly 60 Hue), decrease their saturation and increase their value. On the contrary, when we are darkening the colors, their hue shifts towards blue (the limit is set to roughly 240 Hue), their saturation increases and their value decreases. This is all done automatically by the Shading tool, but you can also configure the amount the Hue, Saturation and Value change from the tool options."]}),"\n",(0,i.jsx)(t.p,{children:"Here is a video by Brandon James Greer that explains the concept of hue shifting."}),"\n",(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/PNtMAxYaGyg?si=zuahArZTx17avYvN",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,i.jsx)(t.admonition,{title:"hue shifting limits",type:"caution",children:(0,i.jsxs)(t.p,{children:["The hue shifting mode does not always change the hue, saturation and value of the colors exactly as much as the values have been set by the user. For example, a color with a hue of 70 and the shading tool set to hue shifting, lighten and a hue of, let's say, 20, will not result in a color with a hue of 50 (because 70 - 20 = 50), but it will rather stay limited to 60, as this is the hard limit of lighting. Similarly, the hard hue limit of darkening is 240. If you want to exactly change the HSV values of a color, you can use the ",(0,i.jsx)(t.code,{children:"Adjust Hue/Saturation/Value"})," image effect under the Image menu."]})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>r});var i=a(6540);const s={},o=i.createContext(s);function n(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);