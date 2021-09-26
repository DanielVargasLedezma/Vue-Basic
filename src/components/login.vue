<template>
  <section>
    <section v-if="!logged">
      <main
        class="d-flex flex-row justify-content-between align-items-center form"
      >
        <div class="col-md-4 col-sm-2 col-2"></div>
        <div
          class="
            col-md-4 col-sm-8 col-8
            d-flex
            flex-row
            justify-content-between
            align-items-center
          "
        >
          <div class="col-md-2 col-sm-2 col-2"></div>

          <section
            class="
              flex-column
              justify-content-between
              align-items-center
              formulary
              text-center
              col-md-8 col-sm-8 col-8
            "
          >
            <br />
            <h3>Digite sus credenciales</h3>
            <br />
            <form @submit.prevent="auth">
              <div class="inputs">
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
              </div>
              <div class="button-area">
                <button class="btn btn-outline-dark">Enviar</button>
              </div>
              <br />
            </form>
          </section>

          <div class="col-md-2 col-sm-2 col-2"></div>
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
  name: "Login",
  data() {
    return {
      text: "",
      data_sent: false,
      user: new User(),
      url: global.url,
    };
  },
  mounted() {
    this.text = "Iniciar Sesion";
    this.$emit("slider_change", this.text);
  },
  props: {
    logged: Boolean,
  },
  methods: {
    async auth() {
      const formData = new FormData();

      formData.append("email", this.user.email);
      formData.append("password", this.user.password);

      axios
        .post(this.url + "login", formData)
        .then((res) => {
          if (res.status == 200) {
            console.log(res.data);

            this.user.name = res.data.data.name;
            this.user.email = res.data.data.email;
            this.user.id = res.data.data.id;
            this.user.verification_token = res.data.token;

            swal(
              "Sesion iniciada!",
              "Las credenciales digitadas son válidas",
              "success"
            );

            this.$emit("login", this.user);

            this.$router.push("/");
          }
        })
        .catch((err) => {
          console.error(err.response);

          var error = "";

          if (err.response.data.errorMessage) {
            error = err.response.data.errorMessage;
          }

          swal(
            "Registro fallido!",
            `${error}`,
            "error"
          );
        });
    },
  },
};
</script>