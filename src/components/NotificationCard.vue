<template>
  <div class="card border-2 shadow-pushcard border8px">
    <router-link
      class="card-body py-2"
      :to="to"
    >
      <p class="card-text text-muted text-center">
        {{ text }}
      </p>
    </router-link>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  to: {
    type: Object,
    default: null
  },
  text: {
    type: String,
    default: ''
  }
})

const { to, text } = toRefs(props)
</script>
