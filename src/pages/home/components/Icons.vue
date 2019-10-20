<template>
	<div class="icons">
		<!-- 图标区开始 -->
		<swiper :options="swiperOption">
		    <!-- slides -->
		    <swiper-slide v-for="(page,index) of pages" :key="index">
		    	<div class="icons-item" v-for="item of page" :key="item.id">
					<router-link to="">
						<div class="item-img">
							<img :src="item.src" alt="">
						</div>				
						<div class="item-intro">{{item.intro}}</div>
					</router-link>
				</div>
		    </swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
	  	</swiper>
	  	<!-- 图标区结束 -->
	  	<div class="icons-site">
	  		<ul>
	  			<li class="site-left">
	  				<span class="iconfont">&#xe681;</span>
	  				定位失败
	  			</li>
	  			<li class="site-right">
	  				<router-link to="">
	  					<span class="iconfont">&#xe6c0;</span>
	  					必游榜单
	  				</router-link>
	  			</li>
	  		</ul>
	  	</div>
	</div>
</template>

<script>
	export default {
		name:"HomeIcon",
		props: {
			list: Array
		},
		data () {
			return {
				swiperOption: {
					pagination: {
						el: ".swiper-pagination", 
						clickable: true,
						type: "bullets"
					}
				}
			}
		},
		computed: { //计算属性判断页数
			pages () {
				const pages = [];
				this.list.forEach((item,index) => {
					const page = Math.floor(index/8);
					if(!pages[page]) {
						pages[page] = [];
					}
					pages[page].push(item);
				})
				return pages;
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/variable.styl'
	.icons >>> .swiper-pagination
		position: static;
		bottom: 0;
	.icons
		overflow: hidden;
		background: #fff;
		padding-top: .2rem;
		box-sizing: border-box;
		.icons-item
			float: left;
			overflow: hidden;
			width: 25%;
			background: #fff;
			box-sizing: border-box;
			margin-bottom: .1rem;
			.item-img
				padding: .1rem;
				box-sizing: border-box;
				img
					display: block;
					width: 1.1rem;
					height: 1.1rem;
					margin: 0 auto;
			.item-intro
				font-size: .28rem;
				color: $textColor;
				text-align: center;
				padding: 0 .03rem;
				box-sizing: border-box;
				overflow: hidden;
				text-overflow:ellipsis;
				white-space: nowrap;
		.icons-site
			background: #fff;
			margin-top: .1rem;
			li
				float: left;
				width: 50%;
				text-align: center;
				box-sizing: border-box;
				border: 1px solid #eee;
				border-left: none;
				padding: .24rem 0;
			li.site-right
				border-right: none;
				a
					color: $textColor;
</style>