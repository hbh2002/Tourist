<template>
	<div class="details">
		<details-header></details-header>
		<details-banner></details-banner>
		<details-list :list='list'></details-list>
	</div>
</template>

<script>
	import DetailsBanner from './components/Banner.vue'
	import DetailsHeader from './components/Header.vue'
	import DetailsList from './components/List.vue'
	export default {
		name: 'Details',
		components: {
			DetailsBanner,
			DetailsHeader,
			DetailsList
		},
		data () {
			return {
				list: [{
					id:'001',
					title: '门票+电子讲解',
					child: [{
							title: '香山公园成人票+手机电子讲解',
							pice: '13.5'
						}]
				},{
					id:'002',
					title: '联票',
					child: [{
							title: '香山公园成人票+手机电子讲解',
							pice: '14.5'
						}]
				},{
					id:'003',
					title: '景区讲解服务',
					child: [{
							title: '香山公园成人票+手机电子讲解',
							pice: '23.5'
						}]
				},{
					id:'004',
					title: '一日游',
					child: [{
							title: '香山公园成人票+手机电子讲解',
							pice: '13.5'
						}]
				}]
			}
		}
	}
</script>

<style lang='stylus' scoped>
	.details
		background-color: #eee;
		box-sizing: border-box;
</style>
