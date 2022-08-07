<template>
  <the-header></the-header>
  <main>
    <slot></slot>
  </main>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
nav {
  color: lightgreen;
}
footer {
  color: blue;
}
</style>
