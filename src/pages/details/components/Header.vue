<template>
	<div class="detailsHeader">
		<div class="header-abs">
			<router-link to="/" 
			tag="div"
			class="banner-exit"
			v-show="showAbs">
				<span class="iconfont">&#xe616;</span>
			</router-link>
		</div>
		<div class="header-feix" v-show="!showAbs" :style="styleOpacity">
			<router-link to="/" class="exit"><i class="iconfont">&#xe616;</i></router-link>
			<h1 calss="title">香山公园</h1>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailsHeader',
		data () {
			return {
				showAbs: true,
				styleOpacity: {
					opacity: 0
				}
			}
		},
		methods: {
			showHeader () {
				const boxTop = document.documentElement.scrollTop
				if(boxTop > 60){
					let opacity = boxTop / 120
					opacity = opacity > 1 ? 1 : opacity
					this.showAbs = false
					this.styleOpacity = { opacity }
				}else{
					this.showAbs = true
				}				
			}
		},
		mounted () {
			window.addEventListener('scroll',this.showHeader)
		},
		unmounted () {
			window.removeEventListener('scroll',this.showHeader)
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variable.styl'
	.banner-exit
		width: .7rem;
		height: .7rem;
		position: absolute;
		top: .16rem;
		left: .14rem;
		z-index: 1;
		color: #fff;
		text-align: center;
		line-height: .7rem;
		background-color: rgba(0,0,0,.6);
		border-radius: 50%;
		.iconfont
			font-size: .36rem;	
			font-weight: 800;
	.header-feix
		overflow: hidden;
		background-color: $bgColorAll;
		height: .76rem;
		line-height: .76rem;
		text-align: center;
		color: #fff;
		font-size: .32rem;
		z-index: 2;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
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