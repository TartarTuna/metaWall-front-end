<template>
  <div
    class="position-fixed"
    style="bottom: 100px; right: 20px; z-index: 100"
  >
    <NotificationCard
      v-for="(snackBar, snackBarIndex) in snackBars"
      :key="snackBarIndex"
      :class="{ 'mt-2': snackBarIndex > 0 }"
      :text="snackBar.value"
      :to="snackBar.to"
    >
    </NotificationCard>
  </div>
  <router-view />
</template>

<script setup>
import { ref, watch } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import navbar from '@/components/navbar.vue'
import NotificationCard from '@/components/NotificationCard.vue'
import { user } from '@/compatibles/data'
import { io } from 'socket.io-client'

const snackBars = ref([])

watch(user, () => {
  if (user && user.value._id) {
    const socket = io('https://metawall-06.herokuapp.com') // 要記得改喔！後端網址
    /**
     * socket
     */
    socket.on('newComment', (data) => {
      if (user.value._id === data.postUserId && user.value._id !== data.user) {
        snackBars.value.push({
          value: '你有一則新留言喔',
          to: { name: 'wall', query: { post: data.postId, comment: data._id } },
          ...data
        })
      } else if (
        data.commentUserIds.includes(user.value._id) &&
        user.value._id !== data.postUserId &&
        user.value._id !== data.user
      ) {
        snackBars.value.push({
          value: '你留言的文章有一則新留言喔',
          to: { name: 'wall', query: { post: data.postId, comment: data._id } },
          ...data
        })
      }
      // close
      clearTimeout(null)
      setTimeout(() => {
        snackBars.value.splice(
          snackBars.value.findIndex((item) => item._id === data._id),
          1
        )
      }, 3000)
    })
  }
})
</script>

<style lang="scss">
@import '@/assets/scss/all.scss';
</style>
