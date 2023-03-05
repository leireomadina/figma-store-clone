<template>
	<section :id="id" :class="className">
		<slot></slot>
	</section>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
			required: false,
			default: null,
		},
		className: {
			type: String,
			required: false,
			default: null,
		},
	},
}
</script>

<style lang="scss" scoped>
section {
	padding-top: toRem(80px);
	padding-bottom: toRem(80px);

	@include tablet {
		padding-top: toRem(150px);
		padding-bottom: toRem(150px);
	}
}
</style>
