// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import PersonalArea from './components/PersonalArea'
import FormToFill from './components/FormToFill'
import SuccessfulPayment from './components/SuccessfulPayment'
import History from './components/History'

const route = [
   { path: '/personalArea', component: PersonalArea},
   { path: '/formToFill', component: FormToFill},
   { path: '/successfulPayment', component: SuccessfulPayment},
   { path: '/history', component: History}
]

const router = new VueRouter({
  routes: route
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
