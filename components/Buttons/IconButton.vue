<template>
  <a :href="link" target="_blank">
    <i
      class="icon text-3xl text-white/50 hover:text-white transition-all"
      :class="icon"
    ></i>
  </a>
</template>

<script>
import "bootstrap-icons/font/bootstrap-icons.css";
export default {
  props: {
    link: String,
    icon: String,
  },
};
</script>

<style>
</style>
