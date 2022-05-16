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
        <ul class="ps-0">
          <li
            class="card h-100 p-3 p-xxl-4 mb-3 border-2 shadow-pushcard border8px"
          >
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img
                  class="me-3 img-fluid"
                  src="@/assets/img/user2.png"
                  alt="user2"
                />
                <div class="d-flex flex-column mt-2">
                  <router-link to="personal" class="mb-0 fw-bold"
                    >愛爾敏</router-link
                  >
                  <small class="text-muted">發文時間：2022/2/22 12:00</small>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <button
                  type="button"
                  class="btn d-flex flex-column d-flex align-items-center"
                >
                  <span
                    class="material-icons material-icons-outlined fs-5 text-primary mb-1"
                  >
                    thumb_up
                  </span>
                  <span class="fs-7 fw-bold text-nowrap">取消</span>
                </button>
                <router-link to="wall">
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
          <li
            class="card h-100 p-3 p-xxl-4 mb-3 border-2 shadow-pushcard border8px"
          >
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img
                  class="me-3 img-fluid"
                  src="@/assets/img/user5.png"
                  alt="user5"
                />
                <div class="d-flex flex-column mt-2">
                  <router-link to="personal" class="mb-0 fw-bold"
                    >艾蓮</router-link
                  >
                  <small class="text-muted">發文時間：2022/2/22 12:00</small>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <button
                  type="button"
                  class="btn d-flex flex-column d-flex align-items-center"
                >
                  <span
                    class="material-icons material-icons-outlined fs-5 text-primary mb-1"
                  >
                    thumb_up
                  </span>
                  <span class="fs-7 fw-bold text-nowrap">取消</span>
                </button>
                <router-link to="wall">
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
          <li
            class="card h-100 p-3 p-xxl-4 mb-3 border-2 shadow-pushcard border8px"
          >
            <div class="d-flex justify-content-between align-items-center">
              <div class="d-flex align-items-center">
                <img
                  class="me-3 img-fluid"
                  src="@/assets/img/user3.png"
                  alt="user3"
                />
                <div class="d-flex flex-column mt-2">
                  <router-link to="personal" class="mb-0 fw-bold"
                    >米卡莎</router-link
                  >
                  <small class="text-muted">發文時間：2022/2/22 12:00</small>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <button
                  type="button"
                  class="btn d-flex flex-column d-flex align-items-center"
                >
                  <span
                    class="material-icons material-icons-outlined fs-5 text-primary mb-1"
                  >
                    thumb_up
                  </span>
                  <span class="fs-7 fw-bold text-nowrap">取消</span>
                </button>
                <router-link to="wall">
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
import Navbar from '@/components/Navbar.vue'
import RightBar from '@/components/RightBar.vue'
import PhoneMenu from '@/components/PhoneMenu.vue'
</script>
