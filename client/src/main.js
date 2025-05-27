import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'

import 'primeflex/primeflex.css';
import PrimeVue from 'primevue/config';
import { definePreset } from '@primeuix/themes';


import Theme from '@primeuix/themes/aura';
//import Theme from '@primeuix/themes/material';
//import Theme from '@primeuix/themes/lara';
//import Theme from '@primeuix/themes/nora';

import ToastService from 'primevue/toastservice';



function make_color(color,value)
{
    return '{' + color + '.' + value + '}';
}
let color = "orange";

const color_primary = {};

color_primary[50] = make_color(color,50);
for (let i=100; i<1000; i+=100)
{
    color_primary[i] = make_color(color,i);
}
color_primary[950] = make_color(color,950);

const color_surface = {
    0: '#ffffff',
};

color = "slate";

color_surface[50] = make_color(color,50);
for (let i=100; i<1000; i+=100)
{
    color_surface[i] = make_color(color,i);
}
color_surface[950] = make_color(color,950);

const app_theme = definePreset(Theme, {
    semantic: {
        primary: color_primary,
        /*
        * This code snippet comes from the AppConfigurator.vue file,
        * from the getPresetExt function that returns this configuration,
        I thought it would be prudent to bring it too
        */
        colorScheme: {
            light: {
                primary: {
                    color: "{primary.500}",
                    contrastColor: "#ffffff",
                    hoverColor: "{primary.600}",
                    activeColor: "{primary.700}",
                },
                highlight: {
                    background: "{primary.50}",
                    focusBackground: "{primary.100}",
                    color: "{primary.700}",
                    focusColor: "{primary.800}",
                },
                surface: color_surface,
            },
            /*
            * This code snippet comes from the AppConfigurator.vue file,
            * from the getPresetExt function that returns this configuration,
            I thought it would be prudent to bring it too
            */
            dark: {
                primary: {
                    color: "{primary.400}",
                    contrastColor: "{surface.900}",
                    hoverColor: "{primary.300}",
                    activeColor: "{primary.200}",
                },
                highlight: {
                    background: "color-mix(in srgb, {primary.400}, transparent 84%)",
                    focusBackground:
                        "color-mix(in srgb, {primary.400}, transparent 76%)",
                    color: "rgba(255,255,255,.87)",
                    focusColor: "rgba(255,255,255,.87)",
                },
                surface: color_surface,
            }
        }
    }
});

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: app_theme
    }
});
app.use(ToastService);

app.mount('#app')
