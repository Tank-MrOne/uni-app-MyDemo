import Vue from 'vue'
import App from './App'
import store from './store'

// 关闭Vue中的提示
Vue.config.productionTip = false

// 用来声明app组件的类型，代表整个应用
App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
