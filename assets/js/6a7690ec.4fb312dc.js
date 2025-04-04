"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[380],{5567:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"user_manual/tilemaps","title":"Tilemaps","description":"It is possible to create tilemaps in Pixelorama, in the form of tilemap layers. Tilemap layers are a special type of pixel layer which use a tileset, and each cell of the grid has a reference to a tile from that tileset. Tilemaps are usually used when designing levels for games.","source":"@site/docs/user_manual/tilemaps.md","sourceDirName":"user_manual","slug":"/user_manual/tilemaps","permalink":"/Pixelorama-Docs/user_manual/tilemaps","draft":false,"unlisted":false,"editUrl":"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/tilemaps.md","tags":[],"version":"current","lastUpdatedBy":"imgbot[bot]","lastUpdatedAt":1743725177000,"frontMatter":{"id":"tilemaps","title":"Tilemaps","sidebar_label":"Tilemaps"},"sidebar":"docs","previous":{"title":"Shortcut settings","permalink":"/Pixelorama-Docs/user_manual/shortcut_settings"},"next":{"title":"Tools","permalink":"/Pixelorama-Docs/user_manual/tools"}}');var s=i(4848),a=i(8453);const n={id:"tilemaps",title:"Tilemaps",sidebar_label:"Tilemaps"},o=void 0,r={},d=[{value:"Tileset",id:"tileset",level:2},{value:"Creating a new tilemap layer",id:"creating-a-new-tilemap-layer",level:2},{value:"Tiles panel",id:"tiles-panel",level:2},{value:"Editing modes",id:"editing-modes",level:2},{value:"Draw pixels",id:"draw-pixels",level:3},{value:"Draw tiles",id:"draw-tiles",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["It is possible to create tilemaps in Pixelorama, in the form of tilemap ",(0,s.jsx)(t.a,{href:"../concepts/layer",children:"layers"}),". Tilemap layers are a special type of pixel layer which use a tileset, and each cell of the grid has a reference to a tile from that tileset. Tilemaps are usually used when designing levels for games."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"A screenshot of Pixelorama with the tileset panel visible.",src:i(9758).A+"",width:"1912",height:"1050"})}),"\n",(0,s.jsx)(t.h2,{id:"tileset",children:"Tileset"}),"\n",(0,s.jsxs)(t.p,{children:["A tileset is essentially a collection of images of the same size, referred to as tiles. Each tile has an index number (a positive integer starting from 0), and they can be re-used multiple times, even in multiple tilemap layers, if they use the same tileset. Tilesets are created either automatically when creating a tilemap layer, or by ",(0,s.jsx)(t.a,{href:"import",children:"importing an image"}),", and choosing to import it as a tileset. When saving a ",(0,s.jsx)(t.a,{href:"../concepts/project",children:"project"}),", the tilesets are being stored inside the ",(0,s.jsx)(t.code,{children:".pxo"})," file. To see all of the available tilesets of a project, you can go to the Image menu and select Project Properties. From there, you can duplicate and delete tilesets. Note that you can only delete tilesets if they are not used by a tilemap layer."]}),"\n",(0,s.jsx)(t.h2,{id:"creating-a-new-tilemap-layer",children:"Creating a new tilemap layer"}),"\n",(0,s.jsxs)(t.p,{children:['You can create a new tilemap layer by going to the top left side of the timeline, and clicking on the first button\'s arrow. That will bring up a menu of all available layer types. From there, choose "Tilemap layer". A window will appear with an option to choose which tileset the tilemap will use. If you have already created tilesets in this project, you can choose to use those in your new tilemap layer. Otherwise, your only option will be to create a new tileset. When creating a new tileset, you can choose its name and the size of its individual tiles. Note that these ',(0,s.jsx)(t.strong,{children:"cannot"})," be changed later. It is possible, however, to change the tileset that the tilemap layer is using. To do that, you can right click on the tilemap layer in the timeline, select Properties, and choose a different tileset from the dropdown list. Note that this can be destructive if the new tileset has less tiles than the previous one."]}),"\n",(0,s.jsx)(t.h2,{id:"tiles-panel",children:"Tiles panel"}),"\n",(0,s.jsx)(t.p,{children:"When a tilemap layer is selected, a new panel will appear in the user interface. From there, you can see all of the available tiles of the tileset, as well as some buttons that are related to the available editing modes."}),"\n",(0,s.jsx)(t.admonition,{title:"panel not appearing",type:"caution",children:(0,s.jsx)(t.p,{children:"If the tiles panel does immediately become visible when switching to a tilemap layer, it has probably spawned as a tab next to the first available panel of the user interface, depending on your layout. If you are using a default layout, you can reset it by going to Window, Layouts, Reset. Otherwise, you will have to locate it by yourself and move it to the desired location manually."})}),"\n",(0,s.jsx)(t.h2,{id:"editing-modes",children:"Editing modes"}),"\n",(0,s.jsxs)(t.p,{children:["Pixelorama offers two editing modes when using tilemap layers; Draw pixels and draw tiles. You can switch between them by clicking on the first button on the top left of the tiles panel, or by pressing ",(0,s.jsx)("kbd",{children:"Shift + `"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"draw-pixels",children:"Draw pixels"}),"\n",(0,s.jsx)(t.p,{children:"Draw pixels is the default mode, and is used to add/modify the tiles themselves, by drawing as you would on normal pixel layers. The draw pixels mode has three sub-modes, which can be toggled by the three buttons next to the draw tiles button, that are visible when draw pixels mode is active."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Mode name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default Shortcut"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Manual"}),(0,s.jsx)(t.td,{children:"This mode modifies individual tiles, and immediately applies the change to all other instances of the modified tile(s) in the tilemap. It does not affect the order of tiles in the tileset."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("kbd",{children:"Shift + 1"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Auto"}),(0,s.jsx)(t.td,{children:"The default mode. This mode creates new tiles in the tileset when drawing, if the modified tiles do not already exist in the tileset. If they do, the tiles get re-used. Tiles that are no longer used anywhere in the tilemap get erased from the tileset."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("kbd",{children:"Shift + 2"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Stack"}),(0,s.jsx)(t.td,{children:"This mode creates new tiles in the tileset every time a tile gets modified, without changing any of the already existing tiles."}),(0,s.jsx)(t.td,{children:(0,s.jsx)("kbd",{children:"Shift + 3"})})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"draw-tiles",children:"Draw tiles"}),"\n",(0,s.jsxs)(t.p,{children:["The draw tiles mode is used to place tiles directly from the tileset to the tilemap, without modifying the content of the tileset. To draw tiles, you can select a tile from the panel, and then use the pencil tool to place it on the canvas. Tiles can only be placed in grid cells, and not between them. You can also quickly rotate and flip the tiles by clicking on the arrow buttons next to the draw tiles button, or by pressing ",(0,s.jsx)("kbd",{children:"Shift + Z"})," to rotate left, ",(0,s.jsx)("kbd",{children:"Shift + X"})," to rotate right, ",(0,s.jsx)("kbd",{children:"Shift + C"})," to flip horizontally and ",(0,s.jsx)("kbd",{children:"Shift + V"})," to flip vertically."]}),"\n",(0,s.jsx)(t.admonition,{title:"random tiles",type:"tip",children:(0,s.jsxs)(t.p,{children:["You can select multiple tiles from the Tiles panel, either by holding ",(0,s.jsx)("kbd",{children:"Shift"})," or ",(0,s.jsx)("kbd",{children:"Control"})," while clicking on them, just like you can with the timeline layer/frame/cel buttons. If you have multiple tiles selected, Pixelorama will randomly choose one of the selected tiles to place when drawing. If you want to change the probability of individual tiles, you can right click on a tile, select Properties, and change the probability slider. By default, all tiles have their probability set to ",(0,s.jsx)(t.code,{children:"1"}),", meaning that all of them have an equal chance to appear when drawing."]})}),"\n",(0,s.jsx)(t.p,{children:"When this mode is used, the behavior of most tools changes."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Tools"}),(0,s.jsx)(t.th,{children:"Behavior in draw tiles mode"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Pencil, bucket, line, curve and shape"}),(0,s.jsx)(t.td,{children:"Place tiles"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Eraser"}),(0,s.jsx)(t.td,{children:"Remove tiles"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Color picker"}),(0,s.jsx)(t.td,{children:"Quickly select a tile from the tilemap"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Move"}),(0,s.jsx)(t.td,{children:"Moves the tilemap's offset along with its tiles"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Selection"}),(0,s.jsx)(t.td,{children:"Select entire grid cells. Resizing a selection does not resize the pixels. Instead, it resizes the tile indices of the grid cells, placing more tiles if the selection is enlarged, or removing if it gets smaller."})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"A GIF of a tileset being resized with selection tools, using the draw tiles mode.",src:i(9068).A+"",width:"1071",height:"784"})})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>o});var l=i(6540);const s={},a=l.createContext(s);function n(e){const t=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),l.createElement(a.Provider,{value:t},e.children)}},9068:(e,t,i)=>{i.d(t,{A:()=>l});const l=i.p+"assets/images/tileset_selection_resize-4297bbf4adb13e0f1af179b62d4f08df.gif"},9758:(e,t,i)=>{i.d(t,{A:()=>l});const l=i.p+"assets/images/tileset_panel-3547bcb34489feb11c5ad8dcb0f62b84.png"}}]);