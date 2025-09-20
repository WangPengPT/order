import{v as yt,B as bt,x as $t,y as St,f as u,p as r,q as et,i as x,z as nt,A as B,C as wt,h as s,t as f,n as ut,r as S,g as y,F as J,l as Y,k as p,c as w,j as N,D as Nt,u as gt,s as kt,e as ee,E as fe,G as ve,b as ht,w as he,m as it,R as ae,H as Et,I as be,J as Vt,K as me,L as Pt,M as ge,N as Kt,O as At,P as Lt,Q as ye,S as $e,T as zt,o as se,a as xe,U as we,V as ke,d as _e}from"./index-TFUA0GIX.js";import{s as _t,a as Te,b as Wt,c as ne,d as Ie}from"./index-DQDybUsa.js";import{s as W,a as ie}from"./index-hahz_t3D.js";import{D as K,c as tt,s as Ce}from"./index-B5t7TEyf.js";import{_ as Dt}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{c as Ht,d as Ut,b as Qt,a as Jt,s as Xt}from"./index-oEradP5z.js";import{s as Se}from"./index-Bme2OXeq.js";var De=yt`
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
`,Be={root:function(e){var i=e.props;return["p-tag p-component",{"p-tag-info":i.severity==="info","p-tag-success":i.severity==="success","p-tag-warn":i.severity==="warn","p-tag-danger":i.severity==="danger","p-tag-secondary":i.severity==="secondary","p-tag-contrast":i.severity==="contrast","p-tag-rounded":i.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},Pe=bt.extend({name:"tag",style:De,classes:Be}),ze={name:"BaseTag",extends:$t,props:{value:null,severity:null,rounded:Boolean,icon:String},style:Pe,provide:function(){return{$pcTag:this,$parentInstance:this}}};function Tt(t){"@babel/helpers - typeof";return Tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tt(t)}function Ne(t,e,i){return(e=Ae(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Ae(t){var e=Le(t,"string");return Tt(e)=="symbol"?e:e+""}function Le(t,e){if(Tt(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var d=i.call(t,e);if(Tt(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var xt={name:"Tag",extends:ze,inheritAttrs:!1,computed:{dataP:function(){return St(Ne({rounded:this.rounded},this.severity,this.severity))}}},qe=["data-p"];function Oe(t,e,i,d,m,o){return r(),u("span",B({class:t.cx("root"),"data-p":o.dataP},t.ptmi("root")),[t.$slots.icon?(r(),et(wt(t.$slots.icon),B({key:0,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(r(),u("span",B({key:1,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):x("",!0),t.value!=null||t.$slots.default?nt(t.$slots,"default",{key:2},function(){return[s("span",B({class:t.cx("label")},t.ptm("label")),f(t.value),17)]}):x("",!0)],16,qe)}xt.render=Oe;var Re=yt`
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
`,Ee={root:function(e){var i=e.props;return["p-avatar p-component",{"p-avatar-image":i.image!=null,"p-avatar-circle":i.shape==="circle","p-avatar-lg":i.size==="large","p-avatar-xl":i.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},Ve=bt.extend({name:"avatar",style:Re,classes:Ee}),je={name:"BaseAvatar",extends:$t,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Ve,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function It(t){"@babel/helpers - typeof";return It=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},It(t)}function Gt(t,e,i){return(e=Fe(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Fe(t){var e=Me(t,"string");return It(e)=="symbol"?e:e+""}function Me(t,e){if(It(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var d=i.call(t,e);if(It(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var oe={name:"Avatar",extends:je,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}},computed:{dataP:function(){return St(Gt(Gt({},this.shape,this.shape),this.size,this.size))}}},Ke=["aria-labelledby","aria-label","data-p"],We=["data-p"],He=["data-p"],Ue=["src","alt","data-p"];function Qe(t,e,i,d,m,o){return r(),u("div",B({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root"),{"data-p":o.dataP}),[nt(t.$slots,"default",{},function(){return[t.label?(r(),u("span",B({key:0,class:t.cx("label")},t.ptm("label"),{"data-p":o.dataP}),f(t.label),17,We)):t.$slots.icon?(r(),et(wt(t.$slots.icon),{key:1,class:ut(t.cx("icon"))},null,8,["class"])):t.icon?(r(),u("span",B({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon"),{"data-p":o.dataP}),null,16,He)):t.image?(r(),u("img",B({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return o.onError&&o.onError.apply(o,arguments)})},t.ptm("image"),{"data-p":o.dataP}),null,16,Ue)):x("",!0)]})],16,Ke)}oe.render=Qe;const Je={class:"grid"},Xe={class:"flex flex-column"},Ge=["onClick"],Ye={class:"p-1 flex-shrink-0 w-7rem h-7rem flex align-items-center justify-content-center overflow-hidden"},Ze=["src","alt"],ta={class:"flex flex-column justify-content-center"},ea={class:"font-bold"},aa={class:"flex flex-wrap gap-2"},sa={class:"flex gap-1 align-items-center"},na={class:"text-color-secondary line2"},ia={key:0,class:"text-xl font-bold text-primary"},oa={key:1,class:"flex align-items-center gap-1"},ra={class:"text-l font-bold text-color-secondary"},la={class:"text-sm line-through text-500"},ua={key:2,class:"flex gap-2 mr-2",id:"card-quantity"},da={class:"w-2rem text-xl text-center"},ca={key:3,class:"flex gap-2 mr-2"},pa={key:0,class:"m-2 mt-0"},fa={class:"flex flex-row justify-content-between align-content-center"},va={class:"flex flex-column"},ha={class:"text-l font-bold"},ba={key:0,class:"text-l font-bold text-color-secondary"},ma={key:1,class:"flex align-items-center gap-1"},ga={class:"text-l font-bold text-color-secondary"},ya={class:"text-sm line-through text-500"},$a={key:0,class:"flex ml-2 mr-2"},xa={class:"w-2rem text-xl text-center"},wa={key:1,class:"flex gap-2 mr-3 pt-2 pb-2"},ka={class:"max-w-5rem flex align-items-center"},_a={class:"font-bold whitespace-nowrap"},Ta={class:"mb-2 flex justify-content-center"},Ia={class:"font-bold text-center"},Ca={class:"mb-2"},Sa={class:"text-color-secondary m-0 line-height-3 line2 text-center"},Da={class:"mb-2"},Ba={class:"flex justify-content-center"},Pa=["src","alt"],za={class:"flex align-items-center gap-2"},Na=["src","alt"],Aa={class:"flex align-items-center gap-3 ml-auto"},La={__name:"DishList",props:{updateCartItemCount:{type:Function,required:!0},rateDish:{type:Function,required:!0},likedItemsRef:Array,dislikedItemsRef:Array},setup(t){const e=K.dishes;let i={rated:!1,id:null,like:0,rate:0};function d(){var n;const a=w.currentPage.value,l=(n=a==null?void 0:a.data)==null?void 0:n.logoPath;return l?w.pathFormated(l):"/images/logo_logo.png"}const m=(a,l)=>{const n=e.value[a].quantity+l;n>=0&&(e.value[a].quantity=n,F.updateCartItemCount(l))},o=(a,l)=>{const n=K.dishDatas.value[a].quantity+l;n>=0&&(K.dishDatas.value[a].quantity=n,F.updateCartItemCount(l))},T=a=>K.dishDatas.value[a]?K.dishDatas.value[a].quantity:0,k=a=>{const l=K.dishDatas.value[a];if(l){if(!l.category){const n=e.value.find(A=>A.handle===l.handle);if(n.limit)return L(n)}return L(l)}return!0},L=a=>{const l=a.quantity;let n=3;if(a.price>0&&(n=9),a.limit){const A=a.id,$=q(),st=($.peopleType.adults+$.peopleType.children)*a.limit,vt=$.order.find(mt=>mt.dishid==A);let rt=0;if(a.subitem)for(const mt of a.subitem){rt+=T(mt);const Bt=$.order.find(qt=>qt.dishid==Q(mt));Bt&&(rt+=Bt.quantity)}else rt+=a.quantity,vt&&(rt+=vt.quantity);return l>=n||st&&rt>=st}return l>=n},R=a=>K.dishDatas.value[a]?!K.dishDatas.value[a].disable:!0,V=a=>K.dishDatas.value[a]?K.dishDatas.value[a].soldout:!1,D=a=>K.dishDatas.value[a]?w.getItemLocalValue(K.dishDatas.value[a],"subname"):"",Q=a=>K.dishDatas.value[a]?K.dishDatas.value[a].id:0,G=a=>K.dishDatas.value[a]?K.dishDatas.value[a].price:10,z=a=>K.dishDatas.value[a]?K.dishDatas.value[a].dis_price:10,at=a=>{const l=K.dishDatas.value[a];return l&&l.discount?l.discount:0},Z=a=>at(a)>0,j=a=>G(a)>0?!Z(a):!1,q=()=>w.getTableValue();function H(){F.rateDish(i.id,i.like,i.rate,i.rated),i.id=null,i.like=0,i.rate=0,i.rated=!1}const dt=a=>{const l=F.likedItemsRef.indexOf(a);if(i.id=a.id,l!==-1)F.likedItemsRef.splice(l,1),i.like+=-1,i.rate+=-1,i.rated=!1;else{i.rated=!0,F.likedItemsRef.push(a);const n=F.dislikedItemsRef.indexOf(a);n!==-1?(F.dislikedItemsRef.splice(n,1),i.like+=1):(i.like+=1,i.rate+=1)}},ft=a=>{const l=F.dislikedItemsRef.indexOf(a);if(i.id=a.id,l!==-1)F.dislikedItemsRef.splice(l,1),i.rate+=-1,i.rated=!1;else{i.rated=!0,F.dislikedItemsRef.push(a);const n=F.likedItemsRef.indexOf(a);n!==-1?(F.likedItemsRef.splice(n,1),i.like+=-1):i.rate+=1}},F=t,ot=S(!1),X=S({}),v=a=>{ot.value=!0,X.value=a},g=a=>{a.target.src="/images/default.png"};function I(a){_(a.target,300)}function P(a){_(a.target,110)}function _(a,l){const n=a.naturalWidth,A=a.naturalHeight,$=Math.min(n,l),st=$/n,vt=A*st;a.style.width=`${$}px`,a.style.height=`${vt}px`}return(a,l)=>(r(),u(J,null,[s("div",Je,[(r(!0),u(J,null,Y(p(e),(n,A)=>(r(),u("div",{key:A,class:"col-12 sm:col-12 md:col-6 lg:col-4 border-round surface-section shadow-1 p-2"},[s("div",Xe,[s("div",{class:ut(["flex flex-row",n.subitem?"":"flex-grow-1"]),onClick:$=>v(n)},[s("div",Ye,[s("img",{src:n.image,alt:n.name,class:"w-full h-full",style:{"object-fit":"cover"},onError:g,onLoad:P},null,40,Ze)]),s("div",ta,[s("div",ea,f(p(w).getItemLocalValue(n,"name")),1),s("div",null,[s("div",aa,[s("div",sa,[(r(),u(J,null,Y(5,$=>s("i",{key:$,class:ut(["pi invert-star",$<=Math.floor(n.likes/n.rates*5)?"pi-star-fill":$-.5<=n.likes/n.rates*5?"pi-star-half-fill":"pi-star"]),style:{color:"black"}},null,2)),64)),s("p",null,"("+f(n.rates?n.rates:0)+")",1)])])]),s("div",null,[s("p",na,f(p(w).getItemLocalValue(n,"description")),1)])])],10,Ge),n.subitem===void 0?(r(),u("div",{key:0,class:ut(["flex ml-2 mr-2 mb-2",n.price>0?"justify-content-between":"justify-content-end"])},[!n.discount&&n.price>0?(r(),u("span",ia,"€"+f(n.price),1)):x("",!0),n.discount?(r(),u("div",oa,[s("span",ra,"€"+f(n.dis_price),1),s("span",la,"€"+f(n.price),1),y(p(xt),{severity:"danger",value:"-"+n.discount+"%"},null,8,["value"])])):x("",!0),n.soldout?x("",!0):(r(),u("div",ua,[y(p(W),{icon:"pi pi-minus",rounded:"",disabled:n.quantity<=0,onClick:$=>m(A,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),s("span",da,f(n.quantity),1),y(p(W),{icon:"pi pi-plus",rounded:"",disabled:L(n),onClick:$=>m(A,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])),n.soldout?(r(),u("div",ca,[y(p(xt),{severity:"danger",value:a.$t("common.soldout")},null,8,["value"])])):x("",!0)],2)):x("",!0),n.subitem?(r(!0),u(J,{key:1},Y(n.subitem,($,st)=>(r(),u(J,{key:"index"},[R($)?(r(),u("div",pa,[s("div",fa,[s("div",va,[s("span",ha,f(D($)),1),j($)?(r(),u("span",ba,"€"+f(G($)),1)):x("",!0),Z($)?(r(),u("div",ma,[s("span",ga,"€"+f(z($)),1),s("span",ya,"€"+f(G($)),1),y(p(xt),{severity:"danger",value:"-"+at($)+"%"},null,8,["value"])])):x("",!0)]),V($)?x("",!0):(r(),u("div",$a,[y(p(W),{icon:"pi pi-minus",rounded:"",disabled:T($)<=0,onClick:vt=>o($,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),s("span",xa,f(T($)),1),y(p(W),{icon:"pi pi-plus",rounded:"",disabled:k($),onClick:vt=>o($,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])),V($)?(r(),u("div",wa,[y(p(xt),{severity:"danger",value:a.$t("common.soldout")},null,8,["value"])])):x("",!0)])])):x("",!0)],64))),128)):x("",!0)])]))),128))]),y(p(_t),{visible:ot.value,"onUpdate:visible":l[2]||(l[2]=n=>ot.value=n),modal:"",header:"dish",style:Nt([{width:"23rem"},{width:"80vw","max-width":"700px"}]),onHide:l[3]||(l[3]=n=>H())},{header:N(()=>[s("div",ka,[y(p(oe),{image:d(),class:"w-full"},null,8,["image"])]),s("span",_a,f(a.$t("common.details")),1)]),default:N(()=>[s("div",Ta,[s("span",Ia,f(X.value.name),1)]),s("div",Ca,[s("span",Sa,f(X.value.description),1)]),s("div",Da,[s("div",Ba,[s("img",{class:"w-full h-auto object-contain",src:X.value.image,alt:X.value.name,onError:g,onLoad:I},null,40,Pa)])]),s("div",za,[(r(!0),u(J,null,Y(X.value.allergies,(n,A)=>(r(),u("img",{src:"images/"+n+".png",alt:n,class:"w-2rem h-2rem border-round flex-shrink-0",style:{"object-fit":"cover","min-width":"2rem"}},null,8,Na))),256)),s("div",Aa,[s("button",{onClick:l[0]||(l[0]=n=>dt(X.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[s("i",{class:ut(["pi pi-thumbs-up text-xl",F.likedItemsRef.includes(X.value)?"text-green-500":"text-gray-400"])},null,2)]),s("button",{onClick:l[1]||(l[1]=n=>ft(X.value)),class:"p-0 border-none bg-transparent cursor-pointer"},[s("i",{class:ut(["pi pi-thumbs-down text-xl",F.dislikedItemsRef.includes(X.value)?"text-red-500":"text-gray-400"])},null,2)])])])]),_:1},8,["visible"])],64))}},qa=Dt(La,[["__scopeId","data-v-77d934b4"]]);var Oa=yt`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,Ra={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Ea=bt.extend({name:"card",style:Oa,classes:Ra}),Va={name:"BaseCard",extends:$t,style:Ea,provide:function(){return{$pcCard:this,$parentInstance:this}}},re={name:"Card",extends:Va,inheritAttrs:!1};function ja(t,e,i,d,m,o){return r(),u("div",B({class:t.cx("root")},t.ptmi("root")),[t.$slots.header?(r(),u("div",B({key:0,class:t.cx("header")},t.ptm("header")),[nt(t.$slots,"header")],16)):x("",!0),s("div",B({class:t.cx("body")},t.ptm("body")),[t.$slots.title||t.$slots.subtitle?(r(),u("div",B({key:0,class:t.cx("caption")},t.ptm("caption")),[t.$slots.title?(r(),u("div",B({key:0,class:t.cx("title")},t.ptm("title")),[nt(t.$slots,"title")],16)):x("",!0),t.$slots.subtitle?(r(),u("div",B({key:1,class:t.cx("subtitle")},t.ptm("subtitle")),[nt(t.$slots,"subtitle")],16)):x("",!0)],16)):x("",!0),s("div",B({class:t.cx("content")},t.ptm("content")),[nt(t.$slots,"content")],16),t.$slots.footer?(r(),u("div",B({key:1,class:t.cx("footer")},t.ptm("footer")),[nt(t.$slots,"footer")],16)):x("",!0)],16)],16)}re.render=ja;var Fa=yt`
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
`,Ma={root:function(e){var i=e.instance,d=e.props;return["p-textarea p-component",{"p-filled":i.$filled,"p-textarea-resizable ":d.autoResize,"p-textarea-sm p-inputfield-sm":d.size==="small","p-textarea-lg p-inputfield-lg":d.size==="large","p-invalid":i.$invalid,"p-variant-filled":i.$variant==="filled","p-textarea-fluid":i.$fluid}]}},Ka=bt.extend({name:"textarea",style:Fa,classes:Ma}),Wa={name:"BaseTextarea",extends:Te,props:{autoResize:Boolean},style:Ka,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function Ct(t){"@babel/helpers - typeof";return Ct=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ct(t)}function Ha(t,e,i){return(e=Ua(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Ua(t){var e=Qa(t,"string");return Ct(e)=="symbol"?e:e+""}function Qa(t,e){if(Ct(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var d=i.call(t,e);if(Ct(d)!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var jt={name:"Textarea",extends:Wa,inheritAttrs:!1,observer:null,mounted:function(){var e=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){e.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(e){this.autoResize&&this.resize(),this.writeValue(e.target.value,e)}},computed:{attrs:function(){return B(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return St(Ha({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},Ja=["value","name","disabled","aria-invalid","data-p"];function Xa(t,e,i,d,m,o){return r(),u("textarea",B({class:t.cx("root"),value:t.d_value,name:t.name,disabled:t.disabled,"aria-invalid":t.invalid||void 0,"data-p":o.dataP,onInput:e[0]||(e[0]=function(){return o.onInput&&o.onInput.apply(o,arguments)})},o.attrs),null,16,Ja)}jt.render=Xa;const Ga={key:0,class:"text-3xl font-bold"},Ya={class:"flex flex-column gap-3 p-1"},Za={key:0,class:"flex flex-column gap-1"},ts={key:0,class:"m-0"},es={key:0,class:"m-0"},as={class:"flex justify-content-between gap-4 mt-1"},ss={class:"flex align-items-center gap-2"},ns=["src","alt"],is={class:"flex-grow-1 min-width-0 max-w-18rem"},os={class:"flex flex-column gap-1"},rs={class:"flex align-items-center gap-2"},ls={class:"text-xl font-bold line1 whitespace-nowrap overflow-hidden text-overflow-ellipsis",style:{"max-width":"20rem"}},us={class:"flex align-items-end gap-1"},ds={key:0,class:"text-xl font-bold text-primary"},cs={key:1,class:"text-xl font-bold text-primary"},ps={key:2,class:"text-sm text-color-secondary"},fs={key:0,class:"text-xs text-primary"},vs={class:"flex-shrink-0 flex flex-wrap justify-content-between align-items-center gap-1"},hs={class:"flex flex-wrap justify-content-between align-content-center"},bs={class:"flex align-items-center gap-1"},ms={class:"w-2rem text-center"},gs={class:"flex flex-column gap-2 mt-2"},ys={for:"in_label"},$s={for:"in_label"},xs={class:"bottom-0 left-0 mt-2"},ws={class:"text-2xl font-bold"},ks={class:"text-2xl font-bold text-primary pl-2"},_s={class:"flex justify-content-between"},Ts={__name:"Cart",props:{updateCartItemCount:{type:Function,required:!0},checkout:{type:Function,required:!0},isTakeaway:Boolean},setup(t,{expose:e}){const i=ee(),{t:d}=gt(),m=tt.cartDishs;w.freeCounts;const o=S([]),T=S(),k=S(),L=S(!1),R=S(!1),V=S(!0),D=S(""),Q=S("");function G(a,l){let n="";return a.forEach(A=>{n=n+d(`${l}Data.ingredients.${A.id}`)+" / "}),n}function z(a,l,n){const A=w.customDishAPI.getCustomDishByName(a);if(A){const $=A.types[l].typeName;return d(`${n}Data.${$}`)}else return null}const at=(a,l)=>{const n=o.value[a].quantity+l;n>=0&&(o.value[a].quantity=n,H.updateCartItemCount(l))};function Z(a){a&&T.value&&(T.value.dishNote=k.value?k.value:void 0),R.value=!1}function j(){k.value&&(k.value=void 0),T.value&&(T.value=void 0)}function q(a){T.value=a,k.value=T.value.dishNote?T.value.dishNote:void 0,R.value=!0}const H=t;e({showDishList:a=>{L.value=!0,o.value.length=0;for(let l=0;l<a.length;l++)o.value.push(a[l]);V.value=o.value.length==0&&m.length==0}});function ft(a){switch(a){case"Bibimbap":return"customDishBibimbap";case"Sushi Aleatória®":return"customDishSushiBox";case"MY BOX":return"customDishMyBox";default:return"Unexpected"}}function F(a){tt.removeItem(a)}function ot(){H.isTakeaway?X():v()}function X(){i.push({path:"/paymentPage"})}function v(){H.checkout({name:D.value,note:Q.value})&&(L.value=!1),m.value.forEach(a=>{a.dishNote=void 0}),o.value.forEach(a=>{a.dishNote=void 0}),Q.value="",localStorage.removeItem("order_cartDishs"),localStorage.removeItem("order_dishDatas")}function g(a){return a.subname!=""&&a.subname!="Default Title"?a.name+" "+a.subname:a.name}function I(){let a=0;return m.value.forEach(l=>{a+=l.dis_price?l.dis_price*l.count:l.price*l.count}),o.value.forEach(l=>{a+=l.dis_price?l.dis_price*l.quantity:l.price*l.quantity}),"€"+a.toFixed(2)}const P=a=>{a.target.src="/images/default.png"},_=a=>{const l=a.quantity;let n=3;return a.price>0&&(n=9),l>=n};return(a,l)=>(r(),u(J,null,[y(p(_t),{class:"bg-primary-reverse text-sm md:text-lg lg:text-xl",visible:L.value,"onUpdate:visible":l[2]||(l[2]=n=>L.value=n),modal:"",header:a.$t("common.cart"),style:Nt([{backgroundColor:"rgba(250, 250, 250, 1)",height:"100%",minWidth:"24rem"},{width:"80vw","max-width":"700px"}]),dismissableMask:!0},{footer:N(()=>[s("div",xs,[s("span",ws,f(a.$t("common.total"))+": ",1),s("span",ks,f(I()),1),y(p(W),{icon:"pi pi-plus",class:"p-button-success p-button-rounded ml-3",onClick:ot,label:t.isTakeaway?p(d)("common.pay"):p(d)("common.send")},null,8,["label"])])]),default:N(()=>[V.value?(r(),u("h2",Ga,"Cart is empty.")):x("",!0),s("div",Ya,[(r(!0),u(J,null,Y(p(m),(n,A)=>(r(),et(p(re),{style:{overflow:"hidden"},key:A},{title:N(()=>[kt(f(a.$t(`common.${n.name.toLowerCase().replace(/\s+/g,"")}`)),1)]),subtitle:N(()=>[kt(f(a.$t("common.price"))+" : "+f(n.price)+"€",1)]),content:N(()=>[p(w).customDishAPI.customDishes.value.find($=>$.name==n.name)?(r(),u("div",Za,[(r(!0),u(J,null,Y(n.notesAndId,($,st)=>(r(),u("div",null,[n.notesAndId[st].length!==0?(r(),u("span",ts,f(z(n.name,st,ft(n.name)))+": "+f(G(n.notesAndId[st],ft(n.name))),1)):x("",!0)]))),256)),s("div",null,[n.dishNote?(r(),u("span",es,f(a.$t("common.note"))+": "+f(n.dishNote),1)):x("",!0)])])):x("",!0)]),footer:N(()=>[s("div",as,[y(p(W),{label:a.$t("common.edit")+" "+a.$t("common.note"),severity:"contrast",onClick:$=>q(n)},null,8,["label","onClick"]),y(p(W),{label:a.$t("common.remove"),severity:"danger",onClick:$=>F(n)},null,8,["label","onClick"])])]),_:2},1024))),128)),(r(!0),u(J,null,Y(o.value,(n,A)=>(r(),u("div",{key:A,class:"p-2 border-round shadow-1 transition-all transition-duration-200 hover:shadow-3 flex flex-column gap-1"},[s("div",ss,[s("img",{src:n.image,alt:n.name,class:"w-4rem h-4rem border-round flex-shrink-0",onError:P,style:{"object-fit":"cover","min-width":"4rem"}},null,40,ns),s("div",is,[s("div",os,[s("div",rs,[s("span",ls,f(g(n)),1)])]),s("div",us,[n.dis_price?(r(),u("span",ds,"€"+f(n.dis_price),1)):x("",!0),!n.dis_price&&n.price>0?(r(),u("span",cs,"€"+f(n.price),1)):x("",!0),n.price>0?(r(),u("span",ps,"/uni.")):x("",!0)])])]),s("div",null,[n.dishNote?(r(),u("span",fs,f(a.$t("common.note")+": "+n.dishNote),1)):x("",!0)]),s("div",vs,[s("div",hs,[y(p(W),{label:a.$t("common.edit")+" "+a.$t("common.note"),severity:"contrast",class:"w-3.5rem h-2rem",onClick:$=>q(n)},null,8,["label","onClick"])]),s("div",bs,[y(p(W),{icon:"pi pi-minus",rounded:"",disabled:n.quantity<=0,onClick:$=>at(A,-1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"]),s("span",ms,f(n.quantity),1),y(p(W),{icon:"pi pi-plus",rounded:"",disabled:_(n),onClick:$=>at(A,1),class:"w-2rem h-2rem"},null,8,["disabled","onClick"])])])]))),128))]),s("div",gs,[y(p(Wt),{variant:"in"},{default:N(()=>[y(p(ne),{id:"in_label",modelValue:D.value,"onUpdate:modelValue":l[0]||(l[0]=n=>D.value=n),variant:"filled",maxlength:"20"},null,8,["modelValue"]),s("label",ys,f(a.$t("common.name")),1)]),_:1}),y(p(Wt),{variant:"in"},{default:N(()=>[y(p(jt),{id:"in_label",class:"min-w-full",rows:"5",modelValue:Q.value,"onUpdate:modelValue":l[1]||(l[1]=n=>Q.value=n),variant:"filled",maxlength:"200"},null,8,["modelValue"]),s("label",$s,f(a.$t("common.observation")),1)]),_:1})])]),_:1},8,["visible","header"]),y(p(_t),{visible:R.value,"onUpdate:visible":l[6]||(l[6]=n=>R.value=n),header:a.$t("common.note"),onHide:l[7]||(l[7]=n=>j()),modal:"",dismissableMask:!0},{default:N(()=>[y(p(jt),{modelValue:k.value,"onUpdate:modelValue":l[3]||(l[3]=n=>k.value=n),rows:"5",cols:"30",placeholder:a.$t("common.edit")+" "+a.$t("common.note")+"...",maxlength:"100"},null,8,["modelValue","placeholder"]),s("div",_s,[y(p(W),{label:a.$t("common.cancel"),severity:"danger",onClick:l[4]||(l[4]=n=>Z(!1))},null,8,["label"]),y(p(W),{label:a.$t("common.save"),severity:"primary",size:"sm",onClick:l[5]||(l[5]=n=>Z(!0))},null,8,["label"])])]),_:1},8,["visible","header"])],64))}},Is=Dt(Ts,[["__scopeId","data-v-0acb271b"]]);var Cs=yt`
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
`,Ss={root:"p-overlaybadge"},Ds=bt.extend({name:"overlaybadge",style:Cs,classes:Ss}),Bs={name:"OverlayBadge",extends:ie,style:Ds,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},le={name:"OverlayBadge",extends:Bs,inheritAttrs:!1,components:{Badge:ie}};function Ps(t,e,i,d,m,o){var T=fe("Badge");return r(),u("div",B({class:t.cx("root")},t.ptmi("root")),[nt(t.$slots,"default"),y(T,B(t.$props,{pt:t.ptm("pcBadge")}),null,16,["pt"])],16)}le.render=Ps;function Yt(t){switch(t){case"Sushi Aleatória®":return"customDishSushiBox";case"Bibimbap":return"customDishBibimbap";case"MY BOX":return"customDishMyBox";default:return"unexpected"}}const zs={class:"m-3"},Ns={class:"flex flex-column gap-2"},As={class:"w-full flex justify-content-center"},Ls={key:0,class:"max-w-19rem"},qs=["src"],Os={style:{width:"300px",height:"300px",background:"url(/boxImage/box.png)"}},Rs={key:0,class:"flex align-items-center justify-content-center text-4xl font-bold text-white w-full h-full"},Es={key:1,class:"grid m-0 p-2"},Vs=["onClick"],js={class:"flex align-items-center justify-content-center font-bold m-0 p-0",style:{width:"94px",height:"94px"}},Fs=["src"],Ms={class:"flex flex-wrap justify-content-between align-items-center m-1"},Ks={class:"flex gap-1 align-items-center"},Ws={key:0},Hs={class:"font-bold mb-2"},Us={key:1,class:"flex justify-content-between gap-2 mt-3"},Qs={class:"font-bold mb-2"},Js={class:"flex mr-2"},Xs={class:"w-3rem text-xl text-center"},Gs={class:"font-bold block mb-2"},Ys={class:"flex flex-wrap"},Zs={key:2,class:"flex flex-wrap gap-2 mt-3"},tn={class:"font-bold block mb-2"},en={class:"font-bold block mb-2 text-center"},an={class:"flex flex-wrap gap-2 mt-3"},sn={__name:"CustomDish",props:{currentCustomDish:Object},setup(t){const{locale:e}=gt(),i=t,d=ve(),{t:m}=gt(),o=ht(()=>i.currentCustomDish),T=ht(()=>o.boxImages),k=S(0),L=ht(()=>o.value.initialPrice),R=S(L.value);he(()=>o.value,v=>{R.value=(v==null?void 0:v.initialPrice)??0,k.value=0,V.value=null});const V=S(null),D=ht(()=>{const v=e.value,g=`title_${v}`,I=`description_${v}`;return o.value.descriptions.map(P=>({title:P[g],descriptions:P.descriptions.map(_=>_[I]),image:P==null?void 0:P.image}))}),Q=ht(()=>{var I,P;const v=Number(((I=o.value)==null?void 0:I.like)??0),g=Number(((P=o.value)==null?void 0:P.rate)??0);return g?v/g*5:0});function G(v,g,I){const P=v[g];if(P.selected){P.selected=!1;return}else{const a=v.filter(l=>l.selected).length;if(I===1){F(v),P.selected=!0;return}a<I&&(P.selected=!0)}}function z(v,g,I){G(v,g,I),at(v)}function at(v){let g=L.value;if(!v||!Array.isArray(v))return R.value=g,g;const I=v.reduce((P,_)=>{if(!_.dishes||!Array.isArray(_.dishes))return P;const a=_.dishes.reduce((l,n)=>l+(n.selected?n.price:0),0);return P+a},0);return g+=I,R.value=g,g}function Z(v){return v.selected}function j(){if(!ot(o.value.types))return;const v=H(o.value.types),g=dt(o.value.types);tt.addItem({dishid:-1,name:o.value.name,category:o.value.category,count:k.value!==0?k.value:1,price:R.value===0?at():R.value,notes:v,notesAndId:g}),console.log("CART: ",tt.cartDishs),ft(o.value.types),it.show({severity:"info",summary:"info",detail:m("customDishBibimbapVue.addToCartSuccessBibimbap")})}function q(v){return!v||!v.dishes?"":v.dishes.filter(I=>I.selected).map(I=>I.name).join(",")}function H(v){return v?v.map(g=>q(g)):[]}function dt(v){return v?v.map(g=>g.dishes?g.dishes.filter(I=>I.selected).map(I=>({id:I.dishid,name:I.name})):[]):[]}function ft(v){v&&v.forEach(g=>{g.dishes&&g.dishes.forEach(I=>{I.selected=!1})})}function F(v){v.forEach(g=>g.selected=!1)}function ot(v){if(o.value.options.quantity&&k.value<=0)return it.show({severity:"warn",detail:m("notification.quantity_must_be_positive")}),!1;for(const g of v){const I=g.dishes.filter(P=>P.selected).length;if(console.log(I,g.minQuantity),I<g.minQuantity){const P=g.typeName;return it.show({severity:"warn",detail:m("notification.select_type_of",{name:P})}),!1}}return!0}function X(v){v?w.customDishAPI.like(o.value.id)&&(V.value="like",d.add({severity:"success",summary:m("common.success"),detail:m("common.rate")+" "+m("common.success"),life:750})):w.customDishAPI.unLike(o.value.id)&&(V.value="unlike",d.add({severity:"success",summary:m("common.success"),detail:m("common.rate")+" "+m("common.success"),life:750}))}return(v,g)=>{var I,P;return r(),u("div",zs,[s("div",Ns,[y(p(Jt),{class:"w-full max-w-xl mx-auto"},{default:N(()=>[(r(!0),u(J,null,Y(D.value,(_,a)=>(r(),et(p(Qt),{key:a,value:a},{default:N(()=>[y(p(Ht),null,{default:N(()=>[kt(f(_.title),1)]),_:2},1024),y(p(Ut),null,{default:N(()=>{var l;return[(r(!0),u(J,null,Y(_.descriptions,(n,A)=>(r(),u("p",{key:A},f(n),1))),128)),s("div",As,[(l=_.image)!=null&&l.src?(r(),u("div",Ls,[s("img",{src:_.image.src,class:"w-full"},null,8,qs)])):x("",!0)])]}),_:2},1024)]),_:2},1032,["value"]))),128))]),_:1}),((P=(I=o.value)==null?void 0:I.value)==null?void 0:P.name)==="MY BOX"?(r(),et(p(Jt),{key:0,class:"w-full max-w-xl mx-auto"},{default:N(()=>[y(p(Qt),{value:"0"},{default:N(()=>[y(p(Ht),null,{default:N(()=>[kt(" 🥩 "+f(v.$t("common.showMybox")),1)]),_:1}),y(p(Ut),null,{default:N(()=>[s("div",Os,[v.isEmptyArray(T.value)?(r(),u("div",Rs,f(v.$t("common.myboxAlarm")),1)):x("",!0),v.isEmptyArray(T.value)?x("",!0):(r(),u("div",Es,[(r(!0),u(J,null,Y(T.value,_=>(r(),u("div",{class:"col-4 p-0",onClick:a=>v.imageSelectAction(_)},[s("div",js,[_?(r(),u("img",{key:0,class:"m-0 p-0",src:v.imagePath(_),style:{width:"82px",height:"82px"}},null,8,Fs)):x("",!0)])],8,Vs))),256))]))])]),_:1})]),_:1})]),_:1})):x("",!0)]),s("div",Ms,[s("div",Ks,[(r(),u(J,null,Y(5,_=>s("i",{key:_,class:ut(["pi invert-star",_<=Math.floor(Q.value)?"pi-star-fill":_-.5<=Q.value?"pi-star-half":"pi-star"]),style:{color:"black"}},null,2)),64)),s("p",null,"("+f(o.value.rate?o.value.rate:0)+")",1)]),s("div",null,[y(p(W),{text:"",icon:"pi pi-thumbs-up",severity:V.value==="like"?"success":"",onClick:g[0]||(g[0]=_=>X(!0))},null,8,["severity"]),y(p(W),{text:"",icon:"pi pi-thumbs-down",severity:V.value==="unlike"?"danger":"",onClick:g[1]||(g[1]=_=>X(!1))},null,8,["severity"])])]),o.value.options.extraInfo?(r(),u("div",Ws,[s("label",Hs,f(o.value.options.extraInfo),1)])):x("",!0),o.value.options.quantity?(r(),u("div",Us,[s("div",null,[s("label",Qs,f(v.$t("common.quantity"))+" / "+f(v.$t("common.pieces")),1)]),s("div",Js,[y(p(W),{icon:"pi pi-minus",disabled:k.value<=0,onClick:g[2]||(g[2]=_=>k.value-=o.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"]),s("span",Xs,f(k.value),1),y(p(W),{icon:"pi pi-plus",disabled:k.value>=o.value.options.maxQuantity,onClick:g[3]||(g[3]=_=>k.value+=o.value.options.quantitySetp),class:"w-2rem h-2rem"},null,8,["disabled"])])])):x("",!0),(r(!0),u(J,null,Y(o.value.types,(_,a)=>(r(),u("div",null,[s("label",Gs,f(a+1)+". "+f(v.$t(`${p(Yt)(o.value.name)}Data.${_.typeName}`)),1),s("div",Ys,[(r(!0),u(J,null,Y(_.dishes,(l,n)=>(r(),et(p(W),{key:n,onClick:A=>z(_.dishes,n,k.value==0?_.maxQuantity:_.maxQuantity*k.value),class:ut([{"p-button-primary":Z(l),"p-button-outlined":!Z(l)},"m-1"])},{default:N(()=>[s("p",{class:ut({"text-gray-700":!Z(l)})},f(v.$t(`${p(Yt)(o.value.name)}Data.ingredients.${l.dishid}`)),3)]),_:2},1032,["onClick","class"]))),128))])]))),256)),L.value!==0?(r(),u("div",Zs,[s("label",tn,f(v.$t("common.price"))+":",1),s("label",en,f(R.value+"€"),1)])):x("",!0),s("div",an,[y(p(W),{icon:"pi pi-shopping-cart",onClick:g[4]||(g[4]=_=>j()),label:v.$t("common.addToCart"),class:"m-3",severity:"primary",raised:""},null,8,["label"])])])}}},nn=Dt(sn,[["__scopeId","data-v-fd2c3fd7"]]);var on=yt`
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
`,rn={root:function(e){var i=e.props;return["p-tabs p-component",{"p-tabs-scrollable":i.scrollable}]}},ln=bt.extend({name:"tabs",style:on,classes:rn}),un={name:"BaseTabs",extends:$t,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:ln,provide:function(){return{$pcTabs:this,$parentInstance:this}}},ue={name:"Tabs",extends:un,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(e){this.d_value=e}},methods:{updateValue:function(e){this.d_value!==e&&(this.d_value=e,this.$emit("update:value",e))},isVertical:function(){return this.orientation==="vertical"}}};function dn(t,e,i,d,m,o){return r(),u("div",B({class:t.cx("root")},t.ptmi("root")),[nt(t.$slots,"default")],16)}ue.render=dn;var cn={root:"p-tablist",content:function(e){var i=e.instance;return["p-tablist-content",{"p-tablist-viewport":i.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},pn=bt.extend({name:"tablist",classes:cn}),fn={name:"BaseTabList",extends:$t,props:{},style:pn,provide:function(){return{$pcTabList:this,$parentInstance:this}}},de={name:"TabList",extends:fn,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(e){e?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var e=this;setTimeout(function(){e.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(e){this.showNavigators&&this.updateButtonState(),e.preventDefault()},onPrevButtonClick:function(){var e=this.$refs.content,i=this.getVisibleButtonWidths(),d=Et(e)-i,m=Math.abs(e.scrollLeft),o=d*.8,T=m-o,k=Math.max(T,0);e.scrollLeft=Kt(e)?-1*k:k},onNextButtonClick:function(){var e=this.$refs.content,i=this.getVisibleButtonWidths(),d=Et(e)-i,m=Math.abs(e.scrollLeft),o=d*.8,T=m+o,k=e.scrollWidth-d,L=Math.min(T,k);e.scrollLeft=Kt(e)?-1*L:L},bindResizeObserver:function(){var e=this;this.resizeObserver=new ResizeObserver(function(){return e.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var e;(e=this.resizeObserver)===null||e===void 0||e.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var e=this.$refs,i=e.content,d=e.inkbar,m=e.tabs;if(d){var o=Vt(i,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(d.style.height=me(o)+"px",d.style.top=Pt(o).top-Pt(m).top+"px"):(d.style.width=ge(o)+"px",d.style.left=Pt(o).left-Pt(m).left+"px")}},updateButtonState:function(){var e=this.$refs,i=e.list,d=e.content,m=d.scrollTop,o=d.scrollWidth,T=d.scrollHeight,k=d.offsetWidth,L=d.offsetHeight,R=Math.abs(d.scrollLeft),V=[Et(d),be(d)],D=V[0],Q=V[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=m!==0,this.isNextButtonEnabled=i.offsetHeight>=L&&parseInt(m)!==T-Q):(this.isPrevButtonEnabled=R!==0,this.isNextButtonEnabled=i.offsetWidth>=k&&parseInt(R)!==o-D)},getVisibleButtonWidths:function(){var e=this.$refs,i=e.prevButton,d=e.nextButton,m=0;return this.showNavigators&&(m=((i==null?void 0:i.offsetWidth)||0)+((d==null?void 0:d.offsetWidth)||0)),m}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return St({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:Ie,ChevronRightIcon:Se},directives:{ripple:ae}},vn=["data-p"],hn=["aria-label","tabindex"],bn=["data-p"],mn=["aria-orientation"],gn=["aria-label","tabindex"];function yn(t,e,i,d,m,o){var T=At("ripple");return r(),u("div",B({ref:"list",class:t.cx("root"),"data-p":o.dataP},t.ptmi("root")),[o.showNavigators&&m.isPrevButtonEnabled?Lt((r(),u("button",B({key:0,ref:"prevButton",type:"button",class:t.cx("prevButton"),"aria-label":o.prevButtonAriaLabel,tabindex:o.$pcTabs.tabindex,onClick:e[0]||(e[0]=function(){return o.onPrevButtonClick&&o.onPrevButtonClick.apply(o,arguments)})},t.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(r(),et(wt(o.templates.previcon||"ChevronLeftIcon"),B({"aria-hidden":"true"},t.ptm("prevIcon")),null,16))],16,hn)),[[T]]):x("",!0),s("div",B({ref:"content",class:t.cx("content"),onScroll:e[1]||(e[1]=function(){return o.onScroll&&o.onScroll.apply(o,arguments)}),"data-p":o.dataP},t.ptm("content")),[s("div",B({ref:"tabs",class:t.cx("tabList"),role:"tablist","aria-orientation":o.$pcTabs.orientation||"horizontal"},t.ptm("tabList")),[nt(t.$slots,"default"),s("span",B({ref:"inkbar",class:t.cx("activeBar"),role:"presentation","aria-hidden":"true"},t.ptm("activeBar")),null,16)],16,mn)],16,bn),o.showNavigators&&m.isNextButtonEnabled?Lt((r(),u("button",B({key:1,ref:"nextButton",type:"button",class:t.cx("nextButton"),"aria-label":o.nextButtonAriaLabel,tabindex:o.$pcTabs.tabindex,onClick:e[2]||(e[2]=function(){return o.onNextButtonClick&&o.onNextButtonClick.apply(o,arguments)})},t.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(r(),et(wt(o.templates.nexticon||"ChevronRightIcon"),B({"aria-hidden":"true"},t.ptm("nextIcon")),null,16))],16,gn)),[[T]]):x("",!0)],16,vn)}de.render=yn;var $n={root:function(e){var i=e.instance,d=e.props;return["p-tab",{"p-tab-active":i.active,"p-disabled":d.disabled}]}},xn=bt.extend({name:"tab",classes:$n}),wn={name:"BaseTab",extends:$t,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:xn,provide:function(){return{$pcTab:this,$parentInstance:this}}},ce={name:"Tab",extends:wn,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(e){switch(e.code){case"ArrowRight":this.onArrowRightKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break}},onArrowRightKey:function(e){var i=this.findNextTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onHomeKey(e),e.preventDefault()},onArrowLeftKey:function(e){var i=this.findPrevTab(e.currentTarget);i?this.changeFocusedTab(e,i):this.onEndKey(e),e.preventDefault()},onHomeKey:function(e){var i=this.findFirstTab();this.changeFocusedTab(e,i),e.preventDefault()},onEndKey:function(e){var i=this.findLastTab();this.changeFocusedTab(e,i),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.findLastTab()),e.preventDefault()},onPageUpKey:function(e){this.scrollInView(this.findFirstTab()),e.preventDefault()},onEnterKey:function(e){this.changeActiveValue(),e.preventDefault()},findNextTab:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=i?e:e.nextElementSibling;return d?zt(d,"data-p-disabled")||zt(d,"data-pc-section")==="activebar"?this.findNextTab(d):Vt(d,'[data-pc-name="tab"]'):null},findPrevTab:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=i?e:e.previousElementSibling;return d?zt(d,"data-p-disabled")||zt(d,"data-pc-section")==="activebar"?this.findPrevTab(d):Vt(d,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(e,i){$e(i),this.scrollInView(i)},scrollInView:function(e){var i;e==null||(i=e.scrollIntoView)===null||i===void 0||i.call(e,{block:"nearest"})}},computed:{active:function(){var e;return ye((e=this.$pcTabs)===null||e===void 0?void 0:e.d_value,this.value)},id:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tab_").concat(this.value)},ariaControls:function(){var e;return"".concat((e=this.$pcTabs)===null||e===void 0?void 0:e.$id,"_tabpanel_").concat(this.value)},attrs:function(){return B(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return St({active:this.active})}},directives:{ripple:ae}};function kn(t,e,i,d,m,o){var T=At("ripple");return t.asChild?nt(t.$slots,"default",{key:1,dataP:o.dataP,class:ut(t.cx("root")),active:o.active,a11yAttrs:o.a11yAttrs,onClick:o.onClick}):Lt((r(),et(wt(t.as),B({key:0,class:t.cx("root"),"data-p":o.dataP,onClick:o.onClick},o.attrs),{default:N(function(){return[nt(t.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[T]])}ce.render=kn;const _n={class:"fixed top-0 left-0 w-full bg-primary-reverse",style:{"z-index":"10"}},Tn={class:"grid mt-3 ml-3"},In={class:"max-w-5rem flex align-items-center"},Cn=["src"],Sn={class:"flex align-items-center"},Dn={key:0,class:"text-color font-bold p-1"},Bn={key:1,class:"text-color font-bold p-1"},Pn={class:"card flex mr-3",style:{"margin-left":"auto"}},zn={style:{display:"flex","align-items":"center"}},Nn={style:{"flex-grow":"1",width:"0",overflow:"hidden"}},An={class:"mt-2"},Ln={class:"flex justify-content-end mt-2"},qn={__name:"HeaderTabs",props:{types:Array,typeIndex:Number,tableId:String,tabItems:Array},emits:["clickType","switchToWelcome"],setup(t,{emit:e}){const{t:i}=gt();function d(){var H;const j=w.currentPage.value,q=(H=j==null?void 0:j.data)==null?void 0:H.logoPath;return q?w.pathFormated(q):"/images/logo_logo.png"}function m(){return w.getTable()}const o=S(),T=ht(()=>[{label:i("common.options"),items:[{label:i("common.pay"),icon:"pi pi-wallet",command:()=>{z()}},{label:i("common.call"),icon:"pi pi-user-plus",command:()=>{w.send_cmd(m(),{cmd:"call"}),it.show_info(i("notification.call_msg"))}}]}]),k=j=>{o.value.toggle(j)},L=j=>{R.value.toggle(j)},R=S(),V=S(!1),D=S(),Q=S(),G=S(!0);function z(){V.value=!0}function at(){G.value=D.value?!(D.value.toString().length===9||D.value.toString().length===0):!1,V.value=!1}function Z(){G.value?it.show_warn(i("notification.cancel_msg")):(w.send_cmd(m(),{cmd:"pay",nif:D.value,note:Q.value}),it.show_info(i("notification.pay_msg")),G.value=!0),D.value&&(D.value=void 0),Q.value&&(Q.value=void 0)}return(j,q)=>(r(),u(J,null,[s("div",_n,[s("div",Tn,[s("div",In,[s("img",{src:d(),class:"w-full",clickble:"",onClick:q[0]||(q[0]=()=>j.$emit("switchToWelcome"))},null,8,Cn)]),s("div",Sn,[t.tableId?(r(),u("p",Dn,f(j.$t("common.table"))+": "+f(t.tableId),1)):x("",!0),t.tableId?x("",!0):(r(),u("p",Bn,f(j.$t("common.takeAway")),1))]),s("div",Pn,[t.tableId?(r(),et(p(W),{key:0,icon:"pi pi-bell",rounded:"","aria-label":"Filter",onClick:k,"aria-haspopup":"true","aria-controls":"overlay_menu"})):x("",!0),y(p(Xt),{ref_key:"menu",ref:o,id:"overlay_menu",model:T.value,popup:!0},null,8,["model"])])]),s("div",zn,[s("div",null,[y(p(W),{icon:"pi pi-bars",variant:"text",rounded:"","aria-label":"Filter",onClick:L,"aria-haspopup":"true","aria-controls":"tab_menu"}),y(p(Xt),{ref_key:"tabMenu",ref:R,id:"tab_menu",model:t.tabItems,popup:!0},null,8,["model"])]),s("div",Nn,[y(p(ue),{value:t.typeIndex,scrollable:"",showNavigators:!1},{default:N(()=>[y(p(de),null,{default:N(()=>[(r(!0),u(J,null,Y(t.types,(H,dt)=>(r(),et(p(ce),{value:dt,onClick:()=>j.$emit("clickType",dt),class:"text-sm md:text-lg lg:text-xl"},{default:N(()=>[kt(f(H),1)]),_:2},1032,["value","onClick"]))),256))]),_:1})]),_:1},8,["value"])])])]),y(p(_t),{visible:V.value,"onUpdate:visible":q[4]||(q[4]=H=>V.value=H),header:"结账",class:"flex flex-column",modal:!0,dismissableMask:!0,onHide:Z},{default:N(()=>[s("div",null,[q[5]||(q[5]=s("label",null,"NIF:",-1)),y(p(Ce),{modelValue:D.value,"onUpdate:modelValue":q[1]||(q[1]=H=>D.value=H),inputId:"withoutgrouping",useGrouping:!1,fluid:"",class:"w-full m-1"},null,8,["modelValue"])]),s("div",An,[s("label",null,f(j.$t("common.note"))+":",1),y(p(ne),{type:"text",modelValue:Q.value,"onUpdate:modelValue":q[2]||(q[2]=H=>Q.value=H),class:"w-full m-1"},null,8,["modelValue"])]),s("div",Ln,[y(p(W),{label:j.$t("common.send"),onClick:q[3]||(q[3]=H=>at())},null,8,["label"])])]),_:1},8,["visible"])],64))}},On={__name:"SwipeHint",props:{size:{type:String,default:"8rem"},duration:{type:Number,default:6e3},position:{type:String,default:"bottom"}},setup(t){const e=t,i=S(!0);se(()=>{e.duration>0&&setTimeout(()=>{i.value=!1},e.duration);const m=()=>{i.value=!1,window.removeEventListener("touchstart",m)};window.addEventListener("touchstart",m)});const d=ht(()=>{let m={left:"50%",transform:"translateX(-50%)",zIndex:99999,opacity:.5,pointerEvents:"none",textAlign:"center",position:"fixed"};return e.position==="top"?m.top="15%":e.position==="center"?(m.top="50%",m.transform="translate(-50%, -50%)"):m.bottom="15%",m});return(m,o)=>i.value?(r(),u("div",{key:0,class:"swipe-hint",style:Nt(d.value)},[s("div",{class:"hand",style:Nt({width:t.size,height:t.size,backgroundImage:"url(/images/hand_finger.png)"})},null,4)],4)):x("",!0)}},Rn=Dt(On,[["__scopeId","data-v-8cbd39b6"]]),En={class:"w-full h-full flex flex-column"},Vn={class:"fixed bottom-0 left-0 w-full h-3rem bg-primary-reverse p-3"},jn={class:"h-full flex align-items-center justify-content-between w-full"},Fn={class:"m-2"},Mn={class:"m-2"},Kn={style:{"max-height":"60vh","overflow-y":"auto","padding-bottom":"60px"}},Wn={class:"flex flex-column border-bottom-1"},Hn={key:0,class:"flex justify-content-between"},Un={class:"flex flex-column"},Qn={class:"font-bold"},Jn={class:"text-right"},Xn={key:1,class:"flex justify-content-between"},Gn={class:"flex flex-column"},Yn={class:"font-bold"},Zn={class:"text-right"},ti={key:0},ei={key:1,class:"flex flex-column"},ai={class:"flex flex-column"},si={class:"font-bold"},ni={class:"text-right"},ii={class:"total-footer bg-primary-reverse"},Zt=2,te="order_time_key",oi={__name:"HomePage",setup(t){const e=ee(),i=_e(),{t:d}=gt(),{locale:m}=gt(),o=S(!1),T=S([""]),k=S(0),L=tt.cartItemCount,R=S(!1),V=S([]),D=S(0),Q=S({}),G=S(!1),z=K.dishDatas,at=S(null),Z=S(null),j=S([]),q=S([]);function H(c){c.touches[0].clientX,c.touches[0].clientY}const dt=()=>{k.value<T.value.length-1&&(k.value++,$(),g(k.value))},ft=()=>{k.value>0&&(k.value--,$(),g(k.value))};let F=()=>window.env.ENABLE_ROAST_DUCK;ht(()=>parseFloat(w.table.value.order.reduce((c,h)=>c+h.price*h.quantity,0).toFixed(2)));function ot(c){L.value=L.value+c}S(X(w.customDishAPI.customDishes.value));function X(c){return c.map(h=>({...h,oldLike:0,update:!1}))}const v=(c,h,b,O)=>{w.rateDish(c,h,b),O&&it.show_success(d("notification.rating_submitted"))};function g(c){let h=w.getOrderMenuTab()[c];w.customDishAPI.customDishes.value.map(M=>M.name).includes(h)?(G.value=!0,Q.value=w.customDishAPI.customDishes.value.find(M=>M.name==h)):G.value=!1;let O=w.getMenu();if(O.length==0){console.log("exit");return}let U=[];for(let M=0;M<z.value.length;M++){let C=z.value[M];if(C.category==h){if(C.disable){if(!C.subitem)continue;let E=!0;for(let lt=0;lt<C.subitem.length;lt++)O[C.subitem[lt]].disable||(E=!1);if(E)continue}U.push(C)}}K.showDishList(U)}const I=()=>{w.refreshTableFromServer(),w.getTableTotalAmount(D),R.value=!0},P=(c,h,b)=>{const O=z.value.find(U=>U.id===c);O&&(O.likes=h,O.rates=b)},_=c=>{let h=c.id;c.org_id&&(h=c.org_id);for(let b=0;b<z.value.length;b++)if(z.value[b].id==h)for(const O in c){let U=O;O.startsWith("note")&&(U=U.replace("note","description")),z.value[b][U]=c[O]}},a={pt:[],zh:[],en:[]};function l(){return new Promise(c=>{let h=()=>{const b=w.getMenu();b.length>0?c(b):setTimeout(h,200)};h()})}function n(){return new Promise(c=>{let h=()=>{const b=w.getOrderMenuTab();b.length>0?c(b):setTimeout(h,200)};h()})}async function A(){var c=await l();w.onMenuItemChanged=_,w.onRatingChanged=P,z.value.length=0,F()&&w.settings.value.hasBox&&(a.pt.push("My BOX"),a.zh.push("自定义九宫格"),a.en.push("My BOX")),F()&&w.settings.value.hasBibimbap&&(a.pt.push("Bibimbap"),a.zh.push("石锅拌饭"),a.en.push("Bibimbap"));const h={en:{},zh:{}};for(let C=0;C<c.length;C++){let E=c[C];const lt=C;let ct={description:E.note,allergies:E.x,quantity:0,index:lt,description_cn:E.note_cn,description_en:E.note_en,likes:E.likes||0,rates:E.rates||0};if(ct={...E,...ct},h.zh[ct.category]=E.category_cn,h.en[ct.category]=E.category_en,z.value.push(ct),ct.category=="")for(let Rt=0;Rt<z.value.length;Rt++){const pt=z.value[Rt];if(pt.handle&&pt.handle==E.handle&&pt.category!=""){pt.subitem||(pt.subitem=[pt.index]),pt.subitem.push(z.value.length-1),ct.name=pt.name,ct.image==""&&(ct.image=pt.image);break}}}const b=await n();for(let C=0;C<b.length;C++)a.pt.push(b[C]),a.zh.push(h.zh[b[C]]||b[C]),a.en.push(h.en[b[C]]||b[C]);const O=localStorage.getItem("order_cartDishs");O&&O!="undefined"&&(tt.cartDishs.value=JSON.parse(O),tt.cartItemCount.value=tt.cartDishs.value.length);const U=localStorage.getItem("order_dishDatas");if(U&&U!="undefined"){let C=JSON.parse(U);for(let E=0;E<C.length;E++)for(let lt=0;lt<z.value.length;lt++)C[E].id==z.value[lt].id&&(z.value[lt].quantity=C[E].quantity,tt.cartItemCount.value+=C[E].quantity)}let M=localStorage.getItem("language")||we.global.locale;T.value=a[M]||a.pt;for(let C=0;C<T.value.length;C++){const E=C;V.value.push({label:T.value[C],command:()=>{st(E),$()}})}}const $=()=>{ke(()=>{const c=document.querySelector(".p-tablist-viewport"),h=document.querySelector(".p-tab.p-tab-active");if(c&&h){const b=h.offsetLeft-c.offsetWidth/2+h.offsetWidth/2;c.scrollTo({left:b,behavior:"smooth"})}})},st=c=>{g(c),k.value=c,$()},vt=()=>{var c=[];for(let b=0;b<z.value.length;b++){var h=z.value[b];h.quantity>0&&c.push(h)}Z.value.showDishList(c)};function rt(){return w.getTable()}w.params.port,at.value=w.table.value.order;function mt(c){var h=d("notification.too_fast",{remainTime:c});it.show_warn(h)}const Bt=c=>{const h=[];for(let M=0;M<tt.cartDishs.value.length;M++){var b=tt.cartDishs.value[M];h.push({dishid:b.dishid,name:b.name,quantity:b.count,notes:b.notes,limit:b.limit,price:b.dis_price?b.dis_price:b.price,dishNote:b.dishNote})}for(let M=0;M<z.value.length;M++){var b=z.value[M];b.quantity>0&&h.push({dishid:b.id,name:b.name,quantity:b.quantity,limit:b.limit,price:b.dis_price?b.dis_price:b.price,dishNote:b.dishNote})}if(h.length===0)return it.show_warn(d("notification.select_at_least_one")),!1;console.log("cart item:",h);const O=JSON.parse(localStorage.getItem(te)||"{}"),U=Date.now();if(!O.startTime||U-O.startTime>Zt*1e3)O.startTime=U;else{const M=Zt-parseInt((U-O.startTime)/1e3);mt(M);return}return localStorage.setItem(te,JSON.stringify(O)),o.value=!0,w.submit_order({name:c.name,note:c.note,table:rt(),items:h}),!0};function qt(){const c=localStorage.getItem("language");c&&(m.value=c)}function Ft(){for(let c=0;c<z.value.length;c++){const h=z.value[c];h.quantity=0}o.value=!1,L.value=0,tt.cartDishs.value.length=0}se(async()=>{await A(),qt(),g(k.value),w.clear_order_data=()=>{Ft()},w.setOnOrderConfirmed(c=>{console.log("setOnOrderConfirmed..."),Ft();const h=c;it.show_success(d("notification.order_submitted",{id:h}))}),w.setOnShowError(c=>{o.value=!1,it.show_error(c)})});let Ot=!1;function pe(){localStorage.removeItem("login_time"),Ot=!0;const c=i.query.table;c?e.push({path:"/",query:{table:c}}):e.push({path:"/takeReserve"})}function Mt(){localStorage.setItem("order_cartDishs",JSON.stringify(tt.cartDishs.value));const c=[],h=K.dishDatas.value;for(let b=0;b<h.length;b++)h[b].quantity>0&&c.push({id:h[b].id,quantity:h[b].quantity});localStorage.setItem("order_dishDatas",JSON.stringify(c)),(tt.cartDishs.value.length>0||c.length>0)&&localStorage.setItem("login_time",JSON.stringify(Date.now())),Ot&&(Ot=!1,localStorage.removeItem("login_time"))}return xe(()=>{Mt()}),window.addEventListener("beforeunload",c=>{w.cleanup(),Mt()}),(c,h)=>{const b=At("touch"),O=At("touch-options");return r(),u(J,null,[s("div",En,[y(qn,{types:p(w).orderMenuTab,typeIndex:k.value,tabItems:V.value,tableId:rt(),onClickType:st,onSwitchToWelcome:pe},null,8,["types","typeIndex","tabItems","tableId"]),h[2]||(h[2]=s("div",{class:"pb-8"},null,-1)),h[3]||(h[3]=s("div",{class:"pb-7 sm:pb-7 md:pb-7 lg:pb-7"},null,-1)),y(Rn,{duration:"3000",position:"center"}),Lt((r(),u("div",{onTouchstart:H,style:{"overflow-x":"hidden","touch-action":"pan-y"},class:"h-full"},[G.value?(r(),et(nn,{key:0,currentCustomDish:Q.value},null,8,["currentCustomDish"])):(r(),et(qa,{key:1,updateCartItemCount:ot,rateDish:v,likedItemsRef:j.value,dislikedItemsRef:q.value},null,8,["likedItemsRef","dislikedItemsRef"]))],32)),[[b,dt,"swipe",{left:!0,passive:!0}],[b,ft,"swipe",{right:!0,passive:!0}],[O,{swipeTolerance:100}]]),h[4]||(h[4]=s("div",{class:"pb-6"},null,-1)),s("div",Vn,[s("div",jn,[s("div",Fn,[rt()?(r(),et(p(W),{key:0,label:c.$t("common.orders"),icon:"pi pi-list",class:"p-button-secondary",onClick:I},null,8,["label"])):x("",!0)]),s("div",Mn,[y(p(le),{value:p(L),severity:"danger",onClick:vt},{default:N(()=>h[1]||(h[1]=[s("i",{class:"pi pi-shopping-cart",style:{"font-size":"2rem"}},null,-1)])),_:1,__:[1]},8,["value"])])])])]),y(Is,{ref_key:"cartRef",ref:Z,updateCartItemCount:ot,checkout:Bt,isTakeaway:rt()==null},null,8,["isTakeaway"]),y(p(_t),{visible:R.value,"onUpdate:visible":h[0]||(h[0]=U=>R.value=U),header:c.$t("common.completedOrders"),modal:"",style:{width:"80vw","max-width":"700px"}},{default:N(()=>{var U,M;return[s("div",Kn,[s("div",Wn,[(U=D.value.adultPrice)!=null&&U.quantity&&D.value.adultPrice.quantity!=0?(r(),u("div",Hn,[s("div",Un,[s("span",Qn,f(c.$t("common.adult")),1),s("small",null,f(c.$t("common.quantity"))+": "+f(D.value.adultPrice.quantity),1)]),s("div",Jn,[s("span",null,"€"+f((Number(D.value.adultPrice.price)*D.value.adultPrice.quantity).toFixed(2)),1)])])):x("",!0),(M=D.value.childrenPrice)!=null&&M.quantity&&D.value.childrenPrice.quantity!=0?(r(),u("div",Xn,[s("div",Gn,[s("span",Yn,f(c.$t("common.children")),1),s("small",null,f(c.$t("common.quantity"))+": "+f(D.value.childrenPrice.quantity),1)]),s("div",Zn,[s("span",null,"€"+f((Number(D.value.childrenPrice.price)*D.value.childrenPrice.quantity).toFixed(2)),1)])])):x("",!0)]),p(w).table.value.order.length===0?(r(),u("div",ti,f(c.$t("common.noOrders")),1)):(r(),u("div",ei,[(r(!0),u(J,null,Y(p(w).table.value.order,(C,E)=>(r(),u("div",{key:E,class:"flex justify-content-between border-bottom-1 pb-2"},[s("div",ai,[s("span",si,f(p(w).getDishName(C)),1),s("small",null,f(c.$t("common.quantity"))+": "+f(C.quantity),1)]),s("div",ni,[s("span",null,"€"+f((C.price*C.quantity).toFixed(2)),1)])]))),128))]))]),s("div",ii,f(c.$t("common.total"))+": €"+f(D.value.total),1)]}),_:1},8,["visible","header"])],64)}}},vi=Dt(oi,[["__scopeId","data-v-1f2a4695"]]);export{vi as default};
