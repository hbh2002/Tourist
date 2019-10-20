<template>
	<div class="homeSwiper">
		<swiper :options="swiperOption" v-if="list.length">
		    <!-- slides -->
		    <swiper-slide v-for="item of list" :key="item.id">
		    	<router-link to="">
		    		<img :src="item.src" />
		    	</router-link>
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
</template>

<script>
	export default{
		name:'HomeSwiper',
		props: {
			list: Array
		},
		data () {
			return {
				swiperOption: {
					pagination: {
						el: ".swiper-pagination", 
						clickable: true,
						type: "bullets"
					},
				　　observer:true,//修改swiper自己或子元素时，自动初始化swiper 
				　　observeParents:true,//修改swiper的父元素时，自动初始化swiper 
				　　loop:true,
				　　autoplay: {
				　　　　	delay: 3000, //设置间隔时间
				　　		disableOnInteraction: false
					}
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.homeSwiper >>> .swiper-pagination-bullet-active
		background-color: #fff;
	.homeSwiper
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 26.5%;
		background-color: #eee;
		img
			width: 100%
</style>