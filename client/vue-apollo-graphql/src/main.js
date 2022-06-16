import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import apollo from './apollo'

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider: apollo,
  store,
  render: (h) => h(App),
}).$mount("#app");
