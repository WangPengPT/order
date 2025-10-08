import{v as Nt,B as pt,x as wt,y as Pt,f as c,p as n,q as X,i as x,z as ct,A as M,C as ht,h as a,t as u,n as it,r as B,g as k,F as H,l as Y,k as l,j as q,D as Dt,a as I,u as ut,s as mt,m as et,e as Jt,E as ce,G as ue,c as lt,H as bt,I as de,R as Gt,J as Lt,K as pe,L as zt,M as fe,N as It,O as ve,P as Et,Q as St,S as he,T as me,U as Ct,o as Xt,b as be,V as ge,d as ye}from"./index-Deozbtu9.js";import{s as gt,a as Yt}from"./index-Dbz3yTJw.js";import{s as j,a as Zt}from"./index-C2dmoYwt.js";import{D as st,c as tt,s as Rt}from"./index-xboQL8bI.js";import{_ as kt,b as Vt,c as Ft,a as jt,s as Mt}from"./_plugin-vue_export-helper-BTSQVsmD.js";import{s as _e}from"./index-2pir4m9u.js";import{s as Kt,a as we}from"./index-nDqhP518.js";import{s as ke}from"./index-CjU8NenA.js";import{s as Wt}from"./index-DxW7eWt6.js";import{s as $e}from"./index-DEuFwpoq.js";var xe=Nt`
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
`,Te={root:function(e){var s=e.props;return["p-tag p-component",{"p-tag-info":s.severity==="info","p-tag-success":s.severity==="success","p-tag-warn":s.severity==="warn","p-tag-danger":s.severity==="danger","p-tag-secondary":s.severity==="secondary","p-tag-contrast":s.severity==="contrast","p-tag-rounded":s.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Ie=pt.extend({name:"tag",style:xe,classes:Te}),Ce={name:"BaseTag",extends:wt,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Ie,provide:function(){return{$pcTag:this,$parentInstance:this}}};function yt(t){"@babel/helpers - typeof";return yt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yt(t)}function De(t,e,s){return(e=Se(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Se(t){var e=Ne(t,"string");return yt(e)=="symbol"?e:e+""}function Ne(t,e){if(yt(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var d=s.call(t,e);if(yt(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var vt={name:"Tag",extends:Ce,inheritAttrs:!1,computed:{dataP:function(){return Pt(De({rounded:this.rounded},this.severity,this.severity))}}},Pe=["data-p"];function Be(t,e,s,d,m,r){return n(),c("span",M({class:t.cx("root"),"data-p":r.dataP},t.ptmi("root")),[t.$slots.icon?(n(),X(ht(t.$slots.icon),M({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(n(),c("span",M({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):x("",!0),t.value!=null||t.$slots.default?ct(t.$slots,"default",{key:2},function(){return[a("span",M({class:t.cx("label")},t.ptm("label")),u(t.value),17)]}):x("",!0)],16,Pe)}vt.render=Be;var Ae=Nt`
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
`,Le={root:function(e){var s=e.props;return["p-avatar p-component",{"p-avatar-image":s.image!=null,"p-avatar-circle":s.shape==="circle","p-avatar-lg":s.size==="large","p-avatar-xl":s.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},ze=pt.extend({name:"avatar",style:Ae,classes:Le}),qe={name:"BaseAvatar",extends:wt,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ze,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function _t(t){"@babel/helpers - typeof";return _t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_t(t)}function Ht(t,e,s){return(e=Oe(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Oe(t){var e=Ee(t,"string");return _t(e)=="symbol"?e:e+""}function Ee(t,e){if(_t(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var d=s.call(t,e);if(_t(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var te={name:"Avatar",extends:qe,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}},computed:{dataP:function(){return Pt(Ht(Ht({},this.shape,this.shape),this.size,this.size))}}},Re=["aria-labelledby","aria-label","data-p"],Ve=["data-p"],Fe=["data-p"],je=["src","alt","data-p"];function Me(t,e,s,d,m,r){return n(),c("div",M({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root"),{"data-p":r.dataP}),[ct(t.$slots,"default",{},function(){return[t.label?(n(),c("span",M({key:0,class:t.cx("label")},t.ptm("label"),{"data-p":r.dataP}),u(t.label),17,Ve)):t.$slots.icon?(n(),X(ht(t.$slots.icon),{key:1,class:it(t.cx("icon"))},null,8,["class"])):t.icon?(n(),c("span",M({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon"),{"data-p":r.dataP}),null,16,Fe)):t.image?(n(),c("img",M({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return r.onError&&r.onError.apply(r,arguments)})},t.ptm("image"),{"data-p":r.dataP}),null,16,je)):x("",!0)]})],16,Re)}te.render=Me;const Ke={class:"grid"},We={class:"flex flex-column"},He=["onClick"],Ue={class:"p-1 flex-shrink-0 w-7rem h-7rem flex align-items-center justify-content-center overflow-hidden"},Qe=["src","alt"],Je={class:"flex flex-column justify-content-center"},Ge={class:"font-bold"},Xe={class:"flex flex-wrap gap-2"},Ye={class:"flex gap-1 align-items-center"},Ze={class:"text-color-secondary line2"},ta={key:0,class:"text-xl font-bold text-primary"},ea={key:1,class:"flex align-items-center gap-1"},aa={class:"text-l font-bold text-color-secondary"},sa={class:"text-sm line-through text-500"},na={key:2,class:"flex gap-2 mr-2",id:"card-quantity"},oa={class:"w-2rem text-xl text-center"},ia={key:3,class:"flex gap-2 mr-2"},la={key:0,class:"m-2 mt-0"},ra={class:"flex flex-row justify-content-between align-content-center"},ca={class:"flex flex-column"},ua={class:"text-l font-bold"},da={key:0,class:"text-l font-bold text-color-secondary"},pa={key:1,class:"flex align-items-center gap-1"},fa={class:"text-l font-bold text-color-secondary"},va={class:"text-sm line-through text-500"},ha={key:0,class:"flex ml-2 mr-2"},ma={class:"w-2rem text-xl text-center"},ba={key:1,class:"flex gap-2 mr-3 pt-2 pb-2"},ga={class:"max-w-5rem flex align-items-center"},ya={class:"font-bold whitespace-nowrap"},_a={class:"mb-2 flex justify-content-center"},wa={class:"font-bold text-center"},ka={class:"mb-2"},$a={class:"text-color-secondary m-0 line-height-3 line2 text-center"},xa={class:"mb-2"},Ta={class:"flex justify-content-center"},Ia=["src","alt"],Ca={class:"flex align-items-center gap-2"},Da=["src","alt"],Sa={class:"flex align-items-center gap-3 ml-auto"},Na={__name:"DishList",props:{updateCartItemCount:{type:Function,required:!0},rateDish:{type:Function,required:!0},likedItemsRef:Array,dislikedItemsRef:Array},setup(t){const e=st.dishes;let s={rated:!1,id:null,like:0,rate:0};function d(){var h;const w=I.currentPage.value,L=(h=w==null?void 0:w.data)==null?void 0:h.logoPath;return L?I.pathFormated(L,w.imagesPath):"/images/logo_logo.png"}const m=w=>{D.updateCartItemCount(w)},r=w=>{D.updateCartItemCount(-1)},_=w=>st.dishDatas.value[w]?st.dishDatas.value[w].quantity:0,O=w=>{if(!F())return!1;const L=w.quantity;let h=3;if(w.price>0&&(h=9),w.limit){const at=w.id,$=F(),v=($.peopleType.adults+$.peopleType.children)*w.limit,b=$.order.find(A=>A.dishid==at);let C=0;if(w.subitem)for(const A of w.subitem){C+=_(A);const i=$.order.find(g=>g.dishid==S(A));i&&(C+=i.quantity)}else C+=w.quantity,b&&(C+=b.quantity);return L>=h||v&&C>=v}return L>=h},S=w=>st.dishDatas.value[w]?st.dishDatas.value[w].id:0,F=()=>I.getTableValue();function K(){D.rateDish(s.id,s.like,s.rate,s.rated),s.id=null,s.like=0,s.rate=0,s.rated=!1}const U=w=>{const L=D.likedItemsRef.indexOf(w);if(s.id=w.id,L!==-1)D.likedItemsRef.splice(L,1),s.like+=-1,s.rate+=-1,s.rated=!1;else{s.rated=!0,D.likedItemsRef.push(w);const h=D.dislikedItemsRef.indexOf(w);h!==-1?(D.dislikedItemsRef.splice(h,1),s.like+=1):(s.like+=1,s.rate+=1)}},z=w=>{const L=D.dislikedItemsRef.indexOf(w);if(s.id=w.id,L!==-1)D.dislikedItemsRef.splice(L,1),s.rate+=-1,s.rated=!1;else{s.rated=!0,D.dislikedItemsRef.push(w);const h=D.likedItemsRef.indexOf(w);h!==-1?(D.likedItemsRef.splice(h,1),s.like+=-1):s.rate+=1}},D=t,Z=B(!1),E=B({}),R=w=>{Z.value=!0,E.value=w},P=w=>{w.target.src="/images/default.png"};function Q(w){ot(w.target,300)}function nt(w){ot(w.target,110)}function ot(w,L){const h=w.naturalWidth,at=w.naturalHeight,$=Math.min(h,L),v=$/h,b=at*v;w.style.width=`${$}px`,w.style.height=`${b}px`}return(w,L)=>(n(),c(H,null,[a("div",Ke,[(n(!0),c(H,null,Y(l(e),(h,at)=>(n(),c("div",{key:at,class:"col-12 sm:col-12 md:col-6 lg:col-4 border-round surface-section shadow-1 p-2"},[a("div",We,[a("div",{class:it(["flex flex-row",h.subItems.length!==0?"flex-grow-1":""]),onClick:$=>R(h.dish)},[a("div",Ue,[a("img",{src:h.dish.image||"/images/default.png",alt:h.dish.name,class:"w-full h-full",style:{"object-fit":"cover"},onError:P,onLoad:nt},null,40,Qe)]),a("div",Je,[a("div",Ge,u(h.dish.name),1),a("div",null,[a("div",Xe,[a("div",Ye,[(n(),c(H,null,Y(5,$=>a("i",{key:$,class:it(["pi invert-star",$<=Math.floor(h.dish.likes/h.dish.rates*5)?"pi-star-fill":$-.5<=h.dish.likes/h.dish.rates*5?"pi-star-half-fill":"pi-star"]),style:{color:"black"}},null,2)),64)),a("p",null,"("+u(h.dish.rates?h.dish.rates:0)+")",1)])])]),a("div",null,[a("p",Ze,u(h.dish.note),1)])])],10,He),h.subItems.length==0?(n(),c("div",{key:0,class:it(["flex ml-2 mr-2 mb-2",Number(h.dish.price)>0?"justify-content-between":"justify-content-end"])},[!h.dish.discount&&Number(h.dish.price)>0?(n(),c("span",ta,"€"+u(h.dish.price),1)):x("",!0),h.dish.discount?(n(),c("div",ea,[a("span",aa,"€"+u(h.dish.dis_price),1),a("span",sa,"€"+u(h.dish.price),1),k(l(vt),{severity:"danger",value:"-"+h.dish.discount+"%"},null,8,["value"])])):x("",!0),h.dish.soldout?x("",!0):(n(),c("div",na,[k(l(j),{icon:"pi pi-minus",rounded:"",disabled:h.dish.quantity<=0,onClick:$=>{h.dish.quantity--,r()},class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),a("span",oa,u(h.dish.quantity),1),k(l(j),{icon:"pi pi-plus",rounded:"",disabled:O(h.dish),onClick:$=>{h.dish.quantity++,m(1)},class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])),h.dish.soldout?(n(),c("div",ia,[k(l(vt),{severity:"danger",value:w.$t("common.soldout")},null,8,["value"])])):x("",!0)],2)):x("",!0),h.subItems.length!==0?(n(!0),c(H,{key:1},Y(h.subItems,($,v)=>(n(),c(H,{key:"index"},[$.disable?x("",!0):(n(),c("div",la,[a("div",ra,[a("div",ca,[a("span",ua,u($.subname),1),!$.discount&&$.price!=="0.00"&&$.price!=="0"?(n(),c("span",da,"€"+u($.price),1)):x("",!0),$.discount?(n(),c("div",pa,[a("span",fa,"€"+u($.dis_price),1),a("span",va,"€"+u($.price),1),k(l(vt),{severity:"danger",value:"-"+$.discount+"%"},null,8,["value"])])):x("",!0)]),$.soldout?x("",!0):(n(),c("div",ha,[k(l(j),{icon:"pi pi-minus",rounded:"",disabled:$.quantity<=0,onClick:b=>{$.quantity--,r()},class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),a("span",ma,u($.quantity),1),k(l(j),{icon:"pi pi-plus",rounded:"",onClick:b=>{$.quantity++,m(1)},class:"w-2rem h-2rem",disabled:O($)},null,8,["onClick","disabled"])])),$.soldout?(n(),c("div",ba,[k(l(vt),{severity:"danger",value:w.$t("common.soldout")},null,8,["value"])])):x("",!0)])]))],64))),128)):x("",!0)])]))),128))]),k(l(gt),{visible:Z.value,"onUpdate:visible":L[2]||(L[2]=h=>Z.value=h),modal:"",header:"dish",style:Dt([{width:"23rem"},{width:"80vw","max-width":"700px"}]),onHide:L[3]||(L[3]=h=>K())},{header:q(()=>[a("div",ga,[k(l(te),{image:d(),class:"w-full"},null,8,["image"])]),a("span",ya,u(w.$t("common.details")),1)]),default:q(()=>[a("div",_a,[a("span",wa,u(E.value.name),1)]),a("div",ka,[a("span",$a,u(E.value.note),1)]),a("div",xa,[a("div",Ta,[a("img",{class:"w-full h-auto object-contain",src:E.value.image,alt:E.value.name,onError:P,onLoad:Q},null,40,Ia)])]),a("div",Ca,[(n(!0),c(H,null,Y(E.value.allergies,(h,at)=>(n(),c("img",{src:"images/"+h+".png",alt:h,class:"w-2rem h-2rem border-round flex-shrink-0",style:{"object-fit":"cover","min-width":"2rem"}},null,8,Da))),256)),a("div",Sa,[a("button",{onClick:L[0]||(L[0]=h=>U(E.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[a("i",{class:it(["pi pi-thumbs-up text-xl",D.likedItemsRef.includes(E.value)?"text-green-500":"text-gray-400"])},null,2)]),a("button",{onClick:L[1]||(L[1]=h=>z(E.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[a("i",{class:it(["pi pi-thumbs-down text-xl",D.dislikedItemsRef.includes(E.value)?"text-red-500":"text-gray-400"])},null,2)])])])]),_:1},8,["visible"])],64))}},Pa=kt(Na,[["__scopeId","data-v-15e7fd21"]]),Ba={key:0,class:"text-3xl font-bold"},Aa={class:"flex flex-column gap-3 p-1"},La={key:0,class:"flex flex-column gap-1"},za={key:0,class:"m-0"},qa={key:0,class:"m-0"},Oa={class:"flex justify-content-between gap-4 mt-1"},Ea={class:"flex align-items-center gap-2"},Ra=["src","alt"],Va={class:"flex-grow-1 min-width-0 max-w-18rem"},Fa={class:"flex flex-column gap-1"},ja={class:"flex align-items-center gap-2"},Ma={class:"text-xl font-bold line1 whitespace-nowrap overflow-hidden text-overflow-ellipsis",style:{"max-width":"20rem"}},Ka={class:"flex align-items-end gap-1"},Wa={key:0,class:"text-xl font-bold text-primary"},Ha={key:1,class:"text-xl font-bold text-primary"},Ua={key:2,class:"text-sm text-color-secondary"},Qa={key:0,class:"text-xs text-primary"},Ja={class:"flex-shrink-0 flex flex-wrap justify-content-between align-items-center gap-1"},Ga={class:"flex flex-wrap justify-content-between align-content-center"},Xa={class:"flex align-items-center gap-1"},Ya={class:"w-2rem text-center"},Za={key:1,class:"flex flex-column gap-2 mt-2"},ts={for:"in_label"},es={for:"in_label"},as={class:"bottom-0 left-0 mt-2"},ss={class:"text-2xl font-bold"},ns={class:"text-2xl font-bold text-primary pl-2"},os={class:"flex justify-content-between"},is={__name:"Cart",props:{updateCartItemCount:{type:Function,required:!0},checkout:{type:Function,required:!0},isTakeaway:Boolean},setup(t,{expose:e}){const{locale:s}=ut(),d=Jt(),{t:m}=ut(),r=tt.cartDishs;I.freeCounts;const _=B([]),O=B(),S=B(),F=B(!1),K=B(!1),U=B(!0),z=B(""),D=B("");function Z(i,g,f){let G="";const W=s.value,rt=I.customDishAPI.getCustomDishByName(i);for(const dt of f){const $t=rt.types[g].dishes.find(Bt=>Bt.dishid===dt.id)[`name_${W}`];G=G+$t+"/"}return G}function E(i,g){const f=s.value;return I.customDishAPI.getCustomDishByName(i).types[g][`typeName_${f}`]}const R=(i,g)=>{const f=_.value[i].quantity+g;f>=0&&(_.value[i].quantity=f,ot.updateCartItemCount(g))};function P(i){i&&O.value&&(O.value.dishNote=S.value?S.value:void 0),K.value=!1}function Q(){S.value&&(S.value=void 0),O.value&&(O.value=void 0)}function nt(i){O.value=i,S.value=O.value.dishNote?O.value.dishNote:void 0,K.value=!0}const ot=t;e({showDishList:i=>{F.value=!0,_.value.length=0;for(let g=0;g<i.length;g++)_.value.push(i[g]);U.value=_.value.length==0&&r.length==0}});function L(i){tt.removeItem(i)}function h(){ot.isTakeaway?at():$()}function at(){const i=[];r.value.forEach(g=>{i.push(g)}),_.value.forEach(g=>{g.quantity>0&&i.push(g)}),i.length<=0?et.show_warn(m("notification.select_at_least_one")):(F.value=!1,d.push({path:"/paymentPage"}))}function $(){ot.checkout({name:z.value,note:D.value})&&(F.value=!1),r.value.forEach(i=>{i.dishNote=void 0}),_.value.forEach(i=>{i.dishNote=void 0}),D.value="",st.cleanDishDataQty(),localStorage.removeItem("order_cartDishs"),localStorage.removeItem("order_dishDatas")}function v(i){return i.subname!=""&&i.subname!="Default Title"?i.name+" "+i.subname:i.name}function b(){let i=0;return r.value.forEach(g=>{i+=g.dis_price?g.dis_price*g.count:g.price*g.count}),_.value.forEach(g=>{i+=g.dis_price?g.dis_price*g.quantity:g.price*g.quantity}),"€"+i.toFixed(2)}const C=i=>{i.target.src="/images/default.png"},A=i=>{const g=i.quantity;let f=3;return i.price>0&&(f=9),g>=f};return(i,g)=>(n(),c(H,null,[k(l(gt),{class:"bg-primary-reverse text-sm md:text-lg lg:text-xl",visible:F.value,"onUpdate:visible":g[2]||(g[2]=f=>F.value=f),modal:"",header:i.$t("common.cart"),style:Dt([{backgroundColor:"rgba(250, 250, 250, 1)",height:"100%",minWidth:"24rem"},{width:"80vw","max-width":"700px"}]),dismissableMask:!0},{footer:q(()=>[a("div",as,[a("span",ss,u(i.$t("common.total"))+": ",1),a("span",ns,u(b()),1),k(l(j),{icon:t.isTakeaway?"pi pi-wallet":"pi pi-plus",class:"p-button-success p-button-rounded ml-3",onClick:h,label:t.isTakeaway?l(m)("common.pay"):l(m)("common.send")},null,8,["icon","label"])])]),default:q(()=>[U.value?(n(),c("h2",Ba,"Cart is empty.")):x("",!0),a("div",Aa,[(n(!0),c(H,null,Y(l(r),(f,G)=>(n(),X(l(_e),{style:{overflow:"hidden"},key:G},{title:q(()=>[mt(u(i.$t(`common.${f.name.replace(/[^a-zA-Z0-9\s]/g,"").toLowerCase().replace(/\s+/g,"")}`)),1)]),subtitle:q(()=>[mt(u(i.$t("common.price"))+" : "+u(f.price)+"€",1)]),content:q(()=>[l(I).customDishAPI.customDishes.value.find(W=>W.name==f.name)?(n(),c("div",La,[(n(!0),c(H,null,Y(f.notesAndId,(W,rt)=>(n(),c("div",null,[f.notesAndId[rt].length!==0?(n(),c("span",za,u(E(f.name,rt))+": "+u(Z(f.name,rt,W)),1)):x("",!0)]))),256)),a("div",null,[f.dishNote?(n(),c("span",qa,u(i.$t("common.note"))+": "+u(f.dishNote),1)):x("",!0)])])):x("",!0)]),footer:q(()=>[a("div",Oa,[t.isTakeaway?x("",!0):(n(),X(l(j),{key:0,label:l(m)("common.edit")+" "+l(m)("common.note"),severity:"contrast",onClick:W=>nt(f)},null,8,["label","onClick"])),k(l(j),{label:l(m)("common.remove"),severity:"danger",onClick:W=>L(f)},null,8,["label","onClick"])])]),_:2},1024))),128)),(n(!0),c(H,null,Y(_.value,(f,G)=>(n(),c("div",{key:G,class:"p-2 border-round shadow-1 transition-all transition-duration-200 hover:shadow-3 flex flex-column gap-1"},[a("div",Ea,[a("img",{src:f.image,alt:f.name,class:"w-4rem h-4rem border-round flex-shrink-0",onError:C,style:{"object-fit":"cover","min-width":"4rem"}},null,40,Ra),a("div",Va,[a("div",Fa,[a("div",ja,[a("span",Ma,u(v(f)),1)])]),a("div",Ka,[f.dis_price?(n(),c("span",Wa,"€"+u(f.dis_price),1)):x("",!0),!f.dis_price&&f.price>0?(n(),c("span",Ha,"€"+u(f.price),1)):x("",!0),f.price>0?(n(),c("span",Ua,"/uni.")):x("",!0)])])]),a("div",null,[f.dishNote?(n(),c("span",Qa,u(l(m)("common.note")+": "+f.dishNote),1)):x("",!0)]),a("div",Ja,[a("div",Ga,[t.isTakeaway?x("",!0):(n(),X(l(j),{key:0,label:l(m)("common.edit")+" "+l(m)("common.note"),severity:"contrast",class:"w-3.5rem h-2rem",onClick:W=>nt(f)},null,8,["label","onClick"]))]),a("div",Xa,[k(l(j),{icon:"pi pi-minus",rounded:"",disabled:f.quantity<=0,onClick:W=>R(G,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),a("span",Ya,u(f.quantity),1),k(l(j),{icon:"pi pi-plus",rounded:"",disabled:A(f),onClick:W=>R(G,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])])]))),128))]),t.isTakeaway?x("",!0):(n(),c("div",Za,[k(l(Kt),{variant:"in"},{default:q(()=>[k(l(Yt),{id:"in_label",modelValue:z.value,"onUpdate:modelValue":g[0]||(g[0]=f=>z.value=f),variant:"filled",maxlength:"20"},null,8,["modelValue"]),a("label",ts,u(l(m)("common.name")),1)]),_:1}),k(l(Kt),{variant:"in"},{default:q(()=>[k(l(Rt),{id:"in_label",class:"min-w-full",rows:"5",modelValue:D.value,"onUpdate:modelValue":g[1]||(g[1]=f=>D.value=f),variant:"filled",maxlength:"200"},null,8,["modelValue"]),a("label",es,u(l(m)("common.observation")),1)]),_:1})]))]),_:1},8,["visible","header"]),k(l(gt),{visible:K.value,"onUpdate:visible":g[6]||(g[6]=f=>K.value=f),header:l(m)("common.note"),onHide:g[7]||(g[7]=f=>Q()),modal:"",dismissableMask:!0},{default:q(()=>[k(l(Rt),{modelValue:S.value,"onUpdate:modelValue":g[3]||(g[3]=f=>S.value=f),rows:"5",cols:"30",placeholder:l(m)("common.edit")+" "+l(m)("common.note")+"...",maxlength:"100"},null,8,["modelValue","placeholder"]),a("div",os,[k(l(j),{label:l(m)("common.cancel"),severity:"danger",onClick:g[4]||(g[4]=f=>P(!1))},null,8,["label"]),k(l(j),{label:l(m)("common.save"),severity:"primary",size:"sm",onClick:g[5]||(g[5]=f=>P(!0))},null,8,["label"])])]),_:1},8,["visible","header"])],64))}},ls=kt(is,[["__scopeId","data-v-483203ce"]]);var rs=Nt`
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
`,cs={root:"p-overlaybadge"},us=pt.extend({name:"overlaybadge",style:rs,classes:cs}),ds={name:"OverlayBadge",extends:Zt,style:us,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},ee={name:"OverlayBadge",extends:ds,inheritAttrs:!1,components:{Badge:Zt}};function ps(t,e,s,d,m,r){var _=ce("Badge");return n(),c("div",M({class:t.cx("root")},t.ptmi("root")),[ct(t.$slots,"default"),k(_,M(t.$props,{pt:t.ptm("pcBadge")}),null,16,["pt"])],16)}ee.render=ps;B([]);B("iniImages()");const fs={class:"m-3"},vs={class:"flex flex-column gap-2"},hs={class:"w-full flex justify-content-center"},ms={key:0,class:"max-w-19rem"},bs=["src"],gs={style:{width:"300px",height:"300px",background:"url(/boxImage/box.png)"}},ys={key:0,class:"flex align-items-center justify-content-center text-4xl font-bold text-white w-full h-full"},_s={key:1,class:"grid m-0 p-2"},ws=["onClick"],ks={class:"flex align-items-center justify-content-center font-bold m-0 p-0",style:{width:"94px",height:"94px"}},$s=["src"],xs={class:"flex flex-wrap justify-content-between align-items-center m-1"},Ts={class:"flex gap-1 align-items-center"},Is={key:0},Cs={class:"font-bold mb-2"},Ds={key:1,class:"flex justify-content-between gap-2 mt-3"},Ss={class:"font-bold mb-2"},Ns={class:"flex mr-2"},Ps={class:"w-3rem text-xl text-center"},Bs={class:"font-bold block mb-2"},As={class:"flex flex-wrap"},Ls={key:2,class:"flex flex-wrap gap-2 mt-3"},zs={class:"font-bold block mb-2"},qs={class:"font-bold block mb-2 text-center"},Os={class:"flex flex-wrap gap-2 mt-3"},Es={__name:"CustomDish",props:{currentCustomDish:Object},emits:["typeClick"],setup(t,{emit:e}){const{locale:s}=ut(),d=t,m=ue(),{t:r}=ut(),_=lt(()=>d.currentCustomDish),O=lt(()=>_.boxImages),S=B(0),F=lt(()=>{let v=_.value.initialPrice;for(const b of _.value.types??[])for(const C of b.dishes??[])C.selected&&(v+=C.price);return Number(v).toFixed(2)}),K=e,U=B(null),z=lt(()=>{const v=s.value,b=`title_${v}`,C=`description_${v}`;return _.value.descriptions.map(A=>({title:A[b],descriptions:A.descriptions.map(i=>i[C]),image:A==null?void 0:A.image}))}),D=lt(()=>{var C,A;const v=Number(((C=_.value)==null?void 0:C.like)??0),b=Number(((A=_.value)==null?void 0:A.rate)??0);return b?v/b*5:0});function Z(v,b){const C=s.value;return v[`${b}_${C}`]}function E(v,b,C){const A=v[b];if(A.selected){A.selected=!1;return}else{const g=v.filter(f=>f.selected).length;if(C===1){h(v),A.selected=!0;return}g<C&&(A.selected=!0)}}function R(v,b,C){const A=v.dishes;K("typeClick",v,b,A[b].selected),E(A,b,C)}function P(v){return v.selected}function Q(){if(!at(_.value.types))return;const v=ot(_.value.types),b=w(_.value.types);tt.addItem({dishid:-1,name:_.value.name,category:d.currentCustomDish.category,count:S.value!==0?S.value:1,price:F.value,notes:v,notesAndId:b}),console.log("CART: ",tt.cartDishs),L(_.value.types),et.show({severity:"info",summary:"info",detail:r("customDishBibimbapVue.addToCartSuccessBibimbap")})}function nt(v){return!v||!v.dishes?"":v.dishes.filter(C=>C.selected).map(C=>C.name).join(",")}function ot(v){return v?v.map(b=>nt(b)):[]}function w(v){return v?v.map(b=>b.dishes?b.dishes.filter(C=>C.selected).map(C=>({id:C.dishid,name:C.name})):[]):[]}function L(v){v&&v.forEach(b=>{b.dishes&&b.dishes.forEach(C=>{C.selected=!1})})}function h(v){v.forEach(b=>b.selected=!1)}function at(v){if(_.value.options.quantity&&S.value<=0)return et.show({severity:"warn",detail:r("notification.quantity_must_be_positive")}),!1;for(const b of v)if(b.dishes.filter(A=>A.selected).length<b.minQuantity){const A=b.typeName;return et.show({severity:"warn",detail:r("notification.select_type_of",{name:A})}),!1}return!0}function $(v){v?I.customDishAPI.like(_.value.id)&&(U.value="like",m.add({severity:"success",summary:r("common.success"),detail:r("common.rate")+" "+r("common.success"),life:750})):I.customDishAPI.unLike(_.value.id)&&(U.value="unlike",m.add({severity:"success",summary:r("common.success"),detail:r("common.rate")+" "+r("common.success"),life:750}))}return(v,b)=>{var C,A;return n(),c("div",fs,[a("div",vs,[k(l(Mt),{class:"w-full max-w-xl mx-auto"},{default:q(()=>[(n(!0),c(H,null,Y(z.value,(i,g)=>(n(),X(l(jt),{key:g,value:g},{default:q(()=>[k(l(Vt),null,{default:q(()=>[mt(u(i.title),1)]),_:2},1024),k(l(Ft),null,{default:q(()=>{var f;return[(n(!0),c(H,null,Y(i.descriptions,(G,W)=>(n(),c("p",{key:W},u(G),1))),128)),a("div",hs,[(f=i.image)!=null&&f.src?(n(),c("div",ms,[a("img",{src:i.image.src,class:"w-full"},null,8,bs)])):x("",!0)])]}),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1}),((A=(C=_.value)==null?void 0:C.value)==null?void 0:A.name)==="MY BOX"?(n(),X(l(Mt),{key:0,class:"w-full max-w-xl mx-auto"},{default:q(()=>[k(l(jt),{value:"0"},{default:q(()=>[k(l(Vt),null,{default:q(()=>[mt(" 🥩 "+u(v.$t("common.showMybox")),1)]),_:1}),k(l(Ft),null,{default:q(()=>[a("div",gs,[v.isEmptyArray(O.value)?(n(),c("div",ys,u(v.$t("common.myboxAlarm")),1)):x("",!0),v.isEmptyArray(O.value)?x("",!0):(n(),c("div",_s,[(n(!0),c(H,null,Y(O.value,i=>(n(),c("div",{class:"col-4 p-0",onClick:g=>v.imageSelectAction(i)},[a("div",ks,[i?(n(),c("img",{key:0,class:"m-0 p-0",src:v.imagePath(i),style:{width:"82px",height:"82px"}},null,8,$s)):x("",!0)])],8,ws))),256))]))])]),_:1})]),_:1})]),_:1})):x("",!0)]),a("div",xs,[a("div",Ts,[(n(),c(H,null,Y(5,i=>a("i",{key:i,class:it(["pi invert-star",i<=Math.floor(D.value)?"pi-star-fill":i-.5<=D.value?"pi-star-half":"pi-star"]),style:{color:"black"}},null,2)),64)),a("p",null,"("+u(_.value.rate?_.value.rate:0)+")",1)]),a("div",null,[k(l(j),{text:"",icon:"pi pi-thumbs-up",severity:U.value==="like"?"success":"",onClick:b[0]||(b[0]=i=>$(!0))},null,8,["severity"]),k(l(j),{text:"",icon:"pi pi-thumbs-down",severity:U.value==="unlike"?"danger":"",onClick:b[1]||(b[1]=i=>$(!1))},null,8,["severity"])])]),_.value.options.extraInfo?(n(),c("div",Is,[a("label",Cs,u(_.value.options.extraInfo),1)])):x("",!0),_.value.options.quantity?(n(),c("div",Ds,[a("div",null,[a("label",Ss,u(v.$t("common.quantity"))+" / "+u(v.$t("common.pieces")),1)]),a("div",Ns,[k(l(j),{icon:"pi pi-minus",disabled:S.value<=0,onClick:b[2]||(b[2]=i=>S.value-=_.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"]),a("span",Ps,u(S.value),1),k(l(j),{icon:"pi pi-plus",disabled:S.value>=_.value.options.maxQuantity,onClick:b[3]||(b[3]=i=>S.value+=_.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"])])])):x("",!0),(n(!0),c(H,null,Y(_.value.types,(i,g)=>(n(),c("div",{key:i.id},[bt(a("div",null,[a("label",Bs,u(g+1)+". "+u(Z(i,"typeName")),1),a("div",As,[(n(!0),c(H,null,Y(i.dishes,(f,G)=>(n(),X(l(j),{key:G,onClick:W=>R(i,G,S.value==0?i.maxQuantity:i.maxQuantity*S.value),class:it([{"p-button-primary":P(f),"p-button-outlined":!P(f)},"m-1"])},{default:q(()=>[a("p",{class:it({"text-gray-700":!P(f)})},u(Z(f,"name")),3)]),_:2},1032,["onClick","class"]))),128))])],512),[[de,i.enable]])]))),128)),t.currentCustomDish.initialPrice!==0?(n(),c("div",Ls,[a("label",zs,u(v.$t("common.price"))+":",1),a("label",qs,u(F.value+"€"),1)])):x("",!0),a("div",Os,[k(l(j),{icon:"pi pi-shopping-cart",onClick:b[4]||(b[4]=i=>Q()),label:v.$t("common.addToCart"),class:"m-3",severity:"primary",raised:""},null,8,["label"])])])}}},Rs=kt(Es,[["__scopeId","data-v-1bbb17dd"]]);var Vs=Nt`
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
`,Fs={root:function(e){var s=e.props;return["p-tabs p-component",{"p-tabs-scrollable":s.scrollable}]}},js=pt.extend({name:"tabs",style:Vs,classes:Fs}),Ms={name:"BaseTabs",extends:wt,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:js,provide:function(){return{$pcTabs:this,$parentInstance:this}}},ae={name:"Tabs",extends:Ms,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function Ks(t,e,s,d,m,r){return n(),c("div",M({class:t.cx("root")},t.ptmi("root")),[ct(t.$slots,"default")],16)}ae.render=Ks;var Ws={root:"p-tablist",content:function(e){var s=e.instance;return["p-tablist-content",{"p-tablist-viewport":s.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Hs=pt.extend({name:"tablist",classes:Ws}),Us={name:"BaseTabList",extends:wt,props:{},style:Hs,provide:function(){return{$pcTabList:this,$parentInstance:this}}},se={name:"TabList",extends:Us,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,s=this.getVisibleButtonWidths(),d=Lt(e)-s,m=Math.abs(e.scrollLeft),r=d*.8,_=m-r,O=Math.max(_,0);e.scrollLeft=Et(e)?-1*O:O},onNextButtonClick:function(){var e=this.$refs.content,s=this.getVisibleButtonWidths(),d=Lt(e)-s,m=Math.abs(e.scrollLeft),r=d*.8,_=m+r,O=e.scrollWidth-d,S=Math.min(_,O);e.scrollLeft=Et(e)?-1*S:S},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,s=e.content,d=e.inkbar,m=e.tabs;if(d){var r=zt(s,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(d.style.height=fe(r)+"px",d.style.top=It(r).top-It(m).top+"px"):(d.style.width=ve(r)+"px",d.style.left=It(r).left-It(m).left+"px")}},updateButtonState:function(){var e=this.$refs,s=e.list,d=e.content,m=d.scrollTop,r=d.scrollWidth,_=d.scrollHeight,O=d.offsetWidth,S=d.offsetHeight,F=Math.abs(d.scrollLeft),K=[Lt(d),pe(d)],U=K[0],z=K[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=m!==0,this.isNextButtonEnabled=s.offsetHeight>=S&&parseInt(m)!==_-z):(this.isPrevButtonEnabled=F!==0,this.isNextButtonEnabled=s.offsetWidth>=O&&parseInt(F)!==r-U)},getVisibleButtonWidths:function(){var e=this.$refs,s=e.prevButton,d=e.nextButton,m=0;return this.showNavigators&&(m=((s==null?void 0:s.offsetWidth)||0)+((d==null?void 0:d.offsetWidth)||0)),m}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return Pt({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:we,ChevronRightIcon:ke},directives:{ripple:Gt}},Qs=["data-p"],Js=["aria-label","tabindex"],Gs=["data-p"],Xs=["aria-orientation"],Ys=["aria-label","tabindex"];function Zs(t,e,s,d,m,r){var _=St("ripple");return n(),c("div",M({ref:"list",class:t.cx("root"),"data-p":r.dataP},t.ptmi("root")),[r.showNavigators&&m.isPrevButtonEnabled?bt((n(),c("button",M({key:0,ref:"prevButton",type:"button",class:t.cx("prevButton"),"aria-label":r.prevButtonAriaLabel,tabindex:r.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return r.onPrevButtonClick&&r.onPrevButtonClick.apply(r,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(n(),X(ht(r.templates.previcon||"ChevronLeftIcon"),M({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,Js)),[[_]]):x("",!0),a("div",M({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return r.onScroll&&r.onScroll.apply(r,arguments)}),"data-p":r.dataP},t.ptm("content")),[a("div",M({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":r.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[ct(t.$slots,"default"),a("span",M({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,Xs)],16,Gs),r.showNavigators&&m.isNextButtonEnabled?bt((n(),c("button",M({key:1,ref:"nextButton",type:"button",class:t.cx("nextButton"),"aria-label":r.nextButtonAriaLabel,tabindex:r.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return r.onNextButtonClick&&r.onNextButtonClick.apply(r,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(n(),X(ht(r.templates.nexticon||"ChevronRightIcon"),M({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,Ys)),[[_]]):x("",!0)],16,Qs)}se.render=Zs;var tn={root:function(e){var s=e.instance,d=e.props;return["p-tab",{"p-tab-active":s.active,"p-disabled":d.disabled}]}},en=pt.extend({name:"tab",classes:tn}),an={name:"BaseTab",extends:wt,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:en,provide:function(){return{$pcTab:this,$parentInstance:this}}},ne={name:"Tab",extends:an,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var s=this.findNextTab(e.currentTarget);s?this.changeFocusedTab(e,s):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var s=this.findPrevTab(e.currentTarget);s?this.changeFocusedTab(e,s):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var s=this.findFirstTab();this.changeFocusedTab(e,s),e.preventDefault()},onEndKey:function(e){var s=this.findLastTab();this.changeFocusedTab(e,s),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findNextTab:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=s?e:e.nextElementSibling;return d?Ct(d,"data-p-disabled")||Ct(d,"data-pc-section")==="activebar"?this.findNextTab(d):zt(d,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=s?e:e.previousElementSibling;return d?Ct(d,"data-p-disabled")||Ct(d,"data-pc-section")==="activebar"?this.findPrevTab(d):zt(d,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,s){me(s),this.scrollInView(s)},scrollInView:function(e){var s;e==null||(s=e.scrollIntoView)===null||s===void 0||s.call(e,{block:"nearest"})}},computed:{active:function(){var e;return he((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},attrs:function(){return M(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return Pt({active:this.active})}},directives:{ripple:Gt}};function sn(t,e,s,d,m,r){var _=St("ripple");return t.asChild?ct(t.$slots,"default",{key:1,dataP:r.dataP,class:it(t.cx("root")),active:r.active,a11yAttrs:r.a11yAttrs,onClick:r.onClick}):bt((n(),X(ht(t.as),M({key:0,class:t.cx("root"),"data-p":r.dataP,onClick:r.onClick},r.attrs),{default:q(function(){return[ct(t.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[_]])}ne.render=sn;const nn={class:"fixed top-0 left-0 w-full bg-primary-reverse",style:{"z-index":"10"}},on={class:"grid mt-3 ml-3"},ln={class:"max-w-5rem flex align-items-center"},rn=["src"],cn={class:"flex align-items-center"},un={key:0,class:"text-color font-bold p-1"},dn={key:1,class:"text-color font-bold p-1"},pn={class:"card flex mr-3",style:{"margin-left":"auto"}},fn={style:{display:"flex","align-items":"center"}},vn={style:{"flex-grow":"1",width:"0",overflow:"hidden"}},hn={class:"mt-2"},mn={class:"flex justify-content-end mt-2"},bn={__name:"HeaderTabs",props:{types:Array,typeIndex:Number,tableId:String,tabItems:Array},emits:["clickType","switchToWelcome"],setup(t,{emit:e}){const{t:s}=ut();function d(){var Q;const R=I.currentPage.value,P=(Q=R==null?void 0:R.data)==null?void 0:Q.logoPath;return P?I.pathFormated(P,R.imagesPath):"/images/logo_logo.png"}function m(){return I.getTable()}const r=B(),_=lt(()=>[{label:s("common.options"),items:[{label:s("common.pay"),icon:"pi pi-wallet",command:()=>{D()}},{label:s("common.call"),icon:"pi pi-user-plus",command:()=>{I.send_cmd(m(),{cmd:"call"}),et.show_info(s("notification.call_msg"))}}]}]),O=R=>{r.value.toggle(R)},S=R=>{F.value.toggle(R)},F=B(),K=B(!1),U=B(),z=B();function D(){K.value=!0}function Z(){R(U.value)?I.send_cmd(m(),{cmd:"pay",nif:U.value,note:z.value},P=>{P.success?(et.show_info(s("notification.pay_msg")),K.value=!1):et.show_error(s("common.failed"))}):et.show_warn(s("notification.cancel_msg"));function R(P){return!P||P.toString().length===9||P.toString().length===0}}function E(){z.value&&(z.value=void 0)}return(R,P)=>(n(),c(H,null,[a("div",nn,[a("div",on,[a("div",ln,[a("img",{src:d(),class:"w-full",clickble:"",onClick:P[0]||(P[0]=()=>R.$emit("switchToWelcome"))},null,8,rn)]),a("div",cn,[t.tableId?(n(),c("p",un,u(R.$t("common.table"))+": "+u(t.tableId),1)):x("",!0),t.tableId?x("",!0):(n(),c("p",dn,u(R.$t("common.takeAway")),1))]),a("div",pn,[t.tableId?(n(),X(l(j),{key:0,icon:"pi pi-bell",rounded:"","aria-label":"Filter",onClick:O,"aria-haspopup":"true","aria-controls":"overlay_menu"})):x("",!0),k(l(Wt),{ref_key:"menu",ref:r,id:"overlay_menu",model:_.value,popup:!0},null,8,["model"])])]),a("div",fn,[a("div",null,[k(l(j),{icon:"pi pi-bars",variant:"text",rounded:"","aria-label":"Filter",onClick:S,"aria-haspopup":"true","aria-controls":"tab_menu"}),k(l(Wt),{ref_key:"tabMenu",ref:F,id:"tab_menu",model:t.tabItems,popup:!0},null,8,["model"])]),a("div",vn,[k(l(ae),{value:t.typeIndex,scrollable:"",showNavigators:!1},{default:q(()=>[k(l(se),null,{default:q(()=>[(n(!0),c(H,null,Y(t.types,(Q,nt)=>(n(),X(l(ne),{value:nt,onClick:()=>R.$emit("clickType",nt),class:"text-sm md:text-lg lg:text-xl"},{default:q(()=>[mt(u(Q),1)]),_:2},1032,["value","onClick"]))),256))]),_:1})]),_:1},8,["value"])])])]),k(l(gt),{visible:K.value,"onUpdate:visible":P[4]||(P[4]=Q=>K.value=Q),header:"结账",class:"flex flex-column",modal:!0,dismissableMask:!0,onHide:E},{default:q(()=>[a("div",null,[P[5]||(P[5]=a("label",null,"NIF:",-1)),k(l($e),{modelValue:U.value,"onUpdate:modelValue":P[1]||(P[1]=Q=>U.value=Q),inputId:"withoutgrouping",useGrouping:!1,fluid:"",class:"w-full m-1"},null,8,["modelValue"])]),a("div",hn,[a("label",null,u(R.$t("common.note"))+":",1),k(l(Yt),{type:"text",modelValue:z.value,"onUpdate:modelValue":P[2]||(P[2]=Q=>z.value=Q),class:"w-full m-1"},null,8,["modelValue"])]),a("div",mn,[k(l(j),{label:l(s)("common.send"),onClick:P[3]||(P[3]=Q=>Z())},null,8,["label"])])]),_:1},8,["visible"])],64))}},gn={__name:"SwipeHint",props:{size:{type:String,default:"8rem"},duration:{type:Number,default:6e3},position:{type:String,default:"bottom"}},setup(t){const e=t,s=B(!0);Xt(()=>{e.duration>0&&setTimeout(()=>{s.value=!1},e.duration);const m=()=>{s.value=!1,window.removeEventListener("touchstart",m)};window.addEventListener("touchstart",m)});const d=lt(()=>{let m={left:"50%",transform:"translateX(-50%)",zIndex:99999,opacity:.5,pointerEvents:"none",textAlign:"center",position:"fixed"};return e.position==="top"?m.top="15%":e.position==="center"?(m.top="50%",m.transform="translate(-50%, -50%)"):m.bottom="15%",m});return(m,r)=>s.value?(n(),c("div",{key:0,class:"swipe-hint",style:Dt(d.value)},[a("div",{class:"hand",style:Dt({width:t.size,height:t.size,backgroundImage:"url(/images/hand_finger.png)"})},null,4)],4)):x("",!0)}},yn=kt(gn,[["__scopeId","data-v-e5f3ff45"]]),_n={class:"w-full h-full flex flex-column"},wn={style:{"overflow-x":"hidden","touch-action":"pan-y"},class:"h-full"},kn={class:"fixed bottom-0 left-0 w-full h-3rem bg-primary-reverse p-3"},$n={class:"h-full flex align-items-center justify-content-between w-full"},xn={class:"m-2"},Tn={class:"m-2"},In={style:{"max-height":"60vh","overflow-y":"auto","padding-bottom":"60px"}},Cn={class:"flex flex-column border-bottom-1"},Dn={key:0,class:"flex justify-content-between"},Sn={class:"flex flex-column"},Nn={class:"font-bold"},Pn={class:"text-right"},Bn={key:1,class:"flex justify-content-between"},An={class:"flex flex-column"},Ln={class:"font-bold"},zn={class:"text-right"},qn={key:0},On={key:1,class:"flex flex-column"},En={class:"flex flex-column"},Rn={class:"font-bold"},Vn={class:"text-right"},Fn={class:"total-footer bg-primary-reverse"},Ut=2,Qt="order_time_key",jn={__name:"HomePage",setup(t){const e=Jt(),s=ye(),{t:d}=ut(),{locale:m}=ut(),r=B(0),_=B(!1),O=B([""]),S=B(0),F=tt.cartItemCount,K=B(!1),U=B([]),z=B(0),D=B({}),Z=B(!1),E=st.dishDatas,R=B(null),P=B(null),Q=B([]),nt=B([]),ot=()=>{S.value<O.value.length-1&&(S.value++,dt(),b(S.value))},w=()=>{S.value>0&&(S.value--,dt(),b(S.value))};function L(o){F.value=F.value+o}const h=(o,p,y,N)=>{I.rateDish(o,p,y),N&&et.show_success(d("notification.rating_submitted"))},at=(o,p,y)=>{if(D.value.name=="XIAOXIONG® RAMEN"&&o.id===1){const N=o.dishes[p];let T;N.dishid==47?y?T=$(3,!0,1):T=$(3,!1,1):T=$(3,!0,1),T!==void 0&&v(T)}if(console.log("aaaaaaaaa: ",o),D.value.name=="Menu Almoço"&&o.id===3){const N=o.dishes[p];let T;[1427,41].includes(N.dishid)?y?T=$(4,!0,0):T=$(4,!1,0):T=$(4,!0,0),T!==void 0&&v(T)}};function $(o,p,y){if(D.value={...D.value,types:D.value.types.map(N=>N.id===o?{...N,enable:p,minQuantity:p?y:0}:N)},p===!1)return o}function v(o){!D.value||!Array.isArray(D.value.types)||(D.value={...D.value,types:D.value.types.map(p=>p.id===o?{...p,dishes:p.dishes.map(y=>({...y,selected:!1}))}:p)})}function b(o){let p=I.getOrderMenuTab()[o];if(I.customDishAPI.customDishes.value.map(V=>V.name).includes(p)?(Z.value=!0,D.value=I.customDishAPI.customDishes.value.find(V=>V.name==p)):Z.value=!1,I.getMenu().length==0){console.log("exit");return}let T=E.value[o].mainDishes;st.showDishList(T)}const C=()=>{I.refreshTableFromServer(),I.getTableTotalAmount(z),K.value=!0},A=(o,p,y)=>{const N=E.value.find(T=>T.id===o);N&&(N.likes=p,N.rates=y)},i=o=>{let p=o.id;o.org_id&&(p=o.org_id);for(let y=0;y<E.value.length;y++)if(E.value[y].id==p)for(const N in o){let T=N;N.startsWith("note")&&(T=T.replace("note","description")),E.value[y][T]=o[N]}};function g(){return new Promise(o=>{let p=()=>{const y=I.formatedMenu.value;y.length>0?o(y):setTimeout(p,200)};p()})}function f(){return new Promise(o=>{let p=()=>{const y=I.getOrderMenuTab();y.length>0?o(y):setTimeout(p,200)};p()})}const G=lt(()=>{const o=m.value;return I.formatedMenu.value.map(N=>({...N,mainDishes:N.dishes.map(T=>{const V=T.dish,J={...V,defaultName:V.name,name:W(V,"name",o),note:W(V,"note",o),subname:W(V,"subname",o),quantity:0},ft=T.subItems.map(Tt=>{const At=Tt;return{...Tt,defaultName:V.name,name:W(At,"name",o),note:W(At,"note",o),subname:W(At,"subname",o),quantity:0}});return{...T,dish:J,subItems:ft}})}))});function W(o,p,y){return o?y==="en"?o[`${p}_en`]||o[p]:y==="zh"&&o[`${p}_cn`]||o[p]:""}async function rt(){await g();const o=await f();E.value=G.value,O.value=I.orderMenuTab;let p=I.isTakeaway();I.onMenuItemChanged=i,I.onRatingChanged=A;let y=0;if(!p){const N=localStorage.getItem("cartDish_custom");if(N&&N!=="undefined")try{tt.cartDishs.value=JSON.parse(N),y+=tt.cartDishs.value.length}catch(V){console.error("解析自定义菜失败:",V),tt.cartDishs.value=[]}const T=localStorage.getItem("cartDish_normal");if(T&&T!=="undefined")try{const V=JSON.parse(T);st.updateDishDataQty(V);const J=V.reduce((ft,Tt)=>ft+(Tt.quantity||0),0);y+=J}catch(V){console.error("解析普通菜失败:",V)}tt.cartItemCount.value=y}for(let N=0;N<o.length;N++){const T=N;U.value.push({label:o[N],command:()=>{$t(T),dt()}})}r.value++}const dt=()=>{ge(()=>{const o=document.querySelector(".p-tablist-viewport"),p=document.querySelector(".p-tab.p-tab-active");if(o&&p){const y=p.offsetLeft-o.offsetWidth/2+p.offsetWidth/2;o.scrollTo({left:y,behavior:"smooth"})}})},$t=o=>{b(o),S.value=o,dt()},Bt=()=>{var o=st.getAllIncrementedDish();P.value.showDishList(o)};function xt(){return I.getTable()}I.params.port,R.value=I.table.value.order;function oe(o){var p=d("notification.too_fast",{remainTime:o});et.show_warn(p)}const ie=o=>{const p=[];for(let J=0;J<tt.cartDishs.value.length;J++){var y=tt.cartDishs.value[J];p.push({dishid:y.dishid,name:y.name,quantity:y.count,notes:y.notes,limit:y.limit,price:y.dis_price?y.dis_price:y.price,dishNote:y.dishNote,category:y.category})}const N=st.getAllIncrementedDish();for(let J=0;J<N.length;J++){var y=N[J];console.log("id cartDishs ;  ; : ",y),y.quantity>0&&p.push({dishid:y.id,name:y.defaultName,quantity:y.quantity,limit:y.limit,price:y.dis_price?y.dis_price:y.price,dishNote:y.dishNote})}if(p.length===0)return et.show_warn(d("notification.select_at_least_one")),!1;console.log("cart item:",p);const T=JSON.parse(localStorage.getItem(Qt)||"{}"),V=Date.now();if(!T.startTime||V-T.startTime>Ut*1e3)T.startTime=V;else{const J=Ut-parseInt((V-T.startTime)/1e3);oe(J);return}return localStorage.setItem(Qt,JSON.stringify(T)),_.value=!0,I.submit_order({name:o.name,note:o.note,table:xt(),items:p}),!0};function le(){const o=localStorage.getItem("language");o&&(m.value=o)}function qt(){for(let o=0;o<E.value.length;o++){const p=E.value[o];p.quantity=0}_.value=!1,F.value=0,tt.cartDishs.value.length=0}Xt(async()=>{le(),await rt(),b(S.value),I.clear_order_data=()=>{qt()},I.setOnOrderConfirmed(o=>{console.log("setOnOrderConfirmed..."),qt();const p=o;et.show_success(d("notification.order_submitted",{id:p}))}),I.setOnShowError(o=>{_.value=!1,et.show_error(o)})});function re(){localStorage.removeItem("login_time");const o=s.query.table;o?e.push({path:"/",query:{table:o}}):e.push({path:"/takeReserve"})}function Ot(){const o=st.getAllIncrementedDish();localStorage.setItem("cartDish_normal",JSON.stringify(o));const p=tt.cartDishs.value;localStorage.setItem("cartDish_custom",JSON.stringify(p))}return be(()=>{Ot()}),window.addEventListener("beforeunload",o=>{I.cleanup(),Ot()}),(o,p)=>{const y=St("touch"),N=St("touch-options");return n(),c(H,null,[a("div",_n,[(n(),X(bn,{key:r.value,types:l(I).orderMenuTab,typeIndex:S.value,tabItems:U.value,tableId:xt(),onClickType:$t,onSwitchToWelcome:re},null,8,["types","typeIndex","tabItems","tableId"])),p[2]||(p[2]=a("div",{class:"pb-8"},null,-1)),p[3]||(p[3]=a("div",{class:"pb-7 sm:pb-7 md:pb-7 lg:pb-7"},null,-1)),k(yn,{duration:"3000",position:"center",size:"3rem"}),bt((n(),c("div",wn,[Z.value?(n(),X(Rs,{key:0,currentCustomDish:D.value,onTypeClick:at},null,8,["currentCustomDish"])):(n(),X(Pa,{key:1,updateCartItemCount:L,rateDish:h,likedItemsRef:Q.value,dislikedItemsRef:nt.value},null,8,["likedItemsRef","dislikedItemsRef"]))])),[[y,ot,"swipe",{left:!0,passive:!0}],[y,w,"swipe",{right:!0,passive:!0}],[N,{swipeTolerance:100}]]),p[4]||(p[4]=a("div",{class:"pb-6"},null,-1)),a("div",kn,[a("div",$n,[a("div",xn,[xt()?(n(),X(l(j),{key:0,label:o.$t("common.orders"),icon:"pi pi-list",class:"p-button-secondary",onClick:C},null,8,["label"])):x("",!0)]),a("div",Tn,[k(l(ee),{value:l(F),severity:"danger",onClick:Bt},{default:q(()=>p[1]||(p[1]=[a("i",{class:"pi pi-shopping-cart",style:{"font-size":"2rem"}},null,-1)])),_:1,__:[1]},8,["value"])])])])]),k(ls,{ref_key:"cartRef",ref:P,updateCartItemCount:L,checkout:ie,isTakeaway:!xt()},null,8,["isTakeaway"]),k(l(gt),{visible:K.value,"onUpdate:visible":p[0]||(p[0]=T=>K.value=T),header:o.$t("common.completedOrders"),modal:"",style:{width:"80vw","max-width":"700px"}},{default:q(()=>{var T,V;return[a("div",In,[a("div",Cn,[(T=z.value.adultPrice)!=null&&T.quantity&&z.value.adultPrice.quantity!=0?(n(),c("div",Dn,[a("div",Sn,[a("span",Nn,u(o.$t("common.adult")),1),a("small",null,u(o.$t("common.quantity"))+": "+u(z.value.adultPrice.quantity),1)]),a("div",Pn,[a("span",null,"€"+u((Number(z.value.adultPrice.price)*z.value.adultPrice.quantity).toFixed(2)),1)])])):x("",!0),(V=z.value.childrenPrice)!=null&&V.quantity&&z.value.childrenPrice.quantity!=0?(n(),c("div",Bn,[a("div",An,[a("span",Ln,u(o.$t("common.children")),1),a("small",null,u(o.$t("common.quantity"))+": "+u(z.value.childrenPrice.quantity),1)]),a("div",zn,[a("span",null,"€"+u((Number(z.value.childrenPrice.price)*z.value.childrenPrice.quantity).toFixed(2)),1)])])):x("",!0)]),l(I).table.value.order.length===0?(n(),c("div",qn,u(o.$t("common.noOrders")),1)):(n(),c("div",On,[(n(!0),c(H,null,Y(l(I).table.value.order,(J,ft)=>(n(),c("div",{key:ft,class:"flex justify-content-between border-bottom-1 pb-2"},[a("div",En,[a("span",Rn,u(l(I).getDishName(J)),1),a("small",null,u(o.$t("common.quantity"))+": "+u(J.quantity),1)]),a("div",Vn,[a("span",null,"€"+u((J.price*J.quantity).toFixed(2)),1)])]))),128))]))]),a("div",Fn,u(o.$t("common.total"))+": €"+u(z.value.total),1)]}),_:1},8,["visible","header"])],64)}}},Zn=kt(jn,[["__scopeId","data-v-aec5bbfe"]]);export{Zn as default};
