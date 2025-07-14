import{s as L}from"./index-8uv1ZgZl.js";import{s as q,a as A,b as H}from"./index-CLxheRKH.js";import{b as K,f as G}from"./index-DsByIwCv.js";import{B as J,c as y,o as b,e as Q,m as S,d as W,k as c,h as v,G as X,a,b as o,w as d,E as Y,F as k,H as Z,q as ee,t as f,x as te,s as ie}from"./index-DOi7WD0x.js";import{s as ne,a as re}from"./index-CVxjzhn1.js";import{s as le}from"./index-BkaebiXV.js";import"./index-DaXBifmJ.js";import"./index-CmU7fJgm.js";var ae=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`,oe={root:function(n){var e=n.props;return{justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null}}},se={root:function(n){var e=n.props;return["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}]},content:"p-divider-content"},de=J.extend({name:"divider",style:ae,classes:se,inlineStyles:oe}),ue={name:"BaseDivider",extends:K,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:de,provide:function(){return{$pcDivider:this,$parentInstance:this}}};function g(t){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},g(t)}function w(t,n,e){return(n=pe(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function pe(t){var n=ce(t,"string");return g(n)=="symbol"?n:n+""}function ce(t,n){if(g(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var s=e.call(t,n);if(g(s)!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var z={name:"Divider",extends:ue,inheritAttrs:!1,computed:{dataP:function(){return G(w(w(w({},this.align,this.align),this.layout,this.layout),this.type,this.type))}}},ve=["aria-orientation","data-p"],fe=["data-p"];function me(t,n,e,s,m,u){return b(),y("div",S({class:t.cx("root"),style:t.sx("root"),role:"separator","aria-orientation":t.layout,"data-p":u.dataP},t.ptmi("root")),[t.$slots.default?(b(),y("div",S({key:0,class:t.cx("content"),"data-p":u.dataP},t.ptm("content")),[W(t.$slots,"default")],16,fe)):Q("",!0)],16,ve)}z.render=me;const ye={class:"card",style:{display:"flex","flex-direction":"column",height:"75%"}},be={class:"flex flex-wrap gap-2 items-center justify-between"},ge=["onClick"],he={style:{"list-style-type":"none","padding-left":"0"}},we={class:"flex flex-wrap p-2 items-center gap-4"},_e={style:{"max-width":"200px"}},Ne={__name:"OrderPage",setup(t){const n=c.orders,e=v(!1),s=v(null),m=v(!1),u=v(null),$=v([{label:"已完成",value:"completed"},{label:"已浏览",value:"readed"},{label:"新订单",value:"new"}]),h=v({global:{value:null,matchMode:X.CONTAINS}}),C=i=>({completed:"已完成",readed:"已浏览",new:"新订单"})[i]||i,D=i=>({completed:"status-completed",readed:"status-readed",new:"status-new"})[i]||"";function P(i){s.value=i,e.value=!1,u.value=i.status,m.value=!0}function N(){s.value.status=u.value,c.updateOrderStatus(s.value),m.value=!1}const M=i=>new Date(i).toLocaleString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1});function V(i){i.data?(s.value=i.data,e.value=!0,i.data.isNew=!1,i.data.status=="new"&&(i.data.status="readed",c.updateOrderStatus(i.data)),c.decrementOrderCount()):console.error("Row data is missing in the event",i)}function I(i){return c.getDishNameById(i.dishid)}function B(i){return i.dishid?i.dishid:i.name}function O(i){return c.getDishNote(i)}return(i,l)=>{const j=H,T=le,R=A,p=re,F=ne,U=z,_=q,E=L;return b(),y(k,null,[a("div",ye,[o(F,{value:Y(n),tableStyle:"min-width: 50rem",dataKey:"id",paginator:"",rows:5,rowsPerPageOptions:[5,10,20,50],stripedRows:"",filters:h.value,scrollable:"",scrollHeight:"flex",onRowClick:V,selectionMode:"single"},{header:d(()=>[a("div",be,[l[5]||(l[5]=a("h4",{class:"m-0 font-bold text-2xl text-left flex-grow-1"},"Manage Products",-1)),o(R,null,{default:d(()=>[o(j,null,{default:d(()=>l[4]||(l[4]=[a("i",{class:"pi pi-search"},null,-1)])),_:1,__:[4]}),o(T,{modelValue:h.value.global.value,"onUpdate:modelValue":l[0]||(l[0]=r=>h.value.global.value=r),placeholder:"查找.."},null,8,["modelValue"])]),_:1})])]),empty:d(()=>l[6]||(l[6]=[a("div",{class:"text-center py-5"},[a("i",{class:"pi pi-search",style:{"font-size":"3rem",color:"#ccc"}}),a("p",{class:"mt-3 text-gray-500"},"未找到匹配的订单")],-1)])),default:d(()=>[o(p,{field:"status",header:"状态",sortable:"",style:{width:"10%"}},{body:d(({data:r})=>[a("span",{class:ee(["status-badge",D(r.status)]),onClick:Z(x=>P(r),["stop"])},f(C(r.status)),11,ge)]),_:1}),o(p,{field:"id",header:"订单号",sortable:"",style:{width:"10%"}}),o(p,{field:"table",header:"桌号",sortable:"",style:{width:"10%"}}),o(p,{field:"time",header:"时间",sortable:"",style:{width:"20%"}},{body:d(({data:r})=>[te(f(M(r.timestamp)),1)]),_:1}),o(p,{field:"name",header:"名字",style:{width:"15%"}}),o(p,{field:"note",header:"备注",style:{width:"35%"},class:"multiline-cell"})]),_:1},8,["value","filters"])]),a("div",null,[o(_,{visible:e.value,"onUpdate:visible":l[1]||(l[1]=r=>e.value=r),header:"详细信息",modal:!0,dismissableMask:!0},{default:d(()=>[a("ul",he,[(b(!0),y(k,null,ie(s.value.items,(r,x)=>(b(),y("li",{key:x},[a("div",we,[a("label",null,f(B(r)),1),a("label",null,f(I(r)),1),a("label",null,"x "+f(r.quantity),1),a("label",_e,f(O(r.notes)),1)]),o(U)]))),128))])]),_:1},8,["visible"])]),a("div",null,[o(_,{visible:m.value,"onUpdate:visible":l[3]||(l[3]=r=>m.value=r),header:"订单状态",modal:!0,dismissableMask:!0},{default:d(()=>[o(E,{modelValue:u.value,"onUpdate:modelValue":l[2]||(l[2]=r=>u.value=r),options:$.value,optionLabel:"label",optionValue:"value",onClick:N},null,8,["modelValue","options"])]),_:1},8,["visible"])])],64)}}};export{Ne as default};
