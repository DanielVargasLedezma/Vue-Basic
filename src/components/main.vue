<template>
  <main class="d-flex flex-row justify-content-between align-items-center main">
    <div class="col-md-3 col-sm-3 col-3"></div>
    <div class="col-md-6 col-sm-6 col-6">
      <section class="articles-head">
        <h2>Ultimos articulos</h2>
        <div class="articles">
          <article
            class="
              d-flex
              flex-row
              justify-content-between
              align-items-center
              article
            "
          >
            <div class="col-md-2 col-sm-2 col-2">
              <img
                class="article-img"
                src="https://gblobscdn.gitbook.com/spaces%2F-MTjJJdevXzCN608dwF3%2Favatar-1613555978021.png?alt=media"
                alt=""
              />
            </div>
            <div class="col-md-6 col-sm-6 col-6 article-content">
              <h4>Articulo de Prueba</h4>
              <p>Hace 5 minutos</p>
              <a href="#">Ver más</a>
            </div>
            <div class="col-md-4 col-sm-4 col-4"></div>
          </article>
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
</template>

<script>
import Sidebar from "./sidebar.vue";

export default {
  name: "Main",
  props: {},
  components: {
    Sidebar,
  },
};
</script>