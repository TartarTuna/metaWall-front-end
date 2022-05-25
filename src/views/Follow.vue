<template>
  <Navbar />
  <!-- ---main--- -->
  <section class="container mt-7 px-lg-12 mb-12">
    <div class="row">
      <!-- ---left main--- -->
      <div class="col-lg-7">
        <div class="card mb-5 rounded-0 border-2 titleDashBoard">
          <h2 class="text-center fw-bold py-3 mb-0 fs-5">追蹤名單</h2>
        </div>
        <div v-if="isLoading" class="text-center" style="line-height: 88px">
          載入中...
        </div>
        <ul v-else class="ps-0">
          <li
            v-for="(item, index) in tracks"
            :key="index"
            class="card h-100 p-4 mb-3 border-2 shadow-pushcard border8px"
          >
            <div
              class="d-flex justify-content-between align-items-center w-100"
            >
              <div class="d-flex align-items-center w-100">
                <img
                  class="me-3 img-fluid"
                  :class="$style.avatar"
                  :src="correctImageUrl(item.photo)"
                  alt="user2"
                />
                <div class="d-flex flex-column mt-2 w-100">
                  <router-link
                    :to="{ name: 'personal', params: { userId: item._id } }"
                    class="mb-0 fw-bold"
                  >
                    {{ item.name }}
                  </router-link>
                  <div
                    class="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center"
                  >
                    <small class="text-muted fs-7">
                      {{ dayFormat(item.createdAt) }}
                    </small>
                    <div>
                      <p class="mb-0 fs-7">
                        {{ `您已追蹤 ${dayDiff(item.createdAt)} 天！` }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- ---right menu--- -->
      <RightBar />
    </div>
  </section>
  <!-- ---phone-menu---- -->
  <PhoneMenu />
</template>

<script setup>
import { ref } from 'vue'
import { getTracks } from '@/apis/track'
import { dayFormat, dayDiff } from '@/plugins/day'
import { correctImageUrl } from '@/compatibles/image-url'
import Navbar from '@/components/Navbar.vue'
import RightBar from '@/components/RightBar.vue'
import PhoneMenu from '@/components/PhoneMenu.vue'

const tracks = ref([])
const isLoading = ref(false)

/**
 * 初始化畫面的值
 */
const initData = async () => {
  try {
    isLoading.value = true
    const tracksData = await getTrackingData()
    tracks.value = tracksData.tracking ?? []
  } finally {
    isLoading.value = false
  }
}

/**
 * 取得追蹤名單
 * @returns {promise} 追蹤名單資料
 */
const getTrackingData = async () => {
  const { data } = await getTracks()
  return data
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
