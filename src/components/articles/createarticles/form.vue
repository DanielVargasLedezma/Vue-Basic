<template src="./form.html"></template>

<script>
// const { minLenght, required } = require("vuelidate/lib/validators");
// import useValidate from '@vuelidate/core';
// import { minLenght, required, numeric, email } from '@vuelidate/validators';
import ArticleController from "../../../controllers/ArticleController.js";
import Article from "../../../models/Article.js";
import User from "../../../models/User.js";
import swal from "sweetalert";

export default {
  name: "Form",
  data() {
    return {
      data_sent: false,
      article: new Article(),
      file: "",
    };
  },
  props: {
    user: User,
    logged: Boolean,
  },
  created() {
    this.$emit("slider_change", "Crear un articulo nuevo");
  },
  methods: {
    async sendData() {
      if (this.article.title && this.article.content) {
        this.data_sent = true;

        await ArticleController.createArticle(this.article, this.user)
          .then((article) => {
            if (article) {
              if (this.file && this.file != undefined && this.file != "") {
                ArticleController.uploadFile(article.id, this.user, this.file)
                  .then((res) => {
                    if (res) {
                      swal(
                        "Articulo creado!",
                        "El articulo se ha creado con éxito y se ha subido la imagen",
                        "success"
                      );

                      this.$router.push("article/" + article.id);
                    }
                  })
                  .catch((err) => {
                    console.error(err);

                    swal(
                      "Error!",
                      "Se ha creado el artirculo pero no se ha podido subir la imagen",
                      "error"
                    );

                    this.$router.push("article/" + article.id);
                  });
              } else {
                swal(
                  "Articulo creado con éxito!",
                  "El articulo se ha creado con éxito",
                  "success"
                );

                this.$router.push("article/" + article.id);
              }
            }
          })
          .catch((err) => {
            console.error(err);
            swal("Error!", "Un error desconocido ha sucedido", "error");
          });
      }
    },
    fileChange() {
      this.file = this.$refs.file.files[0];
    },
  },
  // validations: {
  //   article: {
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
.form-wrapper {
  background: lightgray !important;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.356) !important;
  border-radius: 0.3rem !important;
}

.form-wrapper p {
  font-size: 1rem;
}

p.register a {
  text-decoration: none;
}

p.forgot {
  left: 0% !important;
}
</style>