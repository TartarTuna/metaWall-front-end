import { createRouter, createWebHistory } from 'vue-router'
import guard from './navigation-guard'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/wall',
    name: 'wall',
    component: () => import('@/views/Wall.vue'),
    beforeEnter: guard.beforeEnter.checkAuth
  },
  {
    path: '/personal/:userId',
    name: 'personal',
    component: () => import('@/views/Personal.vue'),
    props: true,
    beforeEnter: guard.beforeEnter.checkUser
  },
  {
    path: '/follow',
    name: 'follow',
    component: () => import('@/views/Follow.vue'),
    beforeEnter: guard.beforeEnter.checkAuth
  },
  {
    path: '/like',
    name: 'like',
    component: () => import('@/views/Like.vue'),
    beforeEnter: guard.beforeEnter.checkAuth
  },
  {
    path: '/singlePost/:userId/:postId',
    name: 'singlePost',
    component: () => import('@/views/SinglePost.vue'),
    props: true,
    beforeEnter: guard.beforeEnter.checkUser
  },
  {
    path: '/post',
    name: 'post',
    component: () => import('@/views/Post.vue'),
    beforeEnter: guard.beforeEnter.checkAuth
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile.vue'),
    beforeEnter: guard.beforeEnter.checkAuth
  },
  {
    path: '/oauth',
    redirect: guard.beforeEnter.checkThirdParty
  }
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   component: () => import('@/pages/NotFound.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLISH_PATH),
  scrollBehavior() {
    return {
      top: 0
    }
  },
  //   linkActiveClass: 'a-active',
  routes
})

export default router
