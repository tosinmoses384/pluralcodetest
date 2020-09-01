import Vue from 'vue'
import VueRouter from 'vue-router'

// %%%%%%%%%%%%%%%%%%%
// I CREATED THESE BEFORE
// %%%%%%%%%%%%%%%%%%%%
import home from '../views/home'
import main from '../views/main'
import initialhome from '../views/initialhome'

// %%%%%%%%%%%%
//  NEW PAGES
// %%%%%%%%%%%
import login from '../views/login'
import verifyticketnumber from '../views/verifyticketnumber'
import paymenthistory from '../views/paymenthistory'
import settings from '../views/settings'
import passengers from '../views/passengers'
import adddriver from '../views/adddriver'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '',
//     name: 'home',
//     component: home
//   },
//   {
//     path: '/main',
//     name: 'main',
//     component: main,
//     children: [
//       { path: '/', component: initialhome },
//       { path: '/initial/home', component: initialhome }
//     ]
//   }
// ]

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/verifyticketnumber',
    name: 'verifyticketnumber',
    component: verifyticketnumber
  },
  {
    path: '/paymenthistory',
    name: 'paymenthistory',
    component: paymenthistory
  },
  {
    path: '/settings',
    name: 'settings',
    component: settings
  },
  {
    path: '/passengers',
    name: 'passengers',
    component: passengers
  },
  {
    path: '/adddriver',
    name: 'adddriver',
    component: adddriver
  },
  {
    path: '/initialhome',
    name: 'initialhome',
    component: initialhome
  },
  {
    path: '/main',
    name: 'main',
    component: main
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
