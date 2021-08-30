<template>
  <aside
    class="
      d-flex
      flex-column
      justify-content-between
      align-items-center
      sidebar
    "
  >
    <div class="sidebar-head">
      <p>Contenido extra</p>
    </div>
    <div class="sidebar-item">
      <p>Presionar para agregar articulo</p>
      <button @click="addArticle">Agregar articulo</button>
    </div>
    <div class="sidebar-item">
      <p>Buscar un articulo en especifico</p>
      <form @submit.prevent action="">
        <input
          name="buscador"
          class="buscador"
          type="text"
          placeholder="Info"
          v-model="search"
        />
        <br />
        <button @click="searchArticle" class="button-2">
          Buscar
        </button>
      </form>
    </div>
    <div class="sidebar-item"></div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  props: {},
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchArticle() {
      if (this.search) {
        this.$router.push(`/articles/${this.search}`);
      }
    },
    addArticle() {
      this.$emit("add_article");
    },
  },
};
</script>