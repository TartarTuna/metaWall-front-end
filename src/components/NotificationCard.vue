<template>
  <div
    class="card border-2 shadow-pushcard border4px"
    style="width: 130px"
  >
    <router-link
      class="card-body py-1 px-1"
      :to="to"
    >
      <p
        class="card-text text-muted text-center"
        style="font-size: 0.75rem"
      >
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
