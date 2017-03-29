// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Main from './components/Main'
import router from './router'
import store from './vuex'
import localforage from 'localforage'

localforage.config({
  driver: localforage.LOCALSTORAGE, // Force WebSQL; same as using setDriver()
  name: 'freshii',
  storeName: 'storage' // Should be alphanumeric, with underscores.
})

// Import styles if style-loader is available
// You have to manually add css files if lines below are not working
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Debug Mode
Vue.config.debug = true
Vue.config.productionTip = false

// Globally register components
Vue.use(BootstrapVue)

// Verity token exists
store.dispatch('auth/setToken')
  .then(() => {
    store.dispatch('auth/fechUser').catch(() => {
      store.dispatch('auth/clearAuth')
      router.replace({ name: 'auth.login' })
    })
  })
  .catch(() => {
    store.dispatch('auth/clearAuth')
  })

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(Main)
})
