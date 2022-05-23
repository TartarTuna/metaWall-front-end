<template>
  <Navbar />
  <!-- ---main--- -->
  <section class="container mt-7 px-lg-12 mb-12">
    <div class="row">
      <!-- ---left main--- -->
      <div class="col-lg-7">
        <div class="card mb-5 rounded-0 border-2 titleDashBoard">
          <h2 class="text-center fw-bold py-3 mb-0 fs-5">修改個人資料</h2>
        </div>
        <div class="card bg-white border-0 shadow-pushcard border8px">
          <div class="card-header bg-white border-0">
            <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
              <li
                v-for="item in tabs"
                :key="item.id"
                class="nav-item border border-dark border-2 border-bottom-0 rounded"
                role="presentation"
              >
                <button
                  class="nav-link nav-tabs px-4"
                  :class="{ active: item.id === tab }"
                  data-bs-toggle="tab"
                  :data-bs-target="`#${item.id}`"
                  type="button"
                  role="tab"
                >
                  {{ item.title }}
                </button>
              </li>
            </ul>
          </div>
          <div
            class="tab-content border border-dark border-2 border8px"
            id="myTabContent"
          >
            <!-- ---fix people--- -->
            <div
              class="tab-pane fade show active"
              id="name-edit"
              role="tabpanel"
              aria-labelledby="name-edit"
            >
              <div class="card-body px-10 py-5">
                <section class="row d-flex justify-content-center">
                  <form class="row px-lg-5 g-3" @submit.prevent>
                    <div>
                      <img
                        :src="nicknameForm.photo"
                        alt="user"
                        class="img-fluid w-25 mx-auto mb-4 d-block"
                      />
                    </div>
                    <div class="col-12 d-flex justify-content-center">
                      <div class="w-100">
                        <label class="form-label fw-bold">上傳大頭照</label>
                        <input
                          ref="inputFile"
                          type="file"
                          class="form-control"
                          @change="changePhotoHandler"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <label for="userphoto" class="form-label fw-bold"
                        >暱稱</label
                      >
                      <input
                        v-model="nicknameForm.name"
                        type="text"
                        class="form-control border-dark border-2 p-2 ps-3"
                        id="userphoto"
                        placeholder="邊緣小杰"
                      />
                    </div>
                    <div class="col-12 mb-3 d-flex">
                      <div
                        v-for="item in genders"
                        :key="item.id"
                        class="form-check me-3"
                      >
                        <input
                          v-model="nicknameForm.gender"
                          class="form-check-input"
                          type="radio"
                          name="gender"
                          :id="item.id"
                          :value="item.id"
                          :checked="nicknameForm.gender === item.id"
                        />
                        <label class="form-check-label" :for="item.id">
                          {{ item.title }}
                        </label>
                      </div>
                    </div>
                    <div
                      v-if="nicknameError"
                      class="my-0 text-center fs-7 text-danger"
                    >
                      {{ nicknameError }}
                    </div>
                    <!-- 1.圖片寬高比必需為 1:1，請重新輸入 2. 解析度寬度至少 300像素以上，請重新輸入 -->
                    <div class="d-grid">
                      <Button
                        class="btn btn-primary btn btn-primary border border-dark border-2 shadow-black border8px py-3 fw-bold"
                        type="submit"
                        :loading="loading"
                        @click="submitProfileHandler"
                      >
                        送出更新
                      </Button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
            <!-- ---fix password--- -->
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div class="card-body px-10 py-5">
                <section class="row d-flex justify-content-center">
                  <form class="row px-lg-5 g-3" @submit.prevent>
                    <div class="col-12">
                      <label for="userpPassword" class="form-label fw-bold"
                        >新密碼</label
                      >
                      <input
                        v-model="passwordForm.password"
                        type="password"
                        class="form-control border-dark border-2 p-2 ps-3"
                        id="userpPassword"
                        placeholder="新密碼"
                      />
                    </div>
                    <div class="col-12 mb-3">
                      <label for="userpPassword1" class="form-label fw-bold"
                        >再次輸入</label
                      >
                      <input
                        v-model="passwordForm.confirmPassword"
                        type="password"
                        class="form-control border-dark border-2 p-2 ps-3"
                        id="userpPassword1"
                        placeholder="再次輸入"
                      />
                    </div>
                    <div
                      v-if="passwordError"
                      class="my-0 text-center fs-7 text-danger"
                    >
                      {{ passwordError }}
                    </div>
                    <div class="d-grid">
                      <Button
                        :loading="loading"
                        class="btn btn-primary btn btn-primary border border-dark border-2 shadow-black border8px py-3 fw-bold"
                        type="submit"
                        @click="submitPasswordHandler"
                      >
                        送出更新
                      </Button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
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
import { user } from '@/compatibles/data'
import { patchUserProfile, patchUserPassword } from '@/apis/user'
import { postImage } from '@/apis/image'

const loading = ref(false)
const tab = ref('name-edit')
const nicknameError = ref('')
const passwordError = ref('')
const tabs = [
  { id: 'name-edit', title: '暱稱修改' },
  { id: 'profile', title: '重設密碼' }
]
const genders = [
  { id: 'male', title: '男性' },
  { id: 'female', title: '女性' }
]
const nicknameForm = ref({
  photo: '',
  name: '',
  gender: 'male',
  photoFile: null
})
const passwordForm = ref({
  password: '',
  confirmPassword: ''
})
const inputFile = ref(null)

nicknameForm.value.photo = user.value.photo
nicknameForm.value.name = user.value.name
nicknameForm.value.gender = user.value.gender

/**
 * 變更大頭照事件
 * @param {file} e file instance
 */
const changePhotoHandler = (e) => {
  const file = e.target.files.item(0)
  nicknameError.value = ''
  if (!['image/jpeg', 'image/png'].includes(file.type)) {
    nicknameError.value = '檔案格式錯誤，僅限上傳 jpg、jpeg 與 png 格式'
    inputFile.value.value = ''
    return
  }
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => {
    nicknameForm.value.photo = reader.result
    nicknameForm.value.photoFile = file
  }
}
/**
 * 上傳會員頭像
 * @returns {promise} 圖片網址
 */
const uploadPhoto = async () => {
  try {
    const formData = new FormData()
    formData.append('image', nicknameForm.value.photoFile)
    const {
      data: { imageUrl = '' }
    } = await postImage(formData)
    return imageUrl
  } catch (e) {
    return Promise.reject(e)
  }
}
/**
 * 送出修改的會員資訊
 */
const submitProfileHandler = async () => {
  loading.value = true
  nicknameError.value = ''
  try {
    let link = ''
    if (nicknameForm.value.photoFile) {
      link = await uploadPhoto()
    }
    const { name, gender } = nicknameForm.value
    const payload = { name, gender }
    if (link) payload.photo = link

    await patchUserProfile(payload)
    alert('更新成功')
    if (link) user.value.photo = link
    user.value.name = name
    user.value.gender = gender
    nicknameError.value = ''
    inputFile.value.value = ''
    nicknameForm.value.photoFile = null
  } catch (e) {
    nicknameError.value = e.message
  } finally {
    loading.value = false
  }
}
/**
 * 送出修改的會員密碼
 */
const submitPasswordHandler = async () => {
  loading.value = true
  passwordError.value = ''
  try {
    const { password, confirmPassword } = passwordForm.value
    await patchUserPassword({ password, confirmPassword })
    alert('更新成功')
    passwordError.value = ''
    passwordForm.value.password = ''
    passwordForm.value.confirmPassword = ''
  } catch (e) {
    passwordError.value = e.message
  } finally {
    loading.value = false
  }
}
</script>
