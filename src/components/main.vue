<template>
  <section>
    <section v-if="logged">
      <main class="d-flex flex-row justify-content-between main">
        <div class="col-md-3 col-sm-3 col-3"></div>
        <div class="col-md-6 col-sm-6 col-6">
          <section class="articles-head">
            <br />
            <h2>Todos los articulos</h2>
            <br />
            <div
              v-for="article in articles"
              :key="article._id"
              class="articles"
              id="articles"
            >
              <Article :key="article._id" :article="article"></Article>
              <br />
            </div>
          </section>
          <br />
        </div>
        <div class="col-md-3 col-sm-3 col-3">
          <br />
          <Sidebar></Sidebar>
          <br />
        </div>
      </main>
    </section>
    <section v-else></section>
  </section>
</template>

<script>
import ArticleController from "../controllers/ArticleController";
import Sidebar from "./sidebar.vue";
import Article from "./article.vue";
import User from "../models/User";

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
    Article,
  },
  async created() {
    this.text = "Pagina principal";
    this.$emit("slider_change", this.text);
    await this.getArticles();
  },
  methods: {
    async getArticles() {
      await ArticleController.getArticles()
        .then((articles) => {
          this.articles = articles;
        });
    },
  },
};
</script>