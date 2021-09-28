<template src="./articledisplay.html"></template>

<script>
import ArticleController from "../../../controllers/ArticleController";
import { global } from "../../../api-url/global";
import User from "../../../models/User";

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
  async created() {
    this.id_search = this.$route.params.id;
    this.$emit("slider_change", "Informacion de Articulo");
    await this.getArticle();
  },
  methods: {
    async getArticle() {
      await ArticleController.getArticle(this.id_search)
        .then((article) => {
          this.article = article;
          // console.log(article);
          // console.log(this.user);
          this.charged = true;
        })
        .catch((err) => {
          console.error(err);
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
          ArticleController.deleteArticle(this.id_search, this.user)
            .then((status) => {
              if (status == 204) {
                swal(
                  "Articulo eliminado!",
                  "El articulo se ha eliminado",
                  "success"
                );

                this.$router.push("/");
              }
            })
            .catch((err) => {
              console.error(err);
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