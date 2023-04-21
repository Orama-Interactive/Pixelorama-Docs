"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[77],{3905:(e,i,t)=>{t.d(i,{Zo:()=>u,kt:()=>Y});var o=t(7294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function n(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);i&&(o=o.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,o)}return t}function h(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?n(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function r(e,i){if(null==e)return{};var t,o,a=function(e,i){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),s=function(e){var i=o.useContext(l),t=i;return e&&(t="function"==typeof e?e(i):h(h({},i),e)),t},u=function(e){var i=s(e.components);return o.createElement(l.Provider,{value:i},e.children)},c={inlineCode:"code",wrapper:function(e){var i=e.children;return o.createElement(o.Fragment,{},i)}},d=o.forwardRef((function(e,i){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=s(t),Y=a,G=d["".concat(l,".").concat(Y)]||d[Y]||c[Y]||n;return t?o.createElement(G,h(h({ref:i},u),{},{components:t})):o.createElement(G,h({ref:i},u))}));function Y(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var n=t.length,h=new Array(n);h[0]=d;var r={};for(var l in i)hasOwnProperty.call(i,l)&&(r[l]=i[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,h[1]=r;for(var s=2;s<n;s++)h[s]=t[s];return o.createElement.apply(null,h)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3369:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>h,default:()=>c,frontMatter:()=>n,metadata:()=>r,toc:()=>s});var o=t(7462),a=(t(7294),t(3905));const n={id:"canvas",title:"The Canvas",sidebar_label:"The Canvas"},h=void 0,r={unversionedId:"user_manual/user_interface/canvas",id:"user_manual/user_interface/canvas",title:"The Canvas",description:"Pixelorama's Canvas",source:"@site/docs/user_manual/user_interface/canvas.md",sourceDirName:"user_manual/user_interface",slug:"/user_manual/user_interface/canvas",permalink:"/Pixelorama-Docs/user_manual/user_interface/canvas",draft:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/user_interface/canvas.md",tags:[],version:"current",lastUpdatedBy:"yoyoyodog123",lastUpdatedAt:1682075135,formattedLastUpdatedAt:"Apr 21, 2023",frontMatter:{id:"canvas",title:"The Canvas",sidebar_label:"The Canvas"},sidebar:"docs",previous:{title:"User Interface Basics",permalink:"/Pixelorama-Docs/user_manual/user_interface/user_interface_basics"},next:{title:"The Timeline",permalink:"/Pixelorama-Docs/user_manual/user_interface/timeline"}},l={},s=[{value:"Navigation",id:"navigation",level:2},{value:"Zoom",id:"zoom",level:3},{value:"Pan",id:"pan",level:3},{value:"Mirror",id:"mirror",level:3},{value:"Grid",id:"grid",level:2},{value:"Editing the Grid",id:"editing-the-grid",level:3},{value:"Pixel Grid",id:"pixel-grid",level:3},{value:"Tile Mode",id:"tile-mode",level:2},{value:"Second Canvas",id:"second-canvas",level:2},{value:"Rulers and Guides",id:"rulers-and-guides",level:2},{value:"Editing Guides",id:"editing-guides",level:3},{value:"Toggling Visibility",id:"toggling-visibility",level:3},{value:"Transparent Background",id:"transparent-background",level:2},{value:"Editing the transparent background",id:"editing-the-transparent-background",level:3}],u={toc:s};function c(e){let{components:i,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pixelorama&#39;s Canvas",src:t(5270).Z,width:"902",height:"457"})),(0,a.kt)("p",null,"The canvas is the area where your drawing is located and it's also where you apply all of the tools at your disposal. While you can scroll around the canvas without limits, you cannot draw outside the canvas's boundaries, which are set by the size of the image. Of course, you can always resize the project to expand or shrink your canvas's limits."),(0,a.kt)("h2",{id:"navigation"},"Navigation"),(0,a.kt)("p",null,"You can navigate around the canvas in multiple ways."),(0,a.kt)("h3",{id:"zoom"},"Zoom"),(0,a.kt)("p",null,"To zoom, you can use the mouse wheel. Scroll the wheel up to zoom in, and down to zoom out. You can also use ",(0,a.kt)("kbd",null,"+")," on your keyboard to zoom in and ",(0,a.kt)("kbd",null,"-")," to zoom out. You can see the current zoom level of the canvas in the top bar of the user interface."),(0,a.kt)("p",null,"There is also a dedicated zoom tool, which you can use like any other tool, by pressing either the left or the right mouse button, depending on where you mapped it. The zoom tool can prove useful for users with no mouse, such as graphics tablet or touch screen users. From the tool's options, you can switch it to either zoom in or out, and you can also find two buttons."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Zoom tool options",src:t(6176).Z,width:"132",height:"169"})),(0,a.kt)("p",null,'The first one is "Fit to frame" which basically centers your canvas and makes it as big as possible without any portion of it not being visible.'),(0,a.kt)("p",null,"The second one is 100% zoom. This basically makes the canvas its exact pixel dimensions based on your screen. For example if your canvas is 64x64 pixels, pressing this button will make the canvas appear on a 64x64 area of your screen. This gives you an idea of how your art looks at its original dimensions."),(0,a.kt)("h3",{id:"pan"},"Pan"),(0,a.kt)("p",null,"You can pan by either holding the middle mouse button or ",(0,a.kt)("kbd",null,"Space")," on your keyboard and simply moving the mouse. You can also use the arrow keys to move around. Like with zoom, there is also a dedicated pan tool."),(0,a.kt)("h3",{id:"mirror"},"Mirror"),(0,a.kt)("p",null,'You can mirror your view horizontally and non-destructively by going to the View menu and clicking "Mirror View", or by pressing ',(0,a.kt)("kbd",null,"Shift + M"),"."),(0,a.kt)("h2",{id:"grid"},"Grid"),(0,a.kt)("p",null,"The grid is an important tool that aids the user in accurately drawing lines. Currently, Pixelorama has two types of grids, rectangular and isometric. The rectangular grid is what you will probably use most of the time, while the isometric grid is great if you are making isometric art, like the one pictured below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Isometric Grid",src:t(925).Z,width:"553",height:"456"})),(0,a.kt)("h3",{id:"editing-the-grid"},"Editing the Grid"),(0,a.kt)("p",null,'The grid\'s properties can be edited in the Preferences, which is found under the Edit menu, and then selecting "Canvas" on the left side. The option include the grid type itself (rectangular, isometric or both), the width and height of the rectangular grid, the width and height of the isometric bounds of the cells, the x and y offset of the grid, the grid color and whether to draw over Tile Mode.'),(0,a.kt)("p",null,'To toggle its visibility, you can click on "Show Grid" in the View menu, or by pressing ',(0,a.kt)("kbd",null,"Control + G"),"."),(0,a.kt)("h3",{id:"pixel-grid"},"Pixel Grid"),(0,a.kt)("p",null,"The Pixel Grid is a rectangular 1x1 grid that appears after a certain zoom level. You can change its color and after which zoom level it appears at the same place as the rest of the grid options."),(0,a.kt)("p",null,'To toggle its visibility, you can click on "Show Pixel Grid" in the View menu, or by pressing ',(0,a.kt)("kbd",null,"Control + H"),"."),(0,a.kt)("h2",{id:"tile-mode"},"Tile Mode"),(0,a.kt)("p",null,'If you are working with tiles, it might be useful to preview them in such a way so you can see if they repeat seamlessly. For this reason, you can enable Tile Mode, which repeats the canvas in multiple dimensions around the central area. To enable Tile Mode, you can go to the View menu, hover on Tile Mode and select what you want. "None" will disable Tile Mode, "Tiled in Both Axis" will repeat the canvas horizontally, vertically and diagonally, and the other two options will just repeat it either horizontally or vertically. It is also possible to draw in the tiled area.'),(0,a.kt)("h2",{id:"second-canvas"},"Second Canvas"),(0,a.kt)("p",null,"On the right side of the canvas, there is a grabber. Moving it to the left will reveal a second canvas. The purpose of this is to easily preview your artwork in different positions or zoom levels. As of right now, you ",(0,a.kt)("strong",{parentName:"p"},"cannot")," draw on it."),(0,a.kt)("h2",{id:"rulers-and-guides"},"Rulers and Guides"),(0,a.kt)("p",null,"On the top and left sides of the canvas, you can find two rulers. These serve two purposes, the first is to let the user easily and effortlessly measure distances in pixels, and the second is to create guides by clicking on them with the left mouse button and, while it's being hold, dragging the cursor to the position you want your guide to be at. Guides are either horizontal or vertical lines that can be used as references to help you to properly align stuff on your canvas."),(0,a.kt)("h3",{id:"editing-guides"},"Editing Guides"),(0,a.kt)("p",null,"To move an already created guide, you can drag the guide by clicking and holding the left mouse button while your cursor is pointing at the guide but it's also ",(0,a.kt)("strong",{parentName:"p"},"outside the canvas boundaries"),". If it's not, it will simply apply your currently selected tool. If the guide is completely moved outside the canvas area, it will be removed."),(0,a.kt)("p",null,"You can also change their colors by going to Edit, Preferences, Canvas."),(0,a.kt)("h3",{id:"toggling-visibility"},"Toggling Visibility"),(0,a.kt)("p",null,"You can also easily hide the rulers and the guides from the View menu. ",(0,a.kt)("kbd",null,"Control + R")," toggles the visibility of the rulers, and ",(0,a.kt)("kbd",null,"Control + F")," toggles the visibility of the guides."),(0,a.kt)("h2",{id:"transparent-background"},"Transparent Background"),(0,a.kt)("p",null,"If you are working with a drawing that has transparent pixels, a checkerboard background will appear there. Its purpose is to simply show that these areas are transparent. The background itself is ",(0,a.kt)("strong",{parentName:"p"},"not a part of your drawing"),". Meaning, it will not be exported along with the final image."),(0,a.kt)("h3",{id:"editing-the-transparent-background"},"Editing the transparent background"),(0,a.kt)("p",null,'You can edit the checkerboard background by going to the Edit menu, Preferences, and selecting Canvas. The options include the size of the checkers in pixels, the two colors that make up the checkerboard, and whether they follow the canvas movement and zoom level. If both "Follow Canvas Movement" and "Follow Canvas Zoom Level" are toggled on, the checkerboard match exactly the pixels of the canvas that you draw and will pretty much act as a second grid.'))}c.isMDXComponent=!0},5270:(e,i,t)=>{t.d(i,{Z:()=>o});const o="data:image/png;base64,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"},925:(e,i,t)=>{t.d(i,{Z:()=>o});const o="data:image/png;base64,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"},6176:(e,i,t)=>{t.d(i,{Z:()=>o});const o="data:image/png;base64,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"}}]);