<template>
  <section>
    <section v-if="!logged">
      <main
        class="d-flex flex-row justify-content-between align-items-center form"
      >
        <div class="col-md-4 col-sm-2 col-2"></div>
        <div class="col-md-4 col-sm-8 col-8">
          <section
            class="
              flex-column
              justify-content-between
              align-items-center
              formulary
              text-center
            "
          >
            <br />
            <h3>Escriba sus datos personales</h3>
            <br />
            <form @submit.prevent="sendData">
              <div class="inputs">
                <div class="input-group mb-4">
                  <input
                    class="form-control input"
                    v-model="user.name"
                    type="text"
                    placeholder="Nombre de Usuario"
                    required
                  />
                  <!-- <div v-if="!$v.user.name.required">
                <p>Este campo es requerido</p>
              </div> -->
                </div>
                <div class="input-group mb-4">
                  <input
                    class="form-control input"
                    placeholder="Correo electronico"
                    v-model="user.email"
                    type="email"
                    required
                  />
                  <!-- <div v-if="!$v.user.imagen.required">
              <p>Este campo es requerido</p>
              </div> -->
                </div>
                <div class="input-group mb-4">
                  <input
                    class="form-control input"
                    placeholder="Contraseña"
                    v-model="user.password"
                    type="password"
                    required
                  />
                  <!-- <div v-if="!$v.user.telefono.required">
              <p>Este campo es requerido</p>
              </div> -->
                </div>
                <div class="input-group mb-4">
                  <input
                    class="form-control input"
                    placeholder="Confirmar Contraseña"
                    v-model="user.password_confirm"
                    type="password"
                    required
                  />
                  <!-- <div v-if="!$v.user.telefono.required">
              <p>Este campo es requerido</p>
              </div> -->
                </div>
              </div>
              <div class="button-area">
                <button class="btn btn-outline-dark">Enviar</button>
              </div>
              <br />
            </form>
          </section>
        </div>
        <div class="col-md-4 col-sm-2 col-2"></div>
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
            Vaya... Usted se encuentra loggeado en este momento, para ingresar a
            este apartado debe cerrar sesión...
          </h2>
          <br />
        </div>
        <div class="col-md-4 col-sm-2 col-2"></div>
      </main>
    </section>
  </section>
</template>

<script>
import User from "../models/User.js";
import axios from "axios";
import swal from "sweetalert";
import { global } from "../global";

export default {
  name: "Register",
  data() {
    return {
      text: "",
      data_sent: false,
      user: new User(),
      url: global.url,
    };
  },
  mounted() {
    this.text = "Registrarse";
    this.$emit("slider_change", this.text);
  },
  props: {
    logged: Boolean,
  },
  methods: {
    async sendData() {
      if (
        this.user.name &&
        this.user.email &&
        this.user.password &&
        this.user.password_confirm
      ) {
        this.data_sent = true;

        const formData = new FormData();

        formData.append("name", this.user.name);
        formData.append("email", this.user.email);
        formData.append("password", this.user.password);
        formData.append("password_confirmation", this.user.password_confirm);

        await axios
          .post(this.url + "users", formData)
          .then((res) => {
            if (res.status == 201) {
              swal(
                "Usuario registrado!",
                "El usuario se ha registrado con éxito",
                "success"
              );

              this.$router.push("/login");
            }
          })
          .catch((err) => {
            console.error(err.response);

            var error1 = "";
            var error2 = "";
            var error3 = "";

            if (err.response.data.errors.name) {
              error1 = err.response.data.errors.name;
            }
            if (err.response.data.errors.email) {
              error2 = err.response.data.errors.email;
            }
            if (err.response.data.errors.password) {
              error3 = err.response.data.errors.password;
            }

            swal(
              "Registro fallido!",
              `${error1} \n ${error2} \n ${error3}`,
              "error"
            );
          });
      }
    },
  },
};
</script>

<style scoped>
</style>