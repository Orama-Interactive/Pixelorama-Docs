"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[156],{8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>r});var i=a(6540);const n={},s=i.createContext(n);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:t},e.children)}},8487:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"user_manual/image_effects","title":"Image effects","description":"You can apply multiple image effects to an image, to easily and quickly affect its content, without modifying it pixel by pixel. The image effects can be found under the Image menu.","source":"@site/docs/user_manual/image_effects.md","sourceDirName":"user_manual","slug":"/user_manual/image_effects","permalink":"/Pixelorama-Docs/user_manual/image_effects","draft":false,"unlisted":false,"editUrl":"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/image_effects.md","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1742246888000,"frontMatter":{"id":"image_effects","title":"Image effects","sidebar_label":"Image effects"},"sidebar":"docs","previous":{"title":"Drawing","permalink":"/Pixelorama-Docs/user_manual/drawing"},"next":{"title":"Selecting","permalink":"/Pixelorama-Docs/user_manual/selecting"}}');var n=a(4848),s=a(8453);const o={id:"image_effects",title:"Image effects",sidebar_label:"Image effects"},r=void 0,l={},c=[{value:"List of image effects",id:"list-of-image-effects",level:2},{value:"Animate image effects",id:"animate-image-effects",level:2}];function h(e){const t={a:"a",admonition:"admonition",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"You can apply multiple image effects to an image, to easily and quickly affect its content, without modifying it pixel by pixel. The image effects can be found under the Image menu."}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["Image effects are ",(0,n.jsx)(t.strong,{children:"destructive"}),". This means that, once they are applied, they directly modify the image data, and the only way to reverse this change is by undoing. If you want to use a non-destructive workflow, use ",(0,n.jsx)(t.a,{href:"../concepts/layer#layer-effects",children:"layer effects"})," instead."]})}),"\n",(0,n.jsx)(t.h2,{id:"list-of-image-effects",children:"List of image effects"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Offset"}),(0,n.jsx)(t.td,{children:"Moves the pixels of the image to a new position. The moved pixels can optionally be wrapped around when they go out of bounds. For example, if a pixel leaves the canvas from the right, it re-appears on the left side."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Mirror"}),(0,n.jsx)(t.td,{children:"Mirrors the content of the image horizontally, vertically or both."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rotate"}),(0,n.jsx)(t.td,{children:'Rotates the content of the image. Can change the angle, the pivot point, as well as the algorithm. There are seven rotation algorithms to choose from: Rotxel with Smear, cleanEdge, OmniScale, Nearest Neighbor (Shader), Nearest Neighbor, Rotxel and "Upscale, Rotate and Downscale". The first four are shader-based, meaning that they use the GPU, while the rest use the CPU. The algorithms that use the GPU tend to be faster. Rotxel with Smear can also create a smearing effect.'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Invert colors"}),(0,n.jsx)(t.td,{children:"Inverts the colors of the image. Can choose whether this affects the red, blue, green or alpha channels, or multiple at once."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Desaturation"}),(0,n.jsx)(t.td,{children:"Desaturates the colors of the image, turning them to grayscale. Can choose whether this affects the red, blue, green or alpha channels, or multiple at once."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Adjust Hue/Saturation/Value"}),(0,n.jsx)(t.td,{children:"Adjusts the hue, saturation and the value of the image's colors."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Adjust Brightness/Contrast"}),(0,n.jsx)(t.td,{children:"Adjusts the brightness, contrast, and even the saturation, RGB values and tint color of the image's colors."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Palettize"}),(0,n.jsx)(t.td,{children:"Limits the number of colors of the image to the colors of the currently active palette. Each color is being mapped to the nearest color in the palette."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Posterize"}),(0,n.jsx)(t.td,{children:"Limits the number of colors of the image to the posterization level. Can also set an optional dither intensity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Gradient map"}),(0,n.jsx)(t.td,{children:"Converts the colors of the image into a gradient, based on their lightness. Darker colors are mapped to colors on the left side of the gradient, and brighter colors are mapped to colors on the right side of the gradient."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Outline"}),(0,n.jsx)(t.td,{children:'Generates an outline, with a given thickness, color and pattern. The outline is being generated outside the pixels that have transparent pixels are neighbors. If "place inside image" is toggled on, the outline is being drawn on these pixels themselves, rather than outside them.'})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Drop shadow"}),(0,n.jsx)(t.td,{children:"Creates a shadow of the image's content at a given offset, with a given color."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Gradient"}),(0,n.jsx)(t.td,{children:"Generates a gradient. Its colors can be modified from the gradient edit, by clicking on the colored area to add new color steps. Clicking on the color steps with the left mouse allows you to change the color of that step, and right clicking on a step, removes it. Gradients can either be linear or radial, and they can optionally be dithered and/or repeated. You can also generate step gradients by changing the interpolation type to constant."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Pixelize"}),(0,n.jsx)(t.td,{children:"Pixelates the image by combining its pixels into larger squares, containing their average color."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Gaussian Blur"}),(0,n.jsx)(t.td,{children:"Blurs the image. Users can choose the blur type, amount, radius and direction."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"animate-image-effects",children:"Animate image effects"}),"\n",(0,n.jsx)(t.p,{children:'Some of these image effects can be animated. To animate an image effect, first create as many frames as you want the animation to last for, and select them. Then, open the image effect dialog you desire, and click on the small play icon on the top right side of the dialog. A new dialog will appear, containing all of the animatable properties. Select the property you wish to animate, toggle "Animate" on, and put the initial and final values, as well as the ease type and interpolation. Once you\'re done, click on "OK" on the image effect dialog, and the image effect will be applied to all of the selected frames, with the animatable properties you chose being automatically interpolated based on the position of each frame. This method can be used to easily make something move, rotate, etc, without having to edit each frame manually.'}),"\n",(0,n.jsx)(t.admonition,{title:"Affect active selection",type:"tip",children:(0,n.jsx)(t.p,{children:'By default, image effects will affect only the selected area of the cel(s). If there is no active selection, the entire cel(s) will be affected. If you have an active selection but want to affect the entire image, you can toggle off the "Only affect selection" checkbox in the dialog of the image effect you wish to apply.'})}),"\n",(0,n.jsx)(t.admonition,{title:"Affecting multiple cels at once",type:"tip",children:(0,n.jsx)(t.p,{children:'By default, image effects will apply in all of the currently selected cels. It is also possible to make them apply to the entire selected frame, to all frames of the project, and to all projects as well, by selecting one of these options from the option button found next to the "Only affect selection" checkbox, in the dialog of the image effect you wish to apply.'})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);