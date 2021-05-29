(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef9bb43c"],{5607:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),l={class:"content-section introduction"},r=Object(n["m"])("div",{class:"feature-intro"},[Object(n["m"])("h1",null,[Object(n["l"])("DataTable "),Object(n["m"])("span",null,"Size")]),Object(n["m"])("p",null,"In addition to a regular table, alternatives with alternative sizes are available.")],-1),o={class:"content-section implementation"},d={class:"card"},c=Object(n["l"])(" Small Table "),u={class:"card"},i=Object(n["l"])(" Normal Table "),m={class:"card"},s=Object(n["l"])(" Large Table ");function b(e,t,a,b,p,v){var f=Object(n["K"])("AppDemoActions"),C=Object(n["K"])("Column"),h=Object(n["K"])("DataTable"),y=Object(n["K"])("AppDoc");return Object(n["C"])(),Object(n["h"])("div",null,[Object(n["m"])("div",l,[r,Object(n["m"])(f)]),Object(n["m"])("div",o,[Object(n["m"])("div",d,[Object(n["m"])(h,{value:p.products,class:"p-datatable-sm",responsiveLayout:"scroll"},{header:Object(n["U"])((function(){return[c]})),default:Object(n["U"])((function(){return[Object(n["m"])(C,{field:"code",header:"Code"}),Object(n["m"])(C,{field:"name",header:"Name"}),Object(n["m"])(C,{field:"category",header:"Category"}),Object(n["m"])(C,{field:"quantity",header:"Quantity"})]})),_:1},8,["value"])]),Object(n["m"])("div",u,[Object(n["m"])(h,{value:p.products,responsiveLayout:"scroll"},{header:Object(n["U"])((function(){return[i]})),default:Object(n["U"])((function(){return[Object(n["m"])(C,{field:"code",header:"Code"}),Object(n["m"])(C,{field:"name",header:"Name"}),Object(n["m"])(C,{field:"category",header:"Category"}),Object(n["m"])(C,{field:"quantity",header:"Quantity"})]})),_:1},8,["value"])]),Object(n["m"])("div",m,[Object(n["m"])(h,{value:p.products,class:"p-datatable-lg",responsiveLayout:"scroll"},{header:Object(n["U"])((function(){return[s]})),default:Object(n["U"])((function(){return[Object(n["m"])(C,{field:"code",header:"Code"}),Object(n["m"])(C,{field:"name",header:"Name"}),Object(n["m"])(C,{field:"category",header:"Category"}),Object(n["m"])(C,{field:"quantity",header:"Quantity"})]})),_:1},8,["value"])])]),Object(n["m"])(y,{name:"DataTableSizeDemo",sources:p.sources,service:["ProductService"],data:["products-small"],github:"datatable/DataTableSizeDemo.vue"},null,8,["sources"])])}var p=a("e9c0"),v={data:function(){return{products:null,sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n\t<div>\n        <div class="card">\n            <DataTable :value="products" class="p-datatable-sm" responsiveLayout="scroll">\n                <template #header>\n                    Small Table\n                </template>\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <DataTable :value="products" responsiveLayout="scroll">\n                <template #header>\n                    Normal Table\n                </template>\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <DataTable :value="products" class="p-datatable-lg" responsiveLayout="scroll">\n                <template #header>\n                    Large Table\n                </template>\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n        </div>\n\t</div>\n</template>\n\n<script>\nimport ProductService from \'./service/ProductService\';\n\nexport default {\n    data() {\n        return {\n            products: null\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n    },\n    mounted() {\n        this.productService.getProductsSmall().then(data => this.products = data);\n    }\n}\n<\\/script>                  \n'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n\t<div>\n        <div class="card">\n            <DataTable :value="products" class="p-datatable-sm" responsiveLayout="scroll">\n                <template #header>\n                    Small Table\n                </template>\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <DataTable :value="products" responsiveLayout="scroll">\n                <template #header>\n                    Normal Table\n                </template>\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <DataTable :value="products" class="p-datatable-lg" responsiveLayout="scroll">\n                <template #header>\n                    Large Table\n                </template>\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n        </div>\n\t</div>\n</template>\n\n<script>\nimport { ref, onMounted } from \'vue\';\nimport ProductService from \'./service/ProductService\';\n\nexport default {\n    setup() {\n        onMounted(() => {\n            productService.value.getProductsSmall().then(data => products.value = data);\n        })\n\n        const products = ref();\n        const productService = ref(new ProductService());\n\n        return { products }\n    }\n}\n<\\/script>                  \n'}}}},productService:null,created:function(){this.productService=new p["a"]},mounted:function(){var e=this;this.productService.getProductsSmall().then((function(t){return e.products=t}))}};v.render=b;t["default"]=v},e9c0:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("d4ec"),l=a("bee2"),r=a("bc3a"),o=a.n(r),d=function(){function e(){Object(n["a"])(this,e)}return Object(l["a"])(e,[{key:"getProductsSmall",value:function(){return o.a.get("demo/data/products-small.json").then((function(e){return e.data.data}))}},{key:"getProducts",value:function(){return o.a.get("demo/data/products.json").then((function(e){return e.data.data}))}},{key:"getProductsWithOrdersSmall",value:function(){return o.a.get("demo/data/products-orders-small.json").then((function(e){return e.data.data}))}}]),e}()}}]);