<template>
  <section>
    <section v-if="logged">
      <main
        class="
          d-flex
          flex-xl-row flex-lg-row flex-md-row flex-sm-row flex-column
          justify-content-between
          main
        "
        v-if="charged"
      >
        <div class="col-md-3 col-sm-3 d-flex flex-row justify-content-center">
          <section class="col-md-2 col-sm-2 col-2"></section>
          <section class="articles-head col-md-8 col-sm-8 col-8">
            <div class="wrapper">
              <br />
              <h2>Imagen del articulo</h2>
              <br />
              <div v-if="article.attributes.image">
                <img
                  class="article-img"
                  :src="url + 'get-image/' + article.attributes.image"
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
              <h3>{{ article.attributes.title }}</h3>
              <br />
              <h4>Contenido del articulo</h4>
              <p>{{ article.attributes.content }}</p>
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
            <p>
              {{ article.attributes.created_at | moment("MMMM, dddd, YYYY") }}
              <br />
              Creado por: {{ article.attributes.user.name }}
            </p>
            <br />

            <h4>Acciones a realizar</h4>
            <section
              class="
                d-flex
                flex-xl-row flex-lg-row flex-md-row flex-sm-row flex-column
                justify-content-center
              "
            >
              <div
                class="col-md-6 col-sm-6"
                v-if="article.attributes.user.id == user.id"
              >
                <button
                  @click="editarArticulo"
                  type="button"
                  class="btn btn-outline-secondary"
                >
                  Editar Articulo
                </button>
              </div>
              <br />
              <div
                class="col-md-6 col-sm-6"
                v-if="article.attributes.user.id == user.id"
              >
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
    </section>
    <section v-else>
      <main
        class="
          d-flex
          flex-row
          justify-content-between
          align-items-center
          form
          text-center
        "
      >
        <div class="col-md-4 col-sm-2 col-2"></div>
        <div class="col-md-4 col-sm-2 col-2">
          <br />
          <h2>
            Vaya... Usted no se encuentra loggeado en este momento, para
            ingresar a este apartado debe estar loggeado...
          </h2>
          <br />
        </div>
        <div class="col-md-4 col-sm-2 col-2"></div>
      </main>
    </section>
  </section>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
import { global } from "../global";
import User from "../models/User";

export default {
  name: "ArticleDisplay",
  data() {
    return {
      id_search: "",
      article: [],
      url: global.url,
      charged: false,
    };
  },
  props: {
    logged: Boolean,
    user: User,
  },
  created() {
    this.id_search = this.$route.params.id;
    this.text = "Informacion de Articulo";
    this.$emit("slider_change", this.text);
    this.getArticle();
  },
  methods: {
    async getArticle() {
      await axios
        .get(this.url + `articles/${this.id_search}`)
        .then((res) => {
          if (res.status == 200) {
            this.article = res.data.data;
            this.charged = true;
            // console.log(this.article);
          }
        })
        .catch((err) => {
          console.error(err.response);
        });
    },
    async eliminarArticulo() {
      await swal({
        title: "¿Está seguro?",
        text: "Una vez eliminado el artículo no podrá ser recuperado!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios
            .delete(
              this.url + `articles/${this.id_search}`,
              { hello: "world" },
              {
                headers: "Bearer " + this.user.verification_token,
              }
            )
            .then((res) => {
              if (res.status == 204) {
                swal(
                  "Articulo eliminado!",
                  "El articulo se ha eliminado",
                  "success"
                );

                this.$router.push("/");
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