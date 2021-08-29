<template>
  <div id="app">
    <Header :src="image"></Header>
    <Slider
      text="Soy el Slider y no tengo ninguna utilidad! Justo como usted en su vida!"
    ></Slider>
    <!-- <Main></Main> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Slider from "./components/slider.vue";
// import Main from './components/main.vue'
import Footer from "./components/footer.vue";

export default {
  name: "App",
  date(){
    return{
      image:"../assets/logo.png"
    }
  },
  components: {
    Header,
    Slider,
    // Main,
    Footer,
  },
  created(){
    this.image = "../assets/logo.png";
  }
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
