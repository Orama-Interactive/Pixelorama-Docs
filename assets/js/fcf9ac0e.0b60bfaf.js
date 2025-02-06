"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[512],{4997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"user_manual/transforming","title":"Transforming","description":"Currently, there are three types of transformations in Pixelorama. Translation (moving), scale and rotation. Transformations can either affect the currently active entire cels, or selections.","source":"@site/docs/user_manual/transforming.md","sourceDirName":"user_manual","slug":"/user_manual/transforming","permalink":"/Pixelorama-Docs/user_manual/transforming","draft":false,"unlisted":false,"editUrl":"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/transforming.md","tags":[],"version":"current","lastUpdatedBy":"Emmanouil Papadeas","lastUpdatedAt":1738803239000,"frontMatter":{"id":"transforming","title":"Transforming","sidebar_label":"Transforming"},"sidebar":"docs","previous":{"title":"Tools","permalink":"/Pixelorama-Docs/user_manual/tools"},"next":{"title":"Brush","permalink":"/Pixelorama-Docs/concepts/brush"}}');var s=n(4848),i=n(8453);const a={id:"transforming",title:"Transforming",sidebar_label:"Transforming"},r=void 0,l={},c=[{value:"Move",id:"move",level:2},{value:"Scale",id:"scale",level:2},{value:"Rotate",id:"rotate",level:2},{value:"Having An Active Transformation",id:"having-an-active-transformation",level:2},{value:"Applying A Transformation",id:"applying-a-transformation",level:3},{value:"Canceling A Transformation",id:"canceling-a-transformation",level:3}];function h(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Currently, there are three types of transformations in Pixelorama. Translation (moving), scale and rotation. Transformations can either affect the currently active entire cels, or ",(0,s.jsx)(t.a,{href:"selecting",children:"selections"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Keep in mind that ",(0,s.jsx)(t.strong,{children:"any content moved outside the canvas boundaries will be lost"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"move",children:"Move"}),"\n",(0,s.jsxs)(t.p,{children:["To move pixels around in the canvas, you can use the Move tool. It works by simply holding the mapped mouse button and dragging the cursor to where you want to move the content. If there is no active selection, it will move the entire content of the active cels. If there is a selection, it will start a selection transformation, and it will move both the selection itself and its content. To move a selection, it is also possible to use a selection tool and click inside the selected area and, while the mapped mouse button is being held, drag the cursor, just like you do with the Move tool. There are some keyboard shortcuts that can help you with movement. ",(0,s.jsx)(t.strong,{children:"The order of the key press and mouse button press matters for the selection tools."})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Mouse movement + ",(0,s.jsx)("kbd",{children:"Shift"})," = Moves & snaps selection to an axis."]}),"\n",(0,s.jsxs)(t.li,{children:["Mouse movement + ",(0,s.jsx)("kbd",{children:"Control"})," = Moves & snaps selection to the rectangular grid."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)("kbd",{children:"Alt"})," + Mouse movement = Moves selection without content. ",(0,s.jsx)(t.strong,{children:"This only works for the selection tools and not the Move tool."})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)("kbd",{children:"Control"})," + ",(0,s.jsx)("kbd",{children:"Alt"})," + mouse movement = Copies selection and moves it without cutting it from the original position. This is basically a quick way to copy and move stuff around without ",(0,s.jsx)("kbd",{children:"Control + C"})," and ",(0,s.jsx)("kbd",{children:"Control + V"}),". ",(0,s.jsx)(t.strong,{children:"This only works for the selection tools and not the Move tool."})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["If you have a selection tool active, you can also use the arrow keys to move the selection and contents. Pressing ",(0,s.jsx)("kbd",{children:"Alt"})," only moves the selection without content, and holding ",(0,s.jsx)("kbd",{children:"Control"})," moves the selection by the size of the rectangular grid tiles. You can also manually change the position of the selection from the tool options. If there is an active transformation, the content will be affected as well, otherwise, it will only move the selection itself without its content."]}),"\n",(0,s.jsx)(t.h2,{id:"scale",children:"Scale"}),"\n",(0,s.jsxs)(t.p,{children:["To resize your image, you can go to the Image menu and select ",(0,s.jsx)(t.strong,{children:"Scale Image"}),". There you can choose the new size of your entire ",(0,s.jsx)(t.a,{href:"../concepts/project",children:"project"}),". You can also just expand the canvas without affecting the content that is inside by going to the Image menu and pressing ",(0,s.jsx)(t.strong,{children:"Resize Canvas"}),". Furthermore, you can go to Image -> Crop Image, which will remove all of the transparent pixels that surround your drawing, by shrinking the size of the image. Of course, all of these options will affect all of the cels of the project."]}),"\n",(0,s.jsxs)(t.p,{children:["If you want you resize only selected part(s) of your artwork, you can create a ",(0,s.jsx)(t.a,{href:"selecting",children:"selection"})," and use one of the eight gizmos that appear on each side of the selection borders. To use them, you can simply left-click on them, hold, then move your cursor. Moving it outwards will expand the size, while moving it inwards will shrink it. Using gizmos will start a selection transformation. Like with movement, there are some keyboard shortcuts you can use to give you more control over the transformation."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Mouse click + ",(0,s.jsx)("kbd",{children:"Shift"})," = Keeps the original aspect ratio of the selection."]}),"\n",(0,s.jsxs)(t.li,{children:["Mouse click + ",(0,s.jsx)("kbd",{children:"Control"})," = Expands from the center."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)("kbd",{children:"Alt"})," + Mouse click = Only affects the selection and not the content."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You can also manually change the size of the selection from the tool options. If there is an active transformation, the content will be affected as well, otherwise, it will only scale the selection itself without its content."}),"\n",(0,s.jsx)(t.h2,{id:"rotate",children:"Rotate"}),"\n",(0,s.jsx)(t.p,{children:"To rotate your image, you can go to the Image menu and select Rotate Image. There, you can choose one of the three rotation algorithms. You can experiment with every one of them to see what works best for you. You are also given the option to only affect the selected part of the image or the entire area of the active cels. In the future, there will most likely be gizmos that rotate the selection directly, just like there are for scaling."}),"\n",(0,s.jsx)(t.h2,{id:"having-an-active-transformation",children:"Having An Active Transformation"}),"\n",(0,s.jsx)(t.p,{children:"When moving or scaling a selection with its contents, the selected pixels will suddenly become transparent. This indicates that a selection transformation has started. This means that your changes haven't yet been applied to the image. When there is an active transformation, moving and scaling will only affect the transformed content and nothing else, until it is applied."}),"\n",(0,s.jsx)(t.h3,{id:"applying-a-transformation",children:"Applying A Transformation"}),"\n",(0,s.jsxs)(t.p,{children:["To apply your changes, you can either press ",(0,s.jsx)("kbd",{children:"Enter"}),", or by doing any other action, such as drawing, applying an image effect, selecting another cel, adding a new frame or layer, etc. Doing any of these will automatically apply your changes."]}),"\n",(0,s.jsx)(t.h3,{id:"canceling-a-transformation",children:"Canceling A Transformation"}),"\n",(0,s.jsxs)(t.p,{children:["To cancel a transformation, you can either press ",(0,s.jsx)("kbd",{children:"Escape"})," or undo. You will not be able to redo your actions if you decide to cancel."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var o=n(6540);const s={},i=o.createContext(s);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);