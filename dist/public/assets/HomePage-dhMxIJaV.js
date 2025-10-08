import{v as St,B as pt,x as wt,y as Nt,f as c,p as n,q as Y,i as $,z as ct,A as K,C as ht,h as a,t as u,n as lt,r as A,g as k,F as W,l as tt,k as r,j as E,D as Ct,a as I,u as ut,s as mt,m as at,e as Qt,E as re,G as ce,c as rt,H as bt,I as ue,R as Jt,J as At,K as de,L as Lt,M as pe,N as Tt,O as fe,P as Ot,Q as Dt,S as ve,T as he,U as It,o as Gt,b as me,V as be,d as ge}from"./index-C6fklXNE.js";import{s as gt,a as Xt}from"./index-CnhVicv4.js";import{s as j,a as Yt}from"./index-wtMFRQ64.js";import{D as st,c as et,s as Et}from"./index-gBdQje3w.js";import{_ as kt,b as Rt,c as Vt,a as Ft,s as jt}from"./_plugin-vue_export-helper-CFgEgiPP.js";import{s as ye}from"./index-C_aSOc3s.js";import{s as Mt,a as _e}from"./index-GwbuRUQW.js";import{s as we}from"./index-JZmjnyU2.js";import{s as Kt}from"./index-DdJMi525.js";import{s as ke}from"./index-CAre9-Lg.js";var $e=St`
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
`,xe={root:function(e){var s=e.props;return["p-tag p-component",{"p-tag-info":s.severity==="info","p-tag-success":s.severity==="success","p-tag-warn":s.severity==="warn","p-tag-danger":s.severity==="danger","p-tag-secondary":s.severity==="secondary","p-tag-contrast":s.severity==="contrast","p-tag-rounded":s.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Te=pt.extend({name:"tag",style:$e,classes:xe}),Ie={name:"BaseTag",extends:wt,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Te,provide:function(){return{$pcTag:this,$parentInstance:this}}};function yt(t){"@babel/helpers - typeof";return yt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yt(t)}function Ce(t,e,s){return(e=De(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function De(t){var e=Se(t,"string");return yt(e)=="symbol"?e:e+""}function Se(t,e){if(yt(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var d=s.call(t,e);if(yt(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var vt={name:"Tag",extends:Ie,inheritAttrs:!1,computed:{dataP:function(){return Nt(Ce({rounded:this.rounded},this.severity,this.severity))}}},Ne=["data-p"];function Pe(t,e,s,d,m,i){return n(),c("span",K({class:t.cx("root"),"data-p":i.dataP},t.ptmi("root")),[t.$slots.icon?(n(),Y(ht(t.$slots.icon),K({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(n(),c("span",K({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):$("",!0),t.value!=null||t.$slots.default?ct(t.$slots,"default",{key:2},function(){return[a("span",K({class:t.cx("label")},t.ptm("label")),u(t.value),17)]}):$("",!0)],16,Ne)}vt.render=Pe;var Be=St`
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
`,Ae={root:function(e){var s=e.props;return["p-avatar p-component",{"p-avatar-image":s.image!=null,"p-avatar-circle":s.shape==="circle","p-avatar-lg":s.size==="large","p-avatar-xl":s.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Le=pt.extend({name:"avatar",style:Be,classes:Ae}),ze={name:"BaseAvatar",extends:wt,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Le,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function _t(t){"@babel/helpers - typeof";return _t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_t(t)}function Wt(t,e,s){return(e=qe(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function qe(t){var e=Oe(t,"string");return _t(e)=="symbol"?e:e+""}function Oe(t,e){if(_t(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var d=s.call(t,e);if(_t(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Zt={name:"Avatar",extends:ze,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}},computed:{dataP:function(){return Nt(Wt(Wt({},this.shape,this.shape),this.size,this.size))}}},Ee=["aria-labelledby","aria-label","data-p"],Re=["data-p"],Ve=["data-p"],Fe=["src","alt","data-p"];function je(t,e,s,d,m,i){return n(),c("div",K({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root"),{"data-p":i.dataP}),[ct(t.$slots,"default",{},function(){return[t.label?(n(),c("span",K({key:0,class:t.cx("label")},t.ptm("label"),{"data-p":i.dataP}),u(t.label),17,Re)):t.$slots.icon?(n(),Y(ht(t.$slots.icon),{key:1,class:lt(t.cx("icon"))},null,8,["class"])):t.icon?(n(),c("span",K({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon"),{"data-p":i.dataP}),null,16,Ve)):t.image?(n(),c("img",K({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return i.onError&&i.onError.apply(i,arguments)})},t.ptm("image"),{"data-p":i.dataP}),null,16,Fe)):$("",!0)]})],16,Ee)}Zt.render=je;const Me={class:"grid"},Ke={class:"flex flex-column"},We=["onClick"],He={class:"p-1 flex-shrink-0 w-7rem h-7rem flex align-items-center justify-content-center overflow-hidden"},Ue=["src","alt"],Qe={class:"flex flex-column justify-content-center"},Je={class:"font-bold"},Ge={class:"flex flex-wrap gap-2"},Xe={class:"flex gap-1 align-items-center"},Ye={class:"text-color-secondary line2"},Ze={key:0,class:"text-xl font-bold text-primary"},ta={key:1,class:"flex align-items-center gap-1"},ea={class:"text-l font-bold text-color-secondary"},aa={class:"text-sm line-through text-500"},sa={key:2,class:"flex gap-2 mr-2",id:"card-quantity"},na={class:"w-2rem text-xl text-center"},oa={key:3,class:"flex gap-2 mr-2"},ia={key:0,class:"m-2 mt-0"},la={class:"flex flex-row justify-content-between align-content-center"},ra={class:"flex flex-column"},ca={class:"text-l font-bold"},ua={key:0,class:"text-l font-bold text-color-secondary"},da={key:1,class:"flex align-items-center gap-1"},pa={class:"text-l font-bold text-color-secondary"},fa={class:"text-sm line-through text-500"},va={key:0,class:"flex ml-2 mr-2"},ha={class:"w-2rem text-xl text-center"},ma={key:1,class:"flex gap-2 mr-3 pt-2 pb-2"},ba={class:"max-w-5rem flex align-items-center"},ga={class:"font-bold whitespace-nowrap"},ya={class:"mb-2 flex justify-content-center"},_a={class:"font-bold text-center"},wa={class:"mb-2"},ka={class:"text-color-secondary m-0 line-height-3 line2 text-center"},$a={class:"mb-2"},xa={class:"flex justify-content-center"},Ta=["src","alt"],Ia={class:"flex align-items-center gap-2"},Ca=["src","alt"],Da={class:"flex align-items-center gap-3 ml-auto"},Sa={__name:"DishList",props:{updateCartItemCount:{type:Function,required:!0},rateDish:{type:Function,required:!0},likedItemsRef:Array,dislikedItemsRef:Array},setup(t){const e=st.dishes;let s={rated:!1,id:null,like:0,rate:0};function d(){var h;const w=I.currentPage.value,O=(h=w==null?void 0:w.data)==null?void 0:h.logoPath;return O?I.pathFormated(O):"/images/logo_logo.png"}const m=w=>{z.updateCartItemCount(w)},i=w=>{z.updateCartItemCount(-1)},_=w=>st.dishDatas.value[w]?st.dishDatas.value[w].quantity:0,S=w=>{if(!M())return!1;const O=w.quantity;let h=3;if(w.price>0&&(h=9),w.limit){const X=w.id,x=M(),f=(x.peopleType.adults+x.peopleType.children)*w.limit,y=x.order.find(B=>B.dishid==X);let C=0;if(w.subitem)for(const B of w.subitem){C+=_(B);const l=x.order.find(b=>b.dishid==P(B));l&&(C+=l.quantity)}else C+=w.quantity,y&&(C+=y.quantity);return O>=h||f&&C>=f}return O>=h},P=w=>st.dishDatas.value[w]?st.dishDatas.value[w].id:0,M=()=>I.getTableValue();function H(){z.rateDish(s.id,s.like,s.rate,s.rated),s.id=null,s.like=0,s.rate=0,s.rated=!1}const L=w=>{const O=z.likedItemsRef.indexOf(w);if(s.id=w.id,O!==-1)z.likedItemsRef.splice(O,1),s.like+=-1,s.rate+=-1,s.rated=!1;else{s.rated=!0,z.likedItemsRef.push(w);const h=z.dislikedItemsRef.indexOf(w);h!==-1?(z.dislikedItemsRef.splice(h,1),s.like+=1):(s.like+=1,s.rate+=1)}},q=w=>{const O=z.dislikedItemsRef.indexOf(w);if(s.id=w.id,O!==-1)z.dislikedItemsRef.splice(O,1),s.rate+=-1,s.rated=!1;else{s.rated=!0,z.dislikedItemsRef.push(w);const h=z.likedItemsRef.indexOf(w);h!==-1?(z.likedItemsRef.splice(h,1),s.like+=-1):s.rate+=1}},z=t,U=A(!1),J=A({}),R=w=>{U.value=!0,J.value=w},N=w=>{w.target.src="/images/default.png"};function Q(w){ot(w.target,300)}function nt(w){ot(w.target,110)}function ot(w,O){const h=w.naturalWidth,X=w.naturalHeight,x=Math.min(h,O),f=x/h,y=X*f;w.style.width=`${x}px`,w.style.height=`${y}px`}return(w,O)=>(n(),c(W,null,[a("div",Me,[(n(!0),c(W,null,tt(r(e),(h,X)=>(n(),c("div",{key:X,class:"col-12 sm:col-12 md:col-6 lg:col-4 border-round surface-section shadow-1 p-2"},[a("div",Ke,[a("div",{class:lt(["flex flex-row",h.subItems.length!==0?"flex-grow-1":""]),onClick:x=>R(h.dish)},[a("div",He,[a("img",{src:h.dish.image||"/images/default.png",alt:h.dish.name,class:"w-full h-full",style:{"object-fit":"cover"},onError:N,onLoad:nt},null,40,Ue)]),a("div",Qe,[a("div",Je,u(h.dish.name),1),a("div",null,[a("div",Ge,[a("div",Xe,[(n(),c(W,null,tt(5,x=>a("i",{key:x,class:lt(["pi invert-star",x<=Math.floor(h.dish.likes/h.dish.rates*5)?"pi-star-fill":x-.5<=h.dish.likes/h.dish.rates*5?"pi-star-half-fill":"pi-star"]),style:{color:"black"}},null,2)),64)),a("p",null,"("+u(h.dish.rates?h.dish.rates:0)+")",1)])])]),a("div",null,[a("p",Ye,u(h.dish.note),1)])])],10,We),h.subItems.length==0?(n(),c("div",{key:0,class:lt(["flex ml-2 mr-2 mb-2",Number(h.dish.price)>0?"justify-content-between":"justify-content-end"])},[!h.dish.discount&&Number(h.dish.price)>0?(n(),c("span",Ze,"€"+u(h.dish.price),1)):$("",!0),h.dish.discount?(n(),c("div",ta,[a("span",ea,"€"+u(h.dish.dis_price),1),a("span",aa,"€"+u(h.dish.price),1),k(r(vt),{severity:"danger",value:"-"+h.dish.discount+"%"},null,8,["value"])])):$("",!0),h.dish.soldout?$("",!0):(n(),c("div",sa,[k(r(j),{icon:"pi pi-minus",rounded:"",disabled:h.dish.quantity<=0,onClick:x=>{h.dish.quantity--,i()},class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),a("span",na,u(h.dish.quantity),1),k(r(j),{icon:"pi pi-plus",rounded:"",disabled:S(h.dish),onClick:x=>{h.dish.quantity++,m(1)},class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])),h.dish.soldout?(n(),c("div",oa,[k(r(vt),{severity:"danger",value:w.$t("common.soldout")},null,8,["value"])])):$("",!0)],2)):$("",!0),h.subItems.length!==0?(n(!0),c(W,{key:1},tt(h.subItems,(x,f)=>(n(),c(W,{key:"index"},[x.disable?$("",!0):(n(),c("div",ia,[a("div",la,[a("div",ra,[a("span",ca,u(x.subname),1),!x.discount&&x.price!=="0.00"&&x.price!=="0"?(n(),c("span",ua,"€"+u(x.price),1)):$("",!0),x.discount?(n(),c("div",da,[a("span",pa,"€"+u(x.dis_price),1),a("span",fa,"€"+u(x.price),1),k(r(vt),{severity:"danger",value:"-"+x.discount+"%"},null,8,["value"])])):$("",!0)]),x.soldout?$("",!0):(n(),c("div",va,[k(r(j),{icon:"pi pi-minus",rounded:"",disabled:x.quantity<=0,onClick:y=>{x.quantity--,i()},class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),a("span",ha,u(x.quantity),1),k(r(j),{icon:"pi pi-plus",rounded:"",onClick:y=>{x.quantity++,m(1)},class:"w-2rem h-2rem",disabled:S(x)},null,8,["onClick","disabled"])])),x.soldout?(n(),c("div",ma,[k(r(vt),{severity:"danger",value:w.$t("common.soldout")},null,8,["value"])])):$("",!0)])]))],64))),128)):$("",!0)])]))),128))]),k(r(gt),{visible:U.value,"onUpdate:visible":O[2]||(O[2]=h=>U.value=h),modal:"",header:"dish",style:Ct([{width:"23rem"},{width:"80vw","max-width":"700px"}]),onHide:O[3]||(O[3]=h=>H())},{header:E(()=>[a("div",ba,[k(r(Zt),{image:d(),class:"w-full"},null,8,["image"])]),a("span",ga,u(w.$t("common.details")),1)]),default:E(()=>[a("div",ya,[a("span",_a,u(J.value.name),1)]),a("div",wa,[a("span",ka,u(J.value.note),1)]),a("div",$a,[a("div",xa,[a("img",{class:"w-full h-auto object-contain",src:J.value.image,alt:J.value.name,onError:N,onLoad:Q},null,40,Ta)])]),a("div",Ia,[(n(!0),c(W,null,tt(J.value.allergies,(h,X)=>(n(),c("img",{src:"images/"+h+".png",alt:h,class:"w-2rem h-2rem border-round flex-shrink-0",style:{"object-fit":"cover","min-width":"2rem"}},null,8,Ca))),256)),a("div",Da,[a("button",{onClick:O[0]||(O[0]=h=>L(J.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[a("i",{class:lt(["pi pi-thumbs-up text-xl",z.likedItemsRef.includes(J.value)?"text-green-500":"text-gray-400"])},null,2)]),a("button",{onClick:O[1]||(O[1]=h=>q(J.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[a("i",{class:lt(["pi pi-thumbs-down text-xl",z.dislikedItemsRef.includes(J.value)?"text-red-500":"text-gray-400"])},null,2)])])])]),_:1},8,["visible"])],64))}},Na=kt(Sa,[["__scopeId","data-v-a6c2d08d"]]),Pa={key:0,class:"text-3xl font-bold"},Ba={class:"flex flex-column gap-3 p-1"},Aa={key:0,class:"flex flex-column gap-1"},La={key:0,class:"m-0"},za={key:0,class:"m-0"},qa={class:"flex justify-content-between gap-4 mt-1"},Oa={class:"flex align-items-center gap-2"},Ea=["src","alt"],Ra={class:"flex-grow-1 min-width-0 max-w-18rem"},Va={class:"flex flex-column gap-1"},Fa={class:"flex align-items-center gap-2"},ja={class:"text-xl font-bold line1 whitespace-nowrap overflow-hidden text-overflow-ellipsis",style:{"max-width":"20rem"}},Ma={class:"flex align-items-end gap-1"},Ka={key:0,class:"text-xl font-bold text-primary"},Wa={key:1,class:"text-xl font-bold text-primary"},Ha={key:2,class:"text-sm text-color-secondary"},Ua={key:0,class:"text-xs text-primary"},Qa={class:"flex-shrink-0 flex flex-wrap justify-content-between align-items-center gap-1"},Ja={class:"flex flex-wrap justify-content-between align-content-center"},Ga={class:"flex align-items-center gap-1"},Xa={class:"w-2rem text-center"},Ya={key:1,class:"flex flex-column gap-2 mt-2"},Za={for:"in_label"},ts={for:"in_label"},es={class:"bottom-0 left-0 mt-2"},as={class:"text-2xl font-bold"},ss={class:"text-2xl font-bold text-primary pl-2"},ns={class:"flex justify-content-between"},os={__name:"Cart",props:{updateCartItemCount:{type:Function,required:!0},checkout:{type:Function,required:!0},isTakeaway:Boolean},setup(t,{expose:e}){const{locale:s}=ut(),d=Qt(),{t:m}=ut(),i=et.cartDishs;I.freeCounts;const _=A([]),S=A(),P=A(),M=A(!1),H=A(!1),L=A(!0),q=A(""),z=A("");function U(l,b,v){let F="";const Z=s.value,it=I.customDishAPI.getCustomDishByName(l);for(const $t of v){const Pt=it.types[b].dishes.find(dt=>dt.dishid===$t.id)[`name_${Z}`];F=F+Pt+"/"}return F}function J(l,b){const v=s.value;return I.customDishAPI.getCustomDishByName(l).types[b][`typeName_${v}`]}const R=(l,b)=>{const v=_.value[l].quantity+b;v>=0&&(_.value[l].quantity=v,ot.updateCartItemCount(b))};function N(l){l&&S.value&&(S.value.dishNote=P.value?P.value:void 0),H.value=!1}function Q(){P.value&&(P.value=void 0),S.value&&(S.value=void 0)}function nt(l){S.value=l,P.value=S.value.dishNote?S.value.dishNote:void 0,H.value=!0}const ot=t;e({showDishList:l=>{M.value=!0,_.value.length=0;for(let b=0;b<l.length;b++)_.value.push(l[b]);L.value=_.value.length==0&&i.length==0}});function O(l){et.removeItem(l)}function h(){ot.isTakeaway?X():x()}function X(){const l=[];i.value.forEach(b=>{l.push(b)}),_.value.forEach(b=>{b.quantity>0&&l.push(b)}),l.length<=0?at.show_warn(m("notification.select_at_least_one")):(M.value=!1,d.push({path:"/paymentPage"}))}function x(){ot.checkout({name:q.value,note:z.value})&&(M.value=!1),i.value.forEach(l=>{l.dishNote=void 0}),_.value.forEach(l=>{l.dishNote=void 0}),z.value="",st.cleanDishDataQty(),localStorage.removeItem("order_cartDishs"),localStorage.removeItem("order_dishDatas")}function f(l){return l.subname!=""&&l.subname!="Default Title"?l.name+" "+l.subname:l.name}function y(){let l=0;return i.value.forEach(b=>{l+=b.dis_price?b.dis_price*b.count:b.price*b.count}),_.value.forEach(b=>{l+=b.dis_price?b.dis_price*b.quantity:b.price*b.quantity}),"€"+l.toFixed(2)}const C=l=>{l.target.src="/images/default.png"},B=l=>{const b=l.quantity;let v=3;return l.price>0&&(v=9),b>=v};return(l,b)=>(n(),c(W,null,[k(r(gt),{class:"bg-primary-reverse text-sm md:text-lg lg:text-xl",visible:M.value,"onUpdate:visible":b[2]||(b[2]=v=>M.value=v),modal:"",header:l.$t("common.cart"),style:Ct([{backgroundColor:"rgba(250, 250, 250, 1)",height:"100%",minWidth:"24rem"},{width:"80vw","max-width":"700px"}]),dismissableMask:!0},{footer:E(()=>[a("div",es,[a("span",as,u(l.$t("common.total"))+": ",1),a("span",ss,u(y()),1),k(r(j),{icon:t.isTakeaway?"pi pi-wallet":"pi pi-plus",class:"p-button-success p-button-rounded ml-3",onClick:h,label:t.isTakeaway?r(m)("common.pay"):r(m)("common.send")},null,8,["icon","label"])])]),default:E(()=>[L.value?(n(),c("h2",Pa,"Cart is empty.")):$("",!0),a("div",Ba,[(n(!0),c(W,null,tt(r(i),(v,F)=>(n(),Y(r(ye),{style:{overflow:"hidden"},key:F},{title:E(()=>[mt(u(l.$t(`common.${v.name.replace(/[^a-zA-Z0-9\s]/g,"").toLowerCase().replace(/\s+/g,"")}`)),1)]),subtitle:E(()=>[mt(u(l.$t("common.price"))+" : "+u(v.price)+"€",1)]),content:E(()=>[r(I).customDishAPI.customDishes.value.find(Z=>Z.name==v.name)?(n(),c("div",Aa,[(n(!0),c(W,null,tt(v.notesAndId,(Z,it)=>(n(),c("div",null,[v.notesAndId[it].length!==0?(n(),c("span",La,u(J(v.name,it))+": "+u(U(v.name,it,Z)),1)):$("",!0)]))),256)),a("div",null,[v.dishNote?(n(),c("span",za,u(l.$t("common.note"))+": "+u(v.dishNote),1)):$("",!0)])])):$("",!0)]),footer:E(()=>[a("div",qa,[t.isTakeaway?$("",!0):(n(),Y(r(j),{key:0,label:r(m)("common.edit")+" "+r(m)("common.note"),severity:"contrast",onClick:Z=>nt(v)},null,8,["label","onClick"])),k(r(j),{label:r(m)("common.remove"),severity:"danger",onClick:Z=>O(v)},null,8,["label","onClick"])])]),_:2},1024))),128)),(n(!0),c(W,null,tt(_.value,(v,F)=>(n(),c("div",{key:F,class:"p-2 border-round shadow-1 transition-all transition-duration-200 hover:shadow-3 flex flex-column gap-1"},[a("div",Oa,[a("img",{src:v.image,alt:v.name,class:"w-4rem h-4rem border-round flex-shrink-0",onError:C,style:{"object-fit":"cover","min-width":"4rem"}},null,40,Ea),a("div",Ra,[a("div",Va,[a("div",Fa,[a("span",ja,u(f(v)),1)])]),a("div",Ma,[v.dis_price?(n(),c("span",Ka,"€"+u(v.dis_price),1)):$("",!0),!v.dis_price&&v.price>0?(n(),c("span",Wa,"€"+u(v.price),1)):$("",!0),v.price>0?(n(),c("span",Ha,"/uni.")):$("",!0)])])]),a("div",null,[v.dishNote?(n(),c("span",Ua,u(r(m)("common.note")+": "+v.dishNote),1)):$("",!0)]),a("div",Qa,[a("div",Ja,[t.isTakeaway?$("",!0):(n(),Y(r(j),{key:0,label:r(m)("common.edit")+" "+r(m)("common.note"),severity:"contrast",class:"w-3.5rem h-2rem",onClick:Z=>nt(v)},null,8,["label","onClick"]))]),a("div",Ga,[k(r(j),{icon:"pi pi-minus",rounded:"",disabled:v.quantity<=0,onClick:Z=>R(F,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),a("span",Xa,u(v.quantity),1),k(r(j),{icon:"pi pi-plus",rounded:"",disabled:B(v),onClick:Z=>R(F,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])])]))),128))]),t.isTakeaway?$("",!0):(n(),c("div",Ya,[k(r(Mt),{variant:"in"},{default:E(()=>[k(r(Xt),{id:"in_label",modelValue:q.value,"onUpdate:modelValue":b[0]||(b[0]=v=>q.value=v),variant:"filled",maxlength:"20"},null,8,["modelValue"]),a("label",Za,u(r(m)("common.name")),1)]),_:1}),k(r(Mt),{variant:"in"},{default:E(()=>[k(r(Et),{id:"in_label",class:"min-w-full",rows:"5",modelValue:z.value,"onUpdate:modelValue":b[1]||(b[1]=v=>z.value=v),variant:"filled",maxlength:"200"},null,8,["modelValue"]),a("label",ts,u(r(m)("common.observation")),1)]),_:1})]))]),_:1},8,["visible","header"]),k(r(gt),{visible:H.value,"onUpdate:visible":b[6]||(b[6]=v=>H.value=v),header:r(m)("common.note"),onHide:b[7]||(b[7]=v=>Q()),modal:"",dismissableMask:!0},{default:E(()=>[k(r(Et),{modelValue:P.value,"onUpdate:modelValue":b[3]||(b[3]=v=>P.value=v),rows:"5",cols:"30",placeholder:r(m)("common.edit")+" "+r(m)("common.note")+"...",maxlength:"100"},null,8,["modelValue","placeholder"]),a("div",ns,[k(r(j),{label:r(m)("common.cancel"),severity:"danger",onClick:b[4]||(b[4]=v=>N(!1))},null,8,["label"]),k(r(j),{label:r(m)("common.save"),severity:"primary",size:"sm",onClick:b[5]||(b[5]=v=>N(!0))},null,8,["label"])])]),_:1},8,["visible","header"])],64))}},is=kt(os,[["__scopeId","data-v-483203ce"]]);var ls=St`
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
`,rs={root:"p-overlaybadge"},cs=pt.extend({name:"overlaybadge",style:ls,classes:rs}),us={name:"OverlayBadge",extends:Yt,style:cs,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},te={name:"OverlayBadge",extends:us,inheritAttrs:!1,components:{Badge:Yt}};function ds(t,e,s,d,m,i){var _=re("Badge");return n(),c("div",K({class:t.cx("root")},t.ptmi("root")),[ct(t.$slots,"default"),k(_,K(t.$props,{pt:t.ptm("pcBadge")}),null,16,["pt"])],16)}te.render=ds;A([]);A("iniImages()");const ps={class:"m-3"},fs={class:"flex flex-column gap-2"},vs={class:"w-full flex justify-content-center"},hs={key:0,class:"max-w-19rem"},ms=["src"],bs={style:{width:"300px",height:"300px",background:"url(/boxImage/box.png)"}},gs={key:0,class:"flex align-items-center justify-content-center text-4xl font-bold text-white w-full h-full"},ys={key:1,class:"grid m-0 p-2"},_s=["onClick"],ws={class:"flex align-items-center justify-content-center font-bold m-0 p-0",style:{width:"94px",height:"94px"}},ks=["src"],$s={class:"flex flex-wrap justify-content-between align-items-center m-1"},xs={class:"flex gap-1 align-items-center"},Ts={key:0},Is={class:"font-bold mb-2"},Cs={key:1,class:"flex justify-content-between gap-2 mt-3"},Ds={class:"font-bold mb-2"},Ss={class:"flex mr-2"},Ns={class:"w-3rem text-xl text-center"},Ps={class:"font-bold block mb-2"},Bs={class:"flex flex-wrap"},As={key:2,class:"flex flex-wrap gap-2 mt-3"},Ls={class:"font-bold block mb-2"},zs={class:"font-bold block mb-2 text-center"},qs={class:"flex flex-wrap gap-2 mt-3"},Os={__name:"CustomDish",props:{currentCustomDish:Object},emits:["typeClick"],setup(t,{emit:e}){const{locale:s}=ut(),d=t,m=ce(),{t:i}=ut(),_=rt(()=>d.currentCustomDish),S=rt(()=>_.boxImages),P=A(0),M=rt(()=>{let f=_.value.initialPrice;for(const y of _.value.types??[])for(const C of y.dishes??[])C.selected&&(f+=C.price);return Number(f).toFixed(2)}),H=e,L=A(null),q=rt(()=>{const f=s.value,y=`title_${f}`,C=`description_${f}`;return _.value.descriptions.map(B=>({title:B[y],descriptions:B.descriptions.map(l=>l[C]),image:B==null?void 0:B.image}))}),z=rt(()=>{var C,B;const f=Number(((C=_.value)==null?void 0:C.like)??0),y=Number(((B=_.value)==null?void 0:B.rate)??0);return y?f/y*5:0});function U(f,y){const C=s.value;return f[`${y}_${C}`]}function J(f,y,C){const B=f[y];if(B.selected){B.selected=!1;return}else{const b=f.filter(v=>v.selected).length;if(C===1){h(f),B.selected=!0;return}b<C&&(B.selected=!0)}}function R(f,y,C){const B=f.dishes;H("typeClick",f,y,B[y].selected),J(B,y,C)}function N(f){return f.selected}function Q(){if(!X(_.value.types))return;const f=ot(_.value.types),y=w(_.value.types);et.addItem({dishid:-1,name:_.value.name,category:d.currentCustomDish.category,count:P.value!==0?P.value:1,price:M.value,notes:f,notesAndId:y}),console.log("CART: ",et.cartDishs),O(_.value.types),at.show({severity:"info",summary:"info",detail:i("customDishBibimbapVue.addToCartSuccessBibimbap")})}function nt(f){return!f||!f.dishes?"":f.dishes.filter(C=>C.selected).map(C=>C.name).join(",")}function ot(f){return f?f.map(y=>nt(y)):[]}function w(f){return f?f.map(y=>y.dishes?y.dishes.filter(C=>C.selected).map(C=>({id:C.dishid,name:C.name})):[]):[]}function O(f){f&&f.forEach(y=>{y.dishes&&y.dishes.forEach(C=>{C.selected=!1})})}function h(f){f.forEach(y=>y.selected=!1)}function X(f){if(_.value.options.quantity&&P.value<=0)return at.show({severity:"warn",detail:i("notification.quantity_must_be_positive")}),!1;for(const y of f)if(y.dishes.filter(B=>B.selected).length<y.minQuantity){const B=y.typeName;return at.show({severity:"warn",detail:i("notification.select_type_of",{name:B})}),!1}return!0}function x(f){f?I.customDishAPI.like(_.value.id)&&(L.value="like",m.add({severity:"success",summary:i("common.success"),detail:i("common.rate")+" "+i("common.success"),life:750})):I.customDishAPI.unLike(_.value.id)&&(L.value="unlike",m.add({severity:"success",summary:i("common.success"),detail:i("common.rate")+" "+i("common.success"),life:750}))}return(f,y)=>{var C,B;return n(),c("div",ps,[a("div",fs,[k(r(jt),{class:"w-full max-w-xl mx-auto"},{default:E(()=>[(n(!0),c(W,null,tt(q.value,(l,b)=>(n(),Y(r(Ft),{key:b,value:b},{default:E(()=>[k(r(Rt),null,{default:E(()=>[mt(u(l.title),1)]),_:2},1024),k(r(Vt),null,{default:E(()=>{var v;return[(n(!0),c(W,null,tt(l.descriptions,(F,Z)=>(n(),c("p",{key:Z},u(F),1))),128)),a("div",vs,[(v=l.image)!=null&&v.src?(n(),c("div",hs,[a("img",{src:l.image.src,class:"w-full"},null,8,ms)])):$("",!0)])]}),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1}),((B=(C=_.value)==null?void 0:C.value)==null?void 0:B.name)==="MY BOX"?(n(),Y(r(jt),{key:0,class:"w-full max-w-xl mx-auto"},{default:E(()=>[k(r(Ft),{value:"0"},{default:E(()=>[k(r(Rt),null,{default:E(()=>[mt(" 🥩 "+u(f.$t("common.showMybox")),1)]),_:1}),k(r(Vt),null,{default:E(()=>[a("div",bs,[f.isEmptyArray(S.value)?(n(),c("div",gs,u(f.$t("common.myboxAlarm")),1)):$("",!0),f.isEmptyArray(S.value)?$("",!0):(n(),c("div",ys,[(n(!0),c(W,null,tt(S.value,l=>(n(),c("div",{class:"col-4 p-0",onClick:b=>f.imageSelectAction(l)},[a("div",ws,[l?(n(),c("img",{key:0,class:"m-0 p-0",src:f.imagePath(l),style:{width:"82px",height:"82px"}},null,8,ks)):$("",!0)])],8,_s))),256))]))])]),_:1})]),_:1})]),_:1})):$("",!0)]),a("div",$s,[a("div",xs,[(n(),c(W,null,tt(5,l=>a("i",{key:l,class:lt(["pi invert-star",l<=Math.floor(z.value)?"pi-star-fill":l-.5<=z.value?"pi-star-half":"pi-star"]),style:{color:"black"}},null,2)),64)),a("p",null,"("+u(_.value.rate?_.value.rate:0)+")",1)]),a("div",null,[k(r(j),{text:"",icon:"pi pi-thumbs-up",severity:L.value==="like"?"success":"",onClick:y[0]||(y[0]=l=>x(!0))},null,8,["severity"]),k(r(j),{text:"",icon:"pi pi-thumbs-down",severity:L.value==="unlike"?"danger":"",onClick:y[1]||(y[1]=l=>x(!1))},null,8,["severity"])])]),_.value.options.extraInfo?(n(),c("div",Ts,[a("label",Is,u(_.value.options.extraInfo),1)])):$("",!0),_.value.options.quantity?(n(),c("div",Cs,[a("div",null,[a("label",Ds,u(f.$t("common.quantity"))+" / "+u(f.$t("common.pieces")),1)]),a("div",Ss,[k(r(j),{icon:"pi pi-minus",disabled:P.value<=0,onClick:y[2]||(y[2]=l=>P.value-=_.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"]),a("span",Ns,u(P.value),1),k(r(j),{icon:"pi pi-plus",disabled:P.value>=_.value.options.maxQuantity,onClick:y[3]||(y[3]=l=>P.value+=_.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"])])])):$("",!0),(n(!0),c(W,null,tt(_.value.types,(l,b)=>(n(),c("div",{key:l.id},[bt(a("div",null,[a("label",Ps,u(b+1)+". "+u(U(l,"typeName")),1),a("div",Bs,[(n(!0),c(W,null,tt(l.dishes,(v,F)=>(n(),Y(r(j),{key:F,onClick:Z=>R(l,F,P.value==0?l.maxQuantity:l.maxQuantity*P.value),class:lt([{"p-button-primary":N(v),"p-button-outlined":!N(v)},"m-1"])},{default:E(()=>[a("p",{class:lt({"text-gray-700":!N(v)})},u(U(v,"name")),3)]),_:2},1032,["onClick","class"]))),128))])],512),[[ue,l.enable]])]))),128)),t.currentCustomDish.initialPrice!==0?(n(),c("div",As,[a("label",Ls,u(f.$t("common.price"))+":",1),a("label",zs,u(M.value+"€"),1)])):$("",!0),a("div",qs,[k(r(j),{icon:"pi pi-shopping-cart",onClick:y[4]||(y[4]=l=>Q()),label:f.$t("common.addToCart"),class:"m-3",severity:"primary",raised:""},null,8,["label"])])])}}},Es=kt(Os,[["__scopeId","data-v-1bbb17dd"]]);var Rs=St`
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
`,Vs={root:function(e){var s=e.props;return["p-tabs p-component",{"p-tabs-scrollable":s.scrollable}]}},Fs=pt.extend({name:"tabs",style:Rs,classes:Vs}),js={name:"BaseTabs",extends:wt,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:Fs,provide:function(){return{$pcTabs:this,$parentInstance:this}}},ee={name:"Tabs",extends:js,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function Ms(t,e,s,d,m,i){return n(),c("div",K({class:t.cx("root")},t.ptmi("root")),[ct(t.$slots,"default")],16)}ee.render=Ms;var Ks={root:"p-tablist",content:function(e){var s=e.instance;return["p-tablist-content",{"p-tablist-viewport":s.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Ws=pt.extend({name:"tablist",classes:Ks}),Hs={name:"BaseTabList",extends:wt,props:{},style:Ws,provide:function(){return{$pcTabList:this,$parentInstance:this}}},ae={name:"TabList",extends:Hs,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,s=this.getVisibleButtonWidths(),d=At(e)-s,m=Math.abs(e.scrollLeft),i=d*.8,_=m-i,S=Math.max(_,0);e.scrollLeft=Ot(e)?-1*S:S},onNextButtonClick:function(){var e=this.$refs.content,s=this.getVisibleButtonWidths(),d=At(e)-s,m=Math.abs(e.scrollLeft),i=d*.8,_=m+i,S=e.scrollWidth-d,P=Math.min(_,S);e.scrollLeft=Ot(e)?-1*P:P},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,s=e.content,d=e.inkbar,m=e.tabs;if(d){var i=Lt(s,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(d.style.height=pe(i)+"px",d.style.top=Tt(i).top-Tt(m).top+"px"):(d.style.width=fe(i)+"px",d.style.left=Tt(i).left-Tt(m).left+"px")}},updateButtonState:function(){var e=this.$refs,s=e.list,d=e.content,m=d.scrollTop,i=d.scrollWidth,_=d.scrollHeight,S=d.offsetWidth,P=d.offsetHeight,M=Math.abs(d.scrollLeft),H=[At(d),de(d)],L=H[0],q=H[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=m!==0,this.isNextButtonEnabled=s.offsetHeight>=P&&parseInt(m)!==_-q):(this.isPrevButtonEnabled=M!==0,this.isNextButtonEnabled=s.offsetWidth>=S&&parseInt(M)!==i-L)},getVisibleButtonWidths:function(){var e=this.$refs,s=e.prevButton,d=e.nextButton,m=0;return this.showNavigators&&(m=((s==null?void 0:s.offsetWidth)||0)+((d==null?void 0:d.offsetWidth)||0)),m}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return Nt({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:_e,ChevronRightIcon:we},directives:{ripple:Jt}},Us=["data-p"],Qs=["aria-label","tabindex"],Js=["data-p"],Gs=["aria-orientation"],Xs=["aria-label","tabindex"];function Ys(t,e,s,d,m,i){var _=Dt("ripple");return n(),c("div",K({ref:"list",class:t.cx("root"),"data-p":i.dataP},t.ptmi("root")),[i.showNavigators&&m.isPrevButtonEnabled?bt((n(),c("button",K({key:0,ref:"prevButton",type:"button",class:t.cx("prevButton"),"aria-label":i.prevButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return i.onPrevButtonClick&&i.onPrevButtonClick.apply(i,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(n(),Y(ht(i.templates.previcon||"ChevronLeftIcon"),K({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,Qs)),[[_]]):$("",!0),a("div",K({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return i.onScroll&&i.onScroll.apply(i,arguments)}),"data-p":i.dataP},t.ptm("content")),[a("div",K({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":i.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[ct(t.$slots,"default"),a("span",K({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,Gs)],16,Js),i.showNavigators&&m.isNextButtonEnabled?bt((n(),c("button",K({key:1,ref:"nextButton",type:"button",class:t.cx("nextButton"),"aria-label":i.nextButtonAriaLabel,tabindex:i.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return i.onNextButtonClick&&i.onNextButtonClick.apply(i,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(n(),Y(ht(i.templates.nexticon||"ChevronRightIcon"),K({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,Xs)),[[_]]):$("",!0)],16,Us)}ae.render=Ys;var Zs={root:function(e){var s=e.instance,d=e.props;return["p-tab",{"p-tab-active":s.active,"p-disabled":d.disabled}]}},tn=pt.extend({name:"tab",classes:Zs}),en={name:"BaseTab",extends:wt,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:tn,provide:function(){return{$pcTab:this,$parentInstance:this}}},se={name:"Tab",extends:en,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var s=this.findNextTab(e.currentTarget);s?this.changeFocusedTab(e,s):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var s=this.findPrevTab(e.currentTarget);s?this.changeFocusedTab(e,s):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var s=this.findFirstTab();this.changeFocusedTab(e,s),e.preventDefault()},onEndKey:function(e){var s=this.findLastTab();this.changeFocusedTab(e,s),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findNextTab:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=s?e:e.nextElementSibling;return d?It(d,"data-p-disabled")||It(d,"data-pc-section")==="activebar"?this.findNextTab(d):Lt(d,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=s?e:e.previousElementSibling;return d?It(d,"data-p-disabled")||It(d,"data-pc-section")==="activebar"?this.findPrevTab(d):Lt(d,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,s){he(s),this.scrollInView(s)},scrollInView:function(e){var s;e==null||(s=e.scrollIntoView)===null||s===void 0||s.call(e,{block:"nearest"})}},computed:{active:function(){var e;return ve((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},attrs:function(){return K(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return Nt({active:this.active})}},directives:{ripple:Jt}};function an(t,e,s,d,m,i){var _=Dt("ripple");return t.asChild?ct(t.$slots,"default",{key:1,dataP:i.dataP,class:lt(t.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs,onClick:i.onClick}):bt((n(),Y(ht(t.as),K({key:0,class:t.cx("root"),"data-p":i.dataP,onClick:i.onClick},i.attrs),{default:E(function(){return[ct(t.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[_]])}se.render=an;const sn={class:"fixed top-0 left-0 w-full bg-primary-reverse",style:{"z-index":"10"}},nn={class:"grid mt-3 ml-3"},on={class:"max-w-5rem flex align-items-center"},ln=["src"],rn={class:"flex align-items-center"},cn={key:0,class:"text-color font-bold p-1"},un={key:1,class:"text-color font-bold p-1"},dn={class:"card flex mr-3",style:{"margin-left":"auto"}},pn={style:{display:"flex","align-items":"center"}},fn={style:{"flex-grow":"1",width:"0",overflow:"hidden"}},vn={class:"mt-2"},hn={class:"flex justify-content-end mt-2"},mn={__name:"HeaderTabs",props:{types:Array,typeIndex:Number,tableId:String,tabItems:Array},emits:["clickType","switchToWelcome"],setup(t,{emit:e}){const{t:s}=ut();function d(){var Q;const R=I.currentPage.value,N=(Q=R==null?void 0:R.data)==null?void 0:Q.logoPath;return N?I.pathFormated(N):"/images/logo_logo.png"}function m(){return I.getTable()}const i=A(),_=rt(()=>[{label:s("common.options"),items:[{label:s("common.pay"),icon:"pi pi-wallet",command:()=>{z()}},{label:s("common.call"),icon:"pi pi-user-plus",command:()=>{I.send_cmd(m(),{cmd:"call"}),at.show_info(s("notification.call_msg"))}}]}]),S=R=>{i.value.toggle(R)},P=R=>{M.value.toggle(R)},M=A(),H=A(!1),L=A(),q=A();function z(){H.value=!0}function U(){R(L.value)?I.send_cmd(m(),{cmd:"pay",nif:L.value,note:q.value},N=>{N.success?(at.show_info(s("notification.pay_msg")),H.value=!1):at.show_error(s("common.failed"))}):at.show_warn(s("notification.cancel_msg"));function R(N){return!N||N.toString().length===9||N.toString().length===0}}function J(){q.value&&(q.value=void 0)}return(R,N)=>(n(),c(W,null,[a("div",sn,[a("div",nn,[a("div",on,[a("img",{src:d(),class:"w-full",clickble:"",onClick:N[0]||(N[0]=()=>R.$emit("switchToWelcome"))},null,8,ln)]),a("div",rn,[t.tableId?(n(),c("p",cn,u(R.$t("common.table"))+": "+u(t.tableId),1)):$("",!0),t.tableId?$("",!0):(n(),c("p",un,u(R.$t("common.takeAway")),1))]),a("div",dn,[t.tableId?(n(),Y(r(j),{key:0,icon:"pi pi-bell",rounded:"","aria-label":"Filter",onClick:S,"aria-haspopup":"true","aria-controls":"overlay_menu"})):$("",!0),k(r(Kt),{ref_key:"menu",ref:i,id:"overlay_menu",model:_.value,popup:!0},null,8,["model"])])]),a("div",pn,[a("div",null,[k(r(j),{icon:"pi pi-bars",variant:"text",rounded:"","aria-label":"Filter",onClick:P,"aria-haspopup":"true","aria-controls":"tab_menu"}),k(r(Kt),{ref_key:"tabMenu",ref:M,id:"tab_menu",model:t.tabItems,popup:!0},null,8,["model"])]),a("div",fn,[k(r(ee),{value:t.typeIndex,scrollable:"",showNavigators:!1},{default:E(()=>[k(r(ae),null,{default:E(()=>[(n(!0),c(W,null,tt(t.types,(Q,nt)=>(n(),Y(r(se),{value:nt,onClick:()=>R.$emit("clickType",nt),class:"text-sm md:text-lg lg:text-xl"},{default:E(()=>[mt(u(Q),1)]),_:2},1032,["value","onClick"]))),256))]),_:1})]),_:1},8,["value"])])])]),k(r(gt),{visible:H.value,"onUpdate:visible":N[4]||(N[4]=Q=>H.value=Q),header:"结账",class:"flex flex-column",modal:!0,dismissableMask:!0,onHide:J},{default:E(()=>[a("div",null,[N[5]||(N[5]=a("label",null,"NIF:",-1)),k(r(ke),{modelValue:L.value,"onUpdate:modelValue":N[1]||(N[1]=Q=>L.value=Q),inputId:"withoutgrouping",useGrouping:!1,fluid:"",class:"w-full m-1"},null,8,["modelValue"])]),a("div",vn,[a("label",null,u(R.$t("common.note"))+":",1),k(r(Xt),{type:"text",modelValue:q.value,"onUpdate:modelValue":N[2]||(N[2]=Q=>q.value=Q),class:"w-full m-1"},null,8,["modelValue"])]),a("div",hn,[k(r(j),{label:r(s)("common.send"),onClick:N[3]||(N[3]=Q=>U())},null,8,["label"])])]),_:1},8,["visible"])],64))}},bn={__name:"SwipeHint",props:{size:{type:String,default:"8rem"},duration:{type:Number,default:6e3},position:{type:String,default:"bottom"}},setup(t){const e=t,s=A(!0);Gt(()=>{e.duration>0&&setTimeout(()=>{s.value=!1},e.duration);const m=()=>{s.value=!1,window.removeEventListener("touchstart",m)};window.addEventListener("touchstart",m)});const d=rt(()=>{let m={left:"50%",transform:"translateX(-50%)",zIndex:99999,opacity:.5,pointerEvents:"none",textAlign:"center",position:"fixed"};return e.position==="top"?m.top="15%":e.position==="center"?(m.top="50%",m.transform="translate(-50%, -50%)"):m.bottom="15%",m});return(m,i)=>s.value?(n(),c("div",{key:0,class:"swipe-hint",style:Ct(d.value)},[a("div",{class:"hand",style:Ct({width:t.size,height:t.size,backgroundImage:"url(/images/hand_finger.png)"})},null,4)],4)):$("",!0)}},gn=kt(bn,[["__scopeId","data-v-e5f3ff45"]]),yn={class:"w-full h-full flex flex-column"},_n={style:{"overflow-x":"hidden","touch-action":"pan-y"},class:"h-full"},wn={class:"fixed bottom-0 left-0 w-full h-3rem bg-primary-reverse p-3"},kn={class:"h-full flex align-items-center justify-content-between w-full"},$n={class:"m-2"},xn={class:"m-2"},Tn={style:{"max-height":"60vh","overflow-y":"auto","padding-bottom":"60px"}},In={class:"flex flex-column border-bottom-1"},Cn={key:0,class:"flex justify-content-between"},Dn={class:"flex flex-column"},Sn={class:"font-bold"},Nn={class:"text-right"},Pn={key:1,class:"flex justify-content-between"},Bn={class:"flex flex-column"},An={class:"font-bold"},Ln={class:"text-right"},zn={key:0},qn={key:1,class:"flex flex-column"},On={class:"flex flex-column"},En={class:"font-bold"},Rn={class:"text-right"},Vn={class:"total-footer bg-primary-reverse"},Ht=2,Ut="order_time_key",Fn={__name:"HomePage",setup(t){const e=Qt(),s=ge(),{t:d}=ut(),{locale:m}=ut(),i=A(!1),_=A([""]),S=A(0),P=et.cartItemCount,M=A(!1),H=A([]),L=A(0),q=A({}),z=A(!1),U=st.dishDatas,J=A(null),R=A(null),N=A([]),Q=A([]),nt=()=>{S.value<_.value.length-1&&(S.value++,it(),f(S.value))},ot=()=>{S.value>0&&(S.value--,it(),f(S.value))};function w(o){P.value=P.value+o}const O=(o,p,g,D)=>{I.rateDish(o,p,g),D&&at.show_success(d("notification.rating_submitted"))},h=(o,p,g)=>{if(q.value.name=="XIAOXIONG® RAMEN"&&o.id===1){const D=o.dishes[p];let T;D.dishid==47?g?T=X(3,!0,1):T=X(3,!1,1):T=X(3,!0,1),T!==void 0&&x(T)}if(console.log("aaaaaaaaa: ",o),q.value.name=="Menu Almoço"&&o.id===3){const D=o.dishes[p];let T;[1427,41].includes(D.dishid)?g?T=X(4,!0,0):T=X(4,!1,0):T=X(4,!0,0),T!==void 0&&x(T)}};function X(o,p,g){if(q.value={...q.value,types:q.value.types.map(D=>D.id===o?{...D,enable:p,minQuantity:p?g:0}:D)},p===!1)return o}function x(o){!q.value||!Array.isArray(q.value.types)||(q.value={...q.value,types:q.value.types.map(p=>p.id===o?{...p,dishes:p.dishes.map(g=>({...g,selected:!1}))}:p)})}function f(o){let p=I.getOrderMenuTab()[o];if(I.customDishAPI.customDishes.value.map(V=>V.name).includes(p)?(z.value=!0,q.value=I.customDishAPI.customDishes.value.find(V=>V.name==p)):z.value=!1,I.getMenu().length==0){console.log("exit");return}let T=U.value[o].mainDishes;st.showDishList(T)}const y=()=>{I.refreshTableFromServer(),I.getTableTotalAmount(L),M.value=!0},C=(o,p,g)=>{const D=U.value.find(T=>T.id===o);D&&(D.likes=p,D.rates=g)},B=o=>{let p=o.id;o.org_id&&(p=o.org_id);for(let g=0;g<U.value.length;g++)if(U.value[g].id==p)for(const D in o){let T=D;D.startsWith("note")&&(T=T.replace("note","description")),U.value[g][T]=o[D]}};function l(){return new Promise(o=>{let p=()=>{const g=I.formatedMenu.value;g.length>0?o(g):setTimeout(p,200)};p()})}function b(){return new Promise(o=>{let p=()=>{const g=I.getOrderMenuTab();g.length>0?o(g):setTimeout(p,200)};p()})}const v=rt(()=>{const o=m.value;return I.formatedMenu.value.map(D=>({...D,mainDishes:D.dishes.map(T=>{const V=T.dish,G={...V,defaultName:V.name,name:F(V,"name",o),note:F(V,"note",o),subname:F(V,"subname",o),quantity:0},ft=T.subItems.map(xt=>{const Bt=xt;return{...xt,defaultName:V.name,name:F(Bt,"name",o),note:F(Bt,"note",o),subname:F(Bt,"subname",o),quantity:0}});return{...T,dish:G,subItems:ft}})}))});function F(o,p,g){return o?g==="en"?o[`${p}_en`]||o[p]:g==="zh"&&o[`${p}_cn`]||o[p]:""}async function Z(){await l();const o=await b();U.value=v.value,_.value=I.orderMenuTab;let p=I.isTakeaway();I.onMenuItemChanged=B,I.onRatingChanged=C;let g=0;if(!p){const D=localStorage.getItem("cartDish_custom");if(D&&D!=="undefined")try{et.cartDishs.value=JSON.parse(D),g+=et.cartDishs.value.length}catch(V){console.error("解析自定义菜失败:",V),et.cartDishs.value=[]}const T=localStorage.getItem("cartDish_normal");if(T&&T!=="undefined")try{const V=JSON.parse(T);st.updateDishDataQty(V);const G=V.reduce((ft,xt)=>ft+(xt.quantity||0),0);g+=G}catch(V){console.error("解析普通菜失败:",V)}et.cartItemCount.value=g}for(let D=0;D<o.length;D++){const T=D;H.value.push({label:o[D],command:()=>{$t(T),it()}})}}const it=()=>{be(()=>{const o=document.querySelector(".p-tablist-viewport"),p=document.querySelector(".p-tab.p-tab-active");if(o&&p){const g=p.offsetLeft-o.offsetWidth/2+p.offsetWidth/2;o.scrollTo({left:g,behavior:"smooth"})}})},$t=o=>{f(o),S.value=o,it()},Pt=()=>{var o=st.getAllIncrementedDish();R.value.showDishList(o)};function dt(){return I.getTable()}I.params.port,J.value=I.table.value.order;function ne(o){var p=d("notification.too_fast",{remainTime:o});at.show_warn(p)}const oe=o=>{const p=[];for(let G=0;G<et.cartDishs.value.length;G++){var g=et.cartDishs.value[G];p.push({dishid:g.dishid,name:g.name,quantity:g.count,notes:g.notes,limit:g.limit,price:g.dis_price?g.dis_price:g.price,dishNote:g.dishNote,category:g.category})}const D=st.getAllIncrementedDish();for(let G=0;G<D.length;G++){var g=D[G];console.log("id cartDishs ;  ; : ",g),g.quantity>0&&p.push({dishid:g.id,name:g.defaultName,quantity:g.quantity,limit:g.limit,price:g.dis_price?g.dis_price:g.price,dishNote:g.dishNote})}if(p.length===0)return at.show_warn(d("notification.select_at_least_one")),!1;console.log("cart item:",p);const T=JSON.parse(localStorage.getItem(Ut)||"{}"),V=Date.now();if(!T.startTime||V-T.startTime>Ht*1e3)T.startTime=V;else{const G=Ht-parseInt((V-T.startTime)/1e3);ne(G);return}return localStorage.setItem(Ut,JSON.stringify(T)),i.value=!0,I.submit_order({name:o.name,note:o.note,table:dt(),items:p}),!0};function ie(){const o=localStorage.getItem("language");o&&(m.value=o)}function zt(){for(let o=0;o<U.value.length;o++){const p=U.value[o];p.quantity=0}i.value=!1,P.value=0,et.cartDishs.value.length=0}Gt(async()=>{ie(),await Z(),f(S.value),I.clear_order_data=()=>{zt()},I.setOnOrderConfirmed(o=>{console.log("setOnOrderConfirmed..."),zt();const p=o;at.show_success(d("notification.order_submitted",{id:p}))}),I.setOnShowError(o=>{i.value=!1,at.show_error(o)})});function le(){localStorage.removeItem("login_time");const o=s.query.table;o?e.push({path:"/",query:{table:o}}):e.push({path:"/takeReserve"})}function qt(){const o=st.getAllIncrementedDish();localStorage.setItem("cartDish_normal",JSON.stringify(o));const p=et.cartDishs.value;localStorage.setItem("cartDish_custom",JSON.stringify(p))}return me(()=>{qt()}),window.addEventListener("beforeunload",o=>{I.cleanup(),qt()}),(o,p)=>{const g=Dt("touch"),D=Dt("touch-options");return n(),c(W,null,[a("div",yn,[k(mn,{types:r(I).orderMenuTab,typeIndex:S.value,tabItems:H.value,tableId:dt(),onClickType:$t,onSwitchToWelcome:le},null,8,["types","typeIndex","tabItems","tableId"]),p[2]||(p[2]=a("div",{class:"pb-8"},null,-1)),p[3]||(p[3]=a("div",{class:"pb-7 sm:pb-7 md:pb-7 lg:pb-7"},null,-1)),k(gn,{duration:"3000",position:"center"}),bt((n(),c("div",_n,[z.value?(n(),Y(Es,{key:0,currentCustomDish:q.value,onTypeClick:h},null,8,["currentCustomDish"])):(n(),Y(Na,{key:1,updateCartItemCount:w,rateDish:O,likedItemsRef:N.value,dislikedItemsRef:Q.value},null,8,["likedItemsRef","dislikedItemsRef"]))])),[[g,nt,"swipe",{left:!0,passive:!0}],[g,ot,"swipe",{right:!0,passive:!0}],[D,{swipeTolerance:100}]]),p[4]||(p[4]=a("div",{class:"pb-6"},null,-1)),a("div",wn,[a("div",kn,[a("div",$n,[dt()?(n(),Y(r(j),{key:0,label:o.$t("common.orders"),icon:"pi pi-list",class:"p-button-secondary",onClick:y},null,8,["label"])):$("",!0)]),a("div",xn,[k(r(te),{value:r(P),severity:"danger",onClick:Pt},{default:E(()=>p[1]||(p[1]=[a("i",{class:"pi pi-shopping-cart",style:{"font-size":"2rem"}},null,-1)])),_:1,__:[1]},8,["value"])])])])]),k(is,{ref_key:"cartRef",ref:R,updateCartItemCount:w,checkout:oe,isTakeaway:!dt()},null,8,["isTakeaway"]),k(r(gt),{visible:M.value,"onUpdate:visible":p[0]||(p[0]=T=>M.value=T),header:o.$t("common.completedOrders"),modal:"",style:{width:"80vw","max-width":"700px"}},{default:E(()=>{var T,V;return[a("div",Tn,[a("div",In,[(T=L.value.adultPrice)!=null&&T.quantity&&L.value.adultPrice.quantity!=0?(n(),c("div",Cn,[a("div",Dn,[a("span",Sn,u(o.$t("common.adult")),1),a("small",null,u(o.$t("common.quantity"))+": "+u(L.value.adultPrice.quantity),1)]),a("div",Nn,[a("span",null,"€"+u((Number(L.value.adultPrice.price)*L.value.adultPrice.quantity).toFixed(2)),1)])])):$("",!0),(V=L.value.childrenPrice)!=null&&V.quantity&&L.value.childrenPrice.quantity!=0?(n(),c("div",Pn,[a("div",Bn,[a("span",An,u(o.$t("common.children")),1),a("small",null,u(o.$t("common.quantity"))+": "+u(L.value.childrenPrice.quantity),1)]),a("div",Ln,[a("span",null,"€"+u((Number(L.value.childrenPrice.price)*L.value.childrenPrice.quantity).toFixed(2)),1)])])):$("",!0)]),r(I).table.value.order.length===0?(n(),c("div",zn,u(o.$t("common.noOrders")),1)):(n(),c("div",qn,[(n(!0),c(W,null,tt(r(I).table.value.order,(G,ft)=>(n(),c("div",{key:ft,class:"flex justify-content-between border-bottom-1 pb-2"},[a("div",On,[a("span",En,u(r(I).getDishName(G)),1),a("small",null,u(o.$t("common.quantity"))+": "+u(G.quantity),1)]),a("div",Rn,[a("span",null,"€"+u((G.price*G.quantity).toFixed(2)),1)])]))),128))]))]),a("div",Vn,u(o.$t("common.total"))+": €"+u(L.value.total),1)]}),_:1},8,["visible","header"])],64)}}},Yn=kt(Fn,[["__scopeId","data-v-9ed5c562"]]);export{Yn as default};
