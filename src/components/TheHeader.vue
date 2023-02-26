<!-- eslint-disable prettier/prettier -->
<template>
	<header
		:class="{ 'full-screen': isMenuOpen }"
		role="banner"
		aria-label="Header"
	>
		<div :class="['header', { 'header--light': isMenuOpen }]">
			<div class="header__nav-container">
				<TheHamburgerMenu @toggle-menu="toggleMenu" :isMenuOpen="isMenuOpen" :isAriaExpanded="isAriaExpanded" />
				<button class="search" title="Search an item in our store">
					<img
						src="https://cdn.shopify.com/s/files/1/0576/8364/0503/t/4/assets/icon-search.static.svg?v=50573694"
						alt="Search an item in our store"
						class="search__image"
					/>
				</button>
			</div>
			<a href="/" title="Go back to the home page">
				<img
					src="@/assets/svg/logo-full.svg"
					alt="The Figma Store"
					class="logo"
				/>
			</a>
			<div class="header__cart-container">
				<a href="#" class="location" title="Select your location">
					<img
						src="@/assets/svg/location-icon.svg"
						alt="Select your location"
					/>
				</a>
				<button class="cart" title="View the items in your cart">0</button>
			</div>
		</div>
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
					<li role="none" class="menu-modal__list-item">
						<a href="#" class="menu-modal__link" role="menuitem">Shop</a>
					</li>
					<li role="none" class="menu-modal__list-item">
						<a href="#" class="menu-modal__link" role="menuitem">About</a>
					</li>
					<li role="none" class="menu-modal__list-item">
						<a href="#" class="menu-modal__link--small" role="menuitem"
							>Privacy & Terms</a
						>
					</li>
					<li role="none" class="menu-modal__list-item">
						<a href="#" class="menu-modal__link--small" role="menuitem"
							>Contact us</a
						>
					</li>
				</ul>
			</Transition>
		</div>
	</header>
</template>

<script>
import { ref, computed } from "vue";
import TheHamburgerMenu from "../components/TheHamburgerMenu.vue";

export default {
  components: {
    TheHamburgerMenu,
  },
  setup() {
    const isAriaExpanded = ref(false);
    const isMenuOpen = ref(false);

    const convertToString = computed(function () {
      return isAriaExpanded.value.toString();
    });

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
      isAriaExpanded.value = !isAriaExpanded.value;
    };

    return {
      isAriaExpanded,
      isMenuOpen,
      convertToString,
      toggleMenu,
    };
  },
};
</script>

<style lang="scss">
.header {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: toRem(10px) toRem(20px);
  background-color: $color-yellow;
  transition: background-color 0.3s linear;

  &--light {
    background-color: $color-light;
  }

  &__nav-container,
  &__cart-container {
    display: flex;
    align-items: center;
  }
}

.hamburger-menu {
  display: flex;

  &__btn {
    cursor: pointer;
    background-color: transparent;
    border: transparent;
  }

  &__container {
    width: 37px;
    height: 37px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid $color-dark;
  }

  &__line {
    width: 13px;
    border: 1px solid $color-dark;
    opacity: 1;
    visibility: visible;
    transition: all 0.5s ease-in-out;

    &:not(:last-of-type) {
      margin-bottom: 2px;
    }
  }

  &__cross {
    width: 15px;
    border: 1px solid $color-dark;
    transform: rotate(45deg) translate(1px, 1px);
  }
  &__cross2 {
    width: 15px;
    border: 1px solid $color-dark;
    transform: rotate(315deg);
  }
}

.search {
  cursor: pointer;
  background-color: transparent;
  border: transparent;

  &__image {
    width: 18px;
    height: auto;
  }
}

.logo {
  max-width: 160px;
  height: auto;
}

.search,
.cart {
  margin-left: 14px;
}

.cart {
  padding: toRem(9px) toRem(20px);
  background-color: transparent;
  border: 2px solid $color-dark;
  border-radius: 30px;
  cursor: pointer;
  font-size: toRem(14px);
  transition: all 0.3s ease-out;

  &:hover {
    background-color: $color-dark;
    color: $color-light;
  }
}
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

.full-screen {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s linear;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
