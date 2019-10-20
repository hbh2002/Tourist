<template>
	<div class="recommend">
		<h2 class="recommend-title">周末去哪儿</h2>
		<div class="recommend-content">
			<div class="product-item" v-for="item of list" :key="item.id">
				<router-link to="">
					<div class="product-img">
						<img :src="item.src" alt="">
					</div>
					<div class="product-info">
						<p class="product-name">{{item.name}}</p>
						<p class="product-desc">{{item.desc}}</p>
					</div>
				</router-link>
			</div>
		</div>
		<div class="recommend-desc">
			<span class="iconfont">&#xe661;</span><span class="price-info">票面价</span>是指通过景区指定窗口售卖的纸质门票上标注的价格
		</div>
	</div>
</template>

<script>
	export default {
		name: "HomeRecommend",
		props: {
			list: Array
		}
	}	
</script>

<style lang="stylus" scoped>
	@import "~styles/variable.styl";
	@import "~styles/public.styl";
	.recommend-title
		height: .7rem;
		padding-left: .26rem;
		line-height: .8rem;
		color: $textColor;
	.product-item
		margin-top: .1rem;
		.product-img
			overflow: hidden;
			height: 0;
			padding-bottom: 37%;
			img
				width: 100%;
		.product-info
			padding: .14rem .2rem .2rem .2rem;
			background-color: #fff;
			.product-name
				padding-right: 1.4rem;
				color: $textColor;
				font-size: .28rem;
				line-height: .48rem;
				hide()
			.product-desc
				padding-right: .14rem;
				font-size: .24rem;
				line-height: .42rem;
				color: #616161;
				hide()
	.recommend-desc
		hide()
		margin-top: .1rem;
		padding: .14rem .1rem;
		font-size: .24rem;
		line-height: .32rem;
		color: #616161;
		background: #fff;
		.iconfont
			display: block;
			width: .38rem;
			float: left;
			line-height: .32rem;
			font-size: .44rem;
			color: #bbb;
		.price-info
			font-weight: 800;
</style>