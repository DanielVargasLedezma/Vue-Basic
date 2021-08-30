<template>
  <main class="d-flex flex-row justify-content-between align-items-center error">
    <div class="col-md-3 col-sm-3 col-3"></div>
    <div class="col-md-6 col-sm-6 col-6">
      <br />
      <h1>Esta ruta no existe!</h1>
      <br />
    </div>
    <div class="col-md-3 col-sm-3 col-3"></div>
  </main>
</template>

<script>
export default {
  name: "Error404",
  data(){
    return{
      text:""
    }
  },
  mounted() {
    this.text = "Vaya...";
    this.$emit("slider_change", this.text);
  },
};
</script>