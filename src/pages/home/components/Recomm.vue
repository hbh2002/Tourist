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
			<li class="content-item" v-for="item of list" :key="item.id">
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
		props: {
			list: Array
		}
	}
</script>

<style lang="stylus" scoped>
	@import "~styles/variable.styl";
	@import "~styles/public.styl";
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
					min-width: 0;
					hide()
				.hotsale-price
					color: #616161;
					font-size: $fontSize;
					line-height: .36rem;
					.price
						color: #ff8300;
</style>