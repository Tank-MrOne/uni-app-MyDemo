<template>
	<view class="indexView">
		<view class="header">
			<image class="logo" src="../../static/images/logo.png" mode=""></image>
			<view class="search"> 
				<text class="iconfont icon-sousuo"></text>
				<input type="text" value="" placeholder="搜索商品" placeholder-class="headerInput"/>
			</view>
			<button class="userName">Tank</button>
		</view>
		<!-- 导航区域 -->
		<scroll-view scroll-x="true" class="navScroll">
			<!-- <view class="navItem" :class="{isActive:true}">推荐</view> -->
			<view @click="changeNavId(index)" class="navItem" :class="{isActive: navId === index}" v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="index">
				{{item.text}}
			</view>

		</scroll-view>
		<!-- 内容区 -->
		<scroll-view scroll-y="true" >
			<view>
				<Comments />
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import Comments from '../../components/comments/comment.vue'
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				navId : 0
			}
		},
		computed:{
			...mapState({
				indexData : state => state.indexModule.indexData
			})
		},
		mounted() {
			this.$store.dispatch('getIndexData')
		}, 
		components:{
			Comments
		},
		methods: {
			changeNavId(index){
				this.navId = index
			}
		}
	}
</script>

<style lang="stylus">
	.indexView
		.header
			display flex
			padding 10rpx
			.logo
				width 140rpx
				height 40rpx
				margin 10rpx 30rpx
			.search
				position relative
				height 60rpx
				width 420rpx
				background-color #C0C0C0
				margin 0 10rpx
				border-radius 2rpx
				.headerInput
					font-size 24rpx
					width 370rpx
					margin-left 50rpx
				.iconfont
					font-size 30rpx
					position absolute
					top 25%
					left 10rpx
			.userName
				width 144rpx
				height 60rpx
				font-size 22rpx
				text-align center
				overflow hidden
				white-space nowrap
				text-overflow ellipsis
				color #bb2c08
		.navScroll
			white-space nowrap
			height 80rpx
			.navItem
				display inline-block
				line-height 79rpx
				margin 0 10rpx
				font-size 28rpx
				width 120rpx
				text-align center
			.isActive
				border-bottom solid 1rpx #BB2C08
.test
	font-size 0
</style>
