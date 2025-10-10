import{v as Se,B as fe,x as ke,y as Ne,f as u,p as n,q as G,i as T,z as ue,A as K,C as me,h as a,t as d,n as ie,r as P,g as k,F as U,l as Y,k as r,j as E,D as Ce,a as $,u as de,s as be,m as ae,e as Xe,E as pt,G as ft,c as re,H as ge,I as vt,R as Ye,J as Le,K as ht,L as ze,M as mt,N as Te,O as bt,P as Ve,Q as De,S as gt,T as yt,U as Ie,o as Ze,w as _t,b as wt,V as kt,d as $t}from"./index-omo8Fe6R.js";import{s as ye,a as et}from"./index-DirQC60E.js";import{s as j,a as tt}from"./index-Jpvx4tnf.js";import{D as se,c as te,s as Me}from"./index-Bn4v4O7C.js";import{_ as $e,b as Fe,c as je,a as Ke,s as We}from"./_plugin-vue_export-helper-Cy7sJ6bs.js";import{s as xt}from"./index-BfYLMg-D.js";import{s as He,a as Tt}from"./index-SKS4Sgbd.js";import{s as It}from"./index-Cgg7K8R4.js";import{s as Ue}from"./index-zEC7K4Ni.js";import{s as Ct}from"./index-COr_BWrK.js";var Dt=Se`
    .p-tag {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: dt('tag.primary.background');
        color: dt('tag.primary.color');
        font-size: dt('tag.font.size');
        font-weight: dt('tag.font.weight');
        padding: dt('tag.padding');
        border-radius: dt('tag.border.radius');
        gap: dt('tag.gap');
    }

    .p-tag-icon {
        font-size: dt('tag.icon.size');
        width: dt('tag.icon.size');
        height: dt('tag.icon.size');
    }

    .p-tag-rounded {
        border-radius: dt('tag.rounded.border.radius');
    }

    .p-tag-success {
        background: dt('tag.success.background');
        color: dt('tag.success.color');
    }

    .p-tag-info {
        background: dt('tag.info.background');
        color: dt('tag.info.color');
    }

    .p-tag-warn {
        background: dt('tag.warn.background');
        color: dt('tag.warn.color');
    }

    .p-tag-danger {
        background: dt('tag.danger.background');
        color: dt('tag.danger.color');
    }

    .p-tag-secondary {
        background: dt('tag.secondary.background');
        color: dt('tag.secondary.color');
    }

    .p-tag-contrast {
        background: dt('tag.contrast.background');
        color: dt('tag.contrast.color');
    }
`,St={root:function(t){var s=t.props;return["p-tag p-component",{"p-tag-info":s.severity==="info","p-tag-success":s.severity==="success","p-tag-warn":s.severity==="warn","p-tag-danger":s.severity==="danger","p-tag-secondary":s.severity==="secondary","p-tag-contrast":s.severity==="contrast","p-tag-rounded":s.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Nt=fe.extend({name:"tag",style:Dt,classes:St}),Pt={name:"BaseTag",extends:ke,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Nt,provide:function(){return{$pcTag:this,$parentInstance:this}}};function _e(e){"@babel/helpers - typeof";return _e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_e(e)}function Bt(e,t,s){return(t=At(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function At(e){var t=Lt(e,"string");return _e(t)=="symbol"?t:t+""}function Lt(e,t){if(_e(e)!="object"||!e)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var p=s.call(e,t);if(_e(p)!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var he={name:"Tag",extends:Pt,inheritAttrs:!1,computed:{dataP:function(){return Ne(Bt({rounded:this.rounded},this.severity,this.severity))}}},zt=["data-p"];function qt(e,t,s,p,v,l){return n(),u("span",K({class:e.cx("root"),"data-p":l.dataP},e.ptmi("root")),[e.$slots.icon?(n(),G(me(e.$slots.icon),K({key:0,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(n(),u("span",K({key:1,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):T("",!0),e.value!=null||e.$slots.default?ue(e.$slots,"default",{key:2},function(){return[a("span",K({class:e.cx("label")},e.ptm("label")),d(e.value),17)]}):T("",!0)],16,zt)}he.render=qt;var Ot=Se`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`,Et={root:function(t){var s=t.props;return["p-avatar p-component",{"p-avatar-image":s.image!=null,"p-avatar-circle":s.shape==="circle","p-avatar-lg":s.size==="large","p-avatar-xl":s.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Rt=fe.extend({name:"avatar",style:Ot,classes:Et}),Vt={name:"BaseAvatar",extends:ke,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Rt,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function we(e){"@babel/helpers - typeof";return we=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},we(e)}function Qe(e,t,s){return(t=Mt(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function Mt(e){var t=Ft(e,"string");return we(t)=="symbol"?t:t+""}function Ft(e,t){if(we(e)!="object"||!e)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var p=s.call(e,t);if(we(p)!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var at={name:"Avatar",extends:Vt,inheritAttrs:!1,emits:["error"],methods:{onError:function(t){this.$emit("error",t)}},computed:{dataP:function(){return Ne(Qe(Qe({},this.shape,this.shape),this.size,this.size))}}},jt=["aria-labelledby","aria-label","data-p"],Kt=["data-p"],Wt=["data-p"],Ht=["src","alt","data-p"];function Ut(e,t,s,p,v,l){return n(),u("div",K({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root"),{"data-p":l.dataP}),[ue(e.$slots,"default",{},function(){return[e.label?(n(),u("span",K({key:0,class:e.cx("label")},e.ptm("label"),{"data-p":l.dataP}),d(e.label),17,Kt)):e.$slots.icon?(n(),G(me(e.$slots.icon),{key:1,class:ie(e.cx("icon"))},null,8,["class"])):e.icon?(n(),u("span",K({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon"),{"data-p":l.dataP}),null,16,Wt)):e.image?(n(),u("img",K({key:3,src:e.image,alt:e.ariaLabel,onError:t[0]||(t[0]=function(){return l.onError&&l.onError.apply(l,arguments)})},e.ptm("image"),{"data-p":l.dataP}),null,16,Ht)):T("",!0)]})],16,jt)}at.render=Ut;const Qt={class:"grid"},Jt={class:"flex flex-column"},Gt=["onClick"],Xt={class:"p-1 flex-shrink-0 w-7rem h-7rem flex align-items-center justify-content-center overflow-hidden"},Yt=["src","alt"],Zt={class:"flex flex-column justify-content-center"},ea={class:"font-bold"},ta={class:"flex flex-wrap gap-2"},aa={class:"flex gap-1 align-items-center"},sa={class:"text-color-secondary line2"},na={key:0,class:"text-xl font-bold text-primary"},oa={key:1,class:"flex align-items-center gap-1"},ia={class:"text-l font-bold text-color-secondary"},la={class:"text-sm line-through text-500"},ra={key:2,class:"flex gap-2 mr-2",id:"card-quantity"},ca={class:"w-2rem text-xl text-center"},ua={key:3,class:"flex gap-2 mr-2"},da={key:0,class:"m-2 mt-0"},pa={class:"flex flex-row justify-content-between align-content-center"},fa={class:"flex flex-column"},va={class:"text-l font-bold"},ha={key:0,class:"text-l font-bold text-color-secondary"},ma={key:1,class:"flex align-items-center gap-1"},ba={class:"text-l font-bold text-color-secondary"},ga={class:"text-sm line-through text-500"},ya={key:0,class:"flex ml-2 mr-2"},_a={class:"w-2rem text-xl text-center"},wa={key:1,class:"flex gap-2 mr-3 pt-2 pb-2"},ka={class:"max-w-5rem flex align-items-center"},$a={class:"font-bold whitespace-nowrap"},xa={class:"mb-2 flex justify-content-center"},Ta={class:"font-bold text-center"},Ia={class:"mb-2"},Ca={class:"text-color-secondary m-0 line-height-3 line2 text-center"},Da={class:"mb-2"},Sa={class:"flex justify-content-center"},Na=["src","alt"],Pa={class:"flex align-items-center gap-2"},Ba=["src","alt"],Aa={class:"flex align-items-center gap-3 ml-auto"},La={__name:"DishList",props:{updateCartItemCount:{type:Function,required:!0},rateDish:{type:Function,required:!0},likedItemsRef:Array,dislikedItemsRef:Array},setup(e){const t=se.dishes;let s={rated:!1,id:null,like:0,rate:0};function p(){var h;const _=$.currentPage.value,q=(h=_==null?void 0:_.data)==null?void 0:h.logoPath;return q?$.pathFormated(q,_.imagesPath):"/images/logo_logo.png"}const v=_=>{D.updateCartItemCount(_)},l=_=>{D.updateCartItemCount(-1)},w=_=>se.dishDatas.value[_]?se.dishDatas.value[_].quantity:0,R=_=>{if(!F())return!1;const q=_.quantity;let h=3;if(_.price>0&&(h=9),_.limit){const ee=_.id,C=F(),m=(C.peopleType.adults+C.peopleType.children)*_.limit,b=C.order.find(N=>N.dishid==ee);let I=0;if(_.subitem)for(const N of _.subitem){I+=w(N);const i=C.order.find(y=>y.dishid==S(N));i&&(I+=i.quantity)}else I+=_.quantity,b&&(I+=b.quantity);return q>=h||m&&I>=m}return q>=h},S=_=>se.dishDatas.value[_]?se.dishDatas.value[_].id:0,F=()=>$.getTableValue();function W(){D.rateDish(s.id,s.like,s.rate,s.rated),s.id=null,s.like=0,s.rate=0,s.rated=!1}const Q=_=>{const q=D.likedItemsRef.indexOf(_);if(s.id=_.id,q!==-1)D.likedItemsRef.splice(q,1),s.like+=-1,s.rate+=-1,s.rated=!1;else{s.rated=!0,D.likedItemsRef.push(_);const h=D.dislikedItemsRef.indexOf(_);h!==-1?(D.dislikedItemsRef.splice(h,1),s.like+=1):(s.like+=1,s.rate+=1)}},z=_=>{const q=D.dislikedItemsRef.indexOf(_);if(s.id=_.id,q!==-1)D.dislikedItemsRef.splice(q,1),s.rate+=-1,s.rated=!1;else{s.rated=!0,D.dislikedItemsRef.push(_);const h=D.likedItemsRef.indexOf(_);h!==-1?(D.likedItemsRef.splice(h,1),s.like+=-1):s.rate+=1}},D=e,Z=P(!1),M=P({}),V=_=>{Z.value=!0,M.value=_},B=_=>{_.target.src="/images/default.png"};function H(_){oe(_.target,300)}function ne(_){oe(_.target,110)}function oe(_,q){const h=_.naturalWidth,ee=_.naturalHeight,C=Math.min(h,q),m=C/h,b=ee*m;_.style.width=`${C}px`,_.style.height=`${b}px`}return(_,q)=>(n(),u(U,null,[a("div",Qt,[(n(!0),u(U,null,Y(r(t),(h,ee)=>(n(),u("div",{key:ee,class:"col-12 sm:col-12 md:col-6 lg:col-4 border-round surface-section shadow-1 p-2"},[a("div",Jt,[a("div",{class:ie(["flex flex-row",h.subItems.length!==0?"flex-grow-1":""]),onClick:C=>V(h.dish)},[a("div",Xt,[a("img",{src:h.dish.image||"/images/default.png",alt:h.dish.name,class:"w-full h-full",style:{"object-fit":"cover"},onError:B,onLoad:ne},null,40,Yt)]),a("div",Zt,[a("div",ea,d(h.dish.name),1),a("div",null,[a("div",ta,[a("div",aa,[(n(),u(U,null,Y(5,C=>a("i",{key:C,class:ie(["pi invert-star",C<=Math.floor(h.dish.likes/h.dish.rates*5)?"pi-star-fill":C-.5<=h.dish.likes/h.dish.rates*5?"pi-star-half-fill":"pi-star"]),style:{color:"black"}},null,2)),64)),a("p",null,"("+d(h.dish.rates?h.dish.rates:0)+")",1)])])]),a("div",null,[a("p",sa,d(h.dish.note),1)])])],10,Gt),h.subItems.length==0?(n(),u("div",{key:0,class:ie(["flex ml-2 mr-2 mb-2",Number(h.dish.price)>0?"justify-content-between":"justify-content-end"])},[!h.dish.discount&&Number(h.dish.price)>0?(n(),u("span",na,"€"+d(h.dish.price),1)):T("",!0),h.dish.discount?(n(),u("div",oa,[a("span",ia,"€"+d(h.dish.dis_price),1),a("span",la,"€"+d(h.dish.price),1),k(r(he),{severity:"danger",value:"-"+h.dish.discount+"%"},null,8,["value"])])):T("",!0),h.dish.soldout?T("",!0):(n(),u("div",ra,[k(r(j),{icon:"pi pi-minus",rounded:"",disabled:h.dish.quantity<=0,onClick:C=>{h.dish.quantity--,l()},class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),a("span",ca,d(h.dish.quantity),1),k(r(j),{icon:"pi pi-plus",rounded:"",disabled:R(h.dish),onClick:C=>{h.dish.quantity++,v(1)},class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])),h.dish.soldout?(n(),u("div",ua,[k(r(he),{severity:"danger",value:_.$t("common.soldout")},null,8,["value"])])):T("",!0)],2)):T("",!0),h.subItems.length!==0?(n(!0),u(U,{key:1},Y(h.subItems,(C,m)=>(n(),u(U,{key:"index"},[C.disable?T("",!0):(n(),u("div",da,[a("div",pa,[a("div",fa,[a("span",va,d(C.subname),1),!C.discount&&C.price!=="0.00"&&C.price!=="0"?(n(),u("span",ha,"€"+d(C.price),1)):T("",!0),C.discount?(n(),u("div",ma,[a("span",ba,"€"+d(C.dis_price),1),a("span",ga,"€"+d(C.price),1),k(r(he),{severity:"danger",value:"-"+C.discount+"%"},null,8,["value"])])):T("",!0)]),C.soldout?T("",!0):(n(),u("div",ya,[k(r(j),{icon:"pi pi-minus",rounded:"",disabled:C.quantity<=0,onClick:b=>{C.quantity--,l()},class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),a("span",_a,d(C.quantity),1),k(r(j),{icon:"pi pi-plus",rounded:"",onClick:b=>{C.quantity++,v(1)},class:"w-2rem h-2rem",disabled:R(C)},null,8,["onClick","disabled"])])),C.soldout?(n(),u("div",wa,[k(r(he),{severity:"danger",value:_.$t("common.soldout")},null,8,["value"])])):T("",!0)])]))],64))),128)):T("",!0)])]))),128))]),k(r(ye),{visible:Z.value,"onUpdate:visible":q[2]||(q[2]=h=>Z.value=h),modal:"",header:"dish",style:Ce([{width:"23rem"},{width:"80vw","max-width":"700px"}]),onHide:q[3]||(q[3]=h=>W())},{header:E(()=>[a("div",ka,[k(r(at),{image:p(),class:"w-full"},null,8,["image"])]),a("span",$a,d(_.$t("common.details")),1)]),default:E(()=>[a("div",xa,[a("span",Ta,d(M.value.name),1)]),a("div",Ia,[a("span",Ca,d(M.value.note),1)]),a("div",Da,[a("div",Sa,[a("img",{class:"w-full h-auto object-contain",src:M.value.image,alt:M.value.name,onError:B,onLoad:H},null,40,Na)])]),a("div",Pa,[(n(!0),u(U,null,Y(M.value.allergies,(h,ee)=>(n(),u("img",{src:"images/"+h+".png",alt:h,class:"w-2rem h-2rem border-round flex-shrink-0",style:{"object-fit":"cover","min-width":"2rem"}},null,8,Ba))),256)),a("div",Aa,[a("button",{onClick:q[0]||(q[0]=h=>Q(M.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[a("i",{class:ie(["pi pi-thumbs-up text-xl",D.likedItemsRef.includes(M.value)?"text-green-500":"text-gray-400"])},null,2)]),a("button",{onClick:q[1]||(q[1]=h=>z(M.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[a("i",{class:ie(["pi pi-thumbs-down text-xl",D.dislikedItemsRef.includes(M.value)?"text-red-500":"text-gray-400"])},null,2)])])])]),_:1},8,["visible"])],64))}},za=$e(La,[["__scopeId","data-v-15e7fd21"]]),qa={key:0,class:"text-3xl font-bold"},Oa={class:"flex flex-column gap-3 p-1"},Ea={key:0,class:"flex flex-column gap-1"},Ra={key:0,class:"m-0"},Va={key:0,class:"m-0"},Ma={class:"flex justify-content-between gap-4 mt-1"},Fa={class:"flex align-items-center gap-2"},ja=["src","alt"],Ka={class:"flex-grow-1 min-width-0 max-w-18rem"},Wa={class:"flex flex-column gap-1"},Ha={class:"flex align-items-center gap-2"},Ua={class:"text-xl font-bold line1 whitespace-nowrap overflow-hidden text-overflow-ellipsis",style:{"max-width":"20rem"}},Qa={class:"flex align-items-end gap-1"},Ja={key:0,class:"text-xl font-bold text-primary"},Ga={key:1,class:"text-xl font-bold text-primary"},Xa={key:2,class:"text-sm text-color-secondary"},Ya={key:0,class:"text-xs text-primary"},Za={class:"flex-shrink-0 flex flex-wrap justify-content-between align-items-center gap-1"},es={class:"flex flex-wrap justify-content-between align-content-center"},ts={class:"flex align-items-center gap-1"},as={class:"w-2rem text-center"},ss={key:1,class:"flex flex-column gap-2 mt-2"},ns={for:"in_label"},os={for:"in_label"},is={class:"bottom-0 left-0 mt-2"},ls={class:"text-2xl font-bold"},rs={class:"text-2xl font-bold text-primary pl-2"},cs={class:"flex justify-content-between"},us={__name:"Cart",props:{updateCartItemCount:{type:Function,required:!0},checkout:{type:Function,required:!0},isTakeaway:Boolean},setup(e,{expose:t}){const{locale:s}=de(),p=Xe(),{t:v}=de(),l=te.cartDishs;$.freeCounts;const w=P([]),R=P(),S=P(),F=P(!1),W=P(!1),Q=P(!0),z=P(""),D=P("");function Z(i,y,f){let J="";const X=s.value,ce=$.customDishAPI.getCustomDishByName(i);for(const le of f){const Pe=ce.types[y].dishes.find(pe=>pe.dishid===le.id)[`name_${X}`];J=J+Pe+"/"}return J}function M(i,y){const f=s.value;return $.customDishAPI.getCustomDishByName(i).types[y][`typeName_${f}`]}const V=(i,y)=>{const f=w.value[i].quantity+y;f>=0&&(w.value[i].quantity=f,oe.updateCartItemCount(y))};function B(i){i&&R.value&&(R.value.dishNote=S.value?S.value:void 0),W.value=!1}function H(){S.value&&(S.value=void 0),R.value&&(R.value=void 0)}function ne(i){R.value=i,S.value=R.value.dishNote?R.value.dishNote:void 0,W.value=!0}const oe=e;t({showDishList:i=>{F.value=!0,w.value.length=0;for(let y=0;y<i.length;y++)w.value.push(i[y]);Q.value=w.value.length==0&&l.length==0}});function q(i){te.removeItem(i)}function h(){oe.isTakeaway?ee():C()}function ee(){const i=[];l.value.forEach(y=>{i.push(y)}),w.value.forEach(y=>{y.quantity>0&&i.push(y)}),i.length<=0?ae.show_warn(v("notification.select_at_least_one")):(F.value=!1,p.push({path:"/paymentPage"}))}function C(){oe.checkout({name:z.value,note:D.value})&&(F.value=!1),l.value.forEach(i=>{i.dishNote=void 0}),w.value.forEach(i=>{i.dishNote=void 0}),D.value="",se.cleanDishDataQty(),localStorage.removeItem("order_cartDishs"),localStorage.removeItem("order_dishDatas")}function m(i){return i.subname!=""&&i.subname!="Default Title"?i.name+" "+i.subname:i.name}function b(){let i=0;return l.value.forEach(y=>{i+=y.dis_price?y.dis_price*y.count:y.price*y.count}),w.value.forEach(y=>{i+=y.dis_price?y.dis_price*y.quantity:y.price*y.quantity}),"€"+i.toFixed(2)}const I=i=>{i.target.src="/images/default.png"},N=i=>{const y=i.quantity;let f=3;return i.price>0&&(f=9),y>=f};return(i,y)=>(n(),u(U,null,[k(r(ye),{class:"bg-primary-reverse text-sm md:text-lg lg:text-xl",visible:F.value,"onUpdate:visible":y[2]||(y[2]=f=>F.value=f),modal:"",header:i.$t("common.cart"),style:Ce([{backgroundColor:"rgba(250, 250, 250, 1)",height:"100%",minWidth:"24rem"},{width:"80vw","max-width":"700px"}]),dismissableMask:!0},{footer:E(()=>[a("div",is,[a("span",ls,d(i.$t("common.total"))+": ",1),a("span",rs,d(b()),1),k(r(j),{icon:e.isTakeaway?"pi pi-wallet":"pi pi-plus",class:"p-button-success p-button-rounded ml-3",onClick:h,label:e.isTakeaway?r(v)("common.pay"):r(v)("common.send")},null,8,["icon","label"])])]),default:E(()=>[Q.value?(n(),u("h2",qa,"Cart is empty.")):T("",!0),a("div",Oa,[(n(!0),u(U,null,Y(r(l),(f,J)=>(n(),G(r(xt),{style:{overflow:"hidden"},key:J},{title:E(()=>[be(d(i.$t(`common.${f.name.replace(/[^a-zA-Z0-9\s]/g,"").toLowerCase().replace(/\s+/g,"")}`)),1)]),subtitle:E(()=>[be(d(i.$t("common.price"))+" : "+d(f.price)+"€",1)]),content:E(()=>[r($).customDishAPI.customDishes.value.find(X=>X.name==f.name)?(n(),u("div",Ea,[(n(!0),u(U,null,Y(f.notesAndId,(X,ce)=>(n(),u("div",null,[f.notesAndId[ce].length!==0?(n(),u("span",Ra,d(M(f.name,ce))+": "+d(Z(f.name,ce,X)),1)):T("",!0)]))),256)),a("div",null,[f.dishNote?(n(),u("span",Va,d(i.$t("common.note"))+": "+d(f.dishNote),1)):T("",!0)])])):T("",!0)]),footer:E(()=>[a("div",Ma,[e.isTakeaway?T("",!0):(n(),G(r(j),{key:0,label:r(v)("common.edit")+" "+r(v)("common.note"),severity:"contrast",onClick:X=>ne(f)},null,8,["label","onClick"])),k(r(j),{label:r(v)("common.remove"),severity:"danger",onClick:X=>q(f)},null,8,["label","onClick"])])]),_:2},1024))),128)),(n(!0),u(U,null,Y(w.value,(f,J)=>(n(),u("div",{key:J,class:"p-2 border-round shadow-1 transition-all transition-duration-200 hover:shadow-3 flex flex-column gap-1"},[a("div",Fa,[a("img",{src:f.image,alt:f.name,class:"w-4rem h-4rem border-round flex-shrink-0",onError:I,style:{"object-fit":"cover","min-width":"4rem"}},null,40,ja),a("div",Ka,[a("div",Wa,[a("div",Ha,[a("span",Ua,d(m(f)),1)])]),a("div",Qa,[f.dis_price?(n(),u("span",Ja,"€"+d(f.dis_price),1)):T("",!0),!f.dis_price&&f.price>0?(n(),u("span",Ga,"€"+d(f.price),1)):T("",!0),f.price>0?(n(),u("span",Xa,"/uni.")):T("",!0)])])]),a("div",null,[f.dishNote?(n(),u("span",Ya,d(r(v)("common.note")+": "+f.dishNote),1)):T("",!0)]),a("div",Za,[a("div",es,[e.isTakeaway?T("",!0):(n(),G(r(j),{key:0,label:r(v)("common.edit")+" "+r(v)("common.note"),severity:"contrast",class:"w-3.5rem h-2rem",onClick:X=>ne(f)},null,8,["label","onClick"]))]),a("div",ts,[k(r(j),{icon:"pi pi-minus",rounded:"",disabled:f.quantity<=0,onClick:X=>V(J,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),a("span",as,d(f.quantity),1),k(r(j),{icon:"pi pi-plus",rounded:"",disabled:N(f),onClick:X=>V(J,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])])]))),128))]),e.isTakeaway?T("",!0):(n(),u("div",ss,[k(r(He),{variant:"in"},{default:E(()=>[k(r(et),{id:"in_label",modelValue:z.value,"onUpdate:modelValue":y[0]||(y[0]=f=>z.value=f),variant:"filled",maxlength:"20"},null,8,["modelValue"]),a("label",ns,d(r(v)("common.name")),1)]),_:1}),k(r(He),{variant:"in"},{default:E(()=>[k(r(Me),{id:"in_label",class:"min-w-full",rows:"5",modelValue:D.value,"onUpdate:modelValue":y[1]||(y[1]=f=>D.value=f),variant:"filled",maxlength:"200"},null,8,["modelValue"]),a("label",os,d(r(v)("common.observation")),1)]),_:1})]))]),_:1},8,["visible","header"]),k(r(ye),{visible:W.value,"onUpdate:visible":y[6]||(y[6]=f=>W.value=f),header:r(v)("common.note"),onHide:y[7]||(y[7]=f=>H()),modal:"",dismissableMask:!0},{default:E(()=>[k(r(Me),{modelValue:S.value,"onUpdate:modelValue":y[3]||(y[3]=f=>S.value=f),rows:"5",cols:"30",placeholder:r(v)("common.edit")+" "+r(v)("common.note")+"...",maxlength:"100"},null,8,["modelValue","placeholder"]),a("div",cs,[k(r(j),{label:r(v)("common.cancel"),severity:"danger",onClick:y[4]||(y[4]=f=>B(!1))},null,8,["label"]),k(r(j),{label:r(v)("common.save"),severity:"primary",size:"sm",onClick:y[5]||(y[5]=f=>B(!0))},null,8,["label"])])]),_:1},8,["visible","header"])],64))}},ds=$e(us,[["__scopeId","data-v-483203ce"]]);var ps=Se`
    .p-overlaybadge {
        position: relative;
    }

    .p-overlaybadge .p-badge {
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
        outline-width: dt('overlaybadge.outline.width');
        outline-style: solid;
        outline-color: dt('overlaybadge.outline.color');
    }

    .p-overlaybadge .p-badge:dir(rtl) {
        transform: translate(-50%, -50%);
    }
`,fs={root:"p-overlaybadge"},vs=fe.extend({name:"overlaybadge",style:ps,classes:fs}),hs={name:"OverlayBadge",extends:tt,style:vs,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},st={name:"OverlayBadge",extends:hs,inheritAttrs:!1,components:{Badge:tt}};function ms(e,t,s,p,v,l){var w=pt("Badge");return n(),u("div",K({class:e.cx("root")},e.ptmi("root")),[ue(e.$slots,"default"),k(w,K(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}st.render=ms;P([]);P("iniImages()");const bs={class:"m-3"},gs={class:"flex flex-column gap-2"},ys={class:"w-full flex justify-content-center"},_s={key:0,class:"max-w-19rem"},ws=["src"],ks={style:{width:"300px",height:"300px",background:"url(/boxImage/box.png)"}},$s={key:0,class:"flex align-items-center justify-content-center text-4xl font-bold text-white w-full h-full"},xs={key:1,class:"grid m-0 p-2"},Ts=["onClick"],Is={class:"flex align-items-center justify-content-center font-bold m-0 p-0",style:{width:"94px",height:"94px"}},Cs=["src"],Ds={class:"flex flex-wrap justify-content-between align-items-center m-1"},Ss={class:"flex gap-1 align-items-center"},Ns={key:0},Ps={class:"font-bold mb-2"},Bs={key:1,class:"flex justify-content-between gap-2 mt-3"},As={class:"font-bold mb-2"},Ls={class:"flex mr-2"},zs={class:"w-3rem text-xl text-center"},qs={class:"font-bold block mb-2"},Os={class:"flex flex-wrap"},Es={key:2,class:"flex flex-wrap gap-2 mt-3"},Rs={class:"font-bold block mb-2"},Vs={class:"font-bold block mb-2 text-center"},Ms={class:"flex flex-wrap gap-2 mt-3"},Fs={__name:"CustomDish",props:{currentCustomDish:Object},emits:["typeClick"],setup(e,{emit:t}){const{locale:s}=de(),p=e,v=ft(),{t:l}=de(),w=re(()=>p.currentCustomDish),R=re(()=>w.boxImages),S=P(0),F=re(()=>{let m=w.value.initialPrice;for(const b of w.value.types??[])for(const I of b.dishes??[])I.selected&&(m+=I.price);return Number(m).toFixed(2)}),W=t,Q=P(null),z=re(()=>{const m=s.value,b=`title_${m}`,I=`description_${m}`;return w.value.descriptions.map(N=>({title:N[b],descriptions:N.descriptions.map(i=>i[I]),image:N==null?void 0:N.image}))}),D=re(()=>{var I,N;const m=Number(((I=w.value)==null?void 0:I.like)??0),b=Number(((N=w.value)==null?void 0:N.rate)??0);return b?m/b*5:0});function Z(m,b){const I=s.value;return m[`${b}_${I}`]}function M(m,b,I){const N=m[b];if(N.selected){N.selected=!1;return}else{const y=m.filter(f=>f.selected).length;if(I===1){h(m),N.selected=!0;return}y<I&&(N.selected=!0)}}function V(m,b,I){const N=m.dishes;W("typeClick",m,b,N[b].selected),M(N,b,I)}function B(m){return m.selected}function H(){if(!ee(w.value.types))return;const m=oe(w.value.types),b=_(w.value.types);te.addItem({dishid:-1,name:w.value.name,category:p.currentCustomDish.category,count:S.value!==0?S.value:1,price:F.value,notes:m,notesAndId:b}),console.log("CART: ",te.cartDishs),q(w.value.types),ae.show({severity:"info",summary:"info",detail:l("customDishBibimbapVue.addToCartSuccessBibimbap")})}function ne(m){return!m||!m.dishes?"":m.dishes.filter(I=>I.selected).map(I=>I.name).join(",")}function oe(m){return m?m.map(b=>ne(b)):[]}function _(m){return m?m.map(b=>b.dishes?b.dishes.filter(I=>I.selected).map(I=>({id:I.dishid,name:I.name})):[]):[]}function q(m){m&&m.forEach(b=>{b.dishes&&b.dishes.forEach(I=>{I.selected=!1})})}function h(m){m.forEach(b=>b.selected=!1)}function ee(m){if(w.value.options.quantity&&S.value<=0)return ae.show({severity:"warn",detail:l("notification.quantity_must_be_positive")}),!1;for(const b of m)if(b.dishes.filter(N=>N.selected).length<b.minQuantity){const N=b.typeName;return ae.show({severity:"warn",detail:l("notification.select_type_of",{name:N})}),!1}return!0}function C(m){m?$.customDishAPI.like(w.value.id)&&(Q.value="like",v.add({severity:"success",summary:l("common.success"),detail:l("common.rate")+" "+l("common.success"),life:750})):$.customDishAPI.unLike(w.value.id)&&(Q.value="unlike",v.add({severity:"success",summary:l("common.success"),detail:l("common.rate")+" "+l("common.success"),life:750}))}return(m,b)=>{var I,N;return n(),u("div",bs,[a("div",gs,[k(r(We),{class:"w-full max-w-xl mx-auto"},{default:E(()=>[(n(!0),u(U,null,Y(z.value,(i,y)=>(n(),G(r(Ke),{key:y,value:y},{default:E(()=>[k(r(Fe),null,{default:E(()=>[be(d(i.title),1)]),_:2},1024),k(r(je),null,{default:E(()=>{var f;return[(n(!0),u(U,null,Y(i.descriptions,(J,X)=>(n(),u("p",{key:X},d(J),1))),128)),a("div",ys,[(f=i.image)!=null&&f.src?(n(),u("div",_s,[a("img",{src:i.image.src,class:"w-full"},null,8,ws)])):T("",!0)])]}),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1}),((N=(I=w.value)==null?void 0:I.value)==null?void 0:N.name)==="MY BOX"?(n(),G(r(We),{key:0,class:"w-full max-w-xl mx-auto"},{default:E(()=>[k(r(Ke),{value:"0"},{default:E(()=>[k(r(Fe),null,{default:E(()=>[be(" 🥩 "+d(m.$t("common.showMybox")),1)]),_:1}),k(r(je),null,{default:E(()=>[a("div",ks,[m.isEmptyArray(R.value)?(n(),u("div",$s,d(m.$t("common.myboxAlarm")),1)):T("",!0),m.isEmptyArray(R.value)?T("",!0):(n(),u("div",xs,[(n(!0),u(U,null,Y(R.value,i=>(n(),u("div",{class:"col-4 p-0",onClick:y=>m.imageSelectAction(i)},[a("div",Is,[i?(n(),u("img",{key:0,class:"m-0 p-0",src:m.imagePath(i),style:{width:"82px",height:"82px"}},null,8,Cs)):T("",!0)])],8,Ts))),256))]))])]),_:1})]),_:1})]),_:1})):T("",!0)]),a("div",Ds,[a("div",Ss,[(n(),u(U,null,Y(5,i=>a("i",{key:i,class:ie(["pi invert-star",i<=Math.floor(D.value)?"pi-star-fill":i-.5<=D.value?"pi-star-half":"pi-star"]),style:{color:"black"}},null,2)),64)),a("p",null,"("+d(w.value.rate?w.value.rate:0)+")",1)]),a("div",null,[k(r(j),{text:"",icon:"pi pi-thumbs-up",severity:Q.value==="like"?"success":"",onClick:b[0]||(b[0]=i=>C(!0))},null,8,["severity"]),k(r(j),{text:"",icon:"pi pi-thumbs-down",severity:Q.value==="unlike"?"danger":"",onClick:b[1]||(b[1]=i=>C(!1))},null,8,["severity"])])]),w.value.options.extraInfo?(n(),u("div",Ns,[a("label",Ps,d(w.value.options.extraInfo),1)])):T("",!0),w.value.options.quantity?(n(),u("div",Bs,[a("div",null,[a("label",As,d(m.$t("common.quantity"))+" / "+d(m.$t("common.pieces")),1)]),a("div",Ls,[k(r(j),{icon:"pi pi-minus",disabled:S.value<=0,onClick:b[2]||(b[2]=i=>S.value-=w.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"]),a("span",zs,d(S.value),1),k(r(j),{icon:"pi pi-plus",disabled:S.value>=w.value.options.maxQuantity,onClick:b[3]||(b[3]=i=>S.value+=w.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"])])])):T("",!0),(n(!0),u(U,null,Y(w.value.types,(i,y)=>(n(),u("div",{key:i.id},[ge(a("div",null,[a("label",qs,d(y+1)+". "+d(Z(i,"typeName")),1),a("div",Os,[(n(!0),u(U,null,Y(i.dishes,(f,J)=>(n(),G(r(j),{key:J,onClick:X=>V(i,J,S.value==0?i.maxQuantity:i.maxQuantity*S.value),class:ie([{"p-button-primary":B(f),"p-button-outlined":!B(f)},"m-1"])},{default:E(()=>[a("p",{class:ie({"text-gray-700":!B(f)})},d(Z(f,"name")),3)]),_:2},1032,["onClick","class"]))),128))])],512),[[vt,i.enable]])]))),128)),e.currentCustomDish.initialPrice!==0?(n(),u("div",Es,[a("label",Rs,d(m.$t("common.price"))+":",1),a("label",Vs,d(F.value+"€"),1)])):T("",!0),a("div",Ms,[k(r(j),{icon:"pi pi-shopping-cart",onClick:b[4]||(b[4]=i=>H()),label:m.$t("common.addToCart"),class:"m-3",severity:"primary",raised:""},null,8,["label"])])])}}},js=$e(Fs,[["__scopeId","data-v-1bbb17dd"]]);var Ks=Se`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
    }

    .p-tabs-scrollable > .p-tablist {
        overflow: hidden;
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        background: dt('tabs.tablist.background');
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`,Ws={root:function(t){var s=t.props;return["p-tabs p-component",{"p-tabs-scrollable":s.scrollable}]}},Hs=fe.extend({name:"tabs",style:Ks,classes:Ws}),Us={name:"BaseTabs",extends:ke,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:Hs,provide:function(){return{$pcTabs:this,$parentInstance:this}}},nt={name:"Tabs",extends:Us,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t}},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function Qs(e,t,s,p,v,l){return n(),u("div",K({class:e.cx("root")},e.ptmi("root")),[ue(e.$slots,"default")],16)}nt.render=Qs;var Js={root:"p-tablist",content:function(t){var s=t.instance;return["p-tablist-content",{"p-tablist-viewport":s.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Gs=fe.extend({name:"tablist",classes:Js}),Xs={name:"BaseTabList",extends:ke,props:{},style:Gs,provide:function(){return{$pcTabList:this,$parentInstance:this}}},ot={name:"TabList",extends:Xs,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;setTimeout(function(){t.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,s=this.getVisibleButtonWidths(),p=Le(t)-s,v=Math.abs(t.scrollLeft),l=p*.8,w=v-l,R=Math.max(w,0);t.scrollLeft=Ve(t)?-1*R:R},onNextButtonClick:function(){var t=this.$refs.content,s=this.getVisibleButtonWidths(),p=Le(t)-s,v=Math.abs(t.scrollLeft),l=p*.8,w=v+l,R=t.scrollWidth-p,S=Math.min(w,R);t.scrollLeft=Ve(t)?-1*S:S},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,s=t.content,p=t.inkbar,v=t.tabs;if(p){var l=ze(s,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(p.style.height=mt(l)+"px",p.style.top=Te(l).top-Te(v).top+"px"):(p.style.width=bt(l)+"px",p.style.left=Te(l).left-Te(v).left+"px")}},updateButtonState:function(){var t=this.$refs,s=t.list,p=t.content,v=p.scrollTop,l=p.scrollWidth,w=p.scrollHeight,R=p.offsetWidth,S=p.offsetHeight,F=Math.abs(p.scrollLeft),W=[Le(p),ht(p)],Q=W[0],z=W[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=v!==0,this.isNextButtonEnabled=s.offsetHeight>=S&&parseInt(v)!==w-z):(this.isPrevButtonEnabled=F!==0,this.isNextButtonEnabled=s.offsetWidth>=R&&parseInt(F)!==l-Q)},getVisibleButtonWidths:function(){var t=this.$refs,s=t.prevButton,p=t.nextButton,v=0;return this.showNavigators&&(v=((s==null?void 0:s.offsetWidth)||0)+((p==null?void 0:p.offsetWidth)||0)),v}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return Ne({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:Tt,ChevronRightIcon:It},directives:{ripple:Ye}},Ys=["data-p"],Zs=["aria-label","tabindex"],en=["data-p"],tn=["aria-orientation"],an=["aria-label","tabindex"];function sn(e,t,s,p,v,l){var w=De("ripple");return n(),u("div",K({ref:"list",class:e.cx("root"),"data-p":l.dataP},e.ptmi("root")),[l.showNavigators&&v.isPrevButtonEnabled?ge((n(),u("button",K({key:0,ref:"prevButton",type:"button",class:e.cx("prevButton"),"aria-label":l.prevButtonAriaLabel,tabindex:l.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return l.onPrevButtonClick&&l.onPrevButtonClick.apply(l,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(n(),G(me(l.templates.previcon||"ChevronLeftIcon"),K({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,Zs)),[[w]]):T("",!0),a("div",K({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return l.onScroll&&l.onScroll.apply(l,arguments)}),"data-p":l.dataP},e.ptm("content")),[a("div",K({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":l.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[ue(e.$slots,"default"),a("span",K({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,tn)],16,en),l.showNavigators&&v.isNextButtonEnabled?ge((n(),u("button",K({key:1,ref:"nextButton",type:"button",class:e.cx("nextButton"),"aria-label":l.nextButtonAriaLabel,tabindex:l.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return l.onNextButtonClick&&l.onNextButtonClick.apply(l,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(n(),G(me(l.templates.nexticon||"ChevronRightIcon"),K({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,an)),[[w]]):T("",!0)],16,Ys)}ot.render=sn;var nn={root:function(t){var s=t.instance,p=t.props;return["p-tab",{"p-tab-active":s.active,"p-disabled":p.disabled}]}},on=fe.extend({name:"tab",classes:nn}),ln={name:"BaseTab",extends:ke,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:on,provide:function(){return{$pcTab:this,$parentInstance:this}}},it={name:"Tab",extends:ln,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var s=this.findNextTab(t.currentTarget);s?this.changeFocusedTab(t,s):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var s=this.findPrevTab(t.currentTarget);s?this.changeFocusedTab(t,s):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var s=this.findFirstTab();this.changeFocusedTab(t,s),t.preventDefault()},onEndKey:function(t){var s=this.findLastTab();this.changeFocusedTab(t,s),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findNextTab:function(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=s?t:t.nextElementSibling;return p?Ie(p,"data-p-disabled")||Ie(p,"data-pc-section")==="activebar"?this.findNextTab(p):ze(p,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=s?t:t.previousElementSibling;return p?Ie(p,"data-p-disabled")||Ie(p,"data-pc-section")==="activebar"?this.findPrevTab(p):ze(p,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,s){yt(s),this.scrollInView(s)},scrollInView:function(t){var s;t==null||(s=t.scrollIntoView)===null||s===void 0||s.call(t,{block:"nearest"})}},computed:{active:function(){var t;return gt((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tabpanel_").concat(this.value)},attrs:function(){return K(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return Ne({active:this.active})}},directives:{ripple:Ye}};function rn(e,t,s,p,v,l){var w=De("ripple");return e.asChild?ue(e.$slots,"default",{key:1,dataP:l.dataP,class:ie(e.cx("root")),active:l.active,a11yAttrs:l.a11yAttrs,onClick:l.onClick}):ge((n(),G(me(e.as),K({key:0,class:e.cx("root"),"data-p":l.dataP,onClick:l.onClick},l.attrs),{default:E(function(){return[ue(e.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[w]])}it.render=rn;const cn={class:"fixed top-0 left-0 w-full bg-primary-reverse",style:{"z-index":"10"}},un={class:"grid mt-3 ml-3"},dn={class:"max-w-5rem flex align-items-center"},pn=["src"],fn={class:"flex align-items-center"},vn={key:0,class:"text-color font-bold p-1"},hn={key:1,class:"text-color font-bold p-1"},mn={class:"card flex mr-3",style:{"margin-left":"auto"}},bn={style:{display:"flex","align-items":"center"}},gn={style:{"flex-grow":"1",width:"0",overflow:"hidden"}},yn={class:"mt-2"},_n={class:"flex justify-content-end mt-2"},wn={__name:"HeaderTabs",props:{types:Array,typeIndex:Number,tableId:String,tabItems:Array},emits:["clickType","switchToWelcome"],setup(e,{emit:t}){const{t:s}=de();function p(){var H;const V=$.currentPage.value,B=(H=V==null?void 0:V.data)==null?void 0:H.logoPath;return B?$.pathFormated(B,V.imagesPath):"/images/logo_logo.png"}function v(){return $.getTable()}const l=P(),w=re(()=>[{label:s("common.options"),items:[{label:s("common.pay"),icon:"pi pi-wallet",command:()=>{D()}},{label:s("common.call"),icon:"pi pi-user-plus",command:()=>{$.send_cmd(v(),{cmd:"call"}),ae.show_info(s("notification.call_msg"))}}]}]),R=V=>{l.value.toggle(V)},S=V=>{F.value.toggle(V)},F=P(),W=P(!1),Q=P(),z=P();function D(){W.value=!0}function Z(){V(Q.value)?$.send_cmd(v(),{cmd:"pay",nif:Q.value,note:z.value},B=>{B.success?(ae.show_info(s("notification.pay_msg")),W.value=!1):ae.show_error(s("common.failed"))}):ae.show_warn(s("notification.cancel_msg"));function V(B){return!B||B.toString().length===9||B.toString().length===0}}function M(){z.value&&(z.value=void 0)}return(V,B)=>(n(),u(U,null,[a("div",cn,[a("div",un,[a("div",dn,[a("img",{src:p(),class:"w-full",clickble:"",onClick:B[0]||(B[0]=()=>V.$emit("switchToWelcome"))},null,8,pn)]),a("div",fn,[e.tableId?(n(),u("p",vn,d(V.$t("common.table"))+": "+d(e.tableId),1)):T("",!0),e.tableId?T("",!0):(n(),u("p",hn,d(V.$t("common.takeAway")),1))]),a("div",mn,[e.tableId?(n(),G(r(j),{key:0,icon:"pi pi-bell",rounded:"","aria-label":"Filter",onClick:R,"aria-haspopup":"true","aria-controls":"overlay_menu"})):T("",!0),k(r(Ue),{ref_key:"menu",ref:l,id:"overlay_menu",model:w.value,popup:!0},null,8,["model"])])]),a("div",bn,[a("div",null,[k(r(j),{icon:"pi pi-bars",variant:"text",rounded:"","aria-label":"Filter",onClick:S,"aria-haspopup":"true","aria-controls":"tab_menu"}),k(r(Ue),{ref_key:"tabMenu",ref:F,id:"tab_menu",model:e.tabItems,popup:!0},null,8,["model"])]),a("div",gn,[k(r(nt),{value:e.typeIndex,scrollable:"",showNavigators:!1},{default:E(()=>[k(r(ot),null,{default:E(()=>[(n(!0),u(U,null,Y(e.types,(H,ne)=>(n(),G(r(it),{value:ne,onClick:()=>V.$emit("clickType",ne),class:"text-sm md:text-lg lg:text-xl"},{default:E(()=>[be(d(H),1)]),_:2},1032,["value","onClick"]))),256))]),_:1})]),_:1},8,["value"])])])]),k(r(ye),{visible:W.value,"onUpdate:visible":B[4]||(B[4]=H=>W.value=H),header:"结账",class:"flex flex-column",modal:!0,dismissableMask:!0,onHide:M},{default:E(()=>[a("div",null,[B[5]||(B[5]=a("label",null,"NIF:",-1)),k(r(Ct),{modelValue:Q.value,"onUpdate:modelValue":B[1]||(B[1]=H=>Q.value=H),inputId:"withoutgrouping",useGrouping:!1,fluid:"",class:"w-full m-1"},null,8,["modelValue"])]),a("div",yn,[a("label",null,d(V.$t("common.note"))+":",1),k(r(et),{type:"text",modelValue:z.value,"onUpdate:modelValue":B[2]||(B[2]=H=>z.value=H),class:"w-full m-1"},null,8,["modelValue"])]),a("div",_n,[k(r(j),{label:r(s)("common.send"),onClick:B[3]||(B[3]=H=>Z())},null,8,["label"])])]),_:1},8,["visible"])],64))}},kn={__name:"SwipeHint",props:{size:{type:String,default:"8rem"},duration:{type:Number,default:6e3},position:{type:String,default:"bottom"}},setup(e){const t=e,s=P(!0);Ze(()=>{t.duration>0&&setTimeout(()=>{s.value=!1},t.duration);const v=()=>{s.value=!1,window.removeEventListener("touchstart",v)};window.addEventListener("touchstart",v)});const p=re(()=>{let v={left:"50%",transform:"translateX(-50%)",zIndex:99999,opacity:.5,pointerEvents:"none",textAlign:"center",position:"fixed"};return t.position==="top"?v.top="15%":t.position==="center"?(v.top="50%",v.transform="translate(-50%, -50%)"):v.bottom="15%",v});return(v,l)=>s.value?(n(),u("div",{key:0,class:"swipe-hint",style:Ce(p.value)},[a("div",{class:"hand",style:Ce({width:e.size,height:e.size,backgroundImage:"url(/images/hand_finger.png)"})},null,4)],4)):T("",!0)}},$n=$e(kn,[["__scopeId","data-v-e5f3ff45"]]),xn={class:"w-full h-full flex flex-column"},Tn={style:{"overflow-x":"hidden","touch-action":"pan-y"},class:"h-full"},In={class:"fixed bottom-0 left-0 w-full h-3rem bg-primary-reverse p-3"},Cn={class:"h-full flex align-items-center justify-content-between w-full"},Dn={class:"m-2"},Sn={class:"m-2"},Nn={style:{"max-height":"60vh","overflow-y":"auto","padding-bottom":"60px"}},Pn={class:"flex flex-column border-bottom-1"},Bn={key:0,class:"flex justify-content-between"},An={class:"flex flex-column"},Ln={class:"font-bold"},zn={class:"text-right"},qn={key:1,class:"flex justify-content-between"},On={class:"flex flex-column"},En={class:"font-bold"},Rn={class:"text-right"},Vn={key:0},Mn={key:1,class:"flex flex-column"},Fn={class:"flex flex-column"},jn={class:"font-bold"},Kn={class:"text-right"},Wn={class:"total-footer bg-primary-reverse"},Je=2,Ge="order_time_key",Hn={__name:"HomePage",setup(e){const t=Xe(),s=$t(),{t:p}=de(),{locale:v}=de(),l=P(0),w=P(!1),R=P([""]),S=P(0),F=te.cartItemCount,W=P(!1),Q=P([]),z=P(0),D=P({}),Z=P(!1),M=se.dishDatas,V=P($.orderMenuTab),B=P(null),H=P(null),ne=P([]),oe=P([]),_=P([]),q=()=>{S.value<R.value.length-1&&(S.value++,pe(),N(S.value))},h=()=>{S.value>0&&(S.value--,pe(),N(S.value))};function ee(o){F.value=F.value+o}const C=(o,c,g,A)=>{$.rateDish(o,c,g),A&&ae.show_success(p("notification.rating_submitted"))},m=(o,c,g)=>{if(D.value.name=="XIAOXIONG® RAMEN"&&o.id===1){const A=o.dishes[c];let x;A.dishid==47?g?x=b(3,!0,1):x=b(3,!1,1):x=b(3,!0,1),x!==void 0&&I(x)}if(D.value.name=="Menu Almoço"&&o.id===3){const A=o.dishes[c];let x;[1427,41].includes(A.dishid)?g?x=b(4,!0,0):x=b(4,!1,0):x=b(4,!0,0),x!==void 0&&I(x)}};function b(o,c,g){if(D.value={...D.value,types:D.value.types.map(A=>A.id===o?{...A,enable:c,minQuantity:c?g:0}:A)},c===!1)return o}function I(o){!D.value||!Array.isArray(D.value.types)||(D.value={...D.value,types:D.value.types.map(c=>c.id===o?{...c,dishes:c.dishes.map(g=>({...g,selected:!1}))}:c)})}function N(o){let c=$.getOrderMenuTab()[o];if($.customDishAPI.customDishes.value.map(L=>L.name).includes(c)?(Z.value=!0,D.value=$.customDishAPI.customDishes.value.find(L=>L.name==c)):Z.value=!1,$.getMenu().length==0){console.log("exit");return}let x=M.value[o].mainDishes;se.showDishList(x)}const i=()=>{$.refreshTableFromServer(),$.getTableTotalAmount(z),W.value=!0},y=(o,c,g)=>{console.log("update rating changed");const A=$.formatedMenu.value;for(const x of A)for(const L of x.dishes){if(L.dish.id===o){L.dish.likes=c,L.dish.rates=g,console.log("updated inside formatedMenu");return}for(const O of L.subItems)if(O.id===o){O.likes=c,O.rates=g,console.log("updated inside subItem");return}}},f=o=>{let c=o.id;o.org_id&&(c=o.org_id);for(let g=0;g<M.value.length;g++)if(M.value[g].id==c)for(const A in o){let x=A;A.startsWith("note")&&(x=x.replace("note","description")),M.value[g][x]=o[A]}};function J(){return new Promise(o=>{let c=()=>{const g=$.formatedMenu.value;g.length>0?o(g):setTimeout(c,200)};c()})}function X(){return new Promise(o=>{let c=()=>{const g=$.getOrderMenuTab();g.length>0?o(g):setTimeout(c,200)};c()})}const ce=re(()=>o=>{const c=$.dictinaryAPI.dictinary.value[o];return c?c[`text_${v.value.toLowerCase()}`]:o});_t([()=>$.formatedMenu.value,()=>v.value,()=>$.orderMenuTab],([o,c])=>{if(!o||o.length===0){_.value=[];return}const g=$.orderMenuTab,A=o.map(x=>({...x,mainDishes:x.dishes.map(L=>{const O=L.dish,ve={...O,defaultName:O.name,name:le(O,"name",c),note:le(O,"note",c),subname:le(O,"subname",c),quantity:0},Be=L.subItems.map(Re=>{const Ae=Re;return{...Re,defaultName:O.name,name:le(Ae,"name",c),note:le(Ae,"note",c),subname:le(Ae,"subname",c),quantity:0}});return{...L,dish:ve,subItems:Be}})}));_.value=A,M.value=_.value,R.value=$.orderMenuTab,V.value=g.map(x=>{const L=$.dictinaryAPI.dictinary.value[x];return L?L[`text_${v.value.toLowerCase()}`]:x}),console.log("languagedMenu updated via watch:",_.value)},{immediate:!0,deep:!0});function le(o,c,g){return o?g==="en"?o[`${c}_en`]||o[c]:g==="zh"&&o[`${c}_cn`]||o[c]:""}async function Pe(){await J();const o=await X();let c=$.isTakeaway();$.onMenuItemChanged=f,$.onRatingChanged=y;let g=0;if(!c){const A=localStorage.getItem("cartDish_custom");if(A&&A!=="undefined")try{te.cartDishs.value=JSON.parse(A),g+=te.cartDishs.value.length}catch(L){console.error("解析自定义菜失败:",L),te.cartDishs.value=[]}const x=localStorage.getItem("cartDish_normal");if(x&&x!=="undefined")try{const L=JSON.parse(x);se.updateDishDataQty(L);const O=L.reduce((ve,Be)=>ve+(Be.quantity||0),0);g+=O}catch(L){console.error("解析普通菜失败:",L)}te.cartItemCount.value=g}for(let A=0;A<o.length;A++){const x=A;Q.value.push({label:ce.value(o[A]),command:()=>{qe(x),pe()}})}l.value++}const pe=()=>{kt(()=>{const o=document.querySelector(".p-tablist-viewport"),c=document.querySelector(".p-tab.p-tab-active");if(o&&c){const g=c.offsetLeft-o.offsetWidth/2+c.offsetWidth/2;o.scrollTo({left:g,behavior:"smooth"})}})},qe=o=>{N(o),S.value=o,pe()},lt=()=>{var o=se.getAllIncrementedDish();H.value.showDishList(o)};function xe(){return $.getTable()}$.params.port,B.value=$.table.value.order;function rt(o){var c=p("notification.too_fast",{remainTime:o});ae.show_warn(c)}const ct=o=>{const c=[];for(let O=0;O<te.cartDishs.value.length;O++){var g=te.cartDishs.value[O];c.push({dishid:g.dishid,name:g.name,quantity:g.count,notes:g.notes,limit:g.limit,price:g.dis_price?g.dis_price:g.price,dishNote:g.dishNote,category:g.category})}const A=se.getAllIncrementedDish();for(let O=0;O<A.length;O++){var g=A[O];console.log("id cartDishs ;  ; : ",g),g.quantity>0&&c.push({dishid:g.id,name:g.defaultName,quantity:g.quantity,limit:g.limit,price:g.dis_price?g.dis_price:g.price,dishNote:g.dishNote})}if(c.length===0)return ae.show_warn(p("notification.select_at_least_one")),!1;console.log("cart item:",c);const x=JSON.parse(localStorage.getItem(Ge)||"{}"),L=Date.now();if(!x.startTime||L-x.startTime>Je*1e3)x.startTime=L;else{const O=Je-parseInt((L-x.startTime)/1e3);rt(O);return}return localStorage.setItem(Ge,JSON.stringify(x)),w.value=!0,$.submit_order({name:o.name,note:o.note,table:xe(),items:c}),!0};function ut(){const o=localStorage.getItem("language");o&&(v.value=o)}function Oe(){for(let o=0;o<M.value.length;o++){const c=M.value[o];c.quantity=0}w.value=!1,F.value=0,te.cartDishs.value.length=0}Ze(async()=>{ut(),await Pe(),N(S.value),$.clear_order_data=()=>{Oe()},$.setOnOrderConfirmed(o=>{console.log("setOnOrderConfirmed..."),Oe();const c=o;ae.show_success(p("notification.order_submitted",{id:c}))}),$.setOnShowError(o=>{w.value=!1,ae.show_error(o)})});function dt(){localStorage.removeItem("login_time");const o=s.query.table;o?t.push({path:"/",query:{table:o}}):t.push({path:"/takeReserve"})}function Ee(){const o=se.getAllIncrementedDish();localStorage.setItem("cartDish_normal",JSON.stringify(o));const c=te.cartDishs.value;localStorage.setItem("cartDish_custom",JSON.stringify(c))}return wt(()=>{Ee()}),window.addEventListener("beforeunload",o=>{$.cleanup(),Ee()}),(o,c)=>{const g=De("touch"),A=De("touch-options");return n(),u(U,null,[a("div",xn,[(n(),G(wn,{key:l.value,types:V.value,typeIndex:S.value,tabItems:Q.value,tableId:xe(),onClickType:qe,onSwitchToWelcome:dt},null,8,["types","typeIndex","tabItems","tableId"])),c[2]||(c[2]=a("div",{class:"pb-8"},null,-1)),c[3]||(c[3]=a("div",{class:"pb-7 sm:pb-7 md:pb-7 lg:pb-7"},null,-1)),k($n,{duration:3e3,position:"center",size:"3rem"}),ge((n(),u("div",Tn,[Z.value?(n(),G(js,{key:0,currentCustomDish:D.value,onTypeClick:m},null,8,["currentCustomDish"])):(n(),G(za,{key:1,updateCartItemCount:ee,rateDish:C,likedItemsRef:ne.value,dislikedItemsRef:oe.value},null,8,["likedItemsRef","dislikedItemsRef"]))])),[[g,q,"swipe",{left:!0,passive:!0}],[g,h,"swipe",{right:!0,passive:!0}],[A,{swipeTolerance:100}]]),c[4]||(c[4]=a("div",{class:"pb-6"},null,-1)),a("div",In,[a("div",Cn,[a("div",Dn,[xe()?(n(),G(r(j),{key:0,label:o.$t("common.orders"),icon:"pi pi-list",class:"p-button-secondary",onClick:i},null,8,["label"])):T("",!0)]),a("div",Sn,[k(r(st),{value:r(F),severity:"danger",onClick:lt},{default:E(()=>c[1]||(c[1]=[a("i",{class:"pi pi-shopping-cart",style:{"font-size":"2rem"}},null,-1)])),_:1,__:[1]},8,["value"])])])])]),k(ds,{ref_key:"cartRef",ref:H,updateCartItemCount:ee,checkout:ct,isTakeaway:!xe()},null,8,["isTakeaway"]),k(r(ye),{visible:W.value,"onUpdate:visible":c[0]||(c[0]=x=>W.value=x),header:o.$t("common.completedOrders"),modal:"",style:{width:"80vw","max-width":"700px"}},{default:E(()=>{var x,L;return[a("div",Nn,[a("div",Pn,[(x=z.value.adultPrice)!=null&&x.quantity&&z.value.adultPrice.quantity!=0?(n(),u("div",Bn,[a("div",An,[a("span",Ln,d(o.$t("common.adult")),1),a("small",null,d(o.$t("common.quantity"))+": "+d(z.value.adultPrice.quantity),1)]),a("div",zn,[a("span",null,"€"+d((Number(z.value.adultPrice.price)*z.value.adultPrice.quantity).toFixed(2)),1)])])):T("",!0),(L=z.value.childrenPrice)!=null&&L.quantity&&z.value.childrenPrice.quantity!=0?(n(),u("div",qn,[a("div",On,[a("span",En,d(o.$t("common.children")),1),a("small",null,d(o.$t("common.quantity"))+": "+d(z.value.childrenPrice.quantity),1)]),a("div",Rn,[a("span",null,"€"+d((Number(z.value.childrenPrice.price)*z.value.childrenPrice.quantity).toFixed(2)),1)])])):T("",!0)]),r($).table.value.order.length===0?(n(),u("div",Vn,d(o.$t("common.noOrders")),1)):(n(),u("div",Mn,[(n(!0),u(U,null,Y(r($).table.value.order,(O,ve)=>(n(),u("div",{key:ve,class:"flex justify-content-between border-bottom-1 pb-2"},[a("div",Fn,[a("span",jn,d(r($).getDishName(O)),1),a("small",null,d(o.$t("common.quantity"))+": "+d(O.quantity),1)]),a("div",Kn,[a("span",null,"€"+d((O.price*O.quantity).toFixed(2)),1)])]))),128))]))]),a("div",Wn,d(o.$t("common.total"))+": €"+d(z.value.total),1)]}),_:1},8,["visible","header"])],64)}}},so=$e(Hn,[["__scopeId","data-v-293baa57"]]);export{so as default};
