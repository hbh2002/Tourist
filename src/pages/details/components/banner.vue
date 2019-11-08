<template>
	<div>
		<div class="banner" @click="showBanner">
			<div class="banner-img">
				<img src="http://img1.qunarzz.com/sight/p0/201403/07/a3231208ca4095bef77068c202d95bd2.jpg_600x330_fbe0867a.jpg" class="item-img">
			</div>
			<div class="info-num"><span class="iconfont">&#xe60a;</span>35</div>
			<div class="info-desc">香山公园(AAAA景区)</div>
		</div>
		<carousel :imgs="imgs" v-show="imgStatus" @close="unshowBanner"></carousel>
	</div>
</template>

<script>
	import Carousel from 'public/carousel/carousel.vue'
	export default {
		name: 'DetailsBanner',
		components: {
			Carousel
		},
		data () {
			return {
				imgStatus: false,
				imgs: ['http://img1.qunarzz.com/sight/p0/1605/ef/efe2e4fba923956090.water.jpg_r_800x800_c2ea0aaa.jpg','http://img1.qunarzz.com/sight/p0/1605/1e/1e864e25f9898c5f90.water.jpg_r_800x800_424642d9.jpg']
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
	.banner
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
			padding: .1rem .33rem;
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
</style>
