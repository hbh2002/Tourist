import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)


export default new Vuex.Store({
	state,
	mutations 
})

/*
	Vue.use() 使用组件
	//抛出Vuex对象
	export default new Vuex.store({
	state: { //全局变量

	}
})
*/