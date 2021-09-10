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
        <form @submit.prevent action="">
          <div class="inputs">
            <div class="input-group mb-3">
              <input
                class="form-control input"
                v-model="article_data.title"
                type="text"
                placeholder="Titulo del articulo"
              />
              <!-- <div v-if="!$v.article_data.title.required">
              <p>Este campo es requerido</p>
             </div> -->
            </div>
            <div class="input-group mb-3">
              <input type="file" class="form-control form-control-sm" id="inputGroupFile01" />
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
              ></textarea>
              <!-- <div v-if="!$v.article_data.telefono.required">
              <p>Este campo es requerido</p>
              </div> -->
            </div>
          </div>
          <div class="button-area">
            <button @click="asignData" class="btn btn-outline-dark">Enviar</button>
          </div>
        </form>
      </section>
    </div>
    <div class="col-md-3 col-sm-3 col-3"></div>
  </main>
</template>

<script>
// import { minLenght, required, numeric, email } from 'vuelidate/lib/validators'
// const { minLenght, required, numeric, email } = require('vuelidate/lib/validators')
export default {
  name: "Form",
  data() {
    return {
      text: "",
      data_sent: false,
      article_data: {
        title: "",
        content: "",
        image: "",
      },
    };
  },
  props: {},
  mounted() {
    this.text = "Crear un articulo nuevo";
    this.$emit("slider_change", this.text);
  },
  methods: {
    asignData() {
      if (
        this.article_data.title &&
        this.article_data.content &&
        this.article_data.image
      )
        this.data_sent = true;
    },
  },
  // validations: {
  //   User: {
  //     nombre: {
  //       required,
  //       minLenght: minLenght(4),
  //     },
  //     correo: {
  //       required,
  //       email,
  //     },
  //     telefono: {
  //       required,
  //       numeric,
  //       minLenght: minLenght(8),
  //     },
  //   },
  // },
};
</script>

<style scoped>

</style>