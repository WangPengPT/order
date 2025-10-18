import{r as u,c as f,v as p,B as h,y as m,A as c,f as b,q as x}from"./index-wAqRs3Kj.js";import{b as g}from"./index-CBxQTX1y.js";const l=u([]),s=u([]),v=e=>{l.value.length=0;for(let t=0;t<e.length;t++)l.value.push(e[t])};function y(){const e=[];for(const t of s.value)if(t.name!="Descontos")for(const a of t.mainDishes){a.dish.quantity>0&&e.push(a.dish);for(const r of a.subItems)r.quantity>0&&(r.name=a.dish.name,r.image=a.dish.image,e.push(r))}return e}function $(e){const t=[];for(const a of e)t.push({id:a.id,quantity:a.quantity});return t}function z(e){if(Array.isArray(e))for(const t of e)for(const a of s.value)for(const r of a.mainDishes){r.dish.id===t.id&&r.subItems.length===0&&(r.dish.quantity=t.quantity);for(const d of r.subItems)d.id===t.id&&(d.quantity=t.quantity)}}function D(){for(const e of s.value)for(const t of e.mainDishes){t.dish.quantity=0;for(const a of t.subItems)a.quantity=0}}const I={dishDatas:s,dishes:l,showDishList:v,getAllIncrementedDish:y,updateDishDataQty:z,cleanDishDataQty:D,getIdsAndQuantity:$},i=u([]),k=f(()=>{const e=i.value.length,t=I.dishDatas.value.flatMap(a=>a.name=="Descontos"?[]:a.mainDishes).flatMap(a=>[a.dish,...a.subItems.map(r=>({...r,parentName:a.dish.name,parentImage:a.dish.image}))]).filter(a=>a.quantity>0).reduce((a,r)=>a+r.quantity,0);return e+t});function w(e){e.id=P(),console.log("speciaL item: :: : :  : ::",e),i.value.push(e)}function q(e){for(let t=0;t<i.value.length;t++)if(i.value[t].id==e.id){i.value.splice(t,1);break}}function P(){const e=Date.now().toString(36),t=Math.random().toString(36).substring(2,5);return`${e}-${t}`}function S(){i.value=[]}const C={addItem:w,removeItem:q,cartDishs:i,cartItemCount:k,cleanAll:S};var A=p`
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
`,B={root:function(t){var a=t.instance,r=t.props;return["p-textarea p-component",{"p-filled":a.$filled,"p-textarea-resizable ":r.autoResize,"p-textarea-sm p-inputfield-sm":r.size==="small","p-textarea-lg p-inputfield-lg":r.size==="large","p-invalid":a.$invalid,"p-variant-filled":a.$variant==="filled","p-textarea-fluid":a.$fluid}]}},R=h.extend({name:"textarea",style:A,classes:B}),T={name:"BaseTextarea",extends:g,props:{autoResize:Boolean},style:R,provide:function(){return{$pcTextarea:this,$parentInstance:this}}};function o(e){"@babel/helpers - typeof";return o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(e)}function F(e,t,a){return(t=j(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function j(e){var t=H(e,"string");return o(t)=="symbol"?t:t+""}function H(e,t){if(o(e)!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(o(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var L={name:"Textarea",extends:T,inheritAttrs:!1,observer:null,mounted:function(){var t=this;this.autoResize&&(this.observer=new ResizeObserver(function(){requestAnimationFrame(function(){t.resize()})}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(t){this.autoResize&&this.resize(),this.writeValue(t.target.value,t)}},computed:{attrs:function(){return c(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return m(F({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},M=["value","name","disabled","aria-invalid","data-p"];function N(e,t,a,r,d,n){return x(),b("textarea",c({class:e.cx("root"),value:e.d_value,name:e.name,disabled:e.disabled,"aria-invalid":e.invalid||void 0,"data-p":n.dataP,onInput:t[0]||(t[0]=function(){return n.onInput&&n.onInput.apply(n,arguments)})},n.attrs),null,16,M)}L.render=N;export{I as D,C as c,L as s};
