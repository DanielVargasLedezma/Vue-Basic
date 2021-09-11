<template>
  <main class="d-flex flex-row justify-content-between main">
    <div class="col-md-3 col-sm-3 col-3"></div>
    <div class="col-md-6 col-sm-6 col-6">
      <section class="articles-head">
        <br />
        <h2>Ultimos articulos</h2>
        <div class="articles" id="articles">
          <Article
            v-for="article in articles"
            :key="article._id"
            :article_image="image_link"
            :date_wrote="article.date"
            :article_name="article.title"
            :reference="'/article/'+ article._id"
          ></Article>
        </div>
      </section>
      <br />
    </div>
    <div class="col-md-3 col-sm-3 col-3">
      <br />
      <Sidebar @add_article="add_article"></Sidebar>
      <br />
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { global } from "../global";
import Sidebar from "./sidebar.vue";
import Article from "./article.vue";
export default {
  name: "LastArticles",
  data() {
    return {
      image_link:
        "https://gblobscdn.gitbook.com/spaces%2F-MTjJJdevXzCN608dwF3%2Favatar-1613555978021.png?alt=media",
      articles: [],
    };
  },
  props: {},
  components: {
    Sidebar,
    Article,
  },
  mounted() {
    this.text = "Página con los últimos artículos";
    this.$emit("slider_change", this.text);
    this.getArticles();
  },
  methods: {
    add_article() {
      this.$router.push(`/form`);
    },
    getArticles() {
      axios
        .get(global.url + "articles/last")
        .then((res) => {
          if (res.data.status == "success") {
            this.articles = res.data.articles;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>