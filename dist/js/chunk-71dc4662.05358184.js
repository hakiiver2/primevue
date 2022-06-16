(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71dc4662"],{"19b9":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r={class:"content-section introduction"},o=Object(a["m"])("div",{class:"feature-intro"},[Object(a["m"])("h1",null,[Object(a["l"])("DataTable "),Object(a["m"])("span",null,"Paginator")]),Object(a["m"])("p",null,"Pagination is enabled by setting paginator property to true and defining the rows attribute as the number of rows per page.")],-1),u={class:"content-section implementation"},s={class:"card"};function i(e,t,n,i,c,m){var l=Object(a["K"])("AppDemoActions"),p=Object(a["K"])("Column"),d=Object(a["K"])("Button"),g=Object(a["K"])("DataTable"),f=Object(a["K"])("AppDoc");return Object(a["C"])(),Object(a["h"])("div",null,[Object(a["m"])("div",r,[o,Object(a["m"])(l)]),Object(a["m"])("div",u,[Object(a["m"])("div",s,[Object(a["m"])(g,{value:c.customers,paginator:!0,rows:10,paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",rowsPerPageOptions:[10,20,50],responsiveLayout:"scroll",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}"},{paginatorLeft:Object(a["U"])((function(){return[Object(a["m"])(d,{type:"button",icon:"pi pi-refresh",class:"p-button-text"})]})),paginatorRight:Object(a["U"])((function(){return[Object(a["m"])(d,{type:"button",icon:"pi pi-cloud",class:"p-button-text"})]})),default:Object(a["U"])((function(){return[Object(a["m"])(p,{field:"name",header:"Name"}),Object(a["m"])(p,{field:"country.name",header:"Country"}),Object(a["m"])(p,{field:"company",header:"Company"}),Object(a["m"])(p,{field:"representative.name",header:"Representative"})]})),_:1},8,["value"])])]),Object(a["m"])(f,{name:"DataTablePaginatorDemo",sources:c.sources,service:["CustomerService"],data:["customers-large"],github:"datatable/DataTablePaginatorDemo.vue"},null,8,["sources"])])}var c=n("9fa9"),m={data:function(){return{customers:null,sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n\t<div>\n        <DataTable :value="customers" :paginator="true" :rows="10"\n            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"\n            :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"\n            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">\n            <Column field="name" header="Name"></Column>\n            <Column field="country.name" header="Country"></Column>\n            <Column field="company" header="Company"></Column>\n            <Column field="representative.name" header="Representative"></Column>\n            <template #paginatorLeft>\n                <Button type="button" icon="pi pi-refresh" class="p-button-text" />\n            </template>\n            <template #paginatorRight>\n                <Button type="button" icon="pi pi-cloud" class="p-button-text" />\n            </template>\n        </DataTable>    \n\t</div>\n</template>\n\n<script>\nimport CustomerService from \'./service/CustomerService\';\n\nexport default {\n    data() {\n        return {\n            customers: null\n        }\n    },\n    customerService: null,\n    created() {\n        this.customerService = new CustomerService();\n    },\n    mounted() {\n        this.customerService.getCustomersLarge().then(data => this.customers = data);\n    }\n}\n<\\/script>                  \n'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n\t<div>\n        <DataTable :value="customers" :paginator="true" :rows="10"\n            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"\n            :rowsPerPageOptions="[10,20,50]" responsiveLayout="scroll"\n            currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">\n            <Column field="name" header="Name"></Column>\n            <Column field="country.name" header="Country"></Column>\n            <Column field="company" header="Company"></Column>\n            <Column field="representative.name" header="Representative"></Column>\n            <template #paginatorLeft>\n                <Button type="button" icon="pi pi-refresh" class="p-button-text" />\n            </template>\n            <template #paginatorRight>\n                <Button type="button" icon="pi pi-cloud" class="p-button-text" />\n            </template>\n        </DataTable>    \n\t</div>\n</template>\n\n<script>\nimport { ref, onMounted } from \'vue\';\nimport CustomerService from \'./service/CustomerService\';\n\nexport default {\n    setup() {\n        onMounted(() => {\n            customerService.value.getCustomersLarge().then(data => customers.value = data);\n        })\n\n        const customers = ref();\n        const customerService = ref(new CustomerService());\n\n        return { customers }\n    }\n}\n<\\/script>                  \n'}}}},customerService:null,created:function(){this.customerService=new c["a"]},mounted:function(){var e=this;this.customerService.getCustomersLarge().then((function(t){return e.customers=t}))}};m.render=i;t["default"]=m},"9fa9":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("d4ec"),r=n("bee2"),o=n("bc3a"),u=n.n(o),s=function(){function e(){Object(a["a"])(this,e)}return Object(r["a"])(e,[{key:"getCustomersSmall",value:function(){return u.a.get("demo/data/customers-small.json").then((function(e){return e.data.data}))}},{key:"getCustomersMedium",value:function(){return u.a.get("demo/data/customers-medium.json").then((function(e){return e.data.data}))}},{key:"getCustomersLarge",value:function(){return u.a.get("demo/data/customers-large.json").then((function(e){return e.data.data}))}},{key:"getCustomersXLarge",value:function(){return u.a.get("demo/data/customers-xlarge.json").then((function(e){return e.data.data}))}},{key:"getCustomers",value:function(e){return u.a.get("https://www.primefaces.org/data/customers",{params:e}).then((function(e){return e.data}))}}]),e}()}}]);