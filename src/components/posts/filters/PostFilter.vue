<template>
  <div class="row">
    <div class="col-lg-4 mb-md-2 mb-3">
      <select
        :value="props.sort"
        id="newPost"
        class="form-select fw-bold border-2 w-100"
        @change="changeSortHandler"
      >
        <option value="" disabled>請選擇</option>
        <option value="desc">最新貼文</option>
        <option value="asc">貼文發佈時間</option>
      </select>
    </div>
    <div class="col-lg-8">
      <div class="input-group mb-3">
        <input
          v-model="keyword"
          type="text"
          class="form-control fw-bold border-2 border-end-0"
          placeholder="搜尋貼文"
          aria-label="search"
          aria-describedby="button-search"
          @keyup.enter="emit('change-keyword', keyword)"
        />
        <Button
          use-icon
          :loading="props.loading"
          class="btn btn-primary border-2 border border-dark rounded-0 d-flex align-items-center"
          type="button"
          id="button-search"
          @click="emit('change-keyword', keyword)"
        >
          <span v-if="!props.loading" class="material-icons-outlined">
            search
          </span>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  sort: {
    type: String,
    default: 'desc'
  }
})
const emit = defineEmits(['change-sort', 'change-keyword'])
const keyword = ref('')

/**
 * 切換排序事件
 * @param {object} e
 */
const changeSortHandler = (e) => {
  emit('change-sort', e.target.value)
}
</script>
