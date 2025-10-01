import{r as d,v as p,B as h,y as b,A as f,f as m,p as x}from"./index-BhK1V1FF.js";import{b as v}from"./index-DaI9u-Lm.js";const c=d([]),l=d([]),g=e=>{c.value.length=0;for(let t=0;t<e.length;t++)c.value.push(e[t])};function y(){const e=[];for(const t of l.value)for(const a of t.mainDishes){a.dish.quantity>0&&e.push(a.dish);for(const r of a.subItems)r.quantity>0&&(r.image=a.dish.image,e.push(r))}return e}function $(e){if(Array.isArray(e))for(const t of e)for(const a of l.value)for(const r of a.mainDishes){r.dish.id===t.id&&(r.dish.quantity=t.quantity);for(const u of r.subItems)u.id===t.id&&(u.quantity=t.quantity)}}function z(){for(const e of l.value)for(const t of e.mainDishes){t.dish.quantity=0;for(const a of t.subItems)a.quantity=0}}const C={dishDatas:l,dishes:c,showDishList:g,getAllIncrementedDish:y,updateDishDataQty:$,cleanDishDataQty:z},n=d(0),o=d([]);function D(e){e.id=w,n.value=n.value+1,o.value.push(e)}function k(e){for(let t=0;t<o.value.length;t++)if(o.value[t].id==e.id){o.value.splice(t,1),n.value=n.value-1;break}}function w(){const e=Date.now().toString(36),t=Math.random().toString(36).substring(2,5);return`${e}-${t}`}const E={addItem:D,removeItem:k,cartDishs:o,cartItemCount:n};var I=p`
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
`,P={root:function(t){var a=t.instance,r=t.props;return["p-textarea p-component",{"p-filled":a.$filled,"p-textarea-resizable ":r.autoResize,"p-textarea-sm p-inputfield-sm":r.size==="small","p-textarea-lg p-inputfield-lg":r.size==="large","p-invalid":a.$invalid,"p-variant-filled":a.$variant==="filled","p-textarea-fluid":a.$fluid}]}},S=h.extend({name:"textarea",style:I,classes:P}),q={name:"BaseTextarea",extends:v,props:{autoResize:Boolean},style:S,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function s(e){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(e)}function A(e,t,a){return(t=B(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function B(e){var t=R(e,"string");return s(t)=="symbol"?t:t+""}function R(e,t){if(s(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var T={name:"Textarea",extends:q,inheritAttrs:!1,observer:null,mounted:function(){var t=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){t.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(t){this.autoResize&&this.resize(),this.writeValue(t.target.value,t)}},computed:{attrs:function(){return f(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return b(A({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},F=["value","name","disabled","aria-invalid","data-p"];function j(e,t,a,r,u,i){return x(),m("textarea",f({class:e.cx("root"),value:e.d_value,name:e.name,disabled:e.disabled,"aria-invalid":e.invalid||void 0,"data-p":i.dataP,onInput:t[0]||(t[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},i.attrs),null,16,F)}T.render=j;export{C as D,E as c,T as s};
