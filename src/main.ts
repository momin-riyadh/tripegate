import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Element from 'element-ui'
import router from './router'

Vue.config.productionTip = false
Vue.use(Element);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
