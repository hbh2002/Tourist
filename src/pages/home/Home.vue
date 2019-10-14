<template>
  <div class="home">
  	<home-header></home-header>
  	<home-swiper></home-swiper>
  	<home-icons></home-icons>
  	<home-recomm></home-recomm>
  	113311332
  </div>
</template>

<script>
	//导入局部组件
	import HomeHeader from './components/Header'
	import HomeSwiper from './components/Swiper'
	import HomeIcons from './components/Icons.vue'
	import HomeRecomm from './components/Recomm.vue'
	export default {
  		name: 'Home',
  		components:{ 
  			HomeHeader,
  			HomeSwiper,
  			HomeIcons,
  			HomeRecomm
  		}
	}

</script>

<style>

</style>
