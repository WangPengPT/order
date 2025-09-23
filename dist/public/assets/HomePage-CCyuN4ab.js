import{v as It,B as bt,x as Dt,y as St,f as d,p as l,q as et,i as _,z as ht,A as E,C as $t,h as s,t as f,n as lt,r as S,g as y,F as J,l as Y,k as p,a as x,j as z,D as Nt,u as gt,s as xt,e as ee,E as pe,G as fe,c as vt,w as ve,m as nt,R as ae,H as Et,I as he,J as Vt,K as be,L as Bt,M as me,N as Kt,O as Lt,P as At,Q as ge,S as ye,T as zt,o as se,b as $e,U as xe,V as we,d as _e}from"./index-B5ws6k2U.js";import{s as wt,a as ke,b as ne}from"./index-DEP55YjW.js";import{s as W,a as ie}from"./index-CB4SD1mq.js";import{D as K,c as tt,s as Te}from"./index-XC_SI1hb.js";import{_ as Ct,b as Wt,c as Ht,a as Ut,s as Qt}from"./_plugin-vue_export-helper-sckIasdz.js";import{s as Ie}from"./index-ClN4hT9C.js";import{s as Jt,a as De}from"./index-C6z27Qtw.js";import{s as Se}from"./index-BQUWDY5D.js";import{s as Xt}from"./index-Cs5peMtK.js";import"./index-CSigum3P.js";var Ce=It`
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
`,Pe={root:function(e){var i=e.props;return["p-tag p-component",{"p-tag-info":i.severity==="info","p-tag-success":i.severity==="success","p-tag-warn":i.severity==="warn","p-tag-danger":i.severity==="danger","p-tag-secondary":i.severity==="secondary","p-tag-contrast":i.severity==="contrast","p-tag-rounded":i.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Be=bt.extend({name:"tag",style:Ce,classes:Pe}),ze={name:"BaseTag",extends:Dt,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Be,provide:function(){return{$pcTag:this,$parentInstance:this}}};function _t(t){"@babel/helpers - typeof";return _t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_t(t)}function Ne(t,e,i){return(e=Le(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Le(t){var e=Ae(t,"string");return _t(e)=="symbol"?e:e+""}function Ae(t,e){if(_t(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var u=i.call(t,e);if(_t(u)!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var yt={name:"Tag",extends:ze,inheritAttrs:!1,computed:{dataP:function(){return St(Ne({rounded:this.rounded},this.severity,this.severity))}}},qe=["data-p"];function Oe(t,e,i,u,g,o){return l(),d("span",E({class:t.cx("root"),"data-p":o.dataP},t.ptmi("root")),[t.$slots.icon?(l(),et($t(t.$slots.icon),E({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(l(),d("span",E({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):_("",!0),t.value!=null||t.$slots.default?ht(t.$slots,"default",{key:2},function(){return[s("span",E({class:t.cx("label")},t.ptm("label")),f(t.value),17)]}):_("",!0)],16,qe)}yt.render=Oe;var Re=It`
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
`,Ee={root:function(e){var i=e.props;return["p-avatar p-component",{"p-avatar-image":i.image!=null,"p-avatar-circle":i.shape==="circle","p-avatar-lg":i.size==="large","p-avatar-xl":i.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Ve=bt.extend({name:"avatar",style:Re,classes:Ee}),je={name:"BaseAvatar",extends:Dt,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ve,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function kt(t){"@babel/helpers - typeof";return kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kt(t)}function Gt(t,e,i){return(e=Fe(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Fe(t){var e=Me(t,"string");return kt(e)=="symbol"?e:e+""}function Me(t,e){if(kt(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var u=i.call(t,e);if(kt(u)!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var oe={name:"Avatar",extends:je,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}},computed:{dataP:function(){return St(Gt(Gt({},this.shape,this.shape),this.size,this.size))}}},Ke=["aria-labelledby","aria-label","data-p"],We=["data-p"],He=["data-p"],Ue=["src","alt","data-p"];function Qe(t,e,i,u,g,o){return l(),d("div",E({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root"),{"data-p":o.dataP}),[ht(t.$slots,"default",{},function(){return[t.label?(l(),d("span",E({key:0,class:t.cx("label")},t.ptm("label"),{"data-p":o.dataP}),f(t.label),17,We)):t.$slots.icon?(l(),et($t(t.$slots.icon),{key:1,class:lt(t.cx("icon"))},null,8,["class"])):t.icon?(l(),d("span",E({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon"),{"data-p":o.dataP}),null,16,He)):t.image?(l(),d("img",E({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return o.onError&&o.onError.apply(o,arguments)})},t.ptm("image"),{"data-p":o.dataP}),null,16,Ue)):_("",!0)]})],16,Ke)}oe.render=Qe;const Je={class:"grid"},Xe={class:"flex flex-column"},Ge=["onClick"],Ye={class:"p-1 flex-shrink-0 w-7rem h-7rem flex align-items-center justify-content-center overflow-hidden"},Ze=["src","alt"],ta={class:"flex flex-column justify-content-center"},ea={class:"font-bold"},aa={class:"flex flex-wrap gap-2"},sa={class:"flex gap-1 align-items-center"},na={class:"text-color-secondary line2"},ia={key:0,class:"text-xl font-bold text-primary"},oa={key:1,class:"flex align-items-center gap-1"},ra={class:"text-l font-bold text-color-secondary"},la={class:"text-sm line-through text-500"},ua={key:2,class:"flex gap-2 mr-2",id:"card-quantity"},da={class:"w-2rem text-xl text-center"},ca={key:3,class:"flex gap-2 mr-2"},pa={key:0,class:"m-2 mt-0"},fa={class:"flex flex-row justify-content-between align-content-center"},va={class:"flex flex-column"},ha={class:"text-l font-bold"},ba={key:0,class:"text-l font-bold text-color-secondary"},ma={key:1,class:"flex align-items-center gap-1"},ga={class:"text-l font-bold text-color-secondary"},ya={class:"text-sm line-through text-500"},$a={key:0,class:"flex ml-2 mr-2"},xa={class:"w-2rem text-xl text-center"},wa={key:1,class:"flex gap-2 mr-3 pt-2 pb-2"},_a={class:"max-w-5rem flex align-items-center"},ka={class:"font-bold whitespace-nowrap"},Ta={class:"mb-2 flex justify-content-center"},Ia={class:"font-bold text-center"},Da={class:"mb-2"},Sa={class:"text-color-secondary m-0 line-height-3 line2 text-center"},Ca={class:"mb-2"},Pa={class:"flex justify-content-center"},Ba=["src","alt"],za={class:"flex align-items-center gap-2"},Na=["src","alt"],La={class:"flex align-items-center gap-3 ml-auto"},Aa={__name:"DishList",props:{updateCartItemCount:{type:Function,required:!0},rateDish:{type:Function,required:!0},likedItemsRef:Array,dislikedItemsRef:Array},setup(t){const e=K.dishes;let i={rated:!1,id:null,like:0,rate:0};function u(){var n;const a=x.currentPage.value,r=(n=a==null?void 0:a.data)==null?void 0:n.logoPath;return r?x.pathFormated(r):"/images/logo_logo.png"}const g=(a,r)=>{const n=e.value[a].quantity+r;n>=0&&(e.value[a].quantity=n,F.updateCartItemCount(r))},o=(a,r)=>{const n=K.dishDatas.value[a].quantity+r;n>=0&&(K.dishDatas.value[a].quantity=n,F.updateCartItemCount(r))},T=a=>K.dishDatas.value[a]?K.dishDatas.value[a].quantity:0,w=a=>{const r=K.dishDatas.value[a];if(r){if(!r.category){const n=e.value.find(N=>N.handle===r.handle);if(n.limit)return A(n)}return A(r)}return!0},A=a=>{if(!L())return!1;const r=a.quantity;let n=3;if(a.price>0&&(n=9),a.limit){const N=a.id,$=L(),st=($.peopleType.adults+$.peopleType.children)*a.limit,ft=$.order.find(mt=>mt.dishid==N);let ot=0;if(a.subitem)for(const mt of a.subitem){ot+=T(mt);const Pt=$.order.find(qt=>qt.dishid==Q(mt));Pt&&(ot+=Pt.quantity)}else ot+=a.quantity,ft&&(ot+=ft.quantity);return r>=n||st&&ot>=st}return r>=n},O=a=>K.dishDatas.value[a]?!K.dishDatas.value[a].disable:!0,V=a=>K.dishDatas.value[a]?K.dishDatas.value[a].soldout:!1,C=a=>K.dishDatas.value[a]?x.getItemLocalValue(K.dishDatas.value[a],"subname"):"",Q=a=>K.dishDatas.value[a]?K.dishDatas.value[a].id:0,G=a=>K.dishDatas.value[a]?K.dishDatas.value[a].price:10,B=a=>K.dishDatas.value[a]?K.dishDatas.value[a].dis_price:10,at=a=>{const r=K.dishDatas.value[a];return r&&r.discount?r.discount:0},Z=a=>at(a)>0,j=a=>G(a)>0?!Z(a):!1,L=()=>x.getTableValue();function H(){F.rateDish(i.id,i.like,i.rate,i.rated),i.id=null,i.like=0,i.rate=0,i.rated=!1}const ut=a=>{const r=F.likedItemsRef.indexOf(a);if(i.id=a.id,r!==-1)F.likedItemsRef.splice(r,1),i.like+=-1,i.rate+=-1,i.rated=!1;else{i.rated=!0,F.likedItemsRef.push(a);const n=F.dislikedItemsRef.indexOf(a);n!==-1?(F.dislikedItemsRef.splice(n,1),i.like+=1):(i.like+=1,i.rate+=1)}},pt=a=>{const r=F.dislikedItemsRef.indexOf(a);if(i.id=a.id,r!==-1)F.dislikedItemsRef.splice(r,1),i.rate+=-1,i.rated=!1;else{i.rated=!0,F.dislikedItemsRef.push(a);const n=F.likedItemsRef.indexOf(a);n!==-1?(F.likedItemsRef.splice(n,1),i.like+=-1):i.rate+=1}},F=t,it=S(!1),X=S({}),v=a=>{it.value=!0,X.value=a},m=a=>{a.target.src="/images/default.png"};function I(a){k(a.target,300)}function P(a){k(a.target,110)}function k(a,r){const n=a.naturalWidth,N=a.naturalHeight,$=Math.min(n,r),st=$/n,ft=N*st;a.style.width=`${$}px`,a.style.height=`${ft}px`}return(a,r)=>(l(),d(J,null,[s("div",Je,[(l(!0),d(J,null,Y(p(e),(n,N)=>(l(),d("div",{key:N,class:"col-12 sm:col-12 md:col-6 lg:col-4 border-round surface-section shadow-1 p-2"},[s("div",Xe,[s("div",{class:lt(["flex flex-row",n.subitem?"":"flex-grow-1"]),onClick:$=>v(n)},[s("div",Ye,[s("img",{src:n.image,alt:n.name,class:"w-full h-full",style:{"object-fit":"cover"},onError:m,onLoad:P},null,40,Ze)]),s("div",ta,[s("div",ea,f(p(x).getItemLocalValue(n,"name")),1),s("div",null,[s("div",aa,[s("div",sa,[(l(),d(J,null,Y(5,$=>s("i",{key:$,class:lt(["pi invert-star",$<=Math.floor(n.likes/n.rates*5)?"pi-star-fill":$-.5<=n.likes/n.rates*5?"pi-star-half-fill":"pi-star"]),style:{color:"black"}},null,2)),64)),s("p",null,"("+f(n.rates?n.rates:0)+")",1)])])]),s("div",null,[s("p",na,f(p(x).getItemLocalValue(n,"description")),1)])])],10,Ge),n.subitem===void 0?(l(),d("div",{key:0,class:lt(["flex ml-2 mr-2 mb-2",n.price>0?"justify-content-between":"justify-content-end"])},[!n.discount&&n.price>0?(l(),d("span",ia,"€"+f(n.price),1)):_("",!0),n.discount?(l(),d("div",oa,[s("span",ra,"€"+f(n.dis_price),1),s("span",la,"€"+f(n.price),1),y(p(yt),{severity:"danger",value:"-"+n.discount+"%"},null,8,["value"])])):_("",!0),n.soldout?_("",!0):(l(),d("div",ua,[y(p(W),{icon:"pi pi-minus",rounded:"",disabled:n.quantity<=0,onClick:$=>g(N,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),s("span",da,f(n.quantity),1),y(p(W),{icon:"pi pi-plus",rounded:"",disabled:A(n),onClick:$=>g(N,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])),n.soldout?(l(),d("div",ca,[y(p(yt),{severity:"danger",value:a.$t("common.soldout")},null,8,["value"])])):_("",!0)],2)):_("",!0),n.subitem?(l(!0),d(J,{key:1},Y(n.subitem,($,st)=>(l(),d(J,{key:"index"},[O($)?(l(),d("div",pa,[s("div",fa,[s("div",va,[s("span",ha,f(C($)),1),j($)?(l(),d("span",ba,"€"+f(G($)),1)):_("",!0),Z($)?(l(),d("div",ma,[s("span",ga,"€"+f(B($)),1),s("span",ya,"€"+f(G($)),1),y(p(yt),{severity:"danger",value:"-"+at($)+"%"},null,8,["value"])])):_("",!0)]),V($)?_("",!0):(l(),d("div",$a,[y(p(W),{icon:"pi pi-minus",rounded:"",disabled:T($)<=0,onClick:ft=>o($,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),s("span",xa,f(T($)),1),y(p(W),{icon:"pi pi-plus",rounded:"",disabled:w($),onClick:ft=>o($,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])),V($)?(l(),d("div",wa,[y(p(yt),{severity:"danger",value:a.$t("common.soldout")},null,8,["value"])])):_("",!0)])])):_("",!0)],64))),128)):_("",!0)])]))),128))]),y(p(wt),{visible:it.value,"onUpdate:visible":r[2]||(r[2]=n=>it.value=n),modal:"",header:"dish",style:Nt([{width:"23rem"},{width:"80vw","max-width":"700px"}]),onHide:r[3]||(r[3]=n=>H())},{header:z(()=>[s("div",_a,[y(p(oe),{image:u(),class:"w-full"},null,8,["image"])]),s("span",ka,f(a.$t("common.details")),1)]),default:z(()=>[s("div",Ta,[s("span",Ia,f(p(x).getItemLocalValue(X.value,"name")),1)]),s("div",Da,[s("span",Sa,f(p(x).getItemLocalValue(X.value,"description")),1)]),s("div",Ca,[s("div",Pa,[s("img",{class:"w-full h-auto object-contain",src:X.value.image,alt:X.value.name,onError:m,onLoad:I},null,40,Ba)])]),s("div",za,[(l(!0),d(J,null,Y(X.value.allergies,(n,N)=>(l(),d("img",{src:"images/"+n+".png",alt:n,class:"w-2rem h-2rem border-round flex-shrink-0",style:{"object-fit":"cover","min-width":"2rem"}},null,8,Na))),256)),s("div",La,[s("button",{onClick:r[0]||(r[0]=n=>ut(X.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[s("i",{class:lt(["pi pi-thumbs-up text-xl",F.likedItemsRef.includes(X.value)?"text-green-500":"text-gray-400"])},null,2)]),s("button",{onClick:r[1]||(r[1]=n=>pt(X.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[s("i",{class:lt(["pi pi-thumbs-down text-xl",F.dislikedItemsRef.includes(X.value)?"text-red-500":"text-gray-400"])},null,2)])])])]),_:1},8,["visible"])],64))}},qa=Ct(Aa,[["__scopeId","data-v-454178df"]]);var Oa=It`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`,Ra={root:function(e){var i=e.instance,u=e.props;return["p-textarea p-component",{"p-filled":i.$filled,"p-textarea-resizable ":u.autoResize,"p-textarea-sm p-inputfield-sm":u.size==="small","p-textarea-lg p-inputfield-lg":u.size==="large","p-invalid":i.$invalid,"p-variant-filled":i.$variant==="filled","p-textarea-fluid":i.$fluid}]}},Ea=bt.extend({name:"textarea",style:Oa,classes:Ra}),Va={name:"BaseTextarea",extends:ke,props:{autoResize:Boolean},style:Ea,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function Tt(t){"@babel/helpers - typeof";return Tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tt(t)}function ja(t,e,i){return(e=Fa(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Fa(t){var e=Ma(t,"string");return Tt(e)=="symbol"?e:e+""}function Ma(t,e){if(Tt(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var u=i.call(t,e);if(Tt(u)!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var jt={name:"Textarea",extends:Va,inheritAttrs:!1,observer:null,mounted:function(){var e=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){e.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(e){this.autoResize&&this.resize(),this.writeValue(e.target.value,e)}},computed:{attrs:function(){return E(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return St(ja({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},Ka=["value","name","disabled","aria-invalid","data-p"];function Wa(t,e,i,u,g,o){return l(),d("textarea",E({class:t.cx("root"),value:t.d_value,name:t.name,disabled:t.disabled,"aria-invalid":t.invalid||void 0,"data-p":o.dataP,onInput:e[0]||(e[0]=function(){return o.onInput&&o.onInput.apply(o,arguments)})},o.attrs),null,16,Ka)}jt.render=Wa;const Ha={key:0,class:"text-3xl font-bold"},Ua={class:"flex flex-column gap-3 p-1"},Qa={key:0,class:"flex flex-column gap-1"},Ja={key:0,class:"m-0"},Xa={key:0,class:"m-0"},Ga={class:"flex justify-content-between gap-4 mt-1"},Ya={class:"flex align-items-center gap-2"},Za=["src","alt"],ts={class:"flex-grow-1 min-width-0 max-w-18rem"},es={class:"flex flex-column gap-1"},as={class:"flex align-items-center gap-2"},ss={class:"text-xl font-bold line1 whitespace-nowrap overflow-hidden text-overflow-ellipsis",style:{"max-width":"20rem"}},ns={class:"flex align-items-end gap-1"},is={key:0,class:"text-xl font-bold text-primary"},os={key:1,class:"text-xl font-bold text-primary"},rs={key:2,class:"text-sm text-color-secondary"},ls={key:0,class:"text-xs text-primary"},us={class:"flex-shrink-0 flex flex-wrap justify-content-between align-items-center gap-1"},ds={class:"flex flex-wrap justify-content-between align-content-center"},cs={class:"flex align-items-center gap-1"},ps={class:"w-2rem text-center"},fs={class:"flex flex-column gap-2 mt-2"},vs={for:"in_label"},hs={for:"in_label"},bs={class:"bottom-0 left-0 mt-2"},ms={class:"text-2xl font-bold"},gs={class:"text-2xl font-bold text-primary pl-2"},ys={class:"flex justify-content-between"},$s={__name:"Cart",props:{updateCartItemCount:{type:Function,required:!0},checkout:{type:Function,required:!0},isTakeaway:Boolean},setup(t,{expose:e}){const i=ee(),{t:u}=gt(),g=tt.cartDishs;x.freeCounts;const o=S([]),T=S(),w=S(),A=S(!1),O=S(!1),V=S(!0),C=S(""),Q=S("");function G(a,r){let n="";return a.forEach(N=>{n=n+u(`${r}Data.ingredients.${N.id}`)+" / "}),n}function B(a,r,n){const N=x.customDishAPI.getCustomDishByName(a);if(N){const $=N.types[r].typeName;return u(`${n}Data.${$}`)}else return null}const at=(a,r)=>{const n=o.value[a].quantity+r;n>=0&&(o.value[a].quantity=n,H.updateCartItemCount(r))};function Z(a){a&&T.value&&(T.value.dishNote=w.value?w.value:void 0),O.value=!1}function j(){w.value&&(w.value=void 0),T.value&&(T.value=void 0)}function L(a){T.value=a,w.value=T.value.dishNote?T.value.dishNote:void 0,O.value=!0}const H=t;e({showDishList:a=>{A.value=!0,o.value.length=0;for(let r=0;r<a.length;r++)o.value.push(a[r]);V.value=o.value.length==0&&g.length==0}});function pt(a){switch(a){case"Bibimbap":return"customDishBibimbap";case"Sushi Aleatória®":return"customDishSushiBox";case"MY BOX":return"customDishMyBox";default:return"Unexpected"}}function F(a){tt.removeItem(a)}function it(){H.isTakeaway?X():v()}function X(){i.push({path:"/paymentPage"})}function v(){H.checkout({name:C.value,note:Q.value})&&(A.value=!1),g.value.forEach(a=>{a.dishNote=void 0}),o.value.forEach(a=>{a.dishNote=void 0}),Q.value="",localStorage.removeItem("order_cartDishs"),localStorage.removeItem("order_dishDatas")}function m(a){return a.subname!=""&&a.subname!="Default Title"?a.name+" "+a.subname:a.name}function I(){let a=0;return g.value.forEach(r=>{a+=r.dis_price?r.dis_price*r.count:r.price*r.count}),o.value.forEach(r=>{a+=r.dis_price?r.dis_price*r.quantity:r.price*r.quantity}),"€"+a.toFixed(2)}const P=a=>{a.target.src="/images/default.png"},k=a=>{const r=a.quantity;let n=3;return a.price>0&&(n=9),r>=n};return(a,r)=>(l(),d(J,null,[y(p(wt),{class:"bg-primary-reverse text-sm md:text-lg lg:text-xl",visible:A.value,"onUpdate:visible":r[2]||(r[2]=n=>A.value=n),modal:"",header:a.$t("common.cart"),style:Nt([{backgroundColor:"rgba(250, 250, 250, 1)",height:"100%",minWidth:"24rem"},{width:"80vw","max-width":"700px"}]),dismissableMask:!0},{footer:z(()=>[s("div",bs,[s("span",ms,f(a.$t("common.total"))+": ",1),s("span",gs,f(I()),1),y(p(W),{icon:"pi pi-plus",class:"p-button-success p-button-rounded ml-3",onClick:it,label:t.isTakeaway?p(u)("common.pay"):p(u)("common.send")},null,8,["label"])])]),default:z(()=>[V.value?(l(),d("h2",Ha,"Cart is empty.")):_("",!0),s("div",Ua,[(l(!0),d(J,null,Y(p(g),(n,N)=>(l(),et(p(Ie),{style:{overflow:"hidden"},key:N},{title:z(()=>[xt(f(a.$t(`common.${n.name.toLowerCase().replace(/\s+/g,"")}`)),1)]),subtitle:z(()=>[xt(f(a.$t("common.price"))+" : "+f(n.price)+"€",1)]),content:z(()=>[p(x).customDishAPI.customDishes.value.find($=>$.name==n.name)?(l(),d("div",Qa,[(l(!0),d(J,null,Y(n.notesAndId,($,st)=>(l(),d("div",null,[n.notesAndId[st].length!==0?(l(),d("span",Ja,f(B(n.name,st,pt(n.name)))+": "+f(G(n.notesAndId[st],pt(n.name))),1)):_("",!0)]))),256)),s("div",null,[n.dishNote?(l(),d("span",Xa,f(a.$t("common.note"))+": "+f(n.dishNote),1)):_("",!0)])])):_("",!0)]),footer:z(()=>[s("div",Ga,[y(p(W),{label:a.$t("common.edit")+" "+a.$t("common.note"),severity:"contrast",onClick:$=>L(n)},null,8,["label","onClick"]),y(p(W),{label:a.$t("common.remove"),severity:"danger",onClick:$=>F(n)},null,8,["label","onClick"])])]),_:2},1024))),128)),(l(!0),d(J,null,Y(o.value,(n,N)=>(l(),d("div",{key:N,class:"p-2 border-round shadow-1 transition-all transition-duration-200 hover:shadow-3 flex flex-column gap-1"},[s("div",Ya,[s("img",{src:n.image,alt:n.name,class:"w-4rem h-4rem border-round flex-shrink-0",onError:P,style:{"object-fit":"cover","min-width":"4rem"}},null,40,Za),s("div",ts,[s("div",es,[s("div",as,[s("span",ss,f(m(n)),1)])]),s("div",ns,[n.dis_price?(l(),d("span",is,"€"+f(n.dis_price),1)):_("",!0),!n.dis_price&&n.price>0?(l(),d("span",os,"€"+f(n.price),1)):_("",!0),n.price>0?(l(),d("span",rs,"/uni.")):_("",!0)])])]),s("div",null,[n.dishNote?(l(),d("span",ls,f(a.$t("common.note")+": "+n.dishNote),1)):_("",!0)]),s("div",us,[s("div",ds,[y(p(W),{label:a.$t("common.edit")+" "+a.$t("common.note"),severity:"contrast",class:"w-3.5rem h-2rem",onClick:$=>L(n)},null,8,["label","onClick"])]),s("div",cs,[y(p(W),{icon:"pi pi-minus",rounded:"",disabled:n.quantity<=0,onClick:$=>at(N,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),s("span",ps,f(n.quantity),1),y(p(W),{icon:"pi pi-plus",rounded:"",disabled:k(n),onClick:$=>at(N,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])])]))),128))]),s("div",fs,[y(p(Jt),{variant:"in"},{default:z(()=>[y(p(ne),{id:"in_label",modelValue:C.value,"onUpdate:modelValue":r[0]||(r[0]=n=>C.value=n),variant:"filled",maxlength:"20"},null,8,["modelValue"]),s("label",vs,f(a.$t("common.name")),1)]),_:1}),y(p(Jt),{variant:"in"},{default:z(()=>[y(p(jt),{id:"in_label",class:"min-w-full",rows:"5",modelValue:Q.value,"onUpdate:modelValue":r[1]||(r[1]=n=>Q.value=n),variant:"filled",maxlength:"200"},null,8,["modelValue"]),s("label",hs,f(a.$t("common.observation")),1)]),_:1})])]),_:1},8,["visible","header"]),y(p(wt),{visible:O.value,"onUpdate:visible":r[6]||(r[6]=n=>O.value=n),header:a.$t("common.note"),onHide:r[7]||(r[7]=n=>j()),modal:"",dismissableMask:!0},{default:z(()=>[y(p(jt),{modelValue:w.value,"onUpdate:modelValue":r[3]||(r[3]=n=>w.value=n),rows:"5",cols:"30",placeholder:a.$t("common.edit")+" "+a.$t("common.note")+"...",maxlength:"100"},null,8,["modelValue","placeholder"]),s("div",ys,[y(p(W),{label:a.$t("common.cancel"),severity:"danger",onClick:r[4]||(r[4]=n=>Z(!1))},null,8,["label"]),y(p(W),{label:a.$t("common.save"),severity:"primary",size:"sm",onClick:r[5]||(r[5]=n=>Z(!0))},null,8,["label"])])]),_:1},8,["visible","header"])],64))}},xs=Ct($s,[["__scopeId","data-v-0acb271b"]]);var ws=It`
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
`,_s={root:"p-overlaybadge"},ks=bt.extend({name:"overlaybadge",style:ws,classes:_s}),Ts={name:"OverlayBadge",extends:ie,style:ks,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},re={name:"OverlayBadge",extends:Ts,inheritAttrs:!1,components:{Badge:ie}};function Is(t,e,i,u,g,o){var T=pe("Badge");return l(),d("div",E({class:t.cx("root")},t.ptmi("root")),[ht(t.$slots,"default"),y(T,E(t.$props,{pt:t.ptm("pcBadge")}),null,16,["pt"])],16)}re.render=Is;function Yt(t){switch(t){case"Sushi Aleatória®":return"customDishSushiBox";case"Bibimbap":return"customDishBibimbap";case"MY BOX":return"customDishMyBox";default:return"unexpected"}}const Ds={class:"m-3"},Ss={class:"flex flex-column gap-2"},Cs={class:"w-full flex justify-content-center"},Ps={key:0,class:"max-w-19rem"},Bs=["src"],zs={style:{width:"300px",height:"300px",background:"url(/boxImage/box.png)"}},Ns={key:0,class:"flex align-items-center justify-content-center text-4xl font-bold text-white w-full h-full"},Ls={key:1,class:"grid m-0 p-2"},As=["onClick"],qs={class:"flex align-items-center justify-content-center font-bold m-0 p-0",style:{width:"94px",height:"94px"}},Os=["src"],Rs={class:"flex flex-wrap justify-content-between align-items-center m-1"},Es={class:"flex gap-1 align-items-center"},Vs={key:0},js={class:"font-bold mb-2"},Fs={key:1,class:"flex justify-content-between gap-2 mt-3"},Ms={class:"font-bold mb-2"},Ks={class:"flex mr-2"},Ws={class:"w-3rem text-xl text-center"},Hs={class:"font-bold block mb-2"},Us={class:"flex flex-wrap"},Qs={key:2,class:"flex flex-wrap gap-2 mt-3"},Js={class:"font-bold block mb-2"},Xs={class:"font-bold block mb-2 text-center"},Gs={class:"flex flex-wrap gap-2 mt-3"},Ys={__name:"CustomDish",props:{currentCustomDish:Object},setup(t){const{locale:e}=gt(),i=t,u=fe(),{t:g}=gt(),o=vt(()=>i.currentCustomDish),T=vt(()=>o.boxImages),w=S(0),A=vt(()=>o.value.initialPrice),O=S(A.value);ve(()=>o.value,v=>{O.value=(v==null?void 0:v.initialPrice)??0,w.value=0,V.value=null});const V=S(null),C=vt(()=>{const v=e.value,m=`title_${v}`,I=`description_${v}`;return o.value.descriptions.map(P=>({title:P[m],descriptions:P.descriptions.map(k=>k[I]),image:P==null?void 0:P.image}))}),Q=vt(()=>{var I,P;const v=Number(((I=o.value)==null?void 0:I.like)??0),m=Number(((P=o.value)==null?void 0:P.rate)??0);return m?v/m*5:0});function G(v,m,I){const P=v[m];if(P.selected){P.selected=!1;return}else{const a=v.filter(r=>r.selected).length;if(I===1){F(v),P.selected=!0;return}a<I&&(P.selected=!0)}}function B(v,m,I){G(v,m,I),at(v)}function at(v){let m=A.value;if(!v||!Array.isArray(v))return O.value=m,m;const I=v.reduce((P,k)=>{if(!k.dishes||!Array.isArray(k.dishes))return P;const a=k.dishes.reduce((r,n)=>r+(n.selected?n.price:0),0);return P+a},0);return m+=I,O.value=m,m}function Z(v){return v.selected}function j(){if(!it(o.value.types))return;const v=H(o.value.types),m=ut(o.value.types);tt.addItem({dishid:-1,name:o.value.name,category:o.value.category,count:w.value!==0?w.value:1,price:O.value===0?at():O.value,notes:v,notesAndId:m}),console.log("CART: ",tt.cartDishs),pt(o.value.types),nt.show({severity:"info",summary:"info",detail:g("customDishBibimbapVue.addToCartSuccessBibimbap")})}function L(v){return!v||!v.dishes?"":v.dishes.filter(I=>I.selected).map(I=>I.name).join(",")}function H(v){return v?v.map(m=>L(m)):[]}function ut(v){return v?v.map(m=>m.dishes?m.dishes.filter(I=>I.selected).map(I=>({id:I.dishid,name:I.name})):[]):[]}function pt(v){v&&v.forEach(m=>{m.dishes&&m.dishes.forEach(I=>{I.selected=!1})})}function F(v){v.forEach(m=>m.selected=!1)}function it(v){if(o.value.options.quantity&&w.value<=0)return nt.show({severity:"warn",detail:g("notification.quantity_must_be_positive")}),!1;for(const m of v){const I=m.dishes.filter(P=>P.selected).length;if(console.log(I,m.minQuantity),I<m.minQuantity){const P=m.typeName;return nt.show({severity:"warn",detail:g("notification.select_type_of",{name:P})}),!1}}return!0}function X(v){v?x.customDishAPI.like(o.value.id)&&(V.value="like",u.add({severity:"success",summary:g("common.success"),detail:g("common.rate")+" "+g("common.success"),life:750})):x.customDishAPI.unLike(o.value.id)&&(V.value="unlike",u.add({severity:"success",summary:g("common.success"),detail:g("common.rate")+" "+g("common.success"),life:750}))}return(v,m)=>{var I,P;return l(),d("div",Ds,[s("div",Ss,[y(p(Qt),{class:"w-full max-w-xl mx-auto"},{default:z(()=>[(l(!0),d(J,null,Y(C.value,(k,a)=>(l(),et(p(Ut),{key:a,value:a},{default:z(()=>[y(p(Wt),null,{default:z(()=>[xt(f(k.title),1)]),_:2},1024),y(p(Ht),null,{default:z(()=>{var r;return[(l(!0),d(J,null,Y(k.descriptions,(n,N)=>(l(),d("p",{key:N},f(n),1))),128)),s("div",Cs,[(r=k.image)!=null&&r.src?(l(),d("div",Ps,[s("img",{src:k.image.src,class:"w-full"},null,8,Bs)])):_("",!0)])]}),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1}),((P=(I=o.value)==null?void 0:I.value)==null?void 0:P.name)==="MY BOX"?(l(),et(p(Qt),{key:0,class:"w-full max-w-xl mx-auto"},{default:z(()=>[y(p(Ut),{value:"0"},{default:z(()=>[y(p(Wt),null,{default:z(()=>[xt(" 🥩 "+f(v.$t("common.showMybox")),1)]),_:1}),y(p(Ht),null,{default:z(()=>[s("div",zs,[v.isEmptyArray(T.value)?(l(),d("div",Ns,f(v.$t("common.myboxAlarm")),1)):_("",!0),v.isEmptyArray(T.value)?_("",!0):(l(),d("div",Ls,[(l(!0),d(J,null,Y(T.value,k=>(l(),d("div",{class:"col-4 p-0",onClick:a=>v.imageSelectAction(k)},[s("div",qs,[k?(l(),d("img",{key:0,class:"m-0 p-0",src:v.imagePath(k),style:{width:"82px",height:"82px"}},null,8,Os)):_("",!0)])],8,As))),256))]))])]),_:1})]),_:1})]),_:1})):_("",!0)]),s("div",Rs,[s("div",Es,[(l(),d(J,null,Y(5,k=>s("i",{key:k,class:lt(["pi invert-star",k<=Math.floor(Q.value)?"pi-star-fill":k-.5<=Q.value?"pi-star-half":"pi-star"]),style:{color:"black"}},null,2)),64)),s("p",null,"("+f(o.value.rate?o.value.rate:0)+")",1)]),s("div",null,[y(p(W),{text:"",icon:"pi pi-thumbs-up",severity:V.value==="like"?"success":"",onClick:m[0]||(m[0]=k=>X(!0))},null,8,["severity"]),y(p(W),{text:"",icon:"pi pi-thumbs-down",severity:V.value==="unlike"?"danger":"",onClick:m[1]||(m[1]=k=>X(!1))},null,8,["severity"])])]),o.value.options.extraInfo?(l(),d("div",Vs,[s("label",js,f(o.value.options.extraInfo),1)])):_("",!0),o.value.options.quantity?(l(),d("div",Fs,[s("div",null,[s("label",Ms,f(v.$t("common.quantity"))+" / "+f(v.$t("common.pieces")),1)]),s("div",Ks,[y(p(W),{icon:"pi pi-minus",disabled:w.value<=0,onClick:m[2]||(m[2]=k=>w.value-=o.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"]),s("span",Ws,f(w.value),1),y(p(W),{icon:"pi pi-plus",disabled:w.value>=o.value.options.maxQuantity,onClick:m[3]||(m[3]=k=>w.value+=o.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"])])])):_("",!0),(l(!0),d(J,null,Y(o.value.types,(k,a)=>(l(),d("div",null,[s("label",Hs,f(a+1)+". "+f(v.$t(`${p(Yt)(o.value.name)}Data.${k.typeName}`)),1),s("div",Us,[(l(!0),d(J,null,Y(k.dishes,(r,n)=>(l(),et(p(W),{key:n,onClick:N=>B(k.dishes,n,w.value==0?k.maxQuantity:k.maxQuantity*w.value),class:lt([{"p-button-primary":Z(r),"p-button-outlined":!Z(r)},"m-1"])},{default:z(()=>[s("p",{class:lt({"text-gray-700":!Z(r)})},f(v.$t(`${p(Yt)(o.value.name)}Data.ingredients.${r.dishid}`)),3)]),_:2},1032,["onClick","class"]))),128))])]))),256)),A.value!==0?(l(),d("div",Qs,[s("label",Js,f(v.$t("common.price"))+":",1),s("label",Xs,f(O.value+"€"),1)])):_("",!0),s("div",Gs,[y(p(W),{icon:"pi pi-shopping-cart",onClick:m[4]||(m[4]=k=>j()),label:v.$t("common.addToCart"),class:"m-3",severity:"primary",raised:""},null,8,["label"])])])}}},Zs=Ct(Ys,[["__scopeId","data-v-fd2c3fd7"]]);var tn=It`
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
`,en={root:function(e){var i=e.props;return["p-tabs p-component",{"p-tabs-scrollable":i.scrollable}]}},an=bt.extend({name:"tabs",style:tn,classes:en}),sn={name:"BaseTabs",extends:Dt,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:an,provide:function(){return{$pcTabs:this,$parentInstance:this}}},le={name:"Tabs",extends:sn,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function nn(t,e,i,u,g,o){return l(),d("div",E({class:t.cx("root")},t.ptmi("root")),[ht(t.$slots,"default")],16)}le.render=nn;var on={root:"p-tablist",content:function(e){var i=e.instance;return["p-tablist-content",{"p-tablist-viewport":i.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},rn=bt.extend({name:"tablist",classes:on}),ln={name:"BaseTabList",extends:Dt,props:{},style:rn,provide:function(){return{$pcTabList:this,$parentInstance:this}}},ue={name:"TabList",extends:ln,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,i=this.getVisibleButtonWidths(),u=Et(e)-i,g=Math.abs(e.scrollLeft),o=u*.8,T=g-o,w=Math.max(T,0);e.scrollLeft=Kt(e)?-1*w:w},onNextButtonClick:function(){var e=this.$refs.content,i=this.getVisibleButtonWidths(),u=Et(e)-i,g=Math.abs(e.scrollLeft),o=u*.8,T=g+o,w=e.scrollWidth-u,A=Math.min(T,w);e.scrollLeft=Kt(e)?-1*A:A},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,i=e.content,u=e.inkbar,g=e.tabs;if(u){var o=Vt(i,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(u.style.height=be(o)+"px",u.style.top=Bt(o).top-Bt(g).top+"px"):(u.style.width=me(o)+"px",u.style.left=Bt(o).left-Bt(g).left+"px")}},updateButtonState:function(){var e=this.$refs,i=e.list,u=e.content,g=u.scrollTop,o=u.scrollWidth,T=u.scrollHeight,w=u.offsetWidth,A=u.offsetHeight,O=Math.abs(u.scrollLeft),V=[Et(u),he(u)],C=V[0],Q=V[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=g!==0,this.isNextButtonEnabled=i.offsetHeight>=A&&parseInt(g)!==T-Q):(this.isPrevButtonEnabled=O!==0,this.isNextButtonEnabled=i.offsetWidth>=w&&parseInt(O)!==o-C)},getVisibleButtonWidths:function(){var e=this.$refs,i=e.prevButton,u=e.nextButton,g=0;return this.showNavigators&&(g=((i==null?void 0:i.offsetWidth)||0)+((u==null?void 0:u.offsetWidth)||0)),g}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return St({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:De,ChevronRightIcon:Se},directives:{ripple:ae}},un=["data-p"],dn=["aria-label","tabindex"],cn=["data-p"],pn=["aria-orientation"],fn=["aria-label","tabindex"];function vn(t,e,i,u,g,o){var T=Lt("ripple");return l(),d("div",E({ref:"list",class:t.cx("root"),"data-p":o.dataP},t.ptmi("root")),[o.showNavigators&&g.isPrevButtonEnabled?At((l(),d("button",E({key:0,ref:"prevButton",type:"button",class:t.cx("prevButton"),"aria-label":o.prevButtonAriaLabel,tabindex:o.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return o.onPrevButtonClick&&o.onPrevButtonClick.apply(o,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(l(),et($t(o.templates.previcon||"ChevronLeftIcon"),E({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,dn)),[[T]]):_("",!0),s("div",E({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return o.onScroll&&o.onScroll.apply(o,arguments)}),"data-p":o.dataP},t.ptm("content")),[s("div",E({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":o.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[ht(t.$slots,"default"),s("span",E({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,pn)],16,cn),o.showNavigators&&g.isNextButtonEnabled?At((l(),d("button",E({key:1,ref:"nextButton",type:"button",class:t.cx("nextButton"),"aria-label":o.nextButtonAriaLabel,tabindex:o.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return o.onNextButtonClick&&o.onNextButtonClick.apply(o,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(l(),et($t(o.templates.nexticon||"ChevronRightIcon"),E({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,fn)),[[T]]):_("",!0)],16,un)}ue.render=vn;var hn={root:function(e){var i=e.instance,u=e.props;return["p-tab",{"p-tab-active":i.active,"p-disabled":u.disabled}]}},bn=bt.extend({name:"tab",classes:hn}),mn={name:"BaseTab",extends:Dt,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:bn,provide:function(){return{$pcTab:this,$parentInstance:this}}},de={name:"Tab",extends:mn,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var i=this.findNextTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var i=this.findPrevTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var i=this.findFirstTab();this.changeFocusedTab(e,i),e.preventDefault()},onEndKey:function(e){var i=this.findLastTab();this.changeFocusedTab(e,i),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findNextTab:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=i?e:e.nextElementSibling;return u?zt(u,"data-p-disabled")||zt(u,"data-pc-section")==="activebar"?this.findNextTab(u):Vt(u,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=i?e:e.previousElementSibling;return u?zt(u,"data-p-disabled")||zt(u,"data-pc-section")==="activebar"?this.findPrevTab(u):Vt(u,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,i){ye(i),this.scrollInView(i)},scrollInView:function(e){var i;e==null||(i=e.scrollIntoView)===null||i===void 0||i.call(e,{block:"nearest"})}},computed:{active:function(){var e;return ge((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},attrs:function(){return E(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return St({active:this.active})}},directives:{ripple:ae}};function gn(t,e,i,u,g,o){var T=Lt("ripple");return t.asChild?ht(t.$slots,"default",{key:1,dataP:o.dataP,class:lt(t.cx("root")),active:o.active,a11yAttrs:o.a11yAttrs,onClick:o.onClick}):At((l(),et($t(t.as),E({key:0,class:t.cx("root"),"data-p":o.dataP,onClick:o.onClick},o.attrs),{default:z(function(){return[ht(t.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[T]])}de.render=gn;const yn={class:"fixed top-0 left-0 w-full bg-primary-reverse",style:{"z-index":"10"}},$n={class:"grid mt-3 ml-3"},xn={class:"max-w-5rem flex align-items-center"},wn=["src"],_n={class:"flex align-items-center"},kn={key:0,class:"text-color font-bold p-1"},Tn={key:1,class:"text-color font-bold p-1"},In={class:"card flex mr-3",style:{"margin-left":"auto"}},Dn={style:{display:"flex","align-items":"center"}},Sn={style:{"flex-grow":"1",width:"0",overflow:"hidden"}},Cn={class:"mt-2"},Pn={class:"flex justify-content-end mt-2"},Bn={__name:"HeaderTabs",props:{types:Array,typeIndex:Number,tableId:String,tabItems:Array},emits:["clickType","switchToWelcome"],setup(t,{emit:e}){const{t:i}=gt();function u(){var H;const j=x.currentPage.value,L=(H=j==null?void 0:j.data)==null?void 0:H.logoPath;return L?x.pathFormated(L):"/images/logo_logo.png"}function g(){return x.getTable()}const o=S(),T=vt(()=>[{label:i("common.options"),items:[{label:i("common.pay"),icon:"pi pi-wallet",command:()=>{B()}},{label:i("common.call"),icon:"pi pi-user-plus",command:()=>{x.send_cmd(g(),{cmd:"call"}),nt.show_info(i("notification.call_msg"))}}]}]),w=j=>{o.value.toggle(j)},A=j=>{O.value.toggle(j)},O=S(),V=S(!1),C=S(),Q=S(),G=S(!0);function B(){V.value=!0}function at(){G.value=C.value?!(C.value.toString().length===9||C.value.toString().length===0):!1,V.value=!1}function Z(){G.value?nt.show_warn(i("notification.cancel_msg")):(x.send_cmd(g(),{cmd:"pay",nif:C.value,note:Q.value}),nt.show_info(i("notification.pay_msg")),G.value=!0),C.value&&(C.value=void 0),Q.value&&(Q.value=void 0)}return(j,L)=>(l(),d(J,null,[s("div",yn,[s("div",$n,[s("div",xn,[s("img",{src:u(),class:"w-full",clickble:"",onClick:L[0]||(L[0]=()=>j.$emit("switchToWelcome"))},null,8,wn)]),s("div",_n,[t.tableId?(l(),d("p",kn,f(j.$t("common.table"))+": "+f(t.tableId),1)):_("",!0),t.tableId?_("",!0):(l(),d("p",Tn,f(j.$t("common.takeAway")),1))]),s("div",In,[t.tableId?(l(),et(p(W),{key:0,icon:"pi pi-bell",rounded:"","aria-label":"Filter",onClick:w,"aria-haspopup":"true","aria-controls":"overlay_menu"})):_("",!0),y(p(Xt),{ref_key:"menu",ref:o,id:"overlay_menu",model:T.value,popup:!0},null,8,["model"])])]),s("div",Dn,[s("div",null,[y(p(W),{icon:"pi pi-bars",variant:"text",rounded:"","aria-label":"Filter",onClick:A,"aria-haspopup":"true","aria-controls":"tab_menu"}),y(p(Xt),{ref_key:"tabMenu",ref:O,id:"tab_menu",model:t.tabItems,popup:!0},null,8,["model"])]),s("div",Sn,[y(p(le),{value:t.typeIndex,scrollable:"",showNavigators:!1},{default:z(()=>[y(p(ue),null,{default:z(()=>[(l(!0),d(J,null,Y(t.types,(H,ut)=>(l(),et(p(de),{value:ut,onClick:()=>j.$emit("clickType",ut),class:"text-sm md:text-lg lg:text-xl"},{default:z(()=>[xt(f(H),1)]),_:2},1032,["value","onClick"]))),256))]),_:1})]),_:1},8,["value"])])])]),y(p(wt),{visible:V.value,"onUpdate:visible":L[4]||(L[4]=H=>V.value=H),header:"结账",class:"flex flex-column",modal:!0,dismissableMask:!0,onHide:Z},{default:z(()=>[s("div",null,[L[5]||(L[5]=s("label",null,"NIF:",-1)),y(p(Te),{modelValue:C.value,"onUpdate:modelValue":L[1]||(L[1]=H=>C.value=H),inputId:"withoutgrouping",useGrouping:!1,fluid:"",class:"w-full m-1"},null,8,["modelValue"])]),s("div",Cn,[s("label",null,f(j.$t("common.note"))+":",1),y(p(ne),{type:"text",modelValue:Q.value,"onUpdate:modelValue":L[2]||(L[2]=H=>Q.value=H),class:"w-full m-1"},null,8,["modelValue"])]),s("div",Pn,[y(p(W),{label:j.$t("common.send"),onClick:L[3]||(L[3]=H=>at())},null,8,["label"])])]),_:1},8,["visible"])],64))}},zn={__name:"SwipeHint",props:{size:{type:String,default:"8rem"},duration:{type:Number,default:6e3},position:{type:String,default:"bottom"}},setup(t){const e=t,i=S(!0);se(()=>{e.duration>0&&setTimeout(()=>{i.value=!1},e.duration);const g=()=>{i.value=!1,window.removeEventListener("touchstart",g)};window.addEventListener("touchstart",g)});const u=vt(()=>{let g={left:"50%",transform:"translateX(-50%)",zIndex:99999,opacity:.5,pointerEvents:"none",textAlign:"center",position:"fixed"};return e.position==="top"?g.top="15%":e.position==="center"?(g.top="50%",g.transform="translate(-50%, -50%)"):g.bottom="15%",g});return(g,o)=>i.value?(l(),d("div",{key:0,class:"swipe-hint",style:Nt(u.value)},[s("div",{class:"hand",style:Nt({width:t.size,height:t.size,backgroundImage:"url(/images/hand_finger.png)"})},null,4)],4)):_("",!0)}},Nn=Ct(zn,[["__scopeId","data-v-e5f3ff45"]]),Ln={class:"w-full h-full flex flex-column"},An={class:"fixed bottom-0 left-0 w-full h-3rem bg-primary-reverse p-3"},qn={class:"h-full flex align-items-center justify-content-between w-full"},On={class:"m-2"},Rn={class:"m-2"},En={style:{"max-height":"60vh","overflow-y":"auto","padding-bottom":"60px"}},Vn={class:"flex flex-column border-bottom-1"},jn={key:0,class:"flex justify-content-between"},Fn={class:"flex flex-column"},Mn={class:"font-bold"},Kn={class:"text-right"},Wn={key:1,class:"flex justify-content-between"},Hn={class:"flex flex-column"},Un={class:"font-bold"},Qn={class:"text-right"},Jn={key:0},Xn={key:1,class:"flex flex-column"},Gn={class:"flex flex-column"},Yn={class:"font-bold"},Zn={class:"text-right"},ti={class:"total-footer bg-primary-reverse"},Zt=2,te="order_time_key",ei={__name:"HomePage",setup(t){const e=ee(),i=_e(),{t:u}=gt(),{locale:g}=gt(),o=S(!1),T=S([""]),w=S(0),A=tt.cartItemCount,O=S(!1),V=S([]),C=S(0),Q=S({}),G=S(!1),B=K.dishDatas,at=S(null),Z=S(null),j=S([]),L=S([]);function H(c){c.touches[0].clientX,c.touches[0].clientY}const ut=()=>{w.value<T.value.length-1&&(w.value++,$(),m(w.value))},pt=()=>{w.value>0&&(w.value--,$(),m(w.value))};let F=()=>window.env.ENABLE_ROAST_DUCK;vt(()=>parseFloat(x.table.value.order.reduce((c,h)=>c+h.price*h.quantity,0).toFixed(2)));function it(c){A.value=A.value+c}S(X(x.customDishAPI.customDishes.value));function X(c){return c.map(h=>({...h,oldLike:0,update:!1}))}const v=(c,h,b,q)=>{x.rateDish(c,h,b),q&&nt.show_success(u("notification.rating_submitted"))};function m(c){let h=x.getOrderMenuTab()[c];x.customDishAPI.customDishes.value.map(M=>M.name).includes(h)?(G.value=!0,Q.value=x.customDishAPI.customDishes.value.find(M=>M.name==h)):G.value=!1;let q=x.getMenu();if(q.length==0){console.log("exit");return}let U=[];for(let M=0;M<B.value.length;M++){let D=B.value[M];if(D.category==h){if(D.disable){if(!D.subitem)continue;let R=!0;for(let rt=0;rt<D.subitem.length;rt++)q[D.subitem[rt]].disable||(R=!1);if(R)continue}U.push(D)}}K.showDishList(U)}const I=()=>{x.refreshTableFromServer(),x.getTableTotalAmount(C),O.value=!0},P=(c,h,b)=>{const q=B.value.find(U=>U.id===c);q&&(q.likes=h,q.rates=b)},k=c=>{let h=c.id;c.org_id&&(h=c.org_id);for(let b=0;b<B.value.length;b++)if(B.value[b].id==h)for(const q in c){let U=q;q.startsWith("note")&&(U=U.replace("note","description")),B.value[b][U]=c[q]}},a={pt:[],zh:[],en:[]};function r(){return new Promise(c=>{let h=()=>{const b=x.getMenu();b.length>0?c(b):setTimeout(h,200)};h()})}function n(){return new Promise(c=>{let h=()=>{const b=x.getOrderMenuTab();b.length>0?c(b):setTimeout(h,200)};h()})}async function N(){var c=await r();x.onMenuItemChanged=k,x.onRatingChanged=P,B.value.length=0,F()&&x.settings.value.hasBox&&(a.pt.push("My BOX"),a.zh.push("自定义九宫格"),a.en.push("My BOX")),F()&&x.settings.value.hasBibimbap&&(a.pt.push("Bibimbap"),a.zh.push("石锅拌饭"),a.en.push("Bibimbap"));const h={en:{},zh:{}};for(let D=0;D<c.length;D++){let R=c[D];const rt=D;let dt={description:R.note,allergies:R.x,quantity:0,index:rt,description_cn:R.note_cn,description_en:R.note_en,likes:R.likes||0,rates:R.rates||0};if(dt={...R,...dt},h.zh[dt.category]=R.category_cn,h.en[dt.category]=R.category_en,B.value.push(dt),dt.category=="")for(let Rt=0;Rt<B.value.length;Rt++){const ct=B.value[Rt];if(ct.handle&&ct.handle==R.handle&&ct.category!=""){ct.subitem||(ct.subitem=[ct.index]),ct.subitem.push(B.value.length-1),dt.name=ct.name,dt.image==""&&(dt.image=ct.image);break}}}const b=await n();for(let D=0;D<b.length;D++)a.pt.push(b[D]),a.zh.push(h.zh[b[D]]||b[D]),a.en.push(h.en[b[D]]||b[D]);const q=localStorage.getItem("order_cartDishs");q&&q!="undefined"&&(tt.cartDishs.value=JSON.parse(q),tt.cartItemCount.value=tt.cartDishs.value.length);const U=localStorage.getItem("order_dishDatas");if(U&&U!="undefined"){let D=JSON.parse(U);for(let R=0;R<D.length;R++)for(let rt=0;rt<B.value.length;rt++)D[R].id==B.value[rt].id&&(B.value[rt].quantity=D[R].quantity,tt.cartItemCount.value+=D[R].quantity)}let M=localStorage.getItem("language")||xe.global.locale;T.value=a[M]||a.pt;for(let D=0;D<T.value.length;D++){const R=D;V.value.push({label:T.value[D],command:()=>{st(R),$()}})}}const $=()=>{we(()=>{const c=document.querySelector(".p-tablist-viewport"),h=document.querySelector(".p-tab.p-tab-active");if(c&&h){const b=h.offsetLeft-c.offsetWidth/2+h.offsetWidth/2;c.scrollTo({left:b,behavior:"smooth"})}})},st=c=>{m(c),w.value=c,$()},ft=()=>{var c=[];for(let b=0;b<B.value.length;b++){var h=B.value[b];h.quantity>0&&c.push(h)}Z.value.showDishList(c)};function ot(){return x.getTable()}x.params.port,at.value=x.table.value.order;function mt(c){var h=u("notification.too_fast",{remainTime:c});nt.show_warn(h)}const Pt=c=>{const h=[];for(let M=0;M<tt.cartDishs.value.length;M++){var b=tt.cartDishs.value[M];h.push({dishid:b.dishid,name:b.name,quantity:b.count,notes:b.notes,limit:b.limit,price:b.dis_price?b.dis_price:b.price,dishNote:b.dishNote})}for(let M=0;M<B.value.length;M++){var b=B.value[M];b.quantity>0&&h.push({dishid:b.id,name:b.name,quantity:b.quantity,limit:b.limit,price:b.dis_price?b.dis_price:b.price,dishNote:b.dishNote})}if(h.length===0)return nt.show_warn(u("notification.select_at_least_one")),!1;console.log("cart item:",h);const q=JSON.parse(localStorage.getItem(te)||"{}"),U=Date.now();if(!q.startTime||U-q.startTime>Zt*1e3)q.startTime=U;else{const M=Zt-parseInt((U-q.startTime)/1e3);mt(M);return}return localStorage.setItem(te,JSON.stringify(q)),o.value=!0,x.submit_order({name:c.name,note:c.note,table:ot(),items:h}),!0};function qt(){const c=localStorage.getItem("language");c&&(g.value=c)}function Ft(){for(let c=0;c<B.value.length;c++){const h=B.value[c];h.quantity=0}o.value=!1,A.value=0,tt.cartDishs.value.length=0}se(async()=>{await N(),qt(),m(w.value),x.clear_order_data=()=>{Ft()},x.setOnOrderConfirmed(c=>{console.log("setOnOrderConfirmed..."),Ft();const h=c;nt.show_success(u("notification.order_submitted",{id:h}))}),x.setOnShowError(c=>{o.value=!1,nt.show_error(c)})});let Ot=!1;function ce(){localStorage.removeItem("login_time"),Ot=!0;const c=i.query.table;c?e.push({path:"/",query:{table:c}}):e.push({path:"/takeReserve"})}function Mt(){localStorage.setItem("order_cartDishs",JSON.stringify(tt.cartDishs.value));const c=[],h=K.dishDatas.value;for(let b=0;b<h.length;b++)h[b].quantity>0&&c.push({id:h[b].id,quantity:h[b].quantity});localStorage.setItem("order_dishDatas",JSON.stringify(c)),(tt.cartDishs.value.length>0||c.length>0)&&localStorage.setItem("login_time",JSON.stringify(Date.now())),Ot&&(Ot=!1,localStorage.removeItem("login_time"))}return $e(()=>{Mt()}),window.addEventListener("beforeunload",c=>{x.cleanup(),Mt()}),(c,h)=>{const b=Lt("touch"),q=Lt("touch-options");return l(),d(J,null,[s("div",Ln,[y(Bn,{types:p(x).orderMenuTab,typeIndex:w.value,tabItems:V.value,tableId:ot(),onClickType:st,onSwitchToWelcome:ce},null,8,["types","typeIndex","tabItems","tableId"]),h[2]||(h[2]=s("div",{class:"pb-8"},null,-1)),h[3]||(h[3]=s("div",{class:"pb-7 sm:pb-7 md:pb-7 lg:pb-7"},null,-1)),y(Nn,{duration:"3000",position:"center"}),At((l(),d("div",{onTouchstart:H,style:{"overflow-x":"hidden","touch-action":"pan-y"},class:"h-full"},[G.value?(l(),et(Zs,{key:0,currentCustomDish:Q.value},null,8,["currentCustomDish"])):(l(),et(qa,{key:1,updateCartItemCount:it,rateDish:v,likedItemsRef:j.value,dislikedItemsRef:L.value},null,8,["likedItemsRef","dislikedItemsRef"]))],32)),[[b,ut,"swipe",{left:!0,passive:!0}],[b,pt,"swipe",{right:!0,passive:!0}],[q,{swipeTolerance:100}]]),h[4]||(h[4]=s("div",{class:"pb-6"},null,-1)),s("div",An,[s("div",qn,[s("div",On,[ot()?(l(),et(p(W),{key:0,label:c.$t("common.orders"),icon:"pi pi-list",class:"p-button-secondary",onClick:I},null,8,["label"])):_("",!0)]),s("div",Rn,[y(p(re),{value:p(A),severity:"danger",onClick:ft},{default:z(()=>h[1]||(h[1]=[s("i",{class:"pi pi-shopping-cart",style:{"font-size":"2rem"}},null,-1)])),_:1,__:[1]},8,["value"])])])])]),y(xs,{ref_key:"cartRef",ref:Z,updateCartItemCount:it,checkout:Pt,isTakeaway:ot()==null},null,8,["isTakeaway"]),y(p(wt),{visible:O.value,"onUpdate:visible":h[0]||(h[0]=U=>O.value=U),header:c.$t("common.completedOrders"),modal:"",style:{width:"80vw","max-width":"700px"}},{default:z(()=>{var U,M;return[s("div",En,[s("div",Vn,[(U=C.value.adultPrice)!=null&&U.quantity&&C.value.adultPrice.quantity!=0?(l(),d("div",jn,[s("div",Fn,[s("span",Mn,f(c.$t("common.adult")),1),s("small",null,f(c.$t("common.quantity"))+": "+f(C.value.adultPrice.quantity),1)]),s("div",Kn,[s("span",null,"€"+f((Number(C.value.adultPrice.price)*C.value.adultPrice.quantity).toFixed(2)),1)])])):_("",!0),(M=C.value.childrenPrice)!=null&&M.quantity&&C.value.childrenPrice.quantity!=0?(l(),d("div",Wn,[s("div",Hn,[s("span",Un,f(c.$t("common.children")),1),s("small",null,f(c.$t("common.quantity"))+": "+f(C.value.childrenPrice.quantity),1)]),s("div",Qn,[s("span",null,"€"+f((Number(C.value.childrenPrice.price)*C.value.childrenPrice.quantity).toFixed(2)),1)])])):_("",!0)]),p(x).table.value.order.length===0?(l(),d("div",Jn,f(c.$t("common.noOrders")),1)):(l(),d("div",Xn,[(l(!0),d(J,null,Y(p(x).table.value.order,(D,R)=>(l(),d("div",{key:R,class:"flex justify-content-between border-bottom-1 pb-2"},[s("div",Gn,[s("span",Yn,f(p(x).getDishName(D)),1),s("small",null,f(c.$t("common.quantity"))+": "+f(D.quantity),1)]),s("div",Zn,[s("span",null,"€"+f((D.price*D.quantity).toFixed(2)),1)])]))),128))]))]),s("div",ti,f(c.$t("common.total"))+": €"+f(C.value.total),1)]}),_:1},8,["visible","header"])],64)}}},pi=Ct(ei,[["__scopeId","data-v-1f2a4695"]]);export{pi as default};
