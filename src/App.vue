<template>
  <div id="app">
    <Header :src="image"></Header>
    <Slider
      :text="texto"
    ></Slider>
    <!-- <Main></Main> -->
    <router-view @slider_change="slider_change"></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Slider from "./components/slider.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  data(){
    return{
      image: "/img/logo.82b9c7a5.png",
      texto: "Texto desde App"
    }
  },
  components: {
    Header,
    Slider,
    Footer,
  },
  methods:{
    slider_change(text){
      this.texto= text;
    }
  }
};
</script>

<style>
@import "./assets/css/styles.css";
</style>
