import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import Toolbar from "./components/Toolbar";
Vue.config.productionTip = false;
Vue.component("Toolbar", Toolbar);

new Vue({
  el: "#app",
  router,
  vuetify,
  render: (h) => h(App),
});
