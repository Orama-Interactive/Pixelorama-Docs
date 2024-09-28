"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[431],{8314:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=t(4848),o=t(8453);const n={id:"project",title:"Project",sidebar_label:"Project"},r=void 0,s={id:"concepts/project",title:"Project",description:'In Pixelorama, the term "Project" refers to the entire sprite, which contains all of the frames and layers it might have. Each project can be saved as a .pxo file. Multiple projects can be opened in Pixelorama at the same time, with each one having its own tab.',source:"@site/docs/concepts/project.md",sourceDirName:"concepts",slug:"/concepts/project",permalink:"/Pixelorama-Docs/concepts/project",draft:!1,unlisted:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/concepts/project.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1727549971e3,frontMatter:{id:"project",title:"Project",sidebar_label:"Project"},sidebar:"docs",previous:{title:"Layer",permalink:"/Pixelorama-Docs/concepts/layer"},next:{title:"Extension Basics",permalink:"/Pixelorama-Docs/extension_system/extension_basics"}},l={},c=[{value:"Saving a project",id:"saving-a-project",level:2},{value:".pxo files",id:"pxo-files",level:2},{value:"File structure",id:"file-structure",level:3},{value:"Include blended images",id:"include-blended-images",level:3}];function d(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:['In Pixelorama, the term "Project" refers to the entire sprite, which contains all of the frames and layers it might have. Each project can be saved as a ',(0,i.jsx)(a.code,{children:".pxo"})," file. Multiple projects can be opened in Pixelorama at the same time, with each one having its own tab."]}),"\n",(0,i.jsx)(a.p,{children:"A project contains the following properties:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["The image data of each individual ",(0,i.jsx)(a.a,{href:"cel",children:"cel"}),"."]}),"\n",(0,i.jsx)(a.li,{children:"The properties of the project itself, such as its name, size and FPS (frames per second)."}),"\n",(0,i.jsxs)(a.li,{children:["All of the properties of frames, ",(0,i.jsx)(a.a,{href:"layer",children:"layers"}),", cels, animation tags, ",(0,i.jsx)(a.a,{href:"../user_manual/user_interface/canvas/#rulers-and-guides",children:"guides"}),"."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"brush",children:"Brushes"})," that are local to that specific project."]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"saving-a-project",children:"Saving a project"}),"\n",(0,i.jsxs)(a.p,{children:["See ",(0,i.jsx)(a.a,{href:"../user_manual/save_and_export/#saving",children:"this page"})," to learn how to save a project."]}),"\n",(0,i.jsx)(a.h2,{id:"pxo-files",children:".pxo files"}),"\n",(0,i.jsx)(a.p,{children:"Pxo files are Pixelorama's custom file format that saves the entire content of the project. It cannot be opened in other image editors."}),"\n",(0,i.jsx)(a.h3,{id:"file-structure",children:"File structure"}),"\n",(0,i.jsxs)(a.p,{children:["The file format is essentially a .zip file in disguise. It contains a ",(0,i.jsx)(a.code,{children:"data.json"})," file, and an ",(0,i.jsx)(a.code,{children:"image_data"})," folder. The ",(0,i.jsx)(a.code,{children:"data.json"})," file contains all of the project's metadata, such as project name, size, FPS, and the metadata of layers, frames, cels, etc. They are stored in JSON form, so they can easily be read by other software."]}),"\n",(0,i.jsxs)(a.p,{children:["The ",(0,i.jsx)(a.code,{children:"image_data"})," folder contains all of the image data. It contains another folder called ",(0,i.jsx)(a.code,{children:"frames"}),", which in turn contains a folder for each ",(0,i.jsx)(a.code,{children:"frame"})," of the project, and each frame folder contains the image data of every ",(0,i.jsx)(a.a,{href:"cel",children:"cel"})," that belongs to that frame. To preserve a non-destructive workflow, the cel image data are not affected by layer blend modes and layer effects. If the project has ",(0,i.jsx)(a.a,{href:"brush",children:"brushes"}),", a ",(0,i.jsx)(a.code,{children:"brushes"})," folder is also created, containing all of the brush image data. If you have enabled the option to include the blended images, the ",(0,i.jsx)(a.code,{children:"image_data"})," folder will also contain all of the final image data for each frame. A final image is composed of every cel, with the layer effects applied to each cel, blended together into a single image, taking the blend modes of each layer into account."]}),"\n",(0,i.jsxs)(a.p,{children:["In order for a software to read the data of a pxo, it has to open it as a zip file, and then it has to read the ",(0,i.jsx)(a.code,{children:"data.json"})," file, and parse it as JSON object. Then, it either has to loop through the all of the folders included in ",(0,i.jsx)(a.code,{children:"image_data/frames"}),", where each folder contains the cel data for each frame separately, or, if the final blended images are included and that's all we care about, it just has to loop through all of the images inside the ",(0,i.jsx)(a.code,{children:"image_data"})," folder, where each image corresponds to every frame of the project, and import them."]}),"\n",(0,i.jsx)(a.h3,{id:"include-blended-images",children:"Include blended images"}),"\n",(0,i.jsxs)(a.p,{children:["During save, you are given the option to select if the blended images will be included in the exported file. If enabled, the final blended images are also being stored in the pxo, for each frame. This makes the pxo file larger and is useful for importing by third-party software or ",(0,i.jsx)(a.a,{href:"../user_manual/cli",children:"CLI exporting"}),". Loading pxo files in Pixelorama does not need this option to be enabled."]})]})}function h(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>s});var i=t(6540);const o={},n=i.createContext(o);function r(e){const a=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(n.Provider,{value:a},e.children)}}}]);