import{a as H,b as k,s as _}from"./index-BQUWDY5D.js";import{B as g,x as A,A as c,q as s,z as h,p as i,j as p,P as C,i as v,C as u,h as B,ak as D,a1 as F,n as f,R as N,y as E,S as O,T as $,J as U,O as j,v as L,E as P,f as y,F as z,l as R,g as T,t as V}from"./index-B5ws6k2U.js";var q={root:"p-accordioncontent",content:"p-accordioncontent-content"},J=g.extend({name:"accordioncontent",classes:q}),M={name:"BaseAccordionContent",extends:A,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:J,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},I={name:"AccordionContent",extends:M,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return c(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function G(e,t,a,o,d,n){return e.asChild?h(e.$slots,"default",{key:1,class:f(e.cx("root")),active:n.$pcAccordionPanel.active,a11yAttrs:n.a11yAttrs}):(i(),s(F,c({key:0,name:"p-toggleable-content"},e.ptm("transition",n.ptParams)),{default:p(function(){return[!n.$pcAccordion.lazy||n.$pcAccordionPanel.active?C((i(),s(u(e.as),c({key:0,class:e.cx("root")},n.attrs),{default:p(function(){return[B("div",c({class:e.cx("content")},e.ptm("content",n.ptParams)),[h(e.$slots,"default")],16)]}),_:3},16,["class"])),[[D,n.$pcAccordion.lazy?!0:n.$pcAccordionPanel.active]]):v("",!0)]}),_:3},16))}I.render=G;var Q={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},W=g.extend({name:"accordionheader",classes:Q}),X={name:"BaseAccordionHeader",extends:A,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:W,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},w={name:"AccordionHeader",extends:X,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowDownKey:function(t){var a=this.findNextPanel(this.findPanel(t.currentTarget));a?this.changeFocusedPanel(t,a):this.onHomeKey(t),t.preventDefault()},onArrowUpKey:function(t){var a=this.findPrevPanel(this.findPanel(t.currentTarget));a?this.changeFocusedPanel(t,a):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var a=this.findFirstPanel();this.changeFocusedPanel(t,a),t.preventDefault()},onEndKey:function(t){var a=this.findLastPanel();this.changeFocusedPanel(t,a),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findPanel:function(t){return t==null?void 0:t.closest('[data-pc-name="accordionpanel"]')},findHeader:function(t){return U(t,'[data-pc-name="accordionheader"]')},findNextPanel:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=a?t:t.nextElementSibling;return o?$(o,"data-p-disabled")?this.findNextPanel(o):this.findHeader(o):null},findPrevPanel:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=a?t:t.previousElementSibling;return o?$(o,"data-p-disabled")?this.findPrevPanel(o):this.findHeader(o):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(t,a){O(this.findHeader(a))}},computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return c(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return E({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:k,ChevronDownIcon:H},directives:{ripple:N}};function Y(e,t,a,o,d,n){var b=j("ripple");return e.asChild?h(e.$slots,"default",{key:1,class:f(e.cx("root")),active:n.$pcAccordionPanel.active,a11yAttrs:n.a11yAttrs,onClick:n.onClick}):C((i(),s(u(e.as),c({key:0,"data-p":n.dataP,class:e.cx("root"),onClick:n.onClick},n.attrs),{default:p(function(){return[h(e.$slots,"default",{active:n.$pcAccordionPanel.active}),h(e.$slots,"toggleicon",{active:n.$pcAccordionPanel.active,class:f(e.cx("toggleicon"))},function(){return[n.$pcAccordionPanel.active?(i(),s(u(n.$pcAccordion.$slots.collapseicon?n.$pcAccordion.$slots.collapseicon:n.$pcAccordion.collapseIcon?"span":"ChevronUpIcon"),c({key:0,class:[n.$pcAccordion.collapseIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",n.ptParams)),null,16,["class"])):(i(),s(u(n.$pcAccordion.$slots.expandicon?n.$pcAccordion.$slots.expandicon:n.$pcAccordion.expandIcon?"span":"ChevronDownIcon"),c({key:1,class:[n.$pcAccordion.expandIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",n.ptParams)),null,16,["class"]))]})]}),_:3},16,["data-p","class","onClick"])),[[b]])}w.render=Y;var Z={root:function(t){var a=t.instance,o=t.props;return["p-accordionpanel",{"p-accordionpanel-active":a.active,"p-disabled":o.disabled}]}},ee=g.extend({name:"accordionpanel",classes:Z}),te={name:"BaseAccordionPanel",extends:A,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:ee,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},x={name:"AccordionPanel",extends:te,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return c(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function ae(e,t,a,o,d,n){return e.asChild?h(e.$slots,"default",{key:1,class:f(e.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs}):(i(),s(u(e.as),c({key:0,class:e.cx("root")},n.attrs),{default:p(function(){return[h(e.$slots,"default")]}),_:3},16,["class"]))}x.render=ae;var ne=L`
    .p-accordionpanel {
        display: flex;
        flex-direction: column;
        border-style: solid;
        border-width: dt('accordion.panel.border.width');
        border-color: dt('accordion.panel.border.color');
    }

    .p-accordionheader {
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: dt('accordion.header.padding');
        color: dt('accordion.header.color');
        background: dt('accordion.header.background');
        border-style: solid;
        border-width: dt('accordion.header.border.width');
        border-color: dt('accordion.header.border.color');
        font-weight: dt('accordion.header.font.weight');
        border-radius: dt('accordion.header.border.radius');
        transition:
            background dt('accordion.transition.duration'),
            color dt('accordion.transition.duration'),
            outline-color dt('accordion.transition.duration'),
            box-shadow dt('accordion.transition.duration');
        outline-color: transparent;
    }

    .p-accordionpanel:first-child > .p-accordionheader {
        border-width: dt('accordion.header.first.border.width');
        border-start-start-radius: dt('accordion.header.first.top.border.radius');
        border-start-end-radius: dt('accordion.header.first.top.border.radius');
    }

    .p-accordionpanel:last-child > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.bottom.border.radius');
    }

    .p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
        border-end-start-radius: dt('accordion.header.last.active.bottom.border.radius');
        border-end-end-radius: dt('accordion.header.last.active.bottom.border.radius');
    }

    .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.color');
    }

    .p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
        box-shadow: dt('accordion.header.focus.ring.shadow');
        outline: dt('accordion.header.focus.ring.width') dt('accordion.header.focus.ring.style') dt('accordion.header.focus.ring.color');
        outline-offset: dt('accordion.header.focus.ring.offset');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
        background: dt('accordion.header.hover.background');
        color: dt('accordion.header.hover.color');
    }

    .p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
        background: dt('accordion.header.active.background');
        color: dt('accordion.header.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover {
        background: dt('accordion.header.active.hover.background');
        color: dt('accordion.header.active.hover.color');
    }

    .p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover .p-accordionheader-toggle-icon {
        color: dt('accordion.header.toggle.icon.active.hover.color');
    }

    .p-accordioncontent-content {
        border-style: solid;
        border-width: dt('accordion.content.border.width');
        border-color: dt('accordion.content.border.color');
        background-color: dt('accordion.content.background');
        color: dt('accordion.content.color');
        padding: dt('accordion.content.padding');
    }
`,oe={root:"p-accordion p-component"},re=g.extend({name:"accordion",style:ne,classes:oe}),ce={name:"BaseAccordion",extends:A,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:re,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},ie={name:"Accordion",extends:ce,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t},activeIndex:{immediate:!0,handler:function(t){this.hasAccordionTab&&(this.d_value=this.multiple?t==null?void 0:t.map(String):t==null?void 0:t.toString())}}},methods:{isItemActive:function(t){var a;return this.multiple?(a=this.d_value)===null||a===void 0?void 0:a.includes(t):this.d_value===t},updateValue:function(t){var a,o=this.isItemActive(t);this.multiple?o?this.d_value=this.d_value.filter(function(d){return d!==t}):this.d_value?this.d_value.push(t):this.d_value=[t]:this.d_value=o?null:t,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(a=this.d_value)===null||a===void 0?void 0:a.map(Number):Number(this.d_value)),this.$emit(o?"tab-close":"tab-open",{originalEvent:void 0,index:Number(t)})},isAccordionTab:function(t){return t.type.name==="AccordionTab"},getTabProp:function(t,a){return t.props?t.props[a]:void 0},getKey:function(t,a){return this.getTabProp(t,"header")||a},getHeaderPT:function(t,a){var o=this;return{root:c({onClick:function(n){return o.onTabClick(n,a)}},this.getTabProp(t,"headerProps"),this.getTabPT(t,"header",a)),toggleicon:c(this.getTabProp(t,"headeractionprops"),this.getTabPT(t,"headeraction",a))}},getContentPT:function(t,a){return{root:c(this.getTabProp(t,"contentProps"),this.getTabPT(t,"toggleablecontent",a)),transition:this.getTabPT(t,"transition",a),content:this.getTabPT(t,"content",a)}},getTabPT:function(t,a,o){var d=this.tabs.length,n={props:t.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:o,count:d,first:o===0,last:o===d-1,active:this.isItemActive("".concat(o))}};return c(this.ptm("accordiontab.".concat(a),n),this.ptmo(this.getTabProp(t,"pt"),a,n))},onTabClick:function(t,a){this.$emit("tab-click",{originalEvent:t,index:a})}},computed:{tabs:function(){var t=this;return this.$slots.default().reduce(function(a,o){return t.isAccordionTab(o)?a.push(o):o.children&&o.children instanceof Array&&o.children.forEach(function(d){t.isAccordionTab(d)&&a.push(d)}),a},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:x,AccordionHeader:w,AccordionContent:I,ChevronUpIcon:k,ChevronRightIcon:_}};function de(e,t,a,o,d,n){var b=P("AccordionHeader"),K=P("AccordionContent"),S=P("AccordionPanel");return i(),y("div",c({class:e.cx("root")},e.ptmi("root")),[n.hasAccordionTab?(i(!0),y(z,{key:0},R(n.tabs,function(r,l){return i(),s(S,{key:n.getKey(r,l),value:"".concat(l),pt:{root:n.getTabPT(r,"root",l)},disabled:n.getTabProp(r,"disabled")},{default:p(function(){return[T(b,{class:f(n.getTabProp(r,"headerClass")),pt:n.getHeaderPT(r,l)},{toggleicon:p(function(m){return[m.active?(i(),s(u(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?"span":"ChevronDownIcon"),c({key:0,class:[e.collapseIcon,m.class],"aria-hidden":"true",ref_for:!0},n.getTabPT(r,"headericon",l)),null,16,["class"])):(i(),s(u(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?"span":"ChevronUpIcon"),c({key:1,class:[e.expandIcon,m.class],"aria-hidden":"true",ref_for:!0},n.getTabPT(r,"headericon",l)),null,16,["class"]))]}),default:p(function(){return[r.children&&r.children.headericon?(i(),s(u(r.children.headericon),{key:0,isTabActive:n.isItemActive("".concat(l)),active:n.isItemActive("".concat(l)),index:l},null,8,["isTabActive","active","index"])):v("",!0),r.props&&r.props.header?(i(),y("span",c({key:1,ref_for:!0},n.getTabPT(r,"headertitle",l)),V(r.props.header),17)):v("",!0),r.children&&r.children.header?(i(),s(u(r.children.header),{key:2})):v("",!0)]}),_:2},1032,["class","pt"]),T(K,{pt:n.getContentPT(r,l)},{default:p(function(){return[(i(),s(u(r)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):h(e.$slots,"default",{key:1})],16)}ie.render=de;const ue=(e,t)=>{const a=e.__vccOpts||e;for(const[o,d]of t)a[o]=d;return a};export{ue as _,x as a,w as b,I as c,ie as s};
