"use strict";(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[250],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var o=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),u=function(e){var a=o.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=u(e.components);return o.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},d=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=n,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?o.createElement(h,i(i({ref:a},p),{},{components:t})):o.createElement(h,i({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<r;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4087:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=t(7462),n=(t(7294),t(3905));const r={id:"installation",title:"Installation",sidebar_label:"Installation",sidebar_position:1},i=void 0,l={unversionedId:"user_manual/installation",id:"user_manual/installation",title:"Installation",description:"Pixelorama is available for free for all major desktop platforms, namely Windows, Linux and macOS, as well as Ubuntu Touch, a mobile operating system. There is also a Web version available, which can be used directly from your browser, without downloading it. Stay tuned, because more platforms will be supported soon.",source:"@site/docs/user_manual/installation.md",sourceDirName:"user_manual",slug:"/user_manual/installation",permalink:"/Pixelorama-Docs/user_manual/installation",draft:!1,editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/user_manual/installation.md",tags:[],version:"current",lastUpdatedBy:"Emmanouil Papadeas",lastUpdatedAt:1662560093,formattedLastUpdatedAt:"Sep 7, 2022",sidebarPosition:1,frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation",sidebar_position:1},sidebar:"docs",previous:{title:"Introduction",permalink:"/Pixelorama-Docs/"},next:{title:"User Interface Basics",permalink:"/Pixelorama-Docs/user_manual/user_interface/user_interface_basics"}},s={},u=[{value:"Itch.io",id:"itchio",level:2},{value:"GitHub Releases",id:"github-releases",level:2},{value:"Windows",id:"windows",level:2},{value:"Scoop",id:"scoop",level:3},{value:"Linux",id:"linux",level:2},{value:"Flathub",id:"flathub",level:3},{value:"Snap",id:"snap",level:3},{value:"macOS",id:"macos",level:2},{value:"Ubuntu Touch",id:"ubuntu-touch",level:2},{value:"Early Access - &quot;Nightly&quot; Versions",id:"early-access---nightly-versions",level:2}],p={toc:u};function c(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pixelorama is available for free for all major desktop platforms, namely Windows, Linux and macOS, as well as Ubuntu Touch, a mobile operating system. There is also a Web version available, which can be used directly from your browser, without downloading it. Stay tuned, because more platforms will be supported soon."),(0,n.kt)("h2",{id:"itchio"},"Itch.io"),(0,n.kt)("p",null,"Pixelorama is available for free on ",(0,n.kt)("a",{parentName:"p",href:"https://orama-interactive.itch.io/pixelorama"},"itch.io"),' for Windows, Linux and macOS. You can get it by clicking on "Download Now". A dialog will appear that lets you set a price for the tool. While ',(0,n.kt)("a",{parentName:"p",href:"../development_and_contributing"},"donations are appreciated and they help with the development of the software"),", Pixelorama is a free software and paying is optional. After you decide whether you want to donate or not, you will be taken to the download page, where you can download a version of Pixelorama depending on your operating system."),(0,n.kt)("p",null,"On the itch.io page, you are also able to run Pixelorama's Web version directly through your browser."),(0,n.kt)("h2",{id:"github-releases"},"GitHub Releases"),(0,n.kt)("p",null,"Pixelorama is available for free on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Orama-Interactive/Pixelorama/releases"},"GitHub")," for Windows, Linux and macOS. In that page you can also find previous versions of Pixelorama, but it is recommended to always download the most recent one."),(0,n.kt)("h2",{id:"windows"},"Windows"),(0,n.kt)("p",null,"Windows users can download Pixelorama from itch.io, GitHub Releases and Scoop. It should run on all new Windows versions from Windows 7 and on. There are three available versions, 64-bit portable, 32-bit portable and a 64-bit installer. ",(0,n.kt)("a",{parentName:"p",href:"https://support.microsoft.com/en-us/windows/32-bit-and-64-bit-windows-frequently-asked-questions-c6ca9541-8dce-4d48-0415-94a3faa2e13d"},"See this page to find out whether your Operating System is 64-bit or 32-bit"),"."),(0,n.kt)("h3",{id:"scoop"},"Scoop"),(0,n.kt)("p",null,"You can get Pixelorama with ",(0,n.kt)("a",{parentName:"p",href:"https://scoop.sh/"},"Scoop"),", by pasting these lines in the command prompt."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"scoop bucket add extras")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"scoop install pixelorama")),(0,n.kt)("h2",{id:"linux"},"Linux"),(0,n.kt)("p",null,"Linux users can download Pixelorama from itch.io, GitHub Releases, Flathub and the Snap Store. There are two available versions, 64-bit and 32-bit. ",(0,n.kt)("a",{parentName:"p",href:"https://www.howtogeek.com/198615/how-to-check-if-your-linux-system-is-32-bit-or-64-bit/"},"See this page to find out whether your Operating System is 64-bit or 32-bit"),"."),(0,n.kt)("h3",{id:"flathub"},"Flathub"),(0,n.kt)("p",null,"You can find Pixelorama for free on ",(0,n.kt)("a",{parentName:"p",href:"https://flathub.org/apps/details/com.orama_interactive.Pixelorama"},"Flathub"),". If you have flatpak installed, follow the instructions on that page to learn how to install and run the software."),(0,n.kt)("h3",{id:"snap"},"Snap"),(0,n.kt)("p",null,"Pixelorama is available as a ",(0,n.kt)("a",{parentName:"p",href:"https://snapcraft.io/pixelorama"},"Snap"),". If you have snap installed, run ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo snap install pixelorama")," on your Terminal to install the software."),(0,n.kt)("h2",{id:"macos"},"macOS"),(0,n.kt)("p",null,"macOS users can download Pixelorama from itch.io and GitHub Releases, as shown above. If you encounter any issues with macOS saying that the application is damaged, ",(0,n.kt)("a",{parentName:"p",href:"../troubleshooting/#macos-says-that-pixelorama-is-damaged"},"see this troubleshooting page"),"."),(0,n.kt)("h2",{id:"ubuntu-touch"},"Ubuntu Touch"),(0,n.kt)("p",null,"Mobile users with Ubuntu Touch can get Pixelorama on their devices for free from the ",(0,n.kt)("a",{parentName:"p",href:"https://open-store.io/app/pixelorama.orama-interactive"},"Open Store"),"."),(0,n.kt)("h2",{id:"early-access---nightly-versions"},'Early Access - "Nightly" Versions'),(0,n.kt)("p",null,"If you want to try the latest unstable builds of Pixelorama, you can find them ",(0,n.kt)("a",{parentName:"p",href:"https://nightly.link/Orama-Interactive/Pixelorama/workflows/dev-desktop-builds/master"},"here"),", available for Windows 64-bit, Linux 64-bit and Linux 32-bit ARM (for Raspberry Pi 4), as well as macOS. There is also an early access Web version available ",(0,n.kt)("a",{parentName:"p",href:"https://orama-interactive.github.io/Pixelorama/early_access/"},"here"),"."),(0,n.kt)("p",null,"Keep in mind that these builds are very unstable and are not recommended for production."))}c.isMDXComponent=!0}}]);