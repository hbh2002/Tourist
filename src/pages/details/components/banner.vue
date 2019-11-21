<template>
	<div>
		<div class="banner-box">
			<div class="banner" @click="showBanner">
				<div class="banner-img">
					<img src="http://img1.qunarzz.com/sight/p0/201403/07/a3231208ca4095bef77068c202d95bd2.jpg_600x330_fbe0867a.jpg" class="item-img">
				</div>
				<div class="info-num"><span class="iconfont">&#xe60a;</span>{{imgList.length}}</div>
				<div class="info-desc">{{nameTxt}}</div>
			</div>
			<!-- 信息部分 -->
			<div class="info">
				<div class="info-top">
					<div class="info-box">
						<router-link to="" class="info-link">
							<div> 
								<span class="info-link-score">4.7</span>
								<span class="info-link-text">分</span>
								<span class="info-link-desc">很棒</span>
							</div>
							<div>
								<span class="sightcard-text">1699条评论</span>
								<span class="sightcard-text">24条攻略</span>
								<span class="iconfont card-link">&#xe600;</span>
							</div>
						</router-link>
					</div>
					<div class="info-box box-pig-left">
						<router-link to="" class="info-link">
							<div>
								<span class="sightcard-title">景点简介</span>
							</div>
							<div>
								<span class="sightcard-text">开放时间、贴示</span>
								<span class="iconfont card-link">&#xe600;</span>
							</div>
						</router-link>
					</div>
				</div>
				<div class="info-bottom">
					<span class="iconfont icon-city">&#xe681;</span>
					<span class="site">北京市海淀区买卖街40号</span>
					<span class="iconfont icon-card">&#xe600;</span>
				</div>
			</div>
		</div>
		<animation>
			<carousel :imgs="imgList" v-show="imgStatus" @close="unshowBanner"></carousel>
		</animation>
	</div>
</template>

<script>
	import Carousel from 'public/carousel/carousel'
	import Animation from 'public/animation/Animation'
	export default {
		name: 'DetailsBanner',
		components: {
			Carousel,
			Animation
		},
		props: {
			nameTxt: String,
			bigImg: String,
			imgList: Array
		},
		data () {
			return {
				imgStatus: false
			}
		},
		methods: {
			showBanner () {
				this.imgStatus = true
			},
			unshowBanner () {
				this.imgStatus = false
			}
		}
	}
</script>

<style lang='stylus' scoped>
	@import '~styles/variable.styl'
	@import '~styles/public.styl'
	.banner-box
		position: relative;
		.banner-img
			overflow: hidden;
			height: 0;
			width: 100%;
			padding-bottom: 55%;
			.item-img
				width: 100%;
		.info-num
			position: absolute;
			left: .2rem;
			bottom: .84rem;
			padding: .08rem .33rem;
			border-radius: .3rem;
			color: #fff;
			background-color: rgba(0,0,0,.5);
			font-size: .26rem;
			.iconfont
				font-size: .2rem;
				margin-right: .06rem;
		.info-desc
			width: 100%;
			position: absolute;
			bottom: .3rem;
			left: .2rem;
			color: #fff;
			z-index: 1;
			font-size: .35rem;
			hide()	
	.banner:after
		content: "";
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		min-height: .6rem;
		background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));
	.info
		width: 100%;
		background: #fff;
		border-radius: .14rem .14rem 0 0;
		padding: .16rem 0; 
		box-sizing: border-box;
		position: absolute;
		bottom: -1.85rem;
		left: 0;
		.info-top
			padding: .05rem .1rem .12rem;
			box-sizing: border-box;
			.info-box
				float: left;
				width: 50%;
				padding: 0rem .14rem;
				box-sizing: border-box;
				position: relative;
			.box-pig-left
					padding-left: .18rem;
					box-sizing: border-box;
				.info-link
					.info-link-score
						font-size: .44rem;
						line-height: .44rem;
						color: #ff8300;
					.info-link-text
						font-size: .28rem;
						line-height: .48rem;
						color: #ff8300;
						margin-left: -.06rem;
					.info-link-desc
						font-size: .28rem;
						line-height: .48rem;
						color: #ff8300;
						margin-left: .2rem;
					.sightcard-text
						font-size: .24rem;
						line-height: .34rem;
						color: #9e9e9e;
						margin-right: .2rem;
					.sightcard-title
						color: #212121;
						font-size: .28rem;
						line-height: .48rem;
					.card-link
						position: absolute;
						top: .26rem;
						right: .2rem;
						color: #9e9e9e;
		.info-bottom
			padding: 0 .18rem;
			width: 100%;
			height: .6rem;
			line-height: .6rem;
			color: #212121;
			box-sizing: border-box;
			position: relative;
			.icon-city
				color: #9e9e9e;
				margin-right: .1rem;
				font-size: .36rem;
			.icon-card
				position: absolute;
				top: 50%;
				right: 0;
				margin-right: .3rem;
				margin-top: -.3rem;
				color: #9e9e9e;
		.info-bottom:before
			content: '';
			display: block;
			overflow: hidden;
			padding-bottom: .01rem;
			width: 100%;
			background: #f0f0ef;
		.info-top:after,.info-bottom:after
			content: '';
			display: block;
			clear: both;	
</style>
