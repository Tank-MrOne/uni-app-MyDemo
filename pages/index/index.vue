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
			<view class="navItem" @click="changeNavId(-1,0)" :class="{isActive: navId === -1}">推荐</view>
			<view @click="changeNavId(index,item.L1Id)" class="navItem" :class="{isActive: navId === index}" v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="index">
				{{item.text}}
			</view>

		</scroll-view>
		<!-- 内容区 -->
		<scroll-view scroll-y="true" class="contentScroll">
			<view>
				<Comments v-if="id==0"/>
				<CateList v-else :navId="id"></CateList>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import Comments from '../../components/comments/comment.vue'
	import CateList from '../../components/cateList/cateList.vue'
	import {mapState} from 'vuex'
	export default {
		components:{
			Comments,
			CateList
		},
		data() {
			return {
				navId : -1,
				id : 0 ,
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
		methods: {
			changeNavId(index,id){
				this.navId = index
				this.id = id
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
		.contentScroll
			height calc(100vh - 160rpx)
.test
	font-size 0
</style>
