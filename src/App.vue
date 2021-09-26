<template>
  <div id="app">
    <Header :src="image" :logged="logged" :user_data="user"></Header>
    <Slider :text="texto"></Slider>
    <!-- <Main></Main> -->
    <router-view
      @slider_change="slider_change"
      :logged="logged"
      :user="user"
      @login="login"
      @logout="logout"
    ></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Slider from "./components/slider.vue";
import Footer from "./components/footer.vue";
import User from "./models/User.js";

export default {
  name: "App",
  data() {
    return {
      image: "/img/logo.82b9c7a5.png",
      texto: "Texto desde App",
      logged: false,
      user: null
    };
  },
  components: {
    Header,
    Slider,
    Footer,
  },
  methods: {
    slider_change(text) {
      this.texto = text;
    },
    login(user) {
      this.logged = true;
      this.user = user;
    },
    logout() {
      this.logged = false;
      this.user = [];
    },
  },
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
