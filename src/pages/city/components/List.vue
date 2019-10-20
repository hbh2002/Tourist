<template>
	<div class="city-list">
		<div class="area">
			<div class="area-title border-top-bottom">当前城市</div>
			<div class="area-content">
				<div class="button-wrapper">
					<div class="button button-active">北京</div>
				</div>
			</div>
		</div>
		<div class="area">
			<div class="area-title border-top-bottom">热门城市</div>
			<div class="area-content">
				<div class="button-wrapper">
					<div class="button">广州</div>
				</div>
				<div class="button-wrapper">
					<div class="button">广州</div>
				</div>
				<div class="button-wrapper">
					<div class="button">广州</div>
				</div>
				<div class="button-wrapper">
					<div class="button">广州</div>
				</div>
				<div class="button-wrapper">
					<div class="button">广州</div>
				</div>
				<div class="button-wrapper">
					<div class="button">广州</div>
				</div>
				<div class="button-wrapper">
					<div class="button">广州</div>
				</div>
				<div class="button-wrapper">
					<div class="button">广州</div>
				</div>
			</div>
		</div>
		<div class="area">
			<div class="area-title border-top-bottom">A</div>
			<div class="item-list">
				<div class="item">澳门</div>
				<div class="item">阿拉尔</div>
				<div class="item">澳门</div>
				<div class="item">阿拉尔</div>
				<div class="item">澳门</div>
				<div class="item">阿拉尔</div>
			</div>
		</div>
		<div class="area">
			<div class="area-title border-top-bottom">A</div>
			<div class="item-list">
				<div class="item">澳门</div>
				<div class="item">阿拉尔</div>
				<div class="item">澳门</div>
				<div class="item">阿拉尔</div>
				<div class="item">澳门</div>
				<div class="item">阿拉尔</div>
			</div>
		</div>
		<div class="area">
			<div class="area-title border-top-bottom">A</div>
			<div class="item-list">
				<div class="item">澳门</div>
				<div class="item">阿拉尔</div>
				<div class="item">澳门</div>
				<div class="item">阿拉尔</div>
				<div class="item">澳门</div>
				<div class="item">阿拉尔</div>
			</div>
		</div>
		<div class="area">
			<div class="area-title border-top-bottom">A</div>
			<div class="item-list">
				<div class="item">澳门</div>
				<div class="item">阿拉尔</div>
				<div class="item">澳门</div>
				<div class="item">阿拉尔</div>
				<div class="item">澳门</div>
				<div class="item">阿拉尔</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CityList'
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variable.styl'
	.border-top-bottom
		&::before
			border-color: #f5f5f5;
		&::after
			border-color: #f5f5f5;
	.city-list
		position: absolute;
		top: 1.52rem;
		left: 0;
		right: 0;
		bottom: 0;
		.area-title
			font-size: .26rem;
			padding: .24rem .3rem;
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
					padding: .1rem 0;
					text-align: center;
					border: .02rem solid #ccc;
					border-radius: .06rem;
					font-size: .28rem;
				.button-active
					border-color: #00ADC1;
					color: #00ADC1;
		.item-list
			background-color: #fff;
			.item
				padding: .14rem .6rem .14rem .18rem;
				border-top: .02rem solid #f5f5f5;
				font-size: .28rem;
</style>