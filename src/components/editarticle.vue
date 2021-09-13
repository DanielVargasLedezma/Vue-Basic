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
          <div v-if="this.article_data.image">
            <img
              class="article-img"
              :src="url + 'get-image/' + this.article_data.image"
              alt="Article image"
            />
            <br />
          </div>
          <div v-else>
            <h4>No hay imagen actualmente en este articulo</h4>
          </div>
          <br />
          <div class="input-group mb-3">
            <input
              type="file"
              class="form-control form-control-sm"
              id="file"
              name="file0"
              ref="file"
              @change="fileChange()"
            />
            <!-- <div v-if="!$v.article_data.imagen.required">
              <p>Este campo es requerido</p>
              </div> -->
          </div>
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
          <form @submit.prevent="editArticle">
            <div class="inputs">
              <h2>Titulo del articulo</h2>
              <br />
              <div class="input-group mb-3">
                <input
                  class="form-control input"
                  v-model="article_data.title"
                  type="text"
                  placeholder="Titulo del articulo"
                  required
                />
                <!-- <div v-if="!$v.article_data.title.required">
                <p>Este campo es requerido</p>
              </div> -->
              </div>

              <h4>Contenido del articulo</h4>
              <br />
              <div class="input-group mb-3">
                <textarea
                  class="form-control"
                  cols="23"
                  rows="3"
                  placeholder="Contenido del articulo"
                  v-model="article_data.content"
                  required
                ></textarea>
                <!-- <div v-if="!$v.article_data.telefono.required">
              <p>Este campo es requerido</p>
              </div> -->
              </div>
            </div>
            <div class="button-area">
              <button class="btn btn-outline-dark">Enviar</button>
            </div>
          </form>
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
        <p>{{ this.article_data.date | moment("MMMM, dddd, YYYY") }}</p>
        <br />
      </section>
      <section class="col-md-2 col-sm-2"></section>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
import { global } from "../global";
import Article from "../models/Article.js";

export default {
  name: "EditArticle",
  data() {
    return {
      id_search: "",
      url: global.url,
      text: "",
      data_sent: false,
      article_data: new Article("", "", null, ""),
      file: "",
    };
  },
  mounted() {
    this.id_search = this.$route.params.id;
    this.text = "Editar la información de un artículo";
    this.$emit("slider_change", this.text);
    this.getArticle();
  },
  methods: {
    editArticle() {
      if (this.article_data.title && this.article_data.content) {
        this.data_sent = true;

        axios
          .put(this.url + "article/" + this.id_search, this.article_data)
          .then((res) => {
            if (res.data.status == "success") {
              if (this.file && this.file != undefined && this.file != "") {
                const formData = new FormData();

                formData.append("file0", this.file, this.file.name);
                var articleId = res.data.article._id;
                axios
                  .post(this.url + "upload-image/" + articleId, formData)
                  .then((res) => {
                    if (res.data.article) {
                      swal(
                        "Articulo editado!",
                        "El articulo con una nueva imagen se ha editado con éxito",
                        "success"
                      );
                      this.$router.push("/article/" + this.id_search);
                    } else {
                      //Mostrar Error
                      swal(
                        "Edición fallida!",
                        "El articulo no se ha podido editar correctamente",
                        "error"
                      );
                    }
                  })
                  .catch((err) => {
                    console.error(err);
                    swal("Error!", "Un error desconocido ha sucedido", "error");
                  });
              } else {
                swal(
                  "Articulo editado con éxito!",
                  "El articulo se ha editado con éxito",
                  "success"
                );
                this.$router.push("/article/" + this.id_search);
              }
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
    fileChange() {
      this.file = this.$refs.file.files[0];
    },
    getArticle() {
      axios
        .get(this.url + `article/${this.id_search}`)
        .then((res) => {
          if (res.data.status == "success") {
            this.article_data = res.data.article;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
.inputs input,
textarea,
input[type="file"] {
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  border-bottom: aliceblue solid 0.1rem;
  margin-bottom: 1rem;
}

.main {
  background-color: darkgray;
  text-align: center;
  font-size: 1.2rem;
}
</style>