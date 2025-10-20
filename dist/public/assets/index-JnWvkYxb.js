import{v,B as y,R as $,y as x,aq as f,S as z,I as w,f as c,q as g,h,z as m,n as S,i as P,A as i,t as I,r as p,c as D}from"./index-Dtazzm_4.js";import{c as B,b as q}from"./index-CHD8Zhgl.js";var T=v`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }
`,L={root:function(e){var o=e.instance,n=e.props;return["p-togglebutton p-component",{"p-togglebutton-checked":o.active,"p-invalid":o.$invalid,"p-togglebutton-sm p-inputfield-sm":n.size==="small","p-togglebutton-lg p-inputfield-lg":n.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},A=y.extend({name:"togglebutton",style:T,classes:L}),C={name:"BaseToggleButton",extends:B,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null}},style:A,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}};function l(t){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(t)}function N(t,e,o){return(e=O(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function O(t){var e=R(t,"string");return l(e)=="symbol"?e:e+""}function R(t,e){if(l(t)!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var n=o.call(t,e);if(l(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var j={name:"ToggleButton",extends:C,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(e){var o=e==="root"?this.ptmi:this.ptm;return o(e,{context:{active:this.active,disabled:this.disabled}})},onChange:function(e){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,e),this.$emit("change",e))},onBlur:function(e){var o,n;(o=(n=this.formField).onBlur)===null||o===void 0||o.call(n,e)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return f(this.onLabel)&&f(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:" "},dataP:function(){return x(N({checked:this.active,invalid:this.$invalid},this.size,this.size))}},directives:{ripple:$}},F=["tabindex","disabled","aria-pressed","aria-label","aria-labelledby","data-p-checked","data-p-disabled","data-p"],E=["data-p"];function V(t,e,o,n,s,a){var k=z("ripple");return w((g(),c("button",i({type:"button",class:t.cx("root"),tabindex:t.tabindex,disabled:t.disabled,"aria-pressed":t.d_value,onClick:e[0]||(e[0]=function(){return a.onChange&&a.onChange.apply(a,arguments)}),onBlur:e[1]||(e[1]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)})},a.getPTOptions("root"),{"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"data-p-checked":a.active,"data-p-disabled":t.disabled,"data-p":a.dataP}),[h("span",i({class:t.cx("content")},a.getPTOptions("content"),{"data-p":a.dataP}),[m(t.$slots,"default",{},function(){return[m(t.$slots,"icon",{value:t.d_value,class:S(t.cx("icon"))},function(){return[t.onIcon||t.offIcon?(g(),c("span",i({key:0,class:[t.cx("icon"),t.d_value?t.onIcon:t.offIcon]},a.getPTOptions("icon")),null,16)):P("",!0)]}),h("span",i({class:t.cx("label")},a.getPTOptions("label")),I(a.label),17)]})],16,E)],16,F)),[[k]])}j.render=V;const b=p([]),u=p([]),H=t=>{b.value.length=0;for(let e=0;e<t.length;e++)b.value.push(t[e])};function M(){const t=[];for(const e of u.value)if(e.name!="Descontos")for(const o of e.mainDishes){o.dish.quantity>0&&t.push(o.dish);for(const n of o.subItems)n.quantity>0&&(n.name=o.dish.name,n.image=o.dish.image,t.push(n))}return t}function Q(t){const e=[];for(const o of t)e.push({id:o.id,quantity:o.quantity});return e}function U(t){if(Array.isArray(t))for(const e of t)for(const o of u.value)for(const n of o.mainDishes){n.dish.id===e.id&&n.subItems.length===0&&(n.dish.quantity=e.quantity);for(const s of n.subItems)s.id===e.id&&(s.quantity=e.quantity)}}function K(){for(const t of u.value)for(const e of t.mainDishes){e.dish.quantity=0;for(const o of e.subItems)o.quantity=0}}const Y={dishDatas:u,dishes:b,showDishList:H,getAllIncrementedDish:M,updateDishDataQty:U,cleanDishDataQty:K,getIdsAndQuantity:Q},r=p([]),G=D(()=>{const t=r.value.length,e=Y.dishDatas.value.flatMap(o=>o.name=="Descontos"?[]:o.mainDishes).flatMap(o=>[o.dish,...o.subItems.map(n=>({...n,parentName:o.dish.name,parentImage:o.dish.image}))]).filter(o=>o.quantity>0).reduce((o,n)=>o+n.quantity,0);return t+e});function J(t){t.id=X(),r.value.push(t)}function W(t){for(let e=0;e<r.value.length;e++)if(r.value[e].id==t.id){r.value.splice(e,1);break}}function X(){const t=Date.now().toString(36),e=Math.random().toString(36).substring(2,5);return`${t}-${e}`}function Z(){r.value=[]}const ct={addItem:J,removeItem:W,cartDishs:r,cartItemCount:G,cleanAll:Z};var _=v`
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
`,tt={root:function(e){var o=e.instance,n=e.props;return["p-textarea p-component",{"p-filled":o.$filled,"p-textarea-resizable ":n.autoResize,"p-textarea-sm p-inputfield-sm":n.size==="small","p-textarea-lg p-inputfield-lg":n.size==="large","p-invalid":o.$invalid,"p-variant-filled":o.$variant==="filled","p-textarea-fluid":o.$fluid}]}},et=y.extend({name:"textarea",style:_,classes:tt}),ot={name:"BaseTextarea",extends:q,props:{autoResize:Boolean},style:et,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function d(t){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(t)}function nt(t,e,o){return(e=at(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function at(t){var e=rt(t,"string");return d(e)=="symbol"?e:e+""}function rt(t,e){if(d(t)!="object"||!t)return t;var o=t[Symbol.toPrimitive];if(o!==void 0){var n=o.call(t,e);if(d(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var it={name:"Textarea",extends:ot,inheritAttrs:!1,observer:null,mounted:function(){var e=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){e.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(e){this.autoResize&&this.resize(),this.writeValue(e.target.value,e)}},computed:{attrs:function(){return i(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return x(nt({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},lt=["value","name","disabled","aria-invalid","data-p"];function dt(t,e,o,n,s,a){return g(),c("textarea",i({class:t.cx("root"),value:t.d_value,name:t.name,disabled:t.disabled,"aria-invalid":t.invalid||void 0,"data-p":a.dataP,onInput:e[0]||(e[0]=function(){return a.onInput&&a.onInput.apply(a,arguments)})},a.attrs),null,16,lt)}it.render=dt;export{Y as D,j as a,ct as c,it as s};
