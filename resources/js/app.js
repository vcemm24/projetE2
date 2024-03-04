import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler.js';

import Exemple from "./components/exemple.vue"

const app = createApp({
    components:{
        Exemple,
    }
});
app.mount("#app");
