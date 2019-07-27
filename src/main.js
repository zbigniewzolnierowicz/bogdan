import Vue from "vue";
import "./plugins/fontawesome";
import App from "./App.vue";
import router from "./router";
import VueRouter from "vue-router";
import VueFirestore from "vue-firestore";
import store from "./store";
import i18n from "./i18n";
import VueRx from "vue-rx";

Vue.use(VueRx);

Vue.use(VueFirestore);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
