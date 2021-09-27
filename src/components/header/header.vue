<template src="./header.html"></template>

<script>
import User from "../../models/User.js";
import UserController from "../../controllers/UserController";

export default {
  name: "Header",
  data() {
    return {};
  },
  props: {
    src: String,
    logged: Boolean,
    user: User,
  },
  methods: {
    async logout() {
      // console.log(this.user);
      await UserController.logout(this.user)
        .then((status) => {
          if (status == 200) {
            this.$emit("logout");
          }
        })
        .catch((err) => {
          console.error(err);
        });

      this.$router.push("/login");
    },
  },
};
</script>