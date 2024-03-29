import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes/routes"
// import Vuelidate from "vuelidate";

Vue.config.productionTip = false;

Vue.use(VueRouter);
// Vue.use(Vuelidate);
Vue.use(require('vue-moment'));
// Vue.use(require('vuelidate'));

const router = new VueRouter({
  routes,
  mode: "history",
});
//Valeria es feas
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
