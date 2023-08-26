<template>
	<TheHero />
	<TheShop id="shop" />
</template>

<script>
import TheHero from '../components/TheHero.vue'
import TheShop from '../components/TheShop.vue'

export default {
	components: {
		TheHero,
		TheShop,
	},
}
</script>
