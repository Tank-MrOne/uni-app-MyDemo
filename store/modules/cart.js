import Vue from 'vue'
const state = {
	cartList: [{
			"count": 3,
			"selected": false,
			"promId": 0,
			"showPoints": false,
			"itemTagList": [{
				"itemId": 1562007,
				"tagId": 128111157,
				"freshmanExclusive": false,
				"name": "暖冬特惠",
				"subType": 204,
				"forbidJump": false,
				"type": 2
			}],
			"rank": 1,
			"id": 1562007,
			"sellVolume": 2477,
			"primaryPicUrl": "https://yanxuan-item.nosdn.127.net/eade4561af1081945c35ba934c7348b1.png",
			"soldOut": false,
			"sortFlag": 0,
			"commentCount": 0,
			"onSaleTime": 1536637196215,
			"picMode": 1,
			"commentWithPicCount": 0,
			"underShelf": false,
			"status": 2,
			"couponConflict": true,
			"forbiddenBuy": false,
			"promotionDesc": "暖冬特惠",
			"limitedFlag": 204,
			"pieceNum": 0,
			"itemSizeTableDetailFlag": false,
			"forbidExclusiveCal": false,
			"rewardShareFlag": false,
			"updateTime": 1576742994144,
			"showCommentEntrance": true,
			"pieceUnitDesc": "件",
			"specialPromTag": "",
			"counterPrice": 299,
			"categoryL2Id": 0,
			"retailPrice": 199,
			"primarySkuPreSellPrice": 0,
			"preLimitFlag": 0,
			"itemPromValid": true,
			"promTag": "暖冬特惠",
			"source": 0,
			"points": 0,
			"primarySkuPreSellStatus": 0,
			"extraServiceFlag": 0,
			"flashPageLink": "",
			"autoOnsaleTimeLeft": 0,
			"innerData": {},
			"saleCenterSkuId": 0,
			"pointsStatus": 0,
			"extraPrice": "",
			"colorNum": 4,
			"showTime": 0,
			"autoOnsaleTime": 0,
			"preemptionStatus": 1,
			"isPreemption": 0,
			"zcSearchFlag": false,
			"name": "不扎脖子的柔软，男式可机洗高领羊毛衫",
			"appExclusiveFlag": false,
			"itemType": 1,
			"listPicUrl": "https://yanxuan-item.nosdn.127.net/bb4c991ad08c0b061c083cd7b2f2dd08.png",
			"pointsPrice": 0,
			"simpleDesc": "轻薄打底告别臃肿",
			"seoTitle": "",
			"newItemFlag": false,
			"buttonType": 0,
			"primarySkuId": 1623203,
			"displaySkuId": 1623197,
			"productPlace": "",
			"itemSizeTableFlag": false
		},
		{
			"count": 5,
			"selected": true,
			"promId": 0,
			"showPoints": false,
			"itemTagList": [{
				"itemId": 1565039,
				"tagId": 128111157,
				"freshmanExclusive": false,
				"name": "暖冬特惠",
				"subType": 204,
				"forbidJump": false,
				"type": 2
			}],
			"rank": 1,
			"id": 1565039,
			"sellVolume": 3358,
			"primaryPicUrl": "https://yanxuan-item.nosdn.127.net/042751e356790c6376101dd803e197a3.png",
			"soldOut": false,
			"sortFlag": 0,
			"commentCount": 0,
			"onSaleTime": 1539929555669,
			"picMode": 1,
			"commentWithPicCount": 0,
			"underShelf": false,
			"status": 2,
			"couponConflict": true,
			"forbiddenBuy": false,
			"promotionDesc": "暖冬特惠",
			"limitedFlag": 204,
			"pieceNum": 0,
			"itemSizeTableDetailFlag": false,
			"forbidExclusiveCal": false,
			"rewardShareFlag": false,
			"updateTime": 1575512350633,
			"showCommentEntrance": true,
			"pieceUnitDesc": "件",
			"specialPromTag": "",
			"counterPrice": 799,
			"categoryL2Id": 0,
			"retailPrice": 623,
			"primarySkuPreSellPrice": 0,
			"preLimitFlag": 0,
			"itemPromValid": true,
			"promTag": "暖冬特惠",
			"source": 0,
			"points": 0,
			"primarySkuPreSellStatus": 0,
			"extraServiceFlag": 0,
			"flashPageLink": "",
			"autoOnsaleTimeLeft": 0,
			"innerData": {},
			"saleCenterSkuId": 0,
			"pointsStatus": 0,
			"extraPrice": "",
			"colorNum": 3,
			"showTime": 0,
			"autoOnsaleTime": 0,
			"preemptionStatus": 1,
			"isPreemption": 0,
			"zcSearchFlag": false,
			"name": "持久的细腻感，男式V领纯小山羊绒衫",
			"appExclusiveFlag": false,
			"itemType": 1,
			"listPicUrl": "https://yanxuan-item.nosdn.127.net/302fa7aed7056365dd94b1a5de355767.png",
			"pointsPrice": 0,
			"simpleDesc": "山羊一生只得一次的羊羔羊绒",
			"seoTitle": "",
			"newItemFlag": false,
			"buttonType": 0,
			"primarySkuId": 1629018,
			"displaySkuId": 300000141,
			"productPlace": "",
			"itemSizeTableFlag": false
		}
	]
}
const mutations = {
	changeCartListMutation(state, cart) {
		let cartL = state.cartList.find(item => item.id === cart.id)
		if (cartL) {
			cartL.count += 1
		} else {
			Vue.set(cart, "count", 1)
			Vue.set(cart, "selected", true)
			state.cartList.push(cart)
		}
	},
	changeCartNumMutation(state, { flag, index }) {
		if (flag) {
			state.cartList[index].count += 1
		} else {
			if (state.cartList[index].count > 1) {
				state.cartList[index].count -= 1
			} else {
				wx.showModal({
					title: "确认",
					content: "是否删除该商品",
					success(res) {
						if (res.confirm) {
							state.cartList.splice(index,1)
						}
					}
				})
			}
		}
	},
	changeSelectedMutation(state,index){
		state.cartList[index].selected = !state.cartList[index].selected
	},
	changeAllSelectedMutation(state,flag){
		state.cartList = state.cartList.map(item =>{ 
			item.selected = flag
			return item
		})
	}
}

const actions = {

}

const getters = {
	isAllSelected(state){
		return state.cartList.every(item=>item.selected)
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}
