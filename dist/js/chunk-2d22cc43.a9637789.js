(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22cc43"],{f542:function(e,t,n){"use strict";n.r(t);var l=n("7a23"),a={class:"content-section introduction"},c=Object(l["m"])("div",{class:"feature-intro"},[Object(l["m"])("h1",null,"Menu"),Object(l["m"])("p",null,"Menu is a navigation / command component that supports dynamic and static positioning.")],-1),i={class:"content-section implementation"},o={class:"card"},m=Object(l["m"])("h5",null,"Inline",-1),u=Object(l["m"])("h5",null,"Overlay",-1);function s(e,t,n,s,r,b){var d=Object(l["K"])("AppDemoActions"),p=Object(l["K"])("Menu"),O=Object(l["K"])("Button"),j=Object(l["K"])("MenuDoc");return Object(l["C"])(),Object(l["h"])("div",null,[Object(l["m"])("div",a,[c,Object(l["m"])(d)]),Object(l["m"])("div",i,[Object(l["m"])("div",o,[m,Object(l["m"])(p,{model:r.items},null,8,["model"]),u,Object(l["m"])(O,{type:"button",label:"Toggle",onClick:b.toggle,"aria-haspopup":"true","aria-controls":"overlay_menu"},null,8,["onClick"]),Object(l["m"])(p,{id:"overlay_menu",ref:"menu",model:r.items,popup:!0},null,8,["model"])])]),Object(l["m"])(j)])}var r=Object(l["m"])("h5",null,"Import",-1),b=Object(l["m"])("code",null,"\nimport Menu from 'primevue/menu';\n\n",-1),d=Object(l["m"])("h5",null,"MenuModel",-1),p=Object(l["l"])("Menu uses the common MenuModel API to define the items, visit "),O=Object(l["l"])("MenuModel API"),j=Object(l["l"])(" for details."),h=Object(l["m"])("h5",null,"Getting Started",-1),v=Object(l["m"])("p",null,"Menu requires a collection of menuitems as its model.",-1),f=Object(l["m"])("code",null,'\n<Menu :model="items" />\n\n',-1),g=Object(l["m"])("code",null,"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\titems: [\n\t\t\t\t{\n\t\t\t\t\tlabel: 'Update',\n\t\t\t\t\ticon: 'pi pi-refresh',\n\t\t\t\t\tcommand: () => {\n\t\t\t\t\t\tthis.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tlabel: 'Delete',\n\t\t\t\t\ticon: 'pi pi-times',\n\t\t\t\t\tcommand: () => {\n\t\t\t\t\t\tthis.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tlabel: 'Vue Website',\n\t\t\t\t\ticon: 'pi pi-external-link',\n\t\t\t\t\turl: 'https://vuejs.org/'\n\t\t\t\t},\n\t\t\t\t{\n                    label: 'Router',\n                    icon: 'pi pi-upload',\n                    to: '/fileupload'\n                }\n\t\t\t]\n\t\t}\n\t}\n}\n\n",-1),y=Object(l["m"])("h5",null,"SubMenus",-1),w=Object(l["m"])("p",null,"Menu supports one level of nesting via subitems of an item.",-1),D=Object(l["m"])("code",null,"\nconst items: [\n    {\n        label: 'Options',\n        items: [{label: 'New', icon: 'pi pi-fw pi-plus', command:() => {} },\n                {label: 'Delete', icon: 'pi pi-fw pi-trash', url: 'https://www.primetek.com.tr'}]\n    },\n    {\n        label: 'Account',\n        items: [{label: 'Options', icon: 'pi pi-fw pi-cog', to: '/options'},\n                {label: 'Sign Out', icon: 'pi pi-fw pi-power-off', to: '/logout'} ]\n    }\n];\n\n",-1),M=Object(l["m"])("h5",null,"Popup Mode",-1),U=Object(l["m"])("p",null,"Menu is inline by default whereas popup mode is supported by enabling popup property and calling toggle method with an event of the target.",-1),k=Object(l["m"])("code",null,'\n<Button type="button" label="Toggle" @click="toggle" />\n<Menu ref="menu" :model="items" :popup="true" />\n\n',-1),S=Object(l["m"])("code",null,"\ntoggle(event) {\n    this.$refs.menu.toggle(event);\n}\n\n",-1),T=Object(l["m"])("h5",null,"Templating",-1),I=Object(l["m"])("p",null,[Object(l["l"])("Menu offers content customization with the "),Object(l["m"])("i",null,"item"),Object(l["l"])(" template that receives the menuitem instance from the model as a parameter.")],-1),x=Object(l["m"])("code",null,[Object(l["m"])("template",null,'\n<Menu :model="items">\n    <template #item="{item}">\n        <a :href="item.url">{{item.label}}</a>\n    </template>\n</Menu>\n'),Object(l["l"])("\n")],-1),A=Object(l["m"])("h5",null,"Properties",-1),N=Object(l["m"])("p",null,"Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.",-1),V=Object(l["m"])("div",{class:"doc-tablewrapper"},[Object(l["m"])("table",{class:"doc-table"},[Object(l["m"])("thead",null,[Object(l["m"])("tr",null,[Object(l["m"])("th",null,"Name"),Object(l["m"])("th",null,"Type"),Object(l["m"])("th",null,"Default"),Object(l["m"])("th",null,"Description")])]),Object(l["m"])("tbody",null,[Object(l["m"])("tr",null,[Object(l["m"])("td",null,"model"),Object(l["m"])("td",null,"array"),Object(l["m"])("td",null,"null"),Object(l["m"])("td",null,"An array of menuitems.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"popup"),Object(l["m"])("td",null,"boolean"),Object(l["m"])("td",null,"false"),Object(l["m"])("td",null,"Defines if menu would displayed as a popup.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"appendTo"),Object(l["m"])("td",null,"string"),Object(l["m"])("td",null,"body"),Object(l["m"])("td",null,"A valid query selector or an HTMLElement to specify where the overlay gets attached.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"baseZIndex"),Object(l["m"])("td",null,"number"),Object(l["m"])("td",null,"0"),Object(l["m"])("td",null,"Base zIndex value to use in layering.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"autoZIndex"),Object(l["m"])("td",null,"boolean"),Object(l["m"])("td",null,"true"),Object(l["m"])("td",null,"Whether to automatically manage layering.")])])])],-1),$=Object(l["m"])("h5",null,"Methods",-1),_=Object(l["m"])("div",{class:"doc-tablewrapper"},[Object(l["m"])("table",{class:"doc-table"},[Object(l["m"])("thead",null,[Object(l["m"])("tr",null,[Object(l["m"])("th",null,"Name"),Object(l["m"])("th",null,"Parameters"),Object(l["m"])("th",null,"Description")])]),Object(l["m"])("tbody",null,[Object(l["m"])("tr",null,[Object(l["m"])("td",null,"toggle"),Object(l["m"])("td",null,"event: Browser event"),Object(l["m"])("td",null,"Toggles the visibility of the overlay.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"show"),Object(l["m"])("td",null,[Object(l["l"])("event: Browser event "),Object(l["m"])("br"),Object(l["l"])(" target: Optional target if event.target would not be used")]),Object(l["m"])("td",null,"Shows the overlay.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"hide"),Object(l["m"])("td",null,"-"),Object(l["m"])("td",null,"Hides the overlay.")])])])],-1),P=Object(l["m"])("h5",null,"Slots",-1),B=Object(l["m"])("div",{class:"doc-tablewrapper"},[Object(l["m"])("table",{class:"doc-table"},[Object(l["m"])("thead",null,[Object(l["m"])("tr",null,[Object(l["m"])("th",null,"Name"),Object(l["m"])("th",null,"Parameters")])]),Object(l["m"])("tbody",null,[Object(l["m"])("tr",null,[Object(l["m"])("td",null,"item"),Object(l["m"])("td",null,"item: Menuitem instance")])])])],-1),C=Object(l["m"])("h5",null,"Styling",-1),K=Object(l["l"])("Following is the list of structural style classes, for theming classes visit "),W=Object(l["l"])("theming"),L=Object(l["l"])(" page."),R=Object(l["m"])("div",{class:"doc-tablewrapper"},[Object(l["m"])("table",{class:"doc-table"},[Object(l["m"])("thead",null,[Object(l["m"])("tr",null,[Object(l["m"])("th",null,"Name"),Object(l["m"])("th",null,"Element")])]),Object(l["m"])("tbody",null,[Object(l["m"])("tr",null,[Object(l["m"])("td",null,"p-menu"),Object(l["m"])("td",null,"Container element.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"p-menu-list"),Object(l["m"])("td",null,"List element.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"p-menuitem"),Object(l["m"])("td",null,"Menuitem element.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"p-menuitem-text"),Object(l["m"])("td",null,"Label of a menuitem.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"p-menuitem-icon"),Object(l["m"])("td",null,"Icon of a menuitem.")])])])],-1),q=Object(l["m"])("h5",null,"Dependencies",-1),z=Object(l["m"])("p",null,"None.",-1);function E(e,t,n,a,c,i){var o=Object(l["K"])("router-link"),m=Object(l["K"])("AppDoc"),u=Object(l["L"])("code");return Object(l["C"])(),Object(l["h"])(m,{name:"MenuDemo",sources:c.sources,github:"menu/MenuDemo.vue"},{default:Object(l["U"])((function(){return[r,Object(l["V"])(Object(l["m"])("pre",null,[b],512),[[u,void 0,void 0,{script:!0}]]),d,Object(l["m"])("p",null,[p,Object(l["m"])(o,{to:"/menumodel"},{default:Object(l["U"])((function(){return[O]})),_:1}),j]),h,v,Object(l["V"])(Object(l["m"])("pre",null,[f],512),[[u]]),Object(l["V"])(Object(l["m"])("pre",null,[g],512),[[u,void 0,void 0,{script:!0}]]),y,w,Object(l["V"])(Object(l["m"])("pre",null,[D],512),[[u,void 0,void 0,{script:!0}]]),M,U,Object(l["V"])(Object(l["m"])("pre",null,[k],512),[[u]]),Object(l["V"])(Object(l["m"])("pre",null,[S],512),[[u,void 0,void 0,{script:!0}]]),T,I,Object(l["V"])(Object(l["m"])("pre",null,[x],512),[[u]]),A,N,V,$,_,P,B,C,Object(l["m"])("p",null,[K,Object(l["m"])(o,{to:"/theming"},{default:Object(l["U"])((function(){return[W]})),_:1}),L]),R,q,z]})),_:1},8,["sources"])}var F={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:"\n<template>\n    <div>\n        <Toast />\n\n        <h5>Inline</h5>\n        <Menu :model=\"items\" />\n\n        <h5>Overlay</h5>\n        <Button type=\"button\" label=\"Toggle\" @click=\"toggle\" aria-haspopup=\"true\" aria-controls=\"overlay_menu\"/>\n        <Menu id=\"overlay_menu\" ref=\"menu\" :model=\"items\" :popup=\"true\" />\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            items: [\n                {\n                    label: 'Options',\n                    items: [{\n                        label: 'Update',\n                        icon: 'pi pi-refresh',\n                        command: () => {\n                            this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});\n                        }\n                    },\n                    {\n                        label: 'Delete',\n                        icon: 'pi pi-times',\n                        command: () => {\n                            this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});\n                        }\n                    }\n                ]},\n                {\n                    label: 'Navigate',\n                    items: [{\n                        label: 'Vue Website',\n                        icon: 'pi pi-external-link',\n                        url: 'https://vuejs.org/'\n                    },\n                    {\n                        label: 'Router',\n                        icon: 'pi pi-upload',\n                        command: () => {\n                            window.location.hash = \"/fileupload\"\n                        }\n                    }\n                ]}\n            ]\n        }\n    },\n    methods: {\n        toggle(event) {\n            this.$refs.menu.toggle(event);\n        },\n        save() {\n            this.$toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});\n        }\n    }\n}\n<\\/script>\n"},"composition-api":{tabName:"Composition API Source",content:"\n<template>\n    <div>\n       <Toast />\n\n        <h5>Inline</h5>\n        <Menu :model=\"items\" />\n\n        <h5>Overlay</h5>\n        <Button type=\"button\" label=\"Toggle\" @click=\"toggle\" aria-haspopup=\"true\" aria-controls=\"overlay_menu\"/>\n        <Menu id=\"overlay_menu\" ref=\"menu\" :model=\"items\" :popup=\"true\" />\n    </div>\n</template>\n\n<script>\nimport { ref } from 'vue';\nimport { useToast } from 'primevue/usetoast';\n\nexport default {\n    setup() {\n        const toast = useToast();\n        const menu = ref();\n        const items = ref([\n            {\n                label: 'Options',\n                items: [{\n                    label: 'Update',\n                    icon: 'pi pi-refresh',\n                    command: () => {\n                        toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});\n                    }\n                },\n                {\n                    label: 'Delete',\n                    icon: 'pi pi-times',\n                    command: () => {\n                        toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});\n                    }\n                }\n            ]},\n            {\n                label: 'Navigate',\n                items: [{\n                    label: 'Vue Website',\n                    icon: 'pi pi-external-link',\n                    url: 'https://vuejs.org/'\n                },\n                {\n                    label: 'Router',\n                    icon: 'pi pi-upload',\n                    command: () => {\n                        window.location.hash = \"/fileupload\"\n                    }\n                }\n            ]}\n        ]);\n\n        const toggle = (event) => {\n            menu.value.toggle(event);\n        };\n        const save = () => {\n            toast.add({severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000});\n        };\n\n        return { items, menu, toggle, save }\n    }\n}\n<\\/script>\n"}}}}};F.render=E;var H=F,J={data:function(){var e=this;return{items:[{label:"Options",items:[{label:"Update",icon:"pi pi-refresh",command:function(){e.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:function(){e.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}}]},{label:"Navigate",items:[{label:"Vue Website",icon:"pi pi-external-link",url:"https://vuejs.org/"},{label:"Router",icon:"pi pi-upload",to:"/fileupload"}]}]}},methods:{toggle:function(e){this.$refs.menu.toggle(e)},save:function(){this.$toast.add({severity:"success",summary:"Success",detail:"Data Saved",life:3e3})}},components:{MenuDoc:H}};J.render=s;t["default"]=J}}]);