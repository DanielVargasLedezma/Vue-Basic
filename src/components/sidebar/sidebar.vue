<template src="./sidebar.html"></template>

<script>
export default {
  name: "Sidebar",
  props: {},
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchArticle() {
      if (this.search) {
        this.$router.push(`/articles/${this.search}`);
      }
    },
    add_article() {
      this.$router.push(`/form`);
    },
  },
};
</script>