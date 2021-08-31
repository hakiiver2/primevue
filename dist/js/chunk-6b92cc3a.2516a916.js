(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b92cc3a"],{"0c80":function(e,t,n){"use strict";n.r(t);var s=n("7a23"),i=n("5484"),l=n.n(i),r=n("6ac1"),c=n.n(r),o=n("a0e7"),m=n.n(o),a=n("2c13"),u=n.n(a),p=n("842c"),h=n.n(p),d={class:"content-section documentation"},b=Object(s["l"])("This guide is for Vue 3 and PrimeVue 3, visit "),j=Object(s["m"])("a",{href:"https://www.primefaces.org/primevue/showcase-v2"},"PrimeVue 2.x website",-1),O=Object(s["l"])(" if you are using Vue 2."),v=Object(s["m"])("h1",null,"Setup",-1),f=Object(s["m"])("p",null,"PrimeVue is a rich set of open source native components for Vue.",-1),g=Object(s["m"])("h5",null,"Video Tutorial",-1),y=Object(s["m"])("p",null,"Watch the video tutorial that goes through the steps documented on this guide.",-1),w=Object(s["m"])("div",{class:"video-container"},[Object(s["m"])("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/cGTXuyqIwMA",frameborder:"0",allowfullscreen:""})],-1),V=Object(s["m"])("h5",null,"Download",-1),x=Object(s["m"])("p",null,[Object(s["l"])("PrimeVue is available at "),Object(s["m"])("a",{href:"https://www.npmjs.com/package/primevue"},"npm"),Object(s["l"])(", if you have an existing application run the following commands to download PrimeVue and PrimeIcons to your project.")],-1),k=Object(s["m"])("code",null,"\nnpm install primevue@^3.3.5 --save\nnpm install primeicons --save\n\n",-1),P=Object(s["m"])("h5",null,"Module Loader",-1),A=Object(s["m"])("p",null,[Object(s["l"])("This is the recommended way if your application uses "),Object(s["m"])("a",{href:"https://cli.vuejs.org"},"Vue CLI"),Object(s["l"])(", "),Object(s["m"])("a",{href:"https://vitejs.dev"},"Vite"),Object(s["l"])(" or has a webpack based build with "),Object(s["m"])("a",{href:"https://github.com/vuejs/vue-loader"},"vue-loader"),Object(s["l"])(" configured.")],-1),I=Object(s["m"])("p",null,"Begin with installing PrimeVue. This command only sets up the core configuration like locale and does not register any component.",-1),S=Object(s["m"])("code",null,"\nimport {createApp} from 'vue';\nimport App from './App.vue';\nimport PrimeVue from 'primevue/config';\nconst app = createApp(App);\n\napp.use(PrimeVue);\n\n",-1),C=Object(s["m"])("p",null,"Then import and register a component from the library. Import path is available in the documentation of the corresponding component.",-1),D=Object(s["m"])("code",null,"\nimport {createApp} from 'vue';\nimport App from './App.vue';\nimport PrimeVue from 'primevue/config';\nimport Dialog from 'primevue/dialog';\nconst app = createApp(App);\n\napp.use(PrimeVue);\n\napp.component('Dialog', Dialog);\n\n",-1),F=Object(s["m"])("p",null,"Finally you'll be able to utilize the component in your application.",-1),L=Object(s["m"])("code",null,"\n<Dialog></Dialog>\n\n",-1),T=Object(s["m"])("h5",null,"Single File Components",-1),z=Object(s["m"])("p",null,[Object(s["l"])("SFC files are available in the npm distribution and if you'd like to use SFCs directly, add "),Object(s["m"])("i",null,"/sfc"),Object(s["l"])(" as a suffix when referencing an import path. This will instruct your bundler to process the *.vue files in your local build instead of using the compiled output. One use case for this approach is optimizing for SSR by removing whitespaces.")],-1),q=Object(s["m"])("code",null,"\nimport Dialog from 'primevue/dialog/sfc';\n\n",-1),E=Object(s["m"])("h5",null,"Script Tag",-1),M=Object(s["m"])("p",null,[Object(s["l"])("Other alternative is utilizing the components directly within the browser with the "),Object(s["m"])("i",null,"iife"),Object(s["l"])(" build. Note that PrimeVue does not provide a "),Object(s["m"])("i",null,"umd"),Object(s["l"])(" build.")],-1),Q=Object(s["m"])("code",null,[Object(s["m"])("template",null,'\n<html>\n    <head>\n        <meta charset="utf-8">\n        <title>PrimeVue Demo</title>\n        <link href="https://unpkg.com/primevue/resources/themes/saga-blue/theme.css" rel="stylesheet">\n        <link href="https://unpkg.com/primevue/resources/primevue.min.css" rel="stylesheet">\n        <link href="https://unpkg.com/primeicons/primeicons.css" rel="stylesheet">\n\n        <script src="https://unpkg.com/vue@next"><\/script>\n        <script src="https://unpkg.com/primevue/inputtext/inputtext.min.js"><\/script>\n    </head>\n\n    <body>\n        <div id="app">\n            <p-inputtext v-model="val"></p-inputtext>\n            <h6>{{val}}</h6>\n        </div>\n\n        <script>\n            const {createApp, ref} = Vue;\n\n            const App = {\n                setup() {\n                    const val = ref(null);\n\n                    return {\n                        val\n                    };\n                },\n                components: {\n                    \'p-inputtext\': primevue.inputtext\n                } \n            };\n\n            createApp(App).mount("#app");\n        <\/script>\n    </body>\n</html>\n'),Object(s["l"])("\n")],-1),R=Object(s["m"])("h5",null,"Dependencies",-1),U=Object(s["m"])("p",null,"Majority of PrimeVue components (95%) are native and there are some exceptions having 3rd party dependencies such as Quill for Editor.",-1),_=Object(s["m"])("p",null,"In addition, components require PrimeIcons library for icons.",-1),B=Object(s["m"])("h6",null,"Mandatory",-1),J=Object(s["m"])("code",null,'\ndependencies: {\n    "vue": "^3.0.0",\n    "primeicons": "^4.0.0"\n}\n\n',-1),K=Object(s["m"])("h6",null,"Optional",-1),N=Object(s["m"])("p",null,"Here is the list of components with 3rd party dependencies. Documentation of each component has a dependencies section as well.",-1),Z=Object(s["m"])("div",{class:"doc-tablewrapper"},[Object(s["m"])("table",{class:"doc-table"},[Object(s["m"])("thead",null,[Object(s["m"])("tr",null,[Object(s["m"])("th",null,"Component"),Object(s["m"])("th",null,"Dependency")])]),Object(s["m"])("tbody",null,[Object(s["m"])("tr",null,[Object(s["m"])("td",null,"Charts"),Object(s["m"])("td",null,"Charts.js 2.1.x+")]),Object(s["m"])("tr",null,[Object(s["m"])("td",null,"Editor"),Object(s["m"])("td",null,"Quill.js 1.3.3+")]),Object(s["m"])("tr",null,[Object(s["m"])("td",null,"FullCalendar"),Object(s["m"])("td",null,"FullCalendar 5.4.0+.")]),Object(s["m"])("tr",null,[Object(s["m"])("td",null,"PrimeFlex"),Object(s["m"])("td",null,"DataView")])])])],-1),G=Object(s["m"])("h5",null,"Styles",-1),H=Object(s["m"])("p",null,"The css dependencies are as follows, note that you may change the theme with another one of your choice. If you are using a bundler such as webpack with a css loader you may import them to your main application component.",-1),W=Object(s["m"])("code",null,"\nprimevue/resources/themes/saga-blue/theme.css       //theme\nprimevue/resources/primevue.min.css                 //core css\nprimeicons/primeicons.css                           //icons\n\n",-1),X=Object(s["m"])("h5",null,"Free Themes",-1),Y=Object(s["m"])("p",null,"PrimeVue ships with various free themes to choose from.",-1),$=Object(s["m"])("code",null,"\nprimevue/resources/themes/bootstrap4-light-blue/theme.css\nprimevue/resources/themes/bootstrap4-light-purple/theme.css\nprimevue/resources/themes/bootstrap4-dark-blue/theme.css\nprimevue/resources/themes/bootstrap4-dark-purple/theme.css\nprimevue/resources/themes/md-light-indigo/theme.css\nprimevue/resources/themes/md-light-deeppurple/theme.css\nprimevue/resources/themes/md-dark-indigo/theme.css\nprimevue/resources/themes/md-dark-deeppurple/theme.css\nprimevue/resources/themes/mdc-light-indigo/theme.css\nprimevue/resources/themes/mdc-light-deeppurple/theme.css\nprimevue/resources/themes/mdc-dark-indigo/theme.css\nprimevue/resources/themes/mdc-dark-deeppurple/theme.css\nprimevue/resources/themes/fluent-light/theme.css\nprimevue/resources/themes/saga-blue/theme.css\nprimevue/resources/themes/saga-green/theme.css\nprimevue/resources/themes/saga-orange/theme.css\nprimevue/resources/themes/saga-purple/theme.css\nprimevue/resources/themes/vela-blue/theme.css\nprimevue/resources/themes/vela-green/theme.css\nprimevue/resources/themes/vela-orange/theme.css\nprimevue/resources/themes/vela-purple/theme.css\nprimevue/resources/themes/arya-blue/theme.css\nprimevue/resources/themes/arya-green/theme.css\nprimevue/resources/themes/arya-orange/theme.css\nprimevue/resources/themes/arya-purple/theme.css\nprimevue/resources/themes/nova/theme.css\nprimevue/resources/themes/nova-alt/theme.css\nprimevue/resources/themes/nova-accent/theme.css\nprimevue/resources/themes/nova-vue/theme.css\nprimevue/resources/themes/luna-amber/theme.css\nprimevue/resources/themes/luna-blue/theme.css\nprimevue/resources/themes/luna-green/theme.css\nprimevue/resources/themes/luna-pink/theme.css\nprimevue/resources/themes/rhea/theme.css\n\n",-1),ee=Object(s["m"])("h5",null,"PrimeFlex",-1),te=Object(s["l"])("PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more. Although it is not required, it is highly recommended to add PrimeFlex as it is likely to need such utilities when developing applications. View the "),ne=Object(s["l"])("PrimeFlex"),se=Object(s["l"])(" section for the installation."),ie=Object(s["m"])("h5",null,"Ripple",-1),le=Object(s["m"])("p",null,"Ripple is an optional animation for the supported components such as buttons. It is disabled by default and needs to be enabled at your app's entry file (e.g. main.js) during the PrimeVue setup. ",-1),re=Object(s["m"])("code",null,"\nimport {createApp} from 'vue';\nimport PrimeVue from 'primevue/config';\nconst app = createApp(App);\n\napp.use(PrimeVue, {ripple: true});\n\n",-1),ce=Object(s["m"])("h5",null,"Outlined vs Filled Input Styles",-1),oe=Object(s["m"])("p",null,[Object(s["l"])("Input fields come in two styles, default is "),Object(s["m"])("i",null,"outlined"),Object(s["l"])(" with borders around the field whereas "),Object(s["m"])("i",null,"filled"),Object(s["l"])(" alternative adds a background color to the field. Applying "),Object(s["m"])("i",null,"p-input-filled"),Object(s["l"])(" to an ancestor of an input enables the filled style. If you prefer to use filled inputs in the entire application, use a global container such as the document body or the application element to apply the style class. Note that in case you add it to the application element, components that are teleported to the document body such as Dialog will not be able to display filled inputs as they are not a descendant of the application root element in the DOM tree, to resolve this case set inputStyle to 'filled' at PrimeVue configuration as well.")],-1),me=Object(s["m"])("code",null,"\nimport {createApp} from 'vue';\nimport PrimeVue from 'primevue/config';\nconst app = createApp(App);\n\napp.use(PrimeVue, {inputStyle: 'filled'});\n\n",-1),ae=Object(s["m"])("h5",null,"ZIndex Layering",-1),ue=Object(s["m"])("p",null,[Object(s["l"])("ZIndexes are managed automatically to make sure layering of overlay components work seamlessly when combining multiple components. Still there may be cases where you'd like to configure the configure default values such as a custom layout where header section is fixed. In a case like this, dropdown needs to be displayed below the application header but a modal dialog should be displayed above. PrimeVue configuration offers the "),Object(s["m"])("i",null,"zIndex"),Object(s["l"])(" property to customize the default values for components categories. Default values are described below and can be customized when setting up PrimeVue.")],-1),pe=Object(s["m"])("code",null,"\nimport {createApp} from 'vue';\nimport PrimeVue from 'primevue/config';\nconst app = createApp(App);\n\napp.use(PrimeVue, {\n    zIndex: {\n        modal: 1100,        //dialog, sidebar\n        overlay: 1000,      //dropdown, overlaypanel\n        menu: 1000,         //overlay menus\n        tooltip: 1100       //tooltip\n    }\n});\n\n",-1),he=Object(s["m"])("h5",null,"Locale",-1),de=Object(s["l"])("PrimeVue provides a Locale API to support i18n and l7n, visit the "),be=Object(s["l"])("Locale"),je=Object(s["l"])(" documentation for more information."),Oe=Object(s["m"])("h5",null,"Quickstart with Vue CLI",-1),ve=Object(s["m"])("p",null,[Object(s["l"])("An "),Object(s["m"])("a",{href:"https://github.com/primefaces/primevue-quickstart"},"example application"),Object(s["l"])(" based on Vue CLI is available at github.")],-1),fe=Object(s["m"])("h5",null,"Quickstart with Vite",-1),ge=Object(s["m"])("p",null,[Object(s["l"])("A "),Object(s["m"])("a",{href:"https://github.com/primefaces/primevue-quickstart-vite"},"starter application"),Object(s["l"])(" is also provided for Vite users.")],-1),ye=Object(s["m"])("h5",null,"Typescript",-1),we=Object(s["m"])("p",null,[Object(s["l"])("Typescript is fully supported as type definition files are provided in the npm package of PrimeVue. A sample "),Object(s["m"])("a",{href:"https://github.com/primefaces/primevue-typescript-quickstart"},"typescript-primevue"),Object(s["l"])(" application with Vue CLI is available as at github.")],-1),Ve=Object(s["m"])("h5",null,"Browser Support",-1),xe=Object(s["m"])("div",{class:"doc-tablewrapper"},[Object(s["m"])("table",{class:"doc-table browsers"},[Object(s["m"])("thead",null,[Object(s["m"])("tr",null,[Object(s["m"])("th",null,[Object(s["m"])("div",{class:"p-d-flex p-ai-center"},[Object(s["m"])("img",{src:l.a,alt:"edge",style:{width:"1.5rem"},class:"p-mr-2"}),Object(s["l"])(" IE / Edge ")])]),Object(s["m"])("th",null,[Object(s["m"])("div",{class:"p-d-flex p-ai-center"},[Object(s["m"])("img",{src:c.a,alt:"firefox",style:{width:"1.5rem"},class:"p-mr-2"}),Object(s["l"])(" Firefox ")])]),Object(s["m"])("th",null,[Object(s["m"])("div",{class:"p-d-flex p-ai-center"},[Object(s["m"])("img",{src:m.a,alt:"chrome",style:{width:"1.5rem"},class:"p-mr-2"}),Object(s["l"])(" Chrome ")])]),Object(s["m"])("th",null,[Object(s["m"])("div",{class:"p-d-flex p-ai-center"},[Object(s["m"])("img",{src:u.a,alt:"safari",style:{width:"1.5rem"},class:"p-mr-2"}),Object(s["l"])(" Safari ")])]),Object(s["m"])("th",null,[Object(s["m"])("div",{class:"p-d-flex p-ai-center"},[Object(s["m"])("img",{src:h.a,alt:"opera",style:{width:"1.5rem"},class:"p-mr-2"}),Object(s["l"])(" Opera ")])])])]),Object(s["m"])("tbody",null,[Object(s["m"])("tr",null,[Object(s["m"])("td",null,"IE11, Edge"),Object(s["m"])("td",null,"Last 2 versions"),Object(s["m"])("td",null,"Last 2 versions"),Object(s["m"])("td",null,"Last 2 versions"),Object(s["m"])("td",null,"Last 2 versions")])])])],-1);function ke(e,t){var n=Object(s["K"])("Message"),i=Object(s["K"])("router-link"),l=Object(s["L"])("code");return Object(s["C"])(),Object(s["h"])("div",null,[Object(s["m"])("div",d,[Object(s["m"])(n,{severity:"warn"},{default:Object(s["U"])((function(){return[b,j,O]})),_:1}),v,f,g,y,w,V,x,Object(s["V"])(Object(s["m"])("pre",null,[k],512),[[l,void 0,void 0,{script:!0}]]),P,A,I,Object(s["V"])(Object(s["m"])("pre",null,[S],512),[[l,void 0,void 0,{script:!0}]]),C,Object(s["V"])(Object(s["m"])("pre",null,[D],512),[[l,void 0,void 0,{script:!0}]]),F,Object(s["V"])(Object(s["m"])("pre",null,[L],512),[[l]]),T,z,Object(s["V"])(Object(s["m"])("pre",null,[q],512),[[l,void 0,void 0,{script:!0}]]),E,M,Object(s["V"])(Object(s["m"])("pre",null,[Q],512),[[l]]),R,U,_,B,Object(s["V"])(Object(s["m"])("pre",null,[J],512),[[l,void 0,void 0,{script:!0}]]),K,N,Z,G,H,Object(s["V"])(Object(s["m"])("pre",null,[W],512),[[l,void 0,void 0,{script:!0}]]),X,Y,Object(s["V"])(Object(s["m"])("pre",null,[$],512),[[l,void 0,void 0,{css:!0}]]),ee,Object(s["m"])("p",null,[te,Object(s["m"])(i,{to:"/primeflex"},{default:Object(s["U"])((function(){return[ne]})),_:1}),se]),ie,le,Object(s["V"])(Object(s["m"])("pre",null,[re],512),[[l,void 0,void 0,{script:!0}]]),ce,oe,Object(s["V"])(Object(s["m"])("pre",null,[me],512),[[l,void 0,void 0,{script:!0}]]),ae,ue,Object(s["V"])(Object(s["m"])("pre",null,[pe],512),[[l,void 0,void 0,{script:!0}]]),he,Object(s["m"])("p",null,[de,Object(s["m"])(i,{to:"/locale"},{default:Object(s["U"])((function(){return[be]})),_:1}),je]),Oe,ve,fe,ge,ye,we,Ve,xe])])}const Pe={};Pe.render=ke;t["default"]=Pe},"2c13":function(e,t,n){e.exports=n.p+"img/safari.237a7f3b.svg"},5484:function(e,t,n){e.exports=n.p+"img/edge.4640fb10.svg"},"6ac1":function(e,t,n){e.exports=n.p+"img/firefox.d85dc16d.svg"},"842c":function(e,t,n){e.exports=n.p+"img/opera.f82b3d4a.svg"},a0e7:function(e,t,n){e.exports=n.p+"img/chrome.d60a042e.svg"}}]);