<template>
	<div class="carousel" @click="unshowBanner">
		<div class="item-swiper">
			<swiper :options="swiperOption">
			    <!-- slides -->
			    <swiper-slide v-for="(item,index) in imgs" :key="index">
			    	<img :src="item" class="swiper-img" />
			    </swiper-slide>
			    <!-- Optional controls -->
			    <div class="swiper-pagination"  slot="pagination"></div>
		  	</swiper>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Carousel',
		props: {
			imgs: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data () {
			return {
				swiperOption: {
					pagination: {
						el: ".swiper-pagination", 
						clickable: true,
						type: "fraction"
					},
					observeParents: true,
					observer: true
				}
			}
		},
		methods: {
			unshowBanner () {
				this.$emit('close')
			}
		}
	}
</script>

<style lang='stylus' scoped>
	.carousel >>> .swiper-container
		overflow: visible;
	.carousel
		z-index: 2;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #000;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		.item-swiper
			width: 100%;
			height: 0;
			padding-bottom: 60%;	
			.swiper-img
				width: 100%;
			.swiper-pagination
				position: absolute;
				bottom: -2rem;
				color: #fff;
</style>
