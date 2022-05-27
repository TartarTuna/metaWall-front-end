<template>
  <div class="general-layout">
    <div
      v-for="snackBar in snackBars"
      :key="snackBar.value"
    >
      {{ snackBar.value }}
    </div>
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { user } from '@/compatibles/data'
import { io } from 'socket.io-client'
const socket = io('http://localhost:3000')

const snackBars = ref([])

/**
 * socket
 */
socket.on('newComment', (data) => {
  console.log(data, 'newComment')
  console.log(user, 'user')
  console.log(data.postUserId)
  if (user.value._id === data.postUserId && user.value._id !== data.user) {
    snackBars.value.push({
      value: '你有一則新留言喔',
      ...data
    })
  } else if (
    data.commentUserIds.includes(user.value._id) &&
    user.value._id !== data.postUserId
  ) {
    snackBars.value.push({
      value: '你留言的文章有一則新留言喔',
      ...data
    })
  }
  // snackBars.push();
})
</script>
