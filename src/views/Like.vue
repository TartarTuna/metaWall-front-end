<template>
  <Navbar />
  <!-- ---main--- -->
  <section class="container mt-7 px-lg-12 mb-12">
    <div class="row">
      <!-- ---left main--- -->
      <div class="col-lg-7">
        <div class="card mb-5 rounded-0 border-2 titleDashBoard">
          <h2 class="text-center fw-bold py-3 mb-0 fs-5">我按讚的貼文</h2>
        </div>
        <div v-if="isLoading" class="text-center" style="line-height: 88px">
          載入中...
        </div>
        <p
          v-else-if="!likePosts.length && !isLoading"
          class="text-center"
          style="line-height: 88px"
        >
          尚無按讚的貼文
        </p>
        <ul v-else class="ps-0">
          <li
            v-for="(item, index) in likePosts"
            :key="index"
            class="card h-100 p-3 p-xxl-4 mb-3 border-2 shadow-pushcard border8px"
          >
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img
                  class="me-3 img-fluid"
                  :class="$style.avatar"
                  :src="correctImageUrl(item.user.photo)"
                  alt="user2"
                />
                <div class="d-flex flex-column mt-2">
                  <router-link
                    :to="{
                      name: 'personal',
                      params: { userId: item.user._id }
                    }"
                    class="mb-0 fw-bold"
                  >
                    {{ item.user.name }}
                  </router-link>
                  <small class="text-muted">
                    發文時間：{{ dayFormat(item.createdAt) }}
                  </small>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <button
                  type="button"
                  class="btn d-flex flex-column d-flex align-items-center"
                  @click="unLike(item._id)"
                >
                  <span
                    class="material-icons material-icons-outlined fs-5 text-primary mb-1"
                  >
                    thumb_up
                  </span>
                  <span class="fs-7 fw-bold text-nowrap">取消</span>
                </button>
                <router-link
                  :to="{
                    name: 'singlePost',
                    params: { userId: item.user._id, postId: item._id }
                  }"
                >
                  <button
                    type="button"
                    class="btn d-flex flex-column d-flex align-items-center"
                  >
                    <span
                      class="material-icons arrow fs-6 fw-bold border border-2 border-dark rounded-circle mb-1"
                    >
                      east
                    </span>
                    <span class="fs-7 fw-bold text-nowrap">查看</span>
                  </button>
                </router-link>
              </div>
            </div>
          </li>
        </ul>
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
import { getLikePosts, patchUnlike } from '@/apis/like'
import { dayFormat } from '@/plugins/day'
import { correctImageUrl } from '@/compatibles/image-url'
import Navbar from '@/components/Navbar.vue'
import RightBar from '@/components/RightBar.vue'
import PhoneMenu from '@/components/PhoneMenu.vue'

const isLoading = ref(false)
const likePosts = ref([])

/**
 * 初始化畫面的值
 */
const initData = async () => {
  try {
    isLoading.value = true
    const postData = await getLikes()
    likePosts.value = postData.data ?? []
  } finally {
    isLoading.value = false
  }
}

/**
 * 取得按讚的貼文
 */
const getLikes = async () => {
  try {
    const data = await getLikePosts()
    return data
  } catch (err) {
    console.log(err)
  }
}

/**
 * 移除按讚貼文
 */
const unLike = async (id) => {
  try {
    await patchUnlike(id)
    initData()
  } catch (err) {
    alert('取消失敗')
  }
}

initData()
</script>

<style lang="scss" module>
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
