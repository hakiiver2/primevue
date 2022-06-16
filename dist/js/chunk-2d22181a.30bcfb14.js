(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22181a"],{cb49:function(t,e,o){"use strict";o.r(e);var n=o("7a23"),l={class:"content-section introduction"},c=Object(n["m"])("div",{class:"feature-intro"},[Object(n["m"])("h1",null,"Tooltip"),Object(n["m"])("p",null,"Tooltip directive provides advisory information for a component.")],-1),i={class:"content-section implementation"},p={class:"card"},u=Object(n["m"])("h5",null,"Positions",-1),r={class:"p-grid p-fluid"},s={class:"p-col-12 p-md-3"},a={class:"p-col-12 p-md-3"},m={class:"p-col-12 p-md-3"},d={class:"p-col-12 p-md-3"},b=Object(n["m"])("h5",null,"Focus and Blur",-1),O=Object(n["m"])("h5",null,"Button",-1);function j(t,e,o,j,v,h){var y=Object(n["K"])("AppDemoActions"),f=Object(n["K"])("InputText"),x=Object(n["K"])("Button"),T=Object(n["K"])("TooltipDoc"),g=Object(n["L"])("tooltip");return Object(n["C"])(),Object(n["h"])("div",null,[Object(n["m"])("div",l,[c,Object(n["m"])(y)]),Object(n["m"])("div",i,[Object(n["m"])("div",p,[u,Object(n["m"])("div",r,[Object(n["m"])("div",s,[Object(n["V"])(Object(n["m"])(f,{type:"text",placeholder:"Right"},null,512),[[g,"Enter your username",void 0,{right:!0}]])]),Object(n["m"])("div",a,[Object(n["V"])(Object(n["m"])(f,{type:"text",placeholder:"Top"},null,512),[[g,"Enter your username",void 0,{top:!0}]])]),Object(n["m"])("div",m,[Object(n["V"])(Object(n["m"])(f,{type:"text",placeholder:"Bottom"},null,512),[[g,"Enter your username",void 0,{bottom:!0}]])]),Object(n["m"])("div",d,[Object(n["V"])(Object(n["m"])(f,{type:"text",placeholder:"Left"},null,512),[[g,"Enter your username",void 0,{left:!0}]])])]),b,Object(n["V"])(Object(n["m"])(f,{type:"text",placeholder:"Focus"},null,512),[[g,"Enter your username",void 0,{bottom:!0,focus:!0}]]),O,Object(n["V"])(Object(n["m"])(x,{type:"button",label:"Save",icon:"pi pi-check"},null,512),[[g,"Click to proceed"]])])]),Object(n["m"])(T)])}var v=Object(n["m"])("h5",null,"Getting Started",-1),h=Object(n["m"])("p",null,[Object(n["l"])("Tooltip is a directive that needs to be imported and configured with a name of your choice. Global configuration is done with the "),Object(n["m"])("i",null,"app.directive"),Object(n["l"])(" function.")],-1),y=Object(n["m"])("code",null,"\nimport Tooltip from 'primevue/tooltip';\n\napp.directive('tooltip', Tooltip);\n\n",-1),f=Object(n["m"])("p",null,"Tooltip can also be configured locally using the directives property of your component.",-1),x=Object(n["m"])("code",null,"\ndirectives: {\n    'tooltip': Tooltip\n}\n\n",-1),T=Object(n["m"])("p",null,"Once the tooltip is configured, it can be attached to a target using the v- prefix.",-1),g=Object(n["m"])("code",null,[Object(n["m"])("template",null,'\n<InputText type="text" v-tooltip="\'Enter your username\'" />\n'),Object(n["l"])("\n")],-1),E=Object(n["m"])("h5",null,"Positions",-1),I=Object(n["m"])("p",null,'There are four choices to position the tooltip, default value is "right" and alternatives are "top", "bottom", "left". Position is specified using a modifier.',-1),w=Object(n["m"])("code",null,[Object(n["m"])("template",null,'\n<InputText type="text" v-tooltip.right="\'Enter your username\'" />\n<InputText type="text" v-tooltip.top="\'Enter your username\'" />\n<InputText type="text" v-tooltip.bottom="\'Enter your username\'" />\n<InputText type="text" v-tooltip.left="\'Enter your username\'" />\n'),Object(n["l"])("\n")],-1),B=Object(n["m"])("h5",null,"Events",-1),V=Object(n["m"])("p",null,"Tooltip gets displayed on hover event of its target by default, other option is the focus event to display and blur to hide.",-1),k=Object(n["m"])("code",null,[Object(n["m"])("template",null,'\n<InputText type="text" v-tooltip.focus="\'Enter your username\'" />\n'),Object(n["l"])("\n")],-1),A=Object(n["m"])("h5",null,"Modifiers",-1),D=Object(n["m"])("p",null,"As seen in positions and event sections, tooltip is configured via modifiers that can be chained. Tooltip below, gets displayed at the top of the input at focus event. ",-1),F=Object(n["m"])("code",null,[Object(n["m"])("template",null,'\n<InputText type="text" v-tooltip.top.focus="\'Enter your username\'" />\n'),Object(n["l"])("\n")],-1),P=Object(n["m"])("h5",null,"Styling",-1),S=Object(n["l"])("Following is the list of structural style classes, for theming classes visit "),C=Object(n["l"])("theming"),K=Object(n["l"])(" page."),L=Object(n["m"])("div",{class:"doc-tablewrapper"},[Object(n["m"])("table",{class:"doc-table"},[Object(n["m"])("thead",null,[Object(n["m"])("tr",null,[Object(n["m"])("th",null,"Name"),Object(n["m"])("th",null,"Element")])]),Object(n["m"])("tbody",null,[Object(n["m"])("tr",null,[Object(n["m"])("td",null,"p-tooltip"),Object(n["m"])("td",null,"Input element.")]),Object(n["m"])("tr",null,[Object(n["m"])("td",null,"p-tooltip-arrow"),Object(n["m"])("td",null,"Arrow of the tooltip.")]),Object(n["m"])("tr",null,[Object(n["m"])("td",null,"p-tooltip-text"),Object(n["m"])("td",null,"Text of the tooltip")])])])],-1),N=Object(n["m"])("h5",null,"Dependencies",-1),R=Object(n["m"])("p",null,"None.",-1);function G(t,e,o,l,c,i){var p=Object(n["K"])("router-link"),u=Object(n["K"])("AppDoc"),r=Object(n["L"])("code");return Object(n["C"])(),Object(n["h"])(u,{name:"TooltipDemo",sources:c.sources,github:"tooltip/TooltipDemo.vue"},{default:Object(n["U"])((function(){return[v,h,Object(n["V"])(Object(n["m"])("pre",null,[y],512),[[r,void 0,void 0,{script:!0}]]),f,Object(n["V"])(Object(n["m"])("pre",null,[x],512),[[r,void 0,void 0,{script:!0}]]),T,Object(n["V"])(Object(n["m"])("pre",null,[g],512),[[r]]),E,I,Object(n["V"])(Object(n["m"])("pre",null,[w],512),[[r]]),B,V,Object(n["V"])(Object(n["m"])("pre",null,[k],512),[[r]]),A,D,Object(n["V"])(Object(n["m"])("pre",null,[F],512),[[r]]),P,Object(n["m"])("p",null,[S,Object(n["m"])(p,{to:"/theming"},{default:Object(n["U"])((function(){return[C]})),_:1}),K]),L,N,R]})),_:1},8,["sources"])}var J={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <h5>Positions</h5>\n        <div class="p-grid p-fluid">\n            <div class="p-col-12 p-md-3">\n                <InputText type="text" placeholder="Right" v-tooltip.right="\'Enter your username\'" />\n            </div>\n            <div class="p-col-12 p-md-3">\n                <InputText type="text" placeholder="Top" v-tooltip.top="\'Enter your username\'" />\n            </div>\n            <div class="p-col-12 p-md-3">\n                <InputText type="text" placeholder="Bottom" v-tooltip.bottom="\'Enter your username\'" />\n            </div>\n            <div class="p-col-12 p-md-3">\n                <InputText type="text" placeholder="Left" v-tooltip.left="\'Enter your username\'" />\n            </div>\n        </div>\n\n        <h5>Focus and Blur</h5>\n        <InputText type="text" placeholder="Focus" v-tooltip.bottom.focus="\'Enter your username\'" />\n\n        <h5>Button</h5>\n        <Button type="button" label="Save" icon="pi pi-check" v-tooltip="\'Click to proceed\'" />\n    </div>\n</template>\n\n<script>\nexport default {\n}\n<\\/script>\n'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <h5>Positions</h5>\n        <div class="p-grid p-fluid">\n            <div class="p-col-12 p-md-3">\n                <InputText type="text" placeholder="Right" v-tooltip.right="\'Enter your username\'" />\n            </div>\n            <div class="p-col-12 p-md-3">\n                <InputText type="text" placeholder="Top" v-tooltip.top="\'Enter your username\'" />\n            </div>\n            <div class="p-col-12 p-md-3">\n                <InputText type="text" placeholder="Bottom" v-tooltip.bottom="\'Enter your username\'" />\n            </div>\n            <div class="p-col-12 p-md-3">\n                <InputText type="text" placeholder="Left" v-tooltip.left="\'Enter your username\'" />\n            </div>\n        </div>\n\n        <h5>Focus and Blur</h5>\n        <InputText type="text" placeholder="Focus" v-tooltip.bottom.focus="\'Enter your username\'" />\n\n        <h5>Button</h5>\n        <Button type="button" label="Save" icon="pi pi-check" v-tooltip="\'Click to proceed\'" />\n    </div>\n</template>\n\n<script>\nexport default {\n}\n<\\/script>\n'}}}}};J.render=G;var U=J,_={components:{TooltipDoc:U}};_.render=j;e["default"]=_}}]);