(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-97d44dc8"],{8537:function(e,t,n){var l=n("ff680");l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var c=n("499e").default;c("2deccc85",l,!0,{sourceMap:!1,shadowMode:!1})},cbef:function(e,t,n){"use strict";n("8537")},d439:function(e,t,n){"use strict";n.r(t);var l=n("7a23"),c=Object(l["Y"])("data-v-33a415ac");Object(l["F"])("data-v-33a415ac");var a={class:"content-section introduction"},i=Object(l["m"])("div",{class:"feature-intro"},[Object(l["m"])("h1",null,"TabMenu"),Object(l["m"])("p",null,"TabMenu is a navigation component that displays items as tab headers. Example below uses nested routes with TabMenu.")],-1),o={class:"content-section implementation"},m={class:"card"};Object(l["D"])();var u=c((function(e,t,n,c,u,b){var p=Object(l["K"])("AppDemoActions"),d=Object(l["K"])("TabMenu"),r=Object(l["K"])("router-view"),s=Object(l["K"])("TabMenuDoc");return Object(l["C"])(),Object(l["h"])("div",null,[Object(l["m"])("div",a,[i,Object(l["m"])(p)]),Object(l["m"])("div",o,[Object(l["m"])("div",m,[Object(l["m"])(d,{model:u.items},null,8,["model"]),Object(l["m"])(r)])]),Object(l["m"])(s)])})),b=Object(l["m"])("h5",null,"Import",-1),p=Object(l["m"])("code",null,"\nimport TabMenu from 'primevue/tabmenu';\n\n",-1),d=Object(l["m"])("h5",null,"MenuModel",-1),r=Object(l["l"])("TabMenu uses the common MenuModel API to define the items, visit "),s=Object(l["l"])("MenuModel API"),O=Object(l["l"])(" for details."),j=Object(l["m"])("h5",null,"Getting Started",-1),f=Object(l["m"])("p",null,"TabMenu is integrated with Vue Router and requires a collection of menuitems as its model.",-1),h=Object(l["m"])("code",null,'\n<TabMenu :model="items" />\n<router-view />\n\n',-1),v=Object(l["m"])("code",null,"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\titems: [\n                {label: 'Home', icon: 'pi pi-fw pi-home', to: '/tabmenu'},\n                {label: 'Calendar', icon: 'pi pi-fw pi-calendar', to: '/tabmenu/calendar'},\n                {label: 'Edit', icon: 'pi pi-fw pi-pencil', to: '/tabmenu/edit'},\n                {label: 'Documentation', icon: 'pi pi-fw pi-file', to: '/tabmenu/documentation'},\n                {label: 'Settings', icon: 'pi pi-fw pi-cog', to: '/tabmenu/settings'}\n            ]\n\t\t}\n\t}\n}\n\n",-1),g=Object(l["m"])("h5",null,"Templating",-1),w=Object(l["m"])("p",null,[Object(l["l"])("TabMenu offers content customization with the "),Object(l["m"])("i",null,"item"),Object(l["l"])(" template that receives the menuitem instance from the model as a parameter.")],-1),M=Object(l["m"])("code",null,[Object(l["m"])("template",null,'\n<TabMenu :model="items">\n    <template #item="{item}">\n        <a :href="item.url">{{item.label}}</a>\n    </template>\n</TabMenu>\n'),Object(l["l"])("\n")],-1),D=Object(l["m"])("h5",null,"Properties",-1),C=Object(l["m"])("p",null,"Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.",-1),T=Object(l["m"])("div",{class:"doc-tablewrapper"},[Object(l["m"])("table",{class:"doc-table"},[Object(l["m"])("thead",null,[Object(l["m"])("tr",null,[Object(l["m"])("th",null,"Name"),Object(l["m"])("th",null,"Type"),Object(l["m"])("th",null,"Default"),Object(l["m"])("th",null,"Description")])]),Object(l["m"])("tbody",null,[Object(l["m"])("tr",null,[Object(l["m"])("td",null,"model"),Object(l["m"])("td",null,"array"),Object(l["m"])("td",null,"null"),Object(l["m"])("td",null,"An array of menuitems.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"exact"),Object(l["m"])("td",null,"boolean"),Object(l["m"])("td",null,"true"),Object(l["m"])("td",null,"Defines if active route highlight should match the exact route path.")])])])],-1),x=Object(l["m"])("h5",null,"Slots",-1),y=Object(l["m"])("div",{class:"doc-tablewrapper"},[Object(l["m"])("table",{class:"doc-table"},[Object(l["m"])("thead",null,[Object(l["m"])("tr",null,[Object(l["m"])("th",null,"Name"),Object(l["m"])("th",null,"Parameters")])]),Object(l["m"])("tbody",null,[Object(l["m"])("tr",null,[Object(l["m"])("td",null,"item"),Object(l["m"])("td",null,"item: Menuitem instance")])])])],-1),N=Object(l["m"])("h5",null,"Styling",-1),S=Object(l["l"])("Following is the list of structural style classes, for theming classes visit "),A=Object(l["l"])("theming"),E=Object(l["l"])(" page."),P=Object(l["m"])("div",{class:"doc-tablewrapper"},[Object(l["m"])("table",{class:"doc-table"},[Object(l["m"])("thead",null,[Object(l["m"])("tr",null,[Object(l["m"])("th",null,"Name"),Object(l["m"])("th",null,"Element")])]),Object(l["m"])("tbody",null,[Object(l["m"])("tr",null,[Object(l["m"])("td",null,"p-tabmenu"),Object(l["m"])("td",null,"Container element.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"p-tabmenu-nav"),Object(l["m"])("td",null,"List element.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"p-tabmenuitem"),Object(l["m"])("td",null,"Menuitem element.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"p-highlight"),Object(l["m"])("td",null,"Active menuitem element.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"p-menuitem-icon"),Object(l["m"])("td",null,"Icon of a menuitem.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"p-menuitem-text"),Object(l["m"])("td",null,"Text of a menuitem.")])])])],-1),I=Object(l["m"])("h5",null,"Dependencies",-1),_=Object(l["m"])("p",null,"None.",-1);function H(e,t,n,c,a,i){var o=Object(l["K"])("router-link"),m=Object(l["K"])("AppDoc"),u=Object(l["L"])("code");return Object(l["C"])(),Object(l["h"])(m,{name:"TabMenuDemo",sources:a.sources,extPages:a.pages,github:"tabmenu/TabMenuDemo.vue"},{default:Object(l["U"])((function(){return[b,Object(l["V"])(Object(l["m"])("pre",null,[p],512),[[u,void 0,void 0,{script:!0}]]),d,Object(l["m"])("p",null,[r,Object(l["m"])(o,{to:"/menumodel"},{default:Object(l["U"])((function(){return[s]})),_:1}),O]),j,f,Object(l["V"])(Object(l["m"])("pre",null,[h],512),[[u]]),Object(l["V"])(Object(l["m"])("pre",null,[v],512),[[u,void 0,void 0,{script:!0}]]),g,w,Object(l["V"])(Object(l["m"])("pre",null,[M],512),[[u]]),D,C,T,x,y,N,Object(l["m"])("p",null,[S,Object(l["m"])(o,{to:"/theming"},{default:Object(l["U"])((function(){return[A]})),_:1}),E]),P,I,_]})),_:1},8,["sources","extPages"])}var K={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:"\n<template>\n    <div>\n        <TabMenu :model=\"items\" />\n        <router-view />\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            items: [\n                {\n                    label: 'Home', \n                    icon: 'pi pi-fw pi-home', \n                    to: '/'\n                },\n                {\n                    label: 'Calendar', \n                    icon: 'pi pi-fw pi-calendar', \n                    to: '/calendar'\n                },\n                {\n                    label: 'Edit', \n                    icon: 'pi pi-fw pi-pencil', \n                    to: '/edit'\n                },\n                {\n                    label: 'Documentation', \n                    icon: 'pi pi-fw pi-file', \n                    to: '/documentation'\n                },\n                {\n                    label: 'Settings', \n                    icon: 'pi pi-fw pi-cog', \n                    to: '/settings'\n                }\n            ]\n        }\n    }\n}\n<\\/script>\n\n<style scoped lang=\"scss\">\n::v-deep(.tabmenudemo-content) {\n    padding: 2rem 1rem;\n}\n</style>"},"composition-api":{tabName:"Composition API Source",content:"\n<template>\n    <div>\n        <TabMenu :model=\"items\" />\n        <router-view />\n    </div>\n</template>\n\n<script>\nimport { ref } from 'vue';\n\nexport default {\n    setup() {\n        const items = ref([\n            {\n                label: 'Home', \n                icon: 'pi pi-fw pi-home', \n                to: '/'\n            },\n            {\n                label: 'Calendar', \n                icon: 'pi pi-fw pi-calendar', \n                to: '/calendar'\n            },\n            {\n                label: 'Edit', \n                icon: 'pi pi-fw pi-pencil', \n                to: '/edit'\n            },\n            {\n                label: 'Documentation', \n                icon: 'pi pi-fw pi-file', \n                to: '/documentation'\n            },\n            {\n                label: 'Settings', \n                icon: 'pi pi-fw pi-cog', \n                to: '/settings'\n            }\n        ]);\n        \n        return { items }\n    }\n}\n<\\/script>\n\n<style scoped lang=\"scss\">\n::v-deep(.tabmenudemo-content) {\n    padding: 2rem 1rem;\n}\n</style>"}},pages:[{tabName:"HomeDemo",content:'\n<template>\n    <div class="tabmenudemo-content">\n        <h5>Home Component Content</h5>\n    </div>\n</template>\n\n<script>\nexport default {\n\n}\n<\\/script>\n'},{tabName:"CalendarDemo",content:'\n<template>\n    <div class="tabmenudemo-content">\n        <h5>Calendar Component Content</h5>\n    </div>\n</template>\n\n<script>\nexport default {\n\n}\n<\\/script>\n'},{tabName:"EditDemo",content:'\n<template>\n    <div class="tabmenudemo-content">\n        <h5>Edit Component Content</h5>\n    </div>\n</template>\n\n<script>\nexport default {\n\n}\n<\\/script>\n'},{tabName:"DocumentationDemo",content:'\n<template>\n    <div class="tabmenudemo-content">\n        <h5>Documentation Component Content</h5>\n    </div>\n</template>\n\n<script>\nexport default {\n\n}\n<\\/script>\n'},{tabName:"SettingsDemo",content:'\n<template>\n    <div class="tabmenudemo-content">\n        <h5>Settings Component Content</h5>\n    </div>\n</template>\n\n<script>\nexport default {\n\n}\n<\\/script>'}]}}};K.render=H;var V=K,k={data:function(){return{items:[{label:"Home",icon:"pi pi-fw pi-home",to:"/tabmenu"},{label:"Calendar",icon:"pi pi-fw pi-calendar",to:"/tabmenu/calendar"},{label:"Edit",icon:"pi pi-fw pi-pencil",to:"/tabmenu/edit"},{label:"Documentation",icon:"pi pi-fw pi-file",to:"/tabmenu/documentation"},{label:"Settings",icon:"pi pi-fw pi-cog",to:"/tabmenu/settings"}]}},components:{TabMenuDoc:V}};n("cbef");k.render=u,k.__scopeId="data-v-33a415ac";t["default"]=k},ff680:function(e,t,n){var l=n("24fb");t=l(!1),t.push([e.i,"[data-v-33a415ac] .tabmenudemo-content{padding:2rem 1rem}",""]),e.exports=t}}]);