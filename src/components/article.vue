<template>
  <article
    class="d-flex flex-row justify-content-between align-items-center article"
  >
    <div class="col-md-2 col-sm-2 col-2" v-if="article.attributes.image">
      <img
        class="article-img"
        :src="url + `articles/get-image/${article.id}`"
        :alt="article.attributes.title"
      />
    </div>
    <div class="col-md-2 col-sm-2 col-2" v-else>
      <img
        class="article-img"
        src="../assets/png/default.jpg"
        :alt="article.attributes.title"
      />
    </div>
    <div class="col-md-6 col-sm-6 col-6 article-content">
      <h4>{{ article.attributes.title }}</h4>
      <p>{{ article.attributes.created_at | moment("from", "now") }}</p>
      <router-link v-if="logged" :to="'/article/' + article.id">
        Ver más
      </router-link>
      <router-link v-if="!logged" to="/login">
        Iniciar Sesión para ver más
      </router-link>
    </div>
    <div class="col-md-4 col-sm-4 col-4"></div>
    <br />
  </article>
</template>

<script>
import { global } from "../global";
import User from "../models/User";

export default {
  name: "Article",
  props: {
    article: [],
    logged: Boolean,
    user: User,
  },
  data() {
    return {
      url: global.url,
    };
  },
  methods: {},
  mounted() {},
};
</script>