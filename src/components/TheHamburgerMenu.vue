<template>
  <nav class="hamburger-menu" role="navigation" aria-label="Figma Store">
    <button
      type="button"
      id="main-menu"
      class="hamburger-menu__btn"
      title="Open the menu"
      :aria-expanded="isAriaExpanded"
      aria-haspopup="true"
      aria-controls="main-menu"
      @click.prevent="$emit('toggleMenu')"
    >
      <div class="hamburger-menu__container">
        <span
          class="hamburger-menu__line"
          aria-hidden="true"
          v-if="!isMenuOpen"
        ></span>
        <span
          class="hamburger-menu__line"
          aria-hidden="true"
          v-if="!isMenuOpen"
        ></span>
        <span
          class="hamburger-menu__line"
          aria-hidden="true"
          v-if="!isMenuOpen"
        ></span>
        <span
          class="hamburger-menu__cross"
          aria-hidden="true"
          v-if="isMenuOpen"
        ></span>
        <span
          class="hamburger-menu__cross2"
          aria-hidden="true"
          v-if="isMenuOpen"
        ></span>
      </div>
    </button>
  </nav>
</template>

<script>
export default {
  emits: ["toggleMenu"],
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true,
      default: false,
    },
    isAriaExpanded: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  setup(props, ctx) {
    ctx.emit("toggleMenu");
  },
};
</script>
