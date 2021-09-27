"use strict";

import Main from "../components/main.vue";
import Form from "../components/form.vue";
import LastArticles from "../components/lastarticles.vue";
import SearchArticles from "../components/searcharticles.vue";
import ArticleDisplay from "../components/articledisplay.vue";
import Error404 from "../components/error404.vue";
import EditArticle from "../components/editarticle.vue";
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
  { path: "/edit-article/:id", component: EditArticle },
  { path: "*", component: Error404 },
];
