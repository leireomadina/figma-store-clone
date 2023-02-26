<template>
  <div class="menu-modal">
    <Transition>
      <ul
        id="main-menu"
        class="menu-modal__list"
        role="menubar"
        aria-labelledby="main-menu"
        aria-label="Figma Store"
        v-if="isMenuOpen"
      >
        <ListMenuItem
          v-for="menuItem in menuItems"
          :key="menuItem.id"
          :text="menuItem.text"
          :url="menuItem.url"
          :isSmall="menuItem.isSmall"
          :id="menuItem.id"
        />
      </ul>
    </Transition>
  </div>
</template>

<script>
import ListMenuItem from "./base/ListMenuItem.vue";

export default {
  components: {
    ListMenuItem,
  },
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  setup() {
    const menuItems = [
      {
        id: 1,
        text: "Shop",
        url: "#",
        isSmall: false,
      },
      {
        id: 2,
        text: "About",
        url: "#",
        isSmall: false,
      },
      {
        id: 3,
        text: "Privacy & Terms",
        url: "#",
        isSmall: true,
      },
      {
        id: 4,
        text: "About",
        url: "Contact us",
        isSmall: true,
      },
    ];
    return {
      menuItems,
    };
  },
};
</script>

<style lang="scss">
.menu-modal {
  height: auto;
  width: 100%;
  z-index: 1;
  overflow: auto;
  background-color: $color-light;
  flex-grow: 1;

  &__list {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    row-gap: toRem(14px);
    padding: toRem(60px) toRem(30px);
  }

  &__list-item:nth-of-type(2) {
    margin-bottom: toRem(60px);
  }

  &__link {
    font-size: toRem(45px);
    font-weight: bold;
    text-decoration: none;

    &--small {
      font-family: "White Regular";
      font-size: toRem(18px);
      font-weight: normal;
      text-decoration: none;

      &:visited {
        color: $color-dark;
      }
    }

    &:visited {
      color: $color-dark;
    }
  }
}
</style>
