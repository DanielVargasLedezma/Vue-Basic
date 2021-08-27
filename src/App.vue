<template>
  <div id="app">
    <Header src="../assets/logo.png"></Header>
    <Slider text="Soy el Slider y no tengo ninguna utilidad! Justo como usted en su vida!"></Slider>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import Slider from './components/slider.vue'
import Main from './components/main.vue'
import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Slider,
    Main,
    Footer
  }
}
</script>

<style>
@import "./assets/css/styles.css";
</style>
