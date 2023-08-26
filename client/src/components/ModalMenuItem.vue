<template>
	<li role="none" class="menu-item">
		<a
			:href="url"
			:class="['menu-item__link', { 'menu-item__link--small': isSmall }]"
			role="menuitem"
			:data-item="id"
			>{{ text }}</a
		>
	</li>
</template>

<script>
export default {
	props: {
		url: {
			type: String,
			required: false,
			default: '#',
		},
		text: {
			type: String,
			required: true,
		},
		isSmall: {
			type: Boolean,
			required: false,
			default: false,
		},
		id: {
			type: Number,
			required: true,
		},
	},
}
</script>

<style lang="scss">
.menu-item {
	&:nth-of-type(2) {
		margin-bottom: toRem(60px);
	}

	&__link {
		font-size: toRem(45px);
		font-weight: bold;
		text-decoration: none;

		&--small {
			font-family: 'White Regular';
			font-size: toRem(18px);
			font-weight: normal;
			text-decoration: none;

			&:visited {
				color: $color-dark;
			}
		}

		&:visited {
			color: $color-dark;
		}
	}
}
</style>
