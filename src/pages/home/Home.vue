<template>
  <div class="home">
  	<home-header></home-header>
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
	import { mapState } from 'vuex'
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
  		computed: {
  			...mapState(['city'])
  		},
  		data () {
  			return {
  				lastCity: '',
  				swiperList: [],
  				iconsList: [],
  				recommList: [],
  				relatedList: [],
  				recommendList: []
  			}
  		},
  		methods: {
  			getHomeInfo () {
  				axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
  			},
  			getHomeInfoSucc (res) {
  				res = res.data
  				if(res.ret && res.data){
  					const data = res.data
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
  			this.lastCity = this.city
  		},
  		activated () {
  			if(this.lastCity !== this.city){
  				this.lastCity = this.city
  				this.getHomeInfo()
  			}
  		}
	}

</script>

<style>

</style>
