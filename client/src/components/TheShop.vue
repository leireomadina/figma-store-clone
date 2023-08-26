<template>
	<base-section id="shop">
		<base-wrapper>
			<TheShopHeader />
			<ul>
				<ShopCard />
			</ul>
		</base-wrapper>
	</base-section>
</template>

<script>
import BaseSection from './BaseSection.vue'
import BaseWrapper from './BaseWrapper.vue'
import TheShopHeader from './TheShopHeader.vue'
import ShopCard from './ShopCard.vue'

export default {
	components: {
		BaseSection,
		TheShopHeader,
		BaseWrapper,
		ShopCard
	},
}
</script>
