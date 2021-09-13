<template>
  <main class="d-flex flex-row justify-content-between align-items-center form">
    <div class="col-md-3 col-sm-3 col-3"></div>
    <div class="col-md-6 col-sm-6 col-6">
      <section
        class="
          d-flex
          flex-column
          justify-content-between
          align-items-center
          formulary
        "
      >
        <br />
        <h3>Escriba los datos del nuevo articulo!</h3>
        <br />
        <form @submit.prevent="sendData">
          <div class="inputs">
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
      </section>
    </div>
    <div class="col-md-3 col-sm-3 col-3"></div>
  </main>
</template>

<script>
// const { minLenght, required } = require("vuelidate/lib/validators");
// import useValidate from '@vuelidate/core';
// import { minLenght, required, numeric, email } from '@vuelidate/validators';
import Article from "../models/Article.js";
import axios from "axios";
import swal from "sweetalert";
import { global } from "../global";

export default {
  name: "Form",
  data() {
    return {
      text: "",
      data_sent: false,
      article_data: new Article("", "", null, ""),
      url: global.url,
      file: "",
    };
  },
  props: {},
  mounted() {
    this.text = "Crear un articulo nuevo";
    this.$emit("slider_change", this.text);
  },
  methods: {
    sendData() {
      if (this.article_data.title && this.article_data.content) {
        this.data_sent = true;

        axios
          .post(this.url + "save", this.article_data)
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
                        "Articulo creado!",
                        "El articulo con imagen se ha creado con éxito",
                        "success"
                      );
                      this.$router.push("/home");
                    } else {
                      //Mostrar Error
                      swal(
                        "Creacción fallida!",
                        "El articulo no se ha creado correctamente",
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
                  "Articulo creado!",
                  "El articulo  sin imagen se ha creado con éxito",
                  "success"
                );
                this.$router.push("/home");
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
  },
  // validations: {
  //   article_data: {
  //     title: {
  //       required,
  //       minLenght: minLenght(4),
  //     },
  //     content: {
  //       required,
  //     },
  //     image: {
  //       required,
  //     },
  //   },
  // },
};
</script>

<style scoped>
</style>