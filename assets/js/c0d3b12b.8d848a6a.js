"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[346],{9455:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=t(4848),r=t(8453);const a={id:"Import",title:"Import",sidebar_label:"Import",sidebar_position:4},n=void 0,s={id:"user_manual/Import",title:"Import",description:'In Pixelorama, it is possible to import .pxo files, image files, palette files and extension files. To import a file, either drag and drop it into Pixelorama window or use File > Open dialog. You can also open files in Pixelorama through the your computer\'s file explorer by right clicking on a file, selecting "Open with" and selecting Pixelorama, but the process of making this work is different for each operating system/desktop environment. Doing this will open Pixelorama with the file automatically opened. You can also achieve the same thing by opening Pixelorama through the command line, and giving the names of the files you want to open as arguments.',source:"@site/docs/user_manual/import.md",sourceDirName:"user_manual",slug:"/user_manual/Import",permalink:"/Pixelorama-Docs/user_manual/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/import.md",tags:[],version:"current",lastUpdatedBy:"Variable",lastUpdatedAt:1725312146e3,sidebarPosition:4,frontMatter:{id:"Import",title:"Import",sidebar_label:"Import",sidebar_position:4},sidebar:"docs",previous:{title:"Save and Export",permalink:"/Pixelorama-Docs/user_manual/save_and_export"},next:{title:"Palettes",permalink:"/Pixelorama-Docs/user_manual/palettes"}},o={},l=[{value:"Supported image formats",id:"supported-image-formats",level:2},{value:"Import image options",id:"import-image-options",level:2},{value:"Importing multiple images",id:"importing-multiple-images",level:2}];function m(A){const e={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...A.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["In Pixelorama, it is possible to import ",(0,i.jsx)(e.a,{href:"../concepts/project/#pxo-files",children:".pxo files"}),", image files, ",(0,i.jsx)(e.a,{href:"palettes",children:"palette files"})," and ",(0,i.jsx)(e.a,{href:"../extension_system/extension_basics",children:"extension files"}),". To import a file, either ",(0,i.jsx)(e.code,{children:"drag and drop"})," it into Pixelorama window or use ",(0,i.jsx)(e.code,{children:"File > Open"}),' dialog. You can also open files in Pixelorama through the your computer\'s file explorer by right clicking on a file, selecting "Open with" and selecting Pixelorama, but the process of making this work is different for each operating system/desktop environment. Doing this will open Pixelorama with the file automatically opened. You can also achieve the same thing by opening Pixelorama through the command line, and giving the names of the files you want to open as arguments.']}),"\n",(0,i.jsx)(e.h2,{id:"supported-image-formats",children:"Supported image formats"}),"\n",(0,i.jsxs)(e.p,{children:["The image formats that can be imported are: ",(0,i.jsx)(e.code,{children:".png"}),", ",(0,i.jsx)(e.code,{children:".apng"}),", ",(0,i.jsx)(e.code,{children:".jpg"}),"/",(0,i.jsx)(e.code,{children:".jpeg"}),", ",(0,i.jsx)(e.code,{children:".webp"}),", ",(0,i.jsx)(e.code,{children:".bmp"}),", ",(0,i.jsx)(e.code,{children:".svg"}),", ",(0,i.jsx)(e.code,{children:".tga"}),", ",(0,i.jsx)(e.code,{children:".hdr"}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"import-image-options",children:"Import image options"}),"\n",(0,i.jsxs)(e.p,{children:["When attempting to import an image, a dialog will appear, containing a preview of the image you want to import, along with options that let you change how you want the image to be imported.\n",(0,i.jsx)(e.img,{alt:"Import image dialog",src:t(6226).A+"",width:"608",height:"607"})]}),"\n",(0,i.jsx)(e.p,{children:"These options include:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"New project, that lets you open the image as a new project"}),"\n",(0,i.jsx)(e.li,{children:'Spritesheet (new project), that lets you open the image as a spritesheet in a new project. You can manually set the amount of horizontal and vertical frames, or select "smart slice", which attempts to figure out the amount of frames in the spritesheet automatically.'}),"\n",(0,i.jsx)(e.li,{children:"Spritesheet (new layer). Same as above, but instead of opening the spritesheet in a new project, it opens it as a new layer in the currently active project."}),"\n",(0,i.jsx)(e.li,{children:"New frame, which opens the image as a new frame in the currently active project. You can specify which layer the new frame will belong to."}),"\n",(0,i.jsx)(e.li,{children:"Replace cel, which replaces a cel at the frame and the layer of your choosing, with the imported image in the currently active project."}),"\n",(0,i.jsx)(e.li,{children:"New layer, which opens the image as a new layer in the currently active project. You can specify in which frame the new layer will be at."}),"\n",(0,i.jsx)(e.li,{children:"New reference image, which opens the image as a reference image in the currently active project."}),"\n",(0,i.jsxs)(e.li,{children:["New palette, which creates a new ",(0,i.jsx)(e.a,{href:"palettes",children:"palette"})," using the colors of the imported image."]}),"\n",(0,i.jsxs)(e.li,{children:["New brush, which opens the imported image as a ",(0,i.jsx)(e.a,{href:"../concepts/brush",children:"brush"}),". You can choose whether the new brush will be a file brush, a project brush, or a random brush."]}),"\n",(0,i.jsx)(e.li,{children:"New pattern, which opens the imported image as a pattern, which can be used by the bucket tool."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"importing-multiple-images",children:"Importing multiple images"}),"\n",(0,i.jsxs)(e.p,{children:['When importing multiple images at the same time, the import dialogs will also have an "apply to all" checkbox. When toggling this on in a dialog, the rest of the dialogs will hide and all of the imported images will share the same options. This way you can easily import multiple images as multiple projects, frames, layers, etc. The order that they are being imported is backwards, meaning that the the last image that you attempted to import, will be the first one that actually gets opened. For example, if you attempt to import image files named ',(0,i.jsx)(e.code,{children:"1.png"}),", ",(0,i.jsx)(e.code,{children:"2.png"})," and ",(0,i.jsx)(e.code,{children:"3.png"})," in that order as new frames, the first frame would be image ",(0,i.jsx)(e.code,{children:"3.png"}),", then ",(0,i.jsx)(e.code,{children:"2.png"})," and then ",(0,i.jsx)(e.code,{children:"1.png"}),"."]})]})}function d(A={}){const{wrapper:e}={...(0,r.R)(),...A.components};return e?(0,i.jsx)(e,{...A,children:(0,i.jsx)(m,{...A})}):m(A)}},6226:(A,e,t)=>{t.d(e,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmAAAAJfCAMAAADvmZqaAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACf1BMVEUSEhI2NjZNTU1SUlKTk5OUlJTU1NRVVVVUVFRgYGCoqKjExMTFxcWtra1YWFigoKDGxsa1tbWSkpJWVlaNjY22trbDw8O5ublXV1erq6u3t7d8fHx3d3eQkJC4uLh2dnZ4eHiLi4vAwMCwsLCqqqq/v7+JiYmnp6daWlp/f3+ysrKEhIRsbGx1dXVlZWVzc3N5eXmxsbFycnLCwsK7u7ubm5uFhYXBwcF6enpbW1ucnJyZmZmurq5paWm8vLyXl5eBgYFubm6vr69tbW2MjIyamppoaGizs7OAgIB7e3t0dHSdnZ1nZ2dra2uYmJhwcHCHh4dxcXF+fn6fn5+RkZG+vr5TU1O0tLS6urpcXFxmZmZ9fX2GhoZZWVldXV2CgoJfX1+enp6Pj49hYWFqampvb29jY2OKioqpqamOjo6kpKSVlZWIiIiioqK9vb2lpaViYmKjo6MkJCTLXnCUQ37heWXm0KGMQzhHCRo8eMQ7sWevKU7f4cOqZ3VgPkRnNCmLVVn0mlSXhLBVPmBAMUxsUXo0RSutbl0vNiZJGiaGTURuJyefPjHMq4UkEB0+SynST4y9WbBGLUxhPWZ0UIA6OjozMzOsrKwmJiZMTEyWlpY4ODgvLy9CQkIlJSVeXl5ERERAQEA3NzehoaEoKChQUFBISEhGRkZPT080NDRDQ0NRUVEyMjJKSko7Ozs/Pz9BQUEwMDAsLCwrKytHR0c9PT0tLS0pKSkqKioxMTEnJydkZGRFRUU1NTU8PDw5OTlJSUk+Pj5OTk4uLi5LS0sXFxciIiIYGBgfHx8ZGRkgICCDg4McHBwjIyMhISEaGhqmpqYbGxsdHR0LCwv///+HKrHaAAAAAWJLR0TUCbsLhQAAAAd0SU1FB+gFFhUxC8AzC90AAB85SURBVHja7d2Lf9RkvsdxYFqRMkgKtMWiXKaUS7kItNBysRYKlKtcW6FyLSCsVC5BXc7ZI8LhuLLrrnpcFYS14gUFBNYb4m2X9RKrUsXd8w+dJ5Npp0mfPpNkMtOZ9vN9vZimk0ySSd7MJL8+edKvX/8BIUJSkgH9+/Xrz2YgqUv/fnx+kVR+hvVjG5BUBmAEYCQ7kpPbdQhgJDBfd9yR6xwCGAksuXfEXAlfd+QALNAMvJNt0C6ssy+ABZJBeYPDQ+5iO0SF2Xz1TWBDNU0bnD9MiBgy1PWLho8oKCzKGSkdd3fxqHvuxZclzOarjwIbPWbM2HGRkjs9ALtzfOmEMRNKJ8rGTdImY6uTsJy+XqYYWmY+jtHGegA2RZsqHqdp90jGTdfug1bH+WP8DLKPAxupTbCAzSgrnGkKmXV3ecXsSWJgTkHlzCrxc+680tL5sS/FBXnRH8Xim/D+iZXVD4jv15rwwkXlJbWhxeIbV7vzgYJQqGLJ+MFLawrvqSucWbt0QXl+VZ/0ZRPWh4FN15ZFgS0P56xYOXhVaHX4wTUzCsQTy8JrZy0JrwsNLCuYsb56g/Wawo0dn1flE8fU1I9vCNVoo2uqHtp05+YxWk1jKAosnDNjUo22aPnDxdWjt8yYWDio7/nKybUJ65vA6kaO3Lp6QeW2KLBNglBD/pLQoFkN4sOrsiE0dIiYZsN2AW16KDQqHEVyl7YlfgR3Zyi0TpsmgC00v2inhxrNr8gosJVifI0mXlGlTQmFdmjL+56vTvWwPn0WqWllC6NnkdO1quHDhy8RH2qrduaXlmvDQ1vCTUvNyTaUiRG7xJGaHVjpMPOxIldIEl+fu7U9nYANiwIbHgqt1mrFoKmsz/myC+ubwIpra1dvM4cEsD1Rbdqm0CORlbW79po6li0KV0xoCO2zxiwzJ2wIt5chGixqJfPcAJvTx84gc5xDffkYLAZst7Z9tcj9od9satchDu/nDJ4QenSROWL15uiUM60CxYJxoUiUWnUOwLoIy+k6BLCBpebh+9aBof2bxDHYEqFjQbMpaWioOWJ+ylm+Qs1h82tznTYm9Fi+mG5P9BgMYAkDsNCU8LA1VQX3hlZo85bvDGtzQ7mVU/Y0D94e2lpcV7UmNzI3OuXARdVzxkw4cDAUWlr+6Ir11dGzSBfADu2bHmp4rCoUGrERYH0TWGhy3eCiJoFiyujyw6PKdocGNhUV5q8VI3bsLK0cPzU26dbcivK6ceYX6NTxhRX7R4bcAVtdsTA0vFh8Jm44DDBCAEYARgjACMAIwAhJDEwnJAUBGAEYARghACMAIwAjBGAEYKRPAjviOY/7jnK2TyhyJP15IjXxvZC0rF0SWx1gAAMYwAAGMIABDGAAAxjAAAawAIAFtQsfTzap2YI9bvFIpiSlW+vxxwEGMIABDGAAAxjAAAYwgAEMYAALAJh88QG/uaBKZj1X78kw4U+kMe72LMAABjCAAQxgAAMYwAAGMIABDGAAA1iWAPPwBny886BKsz2+sVNjKStWMsHeAxjAAAYwgAEMYAADGMAABjCAASxlwAJuQxTUW+3xkllmJ6XtyRL8zwcYwHorsCcTJJ3AOi0WYAADGMAABjCAAQxgAOutwALq/0b+VqN78rcJIt3fSb9zuXPnYrP1hLMHGlAlCMAABjCAAQxgAAMYwADWDTM/J5g+gXWPG2AAA1iWAns8WG/JAktiK3d5LwpgWd92xreaoJb8xBMAAxjAAAYwgAEs04AdNePcqXJg3o7BfQCTrgvAAAYwgAEMYJ6B+V6bQIH5Ei6vg8mBudjpKfXxeDrife95+k8BMID1QmDSU8lOZ4lSYEfjCRJY93+QBBjAAAYwgAEMYAADGMAABjCAuQYW1FvtfnXd/UEyXkXo8rdIxd8mpU3HFFfHyYFJ19jFhXaO6+AcL3VuWPm8HJXgLqMS/d7NazutQMCF325eCjCAAQxgAAMYwAAGMIB1ylEHqy77X3rSJx+lWJZiAU5a/xHPf3bkd/EkOg92Xhd3xOtqKWb4W/dvOfbmAAawvgMsFeWabAEWn2uvApaiFmA+62AAAxjAAAYwFbCjjsi3U6dRiVosdprUVQtGOTAnLSv/1ZHfOeOh4w1XU/3WazycngMMYAADGMAABrBMA5aa66myC1j8rKG3AkvukjQ3QgAGsL4CTP43OcUnu1RZF1vdL8YfMItV/P9BF2bS1TrqeKLTGijecXxWR/0BSzRvgAEMYAADGMAABjCA9SlgPq4r8djuo7t3bG8sJz1VlHaOc9T5F8ynzCQ8XUv0t0h/wOQzTHSKrOh9z4lV8buHeQd4+9ZuiqIAAxjAAAYwgAEMYAADGMAAli5gimJGwnaxiYA594FnYM64A9Z91SBRSSVhTcVzC9eeBub/KhPpNC46y28vPbnoliRNwOIL6K3AAuyw2Ou9igAGMIABDGAAA1iGAJNeUn3ElQ8vZ1OuGhw6Z9ClwaH0sjUFMOdOlQNz9z79Aet+XQAGMIABDGAAA1gGAfPfG6zbuLvNVe8D1qm7nh4HlrKeipO8LjIltqQt/Z50dU1Opz+/yFv2Kdrsdf/SLo3+EgHrtBqJruRRrJaibWKXNZIuUPFmpP8HAQYwgAEMYAADGMAABjCAASzVwJJtNOTcRM6GeJ2AKaZy/v7UMRFFy76j3c9LscCEM/C6LHlryURvTr4Y6QIVqyGdNBX3PEqyDgYwgAEMYAADGMAABrDsA9b9nX+6zE46lXPUU1aOWeloZmjm2NNWjh8//qRiXt0v0MO9ihLdJOjJ7rsStS/Q9uzjinsRxXevfBvK3uyRRCsEMID1AmBJd9PvrhiWaHd3M9UJM50UdciKJUBgidal854NBJi1uZ1zlZPv2Mwu77bmxmqwARjAAAYwgKWoUWL8sM3+5AkrT3U5+OqU2JNxYNHEno3NILlr04O6Y4Db4xnZyHZgmRqAAQxgAAMYwACWDLBA76XsS+YJW55Sxc4tBiz25DGpM9/cekJfSuNY5xOJAzCAAQxgAAMYwAAGMIABDGAAA1jqgXm4oCSlRaAjbkh5B2Z3JuXWHt/lPeW7VNKUb5DUWpKK+m9FTlr5n1gABjCAAQxgAAMYwAAGMIABDGAASx2wnivFnJCWvFQtco6pgNmdPS11dtw9u6DuOdwTVS0XpJ6xIif1jCwnHdBsUXR+AjCAAQxgAAMYwAAGMIABDGAAAxjAAJYhwJLuBta3rKdccLET8AFMGQ/F2ExrwOVZ1Ak7F2VNVZpuvLWrAxjAAAYwgAEMYAADGMAABjCAASwAYEFdrOXhvXrAIx0nB+aYVOpMSsnVyHRwO5JsVKKeUVa87L+e9BGAAQxgAAMYwAAGMIABDGAAAxjA0gvMTWJv7vcuolTjQZbqSaWz48f8RtmkxwMiF53anPBNSm5J+pubVjsAAxjAAAYwgAEMYAADGMAABjCApR5YUPchir3HZ1U5ZYsPhLH9+wdb5LLsdzBSNdM57qEc5r2XHqWI4y4SewfyZalIyetgHi4nUjbXcU4DMIABDGAAAxjAAAYwgAEMYAADWADAgupU449+c0oVh7fnrMRkPWeLsp8U+aVGLpwdd3FVkit2sXgotkmdefChrIPJR570H4ABDGAAAxjAAAYwgAEMYAADGMAABrBMB+a/Px27LGWF1U5KNU6u7zmVLDfAHF3vuLimTV6MVVr0UKJVLks1H7uzZ5IttLq5pu2kqz53AAYwgAEMYAADGMAABjCAAQxgAEs1MOVFVt5LXs+6iPSFDmD22J0dU/W546YHHje1Lje99LhRd9x97K94WgnN+2Vrnq5Q6ywr9tuJEwADGMAABjCAAQxgAAMYwAAGMIAFAOyE+3g39Mdk46h1qepgsbS37JH20qPsgUdVI/PSX7AbPL5fqSyLJV0H836voo75AAxgAAMYwAAGMIABDGAAAxjAABYAsGeDTdJ1MHvkwFR1MCc0Gzc3nQm7adnjoZ2Oh2n8Q3XTiEdZB1PVuOTFMadigAEMYAADGMAABjCAAQxgAAMYwAIA9sfMjBKWVJRjnKprYUd1zP5KZa0sqKuKlJQ8OHNTFVPJkhe5pHWwBB2tAAxgAAMYwAAGMIABDGAAAxjAABYAsKQb1kjrYEnX01zUv3yUw+TQ7DNQ1spUzo55uI7IQ3Md79wcVTGVs5NuLElb/zhnBzCAAQxgAAMYwAAGMIABDGAAAxjAAJbpwALuBydpqFIm7RfO/cl93NwRXHUxnLwzYQ/XtHlo5BXwJXJ2Z+1RFlrdWFIHYAADGMAABjCAAQxgAAMYwAAGsJQBCxaND5ny/n1ieGIi7KIcT6YGWLK9B/to5BVU7NyUnQB77xJYcUtlgAEMYAADGMAABjCAAQxgAAMYwPwCi93C+FRAdx7yTzNpYKdscdOyRz5S1Ytwxjizv/DP9jxvRcXt6ZPuY9+wHU8CDGAAAxjAAAYwgAEMYAADGMAA1qPAUholMA/NdexqPABrx+iiM+GnXdzsSH5nZN/O5IbkM5ACcyxSxe2UqwAMYAADGMAABjCAAQxgAAMYwAAWHDDH5NKd7gGfm0mVFbTUAHPg8XC/ZlXnKU+5uNmRlyKZ96qYElgMoXJ29pGxdT7lPs8+CzCAAQxgAAMYwAAGMIABDGAAAxjAAJbpwJSvk+pzQ0rp1d44S35FWdLtwVRqlMD89ynsphjrpj2Y9454YobkxVh7odU+O3d43DT8AxjAAAYwgAEMYAADGMAABjCAASzVwNxETsrKcy5uOfScstvfgIDJl2V/1k1Zzf72lM7sk7rpl8eHM9WVaQ5gsRWRNiR7PvlrDwEGMIABDGAAAxjAAAYwgAEMYADLBGAqWX+QXgpm33XPqeK/uY4b07FfpTP/g31lVYbcFMeUW8v/jYykl605KMVGSlm0A4tNmsR1hgADGMAABjCAAQxgAAMYwAAGMIBlELDYPlMCk+7J51wkaWDKSX0Dc4PIhzfvifmIzdyx6+147DUuB7BYPBTAOuYEMIABDGAAAxjAAAYwgAEMYAADWODAXrDnRSux3+Rvzm7IDky5J+1VqBMuCHgBpiqgOfC4mXmyTH4fUBxNaeylLuk4x0hlHcweT7fHBhjAAAYwgAEMYAADGMAABjCAASw4YHZRL76giBKYvOKlahejNJAxwE6lP6pmNo4al3RSL811kr21lOJeRQADGMAABjCAAQxgAAMYwAAGMIABDGAZAiym5n+tyBE5RtojranK91mmAPPRHuylHkuMgHKaGCXpk3+WzuB5VfysJsAABjCAAQxgAAMYwAAGMIABDGDBAXPETkrZZkzVyMs/sKQTMLC/9HSedx/HK+3O7LNzdgYsnYGrAAxgAAMYwAAGMIABDGAAAxjAABYAsJgaF810XnAAsyP8UxojXZ/ULtJ3GSu2/T1MGpQz/5GuT4L3BTCAAQxgAAMYwAAGMIABDGAAA1gAwJRNcZQjVfFwhY6X3RxbH7ustDjzYCCoqBCmSFYSawswgAEMYAADGMAABjCAAQxgAANYcK0p7OWwF1Xc2qdRXXmkrF8p2apeKK/L2VenB8phchgeCmD+9aZDlvJdui60AgxgAAMYwAAGMIABDGAAAxjAAAYwgPU0MGUHv1JKrroGtqlzVamVLsTh3cXsTqnqro7ZZVi9VdniykMx1n+rtSRWHWAAAxjAAAYwgAEMYAADGMAABrAAgHm4bE1ZFvNwwZv8FaoOfeRQ7fNRdmOs/L/h3VmP97XjxcfLtni/1M6daYABDGAAAxjAAAYwgAEMYAADGMACAGbfPadU+8XDFW5yQx52empySlWt88AtHaWlFOVl9wnmsjWAAQxgAAMYwAAGMIABDGAAAxjA3ANTlrGUt1SWtuU55RmRf2/KF3qYnaqh0Isp6RlY3UOwi4t6HAZe9pygKnEAAxjAAAYwgAEMYAADGMAABjCABQlMiuZFN+Uj37vQzQuTXkbAFbRkgWV2xUvJzt00AAMYwAAGMIABDGAAAxjAAAYwgAEMYJkOLNk66Qu+Z5A0Ww95KR3xU59MO56gCq2u24MBDGAAAxjAAAYwgAEMYAADGMAA5vmytQxNOkX0QDlLXmF6OYsCMIABDGAAAxjAAAYwgAEMYAADWOqBvZRZUVaReuB+PW5e2OOd7Mjb1yivd0uiVgYwgAEMYAADGMAABjCAAQxgAANYAMBeyvr8JVOi2qEvuxmZvQEYwAAGMIABDGAAAxjAAAYwgAEsM4C5KftkI5demuAa6NjnCjACMIABDGAAAxgBGMAABjCABQBMTkC1itlcquqLIlz4CCAAAxjACMAABjCAAQxgBGAAAxjAAJbpwHqblgT1wCQbZ6V036dFRKpWE2AAAxjAAAYwgAEMYAADGMAABrCUAaP81FurYhlSB2NPAgxgAAMYARjAAAYwAjACMAWwoN65m83iZpP53rxpKvv03J5Mg1A/2w5gAAMYwAAGMIABDGAAAxjAAAawAIBRWsquOlamBmAAAxjAAEYABjCAAQxgACMA65GrivzfClnVe/BL3veSmz3ouwiUIhjp0Oth1V1VMV1tfIABDGAAAxjAAAYwgAEMYAADGMAABrBMB2afjK5801pvVRLIrtIswAAGMID1QmCEBBmAEYARgBECMAIwAjBC/AN7hZBAwicY4SuSAIwQgBGAEYARAjACMAIwQgBGAEYABjACMNJ7gE2u9jiLV+eUVZ5eeEbXc7eoJnvtbFGz+bNEMyMmv7+kvGRp5yl2RMeM1fVzZ0vrc8/pnQZI3wX217qSVSPHRhbr+sJHFJMdCq9c+ro5ENn7iEiL/oa2vmGZNrfTJHsqzDHn9TOnF83dXDL+THyA9GFgq7Q3Ox67z1uRUTGPWoM18PZ88fDgUF1/x/zNfFh20BpzQXtX19/TLsYHSC8D1jR/RX5k/qXNJZG3L4un3n87Urz3r7p+pqqotKkqXzwzaXzlvthLpmpXxOOlh1/XD2/Ur0a/5QS2M2IGS67p+rS6qB992kPvtEQH/qZ98I75VEtlrXisjbR8uECI++jgIV2/d5j+sTnJrHrzsX5NfID0NmDhYXfVRhac3jFo5mld/yQ8Z8Ckko26vk7bflfNYAFsW3hyw+LC6Deefr18SewoSQD7dMCAAReKx9/Qt5TeP/xg2Wf6tt9YrjYsyS2PrL2h6xe1R8Phs5+LT7Id4ulB2kctiyOv3di56W+6PrSkSCsepOs1JeYrytbHB0hvA1YiWEzRPtDFkdIl/dz74rfVkZYvNokDLf03+XpLfpP4CFrQbL1g66bwvC8/toCZmVH+un5daxSH6OFBHXMt0EZcWFj+sFjggVEDV5Tv11/VNuvm7D/Xz+yv31D/lfhlZd6OuW+Hz+tzhkRPBrbHB0hvA3ZYDKwZLB4GaOJz6oOmBdUR7cYr2khzfL74mtt848aN5vGxV3w0fV646EI7sKvhWvOQ7O9iipKajrmWnhUPVZXiy9H8RFuovdIO7ENd/6xIs04PxKiPRy9ud1UTHyC9GNhl/R/1I67enKXdeFf7pwVsgHWklR+fzc0NpVcsYJ+WrRROpllTjIgDm6abX4/Xrd++1hr+qu0yzy018dE3p/B0/s32CZsO6svKzIG6h+MDpFcDuydfkGnUbpzTBlrAvtIa3xU5H51+TfTT57I21wI2rrq/efBeeNWc4lrHXBc1R08Pb+rfvBcFFmqp3GMez5fq+vLw5g/Hz7ykX9n8mR5d9LqIWF5L+cL4AOnVwLabwJq1G2eK15oC8vV3qs2aw7fW+eHGgk/NE02BzwQ2KfrNp38SLUZciS9nSpH4qKo6cEafss/UGn5L37BSPL1zpf5qtRB6qWSPfkXbqutfPNQslvmaueDv4gOkVwNr0MZtGxEWh+O12uS7tofFN+PuwQ9f3Lyoyqo7VN+9dHht8YIbJrBLFYeviryq51TsHrC7PqTvsg789XMHNty1rnCdrr9ZufdiY7U4W9iq1VyYbB7VRRleEewWF+96P7fwut6SVzZpUsnElvgA6dXA9N11kf1vjP9Kbxm7KXLvCLN2cOh04UNVN2J2mvMrSyZfiR7kj7SOvRr1d0bll999SNdXLPjCmur80PKCMSaV74aWFk0xTzqnlxSWTO+8Lh+Pqis/KE4W9P65pfW5/TsPkN4DTJGPTSwbzrLVSGqA1QydFNqifcNWI6kB9umy/MjBgWw0kiJghACMAIwAjBCAEYARgAGMAIwAjJB0AzNIXw3ACMAIwABGAEYARgAGMBIEMM/dNyUGNqL8ivljl/a95/UcO5991WeBXYte6e0GmDbbL7CBtZIn5/qYEck2YGc8ACvUtnoB1tqqHg+wbAdm776psX7Q3ZUHzSuyr4zbVHr2unmZ99SinI3x3gPa+3fSp5ZE9m3W9Yv1l23A8nJG6zFgLWsrKrb/YNyXL56ff1Y8FM+KTlMwdvHoTWN/FANTZheeM155sL548k+Gsf1uMS6UVznxn+Lnt03VxXNajCKx4GZ2YYZl2qjo//rvR93nBpit+6ZGbfYnVw9v+kj/7HTZG5Pyii6JZ04/crV/SNtt9TXR0b/T9MG1F5rDF/QPzp6zA/u09JYFrC1vSGhr8WLjsvah8VN55Q/GFe11C1hk26XGwtViIDwj9POlyAMD3tg0uzUKbGB4xtXm8reMX+oOhhoW7Gy9Uqt9/Rl7NMMyavYtIez7KbOXuwFm676p0exirn/hbn1pWID6sH69eOZa52Ow9v6d9I3mBbtNq7p8ReYZ94c/iALbFr5kGMPDH92un2tcKCm6aGw7cNsCtl48TC760SgwP5xGzBTPvqcNMIG11o0T35qnbxmrKr8wjH9oN/mKzMR8f0sIE75u/eIGmK37pkazCxz912Y951dzgqa82DPxY7BY/0761MEzLrdIjsHyjNt5+26bwBbntbW1fatdMIatNW6N2rLdWLvRmqbgHvHwmvaxNVAxNvpclQnsktYgXnMrzxi20zw+u/ITwDJVWFNTuy8PwC7HOM1+QB8avah78kNOYO39O+ktX04MF6w7IwFmvBnebQKbbfUtsNk4VNaa/+77+a0zB3UC9qZ2LTrwo9ZoPndwrQnssvWSh4ydTRzkZ7iwDl8+gI2foOcejn6CTXQCa+/fyRz+fLXZxUlXYMb2yFjhYtjh62bOGK9qodK2n8ovimOxOLAL2kfWQPUK87niGSawa9oO8yU3jZyVAMtsYcuX/2L4AvZ3Xb8e3q1PLbyp658eWB8DdrMdWHv/TvqjZp9fj26UAvu5uFy4WHpAHEcZ5r+y0+LL8cHxJbFpCmrEQ/PoHy1g954W55OXrWOwtuox5sq3GasjZwzjw7qvjUnaz+zN7C5TOIAdHLh1iDiL/HjRgrkjD0fPIk1gnxXea3VJ3tG/U03k/tf2FDbql1f27wLMGKkJYN+X7LvzfNWBFsO4pW0zjEe0Ze3ACmvPj9F2xz7KzkVyvttaPM86i3xk8D1fNQxZYej5j1385tdHfxRH/7XX2YW9CdiqkvJfzTrY35sOHMi9pseA6bXVp63XtPfv9M7YusoFtbr+fvEHXYEZ881vts/2VpfO/ptZ3BIH9IZ5uB8DtmVEvVUHM4EZX6+sLHj4h1gdbNL48roVbeLTa1h9xRxhs3Vc6TJ2YbYC65oYp9T+sdty1SVT8thXAEsZsDMXZzaxrwCWMmBvlk7sz77q9cBoD0YARgBGAAYwAjACMEIARgBGAEYIwAjACMAIARgBGAEYIX0UWCB/wMjsLEkYgAEsGWCJ3gbAAAYwgAEMYAADGMAABjCAAcwrsLY9QyrrZvzghlWbtisrgf3r/okVeavbxNCEw+bvK+rfA1i6gN2eV7H7m9XVD7T2XmCtw4pmDV9XlPtjDNikyBt8gqUN2CHN7ODiNe1i7wU2KfKVeLwcmWsBO39gBl+R6QP2WLQD/daSaYbx7s5IwZyfDWPvgztK6vffEE8POh359YL4eXN+admqrAW2xPo5f0kU2JWCjT8CLH3Ayse0b+3r4WXn31+0WACLHG7YdWCcYTSGZ71bpf3T+Lx+/3e1gwdlK7Bqq7/mFdUmsJZ9j/7EQX76gP2kTW/f2h+9K47DvixtNfYWtxjGjGLjdkWVeDp3ozFhpjhA3r4oS4H9ErHW+lDkF2NC3pLIIM4iewaY8dbe0xURrc3Yax4JN2rGK5p5stXyrVG8vq2tbaumZyuwQ9Gfu0xgkeLZxd8CLH3AWgdPa9/an9c3v/nt6k7A3tPesqYJW90Hf5itX5HRjmqN+w6Ir8jqy2dmzrsNsPQdg/36QNTQY7XGuofEV+QbnYBd076ypqmvifY43JatB/mzoz/OzrbOIj8pXQOw9AFbGr5pmPdq+MZ4uK7V7PE1DqztgNnL/vrFxv6hYkxrS7Ye5G+Nlim+Nqtf0TrYmNLXAZY2YG2Hi78csLtof6vxnbZl4ISw1tIBzFhduPCrdeGLxj/KN353df+GLC60rglNLX7wdgzYv4Yu+Blg6QJm/FKVH9lX+2/zNGtmZOPwvGtxYMaXi8onhsweEudFNu29kb1/KtqdV7Fv4b87/lT0edFegKUNGH/sBhjAAAYwgAEMYAADGMAABjCAAQxgAEs5MK7sJgRgBGAEYIQAjACMAIwQgJHsBEZIqtJvANuApC4D+r3KRiCpS/9+//cqn2EkRXnt237/D4V+ytWqU6zlAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTA1LTIyVDIxOjQ5OjA3KzAwOjAwiLi2AgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wNS0yMlQyMTo0OTowNyswMDowMPnlDr4AAAAASUVORK5CYII="},8453:(A,e,t)=>{t.d(e,{R:()=>n,x:()=>s});var i=t(6540);const r={},a=i.createContext(r);function n(A){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function s(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(r):A.components||r:n(A.components),i.createElement(a.Provider,{value:e},A.children)}}}]);