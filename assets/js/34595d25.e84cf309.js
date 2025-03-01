"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[968],{2074:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"user_manual/palettes","title":"Palettes","description":"Palettes are a way to organize colors in your projects.","source":"@site/docs/user_manual/palettes.md","sourceDirName":"user_manual","slug":"/user_manual/palettes","permalink":"/Pixelorama-Docs/user_manual/palettes","draft":false,"unlisted":false,"editUrl":"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/palettes.md","tags":[],"version":"current","lastUpdatedBy":"Emmanouil Papadeas","lastUpdatedAt":1740831371000,"sidebarPosition":5,"frontMatter":{"id":"palettes","title":"Palettes","sidebar_label":"Palettes","sidebar_position":5},"sidebar":"docs","previous":{"title":"Import","permalink":"/Pixelorama-Docs/user_manual/Import"},"next":{"title":"Command Line Interface","permalink":"/Pixelorama-Docs/user_manual/cli"}}');var i=l(4848),n=l(8453);const s={id:"palettes",title:"Palettes",sidebar_label:"Palettes",sidebar_position:5},d=void 0,o={},a=[{value:"Palettes panel",id:"palettes-panel",level:2},{value:"Creating a new palette",id:"creating-new-palette",level:3},{value:"Preset",id:"preset",level:4},{value:"Name",id:"name",level:4},{value:"Comment",id:"comment",level:4},{value:"Width and Height",id:"width-and-height",level:4},{value:"Create colors with alpha component",id:"create-colors-with-alpha-component",level:4},{value:"Get colors from",id:"get-colors-from",level:4},{value:"Editing palette metadata",id:"editing-palette-metadata",level:3},{value:"Name",id:"name-1",level:4},{value:"Path",id:"path",level:4},{value:"Delete button",id:"delete-button",level:4},{value:"Palette grid",id:"palette-grid",level:2},{value:"Tools",id:"palette-grid-tools",level:3},{value:"Colors movement",id:"colors-movement",level:3},{value:"Palettes import",id:"palettes-import",level:2},{value:"Supported formats",id:"supported-formats",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Palettes are a way to organize colors in your projects."}),"\n",(0,i.jsxs)(t.p,{children:["Pixelorama ships on most platforms with two pre-made palettes (",(0,i.jsx)(t.code,{children:"Default"})," and ",(0,i.jsx)(t.code,{children:"Pixelorama"}),"). These palettes can be freely modified."]}),"\n",(0,i.jsx)(t.p,{children:"All palettes are physically stored on disk in Pixelorama data folder."}),"\n",(0,i.jsx)(t.admonition,{title:"undo/redo",type:"danger",children:(0,i.jsx)(t.p,{children:"Palettes currently don't support undo/redo so be careful with any modifications because they are permanent."})}),"\n",(0,i.jsx)(t.h2,{id:"palettes-panel",children:"Palettes panel"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Pixelorama&#39;s Canvas",src:l(9840).A+"",width:"282",height:"236"})}),"\n",(0,i.jsxs)(t.p,{children:["The top of the panel consists of ",(0,i.jsx)(t.a,{href:"#palette-grid-tools",children:(0,i.jsx)(t.code,{children:"tools"})})," (used to edit colors of the palette), ",(0,i.jsx)(t.code,{children:"Palettes selector"}),", ",(0,i.jsx)(t.a,{href:"#editing-palette-metadata",children:(0,i.jsx)(t.code,{children:"Edit palette button"})})," and ",(0,i.jsx)(t.a,{href:"#creating-new-palette",children:(0,i.jsx)(t.code,{children:"Add new palette button"})}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The main section is the ",(0,i.jsx)(t.a,{href:"#palette-grid",children:(0,i.jsx)(t.code,{children:"Palette grid"})}),", displaying all colors present in the currently selected palette."]}),"\n",(0,i.jsx)(t.h3,{id:"creating-new-palette",children:"Creating a new palette"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Pixelorama&#39;s Canvas",src:l(2371).A+"",width:"311",height:"325"})}),"\n",(0,i.jsxs)(t.p,{children:["A new palette can be created by clicking ",(0,i.jsx)(t.code,{children:"Add new palette button"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"preset",children:"Preset"}),"\n",(0,i.jsx)(t.p,{children:"You can select one of the presets to initialize a new palette with colors."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Preset"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Empty"}),(0,i.jsx)(t.td,{children:"Empty palette with no colors."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"From Current Palette"}),(0,i.jsx)(t.td,{children:"Palette will be created with colors copied from the currently selected palette."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"From Current Sprite"}),(0,i.jsx)(t.td,{children:"Colors will be imported from the currently opened image."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"From Current Selection"}),(0,i.jsx)(t.td,{children:"Colors will be imported from the current selection."})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"name",children:"Name"}),"\n",(0,i.jsx)(t.p,{children:"The name of the palette is also used as a palette file name."}),"\n",(0,i.jsx)(t.h4,{id:"comment",children:"Comment"}),"\n",(0,i.jsx)(t.p,{children:"The palette's description. Default Pixelorama palettes use this field to credit palette authors."}),"\n",(0,i.jsx)(t.h4,{id:"width-and-height",children:"Width and Height"}),"\n",(0,i.jsx)(t.p,{children:"Palettes have set width and height (can be resized later) which define their grid size. Allowed values are from 1 to 64."}),"\n",(0,i.jsx)(t.h4,{id:"create-colors-with-alpha-component",children:"Create colors with alpha component"}),"\n",(0,i.jsx)(t.p,{children:"If this option is not toggled on, colors will be imported without alpha channel and transparency is ignored."}),"\n",(0,i.jsx)(t.h4,{id:"get-colors-from",children:"Get colors from"}),"\n",(0,i.jsx)(t.p,{children:"You can limit colors import to just some or all cels (as seen in the animation timeline)."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Option"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Current frame"}),(0,i.jsx)(t.td,{children:"Colors imported from currently selected frame and all of its layers."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Selected cels"}),(0,i.jsx)(t.td,{children:"Colors imported only from selected cels."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"All frames"}),(0,i.jsx)(t.td,{children:"Colors imported from all frames and their layers."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"editing-palette-metadata",children:"Editing palette metadata"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Pixelorama&#39;s Canvas",src:l(6083).A+"",width:"311",height:"323"})}),"\n",(0,i.jsxs)(t.p,{children:["Currently, selected palette metadata can be edited with ",(0,i.jsx)(t.code,{children:"Edit palette button"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The majority of properties are identical to create a new palette dialog."}),"\n",(0,i.jsx)(t.admonition,{title:"palette resizing",type:"caution",children:(0,i.jsx)(t.p,{children:"If the palette size is reduced positions of all colors will be reset to the beginning of the palette. If some colors don't fit in the new size they will be removed!"})}),"\n",(0,i.jsx)(t.h4,{id:"name-1",children:"Name"}),"\n",(0,i.jsx)(t.p,{children:"If the palette name is changed the file name will also be changed accordingly."}),"\n",(0,i.jsx)(t.h4,{id:"path",children:"Path"}),"\n",(0,i.jsx)(t.p,{children:"Displays where exactly in the file system the palette file is located."}),"\n",(0,i.jsx)(t.h4,{id:"delete-button",children:"Delete button"}),"\n",(0,i.jsx)(t.p,{children:"Permanently removes the palette from the file system."}),"\n",(0,i.jsx)(t.h2,{id:"palette-grid",children:"Palette grid"}),"\n",(0,i.jsx)(t.p,{children:"Displays all colors present in the palette. Colors in the grid can be interacted with."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Interaction"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Left click"})}),(0,i.jsx)(t.td,{children:"Color will be left selected and set as the left tool color."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Right click"})}),(0,i.jsx)(t.td,{children:"Color will be right selected and set as the right tool color."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Double click"})}),(0,i.jsx)(t.td,{children:"Double click on an existing color opens a color picker to change it's color."})]})]})]}),"\n",(0,i.jsx)(t.admonition,{title:"palette grid panning",type:"tip",children:(0,i.jsxs)(t.p,{children:["If palette size is greater than ",(0,i.jsx)(t.code,{children:"8x8"})," it can be panned in the grid either with sliders or ",(0,i.jsx)(t.code,{children:"Middle click + Mouse drag"}),"."]})}),"\n",(0,i.jsx)(t.h3,{id:"palette-grid-tools",children:"Tools"}),"\n",(0,i.jsx)(t.p,{children:"Tools allow you to edit colors in the palette."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Button"}),(0,i.jsx)(t.th,{children:"Tool"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"+"})}),(0,i.jsx)(t.td,{children:"Add a new color"}),(0,i.jsx)(t.td,{children:"Left mouse click adds left tool color. Right mouse click adds right tool color."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"-"})}),(0,i.jsx)(t.td,{children:"Remove a selected color"}),(0,i.jsx)(t.td,{children:"Left mouse click removes left selected color. Right mouse click removes right selected color."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"\u2193"})}),(0,i.jsx)(t.td,{children:"Palette sorting options"}),(0,i.jsx)(t.td,{children:"A drop-down appears, containing the available sorting options. You can either apply the new color order directly to palette or to a copy of it."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"colors-movement",children:"Colors movement"}),"\n",(0,i.jsx)(t.p,{children:"Colors can be moved and copied around in the palette grid."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Shortcut"}),(0,i.jsx)(t.th,{children:"Movement description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Mouse drag"})}),(0,i.jsx)(t.td,{children:"Color switches with a color it is dropped on."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)("kbd",{children:"Shift"})," + ",(0,i.jsx)(t.code,{children:"Mouse drag"})]}),(0,i.jsx)(t.td,{children:"Color is inserted where dropped. If dropped on another color the original color is moved to the right with every color next to it."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)("kbd",{children:"Ctrl"})," + ",(0,i.jsx)(t.code,{children:"Mouse drag"})]}),(0,i.jsx)(t.td,{children:"Color is copied where dropped. If dropped on another color the original color is overwritten."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"palettes-import",children:"Palettes import"}),"\n",(0,i.jsxs)(t.p,{children:["To import a palette, either ",(0,i.jsx)(t.code,{children:"drag and drop"})," a palette file into Pixelorama window or use ",(0,i.jsx)(t.code,{children:"File > Open"})," dialog."]}),"\n",(0,i.jsxs)(t.p,{children:["An imported palette will be converted to ",(0,i.jsx)(t.code,{children:"Pixelorama palette"}),", stored physically in the Pixelorama data folder and added to the palettes selection in ",(0,i.jsx)(t.code,{children:"Palettes panel"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The only exception to import behavior is ",(0,i.jsx)(t.code,{children:"Image palette"}),". Importing an image to Pixelorama will open ",(0,i.jsx)(t.code,{children:"Import Options"})," dialog in which you can select ",(0,i.jsx)(t.code,{children:"Import as > New palette"})," to process an image to import a palette."]}),"\n",(0,i.jsx)(t.admonition,{title:"palette extraction",type:"tip",children:(0,i.jsx)(t.p,{children:"You can import any image as a palette and extract colors from it. Every color from the image will be added to the palette only once. With bigger images, it can take longer time to finish."})}),"\n",(0,i.jsx)(t.h3,{id:"supported-formats",children:"Supported formats"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Format"}),(0,i.jsx)(t.th,{children:"File extension"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Pixelorama palette"}),(0,i.jsx)(t.td,{children:".json"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"GIMP GPL"}),(0,i.jsx)(t.td,{children:".gpl"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PAL"}),(0,i.jsx)(t.td,{children:".pal"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Image palette"}),(0,i.jsx)(t.td,{children:".png, .bmp, .hdr, .jpg, .jpeg, .svg, .tga, .webp"})]})]})]}),"\n",(0,i.jsx)(t.admonition,{title:"file extensions",type:"caution",children:(0,i.jsx)(t.p,{children:"Palette format detection uses file extensions to determine how to parse palette formats. An incorrect extension will result in an import error."})}),"\n",(0,i.jsx)(t.admonition,{title:"pre-1.0 pixelorama palettes",type:"caution",children:(0,i.jsxs)(t.p,{children:["Palettes created in versions of Pixelorama prior to 1.0 cannot be reimported. The save format was changed from ",(0,i.jsx)(t.code,{children:".tres"})," to ",(0,i.jsx)(t.code,{children:".json"}),", due to security concerns. In order to convert an old palette to a new one, you can export it as an image from version 0.11.4, and import that image to the newest version."]})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},2371:(e,t,l)=>{l.d(t,{A:()=>r});const r=l.p+"assets/images/palette-create-2d054e856332f5bd13bb064f0c8bcb45.png"},6083:(e,t,l)=>{l.d(t,{A:()=>r});const r=l.p+"assets/images/palette-edit-35bc3a00785c8fad62c592a6b0895d8f.png"},8453:(e,t,l)=>{l.d(t,{R:()=>s,x:()=>d});var r=l(6540);const i={},n=r.createContext(i);function s(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(n.Provider,{value:t},e.children)}},9840:(e,t,l)=>{l.d(t,{A:()=>r});const r="data:image/png;base64,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"}}]);