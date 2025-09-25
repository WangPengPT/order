import{B as ue,b as j,_ as ce,f as z,o as f,w as c,c as h,e as L,m as w,d as u,T as pe,y as fe,r as C,F as B,a as o,z as Q,t as l,g as me,U as he,a1 as ve,q as we,h as S,n as P,s as ye,l as a,A as be,a2 as x,E as Z,G as b}from"./index-D7zfo4YV.js";import{a as ke,s as ge,x as R}from"./index-B0WhYrOj.js";import{b as q,s as Ce,f as Se}from"./index-CPYDG0bU.js";import{F as Le}from"./index-VOEtcXyg.js";import{u as Pe,b as _e,s as H}from"./index-CI6fSzEC.js";import{s as xe}from"./index-DAtqjPl0.js";import{s as Be,a as De}from"./index-B_SThZaw.js";import{s as Ee,a as k}from"./index-CaL1lkjQ.js";import{s as Ae}from"./index-CLxy0lzO.js";import"./index-DdVSDt5N.js";import"./index-BS4FWdvs.js";import"./index-q_Qtn-mc.js";import"./index-B_VBdnp-.js";import"./index-BgpT8uF0.js";import"./index-CC3crBVl.js";import"./index-Dhz_FGKP.js";import"./index-CJscmiHY.js";var Ie=`
    .p-drawer {
        display: flex;
        flex-direction: column;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
        transition: transform 0.3s;
        background: dt('drawer.background');
        color: dt('drawer.color');
        border: 1px solid dt('drawer.border.color');
        box-shadow: dt('drawer.shadow');
    }

    .p-drawer-content {
        overflow-y: auto;
        flex-grow: 1;
        padding: dt('drawer.content.padding');
    }

    .p-drawer-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
        padding: dt('drawer.header.padding');
    }

    .p-drawer-footer {
        padding: dt('drawer.footer.padding');
    }

    .p-drawer-title {
        font-weight: dt('drawer.title.font.weight');
        font-size: dt('drawer.title.font.size');
    }

    .p-drawer-full .p-drawer {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
        border-width: 1px;
    }

    .p-drawer-left .p-drawer-enter-from,
    .p-drawer-left .p-drawer-leave-to {
        transform: translateX(-100%);
    }

    .p-drawer-right .p-drawer-enter-from,
    .p-drawer-right .p-drawer-leave-to {
        transform: translateX(100%);
    }

    .p-drawer-top .p-drawer-enter-from,
    .p-drawer-top .p-drawer-leave-to {
        transform: translateY(-100%);
    }

    .p-drawer-bottom .p-drawer-enter-from,
    .p-drawer-bottom .p-drawer-leave-to {
        transform: translateY(100%);
    }

    .p-drawer-full .p-drawer-enter-from,
    .p-drawer-full .p-drawer-leave-to {
        opacity: 0;
    }

    .p-drawer-full .p-drawer-enter-active,
    .p-drawer-full .p-drawer-leave-active {
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-drawer-left .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-end-width: 1px;
    }

    .p-drawer-right .p-drawer {
        width: 20rem;
        height: 100%;
        border-inline-start-width: 1px;
    }

    .p-drawer-top .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-end-width: 1px;
    }

    .p-drawer-bottom .p-drawer {
        height: 10rem;
        width: 100%;
        border-block-start-width: 1px;
    }

    .p-drawer-left .p-drawer-content,
    .p-drawer-right .p-drawer-content,
    .p-drawer-top .p-drawer-content,
    .p-drawer-bottom .p-drawer-content {
        width: 100%;
        height: 100%;
    }

    .p-drawer-open {
        display: flex;
    }

    .p-drawer-mask:dir(rtl) {
        flex-direction: row-reverse;
    }
`,Re={mask:function(t){var s=t.position,p=t.modal;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:s==="left"?"flex-start":s==="right"?"flex-end":"center",alignItems:s==="top"?"flex-start":s==="bottom"?"flex-end":"center",pointerEvents:p?"auto":"none"}},root:{pointerEvents:"auto"}},$e={mask:function(t){var s=t.instance,p=t.props,m=["left","right","top","bottom"],n=m.find(function(y){return y===p.position});return["p-drawer-mask",{"p-overlay-mask p-overlay-mask-enter":p.modal,"p-drawer-open":s.containerVisible,"p-drawer-full":s.fullScreen},n?"p-drawer-".concat(n):""]},root:function(t){var s=t.instance;return["p-drawer p-component",{"p-drawer-full":s.fullScreen}]},header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},Me=ue.extend({name:"drawer",style:Ie,classes:$e,inlineStyles:Re}),Oe={name:"BaseDrawer",extends:Ce,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},header:{type:null,default:null},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},closeButtonProps:{type:Object,default:function(){return{severity:"secondary",text:!0,rounded:!0}}},closeIcon:{type:String,default:void 0},modal:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!1}},style:Me,provide:function(){return{$pcDrawer:this,$parentInstance:this}}};function _(e){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(e)}function $(e,t,s){return(t=Te(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function Te(e){var t=Ke(e,"string");return _(t)=="symbol"?t:t+""}function Ke(e,t){if(_(e)!="object"||!e)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var p=s.call(e,t);if(_(p)!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var W={name:"Drawer",extends:Oe,inheritAttrs:!1,emits:["update:visible","show","after-show","hide","after-hide","before-hide"],data:function(){return{containerVisible:this.visible}},container:null,mask:null,content:null,headerContainer:null,footerContainer:null,closeButton:null,outsideClickListener:null,documentKeydownListener:null,watch:{dismissable:function(t){t?this.enableDocumentSettings():this.disableDocumentSettings()}},updated:function(){this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.disableDocumentSettings(),this.mask&&this.autoZIndex&&R.clear(this.mask),this.container=null,this.mask=null},methods:{hide:function(){this.$emit("update:visible",!1)},onEnter:function(){this.$emit("show"),this.focus(),this.bindDocumentKeyDownListener(),this.autoZIndex&&R.set("modal",this.mask,this.baseZIndex||this.$primevue.config.zIndex.modal)},onAfterEnter:function(){this.enableDocumentSettings(),this.$emit("after-show")},onBeforeLeave:function(){this.modal&&!this.isUnstyled&&ve(this.mask,"p-overlay-mask-leave"),this.$emit("before-hide")},onLeave:function(){this.$emit("hide")},onAfterLeave:function(){this.autoZIndex&&R.clear(this.mask),this.unbindDocumentKeyDownListener(),this.containerVisible=!1,this.disableDocumentSettings(),this.$emit("after-hide")},onMaskClick:function(t){this.dismissable&&this.modal&&this.mask===t.target&&this.hide()},focus:function(){var t=function(m){return m&&m.querySelector("[autofocus]")},s=this.$slots.header&&t(this.headerContainer);s||(s=this.$slots.default&&t(this.container),s||(s=this.$slots.footer&&t(this.footerContainer),s||(s=this.closeButton))),s&&he(s)},enableDocumentSettings:function(){this.dismissable&&!this.modal&&this.bindOutsideClickListener(),this.blockScroll&&_e()},disableDocumentSettings:function(){this.unbindOutsideClickListener(),this.blockScroll&&Pe()},onKeydown:function(t){t.code==="Escape"&&this.hide()},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},contentRef:function(t){this.content=t},headerContainerRef:function(t){this.headerContainer=t},footerContainerRef:function(t){this.footerContainer=t},closeButtonRef:function(t){this.closeButton=t?t.$el:void 0},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeydown,document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(s){t.isOutsideClicked(s)&&t.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},isOutsideClicked:function(t){return this.container&&!this.container.contains(t.target)}},computed:{fullScreen:function(){return this.position==="full"},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0},dataP:function(){return Se($($($({"full-screen":this.position==="full"},this.position,this.position),"open",this.containerVisible),"modal",this.modal))}},directives:{focustrap:Le},components:{Button:q,Portal:ge,TimesIcon:ke}},Ve=["data-p"],Fe=["aria-modal","data-p"];function Ne(e,t,s,p,m,n){var y=j("Button"),v=j("Portal"),D=ce("focustrap");return f(),z(v,null,{default:c(function(){return[m.containerVisible?(f(),h("div",w({key:0,ref:n.maskRef,onMousedown:t[0]||(t[0]=function(){return n.onMaskClick&&n.onMaskClick.apply(n,arguments)}),class:e.cx("mask"),style:e.sx("mask",!0,{position:e.position,modal:e.modal}),"data-p":n.dataP},e.ptm("mask")),[u(pe,w({name:"p-drawer",onEnter:n.onEnter,onAfterEnter:n.onAfterEnter,onBeforeLeave:n.onBeforeLeave,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},e.ptm("transition")),{default:c(function(){return[e.visible?fe((f(),h("div",w({key:0,ref:n.containerRef,class:e.cx("root"),style:e.sx("root"),role:"complementary","aria-modal":e.modal,"data-p":n.dataP},e.ptmi("root")),[e.$slots.container?C(e.$slots,"container",{key:0,closeCallback:n.hide}):(f(),h(B,{key:1},[o("div",w({ref:n.headerContainerRef,class:e.cx("header")},e.ptm("header")),[C(e.$slots,"header",{class:Q(e.cx("title"))},function(){return[e.header?(f(),h("div",w({key:0,class:e.cx("title")},e.ptm("title")),l(e.header),17)):L("",!0)]}),e.showCloseIcon?C(e.$slots,"closebutton",{key:0,closeCallback:n.hide},function(){return[u(y,w({ref:n.closeButtonRef,type:"button",class:e.cx("pcCloseButton"),"aria-label":n.closeAriaLabel,unstyled:e.unstyled,onClick:n.hide},e.closeButtonProps,{pt:e.ptm("pcCloseButton"),"data-pc-group-section":"iconcontainer"}),{icon:c(function(E){return[C(e.$slots,"closeicon",{},function(){return[(f(),z(me(e.closeIcon?"span":"TimesIcon"),w({class:[e.closeIcon,E.class]},e.ptm("pcCloseButton").icon),null,16,["class"]))]})]}),_:3},16,["class","aria-label","unstyled","onClick","pt"])]}):L("",!0)],16),o("div",w({ref:n.contentRef,class:e.cx("content")},e.ptm("content")),[C(e.$slots,"default")],16),e.$slots.footer?(f(),h("div",w({key:0,ref:n.footerContainerRef,class:e.cx("footer")},e.ptm("footer")),[C(e.$slots,"footer")],16)):L("",!0)],64))],16,Fe)),[[D]]):L("",!0)]}),_:3},16,["onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])],16,Ve)):L("",!0)]}),_:3})}W.render=Ne;const Ue={class:"h-full"},je={class:"flex flex-column gap-2"},ze={class:"flex justify-content-between"},Ze={class:"m-0 font-bold text-2xl text-left flex-grow-1"},He={class:"font-bold"},Qe={class:"font-bold"},qe=["onClick"],We={class:"text-center py-5"},Xe={class:"mt-3 text-gray-500"},Ye={class:"mb-3"},Ge={class:"text-lg font-bold"},Je={class:"mb-3"},et={key:0,class:"mb-3"},tt={style:{color:"#5F0F0F"}},nt={style:{"white-space":"normal","word-break":"break-word",color:"#5F0F0F"}},at={class:"font-semibold"},ot={class:"flex justify-between text-gray-600 text-sm gap-4"},rt={class:"flex justify-content-end"},St={__name:"TakeawaysPage",setup(e){const{t}=we(),s=S({global:{value:null,matchMode:b.CONTAINS},id:{value:null,matchMode:b.STARTS_WITH},date:{value:null,matchMode:b.STARTS_WITH},time:{value:null,matchMode:b.IN},customer:{value:null,matchMode:b.EQUALS},total_price:{value:null,matchMode:b.EQUALS},pay_state:{value:null,matchMode:b.EQUALS},pay_ttpe:{value:null,matchMode:b.EQUALS}}),p=P.shopify_orders,m=S(!1),n=S(null),y=S(!1),v=S(null),D=ye(()=>[{label:t("orderPage.completed"),value:"completed"},{label:t("orderPage.read"),value:"read"},{label:t("orderPage.new"),value:"new"},{label:t("orderPage.voided"),value:"voided"}]);function E(d){if(d.pay_state=="voided"){d.status="voided";return}n.value=d,m.value=!1,v.value=d.status,y.value=!0}function X(){v.value!==null&&(n.value.status!==v.value&&((n.value.status==="new"||!n.value.status)&&P.updateNewOrderCount("takeaway",-1),v.value==="new"&&P.updateNewOrderCount("takeaway",1),n.value.status=v.value),y.value=!1)}function Y(d){n.value=d.data,m.value=!0,(n.value.status==="new"||!n.value.status)&&(n.value.isNew=void 0,P.updateNewOrderCount("takeaway",-1),n.value.status="read")}const G=d=>({completed:"status-completed",read:"status-read",new:"status-new",voided:"status-voided"})[d]||"",J=d=>({completed:t("orderPage.completed"),read:t("orderPage.read"),new:t("orderPage.new"),voided:t("orderPage.voided")})[d]||d;function ee(d){P.print_takeaway_order(d),m.value=!1}const A=S(!1);function te(){let d=0;return p.value.forEach(r=>{r.status!="voided"&&r.pay_state!="voided"&&d++}),d}function ne(){let d=0;return p.value.forEach(r=>{d+=Number(r.total_price?r.total_price:0)}),d}return(d,r)=>{const ae=De,oe=Be,M=q,re=xe,se=W;return f(),h(B,null,[o("div",Ue,[u(a(Ee),{value:a(p),tableStyle:"min-width: 50rem",dataKey:"id",paginator:"",rows:10,rowsPerPageOptions:[5,10,20,50],stripedRows:"",filters:s.value,filterDisplay:"row",scrollable:"",scrollHeight:"flex",onRowClick:Y,selectionMode:"single"},{header:c(()=>[o("div",je,[o("div",ze,[o("h4",Ze,l(a(t)("takeawaysPage.orders")),1),u(oe,null,{default:c(()=>[u(ae,null,{default:c(()=>r[7]||(r[7]=[o("i",{class:"pi pi-search"},null,-1)])),_:1,__:[7]}),u(a(Ae),{modelValue:s.value.global.value,"onUpdate:modelValue":r[0]||(r[0]=i=>s.value.global.value=i),placeholder:a(t)("orderPage.find")},null,8,["modelValue","placeholder"])]),_:1})]),o("div",null,[u(M,{class:"flex flex-wrap justify-content-start p-2",severity:"contrast",outlined:"",onClick:r[1]||(r[1]=i=>A.value=!0)},{default:c(()=>[o("label",He,"成功下单数："+l(te()),1),r[8]||(r[8]=o("label",{class:"font-bold"},"丨",-1)),o("label",Qe,"总成交额：€"+l(ne()),1),r[9]||(r[9]=o("i",{class:"pi pi-window-maximize"},null,-1))]),_:1,__:[8,9]})])])]),empty:c(()=>[o("div",We,[r[10]||(r[10]=o("i",{class:"pi pi-search",style:{"font-size":"3rem",color:"#ccc"}},null,-1)),o("p",Xe,l(a(t)("orderPage.notFound")),1)])]),default:c(()=>[u(a(k),{header:a(t)("orderPage.status")},{body:c(({data:i})=>[o("span",{class:Q(["status-badge",G(i.status||"new")]),onClick:be(I=>E(i),["stop"])},l(J(i.status||"new")),11,qe)]),_:1},8,["header"]),u(a(k),{field:"name",header:a(t)("takeawaysPage.orderNumber"),sortable:""},{body:c(({data:i})=>[o("span",{style:x({"text-decoration":i.status=="voided"?"line-through":"none"})},l(i.name),5)]),_:1},8,["header"]),u(a(k),{field:"pickupDate",header:a(t)("takeawaysPage.date"),sortable:""},null,8,["header"]),u(a(k),{field:"pickupTime",header:a(t)("takeawaysPage.time"),sortable:""},null,8,["header"]),u(a(k),{field:"customer.name",header:a(t)("takeawaysPage.customer"),sortable:""},null,8,["header"]),u(a(k),{field:"total_price",header:a(t)("takeawaysPage.totalPrice"),sortable:""},{body:c(({data:i})=>[o("span",{style:x({"text-decoration":i.status=="voided"?"line-through":"none"})}," €"+l(i.total_price?i.total_price:0),5)]),_:1},8,["header"]),u(a(k),{field:"pay_state",header:a(t)("takeawaysPage.payState"),sortable:""},{body:c(({data:i})=>[o("span",{style:x({"text-decoration":i.status=="voided"?"line-through":"none"})},l(a(t)("takeawaysPage.statePayment."+i.pay_state)),5)]),_:1},8,["header"]),u(a(k),{field:"pay_type",header:a(t)("takeawaysPage.payType"),sortable:""},{body:c(({data:i})=>[o("span",{style:x({"text-decoration":i.status=="voided"?"line-through":"none"})},l(a(t)("takeawaysPage.statePaymentType."+i.pay_type.replaceAll(" ","_"))),5)]),_:1},8,["header"])]),_:1},8,["value","filters"])]),u(a(H),{visible:m.value,"onUpdate:visible":r[3]||(r[3]=i=>m.value=i),header:a(t)("takeawaysPage.orderDetails"),modal:"",style:{width:"450px"}},{default:c(()=>{var i,I,O,T,K,V,F,N,U;return[o("div",Ye,[o("h3",Ge,l(a(t)("takeawaysPage.orderNumber"))+" : "+l((i=n.value)==null?void 0:i.name),1)]),o("div",Je,[o("div",null,l(a(t)("takeawaysPage.name"))+": "+l((O=(I=n.value)==null?void 0:I.customer)==null?void 0:O.name),1),o("div",null,l(a(t)("takeawaysPage.phone"))+": "+l((K=(T=n.value)==null?void 0:T.customer)==null?void 0:K.phone),1),o("div",null,l(a(t)("takeawaysPage.email"))+": "+l((F=(V=n.value)==null?void 0:V.customer)==null?void 0:F.email),1)]),(N=n.value)!=null&&N.note&&n.value.note!==""?(f(),h("div",et,[o("div",tt,l(a(t)("orderPage.notes"))+":",1),o("div",nt,l(n.value.note),1)])):L("",!0),(f(!0),h(B,null,Z((U=n.value)==null?void 0:U.line_items,(g,ie)=>(f(),h("div",{key:ie,class:"border-b py-2"},[o("div",at,l(g.name),1),o("div",ot,[o("span",null,l(g.sku),1),o("span",null,l(g.price)+" x "+l(g.quantity),1)]),(f(!0),h(B,null,Z(g.properties,(le,de)=>(f(),h("div",{key:de,class:"text-sm text-gray-500"},l(le),1))),128))]))),128)),o("div",rt,[u(M,{label:a(t)("takeawaysPage.printOrder"),onClick:r[2]||(r[2]=g=>ee(n.value))},null,8,["label"])])]}),_:1},8,["visible","header"]),o("div",null,[u(a(H),{visible:y.value,"onUpdate:visible":r[5]||(r[5]=i=>y.value=i),header:a(t)("orderPage.orderStatus"),modal:!0,dismissableMask:!0},{default:c(()=>[u(re,{modelValue:v.value,"onUpdate:modelValue":r[4]||(r[4]=i=>v.value=i),options:D.value,optionLabel:"label",optionValue:"value",onClick:X},null,8,["modelValue","options"])]),_:1},8,["visible","header"])]),u(se,{visible:A.value,"onUpdate:visible":r[6]||(r[6]=i=>A.value=i),header:a(t)("takeawaysPage.analysisHeader"),position:"full"},{default:c(()=>r[11]||(r[11]=[o("p",null,"数据..",-1)])),_:1,__:[11]},8,["visible","header"])],64)}}};export{St as default};
