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
        <h1>Escriba sus datos!</h1>
        <form @submit.prevent action="" class form-miedo>
          <div class="inputs">
            <input v-model="user.nombre" type="text" placeholder="Nombre" />
            <div v-if="!$v.user.nombre.required">
              <p>Este campo es requerido</p>
            </div>
            <br />
            <input v-model="user.correo" type="text" placeholder="Correo" />
            <div v-if="!$v.user.correo.required">
              <p>Este campo es requerido</p>
            </div>
            <br />
            <input v-model="user.telefono" type="text" placeholder="Telefono" />
            <div v-if="!$v.user.telefono.required">
              <p>Este campo es requerido</p>
            </div>
          </div>
          <div class="button-area">
            <button @click="asignData">Enviar</button>
          </div>
        </form>
        <div v-if="data_sent">
          <p>Nombre: {{ user.nombre }}</p>
          <p>Correo Electronico: {{ user.correo }}</p>
          <p>Telefono: {{ user.telefono }}</p>
        </div>
      </section>
    </div>
    <div class="col-md-3 col-sm-3 col-3"></div>
  </main>
</template>

<script>
import { minLenght, required, numeric, email } from 'vuelidate/lib/validators';
export default {
  name: "Form",
  data() {
    return {
      text: "",
      data_sent: false,
      user: {
        nombre: "",
        correo: "",
        telefono: "",
      },
    };
  },
  props: {},
  mounted() {
    this.text = "Formulario Principal";
    this.$emit("slider_change", this.text);
  },
  methods: {
    asignData() {
      if (this.user.nombre && this.user.correo && this.user.telefono)
        this.data_sent = true;
    },
  },
  validations:{
    nombre:{
      required,
      minLenght:minLenght(4)
    },
    correo:{
      required,
      email
    },
    telefono:{
      required,
      numeric,
      minLenght:minLenght(8)
    }
  }
};
</script>