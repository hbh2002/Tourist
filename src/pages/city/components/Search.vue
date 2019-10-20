<template>
	<div class="search">
		<input type="text" name="cityName" class="city-search" id="cityName" placeholder="请输入城市名或拼音">
	</div>
</template>

<script>
	export default {
		name: "CitySearch"
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variable.styl'
	.search
		background-color: $bgColorAll;
		padding: .1rem .16rem;
		box-sizing: border-box;
		.city-search
			width: 100%;
			height: .56rem;
			border-radius: .06rem;
			box-sizing: border-box;
			text-align: center;
			color: #212121;
			padding: 0 .16rem;
</style>