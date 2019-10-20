<template>
  <div class="home">
  	<home-header :city="city"></home-header>
  	<home-swiper :list="swiperList"></home-swiper>
  	<home-icons :list="iconsList"></home-icons>
  	<home-recomm :list="recommList"></home-recomm>
  	<home-related :list="relatedList"></home-related>
  	<home-recommend :list="recommendList"></home-recommend>
  	<home-footer></home-footer>
  </div>
</template>

<script>
	//导入局部组件
	import HomeHeader from './components/Header'
	import HomeSwiper from './components/Swiper'
	import HomeIcons from './components/Icons.vue'
	import HomeRecomm from './components/Recomm.vue'
	import HomeRelated from './components/Related.vue'
	import HomeRecommend from './components/Recommend.vue'
	import HomeFooter from './components/Footer.vue'
	import axios from 'axios'
	export default {
  		name: 'Home',
  		components: { 
  			HomeHeader,
  			HomeSwiper,
  			HomeIcons,
  			HomeRecomm,
  			HomeRelated,
  			HomeRecommend,
  			HomeFooter
  		},
  		data () {
  			return {
  				city: '',
  				swiperList: [],
  				iconsList: [],
  				recommList: [],
  				relatedList: [],
  				recommendList: []
  			}
  		},
  		methods: {
  			getHomeInfo () {
  				axios.get('/api/index.json').then(this.getHomeInfoSucc)
  			},
  			getHomeInfoSucc (res) {
  				res = res.data
  				if(res.ret && res.data){
  					const data = res.data
  					this.city = data.city
  					this.swiperList = data.swiperList
  					this.iconsList = data.iconsList
  					this.recommList = data.recommList
  					this.relatedList = data.relatedList
  					this.recommendList = data.recommendList
  				}
  			}
  		},
  		mounted () {
  			this.getHomeInfo()
  		}
	}

</script>

<style>

</style>
