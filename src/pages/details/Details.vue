<template>
	<div class="details">
		<details-header></details-header>
		<details-banner
		:nameTxt='nameTxt' 
		:bigImg='bigImg'
		:imgList='imgList'></details-banner>
		<details-list :list='categoryList'></details-list>
	</div>
</template>

<script>
	import DetailsBanner from './components/Banner.vue'
	import DetailsHeader from './components/Header.vue'
	import DetailsList from './components/List.vue'
	import axios from 'axios'
	export default {
		name: 'Details',
		components: {
			DetailsBanner,
			DetailsHeader,
			DetailsList
		},
		data () {
			return {
				nameTxt: '',
				bigImg: '',
				imgList: [],
				categoryList: []
			}
		},
		methods: {
			getdetails () {
				axios.get('/api/particulars.json',{
					params: {
						id: this.$route.params.id
					}
				}).then(this.acquireData)
			},
			acquireData (res) {
				res = res.data
				if(res.ret && res.data){
					const data = res.data
					this.nameTxt = data.name
					this.bigImg = data.bigImg
					this.imgList = data.imgList
					this.categoryList = data.categoryList 
				}
			}
		},
		mounted () {
			this.getdetails()
		}
	}
</script>

<style lang='stylus' scoped>
	.details
		background-color: #eee;
		box-sizing: border-box;
		overflow-x: hidden;
</style>
