<template>
  <default-layout>
    <RouterView />
  </default-layout>
</template>

<script>
import { RouterView } from "vue-router";
import DefaultLayout from "./layouts/DefaultLayout.vue";

export default {
  components: {
    RouterView,
    DefaultLayout,
  },
};
</script>
