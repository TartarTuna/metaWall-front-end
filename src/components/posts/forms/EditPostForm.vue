<template>
  <form @submit.prevent>
    <div class="form-group mb-3">
      <label for="content fw-bold">修改貼文內容</label>
      <textarea
        v-model="content"
        class="form-control border border-dark border-2"
        type="text"
        id="content"
        rows="5"
        placeholder="輸入您的貼文內容"
      ></textarea>
    </div>
    <div class="form-group mb-3">
      <label for="content fw-bold">修改tag</label>
      <textarea
        v-model="tag"
        class="form-control border border-dark border-2"
        type="text"
        id="content"
        rows="5"
        placeholder="修改tag"
      ></textarea>
    </div>
    <div class="input-group mb-3">
      <input
        ref="inputFile"
        type="file"
        id="edit-post-file"
        style="display: none"
        @change="changeImageHandler"
      />
      <label
        for="edit-post-file"
        class="btn btn-dark border"
        style="border-radius: 8px"
      >
        上傳圖片
      </label>
    </div>
    <img v-if="image" :src="image" alt="photo1" class="w-100 img-fluid mb-2" />
    <div v-if="error" class="my-0 text-center fs-7 text-danger">
      {{ error }}
    </div>
    <div class="d-grid gap-2 col-2 ms-auto mt-5">
      <Button
        :loading="loading"
        type="submit"
        class="btn btn-primary border border-dark border-2 fw-bold py-2 border8px"
        style="white-space: nowrap"
        @click="submitHandler"
      >
        <template v-if="!loading">儲存</template>
      </Button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { postImage } from '@/apis/image'
import { patchPost } from '@/apis/post'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})
const loading = ref(false)
const content = ref('')
const image = ref('')
const error = ref('')
const tag = ref([])
const imageFile = ref(null)
const inputFile = ref(null)
const emit = defineEmits(['edit-post'])

content.value = props.post.content
image.value = props.post.image
tag.value = [...props.post.tag]

/**
 * 變更貼文圖片事件
 * @param {file} e file instance
 */
const changeImageHandler = (e) => {
  const file = e.target.files.item(0)
  error.value = ''
  if (!['image/jpeg', 'image/png'].includes(file.type)) {
    error.value = '檔案格式錯誤，僅限上傳 jpg、jpeg 與 png 格式'
    inputFile.value.value = ''
    return
  }
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    image.value = reader.result
    imageFile.value = file
  }
}
/**
 * 上傳會員頭像
 * @returns {promise} 圖片網址
 */
const uploadImage = async () => {
  try {
    const formData = new FormData()
    formData.append('image', imageFile.value)
    const {
      data: { imageUrl = '' }
    } = await postImage(formData)
    return imageUrl
  } catch (e) {
    return Promise.reject(e)
  }
}
/**
 * 送出修改的貼文資訊
 */
const submitHandler = async () => {
  loading.value = true
  try {
    let link = ''
    if (imageFile.value) {
      link = await uploadImage()
    }
    const payload = { content: content.value }
    if (link) payload.image = link

    const { data } = await patchPost(props.post._id, payload)
    alert('更新成功')
    emit('edit-post', {
      content: data.content,
      image: data.image,
      tag: data.tag
    })
    error.value = ''
    inputFile.value.value = ''
    imageFile.value = null
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}
</script>
