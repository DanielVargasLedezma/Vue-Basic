<template>
  <article
    class="d-flex flex-row justify-content-between align-items-center article"
  >
    <div class="col-md-2 col-sm-2 col-2">
      <img class="article-img" :src="article_image" alt=""/>
    </div>
    <div class="col-md-6 col-sm-6 col-6 article-content">
      <h4>{{ article_name }}</h4>
      <p>{{ date_wrote }}</p>
      <router-link :to="reference">Ver más</router-link>
    </div>
    <div class="col-md-4 col-sm-4 col-4"></div>
    <br>
  </article>
</template>

<script>
export default {
  name: "Article",
  props: {
    article_name: String,
    article_image: String,
    date_wrote: String,
    reference: String,
    _id: String
  },
  methods: {
    convertDate() {},
  },
};
</script>