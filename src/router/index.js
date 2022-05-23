import { createRouter, createWebHashHistory } from 'vue-router'
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
    path: '/personal',
    name: 'personal',
    component: () => import('@/views/Personal.vue')
  },
  {
    path: '/follow',
    name: 'follow',
    component: () => import('@/views/Follow.vue')
  },
  {
    path: '/like',
    name: 'like',
    component: () => import('@/views/Like.vue')
  },
  {
    path: '/post',
    name: 'post',
    component: () => import('@/views/Post.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile.vue'),
    beforeEnter: guard.beforeEnter.checkAuth
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return {
      top: 0
    }
  },
  //   linkActiveClass: 'a-active',
  routes
})
export default router

// 子畫面懶人包，有需要可以這邊直接複製XD
// children: [
//   {
//     path: '',
//     name: 'Wall',
//     component: () => import('@/components/navbar.vue'),
//   },
// ],
