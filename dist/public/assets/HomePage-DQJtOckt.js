import{v as Nt,B as ft,x as kt,y as Pt,f as c,p as o,q as G,i as I,z as ut,A as M,C as mt,h as a,t as d,n as it,r as P,g as k,F as H,l as Y,k as l,j as q,D as Dt,a as x,u as dt,s as bt,m as et,e as Gt,E as de,G as pe,c as lt,H as gt,I as fe,R as Xt,J as Lt,K as ve,L as zt,M as he,N as It,O as me,P as Rt,Q as St,S as be,T as ge,U as Ct,o as Yt,b as ye,V as _e,d as we}from"./index-C_9P8kFh.js";import{s as yt,a as Zt}from"./index-fnhV1zud.js";import{s as j,a as te}from"./index-D7uixhpA.js";import{D as st,c as tt,s as Vt}from"./index-2LyVqeBG.js";import{_ as $t,b as Ft,c as jt,a as Mt,s as Kt}from"./_plugin-vue_export-helper-CF1VA2nf.js";import{s as ke}from"./index-DcW-0OCZ.js";import{s as Wt,a as $e}from"./index-BrFJ0aCW.js";import{s as xe}from"./index-C_xzvaOO.js";import{s as Ht}from"./index-VQ1870EP.js";import{s as Te}from"./index-CLbrTRt0.js";var Ie=Nt`
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
`,Ce={root:function(e){var s=e.props;return["p-tag p-component",{"p-tag-info":s.severity==="info","p-tag-success":s.severity==="success","p-tag-warn":s.severity==="warn","p-tag-danger":s.severity==="danger","p-tag-secondary":s.severity==="secondary","p-tag-contrast":s.severity==="contrast","p-tag-rounded":s.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},De=ft.extend({name:"tag",style:Ie,classes:Ce}),Se={name:"BaseTag",extends:kt,props:{value:null,severity:null,rounded:Boolean,icon:String},style:De,provide:function(){return{$pcTag:this,$parentInstance:this}}};function _t(t){"@babel/helpers - typeof";return _t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_t(t)}function Ne(t,e,s){return(e=Pe(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Pe(t){var e=Be(t,"string");return _t(e)=="symbol"?e:e+""}function Be(t,e){if(_t(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var p=s.call(t,e);if(_t(p)!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ht={name:"Tag",extends:Se,inheritAttrs:!1,computed:{dataP:function(){return Pt(Ne({rounded:this.rounded},this.severity,this.severity))}}},Ae=["data-p"];function Le(t,e,s,p,h,r){return o(),c("span",M({class:t.cx("root"),"data-p":r.dataP},t.ptmi("root")),[t.$slots.icon?(o(),G(mt(t.$slots.icon),M({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(o(),c("span",M({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):I("",!0),t.value!=null||t.$slots.default?ut(t.$slots,"default",{key:2},function(){return[a("span",M({class:t.cx("label")},t.ptm("label")),d(t.value),17)]}):I("",!0)],16,Ae)}ht.render=Le;var ze=Nt`
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
`,qe={root:function(e){var s=e.props;return["p-avatar p-component",{"p-avatar-image":s.image!=null,"p-avatar-circle":s.shape==="circle","p-avatar-lg":s.size==="large","p-avatar-xl":s.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Oe=ft.extend({name:"avatar",style:ze,classes:qe}),Ee={name:"BaseAvatar",extends:kt,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Oe,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function wt(t){"@babel/helpers - typeof";return wt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},wt(t)}function Ut(t,e,s){return(e=Re(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Re(t){var e=Ve(t,"string");return wt(e)=="symbol"?e:e+""}function Ve(t,e){if(wt(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var p=s.call(t,e);if(wt(p)!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ee={name:"Avatar",extends:Ee,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}},computed:{dataP:function(){return Pt(Ut(Ut({},this.shape,this.shape),this.size,this.size))}}},Fe=["aria-labelledby","aria-label","data-p"],je=["data-p"],Me=["data-p"],Ke=["src","alt","data-p"];function We(t,e,s,p,h,r){return o(),c("div",M({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root"),{"data-p":r.dataP}),[ut(t.$slots,"default",{},function(){return[t.label?(o(),c("span",M({key:0,class:t.cx("label")},t.ptm("label"),{"data-p":r.dataP}),d(t.label),17,je)):t.$slots.icon?(o(),G(mt(t.$slots.icon),{key:1,class:it(t.cx("icon"))},null,8,["class"])):t.icon?(o(),c("span",M({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon"),{"data-p":r.dataP}),null,16,Me)):t.image?(o(),c("img",M({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return r.onError&&r.onError.apply(r,arguments)})},t.ptm("image"),{"data-p":r.dataP}),null,16,Ke)):I("",!0)]})],16,Fe)}ee.render=We;const He={class:"grid"},Ue={class:"flex flex-column"},Qe=["onClick"],Je={class:"p-1 flex-shrink-0 w-7rem h-7rem flex align-items-center justify-content-center overflow-hidden"},Ge=["src","alt"],Xe={class:"flex flex-column justify-content-center"},Ye={class:"font-bold"},Ze={class:"flex flex-wrap gap-2"},ta={class:"flex gap-1 align-items-center"},ea={class:"text-color-secondary line2"},aa={key:0,class:"text-xl font-bold text-primary"},sa={key:1,class:"flex align-items-center gap-1"},na={class:"text-l font-bold text-color-secondary"},oa={class:"text-sm line-through text-500"},ia={key:2,class:"flex gap-2 mr-2",id:"card-quantity"},la={class:"w-2rem text-xl text-center"},ra={key:3,class:"flex gap-2 mr-2"},ca={key:0,class:"m-2 mt-0"},ua={class:"flex flex-row justify-content-between align-content-center"},da={class:"flex flex-column"},pa={class:"text-l font-bold"},fa={key:0,class:"text-l font-bold text-color-secondary"},va={key:1,class:"flex align-items-center gap-1"},ha={class:"text-l font-bold text-color-secondary"},ma={class:"text-sm line-through text-500"},ba={key:0,class:"flex ml-2 mr-2"},ga={class:"w-2rem text-xl text-center"},ya={key:1,class:"flex gap-2 mr-3 pt-2 pb-2"},_a={class:"max-w-5rem flex align-items-center"},wa={class:"font-bold whitespace-nowrap"},ka={class:"mb-2 flex justify-content-center"},$a={class:"font-bold text-center"},xa={class:"mb-2"},Ta={class:"text-color-secondary m-0 line-height-3 line2 text-center"},Ia={class:"mb-2"},Ca={class:"flex justify-content-center"},Da=["src","alt"],Sa={class:"flex align-items-center gap-2"},Na=["src","alt"],Pa={class:"flex align-items-center gap-3 ml-auto"},Ba={__name:"DishList",props:{updateCartItemCount:{type:Function,required:!0},rateDish:{type:Function,required:!0},likedItemsRef:Array,dislikedItemsRef:Array},setup(t){const e=st.dishes;let s={rated:!1,id:null,like:0,rate:0};function p(){var m;const w=x.currentPage.value,z=(m=w==null?void 0:w.data)==null?void 0:m.logoPath;return z?x.pathFormated(z,w.imagesPath):"/images/logo_logo.png"}const h=w=>{D.updateCartItemCount(w)},r=w=>{D.updateCartItemCount(-1)},_=w=>st.dishDatas.value[w]?st.dishDatas.value[w].quantity:0,O=w=>{if(!F())return!1;const z=w.quantity;let m=3;if(w.price>0&&(m=9),w.limit){const at=w.id,C=F(),f=(C.peopleType.adults+C.peopleType.children)*w.limit,y=C.order.find(A=>A.dishid==at);let T=0;if(w.subitem)for(const A of w.subitem){T+=_(A);const i=C.order.find(b=>b.dishid==N(A));i&&(T+=i.quantity)}else T+=w.quantity,y&&(T+=y.quantity);return z>=m||f&&T>=f}return z>=m},N=w=>st.dishDatas.value[w]?st.dishDatas.value[w].id:0,F=()=>x.getTableValue();function K(){D.rateDish(s.id,s.like,s.rate,s.rated),s.id=null,s.like=0,s.rate=0,s.rated=!1}const U=w=>{const z=D.likedItemsRef.indexOf(w);if(s.id=w.id,z!==-1)D.likedItemsRef.splice(z,1),s.like+=-1,s.rate+=-1,s.rated=!1;else{s.rated=!0,D.likedItemsRef.push(w);const m=D.dislikedItemsRef.indexOf(w);m!==-1?(D.dislikedItemsRef.splice(m,1),s.like+=1):(s.like+=1,s.rate+=1)}},L=w=>{const z=D.dislikedItemsRef.indexOf(w);if(s.id=w.id,z!==-1)D.dislikedItemsRef.splice(z,1),s.rate+=-1,s.rated=!1;else{s.rated=!0,D.dislikedItemsRef.push(w);const m=D.likedItemsRef.indexOf(w);m!==-1?(D.likedItemsRef.splice(m,1),s.like+=-1):s.rate+=1}},D=t,Z=P(!1),R=P({}),E=w=>{Z.value=!0,R.value=w},B=w=>{w.target.src="/images/default.png"};function W(w){ot(w.target,300)}function nt(w){ot(w.target,110)}function ot(w,z){const m=w.naturalWidth,at=w.naturalHeight,C=Math.min(m,z),f=C/m,y=at*f;w.style.width=`${C}px`,w.style.height=`${y}px`}return(w,z)=>(o(),c(H,null,[a("div",He,[(o(!0),c(H,null,Y(l(e),(m,at)=>(o(),c("div",{key:at,class:"col-12 sm:col-12 md:col-6 lg:col-4 border-round surface-section shadow-1 p-2"},[a("div",Ue,[a("div",{class:it(["flex flex-row",m.subItems.length!==0?"flex-grow-1":""]),onClick:C=>E(m.dish)},[a("div",Je,[a("img",{src:m.dish.image||"/images/default.png",alt:m.dish.name,class:"w-full h-full",style:{"object-fit":"cover"},onError:B,onLoad:nt},null,40,Ge)]),a("div",Xe,[a("div",Ye,d(m.dish.name),1),a("div",null,[a("div",Ze,[a("div",ta,[(o(),c(H,null,Y(5,C=>a("i",{key:C,class:it(["pi invert-star",C<=Math.floor(m.dish.likes/m.dish.rates*5)?"pi-star-fill":C-.5<=m.dish.likes/m.dish.rates*5?"pi-star-half-fill":"pi-star"]),style:{color:"black"}},null,2)),64)),a("p",null,"("+d(m.dish.rates?m.dish.rates:0)+")",1)])])]),a("div",null,[a("p",ea,d(m.dish.note),1)])])],10,Qe),m.subItems.length==0?(o(),c("div",{key:0,class:it(["flex ml-2 mr-2 mb-2",Number(m.dish.price)>0?"justify-content-between":"justify-content-end"])},[!m.dish.discount&&Number(m.dish.price)>0?(o(),c("span",aa,"€"+d(m.dish.price),1)):I("",!0),m.dish.discount?(o(),c("div",sa,[a("span",na,"€"+d(m.dish.dis_price),1),a("span",oa,"€"+d(m.dish.price),1),k(l(ht),{severity:"danger",value:"-"+m.dish.discount+"%"},null,8,["value"])])):I("",!0),m.dish.soldout?I("",!0):(o(),c("div",ia,[k(l(j),{icon:"pi pi-minus",rounded:"",disabled:m.dish.quantity<=0,onClick:C=>{m.dish.quantity--,r()},class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),a("span",la,d(m.dish.quantity),1),k(l(j),{icon:"pi pi-plus",rounded:"",disabled:O(m.dish),onClick:C=>{m.dish.quantity++,h(1)},class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])),m.dish.soldout?(o(),c("div",ra,[k(l(ht),{severity:"danger",value:w.$t("common.soldout")},null,8,["value"])])):I("",!0)],2)):I("",!0),m.subItems.length!==0?(o(!0),c(H,{key:1},Y(m.subItems,(C,f)=>(o(),c(H,{key:"index"},[C.disable?I("",!0):(o(),c("div",ca,[a("div",ua,[a("div",da,[a("span",pa,d(C.subname),1),!C.discount&&C.price!=="0.00"&&C.price!=="0"?(o(),c("span",fa,"€"+d(C.price),1)):I("",!0),C.discount?(o(),c("div",va,[a("span",ha,"€"+d(C.dis_price),1),a("span",ma,"€"+d(C.price),1),k(l(ht),{severity:"danger",value:"-"+C.discount+"%"},null,8,["value"])])):I("",!0)]),C.soldout?I("",!0):(o(),c("div",ba,[k(l(j),{icon:"pi pi-minus",rounded:"",disabled:C.quantity<=0,onClick:y=>{C.quantity--,r()},class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),a("span",ga,d(C.quantity),1),k(l(j),{icon:"pi pi-plus",rounded:"",onClick:y=>{C.quantity++,h(1)},class:"w-2rem h-2rem",disabled:O(C)},null,8,["onClick","disabled"])])),C.soldout?(o(),c("div",ya,[k(l(ht),{severity:"danger",value:w.$t("common.soldout")},null,8,["value"])])):I("",!0)])]))],64))),128)):I("",!0)])]))),128))]),k(l(yt),{visible:Z.value,"onUpdate:visible":z[2]||(z[2]=m=>Z.value=m),modal:"",header:"dish",style:Dt([{width:"23rem"},{width:"80vw","max-width":"700px"}]),onHide:z[3]||(z[3]=m=>K())},{header:q(()=>[a("div",_a,[k(l(ee),{image:p(),class:"w-full"},null,8,["image"])]),a("span",wa,d(w.$t("common.details")),1)]),default:q(()=>[a("div",ka,[a("span",$a,d(R.value.name),1)]),a("div",xa,[a("span",Ta,d(R.value.note),1)]),a("div",Ia,[a("div",Ca,[a("img",{class:"w-full h-auto object-contain",src:R.value.image,alt:R.value.name,onError:B,onLoad:W},null,40,Da)])]),a("div",Sa,[(o(!0),c(H,null,Y(R.value.allergies,(m,at)=>(o(),c("img",{src:"images/"+m+".png",alt:m,class:"w-2rem h-2rem border-round flex-shrink-0",style:{"object-fit":"cover","min-width":"2rem"}},null,8,Na))),256)),a("div",Pa,[a("button",{onClick:z[0]||(z[0]=m=>U(R.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[a("i",{class:it(["pi pi-thumbs-up text-xl",D.likedItemsRef.includes(R.value)?"text-green-500":"text-gray-400"])},null,2)]),a("button",{onClick:z[1]||(z[1]=m=>L(R.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[a("i",{class:it(["pi pi-thumbs-down text-xl",D.dislikedItemsRef.includes(R.value)?"text-red-500":"text-gray-400"])},null,2)])])])]),_:1},8,["visible"])],64))}},Aa=$t(Ba,[["__scopeId","data-v-15e7fd21"]]),La={key:0,class:"text-3xl font-bold"},za={class:"flex flex-column gap-3 p-1"},qa={key:0,class:"flex flex-column gap-1"},Oa={key:0,class:"m-0"},Ea={key:0,class:"m-0"},Ra={class:"flex justify-content-between gap-4 mt-1"},Va={class:"flex align-items-center gap-2"},Fa=["src","alt"],ja={class:"flex-grow-1 min-width-0 max-w-18rem"},Ma={class:"flex flex-column gap-1"},Ka={class:"flex align-items-center gap-2"},Wa={class:"text-xl font-bold line1 whitespace-nowrap overflow-hidden text-overflow-ellipsis",style:{"max-width":"20rem"}},Ha={class:"flex align-items-end gap-1"},Ua={key:0,class:"text-xl font-bold text-primary"},Qa={key:1,class:"text-xl font-bold text-primary"},Ja={key:2,class:"text-sm text-color-secondary"},Ga={key:0,class:"text-xs text-primary"},Xa={class:"flex-shrink-0 flex flex-wrap justify-content-between align-items-center gap-1"},Ya={class:"flex flex-wrap justify-content-between align-content-center"},Za={class:"flex align-items-center gap-1"},ts={class:"w-2rem text-center"},es={key:1,class:"flex flex-column gap-2 mt-2"},as={for:"in_label"},ss={for:"in_label"},ns={class:"bottom-0 left-0 mt-2"},os={class:"text-2xl font-bold"},is={class:"text-2xl font-bold text-primary pl-2"},ls={class:"flex justify-content-between"},rs={__name:"Cart",props:{updateCartItemCount:{type:Function,required:!0},checkout:{type:Function,required:!0},isTakeaway:Boolean},setup(t,{expose:e}){const{locale:s}=dt(),p=Gt(),{t:h}=dt(),r=tt.cartDishs;x.freeCounts;const _=P([]),O=P(),N=P(),F=P(!1),K=P(!1),U=P(!0),L=P(""),D=P("");function Z(i,b,v){let J="";const X=s.value,ct=x.customDishAPI.getCustomDishByName(i);for(const rt of v){const Bt=ct.types[b].dishes.find(pt=>pt.dishid===rt.id)[`name_${X}`];J=J+Bt+"/"}return J}function R(i,b){const v=s.value;return x.customDishAPI.getCustomDishByName(i).types[b][`typeName_${v}`]}const E=(i,b)=>{const v=_.value[i].quantity+b;v>=0&&(_.value[i].quantity=v,ot.updateCartItemCount(b))};function B(i){i&&O.value&&(O.value.dishNote=N.value?N.value:void 0),K.value=!1}function W(){N.value&&(N.value=void 0),O.value&&(O.value=void 0)}function nt(i){O.value=i,N.value=O.value.dishNote?O.value.dishNote:void 0,K.value=!0}const ot=t;e({showDishList:i=>{F.value=!0,_.value.length=0;for(let b=0;b<i.length;b++)_.value.push(i[b]);U.value=_.value.length==0&&r.length==0}});function z(i){tt.removeItem(i)}function m(){ot.isTakeaway?at():C()}function at(){const i=[];r.value.forEach(b=>{i.push(b)}),_.value.forEach(b=>{b.quantity>0&&i.push(b)}),i.length<=0?et.show_warn(h("notification.select_at_least_one")):(F.value=!1,p.push({path:"/paymentPage"}))}function C(){ot.checkout({name:L.value,note:D.value})&&(F.value=!1),r.value.forEach(i=>{i.dishNote=void 0}),_.value.forEach(i=>{i.dishNote=void 0}),D.value="",st.cleanDishDataQty(),localStorage.removeItem("order_cartDishs"),localStorage.removeItem("order_dishDatas")}function f(i){return i.subname!=""&&i.subname!="Default Title"?i.name+" "+i.subname:i.name}function y(){let i=0;return r.value.forEach(b=>{i+=b.dis_price?b.dis_price*b.count:b.price*b.count}),_.value.forEach(b=>{i+=b.dis_price?b.dis_price*b.quantity:b.price*b.quantity}),"€"+i.toFixed(2)}const T=i=>{i.target.src="/images/default.png"},A=i=>{const b=i.quantity;let v=3;return i.price>0&&(v=9),b>=v};return(i,b)=>(o(),c(H,null,[k(l(yt),{class:"bg-primary-reverse text-sm md:text-lg lg:text-xl",visible:F.value,"onUpdate:visible":b[2]||(b[2]=v=>F.value=v),modal:"",header:i.$t("common.cart"),style:Dt([{backgroundColor:"rgba(250, 250, 250, 1)",height:"100%",minWidth:"24rem"},{width:"80vw","max-width":"700px"}]),dismissableMask:!0},{footer:q(()=>[a("div",ns,[a("span",os,d(i.$t("common.total"))+": ",1),a("span",is,d(y()),1),k(l(j),{icon:t.isTakeaway?"pi pi-wallet":"pi pi-plus",class:"p-button-success p-button-rounded ml-3",onClick:m,label:t.isTakeaway?l(h)("common.pay"):l(h)("common.send")},null,8,["icon","label"])])]),default:q(()=>[U.value?(o(),c("h2",La,"Cart is empty.")):I("",!0),a("div",za,[(o(!0),c(H,null,Y(l(r),(v,J)=>(o(),G(l(ke),{style:{overflow:"hidden"},key:J},{title:q(()=>[bt(d(i.$t(`common.${v.name.replace(/[^a-zA-Z0-9\s]/g,"").toLowerCase().replace(/\s+/g,"")}`)),1)]),subtitle:q(()=>[bt(d(i.$t("common.price"))+" : "+d(v.price)+"€",1)]),content:q(()=>[l(x).customDishAPI.customDishes.value.find(X=>X.name==v.name)?(o(),c("div",qa,[(o(!0),c(H,null,Y(v.notesAndId,(X,ct)=>(o(),c("div",null,[v.notesAndId[ct].length!==0?(o(),c("span",Oa,d(R(v.name,ct))+": "+d(Z(v.name,ct,X)),1)):I("",!0)]))),256)),a("div",null,[v.dishNote?(o(),c("span",Ea,d(i.$t("common.note"))+": "+d(v.dishNote),1)):I("",!0)])])):I("",!0)]),footer:q(()=>[a("div",Ra,[t.isTakeaway?I("",!0):(o(),G(l(j),{key:0,label:l(h)("common.edit")+" "+l(h)("common.note"),severity:"contrast",onClick:X=>nt(v)},null,8,["label","onClick"])),k(l(j),{label:l(h)("common.remove"),severity:"danger",onClick:X=>z(v)},null,8,["label","onClick"])])]),_:2},1024))),128)),(o(!0),c(H,null,Y(_.value,(v,J)=>(o(),c("div",{key:J,class:"p-2 border-round shadow-1 transition-all transition-duration-200 hover:shadow-3 flex flex-column gap-1"},[a("div",Va,[a("img",{src:v.image,alt:v.name,class:"w-4rem h-4rem border-round flex-shrink-0",onError:T,style:{"object-fit":"cover","min-width":"4rem"}},null,40,Fa),a("div",ja,[a("div",Ma,[a("div",Ka,[a("span",Wa,d(f(v)),1)])]),a("div",Ha,[v.dis_price?(o(),c("span",Ua,"€"+d(v.dis_price),1)):I("",!0),!v.dis_price&&v.price>0?(o(),c("span",Qa,"€"+d(v.price),1)):I("",!0),v.price>0?(o(),c("span",Ja,"/uni.")):I("",!0)])])]),a("div",null,[v.dishNote?(o(),c("span",Ga,d(l(h)("common.note")+": "+v.dishNote),1)):I("",!0)]),a("div",Xa,[a("div",Ya,[t.isTakeaway?I("",!0):(o(),G(l(j),{key:0,label:l(h)("common.edit")+" "+l(h)("common.note"),severity:"contrast",class:"w-3.5rem h-2rem",onClick:X=>nt(v)},null,8,["label","onClick"]))]),a("div",Za,[k(l(j),{icon:"pi pi-minus",rounded:"",disabled:v.quantity<=0,onClick:X=>E(J,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),a("span",ts,d(v.quantity),1),k(l(j),{icon:"pi pi-plus",rounded:"",disabled:A(v),onClick:X=>E(J,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])])]))),128))]),t.isTakeaway?I("",!0):(o(),c("div",es,[k(l(Wt),{variant:"in"},{default:q(()=>[k(l(Zt),{id:"in_label",modelValue:L.value,"onUpdate:modelValue":b[0]||(b[0]=v=>L.value=v),variant:"filled",maxlength:"20"},null,8,["modelValue"]),a("label",as,d(l(h)("common.name")),1)]),_:1}),k(l(Wt),{variant:"in"},{default:q(()=>[k(l(Vt),{id:"in_label",class:"min-w-full",rows:"5",modelValue:D.value,"onUpdate:modelValue":b[1]||(b[1]=v=>D.value=v),variant:"filled",maxlength:"200"},null,8,["modelValue"]),a("label",ss,d(l(h)("common.observation")),1)]),_:1})]))]),_:1},8,["visible","header"]),k(l(yt),{visible:K.value,"onUpdate:visible":b[6]||(b[6]=v=>K.value=v),header:l(h)("common.note"),onHide:b[7]||(b[7]=v=>W()),modal:"",dismissableMask:!0},{default:q(()=>[k(l(Vt),{modelValue:N.value,"onUpdate:modelValue":b[3]||(b[3]=v=>N.value=v),rows:"5",cols:"30",placeholder:l(h)("common.edit")+" "+l(h)("common.note")+"...",maxlength:"100"},null,8,["modelValue","placeholder"]),a("div",ls,[k(l(j),{label:l(h)("common.cancel"),severity:"danger",onClick:b[4]||(b[4]=v=>B(!1))},null,8,["label"]),k(l(j),{label:l(h)("common.save"),severity:"primary",size:"sm",onClick:b[5]||(b[5]=v=>B(!0))},null,8,["label"])])]),_:1},8,["visible","header"])],64))}},cs=$t(rs,[["__scopeId","data-v-483203ce"]]);var us=Nt`
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
`,ds={root:"p-overlaybadge"},ps=ft.extend({name:"overlaybadge",style:us,classes:ds}),fs={name:"OverlayBadge",extends:te,style:ps,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},ae={name:"OverlayBadge",extends:fs,inheritAttrs:!1,components:{Badge:te}};function vs(t,e,s,p,h,r){var _=de("Badge");return o(),c("div",M({class:t.cx("root")},t.ptmi("root")),[ut(t.$slots,"default"),k(_,M(t.$props,{pt:t.ptm("pcBadge")}),null,16,["pt"])],16)}ae.render=vs;P([]);P("iniImages()");const hs={class:"m-3"},ms={class:"flex flex-column gap-2"},bs={class:"w-full flex justify-content-center"},gs={key:0,class:"max-w-19rem"},ys=["src"],_s={style:{width:"300px",height:"300px",background:"url(/boxImage/box.png)"}},ws={key:0,class:"flex align-items-center justify-content-center text-4xl font-bold text-white w-full h-full"},ks={key:1,class:"grid m-0 p-2"},$s=["onClick"],xs={class:"flex align-items-center justify-content-center font-bold m-0 p-0",style:{width:"94px",height:"94px"}},Ts=["src"],Is={class:"flex flex-wrap justify-content-between align-items-center m-1"},Cs={class:"flex gap-1 align-items-center"},Ds={key:0},Ss={class:"font-bold mb-2"},Ns={key:1,class:"flex justify-content-between gap-2 mt-3"},Ps={class:"font-bold mb-2"},Bs={class:"flex mr-2"},As={class:"w-3rem text-xl text-center"},Ls={class:"font-bold block mb-2"},zs={class:"flex flex-wrap"},qs={key:2,class:"flex flex-wrap gap-2 mt-3"},Os={class:"font-bold block mb-2"},Es={class:"font-bold block mb-2 text-center"},Rs={class:"flex flex-wrap gap-2 mt-3"},Vs={__name:"CustomDish",props:{currentCustomDish:Object},emits:["typeClick"],setup(t,{emit:e}){const{locale:s}=dt(),p=t,h=pe(),{t:r}=dt(),_=lt(()=>p.currentCustomDish),O=lt(()=>_.boxImages),N=P(0),F=lt(()=>{let f=_.value.initialPrice;for(const y of _.value.types??[])for(const T of y.dishes??[])T.selected&&(f+=T.price);return Number(f).toFixed(2)}),K=e,U=P(null),L=lt(()=>{const f=s.value,y=`title_${f}`,T=`description_${f}`;return _.value.descriptions.map(A=>({title:A[y],descriptions:A.descriptions.map(i=>i[T]),image:A==null?void 0:A.image}))}),D=lt(()=>{var T,A;const f=Number(((T=_.value)==null?void 0:T.like)??0),y=Number(((A=_.value)==null?void 0:A.rate)??0);return y?f/y*5:0});function Z(f,y){const T=s.value;return f[`${y}_${T}`]}function R(f,y,T){const A=f[y];if(A.selected){A.selected=!1;return}else{const b=f.filter(v=>v.selected).length;if(T===1){m(f),A.selected=!0;return}b<T&&(A.selected=!0)}}function E(f,y,T){const A=f.dishes;K("typeClick",f,y,A[y].selected),R(A,y,T)}function B(f){return f.selected}function W(){if(!at(_.value.types))return;const f=ot(_.value.types),y=w(_.value.types);tt.addItem({dishid:-1,name:_.value.name,category:p.currentCustomDish.category,count:N.value!==0?N.value:1,price:F.value,notes:f,notesAndId:y}),console.log("CART: ",tt.cartDishs),z(_.value.types),et.show({severity:"info",summary:"info",detail:r("customDishBibimbapVue.addToCartSuccessBibimbap")})}function nt(f){return!f||!f.dishes?"":f.dishes.filter(T=>T.selected).map(T=>T.name).join(",")}function ot(f){return f?f.map(y=>nt(y)):[]}function w(f){return f?f.map(y=>y.dishes?y.dishes.filter(T=>T.selected).map(T=>({id:T.dishid,name:T.name})):[]):[]}function z(f){f&&f.forEach(y=>{y.dishes&&y.dishes.forEach(T=>{T.selected=!1})})}function m(f){f.forEach(y=>y.selected=!1)}function at(f){if(_.value.options.quantity&&N.value<=0)return et.show({severity:"warn",detail:r("notification.quantity_must_be_positive")}),!1;for(const y of f)if(y.dishes.filter(A=>A.selected).length<y.minQuantity){const A=y.typeName;return et.show({severity:"warn",detail:r("notification.select_type_of",{name:A})}),!1}return!0}function C(f){f?x.customDishAPI.like(_.value.id)&&(U.value="like",h.add({severity:"success",summary:r("common.success"),detail:r("common.rate")+" "+r("common.success"),life:750})):x.customDishAPI.unLike(_.value.id)&&(U.value="unlike",h.add({severity:"success",summary:r("common.success"),detail:r("common.rate")+" "+r("common.success"),life:750}))}return(f,y)=>{var T,A;return o(),c("div",hs,[a("div",ms,[k(l(Kt),{class:"w-full max-w-xl mx-auto"},{default:q(()=>[(o(!0),c(H,null,Y(L.value,(i,b)=>(o(),G(l(Mt),{key:b,value:b},{default:q(()=>[k(l(Ft),null,{default:q(()=>[bt(d(i.title),1)]),_:2},1024),k(l(jt),null,{default:q(()=>{var v;return[(o(!0),c(H,null,Y(i.descriptions,(J,X)=>(o(),c("p",{key:X},d(J),1))),128)),a("div",bs,[(v=i.image)!=null&&v.src?(o(),c("div",gs,[a("img",{src:i.image.src,class:"w-full"},null,8,ys)])):I("",!0)])]}),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1}),((A=(T=_.value)==null?void 0:T.value)==null?void 0:A.name)==="MY BOX"?(o(),G(l(Kt),{key:0,class:"w-full max-w-xl mx-auto"},{default:q(()=>[k(l(Mt),{value:"0"},{default:q(()=>[k(l(Ft),null,{default:q(()=>[bt(" 🥩 "+d(f.$t("common.showMybox")),1)]),_:1}),k(l(jt),null,{default:q(()=>[a("div",_s,[f.isEmptyArray(O.value)?(o(),c("div",ws,d(f.$t("common.myboxAlarm")),1)):I("",!0),f.isEmptyArray(O.value)?I("",!0):(o(),c("div",ks,[(o(!0),c(H,null,Y(O.value,i=>(o(),c("div",{class:"col-4 p-0",onClick:b=>f.imageSelectAction(i)},[a("div",xs,[i?(o(),c("img",{key:0,class:"m-0 p-0",src:f.imagePath(i),style:{width:"82px",height:"82px"}},null,8,Ts)):I("",!0)])],8,$s))),256))]))])]),_:1})]),_:1})]),_:1})):I("",!0)]),a("div",Is,[a("div",Cs,[(o(),c(H,null,Y(5,i=>a("i",{key:i,class:it(["pi invert-star",i<=Math.floor(D.value)?"pi-star-fill":i-.5<=D.value?"pi-star-half":"pi-star"]),style:{color:"black"}},null,2)),64)),a("p",null,"("+d(_.value.rate?_.value.rate:0)+")",1)]),a("div",null,[k(l(j),{text:"",icon:"pi pi-thumbs-up",severity:U.value==="like"?"success":"",onClick:y[0]||(y[0]=i=>C(!0))},null,8,["severity"]),k(l(j),{text:"",icon:"pi pi-thumbs-down",severity:U.value==="unlike"?"danger":"",onClick:y[1]||(y[1]=i=>C(!1))},null,8,["severity"])])]),_.value.options.extraInfo?(o(),c("div",Ds,[a("label",Ss,d(_.value.options.extraInfo),1)])):I("",!0),_.value.options.quantity?(o(),c("div",Ns,[a("div",null,[a("label",Ps,d(f.$t("common.quantity"))+" / "+d(f.$t("common.pieces")),1)]),a("div",Bs,[k(l(j),{icon:"pi pi-minus",disabled:N.value<=0,onClick:y[2]||(y[2]=i=>N.value-=_.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"]),a("span",As,d(N.value),1),k(l(j),{icon:"pi pi-plus",disabled:N.value>=_.value.options.maxQuantity,onClick:y[3]||(y[3]=i=>N.value+=_.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"])])])):I("",!0),(o(!0),c(H,null,Y(_.value.types,(i,b)=>(o(),c("div",{key:i.id},[gt(a("div",null,[a("label",Ls,d(b+1)+". "+d(Z(i,"typeName")),1),a("div",zs,[(o(!0),c(H,null,Y(i.dishes,(v,J)=>(o(),G(l(j),{key:J,onClick:X=>E(i,J,N.value==0?i.maxQuantity:i.maxQuantity*N.value),class:it([{"p-button-primary":B(v),"p-button-outlined":!B(v)},"m-1"])},{default:q(()=>[a("p",{class:it({"text-gray-700":!B(v)})},d(Z(v,"name")),3)]),_:2},1032,["onClick","class"]))),128))])],512),[[fe,i.enable]])]))),128)),t.currentCustomDish.initialPrice!==0?(o(),c("div",qs,[a("label",Os,d(f.$t("common.price"))+":",1),a("label",Es,d(F.value+"€"),1)])):I("",!0),a("div",Rs,[k(l(j),{icon:"pi pi-shopping-cart",onClick:y[4]||(y[4]=i=>W()),label:f.$t("common.addToCart"),class:"m-3",severity:"primary",raised:""},null,8,["label"])])])}}},Fs=$t(Vs,[["__scopeId","data-v-1bbb17dd"]]);var js=Nt`
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
`,Ms={root:function(e){var s=e.props;return["p-tabs p-component",{"p-tabs-scrollable":s.scrollable}]}},Ks=ft.extend({name:"tabs",style:js,classes:Ms}),Ws={name:"BaseTabs",extends:kt,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:Ks,provide:function(){return{$pcTabs:this,$parentInstance:this}}},se={name:"Tabs",extends:Ws,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function Hs(t,e,s,p,h,r){return o(),c("div",M({class:t.cx("root")},t.ptmi("root")),[ut(t.$slots,"default")],16)}se.render=Hs;var Us={root:"p-tablist",content:function(e){var s=e.instance;return["p-tablist-content",{"p-tablist-viewport":s.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Qs=ft.extend({name:"tablist",classes:Us}),Js={name:"BaseTabList",extends:kt,props:{},style:Qs,provide:function(){return{$pcTabList:this,$parentInstance:this}}},ne={name:"TabList",extends:Js,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,s=this.getVisibleButtonWidths(),p=Lt(e)-s,h=Math.abs(e.scrollLeft),r=p*.8,_=h-r,O=Math.max(_,0);e.scrollLeft=Rt(e)?-1*O:O},onNextButtonClick:function(){var e=this.$refs.content,s=this.getVisibleButtonWidths(),p=Lt(e)-s,h=Math.abs(e.scrollLeft),r=p*.8,_=h+r,O=e.scrollWidth-p,N=Math.min(_,O);e.scrollLeft=Rt(e)?-1*N:N},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,s=e.content,p=e.inkbar,h=e.tabs;if(p){var r=zt(s,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(p.style.height=he(r)+"px",p.style.top=It(r).top-It(h).top+"px"):(p.style.width=me(r)+"px",p.style.left=It(r).left-It(h).left+"px")}},updateButtonState:function(){var e=this.$refs,s=e.list,p=e.content,h=p.scrollTop,r=p.scrollWidth,_=p.scrollHeight,O=p.offsetWidth,N=p.offsetHeight,F=Math.abs(p.scrollLeft),K=[Lt(p),ve(p)],U=K[0],L=K[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=h!==0,this.isNextButtonEnabled=s.offsetHeight>=N&&parseInt(h)!==_-L):(this.isPrevButtonEnabled=F!==0,this.isNextButtonEnabled=s.offsetWidth>=O&&parseInt(F)!==r-U)},getVisibleButtonWidths:function(){var e=this.$refs,s=e.prevButton,p=e.nextButton,h=0;return this.showNavigators&&(h=((s==null?void 0:s.offsetWidth)||0)+((p==null?void 0:p.offsetWidth)||0)),h}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return Pt({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:$e,ChevronRightIcon:xe},directives:{ripple:Xt}},Gs=["data-p"],Xs=["aria-label","tabindex"],Ys=["data-p"],Zs=["aria-orientation"],tn=["aria-label","tabindex"];function en(t,e,s,p,h,r){var _=St("ripple");return o(),c("div",M({ref:"list",class:t.cx("root"),"data-p":r.dataP},t.ptmi("root")),[r.showNavigators&&h.isPrevButtonEnabled?gt((o(),c("button",M({key:0,ref:"prevButton",type:"button",class:t.cx("prevButton"),"aria-label":r.prevButtonAriaLabel,tabindex:r.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return r.onPrevButtonClick&&r.onPrevButtonClick.apply(r,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(o(),G(mt(r.templates.previcon||"ChevronLeftIcon"),M({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,Xs)),[[_]]):I("",!0),a("div",M({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return r.onScroll&&r.onScroll.apply(r,arguments)}),"data-p":r.dataP},t.ptm("content")),[a("div",M({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":r.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[ut(t.$slots,"default"),a("span",M({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,Zs)],16,Ys),r.showNavigators&&h.isNextButtonEnabled?gt((o(),c("button",M({key:1,ref:"nextButton",type:"button",class:t.cx("nextButton"),"aria-label":r.nextButtonAriaLabel,tabindex:r.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return r.onNextButtonClick&&r.onNextButtonClick.apply(r,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(o(),G(mt(r.templates.nexticon||"ChevronRightIcon"),M({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,tn)),[[_]]):I("",!0)],16,Gs)}ne.render=en;var an={root:function(e){var s=e.instance,p=e.props;return["p-tab",{"p-tab-active":s.active,"p-disabled":p.disabled}]}},sn=ft.extend({name:"tab",classes:an}),nn={name:"BaseTab",extends:kt,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:sn,provide:function(){return{$pcTab:this,$parentInstance:this}}},oe={name:"Tab",extends:nn,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var s=this.findNextTab(e.currentTarget);s?this.changeFocusedTab(e,s):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var s=this.findPrevTab(e.currentTarget);s?this.changeFocusedTab(e,s):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var s=this.findFirstTab();this.changeFocusedTab(e,s),e.preventDefault()},onEndKey:function(e){var s=this.findLastTab();this.changeFocusedTab(e,s),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findNextTab:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=s?e:e.nextElementSibling;return p?Ct(p,"data-p-disabled")||Ct(p,"data-pc-section")==="activebar"?this.findNextTab(p):zt(p,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=s?e:e.previousElementSibling;return p?Ct(p,"data-p-disabled")||Ct(p,"data-pc-section")==="activebar"?this.findPrevTab(p):zt(p,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,s){ge(s),this.scrollInView(s)},scrollInView:function(e){var s;e==null||(s=e.scrollIntoView)===null||s===void 0||s.call(e,{block:"nearest"})}},computed:{active:function(){var e;return be((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},attrs:function(){return M(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return Pt({active:this.active})}},directives:{ripple:Xt}};function on(t,e,s,p,h,r){var _=St("ripple");return t.asChild?ut(t.$slots,"default",{key:1,dataP:r.dataP,class:it(t.cx("root")),active:r.active,a11yAttrs:r.a11yAttrs,onClick:r.onClick}):gt((o(),G(mt(t.as),M({key:0,class:t.cx("root"),"data-p":r.dataP,onClick:r.onClick},r.attrs),{default:q(function(){return[ut(t.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[_]])}oe.render=on;const ln={class:"fixed top-0 left-0 w-full bg-primary-reverse",style:{"z-index":"10"}},rn={class:"grid mt-3 ml-3"},cn={class:"max-w-5rem flex align-items-center"},un=["src"],dn={class:"flex align-items-center"},pn={key:0,class:"text-color font-bold p-1"},fn={key:1,class:"text-color font-bold p-1"},vn={class:"card flex mr-3",style:{"margin-left":"auto"}},hn={style:{display:"flex","align-items":"center"}},mn={style:{"flex-grow":"1",width:"0",overflow:"hidden"}},bn={class:"mt-2"},gn={class:"flex justify-content-end mt-2"},yn={__name:"HeaderTabs",props:{types:Array,typeIndex:Number,tableId:String,tabItems:Array},emits:["clickType","switchToWelcome"],setup(t,{emit:e}){const{t:s}=dt();function p(){var W;const E=x.currentPage.value,B=(W=E==null?void 0:E.data)==null?void 0:W.logoPath;return B?x.pathFormated(B,E.imagesPath):"/images/logo_logo.png"}function h(){return x.getTable()}const r=P(),_=lt(()=>[{label:s("common.options"),items:[{label:s("common.pay"),icon:"pi pi-wallet",command:()=>{D()}},{label:s("common.call"),icon:"pi pi-user-plus",command:()=>{x.send_cmd(h(),{cmd:"call"}),et.show_info(s("notification.call_msg"))}}]}]),O=E=>{r.value.toggle(E)},N=E=>{F.value.toggle(E)},F=P(),K=P(!1),U=P(),L=P();function D(){K.value=!0}function Z(){E(U.value)?x.send_cmd(h(),{cmd:"pay",nif:U.value,note:L.value},B=>{B.success?(et.show_info(s("notification.pay_msg")),K.value=!1):et.show_error(s("common.failed"))}):et.show_warn(s("notification.cancel_msg"));function E(B){return!B||B.toString().length===9||B.toString().length===0}}function R(){L.value&&(L.value=void 0)}return(E,B)=>(o(),c(H,null,[a("div",ln,[a("div",rn,[a("div",cn,[a("img",{src:p(),class:"w-full",clickble:"",onClick:B[0]||(B[0]=()=>E.$emit("switchToWelcome"))},null,8,un)]),a("div",dn,[t.tableId?(o(),c("p",pn,d(E.$t("common.table"))+": "+d(t.tableId),1)):I("",!0),t.tableId?I("",!0):(o(),c("p",fn,d(E.$t("common.takeAway")),1))]),a("div",vn,[t.tableId?(o(),G(l(j),{key:0,icon:"pi pi-bell",rounded:"","aria-label":"Filter",onClick:O,"aria-haspopup":"true","aria-controls":"overlay_menu"})):I("",!0),k(l(Ht),{ref_key:"menu",ref:r,id:"overlay_menu",model:_.value,popup:!0},null,8,["model"])])]),a("div",hn,[a("div",null,[k(l(j),{icon:"pi pi-bars",variant:"text",rounded:"","aria-label":"Filter",onClick:N,"aria-haspopup":"true","aria-controls":"tab_menu"}),k(l(Ht),{ref_key:"tabMenu",ref:F,id:"tab_menu",model:t.tabItems,popup:!0},null,8,["model"])]),a("div",mn,[k(l(se),{value:t.typeIndex,scrollable:"",showNavigators:!1},{default:q(()=>[k(l(ne),null,{default:q(()=>[(o(!0),c(H,null,Y(t.types,(W,nt)=>(o(),G(l(oe),{value:nt,onClick:()=>E.$emit("clickType",nt),class:"text-sm md:text-lg lg:text-xl"},{default:q(()=>[bt(d(W),1)]),_:2},1032,["value","onClick"]))),256))]),_:1})]),_:1},8,["value"])])])]),k(l(yt),{visible:K.value,"onUpdate:visible":B[4]||(B[4]=W=>K.value=W),header:"结账",class:"flex flex-column",modal:!0,dismissableMask:!0,onHide:R},{default:q(()=>[a("div",null,[B[5]||(B[5]=a("label",null,"NIF:",-1)),k(l(Te),{modelValue:U.value,"onUpdate:modelValue":B[1]||(B[1]=W=>U.value=W),inputId:"withoutgrouping",useGrouping:!1,fluid:"",class:"w-full m-1"},null,8,["modelValue"])]),a("div",bn,[a("label",null,d(E.$t("common.note"))+":",1),k(l(Zt),{type:"text",modelValue:L.value,"onUpdate:modelValue":B[2]||(B[2]=W=>L.value=W),class:"w-full m-1"},null,8,["modelValue"])]),a("div",gn,[k(l(j),{label:l(s)("common.send"),onClick:B[3]||(B[3]=W=>Z())},null,8,["label"])])]),_:1},8,["visible"])],64))}},_n={__name:"SwipeHint",props:{size:{type:String,default:"8rem"},duration:{type:Number,default:6e3},position:{type:String,default:"bottom"}},setup(t){const e=t,s=P(!0);Yt(()=>{e.duration>0&&setTimeout(()=>{s.value=!1},e.duration);const h=()=>{s.value=!1,window.removeEventListener("touchstart",h)};window.addEventListener("touchstart",h)});const p=lt(()=>{let h={left:"50%",transform:"translateX(-50%)",zIndex:99999,opacity:.5,pointerEvents:"none",textAlign:"center",position:"fixed"};return e.position==="top"?h.top="15%":e.position==="center"?(h.top="50%",h.transform="translate(-50%, -50%)"):h.bottom="15%",h});return(h,r)=>s.value?(o(),c("div",{key:0,class:"swipe-hint",style:Dt(p.value)},[a("div",{class:"hand",style:Dt({width:t.size,height:t.size,backgroundImage:"url(/images/hand_finger.png)"})},null,4)],4)):I("",!0)}},wn=$t(_n,[["__scopeId","data-v-e5f3ff45"]]),kn={class:"w-full h-full flex flex-column"},$n={style:{"overflow-x":"hidden","touch-action":"pan-y"},class:"h-full"},xn={class:"fixed bottom-0 left-0 w-full h-3rem bg-primary-reverse p-3"},Tn={class:"h-full flex align-items-center justify-content-between w-full"},In={class:"m-2"},Cn={class:"m-2"},Dn={style:{"max-height":"60vh","overflow-y":"auto","padding-bottom":"60px"}},Sn={class:"flex flex-column border-bottom-1"},Nn={key:0,class:"flex justify-content-between"},Pn={class:"flex flex-column"},Bn={class:"font-bold"},An={class:"text-right"},Ln={key:1,class:"flex justify-content-between"},zn={class:"flex flex-column"},qn={class:"font-bold"},On={class:"text-right"},En={key:0},Rn={key:1,class:"flex flex-column"},Vn={class:"flex flex-column"},Fn={class:"font-bold"},jn={class:"text-right"},Mn={class:"total-footer bg-primary-reverse"},Qt=2,Jt="order_time_key",Kn={__name:"HomePage",setup(t){const e=Gt(),s=we(),{t:p}=dt(),{locale:h}=dt(),r=P(0),_=P(!1),O=P([""]),N=P(0),F=tt.cartItemCount,K=P(!1),U=P([]),L=P(0),D=P({}),Z=P(!1),R=st.dishDatas,E=P(x.orderMenuTab),B=P(null),W=P(null),nt=P([]),ot=P([]),w=()=>{N.value<O.value.length-1&&(N.value++,pt(),T(N.value))},z=()=>{N.value>0&&(N.value--,pt(),T(N.value))};function m(n){F.value=F.value+n}const at=(n,u,g,S)=>{x.rateDish(n,u,g),S&&et.show_success(p("notification.rating_submitted"))},C=(n,u,g)=>{if(D.value.name=="XIAOXIONG® RAMEN"&&n.id===1){const S=n.dishes[u];let $;S.dishid==47?g?$=f(3,!0,1):$=f(3,!1,1):$=f(3,!0,1),$!==void 0&&y($)}if(console.log("aaaaaaaaa: ",n),D.value.name=="Menu Almoço"&&n.id===3){const S=n.dishes[u];let $;[1427,41].includes(S.dishid)?g?$=f(4,!0,0):$=f(4,!1,0):$=f(4,!0,0),$!==void 0&&y($)}};function f(n,u,g){if(D.value={...D.value,types:D.value.types.map(S=>S.id===n?{...S,enable:u,minQuantity:u?g:0}:S)},u===!1)return n}function y(n){!D.value||!Array.isArray(D.value.types)||(D.value={...D.value,types:D.value.types.map(u=>u.id===n?{...u,dishes:u.dishes.map(g=>({...g,selected:!1}))}:u)})}function T(n){let u=x.getOrderMenuTab()[n];if(x.customDishAPI.customDishes.value.map(V=>V.name).includes(u)?(Z.value=!0,D.value=x.customDishAPI.customDishes.value.find(V=>V.name==u)):Z.value=!1,x.getMenu().length==0){console.log("exit");return}let $=R.value[n].mainDishes;st.showDishList($)}const A=()=>{x.refreshTableFromServer(),x.getTableTotalAmount(L),K.value=!0},i=(n,u,g)=>{const S=R.value.find($=>$.id===n);S&&(S.likes=u,S.rates=g)},b=n=>{let u=n.id;n.org_id&&(u=n.org_id);for(let g=0;g<R.value.length;g++)if(R.value[g].id==u)for(const S in n){let $=S;S.startsWith("note")&&($=$.replace("note","description")),R.value[g][$]=n[S]}};function v(){return new Promise(n=>{let u=()=>{const g=x.formatedMenu.value;g.length>0?n(g):setTimeout(u,200)};u()})}function J(){return new Promise(n=>{let u=()=>{const g=x.getOrderMenuTab();g.length>0?n(g):setTimeout(u,200)};u()})}const X=lt(()=>n=>{const u=x.dictinaryAPI.dictinary.value[n];return u?u[`text_${h.value.toLowerCase()}`]:n}),ct=lt(()=>{const n=h.value;return x.formatedMenu.value.map(S=>({...S,mainDishes:S.dishes.map($=>{const V=$.dish,Q={...V,defaultName:V.name,name:rt(V,"name",n),note:rt(V,"note",n),subname:rt(V,"subname",n),quantity:0},vt=$.subItems.map(Tt=>{const At=Tt;return{...Tt,defaultName:V.name,name:rt(At,"name",n),note:rt(At,"note",n),subname:rt(At,"subname",n),quantity:0}});return{...$,dish:Q,subItems:vt}})}))});function rt(n,u,g){return n?g==="en"?n[`${u}_en`]||n[u]:g==="zh"&&n[`${u}_cn`]||n[u]:""}async function Bt(){await v();const n=await J();E.value=n.map(S=>{const $=x.dictinaryAPI.dictinary.value[S];return $?$[`text_${h.value.toLowerCase()}`]:S}),R.value=ct.value,O.value=x.orderMenuTab;let u=x.isTakeaway();x.onMenuItemChanged=b,x.onRatingChanged=i;let g=0;if(!u){const S=localStorage.getItem("cartDish_custom");if(S&&S!=="undefined")try{tt.cartDishs.value=JSON.parse(S),g+=tt.cartDishs.value.length}catch(V){console.error("解析自定义菜失败:",V),tt.cartDishs.value=[]}const $=localStorage.getItem("cartDish_normal");if($&&$!=="undefined")try{const V=JSON.parse($);st.updateDishDataQty(V);const Q=V.reduce((vt,Tt)=>vt+(Tt.quantity||0),0);g+=Q}catch(V){console.error("解析普通菜失败:",V)}tt.cartItemCount.value=g}for(let S=0;S<n.length;S++){const $=S;U.value.push({label:X.value(n[S]),command:()=>{qt($),pt()}})}r.value++}const pt=()=>{_e(()=>{const n=document.querySelector(".p-tablist-viewport"),u=document.querySelector(".p-tab.p-tab-active");if(n&&u){const g=u.offsetLeft-n.offsetWidth/2+u.offsetWidth/2;n.scrollTo({left:g,behavior:"smooth"})}})},qt=n=>{T(n),N.value=n,pt()},ie=()=>{var n=st.getAllIncrementedDish();W.value.showDishList(n)};function xt(){return x.getTable()}x.params.port,B.value=x.table.value.order;function le(n){var u=p("notification.too_fast",{remainTime:n});et.show_warn(u)}const re=n=>{const u=[];for(let Q=0;Q<tt.cartDishs.value.length;Q++){var g=tt.cartDishs.value[Q];u.push({dishid:g.dishid,name:g.name,quantity:g.count,notes:g.notes,limit:g.limit,price:g.dis_price?g.dis_price:g.price,dishNote:g.dishNote,category:g.category})}const S=st.getAllIncrementedDish();for(let Q=0;Q<S.length;Q++){var g=S[Q];console.log("id cartDishs ;  ; : ",g),g.quantity>0&&u.push({dishid:g.id,name:g.defaultName,quantity:g.quantity,limit:g.limit,price:g.dis_price?g.dis_price:g.price,dishNote:g.dishNote})}if(u.length===0)return et.show_warn(p("notification.select_at_least_one")),!1;console.log("cart item:",u);const $=JSON.parse(localStorage.getItem(Jt)||"{}"),V=Date.now();if(!$.startTime||V-$.startTime>Qt*1e3)$.startTime=V;else{const Q=Qt-parseInt((V-$.startTime)/1e3);le(Q);return}return localStorage.setItem(Jt,JSON.stringify($)),_.value=!0,x.submit_order({name:n.name,note:n.note,table:xt(),items:u}),!0};function ce(){const n=localStorage.getItem("language");n&&(h.value=n)}function Ot(){for(let n=0;n<R.value.length;n++){const u=R.value[n];u.quantity=0}_.value=!1,F.value=0,tt.cartDishs.value.length=0}Yt(async()=>{ce(),await Bt(),T(N.value),x.clear_order_data=()=>{Ot()},x.setOnOrderConfirmed(n=>{console.log("setOnOrderConfirmed..."),Ot();const u=n;et.show_success(p("notification.order_submitted",{id:u}))}),x.setOnShowError(n=>{_.value=!1,et.show_error(n)})});function ue(){localStorage.removeItem("login_time");const n=s.query.table;n?e.push({path:"/",query:{table:n}}):e.push({path:"/takeReserve"})}function Et(){const n=st.getAllIncrementedDish();localStorage.setItem("cartDish_normal",JSON.stringify(n));const u=tt.cartDishs.value;localStorage.setItem("cartDish_custom",JSON.stringify(u))}return ye(()=>{Et()}),window.addEventListener("beforeunload",n=>{x.cleanup(),Et()}),(n,u)=>{const g=St("touch"),S=St("touch-options");return o(),c(H,null,[a("div",kn,[(o(),G(yn,{key:r.value,types:E.value,typeIndex:N.value,tabItems:U.value,tableId:xt(),onClickType:qt,onSwitchToWelcome:ue,dictinary:l(x).dictinaryAPI.dictinary.value},null,8,["types","typeIndex","tabItems","tableId","dictinary"])),u[2]||(u[2]=a("div",{class:"pb-8"},null,-1)),u[3]||(u[3]=a("div",{class:"pb-7 sm:pb-7 md:pb-7 lg:pb-7"},null,-1)),k(wn,{duration:"3000",position:"center",size:"3rem"}),gt((o(),c("div",$n,[Z.value?(o(),G(Fs,{key:0,currentCustomDish:D.value,onTypeClick:C},null,8,["currentCustomDish"])):(o(),G(Aa,{key:1,updateCartItemCount:m,rateDish:at,likedItemsRef:nt.value,dislikedItemsRef:ot.value},null,8,["likedItemsRef","dislikedItemsRef"]))])),[[g,w,"swipe",{left:!0,passive:!0}],[g,z,"swipe",{right:!0,passive:!0}],[S,{swipeTolerance:100}]]),u[4]||(u[4]=a("div",{class:"pb-6"},null,-1)),a("div",xn,[a("div",Tn,[a("div",In,[xt()?(o(),G(l(j),{key:0,label:n.$t("common.orders"),icon:"pi pi-list",class:"p-button-secondary",onClick:A},null,8,["label"])):I("",!0)]),a("div",Cn,[k(l(ae),{value:l(F),severity:"danger",onClick:ie},{default:q(()=>u[1]||(u[1]=[a("i",{class:"pi pi-shopping-cart",style:{"font-size":"2rem"}},null,-1)])),_:1,__:[1]},8,["value"])])])])]),k(cs,{ref_key:"cartRef",ref:W,updateCartItemCount:m,checkout:re,isTakeaway:!xt()},null,8,["isTakeaway"]),k(l(yt),{visible:K.value,"onUpdate:visible":u[0]||(u[0]=$=>K.value=$),header:n.$t("common.completedOrders"),modal:"",style:{width:"80vw","max-width":"700px"}},{default:q(()=>{var $,V;return[a("div",Dn,[a("div",Sn,[($=L.value.adultPrice)!=null&&$.quantity&&L.value.adultPrice.quantity!=0?(o(),c("div",Nn,[a("div",Pn,[a("span",Bn,d(n.$t("common.adult")),1),a("small",null,d(n.$t("common.quantity"))+": "+d(L.value.adultPrice.quantity),1)]),a("div",An,[a("span",null,"€"+d((Number(L.value.adultPrice.price)*L.value.adultPrice.quantity).toFixed(2)),1)])])):I("",!0),(V=L.value.childrenPrice)!=null&&V.quantity&&L.value.childrenPrice.quantity!=0?(o(),c("div",Ln,[a("div",zn,[a("span",qn,d(n.$t("common.children")),1),a("small",null,d(n.$t("common.quantity"))+": "+d(L.value.childrenPrice.quantity),1)]),a("div",On,[a("span",null,"€"+d((Number(L.value.childrenPrice.price)*L.value.childrenPrice.quantity).toFixed(2)),1)])])):I("",!0)]),l(x).table.value.order.length===0?(o(),c("div",En,d(n.$t("common.noOrders")),1)):(o(),c("div",Rn,[(o(!0),c(H,null,Y(l(x).table.value.order,(Q,vt)=>(o(),c("div",{key:vt,class:"flex justify-content-between border-bottom-1 pb-2"},[a("div",Vn,[a("span",Fn,d(l(x).getDishName(Q)),1),a("small",null,d(n.$t("common.quantity"))+": "+d(Q.quantity),1)]),a("div",jn,[a("span",null,"€"+d((Q.price*Q.quantity).toFixed(2)),1)])]))),128))]))]),a("div",Mn,d(n.$t("common.total"))+": €"+d(L.value.total),1)]}),_:1},8,["visible","header"])],64)}}},eo=$t(Kn,[["__scopeId","data-v-3b72e2d9"]]);export{eo as default};
