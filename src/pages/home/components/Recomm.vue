<template>
	<div class="recomm">
		<div class="recomm-title">
			<div class="title-left">
				<img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" class="title-img">
				<span class="title-desc">本周热门榜单</span>
			</div>
			<router-link to="" class="title-right">
				全部榜单
				<span class="iconfont">&#xe600;</span>
			</router-link>
		</div>
		<ul class="recomm-content">
			<li class="content-item" v-for="item of dataList" :key="item.id">
				<router-link to="">
					<div class="hotsale-tag" v-if="item.tag">
						<img :src="item.tag" class="hotsale-img" alt="">
					</div>
					<div class="hotsale-imgcon">
						<img :src="item.imgcon" class="hotsale-img" alt="">
					</div>
					<div class="hotsale-sight">{{item.sight}}</div>
					<div class="hotsale-price">
						<span class="price">
							&yen;<em>{{item.price}}</em>
						</span>起
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "HomeRecomm",
		data () {
			return {
				dataList: [
					{
						id: "0001",
						tag: "http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png",
						imgcon: "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_250x250_0fc722c0.jpg",
						sight: "故宫",
						price: "60"
					},
					{
						id: "0002",
						tag: "http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png",
						imgcon: "http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_250x250_50c99cf3.jpg",
						sight: "八达岭长城",
						price: "39"
					},
					{
						id: "0003",
						tag: "http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png",
						imgcon: "http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_250x250_d852635b.jpg",
						sight: "颐和园",
						price: "38.8"
					},
					{
						id: "0004",
						tag: "",
						imgcon: "http://img1.qunarzz.com/sight/p0/1902/84/84696f368bbec10da3.img.jpg_250x250_3588bc9a.jpg",
						sight: "北京世界园艺博览会",
						price: "5"
					},
					{
						id: "0005",
						tag: "",
						imgcon: "http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_250x250_63e3520a.jpg",
						sight: "圆明园",
						price: "25"
					},
					{
						id: "0006",
						tag: "",
						imgcon: "http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_250x250_b8d94d62.jpg",
						sight: "北京野生动物园",
						price: "116"
					},
					{
						id: "0007",
						tag: "",
						imgcon: "http://img1.qunarzz.com/sight/p0/1604/78/78873494f26e554090.water.jpg_250x250_0565d534.jpg",
						sight: "京东石林峡",
						price: "58"
					},
					{
						id: "0008",
						tag: "",
						imgcon: "http://img1.qunarzz.com/sight/p0/201403/24/92759d9d52af059a7849f482f10358c5.jpg_250x250_bb4897b4.jpg",
						sight: "平谷桃花海",
						price: "28"
					},
					{
						id: "0009",
						tag: "",
						imgcon: "http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_250x250_6c4c9885.jpg",
						sight: "北京欢乐谷",
						price: "59.9"
					},
					{
						id: "0010",
						tag: "",
						imgcon: "http://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_250x250_6ec2f798.jpg",
						sight: "恭王府",
						price: "40"
					}
				]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import "~styles/variable.styl";
	.recomm
		margin: .22rem 0;
		background-color: #fff;
		.recomm-title //标题
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
			.title-right
				color: #616161;
				font-size: .24rem;
				margin-right: .23rem;
				margin-top: .08rem;
				.iconfont
					margin-left: -.1rem;
					margin-top: .14rem;
		.recomm-content //内容
			padding: 0 .24rem;
			overflow-x: scroll;
			white-space: nowrap;
			overflow-y: hidden;
			.content-item
				width: 2rem;
				overflow: hidden;
				display: inline-block;
				position: relative;
				padding: .06rem 0 .2rem;
				margin: 0 .08rem;
				a
					text-align: center;
				.hotsale-tag
					position: absolute;
					top: 0;
					left: 0;
					z-index: 1;
					overflow: hidden;
					width: .84rem;
					height: .4rem;
				.hotsale-imgcon
					overflow: hidden;
					width: 2rem;
					height: 0;
					padding-bottom: 100%;
				.hotsale-img
					width: 100%;
				.hotsale-sight
					margin-top: .12rem;
					color: $textColor;
					font-size: $fontSize;
					line-height: .32rem;
				.hotsale-price
					color: #616161;
					font-size: $fontSize;
					line-height: .36rem;
					.price
						color: #ff8300;
</style>