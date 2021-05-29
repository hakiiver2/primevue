(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d570685e"],{4215:function(e,t,n){var i=n("f0a3");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var c=n("499e").default;c("8e99ed14",i,!0,{sourceMap:!1,shadowMode:!1})},af46:function(e,t,n){"use strict";n.r(t);n("4de4"),n("b0c0");var i=n("7a23"),c=Object(i["Y"])("data-v-6ed061b0");Object(i["F"])("data-v-6ed061b0");var l={class:"content-section documentation"},o=Object(i["m"])("h1",null,"Icons",-1),s=Object(i["m"])("p",null,[Object(i["l"])("PrimeVue components internally use "),Object(i["m"])("a",{href:"https://github.com/primefaces/primeicons"},"PrimeIcons"),Object(i["l"])(" library, the official icons suite from "),Object(i["m"])("a",{href:"https://www.primetek.com.tr"},"PrimeTek"),Object(i["l"])(".")],-1),r=Object(i["m"])("h5",null,"Download",-1),a=Object(i["m"])("p",null,"PrimeIcons is available at npm, run the following command to download it to your project.",-1),p=Object(i["m"])("code",null,"\nnpm install primeicons --save\n\n",-1),m=Object(i["m"])("h5",null,"Getting Started",-1),u=Object(i["m"])("p",null,[Object(i["l"])("PrimeIcons use the "),Object(i["m"])("strong",null,"pi pi-{icon}"),Object(i["l"])(" syntax such as "),Object(i["m"])("strong",null,"pi pi-check"),Object(i["l"])(". A standalone icon can be displayed using an element like "),Object(i["m"])("i",null,"i"),Object(i["l"])(" or "),Object(i["m"])("i",null,"span")],-1),b=Object(i["m"])("code",null,'\n<i class="pi pi-check"></i>\n<i class="pi pi-times"></i>\n\n',-1),d=Object(i["m"])("i",{class:"pi pi-check",style:{"margin-right":".5rem"}},null,-1),j=Object(i["m"])("i",{class:"pi pi-times"},null,-1),O=Object(i["m"])("h5",null,"Size",-1),f=Object(i["m"])("p",null,"Size of the icons can easily be changed using font-size property.",-1),h=Object(i["m"])("code",null,'\n<i class="pi pi-check"></i>\n\n',-1),v=Object(i["m"])("i",{class:"pi pi-check"},null,-1),g=Object(i["m"])("code",null,'\n<i class="pi pi-check" style="fontSize: 2rem"></i>\n\n',-1),y=Object(i["m"])("i",{class:"pi pi-check",style:{fontSize:"2rem"}},null,-1),w=Object(i["m"])("h5",null,"Spinning Animation",-1),I=Object(i["m"])("p",null,"Special pi-spin class applies continuous rotation to an icon.",-1),k=Object(i["m"])("code",null,'\n<i class="pi pi-spin pi-spinner" style="fontSize: 2rem"></i>\n\n',-1),S=Object(i["m"])("i",{class:"pi pi-spin pi-spinner",style:{fontSize:"2rem"}},null,-1),P=Object(i["m"])("h5",null,"Constants",-1),V=Object(i["m"])("p",null,"PrimeIcons constants API is provided to easily choose an icon with typescript e.g. when defining a menu model.",-1),x=Object(i["m"])("code",null,'\n<Menu :model="items" />\n\n',-1),z=Object(i["m"])("code",null,"\nimport {PrimeIcons} from 'primevue/api';\n\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\titems: [\n\t\t\t\t{\n\t\t\t\t\tlabel: 'Update',\n\t\t\t\t\ticon: PrimeIcons.REFRESH,\n                    to: '/update'\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\tlabel: 'Delete',\n\t\t\t\t\ticon: PrimeIcons.TIMES,\n                    to: '/delete'\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t}\n}\n\n",-1),C=Object(i["m"])("h5",null,"List of Icons",-1),M=Object(i["m"])("p",null,[Object(i["l"])("Here is the current list of PrimeIcons, more icons are added periodically. You may also "),Object(i["m"])("a",{href:"https://github.com/primefaces/primeicons/issues"},"request new icons"),Object(i["l"])(" at the issue tracker.")],-1),_={class:"p-grid icons-list"};Object(i["D"])();var A=c((function(e,t,n,c,A,D){var E=Object(i["K"])("InputText"),L=Object(i["L"])("code");return Object(i["C"])(),Object(i["h"])("div",null,[Object(i["m"])("div",l,[o,s,r,a,Object(i["V"])(Object(i["m"])("pre",null,[p],512),[[L,void 0,void 0,{script:!0}]]),m,u,Object(i["V"])(Object(i["m"])("pre",null,[b],512),[[L]]),d,j,O,f,Object(i["V"])(Object(i["m"])("pre",null,[h],512),[[L]]),v,Object(i["V"])(Object(i["m"])("pre",null,[g],512),[[L]]),y,w,I,Object(i["V"])(Object(i["m"])("pre",null,[k],512),[[L]]),S,P,V,Object(i["V"])(Object(i["m"])("pre",null,[x],512),[[L]]),Object(i["V"])(Object(i["m"])("pre",null,[z],512),[[L,void 0,void 0,{script:!0}]]),C,M,Object(i["m"])(E,{modelValue:A.filter,"onUpdate:modelValue":t[1]||(t[1]=function(e){return A.filter=e}),class:"icon-filter",placeholder:"Search an icon"},null,8,["modelValue"]),Object(i["m"])("div",_,[(Object(i["C"])(!0),Object(i["h"])(i["a"],null,Object(i["I"])(D.filteredIcons,(function(e){return Object(i["C"])(),Object(i["h"])("div",{class:"p-col-12 p-md-2",key:e.properties.name},[Object(i["m"])("i",{class:"pi pi-"+e.properties.name},null,2),Object(i["m"])("div",null,"pi-"+Object(i["O"])(e.properties.name),1)])})),128))])])])})),D=n("bc3a"),E=n.n(D),L={data:function(){return{icons:null,filter:null}},mounted:function(){var e=this;E.a.get("demo/data/icons.json").then((function(t){var n=t.data.icons;n.sort((function(e,t){return e.properties.name<t.properties.name?-1:e.properties.name<t.properties.name?1:0})),e.icons=n}))},computed:{filteredIcons:function(){var e=this;return this.filter?this.icons.filter((function(t){return t.properties.name.indexOf(e.filter.toLowerCase())>-1})):this.icons}}};n("b298");L.render=A,L.__scopeId="data-v-6ed061b0";t["default"]=L},b298:function(e,t,n){"use strict";n("4215")},f0a3:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,".icon-filter[data-v-6ed061b0]{width:100%;padding:1rem;margin:1rem 0 1.5rem 0}.icons-list[data-v-6ed061b0]{text-align:center}.icons-list i[data-v-6ed061b0]{font-size:1.5rem;color:var(--text-color-secondary);margin-bottom:.5rem}.icons-list .p-md-2[data-v-6ed061b0]{padding-bottom:2rem}",""]),e.exports=t}}]);