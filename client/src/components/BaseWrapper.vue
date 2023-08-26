<template>
	<div class="wrapper">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
.wrapper {
	margin: 0 20px;

	@include desktop {
		max-width: 1280px;
		margin-left: auto;
		margin-right: auto;
	}
}
</style>
