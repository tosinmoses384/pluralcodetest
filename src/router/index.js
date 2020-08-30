import Vue from 'vue'
import VueRouter from 'vue-router'

// %%%%%%%%%%%%%%%%%%%
// NOT NEEDED FOR TEST
// %%%%%%%%%%%%%%%%%%%%
import home from '../views/home'
import main from '../views/main'
import initialhome from '../views/initialhome'

// %%%%%%%%%%%%
//  LOGIN PAGE
// %%%%%%%%%%%
import login from '../views/login'

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
