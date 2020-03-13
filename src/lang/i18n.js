import Vue from 'vue';
import VueI18n from 'vue-i18n';

import tw from './tw';
import en from './en';

Vue.use(VueI18n);

const locale = 'tw';

const i18n = new VueI18n({
  locale,
  messages: { en, tw },
});

export default i18n;
