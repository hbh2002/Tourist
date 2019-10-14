<template>
  <div class="home">
  	<home-header></home-header>
  	<home-swiper></home-swiper>
  	<home-icons></home-icons>
  	<home-recomm></home-recomm>
  	<home-related></home-related>
  </div>
</template>

<script>
	//导入局部组件
	import HomeHeader from './components/Header'
	import HomeSwiper from './components/Swiper'
	import HomeIcons from './components/Icons.vue'
	import HomeRecomm from './components/Recomm.vue'
	import HomeRelated from './components/Related.vue'
	export default {
  		name: 'Home',
  		components:{ 
  			HomeHeader,
  			HomeSwiper,
  			HomeIcons,
  			HomeRecomm,
  			HomeRelated
  		}
	}

</script>

<style>

</style>
