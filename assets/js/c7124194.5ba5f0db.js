"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[126],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>u});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(l),u=n,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||r;return l?a.createElement(m,o(o({ref:t},c),{},{components:l})):a.createElement(m,o({ref:t},c))}));function u(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<r;p++)o[p]=l[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,l)}d.displayName="MDXCreateElement"},4049:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=l(7462),n=(l(7294),l(3905));const r={id:"drawing",title:"Drawing",sidebar_label:"Drawing"},o=void 0,i={unversionedId:"user_manual/drawing",id:"user_manual/drawing",title:"Drawing",description:"Drawing is the main feature of Pixelorama and it's what you will be doing most of the time. There are multiple tools that can be used for drawing in the canvas, with the main one being the Pencil tool.",source:"@site/docs/user_manual/drawing.md",sourceDirName:"user_manual",slug:"/user_manual/drawing",permalink:"/Pixelorama-Docs/user_manual/drawing",draft:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/drawing.md",tags:[],version:"current",lastUpdatedBy:"Simon Trahan",lastUpdatedAt:1683454253,formattedLastUpdatedAt:"May 7, 2023",frontMatter:{id:"drawing",title:"Drawing",sidebar_label:"Drawing"},sidebar:"docs",previous:{title:"The Timeline",permalink:"/Pixelorama-Docs/user_manual/user_interface/timeline"},next:{title:"Palettes",permalink:"/Pixelorama-Docs/user_manual/palettes"}},s={},p=[{value:"Drawing Tools",id:"drawing-tools",level:2},{value:"Pencil and Eraser",id:"pencil-and-eraser",level:2},{value:"Pencil Tool Options",id:"pencil-tool-options",level:3},{value:"Pixel Perfect",id:"pixel-perfect",level:3},{value:"Not pixel-perfect line on the left, compared to a pixel perfect line on the right.",id:"not-pixel-perfect-line-on-the-left-compared-to-a-pixel-perfect-line-on-the-right",level:5},{value:"Bucket",id:"bucket",level:2},{value:"Shape tools",id:"shape-tools",level:2},{value:"Color Picker",id:"color-picker",level:2},{value:"Mirroring",id:"mirroring",level:2}],c={toc:p};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Drawing is the main feature of Pixelorama and it's what you will be doing most of the time. There are multiple tools that can be used for drawing in the ",(0,n.kt)("a",{parentName:"p",href:"user_interface/canvas"},"canvas"),", with the main one being the ",(0,n.kt)("strong",{parentName:"p"},"Pencil")," tool."),(0,n.kt)("h2",{id:"drawing-tools"},"Drawing Tools"),(0,n.kt)("p",null,"You can use one of the available drawing tools in Pixelorama to bring your heart's content to life."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Shortcut"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Pencil"),(0,n.kt)("td",{parentName:"tr",align:null},"Draw individual pixels on mouse position."),(0,n.kt)("td",{parentName:"tr",align:null},"L: ",(0,n.kt)("kbd",null,"P"),", R: ",(0,n.kt)("kbd",null," Alt + P"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bucket"),(0,n.kt)("td",{parentName:"tr",align:null},"Fill a same-color area or all of the pixels of the same color with a new color."),(0,n.kt)("td",{parentName:"tr",align:null},"L: ",(0,n.kt)("kbd",null,"B"),", R: ",(0,n.kt)("kbd",null," Alt + B"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Line Tool"),(0,n.kt)("td",{parentName:"tr",align:null},"Create a straight line."),(0,n.kt)("td",{parentName:"tr",align:null},"L: ",(0,n.kt)("kbd",null,"L"),", R: ",(0,n.kt)("kbd",null," Alt + L"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rectangle Tool"),(0,n.kt)("td",{parentName:"tr",align:null},"Create a rectangle."),(0,n.kt)("td",{parentName:"tr",align:null},"L: ",(0,n.kt)("kbd",null,"S"),", R: ",(0,n.kt)("kbd",null," Alt + S"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ellipse Tool"),(0,n.kt)("td",{parentName:"tr",align:null},"Create an ellipse."),(0,n.kt)("td",{parentName:"tr",align:null},"L: ",(0,n.kt)("kbd",null,"C"),", R: ",(0,n.kt)("kbd",null," Alt + C"))))),(0,n.kt)("p",null,"Tools that are not used directly for drawing but are very helpful for your drawing process:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Shortcut"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Color Picker"),(0,n.kt)("td",{parentName:"tr",align:null},"Get the color of the pixel on mouse position."),(0,n.kt)("td",{parentName:"tr",align:null},"L: ",(0,n.kt)("kbd",null,"O"),", R: ",(0,n.kt)("kbd",null," Alt + O"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Eraser"),(0,n.kt)("td",{parentName:"tr",align:null},"Erase individual pixels on mouse position."),(0,n.kt)("td",{parentName:"tr",align:null},"L: ",(0,n.kt)("kbd",null,"E"),", R: ",(0,n.kt)("kbd",null," Alt + E"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Shading"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"shading"},"See this page for a detailed explanation.")),(0,n.kt)("td",{parentName:"tr",align:null},"L: ",(0,n.kt)("kbd",null,"U"),", R: ",(0,n.kt)("kbd",null," Alt + U"))))),(0,n.kt)("h2",{id:"pencil-and-eraser"},"Pencil and Eraser"),(0,n.kt)("p",null,"The main tools of Pixelorama. Used to draw or erase pixels at an individual pixel level. You can select from multiple ",(0,n.kt)("a",{parentName:"p",href:"../concepts/brush"},"brushes")," and change their size. You can also hold ",(0,n.kt)("kbd",null,"Shift")," before drawing to create lines between two points, and by also holding ",(0,n.kt)("kbd",null,"Control"),', you constrain them either by 15 degrees, or always making them be pixel-perfect angles by having the "Pixel Perfect" option enabled.'),(0,n.kt)("p",null,"The eraser erases pixels by simply subtracting their color RGBA value by the given opacity value. If the opacity value is 255 then the color RGBA value becomes (0, 0, 0 ,0), which is equivalent to black that is completely transparent."),(0,n.kt)("h3",{id:"pencil-tool-options"},"Pencil Tool Options"),(0,n.kt)("p",null,'The Pencil tool also has an "Overwrite Color" tool option. If this is enabled, the color of the drawn pixels will always become the same color as the selected one. Otherwise, if the colors are transparent, their alpha values will blend. For example, if the color of the drawn pixels have are 30% transparent and your currently selected color is 25% transparent, the resulting transparency will be 55%. While if the overwrite color option is on, the resulting transparency will always be 25%.'),(0,n.kt)("p",null,'The "Fill inside" option fills the entire area with the selected color between the first mouse-clicked position and the last, after the mouse button gets released.'),(0,n.kt)("h3",{id:"pixel-perfect"},"Pixel Perfect"),(0,n.kt)("p",null,"The Pencil and Eraser (and ",(0,n.kt)("a",{parentName:"p",href:"shading"},"Shading"),'!) tools have an option called "Pixel Perfect". This essentially creates "pixel perfect" lines for you by automatically removing the middle pixel of L-shapes. In other words, it removes extra adjacent pixels often referred to as "doubles" in order to create lines that are one-pixel thick.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Not pixel-perfect line vs pixel perfect line",src:l(6866).Z,width:"400",height:"90"})),(0,n.kt)("h5",{id:"not-pixel-perfect-line-on-the-left-compared-to-a-pixel-perfect-line-on-the-right"},"Not pixel-perfect line on the left, compared to a pixel perfect line on the right."),(0,n.kt)("h2",{id:"bucket"},"Bucket"),(0,n.kt)("p",null,'The bucket tool is a quick way to paint large sections of the image. You can select one of two fill areas. "Same color area" will fill the area around the mouse click position that is the same color as the pixel on mouse position with the selected color, using a ',(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Flood_fill"},"flood fill algorithm"),'. "Same color pixels" will change all of the pixels of the selected ',(0,n.kt)("a",{parentName:"p",href:"../concepts/cel"},"cels")," of the same color as the one on mouse position with the selected color."),(0,n.kt)("p",null,"You can also choose to fill with patterns instead of a color."),(0,n.kt)("h2",{id:"shape-tools"},"Shape tools"),(0,n.kt)("p",null,"The shape tools include the line tool, rectangle tool and ellipse tool. All of them are very straightforward to use; you click on where you want to place your shape, hold your mouse button and finally release it on where you want your shape to end. You can also change the shape's thickness, and for the rectangle and ellipse tools, you can choose whether to create hollow or filled with color shapes."),(0,n.kt)("p",null,"Similar to the ",(0,n.kt)("a",{parentName:"p",href:"selection"},"selection tools"),", you can use keyboard shortcuts to modify how the shapes are being created."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Mouse click + ",(0,n.kt)("kbd",null,"Shift")," = Create a 1:1 (square/circle) shape. For the line tool, ",(0,n.kt)("kbd",null," Shift")," will restrain the angle to be pixel perfect, similar to how ",(0,n.kt)("kbd",null,"Control")," and ",(0,n.kt)("kbd",null,"Shift")," do for the Pencil tool."),(0,n.kt)("li",{parentName:"ul"},"Mouse click + ",(0,n.kt)("kbd",null,"Control")," = Create a shape that expands from the center."),(0,n.kt)("li",{parentName:"ul"},"Mouse click + ",(0,n.kt)("kbd",null,"Alt")," = Displaces the origin of the shape.")),(0,n.kt)("h2",{id:"color-picker"},"Color Picker"),(0,n.kt)("p",null,"This one is fairly simple to comprehend. While not a drawing tool itself, the color picker tool is used for getting a sample of an existing color on the canvas with the purpose of replicating it, depending on which pixel the selection is done at."),(0,n.kt)("p",null,'Now, there\'s only one category available as an option for the time being, called "Pick for:". This means that the sample taken will replace one of the colors, either the ',(0,n.kt)("strong",{parentName:"p"},"Left Color")," or ",(0,n.kt)("strong",{parentName:"p"},"Right Color"),". Choosing ",(0,n.kt)("strong",{parentName:"p"},"Left Color")," replaces the left selected color, while right replaces the right selected color."),(0,n.kt)("admonition",{title:"Quick access",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can quickly access the color picker ",(0,n.kt)("strong",{parentName:"p"},"without changing tools")," by simply holding ",(0,n.kt)("kbd",null,"Alt")," and ",(0,n.kt)("kbd",null,"Left/Right Click")," the desired color to assign it to Left or Right tools respectively.")),(0,n.kt)("admonition",{title:"Quick access",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Another quick and helpful way to use the color picker is having it mapped to your ",(0,n.kt)("strong",{parentName:"p"},"right mouse button")," and having the ",(0,n.kt)("strong",{parentName:"p"},"Left Color")," option selected while having a drawing tool mapped to your ",(0,n.kt)("strong",{parentName:"p"},"left mouse button.")," The color picker can complement the drawing tool by selecting the color you next desire to paint with, making it an immediate way of switching between hues.")),(0,n.kt)("h2",{id:"mirroring"},"Mirroring"),(0,n.kt)("p",null,"All drawing tools can work with symmetry. Symmetry in Pixelorama is either horizontal, vertical or both at the same time. It can be enabled from the tool options. If, for example, horizontal symmetry is enabled, whatever you draw will get mirrored, meaning it will also get drawn on the other horizontal side, having the same distance from the symmetry line as your original drawing. So if you draw a pixel two pixels from the left of the vertical symmetry line and horizontal symmetry is enabled, then the pixel two pixels from the right of the symmetry line and on the same vertical position will also get drawn. The same holds true when vertical symmetry is enabled."),(0,n.kt)("p",null,"If you have both horizontal and vertical mirroring enabled, then the drawn pixels will get repeated four times."))}h.isMDXComponent=!0},6866:(e,t,l)=>{l.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAABaCAAAAACz0F92AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAnRSTlMAAHaTzTgAAAACYktHRAD/h4/MvwAAAAd0SU1FB+UIAhEaBc2HZMgAAAEDSURBVHja7dxLDoAgDAVAbu7VvQEJAfoJ8/bWltFNYxxjmm8j41p27tF8IiBAgAABAgQIECBAgAAB8iTITjP3BjnTVdaDAAQIECBAgAABAgQIECBAgKxWPn2Up6tkMaTVAwIECBAgQIAAAQIECBAgT4JErDpiq6RtnGq+F0CAAAECBAgQIECAAAECpC1Iy/aBAAECBAgQIECAAAECBAgQIAHtV/q0AQgQIECAAAECBAgQIECAAAGSdW2BroAAAQIECBAgQIAAAQIEyOMg97K+/oj9AX4ETak5gAABAgQIECBAgAABAgTI4yDzg55ntEnLOYAAAQIECBAgQIAAAQIESF2QH5pywwhSNdNIAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA4LTAyVDE3OjI2OjAyKzAwOjAwtyQFVQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wOC0wMlQxNzoyNjowMiswMDowMMZ5vekAAAAASUVORK5CYII="}}]);