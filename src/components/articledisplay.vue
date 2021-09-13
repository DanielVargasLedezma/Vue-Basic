<template>
  <main
    class="
      d-flex
      flex-xl-row flex-lg-row flex-md-row flex-sm-row flex-column
      justify-content-between
      main
    "
  >
    <div class="col-md-3 col-sm-3 d-flex flex-row justify-content-center">
      <section class="col-md-2 col-sm-2 col-2"></section>
      <section class="articles-head col-md-8 col-sm-8 col-8">
        <div class="wrapper">
          <br />
          <h2>Imagen del articulo</h2>
          <br />
          <div v-if="this.article.image">
            <img
              class="article-img"
              :src="url + 'get-image/' + this.article.image"
              alt="Article image"
            />
            <br />
          </div>
          <div v-else>
            <img
              class="article-img"
              src="../assets/png/default.jpg"
              alt="Article image"
            />
          </div>
          <br />
        </div>
      </section>
      <section class="col-md-0 col-sm-0 col-2"></section>
      <br />
    </div>

    <div class="col-md-6 col-sm-6 d-flex flex-row justify-content-center">
      <section class="col-md-2 col-sm-2 col-2"></section>
      <section class="articles-head col-md-8 col-sm-8 col-8">
        <div class="wrapper">
          <br />
          <h3>{{ this.article.title }}</h3>
          <br />
          <h4>Contenido del articulo</h4>
          <p>{{ this.article.content }}</p>
          <br />
        </div>
        <br />
      </section>
      <section class="col-md-2 col-sm-2 col-2"></section>

      <br />
    </div>
    <div
      class="
        col-md-3 col-sm-3
        d-flex
        flex-xl-row flex-lg-row flex-md-row flex-sm-row flex-column
        justify-content-center
      "
    >
      <section class="col-md-2 col-sm-2"></section>
      <section class="col-md-8 col-sm-8">
        <br />
        <h2>Fecha en la que fue realizada el articulo</h2>
        <p>{{ this.article.date | moment("MMMM, dddd, YYYY") }}</p>
        <br />

        <h4>Acciones a realizar</h4>
        <section
          class="
            d-flex
            flex-xl-row flex-lg-row flex-md-row flex-sm-row flex-column
            justify-content-center
          "
        >
          <div class="col-md-6 col-sm-6">
            <button
              @click="editarArticulo()"
              type="button"
              class="btn btn-outline-secondary"
            >
              Editar Articulo
            </button>
          </div>
          <br />
          <div class="col-md-6 col-sm-6">
            <button
              @click="eliminarArticulo"
              type="button"
              class="btn btn-outline-danger"
            >
              Eliminar Articulo
            </button>
          </div>
        </section>
        <br />
      </section>
      <section class="col-md-2 col-sm-2"></section>
    </div>
  </main>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
import { global } from "../global";

export default {
  name: "ArticleDisplay",
  data() {
    return {
      id_search: "",
      article: null,
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
    eliminarArticulo() {
      swal({
        title: "¿Está seguro?",
        text: "Una vez eliminado el artículo no podrá ser recuperado!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios
            .delete(this.url + `article/${this.id_search}`)
            .then((res) => {
              if (res.data.article) {
                swal(
                  "Articulo eliminado!",
                  "El articulo se ha eliminado",
                  "success"
                );
                this.$router.push("/home");
              } else {
                swal(
                  "Articulo no eliminado!",
                  "El articulo no se ha podido eliminar",
                  "error"
                );
              }
            })
            .catch((err) => {
              console.log(err);
              swal("Error!", "Un error desconocido ha sucedido", "error");
            });
        } else {
          swal(
            "Articulo no eliminado!",
            "La acción de eliminar ha sido cancelada",
            "success"
          );
        }
      });
    },
    editarArticulo() {
      this.$router.push(`/edit-article/${this.id_search}`);
    },
  },
};
</script>

<style scoped>
</style>