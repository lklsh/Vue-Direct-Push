// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
Vue.config.productionTip = false
// createApp(App).use(store).use(router).mount('#app')
new Vue({
    render: h => h(App),
    router
}).$mount('#app')