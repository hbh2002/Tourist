<template>
	<div class="details">
		<details-banner></details-banner>
		<details-info></details-info>
	</div>
</template>

<script>
	import DetailsBanner  from './components/banner.vue'
	import DetailsInfo from './components/Info.vue'
	export default {
		name: 'Details',
		components: {
			DetailsBanner,
			DetailsInfo
		}
	}
</script>

<style lang='stylus' scoped>
	.details
		background-color: #eee;
</style>
