import requert from '../../utils/request.js'
const state ={
	indexData : {}
}

const mutations ={
	changeIndexDataMutation(state , indexData){
		state.indexData = indexData
	}
}

const actions = {
	async getIndexData({commit}){
		// let indexData = await requert('/api/getIndexData') //H5
		let indexData = await requert('/getIndexData')
		commit('changeIndexDataMutation',indexData)
	}
}

export default {
	state,
	mutations,
	actions
}