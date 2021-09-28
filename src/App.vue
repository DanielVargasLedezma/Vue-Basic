<template>
  <div id="app">
    <section @logout="logout">
      <Header @logout="logout" :logged="logged" :user="user"></Header>
    </section>
    <Slider :text="texto"></Slider>
    <router-view
      @slider_change="slider_change"
      :logged="logged"
      :user="user"
      @login="login"
    ></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header/header.vue";
import Slider from "./components/slider/slider.vue";
import Footer from "./components/footer/footer.vue";

export default {
  name: "App",
  data() {
    return {
      texto: "Texto desde App",
      logged: false,
      user: null,
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
      this.user = null;
    },
  },
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
