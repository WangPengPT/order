import{v as Ct,B as dt,x as yt,y as Dt,f as u,p as i,q as X,i as $,z as ct,A as F,C as vt,h as a,t as p,n as ot,r as S,g as w,F as U,l as Y,k as r,j as q,D as xt,a as I,u as ut,s as ht,m as et,e as Ht,E as ie,G as le,c as lt,w as re,R as Ut,H as Bt,I as ce,J as Pt,K as ue,L as $t,M as de,N as Lt,O as Tt,P as It,Q as pe,S as fe,T as kt,o as Qt,b as ve,U as he,d as be}from"./index-CPOw_j_U.js";import{s as bt,a as Jt}from"./index-Cguu-blg.js";import{s as j,a as Gt}from"./index-DxvFs2Kl.js";import{D as st,c as Z,s as zt}from"./index-Dl833djz.js";import{_ as _t,b as qt,c as Ot,a as Et,s as Rt}from"./_plugin-vue_export-helper-DoP72r9P.js";import{s as me}from"./index-Ced7DL4D.js";import{s as Vt,a as ge}from"./index-CIk0rLUF.js";import{s as ye}from"./index-Bd_UrQwR.js";import{s as jt}from"./index-Ci3Vj8xh.js";import{s as _e}from"./index-BA28QF35.js";var we=Ct`
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
`,$e={root:function(e){var s=e.props;return["p-tag p-component",{"p-tag-info":s.severity==="info","p-tag-success":s.severity==="success","p-tag-warn":s.severity==="warn","p-tag-danger":s.severity==="danger","p-tag-secondary":s.severity==="secondary","p-tag-contrast":s.severity==="contrast","p-tag-rounded":s.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},ke=dt.extend({name:"tag",style:we,classes:$e}),xe={name:"BaseTag",extends:yt,props:{value:null,severity:null,rounded:Boolean,icon:String},style:ke,provide:function(){return{$pcTag:this,$parentInstance:this}}};function mt(t){"@babel/helpers - typeof";return mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},mt(t)}function Te(t,e,s){return(e=Ie(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Ie(t){var e=Ce(t,"string");return mt(e)=="symbol"?e:e+""}function Ce(t,e){if(mt(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var l=s.call(t,e);if(mt(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ft={name:"Tag",extends:xe,inheritAttrs:!1,computed:{dataP:function(){return Dt(Te({rounded:this.rounded},this.severity,this.severity))}}},De=["data-p"];function Se(t,e,s,l,m,n){return i(),u("span",F({class:t.cx("root"),"data-p":n.dataP},t.ptmi("root")),[t.$slots.icon?(i(),X(vt(t.$slots.icon),F({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(i(),u("span",F({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):$("",!0),t.value!=null||t.$slots.default?ct(t.$slots,"default",{key:2},function(){return[a("span",F({class:t.cx("label")},t.ptm("label")),p(t.value),17)]}):$("",!0)],16,De)}ft.render=Se;var Be=Ct`
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
`,Pe={root:function(e){var s=e.props;return["p-avatar p-component",{"p-avatar-image":s.image!=null,"p-avatar-circle":s.shape==="circle","p-avatar-lg":s.size==="large","p-avatar-xl":s.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Ne=dt.extend({name:"avatar",style:Be,classes:Pe}),Ae={name:"BaseAvatar",extends:yt,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ne,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function gt(t){"@babel/helpers - typeof";return gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gt(t)}function Mt(t,e,s){return(e=Le(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Le(t){var e=ze(t,"string");return gt(e)=="symbol"?e:e+""}function ze(t,e){if(gt(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var l=s.call(t,e);if(gt(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Xt={name:"Avatar",extends:Ae,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}},computed:{dataP:function(){return Dt(Mt(Mt({},this.shape,this.shape),this.size,this.size))}}},qe=["aria-labelledby","aria-label","data-p"],Oe=["data-p"],Ee=["data-p"],Re=["src","alt","data-p"];function Ve(t,e,s,l,m,n){return i(),u("div",F({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root"),{"data-p":n.dataP}),[ct(t.$slots,"default",{},function(){return[t.label?(i(),u("span",F({key:0,class:t.cx("label")},t.ptm("label"),{"data-p":n.dataP}),p(t.label),17,Oe)):t.$slots.icon?(i(),X(vt(t.$slots.icon),{key:1,class:ot(t.cx("icon"))},null,8,["class"])):t.icon?(i(),u("span",F({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon"),{"data-p":n.dataP}),null,16,Ee)):t.image?(i(),u("img",F({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return n.onError&&n.onError.apply(n,arguments)})},t.ptm("image"),{"data-p":n.dataP}),null,16,Re)):$("",!0)]})],16,qe)}Xt.render=Ve;const je={class:"grid"},Me={class:"flex flex-column"},Fe=["onClick"],Ke={class:"p-1 flex-shrink-0 w-7rem h-7rem flex align-items-center justify-content-center overflow-hidden"},We=["src","alt"],He={class:"flex flex-column justify-content-center"},Ue={class:"font-bold"},Qe={class:"flex flex-wrap gap-2"},Je={class:"flex gap-1 align-items-center"},Ge={class:"text-color-secondary line2"},Xe={key:0,class:"text-xl font-bold text-primary"},Ye={key:1,class:"flex align-items-center gap-1"},Ze={class:"text-l font-bold text-color-secondary"},ta={class:"text-sm line-through text-500"},ea={key:2,class:"flex gap-2 mr-2",id:"card-quantity"},aa={class:"w-2rem text-xl text-center"},sa={key:3,class:"flex gap-2 mr-2"},na={key:0,class:"m-2 mt-0"},oa={class:"flex flex-row justify-content-between align-content-center"},ia={class:"flex flex-column"},la={class:"text-l font-bold"},ra={key:0,class:"text-l font-bold text-color-secondary"},ca={key:1,class:"flex align-items-center gap-1"},ua={class:"text-l font-bold text-color-secondary"},da={class:"text-sm line-through text-500"},pa={key:0,class:"flex ml-2 mr-2"},fa={class:"w-2rem text-xl text-center"},va={key:1,class:"flex gap-2 mr-3 pt-2 pb-2"},ha={class:"max-w-5rem flex align-items-center"},ba={class:"font-bold whitespace-nowrap"},ma={class:"mb-2 flex justify-content-center"},ga={class:"font-bold text-center"},ya={class:"mb-2"},_a={class:"text-color-secondary m-0 line-height-3 line2 text-center"},wa={class:"mb-2"},$a={class:"flex justify-content-center"},ka=["src","alt"],xa={class:"flex align-items-center gap-2"},Ta=["src","alt"],Ia={class:"flex align-items-center gap-3 ml-auto"},Ca={__name:"DishList",props:{updateCartItemCount:{type:Function,required:!0},rateDish:{type:Function,required:!0},likedItemsRef:Array,dislikedItemsRef:Array},setup(t){const e=st.dishes;let s={rated:!1,id:null,like:0,rate:0};function l(){var v;const b=I.currentPage.value,P=(v=b==null?void 0:b.data)==null?void 0:v.logoPath;return P?I.pathFormated(P):"/images/logo_logo.png"}const m=b=>{O.updateCartItemCount(b)},n=b=>{O.updateCartItemCount(-1)},D=b=>st.dishDatas.value[b]?st.dishDatas.value[b].quantity:0,k=b=>{if(!E())return!1;const P=b.quantity;let v=3;if(b.price>0&&(v=9),b.limit){const tt=b.id,o=E(),g=(o.peopleType.adults+o.peopleType.children)*b.limit,x=o.order.find(T=>T.dishid==tt);let C=0;if(b.subitem)for(const T of b.subitem){C+=D(T);const f=o.order.find(h=>h.dishid==R(T));f&&(C+=f.quantity)}else C+=b.quantity,x&&(C+=x.quantity);return P>=v||g&&C>=g}return P>=v},R=b=>st.dishDatas.value[b]?st.dishDatas.value[b].id:0,E=()=>I.getTableValue();function M(){O.rateDish(s.id,s.like,s.rate,s.rated),s.id=null,s.like=0,s.rate=0,s.rated=!1}const A=b=>{const P=O.likedItemsRef.indexOf(b);if(s.id=b.id,P!==-1)O.likedItemsRef.splice(P,1),s.like+=-1,s.rate+=-1,s.rated=!1;else{s.rated=!0,O.likedItemsRef.push(b);const v=O.dislikedItemsRef.indexOf(b);v!==-1?(O.dislikedItemsRef.splice(v,1),s.like+=1):(s.like+=1,s.rate+=1)}},K=b=>{const P=O.dislikedItemsRef.indexOf(b);if(s.id=b.id,P!==-1)O.dislikedItemsRef.splice(P,1),s.rate+=-1,s.rated=!1;else{s.rated=!0,O.dislikedItemsRef.push(b);const v=O.likedItemsRef.indexOf(b);v!==-1?(O.likedItemsRef.splice(v,1),s.like+=-1):s.rate+=1}},O=t,Q=S(!1),W=S({}),L=b=>{Q.value=!0,W.value=b},B=b=>{b.target.src="/images/default.png"};function H(b){rt(b.target,300)}function at(b){rt(b.target,110)}function rt(b,P){const v=b.naturalWidth,tt=b.naturalHeight,o=Math.min(v,P),g=o/v,x=tt*g;b.style.width=`${o}px`,b.style.height=`${x}px`}return(b,P)=>(i(),u(U,null,[a("div",je,[(i(!0),u(U,null,Y(r(e),(v,tt)=>(i(),u("div",{key:tt,class:"col-12 sm:col-12 md:col-6 lg:col-4 border-round surface-section shadow-1 p-2"},[a("div",Me,[a("div",{class:ot(["flex flex-row",v.subItems.length!==0?"flex-grow-1":""]),onClick:o=>L(v.dish)},[a("div",Ke,[a("img",{src:v.dish.image||"/images/default.png",alt:v.dish.name,class:"w-full h-full",style:{"object-fit":"cover"},onError:B,onLoad:at},null,40,We)]),a("div",He,[a("div",Ue,p(v.dish.name),1),a("div",null,[a("div",Qe,[a("div",Je,[(i(),u(U,null,Y(5,o=>a("i",{key:o,class:ot(["pi invert-star",o<=Math.floor(v.dish.likes/v.dish.rates*5)?"pi-star-fill":o-.5<=v.dish.likes/v.dish.rates*5?"pi-star-half-fill":"pi-star"]),style:{color:"black"}},null,2)),64)),a("p",null,"("+p(v.dish.rates?v.dish.rates:0)+")",1)])])]),a("div",null,[a("p",Ge,p(v.dish.note),1)])])],10,Fe),v.subItems.length==0?(i(),u("div",{key:0,class:ot(["flex ml-2 mr-2 mb-2",Number(v.dish.price)>0?"justify-content-between":"justify-content-end"])},[!v.dish.discount&&Number(v.dish.price)>0?(i(),u("span",Xe,"€"+p(v.dish.price),1)):$("",!0),v.dish.discount?(i(),u("div",Ye,[a("span",Ze,"€"+p(v.dish.dis_price),1),a("span",ta,"€"+p(v.dish.price),1),w(r(ft),{severity:"danger",value:"-"+v.dish.discount+"%"},null,8,["value"])])):$("",!0),v.dish.soldout?$("",!0):(i(),u("div",ea,[w(r(j),{icon:"pi pi-minus",rounded:"",disabled:v.dish.quantity<=0,onClick:o=>{v.dish.quantity--,n()},class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),a("span",aa,p(v.dish.quantity),1),w(r(j),{icon:"pi pi-plus",rounded:"",disabled:k(v.dish),onClick:o=>{v.dish.quantity++,m(1)},class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])),v.dish.soldout?(i(),u("div",sa,[w(r(ft),{severity:"danger",value:b.$t("common.soldout")},null,8,["value"])])):$("",!0)],2)):$("",!0),v.subItems.length!==0?(i(!0),u(U,{key:1},Y(v.subItems,(o,g)=>(i(),u(U,{key:"index"},[o.disable?$("",!0):(i(),u("div",na,[a("div",oa,[a("div",ia,[a("span",la,p(o.subname),1),!o.discount&&o.price!=="0.00"&&o.price!=="0"?(i(),u("span",ra,"€"+p(o.price),1)):$("",!0),o.discount?(i(),u("div",ca,[a("span",ua,"€"+p(o.dis_price),1),a("span",da,"€"+p(o.price),1),w(r(ft),{severity:"danger",value:"-"+o.discount+"%"},null,8,["value"])])):$("",!0)]),o.soldout?$("",!0):(i(),u("div",pa,[w(r(j),{icon:"pi pi-minus",rounded:"",disabled:o.quantity<=0,onClick:x=>{o.quantity--,n()},class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),a("span",fa,p(o.quantity),1),w(r(j),{icon:"pi pi-plus",rounded:"",onClick:x=>{o.quantity++,m(1)},class:"w-2rem h-2rem"},null,8,["onClick"])])),o.soldout?(i(),u("div",va,[w(r(ft),{severity:"danger",value:b.$t("common.soldout")},null,8,["value"])])):$("",!0)])]))],64))),128)):$("",!0)])]))),128))]),w(r(bt),{visible:Q.value,"onUpdate:visible":P[2]||(P[2]=v=>Q.value=v),modal:"",header:"dish",style:xt([{width:"23rem"},{width:"80vw","max-width":"700px"}]),onHide:P[3]||(P[3]=v=>M())},{header:q(()=>[a("div",ha,[w(r(Xt),{image:l(),class:"w-full"},null,8,["image"])]),a("span",ba,p(b.$t("common.details")),1)]),default:q(()=>[a("div",ma,[a("span",ga,p(W.value.name),1)]),a("div",ya,[a("span",_a,p(W.value.note),1)]),a("div",wa,[a("div",$a,[a("img",{class:"w-full h-auto object-contain",src:W.value.image,alt:W.value.name,onError:B,onLoad:H},null,40,ka)])]),a("div",xa,[(i(!0),u(U,null,Y(W.value.allergies,(v,tt)=>(i(),u("img",{src:"images/"+v+".png",alt:v,class:"w-2rem h-2rem border-round flex-shrink-0",style:{"object-fit":"cover","min-width":"2rem"}},null,8,Ta))),256)),a("div",Ia,[a("button",{onClick:P[0]||(P[0]=v=>A(W.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[a("i",{class:ot(["pi pi-thumbs-up text-xl",O.likedItemsRef.includes(W.value)?"text-green-500":"text-gray-400"])},null,2)]),a("button",{onClick:P[1]||(P[1]=v=>K(W.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[a("i",{class:ot(["pi pi-thumbs-down text-xl",O.dislikedItemsRef.includes(W.value)?"text-red-500":"text-gray-400"])},null,2)])])])]),_:1},8,["visible"])],64))}},Da=_t(Ca,[["__scopeId","data-v-7ceb4eb1"]]),Sa={key:0,class:"text-3xl font-bold"},Ba={class:"flex flex-column gap-3 p-1"},Pa={key:0,class:"flex flex-column gap-1"},Na={key:0,class:"m-0"},Aa={key:0,class:"m-0"},La={class:"flex justify-content-between gap-4 mt-1"},za={class:"flex align-items-center gap-2"},qa=["src","alt"],Oa={class:"flex-grow-1 min-width-0 max-w-18rem"},Ea={class:"flex flex-column gap-1"},Ra={class:"flex align-items-center gap-2"},Va={class:"text-xl font-bold line1 whitespace-nowrap overflow-hidden text-overflow-ellipsis",style:{"max-width":"20rem"}},ja={class:"flex align-items-end gap-1"},Ma={key:0,class:"text-xl font-bold text-primary"},Fa={key:1,class:"text-xl font-bold text-primary"},Ka={key:2,class:"text-sm text-color-secondary"},Wa={key:0,class:"text-xs text-primary"},Ha={class:"flex-shrink-0 flex flex-wrap justify-content-between align-items-center gap-1"},Ua={class:"flex flex-wrap justify-content-between align-content-center"},Qa={class:"flex align-items-center gap-1"},Ja={class:"w-2rem text-center"},Ga={key:1,class:"flex flex-column gap-2 mt-2"},Xa={for:"in_label"},Ya={for:"in_label"},Za={class:"bottom-0 left-0 mt-2"},ts={class:"text-2xl font-bold"},es={class:"text-2xl font-bold text-primary pl-2"},as={class:"flex justify-content-between"},ss={__name:"Cart",props:{updateCartItemCount:{type:Function,required:!0},checkout:{type:Function,required:!0},isTakeaway:Boolean},setup(t,{expose:e}){const s=Ht(),{t:l}=ut(),m=Z.cartDishs;I.freeCounts;const n=S([]),D=S(),k=S(),R=S(!1),E=S(!1),M=S(!0),A=S(""),K=S("");function O(f,h){let d="";return f.forEach(G=>{d=d+l(`${h}Data.ingredients.${G.id}`)+" / "}),d}function Q(f,h,d){const G=I.customDishAPI.getCustomDishByName(f);if(G){const nt=G.types[h].typeName;return l(`${d}Data.${nt}`)}else return null}const W=(f,h)=>{const d=n.value[f].quantity+h;d>=0&&(n.value[f].quantity=d,at.updateCartItemCount(h))};function L(f){f&&D.value&&(D.value.dishNote=k.value?k.value:void 0),E.value=!1}function B(){k.value&&(k.value=void 0),D.value&&(D.value=void 0)}function H(f){D.value=f,k.value=D.value.dishNote?D.value.dishNote:void 0,E.value=!0}const at=t;e({showDishList:f=>{R.value=!0,n.value.length=0;for(let h=0;h<f.length;h++)n.value.push(f[h]);M.value=n.value.length==0&&m.length==0}});function b(f){switch(f){case"Bibimbap":return"customDishBibimbap";case"Sushi Aleatória®":return"customDishSushiBox";case"MY BOX":return"customDishMyBox";default:return"Unexpected"}}function P(f){Z.removeItem(f)}function v(){at.isTakeaway?tt():o()}function tt(){const f=[];m.value.forEach(h=>{f.push(h)}),n.value.forEach(h=>{h.quantity>0&&f.push(h)}),f.length<=0?et.show_warn(l("notification.select_at_least_one")):(R.value=!1,s.push({path:"/paymentPage"}))}function o(){at.checkout({name:A.value,note:K.value})&&(R.value=!1),m.value.forEach(f=>{f.dishNote=void 0}),n.value.forEach(f=>{f.dishNote=void 0}),K.value="",st.cleanDishDataQty(),localStorage.removeItem("order_cartDishs"),localStorage.removeItem("order_dishDatas")}function g(f){return f.subname!=""&&f.subname!="Default Title"?f.name+" "+f.subname:f.name}function x(){let f=0;return m.value.forEach(h=>{f+=h.dis_price?h.dis_price*h.count:h.price*h.count}),n.value.forEach(h=>{f+=h.dis_price?h.dis_price*h.quantity:h.price*h.quantity}),"€"+f.toFixed(2)}const C=f=>{f.target.src="/images/default.png"},T=f=>{const h=f.quantity;let d=3;return f.price>0&&(d=9),h>=d};return(f,h)=>(i(),u(U,null,[w(r(bt),{class:"bg-primary-reverse text-sm md:text-lg lg:text-xl",visible:R.value,"onUpdate:visible":h[2]||(h[2]=d=>R.value=d),modal:"",header:f.$t("common.cart"),style:xt([{backgroundColor:"rgba(250, 250, 250, 1)",height:"100%",minWidth:"24rem"},{width:"80vw","max-width":"700px"}]),dismissableMask:!0},{footer:q(()=>[a("div",Za,[a("span",ts,p(f.$t("common.total"))+": ",1),a("span",es,p(x()),1),w(r(j),{icon:t.isTakeaway?"pi pi-wallet":"pi pi-plus",class:"p-button-success p-button-rounded ml-3",onClick:v,label:t.isTakeaway?r(l)("common.pay"):r(l)("common.send")},null,8,["icon","label"])])]),default:q(()=>[M.value?(i(),u("h2",Sa,"Cart is empty.")):$("",!0),a("div",Ba,[(i(!0),u(U,null,Y(r(m),(d,G)=>(i(),X(r(me),{style:{overflow:"hidden"},key:G},{title:q(()=>[ht(p(f.$t(`common.${d.name.replace(/[^a-zA-Z0-9\s]/g,"").toLowerCase().replace(/\s+/g,"")}`)),1)]),subtitle:q(()=>[ht(p(f.$t("common.price"))+" : "+p(d.price)+"€",1)]),content:q(()=>[r(I).customDishAPI.customDishes.value.find(nt=>nt.name==d.name)?(i(),u("div",Pa,[(i(!0),u(U,null,Y(d.notesAndId,(nt,it)=>(i(),u("div",null,[d.notesAndId[it].length!==0?(i(),u("span",Na,p(Q(d.name,it,b(d.name)))+": "+p(O(d.notesAndId[it],b(d.name))),1)):$("",!0)]))),256)),a("div",null,[d.dishNote?(i(),u("span",Aa,p(f.$t("common.note"))+": "+p(d.dishNote),1)):$("",!0)])])):$("",!0)]),footer:q(()=>[a("div",La,[t.isTakeaway?$("",!0):(i(),X(r(j),{key:0,label:r(l)("common.edit")+" "+r(l)("common.note"),severity:"contrast",onClick:nt=>H(d)},null,8,["label","onClick"])),w(r(j),{label:r(l)("common.remove"),severity:"danger",onClick:nt=>P(d)},null,8,["label","onClick"])])]),_:2},1024))),128)),(i(!0),u(U,null,Y(n.value,(d,G)=>(i(),u("div",{key:G,class:"p-2 border-round shadow-1 transition-all transition-duration-200 hover:shadow-3 flex flex-column gap-1"},[a("div",za,[a("img",{src:d.image,alt:d.name,class:"w-4rem h-4rem border-round flex-shrink-0",onError:C,style:{"object-fit":"cover","min-width":"4rem"}},null,40,qa),a("div",Oa,[a("div",Ea,[a("div",Ra,[a("span",Va,p(g(d)),1)])]),a("div",ja,[d.dis_price?(i(),u("span",Ma,"€"+p(d.dis_price),1)):$("",!0),!d.dis_price&&d.price>0?(i(),u("span",Fa,"€"+p(d.price),1)):$("",!0),d.price>0?(i(),u("span",Ka,"/uni.")):$("",!0)])])]),a("div",null,[d.dishNote?(i(),u("span",Wa,p(r(l)("common.note")+": "+d.dishNote),1)):$("",!0)]),a("div",Ha,[a("div",Ua,[t.isTakeaway?$("",!0):(i(),X(r(j),{key:0,label:r(l)("common.edit")+" "+r(l)("common.note"),severity:"contrast",class:"w-3.5rem h-2rem",onClick:nt=>H(d)},null,8,["label","onClick"]))]),a("div",Qa,[w(r(j),{icon:"pi pi-minus",rounded:"",disabled:d.quantity<=0,onClick:nt=>W(G,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),a("span",Ja,p(d.quantity),1),w(r(j),{icon:"pi pi-plus",rounded:"",disabled:T(d),onClick:nt=>W(G,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])])]))),128))]),t.isTakeaway?$("",!0):(i(),u("div",Ga,[w(r(Vt),{variant:"in"},{default:q(()=>[w(r(Jt),{id:"in_label",modelValue:A.value,"onUpdate:modelValue":h[0]||(h[0]=d=>A.value=d),variant:"filled",maxlength:"20"},null,8,["modelValue"]),a("label",Xa,p(r(l)("common.name")),1)]),_:1}),w(r(Vt),{variant:"in"},{default:q(()=>[w(r(zt),{id:"in_label",class:"min-w-full",rows:"5",modelValue:K.value,"onUpdate:modelValue":h[1]||(h[1]=d=>K.value=d),variant:"filled",maxlength:"200"},null,8,["modelValue"]),a("label",Ya,p(r(l)("common.observation")),1)]),_:1})]))]),_:1},8,["visible","header"]),w(r(bt),{visible:E.value,"onUpdate:visible":h[6]||(h[6]=d=>E.value=d),header:r(l)("common.note"),onHide:h[7]||(h[7]=d=>B()),modal:"",dismissableMask:!0},{default:q(()=>[w(r(zt),{modelValue:k.value,"onUpdate:modelValue":h[3]||(h[3]=d=>k.value=d),rows:"5",cols:"30",placeholder:r(l)("common.edit")+" "+r(l)("common.note")+"...",maxlength:"100"},null,8,["modelValue","placeholder"]),a("div",as,[w(r(j),{label:r(l)("common.cancel"),severity:"danger",onClick:h[4]||(h[4]=d=>L(!1))},null,8,["label"]),w(r(j),{label:r(l)("common.save"),severity:"primary",size:"sm",onClick:h[5]||(h[5]=d=>L(!0))},null,8,["label"])])]),_:1},8,["visible","header"])],64))}},ns=_t(ss,[["__scopeId","data-v-299d8d89"]]);var os=Ct`
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
`,is={root:"p-overlaybadge"},ls=dt.extend({name:"overlaybadge",style:os,classes:is}),rs={name:"OverlayBadge",extends:Gt,style:ls,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},Yt={name:"OverlayBadge",extends:rs,inheritAttrs:!1,components:{Badge:Gt}};function cs(t,e,s,l,m,n){var D=ie("Badge");return i(),u("div",F({class:t.cx("root")},t.ptmi("root")),[ct(t.$slots,"default"),w(D,F(t.$props,{pt:t.ptm("pcBadge")}),null,16,["pt"])],16)}Yt.render=cs;function Ft(t){switch(t){case"Sushi Aleatória®":return"customDishSushiBox";case"Bibimbap":return"customDishBibimbap";case"Poke Bowl":return"customDishBibimbap";case"MY BOX":return"customDishMyBox";default:return"unexpected"}}const us={class:"m-3"},ds={class:"flex flex-column gap-2"},ps={class:"w-full flex justify-content-center"},fs={key:0,class:"max-w-19rem"},vs=["src"],hs={style:{width:"300px",height:"300px",background:"url(/boxImage/box.png)"}},bs={key:0,class:"flex align-items-center justify-content-center text-4xl font-bold text-white w-full h-full"},ms={key:1,class:"grid m-0 p-2"},gs=["onClick"],ys={class:"flex align-items-center justify-content-center font-bold m-0 p-0",style:{width:"94px",height:"94px"}},_s=["src"],ws={class:"flex flex-wrap justify-content-between align-items-center m-1"},$s={class:"flex gap-1 align-items-center"},ks={key:0},xs={class:"font-bold mb-2"},Ts={key:1,class:"flex justify-content-between gap-2 mt-3"},Is={class:"font-bold mb-2"},Cs={class:"flex mr-2"},Ds={class:"w-3rem text-xl text-center"},Ss={class:"font-bold block mb-2"},Bs={class:"flex flex-wrap"},Ps={key:2,class:"flex flex-wrap gap-2 mt-3"},Ns={class:"font-bold block mb-2"},As={class:"font-bold block mb-2 text-center"},Ls={class:"flex flex-wrap gap-2 mt-3"},zs={__name:"CustomDish",props:{currentCustomDish:Object},setup(t){const{locale:e}=ut(),s=t,l=le(),{t:m}=ut(),n=lt(()=>s.currentCustomDish),D=lt(()=>n.boxImages),k=S(0),R=lt(()=>n.value.initialPrice),E=S(R.value);re(()=>n,o=>{E.value=(o==null?void 0:o.initialPrice)??0,k.value=0,M.value=null});const M=S(null),A=lt(()=>{const o=e.value,g=`title_${o}`,x=`description_${o}`;return n.value.descriptions.map(C=>({title:C[g],descriptions:C.descriptions.map(T=>T[x]),image:C==null?void 0:C.image}))}),K=lt(()=>{var x,C;const o=Number(((x=n.value)==null?void 0:x.like)??0),g=Number(((C=n.value)==null?void 0:C.rate)??0);return g?o/g*5:0});function O(o,g,x){const C=o[g];if(C.selected){C.selected=!1;return}else{const f=o.filter(h=>h.selected).length;if(x===1){P(o),C.selected=!0;return}f<x&&(C.selected=!0)}}function Q(o,g,x){O(o,g,x),W(o)}function W(o){let g=R.value;if(!o||!Array.isArray(o))return E.value=g,g;const x=o.reduce((C,T)=>{if(!T.dishes||!Array.isArray(T.dishes))return C;const f=T.dishes.reduce((h,d)=>h+(d.selected?d.price:0),0);return C+f},0);return g+=x,E.value=g,g}function L(o){return o.selected}function B(){if(!v(n.value.types))return;const o=at(n.value.types),g=rt(n.value.types);Z.addItem({dishid:-1,name:n.value.name,category:s.currentCustomDish.category,count:k.value!==0?k.value:1,price:E.value===0?W():E.value,notes:o,notesAndId:g}),console.log("CART: ",Z.cartDishs),b(n.value.types),et.show({severity:"info",summary:"info",detail:m("customDishBibimbapVue.addToCartSuccessBibimbap")})}function H(o){return!o||!o.dishes?"":o.dishes.filter(x=>x.selected).map(x=>x.name).join(",")}function at(o){return o?o.map(g=>H(g)):[]}function rt(o){return o?o.map(g=>g.dishes?g.dishes.filter(x=>x.selected).map(x=>({id:x.dishid,name:x.name})):[]):[]}function b(o){o&&o.forEach(g=>{g.dishes&&g.dishes.forEach(x=>{x.selected=!1})})}function P(o){o.forEach(g=>g.selected=!1)}function v(o){if(n.value.options.quantity&&k.value<=0)return et.show({severity:"warn",detail:m("notification.quantity_must_be_positive")}),!1;for(const g of o){const x=g.dishes.filter(C=>C.selected).length;if(console.log(x,g.minQuantity),x<g.minQuantity){const C=g.typeName;return et.show({severity:"warn",detail:m("notification.select_type_of",{name:C})}),!1}}return!0}function tt(o){o?I.customDishAPI.like(n.value.id)&&(M.value="like",l.add({severity:"success",summary:m("common.success"),detail:m("common.rate")+" "+m("common.success"),life:750})):I.customDishAPI.unLike(n.value.id)&&(M.value="unlike",l.add({severity:"success",summary:m("common.success"),detail:m("common.rate")+" "+m("common.success"),life:750}))}return(o,g)=>{var x,C;return i(),u("div",us,[a("div",ds,[w(r(Rt),{class:"w-full max-w-xl mx-auto"},{default:q(()=>[(i(!0),u(U,null,Y(A.value,(T,f)=>(i(),X(r(Et),{key:f,value:f},{default:q(()=>[w(r(qt),null,{default:q(()=>[ht(p(T.title),1)]),_:2},1024),w(r(Ot),null,{default:q(()=>{var h;return[(i(!0),u(U,null,Y(T.descriptions,(d,G)=>(i(),u("p",{key:G},p(d),1))),128)),a("div",ps,[(h=T.image)!=null&&h.src?(i(),u("div",fs,[a("img",{src:T.image.src,class:"w-full"},null,8,vs)])):$("",!0)])]}),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1}),((C=(x=n.value)==null?void 0:x.value)==null?void 0:C.name)==="MY BOX"?(i(),X(r(Rt),{key:0,class:"w-full max-w-xl mx-auto"},{default:q(()=>[w(r(Et),{value:"0"},{default:q(()=>[w(r(qt),null,{default:q(()=>[ht(" 🥩 "+p(o.$t("common.showMybox")),1)]),_:1}),w(r(Ot),null,{default:q(()=>[a("div",hs,[o.isEmptyArray(D.value)?(i(),u("div",bs,p(o.$t("common.myboxAlarm")),1)):$("",!0),o.isEmptyArray(D.value)?$("",!0):(i(),u("div",ms,[(i(!0),u(U,null,Y(D.value,T=>(i(),u("div",{class:"col-4 p-0",onClick:f=>o.imageSelectAction(T)},[a("div",ys,[T?(i(),u("img",{key:0,class:"m-0 p-0",src:o.imagePath(T),style:{width:"82px",height:"82px"}},null,8,_s)):$("",!0)])],8,gs))),256))]))])]),_:1})]),_:1})]),_:1})):$("",!0)]),a("div",ws,[a("div",$s,[(i(),u(U,null,Y(5,T=>a("i",{key:T,class:ot(["pi invert-star",T<=Math.floor(K.value)?"pi-star-fill":T-.5<=K.value?"pi-star-half":"pi-star"]),style:{color:"black"}},null,2)),64)),a("p",null,"("+p(n.value.rate?n.value.rate:0)+")",1)]),a("div",null,[w(r(j),{text:"",icon:"pi pi-thumbs-up",severity:M.value==="like"?"success":"",onClick:g[0]||(g[0]=T=>tt(!0))},null,8,["severity"]),w(r(j),{text:"",icon:"pi pi-thumbs-down",severity:M.value==="unlike"?"danger":"",onClick:g[1]||(g[1]=T=>tt(!1))},null,8,["severity"])])]),n.value.options.extraInfo?(i(),u("div",ks,[a("label",xs,p(n.value.options.extraInfo),1)])):$("",!0),n.value.options.quantity?(i(),u("div",Ts,[a("div",null,[a("label",Is,p(o.$t("common.quantity"))+" / "+p(o.$t("common.pieces")),1)]),a("div",Cs,[w(r(j),{icon:"pi pi-minus",disabled:k.value<=0,onClick:g[2]||(g[2]=T=>k.value-=n.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"]),a("span",Ds,p(k.value),1),w(r(j),{icon:"pi pi-plus",disabled:k.value>=n.value.options.maxQuantity,onClick:g[3]||(g[3]=T=>k.value+=n.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"])])])):$("",!0),(i(!0),u(U,null,Y(n.value.types,(T,f)=>(i(),u("div",null,[a("label",Ss,p(f+1)+". "+p(o.$t(`${r(Ft)(n.value.name)}Data.${T.typeName}`)),1),a("div",Bs,[(i(!0),u(U,null,Y(T.dishes,(h,d)=>(i(),X(r(j),{key:d,onClick:G=>Q(T.dishes,d,k.value==0?T.maxQuantity:T.maxQuantity*k.value),class:ot([{"p-button-primary":L(h),"p-button-outlined":!L(h)},"m-1"])},{default:q(()=>[a("p",{class:ot({"text-gray-700":!L(h)})},p(o.$t(`${r(Ft)(n.value.name)}Data.ingredients.${h.dishid}`)),3)]),_:2},1032,["onClick","class"]))),128))])]))),256)),R.value!==0?(i(),u("div",Ps,[a("label",Ns,p(o.$t("common.price"))+":",1),a("label",As,p(E.value+"€"),1)])):$("",!0),a("div",Ls,[w(r(j),{icon:"pi pi-shopping-cart",onClick:g[4]||(g[4]=T=>B()),label:o.$t("common.addToCart"),class:"m-3",severity:"primary",raised:""},null,8,["label"])])])}}},qs=_t(zs,[["__scopeId","data-v-f03c4609"]]);var Os=Ct`
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
`,Es={root:function(e){var s=e.props;return["p-tabs p-component",{"p-tabs-scrollable":s.scrollable}]}},Rs=dt.extend({name:"tabs",style:Os,classes:Es}),Vs={name:"BaseTabs",extends:yt,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:Rs,provide:function(){return{$pcTabs:this,$parentInstance:this}}},Zt={name:"Tabs",extends:Vs,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function js(t,e,s,l,m,n){return i(),u("div",F({class:t.cx("root")},t.ptmi("root")),[ct(t.$slots,"default")],16)}Zt.render=js;var Ms={root:"p-tablist",content:function(e){var s=e.instance;return["p-tablist-content",{"p-tablist-viewport":s.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Fs=dt.extend({name:"tablist",classes:Ms}),Ks={name:"BaseTabList",extends:yt,props:{},style:Fs,provide:function(){return{$pcTabList:this,$parentInstance:this}}},te={name:"TabList",extends:Ks,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,s=this.getVisibleButtonWidths(),l=Bt(e)-s,m=Math.abs(e.scrollLeft),n=l*.8,D=m-n,k=Math.max(D,0);e.scrollLeft=Lt(e)?-1*k:k},onNextButtonClick:function(){var e=this.$refs.content,s=this.getVisibleButtonWidths(),l=Bt(e)-s,m=Math.abs(e.scrollLeft),n=l*.8,D=m+n,k=e.scrollWidth-l,R=Math.min(D,k);e.scrollLeft=Lt(e)?-1*R:R},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,s=e.content,l=e.inkbar,m=e.tabs;if(l){var n=Pt(s,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(l.style.height=ue(n)+"px",l.style.top=$t(n).top-$t(m).top+"px"):(l.style.width=de(n)+"px",l.style.left=$t(n).left-$t(m).left+"px")}},updateButtonState:function(){var e=this.$refs,s=e.list,l=e.content,m=l.scrollTop,n=l.scrollWidth,D=l.scrollHeight,k=l.offsetWidth,R=l.offsetHeight,E=Math.abs(l.scrollLeft),M=[Bt(l),ce(l)],A=M[0],K=M[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=m!==0,this.isNextButtonEnabled=s.offsetHeight>=R&&parseInt(m)!==D-K):(this.isPrevButtonEnabled=E!==0,this.isNextButtonEnabled=s.offsetWidth>=k&&parseInt(E)!==n-A)},getVisibleButtonWidths:function(){var e=this.$refs,s=e.prevButton,l=e.nextButton,m=0;return this.showNavigators&&(m=((s==null?void 0:s.offsetWidth)||0)+((l==null?void 0:l.offsetWidth)||0)),m}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return Dt({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:ge,ChevronRightIcon:ye},directives:{ripple:Ut}},Ws=["data-p"],Hs=["aria-label","tabindex"],Us=["data-p"],Qs=["aria-orientation"],Js=["aria-label","tabindex"];function Gs(t,e,s,l,m,n){var D=Tt("ripple");return i(),u("div",F({ref:"list",class:t.cx("root"),"data-p":n.dataP},t.ptmi("root")),[n.showNavigators&&m.isPrevButtonEnabled?It((i(),u("button",F({key:0,ref:"prevButton",type:"button",class:t.cx("prevButton"),"aria-label":n.prevButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return n.onPrevButtonClick&&n.onPrevButtonClick.apply(n,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(i(),X(vt(n.templates.previcon||"ChevronLeftIcon"),F({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,Hs)),[[D]]):$("",!0),a("div",F({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return n.onScroll&&n.onScroll.apply(n,arguments)}),"data-p":n.dataP},t.ptm("content")),[a("div",F({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":n.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[ct(t.$slots,"default"),a("span",F({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,Qs)],16,Us),n.showNavigators&&m.isNextButtonEnabled?It((i(),u("button",F({key:1,ref:"nextButton",type:"button",class:t.cx("nextButton"),"aria-label":n.nextButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return n.onNextButtonClick&&n.onNextButtonClick.apply(n,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(i(),X(vt(n.templates.nexticon||"ChevronRightIcon"),F({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,Js)),[[D]]):$("",!0)],16,Ws)}te.render=Gs;var Xs={root:function(e){var s=e.instance,l=e.props;return["p-tab",{"p-tab-active":s.active,"p-disabled":l.disabled}]}},Ys=dt.extend({name:"tab",classes:Xs}),Zs={name:"BaseTab",extends:yt,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Ys,provide:function(){return{$pcTab:this,$parentInstance:this}}},ee={name:"Tab",extends:Zs,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var s=this.findNextTab(e.currentTarget);s?this.changeFocusedTab(e,s):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var s=this.findPrevTab(e.currentTarget);s?this.changeFocusedTab(e,s):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var s=this.findFirstTab();this.changeFocusedTab(e,s),e.preventDefault()},onEndKey:function(e){var s=this.findLastTab();this.changeFocusedTab(e,s),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findNextTab:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=s?e:e.nextElementSibling;return l?kt(l,"data-p-disabled")||kt(l,"data-pc-section")==="activebar"?this.findNextTab(l):Pt(l,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=s?e:e.previousElementSibling;return l?kt(l,"data-p-disabled")||kt(l,"data-pc-section")==="activebar"?this.findPrevTab(l):Pt(l,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,s){fe(s),this.scrollInView(s)},scrollInView:function(e){var s;e==null||(s=e.scrollIntoView)===null||s===void 0||s.call(e,{block:"nearest"})}},computed:{active:function(){var e;return pe((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},attrs:function(){return F(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return Dt({active:this.active})}},directives:{ripple:Ut}};function tn(t,e,s,l,m,n){var D=Tt("ripple");return t.asChild?ct(t.$slots,"default",{key:1,dataP:n.dataP,class:ot(t.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs,onClick:n.onClick}):It((i(),X(vt(t.as),F({key:0,class:t.cx("root"),"data-p":n.dataP,onClick:n.onClick},n.attrs),{default:q(function(){return[ct(t.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[D]])}ee.render=tn;const en={class:"fixed top-0 left-0 w-full bg-primary-reverse",style:{"z-index":"10"}},an={class:"grid mt-3 ml-3"},sn={class:"max-w-5rem flex align-items-center"},nn=["src"],on={class:"flex align-items-center"},ln={key:0,class:"text-color font-bold p-1"},rn={key:1,class:"text-color font-bold p-1"},cn={class:"card flex mr-3",style:{"margin-left":"auto"}},un={style:{display:"flex","align-items":"center"}},dn={style:{"flex-grow":"1",width:"0",overflow:"hidden"}},pn={class:"mt-2"},fn={class:"flex justify-content-end mt-2"},vn={__name:"HeaderTabs",props:{types:Array,typeIndex:Number,tableId:String,tabItems:Array},emits:["clickType","switchToWelcome"],setup(t,{emit:e}){const{t:s}=ut();function l(){var H;const L=I.currentPage.value,B=(H=L==null?void 0:L.data)==null?void 0:H.logoPath;return B?I.pathFormated(B):"/images/logo_logo.png"}function m(){return I.getTable()}const n=S(),D=lt(()=>[{label:s("common.options"),items:[{label:s("common.pay"),icon:"pi pi-wallet",command:()=>{O()}},{label:s("common.call"),icon:"pi pi-user-plus",command:()=>{I.send_cmd(m(),{cmd:"call"}),et.show_info(s("notification.call_msg"))}}]}]),k=L=>{n.value.toggle(L)},R=L=>{E.value.toggle(L)},E=S(),M=S(!1),A=S(),K=S();function O(){M.value=!0}function Q(){L(A.value)?I.send_cmd(m(),{cmd:"pay",nif:A.value,note:K.value},B=>{B.success?(et.show_info(s("notification.pay_msg")),M.value=!1):et.show_error(s("common.failed"))}):et.show_warn(s("notification.cancel_msg"));function L(B){return!B||B.toString().length===9||B.toString().length===0}}function W(){K.value&&(K.value=void 0)}return(L,B)=>(i(),u(U,null,[a("div",en,[a("div",an,[a("div",sn,[a("img",{src:l(),class:"w-full",clickble:"",onClick:B[0]||(B[0]=()=>L.$emit("switchToWelcome"))},null,8,nn)]),a("div",on,[t.tableId?(i(),u("p",ln,p(L.$t("common.table"))+": "+p(t.tableId),1)):$("",!0),t.tableId?$("",!0):(i(),u("p",rn,p(L.$t("common.takeAway")),1))]),a("div",cn,[t.tableId?(i(),X(r(j),{key:0,icon:"pi pi-bell",rounded:"","aria-label":"Filter",onClick:k,"aria-haspopup":"true","aria-controls":"overlay_menu"})):$("",!0),w(r(jt),{ref_key:"menu",ref:n,id:"overlay_menu",model:D.value,popup:!0},null,8,["model"])])]),a("div",un,[a("div",null,[w(r(j),{icon:"pi pi-bars",variant:"text",rounded:"","aria-label":"Filter",onClick:R,"aria-haspopup":"true","aria-controls":"tab_menu"}),w(r(jt),{ref_key:"tabMenu",ref:E,id:"tab_menu",model:t.tabItems,popup:!0},null,8,["model"])]),a("div",dn,[w(r(Zt),{value:t.typeIndex,scrollable:"",showNavigators:!1},{default:q(()=>[w(r(te),null,{default:q(()=>[(i(!0),u(U,null,Y(t.types,(H,at)=>(i(),X(r(ee),{value:at,onClick:()=>L.$emit("clickType",at),class:"text-sm md:text-lg lg:text-xl"},{default:q(()=>[ht(p(H),1)]),_:2},1032,["value","onClick"]))),256))]),_:1})]),_:1},8,["value"])])])]),w(r(bt),{visible:M.value,"onUpdate:visible":B[4]||(B[4]=H=>M.value=H),header:"结账",class:"flex flex-column",modal:!0,dismissableMask:!0,onHide:W},{default:q(()=>[a("div",null,[B[5]||(B[5]=a("label",null,"NIF:",-1)),w(r(_e),{modelValue:A.value,"onUpdate:modelValue":B[1]||(B[1]=H=>A.value=H),inputId:"withoutgrouping",useGrouping:!1,fluid:"",class:"w-full m-1"},null,8,["modelValue"])]),a("div",pn,[a("label",null,p(L.$t("common.note"))+":",1),w(r(Jt),{type:"text",modelValue:K.value,"onUpdate:modelValue":B[2]||(B[2]=H=>K.value=H),class:"w-full m-1"},null,8,["modelValue"])]),a("div",fn,[w(r(j),{label:r(s)("common.send"),onClick:B[3]||(B[3]=H=>Q())},null,8,["label"])])]),_:1},8,["visible"])],64))}},hn={__name:"SwipeHint",props:{size:{type:String,default:"8rem"},duration:{type:Number,default:6e3},position:{type:String,default:"bottom"}},setup(t){const e=t,s=S(!0);Qt(()=>{e.duration>0&&setTimeout(()=>{s.value=!1},e.duration);const m=()=>{s.value=!1,window.removeEventListener("touchstart",m)};window.addEventListener("touchstart",m)});const l=lt(()=>{let m={left:"50%",transform:"translateX(-50%)",zIndex:99999,opacity:.5,pointerEvents:"none",textAlign:"center",position:"fixed"};return e.position==="top"?m.top="15%":e.position==="center"?(m.top="50%",m.transform="translate(-50%, -50%)"):m.bottom="15%",m});return(m,n)=>s.value?(i(),u("div",{key:0,class:"swipe-hint",style:xt(l.value)},[a("div",{class:"hand",style:xt({width:t.size,height:t.size,backgroundImage:"url(/images/hand_finger.png)"})},null,4)],4)):$("",!0)}},bn=_t(hn,[["__scopeId","data-v-e5f3ff45"]]),mn={class:"w-full h-full flex flex-column"},gn={style:{"overflow-x":"hidden","touch-action":"pan-y"},class:"h-full"},yn={class:"fixed bottom-0 left-0 w-full h-3rem bg-primary-reverse p-3"},_n={class:"h-full flex align-items-center justify-content-between w-full"},wn={class:"m-2"},$n={class:"m-2"},kn={style:{"max-height":"60vh","overflow-y":"auto","padding-bottom":"60px"}},xn={class:"flex flex-column border-bottom-1"},Tn={key:0,class:"flex justify-content-between"},In={class:"flex flex-column"},Cn={class:"font-bold"},Dn={class:"text-right"},Sn={key:1,class:"flex justify-content-between"},Bn={class:"flex flex-column"},Pn={class:"font-bold"},Nn={class:"text-right"},An={key:0},Ln={key:1,class:"flex flex-column"},zn={class:"flex flex-column"},qn={class:"font-bold"},On={class:"text-right"},En={class:"total-footer bg-primary-reverse"},Kt=2,Wt="order_time_key",Rn={__name:"HomePage",setup(t){const e=Ht(),s=be(),{t:l}=ut(),{locale:m}=ut(),n=S(!1),D=S([""]),k=S(0),R=Z.cartItemCount,E=S(!1),M=S([]),A=S(0),K=S({}),O=S(!1),Q=st.dishDatas,W=S(null),L=S(null),B=S([]),H=S([]),at=()=>{k.value<D.value.length-1&&(k.value++,d(),v(k.value))},rt=()=>{k.value>0&&(k.value--,d(),v(k.value))};function b(c){R.value=R.value+c}const P=(c,y,_,z)=>{I.rateDish(c,y,_),z&&et.show_success(l("notification.rating_submitted"))};function v(c){let y=I.getOrderMenuTab()[c];if(I.customDishAPI.customDishes.value.map(V=>V.name).includes(y)?(O.value=!0,K.value=I.customDishAPI.customDishes.value.find(V=>V.name==y)):O.value=!1,I.getMenu().length==0){console.log("exit");return}let N=Q.value[c].mainDishes;st.showDishList(N)}const tt=()=>{I.refreshTableFromServer(),I.getTableTotalAmount(A),E.value=!0},o=(c,y,_)=>{const z=Q.value.find(N=>N.id===c);z&&(z.likes=y,z.rates=_)},g=c=>{let y=c.id;c.org_id&&(y=c.org_id);for(let _=0;_<Q.value.length;_++)if(Q.value[_].id==y)for(const z in c){let N=z;z.startsWith("note")&&(N=N.replace("note","description")),Q.value[_][N]=c[z]}};function x(){return new Promise(c=>{let y=()=>{const _=I.formatedMenu.value;_.length>0?c(_):setTimeout(y,200)};y()})}function C(){return new Promise(c=>{let y=()=>{const _=I.getOrderMenuTab();_.length>0?c(_):setTimeout(y,200)};y()})}const T=lt(()=>{const c=m.value;return I.formatedMenu.value.map(z=>({...z,mainDishes:z.dishes.map(N=>{const V=N.dish,J={...V,name:f(V,"name",c),note:f(V,"note",c),subname:f(V,"subname",c),quantity:0},pt=N.subItems.map(wt=>{const St=wt;return{...wt,name:f(St,"name",c),note:f(St,"note",c),subname:f(St,"subname",c),quantity:0}});return{...N,dish:J,subItems:pt}})}))});function f(c,y,_){return c?_==="en"?c[`${y}_en`]||c[y]:_==="zh"&&c[`${y}_cn`]||c[y]:""}async function h(){await x();const c=await C();Q.value=T.value,D.value=I.orderMenuTab;let y=I.isTakeaway();I.onMenuItemChanged=g,I.onRatingChanged=o;let _=0;if(!y){const z=localStorage.getItem("cartDish_custom");if(z&&z!=="undefined")try{Z.cartDishs.value=JSON.parse(z),_+=Z.cartDishs.value.length}catch(V){console.error("解析自定义菜失败:",V),Z.cartDishs.value=[]}const N=localStorage.getItem("cartDish_normal");if(N&&N!=="undefined")try{const V=JSON.parse(N);st.updateDishDataQty(V);const J=V.reduce((pt,wt)=>pt+(wt.quantity||0),0);_+=J}catch(V){console.error("解析普通菜失败:",V)}Z.cartItemCount.value=_}for(let z=0;z<c.length;z++){const N=z;M.value.push({label:c[z],command:()=>{G(N),d()}})}}const d=()=>{he(()=>{const c=document.querySelector(".p-tablist-viewport"),y=document.querySelector(".p-tab.p-tab-active");if(c&&y){const _=y.offsetLeft-c.offsetWidth/2+y.offsetWidth/2;c.scrollTo({left:_,behavior:"smooth"})}})},G=c=>{v(c),k.value=c,d()},nt=()=>{var c=st.getAllIncrementedDish();L.value.showDishList(c),console.log("card items: ",Z.cartDishs.value)};function it(){return I.getTable()}I.params.port,W.value=I.table.value.order;function ae(c){var y=l("notification.too_fast",{remainTime:c});et.show_warn(y)}const se=c=>{const y=[];for(let J=0;J<Z.cartDishs.value.length;J++){var _=Z.cartDishs.value[J];y.push({dishid:_.dishid,name:_.name,quantity:_.count,notes:_.notes,limit:_.limit,price:_.dis_price?_.dis_price:_.price,dishNote:_.dishNote,category:_.category})}const z=st.getAllIncrementedDish();for(let J=0;J<z.length;J++){var _=z[J];console.log("id cartDishs ;  ; : ",_),_.quantity>0&&y.push({dishid:_.id,name:_.name,quantity:_.quantity,limit:_.limit,price:_.dis_price?_.dis_price:_.price,dishNote:_.dishNote})}if(y.length===0)return et.show_warn(l("notification.select_at_least_one")),!1;console.log("cart item:",y);const N=JSON.parse(localStorage.getItem(Wt)||"{}"),V=Date.now();if(!N.startTime||V-N.startTime>Kt*1e3)N.startTime=V;else{const J=Kt-parseInt((V-N.startTime)/1e3);ae(J);return}return localStorage.setItem(Wt,JSON.stringify(N)),n.value=!0,I.submit_order({name:c.name,note:c.note,table:it(),items:y}),!0};function ne(){const c=localStorage.getItem("language");c&&(m.value=c)}function Nt(){for(let c=0;c<Q.value.length;c++){const y=Q.value[c];y.quantity=0}n.value=!1,R.value=0,Z.cartDishs.value.length=0}Qt(async()=>{ne(),await h(),v(k.value),I.clear_order_data=()=>{Nt()},I.setOnOrderConfirmed(c=>{console.log("setOnOrderConfirmed..."),Nt();const y=c;et.show_success(l("notification.order_submitted",{id:y}))}),I.setOnShowError(c=>{n.value=!1,et.show_error(c)})});function oe(){localStorage.removeItem("login_time");const c=s.query.table;c?e.push({path:"/",query:{table:c}}):e.push({path:"/takeReserve"})}function At(){const c=st.getAllIncrementedDish();console.log("ansaocnascnaicnaiocnjapiscnj:",c),localStorage.setItem("cartDish_normal",JSON.stringify(c));const y=Z.cartDishs.value;localStorage.setItem("cartDish_custom",JSON.stringify(y))}return ve(()=>{At()}),window.addEventListener("beforeunload",c=>{I.cleanup(),At()}),(c,y)=>{const _=Tt("touch"),z=Tt("touch-options");return i(),u(U,null,[a("div",mn,[w(vn,{types:r(I).orderMenuTab,typeIndex:k.value,tabItems:M.value,tableId:it(),onClickType:G,onSwitchToWelcome:oe},null,8,["types","typeIndex","tabItems","tableId"]),y[2]||(y[2]=a("div",{class:"pb-8"},null,-1)),y[3]||(y[3]=a("div",{class:"pb-7 sm:pb-7 md:pb-7 lg:pb-7"},null,-1)),w(bn,{duration:"3000",position:"center"}),It((i(),u("div",gn,[O.value?(i(),X(qs,{key:0,currentCustomDish:K.value},null,8,["currentCustomDish"])):(i(),X(Da,{key:1,updateCartItemCount:b,rateDish:P,likedItemsRef:B.value,dislikedItemsRef:H.value},null,8,["likedItemsRef","dislikedItemsRef"]))])),[[_,at,"swipe",{left:!0,passive:!0}],[_,rt,"swipe",{right:!0,passive:!0}],[z,{swipeTolerance:100}]]),y[4]||(y[4]=a("div",{class:"pb-6"},null,-1)),a("div",yn,[a("div",_n,[a("div",wn,[it()?(i(),X(r(j),{key:0,label:c.$t("common.orders"),icon:"pi pi-list",class:"p-button-secondary",onClick:tt},null,8,["label"])):$("",!0)]),a("div",$n,[w(r(Yt),{value:r(R),severity:"danger",onClick:nt},{default:q(()=>y[1]||(y[1]=[a("i",{class:"pi pi-shopping-cart",style:{"font-size":"2rem"}},null,-1)])),_:1,__:[1]},8,["value"])])])])]),w(ns,{ref_key:"cartRef",ref:L,updateCartItemCount:b,checkout:se,isTakeaway:!it()},null,8,["isTakeaway"]),w(r(bt),{visible:E.value,"onUpdate:visible":y[0]||(y[0]=N=>E.value=N),header:c.$t("common.completedOrders"),modal:"",style:{width:"80vw","max-width":"700px"}},{default:q(()=>{var N,V;return[a("div",kn,[a("div",xn,[(N=A.value.adultPrice)!=null&&N.quantity&&A.value.adultPrice.quantity!=0?(i(),u("div",Tn,[a("div",In,[a("span",Cn,p(c.$t("common.adult")),1),a("small",null,p(c.$t("common.quantity"))+": "+p(A.value.adultPrice.quantity),1)]),a("div",Dn,[a("span",null,"€"+p((Number(A.value.adultPrice.price)*A.value.adultPrice.quantity).toFixed(2)),1)])])):$("",!0),(V=A.value.childrenPrice)!=null&&V.quantity&&A.value.childrenPrice.quantity!=0?(i(),u("div",Sn,[a("div",Bn,[a("span",Pn,p(c.$t("common.children")),1),a("small",null,p(c.$t("common.quantity"))+": "+p(A.value.childrenPrice.quantity),1)]),a("div",Nn,[a("span",null,"€"+p((Number(A.value.childrenPrice.price)*A.value.childrenPrice.quantity).toFixed(2)),1)])])):$("",!0)]),r(I).table.value.order.length===0?(i(),u("div",An,p(c.$t("common.noOrders")),1)):(i(),u("div",Ln,[(i(!0),u(U,null,Y(r(I).table.value.order,(J,pt)=>(i(),u("div",{key:pt,class:"flex justify-content-between border-bottom-1 pb-2"},[a("div",zn,[a("span",qn,p(r(I).getDishName(J)),1),a("small",null,p(c.$t("common.quantity"))+": "+p(J.quantity),1)]),a("div",On,[a("span",null,"€"+p((J.price*J.quantity).toFixed(2)),1)])]))),128))]))]),a("div",En,p(c.$t("common.total"))+": €"+p(A.value.total),1)]}),_:1},8,["visible","header"])],64)}}},Gn=_t(Rn,[["__scopeId","data-v-b8a59e8c"]]);export{Gn as default};
