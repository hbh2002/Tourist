<template>
	<ul class="alphabet">
		<li class="item" 
		v-for="item of letters" 
		:key="item"
		:ref="item"
		@click="setpoint"
		@touchstart="handleTouchstart"
		@touchmove="handleTouchmove"
		@touchend="handleTouchend"
		>{{item}}</li>
	</ul>
</template>

<script>
	export default {
		name: 'CityHeader',
		props: {
			cityList: Object,
		},
		data () {
			return {
				touchStatus: false,
				startY: 0,
				timer: null
			}
		},
		updated () {
			this.startY = this.$refs['A'][0].offsetTop;
		},
		computed: {
			letters () {
				const letters = []
				for(let i in this.cityList){
					letters.push(i)
				}
				return letters
			}
		},
		methods: {
			setpoint (e) {
				this.$emit('change',e.target.innerHTML)
			},
			handleTouchstart () {
				// 触摸时
				this.touchStatus = true
			},
			handleTouchmove (e) {
				// 滑动时
				if(this.touchStatus){
					// 节流
					if(this.timer){ 
						clearTimeout(this.timer)
					}
					this.timer = setTimeout(() => {
						const touchY = e.touches[0].clientY - 76;
						const index = Math.floor((touchY - this.startY) / 19)
						if(index >= 0 && index < this.letters.length){
							this.$emit('change',this.letters[index])
						}
					}, 8)
				}
			},
			handleTouchend () {
				// 离开时
				this.touchStatus = false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variable.styl'
	.alphabet
		position: absolute;
		top: 1.2rem;
		right: 0;
		bottom: 0;
		padding: 0 .1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		.item
			font-size: .28rem;
			padding: .038rem 0;
			color: $bgColorAll;
			cursor: pointer;
</style>