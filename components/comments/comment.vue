<template>
	<view class="recoment">
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
		<view class="policyDescList">
			<view class="policyDescItem" v-for="(item,index) in indexData.policyDescList" :key="index">
				<image :src="item.icon" mode=""></image>
				<text>{{item.desc}}</text>
			</view>
		</view>
		<view class="kingkonglist" v-if="indexData.kingKongModule">
			<view class="kingkongitem" v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="index">
				<image :src="item.picUrl" mode=""></image>
				<text>{{item.text}}</text>
			</view>
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
.test
	font-size 0
</style>
