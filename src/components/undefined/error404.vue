<template src="./error404.html"></template>

<script>
export default {
  name: "Error404",
  data() {
    return {};
  },
  created() {
    this.$emit("slider_change", "Vaya...");
  },
};
</script>