<template src="./userarticles.html"></template>

<script>
import ArticleController from "../../../controllers/ArticleController";
import User from "../../../models/User";
import Articles from "../article/articles.vue";

export default {
  name: "UserArticles",
  props: {
    user: User,
    logged: Boolean,
  },
  data() {
    return {
      articles: [],
    };
  },
  components: {
    Articles,
  },
  async created() {
    this.$emit("slider_change", "Mis articulos");
    if (this.logged) {
      await this.getArticlesOfUser();
    }
  },
  methods: {
    async getArticlesOfUser() {
      await ArticleController.getArticlesOfUser(this.user.id)
        .then((articles) => {
          this.articles = articles;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
</style>