import{y as N,B as L,A as q,R as z,C as k,D,a7 as Q,a8 as G,E as w,Z as x,I as J,K as I,a9 as O,_ as K,q as r,aa as X,O as R,e as u,j as h,m as o,g as T,P as F,k as p,n as P,S as f,t as H,N as C,h as b,f as $,T as U,Q as m,F as A,l as S,p as Y,ab as ee,a3 as M}from"./index-CIllXWUT.js";import{C as te}from"./index-0Igy_YtG.js";import{O as ne,a as ie,b as V,s as ae}from"./index-C3KblP28.js";var oe=N`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`,re={root:function(t){var n=t.props;return["p-menu p-component",{"p-menu-overlay":n.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(t){var n=t.instance;return["p-menu-item",{"p-focus":n.id===n.focusedOptionId,"p-disabled":n.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},ce=L.extend({name:"menu",style:oe,classes:re}),se={name:"BaseMenu",extends:k,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:ce,provide:function(){return{$pcMenu:this,$parentInstance:this}}},j={name:"Menuitem",hostName:"Menu",extends:k,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(t,n){return t&&t.item?X(t.item[n]):void 0},getPTOptions:function(t){return this.ptm(t,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(t){var n=this.getItemProp(this.item,"command");n&&n({originalEvent:t,item:this.item.item}),this.$emit("item-click",{originalEvent:t,item:this.item,id:this.id})},onItemMouseMove:function(t){this.$emit("item-mousemove",{originalEvent:t,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(t){return{action:r({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:r({class:[this.cx("itemIcon"),t.icon]},this.getPTOptions("itemIcon")),label:r({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},computed:{dataP:function(){return D({focus:this.isItemFocused(),disabled:this.disabled()})}},directives:{ripple:z}},de=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled","data-p"],le=["data-p"],ue=["href","target"],pe=["data-p"],he=["data-p"];function fe(e,t,n,a,s,i){var v=R("ripple");return i.visible()?(o(),u("li",r({key:0,id:n.id,class:[e.cx("item"),n.item.class],role:"menuitem",style:n.item.style,"aria-label":i.label(),"aria-disabled":i.disabled(),"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1,"data-p":i.dataP},i.getPTOptions("item")),[T("div",r({class:e.cx("itemContent"),onClick:t[0]||(t[0]=function(g){return i.onItemClick(g)}),onMousemove:t[1]||(t[1]=function(g){return i.onItemMouseMove(g)}),"data-p":i.dataP},i.getPTOptions("itemContent")),[n.templates.item?n.templates.item?(o(),p(f(n.templates.item),{key:1,item:n.item,label:i.label(),props:i.getMenuItemProps(n.item)},null,8,["item","label","props"])):h("",!0):F((o(),u("a",r({key:0,href:n.item.url,class:e.cx("itemLink"),target:n.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[n.templates.itemicon?(o(),p(f(n.templates.itemicon),{key:0,item:n.item,class:P(e.cx("itemIcon"))},null,8,["item","class"])):n.item.icon?(o(),u("span",r({key:1,class:[e.cx("itemIcon"),n.item.icon],"data-p":i.dataP},i.getPTOptions("itemIcon")),null,16,pe)):h("",!0),T("span",r({class:e.cx("itemLabel"),"data-p":i.dataP},i.getPTOptions("itemLabel")),H(i.label()),17,he)],16,ue)),[[v]])],16,le)],16,de)):h("",!0)}j.render=fe;function B(e){return ge(e)||ve(e)||be(e)||me()}function me(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function be(e,t){if(e){if(typeof e=="string")return E(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}function ve(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ge(e){if(Array.isArray(e))return E(e)}function E(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}var ye={name:"Menu",extends:se,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&x.clear(this.container),this.container=null},methods:{itemClick:function(t){var n=t.item;this.disabled(n)||(n.command&&n.command(t),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==t.id&&(this.focusedOptionIndex=t.id))},itemMouseMove:function(t){this.focused&&(this.focusedOptionIndex=t.id)},onListFocus:function(t){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",t)},onListBlur:function(t){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",t)},onListKeyDown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":case"NumpadEnter":this.onEnterKey(t);break;case"Space":this.onSpaceKey(t);break;case"Escape":this.popup&&(I(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(t){var n=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),t.preventDefault()},onArrowUpKey:function(t){if(t.altKey&&this.popup)I(this.target),this.hide(),t.preventDefault();else{var n=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),t.preventDefault()}},onHomeKey:function(t){this.changeFocusedOptionIndex(0),t.preventDefault()},onEndKey:function(t){this.changeFocusedOptionIndex(O(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),t.preventDefault()},onEnterKey:function(t){var n=K(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),a=n&&K(n,'a[data-pc-section="itemlink"]');this.popup&&I(this.target),a?a.click():n&&n.click(),t.preventDefault()},onSpaceKey:function(t){this.onEnterKey(t)},findNextOptionIndex:function(t){var n=O(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),a=B(n).findIndex(function(s){return s.id===t});return a>-1?a+1:0},findPrevOptionIndex:function(t){var n=O(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),a=B(n).findIndex(function(s){return s.id===t});return a>-1?a-1:0},changeFocusedOptionIndex:function(t){var n=O(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),a=t>=n.length?n.length-1:t<0?0:t;a>-1&&(this.focusedOptionIndex=n[a].getAttribute("id"))},toggle:function(t,n){this.overlayVisible?this.hide():this.show(t,n)},show:function(t,n){this.overlayVisible=!0,this.target=n??t.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(t){J(t,{position:"absolute",top:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&x.set("menu",t,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&I(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(t){this.autoZIndex&&x.clear(t)},alignOverlay:function(){G(this.container,this.target);var t=w(this.target);t>w(this.container)&&(this.container.style.minWidth=w(this.target)+"px")},bindOutsideClickListener:function(){var t=this;this.outsideClickListener||(this.outsideClickListener=function(n){var a=t.container&&!t.container.contains(n.target),s=!(t.target&&(t.target===n.target||t.target.contains(n.target)));t.overlayVisible&&a&&s?t.hide():!t.popup&&a&&s&&(t.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new te(this.target,function(){t.overlayVisible&&t.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!Q()&&t.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(t){return typeof t.visible=="function"?t.visible():t.visible!==!1},disabled:function(t){return typeof t.disabled=="function"?t.disabled():t.disabled},label:function(t){return typeof t.label=="function"?t.label():t.label},onOverlayClick:function(t){ne.emit("overlay-click",{originalEvent:t,target:this.target})},containerRef:function(t){this.container=t},listRef:function(t){this.list=t}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null},dataP:function(){return D({popup:this.popup})}},components:{PVMenuitem:j,Portal:q}},Ae=["id","data-p"],Pe=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],ke=["id"];function Ie(e,t,n,a,s,i){var v=C("PVMenuitem"),g=C("Portal");return o(),p(g,{appendTo:e.appendTo,disabled:!e.popup},{default:b(function(){return[$(U,r({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},e.ptm("transition")),{default:b(function(){return[!e.popup||s.overlayVisible?(o(),u("div",r({key:0,ref:i.containerRef,id:e.$id,class:e.cx("root"),onClick:t[3]||(t[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),"data-p":i.dataP},e.ptmi("root")),[e.$slots.start?(o(),u("div",r({key:0,class:e.cx("start")},e.ptm("start")),[m(e.$slots,"start")],16)):h("",!0),T("ul",r({ref:i.listRef,id:e.$id+"_list",class:e.cx("list"),role:"menu",tabindex:e.tabindex,"aria-activedescendant":s.focused?i.focusedOptionId:void 0,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,onFocus:t[0]||(t[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:t[2]||(t[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},e.ptm("list")),[(o(!0),u(A,null,S(e.model,function(l,c){return o(),u(A,{key:i.label(l)+c.toString()},[l.items&&i.visible(l)&&!l.separator?(o(),u(A,{key:0},[l.items?(o(),u("li",r({key:0,id:e.$id+"_"+c,class:[e.cx("submenuLabel"),l.class],role:"none",ref_for:!0},e.ptm("submenuLabel")),[m(e.$slots,e.$slots.submenulabel?"submenulabel":"submenuheader",{item:l},function(){return[Y(H(i.label(l)),1)]})],16,ke)):h("",!0),(o(!0),u(A,null,S(l.items,function(d,y){return o(),u(A,{key:d.label+c+"_"+y},[i.visible(d)&&!d.separator?(o(),p(v,{key:0,id:e.$id+"_"+c+"_"+y,item:d,templates:e.$slots,focusedOptionId:i.focusedOptionId,unstyled:e.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:e.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(d)&&d.separator?(o(),u("li",r({key:"separator"+c+y,class:[e.cx("separator"),l.class],style:d.style,role:"separator",ref_for:!0},e.ptm("separator")),null,16)):h("",!0)],64)}),128))],64)):i.visible(l)&&l.separator?(o(),u("li",r({key:"separator"+c.toString(),class:[e.cx("separator"),l.class],style:l.style,role:"separator",ref_for:!0},e.ptm("separator")),null,16)):(o(),p(v,{key:i.label(l)+c.toString(),id:e.$id+"_"+c,item:l,index:c,templates:e.$slots,focusedOptionId:i.focusedOptionId,unstyled:e.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:e.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,Pe),e.$slots.end?(o(),u("div",r({key:1,class:e.cx("end")},e.ptm("end")),[m(e.$slots,"end")],16)):h("",!0)],16,Ae)):h("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}ye.render=Ie;var Ce={root:"p-accordioncontent",content:"p-accordioncontent-content"},Le=L.extend({name:"accordioncontent",classes:Ce}),Oe={name:"BaseAccordionContent",extends:k,props:{as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Le,provide:function(){return{$pcAccordionContent:this,$parentInstance:this}}},Z={name:"AccordionContent",extends:Oe,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},ariaLabelledby:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},attrs:function(){return r(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{id:this.id,role:"region","aria-labelledby":this.ariaLabelledby,"data-pc-name":"accordioncontent","data-p-active":this.$pcAccordionPanel.active}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}}}};function Te(e,t,n,a,s,i){return e.asChild?m(e.$slots,"default",{key:1,class:P(e.cx("root")),active:i.$pcAccordionPanel.active,a11yAttrs:i.a11yAttrs}):(o(),p(U,r({key:0,name:"p-toggleable-content"},e.ptm("transition",i.ptParams)),{default:b(function(){return[!i.$pcAccordion.lazy||i.$pcAccordionPanel.active?F((o(),p(f(e.as),r({key:0,class:e.cx("root")},i.attrs),{default:b(function(){return[T("div",r({class:e.cx("content")},e.ptm("content",i.ptParams)),[m(e.$slots,"default")],16)]}),_:3},16,["class"])),[[ee,i.$pcAccordion.lazy?!0:i.$pcAccordionPanel.active]]):h("",!0)]}),_:3},16))}Z.render=Te;var we={root:"p-accordionheader",toggleicon:"p-accordionheader-toggle-icon"},xe=L.extend({name:"accordionheader",classes:we}),Ke={name:"BaseAccordionHeader",extends:k,props:{as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:xe,provide:function(){return{$pcAccordionHeader:this,$parentInstance:this}}},_={name:"AccordionHeader",extends:Ke,inheritAttrs:!1,inject:["$pcAccordion","$pcAccordionPanel"],methods:{onFocus:function(){this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onClick:function(){!this.$pcAccordion.selectOnFocus&&this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowDown":this.onArrowDownKey(t);break;case"ArrowUp":this.onArrowUpKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowDownKey:function(t){var n=this.findNextPanel(this.findPanel(t.currentTarget));n?this.changeFocusedPanel(t,n):this.onHomeKey(t),t.preventDefault()},onArrowUpKey:function(t){var n=this.findPrevPanel(this.findPanel(t.currentTarget));n?this.changeFocusedPanel(t,n):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var n=this.findFirstPanel();this.changeFocusedPanel(t,n),t.preventDefault()},onEndKey:function(t){var n=this.findLastPanel();this.changeFocusedPanel(t,n),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findPanel:function(t){return t==null?void 0:t.closest('[data-pc-name="accordionpanel"]')},findHeader:function(t){return K(t,'[data-pc-name="accordionheader"]')},findNextPanel:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?t:t.nextElementSibling;return a?M(a,"data-p-disabled")?this.findNextPanel(a):this.findHeader(a):null},findPrevPanel:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=n?t:t.previousElementSibling;return a?M(a,"data-p-disabled")?this.findPrevPanel(a):this.findHeader(a):null},findFirstPanel:function(){return this.findNextPanel(this.$pcAccordion.$el.firstElementChild,!0)},findLastPanel:function(){return this.findPrevPanel(this.$pcAccordion.$el.lastElementChild,!0)},changeActiveValue:function(){this.$pcAccordion.updateValue(this.$pcAccordionPanel.value)},changeFocusedPanel:function(t,n){I(this.findHeader(n))}},computed:{id:function(){return"".concat(this.$pcAccordion.id,"_accordionheader_").concat(this.$pcAccordionPanel.value)},ariaControls:function(){return"".concat(this.$pcAccordion.id,"_accordioncontent_").concat(this.$pcAccordionPanel.value)},attrs:function(){return r(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.$pcAccordionPanel.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.$pcAccordion.tabindex,"aria-expanded":this.$pcAccordionPanel.active,"aria-controls":this.ariaControls,"data-pc-name":"accordionheader","data-p-disabled":this.$pcAccordionPanel.disabled,"data-p-active":this.$pcAccordionPanel.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.$pcAccordionPanel.active}}},dataP:function(){return D({active:this.$pcAccordionPanel.active})}},components:{ChevronUpIcon:V,ChevronDownIcon:ie},directives:{ripple:z}};function $e(e,t,n,a,s,i){var v=R("ripple");return e.asChild?m(e.$slots,"default",{key:1,class:P(e.cx("root")),active:i.$pcAccordionPanel.active,a11yAttrs:i.a11yAttrs,onClick:i.onClick}):F((o(),p(f(e.as),r({key:0,"data-p":i.dataP,class:e.cx("root"),onClick:i.onClick},i.attrs),{default:b(function(){return[m(e.$slots,"default",{active:i.$pcAccordionPanel.active}),m(e.$slots,"toggleicon",{active:i.$pcAccordionPanel.active,class:P(e.cx("toggleicon"))},function(){return[i.$pcAccordionPanel.active?(o(),p(f(i.$pcAccordion.$slots.collapseicon?i.$pcAccordion.$slots.collapseicon:i.$pcAccordion.collapseIcon?"span":"ChevronUpIcon"),r({key:0,class:[i.$pcAccordion.collapseIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",i.ptParams)),null,16,["class"])):(o(),p(f(i.$pcAccordion.$slots.expandicon?i.$pcAccordion.$slots.expandicon:i.$pcAccordion.expandIcon?"span":"ChevronDownIcon"),r({key:1,class:[i.$pcAccordion.expandIcon,e.cx("toggleicon")],"aria-hidden":"true"},e.ptm("toggleicon",i.ptParams)),null,16,["class"]))]})]}),_:3},16,["data-p","class","onClick"])),[[v]])}_.render=$e;var Se={root:function(t){var n=t.instance,a=t.props;return["p-accordionpanel",{"p-accordionpanel-active":n.active,"p-disabled":a.disabled}]}},Ee=L.extend({name:"accordionpanel",classes:Se}),De={name:"BaseAccordionPanel",extends:k,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1}},style:Ee,provide:function(){return{$pcAccordionPanel:this,$parentInstance:this}}},W={name:"AccordionPanel",extends:De,inheritAttrs:!1,inject:["$pcAccordion"],computed:{active:function(){return this.$pcAccordion.isItemActive(this.value)},attrs:function(){return r(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){return{"data-pc-name":"accordionpanel","data-p-disabled":this.disabled,"data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Fe(e,t,n,a,s,i){return e.asChild?m(e.$slots,"default",{key:1,class:P(e.cx("root")),active:i.active,a11yAttrs:i.a11yAttrs}):(o(),p(f(e.as),r({key:0,class:e.cx("root")},i.attrs),{default:b(function(){return[m(e.$slots,"default")]}),_:3},16,["class"]))}W.render=Fe;var He=N`
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
`,Me={root:"p-accordion p-component"},Be=L.extend({name:"accordion",style:He,classes:Me}),Ne={name:"BaseAccordion",extends:k,props:{value:{type:[String,Number,Array],default:void 0},multiple:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1},expandIcon:{type:String,default:void 0},collapseIcon:{type:String,default:void 0},activeIndex:{type:[Number,Array],default:null}},style:Be,provide:function(){return{$pcAccordion:this,$parentInstance:this}}},ze={name:"Accordion",extends:Ne,inheritAttrs:!1,emits:["update:value","update:activeIndex","tab-open","tab-close","tab-click"],data:function(){return{d_value:this.value}},watch:{value:function(t){this.d_value=t},activeIndex:{immediate:!0,handler:function(t){this.hasAccordionTab&&(this.d_value=this.multiple?t==null?void 0:t.map(String):t==null?void 0:t.toString())}}},methods:{isItemActive:function(t){var n;return this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.includes(t):this.d_value===t},updateValue:function(t){var n,a=this.isItemActive(t);this.multiple?a?this.d_value=this.d_value.filter(function(s){return s!==t}):this.d_value?this.d_value.push(t):this.d_value=[t]:this.d_value=a?null:t,this.$emit("update:value",this.d_value),this.$emit("update:activeIndex",this.multiple?(n=this.d_value)===null||n===void 0?void 0:n.map(Number):Number(this.d_value)),this.$emit(a?"tab-close":"tab-open",{originalEvent:void 0,index:Number(t)})},isAccordionTab:function(t){return t.type.name==="AccordionTab"},getTabProp:function(t,n){return t.props?t.props[n]:void 0},getKey:function(t,n){return this.getTabProp(t,"header")||n},getHeaderPT:function(t,n){var a=this;return{root:r({onClick:function(i){return a.onTabClick(i,n)}},this.getTabProp(t,"headerProps"),this.getTabPT(t,"header",n)),toggleicon:r(this.getTabProp(t,"headeractionprops"),this.getTabPT(t,"headeraction",n))}},getContentPT:function(t,n){return{root:r(this.getTabProp(t,"contentProps"),this.getTabPT(t,"toggleablecontent",n)),transition:this.getTabPT(t,"transition",n),content:this.getTabPT(t,"content",n)}},getTabPT:function(t,n,a){var s=this.tabs.length,i={props:t.props||{},parent:{instance:this,props:this.$props,state:this.$data},context:{index:a,count:s,first:a===0,last:a===s-1,active:this.isItemActive("".concat(a))}};return r(this.ptm("accordiontab.".concat(n),i),this.ptmo(this.getTabProp(t,"pt"),n,i))},onTabClick:function(t,n){this.$emit("tab-click",{originalEvent:t,index:n})}},computed:{tabs:function(){var t=this;return this.$slots.default().reduce(function(n,a){return t.isAccordionTab(a)?n.push(a):a.children&&a.children instanceof Array&&a.children.forEach(function(s){t.isAccordionTab(s)&&n.push(s)}),n},[])},hasAccordionTab:function(){return this.tabs.length}},components:{AccordionPanel:W,AccordionHeader:_,AccordionContent:Z,ChevronUpIcon:V,ChevronRightIcon:ae}};function Re(e,t,n,a,s,i){var v=C("AccordionHeader"),g=C("AccordionContent"),l=C("AccordionPanel");return o(),u("div",r({class:e.cx("root")},e.ptmi("root")),[i.hasAccordionTab?(o(!0),u(A,{key:0},S(i.tabs,function(c,d){return o(),p(l,{key:i.getKey(c,d),value:"".concat(d),pt:{root:i.getTabPT(c,"root",d)},disabled:i.getTabProp(c,"disabled")},{default:b(function(){return[$(v,{class:P(i.getTabProp(c,"headerClass")),pt:i.getHeaderPT(c,d)},{toggleicon:b(function(y){return[y.active?(o(),p(f(e.$slots.collapseicon?e.$slots.collapseicon:e.collapseIcon?"span":"ChevronDownIcon"),r({key:0,class:[e.collapseIcon,y.class],"aria-hidden":"true",ref_for:!0},i.getTabPT(c,"headericon",d)),null,16,["class"])):(o(),p(f(e.$slots.expandicon?e.$slots.expandicon:e.expandIcon?"span":"ChevronUpIcon"),r({key:1,class:[e.expandIcon,y.class],"aria-hidden":"true",ref_for:!0},i.getTabPT(c,"headericon",d)),null,16,["class"]))]}),default:b(function(){return[c.children&&c.children.headericon?(o(),p(f(c.children.headericon),{key:0,isTabActive:i.isItemActive("".concat(d)),active:i.isItemActive("".concat(d)),index:d},null,8,["isTabActive","active","index"])):h("",!0),c.props&&c.props.header?(o(),u("span",r({key:1,ref_for:!0},i.getTabPT(c,"headertitle",d)),H(c.props.header),17)):h("",!0),c.children&&c.children.header?(o(),p(f(c.children.header),{key:2})):h("",!0)]}),_:2},1032,["class","pt"]),$(g,{pt:i.getContentPT(c,d)},{default:b(function(){return[(o(),p(f(c)))]}),_:2},1032,["pt"])]}),_:2},1032,["value","pt","disabled"])}),128)):m(e.$slots,"default",{key:1})],16)}ze.render=Re;export{ze as a,W as b,_ as c,Z as d,ye as s};
