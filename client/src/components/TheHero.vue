<template>
	<section>
		<div
			class="hero"
			ref="slider"
			@mousedown="triggerSlider"
			@mouseenter="hoverSlider"
			@mouseup="hoverSlider"
			@mousemove="moveSlider"
		>
			<ul class="hero__list" ref="innerSlider">
				<HeroListItem
					v-for="heroSlide in heroSlides"
					:key="heroSlide.id"
					:id="heroSlide.id"
					:url="heroSlide.url"
					:svg="heroSlide.svg"
				/>
			</ul>
			<TheBadgeItem />
		</div>
	</section>
</template>

<script>
import HeroListItem from './HeroListItem.vue'
import TheBadgeItem from './TheBadgeItem.vue'

import svgOne from '../assets/svg/hero/1.svg?data'
import svgTwo from '../assets/svg/hero/2.svg?data'
import svgThree from '../assets/svg/hero/3.svg?data'
import svgFour from '../assets/svg/hero/4.svg?data'
import svgFive from '../assets/svg/hero/5.svg?data'
import svgSix from '../assets/svg/hero/6.svg?data'
import svgSeven from '../assets/svg/hero/7.svg?data'
import svgEight from '../assets/svg/hero/8.svg?data'

import { ref, onMounted } from 'vue'
// import * as slider from "../../src/js/draggable-slider";

export default {
	components: {
		HeroListItem,
		TheBadgeItem,
	},
	setup() {
		const slider = ref(null)
		const innerSlider = ref(null)

		let isSliderPressed = false

		// let xPositionStart;
		let xPositionStart = ref(null)
		let xPosition = ref(null)

		// para ajustar el translate X de la última slide
		// let numberOfSlides;

		const triggerSlider = (event) => {
			isSliderPressed = true
			xPositionStart.value = event.offsetX - innerSlider.value.offsetLeft
			console.log('xPositionStart:', xPositionStart.value)
			// console.log("isSliderPressed", isSliderPressed);
			slider.value.style.cursor = 'grabbing'
		}

		const hoverSlider = () => {
			slider.value.style.cursor = 'grab'
		}

		const removePressed = () => {
			isSliderPressed = false
		}

		window.addEventListener('mouseup', removePressed)

		const moveSlider = (event) => {
			if (!isSliderPressed) return
			xPosition.value = event.offsetX
			// console.log("xPosition:", xPosition.value);
			// console.log("xPositionStart:", xPositionStart.value);

			innerSlider.value.style.transform = `translateX(${
				xPosition.value - xPositionStart.value
			}px)`
			// console.log(`translateX(${xPosition - xPositionStart.value}px)`);

			checkBoundary()
		}

		const checkBoundary = () => {
			// let outerSliderBoundary = slider.value.getBoundingClientRect();
			// let innerSliderBoundary = innerSlider.value.getBoundingClientRect();
			// console.log("outerSliderBoundary:", outerSliderBoundary);
			// console.log("innerSliderBoundary:", innerSliderBoundary);
			// if (xPosition.value > 320) {
			//   isSliderPressed = false;
			//   console.log("dont move");
			//   innerSlider.value.transform = "translateX(19px)";
			// }
		}

		onMounted(() => {
			slider.value
			innerSlider.value
		})

		// const getImageUrl = (name) => {
		//   return new URL(`../assets/svg/hero/${name}.svg`, import.meta.url).href;
		// };

		const heroSlides = [
			{
				id: 1,
				url: '#',
				svg: svgOne,
			},
			{
				id: 2,
				url: '#',
				svg: svgTwo,
			},
			{
				id: 3,
				url: '#',
				svg: svgThree,
			},
			{
				id: 4,
				url: '#',
				svg: svgFour,
			},
			{
				id: 5,
				url: '#',
				svg: svgFive,
			},
			{
				id: 6,
				url: '#',
				svg: svgSix,
			},
			{
				id: 7,
				url: '#',
				svg: svgSeven,
			},
			{
				id: 8,
				url: '#',
				svg: svgEight,
			},
		]

		return {
			heroSlides,
			slider,
			innerSlider,
			triggerSlider,
			hoverSlider,
			removePressed,
			moveSlider,
			// getImageUrl,
		}
	},
}
</script>

<style lang="scss">
.hero {
	width: 100%;
	height: 100%;
	position: relative;
	padding: 0 toRem(20px);
	overflow: hidden;
	background-color: $color-yellow;

	&__list {
		width: 100%;
		height: 100%;
		display: flex;
		pointer-events: none;
		transform: translateX(15%);
	}

	&__list-item {
		flex: 0 0 70%;
		width: 50%;
		height: 100%;
		margin-right: auto;
		margin-left: auto;

		&:last-of-type {
			transform: translateX(-805%);
		}
	}

	&__image {
		width: 100%;
		max-width: 620px;
		height: 100%;
	}
}
</style>
