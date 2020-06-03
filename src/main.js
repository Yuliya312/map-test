import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import router from "./router";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(Vuelidate);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCuspkxvTxjgnO8siovG-2kBWvYOufaIw8",
    libraries: "places",
    v: 3.38
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
