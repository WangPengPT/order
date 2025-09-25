import{v as Lt,B as gt,x as Tt,y as At,f as d,p as r,q as G,i as $,z as ht,A as U,C as _t,h as n,t as f,n as rt,r as C,g as y,F as J,l as Z,k as u,a as w,j as N,D as Bt,u as mt,s as wt,m as nt,e as te,E as de,G as pe,c as vt,w as fe,R as ee,H as Et,I as ve,J as Rt,K as he,L as Ct,M as be,N as Mt,O as Pt,P as Nt,Q as me,S as ge,T as St,o as ae,b as ye,U as _e,V as we,d as $e}from"./index-CttlD2Tp.js";import{s as $t,a as se}from"./index-C9syALIO.js";import{s as K,a as ne}from"./index-Avo7VnPU.js";import{D as F,c as et,s as Ft,a as ke}from"./index-C5aiGohI.js";import{_ as It,b as Kt,c as Wt,a as Ht,s as Ut}from"./_plugin-vue_export-helper-C27K28Ub.js";import{s as xe}from"./index-Cu-RjQ_7.js";import{s as Qt,a as Te}from"./index-CPa5rco1.js";import{s as Ie}from"./index-BJRujEmW.js";import{s as Jt}from"./index-uVEWDpdp.js";import"./index-B08UpjmR.js";var De=Lt`
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
`,Ce={root:function(e){var i=e.props;return["p-tag p-component",{"p-tag-info":i.severity==="info","p-tag-success":i.severity==="success","p-tag-warn":i.severity==="warn","p-tag-danger":i.severity==="danger","p-tag-secondary":i.severity==="secondary","p-tag-contrast":i.severity==="contrast","p-tag-rounded":i.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Se=gt.extend({name:"tag",style:De,classes:Ce}),Be={name:"BaseTag",extends:Tt,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Se,provide:function(){return{$pcTag:this,$parentInstance:this}}};function kt(t){"@babel/helpers - typeof";return kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kt(t)}function Pe(t,e,i){return(e=Ne(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Ne(t){var e=Le(t,"string");return kt(e)=="symbol"?e:e+""}function Le(t,e){if(kt(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var c=i.call(t,e);if(kt(c)!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var yt={name:"Tag",extends:Be,inheritAttrs:!1,computed:{dataP:function(){return At(Pe({rounded:this.rounded},this.severity,this.severity))}}},Ae=["data-p"];function ze(t,e,i,c,g,o){return r(),d("span",U({class:t.cx("root"),"data-p":o.dataP},t.ptmi("root")),[t.$slots.icon?(r(),G(_t(t.$slots.icon),U({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(r(),d("span",U({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):$("",!0),t.value!=null||t.$slots.default?ht(t.$slots,"default",{key:2},function(){return[n("span",U({class:t.cx("label")},t.ptm("label")),f(t.value),17)]}):$("",!0)],16,Ae)}yt.render=ze;var qe=Lt`
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
`,Oe={root:function(e){var i=e.props;return["p-avatar p-component",{"p-avatar-image":i.image!=null,"p-avatar-circle":i.shape==="circle","p-avatar-lg":i.size==="large","p-avatar-xl":i.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Ee=gt.extend({name:"avatar",style:qe,classes:Oe}),Re={name:"BaseAvatar",extends:Tt,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ee,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function xt(t){"@babel/helpers - typeof";return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xt(t)}function Xt(t,e,i){return(e=Ve(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Ve(t){var e=je(t,"string");return xt(e)=="symbol"?e:e+""}function je(t,e){if(xt(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var c=i.call(t,e);if(xt(c)!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ie={name:"Avatar",extends:Re,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}},computed:{dataP:function(){return At(Xt(Xt({},this.shape,this.shape),this.size,this.size))}}},Me=["aria-labelledby","aria-label","data-p"],Fe=["data-p"],Ke=["data-p"],We=["src","alt","data-p"];function He(t,e,i,c,g,o){return r(),d("div",U({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root"),{"data-p":o.dataP}),[ht(t.$slots,"default",{},function(){return[t.label?(r(),d("span",U({key:0,class:t.cx("label")},t.ptm("label"),{"data-p":o.dataP}),f(t.label),17,Fe)):t.$slots.icon?(r(),G(_t(t.$slots.icon),{key:1,class:rt(t.cx("icon"))},null,8,["class"])):t.icon?(r(),d("span",U({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon"),{"data-p":o.dataP}),null,16,Ke)):t.image?(r(),d("img",U({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return o.onError&&o.onError.apply(o,arguments)})},t.ptm("image"),{"data-p":o.dataP}),null,16,We)):$("",!0)]})],16,Me)}ie.render=He;const Ue={class:"grid"},Qe={class:"flex flex-column"},Je=["onClick"],Xe={class:"p-1 flex-shrink-0 w-7rem h-7rem flex align-items-center justify-content-center overflow-hidden"},Ge=["src","alt"],Ye={class:"flex flex-column justify-content-center"},Ze={class:"font-bold"},ta={class:"flex flex-wrap gap-2"},ea={class:"flex gap-1 align-items-center"},aa={class:"text-color-secondary line2"},sa={key:0,class:"text-xl font-bold text-primary"},na={key:1,class:"flex align-items-center gap-1"},ia={class:"text-l font-bold text-color-secondary"},oa={class:"text-sm line-through text-500"},la={key:2,class:"flex gap-2 mr-2",id:"card-quantity"},ra={class:"w-2rem text-xl text-center"},ua={key:3,class:"flex gap-2 mr-2"},ca={key:0,class:"m-2 mt-0"},da={class:"flex flex-row justify-content-between align-content-center"},pa={class:"flex flex-column"},fa={class:"text-l font-bold"},va={key:0,class:"text-l font-bold text-color-secondary"},ha={key:1,class:"flex align-items-center gap-1"},ba={class:"text-l font-bold text-color-secondary"},ma={class:"text-sm line-through text-500"},ga={key:0,class:"flex ml-2 mr-2"},ya={class:"w-2rem text-xl text-center"},_a={key:1,class:"flex gap-2 mr-3 pt-2 pb-2"},wa={class:"max-w-5rem flex align-items-center"},$a={class:"font-bold whitespace-nowrap"},ka={class:"mb-2 flex justify-content-center"},xa={class:"font-bold text-center"},Ta={class:"mb-2"},Ia={class:"text-color-secondary m-0 line-height-3 line2 text-center"},Da={class:"mb-2"},Ca={class:"flex justify-content-center"},Sa=["src","alt"],Ba={class:"flex align-items-center gap-2"},Pa=["src","alt"],Na={class:"flex align-items-center gap-3 ml-auto"},La={__name:"DishList",props:{updateCartItemCount:{type:Function,required:!0},rateDish:{type:Function,required:!0},likedItemsRef:Array,dislikedItemsRef:Array},setup(t){const e=F.dishes;let i={rated:!1,id:null,like:0,rate:0};function c(){var s;const a=w.currentPage.value,l=(s=a==null?void 0:a.data)==null?void 0:s.logoPath;return l?w.pathFormated(l):"/images/logo_logo.png"}const g=(a,l)=>{const s=e.value[a].quantity+l;s>=0&&(e.value[a].quantity=s,j.updateCartItemCount(l))},o=(a,l)=>{const s=F.dishDatas.value[a].quantity+l;s>=0&&(F.dishDatas.value[a].quantity=s,j.updateCartItemCount(l))},T=a=>F.dishDatas.value[a]?F.dishDatas.value[a].quantity:0,k=a=>{const l=F.dishDatas.value[a];if(l){if(!l.category){const s=e.value.find(L=>L.handle===l.handle);if(s.limit)return A(s)}return A(l)}return!0},A=a=>{if(!z())return!1;const l=a.quantity;let s=3;if(a.price>0&&(s=9),a.limit){const L=a.id,_=z(),st=(_.peopleType.adults+_.peopleType.children)*a.limit,ft=_.order.find(bt=>bt.dishid==L);let ot=0;if(a.subitem)for(const bt of a.subitem){ot+=T(bt);const Dt=_.order.find(zt=>zt.dishid==Q(bt));Dt&&(ot+=Dt.quantity)}else ot+=a.quantity,ft&&(ot+=ft.quantity);return l>=s||st&&ot>=st}return l>=s},O=a=>F.dishDatas.value[a]?!F.dishDatas.value[a].disable:!0,R=a=>F.dishDatas.value[a]?F.dishDatas.value[a].soldout:!1,S=a=>F.dishDatas.value[a]?w.getItemLocalValue(F.dishDatas.value[a],"subname"):"",Q=a=>F.dishDatas.value[a]?F.dishDatas.value[a].id:0,Y=a=>F.dishDatas.value[a]?F.dishDatas.value[a].price:10,P=a=>F.dishDatas.value[a]?F.dishDatas.value[a].dis_price:10,at=a=>{const l=F.dishDatas.value[a];return l&&l.discount?l.discount:0},tt=a=>at(a)>0,V=a=>Y(a)>0?!tt(a):!1,z=()=>w.getTableValue();function W(){j.rateDish(i.id,i.like,i.rate,i.rated),i.id=null,i.like=0,i.rate=0,i.rated=!1}const ut=a=>{const l=j.likedItemsRef.indexOf(a);if(i.id=a.id,l!==-1)j.likedItemsRef.splice(l,1),i.like+=-1,i.rate+=-1,i.rated=!1;else{i.rated=!0,j.likedItemsRef.push(a);const s=j.dislikedItemsRef.indexOf(a);s!==-1?(j.dislikedItemsRef.splice(s,1),i.like+=1):(i.like+=1,i.rate+=1)}},pt=a=>{const l=j.dislikedItemsRef.indexOf(a);if(i.id=a.id,l!==-1)j.dislikedItemsRef.splice(l,1),i.rate+=-1,i.rated=!1;else{i.rated=!0,j.dislikedItemsRef.push(a);const s=j.likedItemsRef.indexOf(a);s!==-1?(j.likedItemsRef.splice(s,1),i.like+=-1):i.rate+=1}},j=t,it=C(!1),X=C({}),v=a=>{it.value=!0,X.value=a},m=a=>{a.target.src="/images/default.png"};function I(a){x(a.target,300)}function B(a){x(a.target,110)}function x(a,l){const s=a.naturalWidth,L=a.naturalHeight,_=Math.min(s,l),st=_/s,ft=L*st;a.style.width=`${_}px`,a.style.height=`${ft}px`}return(a,l)=>(r(),d(J,null,[n("div",Ue,[(r(!0),d(J,null,Z(u(e),(s,L)=>(r(),d("div",{key:L,class:"col-12 sm:col-12 md:col-6 lg:col-4 border-round surface-section shadow-1 p-2"},[n("div",Qe,[n("div",{class:rt(["flex flex-row",s.subitem?"":"flex-grow-1"]),onClick:_=>v(s)},[n("div",Xe,[n("img",{src:s.image,alt:s.name,class:"w-full h-full",style:{"object-fit":"cover"},onError:m,onLoad:B},null,40,Ge)]),n("div",Ye,[n("div",Ze,f(u(w).getItemLocalValue(s,"name")),1),n("div",null,[n("div",ta,[n("div",ea,[(r(),d(J,null,Z(5,_=>n("i",{key:_,class:rt(["pi invert-star",_<=Math.floor(s.likes/s.rates*5)?"pi-star-fill":_-.5<=s.likes/s.rates*5?"pi-star-half-fill":"pi-star"]),style:{color:"black"}},null,2)),64)),n("p",null,"("+f(s.rates?s.rates:0)+")",1)])])]),n("div",null,[n("p",aa,f(u(w).getItemLocalValue(s,"description")),1)])])],10,Je),s.subitem===void 0?(r(),d("div",{key:0,class:rt(["flex ml-2 mr-2 mb-2",s.price>0?"justify-content-between":"justify-content-end"])},[!s.discount&&s.price>0?(r(),d("span",sa,"€"+f(s.price),1)):$("",!0),s.discount?(r(),d("div",na,[n("span",ia,"€"+f(s.dis_price),1),n("span",oa,"€"+f(s.price),1),y(u(yt),{severity:"danger",value:"-"+s.discount+"%"},null,8,["value"])])):$("",!0),s.soldout?$("",!0):(r(),d("div",la,[y(u(K),{icon:"pi pi-minus",rounded:"",disabled:s.quantity<=0,onClick:_=>g(L,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),n("span",ra,f(s.quantity),1),y(u(K),{icon:"pi pi-plus",rounded:"",disabled:A(s),onClick:_=>g(L,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])),s.soldout?(r(),d("div",ua,[y(u(yt),{severity:"danger",value:a.$t("common.soldout")},null,8,["value"])])):$("",!0)],2)):$("",!0),s.subitem?(r(!0),d(J,{key:1},Z(s.subitem,(_,st)=>(r(),d(J,{key:"index"},[O(_)?(r(),d("div",ca,[n("div",da,[n("div",pa,[n("span",fa,f(S(_)),1),V(_)?(r(),d("span",va,"€"+f(Y(_)),1)):$("",!0),tt(_)?(r(),d("div",ha,[n("span",ba,"€"+f(P(_)),1),n("span",ma,"€"+f(Y(_)),1),y(u(yt),{severity:"danger",value:"-"+at(_)+"%"},null,8,["value"])])):$("",!0)]),R(_)?$("",!0):(r(),d("div",ga,[y(u(K),{icon:"pi pi-minus",rounded:"",disabled:T(_)<=0,onClick:ft=>o(_,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),n("span",ya,f(T(_)),1),y(u(K),{icon:"pi pi-plus",rounded:"",disabled:k(_),onClick:ft=>o(_,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])),R(_)?(r(),d("div",_a,[y(u(yt),{severity:"danger",value:a.$t("common.soldout")},null,8,["value"])])):$("",!0)])])):$("",!0)],64))),128)):$("",!0)])]))),128))]),y(u($t),{visible:it.value,"onUpdate:visible":l[2]||(l[2]=s=>it.value=s),modal:"",header:"dish",style:Bt([{width:"23rem"},{width:"80vw","max-width":"700px"}]),onHide:l[3]||(l[3]=s=>W())},{header:N(()=>[n("div",wa,[y(u(ie),{image:c(),class:"w-full"},null,8,["image"])]),n("span",$a,f(a.$t("common.details")),1)]),default:N(()=>[n("div",ka,[n("span",xa,f(u(w).getItemLocalValue(X.value,"name")),1)]),n("div",Ta,[n("span",Ia,f(u(w).getItemLocalValue(X.value,"description")),1)]),n("div",Da,[n("div",Ca,[n("img",{class:"w-full h-auto object-contain",src:X.value.image,alt:X.value.name,onError:m,onLoad:I},null,40,Sa)])]),n("div",Ba,[(r(!0),d(J,null,Z(X.value.allergies,(s,L)=>(r(),d("img",{src:"images/"+s+".png",alt:s,class:"w-2rem h-2rem border-round flex-shrink-0",style:{"object-fit":"cover","min-width":"2rem"}},null,8,Pa))),256)),n("div",Na,[n("button",{onClick:l[0]||(l[0]=s=>ut(X.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[n("i",{class:rt(["pi pi-thumbs-up text-xl",j.likedItemsRef.includes(X.value)?"text-green-500":"text-gray-400"])},null,2)]),n("button",{onClick:l[1]||(l[1]=s=>pt(X.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[n("i",{class:rt(["pi pi-thumbs-down text-xl",j.dislikedItemsRef.includes(X.value)?"text-red-500":"text-gray-400"])},null,2)])])])]),_:1},8,["visible"])],64))}},Aa=It(La,[["__scopeId","data-v-454178df"]]),za={key:0,class:"text-3xl font-bold"},qa={class:"flex flex-column gap-3 p-1"},Oa={key:0,class:"flex flex-column gap-1"},Ea={key:0,class:"m-0"},Ra={key:0,class:"m-0"},Va={class:"flex justify-content-between gap-4 mt-1"},ja={class:"flex align-items-center gap-2"},Ma=["src","alt"],Fa={class:"flex-grow-1 min-width-0 max-w-18rem"},Ka={class:"flex flex-column gap-1"},Wa={class:"flex align-items-center gap-2"},Ha={class:"text-xl font-bold line1 whitespace-nowrap overflow-hidden text-overflow-ellipsis",style:{"max-width":"20rem"}},Ua={class:"flex align-items-end gap-1"},Qa={key:0,class:"text-xl font-bold text-primary"},Ja={key:1,class:"text-xl font-bold text-primary"},Xa={key:2,class:"text-sm text-color-secondary"},Ga={key:0,class:"text-xs text-primary"},Ya={class:"flex-shrink-0 flex flex-wrap justify-content-between align-items-center gap-1"},Za={class:"flex flex-wrap justify-content-between align-content-center"},ts={class:"flex align-items-center gap-1"},es={class:"w-2rem text-center"},as={key:1,class:"flex flex-column gap-2 mt-2"},ss={for:"in_label"},ns={for:"in_label"},is={class:"bottom-0 left-0 mt-2"},os={class:"text-2xl font-bold"},ls={class:"text-2xl font-bold text-primary pl-2"},rs={class:"flex justify-content-between"},us={__name:"Cart",props:{updateCartItemCount:{type:Function,required:!0},checkout:{type:Function,required:!0},isTakeaway:Boolean},setup(t,{expose:e}){const i=te(),{t:c}=mt(),g=et.cartDishs;w.freeCounts;const o=C([]),T=C(),k=C(),A=C(!1),O=C(!1),R=C(!0),S=C(""),Q=C("");function Y(a,l){let s="";return a.forEach(L=>{s=s+c(`${l}Data.ingredients.${L.id}`)+" / "}),s}function P(a,l,s){const L=w.customDishAPI.getCustomDishByName(a);if(L){const _=L.types[l].typeName;return c(`${s}Data.${_}`)}else return null}const at=(a,l)=>{const s=o.value[a].quantity+l;s>=0&&(o.value[a].quantity=s,W.updateCartItemCount(l))};function tt(a){a&&T.value&&(T.value.dishNote=k.value?k.value:void 0),O.value=!1}function V(){k.value&&(k.value=void 0),T.value&&(T.value=void 0)}function z(a){T.value=a,k.value=T.value.dishNote?T.value.dishNote:void 0,O.value=!0}const W=t;e({showDishList:a=>{A.value=!0,o.value.length=0;for(let l=0;l<a.length;l++)o.value.push(a[l]);R.value=o.value.length==0&&g.length==0}});function pt(a){switch(a){case"Bibimbap":return"customDishBibimbap";case"Sushi Aleatória®":return"customDishSushiBox";case"MY BOX":return"customDishMyBox";default:return"Unexpected"}}function j(a){et.removeItem(a)}function it(){W.isTakeaway?X():v()}function X(){const a=[];g.value.forEach(l=>{a.push(l)}),o.value.forEach(l=>{l.quantity>0&&a.push(l)}),a.length<=0?nt.show_warn(c("notification.select_at_least_one")):(A.value=!1,i.push({path:"/paymentPage"}))}function v(){W.checkout({name:S.value,note:Q.value})&&(A.value=!1),g.value.forEach(a=>{a.dishNote=void 0}),o.value.forEach(a=>{a.dishNote=void 0}),Q.value="",localStorage.removeItem("order_cartDishs"),localStorage.removeItem("order_dishDatas")}function m(a){return a.subname!=""&&a.subname!="Default Title"?a.name+" "+a.subname:a.name}function I(){let a=0;return g.value.forEach(l=>{a+=l.dis_price?l.dis_price*l.count:l.price*l.count}),o.value.forEach(l=>{a+=l.dis_price?l.dis_price*l.quantity:l.price*l.quantity}),"€"+a.toFixed(2)}const B=a=>{a.target.src="/images/default.png"},x=a=>{const l=a.quantity;let s=3;return a.price>0&&(s=9),l>=s};return(a,l)=>(r(),d(J,null,[y(u($t),{class:"bg-primary-reverse text-sm md:text-lg lg:text-xl",visible:A.value,"onUpdate:visible":l[2]||(l[2]=s=>A.value=s),modal:"",header:a.$t("common.cart"),style:Bt([{backgroundColor:"rgba(250, 250, 250, 1)",height:"100%",minWidth:"24rem"},{width:"80vw","max-width":"700px"}]),dismissableMask:!0},{footer:N(()=>[n("div",is,[n("span",os,f(a.$t("common.total"))+": ",1),n("span",ls,f(I()),1),y(u(K),{icon:t.isTakeaway?"pi pi-wallet":"pi pi-plus",class:"p-button-success p-button-rounded ml-3",onClick:it,label:t.isTakeaway?u(c)("common.pay"):u(c)("common.send")},null,8,["icon","label"])])]),default:N(()=>[R.value?(r(),d("h2",za,"Cart is empty.")):$("",!0),n("div",qa,[(r(!0),d(J,null,Z(u(g),(s,L)=>(r(),G(u(xe),{style:{overflow:"hidden"},key:L},{title:N(()=>[wt(f(a.$t(`common.${s.name.toLowerCase().replace(/\s+/g,"")}`)),1)]),subtitle:N(()=>[wt(f(a.$t("common.price"))+" : "+f(s.price)+"€",1)]),content:N(()=>[u(w).customDishAPI.customDishes.value.find(_=>_.name==s.name)?(r(),d("div",Oa,[(r(!0),d(J,null,Z(s.notesAndId,(_,st)=>(r(),d("div",null,[s.notesAndId[st].length!==0?(r(),d("span",Ea,f(P(s.name,st,pt(s.name)))+": "+f(Y(s.notesAndId[st],pt(s.name))),1)):$("",!0)]))),256)),n("div",null,[s.dishNote?(r(),d("span",Ra,f(a.$t("common.note"))+": "+f(s.dishNote),1)):$("",!0)])])):$("",!0)]),footer:N(()=>[n("div",Va,[t.isTakeaway?$("",!0):(r(),G(u(K),{key:0,label:u(c)("common.edit")+" "+u(c)("common.note"),severity:"contrast",onClick:_=>z(s)},null,8,["label","onClick"])),y(u(K),{label:u(c)("common.remove"),severity:"danger",onClick:_=>j(s)},null,8,["label","onClick"])])]),_:2},1024))),128)),(r(!0),d(J,null,Z(o.value,(s,L)=>(r(),d("div",{key:L,class:"p-2 border-round shadow-1 transition-all transition-duration-200 hover:shadow-3 flex flex-column gap-1"},[n("div",ja,[n("img",{src:s.image,alt:s.name,class:"w-4rem h-4rem border-round flex-shrink-0",onError:B,style:{"object-fit":"cover","min-width":"4rem"}},null,40,Ma),n("div",Fa,[n("div",Ka,[n("div",Wa,[n("span",Ha,f(m(s)),1)])]),n("div",Ua,[s.dis_price?(r(),d("span",Qa,"€"+f(s.dis_price),1)):$("",!0),!s.dis_price&&s.price>0?(r(),d("span",Ja,"€"+f(s.price),1)):$("",!0),s.price>0?(r(),d("span",Xa,"/uni.")):$("",!0)])])]),n("div",null,[s.dishNote?(r(),d("span",Ga,f(u(c)("common.note")+": "+s.dishNote),1)):$("",!0)]),n("div",Ya,[n("div",Za,[t.isTakeaway?$("",!0):(r(),G(u(K),{key:0,label:u(c)("common.edit")+" "+u(c)("common.note"),severity:"contrast",class:"w-3.5rem h-2rem",onClick:_=>z(s)},null,8,["label","onClick"]))]),n("div",ts,[y(u(K),{icon:"pi pi-minus",rounded:"",disabled:s.quantity<=0,onClick:_=>at(L,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),n("span",es,f(s.quantity),1),y(u(K),{icon:"pi pi-plus",rounded:"",disabled:x(s),onClick:_=>at(L,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])])]))),128))]),t.isTakeaway?$("",!0):(r(),d("div",as,[y(u(Qt),{variant:"in"},{default:N(()=>[y(u(se),{id:"in_label",modelValue:S.value,"onUpdate:modelValue":l[0]||(l[0]=s=>S.value=s),variant:"filled",maxlength:"20"},null,8,["modelValue"]),n("label",ss,f(u(c)("common.name")),1)]),_:1}),y(u(Qt),{variant:"in"},{default:N(()=>[y(u(Ft),{id:"in_label",class:"min-w-full",rows:"5",modelValue:Q.value,"onUpdate:modelValue":l[1]||(l[1]=s=>Q.value=s),variant:"filled",maxlength:"200"},null,8,["modelValue"]),n("label",ns,f(u(c)("common.observation")),1)]),_:1})]))]),_:1},8,["visible","header"]),y(u($t),{visible:O.value,"onUpdate:visible":l[6]||(l[6]=s=>O.value=s),header:u(c)("common.note"),onHide:l[7]||(l[7]=s=>V()),modal:"",dismissableMask:!0},{default:N(()=>[y(u(Ft),{modelValue:k.value,"onUpdate:modelValue":l[3]||(l[3]=s=>k.value=s),rows:"5",cols:"30",placeholder:u(c)("common.edit")+" "+u(c)("common.note")+"...",maxlength:"100"},null,8,["modelValue","placeholder"]),n("div",rs,[y(u(K),{label:u(c)("common.cancel"),severity:"danger",onClick:l[4]||(l[4]=s=>tt(!1))},null,8,["label"]),y(u(K),{label:u(c)("common.save"),severity:"primary",size:"sm",onClick:l[5]||(l[5]=s=>tt(!0))},null,8,["label"])])]),_:1},8,["visible","header"])],64))}},cs=It(us,[["__scopeId","data-v-591e334d"]]);var ds=Lt`
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
`,ps={root:"p-overlaybadge"},fs=gt.extend({name:"overlaybadge",style:ds,classes:ps}),vs={name:"OverlayBadge",extends:ne,style:fs,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},oe={name:"OverlayBadge",extends:vs,inheritAttrs:!1,components:{Badge:ne}};function hs(t,e,i,c,g,o){var T=de("Badge");return r(),d("div",U({class:t.cx("root")},t.ptmi("root")),[ht(t.$slots,"default"),y(T,U(t.$props,{pt:t.ptm("pcBadge")}),null,16,["pt"])],16)}oe.render=hs;function Gt(t){switch(t){case"Sushi Aleatória®":return"customDishSushiBox";case"Bibimbap":return"customDishBibimbap";case"MY BOX":return"customDishMyBox";default:return"unexpected"}}const bs={class:"m-3"},ms={class:"flex flex-column gap-2"},gs={class:"w-full flex justify-content-center"},ys={key:0,class:"max-w-19rem"},_s=["src"],ws={style:{width:"300px",height:"300px",background:"url(/boxImage/box.png)"}},$s={key:0,class:"flex align-items-center justify-content-center text-4xl font-bold text-white w-full h-full"},ks={key:1,class:"grid m-0 p-2"},xs=["onClick"],Ts={class:"flex align-items-center justify-content-center font-bold m-0 p-0",style:{width:"94px",height:"94px"}},Is=["src"],Ds={class:"flex flex-wrap justify-content-between align-items-center m-1"},Cs={class:"flex gap-1 align-items-center"},Ss={key:0},Bs={class:"font-bold mb-2"},Ps={key:1,class:"flex justify-content-between gap-2 mt-3"},Ns={class:"font-bold mb-2"},Ls={class:"flex mr-2"},As={class:"w-3rem text-xl text-center"},zs={class:"font-bold block mb-2"},qs={class:"flex flex-wrap"},Os={key:2,class:"flex flex-wrap gap-2 mt-3"},Es={class:"font-bold block mb-2"},Rs={class:"font-bold block mb-2 text-center"},Vs={class:"flex flex-wrap gap-2 mt-3"},js={__name:"CustomDish",props:{currentCustomDish:Object},setup(t){const{locale:e}=mt(),i=t,c=pe(),{t:g}=mt(),o=vt(()=>i.currentCustomDish),T=vt(()=>o.boxImages),k=C(0),A=vt(()=>o.value.initialPrice),O=C(A.value);fe(()=>o.value,v=>{O.value=(v==null?void 0:v.initialPrice)??0,k.value=0,R.value=null});const R=C(null),S=vt(()=>{const v=e.value,m=`title_${v}`,I=`description_${v}`;return o.value.descriptions.map(B=>({title:B[m],descriptions:B.descriptions.map(x=>x[I]),image:B==null?void 0:B.image}))}),Q=vt(()=>{var I,B;const v=Number(((I=o.value)==null?void 0:I.like)??0),m=Number(((B=o.value)==null?void 0:B.rate)??0);return m?v/m*5:0});function Y(v,m,I){const B=v[m];if(B.selected){B.selected=!1;return}else{const a=v.filter(l=>l.selected).length;if(I===1){j(v),B.selected=!0;return}a<I&&(B.selected=!0)}}function P(v,m,I){Y(v,m,I),at(v)}function at(v){let m=A.value;if(!v||!Array.isArray(v))return O.value=m,m;const I=v.reduce((B,x)=>{if(!x.dishes||!Array.isArray(x.dishes))return B;const a=x.dishes.reduce((l,s)=>l+(s.selected?s.price:0),0);return B+a},0);return m+=I,O.value=m,m}function tt(v){return v.selected}function V(){if(!it(o.value.types))return;const v=W(o.value.types),m=ut(o.value.types);et.addItem({dishid:-1,name:o.value.name,category:o.value.category,count:k.value!==0?k.value:1,price:O.value===0?at():O.value,notes:v,notesAndId:m}),console.log("CART: ",et.cartDishs),pt(o.value.types),nt.show({severity:"info",summary:"info",detail:g("customDishBibimbapVue.addToCartSuccessBibimbap")})}function z(v){return!v||!v.dishes?"":v.dishes.filter(I=>I.selected).map(I=>I.name).join(",")}function W(v){return v?v.map(m=>z(m)):[]}function ut(v){return v?v.map(m=>m.dishes?m.dishes.filter(I=>I.selected).map(I=>({id:I.dishid,name:I.name})):[]):[]}function pt(v){v&&v.forEach(m=>{m.dishes&&m.dishes.forEach(I=>{I.selected=!1})})}function j(v){v.forEach(m=>m.selected=!1)}function it(v){if(o.value.options.quantity&&k.value<=0)return nt.show({severity:"warn",detail:g("notification.quantity_must_be_positive")}),!1;for(const m of v){const I=m.dishes.filter(B=>B.selected).length;if(console.log(I,m.minQuantity),I<m.minQuantity){const B=m.typeName;return nt.show({severity:"warn",detail:g("notification.select_type_of",{name:B})}),!1}}return!0}function X(v){v?w.customDishAPI.like(o.value.id)&&(R.value="like",c.add({severity:"success",summary:g("common.success"),detail:g("common.rate")+" "+g("common.success"),life:750})):w.customDishAPI.unLike(o.value.id)&&(R.value="unlike",c.add({severity:"success",summary:g("common.success"),detail:g("common.rate")+" "+g("common.success"),life:750}))}return(v,m)=>{var I,B;return r(),d("div",bs,[n("div",ms,[y(u(Ut),{class:"w-full max-w-xl mx-auto"},{default:N(()=>[(r(!0),d(J,null,Z(S.value,(x,a)=>(r(),G(u(Ht),{key:a,value:a},{default:N(()=>[y(u(Kt),null,{default:N(()=>[wt(f(x.title),1)]),_:2},1024),y(u(Wt),null,{default:N(()=>{var l;return[(r(!0),d(J,null,Z(x.descriptions,(s,L)=>(r(),d("p",{key:L},f(s),1))),128)),n("div",gs,[(l=x.image)!=null&&l.src?(r(),d("div",ys,[n("img",{src:x.image.src,class:"w-full"},null,8,_s)])):$("",!0)])]}),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1}),((B=(I=o.value)==null?void 0:I.value)==null?void 0:B.name)==="MY BOX"?(r(),G(u(Ut),{key:0,class:"w-full max-w-xl mx-auto"},{default:N(()=>[y(u(Ht),{value:"0"},{default:N(()=>[y(u(Kt),null,{default:N(()=>[wt(" 🥩 "+f(v.$t("common.showMybox")),1)]),_:1}),y(u(Wt),null,{default:N(()=>[n("div",ws,[v.isEmptyArray(T.value)?(r(),d("div",$s,f(v.$t("common.myboxAlarm")),1)):$("",!0),v.isEmptyArray(T.value)?$("",!0):(r(),d("div",ks,[(r(!0),d(J,null,Z(T.value,x=>(r(),d("div",{class:"col-4 p-0",onClick:a=>v.imageSelectAction(x)},[n("div",Ts,[x?(r(),d("img",{key:0,class:"m-0 p-0",src:v.imagePath(x),style:{width:"82px",height:"82px"}},null,8,Is)):$("",!0)])],8,xs))),256))]))])]),_:1})]),_:1})]),_:1})):$("",!0)]),n("div",Ds,[n("div",Cs,[(r(),d(J,null,Z(5,x=>n("i",{key:x,class:rt(["pi invert-star",x<=Math.floor(Q.value)?"pi-star-fill":x-.5<=Q.value?"pi-star-half":"pi-star"]),style:{color:"black"}},null,2)),64)),n("p",null,"("+f(o.value.rate?o.value.rate:0)+")",1)]),n("div",null,[y(u(K),{text:"",icon:"pi pi-thumbs-up",severity:R.value==="like"?"success":"",onClick:m[0]||(m[0]=x=>X(!0))},null,8,["severity"]),y(u(K),{text:"",icon:"pi pi-thumbs-down",severity:R.value==="unlike"?"danger":"",onClick:m[1]||(m[1]=x=>X(!1))},null,8,["severity"])])]),o.value.options.extraInfo?(r(),d("div",Ss,[n("label",Bs,f(o.value.options.extraInfo),1)])):$("",!0),o.value.options.quantity?(r(),d("div",Ps,[n("div",null,[n("label",Ns,f(v.$t("common.quantity"))+" / "+f(v.$t("common.pieces")),1)]),n("div",Ls,[y(u(K),{icon:"pi pi-minus",disabled:k.value<=0,onClick:m[2]||(m[2]=x=>k.value-=o.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"]),n("span",As,f(k.value),1),y(u(K),{icon:"pi pi-plus",disabled:k.value>=o.value.options.maxQuantity,onClick:m[3]||(m[3]=x=>k.value+=o.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"])])])):$("",!0),(r(!0),d(J,null,Z(o.value.types,(x,a)=>(r(),d("div",null,[n("label",zs,f(a+1)+". "+f(v.$t(`${u(Gt)(o.value.name)}Data.${x.typeName}`)),1),n("div",qs,[(r(!0),d(J,null,Z(x.dishes,(l,s)=>(r(),G(u(K),{key:s,onClick:L=>P(x.dishes,s,k.value==0?x.maxQuantity:x.maxQuantity*k.value),class:rt([{"p-button-primary":tt(l),"p-button-outlined":!tt(l)},"m-1"])},{default:N(()=>[n("p",{class:rt({"text-gray-700":!tt(l)})},f(v.$t(`${u(Gt)(o.value.name)}Data.ingredients.${l.dishid}`)),3)]),_:2},1032,["onClick","class"]))),128))])]))),256)),A.value!==0?(r(),d("div",Os,[n("label",Es,f(v.$t("common.price"))+":",1),n("label",Rs,f(O.value+"€"),1)])):$("",!0),n("div",Vs,[y(u(K),{icon:"pi pi-shopping-cart",onClick:m[4]||(m[4]=x=>V()),label:v.$t("common.addToCart"),class:"m-3",severity:"primary",raised:""},null,8,["label"])])])}}},Ms=It(js,[["__scopeId","data-v-fd2c3fd7"]]);var Fs=Lt`
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
`,Ks={root:function(e){var i=e.props;return["p-tabs p-component",{"p-tabs-scrollable":i.scrollable}]}},Ws=gt.extend({name:"tabs",style:Fs,classes:Ks}),Hs={name:"BaseTabs",extends:Tt,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:Ws,provide:function(){return{$pcTabs:this,$parentInstance:this}}},le={name:"Tabs",extends:Hs,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function Us(t,e,i,c,g,o){return r(),d("div",U({class:t.cx("root")},t.ptmi("root")),[ht(t.$slots,"default")],16)}le.render=Us;var Qs={root:"p-tablist",content:function(e){var i=e.instance;return["p-tablist-content",{"p-tablist-viewport":i.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Js=gt.extend({name:"tablist",classes:Qs}),Xs={name:"BaseTabList",extends:Tt,props:{},style:Js,provide:function(){return{$pcTabList:this,$parentInstance:this}}},re={name:"TabList",extends:Xs,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,i=this.getVisibleButtonWidths(),c=Et(e)-i,g=Math.abs(e.scrollLeft),o=c*.8,T=g-o,k=Math.max(T,0);e.scrollLeft=Mt(e)?-1*k:k},onNextButtonClick:function(){var e=this.$refs.content,i=this.getVisibleButtonWidths(),c=Et(e)-i,g=Math.abs(e.scrollLeft),o=c*.8,T=g+o,k=e.scrollWidth-c,A=Math.min(T,k);e.scrollLeft=Mt(e)?-1*A:A},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,i=e.content,c=e.inkbar,g=e.tabs;if(c){var o=Rt(i,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(c.style.height=he(o)+"px",c.style.top=Ct(o).top-Ct(g).top+"px"):(c.style.width=be(o)+"px",c.style.left=Ct(o).left-Ct(g).left+"px")}},updateButtonState:function(){var e=this.$refs,i=e.list,c=e.content,g=c.scrollTop,o=c.scrollWidth,T=c.scrollHeight,k=c.offsetWidth,A=c.offsetHeight,O=Math.abs(c.scrollLeft),R=[Et(c),ve(c)],S=R[0],Q=R[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=g!==0,this.isNextButtonEnabled=i.offsetHeight>=A&&parseInt(g)!==T-Q):(this.isPrevButtonEnabled=O!==0,this.isNextButtonEnabled=i.offsetWidth>=k&&parseInt(O)!==o-S)},getVisibleButtonWidths:function(){var e=this.$refs,i=e.prevButton,c=e.nextButton,g=0;return this.showNavigators&&(g=((i==null?void 0:i.offsetWidth)||0)+((c==null?void 0:c.offsetWidth)||0)),g}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return At({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:Te,ChevronRightIcon:Ie},directives:{ripple:ee}},Gs=["data-p"],Ys=["aria-label","tabindex"],Zs=["data-p"],tn=["aria-orientation"],en=["aria-label","tabindex"];function an(t,e,i,c,g,o){var T=Pt("ripple");return r(),d("div",U({ref:"list",class:t.cx("root"),"data-p":o.dataP},t.ptmi("root")),[o.showNavigators&&g.isPrevButtonEnabled?Nt((r(),d("button",U({key:0,ref:"prevButton",type:"button",class:t.cx("prevButton"),"aria-label":o.prevButtonAriaLabel,tabindex:o.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return o.onPrevButtonClick&&o.onPrevButtonClick.apply(o,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(r(),G(_t(o.templates.previcon||"ChevronLeftIcon"),U({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,Ys)),[[T]]):$("",!0),n("div",U({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return o.onScroll&&o.onScroll.apply(o,arguments)}),"data-p":o.dataP},t.ptm("content")),[n("div",U({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":o.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[ht(t.$slots,"default"),n("span",U({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,tn)],16,Zs),o.showNavigators&&g.isNextButtonEnabled?Nt((r(),d("button",U({key:1,ref:"nextButton",type:"button",class:t.cx("nextButton"),"aria-label":o.nextButtonAriaLabel,tabindex:o.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return o.onNextButtonClick&&o.onNextButtonClick.apply(o,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(r(),G(_t(o.templates.nexticon||"ChevronRightIcon"),U({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,en)),[[T]]):$("",!0)],16,Gs)}re.render=an;var sn={root:function(e){var i=e.instance,c=e.props;return["p-tab",{"p-tab-active":i.active,"p-disabled":c.disabled}]}},nn=gt.extend({name:"tab",classes:sn}),on={name:"BaseTab",extends:Tt,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:nn,provide:function(){return{$pcTab:this,$parentInstance:this}}},ue={name:"Tab",extends:on,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var i=this.findNextTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var i=this.findPrevTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var i=this.findFirstTab();this.changeFocusedTab(e,i),e.preventDefault()},onEndKey:function(e){var i=this.findLastTab();this.changeFocusedTab(e,i),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findNextTab:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=i?e:e.nextElementSibling;return c?St(c,"data-p-disabled")||St(c,"data-pc-section")==="activebar"?this.findNextTab(c):Rt(c,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=i?e:e.previousElementSibling;return c?St(c,"data-p-disabled")||St(c,"data-pc-section")==="activebar"?this.findPrevTab(c):Rt(c,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,i){ge(i),this.scrollInView(i)},scrollInView:function(e){var i;e==null||(i=e.scrollIntoView)===null||i===void 0||i.call(e,{block:"nearest"})}},computed:{active:function(){var e;return me((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},attrs:function(){return U(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return At({active:this.active})}},directives:{ripple:ee}};function ln(t,e,i,c,g,o){var T=Pt("ripple");return t.asChild?ht(t.$slots,"default",{key:1,dataP:o.dataP,class:rt(t.cx("root")),active:o.active,a11yAttrs:o.a11yAttrs,onClick:o.onClick}):Nt((r(),G(_t(t.as),U({key:0,class:t.cx("root"),"data-p":o.dataP,onClick:o.onClick},o.attrs),{default:N(function(){return[ht(t.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[T]])}ue.render=ln;const rn={class:"fixed top-0 left-0 w-full bg-primary-reverse",style:{"z-index":"10"}},un={class:"grid mt-3 ml-3"},cn={class:"max-w-5rem flex align-items-center"},dn=["src"],pn={class:"flex align-items-center"},fn={key:0,class:"text-color font-bold p-1"},vn={key:1,class:"text-color font-bold p-1"},hn={class:"card flex mr-3",style:{"margin-left":"auto"}},bn={style:{display:"flex","align-items":"center"}},mn={style:{"flex-grow":"1",width:"0",overflow:"hidden"}},gn={class:"mt-2"},yn={class:"flex justify-content-end mt-2"},_n={__name:"HeaderTabs",props:{types:Array,typeIndex:Number,tableId:String,tabItems:Array},emits:["clickType","switchToWelcome"],setup(t,{emit:e}){const{t:i}=mt();function c(){var W;const V=w.currentPage.value,z=(W=V==null?void 0:V.data)==null?void 0:W.logoPath;return z?w.pathFormated(z):"/images/logo_logo.png"}function g(){return w.getTable()}const o=C(),T=vt(()=>[{label:i("common.options"),items:[{label:i("common.pay"),icon:"pi pi-wallet",command:()=>{P()}},{label:i("common.call"),icon:"pi pi-user-plus",command:()=>{w.send_cmd(g(),{cmd:"call"}),nt.show_info(i("notification.call_msg"))}}]}]),k=V=>{o.value.toggle(V)},A=V=>{O.value.toggle(V)},O=C(),R=C(!1),S=C(),Q=C(),Y=C(!0);function P(){R.value=!0}function at(){Y.value=S.value?!(S.value.toString().length===9||S.value.toString().length===0):!1,R.value=!1}function tt(){Y.value?nt.show_warn(i("notification.cancel_msg")):(w.send_cmd(g(),{cmd:"pay",nif:S.value,note:Q.value}),nt.show_info(i("notification.pay_msg")),Y.value=!0),S.value&&(S.value=void 0),Q.value&&(Q.value=void 0)}return(V,z)=>(r(),d(J,null,[n("div",rn,[n("div",un,[n("div",cn,[n("img",{src:c(),class:"w-full",clickble:"",onClick:z[0]||(z[0]=()=>V.$emit("switchToWelcome"))},null,8,dn)]),n("div",pn,[t.tableId?(r(),d("p",fn,f(V.$t("common.table"))+": "+f(t.tableId),1)):$("",!0),t.tableId?$("",!0):(r(),d("p",vn,f(V.$t("common.takeAway")),1))]),n("div",hn,[t.tableId?(r(),G(u(K),{key:0,icon:"pi pi-bell",rounded:"","aria-label":"Filter",onClick:k,"aria-haspopup":"true","aria-controls":"overlay_menu"})):$("",!0),y(u(Jt),{ref_key:"menu",ref:o,id:"overlay_menu",model:T.value,popup:!0},null,8,["model"])])]),n("div",bn,[n("div",null,[y(u(K),{icon:"pi pi-bars",variant:"text",rounded:"","aria-label":"Filter",onClick:A,"aria-haspopup":"true","aria-controls":"tab_menu"}),y(u(Jt),{ref_key:"tabMenu",ref:O,id:"tab_menu",model:t.tabItems,popup:!0},null,8,["model"])]),n("div",mn,[y(u(le),{value:t.typeIndex,scrollable:"",showNavigators:!1},{default:N(()=>[y(u(re),null,{default:N(()=>[(r(!0),d(J,null,Z(t.types,(W,ut)=>(r(),G(u(ue),{value:ut,onClick:()=>V.$emit("clickType",ut),class:"text-sm md:text-lg lg:text-xl"},{default:N(()=>[wt(f(W),1)]),_:2},1032,["value","onClick"]))),256))]),_:1})]),_:1},8,["value"])])])]),y(u($t),{visible:R.value,"onUpdate:visible":z[4]||(z[4]=W=>R.value=W),header:"结账",class:"flex flex-column",modal:!0,dismissableMask:!0,onHide:tt},{default:N(()=>[n("div",null,[z[5]||(z[5]=n("label",null,"NIF:",-1)),y(u(ke),{modelValue:S.value,"onUpdate:modelValue":z[1]||(z[1]=W=>S.value=W),inputId:"withoutgrouping",useGrouping:!1,fluid:"",class:"w-full m-1"},null,8,["modelValue"])]),n("div",gn,[n("label",null,f(V.$t("common.note"))+":",1),y(u(se),{type:"text",modelValue:Q.value,"onUpdate:modelValue":z[2]||(z[2]=W=>Q.value=W),class:"w-full m-1"},null,8,["modelValue"])]),n("div",yn,[y(u(K),{label:V.$t("common.send"),onClick:z[3]||(z[3]=W=>at())},null,8,["label"])])]),_:1},8,["visible"])],64))}},wn={__name:"SwipeHint",props:{size:{type:String,default:"8rem"},duration:{type:Number,default:6e3},position:{type:String,default:"bottom"}},setup(t){const e=t,i=C(!0);ae(()=>{e.duration>0&&setTimeout(()=>{i.value=!1},e.duration);const g=()=>{i.value=!1,window.removeEventListener("touchstart",g)};window.addEventListener("touchstart",g)});const c=vt(()=>{let g={rigth:"50%",transform:"translateX(-50%)",zIndex:99999,opacity:.5,pointerEvents:"none",textAlign:"center",position:"fixed"};return e.position==="top"?g.top="15%":e.position==="center"?(g.top="50%",g.transform="translate(-50%, -50%)"):g.bottom="15%",g});return(g,o)=>i.value?(r(),d("div",{key:0,class:"swipe-hint",style:Bt(c.value)},[n("div",{class:"hand",style:Bt({width:t.size,height:t.size,backgroundImage:"url(/images/hand_finger.png)"})},null,4)],4)):$("",!0)}},$n=It(wn,[["__scopeId","data-v-7ceaa304"]]),kn={class:"w-full h-full flex flex-column"},xn={class:"fixed bottom-0 left-0 w-full h-3rem bg-primary-reverse p-3"},Tn={class:"h-full flex align-items-center justify-content-between w-full"},In={class:"m-2"},Dn={class:"m-2"},Cn={style:{"max-height":"60vh","overflow-y":"auto","padding-bottom":"60px"}},Sn={class:"flex flex-column border-bottom-1"},Bn={key:0,class:"flex justify-content-between"},Pn={class:"flex flex-column"},Nn={class:"font-bold"},Ln={class:"text-right"},An={key:1,class:"flex justify-content-between"},zn={class:"flex flex-column"},qn={class:"font-bold"},On={class:"text-right"},En={key:0},Rn={key:1,class:"flex flex-column"},Vn={class:"flex flex-column"},jn={class:"font-bold"},Mn={class:"text-right"},Fn={class:"total-footer bg-primary-reverse"},Yt=2,Zt="order_time_key",Kn={__name:"HomePage",setup(t){const e=te(),i=$e(),{t:c}=mt(),{locale:g}=mt(),o=C(!1),T=C([""]),k=C(0),A=et.cartItemCount,O=C(!1),R=C([]),S=C(0),Q=C({}),Y=C(!1),P=F.dishDatas,at=C(null),tt=C(null),V=C([]),z=C([]);function W(p){p.touches[0].clientX,p.touches[0].clientY}const ut=()=>{k.value<T.value.length-1&&(k.value++,_(),m(k.value))},pt=()=>{k.value>0&&(k.value--,_(),m(k.value))};let j=()=>window.env.ENABLE_ROAST_DUCK;vt(()=>parseFloat(w.table.value.order.reduce((p,h)=>p+h.price*h.quantity,0).toFixed(2)));function it(p){A.value=A.value+p}C(X(w.customDishAPI.customDishes.value));function X(p){return p.map(h=>({...h,oldLike:0,update:!1}))}const v=(p,h,b,q)=>{w.rateDish(p,h,b),q&&nt.show_success(c("notification.rating_submitted"))};function m(p){let h=w.getOrderMenuTab()[p];w.customDishAPI.customDishes.value.map(M=>M.name).includes(h)?(Y.value=!0,Q.value=w.customDishAPI.customDishes.value.find(M=>M.name==h)):Y.value=!1;let q=w.getMenu();if(q.length==0){console.log("exit");return}let H=[];for(let M=0;M<P.value.length;M++){let D=P.value[M];if(D.category==h){if(D.disable){if(!D.subitem)continue;let E=!0;for(let lt=0;lt<D.subitem.length;lt++)q[D.subitem[lt]].disable||(E=!1);if(E)continue}H.push(D)}}F.showDishList(H)}const I=()=>{w.refreshTableFromServer(),w.getTableTotalAmount(S),O.value=!0},B=(p,h,b)=>{const q=P.value.find(H=>H.id===p);q&&(q.likes=h,q.rates=b)},x=p=>{let h=p.id;p.org_id&&(h=p.org_id);for(let b=0;b<P.value.length;b++)if(P.value[b].id==h)for(const q in p){let H=q;q.startsWith("note")&&(H=H.replace("note","description")),P.value[b][H]=p[q]}},a={pt:[],zh:[],en:[]};function l(){return new Promise(p=>{let h=()=>{const b=w.getMenu();b.length>0?p(b):setTimeout(h,200)};h()})}function s(){return new Promise(p=>{let h=()=>{const b=w.getOrderMenuTab();b.length>0?p(b):setTimeout(h,200)};h()})}async function L(){var p=await l();w.onMenuItemChanged=x,w.onRatingChanged=B,P.value.length=0,j()&&w.settings.value.hasBox&&(a.pt.push("My BOX"),a.zh.push("自定义九宫格"),a.en.push("My BOX")),j()&&w.settings.value.hasBibimbap&&(a.pt.push("Bibimbap"),a.zh.push("石锅拌饭"),a.en.push("Bibimbap"));const h={en:{},zh:{}};for(let D=0;D<p.length;D++){let E=p[D];const lt=D;let ct={description:E.note,allergies:E.x,quantity:0,index:lt,description_cn:E.note_cn,description_en:E.note_en,likes:E.likes||0,rates:E.rates||0};if(ct={...E,...ct},h.zh[ct.category]=E.category_cn,h.en[ct.category]=E.category_en,P.value.push(ct),ct.category=="")for(let Ot=0;Ot<P.value.length;Ot++){const dt=P.value[Ot];if(dt.handle&&dt.handle==E.handle&&dt.category!=""){dt.subitem||(dt.subitem=[dt.index]),dt.subitem.push(P.value.length-1),ct.name=dt.name,ct.image==""&&(ct.image=dt.image);break}}}const b=await s();for(let D=0;D<b.length;D++)a.pt.push(b[D]),a.zh.push(h.zh[b[D]]||b[D]),a.en.push(h.en[b[D]]||b[D]);const q=localStorage.getItem("order_cartDishs");q&&q!="undefined"&&(et.cartDishs.value=JSON.parse(q),et.cartItemCount.value=et.cartDishs.value.length);const H=localStorage.getItem("order_dishDatas");if(H&&H!="undefined"){let D=JSON.parse(H);for(let E=0;E<D.length;E++)for(let lt=0;lt<P.value.length;lt++)D[E].id==P.value[lt].id&&(P.value[lt].quantity=D[E].quantity,et.cartItemCount.value+=D[E].quantity)}let M=localStorage.getItem("language")||_e.global.locale;T.value=a[M]||a.pt;for(let D=0;D<T.value.length;D++){const E=D;R.value.push({label:T.value[D],command:()=>{st(E),_()}})}}const _=()=>{we(()=>{const p=document.querySelector(".p-tablist-viewport"),h=document.querySelector(".p-tab.p-tab-active");if(p&&h){const b=h.offsetLeft-p.offsetWidth/2+h.offsetWidth/2;p.scrollTo({left:b,behavior:"smooth"})}})},st=p=>{m(p),k.value=p,_()},ft=()=>{var p=[];for(let b=0;b<P.value.length;b++){var h=P.value[b];h.quantity>0&&p.push(h)}tt.value.showDishList(p)};function ot(){return w.getTable()}w.params.port,at.value=w.table.value.order;function bt(p){var h=c("notification.too_fast",{remainTime:p});nt.show_warn(h)}const Dt=p=>{const h=[];for(let M=0;M<et.cartDishs.value.length;M++){var b=et.cartDishs.value[M];h.push({dishid:b.dishid,name:b.name,quantity:b.count,notes:b.notes,limit:b.limit,price:b.dis_price?b.dis_price:b.price,dishNote:b.dishNote})}for(let M=0;M<P.value.length;M++){var b=P.value[M];b.quantity>0&&h.push({dishid:b.id,name:b.name,quantity:b.quantity,limit:b.limit,price:b.dis_price?b.dis_price:b.price,dishNote:b.dishNote})}if(h.length===0)return nt.show_warn(c("notification.select_at_least_one")),!1;console.log("cart item:",h);const q=JSON.parse(localStorage.getItem(Zt)||"{}"),H=Date.now();if(!q.startTime||H-q.startTime>Yt*1e3)q.startTime=H;else{const M=Yt-parseInt((H-q.startTime)/1e3);bt(M);return}return localStorage.setItem(Zt,JSON.stringify(q)),o.value=!0,w.submit_order({name:p.name,note:p.note,table:ot(),items:h}),!0};function zt(){const p=localStorage.getItem("language");p&&(g.value=p)}function Vt(){for(let p=0;p<P.value.length;p++){const h=P.value[p];h.quantity=0}o.value=!1,A.value=0,et.cartDishs.value.length=0}ae(async()=>{await L(),zt(),m(k.value),w.clear_order_data=()=>{Vt()},w.setOnOrderConfirmed(p=>{console.log("setOnOrderConfirmed..."),Vt();const h=p;nt.show_success(c("notification.order_submitted",{id:h}))}),w.setOnShowError(p=>{o.value=!1,nt.show_error(p)})});let qt=!1;function ce(){localStorage.removeItem("login_time"),qt=!0;const p=i.query.table;p?e.push({path:"/",query:{table:p}}):e.push({path:"/takeReserve"})}function jt(){localStorage.setItem("order_cartDishs",JSON.stringify(et.cartDishs.value));const p=[],h=F.dishDatas.value;for(let b=0;b<h.length;b++)h[b].quantity>0&&p.push({id:h[b].id,quantity:h[b].quantity});localStorage.setItem("order_dishDatas",JSON.stringify(p)),(et.cartDishs.value.length>0||p.length>0)&&localStorage.setItem("login_time",JSON.stringify(Date.now())),qt&&(qt=!1,localStorage.removeItem("login_time"))}return ye(()=>{jt()}),window.addEventListener("beforeunload",p=>{w.cleanup(),jt()}),(p,h)=>{const b=Pt("touch"),q=Pt("touch-options");return r(),d(J,null,[n("div",kn,[y(_n,{types:u(w).orderMenuTab,typeIndex:k.value,tabItems:R.value,tableId:ot(),onClickType:st,onSwitchToWelcome:ce},null,8,["types","typeIndex","tabItems","tableId"]),h[2]||(h[2]=n("div",{class:"pb-8"},null,-1)),h[3]||(h[3]=n("div",{class:"pb-7 sm:pb-7 md:pb-7 lg:pb-7"},null,-1)),y($n,{duration:"3000",position:"center"}),Nt((r(),d("div",{onTouchstart:W,style:{"overflow-x":"hidden","touch-action":"pan-y"},class:"h-full"},[Y.value?(r(),G(Ms,{key:0,currentCustomDish:Q.value},null,8,["currentCustomDish"])):(r(),G(Aa,{key:1,updateCartItemCount:it,rateDish:v,likedItemsRef:V.value,dislikedItemsRef:z.value},null,8,["likedItemsRef","dislikedItemsRef"]))],32)),[[b,ut,"swipe",{left:!0,passive:!0}],[b,pt,"swipe",{right:!0,passive:!0}],[q,{swipeTolerance:100}]]),h[4]||(h[4]=n("div",{class:"pb-6"},null,-1)),n("div",xn,[n("div",Tn,[n("div",In,[ot()?(r(),G(u(K),{key:0,label:p.$t("common.orders"),icon:"pi pi-list",class:"p-button-secondary",onClick:I},null,8,["label"])):$("",!0)]),n("div",Dn,[y(u(oe),{value:u(A),severity:"danger",onClick:ft},{default:N(()=>h[1]||(h[1]=[n("i",{class:"pi pi-shopping-cart",style:{"font-size":"2rem"}},null,-1)])),_:1,__:[1]},8,["value"])])])])]),y(cs,{ref_key:"cartRef",ref:tt,updateCartItemCount:it,checkout:Dt,isTakeaway:ot()==null},null,8,["isTakeaway"]),y(u($t),{visible:O.value,"onUpdate:visible":h[0]||(h[0]=H=>O.value=H),header:p.$t("common.completedOrders"),modal:"",style:{width:"80vw","max-width":"700px"}},{default:N(()=>{var H,M;return[n("div",Cn,[n("div",Sn,[(H=S.value.adultPrice)!=null&&H.quantity&&S.value.adultPrice.quantity!=0?(r(),d("div",Bn,[n("div",Pn,[n("span",Nn,f(p.$t("common.adult")),1),n("small",null,f(p.$t("common.quantity"))+": "+f(S.value.adultPrice.quantity),1)]),n("div",Ln,[n("span",null,"€"+f((Number(S.value.adultPrice.price)*S.value.adultPrice.quantity).toFixed(2)),1)])])):$("",!0),(M=S.value.childrenPrice)!=null&&M.quantity&&S.value.childrenPrice.quantity!=0?(r(),d("div",An,[n("div",zn,[n("span",qn,f(p.$t("common.children")),1),n("small",null,f(p.$t("common.quantity"))+": "+f(S.value.childrenPrice.quantity),1)]),n("div",On,[n("span",null,"€"+f((Number(S.value.childrenPrice.price)*S.value.childrenPrice.quantity).toFixed(2)),1)])])):$("",!0)]),u(w).table.value.order.length===0?(r(),d("div",En,f(p.$t("common.noOrders")),1)):(r(),d("div",Rn,[(r(!0),d(J,null,Z(u(w).table.value.order,(D,E)=>(r(),d("div",{key:E,class:"flex justify-content-between border-bottom-1 pb-2"},[n("div",Vn,[n("span",jn,f(u(w).getDishName(D)),1),n("small",null,f(p.$t("common.quantity"))+": "+f(D.quantity),1)]),n("div",Mn,[n("span",null,"€"+f((D.price*D.quantity).toFixed(2)),1)])]))),128))]))]),n("div",Fn,f(p.$t("common.total"))+": €"+f(S.value.total),1)]}),_:1},8,["visible","header"])],64)}}},ei=It(Kn,[["__scopeId","data-v-1f2a4695"]]);export{ei as default};
