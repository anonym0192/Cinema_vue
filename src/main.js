import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import "animate.css/source/animate.css";
import store from './store';

import VueI18n from 'vue-i18n';

import en from './assets/i18n/en.json';
import pt from './assets/i18n/pt.json';
import es from './assets/i18n/es.json';

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(VueI18n);

const messages = { en, pt, es};


const i18n = new VueI18n({locale: 'pt', messages});


new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app');
 
