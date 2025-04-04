"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[333],{8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(6540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}},9286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"concepts/layer","title":"Layer","description":"An artwork in Pixelorama can be consisted by several layers, giving you better control over different parts of the image, by allowing you to edit these parts without affecting any other part of the image. Layers are stacked on top of each other, which means that bottom layers are being drawn behind top layers. You can edit them in the timeline. Each layer consists of a cels, the number of which depends on the number of frames that the project has.","source":"@site/docs/concepts/layer.md","sourceDirName":"concepts","slug":"/concepts/layer","permalink":"/Pixelorama-Docs/concepts/layer","draft":false,"unlisted":false,"editUrl":"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/concepts/layer.md","tags":[],"version":"current","lastUpdatedBy":"imgbot[bot]","lastUpdatedAt":1743725177000,"frontMatter":{"id":"layer","title":"Layer","sidebar_label":"Layer"},"sidebar":"docs","previous":{"title":"Color mode","permalink":"/Pixelorama-Docs/concepts/color_mode"},"next":{"title":"Project","permalink":"/Pixelorama-Docs/concepts/project"}}');var s=n(4848),a=n(8453);const i={id:"layer",title:"Layer",sidebar_label:"Layer"},l=void 0,d={},o=[{value:"Types of layers",id:"types-of-layers",level:2},{value:"Pixel layers",id:"pixel-layers",level:3},{value:"Group layers",id:"group-layers",level:3},{value:"3D layers",id:"3d-layers",level:3},{value:"Tilemap layers",id:"tilemap-layers",level:3},{value:"Audio layers",id:"audio-layers",level:3},{value:"Blend modes",id:"blend-modes",level:2},{value:"Layer effects",id:"layer-effects",level:2},{value:"Clipping mask",id:"clipping-mask",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["An artwork in Pixelorama can be consisted by several layers, giving you better control over different parts of the image, by allowing you to edit these parts without affecting any other part of the image. Layers are stacked on top of each other, which means that bottom layers are being drawn behind top layers. You can edit them in the ",(0,s.jsx)(t.a,{href:"../user_manual/user_interface/timeline",children:"timeline"}),". Each layer consists of a ",(0,s.jsx)(t.a,{href:"cel",children:"cels"}),", the number of which depends on the number of frames that the project has."]}),"\n",(0,s.jsx)(t.h2,{id:"types-of-layers",children:"Types of layers"}),"\n",(0,s.jsx)(t.p,{children:"Right now, there are three types of layers. Pixel layers, group layers, and 3D layers."}),"\n",(0,s.jsx)(t.h3,{id:"pixel-layers",children:"Pixel layers"}),"\n",(0,s.jsx)(t.p,{children:"Pixel layers are the default and most straight forward type of layer. Their cels contain regular raster image data, in which you can normally draw and manipulate pixels. Pixel cels are the only types of cels that can be linked right now."}),"\n",(0,s.jsx)(t.h3,{id:"group-layers",children:"Group layers"}),"\n",(0,s.jsx)(t.p,{children:"Group layers are used mostly for organization and their cels are empty and do not hold any actual data. They can be used to group common layers together, and they can expanded and collapsed from view in the timeline. If their blend mode is set to something other than passthrough, they blend all of their children together, and they can be used as clipping masks, and by clipping masks."}),"\n",(0,s.jsx)(t.h3,{id:"3d-layers",children:"3D layers"}),"\n",(0,s.jsx)(t.p,{children:"The cels of 3D layers contain 3D mesh, lighting, camera and environment data, that are being rasterized based on the size of the canvas. They can contain lights, such as directional lights, spot lights and point lights, and a variety of primitive meshes, including boxes, capsules, spheres, cylinders, prisms, toruses, planes and even text. Importing custom .obj models is also possible."}),"\n",(0,s.jsx)(t.h3,{id:"tilemap-layers",children:"Tilemap layers"}),"\n",(0,s.jsxs)(t.p,{children:["Tilemap layers are a special type of pixel layer which use a tileset, and each cell of the grid has a reference to a tile from that tileset. See ",(0,s.jsx)(t.a,{href:"../user_manual/tilemaps",children:"the tilemaps page"})," for more information."]}),"\n",(0,s.jsx)(t.h3,{id:"audio-layers",children:"Audio layers"}),"\n",(0,s.jsxs)(t.p,{children:["Audio layers do not contain any visible data. Rather, as their name suggests, they contain audible data. More specifically, each audio layer contains an audio file, which can be played at any time during the animation. Users can load an audio file (only ",(0,s.jsx)(t.code,{children:".mp3"})," and ",(0,s.jsx)(t.code,{children:".wav"})," files are supported at the moment), and choose the frame they want the audio to start playing. Making an audio layer invisible essentially mutes the audio. Exporting a project file with audio layers as a video file will include the audio in the exported video."]}),"\n",(0,s.jsx)(t.h2,{id:"blend-modes",children:"Blend modes"}),"\n",(0,s.jsx)(t.p,{children:"The blend mode of each layer determines how its colors blend with the colors of the layer directly below it. Pixelorama supports the following blend modes:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Category"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Passthrough"}),(0,s.jsx)(t.td,{children:"Normal"}),(0,s.jsx)(t.td,{children:"Only for group layers. Ignores group blending, like the group doesn't exist."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Normal"}),(0,s.jsx)(t.td,{children:"Normal"}),(0,s.jsx)(t.td,{children:"The blend layer colors are simply placed on top of the base colors."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Erase"}),(0,s.jsx)(t.td,{children:"Normal"}),(0,s.jsx)(t.td,{children:"Erases the non-transparent areas of the upper layer from the lower layer's alpha."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Darken"}),(0,s.jsx)(t.td,{children:"Darken"}),(0,s.jsx)(t.td,{children:"Keeps the darker colors between the blend and the base layers."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Multiply"}),(0,s.jsx)(t.td,{children:"Darken"}),(0,s.jsx)(t.td,{children:"Multiplies the numerical values of the two colors, giving a darker result."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Color burn"}),(0,s.jsx)(t.td,{children:"Darken"}),(0,s.jsx)(t.td,{children:"Darkens by increasing the contrast between the blend and base colors."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Linear burn"}),(0,s.jsx)(t.td,{children:"Darken"}),(0,s.jsx)(t.td,{children:"Darkens the base colors based on the value of the blend colors."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Lighten"}),(0,s.jsx)(t.td,{children:"Lighten"}),(0,s.jsx)(t.td,{children:"Keeps the lighter colors between the blend and the base layers."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Screen"}),(0,s.jsx)(t.td,{children:"Lighten"}),(0,s.jsx)(t.td,{children:"Lightens the colors by multiplying the inverse of the blend and base colors."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Color dodge"}),(0,s.jsx)(t.td,{children:"Lighten"}),(0,s.jsx)(t.td,{children:"Lightens by decreasing the contrast between the blend and base colors."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Add"}),(0,s.jsx)(t.td,{children:"Lighten"}),(0,s.jsx)(t.td,{children:"Lightens by adding the numerical values of the two colors. Also known as linear dodge."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Overlay"}),(0,s.jsx)(t.td,{children:"Contrast"}),(0,s.jsx)(t.td,{children:"Like Screen mode in bright base colors and Multiply mode in darker base colors."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Soft light"}),(0,s.jsx)(t.td,{children:"Contrast"}),(0,s.jsx)(t.td,{children:"Similar to Overlay, but more subtle."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Hard light"}),(0,s.jsx)(t.td,{children:"Contrast"}),(0,s.jsx)(t.td,{children:"Like Screen mode in bright blending colors and Multiply mode in darker colors."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Difference"}),(0,s.jsx)(t.td,{children:"Inversion"}),(0,s.jsx)(t.td,{children:"Subtracts the blend color from the base or vice versa, depending on the brightness."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Exclusion"}),(0,s.jsx)(t.td,{children:"Inversion"}),(0,s.jsx)(t.td,{children:"Similar to Difference mode, but with less contrast between the colors."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Subtract"}),(0,s.jsx)(t.td,{children:"Inversion"}),(0,s.jsx)(t.td,{children:"Darkens by subtracting the numerical values of the blend colors from the base."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Divide"}),(0,s.jsx)(t.td,{children:"Inversion"}),(0,s.jsx)(t.td,{children:"Divides the numerical values of the base colors by the blend."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Hue"}),(0,s.jsx)(t.td,{children:"Component"}),(0,s.jsx)(t.td,{children:"Uses the blend hue while preserving the base saturation and luminosity."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Saturation"}),(0,s.jsx)(t.td,{children:"Component"}),(0,s.jsx)(t.td,{children:"Uses the blend saturation while preserving the base hue and luminosity."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Color"}),(0,s.jsx)(t.td,{children:"Component"}),(0,s.jsx)(t.td,{children:"Uses the blend hue and saturation while preserving the base luminosity."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Luminosity"}),(0,s.jsx)(t.td,{children:"Component"}),(0,s.jsx)(t.td,{children:"Uses the blend luminosity while preserving the base hue and saturation."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"layer-effects",children:"Layer effects"}),"\n",(0,s.jsxs)(t.p,{children:["Layer effects are image effects that are being applied to the layer in a non-destructive way. This means that they do not directly modify the image data, which allows artists to disable and enable them at will, without having to worry that their work will be modified in a permanent way. They are only being applied on ",(0,s.jsx)(t.a,{href:"../user_manual/save_and_export",children:"export"}),', and they can be previewed in the canvas, if "Display Layer Effects" is enabled, under the View menu. Each layer can contain multiple layer effects.']}),"\n",(0,s.jsxs)(t.p,{children:['To add a layer effect, you can click on the "FX" button in the layer area of the timeline. A window will appear, that lets you add, remove and change the order of layer effects. You can also change the properties of each effect. For a list of all available layer effects, see ',(0,s.jsx)(t.a,{href:"../user_manual/image_effects#list-of-image-effects",children:"image effects"}),"."]}),"\n",(0,s.jsx)(t.admonition,{title:"Layer vs image effects",type:"info",children:(0,s.jsxs)(t.p,{children:["The difference between layer effects and image effects, is that layer effects can only be ",(0,s.jsx)(t.strong,{children:"applied per-layer"})," and are ",(0,s.jsx)(t.strong,{children:"non-destructive"}),", while image effects can be applied to ",(0,s.jsx)(t.strong,{children:"multiple cels"})," at the same time, and are ",(0,s.jsx)(t.strong,{children:"destructive"}),". Also, as of right now, layer effects cannot be animated."]})}),"\n",(0,s.jsx)(t.h2,{id:"clipping-mask",children:"Clipping mask"}),"\n",(0,s.jsx)(t.p,{children:'Clipping masks can be used to draw the content of the layer only on top of the non-transparent pixels of the layer directly below. In other words, the layer below the clipping mask is what controls the visibility of the content of the clipping mask. You can make a layer be a clipping mask by right-clicking the layer button in the timeline, and toggling "Clipping mask".'})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);