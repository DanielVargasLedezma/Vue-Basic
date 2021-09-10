<template>
  <main class="d-flex flex-row justify-content-between main">
    <div class="col-md-3 col-sm-3 col-3"></div>
    <div class="col-md-6 col-sm-6 col-6">
      <section class="articles-head">
        <br />
        <h2>Los articulos con alguna similitud son:</h2>
        <div class="articles" id="articles">
          <Article
            v-for="article in articles"
            :key="article._id"
            :article_image="image_link"
            :date_wrote="article.date"
            :article_name="article.title"
            :reference="'/article/' + article._id"
          ></Article>
        </div>
      </section>
      <br />
    </div>
    <div class="col-md-3 col-sm-3 col-3"></div>
  </main>
</template>

<script>
import axios from "axios";
import { global } from "../global";
import Article from "./article.vue";
export default {
  name: "SearchArticles",
  data() {
    return {
      image_link:
        "https://gblobscdn.gitbook.com/spaces%2F-MTjJJdevXzCN608dwF3%2Favatar-1613555978021.png?alt=media",
      articles: [],
      search: "",
      url : global.url,
    };
  },
  props: {},
  components: {
    Article,
  },
  mounted() {
    this.search = this.$route.params.search;
    this.text = `Página con los articulos con la palabra o palabras "${this.search}"`;
    this.$emit("slider_change", this.text);
    this.getArticles();
  },
  methods: {
    getArticles() {
      axios
        .get(this.url + `search/${this.search}`)
        .then((res) => {
          if (res.data.status == "success") {
            this.articles = res.data.articles;
          }
        })
        .catch((err) => {});
    },
  },
};
</script>