import{s as $}from"./index-DNVMnce_.js";import{f as O,c as R}from"./index-DsByIwCv.js";import{b as E,s as L}from"./index-BkaebiXV.js";import{B as Q,c as k,o as w,a,m as v,d as U,h as c,b as i,e as y,f as j,E as q,w as C,F as z}from"./index-DOi7WD0x.js";import{C as x,Q as S}from"./CodeMaker-CgE_MWay.js";import{s as N}from"./index-Dzk7cjB5.js";var D=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`,I={root:{position:"relative"}},A={root:function(n){var o=n.instance,s=n.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":o.checked,"p-disabled":s.disabled,"p-invalid":o.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},G=Q.extend({name:"toggleswitch",style:D,classes:A,inlineStyles:I}),M={name:"BaseToggleSwitch",extends:E,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:G,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},B={name:"ToggleSwitch",extends:M,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(n){var o=n==="root"?this.ptmi:this.ptm;return o(n,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(n){if(!this.disabled&&!this.readonly){var o=this.checked?this.falseValue:this.trueValue;this.writeValue(o,n),this.$emit("change",n)}},onFocus:function(n){this.$emit("focus",n)},onBlur:function(n){var o,s;this.$emit("blur",n),(o=(s=this.formField).onBlur)===null||o===void 0||o.call(s,n)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return O({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},H=["data-p-checked","data-p-disabled","data-p"],J=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"],K=["data-p"],W=["data-p"];function X(t,n,o,s,b,l){return w(),k("div",v({class:t.cx("root"),style:t.sx("root")},l.getPTOptions("root"),{"data-p-checked":l.checked,"data-p-disabled":t.disabled,"data-p":l.dataP}),[a("input",v({id:t.inputId,type:"checkbox",role:"switch",class:[t.cx("input"),t.inputClass],style:t.inputStyle,checked:l.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,"aria-checked":l.checked,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,onFocus:n[0]||(n[0]=function(){return l.onFocus&&l.onFocus.apply(l,arguments)}),onBlur:n[1]||(n[1]=function(){return l.onBlur&&l.onBlur.apply(l,arguments)}),onChange:n[2]||(n[2]=function(){return l.onChange&&l.onChange.apply(l,arguments)})},l.getPTOptions("input")),null,16,J),a("div",v({class:t.cx("slider")},l.getPTOptions("slider"),{"data-p":l.dataP}),[a("div",v({class:t.cx("handle")},l.getPTOptions("handle"),{"data-p":l.dataP}),[U(t.$slots,"handle",{checked:l.checked})],16,W)],16,K)],16,H)}B.render=X;const Y={class:"flex flex-wrap justify-content-center w-full h-full"},Z={key:0,class:"flex flex-column align-items-center justify-content-center"},ee={key:1,class:"flex flex-column align-items-center justify-content-center"},te={class:"flex flex-row"},se={__name:"QCodePage",setup(t){const n=c(!1),o=c(null),s=c(0),b=c(""),l=c(0),h=c(""),f=c(null),V=c(!1);async function P(){const d=document.createElement("canvas");for(let e=s.value;e<=l.value;e++){const m=e<10?`0${e}`:`${e}`,g="https://sushi.xiaoxiong.pt"+b.value+"/client.html?table="+x.SimpleEncode(m);console.log("生成二维码数据: ",g),await S.toCanvas(d,g,{width:300});const u=document.createElement("a");u.download=`${m}.png`,u.href=d.toDataURL("image/png"),u.click(),await new Promise(p=>setTimeout(p,300))}console.log("全部二维码下载完毕")}const T=()=>{if(h.value){let d=window.env.QR_ADDR+x.SimpleEncode(h.value);console.log("The qrcode data: ",d),S.toCanvas(f.value,d,{width:300},e=>{e?console.error(e):V.value=!0})}},F=()=>{if(f.value){const d=document.createElement("a");d.download=`座号-${h.value}-二维码.png`,d.href=f.value.toDataURL("image/png"),d.click()}};function _(){if(!h.value){o.value.add({severity:"error",summary:"错误",detail:"座位号不能为空",life:3e3});return}T(),o.value.add({severity:"success",summary:"成功",detail:"提交成功！",life:3e3})}return(d,e)=>{const m=B,g=L,u=R,p=$;return w(),k(z,null,[i(m,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=r=>n.value=r)},null,8,["modelValue"]),a("div",Y,[n.value?y("",!0):(w(),k("div",Z,[e[5]||(e[5]=a("h2",null,"座号二维码生成器",-1)),i(g,{type:"text",modelValue:h.value,"onUpdate:modelValue":e[1]||(e[1]=r=>h.value=r)},null,8,["modelValue"]),i(u,{label:"生成二维码",onClick:_}),i(q(N),{ref_key:"toast",ref:o},null,512),a("div",null,[a("canvas",{ref_key:"qrCanvas",ref:f},null,512)]),V.value?(w(),j(u,{key:0,label:"下载二维码",icon:"pi pi-download",onClick:F})):y("",!0)])),n.value?(w(),k("div",ee,[e[9]||(e[9]=a("h2",null,"座号二维码一键生成器",-1)),a("div",te,[i(p,{variant:"on"},{default:C(()=>[i(g,{type:"number",modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=r=>s.value=r)},null,8,["modelValue"]),e[6]||(e[6]=a("label",{for:"on_label"},"请输入起始座号",-1))]),_:1,__:[6]}),i(p,{variant:"on"},{default:C(()=>[i(g,{type:"number",modelValue:l.value,"onUpdate:modelValue":e[3]||(e[3]=r=>l.value=r)},null,8,["modelValue"]),e[7]||(e[7]=a("label",{for:"on_label"},"请输入最终座号",-1))]),_:1,__:[7]})]),i(p,{variant:"on"},{default:C(()=>[i(g,{type:"text",modelValue:b.value,"onUpdate:modelValue":e[4]||(e[4]=r=>b.value=r)},null,8,["modelValue"]),e[8]||(e[8]=a("label",{for:"on_label"},"请输入地址",-1))]),_:1,__:[8]}),i(u,{label:"一键生成下载二维码",onClick:P})])):y("",!0)])],64)}}};export{se as default};
