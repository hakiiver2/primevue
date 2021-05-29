(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19e55486"],{"15f8":function(e,t,n){"use strict";n.r(t);var l=n("7a23"),o=Object(l["Y"])("data-v-516baab5");Object(l["F"])("data-v-516baab5");var c={class:"content-section introduction"},a=Object(l["m"])("div",{class:"feature-intro"},[Object(l["m"])("h1",null,"BlockUI"),Object(l["m"])("p",null,"BlockUI can either block other components or the whole page.")],-1),b={class:"content-section implementation"},u={class:"card"},s=Object(l["m"])("h5",null,"Document",-1),i=Object(l["m"])("h5",null,"Panel",-1),r=Object(l["m"])("p",null,"The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.",-1);Object(l["D"])();var m=o((function(e,t,n,m,d,h){var k=Object(l["K"])("AppDemoActions"),j=Object(l["K"])("BlockUI"),O=Object(l["K"])("Button"),p=Object(l["K"])("Panel"),f=Object(l["K"])("BlockUIDoc");return Object(l["C"])(),Object(l["h"])("div",null,[Object(l["m"])("div",c,[a,Object(l["m"])(k)]),Object(l["m"])("div",b,[Object(l["m"])("div",u,[s,Object(l["m"])(j,{blocked:d.blockedDocument,fullScreen:!0},null,8,["blocked"]),Object(l["m"])(O,{type:"button",label:"Block",onClick:t[1]||(t[1]=function(e){return h.blockDocument()})}),i,Object(l["m"])(O,{type:"button",label:"Block",onClick:t[2]||(t[2]=function(e){return h.blockPanel()})}),Object(l["m"])(O,{type:"button",label:"Unblock",onClick:t[3]||(t[3]=function(e){return h.unblockPanel()})}),Object(l["m"])(j,{blocked:d.blockedPanel},{default:o((function(){return[Object(l["m"])(p,{header:"Godfather I",style:{"margin-top":"20px"}},{default:o((function(){return[r]})),_:1})]})),_:1},8,["blocked"])])]),Object(l["m"])(f)])})),d=Object(l["m"])("h5",null,"Import",-1),h=Object(l["m"])("code",null,"\nimport BlockUI from 'primevue/blockui';\n\n",-1),k=Object(l["m"])("h5",null,"Getting Started",-1),j=Object(l["m"])("p",null,[Object(l["l"])("BlockUI is controlled using the "),Object(l["m"])("i",null,"blocked"),Object(l["l"])(" property, by default target element to block is the child component. In example below, panel gets blocked with a mask when blockedPanel is enabled and gets unblock when the bound variable is set to false. ")],-1),O=Object(l["m"])("code",null,'\n<BlockUI :blocked="blockedPanel">\n    <Panel header="Header">\n        Panel Content\n    </Panel>\n</BlockUI>\n\n',-1),p=Object(l["m"])("code",null,"\nexport default {\n    data() {\n        return {\n            blockedPanel: false\n        }\n    },\n    methods: {\n        blockPanel() {\n            this.blockedPanel = true;\n        },\n        unblockPanel() {\n            this.blockedPanel = false;\n        }\n    }\n}\n\n",-1),f=Object(l["m"])("h5",null,"Full Screen",-1),g=Object(l["m"])("p",null,[Object(l["l"])("In full screen mode, instead of a particular element, the whole document gets blocked. Set "),Object(l["m"])("i",null,"fullScreen"),Object(l["l"])(" as true in order to enable this functionality.")],-1),v=Object(l["m"])("code",null,'\n<BlockUI :blocked="blockedDocument" :fullScreen="true"></BlockUI>\n\n',-1),y=Object(l["m"])("h5",null,"Properties",-1),P=Object(l["m"])("p",null,"Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.",-1),B=Object(l["m"])("div",{class:"doc-tablewrapper"},[Object(l["m"])("table",{class:"doc-table"},[Object(l["m"])("thead",null,[Object(l["m"])("tr",null,[Object(l["m"])("th",null,"Name"),Object(l["m"])("th",null,"Type"),Object(l["m"])("th",null,"Default"),Object(l["m"])("th",null,"Description")])]),Object(l["m"])("tbody",null,[Object(l["m"])("tr",null,[Object(l["m"])("td",null,"blocked"),Object(l["m"])("td",null,"array"),Object(l["m"])("td",null,"null"),Object(l["m"])("td",null,"Controls the blocked state.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"fullscreen"),Object(l["m"])("td",null,"menuitem"),Object(l["m"])("td",null,"null"),Object(l["m"])("td",null,"When enabled, the whole document gets blocked.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"baseZIndex"),Object(l["m"])("td",null,"number"),Object(l["m"])("td",null,"0"),Object(l["m"])("td",null,"Base zIndex value to use in layering.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"autoZIndex"),Object(l["m"])("td",null,"boolean"),Object(l["m"])("td",null,"true"),Object(l["m"])("td",null,"Whether to automatically manage layering.")])])])],-1),D=Object(l["m"])("h5",null,"Events",-1),w=Object(l["m"])("div",{class:"doc-tablewrapper"},[Object(l["m"])("table",{class:"doc-table"},[Object(l["m"])("thead",null,[Object(l["m"])("tr",null,[Object(l["m"])("th",null,"Name"),Object(l["m"])("th",null,"Parameters"),Object(l["m"])("th",null,"Description")])]),Object(l["m"])("tbody",null,[Object(l["m"])("tr",null,[Object(l["m"])("td",null,"block"),Object(l["m"])("td",null,"-"),Object(l["m"])("td",null,"Fired when the element gets blocked.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"unblock"),Object(l["m"])("td",null,"-"),Object(l["m"])("td",null,"Fired when the element gets unblocked.")])])])],-1),I=Object(l["m"])("h5",null,"Styling",-1),U=Object(l["l"])("Following is the list of structural style classes, for theming classes visit "),M=Object(l["l"])("theming"),T=Object(l["l"])(" page."),x=Object(l["m"])("div",{class:"doc-tablewrapper"},[Object(l["m"])("table",{class:"doc-table"},[Object(l["m"])("thead",null,[Object(l["m"])("tr",null,[Object(l["m"])("th",null,"Name"),Object(l["m"])("th",null,"Element")])]),Object(l["m"])("tbody",null,[Object(l["m"])("tr",null,[Object(l["m"])("td",null,"p-blockui"),Object(l["m"])("td",null,"Mask element.")]),Object(l["m"])("tr",null,[Object(l["m"])("td",null,"p-blockui-document"),Object(l["m"])("td",null,"Mask element in full screen mode.")])])])],-1),C=Object(l["m"])("h5",null,"Dependencies",-1),S=Object(l["m"])("p",null,"None.",-1);function N(e,t,n,o,c,a){var b=Object(l["K"])("router-link"),u=Object(l["K"])("AppDoc"),s=Object(l["L"])("code");return Object(l["C"])(),Object(l["h"])(u,{name:"BlockUIDemo",sources:c.sources,github:"blockui/BlockUIDemo.vue"},{default:Object(l["U"])((function(){return[d,Object(l["V"])(Object(l["m"])("pre",null,[h],512),[[s,void 0,void 0,{script:!0}]]),k,j,Object(l["V"])(Object(l["m"])("pre",null,[O],512),[[s]]),Object(l["V"])(Object(l["m"])("pre",null,[p],512),[[s,void 0,void 0,{script:!0}]]),f,g,Object(l["V"])(Object(l["m"])("pre",null,[v],512),[[s]]),y,P,B,D,w,I,Object(l["m"])("p",null,[U,Object(l["m"])(b,{to:"/theming"},{default:Object(l["U"])((function(){return[M]})),_:1}),T]),x,C,S]})),_:1},8,["sources"])}var _={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <h5>Document</h5>\n        <BlockUI :blocked="blockedDocument" :fullScreen="true"></BlockUI>\n\n        <Button type="button" label="Block" @click="blockDocument()"></Button>\n\n        <h5>Panel</h5>\n        <Button type="button" label="Block" @click="blockPanel()"></Button>\n        <Button type="button" label="Unblock" @click="unblockPanel()"></Button>\n\n        <BlockUI :blocked="blockedPanel">\n            <Panel header="Godfather I" style="margin-top: 20px">\n                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter\'s wedding.\n                His beloved son Michael has just come home from the war, but does not intend to become part of his father\'s business.\n                Through Michael\'s life the nature of the family business becomes clear. The business of the family is just like the head of the family,\n                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>\n            </Panel>\n        </BlockUI>\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            blockedPanel: false,\n            blockedDocument: false\n        }\n    },\n    methods: {\n        blockDocument() {\n            this.blockedDocument = true;\n\n            setTimeout(() => {\n                this.blockedDocument = false;\n            }, 3000);\n        },\n        blockPanel() {\n            this.blockedPanel = true;\n        },\n        unblockPanel() {\n            this.blockedPanel = false;\n        }\n    }\n}\n<\\/script>\n\n<style lang="scss" scoped>\n.p-panel p {\n    line-height: 1.5;\n    margin: 0;\n}\n\nbutton {\n    margin-right: .5rem;\n}\n</style>'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <h5>Document</h5>\n        <BlockUI :blocked="blockedDocument" :fullScreen="true"></BlockUI>\n\n        <Button type="button" label="Block" @click="blockDocument()"></Button>\n\n        <h5>Panel</h5>\n        <Button type="button" label="Block" @click="blockPanel()"></Button>\n        <Button type="button" label="Unblock" @click="unblockPanel()"></Button>\n\n        <BlockUI :blocked="blockedPanel">\n            <Panel header="Godfather I" style="margin-top: 20px">\n                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter\'s wedding.\n                His beloved son Michael has just come home from the war, but does not intend to become part of his father\'s business.\n                Through Michael\'s life the nature of the family business becomes clear. The business of the family is just like the head of the family,\n                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.</p>\n            </Panel>\n        </BlockUI>\n    </div>\n</template>\n\n<script>\nimport { ref } from \'vue\';\n\nexport default {\n    setup() {\n        const blockedPanel = ref(false);\n        const blockedDocument = ref(false);\n        const blockDocument = () => {\n            blockedDocument.value = true;\n\n            setTimeout(() => {\n                blockedDocument.value = false;\n            }, 3000);\n        };\n        const blockPanel = () => {\n            blockedPanel.value = true;\n        };\n        const unblockPanel = () => {\n            blockedPanel.value = false;\n        };\n\n        return { blockedPanel, blockedDocument, blockDocument, blockPanel, unblockPanel }\n    }\n}\n<\\/script>\n\n<style lang="scss" scoped>\n.p-panel p {\n    line-height: 1.5;\n    margin: 0;\n}\n\nbutton {\n    margin-right: .5rem;\n}\n</style>'}}}}};_.render=N;var K=_,V={data:function(){return{blockedPanel:!1,blockedDocument:!1}},methods:{blockDocument:function(){var e=this;this.blockedDocument=!0,setTimeout((function(){e.blockedDocument=!1}),3e3)},blockPanel:function(){this.blockedPanel=!0},unblockPanel:function(){this.blockedPanel=!1}},components:{BlockUIDoc:K}};n("d327");V.render=m,V.__scopeId="data-v-516baab5";t["default"]=V},"21b6":function(e,t,n){var l=n("668c");l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var o=n("499e").default;o("48c70374",l,!0,{sourceMap:!1,shadowMode:!1})},"668c":function(e,t,n){var l=n("24fb");t=l(!1),t.push([e.i,".p-panel p[data-v-516baab5]{line-height:1.5;margin:0}button[data-v-516baab5]{margin-right:.5rem}",""]),e.exports=t},d327:function(e,t,n){"use strict";n("21b6")}}]);