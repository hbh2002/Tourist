<template>
	<div>
		<div class="search">
			<input type="text" 
			name="cityName" class="city-search" id="cityName" 
			placeholder="请输入城市名或拼音" v-model="keyWoder">
		</div>
		<div class="search-Info" v-show="keyWoder" ref="search">
			<ul class="info-list">
				<li class="item" 
				v-for="item of woderList" :key="item.id"
				@click="handCityClick(item.name)">{{item.name}}</li>
				<li class="item item-desc" v-show="hasNoData">未搜索到相关的数据</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	export default {
		name: "CitySearch",
		props: {
			cityList: Object
		},
		computed: {
			hasNoData () {
				return !this.woderList.length
			}
		},
		data () {
			return {
				keyWoder: '',
				woderList: [],
				timer: null
			}
		},
		watch: {
			keyWoder () {
				if(this.timer){
					clearTimeout(this.timer)
				}
				if(!this.keyWoder){
					this.woderList = []
					return
				}
				this.timer = setTimeout(() => {
					const result = []
					for(let i in this.cityList){
						this.cityList[i].forEach((value) => {
							if(value.spell.indexOf(this.keyWoder) > -1 || value.name.indexOf(this.keyWoder) > -1){
								if(value.spell[0] == this.keyWoder[0] || value.name[0] == this.keyWoder[0]){
									result.push(value)
								}
							}
						})		
					}
					this.woderList = result
				}, 100)
			}
		},
		methods: {
			handCityClick (city) {
				this.$store.commit("changeCity",city)
				this.keyWoder = ''
				this.$router.push('/')
			}
		},
		mounted () {
			this.scroll = new Bscroll(this.$refs.search)
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variable.styl'
	.search
		background-color: $bgColorAll;
		padding: .1rem .16rem;
		box-sizing: border-box;
		.city-search
			width: 100%;
			height: .6rem;
			line-height: .6rem;
			border-radius: .08rem;
			box-sizing: border-box;
			text-align: center;
			color: #212121;
			padding: 0 .16rem;
		input::-webkit-input-placeholder
			font-family: '黑体';
		input:-moz-placeholder
			font-family: '黑体';
		input::-moz-placeholder 
			font-family: '黑体'; 
		input:-ms-input-placeholder 
			font-family: '黑体';
	.search-Info
		overflow: hidden;
		position: absolute;
		top: 1.5rem;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 2;
		background: #FAFAFA;
		.item
			width: 100%;
			height: .66rem;
			line-height: .66rem;
			box-sizing: border-box;
			padding-left: .34rem;
			font-size: .31rem;
			background: #fff;
			border-bottom: .02rem solid #F5F5F5;
		.item:last-child
			border-bottom: none;
		.item:hover
			background: #F5F5F5;
		.item-desc
			margin-top: .4rem;
			height: 1rem;
			line-height: 1rem;
			text-align: center;
			color: #FF5848;
			font-size: .26rem;
			padding: 0;
			background-color: #FAFAFA;
</style>