import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import main from '../views/main'
import initialhome from '../views/initialhome'
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: home
  },
  {
    path: '/main',
    name: 'main',
    component: main,
    children: [
      { path: '/', component: initialhome },
      { path: '/initial/home', component: initialhome }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
