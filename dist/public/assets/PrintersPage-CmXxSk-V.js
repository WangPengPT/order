import{s as fe}from"./index-DTFOME_J.js";import{s as me,f as q,d as ge,R as be,b as ve}from"./index-C0gTZu_q.js";import{s as ye}from"./index-CsskcBjt.js";import{B as ae,c as p,e as O,o as a,r as w,f as F,m as d,g as E,t as I,O as R,V as Oe,Z as Ie,Q as Se,U as Y,_ as Q,$ as ke,Y as we,I as Ce,v as Le,D as xe,S as Fe,W as $,a0 as Ve,a1 as Ke,X as Te,a2 as U,b as P,K as Me,a as u,d as b,F as B,C as j,E as ne,w as L,z as D,T as Pe,M as De,a3 as Ae,y as Ee,q as ze,h as K,i as Re,n as N,l as C}from"./index-C0KoE6Bw.js";import{a as $e,s as Be,x as te}from"./index-DkpHBwyd.js";import{C as He,O as Ge}from"./index-BeTgAQV-.js";import{s as Ue}from"./index-DG0XfXmg.js";import{d as je,e as Ne,f as qe,b as de,s as We,a as Xe,c as Ye}from"./index-8qfYhp5h.js";import{s as Qe}from"./index-D5ZFaAQg.js";import{a as Ze,s as Je}from"./index-XrzzKprS.js";import{s as ue,a as _e}from"./index-CnNlejjU.js";import{s as et}from"./index-DAX81Op_.js";import"./index--xhl0y2j.js";import"./index-B2hnrNFL.js";import"./index-D3kuvGfl.js";import"./index-Bs8_2bM4.js";var tt=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.font.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,it={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},nt=ae.extend({name:"chip",style:tt,classes:it}),lt={name:"BaseChip",extends:me,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:nt,provide:function(){return{$pcChip:this,$parentInstance:this}}},ce={name:"Chip",extends:lt,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(e){(e.key==="Enter"||e.key==="Backspace")&&this.close(e)},close:function(e){this.visible=!1,this.$emit("remove",e)}},computed:{dataP:function(){return q({removable:this.removable})}},components:{TimesCircleIcon:Qe}},ot=["aria-label","data-p"],st=["src"];function rt(t,e,i,l,o,n){return o.visible?(a(),p("div",d({key:0,class:t.cx("root"),"aria-label":t.label},t.ptmi("root"),{"data-p":n.dataP}),[w(t.$slots,"default",{},function(){return[t.image?(a(),p("img",d({key:0,src:t.image},t.ptm("image"),{class:t.cx("image")}),null,16,st)):t.$slots.icon?(a(),F(E(t.$slots.icon),d({key:1,class:t.cx("icon")},t.ptm("icon")),null,16,["class"])):t.icon?(a(),p("span",d({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon")),null,16)):O("",!0),t.label!==null?(a(),p("div",d({key:3,class:t.cx("label")},t.ptm("label")),I(t.label),17)):O("",!0)]}),t.removable?w(t.$slots,"removeicon",{key:0,removeCallback:n.close,keydownCallback:n.onKeydown},function(){return[(a(),F(E(t.removeIcon?"span":"TimesCircleIcon"),d({class:[t.cx("removeIcon"),t.removeIcon],onClick:n.close,onKeydown:n.onKeydown},t.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):O("",!0)],16,ot)):O("",!0)}ce.render=rt;var at=`
    .p-multiselect {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('multiselect.background');
        border: 1px solid dt('multiselect.border.color');
        transition:
            background dt('multiselect.transition.duration'),
            color dt('multiselect.transition.duration'),
            border-color dt('multiselect.transition.duration'),
            outline-color dt('multiselect.transition.duration'),
            box-shadow dt('multiselect.transition.duration');
        border-radius: dt('multiselect.border.radius');
        outline-color: transparent;
        box-shadow: dt('multiselect.shadow');
    }

    .p-multiselect:not(.p-disabled):hover {
        border-color: dt('multiselect.hover.border.color');
    }

    .p-multiselect:not(.p-disabled).p-focus {
        border-color: dt('multiselect.focus.border.color');
        box-shadow: dt('multiselect.focus.ring.shadow');
        outline: dt('multiselect.focus.ring.width') dt('multiselect.focus.ring.style') dt('multiselect.focus.ring.color');
        outline-offset: dt('multiselect.focus.ring.offset');
    }

    .p-multiselect.p-variant-filled {
        background: dt('multiselect.filled.background');
    }

    .p-multiselect.p-variant-filled:not(.p-disabled):hover {
        background: dt('multiselect.filled.hover.background');
    }

    .p-multiselect.p-variant-filled.p-focus {
        background: dt('multiselect.filled.focus.background');
    }

    .p-multiselect.p-invalid {
        border-color: dt('multiselect.invalid.border.color');
    }

    .p-multiselect.p-disabled {
        opacity: 1;
        background: dt('multiselect.disabled.background');
    }

    .p-multiselect-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('multiselect.dropdown.color');
        width: dt('multiselect.dropdown.width');
        border-start-end-radius: dt('multiselect.border.radius');
        border-end-end-radius: dt('multiselect.border.radius');
    }

    .p-multiselect-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        color: dt('multiselect.clear.icon.color');
        inset-inline-end: dt('multiselect.dropdown.width');
    }

    .p-multiselect-label-container {
        overflow: hidden;
        flex: 1 1 auto;
        cursor: pointer;
    }

    .p-multiselect-label {
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: dt('multiselect.padding.y') dt('multiselect.padding.x');
        color: dt('multiselect.color');
    }

    .p-multiselect-display-chip .p-multiselect-label {
        display: flex;
        align-items: center;
        gap: calc(dt('multiselect.padding.y') / 2);
    }

    .p-multiselect-label.p-placeholder {
        color: dt('multiselect.placeholder.color');
    }

    .p-multiselect.p-invalid .p-multiselect-label.p-placeholder {
        color: dt('multiselect.invalid.placeholder.color');
    }

    .p-multiselect.p-disabled .p-multiselect-label {
        color: dt('multiselect.disabled.color');
    }

    .p-multiselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-multiselect-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('multiselect.overlay.background');
        color: dt('multiselect.overlay.color');
        border: 1px solid dt('multiselect.overlay.border.color');
        border-radius: dt('multiselect.overlay.border.radius');
        box-shadow: dt('multiselect.overlay.shadow');
        min-width: 100%;
    }

    .p-multiselect-header {
        display: flex;
        align-items: center;
        padding: dt('multiselect.list.header.padding');
    }

    .p-multiselect-header .p-checkbox {
        margin-inline-end: dt('multiselect.option.gap');
    }

    .p-multiselect-filter-container {
        flex: 1 1 auto;
    }

    .p-multiselect-filter {
        width: 100%;
    }

    .p-multiselect-list-container {
        overflow: auto;
    }

    .p-multiselect-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('multiselect.list.padding');
        display: flex;
        flex-direction: column;
        gap: dt('multiselect.list.gap');
    }

    .p-multiselect-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: dt('multiselect.option.gap');
        padding: dt('multiselect.option.padding');
        border: 0 none;
        color: dt('multiselect.option.color');
        background: transparent;
        transition:
            background dt('multiselect.transition.duration'),
            color dt('multiselect.transition.duration'),
            border-color dt('multiselect.transition.duration'),
            box-shadow dt('multiselect.transition.duration'),
            outline-color dt('multiselect.transition.duration');
        border-radius: dt('multiselect.option.border.radius');
    }

    .p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {
        background: dt('multiselect.option.focus.background');
        color: dt('multiselect.option.focus.color');
    }

    .p-multiselect-option.p-multiselect-option-selected {
        background: dt('multiselect.option.selected.background');
        color: dt('multiselect.option.selected.color');
    }

    .p-multiselect-option.p-multiselect-option-selected.p-focus {
        background: dt('multiselect.option.selected.focus.background');
        color: dt('multiselect.option.selected.focus.color');
    }

    .p-multiselect-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('multiselect.option.group.padding');
        background: dt('multiselect.option.group.background');
        color: dt('multiselect.option.group.color');
        font-weight: dt('multiselect.option.group.font.weight');
    }

    .p-multiselect-empty-message {
        padding: dt('multiselect.empty.message.padding');
    }

    .p-multiselect-label .p-chip {
        padding-block-start: calc(dt('multiselect.padding.y') / 2);
        padding-block-end: calc(dt('multiselect.padding.y') / 2);
        border-radius: dt('multiselect.chip.border.radius');
    }

    .p-multiselect-label:has(.p-chip) {
        padding: calc(dt('multiselect.padding.y') / 2) calc(dt('multiselect.padding.x') / 2);
    }

    .p-multiselect-fluid {
        display: flex;
        width: 100%;
    }

    .p-multiselect-sm .p-multiselect-label {
        font-size: dt('multiselect.sm.font.size');
        padding-block: dt('multiselect.sm.padding.y');
        padding-inline: dt('multiselect.sm.padding.x');
    }

    .p-multiselect-sm .p-multiselect-dropdown .p-icon {
        font-size: dt('multiselect.sm.font.size');
        width: dt('multiselect.sm.font.size');
        height: dt('multiselect.sm.font.size');
    }

    .p-multiselect-lg .p-multiselect-label {
        font-size: dt('multiselect.lg.font.size');
        padding-block: dt('multiselect.lg.padding.y');
        padding-inline: dt('multiselect.lg.padding.x');
    }

    .p-multiselect-lg .p-multiselect-dropdown .p-icon {
        font-size: dt('multiselect.lg.font.size');
        width: dt('multiselect.lg.font.size');
        height: dt('multiselect.lg.font.size');
    }
`,dt={root:function(e){var i=e.props;return{position:i.appendTo==="self"?"relative":void 0}}},ut={root:function(e){var i=e.instance,l=e.props;return["p-multiselect p-component p-inputwrapper",{"p-multiselect-display-chip":l.display==="chip","p-disabled":l.disabled,"p-invalid":i.$invalid,"p-variant-filled":i.$variant==="filled","p-focus":i.focused,"p-inputwrapper-filled":i.$filled,"p-inputwrapper-focus":i.focused||i.overlayVisible,"p-multiselect-open":i.overlayVisible,"p-multiselect-fluid":i.$fluid,"p-multiselect-sm p-inputfield-sm":l.size==="small","p-multiselect-lg p-inputfield-lg":l.size==="large"}]},labelContainer:"p-multiselect-label-container",label:function(e){var i=e.instance,l=e.props;return["p-multiselect-label",{"p-placeholder":i.label===l.placeholder,"p-multiselect-label-empty":!l.placeholder&&!i.$filled}]},clearIcon:"p-multiselect-clear-icon",chipItem:"p-multiselect-chip-item",pcChip:"p-multiselect-chip",chipIcon:"p-multiselect-chip-icon",dropdown:"p-multiselect-dropdown",loadingIcon:"p-multiselect-loading-icon",dropdownIcon:"p-multiselect-dropdown-icon",overlay:"p-multiselect-overlay p-component",header:"p-multiselect-header",pcFilterContainer:"p-multiselect-filter-container",pcFilter:"p-multiselect-filter",listContainer:"p-multiselect-list-container",list:"p-multiselect-list",optionGroup:"p-multiselect-option-group",option:function(e){var i=e.instance,l=e.option,o=e.index,n=e.getItemOptions,f=e.props;return["p-multiselect-option",{"p-multiselect-option-selected":i.isSelected(l)&&f.highlightOnSelect,"p-focus":i.focusedOptionIndex===i.getOptionIndex(o,n),"p-disabled":i.isOptionDisabled(l)}]},emptyMessage:"p-multiselect-empty-message"},ct=ae.extend({name:"multiselect",style:at,classes:ut,inlineStyles:dt}),pt={name:"BaseMultiSelect",extends:_e,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"14rem"},placeholder:String,inputId:{type:String,default:null},panelClass:{type:String,default:null},panelStyle:{type:null,default:null},overlayClass:{type:String,default:null},overlayStyle:{type:null,default:null},dataKey:null,showClear:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},resetFilterOnClear:{type:Boolean,default:!1},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},display:{type:String,default:"comma"},selectedItemsLabel:{type:String,default:null},maxSelectedLabels:{type:Number,default:null},selectionLimit:{type:Number,default:null},showToggleAll:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},checkboxIcon:{type:String,default:void 0},dropdownIcon:{type:String,default:void 0},filterIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},removeTokenIcon:{type:String,default:void 0},chipIcon:{type:String,default:void 0},selectAll:{type:Boolean,default:null},resetFilterOnHide:{type:Boolean,default:!1},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!1},autoFilterFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},highlightOnSelect:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:ct,provide:function(){return{$pcMultiSelect:this,$parentInstance:this}}};function W(t){"@babel/helpers - typeof";return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W(t)}function le(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,l)}return i}function oe(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?le(Object(i),!0).forEach(function(l){A(t,l,i[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):le(Object(i)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(i,l))})}return t}function A(t,e,i){return(e=ht(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function ht(t){var e=ft(t,"string");return W(e)=="symbol"?e:e+""}function ft(t,e){if(W(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var l=i.call(t,e);if(W(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function se(t){return vt(t)||bt(t)||gt(t)||mt()}function mt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gt(t,e){if(t){if(typeof t=="string")return ie(t,e);var i={}.toString.call(t).slice(8,-1);return i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set"?Array.from(t):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?ie(t,e):void 0}}function bt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function vt(t){if(Array.isArray(t))return ie(t)}function ie(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,l=Array(e);i<e;i++)l[i]=t[i];return l}var pe={name:"MultiSelect",extends:pt,inheritAttrs:!1,emits:["change","focus","blur","before-show","before-hide","show","hide","filter","selectall-change"],inject:{$pcFluid:{default:null}},outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,list:null,virtualScroller:null,startRangeIndex:-1,searchTimeout:null,searchValue:"",selectOnFocus:!1,data:function(){return{clicked:!1,focused:!1,focusedOptionIndex:-1,filterValue:null,overlayVisible:!1}},watch:{options:function(){this.autoUpdateModel()}},mounted:function(){this.autoUpdateModel()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(te.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex:function(e,i){return this.virtualScrollerDisabled?e:i&&i(e).index},getOptionLabel:function(e){return this.optionLabel?U(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?U(e,this.optionValue):e},getOptionRenderKey:function(e,i){return this.dataKey?U(e,this.dataKey):this.getOptionLabel(e)+"_".concat(i)},getHeaderCheckboxPTOptions:function(e){return this.ptm(e,{context:{selected:this.allSelected}})},getCheckboxPTOptions:function(e,i,l,o){return this.ptm(o,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(l,i),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.maxSelectionLimitReached&&!this.isSelected(e)?!0:this.optionDisabled?U(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return U(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return U(e,this.optionGroupChildren)},getAriaPosInset:function(e){var i=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(l){return i.isOptionGroup(l)}).length:e)+1},show:function(e){this.$emit("before-show"),this.overlayVisible=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),e&&$(this.$refs.focusInput)},hide:function(e){var i=this,l=function(){i.$emit("before-hide"),i.overlayVisible=!1,i.clicked=!1,i.focusedOptionIndex=-1,i.searchValue="",i.resetFilterOnHide&&(i.filterValue=null),e&&$(i.$refs.focusInput)};setTimeout(function(){l()},0)},onFocus:function(e){this.disabled||(this.focused=!0,this.overlayVisible&&(this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),!this.autoFilterFocus&&this.scrollInView(this.focusedOptionIndex)),this.$emit("focus",e))},onBlur:function(e){var i,l;this.clicked=!1,this.focused=!1,this.focusedOptionIndex=-1,this.searchValue="",this.$emit("blur",e),(i=(l=this.formField).onBlur)===null||i===void 0||i.call(l)},onKeyDown:function(e){var i=this;if(this.disabled){e.preventDefault();return}var l=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(e);break;default:if(e.code==="KeyA"&&l){var o=this.visibleOptions.filter(function(n){return i.isValidOption(n)}).map(function(n){return i.getOptionValue(n)});this.updateModel(e,o),e.preventDefault();break}!l&&Te(e.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(e),e.preventDefault());break}this.clicked=!1},onContainerClick:function(e){this.disabled||this.loading||e.target.tagName==="INPUT"||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.closest('[data-pc-section="clearicon"]')||((!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.clicked=!0)},onClearClick:function(e){this.updateModel(e,null),this.resetFilterOnClear&&(this.filterValue=null)},onFirstHiddenFocus:function(e){var i=e.relatedTarget===this.$refs.focusInput?Ke(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;$(i)},onLastHiddenFocus:function(e){var i=e.relatedTarget===this.$refs.focusInput?Ve(this.overlay,':not([data-p-hidden-focusable="true"])'):this.$refs.focusInput;$(i)},onOptionSelect:function(e,i){var l=this,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!(this.disabled||this.isOptionDisabled(i))){var f=this.isSelected(i),v=null,m=this.getOptionValue(i)!==""?this.getOptionValue(i):this.getOptionLabel(i);f?v=this.d_value.filter(function(V){return!Q(V,m,l.equalityKey)}):v=[].concat(se(this.d_value||[]),[m]),this.updateModel(e,v),o!==-1&&(this.focusedOptionIndex=o),n&&$(this.$refs.focusInput)}},onOptionMouseMove:function(e,i){this.focusOnHover&&this.changeFocusedOptionIndex(e,i)},onOptionSelectRange:function(e){var i=this,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(l===-1&&(l=this.findNearestSelectedOptionIndex(o,!0)),o===-1&&(o=this.findNearestSelectedOptionIndex(l)),l!==-1&&o!==-1){var n=Math.min(l,o),f=Math.max(l,o),v=this.visibleOptions.slice(n,f+1).filter(function(m){return i.isValidOption(m)}).map(function(m){return i.getOptionValue(m)});this.updateModel(e,v)}},onFilterChange:function(e){var i=e.target.value;this.filterValue=i,this.focusedOptionIndex=-1,this.$emit("filter",{originalEvent:e,value:i}),!this.virtualScrollerDisabled&&this.virtualScroller.scrollToIndex(0)},onFilterKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break}},onFilterBlur:function(){this.focusedOptionIndex=-1},onFilterUpdated:function(){this.overlayVisible&&this.alignOverlay()},onOverlayClick:function(e){Ge.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){if(!this.overlayVisible)this.show();else{var i=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex,i),this.changeFocusedOptionIndex(e,i)}e.preventDefault()},onArrowUpKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(e.altKey&&!i)this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(),e.preventDefault();else{var l=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,l,this.startRangeIndex),this.changeFocusedOptionIndex(e,l),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i&&(this.focusedOptionIndex=-1)},onHomeKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(i){var l=e.currentTarget;e.shiftKey?l.setSelectionRange(0,e.target.selectionStart):(l.setSelectionRange(0,0),this.focusedOptionIndex=-1)}else{var o=e.metaKey||e.ctrlKey,n=this.findFirstOptionIndex();e.shiftKey&&o&&this.onOptionSelectRange(e,n,this.startRangeIndex),this.changeFocusedOptionIndex(e,n),!this.overlayVisible&&this.show()}e.preventDefault()},onEndKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(i){var l=e.currentTarget;if(e.shiftKey)l.setSelectionRange(e.target.selectionStart,l.value.length);else{var o=l.value.length;l.setSelectionRange(o,o),this.focusedOptionIndex=-1}}else{var n=e.metaKey||e.ctrlKey,f=this.findLastOptionIndex();e.shiftKey&&n&&this.onOptionSelectRange(e,this.startRangeIndex,f),this.changeFocusedOptionIndex(e,f),!this.overlayVisible&&this.show()}e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.overlayVisible?this.focusedOptionIndex!==-1&&(e.shiftKey?this.onOptionSelectRange(e,this.focusedOptionIndex):this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex])):(this.focusedOptionIndex=-1,this.onArrowDownKey(e)),e.preventDefault()},onEscapeKey:function(e){this.overlayVisible&&(this.hide(!0),e.stopPropagation()),e.preventDefault()},onTabKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i||(this.overlayVisible&&this.hasFocusableElements()?($(e.shiftKey?this.$refs.lastHiddenFocusableElementOnOverlay:this.$refs.firstHiddenFocusableElementOnOverlay),e.preventDefault()):(this.focusedOptionIndex!==-1&&this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]),this.overlayVisible&&this.hide(this.filter)))},onShiftKey:function(){this.startRangeIndex=this.focusedOptionIndex},onOverlayEnter:function(e){te.set("overlay",e,this.$primevue.config.zIndex.overlay),Fe(e,{position:"absolute",top:"0"}),this.alignOverlay(),this.scrollInView(),this.autoFilterFocus&&$(this.$refs.filterInput.$el),this.autoUpdateModel(),this.$attrSelector&&e.setAttribute(this.$attrSelector,"")},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null},onOverlayAfterLeave:function(e){te.clear(e)},alignOverlay:function(){this.appendTo==="self"?Ce(this.overlay,this.$el):(this.overlay.style.minWidth=Le(this.$el)+"px",xe(this.overlay,this.$el))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(i){e.overlayVisible&&e.isOutsideClicked(i)&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new He(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!we()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked:function(e){return!(this.$el.isSameNode(e.target)||this.$el.contains(e.target)||this.overlay&&this.overlay.contains(e.target))},getLabelByValue:function(e){var i=this,l=this.optionGroupLabel?this.flatOptions(this.options):this.options||[],o=l.find(function(n){return!i.isOptionGroup(n)&&Q(i.getOptionValue(n)!==""?i.getOptionValue(n):i.getOptionLabel(n),e,i.equalityKey)});return o?this.getOptionLabel(o):null},getSelectedItemsLabel:function(){var e=/{(.*?)}/,i=this.selectedItemsLabel||this.$primevue.config.locale.selectionMessage;return e.test(i)?i.replace(i.match(e)[0],this.d_value.length+""):i},onToggleAll:function(e){var i=this;if(this.selectAll!==null)this.$emit("selectall-change",{originalEvent:e,checked:!this.allSelected});else{var l=this.allSelected?[]:this.visibleOptions.filter(function(o){return i.isValidOption(o)}).map(function(o){return i.getOptionValue(o)});this.updateModel(e,l)}},removeOption:function(e,i){var l=this;e.stopPropagation();var o=this.d_value.filter(function(n){return!Q(n,i,l.equalityKey)});this.updateModel(e,o)},clearFilter:function(){this.filterValue=null},hasFocusableElements:function(){return ke(this.overlay,':not([data-p-hidden-focusable="true"])').length>0},isOptionMatched:function(e){var i;return this.isValidOption(e)&&typeof this.getOptionLabel(e)=="string"&&((i=this.getOptionLabel(e))===null||i===void 0?void 0:i.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)))},isValidOption:function(e){return R(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isEquals:function(e,i){return Q(e,i,this.equalityKey)},isSelected:function(e){var i=this,l=this.getOptionValue(e)!==""?this.getOptionValue(e):this.getOptionLabel(e);return(this.d_value||[]).some(function(o){return i.isEquals(o,l)})},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(i){return e.isValidOption(i)})},findLastOptionIndex:function(){var e=this;return Y(this.visibleOptions,function(i){return e.isValidOption(i)})},findNextOptionIndex:function(e){var i=this,l=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(o){return i.isValidOption(o)}):-1;return l>-1?l+e+1:e},findPrevOptionIndex:function(e){var i=this,l=e>0?Y(this.visibleOptions.slice(0,e),function(o){return i.isValidOption(o)}):-1;return l>-1?l:e},findSelectedOptionIndex:function(){var e=this;if(this.$filled){for(var i=function(){var f=e.d_value[o],v=e.visibleOptions.findIndex(function(m){return e.isValidSelectedOption(m)&&e.isEquals(f,e.getOptionValue(m))});if(v>-1)return{v}},l,o=this.d_value.length-1;o>=0;o--)if(l=i(),l)return l.v}return-1},findFirstSelectedOptionIndex:function(){var e=this;return this.$filled?this.visibleOptions.findIndex(function(i){return e.isValidSelectedOption(i)}):-1},findLastSelectedOptionIndex:function(){var e=this;return this.$filled?Y(this.visibleOptions,function(i){return e.isValidSelectedOption(i)}):-1},findNextSelectedOptionIndex:function(e){var i=this,l=this.$filled&&e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(o){return i.isValidSelectedOption(o)}):-1;return l>-1?l+e+1:-1},findPrevSelectedOptionIndex:function(e){var i=this,l=this.$filled&&e>0?Y(this.visibleOptions.slice(0,e),function(o){return i.isValidSelectedOption(o)}):-1;return l>-1?l:-1},findNearestSelectedOptionIndex:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=-1;return this.$filled&&(i?(l=this.findPrevSelectedOptionIndex(e),l=l===-1?this.findNextSelectedOptionIndex(e):l):(l=this.findNextSelectedOptionIndex(e),l=l===-1?this.findPrevSelectedOptionIndex(e):l)),l>-1?l:e},findFirstFocusedOptionIndex:function(){var e=this.findFirstSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions:function(e){var i=this;this.searchValue=(this.searchValue||"")+e.key;var l=-1;R(this.searchValue)&&(this.focusedOptionIndex!==-1?(l=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(o){return i.isOptionMatched(o)}),l=l===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(function(o){return i.isOptionMatched(o)}):l+this.focusedOptionIndex):l=this.visibleOptions.findIndex(function(o){return i.isOptionMatched(o)}),l===-1&&this.focusedOptionIndex===-1&&(l=this.findFirstFocusedOptionIndex()),l!==-1&&this.changeFocusedOptionIndex(e,l)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){i.searchValue="",i.searchTimeout=null},500)},changeFocusedOptionIndex:function(e,i){this.focusedOptionIndex!==i&&(this.focusedOptionIndex=i,this.scrollInView(),this.selectOnFocus&&this.onOptionSelect(e,this.visibleOptions[i]))},scrollInView:function(){var e=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var l=i!==-1?"".concat(e.$id,"_").concat(i):e.focusedOptionId,o=Se(e.list,'li[id="'.concat(l,'"]'));o?o.scrollIntoView&&o.scrollIntoView({block:"nearest",inline:"nearest"}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(i!==-1?i:e.focusedOptionIndex)})},autoUpdateModel:function(){if(this.autoOptionFocus&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex()),this.selectOnFocus&&this.autoOptionFocus&&!this.$filled){var e=this.getOptionValue(this.visibleOptions[this.focusedOptionIndex]);this.updateModel(null,[e])}},updateModel:function(e,i){this.writeValue(i,e),this.$emit("change",{originalEvent:e,value:i})},flatOptions:function(e){var i=this;return(e||[]).reduce(function(l,o,n){l.push({optionGroup:o,group:!0,index:n});var f=i.getOptionGroupChildren(o);return f&&f.forEach(function(v){return l.push(v)}),l},[])},overlayRef:function(e){this.overlay=e},listRef:function(e,i){this.list=e,i&&i(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){var e=this,i=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];if(this.filterValue){var l=Ie.filter(i,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(this.optionGroupLabel){var o=this.options||[],n=[];return o.forEach(function(f){var v=e.getOptionGroupChildren(f),m=v.filter(function(V){return l.includes(V)});m.length>0&&n.push(oe(oe({},f),{},A({},typeof e.optionGroupChildren=="string"?e.optionGroupChildren:"items",se(m))))}),this.flatOptions(n)}return l}return i},label:function(){var e;if(this.d_value&&this.d_value.length){if(R(this.maxSelectedLabels)&&this.d_value.length>this.maxSelectedLabels)return this.getSelectedItemsLabel();e="";for(var i=0;i<this.d_value.length;i++)i!==0&&(e+=", "),e+=this.getLabelByValue(this.d_value[i])}else e=this.placeholder;return e},chipSelectedItems:function(){return R(this.maxSelectedLabels)&&this.d_value&&this.d_value.length>this.maxSelectedLabels},allSelected:function(){var e=this;return this.selectAll!==null?this.selectAll:R(this.visibleOptions)&&this.visibleOptions.every(function(i){return e.isOptionGroup(i)||e.isOptionDisabled(i)||e.isSelected(i)})},hasSelectedOption:function(){return this.$filled},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},maxSelectionLimitReached:function(){return this.selectionLimit&&this.d_value&&this.d_value.length===this.selectionLimit},filterResultMessageText:function(){return R(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}",this.d_value.length):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.$id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(i){return!e.isOptionGroup(i)}).length},toggleAllAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria[this.allSelected?"selectAll":"unselectAll"]:void 0},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions},hasFluid:function(){return Oe(this.fluid)?!!this.$pcFluid:this.fluid},isClearIconVisible:function(){return this.showClear&&this.d_value&&this.d_value.length&&this.d_value!=null&&R(this.options)},containerDataP:function(){return q(A({invalid:this.$invalid,disabled:this.disabled,focus:this.focused,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))},labelDataP:function(){return q(A(A(A({placeholder:this.label===this.placeholder,clearable:this.showClear,disabled:this.disabled},this.size,this.size),"has-chip",this.display==="chip"&&this.d_value&&this.d_value.length&&(this.maxSelectedLabels?this.d_value.length<=this.maxSelectedLabels:!0)),"empty",!this.placeholder&&!this.$filled))},dropdownIconDataP:function(){return q(A({},this.size,this.size))},overlayDataP:function(){return q(A({},"portal-"+this.appendTo,"portal-"+this.appendTo))}},directives:{ripple:be},components:{InputText:ue,Checkbox:de,VirtualScroller:qe,Portal:Be,Chip:ce,IconField:Je,InputIcon:Ze,TimesIcon:$e,SearchIcon:Ne,ChevronDownIcon:je,SpinnerIcon:ge,CheckIcon:Ue}};function X(t){"@babel/helpers - typeof";return X=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X(t)}function re(t,e,i){return(e=yt(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function yt(t){var e=Ot(t,"string");return X(e)=="symbol"?e:e+""}function Ot(t,e){if(X(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var l=i.call(t,e);if(X(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var It=["data-p"],St=["id","disabled","placeholder","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"],kt=["data-p"],wt={key:0},Ct=["data-p"],Lt=["id","aria-label"],xt=["id"],Ft=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousemove","data-p-selected","data-p-focused","data-p-disabled"];function Vt(t,e,i,l,o,n){var f=P("Chip"),v=P("SpinnerIcon"),m=P("Checkbox"),V=P("InputText"),H=P("SearchIcon"),z=P("InputIcon"),Z=P("IconField"),J=P("VirtualScroller"),_=P("Portal"),ee=Me("ripple");return a(),p("div",d({ref:"container",class:t.cx("root"),style:t.sx("root"),onClick:e[7]||(e[7]=function(){return n.onContainerClick&&n.onContainerClick.apply(n,arguments)}),"data-p":n.containerDataP},t.ptmi("root")),[u("div",d({class:"p-hidden-accessible"},t.ptm("hiddenInputContainer"),{"data-p-hidden-accessible":!0}),[u("input",d({ref:"focusInput",id:t.inputId,type:"text",readonly:"",disabled:t.disabled,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"listbox","aria-expanded":o.overlayVisible,"aria-controls":t.$id+"_list","aria-activedescendant":o.focused?n.focusedOptionId:void 0,"aria-invalid":t.invalid||void 0,onFocus:e[0]||(e[0]=function(){return n.onFocus&&n.onFocus.apply(n,arguments)}),onBlur:e[1]||(e[1]=function(){return n.onBlur&&n.onBlur.apply(n,arguments)}),onKeydown:e[2]||(e[2]=function(){return n.onKeyDown&&n.onKeyDown.apply(n,arguments)})},t.ptm("hiddenInput")),null,16,St)],16),u("div",d({class:t.cx("labelContainer")},t.ptm("labelContainer")),[u("div",d({class:t.cx("label"),"data-p":n.labelDataP},t.ptm("label")),[w(t.$slots,"value",{value:t.d_value,placeholder:t.placeholder},function(){return[t.display==="comma"?(a(),p(B,{key:0},[j(I(n.label||"empty"),1)],64)):t.display==="chip"?(a(),p(B,{key:1},[n.chipSelectedItems?(a(),p("span",wt,I(n.label),1)):(a(!0),p(B,{key:1},ne(t.d_value,function(r){return a(),p("span",d({key:n.getLabelByValue(r),class:t.cx("chipItem")},{ref_for:!0},t.ptm("chipItem")),[w(t.$slots,"chip",{value:r,removeCallback:function(y){return n.removeOption(y,r)}},function(){return[b(f,{class:D(t.cx("pcChip")),label:n.getLabelByValue(r),removeIcon:t.chipIcon||t.removeTokenIcon,removable:"",unstyled:t.unstyled,onRemove:function(y){return n.removeOption(y,r)},pt:t.ptm("pcChip")},{removeicon:L(function(){return[w(t.$slots,t.$slots.chipicon?"chipicon":"removetokenicon",{class:D(t.cx("chipIcon")),item:r,removeCallback:function(y){return n.removeOption(y,r)}})]}),_:2},1032,["class","label","removeIcon","unstyled","onRemove","pt"])]})],16)}),128)),!t.d_value||t.d_value.length===0?(a(),p(B,{key:2},[j(I(t.placeholder||"empty"),1)],64)):O("",!0)],64)):O("",!0)]})],16,kt)],16),n.isClearIconVisible?w(t.$slots,"clearicon",{key:0,class:D(t.cx("clearIcon")),clearCallback:n.onClearClick},function(){return[(a(),F(E(t.clearIcon?"i":"TimesIcon"),d({ref:"clearIcon",class:[t.cx("clearIcon"),t.clearIcon],onClick:n.onClearClick},t.ptm("clearIcon"),{"data-pc-section":"clearicon"}),null,16,["class","onClick"]))]}):O("",!0),u("div",d({class:t.cx("dropdown")},t.ptm("dropdown")),[t.loading?w(t.$slots,"loadingicon",{key:0,class:D(t.cx("loadingIcon"))},function(){return[t.loadingIcon?(a(),p("span",d({key:0,class:[t.cx("loadingIcon"),"pi-spin",t.loadingIcon],"aria-hidden":"true"},t.ptm("loadingIcon")),null,16)):(a(),F(v,d({key:1,class:t.cx("loadingIcon"),spin:"","aria-hidden":"true"},t.ptm("loadingIcon")),null,16,["class"]))]}):w(t.$slots,"dropdownicon",{key:1,class:D(t.cx("dropdownIcon"))},function(){return[(a(),F(E(t.dropdownIcon?"span":"ChevronDownIcon"),d({class:[t.cx("dropdownIcon"),t.dropdownIcon],"aria-hidden":"true","data-p":n.dropdownIconDataP},t.ptm("dropdownIcon")),null,16,["class","data-p"]))]})],16),b(_,{appendTo:t.appendTo},{default:L(function(){return[b(Pe,d({name:"p-connected-overlay",onEnter:n.onOverlayEnter,onAfterEnter:n.onOverlayAfterEnter,onLeave:n.onOverlayLeave,onAfterLeave:n.onOverlayAfterLeave},t.ptm("transition")),{default:L(function(){return[o.overlayVisible?(a(),p("div",d({key:0,ref:n.overlayRef,style:[t.panelStyle,t.overlayStyle],class:[t.cx("overlay"),t.panelClass,t.overlayClass],onClick:e[5]||(e[5]=function(){return n.onOverlayClick&&n.onOverlayClick.apply(n,arguments)}),onKeydown:e[6]||(e[6]=function(){return n.onOverlayKeyDown&&n.onOverlayKeyDown.apply(n,arguments)}),"data-p":n.overlayDataP},t.ptm("overlay")),[u("span",d({ref:"firstHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[3]||(e[3]=function(){return n.onFirstHiddenFocus&&n.onFirstHiddenFocus.apply(n,arguments)})},t.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16),w(t.$slots,"header",{value:t.d_value,options:n.visibleOptions}),t.showToggleAll&&t.selectionLimit==null||t.filter?(a(),p("div",d({key:0,class:t.cx("header")},t.ptm("header")),[t.showToggleAll&&t.selectionLimit==null?(a(),F(m,{key:0,modelValue:n.allSelected,binary:!0,disabled:t.disabled,variant:t.variant,"aria-label":n.toggleAllAriaLabel,onChange:n.onToggleAll,unstyled:t.unstyled,pt:n.getHeaderCheckboxPTOptions("pcHeaderCheckbox"),formControl:{novalidate:!0}},{icon:L(function(r){return[t.$slots.headercheckboxicon?(a(),F(E(t.$slots.headercheckboxicon),{key:0,checked:r.checked,class:D(r.class)},null,8,["checked","class"])):r.checked?(a(),F(E(t.checkboxIcon?"span":"CheckIcon"),d({key:1,class:[r.class,re({},t.checkboxIcon,r.checked)]},n.getHeaderCheckboxPTOptions("pcHeaderCheckbox.icon")),null,16,["class"])):O("",!0)]}),_:1},8,["modelValue","disabled","variant","aria-label","onChange","unstyled","pt"])):O("",!0),t.filter?(a(),F(Z,{key:1,class:D(t.cx("pcFilterContainer")),unstyled:t.unstyled,pt:t.ptm("pcFilterContainer")},{default:L(function(){return[b(V,{ref:"filterInput",value:o.filterValue,onVnodeMounted:n.onFilterUpdated,onVnodeUpdated:n.onFilterUpdated,class:D(t.cx("pcFilter")),placeholder:t.filterPlaceholder,disabled:t.disabled,variant:t.variant,unstyled:t.unstyled,role:"searchbox",autocomplete:"off","aria-owns":t.$id+"_list","aria-activedescendant":n.focusedOptionId,onKeydown:n.onFilterKeyDown,onBlur:n.onFilterBlur,onInput:n.onFilterChange,pt:t.ptm("pcFilter"),formControl:{novalidate:!0}},null,8,["value","onVnodeMounted","onVnodeUpdated","class","placeholder","disabled","variant","unstyled","aria-owns","aria-activedescendant","onKeydown","onBlur","onInput","pt"]),b(z,{unstyled:t.unstyled,pt:t.ptm("pcFilterIconContainer")},{default:L(function(){return[w(t.$slots,"filtericon",{},function(){return[t.filterIcon?(a(),p("span",d({key:0,class:t.filterIcon},t.ptm("filterIcon")),null,16)):(a(),F(H,De(d({key:1},t.ptm("filterIcon"))),null,16))]})]}),_:3},8,["unstyled","pt"])]}),_:3},8,["class","unstyled","pt"])):O("",!0),t.filter?(a(),p("span",d({key:2,role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),I(n.filterResultMessageText),17)):O("",!0)],16)):O("",!0),u("div",d({class:t.cx("listContainer"),style:{"max-height":n.virtualScrollerDisabled?t.scrollHeight:""}},t.ptm("listContainer")),[b(J,d({ref:n.virtualScrollerRef},t.virtualScrollerOptions,{items:n.visibleOptions,style:{height:t.scrollHeight},tabindex:-1,disabled:n.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),Ae({content:L(function(r){var s=r.styleClass,y=r.contentRef,x=r.items,h=r.getItemOptions,T=r.contentStyle,g=r.itemSize;return[u("ul",d({ref:function(S){return n.listRef(S,y)},id:t.$id+"_list",class:[t.cx("list"),s],style:T,role:"listbox","aria-multiselectable":"true","aria-label":n.listAriaLabel},t.ptm("list")),[(a(!0),p(B,null,ne(x,function(c,S){return a(),p(B,{key:n.getOptionRenderKey(c,n.getOptionIndex(S,h))},[n.isOptionGroup(c)?(a(),p("li",d({key:0,id:t.$id+"_"+n.getOptionIndex(S,h),style:{height:g?g+"px":void 0},class:t.cx("optionGroup"),role:"option"},{ref_for:!0},t.ptm("optionGroup")),[w(t.$slots,"optiongroup",{option:c.optionGroup,index:n.getOptionIndex(S,h)},function(){return[j(I(n.getOptionGroupLabel(c.optionGroup)),1)]})],16,xt)):Ee((a(),p("li",d({key:1,id:t.$id+"_"+n.getOptionIndex(S,h),style:{height:g?g+"px":void 0},class:t.cx("option",{option:c,index:S,getItemOptions:h}),role:"option","aria-label":n.getOptionLabel(c),"aria-selected":n.isSelected(c),"aria-disabled":n.isOptionDisabled(c),"aria-setsize":n.ariaSetSize,"aria-posinset":n.getAriaPosInset(n.getOptionIndex(S,h)),onClick:function(G){return n.onOptionSelect(G,c,n.getOptionIndex(S,h),!0)},onMousemove:function(G){return n.onOptionMouseMove(G,n.getOptionIndex(S,h))}},{ref_for:!0},n.getCheckboxPTOptions(c,h,S,"option"),{"data-p-selected":n.isSelected(c),"data-p-focused":o.focusedOptionIndex===n.getOptionIndex(S,h),"data-p-disabled":n.isOptionDisabled(c)}),[b(m,{defaultValue:n.isSelected(c),binary:!0,tabindex:-1,variant:t.variant,unstyled:t.unstyled,pt:n.getCheckboxPTOptions(c,h,S,"pcOptionCheckbox"),formControl:{novalidate:!0}},{icon:L(function(M){return[t.$slots.optioncheckboxicon||t.$slots.itemcheckboxicon?(a(),F(E(t.$slots.optioncheckboxicon||t.$slots.itemcheckboxicon),{key:0,checked:M.checked,class:D(M.class)},null,8,["checked","class"])):M.checked?(a(),F(E(t.checkboxIcon?"span":"CheckIcon"),d({key:1,class:[M.class,re({},t.checkboxIcon,M.checked)]},{ref_for:!0},n.getCheckboxPTOptions(c,h,S,"pcOptionCheckbox.icon")),null,16,["class"])):O("",!0)]}),_:2},1032,["defaultValue","variant","unstyled","pt"]),w(t.$slots,"option",{option:c,selected:n.isSelected(c),index:n.getOptionIndex(S,h)},function(){return[u("span",d({ref_for:!0},t.ptm("optionLabel")),I(n.getOptionLabel(c)),17)]})],16,Ft)),[[ee]])],64)}),128)),o.filterValue&&(!x||x&&x.length===0)?(a(),p("li",d({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[w(t.$slots,"emptyfilter",{},function(){return[j(I(n.emptyFilterMessageText),1)]})],16)):!t.options||t.options&&t.options.length===0?(a(),p("li",d({key:1,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[w(t.$slots,"empty",{},function(){return[j(I(n.emptyMessageText),1)]})],16)):O("",!0)],16,Lt)]}),_:2},[t.$slots.loader?{name:"loader",fn:L(function(r){var s=r.options;return[w(t.$slots,"loader",{options:s})]}),key:"0"}:void 0]),1040,["items","style","disabled","pt"])],16),w(t.$slots,"footer",{value:t.d_value,options:n.visibleOptions}),!t.options||t.options&&t.options.length===0?(a(),p("span",d({key:1,role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),I(n.emptyMessageText),17)):O("",!0),u("span",d({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),I(n.selectedMessageText),17),u("span",d({ref:"lastHiddenFocusableElementOnOverlay",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:0,onFocus:e[4]||(e[4]=function(){return n.onLastHiddenFocus&&n.onLastHiddenFocus.apply(n,arguments)})},t.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16)],16,Ct)):O("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16,It)}pe.render=Vt;const Kt={class:"flex flex-wrap justify-content-center py-5"},Tt={class:"m-3 text-gray-500"},Mt={class:"flex flex-column gap-1 mt-2 mb-2"},Pt={class:"flex flex-wrap justify-content-between"},Dt={class:"flex items-center gap-2"},At={class:"align-items-center mt-3 mb-3"},Et={class:"mt-2 mb-2"},zt={class:"mt-2 mb-2"},Rt={class:"flex flex-wrap justify-content-between align-items-center m-3"},ti={__name:"PrintersPage",setup(t){const{t:e}=ze(),i=K(null),l=K([]),o=K([]),n=K([]),f=K([]),v=K(!1),m=K(null),V=K(!1),H=K(14),z=K(!0);function Z(){m.value=null}function J(r){const s=r.data,y=[""].concat(s.printers);if(l.value=y,z.value=l.value.length>1,i.value=s.curPrinter,H.value=s.fontSize||14,n.value.length==0){const x={},h=["My BOX","Bibimbpa"];for(let T=0;T<N.menuData.value.length;T++){const g=N.menuData.value[T];g.category&&g.category!=""&&(x[g.category]||(x[g.category]=!0,h.push(g.category))),g.tags&&g.tags!=""&&(x[g.tags]||(x[g.tags]=!0,h.push(g.tags)))}n.value=h,console.log(n.value)}if(s.menu){const x=[];for(let h=0;h<s.menu.length;h++){const T=s.menu[h];let g=!1;for(let c=0;c<n.value.length;c++)n.value[c]==T&&(g=!0);g&&x.push(T)}o.value=x}else o.value=[];console.log(o.value),m.value=s,V.value=s.every_one=="true",v.value=!0}function _(){const r=m.value,s=i.value,y=o.value;r.curPrinter=s,r.menu=[...y],console.log(V.value),V.value==!0?r.every_one="true":r.every_one="false",r.fontSize=H.value,console.log(r.id,s,y,r.every_one,r.fontSize),N.selectPrinter(r.id,s,y,r.every_one,r.fontSize),v.value=!1}function ee(){const r=m.value;N.printTestPage(r.id)}return Re(()=>{N.getPrinters(r=>{f.value=r})}),K(""),(r,s)=>{const y=Xe,x=We,h=et,T=Ye,g=ue,c=de,S=pe,M=ye,G=ve,he=fe;return a(),p(B,null,[b(x,{value:f.value,onRowClick:J},{empty:L(()=>[u("div",Kt,[s[9]||(s[9]=u("i",{class:"pi pi-search",style:{"font-size":"3rem",color:"#ccc"}},null,-1)),u("p",Tt,I(C(e)("optionPages.noPrinter")),1)])]),default:L(()=>[b(y,{field:"id",header:C(e)("optionPages.printerId"),sortable:"",style:{width:"10%"}},null,8,["header"]),b(y,{field:"curPrinter",header:C(e)("optionPages.printer"),sortable:"",style:{width:"20%"}},null,8,["header"]),b(y,{field:"menu",header:C(e)("optionPages.menu"),sortable:"",style:{width:"50%"}},{body:L(({data:k})=>[j(I(k.menu.toString()),1)]),_:1},8,["header"]),b(y,{field:"every_one",header:C(e)("optionPages.oneByOne"),sortable:"",style:{width:"10%"}},null,8,["header"]),b(y,{field:"fontSize",header:C(e)("optionPages.fontSize"),sortable:"",style:{width:"10%"}},null,8,["header"])]),_:1},8,["value"]),b(he,{visible:v.value,"onUpdate:visible":s[8]||(s[8]=k=>v.value=k),header:C(e)("optionPages.printerSettings"),style:{"max-width":"500px","min-width":"300px"},modal:!0,dismissableMask:!0,onHide:Z},{default:L(()=>[u("div",Mt,[u("div",Pt,[u("label",null,I(C(e)("optionPages.printer"))+"： ",1),u("div",Dt,[b(h,{modelValue:z.value,"onUpdate:modelValue":s[0]||(s[0]=k=>z.value=k)},null,8,["modelValue"]),u("label",null,I(C(e)("optionPages.noPrinter")),1)])]),z.value?O("",!0):(a(),F(T,{key:0,modelValue:i.value,"onUpdate:modelValue":s[1]||(s[1]=k=>i.value=k),class:"w-full md:w-56",placeholder:C(e)("optionPages.selectPrinter"),options:l.value,filter:""},null,8,["modelValue","placeholder","options"])),z.value?(a(),F(g,{key:1,type:"text",modelValue:i.value,"onUpdate:modelValue":s[2]||(s[2]=k=>i.value=k)},null,8,["modelValue"])):O("",!0)]),u("div",At,[b(c,{modelValue:V.value,"onUpdate:modelValue":s[3]||(s[3]=k=>V.value=k),binary:""},null,8,["modelValue"]),u("label",null,I(C(e)("optionPages.printOne")),1)]),u("div",Et,[u("label",null,I(C(e)("optionPages.printMenu")),1),b(S,{modelValue:o.value,"onUpdate:modelValue":s[4]||(s[4]=k=>o.value=k),options:n.value,class:"w-full md:w-56",filter:""},null,8,["modelValue","options"])]),u("div",zt,[u("label",null,I(C(e)("optionPages.fontSize"))+": ",1),b(M,{modelValue:H.value,"onUpdate:modelValue":s[5]||(s[5]=k=>H.value=k),class:"w-full md:w-56",showButtons:"",buttonLayout:"horizontal",min:12,max:20,fluid:""},{incrementbuttonicon:L(()=>s[10]||(s[10]=[u("span",{class:"pi pi-plus"},null,-1)])),decrementbuttonicon:L(()=>s[11]||(s[11]=[u("span",{class:"pi pi-minus"},null,-1)])),_:1},8,["modelValue"])]),u("div",Rt,[b(G,{onClick:s[6]||(s[6]=k=>ee()),icon:"pi pi-print",color:"primary",label:C(e)("optionPages.printTest")},null,8,["label"]),b(G,{onClick:s[7]||(s[7]=k=>_()),color:"primary",label:C(e)("common.save")},null,8,["label"])])]),_:1},8,["visible","header"])],64)}}};export{ti as default};
