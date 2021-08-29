<template>
  <header
    id="header"
    class="d-flex flex-row justify-content-between align-items-center header"
  >
    <div class="col-md-3 col-sm-3 col-3">
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
          <h1>Vue.js</h1>
        </div>
      </section>
    </div>
    <div class="col-md-5 col-sm-5 col-5"></div>
    <div class="col-md-4 col-sm-4 col-4 enlaces">
      <ul class="d-flex flex-row justify-content-end navbar">
        <li class="col-md-3 col-sm-6 col-6 enlace">
          <router-link to="/home"> Inicio </router-link>
        </li>
        <li class="col-md-3 col-sm-6 col-6 enlace">
          <router-link to="/form"> Form </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  date(props){
    return{
      source: props.src
    }
  },
  props: {
    src: String
  },
};
</script>
