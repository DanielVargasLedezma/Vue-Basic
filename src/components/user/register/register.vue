<template src="./register.html"></template>

<script>
import User from "../../../models/User.js";
import UserController from "../../../controllers/UserController";

export default {
  name: "Register",
  data() {
    return {
      text: "",
      data_sent: false,
      user: new User(),
    };
  },
  mounted() {
    this.text = "Registrarse";
    this.$emit("slider_change", this.text);
  },
  props: {
    logged: Boolean,
  },
  methods: {
    async sendData() {
      if (
        this.user.name &&
        this.user.email &&
        this.user.password &&
        this.user.password_confirm
      ) {
        this.data_sent = true;

        await UserController.register(this.user)
          .then((status) => {
            if (status == 201) this.$router.push("/login");
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
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