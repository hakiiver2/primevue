(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28421448"],{c235:function(e,t,i){"use strict";i.r(t);var n=i("7a23"),l=Object(n["m"])("div",{class:"content-section introduction"},[Object(n["m"])("div",{class:"feature-intro"},[Object(n["m"])("h1",null,[Object(n["l"])("Galleria "),Object(n["m"])("span",null,"FullScreen")]),Object(n["m"])("p",null,"In fullscreen mode content covers the whole page over a mask..")])],-1),a={class:"content-section implementation"},s={class:"card"},c=Object(n["m"])("h5",null,"With Thumbnails",-1),r={class:"card"},o=Object(n["m"])("h5",null,"Without Thumbnails",-1),m={class:"card"},u=Object(n["m"])("h5",null,"Custom Content",-1),p={key:0,class:"p-grid",style:{"max-width":"400px"}},b={class:"content-section documentation"},d=Object(n["m"])("code",null,[Object(n["m"])("template",null,'\n<h3>With Thumbnails</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions2" :numVisible="9" containerStyle="max-width: 50%"\n    :circular="true" :fullScreen="true" :showItemNavigators="true" v-model:visible="displayBasic">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n    <template #thumbnail="slotProps">\n        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n    </template>\n</Galleria>\n\n<Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" />\n\n<h3>Without Thumbnails</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"\n    :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false" v-model:visible="displayBasic2">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n    <template #thumbnail="slotProps">\n        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n    </template>\n</Galleria>\n\n<Button label="Show" icon="pi pi-external-link" @click="displayBasic2 = true" />\n\n<h3>Custom Content</h3>\n<Galleria :value="images" v-model:activeIndex="activeIndex" :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"\n    :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false" v-model:visible="displayCustom">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n    <template #thumbnail="slotProps">\n        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n    </template>\n</Galleria>\n\n<div v-if="images" class="p-grid" style="max-width: 400px;">\n    <div v-for="(image, index) of images" class="p-col-3" :key="index">\n        <img :src="image.thumbnailImageSrc" :alt="image.alt" style="cursor: pointer" @click="imageClick(index)"/>\n    </div>\n</div>\n'),Object(n["l"])("\n")],-1),v=Object(n["m"])("code",null,"\nimport PhotoService from '../../service/PhotoService';\n\nexport default {\n    data() {\n        return {\n            images: null,\n            activeIndex: 0,\n\t\t\tresponsiveOptions: [\n\t\t\t\t{\n                    breakpoint: '1024px',\n                    numVisible: 5\n                },\n                {\n                    breakpoint: '768px',\n                    numVisible: 3\n                },\n                {\n                    breakpoint: '560px',\n                    numVisible: 1\n                }\n            ],\n            responsiveOptions2: [\n                {\n                    breakpoint: '1500px',\n                    numVisible: 5\n                },\n                {\n                    breakpoint: '1024px',\n                    numVisible: 3\n                },\n                {\n                    breakpoint: '768px',\n                    numVisible: 2\n                },\n                {\n                    breakpoint: '560px',\n                    numVisible: 1\n                }\n            ],\n            displayBasic: false,\n            displayBasic2: false,\n            displayCustom: false\n        }\n    },\n    galleriaService: null,\n\tcreated() {\n\t\tthis.galleriaService = new PhotoService();\n\t},\n\tmounted() {\n\t\tthis.galleriaService.getImages().then(data => this.images = data);\n    },\n    methods: {\n        imageClick(index) {\n            this.activeIndex = index;\n            this.displayCustom = true;\n        }\n    }\n}\n\n",-1);function h(e,t,i,h,O,g){var j=Object(n["K"])("Galleria"),y=Object(n["K"])("Button"),f=Object(n["K"])("TabPanel"),k=Object(n["K"])("TabView"),x=Object(n["L"])("code");return Object(n["C"])(),Object(n["h"])("div",null,[l,Object(n["m"])("div",a,[Object(n["m"])("div",s,[c,Object(n["m"])(j,{value:O.images,responsiveOptions:O.responsiveOptions2,numVisible:9,containerStyle:"max-width: 50%",circular:!0,fullScreen:!0,showItemNavigators:!0,visible:O.displayBasic,"onUpdate:visible":t[1]||(t[1]=function(e){return O.displayBasic=e})},{item:Object(n["U"])((function(e){return[Object(n["m"])("img",{src:e.item.itemImageSrc,alt:e.item.alt,style:{width:"100%",display:"block"}},null,8,["src","alt"])]})),thumbnail:Object(n["U"])((function(e){return[Object(n["m"])("img",{src:e.item.thumbnailImageSrc,alt:e.item.alt,style:{display:"block"}},null,8,["src","alt"])]})),_:1},8,["value","responsiveOptions","visible"]),Object(n["m"])(y,{label:"Show",icon:"pi pi-external-link",onClick:t[2]||(t[2]=function(e){return O.displayBasic=!0})})]),Object(n["m"])("div",r,[o,Object(n["m"])(j,{value:O.images,responsiveOptions:O.responsiveOptions,numVisible:7,containerStyle:"max-width: 850px",circular:!0,fullScreen:!0,showItemNavigators:!0,showThumbnails:!1,visible:O.displayBasic2,"onUpdate:visible":t[3]||(t[3]=function(e){return O.displayBasic2=e})},{item:Object(n["U"])((function(e){return[Object(n["m"])("img",{src:e.item.itemImageSrc,alt:e.item.alt,style:{width:"100%",display:"block"}},null,8,["src","alt"])]})),thumbnail:Object(n["U"])((function(e){return[Object(n["m"])("img",{src:e.item.thumbnailImageSrc,alt:e.item.alt,style:{display:"block"}},null,8,["src","alt"])]})),_:1},8,["value","responsiveOptions","visible"]),Object(n["m"])(y,{label:"Show",icon:"pi pi-external-link",onClick:t[4]||(t[4]=function(e){return O.displayBasic2=!0})})]),Object(n["m"])("div",m,[u,Object(n["m"])(j,{value:O.images,activeIndex:O.activeIndex,"onUpdate:activeIndex":t[5]||(t[5]=function(e){return O.activeIndex=e}),responsiveOptions:O.responsiveOptions,numVisible:7,containerStyle:"max-width: 850px",circular:!0,fullScreen:!0,showItemNavigators:!0,showThumbnails:!1,visible:O.displayCustom,"onUpdate:visible":t[6]||(t[6]=function(e){return O.displayCustom=e})},{item:Object(n["U"])((function(e){return[Object(n["m"])("img",{src:e.item.itemImageSrc,alt:e.item.alt,style:{width:"100%",display:"block"}},null,8,["src","alt"])]})),thumbnail:Object(n["U"])((function(e){return[Object(n["m"])("img",{src:e.item.thumbnailImageSrc,alt:e.item.alt,style:{display:"block"}},null,8,["src","alt"])]})),_:1},8,["value","activeIndex","responsiveOptions","visible"]),O.images?(Object(n["C"])(),Object(n["h"])("div",p,[(Object(n["C"])(!0),Object(n["h"])(n["a"],null,Object(n["I"])(O.images,(function(e,t){return Object(n["C"])(),Object(n["h"])("div",{class:"p-col-3",key:t},[Object(n["m"])("img",{src:e.thumbnailImageSrc,alt:e.alt,style:{cursor:"pointer"},onClick:function(e){return g.imageClick(t)}},null,8,["src","alt","onClick"])])})),128))])):Object(n["i"])("",!0)])]),Object(n["m"])("div",b,[Object(n["m"])(k,null,{default:Object(n["U"])((function(){return[Object(n["m"])(f,{header:"Source"},{default:Object(n["U"])((function(){return[Object(n["V"])(Object(n["m"])("pre",null,[d],512),[[x]]),Object(n["V"])(Object(n["m"])("pre",null,[v],512),[[x,void 0,void 0,{script:!0}]])]})),_:1})]})),_:1})])])}var O=i("cc2b"),g={data:function(){return{images:null,activeIndex:0,responsiveOptions:[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],responsiveOptions2:[{breakpoint:"1500px",numVisible:5},{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}],displayBasic:!1,displayBasic2:!1,displayCustom:!1}},galleriaService:null,created:function(){this.galleriaService=new O["a"]},mounted:function(){var e=this;this.galleriaService.getImages().then((function(t){return e.images=t}))},methods:{imageClick:function(e){this.activeIndex=e,this.displayCustom=!0}}};g.render=h;t["default"]=g},cc2b:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n=i("d4ec"),l=i("bee2"),a=i("bc3a"),s=i.n(a),c=function(){function e(){Object(n["a"])(this,e)}return Object(l["a"])(e,[{key:"getImages",value:function(){return s.a.get("demo/data/photos.json").then((function(e){return e.data.data}))}}]),e}()}}]);