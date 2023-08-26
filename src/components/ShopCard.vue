<template>
	<li class="shop-card">
		<figure>
			<div class="shop-card__container">
				<a href="#" class="shop-card__link">
					<img
						src="@/assets/images/shop/bloom-tee.webp"
						class="shop-card__image"
						alt="Design in bloom tee"
						loading="lazy"
					/>
					<figcaption v-if="hasFigcaption">
						<div class="shop-card__text-container">
							<div>
								<p class="shop-card__tag">New!</p>
								<h3 class="shop-card__title">Design in bloom tee</h3>
							</div>
							<p class="shop-card__price">25$</p>
						</div>
					</figcaption>
				</a>
			</div>
		</figure>
	</li>
</template>

<script>
export default {
	props: {
		hasFigcaption: {
			type: Boolean,
			required: false,
			default: true,
		},
	},
}
</script>

<style lang="scss">
.shop-card {
	overflow: hidden;
	list-style-type: none;

	&__container {
		max-width: toRem(287px);
	}

	&__link {
		text-decoration: none;
	}

	&__image {
		display: block;
		width: 100%;
		height: auto;
		border-radius: 2rem;
	}

	&__text-container {
		display: flex;
		justify-content: space-between;
		font-family: 'White regular';
		font-size: toRem(22px);
	}

	&__tag {
		color: $color-green;
	}

	&__title {
		line-height: toRem(22px);
	}

	&__price {
		margin-left: 8px;
	}
}
</style>
