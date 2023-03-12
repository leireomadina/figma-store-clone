<template>
	<base-section id="shop">
		<base-wrapper>
			<TheShopHeader />
		</base-wrapper>
	</base-section>
</template>

<script>
import BaseSection from './BaseSection.vue'
import BaseWrapper from './BaseWrapper.vue'
import TheShopHeader from './TheShopHeader.vue'

export default {
	components: {
		BaseSection,
		TheShopHeader,
		BaseWrapper,
	},
}
</script>
