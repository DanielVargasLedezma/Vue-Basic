<template src="./register.html"></template>

<script>
import User from "../../../models/User.js";
import UserController from "../../../controllers/UserController";
import { global } from "../../../global";

export default {
  name: "Register",
  data() {
    return {
      text: "",
      data_sent: false,
      user: new User(),
      url: global.url,
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
</style>