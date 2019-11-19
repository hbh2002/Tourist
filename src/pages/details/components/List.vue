<template>
	<div class="list clear">
		<div class="list-nav">
			<div class="item">
				<span class="active">门票</span>
			</div>
			<div class="item">
				<span>一日游</span>
			</div>
		</div>
		<div class="list-item">
			<div class="item-child"
				v-for="item of list" :key="item.id">
				<div class="item-title"><span class="icon-img"></span>{{item.title}}</div>
				<div class="item-content" v-if="item.child" v-for="items of item.child">
					<div class="content">
						<span class="desc">{{items.title}}</span>
						<span class="pice">
							&yen;<em class="pice-num">{{items.pice}}</em><span class="pice-text">起</span>
							<i class="iconfont pice-icon">&#xe601;</i>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailsList',
		props: {
			list: Array
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variable.styl'
	@import '~styles/public.styl'
	.list	
		margin-top: 2.05rem;
		background: #fff;
		.list-nav
			width: 100%;
			height: 1rem;
			border-bottom: .02rem solid #eee;
			box-sizing: border-box;
			display: flex;
			.item
				flex: 1;
				text-align: center;
				font-size: .32rem;
				heihgt: 100%;
				line-height: 1rem;
				box-sizing: border-box;
				.active
					display: inline-block;
					min-width: .3rem;
					margin: 0 auto;
					padding: 0 .4rem;
					border-bottom: .04rem solid $bgColorAll;
					box-sizing: border-box;
		.list-item
			background-color: #eee;
			.item-child
				padding: .1rem 0rem;
				margin-bottom: .18rem;
				background: #fff;
				border-top: .01rem solid #eee;
				.item-title
					padding-left: .25rem;
					font-size: .32rem;
					height: .88rem;
					line-height: .88rem;
					color: #333;
					text-indent: .4rem;
					margin-bottom: .1rem;
					position: relative;
					.icon-img
						width: .36rem;
						height: .36rem;
						background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat;
						background-size: .4rem 3rem;
						position: absolute;
						top: .26rem;
						left: .2rem;
				.item-title:after
					content: '';
					width: 100%;
					height: .02rem;
					position: absolute;
					bottom: 0rem;
					left: .2rem;
					border-bottom: .02rem solid #E6E6E6;
					box-sizing: border-box;
				.item-content
					padding-left: .2rem;
					line-height: .7rem;
					box-sizing: border-box;
					.content
						color: #333; 
						font-size: .3rem;
						position: relative;
						.pice
							position: absolute;
							top: .05rem;
							right: .5rem;
							color: #ff9800;
							font-size: .24rem;
							.pice-num
								margin-left: .04rem;
								font-size: .4rem;
							.pice-text
								color: #9e9e9e;
								font-size: .24rem;
							.pice-icon
								position: absolute;
								top: 0;
								right: -.44rem;
								color: #9e9e9e;
								font-size: .6rem;
	clearFloat()
</style>