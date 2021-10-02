<template src="./showuser.html"></template>

<script>
import ArticleController from "../../../controllers/ArticleController";
import UserController from "../../../controllers/UserController";
import User from "../../../models/User";
import Articles from "../../articles/article/articles.vue";

export default {
  name: "ShowUser",
  data() {
    return {
      id_search: "",
      searched_user: new User(),
      articles: [],
    };
  },
  components: {
    Articles,
  },
  props: {
    user: User,
    logged: Boolean,
  },
  async created() {
    if(this.logged){
      this.id_search = this.$route.params.id;
  
      this.$emit("slider_change", "Informacion de Usuario");
  
      if (this.id_search != this.user.id) {
        await this.getUser();
      } else {
        this.searched_user = this.user;
      }
      // console.log(this.searched_user);
      await this.getArticlesOfUser();
    }
  },
  methods: {
    async getUser() {
      await UserController.showUser(this.id_search, this.user)
        .then((res) => {
          // console.log(res);
          this.searched_user = res;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async getArticlesOfUser() {
      await ArticleController.getArticlesOfUser(this.id_search)
        .then((articles) => {
          this.articles = articles;
        })
        .catch((err) => console.error(err));
    },
  },
};
</script>