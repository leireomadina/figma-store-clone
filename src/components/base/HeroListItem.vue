<template>
  <li class="hero__list-item" :data-slider="id">
    <a :href="url">
      <object type="image/svg+xml" :data="svg" class="hero__image" alt="" />
    </a>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    url: {
      type: String,
      required: true,
      default: "#",
    },
    svg: {
      type: String,
      required: true,
    },
  },
};
</script>
