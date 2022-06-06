<template>
  <div class="position-fixed" style="bottom: 100px; right: 20px; z-index: 100">
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
import { ref } from 'vue'
import { io } from 'socket.io-client'
import { user } from '@/compatibles/data'
import NotificationCard from '@/components/NotificationCard.vue'

const snackBars = ref([])

const socket = io(import.meta.env.VITE_API_URL)
/**
 * socket
 */
socket.on('newComment', (data) => {
  const { _id, postId, postUserId, commentUserIds, user: commentUserId } = data
  /** @const {boolean} 我的貼文是否有新留言 */
  const isMyPostHasComment =
    user.value._id === postUserId && user.value._id !== commentUserId
  /** @const {boolean} 我留言的貼文是否有新留言 */
  const isMyCommentHasComment =
    commentUserIds.includes(user.value._id) &&
    user.value._id !== postUserId &&
    user.value._id !== commentUserId

  if (isMyPostHasComment) {
    snackBars.value.push({
      value: '你有一則新留言喔',
      to: {
        name: 'singlePost',
        params: { userId: postUserId, postId }
      },
      ...data
    })
  } else if (isMyCommentHasComment) {
    snackBars.value.push({
      value: '你留言的文章有一則新留言喔',
      to: {
        name: 'singlePost',
        params: { userId: postUserId, postId }
      },
      ...data
    })
  }

  setTimeout(() => {
    snackBars.value.splice(
      snackBars.value.findIndex((item) => item._id === _id),
      1
    )
  }, 3000)
})
</script>

<style lang="scss">
@import '@/assets/scss/all.scss';
</style>
