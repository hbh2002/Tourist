<template>
	<div class="related">
		<div class="related-title"> <!-- 标题 -->
			<div class="title-left">
				<img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" class="title-img">
				<span class="title-desc">猜你喜欢</span>
			</div>
		</div>
		<div class="related-content"> <!-- 内容 -->
			<ul class="content-list">
				<li class="list-item" v-for="item of list" :key="item.id">
					<router-link to="">
						<div class="item-imgcon">
							<img :src="item.bigImg">
						</div>
						<div class="item-tag" v-if="item.tagImg" :style="item.tagImg">{{item.tagText}}</div>
						<div class="item-icon">
							<div class="item-title">{{item.title}}</div>
							<div class="item-comment">
								<span class="iconfont comment-icon">&#xe617;</span>
								<span class="comment-num">{{item.comment}}</span>
							</div>
							<div class="item-price">
								<span class="mpg-price">
									&yen;<em class="mpg-price-num">{{item.price}}</em>
								</span>
								起
								<span class="comment-address">{{item.address}}</span>
							</div>
							<div class="item-feature" v-if="item.feature">
								<span class="feature-span">{{item.feature}}</span>
							</div>
						</div>
					</router-link>
				</li>
			</ul>
			<router-link to="" class="content-link">查看所有产品</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HomeRelated',
		props: {
			list: Array
		}
	}
</script>

<style lang="stylus" scoped>
	@import "~styles/variable.styl";
	@import "~styles/public.styl";
	.related
		margin: .22rem 0 0;
		background-color: #fff;
		.related-title //标题
			display: flex;
			justify-content: space-between;
			background-color: #fff;
			padding: .24rem 0 .26rem;
			color: $textColor;
			.title-left
				.title-img
					width: .3rem;
					height: .3rem;
					margin-left: .2rem;
					vertical-align: top;
				.title-desc
					height: .44rem;
					font-size: .32rem;
					line-height: .44rem;
		.related-content //内容
			padding: 0 .22rem;
			.list-item
				margin-bottom: .14rem;
				padding: .2rem 0;
				position: relative;
				a
					display: block;
					width: 100%;
					height: 100%;
				.item-imgcon
					float: left;
					width: 2rem;
					height: 2rem;
					img
						width: 2rem;
						height: 2rem;
				.item-tag
					position: absolute;
					top: .2rem;
					left: 0;
					width: 1.02rem;
					height: .38rem;
					background-size: 100%;
					background-repeat: no-repeat;
					color: #fff;
					font-size: .2rem;
					line-height: .38rem;
					text-indent: .04rem;
				.item-icon
					overflow: hidden;
					padding-left: .22rem;
					.item-title
						margin-top: .26rem;
						height: .44rem;
						color: $textColor;
						font-size: .32rem;
						line-height: .44rem;
						hide()
				.item-comment
					margin-top: .14rem;
					height: .34rem;
					.comment-icon
						width: 1.5rem;
						height: .28rem;
						font-size: .28rem;
						letter-spacing: .02rem;
						color: #FFB436;
					.comment-num
						margin-left: .08rem;
						color: #616161;
						font-size: .24rem;
						line-height: .34rem;
						vertocal-align: text-bottom;
				.item-price
					position: relative;
					margin-top: .22rem;
					color: #616161;
					font-size: .24rem;
					line-height: .4rem;
					.mpg-price
						color: #ff8300;
						.mpg-price-num
							font-size: .38rem;
					.comment-address
						position: absolute;
						right: .24rem;
						bottom: 0;
						width: 1.5rem;
						text-align: right;
						hide()
				.item-feature
					margin-top: .48rem;
					margin-right: .24rem;
					padding: .04rem .1rem;
					color: #f55;
					font-size: .24rem;
					line-height: .34rem;	
					.feature-span
						background-color: #fff9f9;	
		.content-link
			display: block;
			padding: .2rem 0;
			color: #00afc7;
			font-size: .28rem;		
			line-height: .4rem;
			text-align: center;
			border-top: .01rem solid #eee;
			box-sizing: border-box;		
</style>