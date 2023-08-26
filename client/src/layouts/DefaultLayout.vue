<template>
	<the-header></the-header>
	<main role="main" aria-label="Main page content">
		<slot></slot>
	</main>
	<the-footer></the-footer>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
	components: {
		TheHeader,
		TheFooter,
	},
}
</script>
