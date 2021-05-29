(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b019510"],{"08ec":function(t,e,n){var l=n("ed00");l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);var i=n("499e").default;i("37f27213",l,!0,{sourceMap:!1,shadowMode:!1})},"1c64":function(t,e,n){"use strict";n("08ec")},c1dd:function(t,e,n){"use strict";n.r(e);var l=n("7a23"),i=Object(l["Y"])("data-v-1eb83cb7");Object(l["F"])("data-v-1eb83cb7");var o={class:"content-section introduction"},a=Object(l["m"])("div",{class:"feature-intro"},[Object(l["m"])("h1",null,"SplitButton"),Object(l["m"])("p",null,"SplitButton groups a set of commands in an overlay with a default command.")],-1),c={class:"content-section implementation"},s={class:"card"},u=Object(l["m"])("h5",null,"Basic",-1),p=Object(l["m"])("h5",null,"Severities",-1);Object(l["D"])();var m=i((function(t,e,n,i,m,b){var d=Object(l["K"])("AppDemoActions"),r=Object(l["K"])("SplitButton"),j=Object(l["K"])("SplitButtonDoc");return Object(l["C"])(),Object(l["h"])("div",null,[Object(l["m"])("div",o,[a,Object(l["m"])(d)]),Object(l["m"])("div",c,[Object(l["m"])("div",s,[u,Object(l["m"])(r,{label:"Save",icon:"pi pi-plus",onClick:b.save,model:m.items},null,8,["onClick","model"]),p,Object(l["m"])(r,{label:"Save",icon:"pi pi-plus",model:m.items,class:"p-mb-2"},null,8,["model"]),Object(l["m"])(r,{label:"Save",icon:"pi pi-plus",model:m.items,class:"p-button-secondary p-mb-2"},null,8,["model"]),Object(l["m"])(r,{label:"Save",icon:"pi pi-plus",model:m.items,class:"p-button-success p-mb-2"},null,8,["model"]),Object(l["m"])(r,{label:"Save",icon:"pi pi-plus",model:m.items,class:"p-button-info p-mb-2"},null,8,["model"]),Object(l["m"])(r,{label:"Save",icon:"pi pi-plus",model:m.items,class:"p-button-warning p-mb-2"},null,8,["model"]),Object(l["m"])(r,{label:"Save",icon:"pi pi-plus",model:m.items,class:"p-button-help p-mb-2"},null,8,["model"]),Object(l["m"])(r,{label:"Save",icon:"pi pi-plus",model:m.items,class:"p-button-danger p-mb-2"},null,8,["model"])])]),Object(l["m"])(j)])})),b=Object(l["m"])("h5",null,"Import",-1),d=Object(l["m"])("code",null,"\nimport SplitButton from 'primevue/splitbutton';\n\n",-1),r=Object(l["m"])("h5",null,"Getting Started",-1),j=Object(l["m"])("p",null,[Object(l["l"])("SplitButton has a default command button and a collection of additional options defined by the "),Object(l["m"])("i",null,"model"),Object(l["l"])(" property.")],-1),O=Object(l["m"])("code",null,"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\titems: [\n\t\t\t\t{\n\t\t\t\t\tlabel: 'Update',\n\t\t\t\t\ticon: 'pi pi-refresh',\n\t\t\t\t\tcommand: () => {\n\t\t\t\t\t\tthis.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tlabel: 'Delete',\n\t\t\t\t\ticon: 'pi pi-times',\n\t\t\t\t\tcommand: () => {\n\t\t\t\t\t\tthis.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000});\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tlabel: 'Vue Website',\n\t\t\t\t\ticon: 'pi pi-external-link',\n\t\t\t\t\tcommand: () => {\n\t\t\t\t\t\twindow.location.href = 'https://vuejs.org/'\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tlabel: 'Upload',\n\t\t\t\t\ticon: 'pi pi-upload',\n                    to: '/fileupload'\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t}\n}\n\n",-1),v=Object(l["m"])("code",null,'\n<SplitButton label="Save" icon="pi pi-plus" :model="items"></SplitButton>\n\n',-1),S=Object(l["m"])("h5",null,"MenuModel",-1),h=Object(l["l"])("SplitButton uses the common MenuModel API to define the items, visit "),f=Object(l["l"])("MenuModel API"),B=Object(l["l"])(" for details."),y=Object(l["m"])("h5",null,"Severity",-1),g=Object(l["m"])("p",null,"Different color options are available as severity levels.",-1),w=Object(l["m"])("ul",null,[Object(l["m"])("li",null,".p-button-secondary"),Object(l["m"])("li",null,".p-button-success"),Object(l["m"])("li",null,".p-button-info"),Object(l["m"])("li",null,".p-button-warning"),Object(l["m"])("li",null,".p-button-help"),Object(l["m"])("li",null,".p-button-danger")],-1),D=Object(l["m"])("code",null,'\n<SplitButton label="Save" icon="pi pi-plus" :model="items"></SplitButton>\n<SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-secondary"></SplitButton>\n<SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-success"></SplitButton>\n<SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-info"></SplitButton>\n<SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-warning"></SplitButton>\n<SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-help"></SplitButton>\n<SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-danger"></SplitButton>\n\n',-1),U=Object(l["m"])("h5",null,"Properties",-1),k=Object(l["m"])("p",null,"Any property such as tabindex are passed to the underlying input element. Following are the additional properties to configure the component.",-1),x=Object(l["m"])("div",{class:"doc-tablewrapper"},[Object(l["m"])("table",{class:"doc-table"},[Object(l["m"])("thead",null,[Object(l["m"])("tr",null,[Object(l["m"])("th",null,"Name"),Object(l["m"])("th",null,"Type"),Object(l["m"])("th",null,"Default"),Object(l["m"])("th",null,"Description")])]),Object(l["m"])("tbody",null,[Object(l["m"])("tr",null,[Object(l["m"])("td",null,"label"),Object(l["m"])("td",null,"string"),Object(l["m"])("td",null,"null"),Object(l["m"])("td",null,"Text of the button.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"icon"),Object(l["m"])("td",null,"string"),Object(l["m"])("td",null,"null"),Object(l["m"])("td",null,"Name of the icon.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"model"),Object(l["m"])("td",null,"object"),Object(l["m"])("td",null,"null"),Object(l["m"])("td",null,"MenuModel instance to define the overlay items.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"autoZIndex"),Object(l["m"])("td",null,"boolean"),Object(l["m"])("td",null,"true"),Object(l["m"])("td",null,"Whether to automatically manage layering.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"baseZIndex"),Object(l["m"])("td",null,"number"),Object(l["m"])("td",null,"0"),Object(l["m"])("td",null,"Base zIndex value to use in layering.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"appendTo"),Object(l["m"])("td",null,"string"),Object(l["m"])("td",null,"body"),Object(l["m"])("td",null,"A valid query selector or an HTMLElement to specify where the overlay gets attached.")])])])],-1),M=Object(l["m"])("h5",null,"Events",-1),A=Object(l["m"])("p",null,"Any valid event such as focus, blur and input are passed to the underlying button element. Following are the additional events to configure the component.",-1),I=Object(l["m"])("div",{class:"doc-tablewrapper"},[Object(l["m"])("table",{class:"doc-table"},[Object(l["m"])("thead",null,[Object(l["m"])("tr",null,[Object(l["m"])("th",null,"Name"),Object(l["m"])("th",null,"Parameters"),Object(l["m"])("th",null,"Description")])]),Object(l["m"])("tbody",null,[Object(l["m"])("tr",null,[Object(l["m"])("td",null,"click"),Object(l["m"])("td",null,"event: Browser event"),Object(l["m"])("td",null,"Callback to invoke when main button is clicked.")])])])],-1),T=Object(l["m"])("h5",null,"Styling",-1),V=Object(l["l"])("Following is the list of structural style classes, for theming classes visit "),$=Object(l["l"])("theming"),C=Object(l["l"])(" page."),N=Object(l["m"])("div",{class:"doc-tablewrapper"},[Object(l["m"])("table",{class:"doc-table"},[Object(l["m"])("thead",null,[Object(l["m"])("tr",null,[Object(l["m"])("th",null,"Name"),Object(l["m"])("th",null,"Element")])]),Object(l["m"])("tbody",null,[Object(l["m"])("tr",null,[Object(l["m"])("td",null,"p-splitbutton"),Object(l["m"])("td",null,"Container element.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"p-splitbutton-button"),Object(l["m"])("td",null,"Dropdown button.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"p-menu"),Object(l["m"])("td",null,"Overlay menu.")])])])],-1),_=Object(l["m"])("h5",null,"Dependencies",-1),P=Object(l["m"])("p",null,"None.",-1);function K(t,e,n,i,o,a){var c=Object(l["K"])("router-link"),s=Object(l["K"])("AppDoc"),u=Object(l["L"])("code");return Object(l["C"])(),Object(l["h"])(s,{name:"SplitButtonDemo",sources:o.sources,github:"splitbutton/SplitButtonDemo.vue"},{default:Object(l["U"])((function(){return[b,Object(l["V"])(Object(l["m"])("pre",null,[d],512),[[u,void 0,void 0,{script:!0}]]),r,j,Object(l["V"])(Object(l["m"])("pre",null,[O],512),[[u,void 0,void 0,{script:!0}]]),Object(l["V"])(Object(l["m"])("pre",null,[v],512),[[u]]),S,Object(l["m"])("p",null,[h,Object(l["m"])(c,{to:"/menumodel"},{default:Object(l["U"])((function(){return[f]})),_:1}),B]),y,g,w,Object(l["V"])(Object(l["m"])("pre",null,[D],512),[[u]]),U,k,x,M,A,I,T,Object(l["m"])("p",null,[V,Object(l["m"])(c,{to:"/theming"},{default:Object(l["U"])((function(){return[$]})),_:1}),C]),N,_,P]})),_:1},8,["sources"])}var W={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n\t\t<Toast />\n\n        <h5>Basic</h5>\n        <SplitButton label="Save" icon="pi pi-plus" @click="save" :model="items"></SplitButton>\n\n        <h5>Severities</h5>\n        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-mb-2"></SplitButton>\n        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-secondary p-mb-2"></SplitButton>\n        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-success p-mb-2"></SplitButton>\n        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-info p-mb-2"></SplitButton>\n        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-warning p-mb-2"></SplitButton>\n        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-help p-mb-2"></SplitButton>\n        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-danger p-mb-2"></SplitButton>\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            items: [\n                {\n                    label: \'Update\',\n                    icon: \'pi pi-refresh\',\n                    command: () => {\n                        this.$toast.add({severity:\'success\', summary:\'Updated\', detail:\'Data Updated\', life: 3000});\n                    }\n                },\n                {\n                    label: \'Delete\',\n                    icon: \'pi pi-times\',\n                    command: () => {\n                        this.$toast.add({ severity: \'warn\', summary: \'Delete\', detail: \'Data Deleted\', life: 3000});\n                    }\n                },\n                {\n                    label: \'Vue Website\',\n                    icon: \'pi pi-external-link\',\n                    command: () => {\n                        window.location.href = \'https://vuejs.org/\'\n                    }\n                },\n                {   label: \'Upload\',\n                    icon: \'pi pi-upload\',\n                    command: () => {\n\t\t\t\t\t\twindow.location.hash = "/fileupload"\n\t\t\t\t\t}\n                }\n            ]\n        }\n    },\n    methods: {\n        save() {\n            this.$toast.add({severity: \'success\', summary: \'Success\', detail: \'Data Saved\', life: 3000});\n        }\n    }\n}\n<\\/script>\n\n<style lang="scss" scoped>\n.p-splitbutton {\n    margin-right: .5rem;\n}\n</style>'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n\t\t<Toast />\n\n        <h5>Basic</h5>\n\t\t<SplitButton label="Save" icon="pi pi-plus" @click="save" :model="items"></SplitButton>\n\n        <h5>Severities</h5>\n        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-mb-2"></SplitButton>\n        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-secondary p-mb-2"></SplitButton>\n        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-success p-mb-2"></SplitButton>\n        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-info p-mb-2"></SplitButton>\n        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-warning p-mb-2"></SplitButton>\n        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-help p-mb-2"></SplitButton>\n        <SplitButton label="Save" icon="pi pi-plus" :model="items" class="p-button-danger p-mb-2"></SplitButton>\n    </div>\n</template>\n\n<script>\nimport { ref } from "vue";\nimport { useToast } from "primevue/usetoast";\n\nexport default {\n    setup() {\n\t\tconst toast = useToast();\n        const items = ref([\n            {\n                label: \'Update\',\n                icon: \'pi pi-refresh\',\n                command: () => {\n                    toast.add({severity:\'success\', summary:\'Updated\', detail:\'Data Updated\', life: 3000});\n                }\n            },\n            {\n                label: \'Delete\',\n                icon: \'pi pi-times\',\n                command: () => {\n                    toast.add({ severity: \'warn\', summary: \'Delete\', detail: \'Data Deleted\', life: 3000});\n                }\n            },\n            {\n                label: \'Vue Website\',\n                icon: \'pi pi-external-link\',\n                command: () => {\n                    window.location.href = \'https://vuejs.org/\'\n                }\n            },\n            {   label: \'Upload\',\n                icon: \'pi pi-upload\',\n                command: () => {\n\t\t\t\t\twindow.location.hash = "/fileupload"\n\t\t\t\t}\n            }\n        ]);\n        const save = () => {\n            toast.add({severity: \'success\', summary: \'Success\', detail: \'Data Saved\', life: 3000});\n        };\n        return {items, save, toast}\n    }\n}\n<\\/script>\n\n<style lang="scss" scoped>\n.p-splitbutton {\n    margin-right: .5rem;\n}\n</style>'}}}}};W.render=K;var F=W,E={data:function(){var t=this;return{items:[{label:"Update",icon:"pi pi-refresh",command:function(){t.$toast.add({severity:"success",summary:"Updated",detail:"Data Updated",life:3e3})}},{label:"Delete",icon:"pi pi-times",command:function(){t.$toast.add({severity:"warn",summary:"Delete",detail:"Data Deleted",life:3e3})}},{label:"Vue Website",icon:"pi pi-external-link",command:function(){window.location.href="https://vuejs.org/"}},{label:"Upload",icon:"pi pi-upload",to:"/fileupload"}]}},methods:{save:function(){this.$toast.add({severity:"success",summary:"Success",detail:"Data Saved",life:3e3})}},components:{SplitButtonDoc:F}};n("1c64");E.render=m,E.__scopeId="data-v-1eb83cb7";e["default"]=E},ed00:function(t,e,n){var l=n("24fb");e=l(!1),e.push([t.i,".p-splitbutton[data-v-1eb83cb7]{margin-right:.5rem}",""]),t.exports=e}}]);