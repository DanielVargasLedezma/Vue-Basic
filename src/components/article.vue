<template>
  <article
    class="d-flex flex-row justify-content-between align-items-center article"
  >
    <div class="col-md-2 col-sm-2 col-2" v-if="article.image">
      <img
        class="article-img"
        :src="url + `get-image/${article.image}`"
        :alt="article.title"
      />
    </div>
    <div class="col-md-2 col-sm-2 col-2" v-else>
      <img
        class="article-img"
        src="../assets/png/default.jpg"
        :alt="article.title"
      />
    </div>
    <div class="col-md-6 col-sm-6 col-6 article-content">
      <h4>{{ article.title }}</h4>
      <p>{{ article.date | moment("from", "now") }}</p>
      <router-link :to="'/article/' + article._id">Ver más</router-link>
    </div>
    <div class="col-md-4 col-sm-4 col-4"></div>
    <br />
  </article>
</template>

<script>
import { global } from "../global";

export default {
  name: "Article",
  props: {
    article: [],
  },
  data() {
    return {
      url: "",
    };
  },
  methods: {},
  mounted() {
    this.url = global.url;
  },
};
</script>