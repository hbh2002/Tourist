<template>
	<div class="homeSwiper">
		<swiper :options="swiperOption">
		    <!-- slides -->
		    <swiper-slide v-for="item of swiperList" :key="item.id">
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
				},
				swiperList: [
					{
						id:"001",
						src:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/4ee887fbd9982813f1463965192ec174.jpg_750x200_b554748b.jpg'
					},
					{
						id:"002",
						src:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/c3635f8f6ac6a40f5069cd1b2b896100.jpg_750x200_0e548e3b.jpg'
					},
					{
						id:"003",
						src:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20198/06e65ace8dce3638e847b04e975489d1.jpg_750x200_a2dcb0a4.jpg'
					}
				]
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