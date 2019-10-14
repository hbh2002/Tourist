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
		data () {
			return {
				swiperOption: {
					pagination: {
						el: ".swiper-pagination", 
						clickable: true,
						type: "bullets"
					}
				},
				iconsList: [
					{
						id: '001',
						src: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
						intro: '景点门票'
					},
					{
						id: '002',
						src: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
						intro: '故宫'
					},
					{
						id: '003',
						src: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
						intro: '北京必游'
					},
					{
						id: '004',
						src: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
						intro: '水上乐园'
					},
					{
						id: '005',
						src: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
						intro: '一日游'
					},
					{
						id: '006',
						src: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
						intro: '古北水镇'
					},
					{
						id: '007',
						src: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
						intro: '动植物园'
					},
					{
						id: '008',
						src: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
						intro: '奥林匹克塔'
					},
					{
						id: '009',
						src: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png',
						intro: '北京世园会'
					},
					{
						id: '010',
						src: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/bf88c62458044ca2ef9d733690eef3fc.png',
						intro: '优惠券'
					}
				]
			}
		},
		computed: { //计算属性判断页数
			pages () {
				const pages = [];
				this.iconsList.forEach((item,index) => {
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