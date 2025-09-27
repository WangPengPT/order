import{v as Lt,B as yt,x as It,y as zt,f as d,p as r,q as Y,i as k,z as vt,A as U,C as wt,h as n,t as f,n as rt,r as D,g as y,F as J,l as G,k as u,a as _,j as z,D as Pt,u as gt,s as kt,m as at,e as ee,E as pe,G as fe,c as ft,w as ve,R as ae,H as Rt,I as he,J as Vt,K as be,L as St,M as me,N as Ft,O as Nt,P as At,Q as ge,S as ye,T as Bt,o as se,b as _e,U as we,V as ke,d as $e}from"./index-BZt_QBsf.js";import{s as $t,a as ne}from"./index-SnB2Ax9D.js";import{s as K,a as oe}from"./index-CgvnsMt0.js";import{D as F,c as Z,s as Kt}from"./index-CEHoGu7Y.js";import{_ as Dt,b as Wt,c as Ht,a as Ut,s as Qt}from"./_plugin-vue_export-helper-lIO7b23z.js";import{s as xe}from"./index-CYorxCsL.js";import{s as Jt,a as Te}from"./index-D1qqtrBi.js";import{s as Ie}from"./index-atDw3VUC.js";import{s as Xt}from"./index-CWsDltj2.js";import{s as De}from"./index-BlRVnuSl.js";var Ce=Lt`
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
`,Se={root:function(e){var o=e.props;return["p-tag p-component",{"p-tag-info":o.severity==="info","p-tag-success":o.severity==="success","p-tag-warn":o.severity==="warn","p-tag-danger":o.severity==="danger","p-tag-secondary":o.severity==="secondary","p-tag-contrast":o.severity==="contrast","p-tag-rounded":o.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Be=yt.extend({name:"tag",style:Ce,classes:Se}),Pe={name:"BaseTag",extends:It,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Be,provide:function(){return{$pcTag:this,$parentInstance:this}}};function xt(t){"@babel/helpers - typeof";return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xt(t)}function Ne(t,e,o){return(e=Ae(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function Ae(t){var e=Le(t,"string");return xt(e)=="symbol"?e:e+""}function Le(t,e){if(xt(t)!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var c=o.call(t,e);if(xt(c)!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var _t={name:"Tag",extends:Pe,inheritAttrs:!1,computed:{dataP:function(){return zt(Ne({rounded:this.rounded},this.severity,this.severity))}}},ze=["data-p"];function qe(t,e,o,c,g,i){return r(),d("span",U({class:t.cx("root"),"data-p":i.dataP},t.ptmi("root")),[t.$slots.icon?(r(),Y(wt(t.$slots.icon),U({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(r(),d("span",U({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):k("",!0),t.value!=null||t.$slots.default?vt(t.$slots,"default",{key:2},function(){return[n("span",U({class:t.cx("label")},t.ptm("label")),f(t.value),17)]}):k("",!0)],16,ze)}_t.render=qe;var Oe=Lt`
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
`,Ee={root:function(e){var o=e.props;return["p-avatar p-component",{"p-avatar-image":o.image!=null,"p-avatar-circle":o.shape==="circle","p-avatar-lg":o.size==="large","p-avatar-xl":o.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Re=yt.extend({name:"avatar",style:Oe,classes:Ee}),Ve={name:"BaseAvatar",extends:It,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Re,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function Tt(t){"@babel/helpers - typeof";return Tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tt(t)}function Yt(t,e,o){return(e=je(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function je(t){var e=Me(t,"string");return Tt(e)=="symbol"?e:e+""}function Me(t,e){if(Tt(t)!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var c=o.call(t,e);if(Tt(c)!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ie={name:"Avatar",extends:Ve,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}},computed:{dataP:function(){return zt(Yt(Yt({},this.shape,this.shape),this.size,this.size))}}},Fe=["aria-labelledby","aria-label","data-p"],Ke=["data-p"],We=["data-p"],He=["src","alt","data-p"];function Ue(t,e,o,c,g,i){return r(),d("div",U({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root"),{"data-p":i.dataP}),[vt(t.$slots,"default",{},function(){return[t.label?(r(),d("span",U({key:0,class:t.cx("label")},t.ptm("label"),{"data-p":i.dataP}),f(t.label),17,Ke)):t.$slots.icon?(r(),Y(wt(t.$slots.icon),{key:1,class:rt(t.cx("icon"))},null,8,["class"])):t.icon?(r(),d("span",U({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon"),{"data-p":i.dataP}),null,16,We)):t.image?(r(),d("img",U({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return i.onError&&i.onError.apply(i,arguments)})},t.ptm("image"),{"data-p":i.dataP}),null,16,He)):k("",!0)]})],16,Fe)}ie.render=Ue;const Qe={class:"grid"},Je={class:"flex flex-column"},Xe=["onClick"],Ye={class:"p-1 flex-shrink-0 w-7rem h-7rem flex align-items-center justify-content-center overflow-hidden"},Ge=["src","alt"],Ze={class:"flex flex-column justify-content-center"},ta={class:"font-bold"},ea={class:"flex flex-wrap gap-2"},aa={class:"flex gap-1 align-items-center"},sa={class:"text-color-secondary line2"},na={key:0,class:"text-xl font-bold text-primary"},oa={key:1,class:"flex align-items-center gap-1"},ia={class:"text-l font-bold text-color-secondary"},la={class:"text-sm line-through text-500"},ra={key:2,class:"flex gap-2 mr-2",id:"card-quantity"},ua={class:"w-2rem text-xl text-center"},ca={key:3,class:"flex gap-2 mr-2"},da={key:0,class:"m-2 mt-0"},pa={class:"flex flex-row justify-content-between align-content-center"},fa={class:"flex flex-column"},va={class:"text-l font-bold"},ha={key:0,class:"text-l font-bold text-color-secondary"},ba={key:1,class:"flex align-items-center gap-1"},ma={class:"text-l font-bold text-color-secondary"},ga={class:"text-sm line-through text-500"},ya={key:0,class:"flex ml-2 mr-2"},_a={class:"w-2rem text-xl text-center"},wa={key:1,class:"flex gap-2 mr-3 pt-2 pb-2"},ka={class:"max-w-5rem flex align-items-center"},$a={class:"font-bold whitespace-nowrap"},xa={class:"mb-2 flex justify-content-center"},Ta={class:"font-bold text-center"},Ia={class:"mb-2"},Da={class:"text-color-secondary m-0 line-height-3 line2 text-center"},Ca={class:"mb-2"},Sa={class:"flex justify-content-center"},Ba=["src","alt"],Pa={class:"flex align-items-center gap-2"},Na=["src","alt"],Aa={class:"flex align-items-center gap-3 ml-auto"},La={__name:"DishList",props:{updateCartItemCount:{type:Function,required:!0},rateDish:{type:Function,required:!0},likedItemsRef:Array,dislikedItemsRef:Array},setup(t){const e=F.dishes;let o={rated:!1,id:null,like:0,rate:0};function c(){var s;const a=_.currentPage.value,l=(s=a==null?void 0:a.data)==null?void 0:s.logoPath;return l?_.pathFormated(l):"/images/logo_logo.png"}const g=(a,l)=>{const s=e.value[a].quantity+l;s>=0&&(e.value[a].quantity=s,M.updateCartItemCount(l))},i=(a,l)=>{const s=F.dishDatas.value[a].quantity+l;s>=0&&(F.dishDatas.value[a].quantity=s,M.updateCartItemCount(l))},T=a=>F.dishDatas.value[a]?F.dishDatas.value[a].quantity:0,$=a=>{const l=F.dishDatas.value[a];if(l){if(!l.category){const s=e.value.find(q=>q.handle===l.handle);if(s&&s.limit)return O(s)}return O(l)}return!0},O=a=>{if(!W())return!1;const l=a.quantity;let s=3;if(a.price>0&&(s=9),a.limit){const q=a.id,w=W(),ot=(w.peopleType.adults+w.peopleType.children)*a.limit,pt=w.order.find(bt=>bt.dishid==q);let lt=0;if(a.subitem)for(const bt of a.subitem){lt+=T(bt);const Ct=w.order.find(qt=>qt.dishid==Q(bt));Ct&&(lt+=Ct.quantity)}else lt+=a.quantity,pt&&(lt+=pt.quantity);return l>=s||ot&&lt>=ot}return l>=s},V=a=>F.dishDatas.value[a]?!F.dishDatas.value[a].disable:!0,j=a=>F.dishDatas.value[a]?F.dishDatas.value[a].soldout:!1,N=a=>F.dishDatas.value[a]?_.getItemLocalValue(F.dishDatas.value[a],"subname"):"",Q=a=>F.dishDatas.value[a]?F.dishDatas.value[a].id:0,tt=a=>F.dishDatas.value[a]?F.dishDatas.value[a].price:10,B=a=>F.dishDatas.value[a]?F.dishDatas.value[a].dis_price:10,st=a=>{const l=F.dishDatas.value[a];return l&&l.discount?l.discount:0},P=a=>st(a)>0,C=a=>tt(a)>0?!P(a):!1,W=()=>_.getTableValue();function nt(){M.rateDish(o.id,o.like,o.rate,o.rated),o.id=null,o.like=0,o.rate=0,o.rated=!1}const ht=a=>{const l=M.likedItemsRef.indexOf(a);if(o.id=a.id,l!==-1)M.likedItemsRef.splice(l,1),o.like+=-1,o.rate+=-1,o.rated=!1;else{o.rated=!0,M.likedItemsRef.push(a);const s=M.dislikedItemsRef.indexOf(a);s!==-1?(M.dislikedItemsRef.splice(s,1),o.like+=1):(o.like+=1,o.rate+=1)}},dt=a=>{const l=M.dislikedItemsRef.indexOf(a);if(o.id=a.id,l!==-1)M.dislikedItemsRef.splice(l,1),o.rate+=-1,o.rated=!1;else{o.rated=!0,M.dislikedItemsRef.push(a);const s=M.likedItemsRef.indexOf(a);s!==-1?(M.likedItemsRef.splice(s,1),o.like+=-1):o.rate+=1}},M=t,it=D(!1),X=D({}),v=a=>{it.value=!0,X.value=a},m=a=>{a.target.src="/images/default.png"};function I(a){x(a.target,300)}function S(a){x(a.target,110)}function x(a,l){const s=a.naturalWidth,q=a.naturalHeight,w=Math.min(s,l),ot=w/s,pt=q*ot;a.style.width=`${w}px`,a.style.height=`${pt}px`}return(a,l)=>(r(),d(J,null,[n("div",Qe,[(r(!0),d(J,null,G(u(e),(s,q)=>(r(),d("div",{key:q,class:"col-12 sm:col-12 md:col-6 lg:col-4 border-round surface-section shadow-1 p-2"},[n("div",Je,[n("div",{class:rt(["flex flex-row",s.subitem?"":"flex-grow-1"]),onClick:w=>v(s)},[n("div",Ye,[n("img",{src:s.image,alt:s.name,class:"w-full h-full",style:{"object-fit":"cover"},onError:m,onLoad:S},null,40,Ge)]),n("div",Ze,[n("div",ta,f(u(_).getItemLocalValue(s,"name")),1),n("div",null,[n("div",ea,[n("div",aa,[(r(),d(J,null,G(5,w=>n("i",{key:w,class:rt(["pi invert-star",w<=Math.floor(s.likes/s.rates*5)?"pi-star-fill":w-.5<=s.likes/s.rates*5?"pi-star-half-fill":"pi-star"]),style:{color:"black"}},null,2)),64)),n("p",null,"("+f(s.rates?s.rates:0)+")",1)])])]),n("div",null,[n("p",sa,f(u(_).getItemLocalValue(s,"description")),1)])])],10,Xe),s.subitem===void 0?(r(),d("div",{key:0,class:rt(["flex ml-2 mr-2 mb-2",s.price>0?"justify-content-between":"justify-content-end"])},[!s.discount&&s.price>0?(r(),d("span",na,"€"+f(s.price),1)):k("",!0),s.discount?(r(),d("div",oa,[n("span",ia,"€"+f(s.dis_price),1),n("span",la,"€"+f(s.price),1),y(u(_t),{severity:"danger",value:"-"+s.discount+"%"},null,8,["value"])])):k("",!0),s.soldout?k("",!0):(r(),d("div",ra,[y(u(K),{icon:"pi pi-minus",rounded:"",disabled:s.quantity<=0,onClick:w=>g(q,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),n("span",ua,f(s.quantity),1),y(u(K),{icon:"pi pi-plus",rounded:"",disabled:O(s),onClick:w=>g(q,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])),s.soldout?(r(),d("div",ca,[y(u(_t),{severity:"danger",value:a.$t("common.soldout")},null,8,["value"])])):k("",!0)],2)):k("",!0),s.subitem?(r(!0),d(J,{key:1},G(s.subitem,(w,ot)=>(r(),d(J,{key:"index"},[V(w)?(r(),d("div",da,[n("div",pa,[n("div",fa,[n("span",va,f(N(w)),1),C(w)?(r(),d("span",ha,"€"+f(tt(w)),1)):k("",!0),P(w)?(r(),d("div",ba,[n("span",ma,"€"+f(B(w)),1),n("span",ga,"€"+f(tt(w)),1),y(u(_t),{severity:"danger",value:"-"+st(w)+"%"},null,8,["value"])])):k("",!0)]),j(w)?k("",!0):(r(),d("div",ya,[y(u(K),{icon:"pi pi-minus",rounded:"",disabled:T(w)<=0,onClick:pt=>i(w,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),n("span",_a,f(T(w)),1),y(u(K),{icon:"pi pi-plus",rounded:"",disabled:$(w),onClick:pt=>i(w,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])),j(w)?(r(),d("div",wa,[y(u(_t),{severity:"danger",value:a.$t("common.soldout")},null,8,["value"])])):k("",!0)])])):k("",!0)],64))),128)):k("",!0)])]))),128))]),y(u($t),{visible:it.value,"onUpdate:visible":l[2]||(l[2]=s=>it.value=s),modal:"",header:"dish",style:Pt([{width:"23rem"},{width:"80vw","max-width":"700px"}]),onHide:l[3]||(l[3]=s=>nt())},{header:z(()=>[n("div",ka,[y(u(ie),{image:c(),class:"w-full"},null,8,["image"])]),n("span",$a,f(a.$t("common.details")),1)]),default:z(()=>[n("div",xa,[n("span",Ta,f(u(_).getItemLocalValue(X.value,"name")),1)]),n("div",Ia,[n("span",Da,f(u(_).getItemLocalValue(X.value,"description")),1)]),n("div",Ca,[n("div",Sa,[n("img",{class:"w-full h-auto object-contain",src:X.value.image,alt:X.value.name,onError:m,onLoad:I},null,40,Ba)])]),n("div",Pa,[(r(!0),d(J,null,G(X.value.allergies,(s,q)=>(r(),d("img",{src:"images/"+s+".png",alt:s,class:"w-2rem h-2rem border-round flex-shrink-0",style:{"object-fit":"cover","min-width":"2rem"}},null,8,Na))),256)),n("div",Aa,[n("button",{onClick:l[0]||(l[0]=s=>ht(X.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[n("i",{class:rt(["pi pi-thumbs-up text-xl",M.likedItemsRef.includes(X.value)?"text-green-500":"text-gray-400"])},null,2)]),n("button",{onClick:l[1]||(l[1]=s=>dt(X.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[n("i",{class:rt(["pi pi-thumbs-down text-xl",M.dislikedItemsRef.includes(X.value)?"text-red-500":"text-gray-400"])},null,2)])])])]),_:1},8,["visible"])],64))}},za=Dt(La,[["__scopeId","data-v-e8933770"]]),qa={key:0,class:"text-3xl font-bold"},Oa={class:"flex flex-column gap-3 p-1"},Ea={key:0,class:"flex flex-column gap-1"},Ra={key:0,class:"m-0"},Va={key:0,class:"m-0"},ja={class:"flex justify-content-between gap-4 mt-1"},Ma={class:"flex align-items-center gap-2"},Fa=["src","alt"],Ka={class:"flex-grow-1 min-width-0 max-w-18rem"},Wa={class:"flex flex-column gap-1"},Ha={class:"flex align-items-center gap-2"},Ua={class:"text-xl font-bold line1 whitespace-nowrap overflow-hidden text-overflow-ellipsis",style:{"max-width":"20rem"}},Qa={class:"flex align-items-end gap-1"},Ja={key:0,class:"text-xl font-bold text-primary"},Xa={key:1,class:"text-xl font-bold text-primary"},Ya={key:2,class:"text-sm text-color-secondary"},Ga={key:0,class:"text-xs text-primary"},Za={class:"flex-shrink-0 flex flex-wrap justify-content-between align-items-center gap-1"},ts={class:"flex flex-wrap justify-content-between align-content-center"},es={class:"flex align-items-center gap-1"},as={class:"w-2rem text-center"},ss={key:1,class:"flex flex-column gap-2 mt-2"},ns={for:"in_label"},os={for:"in_label"},is={class:"bottom-0 left-0 mt-2"},ls={class:"text-2xl font-bold"},rs={class:"text-2xl font-bold text-primary pl-2"},us={class:"flex justify-content-between"},cs={__name:"Cart",props:{updateCartItemCount:{type:Function,required:!0},checkout:{type:Function,required:!0},isTakeaway:Boolean},setup(t,{expose:e}){const o=ee(),{t:c}=gt(),g=Z.cartDishs;_.freeCounts;const i=D([]),T=D(),$=D(),O=D(!1),V=D(!1),j=D(!0),N=D(""),Q=D("");function tt(a,l){let s="";return a.forEach(q=>{s=s+c(`${l}Data.ingredients.${q.id}`)+" / "}),s}function B(a,l,s){const q=_.customDishAPI.getCustomDishByName(a);if(q){const w=q.types[l].typeName;return c(`${s}Data.${w}`)}else return null}const st=(a,l)=>{const s=i.value[a].quantity+l;s>=0&&(i.value[a].quantity=s,nt.updateCartItemCount(l))};function P(a){a&&T.value&&(T.value.dishNote=$.value?$.value:void 0),V.value=!1}function C(){$.value&&($.value=void 0),T.value&&(T.value=void 0)}function W(a){T.value=a,$.value=T.value.dishNote?T.value.dishNote:void 0,V.value=!0}const nt=t;e({showDishList:a=>{O.value=!0,i.value.length=0;for(let l=0;l<a.length;l++)i.value.push(a[l]);j.value=i.value.length==0&&g.length==0}});function dt(a){switch(a){case"Bibimbap":return"customDishBibimbap";case"Sushi Aleatória®":return"customDishSushiBox";case"MY BOX":return"customDishMyBox";default:return"Unexpected"}}function M(a){Z.removeItem(a)}function it(){nt.isTakeaway?X():v()}function X(){const a=[];g.value.forEach(l=>{a.push(l)}),i.value.forEach(l=>{l.quantity>0&&a.push(l)}),a.length<=0?at.show_warn(c("notification.select_at_least_one")):(O.value=!1,o.push({path:"/paymentPage"}))}function v(){nt.checkout({name:N.value,note:Q.value})&&(O.value=!1),g.value.forEach(a=>{a.dishNote=void 0}),i.value.forEach(a=>{a.dishNote=void 0}),Q.value="",localStorage.removeItem("order_cartDishs"),localStorage.removeItem("order_dishDatas")}function m(a){return a.subname!=""&&a.subname!="Default Title"?a.name+" "+a.subname:a.name}function I(){let a=0;return g.value.forEach(l=>{a+=l.dis_price?l.dis_price*l.count:l.price*l.count}),i.value.forEach(l=>{a+=l.dis_price?l.dis_price*l.quantity:l.price*l.quantity}),"€"+a.toFixed(2)}const S=a=>{a.target.src="/images/default.png"},x=a=>{const l=a.quantity;let s=3;return a.price>0&&(s=9),l>=s};return(a,l)=>(r(),d(J,null,[y(u($t),{class:"bg-primary-reverse text-sm md:text-lg lg:text-xl",visible:O.value,"onUpdate:visible":l[2]||(l[2]=s=>O.value=s),modal:"",header:a.$t("common.cart"),style:Pt([{backgroundColor:"rgba(250, 250, 250, 1)",height:"100%",minWidth:"24rem"},{width:"80vw","max-width":"700px"}]),dismissableMask:!0},{footer:z(()=>[n("div",is,[n("span",ls,f(a.$t("common.total"))+": ",1),n("span",rs,f(I()),1),y(u(K),{icon:t.isTakeaway?"pi pi-wallet":"pi pi-plus",class:"p-button-success p-button-rounded ml-3",onClick:it,label:t.isTakeaway?u(c)("common.pay"):u(c)("common.send")},null,8,["icon","label"])])]),default:z(()=>[j.value?(r(),d("h2",qa,"Cart is empty.")):k("",!0),n("div",Oa,[(r(!0),d(J,null,G(u(g),(s,q)=>(r(),Y(u(xe),{style:{overflow:"hidden"},key:q},{title:z(()=>[kt(f(a.$t(`common.${s.name.toLowerCase().replace(/\s+/g,"")}`)),1)]),subtitle:z(()=>[kt(f(a.$t("common.price"))+" : "+f(s.price)+"€",1)]),content:z(()=>[u(_).customDishAPI.customDishes.value.find(w=>w.name==s.name)?(r(),d("div",Ea,[(r(!0),d(J,null,G(s.notesAndId,(w,ot)=>(r(),d("div",null,[s.notesAndId[ot].length!==0?(r(),d("span",Ra,f(B(s.name,ot,dt(s.name)))+": "+f(tt(s.notesAndId[ot],dt(s.name))),1)):k("",!0)]))),256)),n("div",null,[s.dishNote?(r(),d("span",Va,f(a.$t("common.note"))+": "+f(s.dishNote),1)):k("",!0)])])):k("",!0)]),footer:z(()=>[n("div",ja,[t.isTakeaway?k("",!0):(r(),Y(u(K),{key:0,label:u(c)("common.edit")+" "+u(c)("common.note"),severity:"contrast",onClick:w=>W(s)},null,8,["label","onClick"])),y(u(K),{label:u(c)("common.remove"),severity:"danger",onClick:w=>M(s)},null,8,["label","onClick"])])]),_:2},1024))),128)),(r(!0),d(J,null,G(i.value,(s,q)=>(r(),d("div",{key:q,class:"p-2 border-round shadow-1 transition-all transition-duration-200 hover:shadow-3 flex flex-column gap-1"},[n("div",Ma,[n("img",{src:s.image,alt:s.name,class:"w-4rem h-4rem border-round flex-shrink-0",onError:S,style:{"object-fit":"cover","min-width":"4rem"}},null,40,Fa),n("div",Ka,[n("div",Wa,[n("div",Ha,[n("span",Ua,f(m(s)),1)])]),n("div",Qa,[s.dis_price?(r(),d("span",Ja,"€"+f(s.dis_price),1)):k("",!0),!s.dis_price&&s.price>0?(r(),d("span",Xa,"€"+f(s.price),1)):k("",!0),s.price>0?(r(),d("span",Ya,"/uni.")):k("",!0)])])]),n("div",null,[s.dishNote?(r(),d("span",Ga,f(u(c)("common.note")+": "+s.dishNote),1)):k("",!0)]),n("div",Za,[n("div",ts,[t.isTakeaway?k("",!0):(r(),Y(u(K),{key:0,label:u(c)("common.edit")+" "+u(c)("common.note"),severity:"contrast",class:"w-3.5rem h-2rem",onClick:w=>W(s)},null,8,["label","onClick"]))]),n("div",es,[y(u(K),{icon:"pi pi-minus",rounded:"",disabled:s.quantity<=0,onClick:w=>st(q,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),n("span",as,f(s.quantity),1),y(u(K),{icon:"pi pi-plus",rounded:"",disabled:x(s),onClick:w=>st(q,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])])]))),128))]),t.isTakeaway?k("",!0):(r(),d("div",ss,[y(u(Jt),{variant:"in"},{default:z(()=>[y(u(ne),{id:"in_label",modelValue:N.value,"onUpdate:modelValue":l[0]||(l[0]=s=>N.value=s),variant:"filled",maxlength:"20"},null,8,["modelValue"]),n("label",ns,f(u(c)("common.name")),1)]),_:1}),y(u(Jt),{variant:"in"},{default:z(()=>[y(u(Kt),{id:"in_label",class:"min-w-full",rows:"5",modelValue:Q.value,"onUpdate:modelValue":l[1]||(l[1]=s=>Q.value=s),variant:"filled",maxlength:"200"},null,8,["modelValue"]),n("label",os,f(u(c)("common.observation")),1)]),_:1})]))]),_:1},8,["visible","header"]),y(u($t),{visible:V.value,"onUpdate:visible":l[6]||(l[6]=s=>V.value=s),header:u(c)("common.note"),onHide:l[7]||(l[7]=s=>C()),modal:"",dismissableMask:!0},{default:z(()=>[y(u(Kt),{modelValue:$.value,"onUpdate:modelValue":l[3]||(l[3]=s=>$.value=s),rows:"5",cols:"30",placeholder:u(c)("common.edit")+" "+u(c)("common.note")+"...",maxlength:"100"},null,8,["modelValue","placeholder"]),n("div",us,[y(u(K),{label:u(c)("common.cancel"),severity:"danger",onClick:l[4]||(l[4]=s=>P(!1))},null,8,["label"]),y(u(K),{label:u(c)("common.save"),severity:"primary",size:"sm",onClick:l[5]||(l[5]=s=>P(!0))},null,8,["label"])])]),_:1},8,["visible","header"])],64))}},ds=Dt(cs,[["__scopeId","data-v-591e334d"]]);var ps=Lt`
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
`,fs={root:"p-overlaybadge"},vs=yt.extend({name:"overlaybadge",style:ps,classes:fs}),hs={name:"OverlayBadge",extends:oe,style:vs,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},le={name:"OverlayBadge",extends:hs,inheritAttrs:!1,components:{Badge:oe}};function bs(t,e,o,c,g,i){var T=pe("Badge");return r(),d("div",U({class:t.cx("root")},t.ptmi("root")),[vt(t.$slots,"default"),y(T,U(t.$props,{pt:t.ptm("pcBadge")}),null,16,["pt"])],16)}le.render=bs;function Gt(t){switch(t){case"Sushi Aleatória®":return"customDishSushiBox";case"Bibimbap":return"customDishBibimbap";case"MY BOX":return"customDishMyBox";default:return"unexpected"}}const ms={class:"m-3"},gs={class:"flex flex-column gap-2"},ys={class:"w-full flex justify-content-center"},_s={key:0,class:"max-w-19rem"},ws=["src"],ks={style:{width:"300px",height:"300px",background:"url(/boxImage/box.png)"}},$s={key:0,class:"flex align-items-center justify-content-center text-4xl font-bold text-white w-full h-full"},xs={key:1,class:"grid m-0 p-2"},Ts=["onClick"],Is={class:"flex align-items-center justify-content-center font-bold m-0 p-0",style:{width:"94px",height:"94px"}},Ds=["src"],Cs={class:"flex flex-wrap justify-content-between align-items-center m-1"},Ss={class:"flex gap-1 align-items-center"},Bs={key:0},Ps={class:"font-bold mb-2"},Ns={key:1,class:"flex justify-content-between gap-2 mt-3"},As={class:"font-bold mb-2"},Ls={class:"flex mr-2"},zs={class:"w-3rem text-xl text-center"},qs={class:"font-bold block mb-2"},Os={class:"flex flex-wrap"},Es={key:2,class:"flex flex-wrap gap-2 mt-3"},Rs={class:"font-bold block mb-2"},Vs={class:"font-bold block mb-2 text-center"},js={class:"flex flex-wrap gap-2 mt-3"},Ms={__name:"CustomDish",props:{currentCustomDish:Object},setup(t){const{locale:e}=gt(),o=t,c=fe(),{t:g}=gt(),i=ft(()=>o.currentCustomDish),T=ft(()=>i.boxImages),$=D(0),O=ft(()=>i.value.initialPrice),V=D(O.value);ve(()=>i,v=>{V.value=(v==null?void 0:v.initialPrice)??0,$.value=0,j.value=null});const j=D(null),N=ft(()=>{const v=e.value,m=`title_${v}`,I=`description_${v}`;return i.value.descriptions.map(S=>({title:S[m],descriptions:S.descriptions.map(x=>x[I]),image:S==null?void 0:S.image}))}),Q=ft(()=>{var I,S;const v=Number(((I=i.value)==null?void 0:I.like)??0),m=Number(((S=i.value)==null?void 0:S.rate)??0);return m?v/m*5:0});function tt(v,m,I){const S=v[m];if(S.selected){S.selected=!1;return}else{const a=v.filter(l=>l.selected).length;if(I===1){M(v),S.selected=!0;return}a<I&&(S.selected=!0)}}function B(v,m,I){tt(v,m,I),st(v)}function st(v){let m=O.value;if(!v||!Array.isArray(v))return V.value=m,m;const I=v.reduce((S,x)=>{if(!x.dishes||!Array.isArray(x.dishes))return S;const a=x.dishes.reduce((l,s)=>l+(s.selected?s.price:0),0);return S+a},0);return m+=I,V.value=m,m}function P(v){return v.selected}function C(){if(!it(i.value.types))return;const v=nt(i.value.types),m=ht(i.value.types);Z.addItem({dishid:-1,name:i.value.name,category:o.currentCustomDish.category,count:$.value!==0?$.value:1,price:V.value===0?st():V.value,notes:v,notesAndId:m}),console.log("CART: ",Z.cartDishs),dt(i.value.types),at.show({severity:"info",summary:"info",detail:g("customDishBibimbapVue.addToCartSuccessBibimbap")})}function W(v){return!v||!v.dishes?"":v.dishes.filter(I=>I.selected).map(I=>I.name).join(",")}function nt(v){return v?v.map(m=>W(m)):[]}function ht(v){return v?v.map(m=>m.dishes?m.dishes.filter(I=>I.selected).map(I=>({id:I.dishid,name:I.name})):[]):[]}function dt(v){v&&v.forEach(m=>{m.dishes&&m.dishes.forEach(I=>{I.selected=!1})})}function M(v){v.forEach(m=>m.selected=!1)}function it(v){if(i.value.options.quantity&&$.value<=0)return at.show({severity:"warn",detail:g("notification.quantity_must_be_positive")}),!1;for(const m of v){const I=m.dishes.filter(S=>S.selected).length;if(console.log(I,m.minQuantity),I<m.minQuantity){const S=m.typeName;return at.show({severity:"warn",detail:g("notification.select_type_of",{name:S})}),!1}}return!0}function X(v){v?_.customDishAPI.like(i.value.id)&&(j.value="like",c.add({severity:"success",summary:g("common.success"),detail:g("common.rate")+" "+g("common.success"),life:750})):_.customDishAPI.unLike(i.value.id)&&(j.value="unlike",c.add({severity:"success",summary:g("common.success"),detail:g("common.rate")+" "+g("common.success"),life:750}))}return(v,m)=>{var I,S;return r(),d("div",ms,[n("div",gs,[y(u(Qt),{class:"w-full max-w-xl mx-auto"},{default:z(()=>[(r(!0),d(J,null,G(N.value,(x,a)=>(r(),Y(u(Ut),{key:a,value:a},{default:z(()=>[y(u(Wt),null,{default:z(()=>[kt(f(x.title),1)]),_:2},1024),y(u(Ht),null,{default:z(()=>{var l;return[(r(!0),d(J,null,G(x.descriptions,(s,q)=>(r(),d("p",{key:q},f(s),1))),128)),n("div",ys,[(l=x.image)!=null&&l.src?(r(),d("div",_s,[n("img",{src:x.image.src,class:"w-full"},null,8,ws)])):k("",!0)])]}),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1}),((S=(I=i.value)==null?void 0:I.value)==null?void 0:S.name)==="MY BOX"?(r(),Y(u(Qt),{key:0,class:"w-full max-w-xl mx-auto"},{default:z(()=>[y(u(Ut),{value:"0"},{default:z(()=>[y(u(Wt),null,{default:z(()=>[kt(" 🥩 "+f(v.$t("common.showMybox")),1)]),_:1}),y(u(Ht),null,{default:z(()=>[n("div",ks,[v.isEmptyArray(T.value)?(r(),d("div",$s,f(v.$t("common.myboxAlarm")),1)):k("",!0),v.isEmptyArray(T.value)?k("",!0):(r(),d("div",xs,[(r(!0),d(J,null,G(T.value,x=>(r(),d("div",{class:"col-4 p-0",onClick:a=>v.imageSelectAction(x)},[n("div",Is,[x?(r(),d("img",{key:0,class:"m-0 p-0",src:v.imagePath(x),style:{width:"82px",height:"82px"}},null,8,Ds)):k("",!0)])],8,Ts))),256))]))])]),_:1})]),_:1})]),_:1})):k("",!0)]),n("div",Cs,[n("div",Ss,[(r(),d(J,null,G(5,x=>n("i",{key:x,class:rt(["pi invert-star",x<=Math.floor(Q.value)?"pi-star-fill":x-.5<=Q.value?"pi-star-half":"pi-star"]),style:{color:"black"}},null,2)),64)),n("p",null,"("+f(i.value.rate?i.value.rate:0)+")",1)]),n("div",null,[y(u(K),{text:"",icon:"pi pi-thumbs-up",severity:j.value==="like"?"success":"",onClick:m[0]||(m[0]=x=>X(!0))},null,8,["severity"]),y(u(K),{text:"",icon:"pi pi-thumbs-down",severity:j.value==="unlike"?"danger":"",onClick:m[1]||(m[1]=x=>X(!1))},null,8,["severity"])])]),i.value.options.extraInfo?(r(),d("div",Bs,[n("label",Ps,f(i.value.options.extraInfo),1)])):k("",!0),i.value.options.quantity?(r(),d("div",Ns,[n("div",null,[n("label",As,f(v.$t("common.quantity"))+" / "+f(v.$t("common.pieces")),1)]),n("div",Ls,[y(u(K),{icon:"pi pi-minus",disabled:$.value<=0,onClick:m[2]||(m[2]=x=>$.value-=i.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"]),n("span",zs,f($.value),1),y(u(K),{icon:"pi pi-plus",disabled:$.value>=i.value.options.maxQuantity,onClick:m[3]||(m[3]=x=>$.value+=i.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"])])])):k("",!0),(r(!0),d(J,null,G(i.value.types,(x,a)=>(r(),d("div",null,[n("label",qs,f(a+1)+". "+f(v.$t(`${u(Gt)(i.value.name)}Data.${x.typeName}`)),1),n("div",Os,[(r(!0),d(J,null,G(x.dishes,(l,s)=>(r(),Y(u(K),{key:s,onClick:q=>B(x.dishes,s,$.value==0?x.maxQuantity:x.maxQuantity*$.value),class:rt([{"p-button-primary":P(l),"p-button-outlined":!P(l)},"m-1"])},{default:z(()=>[n("p",{class:rt({"text-gray-700":!P(l)})},f(v.$t(`${u(Gt)(i.value.name)}Data.ingredients.${l.dishid}`)),3)]),_:2},1032,["onClick","class"]))),128))])]))),256)),O.value!==0?(r(),d("div",Es,[n("label",Rs,f(v.$t("common.price"))+":",1),n("label",Vs,f(V.value+"€"),1)])):k("",!0),n("div",js,[y(u(K),{icon:"pi pi-shopping-cart",onClick:m[4]||(m[4]=x=>C()),label:v.$t("common.addToCart"),class:"m-3",severity:"primary",raised:""},null,8,["label"])])])}}},Fs=Dt(Ms,[["__scopeId","data-v-f03c4609"]]);var Ks=Lt`
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
`,Ws={root:function(e){var o=e.props;return["p-tabs p-component",{"p-tabs-scrollable":o.scrollable}]}},Hs=yt.extend({name:"tabs",style:Ks,classes:Ws}),Us={name:"BaseTabs",extends:It,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:Hs,provide:function(){return{$pcTabs:this,$parentInstance:this}}},re={name:"Tabs",extends:Us,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function Qs(t,e,o,c,g,i){return r(),d("div",U({class:t.cx("root")},t.ptmi("root")),[vt(t.$slots,"default")],16)}re.render=Qs;var Js={root:"p-tablist",content:function(e){var o=e.instance;return["p-tablist-content",{"p-tablist-viewport":o.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Xs=yt.extend({name:"tablist",classes:Js}),Ys={name:"BaseTabList",extends:It,props:{},style:Xs,provide:function(){return{$pcTabList:this,$parentInstance:this}}},ue={name:"TabList",extends:Ys,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,o=this.getVisibleButtonWidths(),c=Rt(e)-o,g=Math.abs(e.scrollLeft),i=c*.8,T=g-i,$=Math.max(T,0);e.scrollLeft=Ft(e)?-1*$:$},onNextButtonClick:function(){var e=this.$refs.content,o=this.getVisibleButtonWidths(),c=Rt(e)-o,g=Math.abs(e.scrollLeft),i=c*.8,T=g+i,$=e.scrollWidth-c,O=Math.min(T,$);e.scrollLeft=Ft(e)?-1*O:O},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,o=e.content,c=e.inkbar,g=e.tabs;if(c){var i=Vt(o,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(c.style.height=be(i)+"px",c.style.top=St(i).top-St(g).top+"px"):(c.style.width=me(i)+"px",c.style.left=St(i).left-St(g).left+"px")}},updateButtonState:function(){var e=this.$refs,o=e.list,c=e.content,g=c.scrollTop,i=c.scrollWidth,T=c.scrollHeight,$=c.offsetWidth,O=c.offsetHeight,V=Math.abs(c.scrollLeft),j=[Rt(c),he(c)],N=j[0],Q=j[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=g!==0,this.isNextButtonEnabled=o.offsetHeight>=O&&parseInt(g)!==T-Q):(this.isPrevButtonEnabled=V!==0,this.isNextButtonEnabled=o.offsetWidth>=$&&parseInt(V)!==i-N)},getVisibleButtonWidths:function(){var e=this.$refs,o=e.prevButton,c=e.nextButton,g=0;return this.showNavigators&&(g=((o==null?void 0:o.offsetWidth)||0)+((c==null?void 0:c.offsetWidth)||0)),g}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return zt({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:Te,ChevronRightIcon:Ie},directives:{ripple:ae}},Gs=["data-p"],Zs=["aria-label","tabindex"],tn=["data-p"],en=["aria-orientation"],an=["aria-label","tabindex"];function sn(t,e,o,c,g,i){var T=Nt("ripple");return r(),d("div",U({ref:"list",class:t.cx("root"),"data-p":i.dataP},t.ptmi("root")),[i.showNavigators&&g.isPrevButtonEnabled?At((r(),d("button",U({key:0,ref:"prevButton",type:"button",class:t.cx("prevButton"),"aria-label":i.prevButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return i.onPrevButtonClick&&i.onPrevButtonClick.apply(i,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(r(),Y(wt(i.templates.previcon||"ChevronLeftIcon"),U({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,Zs)),[[T]]):k("",!0),n("div",U({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)}),"data-p":i.dataP},t.ptm("content")),[n("div",U({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":i.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[vt(t.$slots,"default"),n("span",U({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,en)],16,tn),i.showNavigators&&g.isNextButtonEnabled?At((r(),d("button",U({key:1,ref:"nextButton",type:"button",class:t.cx("nextButton"),"aria-label":i.nextButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return i.onNextButtonClick&&i.onNextButtonClick.apply(i,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(r(),Y(wt(i.templates.nexticon||"ChevronRightIcon"),U({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,an)),[[T]]):k("",!0)],16,Gs)}ue.render=sn;var nn={root:function(e){var o=e.instance,c=e.props;return["p-tab",{"p-tab-active":o.active,"p-disabled":c.disabled}]}},on=yt.extend({name:"tab",classes:nn}),ln={name:"BaseTab",extends:It,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:on,provide:function(){return{$pcTab:this,$parentInstance:this}}},ce={name:"Tab",extends:ln,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var o=this.findNextTab(e.currentTarget);o?this.changeFocusedTab(e,o):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var o=this.findPrevTab(e.currentTarget);o?this.changeFocusedTab(e,o):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var o=this.findFirstTab();this.changeFocusedTab(e,o),e.preventDefault()},onEndKey:function(e){var o=this.findLastTab();this.changeFocusedTab(e,o),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findNextTab:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=o?e:e.nextElementSibling;return c?Bt(c,"data-p-disabled")||Bt(c,"data-pc-section")==="activebar"?this.findNextTab(c):Vt(c,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=o?e:e.previousElementSibling;return c?Bt(c,"data-p-disabled")||Bt(c,"data-pc-section")==="activebar"?this.findPrevTab(c):Vt(c,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,o){ye(o),this.scrollInView(o)},scrollInView:function(e){var o;e==null||(o=e.scrollIntoView)===null||o===void 0||o.call(e,{block:"nearest"})}},computed:{active:function(){var e;return ge((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},attrs:function(){return U(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return zt({active:this.active})}},directives:{ripple:ae}};function rn(t,e,o,c,g,i){var T=Nt("ripple");return t.asChild?vt(t.$slots,"default",{key:1,dataP:i.dataP,class:rt(t.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs,onClick:i.onClick}):At((r(),Y(wt(t.as),U({key:0,class:t.cx("root"),"data-p":i.dataP,onClick:i.onClick},i.attrs),{default:z(function(){return[vt(t.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[T]])}ce.render=rn;const un={class:"fixed top-0 left-0 w-full bg-primary-reverse",style:{"z-index":"10"}},cn={class:"grid mt-3 ml-3"},dn={class:"max-w-5rem flex align-items-center"},pn=["src"],fn={class:"flex align-items-center"},vn={key:0,class:"text-color font-bold p-1"},hn={key:1,class:"text-color font-bold p-1"},bn={class:"card flex mr-3",style:{"margin-left":"auto"}},mn={style:{display:"flex","align-items":"center"}},gn={style:{"flex-grow":"1",width:"0",overflow:"hidden"}},yn={class:"mt-2"},_n={class:"flex justify-content-end mt-2"},wn={__name:"HeaderTabs",props:{types:Array,typeIndex:Number,tableId:String,tabItems:Array},emits:["clickType","switchToWelcome"],setup(t,{emit:e}){const{t:o}=gt();function c(){var W;const P=_.currentPage.value,C=(W=P==null?void 0:P.data)==null?void 0:W.logoPath;return C?_.pathFormated(C):"/images/logo_logo.png"}function g(){return _.getTable()}const i=D(),T=ft(()=>[{label:o("common.options"),items:[{label:o("common.pay"),icon:"pi pi-wallet",command:()=>{tt()}},{label:o("common.call"),icon:"pi pi-user-plus",command:()=>{_.send_cmd(g(),{cmd:"call"}),at.show_info(o("notification.call_msg"))}}]}]),$=P=>{i.value.toggle(P)},O=P=>{V.value.toggle(P)},V=D(),j=D(!1),N=D(),Q=D();function tt(){j.value=!0}function B(){P(N.value)?_.send_cmd(g(),{cmd:"pay",nif:N.value,note:Q.value},C=>{C.success?(at.show_info(o("notification.pay_msg")),j.value=!1):at.show_error(o("common.failed"))}):at.show_warn(o("notification.cancel_msg"));function P(C){return!C||C.toString().length===9||C.toString().length===0}}function st(){Q.value&&(Q.value=void 0)}return(P,C)=>(r(),d(J,null,[n("div",un,[n("div",cn,[n("div",dn,[n("img",{src:c(),class:"w-full",clickble:"",onClick:C[0]||(C[0]=()=>P.$emit("switchToWelcome"))},null,8,pn)]),n("div",fn,[t.tableId?(r(),d("p",vn,f(P.$t("common.table"))+": "+f(t.tableId),1)):k("",!0),t.tableId?k("",!0):(r(),d("p",hn,f(P.$t("common.takeAway")),1))]),n("div",bn,[t.tableId?(r(),Y(u(K),{key:0,icon:"pi pi-bell",rounded:"","aria-label":"Filter",onClick:$,"aria-haspopup":"true","aria-controls":"overlay_menu"})):k("",!0),y(u(Xt),{ref_key:"menu",ref:i,id:"overlay_menu",model:T.value,popup:!0},null,8,["model"])])]),n("div",mn,[n("div",null,[y(u(K),{icon:"pi pi-bars",variant:"text",rounded:"","aria-label":"Filter",onClick:O,"aria-haspopup":"true","aria-controls":"tab_menu"}),y(u(Xt),{ref_key:"tabMenu",ref:V,id:"tab_menu",model:t.tabItems,popup:!0},null,8,["model"])]),n("div",gn,[y(u(re),{value:t.typeIndex,scrollable:"",showNavigators:!1},{default:z(()=>[y(u(ue),null,{default:z(()=>[(r(!0),d(J,null,G(t.types,(W,nt)=>(r(),Y(u(ce),{value:nt,onClick:()=>P.$emit("clickType",nt),class:"text-sm md:text-lg lg:text-xl"},{default:z(()=>[kt(f(W),1)]),_:2},1032,["value","onClick"]))),256))]),_:1})]),_:1},8,["value"])])])]),y(u($t),{visible:j.value,"onUpdate:visible":C[4]||(C[4]=W=>j.value=W),header:"结账",class:"flex flex-column",modal:!0,dismissableMask:!0,onHide:st},{default:z(()=>[n("div",null,[C[5]||(C[5]=n("label",null,"NIF:",-1)),y(u(De),{modelValue:N.value,"onUpdate:modelValue":C[1]||(C[1]=W=>N.value=W),inputId:"withoutgrouping",useGrouping:!1,fluid:"",class:"w-full m-1"},null,8,["modelValue"])]),n("div",yn,[n("label",null,f(P.$t("common.note"))+":",1),y(u(ne),{type:"text",modelValue:Q.value,"onUpdate:modelValue":C[2]||(C[2]=W=>Q.value=W),class:"w-full m-1"},null,8,["modelValue"])]),n("div",_n,[y(u(K),{label:u(o)("common.send"),onClick:C[3]||(C[3]=W=>B())},null,8,["label"])])]),_:1},8,["visible"])],64))}},kn={__name:"SwipeHint",props:{size:{type:String,default:"8rem"},duration:{type:Number,default:6e3},position:{type:String,default:"bottom"}},setup(t){const e=t,o=D(!0);se(()=>{e.duration>0&&setTimeout(()=>{o.value=!1},e.duration);const g=()=>{o.value=!1,window.removeEventListener("touchstart",g)};window.addEventListener("touchstart",g)});const c=ft(()=>{let g={left:"50%",transform:"translateX(-50%)",zIndex:99999,opacity:.5,pointerEvents:"none",textAlign:"center",position:"fixed"};return e.position==="top"?g.top="15%":e.position==="center"?(g.top="50%",g.transform="translate(-50%, -50%)"):g.bottom="15%",g});return(g,i)=>o.value?(r(),d("div",{key:0,class:"swipe-hint",style:Pt(c.value)},[n("div",{class:"hand",style:Pt({width:t.size,height:t.size,backgroundImage:"url(/images/hand_finger.png)"})},null,4)],4)):k("",!0)}},$n=Dt(kn,[["__scopeId","data-v-e5f3ff45"]]),xn={class:"w-full h-full flex flex-column"},Tn={class:"fixed bottom-0 left-0 w-full h-3rem bg-primary-reverse p-3"},In={class:"h-full flex align-items-center justify-content-between w-full"},Dn={class:"m-2"},Cn={class:"m-2"},Sn={style:{"max-height":"60vh","overflow-y":"auto","padding-bottom":"60px"}},Bn={class:"flex flex-column border-bottom-1"},Pn={key:0,class:"flex justify-content-between"},Nn={class:"flex flex-column"},An={class:"font-bold"},Ln={class:"text-right"},zn={key:1,class:"flex justify-content-between"},qn={class:"flex flex-column"},On={class:"font-bold"},En={class:"text-right"},Rn={key:0},Vn={key:1,class:"flex flex-column"},jn={class:"flex flex-column"},Mn={class:"font-bold"},Fn={class:"text-right"},Kn={class:"total-footer bg-primary-reverse"},Zt=2,te="order_time_key",Wn={__name:"HomePage",setup(t){const e=ee(),o=$e(),{t:c}=gt(),{locale:g}=gt(),i=D(!1),T=D([""]),$=D(0),O=Z.cartItemCount,V=D(!1),j=D([]),N=D(0),Q=D({}),tt=D(!1),B=F.dishDatas,st=D(null),P=D(null),C=D([]),W=D([]);function nt(p){p.touches[0].clientX,p.touches[0].clientY}const ht=()=>{$.value<T.value.length-1&&($.value++,w(),m($.value))},dt=()=>{$.value>0&&($.value--,w(),m($.value))};let M=()=>window.env.ENABLE_ROAST_DUCK;ft(()=>parseFloat(_.table.value.order.reduce((p,h)=>p+h.price*h.quantity,0).toFixed(2)));function it(p){O.value=O.value+p}D(X(_.customDishAPI.customDishes.value));function X(p){return p.map(h=>({...h,oldLike:0,update:!1}))}const v=(p,h,b,A)=>{_.rateDish(p,h,b),A&&at.show_success(c("notification.rating_submitted"))};function m(p){let h=_.getOrderMenuTab()[p];_.customDishAPI.customDishes.value.map(R=>R.name).includes(h)?(tt.value=!0,Q.value=_.customDishAPI.customDishes.value.find(R=>R.name==h)):tt.value=!1;let A=_.getMenu();if(A.length==0){console.log("exit");return}let H=[];for(let R=0;R<B.value.length;R++){let et=B.value[R];if(et.category==h){if(et.disable){if(!et.subitem)continue;let L=!0;for(let E=0;E<et.subitem.length;E++)A[et.subitem[E]].disable||(L=!1);if(L)continue}H.push(et)}}F.showDishList(H)}const I=()=>{_.refreshTableFromServer(),_.getTableTotalAmount(N),V.value=!0},S=(p,h,b)=>{const A=B.value.find(H=>H.id===p);A&&(A.likes=h,A.rates=b)},x=p=>{let h=p.id;p.org_id&&(h=p.org_id);for(let b=0;b<B.value.length;b++)if(B.value[b].id==h)for(const A in p){let H=A;A.startsWith("note")&&(H=H.replace("note","description")),B.value[b][H]=p[A]}},a={pt:[],zh:[],en:[]};function l(){return new Promise(p=>{let h=()=>{const b=_.getMenu();b.length>0?p(b):setTimeout(h,200)};h()})}function s(){return new Promise(p=>{let h=()=>{const b=_.getOrderMenuTab();b.length>0?p(b):setTimeout(h,200)};h()})}async function q(){let p=_.isTakeaway();var h=await l();_.onMenuItemChanged=x,_.onRatingChanged=S,B.value.length=0,p||(M()&&_.settings.value.hasBox&&(a.pt.push("My BOX"),a.zh.push("自定义九宫格"),a.en.push("My BOX")),M()&&_.settings.value.hasBibimbap&&(a.pt.push("Bibimbap"),a.zh.push("石锅拌饭"),a.en.push("Bibimbap")));const b={en:{},zh:{}};for(let L=0;L<h.length;L++){let E=h[L];if(p){if(E.orderType!="TAKEAWAY")continue}else if(E.orderType=="TAKEAWAY")continue;console.log(p,E.orderType);const mt=L;let ut={description:E.note,allergies:E.x,quantity:0,index:mt,description_cn:E.note_cn,description_en:E.note_en,likes:E.likes||0,rates:E.rates||0};if(ut={...E,...ut},b.zh[ut.category]=E.category_cn,b.en[ut.category]=E.category_en,B.value.push(ut),ut.category=="")for(let Et=0;Et<B.value.length;Et++){const ct=B.value[Et];if(ct.handle&&ct.handle==E.handle&&ct.category!=""){ct.subitem||(ct.subitem=[ct.index]),ct.subitem.push(B.value.length-1),ut.name=ct.name,ut.image==""&&(ut.image=ct.image);break}}}const A=await s();for(let L=0;L<A.length;L++)a.pt.push(A[L]),a.zh.push(b.zh[A[L]]||A[L]),a.en.push(b.en[A[L]]||A[L]);const H=localStorage.getItem("order_cartDishs");H&&H!="undefined"&&(Z.cartDishs.value=JSON.parse(H),Z.cartItemCount.value=Z.cartDishs.value.length);const R=localStorage.getItem("order_dishDatas");if(R&&R!="undefined"){let L=JSON.parse(R);for(let E=0;E<L.length;E++)for(let mt=0;mt<B.value.length;mt++)L[E].id==B.value[mt].id&&(B.value[mt].quantity=L[E].quantity,Z.cartItemCount.value+=L[E].quantity)}let et=localStorage.getItem("language")||we.global.locale;T.value=a[et]||a.pt;for(let L=0;L<T.value.length;L++){const E=L;j.value.push({label:T.value[L],command:()=>{ot(E),w()}})}}const w=()=>{ke(()=>{const p=document.querySelector(".p-tablist-viewport"),h=document.querySelector(".p-tab.p-tab-active");if(p&&h){const b=h.offsetLeft-p.offsetWidth/2+h.offsetWidth/2;p.scrollTo({left:b,behavior:"smooth"})}})},ot=p=>{m(p),$.value=p,w()},pt=()=>{var p=[];for(let b=0;b<B.value.length;b++){var h=B.value[b];h.quantity>0&&p.push(h)}P.value.showDishList(p)};function lt(){return _.getTable()}_.params.port,st.value=_.table.value.order;function bt(p){var h=c("notification.too_fast",{remainTime:p});at.show_warn(h)}const Ct=p=>{const h=[];for(let R=0;R<Z.cartDishs.value.length;R++){var b=Z.cartDishs.value[R];h.push({dishid:b.dishid,name:b.name,quantity:b.count,notes:b.notes,limit:b.limit,price:b.dis_price?b.dis_price:b.price,dishNote:b.dishNote,category:b.category})}for(let R=0;R<B.value.length;R++){var b=B.value[R];b.quantity>0&&h.push({dishid:b.id,name:b.name,quantity:b.quantity,limit:b.limit,price:b.dis_price?b.dis_price:b.price,dishNote:b.dishNote})}if(h.length===0)return at.show_warn(c("notification.select_at_least_one")),!1;console.log("cart item:",h);const A=JSON.parse(localStorage.getItem(te)||"{}"),H=Date.now();if(!A.startTime||H-A.startTime>Zt*1e3)A.startTime=H;else{const R=Zt-parseInt((H-A.startTime)/1e3);bt(R);return}return localStorage.setItem(te,JSON.stringify(A)),i.value=!0,_.submit_order({name:p.name,note:p.note,table:lt(),items:h}),!0};function qt(){const p=localStorage.getItem("language");p&&(g.value=p)}function jt(){for(let p=0;p<B.value.length;p++){const h=B.value[p];h.quantity=0}i.value=!1,O.value=0,Z.cartDishs.value.length=0}se(async()=>{await q(),qt(),m($.value),_.clear_order_data=()=>{jt()},_.setOnOrderConfirmed(p=>{console.log("setOnOrderConfirmed..."),jt();const h=p;at.show_success(c("notification.order_submitted",{id:h}))}),_.setOnShowError(p=>{i.value=!1,at.show_error(p)})});let Ot=!1;function de(){localStorage.removeItem("login_time"),Ot=!0;const p=o.query.table;p?e.push({path:"/",query:{table:p}}):e.push({path:"/takeReserve"})}function Mt(){localStorage.setItem("order_cartDishs",JSON.stringify(Z.cartDishs.value));const p=[],h=F.dishDatas.value;for(let b=0;b<h.length;b++)h[b].quantity>0&&p.push({id:h[b].id,quantity:h[b].quantity});localStorage.setItem("order_dishDatas",JSON.stringify(p)),(Z.cartDishs.value.length>0||p.length>0)&&localStorage.setItem("login_time",JSON.stringify(Date.now())),Ot&&(Ot=!1,localStorage.removeItem("login_time"))}return _e(()=>{Mt()}),window.addEventListener("beforeunload",p=>{_.cleanup(),Mt()}),(p,h)=>{const b=Nt("touch"),A=Nt("touch-options");return r(),d(J,null,[n("div",xn,[y(wn,{types:u(_).orderMenuTab,typeIndex:$.value,tabItems:j.value,tableId:lt(),onClickType:ot,onSwitchToWelcome:de},null,8,["types","typeIndex","tabItems","tableId"]),h[2]||(h[2]=n("div",{class:"pb-8"},null,-1)),h[3]||(h[3]=n("div",{class:"pb-7 sm:pb-7 md:pb-7 lg:pb-7"},null,-1)),y($n,{duration:"3000",position:"center"}),At((r(),d("div",{onTouchstart:nt,style:{"overflow-x":"hidden","touch-action":"pan-y"},class:"h-full"},[tt.value?(r(),Y(Fs,{key:0,currentCustomDish:Q.value},null,8,["currentCustomDish"])):(r(),Y(za,{key:1,updateCartItemCount:it,rateDish:v,likedItemsRef:C.value,dislikedItemsRef:W.value},null,8,["likedItemsRef","dislikedItemsRef"]))],32)),[[b,ht,"swipe",{left:!0,passive:!0}],[b,dt,"swipe",{right:!0,passive:!0}],[A,{swipeTolerance:100}]]),h[4]||(h[4]=n("div",{class:"pb-6"},null,-1)),n("div",Tn,[n("div",In,[n("div",Dn,[lt()?(r(),Y(u(K),{key:0,label:p.$t("common.orders"),icon:"pi pi-list",class:"p-button-secondary",onClick:I},null,8,["label"])):k("",!0)]),n("div",Cn,[y(u(le),{value:u(O),severity:"danger",onClick:pt},{default:z(()=>h[1]||(h[1]=[n("i",{class:"pi pi-shopping-cart",style:{"font-size":"2rem"}},null,-1)])),_:1,__:[1]},8,["value"])])])])]),y(ds,{ref_key:"cartRef",ref:P,updateCartItemCount:it,checkout:Ct,isTakeaway:!lt()},null,8,["isTakeaway"]),y(u($t),{visible:V.value,"onUpdate:visible":h[0]||(h[0]=H=>V.value=H),header:p.$t("common.completedOrders"),modal:"",style:{width:"80vw","max-width":"700px"}},{default:z(()=>{var H,R;return[n("div",Sn,[n("div",Bn,[(H=N.value.adultPrice)!=null&&H.quantity&&N.value.adultPrice.quantity!=0?(r(),d("div",Pn,[n("div",Nn,[n("span",An,f(p.$t("common.adult")),1),n("small",null,f(p.$t("common.quantity"))+": "+f(N.value.adultPrice.quantity),1)]),n("div",Ln,[n("span",null,"€"+f((Number(N.value.adultPrice.price)*N.value.adultPrice.quantity).toFixed(2)),1)])])):k("",!0),(R=N.value.childrenPrice)!=null&&R.quantity&&N.value.childrenPrice.quantity!=0?(r(),d("div",zn,[n("div",qn,[n("span",On,f(p.$t("common.children")),1),n("small",null,f(p.$t("common.quantity"))+": "+f(N.value.childrenPrice.quantity),1)]),n("div",En,[n("span",null,"€"+f((Number(N.value.childrenPrice.price)*N.value.childrenPrice.quantity).toFixed(2)),1)])])):k("",!0)]),u(_).table.value.order.length===0?(r(),d("div",Rn,f(p.$t("common.noOrders")),1)):(r(),d("div",Vn,[(r(!0),d(J,null,G(u(_).table.value.order,(et,L)=>(r(),d("div",{key:L,class:"flex justify-content-between border-bottom-1 pb-2"},[n("div",jn,[n("span",Mn,f(u(_).getDishName(et)),1),n("small",null,f(p.$t("common.quantity"))+": "+f(et.quantity),1)]),n("div",Fn,[n("span",null,"€"+f((et.price*et.quantity).toFixed(2)),1)])]))),128))]))]),n("div",Kn,f(p.$t("common.total"))+": €"+f(N.value.total),1)]}),_:1},8,["visible","header"])],64)}}},ao=Dt(Wn,[["__scopeId","data-v-00e49a6b"]]);export{ao as default};
