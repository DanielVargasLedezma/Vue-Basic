<template>
  <main class="d-flex flex-row justify-content-between main">
    <div class="col-md-3 col-sm-3 col-3"></div>
    <div class="col-md-6 col-sm-6 col-6">
      <section class="articles-head">
        <br />
        <br />
        <div
          v-for="article in articles"
          :key="article.id"
          class="articles"
          id="articles"
        >
          <Article :key="article.id" :article="article" :logged="logged" :user="user"></Article>
          <br />
        </div>
      </section>
      <br />
    </div>
    <div class="col-md-3 col-sm-3 col-3">
      <br />
      <Sidebar v-if="logged" @add_article="add_article"></Sidebar>
      <br />
    </div>
  </main>
</template>

<script>
import ArticleController from '../controllers/ArticleController';
import Sidebar from "./sidebar.vue";
import Article from "./article.vue";
import User from '../models/User';

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
    Article,
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
      await ArticleController.getArticles('last')
        .then(articles => {
          // console.log(articles);
          this.articles = articles;
        });
    },
  },
};
</script>