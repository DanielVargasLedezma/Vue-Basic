<template src='./main.html'></template>

<script>
import ArticleController from "../../../controllers/ArticleController";
import Sidebar from "../../sidebar/sidebar.vue";
import Articles from "../article/articles.vue";
import User from "../../../models/User";

export default {
  name: "Main",
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
    this.text = "Pagina principal";
    this.$emit("slider_change", this.text);
    await this.getArticles();
    // console.log(this.user);
  },
  methods: {
    async getArticles() {
      await ArticleController.getArticles().then((articles) => {
        this.articles = articles;
      });
    },
  },
};
</script>