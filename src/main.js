import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
// import Vuelidate from "vuelidate";

import Main from "./components/main.vue";
import Form from "./components/form.vue";
import LastArticles from "./components/lastarticles.vue";
import SearchArticles from "./components/searcharticles.vue";
import ArticleDisplay from "./components/articledisplay.vue";
import Error404 from "./components/error404.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);
// Vue.use(Vuelidate);
Vue.use(require('vue-moment'));
// Vue.use(require('vuelidate'));

const routes = [
  { path: "/", component: LastArticles },
  { path: "/home", component: Main },
  { path: "/form", component: Form },
  { path: "/articles/:search", component: SearchArticles },
  { path: "/article/:id", component: ArticleDisplay },
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
