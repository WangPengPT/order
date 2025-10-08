import{v as Ct,B as dt,x as yt,y as St,f as c,p as o,q as X,i as $,z as ct,A as K,C as vt,h as a,t as d,n as lt,r as N,g as w,F as W,l as Z,k as l,j as z,D as xt,a as x,u as ut,s as ht,m as et,e as Ut,E as oe,G as ie,c as rt,w as le,R as Qt,H as Bt,I as re,J as At,K as ce,L as $t,M as ue,N as qt,O as Tt,P as It,Q as de,S as pe,T as kt,o as Jt,b as fe,U as ve,d as he}from"./index-B3WMBE3W.js";import{s as bt,a as Gt}from"./index-CMUUKNOi.js";import{s as F,a as Xt}from"./index-BHR5hxdQ.js";import{D as st,c as tt,s as Ot}from"./index-C-_ZDzEa.js";import{_ as _t,b as Et,c as Rt,a as Vt,s as jt}from"./_plugin-vue_export-helper-DUOsYPca.js";import{s as be}from"./index-KazuyJgy.js";import{s as Ft,a as me}from"./index-CCtlz8gF.js";import{s as ge}from"./index-Cnop4e_i.js";import{s as Mt}from"./index-CCYDb8SJ.js";import{s as ye}from"./index-DbrYiV_u.js";var _e=Ct`
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
`,we={root:function(e){var s=e.props;return["p-tag p-component",{"p-tag-info":s.severity==="info","p-tag-success":s.severity==="success","p-tag-warn":s.severity==="warn","p-tag-danger":s.severity==="danger","p-tag-secondary":s.severity==="secondary","p-tag-contrast":s.severity==="contrast","p-tag-rounded":s.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},$e=dt.extend({name:"tag",style:_e,classes:we}),ke={name:"BaseTag",extends:yt,props:{value:null,severity:null,rounded:Boolean,icon:String},style:$e,provide:function(){return{$pcTag:this,$parentInstance:this}}};function mt(t){"@babel/helpers - typeof";return mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},mt(t)}function xe(t,e,s){return(e=Te(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Te(t){var e=Ie(t,"string");return mt(e)=="symbol"?e:e+""}function Ie(t,e){if(mt(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var f=s.call(t,e);if(mt(f)!="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ft={name:"Tag",extends:ke,inheritAttrs:!1,computed:{dataP:function(){return St(xe({rounded:this.rounded},this.severity,this.severity))}}},Ce=["data-p"];function Se(t,e,s,f,p,n){return o(),c("span",K({class:t.cx("root"),"data-p":n.dataP},t.ptmi("root")),[t.$slots.icon?(o(),X(vt(t.$slots.icon),K({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(o(),c("span",K({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):$("",!0),t.value!=null||t.$slots.default?ct(t.$slots,"default",{key:2},function(){return[a("span",K({class:t.cx("label")},t.ptm("label")),d(t.value),17)]}):$("",!0)],16,Ce)}ft.render=Se;var De=Ct`
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
`,Ne={root:function(e){var s=e.props;return["p-avatar p-component",{"p-avatar-image":s.image!=null,"p-avatar-circle":s.shape==="circle","p-avatar-lg":s.size==="large","p-avatar-xl":s.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Pe=dt.extend({name:"avatar",style:De,classes:Ne}),Be={name:"BaseAvatar",extends:yt,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Pe,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function gt(t){"@babel/helpers - typeof";return gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gt(t)}function Kt(t,e,s){return(e=Ae(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Ae(t){var e=Le(t,"string");return gt(e)=="symbol"?e:e+""}function Le(t,e){if(gt(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var f=s.call(t,e);if(gt(f)!="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Yt={name:"Avatar",extends:Be,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}},computed:{dataP:function(){return St(Kt(Kt({},this.shape,this.shape),this.size,this.size))}}},ze=["aria-labelledby","aria-label","data-p"],qe=["data-p"],Oe=["data-p"],Ee=["src","alt","data-p"];function Re(t,e,s,f,p,n){return o(),c("div",K({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root"),{"data-p":n.dataP}),[ct(t.$slots,"default",{},function(){return[t.label?(o(),c("span",K({key:0,class:t.cx("label")},t.ptm("label"),{"data-p":n.dataP}),d(t.label),17,qe)):t.$slots.icon?(o(),X(vt(t.$slots.icon),{key:1,class:lt(t.cx("icon"))},null,8,["class"])):t.icon?(o(),c("span",K({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon"),{"data-p":n.dataP}),null,16,Oe)):t.image?(o(),c("img",K({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return n.onError&&n.onError.apply(n,arguments)})},t.ptm("image"),{"data-p":n.dataP}),null,16,Ee)):$("",!0)]})],16,ze)}Yt.render=Re;const Ve={class:"grid"},je={class:"flex flex-column"},Fe=["onClick"],Me={class:"p-1 flex-shrink-0 w-7rem h-7rem flex align-items-center justify-content-center overflow-hidden"},Ke=["src","alt"],We={class:"flex flex-column justify-content-center"},He={class:"font-bold"},Ue={class:"flex flex-wrap gap-2"},Qe={class:"flex gap-1 align-items-center"},Je={class:"text-color-secondary line2"},Ge={key:0,class:"text-xl font-bold text-primary"},Xe={key:1,class:"flex align-items-center gap-1"},Ye={class:"text-l font-bold text-color-secondary"},Ze={class:"text-sm line-through text-500"},ta={key:2,class:"flex gap-2 mr-2",id:"card-quantity"},ea={class:"w-2rem text-xl text-center"},aa={key:3,class:"flex gap-2 mr-2"},sa={key:0,class:"m-2 mt-0"},na={class:"flex flex-row justify-content-between align-content-center"},oa={class:"flex flex-column"},ia={class:"text-l font-bold"},la={key:0,class:"text-l font-bold text-color-secondary"},ra={key:1,class:"flex align-items-center gap-1"},ca={class:"text-l font-bold text-color-secondary"},ua={class:"text-sm line-through text-500"},da={key:0,class:"flex ml-2 mr-2"},pa={class:"w-2rem text-xl text-center"},fa={key:1,class:"flex gap-2 mr-3 pt-2 pb-2"},va={class:"max-w-5rem flex align-items-center"},ha={class:"font-bold whitespace-nowrap"},ba={class:"mb-2 flex justify-content-center"},ma={class:"font-bold text-center"},ga={class:"mb-2"},ya={class:"text-color-secondary m-0 line-height-3 line2 text-center"},_a={class:"mb-2"},wa={class:"flex justify-content-center"},$a=["src","alt"],ka={class:"flex align-items-center gap-2"},xa=["src","alt"],Ta={class:"flex align-items-center gap-3 ml-auto"},Ia={__name:"DishList",props:{updateCartItemCount:{type:Function,required:!0},rateDish:{type:Function,required:!0},likedItemsRef:Array,dislikedItemsRef:Array},setup(t){const e=st.dishes;let s={rated:!1,id:null,like:0,rate:0};function f(){var h;const g=x.currentPage.value,B=(h=g==null?void 0:g.data)==null?void 0:h.logoPath;return B?x.pathFormated(B):"/images/logo_logo.png"}const p=g=>{P.updateCartItemCount(g)},n=g=>{P.updateCartItemCount(-1)},C=g=>st.dishDatas.value[g]?st.dishDatas.value[g].quantity:0,k=g=>{if(!R())return!1;const B=g.quantity;let h=3;if(g.price>0&&(h=9),g.limit){const at=g.id,T=R(),v=(T.peopleType.adults+T.peopleType.children)*g.limit,m=T.order.find(D=>D.dishid==at);let I=0;if(g.subitem)for(const D of g.subitem){I+=C(D);const i=T.order.find(b=>b.dishid==E(D));i&&(I+=i.quantity)}else I+=g.quantity,m&&(I+=m.quantity);return B>=h||v&&I>=v}return B>=h},E=g=>st.dishDatas.value[g]?st.dishDatas.value[g].id:0,R=()=>x.getTableValue();function j(){P.rateDish(s.id,s.like,s.rate,s.rated),s.id=null,s.like=0,s.rate=0,s.rated=!1}const q=g=>{const B=P.likedItemsRef.indexOf(g);if(s.id=g.id,B!==-1)P.likedItemsRef.splice(B,1),s.like+=-1,s.rate+=-1,s.rated=!1;else{s.rated=!0,P.likedItemsRef.push(g);const h=P.dislikedItemsRef.indexOf(g);h!==-1?(P.dislikedItemsRef.splice(h,1),s.like+=1):(s.like+=1,s.rate+=1)}},H=g=>{const B=P.dislikedItemsRef.indexOf(g);if(s.id=g.id,B!==-1)P.dislikedItemsRef.splice(B,1),s.rate+=-1,s.rated=!1;else{s.rated=!0,P.dislikedItemsRef.push(g);const h=P.likedItemsRef.indexOf(g);h!==-1?(P.likedItemsRef.splice(h,1),s.like+=-1):s.rate+=1}},P=t,Q=N(!1),J=N({}),O=g=>{Q.value=!0,J.value=g},S=g=>{g.target.src="/images/default.png"};function U(g){ot(g.target,300)}function nt(g){ot(g.target,110)}function ot(g,B){const h=g.naturalWidth,at=g.naturalHeight,T=Math.min(h,B),v=T/h,m=at*v;g.style.width=`${T}px`,g.style.height=`${m}px`}return(g,B)=>(o(),c(W,null,[a("div",Ve,[(o(!0),c(W,null,Z(l(e),(h,at)=>(o(),c("div",{key:at,class:"col-12 sm:col-12 md:col-6 lg:col-4 border-round surface-section shadow-1 p-2"},[a("div",je,[a("div",{class:lt(["flex flex-row",h.subItems.length!==0?"flex-grow-1":""]),onClick:T=>O(h.dish)},[a("div",Me,[a("img",{src:h.dish.image||"/images/default.png",alt:h.dish.name,class:"w-full h-full",style:{"object-fit":"cover"},onError:S,onLoad:nt},null,40,Ke)]),a("div",We,[a("div",He,d(h.dish.name),1),a("div",null,[a("div",Ue,[a("div",Qe,[(o(),c(W,null,Z(5,T=>a("i",{key:T,class:lt(["pi invert-star",T<=Math.floor(h.dish.likes/h.dish.rates*5)?"pi-star-fill":T-.5<=h.dish.likes/h.dish.rates*5?"pi-star-half-fill":"pi-star"]),style:{color:"black"}},null,2)),64)),a("p",null,"("+d(h.dish.rates?h.dish.rates:0)+")",1)])])]),a("div",null,[a("p",Je,d(h.dish.note),1)])])],10,Fe),h.subItems.length==0?(o(),c("div",{key:0,class:lt(["flex ml-2 mr-2 mb-2",Number(h.dish.price)>0?"justify-content-between":"justify-content-end"])},[!h.dish.discount&&Number(h.dish.price)>0?(o(),c("span",Ge,"€"+d(h.dish.price),1)):$("",!0),h.dish.discount?(o(),c("div",Xe,[a("span",Ye,"€"+d(h.dish.dis_price),1),a("span",Ze,"€"+d(h.dish.price),1),w(l(ft),{severity:"danger",value:"-"+h.dish.discount+"%"},null,8,["value"])])):$("",!0),h.dish.soldout?$("",!0):(o(),c("div",ta,[w(l(F),{icon:"pi pi-minus",rounded:"",disabled:h.dish.quantity<=0,onClick:T=>{h.dish.quantity--,n()},class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),a("span",ea,d(h.dish.quantity),1),w(l(F),{icon:"pi pi-plus",rounded:"",disabled:k(h.dish),onClick:T=>{h.dish.quantity++,p(1)},class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])),h.dish.soldout?(o(),c("div",aa,[w(l(ft),{severity:"danger",value:g.$t("common.soldout")},null,8,["value"])])):$("",!0)],2)):$("",!0),h.subItems.length!==0?(o(!0),c(W,{key:1},Z(h.subItems,(T,v)=>(o(),c(W,{key:"index"},[T.disable?$("",!0):(o(),c("div",sa,[a("div",na,[a("div",oa,[a("span",ia,d(T.subname),1),!T.discount&&T.price!=="0.00"&&T.price!=="0"?(o(),c("span",la,"€"+d(T.price),1)):$("",!0),T.discount?(o(),c("div",ra,[a("span",ca,"€"+d(T.dis_price),1),a("span",ua,"€"+d(T.price),1),w(l(ft),{severity:"danger",value:"-"+T.discount+"%"},null,8,["value"])])):$("",!0)]),T.soldout?$("",!0):(o(),c("div",da,[w(l(F),{icon:"pi pi-minus",rounded:"",disabled:T.quantity<=0,onClick:m=>{T.quantity--,n()},class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),a("span",pa,d(T.quantity),1),w(l(F),{icon:"pi pi-plus",rounded:"",onClick:m=>{T.quantity++,p(1)},class:"w-2rem h-2rem",disabled:k(T)},null,8,["onClick","disabled"])])),T.soldout?(o(),c("div",fa,[w(l(ft),{severity:"danger",value:g.$t("common.soldout")},null,8,["value"])])):$("",!0)])]))],64))),128)):$("",!0)])]))),128))]),w(l(bt),{visible:Q.value,"onUpdate:visible":B[2]||(B[2]=h=>Q.value=h),modal:"",header:"dish",style:xt([{width:"23rem"},{width:"80vw","max-width":"700px"}]),onHide:B[3]||(B[3]=h=>j())},{header:z(()=>[a("div",va,[w(l(Yt),{image:f(),class:"w-full"},null,8,["image"])]),a("span",ha,d(g.$t("common.details")),1)]),default:z(()=>[a("div",ba,[a("span",ma,d(J.value.name),1)]),a("div",ga,[a("span",ya,d(J.value.note),1)]),a("div",_a,[a("div",wa,[a("img",{class:"w-full h-auto object-contain",src:J.value.image,alt:J.value.name,onError:S,onLoad:U},null,40,$a)])]),a("div",ka,[(o(!0),c(W,null,Z(J.value.allergies,(h,at)=>(o(),c("img",{src:"images/"+h+".png",alt:h,class:"w-2rem h-2rem border-round flex-shrink-0",style:{"object-fit":"cover","min-width":"2rem"}},null,8,xa))),256)),a("div",Ta,[a("button",{onClick:B[0]||(B[0]=h=>q(J.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[a("i",{class:lt(["pi pi-thumbs-up text-xl",P.likedItemsRef.includes(J.value)?"text-green-500":"text-gray-400"])},null,2)]),a("button",{onClick:B[1]||(B[1]=h=>H(J.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[a("i",{class:lt(["pi pi-thumbs-down text-xl",P.dislikedItemsRef.includes(J.value)?"text-red-500":"text-gray-400"])},null,2)])])])]),_:1},8,["visible"])],64))}},Ca=_t(Ia,[["__scopeId","data-v-a6c2d08d"]]),Sa={key:0,class:"text-3xl font-bold"},Da={class:"flex flex-column gap-3 p-1"},Na={key:0,class:"flex flex-column gap-1"},Pa={key:0,class:"m-0"},Ba={key:0,class:"m-0"},Aa={class:"flex justify-content-between gap-4 mt-1"},La={class:"flex align-items-center gap-2"},za=["src","alt"],qa={class:"flex-grow-1 min-width-0 max-w-18rem"},Oa={class:"flex flex-column gap-1"},Ea={class:"flex align-items-center gap-2"},Ra={class:"text-xl font-bold line1 whitespace-nowrap overflow-hidden text-overflow-ellipsis",style:{"max-width":"20rem"}},Va={class:"flex align-items-end gap-1"},ja={key:0,class:"text-xl font-bold text-primary"},Fa={key:1,class:"text-xl font-bold text-primary"},Ma={key:2,class:"text-sm text-color-secondary"},Ka={key:0,class:"text-xs text-primary"},Wa={class:"flex-shrink-0 flex flex-wrap justify-content-between align-items-center gap-1"},Ha={class:"flex flex-wrap justify-content-between align-content-center"},Ua={class:"flex align-items-center gap-1"},Qa={class:"w-2rem text-center"},Ja={key:1,class:"flex flex-column gap-2 mt-2"},Ga={for:"in_label"},Xa={for:"in_label"},Ya={class:"bottom-0 left-0 mt-2"},Za={class:"text-2xl font-bold"},ts={class:"text-2xl font-bold text-primary pl-2"},es={class:"flex justify-content-between"},as={__name:"Cart",props:{updateCartItemCount:{type:Function,required:!0},checkout:{type:Function,required:!0},isTakeaway:Boolean},setup(t,{expose:e}){const{locale:s}=ut(),f=Ut(),{t:p}=ut(),n=tt.cartDishs;x.freeCounts;const C=N([]),k=N(),E=N(),R=N(!1),j=N(!1),q=N(!0),H=N(""),P=N("");function Q(i,b,u){let M="";const Y=s.value,it=x.customDishAPI.getCustomDishByName(i);for(const Dt of u)M=M+it.types[b].dishes.find(Nt=>Nt.dishid===Dt.id)[`name_${Y}`]+"/";return M}function J(i,b){const u=s.value;return x.customDishAPI.getCustomDishByName(i).types[b][`typeName_${u}`]}const O=(i,b)=>{const u=C.value[i].quantity+b;u>=0&&(C.value[i].quantity=u,ot.updateCartItemCount(b))};function S(i){i&&k.value&&(k.value.dishNote=E.value?E.value:void 0),j.value=!1}function U(){E.value&&(E.value=void 0),k.value&&(k.value=void 0)}function nt(i){k.value=i,E.value=k.value.dishNote?k.value.dishNote:void 0,j.value=!0}const ot=t;e({showDishList:i=>{R.value=!0,C.value.length=0;for(let b=0;b<i.length;b++)C.value.push(i[b]);q.value=C.value.length==0&&n.length==0}});function B(i){tt.removeItem(i)}function h(){ot.isTakeaway?at():T()}function at(){const i=[];n.value.forEach(b=>{i.push(b)}),C.value.forEach(b=>{b.quantity>0&&i.push(b)}),i.length<=0?et.show_warn(p("notification.select_at_least_one")):(R.value=!1,f.push({path:"/paymentPage"}))}function T(){ot.checkout({name:H.value,note:P.value})&&(R.value=!1),n.value.forEach(i=>{i.dishNote=void 0}),C.value.forEach(i=>{i.dishNote=void 0}),P.value="",st.cleanDishDataQty(),localStorage.removeItem("order_cartDishs"),localStorage.removeItem("order_dishDatas")}function v(i){return i.subname!=""&&i.subname!="Default Title"?i.name+" "+i.subname:i.name}function m(){let i=0;return n.value.forEach(b=>{i+=b.dis_price?b.dis_price*b.count:b.price*b.count}),C.value.forEach(b=>{i+=b.dis_price?b.dis_price*b.quantity:b.price*b.quantity}),"€"+i.toFixed(2)}const I=i=>{i.target.src="/images/default.png"},D=i=>{const b=i.quantity;let u=3;return i.price>0&&(u=9),b>=u};return(i,b)=>(o(),c(W,null,[w(l(bt),{class:"bg-primary-reverse text-sm md:text-lg lg:text-xl",visible:R.value,"onUpdate:visible":b[2]||(b[2]=u=>R.value=u),modal:"",header:i.$t("common.cart"),style:xt([{backgroundColor:"rgba(250, 250, 250, 1)",height:"100%",minWidth:"24rem"},{width:"80vw","max-width":"700px"}]),dismissableMask:!0},{footer:z(()=>[a("div",Ya,[a("span",Za,d(i.$t("common.total"))+": ",1),a("span",ts,d(m()),1),w(l(F),{icon:t.isTakeaway?"pi pi-wallet":"pi pi-plus",class:"p-button-success p-button-rounded ml-3",onClick:h,label:t.isTakeaway?l(p)("common.pay"):l(p)("common.send")},null,8,["icon","label"])])]),default:z(()=>[q.value?(o(),c("h2",Sa,"Cart is empty.")):$("",!0),a("div",Da,[(o(!0),c(W,null,Z(l(n),(u,M)=>(o(),X(l(be),{style:{overflow:"hidden"},key:M},{title:z(()=>[ht(d(i.$t(`common.${u.name.replace(/[^a-zA-Z0-9\s]/g,"").toLowerCase().replace(/\s+/g,"")}`)),1)]),subtitle:z(()=>[ht(d(i.$t("common.price"))+" : "+d(u.price)+"€",1)]),content:z(()=>[l(x).customDishAPI.customDishes.value.find(Y=>Y.name==u.name)?(o(),c("div",Na,[(o(!0),c(W,null,Z(u.notesAndId,(Y,it)=>(o(),c("div",null,[u.notesAndId[it].length!==0?(o(),c("span",Pa,d(J(u.name,it))+": "+d(Q(u.name,it,Y)),1)):$("",!0)]))),256)),a("div",null,[u.dishNote?(o(),c("span",Ba,d(i.$t("common.note"))+": "+d(u.dishNote),1)):$("",!0)])])):$("",!0)]),footer:z(()=>[a("div",Aa,[t.isTakeaway?$("",!0):(o(),X(l(F),{key:0,label:l(p)("common.edit")+" "+l(p)("common.note"),severity:"contrast",onClick:Y=>nt(u)},null,8,["label","onClick"])),w(l(F),{label:l(p)("common.remove"),severity:"danger",onClick:Y=>B(u)},null,8,["label","onClick"])])]),_:2},1024))),128)),(o(!0),c(W,null,Z(C.value,(u,M)=>(o(),c("div",{key:M,class:"p-2 border-round shadow-1 transition-all transition-duration-200 hover:shadow-3 flex flex-column gap-1"},[a("div",La,[a("img",{src:u.image,alt:u.name,class:"w-4rem h-4rem border-round flex-shrink-0",onError:I,style:{"object-fit":"cover","min-width":"4rem"}},null,40,za),a("div",qa,[a("div",Oa,[a("div",Ea,[a("span",Ra,d(v(u)),1)])]),a("div",Va,[u.dis_price?(o(),c("span",ja,"€"+d(u.dis_price),1)):$("",!0),!u.dis_price&&u.price>0?(o(),c("span",Fa,"€"+d(u.price),1)):$("",!0),u.price>0?(o(),c("span",Ma,"/uni.")):$("",!0)])])]),a("div",null,[u.dishNote?(o(),c("span",Ka,d(l(p)("common.note")+": "+u.dishNote),1)):$("",!0)]),a("div",Wa,[a("div",Ha,[t.isTakeaway?$("",!0):(o(),X(l(F),{key:0,label:l(p)("common.edit")+" "+l(p)("common.note"),severity:"contrast",class:"w-3.5rem h-2rem",onClick:Y=>nt(u)},null,8,["label","onClick"]))]),a("div",Ua,[w(l(F),{icon:"pi pi-minus",rounded:"",disabled:u.quantity<=0,onClick:Y=>O(M,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),a("span",Qa,d(u.quantity),1),w(l(F),{icon:"pi pi-plus",rounded:"",disabled:D(u),onClick:Y=>O(M,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])])]))),128))]),t.isTakeaway?$("",!0):(o(),c("div",Ja,[w(l(Ft),{variant:"in"},{default:z(()=>[w(l(Gt),{id:"in_label",modelValue:H.value,"onUpdate:modelValue":b[0]||(b[0]=u=>H.value=u),variant:"filled",maxlength:"20"},null,8,["modelValue"]),a("label",Ga,d(l(p)("common.name")),1)]),_:1}),w(l(Ft),{variant:"in"},{default:z(()=>[w(l(Ot),{id:"in_label",class:"min-w-full",rows:"5",modelValue:P.value,"onUpdate:modelValue":b[1]||(b[1]=u=>P.value=u),variant:"filled",maxlength:"200"},null,8,["modelValue"]),a("label",Xa,d(l(p)("common.observation")),1)]),_:1})]))]),_:1},8,["visible","header"]),w(l(bt),{visible:j.value,"onUpdate:visible":b[6]||(b[6]=u=>j.value=u),header:l(p)("common.note"),onHide:b[7]||(b[7]=u=>U()),modal:"",dismissableMask:!0},{default:z(()=>[w(l(Ot),{modelValue:E.value,"onUpdate:modelValue":b[3]||(b[3]=u=>E.value=u),rows:"5",cols:"30",placeholder:l(p)("common.edit")+" "+l(p)("common.note")+"...",maxlength:"100"},null,8,["modelValue","placeholder"]),a("div",es,[w(l(F),{label:l(p)("common.cancel"),severity:"danger",onClick:b[4]||(b[4]=u=>S(!1))},null,8,["label"]),w(l(F),{label:l(p)("common.save"),severity:"primary",size:"sm",onClick:b[5]||(b[5]=u=>S(!0))},null,8,["label"])])]),_:1},8,["visible","header"])],64))}},ss=_t(as,[["__scopeId","data-v-15eab6ff"]]);var ns=Ct`
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
`,os={root:"p-overlaybadge"},is=dt.extend({name:"overlaybadge",style:ns,classes:os}),ls={name:"OverlayBadge",extends:Xt,style:is,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},Zt={name:"OverlayBadge",extends:ls,inheritAttrs:!1,components:{Badge:Xt}};function rs(t,e,s,f,p,n){var C=oe("Badge");return o(),c("div",K({class:t.cx("root")},t.ptmi("root")),[ct(t.$slots,"default"),w(C,K(t.$props,{pt:t.ptm("pcBadge")}),null,16,["pt"])],16)}Zt.render=rs;const cs={class:"m-3"},us={class:"flex flex-column gap-2"},ds={class:"w-full flex justify-content-center"},ps={key:0,class:"max-w-19rem"},fs=["src"],vs={style:{width:"300px",height:"300px",background:"url(/boxImage/box.png)"}},hs={key:0,class:"flex align-items-center justify-content-center text-4xl font-bold text-white w-full h-full"},bs={key:1,class:"grid m-0 p-2"},ms=["onClick"],gs={class:"flex align-items-center justify-content-center font-bold m-0 p-0",style:{width:"94px",height:"94px"}},ys=["src"],_s={class:"flex flex-wrap justify-content-between align-items-center m-1"},ws={class:"flex gap-1 align-items-center"},$s={key:0},ks={class:"font-bold mb-2"},xs={key:1,class:"flex justify-content-between gap-2 mt-3"},Ts={class:"font-bold mb-2"},Is={class:"flex mr-2"},Cs={class:"w-3rem text-xl text-center"},Ss={class:"font-bold block mb-2"},Ds={class:"flex flex-wrap"},Ns={key:2,class:"flex flex-wrap gap-2 mt-3"},Ps={class:"font-bold block mb-2"},Bs={class:"font-bold block mb-2 text-center"},As={class:"flex flex-wrap gap-2 mt-3"},Ls={__name:"CustomDish",props:{currentCustomDish:Object},setup(t){const{locale:e}=ut(),s=t,f=ie(),{t:p}=ut(),n=rt(()=>s.currentCustomDish),C=rt(()=>n.boxImages),k=N(0),E=rt(()=>n.value.initialPrice),R=N(E.value);le(()=>n,v=>{R.value=(v==null?void 0:v.initialPrice)??0,k.value=0,j.value=null});const j=N(null),q=rt(()=>{const v=e.value,m=`title_${v}`,I=`description_${v}`;return n.value.descriptions.map(D=>({title:D[m],descriptions:D.descriptions.map(i=>i[I]),image:D==null?void 0:D.image}))}),H=rt(()=>{var I,D;const v=Number(((I=n.value)==null?void 0:I.like)??0),m=Number(((D=n.value)==null?void 0:D.rate)??0);return m?v/m*5:0});function P(v,m){const I=e.value;return v[`${m}_${I}`]}function Q(v,m,I){const D=v[m];if(D.selected){D.selected=!1;return}else{const b=v.filter(u=>u.selected).length;if(I===1){h(v),D.selected=!0;return}b<I&&(D.selected=!0)}}function J(v,m,I){Q(v,m,I),O(v)}function O(v){let m=E.value;if(!v||!Array.isArray(v))return R.value=m,m;const I=v.reduce((D,i)=>{if(!i.dishes||!Array.isArray(i.dishes))return D;const b=i.dishes.reduce((u,M)=>u+(M.selected?M.price:0),0);return D+b},0);return m+=I,R.value=m,m}function S(v){return v.selected}function U(){if(!at(n.value.types))return;const v=ot(n.value.types),m=g(n.value.types);tt.addItem({dishid:-1,name:n.value.name,category:s.currentCustomDish.category,count:k.value!==0?k.value:1,price:R.value===0?O():R.value,notes:v,notesAndId:m}),console.log("CART: ",tt.cartDishs),B(n.value.types),et.show({severity:"info",summary:"info",detail:p("customDishBibimbapVue.addToCartSuccessBibimbap")})}function nt(v){return!v||!v.dishes?"":v.dishes.filter(I=>I.selected).map(I=>I.name).join(",")}function ot(v){return v?v.map(m=>nt(m)):[]}function g(v){return v?v.map(m=>m.dishes?m.dishes.filter(I=>I.selected).map(I=>({id:I.dishid,name:I.name})):[]):[]}function B(v){v&&v.forEach(m=>{m.dishes&&m.dishes.forEach(I=>{I.selected=!1})})}function h(v){v.forEach(m=>m.selected=!1)}function at(v){if(n.value.options.quantity&&k.value<=0)return et.show({severity:"warn",detail:p("notification.quantity_must_be_positive")}),!1;for(const m of v)if(m.dishes.filter(D=>D.selected).length<m.minQuantity){const D=m.typeName;return et.show({severity:"warn",detail:p("notification.select_type_of",{name:D})}),!1}return!0}function T(v){v?x.customDishAPI.like(n.value.id)&&(j.value="like",f.add({severity:"success",summary:p("common.success"),detail:p("common.rate")+" "+p("common.success"),life:750})):x.customDishAPI.unLike(n.value.id)&&(j.value="unlike",f.add({severity:"success",summary:p("common.success"),detail:p("common.rate")+" "+p("common.success"),life:750}))}return(v,m)=>{var I,D;return o(),c("div",cs,[a("div",us,[w(l(jt),{class:"w-full max-w-xl mx-auto"},{default:z(()=>[(o(!0),c(W,null,Z(q.value,(i,b)=>(o(),X(l(Vt),{key:b,value:b},{default:z(()=>[w(l(Et),null,{default:z(()=>[ht(d(i.title),1)]),_:2},1024),w(l(Rt),null,{default:z(()=>{var u;return[(o(!0),c(W,null,Z(i.descriptions,(M,Y)=>(o(),c("p",{key:Y},d(M),1))),128)),a("div",ds,[(u=i.image)!=null&&u.src?(o(),c("div",ps,[a("img",{src:i.image.src,class:"w-full"},null,8,fs)])):$("",!0)])]}),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1}),((D=(I=n.value)==null?void 0:I.value)==null?void 0:D.name)==="MY BOX"?(o(),X(l(jt),{key:0,class:"w-full max-w-xl mx-auto"},{default:z(()=>[w(l(Vt),{value:"0"},{default:z(()=>[w(l(Et),null,{default:z(()=>[ht(" 🥩 "+d(v.$t("common.showMybox")),1)]),_:1}),w(l(Rt),null,{default:z(()=>[a("div",vs,[v.isEmptyArray(C.value)?(o(),c("div",hs,d(v.$t("common.myboxAlarm")),1)):$("",!0),v.isEmptyArray(C.value)?$("",!0):(o(),c("div",bs,[(o(!0),c(W,null,Z(C.value,i=>(o(),c("div",{class:"col-4 p-0",onClick:b=>v.imageSelectAction(i)},[a("div",gs,[i?(o(),c("img",{key:0,class:"m-0 p-0",src:v.imagePath(i),style:{width:"82px",height:"82px"}},null,8,ys)):$("",!0)])],8,ms))),256))]))])]),_:1})]),_:1})]),_:1})):$("",!0)]),a("div",_s,[a("div",ws,[(o(),c(W,null,Z(5,i=>a("i",{key:i,class:lt(["pi invert-star",i<=Math.floor(H.value)?"pi-star-fill":i-.5<=H.value?"pi-star-half":"pi-star"]),style:{color:"black"}},null,2)),64)),a("p",null,"("+d(n.value.rate?n.value.rate:0)+")",1)]),a("div",null,[w(l(F),{text:"",icon:"pi pi-thumbs-up",severity:j.value==="like"?"success":"",onClick:m[0]||(m[0]=i=>T(!0))},null,8,["severity"]),w(l(F),{text:"",icon:"pi pi-thumbs-down",severity:j.value==="unlike"?"danger":"",onClick:m[1]||(m[1]=i=>T(!1))},null,8,["severity"])])]),n.value.options.extraInfo?(o(),c("div",$s,[a("label",ks,d(n.value.options.extraInfo),1)])):$("",!0),n.value.options.quantity?(o(),c("div",xs,[a("div",null,[a("label",Ts,d(v.$t("common.quantity"))+" / "+d(v.$t("common.pieces")),1)]),a("div",Is,[w(l(F),{icon:"pi pi-minus",disabled:k.value<=0,onClick:m[2]||(m[2]=i=>k.value-=n.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"]),a("span",Cs,d(k.value),1),w(l(F),{icon:"pi pi-plus",disabled:k.value>=n.value.options.maxQuantity,onClick:m[3]||(m[3]=i=>k.value+=n.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"])])])):$("",!0),(o(!0),c(W,null,Z(n.value.types,(i,b)=>(o(),c("div",null,[a("label",Ss,d(b+1)+". "+d(P(i,"typeName")),1),a("div",Ds,[(o(!0),c(W,null,Z(i.dishes,(u,M)=>(o(),X(l(F),{key:M,onClick:Y=>J(i.dishes,M,k.value==0?i.maxQuantity:i.maxQuantity*k.value),class:lt([{"p-button-primary":S(u),"p-button-outlined":!S(u)},"m-1"])},{default:z(()=>[a("p",{class:lt({"text-gray-700":!S(u)})},d(P(u,"name")),3)]),_:2},1032,["onClick","class"]))),128))])]))),256)),E.value!==0?(o(),c("div",Ns,[a("label",Ps,d(v.$t("common.price"))+":",1),a("label",Bs,d(R.value+"€"),1)])):$("",!0),a("div",As,[w(l(F),{icon:"pi pi-shopping-cart",onClick:m[4]||(m[4]=i=>U()),label:v.$t("common.addToCart"),class:"m-3",severity:"primary",raised:""},null,8,["label"])])])}}},zs=_t(Ls,[["__scopeId","data-v-4dea5bd5"]]);var qs=Ct`
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
`,Os={root:function(e){var s=e.props;return["p-tabs p-component",{"p-tabs-scrollable":s.scrollable}]}},Es=dt.extend({name:"tabs",style:qs,classes:Os}),Rs={name:"BaseTabs",extends:yt,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:Es,provide:function(){return{$pcTabs:this,$parentInstance:this}}},te={name:"Tabs",extends:Rs,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function Vs(t,e,s,f,p,n){return o(),c("div",K({class:t.cx("root")},t.ptmi("root")),[ct(t.$slots,"default")],16)}te.render=Vs;var js={root:"p-tablist",content:function(e){var s=e.instance;return["p-tablist-content",{"p-tablist-viewport":s.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Fs=dt.extend({name:"tablist",classes:js}),Ms={name:"BaseTabList",extends:yt,props:{},style:Fs,provide:function(){return{$pcTabList:this,$parentInstance:this}}},ee={name:"TabList",extends:Ms,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,s=this.getVisibleButtonWidths(),f=Bt(e)-s,p=Math.abs(e.scrollLeft),n=f*.8,C=p-n,k=Math.max(C,0);e.scrollLeft=qt(e)?-1*k:k},onNextButtonClick:function(){var e=this.$refs.content,s=this.getVisibleButtonWidths(),f=Bt(e)-s,p=Math.abs(e.scrollLeft),n=f*.8,C=p+n,k=e.scrollWidth-f,E=Math.min(C,k);e.scrollLeft=qt(e)?-1*E:E},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,s=e.content,f=e.inkbar,p=e.tabs;if(f){var n=At(s,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(f.style.height=ce(n)+"px",f.style.top=$t(n).top-$t(p).top+"px"):(f.style.width=ue(n)+"px",f.style.left=$t(n).left-$t(p).left+"px")}},updateButtonState:function(){var e=this.$refs,s=e.list,f=e.content,p=f.scrollTop,n=f.scrollWidth,C=f.scrollHeight,k=f.offsetWidth,E=f.offsetHeight,R=Math.abs(f.scrollLeft),j=[Bt(f),re(f)],q=j[0],H=j[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=p!==0,this.isNextButtonEnabled=s.offsetHeight>=E&&parseInt(p)!==C-H):(this.isPrevButtonEnabled=R!==0,this.isNextButtonEnabled=s.offsetWidth>=k&&parseInt(R)!==n-q)},getVisibleButtonWidths:function(){var e=this.$refs,s=e.prevButton,f=e.nextButton,p=0;return this.showNavigators&&(p=((s==null?void 0:s.offsetWidth)||0)+((f==null?void 0:f.offsetWidth)||0)),p}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return St({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:me,ChevronRightIcon:ge},directives:{ripple:Qt}},Ks=["data-p"],Ws=["aria-label","tabindex"],Hs=["data-p"],Us=["aria-orientation"],Qs=["aria-label","tabindex"];function Js(t,e,s,f,p,n){var C=Tt("ripple");return o(),c("div",K({ref:"list",class:t.cx("root"),"data-p":n.dataP},t.ptmi("root")),[n.showNavigators&&p.isPrevButtonEnabled?It((o(),c("button",K({key:0,ref:"prevButton",type:"button",class:t.cx("prevButton"),"aria-label":n.prevButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return n.onPrevButtonClick&&n.onPrevButtonClick.apply(n,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(o(),X(vt(n.templates.previcon||"ChevronLeftIcon"),K({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,Ws)),[[C]]):$("",!0),a("div",K({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return n.onScroll&&n.onScroll.apply(n,arguments)}),"data-p":n.dataP},t.ptm("content")),[a("div",K({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":n.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[ct(t.$slots,"default"),a("span",K({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,Us)],16,Hs),n.showNavigators&&p.isNextButtonEnabled?It((o(),c("button",K({key:1,ref:"nextButton",type:"button",class:t.cx("nextButton"),"aria-label":n.nextButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return n.onNextButtonClick&&n.onNextButtonClick.apply(n,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(o(),X(vt(n.templates.nexticon||"ChevronRightIcon"),K({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,Qs)),[[C]]):$("",!0)],16,Ks)}ee.render=Js;var Gs={root:function(e){var s=e.instance,f=e.props;return["p-tab",{"p-tab-active":s.active,"p-disabled":f.disabled}]}},Xs=dt.extend({name:"tab",classes:Gs}),Ys={name:"BaseTab",extends:yt,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Xs,provide:function(){return{$pcTab:this,$parentInstance:this}}},ae={name:"Tab",extends:Ys,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var s=this.findNextTab(e.currentTarget);s?this.changeFocusedTab(e,s):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var s=this.findPrevTab(e.currentTarget);s?this.changeFocusedTab(e,s):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var s=this.findFirstTab();this.changeFocusedTab(e,s),e.preventDefault()},onEndKey:function(e){var s=this.findLastTab();this.changeFocusedTab(e,s),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findNextTab:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,f=s?e:e.nextElementSibling;return f?kt(f,"data-p-disabled")||kt(f,"data-pc-section")==="activebar"?this.findNextTab(f):At(f,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,f=s?e:e.previousElementSibling;return f?kt(f,"data-p-disabled")||kt(f,"data-pc-section")==="activebar"?this.findPrevTab(f):At(f,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,s){pe(s),this.scrollInView(s)},scrollInView:function(e){var s;e==null||(s=e.scrollIntoView)===null||s===void 0||s.call(e,{block:"nearest"})}},computed:{active:function(){var e;return de((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},attrs:function(){return K(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return St({active:this.active})}},directives:{ripple:Qt}};function Zs(t,e,s,f,p,n){var C=Tt("ripple");return t.asChild?ct(t.$slots,"default",{key:1,dataP:n.dataP,class:lt(t.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs,onClick:n.onClick}):It((o(),X(vt(t.as),K({key:0,class:t.cx("root"),"data-p":n.dataP,onClick:n.onClick},n.attrs),{default:z(function(){return[ct(t.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[C]])}ae.render=Zs;const tn={class:"fixed top-0 left-0 w-full bg-primary-reverse",style:{"z-index":"10"}},en={class:"grid mt-3 ml-3"},an={class:"max-w-5rem flex align-items-center"},sn=["src"],nn={class:"flex align-items-center"},on={key:0,class:"text-color font-bold p-1"},ln={key:1,class:"text-color font-bold p-1"},rn={class:"card flex mr-3",style:{"margin-left":"auto"}},cn={style:{display:"flex","align-items":"center"}},un={style:{"flex-grow":"1",width:"0",overflow:"hidden"}},dn={class:"mt-2"},pn={class:"flex justify-content-end mt-2"},fn={__name:"HeaderTabs",props:{types:Array,typeIndex:Number,tableId:String,tabItems:Array},emits:["clickType","switchToWelcome"],setup(t,{emit:e}){const{t:s}=ut();function f(){var U;const O=x.currentPage.value,S=(U=O==null?void 0:O.data)==null?void 0:U.logoPath;return S?x.pathFormated(S):"/images/logo_logo.png"}function p(){return x.getTable()}const n=N(),C=rt(()=>[{label:s("common.options"),items:[{label:s("common.pay"),icon:"pi pi-wallet",command:()=>{P()}},{label:s("common.call"),icon:"pi pi-user-plus",command:()=>{x.send_cmd(p(),{cmd:"call"}),et.show_info(s("notification.call_msg"))}}]}]),k=O=>{n.value.toggle(O)},E=O=>{R.value.toggle(O)},R=N(),j=N(!1),q=N(),H=N();function P(){j.value=!0}function Q(){O(q.value)?x.send_cmd(p(),{cmd:"pay",nif:q.value,note:H.value},S=>{S.success?(et.show_info(s("notification.pay_msg")),j.value=!1):et.show_error(s("common.failed"))}):et.show_warn(s("notification.cancel_msg"));function O(S){return!S||S.toString().length===9||S.toString().length===0}}function J(){H.value&&(H.value=void 0)}return(O,S)=>(o(),c(W,null,[a("div",tn,[a("div",en,[a("div",an,[a("img",{src:f(),class:"w-full",clickble:"",onClick:S[0]||(S[0]=()=>O.$emit("switchToWelcome"))},null,8,sn)]),a("div",nn,[t.tableId?(o(),c("p",on,d(O.$t("common.table"))+": "+d(t.tableId),1)):$("",!0),t.tableId?$("",!0):(o(),c("p",ln,d(O.$t("common.takeAway")),1))]),a("div",rn,[t.tableId?(o(),X(l(F),{key:0,icon:"pi pi-bell",rounded:"","aria-label":"Filter",onClick:k,"aria-haspopup":"true","aria-controls":"overlay_menu"})):$("",!0),w(l(Mt),{ref_key:"menu",ref:n,id:"overlay_menu",model:C.value,popup:!0},null,8,["model"])])]),a("div",cn,[a("div",null,[w(l(F),{icon:"pi pi-bars",variant:"text",rounded:"","aria-label":"Filter",onClick:E,"aria-haspopup":"true","aria-controls":"tab_menu"}),w(l(Mt),{ref_key:"tabMenu",ref:R,id:"tab_menu",model:t.tabItems,popup:!0},null,8,["model"])]),a("div",un,[w(l(te),{value:t.typeIndex,scrollable:"",showNavigators:!1},{default:z(()=>[w(l(ee),null,{default:z(()=>[(o(!0),c(W,null,Z(t.types,(U,nt)=>(o(),X(l(ae),{value:nt,onClick:()=>O.$emit("clickType",nt),class:"text-sm md:text-lg lg:text-xl"},{default:z(()=>[ht(d(U),1)]),_:2},1032,["value","onClick"]))),256))]),_:1})]),_:1},8,["value"])])])]),w(l(bt),{visible:j.value,"onUpdate:visible":S[4]||(S[4]=U=>j.value=U),header:"结账",class:"flex flex-column",modal:!0,dismissableMask:!0,onHide:J},{default:z(()=>[a("div",null,[S[5]||(S[5]=a("label",null,"NIF:",-1)),w(l(ye),{modelValue:q.value,"onUpdate:modelValue":S[1]||(S[1]=U=>q.value=U),inputId:"withoutgrouping",useGrouping:!1,fluid:"",class:"w-full m-1"},null,8,["modelValue"])]),a("div",dn,[a("label",null,d(O.$t("common.note"))+":",1),w(l(Gt),{type:"text",modelValue:H.value,"onUpdate:modelValue":S[2]||(S[2]=U=>H.value=U),class:"w-full m-1"},null,8,["modelValue"])]),a("div",pn,[w(l(F),{label:l(s)("common.send"),onClick:S[3]||(S[3]=U=>Q())},null,8,["label"])])]),_:1},8,["visible"])],64))}},vn={__name:"SwipeHint",props:{size:{type:String,default:"8rem"},duration:{type:Number,default:6e3},position:{type:String,default:"bottom"}},setup(t){const e=t,s=N(!0);Jt(()=>{e.duration>0&&setTimeout(()=>{s.value=!1},e.duration);const p=()=>{s.value=!1,window.removeEventListener("touchstart",p)};window.addEventListener("touchstart",p)});const f=rt(()=>{let p={left:"50%",transform:"translateX(-50%)",zIndex:99999,opacity:.5,pointerEvents:"none",textAlign:"center",position:"fixed"};return e.position==="top"?p.top="15%":e.position==="center"?(p.top="50%",p.transform="translate(-50%, -50%)"):p.bottom="15%",p});return(p,n)=>s.value?(o(),c("div",{key:0,class:"swipe-hint",style:xt(f.value)},[a("div",{class:"hand",style:xt({width:t.size,height:t.size,backgroundImage:"url(/images/hand_finger.png)"})},null,4)],4)):$("",!0)}},hn=_t(vn,[["__scopeId","data-v-e5f3ff45"]]),bn={class:"w-full h-full flex flex-column"},mn={style:{"overflow-x":"hidden","touch-action":"pan-y"},class:"h-full"},gn={class:"fixed bottom-0 left-0 w-full h-3rem bg-primary-reverse p-3"},yn={class:"h-full flex align-items-center justify-content-between w-full"},_n={class:"m-2"},wn={class:"m-2"},$n={style:{"max-height":"60vh","overflow-y":"auto","padding-bottom":"60px"}},kn={class:"flex flex-column border-bottom-1"},xn={key:0,class:"flex justify-content-between"},Tn={class:"flex flex-column"},In={class:"font-bold"},Cn={class:"text-right"},Sn={key:1,class:"flex justify-content-between"},Dn={class:"flex flex-column"},Nn={class:"font-bold"},Pn={class:"text-right"},Bn={key:0},An={key:1,class:"flex flex-column"},Ln={class:"flex flex-column"},zn={class:"font-bold"},qn={class:"text-right"},On={class:"total-footer bg-primary-reverse"},Wt=2,Ht="order_time_key",En={__name:"HomePage",setup(t){const e=Ut(),s=he(),{t:f}=ut(),{locale:p}=ut(),n=N(!1),C=N([""]),k=N(0),E=tt.cartItemCount,R=N(!1),j=N([]),q=N(0),H=N({}),P=N(!1),Q=st.dishDatas,J=N(null),O=N(null),S=N([]),U=N([]),nt=()=>{k.value<C.value.length-1&&(k.value++,u(),h(k.value))},ot=()=>{k.value>0&&(k.value--,u(),h(k.value))};function g(r){E.value=E.value+r}const B=(r,y,_,L)=>{x.rateDish(r,y,_),L&&et.show_success(f("notification.rating_submitted"))};function h(r){let y=x.getOrderMenuTab()[r];if(x.customDishAPI.customDishes.value.map(V=>V.name).includes(y)?(P.value=!0,H.value=x.customDishAPI.customDishes.value.find(V=>V.name==y)):P.value=!1,x.getMenu().length==0){console.log("exit");return}let A=Q.value[r].mainDishes;st.showDishList(A)}const at=()=>{x.refreshTableFromServer(),x.getTableTotalAmount(q),R.value=!0},T=(r,y,_)=>{const L=Q.value.find(A=>A.id===r);L&&(L.likes=y,L.rates=_)},v=r=>{let y=r.id;r.org_id&&(y=r.org_id);for(let _=0;_<Q.value.length;_++)if(Q.value[_].id==y)for(const L in r){let A=L;L.startsWith("note")&&(A=A.replace("note","description")),Q.value[_][A]=r[L]}};function m(){return new Promise(r=>{let y=()=>{const _=x.formatedMenu.value;_.length>0?r(_):setTimeout(y,200)};y()})}function I(){return new Promise(r=>{let y=()=>{const _=x.getOrderMenuTab();_.length>0?r(_):setTimeout(y,200)};y()})}const D=rt(()=>{const r=p.value;return x.formatedMenu.value.map(L=>({...L,mainDishes:L.dishes.map(A=>{const V=A.dish,G={...V,defaultName:V.name,name:i(V,"name",r),note:i(V,"note",r),subname:i(V,"subname",r),quantity:0},pt=A.subItems.map(wt=>{const Pt=wt;return{...wt,defaultName:V.name,name:i(Pt,"name",r),note:i(Pt,"note",r),subname:i(Pt,"subname",r),quantity:0}});return{...A,dish:G,subItems:pt}})}))});function i(r,y,_){return r?_==="en"?r[`${y}_en`]||r[y]:_==="zh"&&r[`${y}_cn`]||r[y]:""}async function b(){await m();const r=await I();Q.value=D.value,C.value=x.orderMenuTab;let y=x.isTakeaway();x.onMenuItemChanged=v,x.onRatingChanged=T;let _=0;if(!y){const L=localStorage.getItem("cartDish_custom");if(L&&L!=="undefined")try{tt.cartDishs.value=JSON.parse(L),_+=tt.cartDishs.value.length}catch(V){console.error("解析自定义菜失败:",V),tt.cartDishs.value=[]}const A=localStorage.getItem("cartDish_normal");if(A&&A!=="undefined")try{const V=JSON.parse(A);st.updateDishDataQty(V);const G=V.reduce((pt,wt)=>pt+(wt.quantity||0),0);_+=G}catch(V){console.error("解析普通菜失败:",V)}tt.cartItemCount.value=_}for(let L=0;L<r.length;L++){const A=L;j.value.push({label:r[L],command:()=>{M(A),u()}})}}const u=()=>{ve(()=>{const r=document.querySelector(".p-tablist-viewport"),y=document.querySelector(".p-tab.p-tab-active");if(r&&y){const _=y.offsetLeft-r.offsetWidth/2+y.offsetWidth/2;r.scrollTo({left:_,behavior:"smooth"})}})},M=r=>{h(r),k.value=r,u()},Y=()=>{var r=st.getAllIncrementedDish();O.value.showDishList(r)};function it(){return x.getTable()}x.params.port,J.value=x.table.value.order;function Dt(r){var y=f("notification.too_fast",{remainTime:r});et.show_warn(y)}const Nt=r=>{const y=[];for(let G=0;G<tt.cartDishs.value.length;G++){var _=tt.cartDishs.value[G];y.push({dishid:_.dishid,name:_.name,quantity:_.count,notes:_.notes,limit:_.limit,price:_.dis_price?_.dis_price:_.price,dishNote:_.dishNote,category:_.category})}const L=st.getAllIncrementedDish();for(let G=0;G<L.length;G++){var _=L[G];console.log("id cartDishs ;  ; : ",_),_.quantity>0&&y.push({dishid:_.id,name:_.defaultName,quantity:_.quantity,limit:_.limit,price:_.dis_price?_.dis_price:_.price,dishNote:_.dishNote})}if(y.length===0)return et.show_warn(f("notification.select_at_least_one")),!1;console.log("cart item:",y);const A=JSON.parse(localStorage.getItem(Ht)||"{}"),V=Date.now();if(!A.startTime||V-A.startTime>Wt*1e3)A.startTime=V;else{const G=Wt-parseInt((V-A.startTime)/1e3);Dt(G);return}return localStorage.setItem(Ht,JSON.stringify(A)),n.value=!0,x.submit_order({name:r.name,note:r.note,table:it(),items:y}),!0};function se(){const r=localStorage.getItem("language");r&&(p.value=r)}function Lt(){for(let r=0;r<Q.value.length;r++){const y=Q.value[r];y.quantity=0}n.value=!1,E.value=0,tt.cartDishs.value.length=0}Jt(async()=>{se(),await b(),h(k.value),x.clear_order_data=()=>{Lt()},x.setOnOrderConfirmed(r=>{console.log("setOnOrderConfirmed..."),Lt();const y=r;et.show_success(f("notification.order_submitted",{id:y}))}),x.setOnShowError(r=>{n.value=!1,et.show_error(r)})});function ne(){localStorage.removeItem("login_time");const r=s.query.table;r?e.push({path:"/",query:{table:r}}):e.push({path:"/takeReserve"})}function zt(){const r=st.getAllIncrementedDish();localStorage.setItem("cartDish_normal",JSON.stringify(r));const y=tt.cartDishs.value;localStorage.setItem("cartDish_custom",JSON.stringify(y))}return fe(()=>{zt()}),window.addEventListener("beforeunload",r=>{x.cleanup(),zt()}),(r,y)=>{const _=Tt("touch"),L=Tt("touch-options");return o(),c(W,null,[a("div",bn,[w(fn,{types:l(x).orderMenuTab,typeIndex:k.value,tabItems:j.value,tableId:it(),onClickType:M,onSwitchToWelcome:ne},null,8,["types","typeIndex","tabItems","tableId"]),y[2]||(y[2]=a("div",{class:"pb-8"},null,-1)),y[3]||(y[3]=a("div",{class:"pb-7 sm:pb-7 md:pb-7 lg:pb-7"},null,-1)),w(hn,{duration:"3000",position:"center"}),It((o(),c("div",mn,[P.value?(o(),X(zs,{key:0,currentCustomDish:H.value},null,8,["currentCustomDish"])):(o(),X(Ca,{key:1,updateCartItemCount:g,rateDish:B,likedItemsRef:S.value,dislikedItemsRef:U.value},null,8,["likedItemsRef","dislikedItemsRef"]))])),[[_,nt,"swipe",{left:!0,passive:!0}],[_,ot,"swipe",{right:!0,passive:!0}],[L,{swipeTolerance:100}]]),y[4]||(y[4]=a("div",{class:"pb-6"},null,-1)),a("div",gn,[a("div",yn,[a("div",_n,[it()?(o(),X(l(F),{key:0,label:r.$t("common.orders"),icon:"pi pi-list",class:"p-button-secondary",onClick:at},null,8,["label"])):$("",!0)]),a("div",wn,[w(l(Zt),{value:l(E),severity:"danger",onClick:Y},{default:z(()=>y[1]||(y[1]=[a("i",{class:"pi pi-shopping-cart",style:{"font-size":"2rem"}},null,-1)])),_:1,__:[1]},8,["value"])])])])]),w(ss,{ref_key:"cartRef",ref:O,updateCartItemCount:g,checkout:Nt,isTakeaway:!it()},null,8,["isTakeaway"]),w(l(bt),{visible:R.value,"onUpdate:visible":y[0]||(y[0]=A=>R.value=A),header:r.$t("common.completedOrders"),modal:"",style:{width:"80vw","max-width":"700px"}},{default:z(()=>{var A,V;return[a("div",$n,[a("div",kn,[(A=q.value.adultPrice)!=null&&A.quantity&&q.value.adultPrice.quantity!=0?(o(),c("div",xn,[a("div",Tn,[a("span",In,d(r.$t("common.adult")),1),a("small",null,d(r.$t("common.quantity"))+": "+d(q.value.adultPrice.quantity),1)]),a("div",Cn,[a("span",null,"€"+d((Number(q.value.adultPrice.price)*q.value.adultPrice.quantity).toFixed(2)),1)])])):$("",!0),(V=q.value.childrenPrice)!=null&&V.quantity&&q.value.childrenPrice.quantity!=0?(o(),c("div",Sn,[a("div",Dn,[a("span",Nn,d(r.$t("common.children")),1),a("small",null,d(r.$t("common.quantity"))+": "+d(q.value.childrenPrice.quantity),1)]),a("div",Pn,[a("span",null,"€"+d((Number(q.value.childrenPrice.price)*q.value.childrenPrice.quantity).toFixed(2)),1)])])):$("",!0)]),l(x).table.value.order.length===0?(o(),c("div",Bn,d(r.$t("common.noOrders")),1)):(o(),c("div",An,[(o(!0),c(W,null,Z(l(x).table.value.order,(G,pt)=>(o(),c("div",{key:pt,class:"flex justify-content-between border-bottom-1 pb-2"},[a("div",Ln,[a("span",zn,d(l(x).getDishName(G)),1),a("small",null,d(r.$t("common.quantity"))+": "+d(G.quantity),1)]),a("div",qn,[a("span",null,"€"+d((G.price*G.quantity).toFixed(2)),1)])]))),128))]))]),a("div",On,d(r.$t("common.total"))+": €"+d(q.value.total),1)]}),_:1},8,["visible","header"])],64)}}},Jn=_t(En,[["__scopeId","data-v-4c72d604"]]);export{Jn as default};
