<template>
	<header class="shop-header">
		<h2 class="shop-header__title">
			<span :class="{ 'shop-header__title--opaque': isFilterHovered }"
				>Figma's
			</span>
			<img class="shop-header__icon" :src="star" alt="Star" role="img" />
			<span :class="{ 'shop-header__title--opaque': isFilterHovered }"
				>collection
			</span>
			<img
				class="shop-header__icon"
				:src="hourglass"
				alt="Hourglass"
				role="img"
			/>
			<span :class="{ 'shop-header__title--opaque': isFilterHovered }"
				>of
			</span>
			<span
				@mouseover="activateHoverEffect"
				@mouseleave="removeHoverEffect"
				class="shop-header__title--highlighted"
				>layers</span
			>
			<img class="shop-header__icon" :src="zigzag" alt="Zigzag" role="img" />
			<span :class="{ 'shop-header__title--opaque': isFilterHovered }"
				>and
			</span>
			<img
				class="shop-header__icon"
				:src="dots"
				alt="Circles and rectangles"
				role="img"
			/>
			<span
				@mouseover="activateHoverEffect"
				@mouseleave="removeHoverEffect"
				class="shop-header__title--highlighted"
				>components</span
			>
			<img class="shop-header__icon" :src="sun" alt="Sun" role="img" />
			<span :class="{ 'shop-header__title--opaque': isFilterHovered }"
				>for you
			</span>
			<img class="shop-header__icon" :src="comet" alt="Comet" role="img" />
			<span :class="{ 'shop-header__title--opaque': isFilterHovered }"
				>and
			</span>
			<img class="shop-header__icon" :src="snake" alt="Snake" role="img" />
			<span :class="{ 'shop-header__title--opaque': isFilterHovered }"
				>your
			</span>
			<img
				class="shop-header__icon"
				:src="triangle"
				alt="Triangle"
				role="img"
			/>
			<span :class="{ 'shop-header__title--opaque': isFilterHovered }"
				>friends
			</span>
		</h2>
	</header>
</template>

<script>
import { ref } from 'vue'
import comet from '@/assets/svg/shop/comet.svg'
import dots from '@/assets/svg/shop/dots.svg'
import hourglass from '@/assets/svg/shop/hourglass.svg'
import snake from '@/assets/svg/shop/snake.svg'
import star from '@/assets/svg/shop/star.svg'
import sun from '@/assets/svg/shop/sun.svg'
import triangle from '@/assets/svg/shop/triangle.svg'
import zigzag from '@/assets/svg/shop/zigzag.svg'

export default {
	setup() {
		const isFilterHovered = ref(false)
		const activateHoverEffect = () => (isFilterHovered.value = true)
		const removeHoverEffect = () => (isFilterHovered.value = false)
		return {
			isFilterHovered,
			activateHoverEffect,
			removeHoverEffect,
			comet,
			dots,
			hourglass,
			snake,
			star,
			sun,
			triangle,
			zigzag,
		}
	},
}
</script>

<style lang="scss" scoped>
.shop-header {
	&__title {
		color: $color-dark;
		font-size: toRem(27px);
		line-height: 1.3;
		text-align: center;
		text-transform: uppercase;

		&--highlighted {
			cursor: pointer;
			text-decoration: underline;
			text-underline-offset: 6px;
			text-decoration-thickness: 4px;

			@include tablet {
				text-decoration-thickness: 8px;
			}
		}

		&--opaque {
			opacity: 0.5;
			transition: all 0.3s ease-out;
		}

		@include tablet {
			font-size: toRem(54px);
		}
	}

	&__icon {
		width: toRem(24px);
		height: auto;
		margin: 0 0.5rem;

		@include tablet {
			width: toRem(41px);
		}
	}
}
</style>
