"use strict";

import Main from "../components/articles/allarticles/main.vue";
import Form from "../components/articles/createarticles/form.vue";
import LastArticles from "../components/articles/lastarticles/lastarticles.vue";
import SearchArticles from "../components/articles/searcharticle/searcharticles.vue";
import ArticleDisplay from "../components/articles/displayarticle/articledisplay.vue";
import ShowUser from "../components/user/info/showuser.vue";
import Error404 from "../components/undefined/error404.vue";
import EditArticle from "../components/articles/editarticle/editarticle.vue";
import Login from "../components/user/login/login.vue";
import Register from "../components/user/register/register.vue";

export const routes = [
  { path: "/", component: LastArticles },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/home", component: Main },
  { path: "/form", component: Form },
  { path: "/articles/:search", component: SearchArticles },
  { path: "/article/:id", component: ArticleDisplay },
  { path: "/user/:id", component: ShowUser },
  { path: "/edit-article/:id", component: EditArticle },
  { path: "*", component: Error404 },
];
