import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from './assets/i18n/en.json';
import pt from './assets/i18n/pt.json';
import es from './assets/i18n/es.json';

Vue.use(VueI18n);

const messages = { en, pt, es};

const locale = localStorage.getItem('lang') || 'en';

const i18n = new VueI18n({locale, messages});

export default i18n;