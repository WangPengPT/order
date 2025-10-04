import{r as d,v as p,B as h,y as b,A as f,f as m,p as x}from"./index-C4l5moWp.js";import{b as v}from"./index-6tFmpx6N.js";const c=d([]),l=d([]),g=t=>{c.value.length=0;for(let e=0;e<t.length;e++)c.value.push(t[e])};function y(){const t=[];for(const e of l.value)for(const a of e.mainDishes){a.dish.quantity>0&&t.push(a.dish);for(const r of a.subItems)r.quantity>0&&(r.name=a.dish.name,r.image=a.dish.image,t.push(r))}return t}function $(t){if(Array.isArray(t))for(const e of t)for(const a of l.value)for(const r of a.mainDishes){r.dish.id===e.id&&r.subItems.length===0&&(r.dish.quantity=e.quantity);for(const u of r.subItems)u.id===e.id&&(u.quantity=e.quantity)}}function z(){for(const t of l.value)for(const e of t.mainDishes){e.dish.quantity=0;for(const a of e.subItems)a.quantity=0}}const C={dishDatas:l,dishes:c,showDishList:g,getAllIncrementedDish:y,updateDishDataQty:$,cleanDishDataQty:z},n=d(0),o=d([]);function D(t){t.id=w,n.value=n.value+1,o.value.push(t)}function k(t){for(let e=0;e<o.value.length;e++)if(o.value[e].id==t.id){o.value.splice(e,1),n.value=n.value-1;break}}function w(){const t=Date.now().toString(36),e=Math.random().toString(36).substring(2,5);return`${t}-${e}`}const E={addItem:D,removeItem:k,cartDishs:o,cartItemCount:n};var I=p`
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
`,P={root:function(e){var a=e.instance,r=e.props;return["p-textarea p-component",{"p-filled":a.$filled,"p-textarea-resizable ":r.autoResize,"p-textarea-sm p-inputfield-sm":r.size==="small","p-textarea-lg p-inputfield-lg":r.size==="large","p-invalid":a.$invalid,"p-variant-filled":a.$variant==="filled","p-textarea-fluid":a.$fluid}]}},S=h.extend({name:"textarea",style:I,classes:P}),q={name:"BaseTextarea",extends:v,props:{autoResize:Boolean},style:S,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function s(t){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(t)}function A(t,e,a){return(e=B(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function B(t){var e=R(t,"string");return s(e)=="symbol"?e:e+""}function R(t,e){if(s(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var r=a.call(t,e);if(s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var T={name:"Textarea",extends:q,inheritAttrs:!1,observer:null,mounted:function(){var e=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){e.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(e){this.autoResize&&this.resize(),this.writeValue(e.target.value,e)}},computed:{attrs:function(){return f(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return b(A({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},F=["value","name","disabled","aria-invalid","data-p"];function j(t,e,a,r,u,i){return x(),m("textarea",f({class:t.cx("root"),value:t.d_value,name:t.name,disabled:t.disabled,"aria-invalid":t.invalid||void 0,"data-p":i.dataP,onInput:e[0]||(e[0]=function(){return i.onInput&&i.onInput.apply(i,arguments)})},i.attrs),null,16,F)}T.render=j;export{C as D,E as c,T as s};
