<template src='./lastarticles.html'></template>

<script>
import ArticleController from "../../../controllers/ArticleController";
import Sidebar from "../../sidebar/sidebar.vue";
import Articles from "../article/articles.vue";
import User from "../../../models/User";

export default {
  name: "LastArticles",
  data() {
    return {
      articles: [],
    };
  },
  props: {
    logged: Boolean,
    user: User,
  },
  components: {
    Sidebar,
    Articles,
  },
  async created() {
    this.text = "Últimos artículos";
    this.$emit("slider_change", this.text);
    await this.getArticles();
  },
  methods: {
    add_article() {
      this.$router.push(`/form`);
    },
    async getArticles() {
      await ArticleController.getArticles("last").then((articles) => {
        // console.log(articles);
        this.articles = articles;
      })
      .catch(err => {
        console.error(err);
      });
    },
  },
};
</script>