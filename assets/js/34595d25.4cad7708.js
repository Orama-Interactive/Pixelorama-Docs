"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[968],{2074:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"user_manual/palettes","title":"Palettes","description":"Palettes are a way to organize colors in your projects.","source":"@site/docs/user_manual/palettes.md","sourceDirName":"user_manual","slug":"/user_manual/palettes","permalink":"/Pixelorama-Docs/user_manual/palettes","draft":false,"unlisted":false,"editUrl":"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/palettes.md","tags":[],"version":"current","lastUpdatedBy":"imgbot[bot]","lastUpdatedAt":1743725177000,"sidebarPosition":5,"frontMatter":{"id":"palettes","title":"Palettes","sidebar_label":"Palettes","sidebar_position":5},"sidebar":"docs","previous":{"title":"Import","permalink":"/Pixelorama-Docs/user_manual/Import"},"next":{"title":"Command Line Interface","permalink":"/Pixelorama-Docs/user_manual/cli"}}');var r=l(4848),n=l(8453);const o={id:"palettes",title:"Palettes",sidebar_label:"Palettes",sidebar_position:5},s=void 0,d={},a=[{value:"Palettes panel",id:"palettes-panel",level:2},{value:"Creating a new palette",id:"creating-new-palette",level:3},{value:"Preset",id:"preset",level:4},{value:"Name",id:"name",level:4},{value:"Comment",id:"comment",level:4},{value:"Width and Height",id:"width-and-height",level:4},{value:"Create colors with alpha component",id:"create-colors-with-alpha-component",level:4},{value:"Get colors from",id:"get-colors-from",level:4},{value:"Editing palette metadata",id:"editing-palette-metadata",level:3},{value:"Name",id:"name-1",level:4},{value:"Path",id:"path",level:4},{value:"Delete button",id:"delete-button",level:4},{value:"Palette grid",id:"palette-grid",level:2},{value:"Tools",id:"palette-grid-tools",level:3},{value:"Colors movement",id:"colors-movement",level:3},{value:"Palettes import",id:"palettes-import",level:2},{value:"Supported formats",id:"supported-formats",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Palettes are a way to organize colors in your projects."}),"\n",(0,r.jsxs)(t.p,{children:["Pixelorama ships on most platforms with two pre-made palettes (",(0,r.jsx)(t.code,{children:"Default"})," and ",(0,r.jsx)(t.code,{children:"Pixelorama"}),"). These palettes can be freely modified."]}),"\n",(0,r.jsx)(t.p,{children:"All palettes are physically stored on disk in Pixelorama data folder."}),"\n",(0,r.jsx)(t.admonition,{title:"undo/redo",type:"danger",children:(0,r.jsx)(t.p,{children:"Palettes currently don't support undo/redo so be careful with any modifications because they are permanent."})}),"\n",(0,r.jsx)(t.h2,{id:"palettes-panel",children:"Palettes panel"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Pixelorama&#39;s Canvas",src:l(9840).A+"",width:"282",height:"236"})}),"\n",(0,r.jsxs)(t.p,{children:["The top of the panel consists of ",(0,r.jsx)(t.a,{href:"#palette-grid-tools",children:(0,r.jsx)(t.code,{children:"tools"})})," (used to edit colors of the palette), ",(0,r.jsx)(t.code,{children:"Palettes selector"}),", ",(0,r.jsx)(t.a,{href:"#editing-palette-metadata",children:(0,r.jsx)(t.code,{children:"Edit palette button"})})," and ",(0,r.jsx)(t.a,{href:"#creating-new-palette",children:(0,r.jsx)(t.code,{children:"Add new palette button"})}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The main section is the ",(0,r.jsx)(t.a,{href:"#palette-grid",children:(0,r.jsx)(t.code,{children:"Palette grid"})}),", displaying all colors present in the currently selected palette."]}),"\n",(0,r.jsx)(t.h3,{id:"creating-new-palette",children:"Creating a new palette"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Pixelorama&#39;s Canvas",src:l(2371).A+"",width:"311",height:"325"})}),"\n",(0,r.jsxs)(t.p,{children:["A new palette can be created by clicking ",(0,r.jsx)(t.code,{children:"Add new palette button"}),"."]}),"\n",(0,r.jsx)(t.h4,{id:"preset",children:"Preset"}),"\n",(0,r.jsx)(t.p,{children:"You can select one of the presets to initialize a new palette with colors."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Preset"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Empty"}),(0,r.jsx)(t.td,{children:"Empty palette with no colors."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"From Current Palette"}),(0,r.jsx)(t.td,{children:"Palette will be created with colors copied from the currently selected palette."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"From Current Sprite"}),(0,r.jsx)(t.td,{children:"Colors will be imported from the currently opened image."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"From Current Selection"}),(0,r.jsx)(t.td,{children:"Colors will be imported from the current selection."})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"name",children:"Name"}),"\n",(0,r.jsx)(t.p,{children:"The name of the palette is also used as a palette file name."}),"\n",(0,r.jsx)(t.h4,{id:"comment",children:"Comment"}),"\n",(0,r.jsx)(t.p,{children:"The palette's description. Default Pixelorama palettes use this field to credit palette authors."}),"\n",(0,r.jsx)(t.h4,{id:"width-and-height",children:"Width and Height"}),"\n",(0,r.jsx)(t.p,{children:"Palettes have set width and height (can be resized later) which define their grid size. Allowed values are from 1 to 64."}),"\n",(0,r.jsx)(t.h4,{id:"create-colors-with-alpha-component",children:"Create colors with alpha component"}),"\n",(0,r.jsx)(t.p,{children:"If this option is not toggled on, colors will be imported without alpha channel and transparency is ignored."}),"\n",(0,r.jsx)(t.h4,{id:"get-colors-from",children:"Get colors from"}),"\n",(0,r.jsx)(t.p,{children:"You can limit colors import to just some or all cels (as seen in the animation timeline)."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Option"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Current frame"}),(0,r.jsx)(t.td,{children:"Colors imported from currently selected frame and all of its layers."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Selected cels"}),(0,r.jsx)(t.td,{children:"Colors imported only from selected cels."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"All frames"}),(0,r.jsx)(t.td,{children:"Colors imported from all frames and their layers."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"editing-palette-metadata",children:"Editing palette metadata"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Pixelorama&#39;s Canvas",src:l(6083).A+"",width:"311",height:"323"})}),"\n",(0,r.jsxs)(t.p,{children:["Currently, selected palette metadata can be edited with ",(0,r.jsx)(t.code,{children:"Edit palette button"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The majority of properties are identical to create a new palette dialog."}),"\n",(0,r.jsx)(t.admonition,{title:"palette resizing",type:"caution",children:(0,r.jsx)(t.p,{children:"If the palette size is reduced positions of all colors will be reset to the beginning of the palette. If some colors don't fit in the new size they will be removed!"})}),"\n",(0,r.jsx)(t.h4,{id:"name-1",children:"Name"}),"\n",(0,r.jsx)(t.p,{children:"If the palette name is changed the file name will also be changed accordingly."}),"\n",(0,r.jsx)(t.h4,{id:"path",children:"Path"}),"\n",(0,r.jsx)(t.p,{children:"Displays where exactly in the file system the palette file is located."}),"\n",(0,r.jsx)(t.h4,{id:"delete-button",children:"Delete button"}),"\n",(0,r.jsx)(t.p,{children:"Permanently removes the palette from the file system."}),"\n",(0,r.jsx)(t.h2,{id:"palette-grid",children:"Palette grid"}),"\n",(0,r.jsx)(t.p,{children:"Displays all colors present in the palette. Colors in the grid can be interacted with."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Interaction"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Left click"})}),(0,r.jsx)(t.td,{children:"Color will be left selected and set as the left tool color."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Right click"})}),(0,r.jsx)(t.td,{children:"Color will be right selected and set as the right tool color."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Double click"})}),(0,r.jsx)(t.td,{children:"Double click on an existing color opens a color picker to change it's color."})]})]})]}),"\n",(0,r.jsx)(t.admonition,{title:"palette grid panning",type:"tip",children:(0,r.jsxs)(t.p,{children:["If palette size is greater than ",(0,r.jsx)(t.code,{children:"8x8"})," it can be panned in the grid either with sliders or ",(0,r.jsx)(t.code,{children:"Middle click + Mouse drag"}),"."]})}),"\n",(0,r.jsx)(t.h3,{id:"palette-grid-tools",children:"Tools"}),"\n",(0,r.jsx)(t.p,{children:"Tools allow you to edit colors in the palette."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Button"}),(0,r.jsx)(t.th,{children:"Tool"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"+"})}),(0,r.jsx)(t.td,{children:"Add a new color"}),(0,r.jsx)(t.td,{children:"Left mouse click adds left tool color. Right mouse click adds right tool color."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"-"})}),(0,r.jsx)(t.td,{children:"Remove a selected color"}),(0,r.jsx)(t.td,{children:"Left mouse click removes left selected color. Right mouse click removes right selected color."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"\u2193"})}),(0,r.jsx)(t.td,{children:"Palette sorting options"}),(0,r.jsx)(t.td,{children:"A drop-down appears, containing the available sorting options. You can either apply the new color order directly to palette or to a copy of it."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"colors-movement",children:"Colors movement"}),"\n",(0,r.jsx)(t.p,{children:"Colors can be moved and copied around in the palette grid."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Shortcut"}),(0,r.jsx)(t.th,{children:"Movement description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Mouse drag"})}),(0,r.jsx)(t.td,{children:"Color switches with a color it is dropped on."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)("kbd",{children:"Shift"})," + ",(0,r.jsx)(t.code,{children:"Mouse drag"})]}),(0,r.jsx)(t.td,{children:"Color is inserted where dropped. If dropped on another color the original color is moved to the right with every color next to it."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)("kbd",{children:"Ctrl"})," + ",(0,r.jsx)(t.code,{children:"Mouse drag"})]}),(0,r.jsx)(t.td,{children:"Color is copied where dropped. If dropped on another color the original color is overwritten."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"palettes-import",children:"Palettes import"}),"\n",(0,r.jsxs)(t.p,{children:["To import a palette, either ",(0,r.jsx)(t.code,{children:"drag and drop"})," a palette file into Pixelorama window or use ",(0,r.jsx)(t.code,{children:"File > Open"})," dialog."]}),"\n",(0,r.jsxs)(t.p,{children:["An imported palette will be converted to ",(0,r.jsx)(t.code,{children:"Pixelorama palette"}),", stored physically in the Pixelorama data folder and added to the palettes selection in ",(0,r.jsx)(t.code,{children:"Palettes panel"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The only exception to import behavior is ",(0,r.jsx)(t.code,{children:"Image palette"}),". Importing an image to Pixelorama will open ",(0,r.jsx)(t.code,{children:"Import Options"})," dialog in which you can select ",(0,r.jsx)(t.code,{children:"Import as > New palette"})," to process an image to import a palette."]}),"\n",(0,r.jsx)(t.admonition,{title:"palette extraction",type:"tip",children:(0,r.jsx)(t.p,{children:"You can import any image as a palette and extract colors from it. Every color from the image will be added to the palette only once. With bigger images, it can take longer time to finish."})}),"\n",(0,r.jsx)(t.h3,{id:"supported-formats",children:"Supported formats"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Format"}),(0,r.jsx)(t.th,{children:"File extension"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Pixelorama palette"}),(0,r.jsx)(t.td,{children:".json"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"GIMP GPL"}),(0,r.jsx)(t.td,{children:".gpl"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"PAL"}),(0,r.jsx)(t.td,{children:".pal"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Image palette"}),(0,r.jsx)(t.td,{children:".png, .bmp, .hdr, .jpg, .jpeg, .svg, .tga, .webp"})]})]})]}),"\n",(0,r.jsx)(t.admonition,{title:"file extensions",type:"caution",children:(0,r.jsx)(t.p,{children:"Palette format detection uses file extensions to determine how to parse palette formats. An incorrect extension will result in an import error."})}),"\n",(0,r.jsx)(t.admonition,{title:"pre-1.0 pixelorama palettes",type:"caution",children:(0,r.jsxs)(t.p,{children:["Palettes created in versions of Pixelorama prior to 1.0 cannot be reimported. The save format was changed from ",(0,r.jsx)(t.code,{children:".tres"})," to ",(0,r.jsx)(t.code,{children:".json"}),", due to security concerns. In order to convert an old palette to a new one, you can export it as an image from version 0.11.4, and import that image to the newest version."]})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},2371:(e,t,l)=>{l.d(t,{A:()=>i});const i=l.p+"assets/images/palette-create-2d054e856332f5bd13bb064f0c8bcb45.png"},6083:(e,t,l)=>{l.d(t,{A:()=>i});const i=l.p+"assets/images/palette-edit-35bc3a00785c8fad62c592a6b0895d8f.png"},8453:(e,t,l)=>{l.d(t,{R:()=>o,x:()=>s});var i=l(6540);const r={},n=i.createContext(r);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(n.Provider,{value:t},e.children)}},9840:(e,t,l)=>{l.d(t,{A:()=>i});const i="data:image/png;base64,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"}}]);