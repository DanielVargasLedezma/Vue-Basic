<template src="./login.html"></template>

<script>
import User from "../../../models/User.js";
import UserController from "../../../controllers/UserController";

export default {
  name: "Login",
  data() {
    return {
      text: "",
      data_sent: false,
      user: new User(),
    };
  },
  mounted() {
    this.text = "Iniciar Sesion";
    this.$emit("slider_change", this.text);
  },
  props: {
    logged: Boolean,
  },
  methods: {
    async auth() {
      await UserController.login(this.user)
        .then((res) => {
          this.user.name = res.data.name;
          this.user.email = res.data.email;
          this.user.id = res.data.id;
          this.user.verification_token = res.token;
          this.user.created_at = res.data.created_at;
          // console.log(this.user);
          this.$emit("login", this.user);

          this.$router.push("/");
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
.form-wrapper{
  background:lightgray;
  box-shadow: 0 2px 4px 0  rgba(0, 0, 0, 0.356);
  border-radius: .30rem;
}

.form-wrapper p{
  font-size: 1rem;
}

p.register a{
  text-decoration: none;
}

p.forgot{
  left:0% !important;
}
</style>