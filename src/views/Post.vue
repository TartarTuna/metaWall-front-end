<template>
  <Navbar />
  <!-- ---main--- -->
  <section class="container mt-7 px-lg-12 mb-12">
    <div class="row">
      <!-- ---left main--- -->
      <div class="col-lg-7">
        <div class="card mb-5 rounded-0 border-2 titleDashBoard">
          <h2 class="text-center fw-bold py-3 mb-0 fs-5">張貼動態</h2>
        </div>
        <div
          class="card border border-dark border-2 shadow-pushcard border8px p-5"
        >
          <form @submit.prevent>
            <div class="form-group mb-3">
              <label for="content fw-bold">貼文內容</label>
              <textarea
                v-model="postContent"
                class="form-control border border-dark border-2"
                type="text"
                id="content"
                rows="5"
                placeholder="輸入您的貼文內容"
              ></textarea>
            </div>
            <div
              v-if="errMsgContent && !postContent"
              class="my-0 text-center fs-7 text-danger"
            >
              {{ '請填寫貼文內容' }}
            </div>
            <div class="mb-3">
              <input
                ref="inputFile"
                type="file"
                class="d-none"
                placeholder="上傳圖片"
                @change="imageHandler"
              />
              <button
                class="btn btn-dark border"
                style="border-radius: 8px"
                @click="$refs.inputFile.click()"
              >
                上傳圖片
              </button>
            </div>
            <img
              v-if="imageObj.src"
              :src="imageObj.src"
              alt="photo"
              class="w-100 img-fluid mb-2"
            />
            <div v-if="errMessage" class="my-0 text-center fs-7 text-danger">
              {{ errMessage }}
            </div>
            <!-- 圖片檔案過大，僅限 1mb 以下檔案 圖片格式錯誤，僅限 JPG、PNG 圖片 -->
            <div class="d-grid gap-2 col-8 mx-auto mt-5">
              <button
                class="btn btn-gray-dark border border-dark border-2 fw-bold py-3 border8px"
                type="submit"
                @click="addNewPost"
              >
                <p class="mb-0" v-if="!isLoading">送出貼文</p>
                <div
                  v-if="isLoading"
                  class="spinner-border text-black"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- ---right menu--- -->
      <RightBar />
    </div>
  </section>
  <!-- -----phone-menu--- -->
  <PhoneMenu />
</template>

<script setup>
import { ref } from 'vue'
import { postImage } from '@/apis/image'
import { addPost } from '@/apis/post'
import Navbar from '@/components/Navbar.vue'
import RightBar from '@/components/RightBar.vue'
import PhoneMenu from '@/components/PhoneMenu.vue'

const isLoading = ref(false)
const postContent = ref(null)
const inputFile = ref(null)
const imgType = ref(['jpg', 'jpeg', 'JPG', 'JPEG', 'png', 'PNG'])
const errMessage = ref(null)
const errMsgContent = ref(false)
const imageObj = ref({
  src: '',
  imgFile: null
})

/**
 * 變更圖片
 * @param {file} e file instance
 */
const imageHandler = (e) => {
  errMessage.value = ''
  const file = e.target.files[0]
  const type = file.type.split('/')[1]

  if (!testImgType(type)) {
    errMessage.value = '檔案格式錯誤，僅限上傳 jpg、jpeg 與 png 格式'
    inputFile.value = ''
    return
  }
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    imageObj.value.src = reader.result
    imageObj.value.imgFile = file
  }
}

const testImgType = (type) => {
  if (!imgType.value.includes(type)) {
    return false
  } else {
    return true
  }
}

/**
 * 上傳圖片
 * @returns {promise} 圖片網址
 */
const uploadImg = async () => {
  try {
    const formData = new FormData()
    formData.append('image', imageObj.value.imgFile)
    const {
      data: { imageUrl = '' }
    } = await postImage(formData)
    return imageUrl
  } catch (e) {
    return Promise.reject(e)
  }
}

/**
 * 新增貼文
 */
const addNewPost = async () => {
  isLoading.value = true
  errMsgContent.value = false
  errMessage.value = ''
  if (!postContent.value) {
    errMsgContent.value = true
    isLoading.value = false
    return
  }
  try {
    let link = ''
    if (imageObj.value.imgFile) {
      link = await uploadImg()
    }
    const payload = { content: postContent.value }
    if (link) payload.image = link

    await addPost(payload)
    alert('新增成功')
    postContent.value = null
    inputFile.value = ''
    imageObj.value.imgFile = null
    imageObj.value.src = null
  } catch (err) {
    console.log(err)
    alert(err.message)
  } finally {
    isLoading.value = false
  }
}
</script>
