import Vue from 'vue'
import Vuex from 'vuex'
import indexModule from './modules/index.js'
import cartModule from './modules/cart.js'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		indexModule,
		cartModule
	}
})
export default store