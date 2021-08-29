<template>
  <main class="d-flex flex-row justify-content-between align-items-center form">
    <div class="col-md-3 col-sm-3 col-3"></div>
    <div class="col-md-6 col-sm-6 col-6">
      <section
        class="
          d-flex
          flex-column
          justify-content-between
          align-items-center
          formulary
        "
      >
        <br />
        <h1>Escriba sus datos!</h1>
        <form action="" class form-miedo>
          <div class="inputs">
            <input type="text" placeholder="Nombre" />
            <br />
            <input type="text" placeholder="Correo" />
            <br />
            <input type="text" placeholder="Telefono" />
          </div>
          <div class="button-area">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </section>
    </div>
    <div class="col-md-3 col-sm-3 col-3"></div>
  </main>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      text: "",
    };
  },
  props: {},
  mounted() {
    this.text = "Formulario Principal";
    this.$emit("slider_change", this.text);
  },
};
</script>