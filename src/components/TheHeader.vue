<template>
  <header role="heading">
    <div class="header">
      <div class="header__nav-container">
        <nav role="navigation" aria-label="Mobile hamburguer menu">
          <button class="hamburger-menu" aria-expanded="true">
            <div class="hamburger-menu__container">
              <span class="hamburger-menu__line"></span>
              <span class="hamburger-menu__line"></span>
              <span class="hamburger-menu__line"></span>
            </div>
          </button>
        </nav>
        <button class="search">
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
          width="160"
        />
      </a>
      <div class="header__cart-container">
        <img
          src="@/assets/svg/location-icon.svg"
          class="location"
          alt="Select your location"
        />
        <button class="cart">0</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@import "@/assets/styles/core/_functions.scss";
@import "@/assets/styles/core/_variables.scss";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: toRem(10px) toRem(20px);
  background-color: $color-yellow;

  &__nav-container,
  &__cart-container {
    display: flex;
    align-items: center;
  }
}

.hamburger-menu {
  cursor: pointer;
  background-color: transparent;
  border: transparent;

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

    &:not(:last-of-type) {
      margin-bottom: 2px;
    }
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

.location {
  cursor: pointer;
}

.search,
.cart {
  margin-left: 14px;
}

.cart {
  padding: toRem(10px) toRem(20px);
  background-color: transparent;
  border: 2px solid $color-dark;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: $color-dark;
    color: $color-light;
  }
}
</style>
