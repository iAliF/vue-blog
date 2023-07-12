import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from "@/store";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView.vue'),
    meta: {loginRequired: true}
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: {loginRedirect: true}
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
    meta: {loginRedirect: true}
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/LogoutView.vue'),
    meta: {loginRequired: true}
  },
  {
    path: '/article/:slug',
    name: 'article',
    component: () => import('../views/ArticleView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.loginRequired) && !store.state.isAuthenticated) {
    next("/login")
  } else if (to.matched.some(record => record.meta.loginRedirect) && store.state.isAuthenticated) {
    next("/profile")
  } else {
    next()
  }
})

export default router
