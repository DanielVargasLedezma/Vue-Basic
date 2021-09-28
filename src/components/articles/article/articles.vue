<template src="./articles.html"></template>

<script>
import User from "../../../models/User";
import { global } from "../../../api-url/global";

export default {
  name: "Articles",
  props: {
    article: [],
    logged: Boolean,
    user: User,
  },
  data() {
    return {
      url: global.url,
    };
  },
  methods: {},
  mounted() {},
};
</script>