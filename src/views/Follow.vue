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
        <ul class="ps-0">
          <li class="card h-100 p-4 mb-3 border-2 shadow-pushcard border8px">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img
                  class="me-3 img-fluid"
                  src="@/assets/img/user2.png"
                  alt="user2"
                />
                <div class="d-flex flex-column mt-2">
                  <router-link to="personal" class="mb-0 fw-bold"
                    >波吉</router-link
                  >
                  <small class="text-muted">追蹤時間：2022/2/14 12:00</small>
                </div>
              </div>
              <div>
                <p class="mb-0 fs-8">您已追蹤 90 天！</p>
              </div>
            </div>
          </li>
          <li class="card h-100 p-4 mb-3 border-2 shadow-pushcard border8px">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img
                  class="me-3 img-fluid"
                  src="@/assets/img/user3.png"
                  alt="user3"
                />
                <div class="d-flex flex-column mt-2">
                  <router-link to="personal" class="mb-0 fw-bold"
                    >多魯米</router-link
                  >
                  <small class="text-muted">追蹤時間：2022/2/14 12:00</small>
                </div>
              </div>
              <div>
                <p class="mb-0 fs-8">您已追蹤 90 天！</p>
              </div>
            </div>
          </li>
          <li class="card h-100 p-4 mb-3 border-2 shadow-pushcard border8px">
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img
                  class="me-3 img-fluid"
                  src="@/assets/img/user4.png"
                  alt="user4"
                />
                <div class="d-flex flex-column mt-2">
                  <router-link to="personal" class="mb-0 fw-bold"
                    >卡克</router-link
                  >
                  <small class="text-muted">追蹤時間：2022/2/14 12:00</small>
                </div>
              </div>
              <div>
                <p class="mb-0 fs-8">您已追蹤 90 天！</p>
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
import Navbar from '@/components/Navbar.vue'
import RightBar from '@/components/RightBar.vue'
import PhoneMenu from '@/components/PhoneMenu.vue'
</script>
