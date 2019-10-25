<template>
	<div class="city">
		<city-header></city-header>
		<city-search :cityList="cityList"></city-search>
		<city-list :hotCity="hotCity" :cityList="cityList" :setpoint="setpoint"></city-list>
		<city-alphabet :cityList="cityList" @change="setpointChange"></city-alphabet>
	</div>
</template>

<script>
	import axios from 'axios'
	//导入模块组件
	import CityHeader from './components/Header.vue'
	import CitySearch from './components/Search.vue'
	import CityList from './components/List.vue'
	import CityAlphabet from './components/Alphabet.vue'
	export default {
		name: 'City',
		components: {
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		},
		data () {
			return {
				hotCity: [],
				cityList: {},
				setpoint: ''
			}
		},
		methods: {
			getCity () {
				axios.get('/api/city.json').then(this.getCityInfo)
			},
			getCityInfo (res) {
				res = res.data
				if(res.ret && res.data){
					const data = res.data
					this.hotCity = data.hotCities
					this.cityList = data.cities
				}
			},
			setpointChange (res) { //获取点击的点
				this.setpoint = res;
			}
		},
		mounted () {
			this.getCity()
		}
	}
</script>

<style lang="stylus" scoped>
	.city
		background-color: #F5F5F5;
</style>