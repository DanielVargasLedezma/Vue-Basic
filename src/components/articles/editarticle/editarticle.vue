<template src="./editarticle.html"></template>

<script>
import ArticleController from "../../../controllers/ArticleController";
import Article from "../../../models/Article.js";
import User from "../../../models/User.js";
import { global } from "../../../api-url/global";
import swal from "sweetalert";

export default {
  name: "EditArticle",
  data() {
    return {
      id_search: "",
      url: global.url,
      data_sent: false,
      article: new Article(),
      file: "",
    };
  },
  props: {
    user: User,
    logged: Boolean,
  },
  async created() {
    this.id_search = this.$route.params.id;
    this.$emit("slider_change", "Editar la información de un artículo");
    await this.getArticle();
  },
  methods: {
    async editArticle() {
      if (this.article.title && this.article.content) {
        this.data_sent = true;

        await ArticleController.editArticle(this.article, this.user)
          .then((article) => {
            if (article) {
              if (this.file && this.file != undefined && this.file != "") {
                ArticleController.uploadFile(article.id, this.user, this.file)
                  .then((res) => {
                    if (res) {
                      swal(
                        "Articulo editado!",
                        "El articulo se ha editado con éxito y se ha actualizado la imagen",
                        "success"
                      );

                      this.$router.push("article/" + article.id);
                    }
                  })
                  .catch((err) => {
                    console.error(err);

                    swal(
                      "Error!",
                      "No se ha podido actualizar la imagen",
                      "error"
                    );

                    this.$router.push("article/" + article.id);
                  });
              } else {
                swal(
                  "Articulo editado con éxito!",
                  "El articulo se ha editado con éxito",
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
    async getArticle() {
      await ArticleController.getArticle(this.id_search)
        .then((article) => {
          this.article.title = article.attributes.title;
          this.article.content = article.attributes.content;
          this.article.image = article.attributes.image;
          this.article.user_id = article.attributes.user.id;
          this.article.date = article.attributes.created_at;
          this.article.id = article.id;
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