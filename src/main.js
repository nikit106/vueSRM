import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import Loader from '@/components/app/Loader'

import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)



firebase.initializeApp({
  apiKey: "AIzaSyDITJfDgEW4jFWqykJgFvxwim_725IJUrk",
  authDomain: "vuesrm.firebaseapp.com",
  databaseURL: "https://vuesrm.firebaseio.com",
  projectId: "vuesrm",
  storageBucket: "vuesrm.appspot.com",
  messagingSenderId: "940321209047",
  appId: "1:940321209047:web:ad6db139e2123b51da0e92",
  measurementId: "G-9Y0E1LWXKH"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})




