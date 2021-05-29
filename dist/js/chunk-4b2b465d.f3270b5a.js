(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b2b465d"],{"16a0":function(e,n,t){"use strict";t.r(n);var o=t("7a23"),d={class:"content-section introduction"},a=Object(o["m"])("div",{class:"feature-intro"},[Object(o["m"])("h1",null,[Object(o["l"])("TreeTable "),Object(o["m"])("span",null,"Column Resize")]),Object(o["m"])("p",null,'Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized. In "expand" mode, table width also changes along with the column width.')],-1),i={class:"content-section implementation"},r={class:"card"},l=Object(o["m"])("h5",null,"Fit Mode",-1),s={class:"card"},u=Object(o["m"])("h5",null,"Expand Mode",-1);function c(e,n,t,c,m,b){var h=Object(o["K"])("AppDemoActions"),p=Object(o["K"])("Column"),v=Object(o["K"])("TreeTable"),f=Object(o["K"])("AppDoc");return Object(o["C"])(),Object(o["h"])("div",null,[Object(o["m"])("div",d,[a,Object(o["m"])(h)]),Object(o["m"])("div",i,[Object(o["m"])("div",r,[l,Object(o["m"])(v,{value:m.nodes,resizableColumns:!0,columnResizeMode:"fit",showGridlines:""},{default:Object(o["U"])((function(){return[Object(o["m"])(p,{field:"name",header:"Name",expander:!0}),Object(o["m"])(p,{field:"size",header:"Size"}),Object(o["m"])(p,{field:"type",header:"Type"})]})),_:1},8,["value"])]),Object(o["m"])("div",s,[u,Object(o["m"])(v,{value:m.nodes,resizableColumns:!0,columnResizeMode:"expand",showGridlines:""},{default:Object(o["U"])((function(){return[Object(o["m"])(p,{field:"name",header:"Name",expander:!0}),Object(o["m"])(p,{field:"size",header:"Size"}),Object(o["m"])(p,{field:"type",header:"Type"})]})),_:1},8,["value"])])]),Object(o["m"])(f,{name:"TreeTableColResizeDemo",sources:m.sources,service:["NodeService"],data:["treetablenodes"],github:"treetable/TreeTableColResizeDemo.vue"},null,8,["sources"])])}var m=t("82f4"),b={data:function(){return{nodes:null,sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <div class="card">\n            <h5>Fit Mode</h5>\n            <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="fit" showGridlines>\n                <Column field="name" header="Name" :expander="true"></Column>\n                <Column field="size" header="Size"></Column>\n                <Column field="type" header="Type"></Column>\n            </TreeTable>\n        </div>\n\n        <div class="card">\n            <h5>Expand Mode</h5>\n            <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="expand" showGridlines>\n                <Column field="name" header="Name" :expander="true"></Column>\n                <Column field="size" header="Size"></Column>\n                <Column field="type" header="Type"></Column>\n            </TreeTable>\n        </div>\n    </div>                    \n</template>\n\n<script>\nimport NodeService from \'./service/NodeService\';\n\nexport default {\n    data() {\n        return {\n            nodes: null\n        }\n    },\n    nodeService: null,\n    created() {\n        this.nodeService = new NodeService();\n    },\n    mounted() {\n        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);\n    }\n}\n<\\/script>\n'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <div class="card">\n            <h5>Fit Mode</h5>\n            <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="fit" showGridlines>\n                <Column field="name" header="Name" :expander="true"></Column>\n                <Column field="size" header="Size"></Column>\n                <Column field="type" header="Type"></Column>\n            </TreeTable>\n        </div>\n\n        <div class="card">\n            <h5>Expand Mode</h5>\n            <TreeTable :value="nodes" :resizableColumns="true" columnResizeMode="expand" showGridlines>\n                <Column field="name" header="Name" :expander="true"></Column>\n                <Column field="size" header="Size"></Column>\n                <Column field="type" header="Type"></Column>\n            </TreeTable>\n        </div>\n    </div>                    \n</template>\n\n<script>\nimport { ref, onMounted } from \'vue\';\nimport NodeService from \'./service/NodeService\';\n\nexport default {\n    setup() {\n        onMounted(() => {\n            nodeService.value.getTreeTableNodes().then(data => nodes.value = data);\n        })\n\n        const nodes = ref(null);\n        const nodeService = ref(new NodeService());\n\n        return { nodes, nodeService }\n    }\n}\n<\\/script>\n'}}}},nodeService:null,created:function(){this.nodeService=new m["a"]},mounted:function(){var e=this;this.nodeService.getTreeTableNodes().then((function(n){return e.nodes=n}))}};b.render=c;n["default"]=b},"82f4":function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var o=t("d4ec"),d=t("bee2"),a=t("bc3a"),i=t.n(a),r=function(){function e(){Object(o["a"])(this,e)}return Object(d["a"])(e,[{key:"getTreeTableNodes",value:function(){return i.a.get("demo/data/treetablenodes.json").then((function(e){return e.data.root}))}},{key:"getTreeNodes",value:function(){return i.a.get("demo/data/treenodes.json").then((function(e){return e.data.root}))}}]),e}()}}]);