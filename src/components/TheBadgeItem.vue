<template>
  <a href="#" title="Go to our About page" class="badge">
  <img src="@/assets/svg/badge/badge.svg" alt="badge" />
  </a>
  <!-- <img src="@/assets/svg/badge/yellow-hand.svg" alt="yellow hand" />
  <img src="@/assets/svg/badge/purple-hand.svg" alt="purple hand" />
  <img src="@/assets/svg/badge/sparks.svg" alt="enphasis" />
  <img src="@/assets/svg/badge/text-badge.svg" alt="text" /> -->
</template>

<script></script>

<style lang="scss">
.sparks {
  transform: translate(5px, -30px);
}

#yellow-hand_group {
  transform: translate(60px, 75px);
  width: 200px;
}

#highfive {
  transform: translate(105px, 90px);
}

#badge-form-text {
  transform-origin: center;
  -webkit-animation-name: rotate;
  -moz-animation-name: rotate;
  -ms-animation-name: rotate;
  -o-animation-name: rotate;
  animation-name: rotate;
  -webkit-animation-duration: 10s;
  -moz-animation-duration: 10s;
  -ms-animation-duration: 10s;
  -o-animation-duration: 10s;
  animation-duration: 10s;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -ms-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  animation-timing-function: linear;
}

@-webkit-keyframes rotate {
  from {
    -webkit-transform: rotate(360deg);
  }
  to {
    -webkit-transform: rotate(0);
  }
}

@-moz-keyframes rotate {
  from {
    -moz-transform: rotate(360deg);
  }
  to {
    -moz-transform: rotate(0);
  }
}
@-ms-keyframes rotate {
  from {
    -ms-transform: rotate(360deg);
  }
  to {
    -ms-transform: rotate(0); 
  }
}
@-o-keyframes rotate {
  from {
    -o-transform: rotate(360deg);
  }
  to {
    -o-transform: rotate(0);
  }
}
@keyframes rotate {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0);
  }
}
</style>
