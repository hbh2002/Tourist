<template>
	<div class="info">
		<div class="info-top">
			<div class="info-box">
				<router-link to="" class="info-link">
					<div> 
						<span class="info-score">4.7</span>
						<span class="info-text">分</span>
						<span class="info-desc">很棒</span>
					</div>
					<div>
						<span class="sightcard-text">1699条评论</span>
						<span class="sightcard-text">24条攻略</span>
						<span class="iconfont">&#xe600;</span>
					</div>
				</router-link>
			</div>
			<div class="info-box">
				<router-link to="" calss="info-link">
					<div>
						<span class="sightcard-title">景点简介</span>
					</div>
					<div>
						<span class="sightcard-text">开放时间、贴示</span>
						<span class="iconfont">&#xe600;</span>
					</div>
				</router-link>
			</div>
		</div>
		<div class="info-bottom">
			<span class="iconfont">&#xe681;</span>
			<span class="site">北京市海淀区买卖街40号</span>
			<span class="iconfont">&#xe600;</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailsInfo'
	}
</script>

<style lang="stylus" scoped>
	.info
		width: 100%;
		background: #fff;
		border-radius: .1rem .1rem 0 0;
		padding: .16rem .1rem; 
		box-sizing: border-box;
		position: absolute;
		top: 4.02rem;
		left: 0;
		.info-top .info-box
			float: left;
		.info-top:after
			content: '';
			display: block;
			clear: both;	
</style>