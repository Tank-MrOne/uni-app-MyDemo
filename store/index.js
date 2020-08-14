import Vue from 'vue'
import Vuex from 'vuex'
import indexModule from './modules/index.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		indexModule
	}
})
export default store