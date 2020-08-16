<template>
	<view class="categoryContainer">
		<view class="header">
			<view class="headerContent">
				搜索商品
			</view>
		</view>
		<view class="content">
			<view class="left">
				<scroll-view scroll-y="true" class="leftScroll">
					<view :class="{activeClass : navId === item.id}" class="navItem" @click="navId = item.id" v-for="item in categoryList" :key="item.id">
						{{item.name}}
					</view>

				</scroll-view>
			</view>
			<view class="right">
				<scroll-view scroll-y="true" class="rightScroll">
					<view class="proInfo">
						<image class="proImg" :src="categoryObj.imgUrl" mode=""></image>
						<view class="proItem" v-for="item in categoryObj.subCateList" :key="item.id">
							<image :src="item.wapBannerUrl" mode=""></image>
							<text>{{item.name}}</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				categoryList : [],
				navId:1005000
			};
		},
		mounted(){
			this.getCategoryList()
		},
		methods:{
			async getCategoryList(){
				let categoryData = await request('/getCategoryData')
				this.categoryList = categoryData
			}
		},
		computed:{
			categoryObj(){
				return this.categoryList.find(item => item.id === this.navId)
			}
		}
	}
</script>

<style lang="stylus">
.categoryContainer
	.header
		padding 5rpx 0
		.headerContent
			width 94%
			height 60rpx
			text-align center
			height 60rpx
			line-height 60rpx
			background-color #CCCCCC
			font-size 24rpx
			margin 0 auto
			border-radius 10rpx
			color #fff
			letter-spacing 5rpx
	.content
		display flex
		height calc(100vh - 70rpx)
		padding 0 5rpx
		.left
			width 20%
			box-sizing border-box
			border-right 1rpx #ccc solid
			border-top 1rpx #ccc solid
			.leftScroll
				height calc(100vh - 71rpx)
				.navItem
					font-size 24rpx
					text-align center
					line-height 80rpx
					&.activeClass
						border-left 1rpx solid orange
		.right
			box-sizing border-box
			border-top 1rpx #ccc solid
			width 80%
			.rightScroll
				height 100%
				.proInfo
					display flex
					flex-wrap wrap
					.proImg
						width 520rpx
						height 190rpx
						margin 20rpx auto
					.proItem
						text-align center
						width 33.33%
						image
							width 90%
							height 140rpx
						text
							font-size 26rpx
							
</style>
