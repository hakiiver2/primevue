(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d262efb"],{"7de6":function(t,e,i){"use strict";i.r(e);var n=i("7a23"),a=Object(n["m"])("div",{class:"content-section introduction"},[Object(n["m"])("div",{class:"feature-intro"},[Object(n["m"])("h1",null,[Object(n["l"])("Galleria "),Object(n["m"])("span",null,"Navigator")]),Object(n["m"])("p",null,"Combining item navigators, thumbnails and indicators provide various UI alternatives.")])],-1),l={class:"content-section implementation"},s={class:"card"},r=Object(n["m"])("h5",null,"Item Navigators and Thumbnails",-1),o={class:"card"},m=Object(n["m"])("h5",null,"Item Navigators without Thumbnails",-1),c={class:"card"},u=Object(n["m"])("h5",null,"Item Navigators on Hover",-1),p={class:"card"},b=Object(n["m"])("h5",null,"Item Navigators and Indicators",-1),h={class:"content-section documentation"},v=Object(n["m"])("code",null,[Object(n["m"])("template",null,'\n<h3>Item Navigators and Thumbnails</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"\n    :showItemNavigators="true">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n    <template #thumbnail="slotProps">\n        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n    </template>\n</Galleria>\n\n<h3>Item Navigators without Thumbnails</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"\n    :showItemNavigators="true" :showThumbnails="false">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n    <template #thumbnail="slotProps">\n        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n    </template>\n</Galleria>\n\n<h3>Item Navigators on Hover</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"\n    :showItemNavigators="true" :showItemNavigatorsOnHover="true">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n    <template #thumbnail="slotProps">\n        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n    </template>\n</Galleria>\n\n<h3>Item Navigators and Indicators</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"\n    :showItemNavigators="true" :showThumbnails="false" :showItemNavigatorsOnHover="true" :showIndicators="true">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n    <template #thumbnail="slotProps">\n            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n    </template>\n</Galleria>\n'),Object(n["l"])("\n")],-1),d=Object(n["m"])("code",null,"\nimport PhotoService from '../../service/PhotoService';\n\nexport default {\n    data() {\n        return {\n            images: null,\n\t\t\tresponsiveOptions: [\n\t\t\t\t{\n                    breakpoint: '1024px',\n                    numVisible: 5\n                },\n                {\n                    breakpoint: '768px',\n                    numVisible: 3\n                },\n                {\n                    breakpoint: '560px',\n                    numVisible: 1\n                }\n\t\t\t]\n        }\n    },\n    galleriaService: null,\n\tcreated() {\n\t\tthis.galleriaService = new PhotoService();\n\t},\n\tmounted() {\n\t\tthis.galleriaService.getImages().then(data => this.images = data);\n    }\n}\n\n",-1);function O(t,e,i,O,g,j){var w=Object(n["K"])("Galleria"),I=Object(n["K"])("TabPanel"),y=Object(n["K"])("TabView"),S=Object(n["L"])("code");return Object(n["C"])(),Object(n["h"])("div",null,[a,Object(n["m"])("div",l,[Object(n["m"])("div",s,[r,Object(n["m"])(w,{value:g.images,responsiveOptions:g.responsiveOptions,numVisible:5,circular:!0,containerStyle:"max-width: 640px",showItemNavigators:!0},{item:Object(n["U"])((function(t){return[Object(n["m"])("img",{src:t.item.itemImageSrc,alt:t.item.alt,style:{width:"100%",display:"block"}},null,8,["src","alt"])]})),thumbnail:Object(n["U"])((function(t){return[Object(n["m"])("img",{src:t.item.thumbnailImageSrc,alt:t.item.alt,style:{display:"block"}},null,8,["src","alt"])]})),_:1},8,["value","responsiveOptions"])]),Object(n["m"])("div",o,[m,Object(n["m"])(w,{value:g.images,responsiveOptions:g.responsiveOptions,numVisible:5,circular:!0,containerStyle:"max-width: 640px",showItemNavigators:!0,showThumbnails:!1},{item:Object(n["U"])((function(t){return[Object(n["m"])("img",{src:t.item.itemImageSrc,alt:t.item.alt,style:{width:"100%",display:"block"}},null,8,["src","alt"])]})),thumbnail:Object(n["U"])((function(t){return[Object(n["m"])("img",{src:t.item.thumbnailImageSrc,alt:t.item.alt,style:{display:"block"}},null,8,["src","alt"])]})),_:1},8,["value","responsiveOptions"])]),Object(n["m"])("div",c,[u,Object(n["m"])(w,{value:g.images,responsiveOptions:g.responsiveOptions,numVisible:5,circular:!0,containerStyle:"max-width: 640px",showItemNavigators:!0,showItemNavigatorsOnHover:!0},{item:Object(n["U"])((function(t){return[Object(n["m"])("img",{src:t.item.itemImageSrc,alt:t.item.alt,style:{width:"100%",display:"block"}},null,8,["src","alt"])]})),thumbnail:Object(n["U"])((function(t){return[Object(n["m"])("img",{src:t.item.thumbnailImageSrc,alt:t.item.alt,style:{display:"block"}},null,8,["src","alt"])]})),_:1},8,["value","responsiveOptions"])]),Object(n["m"])("div",p,[b,Object(n["m"])(w,{value:g.images,responsiveOptions:g.responsiveOptions,numVisible:5,circular:!0,containerStyle:"max-width: 640px",showItemNavigators:!0,showThumbnails:!1,showItemNavigatorsOnHover:!0,showIndicators:!0},{item:Object(n["U"])((function(t){return[Object(n["m"])("img",{src:t.item.itemImageSrc,alt:t.item.alt,style:{width:"100%",display:"block"}},null,8,["src","alt"])]})),thumbnail:Object(n["U"])((function(t){return[Object(n["m"])("img",{src:t.item.thumbnailImageSrc,alt:t.item.alt,style:{display:"block"}},null,8,["src","alt"])]})),_:1},8,["value","responsiveOptions"])])]),Object(n["m"])("div",h,[Object(n["m"])(y,null,{default:Object(n["U"])((function(){return[Object(n["m"])(I,{header:"Source"},{default:Object(n["U"])((function(){return[Object(n["V"])(Object(n["m"])("pre",null,[v],512),[[S]]),Object(n["V"])(Object(n["m"])("pre",null,[d],512),[[S,void 0,void 0,{script:!0}]])]})),_:1})]})),_:1})])])}var g=i("cc2b"),j={data:function(){return{images:null,responsiveOptions:[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}},galleriaService:null,created:function(){this.galleriaService=new g["a"]},mounted:function(){var t=this;this.galleriaService.getImages().then((function(e){return t.images=e}))}};j.render=O;e["default"]=j},cc2b:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("d4ec"),a=i("bee2"),l=i("bc3a"),s=i.n(l),r=function(){function t(){Object(n["a"])(this,t)}return Object(a["a"])(t,[{key:"getImages",value:function(){return s.a.get("demo/data/photos.json").then((function(t){return t.data.data}))}}]),t}()}}]);