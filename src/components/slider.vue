<template>
  <div
    class="d-flex flex-row justify-content-between align-items-center slider"
  >
    <div class="col-md-3 col-sm-3 col-3"></div>
    <div class="col-md-6 col-sm-6 col-6">
      <br>
      <p>{{ text }}</p>
      <br>
    </div>
    <div class="col-md-3 col-sm-3 col-3"></div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    text: String,
  },
};
</script>