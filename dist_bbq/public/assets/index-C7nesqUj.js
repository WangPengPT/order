import{s as y,a as O,R as P,f as A}from"./index-BT4RhS6c.js";import{B as $,c as d,o as l,r as u,m as o,Z as S,F as C,e as w,s as f,ar as F,f as g,w as N,g as m,x as V,a as h,aS as T,aT as R,P as B,av as _,aU as p,v as D,aV as L,J as K,V as W,as as v}from"./index-6_NqD4DG.js";import{h as H}from"./index-CTJiWd_O.js";var U=`
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
`,j={root:function(t){var n=t.props;return["p-tabs p-component",{"p-tabs-scrollable":n.scrollable}]}},M=$.extend({name:"tabs",style:U,classes:j}),Z={name:"BaseTabs",extends:y,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:M,provide:function(){return{$pcTabs:this,$parentInstance:this}}},J={name:"Tabs",extends:Z,inheritAttrs:!1,emits:["update:value"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t}},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function Q(a,t,n,s,i,e){return l(),d("div",o({class:a.cx("root")},a.ptmi("root")),[u(a.$slots,"default")],16)}J.render=Q;var q={root:function(t){var n=t.instance;return["p-tabpanel",{"p-tabpanel-active":n.active}]}},G=$.extend({name:"tabpanel",classes:q}),X={name:"BaseTabPanel",extends:y,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:G,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},Y={name:"TabPanel",extends:X,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var t;return S((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tab_").concat(this.value)},attrs:function(){return o(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var t;return{id:this.id,tabindex:(t=this.$pcTabs)===null||t===void 0?void 0:t.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function tt(a,t,n,s,i,e){var r,c;return e.$pcTabs?(l(),d(C,{key:1},[a.asChild?u(a.$slots,"default",{key:1,class:V(a.cx("root")),active:e.active,a11yAttrs:e.a11yAttrs}):(l(),d(C,{key:0},[!((r=e.$pcTabs)!==null&&r!==void 0&&r.lazy)||e.active?f((l(),g(m(a.as),o({key:0,class:a.cx("root")},e.attrs),{default:N(function(){return[u(a.$slots,"default")]}),_:3},16,["class"])),[[F,(c=e.$pcTabs)!==null&&c!==void 0&&c.lazy?!0:e.active]]):w("",!0)],64))],64)):u(a.$slots,"default",{key:0})}Y.render=tt;var z={name:"ChevronLeftIcon",extends:O};function at(a,t,n,s,i,e){return l(),d("svg",o({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.pti()),t[0]||(t[0]=[h("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1)]),16)}z.render=at;var et={root:"p-tablist",content:function(t){var n=t.instance;return["p-tablist-content",{"p-tablist-viewport":n.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},nt=$.extend({name:"tablist",classes:et}),st={name:"BaseTabList",extends:y,props:{},style:nt,provide:function(){return{$pcTabList:this,$parentInstance:this}}},it={name:"TabList",extends:st,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;setTimeout(function(){t.updateInkBar()},150),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,n=this.getVisibleButtonWidths(),s=T(t)-n,i=Math.abs(t.scrollLeft),e=s*.8,r=i-e,c=Math.max(r,0);t.scrollLeft=L(t)?-1*c:c},onNextButtonClick:function(){var t=this.$refs.content,n=this.getVisibleButtonWidths(),s=T(t)-n,i=Math.abs(t.scrollLeft),e=s*.8,r=i+e,c=t.scrollWidth-s,b=Math.min(r,c);t.scrollLeft=L(t)?-1*b:b},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,n=t.content,s=t.inkbar,i=t.tabs;if(s){var e=B(n,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(s.style.height=_(e)+"px",s.style.top=p(e).top-p(i).top+"px"):(s.style.width=D(e)+"px",s.style.left=p(e).left-p(i).left+"px")}},updateButtonState:function(){var t=this.$refs,n=t.list,s=t.content,i=s.scrollTop,e=s.scrollWidth,r=s.scrollHeight,c=s.offsetWidth,b=s.offsetHeight,x=Math.abs(s.scrollLeft),k=[T(s),R(s)],I=k[0],E=k[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=i!==0,this.isNextButtonEnabled=n.offsetHeight>=b&&parseInt(i)!==r-E):(this.isPrevButtonEnabled=x!==0,this.isNextButtonEnabled=n.offsetWidth>=c&&parseInt(x)!==e-I)},getVisibleButtonWidths:function(){var t=this.$refs,n=t.prevButton,s=t.nextButton,i=0;return this.showNavigators&&(i=((n==null?void 0:n.offsetWidth)||0)+((s==null?void 0:s.offsetWidth)||0)),i}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0},dataP:function(){return A({scrollable:this.$pcTabs.scrollable})}},components:{ChevronLeftIcon:z,ChevronRightIcon:H},directives:{ripple:P}},rt=["data-p"],ot=["aria-label","tabindex"],lt=["data-p"],ct=["aria-orientation"],dt=["aria-label","tabindex"];function ut(a,t,n,s,i,e){var r=K("ripple");return l(),d("div",o({ref:"list",class:a.cx("root"),"data-p":e.dataP},a.ptmi("root")),[e.showNavigators&&i.isPrevButtonEnabled?f((l(),d("button",o({key:0,ref:"prevButton",type:"button",class:a.cx("prevButton"),"aria-label":e.prevButtonAriaLabel,tabindex:e.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return e.onPrevButtonClick&&e.onPrevButtonClick.apply(e,arguments)})},a.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(l(),g(m(e.templates.previcon||"ChevronLeftIcon"),o({"aria-hidden":"true"},a.ptm("prevIcon")),null,16))],16,ot)),[[r]]):w("",!0),h("div",o({ref:"content",class:a.cx("content"),onScroll:t[1]||(t[1]=function(){return e.onScroll&&e.onScroll.apply(e,arguments)}),"data-p":e.dataP},a.ptm("content")),[h("div",o({ref:"tabs",class:a.cx("tabList"),role:"tablist","aria-orientation":e.$pcTabs.orientation||"horizontal"},a.ptm("tabList")),[u(a.$slots,"default"),h("span",o({ref:"inkbar",class:a.cx("activeBar"),role:"presentation","aria-hidden":"true"},a.ptm("activeBar")),null,16)],16,ct)],16,lt),e.showNavigators&&i.isNextButtonEnabled?f((l(),d("button",o({key:1,ref:"nextButton",type:"button",class:a.cx("nextButton"),"aria-label":e.nextButtonAriaLabel,tabindex:e.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return e.onNextButtonClick&&e.onNextButtonClick.apply(e,arguments)})},a.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(l(),g(m(e.templates.nexticon||"ChevronRightIcon"),o({"aria-hidden":"true"},a.ptm("nextIcon")),null,16))],16,dt)),[[r]]):w("",!0)],16,rt)}it.render=ut;var bt={root:function(t){var n=t.instance,s=t.props;return["p-tab",{"p-tab-active":n.active,"p-disabled":s.disabled}]}},pt=$.extend({name:"tab",classes:bt}),vt={name:"BaseTab",extends:y,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:pt,provide:function(){return{$pcTab:this,$parentInstance:this}}},ht={name:"Tab",extends:vt,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var n=this.findNextTab(t.currentTarget);n?this.changeFocusedTab(t,n):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var n=this.findPrevTab(t.currentTarget);n?this.changeFocusedTab(t,n):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var n=this.findFirstTab();this.changeFocusedTab(t,n),t.preventDefault()},onEndKey:function(t){var n=this.findLastTab();this.changeFocusedTab(t,n),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findNextTab:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=n?t:t.nextElementSibling;return s?v(s,"data-p-disabled")||v(s,"data-pc-section")==="activebar"?this.findNextTab(s):B(s,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=n?t:t.previousElementSibling;return s?v(s,"data-p-disabled")||v(s,"data-pc-section")==="activebar"?this.findPrevTab(s):B(s,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.tabs.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.tabs.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,n){W(n),this.scrollInView(n)},scrollInView:function(t){var n;t==null||(n=t.scrollIntoView)===null||n===void 0||n.call(t,{block:"nearest"})}},computed:{active:function(){var t;return S((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.$id,"_tabpanel_").concat(this.value)},attrs:function(){return o(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}},dataP:function(){return A({active:this.active})}},directives:{ripple:P}};function ft(a,t,n,s,i,e){var r=K("ripple");return a.asChild?u(a.$slots,"default",{key:1,dataP:e.dataP,class:V(a.cx("root")),active:e.active,a11yAttrs:e.a11yAttrs,onClick:e.onClick}):f((l(),g(m(a.as),o({key:0,class:a.cx("root"),"data-p":e.dataP,onClick:e.onClick},e.attrs),{default:N(function(){return[u(a.$slots,"default")]}),_:3},16,["class","data-p","onClick"])),[[r]])}ht.render=ft;export{it as a,ht as b,Y as c,J as s};
