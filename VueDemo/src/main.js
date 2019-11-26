// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//1.引入组件 import Vue from 'vue'
//2. 引入app.vue用它的内容来替换div id = app import App from './App'
//3. 构建vue实例


import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入mockjs
require('./mock.js')

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})

Vue.filter('getYMD', function(input) {
	return input.split(' ')[0];
})
