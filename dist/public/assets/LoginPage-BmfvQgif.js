import{s as Y}from"./index-Ci_r8iMf.js";import{s as W}from"./index-uNNS6Fru.js";import{s as G,a as V,f as C,b as J}from"./index-CTVgQch3.js";import{B,c as f,o as p,r as c,m as o,a as u,Y as Q,I as X,v as _,D as ee,S as te,b as P,d as s,e as k,f as T,g as $,t as O,w as m,T as ne,u as re,h as S,i as ae,F as le,j as oe,p as ie,k as E,l as se,n as ue}from"./index-cIMiDl95.js";import{s as de,a as pe}from"./index-_ASFVXaM.js";import{s as R,a as ce}from"./index-CZkpgxKK.js";import{s as fe,x as I}from"./index-Bw9H33IE.js";import{O as me,C as ye}from"./index-B0yR-mHT.js";import"./index-LBocRHsv.js";import"./index-DvKKhUTg.js";var ve=`
    .p-iftalabel {
        display: block;
        position: relative;
    }

    .p-iftalabel label {
        position: absolute;
        pointer-events: none;
        top: dt('iftalabel.top');
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-size: dt('iftalabel.font.size');
        font-weight: dt('iftalabel.font.weight');
        inset-inline-start: dt('iftalabel.position.x');
        color: dt('iftalabel.color');
        transition-duration: dt('iftalabel.transition.duration');
    }

    .p-iftalabel .p-inputtext,
    .p-iftalabel .p-textarea,
    .p-iftalabel .p-select-label,
    .p-iftalabel .p-multiselect-label,
    .p-iftalabel .p-autocomplete-input-multiple,
    .p-iftalabel .p-cascadeselect-label,
    .p-iftalabel .p-treeselect-label {
        padding-block-start: dt('iftalabel.input.padding.top');
        padding-block-end: dt('iftalabel.input.padding.bottom');
    }

    .p-iftalabel:has(.p-invalid) label {
        color: dt('iftalabel.invalid.color');
    }

    .p-iftalabel:has(input:focus) label,
    .p-iftalabel:has(input:-webkit-autofill) label,
    .p-iftalabel:has(textarea:focus) label,
    .p-iftalabel:has(.p-inputwrapper-focus) label {
        color: dt('iftalabel.focus.color');
    }

    .p-iftalabel .p-inputicon {
        top: dt('iftalabel.input.padding.top');
        transform: translateY(25%);
        margin-top: 0;
    }
`,be={root:"p-iftalabel"},he=B.extend({name:"iftalabel",style:ve,classes:be}),ge={name:"BaseIftaLabel",extends:G,style:he,provide:function(){return{$pcIftaLabel:this,$parentInstance:this}}},M={name:"IftaLabel",extends:ge,inheritAttrs:!1};function we(e,t,n,r,l,a){return p(),f("span",o({class:e.cx("root")},e.ptmi("root")),[c(e.$slots,"default")],16)}M.render=we;var x={name:"EyeIcon",extends:V};function Ce(e,t,n,r,l,a){return p(),f("svg",o({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z",fill:"currentColor"},null,-1)]),16)}x.render=Ce;var D={name:"EyeSlashIcon",extends:V};function ke(e,t,n,r,l,a){return p(),f("svg",o({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z",fill:"currentColor"},null,-1)]),16)}D.render=ke;var Se=`
    .p-password {
        display: inline-flex;
        position: relative;
    }

    .p-password .p-password-overlay {
        min-width: 100%;
    }

    .p-password-meter {
        height: dt('password.meter.height');
        background: dt('password.meter.background');
        border-radius: dt('password.meter.border.radius');
    }

    .p-password-meter-label {
        height: 100%;
        width: 0;
        transition: width 1s ease-in-out;
        border-radius: dt('password.meter.border.radius');
    }

    .p-password-meter-weak {
        background: dt('password.strength.weak.background');
    }

    .p-password-meter-medium {
        background: dt('password.strength.medium.background');
    }

    .p-password-meter-strong {
        background: dt('password.strength.strong.background');
    }

    .p-password-fluid {
        display: flex;
    }

    .p-password-fluid .p-password-input {
        width: 100%;
    }

    .p-password-input::-ms-reveal,
    .p-password-input::-ms-clear {
        display: none;
    }

    .p-password-overlay {
        padding: dt('password.overlay.padding');
        background: dt('password.overlay.background');
        color: dt('password.overlay.color');
        border: 1px solid dt('password.overlay.border.color');
        box-shadow: dt('password.overlay.shadow');
        border-radius: dt('password.overlay.border.radius');
    }

    .p-password-content {
        display: flex;
        flex-direction: column;
        gap: dt('password.content.gap');
    }

    .p-password-toggle-mask-icon {
        inset-inline-end: dt('form.field.padding.x');
        color: dt('password.icon.color');
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * calc(dt('icon.size') / 2));
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-password-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-password:has(.p-password-toggle-mask-icon) .p-password-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-password:has(.p-password-toggle-mask-icon) .p-password-clear-icon {
        inset-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }
`,Ie={root:function(t){var n=t.props;return{position:n.appendTo==="self"?"relative":void 0}}},Le={root:function(t){var n=t.instance;return["p-password p-component p-inputwrapper",{"p-inputwrapper-filled":n.$filled,"p-inputwrapper-focus":n.focused,"p-password-fluid":n.$fluid}]},pcInputText:"p-password-input",maskIcon:"p-password-toggle-mask-icon p-password-mask-icon",unmaskIcon:"p-password-toggle-mask-icon p-password-unmask-icon",overlay:"p-password-overlay p-component",content:"p-password-content",meter:"p-password-meter",meterLabel:function(t){var n=t.instance;return"p-password-meter-label ".concat(n.meter?"p-password-meter-"+n.meter.strength:"")},meterText:"p-password-meter-text"},Pe=B.extend({name:"password",style:Se,classes:Le,inlineStyles:Ie}),Te={name:"BasePassword",extends:ce,props:{promptLabel:{type:String,default:null},mediumRegex:{type:[String,RegExp],default:"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"},strongRegex:{type:[String,RegExp],default:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"},weakLabel:{type:String,default:null},mediumLabel:{type:String,default:null},strongLabel:{type:String,default:null},feedback:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},toggleMask:{type:Boolean,default:!1},hideIcon:{type:String,default:void 0},maskIcon:{type:String,default:void 0},showIcon:{type:String,default:void 0},unmaskIcon:{type:String,default:void 0},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelId:{type:String,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},overlayId:{type:String,default:null},overlayClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayProps:{type:null,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},autofocus:{type:Boolean,default:null}},style:Pe,provide:function(){return{$pcPassword:this,$parentInstance:this}}};function y(e){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(e)}function z(e,t,n){return(t=$e(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $e(e){var t=Oe(e,"string");return y(t)=="symbol"?t:t+""}function Oe(e,t){if(y(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(y(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var A={name:"Password",extends:Te,inheritAttrs:!1,emits:["change","focus","blur","invalid"],inject:{$pcFluid:{default:null}},data:function(){return{overlayVisible:!1,meter:null,infoText:null,focused:!1,unmasked:!1}},mediumCheckRegExp:null,strongCheckRegExp:null,resizeListener:null,scrollHandler:null,overlay:null,mounted:function(){this.infoText=this.promptText,this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex)},beforeUnmount:function(){this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(I.clear(this.overlay),this.overlay=null)},methods:{onOverlayEnter:function(t){I.set("overlay",t,this.$primevue.config.zIndex.overlay),te(t,{position:"absolute",top:"0"}),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener(),this.$attrSelector&&t.setAttribute(this.$attrSelector,"")},onOverlayLeave:function(){this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null},onOverlayAfterLeave:function(t){I.clear(t)},alignOverlay:function(){this.appendTo==="self"?X(this.overlay,this.$refs.input.$el):(this.overlay.style.minWidth=_(this.$refs.input.$el)+"px",ee(this.overlay,this.$refs.input.$el))},testStrength:function(t){var n=0;return this.strongCheckRegExp.test(t)?n=3:this.mediumCheckRegExp.test(t)?n=2:t.length&&(n=1),n},onInput:function(t){this.writeValue(t.target.value,t),this.$emit("change",t)},onFocus:function(t){this.focused=!0,this.feedback&&(this.setPasswordMeter(this.d_value),this.overlayVisible=!0),this.$emit("focus",t)},onBlur:function(t){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.$emit("blur",t)},onKeyUp:function(t){if(this.feedback){var n=t.target.value,r=this.checkPasswordStrength(n),l=r.meter,a=r.label;if(this.meter=l,this.infoText=a,t.code==="Escape"){this.overlayVisible&&(this.overlayVisible=!1);return}this.overlayVisible||(this.overlayVisible=!0)}},setPasswordMeter:function(){if(!this.d_value){this.meter=null,this.infoText=this.promptText;return}var t=this.checkPasswordStrength(this.d_value),n=t.meter,r=t.label;this.meter=n,this.infoText=r,this.overlayVisible||(this.overlayVisible=!0)},checkPasswordStrength:function(t){var n=null,r=null;switch(this.testStrength(t)){case 1:n=this.weakText,r={strength:"weak",width:"33.33%"};break;case 2:n=this.mediumText,r={strength:"medium",width:"66.66%"};break;case 3:n=this.strongText,r={strength:"strong",width:"100%"};break;default:n=this.promptText,r=null;break}return{label:n,meter:r}},onInvalid:function(t){this.$emit("invalid",t)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new ye(this.$refs.input.$el,function(){t.overlayVisible&&(t.overlayVisible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.overlayVisible&&!Q()&&(t.overlayVisible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},overlayRef:function(t){this.overlay=t},onMaskToggle:function(){this.unmasked=!this.unmasked},onOverlayClick:function(t){me.emit("overlay-click",{originalEvent:t,target:this.$el})}},computed:{inputType:function(){return this.unmasked?"text":"password"},weakText:function(){return this.weakLabel||this.$primevue.config.locale.weak},mediumText:function(){return this.mediumLabel||this.$primevue.config.locale.medium},strongText:function(){return this.strongLabel||this.$primevue.config.locale.strong},promptText:function(){return this.promptLabel||this.$primevue.config.locale.passwordPrompt},overlayUniqueId:function(){return this.$id+"_overlay"},containerDataP:function(){return C({fluid:this.$fluid})},meterDataP:function(){var t,n;return C(z({},(t=this.meter)===null||t===void 0?void 0:t.strength,(n=this.meter)===null||n===void 0?void 0:n.strength))},overlayDataP:function(){return C(z({},"portal-"+this.appendTo,"portal-"+this.appendTo))}},components:{InputText:R,Portal:fe,EyeSlashIcon:D,EyeIcon:x}};function v(e){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(e)}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?j(Object(n),!0).forEach(function(r){Ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ee(e,t,n){return(t=ze(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ze(e){var t=je(e,"string");return v(t)=="symbol"?t:t+""}function je(e,t){if(v(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(v(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ve=["data-p"],Be=["id","data-p"],Re=["data-p"];function Me(e,t,n,r,l,a){var h=P("InputText"),b=P("Portal");return p(),f("div",o({class:e.cx("root"),style:e.sx("root"),"data-p":a.containerDataP},e.ptmi("root")),[s(h,o({ref:"input",id:e.inputId,type:a.inputType,class:[e.cx("pcInputText"),e.inputClass],style:e.inputStyle,defaultValue:e.d_value,name:e.$formName,"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel,"aria-controls":e.overlayProps&&e.overlayProps.id||e.overlayId||e.panelProps&&e.panelProps.id||e.panelId||a.overlayUniqueId,"aria-haspopup":!0,placeholder:e.placeholder,required:e.required,fluid:e.fluid,disabled:e.disabled,variant:e.variant,invalid:e.invalid,size:e.size,autofocus:e.autofocus,onInput:a.onInput,onFocus:a.onFocus,onBlur:a.onBlur,onKeyup:a.onKeyUp,onInvalid:a.onInvalid},e.inputProps,{"data-p-has-e-icon":e.toggleMask,pt:e.ptm("pcInputText"),unstyled:e.unstyled}),null,16,["id","type","class","style","defaultValue","name","aria-labelledby","aria-label","aria-controls","placeholder","required","fluid","disabled","variant","invalid","size","autofocus","onInput","onFocus","onBlur","onKeyup","onInvalid","data-p-has-e-icon","pt","unstyled"]),e.toggleMask&&l.unmasked?c(e.$slots,e.$slots.maskicon?"maskicon":"hideicon",o({key:0,toggleCallback:a.onMaskToggle,class:[e.cx("maskIcon"),e.maskIcon]},e.ptm("maskIcon")),function(){return[(p(),T($(e.maskIcon?"i":"EyeSlashIcon"),o({class:[e.cx("maskIcon"),e.maskIcon],onClick:a.onMaskToggle},e.ptm("maskIcon")),null,16,["class","onClick"]))]}):k("",!0),e.toggleMask&&!l.unmasked?c(e.$slots,e.$slots.unmaskicon?"unmaskicon":"showicon",o({key:1,toggleCallback:a.onMaskToggle,class:[e.cx("unmaskIcon")]},e.ptm("unmaskIcon")),function(){return[(p(),T($(e.unmaskIcon?"i":"EyeIcon"),o({class:[e.cx("unmaskIcon"),e.unmaskIcon],onClick:a.onMaskToggle},e.ptm("unmaskIcon")),null,16,["class","onClick"]))]}):k("",!0),u("span",o({class:"p-hidden-accessible","aria-live":"polite"},e.ptm("hiddenAccesible"),{"data-p-hidden-accessible":!0}),O(l.infoText),17),s(b,{appendTo:e.appendTo},{default:m(function(){return[s(ne,o({name:"p-connected-overlay",onEnter:a.onOverlayEnter,onLeave:a.onOverlayLeave,onAfterLeave:a.onOverlayAfterLeave},e.ptm("transition")),{default:m(function(){return[l.overlayVisible?(p(),f("div",o({key:0,ref:a.overlayRef,id:e.overlayId||e.panelId||a.overlayUniqueId,class:[e.cx("overlay"),e.panelClass,e.overlayClass],style:[e.overlayStyle,e.panelStyle],onClick:t[0]||(t[0]=function(){return a.onOverlayClick&&a.onOverlayClick.apply(a,arguments)}),"data-p":a.overlayDataP,role:"dialog","aria-live":"polite"},L(L(L({},e.panelProps),e.overlayProps),e.ptm("overlay"))),[c(e.$slots,"header"),c(e.$slots,"content",{},function(){return[u("div",o({class:e.cx("content")},e.ptm("content")),[u("div",o({class:e.cx("meter")},e.ptm("meter")),[u("div",o({class:e.cx("meterLabel"),style:{width:l.meter?l.meter.width:""},"data-p":a.meterDataP},e.ptm("meterLabel")),null,16,Re)],16),u("div",o({class:e.cx("meterText")},e.ptm("meterText")),O(l.infoText),17)],16)]}),c(e.$slots,"footer")],16,Be)):k("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16,Ve)}A.render=Me;const xe={class:"flex flex-column gap-3"},De={class:"w-full"},Ae={class:"w-full"},Je={__name:"LoginPage",setup(e){const t=oe(),n=re(),r=S("admin"),l=S(""),a=S("");function h(){return r.value.trim()?l.value?(a.value="",!0):(a.value="请输入密码",!1):(a.value="请输入用户名",!1)}function b(){localStorage.setItem("loggedIn","true");const d=new Date().toISOString().split("T")[0];localStorage.setItem("loginDate",d),t.replace(ie.mainPath.path)}ae(()=>{const d=window.AndroidBridge;d&&(r.value=""),d&&d.loginned()&&b()});function g(){if(!h()){n.add({severity:"error",summary:"登录失败",detail:a.value,life:3e3});return}const d=window.AndroidBridge;if(d&&d.login){d.login(r.value,l.value)||(a.value="Wrong username or password!",n.add({severity:"error",summary:"login failed",detail:a.value,life:3e3}));return}ue.login(r.value,l.value,i=>{i.success&&i.data?(sessionStorage.setItem("token",i.data),b()):(a.value=i.message||"用户名或密码错误",n.add({severity:"error",summary:"登录失败",detail:a.value,life:3e3}))})}return(d,i)=>{const U=pe,K=R,Z=de,H=M,F=J,q=W,N=Y;return p(),f(le,null,[s(q,{visible:!0,modal:!0,header:"Login",style:{width:"25rem"},closable:!1,draggable:!1,closeOnEscape:!1},{default:m(()=>[u("div",xe,[u("div",De,[s(H,null,{default:m(()=>[s(Z,null,{default:m(()=>[s(U,{class:"pi pi-user"}),s(K,{modelValue:r.value,"onUpdate:modelValue":i[0]||(i[0]=w=>r.value=w),name:"username",type:"text",placeholder:"Username",onKeyup:E(g,["enter"]),class:"w-full"},null,8,["modelValue"])]),_:1}),i[2]||(i[2]=u("label",{for:"username"},"Username",-1))]),_:1,__:[2]})]),u("div",Ae,[s(se(A),{modelValue:l.value,"onUpdate:modelValue":i[1]||(i[1]=w=>l.value=w),name:"password",placeholder:"Password",toggleMask:"",feedback:!1,onKeyup:E(g,["enter"]),fluid:""},null,8,["modelValue"])]),s(F,{onClick:g,type:"button",label:"Login",class:"w-full"})])]),_:1}),s(N)],64)}}};export{Je as default};
