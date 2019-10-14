<template>
	<div class="related">
		<div class="related-title"> <!-- 标题 -->
			<div class="title-left">
				<img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" class="title-img">
				<span class="title-desc">猜你喜欢</span>
			</div>
		</div>
		<div class="related-content"> <!-- 内容 -->
			2112312123231
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HomeRelated'
	}
</script>

<style lang="stylus" scoped>
	@import "~styles/variable.styl";
	.related
		margin: .22rem 0;
		background-color: #fff;
		.related-title //标题
			display: flex;
			justify-content: space-between;
			padding: .24rem 0 .26rem;
			color: $textColor;
			.title-left
				.title-img
					width: .3rem;
					height: .3rem;
					margin-left: .2rem;
					vertical-align: top;
				.title-desc
					height: .44rem;
					margin-left: .08rem;
					font-size: .32rem;
					line-height: .44rem;
</style>