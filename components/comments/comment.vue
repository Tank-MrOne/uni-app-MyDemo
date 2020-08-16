<template>
	<view class="recoment">
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000"  class="commentSwiper">
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 标签栏 -->
		<view class="policyDescList">
			<view class="policyDescItem" v-for="(item,index) in indexData.policyDescList" :key="index">
				<image :src="item.icon" mode=""></image>
				<text>{{item.desc}}</text>
			</view>
		</view>
		<!-- 图片导航栏 -->
		<view class="kingkonglist" v-if="indexData.kingKongModule">
			<view class="kingkongitem" v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="index">
				<image :src="item.picUrl" mode=""></image>
				<text>{{item.text}}</text>
			</view>
		</view>
		<!-- 底部内容区 -->
		<view class="categoryModule" v-for="(cateItem,index) in indexData.categoryModule" :key="index">
			<image class="cateImage" :src="cateItem.titlePicUrl" mode=""></image>
			<scroll-view scroll-x="true" class="categoryScroll">
				<view class="categoryItem" v-for="item in cateItem.itemList" :key="item.id">
					<image class="scrollIamge" :src="item.showPicUrl" mode=""></image>
					<view>{{item.name}}</view>
				</view>
				
				<view class="categoryItem more" >
					查看更多
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		computed:{
			...mapState({
				indexData : state => state.indexModule.indexData
			})
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.commentSwiper
		width 100%
		height 350rpx
		.swiper-item
			width 100%
			height 100%
		image
			width 100%
			height 100%
	.policyDescList
		display flex
		.policyDescItem
			flex 1
			text-align center
			image
				width 32rpx
				height 32rpx
				vertical-align middle
			text
				font-size 20rpx
				vertical-align middle
			
			
			
	.kingkonglist
		display flex
		flex-wrap wrap
		.kingkongitem
			margin 10rpx 0
			display flex
			flex-direction column
			align-items center
			width 20%
			font-size 24rpx
			image
				width 110rpx
				height 110rpx
			text
				line-height 50rpx
	.categoryModule
		.cateImage
			width 100%
			height 370rpx
		.categoryScroll
			white-space nowrap
			.categoryItem
				display inline-block
				width 200rpx
				margin 10rpx
				vertical-align top
				.scrollIamge
					width 200rpx
					height 200rpx
					background-color #ccc
					border-radius 5rpx
				view
					font-size 24rpx
					white-space pre-wrap
					display -webkit-box
					-webkit-box-orient vertical
					overflow hidden
					-webkit-line-clamp 2
				&.more
					background-color #ccc
					border-radius 5rpx
					text-align center
					font-size 24rpx
					line-height 200rpx

.test
	font-size 0
</style>
