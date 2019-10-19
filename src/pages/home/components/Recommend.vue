<template>
	<div class="recommend">
		<h2 class="recommend-title">周末去哪儿</h2>
		<div class="recommend-content">
			<div class="product-item" v-for="item of recommendList" :key="item.id">
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
		data () {
			return {
				recommendList: [{
					id: '001',
					src: "http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg",
					name: "京城周末撒欢",
					desc: "在帝都过周末，不仅仅是城中游！"
				},
				{
					id: '002',
					src: "http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg",
					name: "京城溜娃必去",
					desc: "德智体美劳全面发展的亲子日，这些地方该去看看…"
				},
				{
					id: '003',
					src: "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
					name: "帝都必打卡",
					desc: "来北京必去的景点非这些地方莫属"
				},
				{
					id: '004',
					src: "http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg",
					name: "登高望远秋色佳",
					desc: "山顶满眼彩色，此情此景醉了"
				},
				{
					id: '005',
					src: "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
					name: "寻找北京的皇城范儿",
					desc: "数百年的宫廷庙宇，至今依旧威严霸气"
				}]
			}
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
			padding-bottom: 36.5%;
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