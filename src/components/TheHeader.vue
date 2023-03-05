<template>
	<header
		:class="{ 'full-screen': isMenuOpen }"
		role="banner"
		aria-label="Header"
	>
		<div :class="['header', { 'header--light': isMenuOpen }]">
			<div class="header__nav-container">
				<TheHamburgerMenu
					@toggle-menu="toggleMenu"
					:isMenuOpen="isMenuOpen"
					:isAriaExpanded="isAriaExpanded"
				/>
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
		<TheModalMenu :isMenuOpen="isMenuOpen" />
	</header>
</template>

<script>
import { ref, computed } from 'vue'
import TheHamburgerMenu from '../components/TheHamburgerMenu.vue'
import TheModalMenu from '../components/TheModalMenu.vue'

export default {
	components: {
		TheHamburgerMenu,
		TheModalMenu,
	},
	setup() {
		const isAriaExpanded = ref(false)
		const isMenuOpen = ref(false)

		const convertToString = computed(function () {
			return isAriaExpanded.value.toString()
		})

		const toggleMenu = () => {
			isMenuOpen.value = !isMenuOpen.value
			isAriaExpanded.value = !isAriaExpanded.value
		}

		return {
			isAriaExpanded,
			isMenuOpen,
			convertToString,
			toggleMenu,
		}
	},
}
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
