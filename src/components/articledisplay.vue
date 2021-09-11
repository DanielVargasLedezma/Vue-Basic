<template>
  <main class="d-flex flex-row justify-content-between main">
    <div class="col-md-3 col-sm-3 col-3">
      <br />
      <h2>Imagen del articulo</h2>
      <div v-if="this.article.image">
        <img
          class="article-img"
          :src="url + 'get-image/' + this.article.image"
          alt="Article image"
        />
      </div>
      <div v-else>
        <img
          class="article-img"
          :src="this.image_link"
          :alt="this.article.title"
        />
      </div>
      <br />
    </div>
    <div class="col-md-6 col-sm-6 col-6">
      <section class="articles-head">
        <br />
        <h2>Titulo del articulo</h2>
        <h3>{{ this.article.title }}</h3>
        <br />
        <h4>Contenido del articulo</h4>
        <p>{{ this.article.content }}</p>
        <br />
      </section>
      <br />
    </div>
    <div class="col-md-3 col-sm-3 col-3">
      <br />
      <h2>Fecha en la que fue realizada el articulo</h2>
      <p>{{ this.article.date | moment("MMMM, dddd, YYYY")}}</p>
      <br />
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { global } from "../global";
export default {
  name: "ArticleDisplay",
  data() {
    return {
      id_search: "",
      article: [],
      image_link:
        "https://gblobscdn.gitbook.com/spaces%2F-MTjJJdevXzCN608dwF3%2Favatar-1613555978021.png?alt=media",
      url: global.url,
    };
  },
  mounted() {
    this.id_search = this.$route.params.id;
    this.text = "Informacion de Articulo";
    this.$emit("slider_change", this.text);
    this.getArticle();
  },
  methods: {
    getArticle() {
      axios
        .get(this.url + `article/${this.id_search}`)
        .then((res) => {
          if (res.data.status == "success") {
            this.article = res.data.article;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>