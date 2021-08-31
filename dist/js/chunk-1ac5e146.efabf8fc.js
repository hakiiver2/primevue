(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ac5e146"],{"972a":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r={class:"content-section introduction"},c=Object(o["m"])("div",{class:"feature-intro"},[Object(o["m"])("h1",null,[Object(o["l"])("DataTable "),Object(o["m"])("span",null,"ContextMenu")]),Object(o["m"])("p",null,"DataTable has exclusive integration with ContextMenu.")],-1),u={class:"content-section implementation"},d={class:"card"};function a(e,t,n,a,l,i){var s=Object(o["K"])("AppDemoActions"),m=Object(o["K"])("Column"),p=Object(o["K"])("DataTable"),v=Object(o["K"])("ContextMenu"),f=Object(o["K"])("AppDoc");return Object(o["C"])(),Object(o["h"])("div",null,[Object(o["m"])("div",r,[c,Object(o["m"])(s)]),Object(o["m"])("div",u,[Object(o["m"])("div",d,[Object(o["m"])(p,{value:l.products,contextMenu:"",contextMenuSelection:l.selectedProduct,"onUpdate:contextMenuSelection":t[1]||(t[1]=function(e){return l.selectedProduct=e}),onRowContextmenu:i.onRowContextMenu,responsiveLayout:"scroll"},{default:Object(o["U"])((function(){return[Object(o["m"])(m,{field:"code",header:"Code"}),Object(o["m"])(m,{field:"name",header:"Name"}),Object(o["m"])(m,{field:"category",header:"Category"}),Object(o["m"])(m,{field:"price",header:"Price"},{body:Object(o["U"])((function(e){return[Object(o["l"])(Object(o["O"])(i.formatCurrency(e.data.price)),1)]})),_:1})]})),_:1},8,["value","contextMenuSelection","onRowContextmenu"])]),Object(o["m"])(v,{model:l.menuModel,ref:"cm"},null,8,["model"])]),Object(o["m"])(f,{name:"DataTableContextMenuDemo",sources:l.sources,service:["ProductService"],data:["products-small"],github:"datatable/DataTableContextMenuDemo.vue"},null,8,["sources"])])}n("b0c0"),n("4de4");var l=n("e9c0"),i={data:function(){var e=this;return{products:null,selectedProduct:null,menuModel:[{label:"View",icon:"pi pi-fw pi-search",command:function(){return e.viewProduct(e.selectedProduct)}},{label:"Delete",icon:"pi pi-fw pi-times",command:function(){return e.deleteProduct(e.selectedProduct)}}],sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <Toast />\n        <DataTable :value="products" contextMenu v-model:contextMenuSelection="selectedProduct" @rowContextmenu="onRowContextMenu" responsiveLayout="scroll">\n            <Column field="code" header="Code"></Column>\n            <Column field="name" header="Name"></Column>\n            <Column field="category" header="Category"></Column>\n            <Column field="price" header="Price">\n                <template #body="slotProps">\n                    {{formatCurrency(slotProps.data.price)}}\n                </template>\n            </Column>\n        </DataTable>\n\n        <ContextMenu :model="menuModel" ref="cm" />\n    </div>\n</template>\n\n<script>\nimport ProductService from \'./service/ProductService\';\n\nexport default {\n    data() {\n        return {\n            products: null,\n            selectedProduct: null,\n            menuModel: [\n                {label: \'View\', icon: \'pi pi-fw pi-search\', command: () => this.viewProduct(this.selectedProduct)},\n                {label: \'Delete\', icon: \'pi pi-fw pi-times\', command: () => this.deleteProduct(this.selectedProduct)}\n            ]\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n    },\n    mounted() {\n        this.productService.getProductsSmall().then(data => this.products = data);\n    },\n    methods: {\n        onRowContextMenu(event) {\n            this.$refs.cm.show(event.originalEvent);\n        },\n        viewProduct(product) {\n            this.$toast.add({severity: \'info\', summary: \'Product Selected\', detail: product.name});\n        },\n        deleteProduct(product) {\n            this.products = this.products.filter((p) => p.id !== product.id);\n            this.$toast.add({severity: \'error\', summary: \'Product Deleted\', detail: product.name});\n            this.selectedProduct = null;\n        },\n        formatCurrency(value) {\n            return value.toLocaleString(\'en-US\', {style: \'currency\', currency: \'USD\'});\n        }\n    }\n}\n<\\/script>\n'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <Toast />\n        <DataTable :value="products" contextMenu v-model:contextMenuSelection="selectedProduct" @rowContextmenu="onRowContextMenu" responsiveLayout="scroll">\n            <Column field="code" header="Code"></Column>\n            <Column field="name" header="Name"></Column>\n            <Column field="category" header="Category"></Column>\n            <Column field="price" header="Price">\n                <template #body="slotProps">\n                    {{formatCurrency(slotProps.data.price)}}\n                </template>\n            </Column>\n        </DataTable>\n\n        <ContextMenu :model="menuModel" ref="cm" />\n    </div>\n</template>\n\n<script>\nimport { ref, onMounted } from \'vue\';\nimport { useToast } from \'primevue/usetoast\';\nimport ProductService from \'./service/ProductService\';\n\nexport default {\n    setup() {\n        onMounted(() => {\n            productService.value.getProductsSmall().then(data => products.value = data);\n        })\n\n        const cm = ref();\n        const toast = useToast();\n        const products = ref();\n        const productService = ref(new ProductService());\n        const selectedProduct = ref();\n        const menuModel = ref([\n            {label: \'View\', icon: \'pi pi-fw pi-search\', command: () => viewProduct(selectedProduct)},\n            {label: \'Delete\', icon: \'pi pi-fw pi-times\', command: () => deleteProduct(selectedProduct)}\n        ]);\n        const onRowContextMenu = (event) => {\n            cm.value.show(event.originalEvent);\n        };\n        const viewProduct = (product) => {\n            toast.add({severity: \'info\', summary: \'Product Selected\', detail: product.name});\n        };\n        const deleteProduct = (product) => {\n            products.value = products.value.filter((p) => p.id !== product.value.id);\n            toast.add({severity: \'error\', summary: \'Product Deleted\', detail: product.name});\n            selectedProduct.value = null;\n        };\n        const formatCurrency = (value) => {\n            return value.toLocaleString(\'en-US\', {style: \'currency\', currency: \'USD\'});\n        };\n\n        return { cm, products, selectedProduct, menuModel, onRowContextMenu, viewProduct, deleteProduct, formatCurrency }\n    }\n}\n<\\/script>\n'}}}},productService:null,created:function(){this.productService=new l["a"]},mounted:function(){var e=this;this.productService.getProductsSmall().then((function(t){return e.products=t}))},methods:{onRowContextMenu:function(e){this.$refs.cm.show(e.originalEvent)},viewProduct:function(e){this.$toast.add({severity:"info",summary:"Product Selected",detail:e.name})},deleteProduct:function(e){this.products=this.products.filter((function(t){return t.id!==e.id})),this.$toast.add({severity:"error",summary:"Product Deleted",detail:e.name}),this.selectedProduct=null},formatCurrency:function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})}}};i.render=a;t["default"]=i},e9c0:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n("d4ec"),r=n("bee2"),c=n("bc3a"),u=n.n(c),d=function(){function e(){Object(o["a"])(this,e)}return Object(r["a"])(e,[{key:"getProductsSmall",value:function(){return u.a.get("demo/data/products-small.json").then((function(e){return e.data.data}))}},{key:"getProducts",value:function(){return u.a.get("demo/data/products.json").then((function(e){return e.data.data}))}},{key:"getProductsWithOrdersSmall",value:function(){return u.a.get("demo/data/products-orders-small.json").then((function(e){return e.data.data}))}}]),e}()}}]);