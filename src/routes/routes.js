"use strict";

import Main from "../components/articles/allarticles/main.vue";
import Form from "../components/articles/createarticles/form.vue";
import LastArticles from "../components/articles/lastarticles/lastarticles.vue";
import SearchArticles from "../components/articles/searcharticle/searcharticles.vue";
import UserArticles from "../components/articles/userarticles/userarticles.vue";
import ArticleDisplay from "../components/articles/displayarticle/articledisplay.vue";
import ShowUser from "../components/user/showuser/showuser.vue";
import UserInfo from "../components/user/userinfo/userinfo.vue";
import Error404 from "../components/undefined/error404.vue";
import EditArticle from "../components/articles/editarticle/editarticle.vue";
import Login from "../components/user/login/login.vue";
import Register from "../components/user/register/register.vue";
import ForgotPassword from "../components/user/forgotpassword/forgotpassword.vue";

export const routes = [
  { path: "/", component: LastArticles },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/forgot-password", component: ForgotPassword, children: [] },
  { path: "/home", component: Main },
  { path: "/form", component: Form },
  { path: "/articles/:search", component: SearchArticles },
  { path: "/user-articles", component: UserArticles },
  { path: "/user-info", component: UserInfo },
  { path: "/article/:id", component: ArticleDisplay },
  { path: "/user/:id", component: ShowUser },
  { path: "/edit-article/:id", component: EditArticle },
  { path: "*", component: Error404 },
];
