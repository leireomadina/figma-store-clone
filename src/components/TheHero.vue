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
        <li class="hero__list-item">
          <a href="#">
            <object
              type="image/svg+xml"
              :data="svgOne"
              class="hero__image"
              alt=""
            />
          </a>
        </li>
        <li class="hero__list-item">
          <a href="#">
            <object
              type="image/svg+xml"
              :data="svgTwo"
              class="hero__image"
              alt=""
            />
          </a>
        </li>
        <li class="hero__list-item">
          <a href="#">
            <object
              type="image/svg+xml"
              :data="svgThree"
              class="hero__image"
              alt=""
            />
          </a>
        </li>
        <li class="hero__list-item">
          <a href="#">
            <object
              type="image/svg+xml"
              :data="svgFour"
              class="hero__image"
              alt=""
            />
          </a>
        </li>
        <li class="hero__list-item">
          <a href="#">
            <object
              type="image/svg+xml"
              :data="svgFive"
              class="hero__image"
              alt=""
            />
          </a>
        </li>
        <li class="hero__list-item">
          <a href="#">
            <object
              type="image/svg+xml"
              :data="svgSix"
              class="hero__image"
              alt=""
            />
          </a>
        </li>
        <li class="hero__list-item">
          <a href="#">
            <object
              type="image/svg+xml"
              :data="svgSeven"
              class="hero__image"
              alt=""
            />
          </a>
        </li>
        <li class="hero__list-item">
          <a href="#">
            <object
              type="image/svg+xml"
              :data="svgEight"
              class="hero__image"
              alt=""
            />
          </a>
        </li>
        <!-- <a href="#"><embed :src="svgOne" alt="d" /></a> -->
        <!-- <a href="#"><embed src="../assets/svg/hero/1.svg" alt="d" /></a> -->
        <!-- <img :src="getImageUrl('1')" /> -->
      </ul>
    </div>
  </section>
</template>

<script>
import svgOne from "../assets/svg/hero/1.svg?data";
import svgTwo from "../assets/svg/hero/2.svg?data";
import svgThree from "../assets/svg/hero/3.svg?data";
import svgFour from "../assets/svg/hero/4.svg?data";
import svgFive from "../assets/svg/hero/5.svg?data";
import svgSix from "../assets/svg/hero/6.svg?data";
import svgSeven from "../assets/svg/hero/7.svg?data";
import svgEight from "../assets/svg/hero/8.svg?data";

import { ref, onMounted } from "vue";
// import * as slider from "../../src/js/draggable-slider";

export default {
  setup() {
    const slider = ref(null);
    const innerSlider = ref(null);

    let isSliderPressed = false;

    // let xPositionStart;
    let xPositionStart = ref(null);
    let xPosition = ref(null);

    // para ajustar el translate X de la última slide
    // let numberOfSlides;

    const triggerSlider = (event) => {
      // console.log("pressed");
      isSliderPressed = true;
      xPositionStart.value = event.offsetX - innerSlider.value.offsetLeft;
      console.log("xPositionStart:", xPositionStart.value);
      // console.log("isSliderPressed", isSliderPressed);
      slider.value.style.cursor = "grabbing";
    };

    const hoverSlider = () => {
      // console.log("hovering");
      slider.value.style.cursor = "grab";
    };

    const removePressed = () => {
      isSliderPressed = false;
      // console.log("isSliderPressed:", isSliderPressed);
    };

    window.addEventListener("mouseup", removePressed);

    const moveSlider = (event) => {
      if (!isSliderPressed) return;
      xPosition.value = event.offsetX;
      console.log("xPosition:", xPosition.value);
      // console.log("xPositionStart:", xPositionStart.value);

      innerSlider.value.style.transform = `translateX(${
        xPosition.value - xPositionStart.value
      }px)`;
      // console.log(`translateX(${xPosition - xPositionStart.value}px)`);

      checkBoundary();
    };

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
    };

    onMounted(() => {
      slider.value;
      innerSlider.value;
      // console.log(slider);
      // console.log(innerSlider);
    });

    // const getImageUrl = (name) => {
    //   return new URL(`../assets/svg/hero/${name}.svg`, import.meta.url).href;
    // };

    return {
      svgOne,
      svgTwo,
      svgThree,
      svgFour,
      svgFive,
      svgSix,
      svgSeven,
      svgEight,
      slider,
      innerSlider,
      triggerSlider,
      hoverSlider,
      removePressed,
      moveSlider,
      // getImageUrl,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/core/_functions.scss";
@import "@/assets/styles/core/_variables.scss";

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
