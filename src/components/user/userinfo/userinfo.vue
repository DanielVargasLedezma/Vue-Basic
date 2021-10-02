<template src="./userinfo.html"></template>

<script>
import User from "../../../models/User";

export default {
  name: "UserInfo",
  data() {
    return {};
  },
  props: {
    user: User,
    logged: Boolean,
  },
  methods: {
    editarUsuario() {
      this.$router.push(`/edit-user`);
    },
    changePassword(){
        this.$router.push('/change-password');
    }
  },
};
</script>

<style scoped>
.btn{
    font-size: 0.85rem !important;
}
</style>