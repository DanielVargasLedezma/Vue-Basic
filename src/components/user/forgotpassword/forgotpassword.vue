<template src="./forgotpassword.html"></template>

<script>
import User from "../../../models/User";
export default {
  data() {
    return {
      user: new User(),
    };
  },
  mounted() {
    this.text = "Recuperar contraseña";
    this.$emit("slider_change", this.text);
  },
  props: {
    logged: Boolean,
    userLogged: User,
  },
};
</script>

<style scoped>
.form-wrapper {
  background: lightgray;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.356);
  border-radius: 0.3rem;
}

.form-wrapper p {
  font-size: 1rem;
}

p.register a {
  text-decoration: none;
}

p.forgot {
  left: 0% !important;
}
</style>