import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import auth from '../components/blocks/user_account/Auth.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Article',
    name: 'Article',
    props: true,
    meta: {layout: 'Empty'},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Portfolio" */ '../views/Article.vue')
    
  },
  {
    path: '/contact',
    name: 'contact',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {layout: 'Empty'},
    component: () => import(/* webpackChunkName: "Portfolio" */ '../views/Contact.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'Main'},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Portfolio" */ '../components/blocks/user_form/Login.vue')
    
  },
  {
    path: '/registeristraion',
    name: 'registeristraion',
    meta: {layout: 'Main'},
    component: () => import('../components/blocks/user_form/RegisterVue.vue')
    
  },
  {
    path: '/auth',
    name: 'auth',
    meta: {layout: 'Main'},
    component: auth,

  },
  {
    path: '/admin_panel',
    name: 'admin_panel',
    props: true,
    meta: {layout: 'Main'},
    component: () =>  import('@/components/blocks/user_account/admin/Admin_panel.vue')
  },
  {
    // page 404
    path: '*',
    component: () => import(/* webpackChunkName: "Portfolio" */ '../views/404.vue')
    
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
