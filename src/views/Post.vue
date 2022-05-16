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
          <form>
            <div class="form-group mb-3">
              <label for="content fw-bold">貼文內容</label>
              <textarea
                class="form-control border border-dark border-2"
                type="text"
                id="content"
                rows="5"
                placeholder="輸入您的貼文內容"
              ></textarea>
            </div>
            <div class="input-group mb-3">
              <input type="text" style="display: none" placeholder="上傳圖片" />
              <button class="btn btn-dark border" style="border-radius: 8px">
                上傳圖片
              </button>
            </div>
            <img
              src="@/assets/img/photo1.png"
              alt="photo1"
              class="w-100 img-fluid mb-2"
            />
            <!-- 圖片檔案過大，僅限 1mb 以下檔案 圖片格式錯誤，僅限 JPG、PNG 圖片 -->
            <div class="d-grid gap-2 col-8 mx-auto mt-5">
              <button
                type="submit"
                class="btn btn-gray-dark border border-dark border-2 fw-bold py-3 border8px"
              >
                送出貼文
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
import Navbar from '@/components/Navbar.vue'
import RightBar from '@/components/RightBar.vue'
import PhoneMenu from '@/components/PhoneMenu.vue'
</script>
