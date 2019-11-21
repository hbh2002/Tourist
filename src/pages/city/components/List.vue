<template>
	<div class="city-list" ref="wrapper">
		<div>
			<div class="area">
				<div class="area-title border-top-bottom">当前城市</div>
				<div class="area-content">
					<div class="button-wrapper">
						<div class="button button-active">{{this.city}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="area-title border-top-bottom">热门城市</div>
				<div class="area-content">
					<div class="button-wrapper" 
					v-for="item of hotCity" :key="item.id" 
					@click="handCityClick(item.name)">
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area" v-for="(item, key) of cityList" :key="key" :ref="key">
				<div class="area-title border-top-bottom">{{key}}</div>
				<div class="item-list" 
				v-for="innerItem of item" :key="innerItem.id"
				@click="handCityClick(innerItem.name)">
					<div class="item">{{innerItem.name}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	import { mapState } from 'vuex'
	export default {
		name: 'CityList',
		props: {
			hotCity: Array,
			cityList: Object,
			setpoint: String
		},
		computed: {
			...mapState(['city'])
		},
		watch: {
			setpoint () {
				if(this.setpoint){
					const element = this.$refs[this.setpoint][0];
					this.scroll.scrollToElement(element)
				}
			}
		},
		methods: {
			handCityClick (city) {
				this.$store.commit("changeCity", city)
				this.$router.push('/')
			}
		},
		mounted () {
			// this.scroll = new Bscroll(this.$refs.wrapper)
			this.scroll = new Bscroll(this.$refs.wrapper, {click:true})
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variable.styl'
	@import '~styles/public.styl'
	.border-top-bottom
		&::before
			border-color: #f5f5f5;
		&::after
			border-color: #f5f5f5;
	.city-list
		overflow: hidden;
		position: absolute;
		top: 1.52rem;
		left: 0;
		right: 0;
		bottom: 0;
		.area-title
			font-size: .3rem;
			padding: .18rem .3rem;
			background-color: #f5f5f5;
		.area-content
			background-color: #fff;
			padding: .1rem .6rem .1rem .1rem;
			&:after
				content: '';
				display: block;
				clear: both;
			.button-wrapper
				float: left;
				width: 33.33%;
				.button
					margin: .1rem;
					padding: .14rem 0;
					text-align: center;
					border: .02rem solid #ccc;
					border-radius: .06rem;
					font-size: .28rem;
					hide()
				.button-active
					border-color: #00ADC1;
					color: #00ADC1;
		.item-list
			background-color: #fff;
			.item
				height: .3rem;
				line-height: .3rem;
				padding: .18rem .6rem .18rem .18rem;
				border-top: .02rem solid #f5f5f5;
				font-size: .28rem;
</style>