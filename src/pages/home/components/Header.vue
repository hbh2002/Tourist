<template>
	<div class="header">
		<router-link to="" class="heade_left"><i class="iconfont">&#xe616;</i></router-link>
		<div class="header_input">
			<router-link to="seek">
				<i class="iconfont">&#xe632;</i>
				<span>输入城市/景点/游玩主题</span>
			</router-link>
		</div>
		<div class="header_right">
			<router-link to="/city">
				<span class="nav_city_padding">{{this.city}}<i class="iconfont">&#xe6b5;</i></span>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'HomeHeader',
		props: {
			city:String
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variable.styl'
	.nav_city_padding
		padding: 0 .22rem;
	.header
		display: flex;
		height: .88rem;
		background-color: $bgColorAll;
		text-align: center;
		line-height:.88rem;
		font-size: .28rem;
		a
			color:#fff;
		.heade_left
			float:left;
			width: .44rem;
			padding:0 .18rem;
			font-size:.46rem;
			font-weight: 800;
			line-height: .78rem;
			text-align:left;
		.header_input
			flex: 1;
			height: .6rem;
			margin: .14rem 0;
			line-height: .6rem;
			border-radius: .06rem;
			text-align: left;
			background-color: #fff;
			a
				display: block;
				color: #e4e7ea;
				padding: 0 .20rem;
		.header_right
			float: right;
</style>