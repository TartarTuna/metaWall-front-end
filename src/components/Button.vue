<script setup>
const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button class="btn border-dark border-2 fw-bold">
    <slot></slot>
    <span
      :class="props.loading ? 'spinner-border spinner-border-sm' : 'none'"
      role="status"
      aria-hidden="true"
    ></span>
  </button>
</template>
