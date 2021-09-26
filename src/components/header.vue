<template>
  <header
    id="header"
    class="d-flex flex-row justify-content-between align-items-center header"
  >
    <div class="col-md-4 col-sm-4 col-4">
      <section
        class="
          d-flex
          flex-row
          justify-content-start
          align-items-center
          icono-titulo
        "
      >
      
        <div class="col-md-4 col-sm-4 col-4 icono">
          <img src="../assets/logo.png" class="app-logo" alt="logotipo" />
        </div>

        <div class="col-md-4 col-sm-4 col-4 titulo">
          <router-link to="/" class="title">
            <h1>Vue.js</h1>
          </router-link>
        </div>

      </section>
    </div>

    <div class="col-md-4 col-sm-3 col-3"></div>

    <div class="col-md-4 col-sm-5 col-5 enlaces">
      <ul class="d-flex flex-row justify-content-end navbar">
        <li class="col-md-3 col-sm-4 col-4 enlace" v-if="logged">
          <router-link to="/home"> Inicio </router-link>
        </li>
        <li class="col-md-3 col-sm-4 col-4 enlace" v-if="logged">
          <router-link to="/form"> Form </router-link>
        </li>
        <li
          class="col-md-3 col-sm-4 col-4 enlace"
          v-if="logged"
          @click="logout"
        >
          <router-link to="/"> Logout </router-link>
        </li>
        <li class="col-md-4 col-sm-5 col-6 enlace" v-if="!logged">
          <router-link to="/login"> Login </router-link>
        </li>
        <li class="col-md-4 col-sm-5 col-6 enlace" v-if="!logged">
          <router-link to="/register"> Register </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import axios from "axios";
import User from "../models/User.js";
import { global } from "../global";

export default {
  name: "Header",
  data(props) {
    return {
      source: props.src,
      url: global.url,
    };
  },
  props: {
    src: String,
    logged: Boolean,
    user: User,
  },
  methods: {
    async logout() {
      await axios
        .post(
          this.url + "logout/" + this.user.id,
          { hello: "word" },
          {
            headers: {
              Authorization: "Bearer " + this.user.verification_token,
            },
          }
        )
        .then((res) => {
          if (res.status == 200) {
            console.log(res.data);

            swal(
              "Sesion cerrada!",
              "Se ha cerrado sesión con éxito",
              "success"
            );

            this.$emit("logout");

            this.$router.push("/");
          }
        })
        .catch((err) => {
          console.error(err.response);
        });
    },
  },
};
</script>
