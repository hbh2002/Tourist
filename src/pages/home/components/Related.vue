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
		data () {
			return {
				list: [
					{
						id: "001",
						bigImg: "http://img1.qunarzz.com/sight/p0/201403/07/a3231208ca4095bef77068c202d95bd2.jpg_200x200_0d7d4e22.jpg",
						tagImg: "background-image:url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png);",
						tagText: "可订明日",
						title: "香山公园",
						comment: "1682条评论",
						price: "15",
						address: "海淀区",
						feature: ""
					},
					{
						id: "002",
						bigImg: "http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg",
						tagImg: "background-image: url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png);",
						tagText: "可订明日",
						title: "故宫",
						comment: "545096条评论",
						price: "60",
						address: "东城区",
						feature: "世界五大宫之首，穿越与您近在咫尺"
					},
					{
						id: "003",
						bigImg: "http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg",
						tagImg: "background-image: url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png);",
						tagText: "随买随用",
						title: "八达岭长城",
						comment: "87767条评论",
						price: "40",
						address: "延庆县",
						feature: "不到长城非好汉"
					},
					{
						id: "004",
						bigImg: "http://img1.qunarzz.com/sight/p0/1910/5b/5b66f51364e1fd15a3.img.png_200x200_eaaaee15.png",
						tagImg: "background-image: url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png);",
						tagText: "随买随用",
						title: "北京欢乐谷",
						comment: "79897条评论",
						price: "99",
						address: "朝阳区",
						feature: "亚洲唯一飞行式过山车等你来挑战"
					},
					{
						id: "005",
						bigImg: "http://img1.qunarzz.com/sight/p0/1507/cc/19733fc0135062788140cbb48ae606a7.water.jpg_200x200_d9ebe2fd.jpg",
						tagImg: "background-image: url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png);",
						tagText: "可订明日",
						title: "北京野生动物园",
						comment: "27514条评论",
						price: "122",
						address: "大兴区",
						feature: "敢与森林之王近距离接触吗？"
					},
					{
						id: "006",
						bigImg: "http://img1.qunarzz.com/sight/p0/1604/78/78873494f26e554090.water.jpg_200x200_331422ad.jpg",
						tagImg: "background-image: url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png);",
						tagText: "可订明日",
						title: "京东石林峡",
						comment: "2985条评论",
						price: "58",
						address: "平谷区",
						feature: ""
					},
					{
						id: "007",
						bigImg: "http://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_200x200_8eb33f07.jpg",
						tagImg: "background-image: url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png);",
						tagText: "可订明日",
						title: "恭王府",
						comment: "44623条评论",
						price: "40",
						address: "西城区",
						feature: "一座恭王府，半部清代史"
					},
					{
						id: "008",
						bigImg: "http://img1.qunarzz.com/sight/p0/1903/5d/5dcaf453dfd6f5dba3.img.jpg_200x200_51d03f19.jpg",
						tagImg: "background-image: url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png);",
						tagText: "随买随用",
						title: "古北水镇",
						comment: "12926条评论",
						price: "140",
						address: "密云县",
						feature: ""
					},
					{
						id: "009",
						bigImg: "http://img1.qunarzz.com/sight/p0/1910/fd/fdba19c142483f00a3.water.jpg_200x200_a0175f4b.jpg",
						tagImg: "background-image: url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png);",
						tagText: "随买随用",
						title: "北京杜莎夫人蜡像馆",
						comment: "9737条评论",
						price: "144",
						address: "前门大街",
						feature: "听说能遇到杰伦哟"
					},
					{
						id: "010",
						bigImg: "http://img1.qunarzz.com/sight/p0/201308/08/41150dacc0e3a0c8c8d65eac.jpg_200x200_c62292e9.jpg",
						tagImg: "background-image: url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png);",
						tagText: "可订明日",
						title: "北京动物园",
						comment: "8516条评论",
						price: "13",
						address: "西城区",
						feature: ""
					},
					{
						id: "011",
						bigImg: "http://img1.qunarzz.com/sight/p0/1901/ea/ea459039354370daa3.img.jpg_200x200_8c51fc3d.jpg",
						tagImg: "background-image: url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png);",
						tagText: "随买随用",
						title: "世界公园",
						comment: "7742条评论",
						price: "92",
						address: "丰台区",
						feature: ""
					},
					{
						id: "012",
						bigImg: "http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_200x200_2cce447f.jpg",
						tagImg: "background-image: url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png);",
						tagText: "可订明日",
						title: "颐和园",
						comment: "58606条评论",
						price: "38.8",
						address: "海淀区",
						feature: "中国现存最大皇家园林"
					}
				]
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import "~styles/variable.styl";
	@import "~styles/public.styl";
	.related
		margin: .22rem 0;
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