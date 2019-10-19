<template>
	<div class="footer">
		<div class="footer-nav">
		 	<ul class="main_nav clearfix">
		 		<li>
		 			<router-link to="">
		 				<span class="iconfont">&#xe690;</span>
		 				<span class="name">机票</span>
		 			</router-link>
		 		</li>
		 		<li>
		 			<router-link to="">
		 				<span class="iconfont">&#xe61d;</span>
		 				<span class="name">酒店</span>
		 			</router-link>
		 		</li>
		 		<li>
		 			<router-link to="">
		 				<span class="iconfont">&#xe614;</span>
		 				<span class="name">公寓</span>
		 			</router-link>
		 		</li>
		 		<li class="tag">
		 			<router-link to="">
		 				<span class="iconfont">&#xe615;</span><span class="name">更多</span>
		 			</router-link>
		 		</li>
		 	</ul>
		</div>
		<ul class="footer-nav-list clearfix">
			<li>
				<router-link to="">登录</router-link>
			</li>
			<li>
				<router-link to="">我的订单</router-link>
			</li>
			<li>
				<router-link to="">最近浏览</router-link>
			</li>
			<li>
				<router-link to="">关于我们</router-link>
			</li>
		</ul>
		<ul class="mobile_pc clearfix">
			<li class="active">
				<router-link to="">触屏版</router-link>
			</li>	
			<li>
				<router-link to="">电脑版</router-link>
			</li>
		</ul>
		<div class="copyright">
			<span>Qunar 京ICP备05021087</span>
			<router-link to="">意见反馈</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "HomeFooter"
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variable.styl'
	.footer-nav
		margin-top: .2rem;
		.main_nav
			display: block;
			position: relative;
			width: 6rem;
			height: .5rem;
			margin: 0 auto;
			padding: .2rem .2rem 0rem .2rem;
			overflow: hidden;
			li
				float: left;
				margin: 0;
				padding-left: .1rem;
				height: .62rem;
				width: 1.3rem;
				position: relative;
				a
					color: #9e9e9e;
					.iconfont
						font-size: .45rem;
					.name
						font-size: .26rem;
						border-bottom: .02rem solid #acacac;
						position: absolute;
						top: .05rem;
						left: .6rem;
			.tag 
				position: absolute;
				right: .12rem;
				bottom: -.12rem;
				padding: 0 .2rem;
				.name
					border: none;
			.tag::after
				display: block;
				content: "";
				width: .02rem;
				height: .32rem;
				background: #9e9e9e;
				position: absolute;
				left: 0;
				top: .05rem;
	.footer-nav-list
		display: block;
		width: 100%;
		height: .78rem;
		border-bottom: .02rem solid #cacaca;
		li
			float: left;
			padding-left: .4rem;
			a
				font-size: .28rem;
				line-height: .78rem;
				color: #25a4bb;
	.mobile_pc
		padding-top: .2rem;
		text-align: center;
		li
			display: inline-block;
			margin: 0 .3rem;
			a
				font-size: .28;
				color: #25a4bb;
		li.active a
			color: #000;
	.copyright
		color: #9e9e9e;
		text-align: center;
		font-size: .28rem;
		padding: .2rem;
		a
			color: #9e9e9e;
</style>