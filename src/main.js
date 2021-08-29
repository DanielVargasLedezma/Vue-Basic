import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import Main from "./components/main.vue";
import Form from "./components/form.vue";
import Error404 from "./components/error404.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Main },
  { path: "/home", component: Main },
  { path: "/form", component: Form },
  { path: "*", component: Error404 },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
