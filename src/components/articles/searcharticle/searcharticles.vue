<template src="./searcharticles.html"></template>

<script>
import ArticleController from "../../../controllers/ArticleController";
import Articles from "../article/articles.vue";
import User from "../../../models/User";

export default {
  name: "SearchArticles",
  data() {
    return {
      articles: [],
      search: "",
    };
  },
  props: {
    logged: Boolean,
    user: User,
  },
  components: {
    Articles,
  },
  async created() {
    this.search = this.$route.params.search;
    this.$emit(
      "slider_change",
      `Página con los articulos con la palabra o palabras "${this.search}"`
    );
    await this.getArticles();
  },
  methods: {
    async getArticles() {
      await ArticleController.searchArticles(this.search)
        .then((articlesFound) => {
          if (articlesFound) {
            this.articles = articlesFound;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>