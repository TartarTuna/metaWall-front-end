import { createRouter, createWebHistory } from 'vue-router'
import { setCookieToke } from '../compatibles/method.js'
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

// 處理第三方轉址情況，先陽春寫法測試
router.beforeEach((to, from, next) => {
  const { query } = to
  if (query.token) {
    const token = query.token
    setCookieToke(token)
    return next({ name: 'wall' })
  }
  next()
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
