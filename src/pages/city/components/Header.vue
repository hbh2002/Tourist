<template>
	<div class="header">
		<router-link to="/" class="exit"><i class="iconfont">&#xe616;</i></router-link>
		<h1 calss="title">城市选择</h1>
	</div>
</template>

<script>
	export default {
		name: 'CityHeader'
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variable.styl'
	.header
		overflow: hidden;
		background-color: $bgColorAll;
		height: .76rem;
		line-height: .76rem;
		text-align: center;
		color: #fff;
		font-size: .32rem;
		position: relative;
		z-index: 5;
		.exit
			overflow: hidden;
			position: absolute;
			top: .24rem;
			left: .2rem;
			color: #fff;
			width: .38rem;
			height: .38rem;
			line-height: .38rem;
</style>