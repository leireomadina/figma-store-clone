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
					v-if="!isMenuOpen"
					class="hamburger-menu__line"
					aria-hidden="true"
				></span>
				<span
					v-if="!isMenuOpen"
					class="hamburger-menu__line"
					aria-hidden="true"
				></span>
				<span
					v-if="!isMenuOpen"
					class="hamburger-menu__line"
					aria-hidden="true"
				></span>
				<span
					v-if="isMenuOpen"
					class="hamburger-menu__cross"
					aria-hidden="true"
				></span>
				<span
					v-if="isMenuOpen"
					class="hamburger-menu__cross2"
					aria-hidden="true"
				></span>
			</div>
		</button>
	</nav>
</template>

<script>
export default {
	emits: ['toggleMenu'],
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
}
</script>

<style lang="scss">
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
</style>
