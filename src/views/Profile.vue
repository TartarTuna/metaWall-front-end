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
                class="nav-item border border-dark border-2 border-bottom-0 rounded"
                role="presentation"
              >
                <button
                  class="nav-link nav-tabs active px-4"
                  id="name-edit-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#name-edit"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  暱稱修改
                </button>
              </li>
              <li
                class="nav-item border border-dark border-2 border-bottom-0 rounded"
                role="presentation"
              >
                <button
                  class="nav-link nav-tabs px-4"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  重設密碼
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
                  <form class="row px-lg-5 g-3">
                    <div>
                      <img
                        src="@/assets/img/user.png"
                        alt="user"
                        class="img-fluid w-25 mx-auto mb-4 d-block"
                      />
                    </div>
                    <div class="col-12 d-flex justify-content-center">
                      <div class="w-100">
                        <label class="form-label fw-bold">上傳大頭照</label>
                        <input type="file" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12">
                      <label for="userphoto" class="form-label fw-bold"
                        >暱稱</label
                      >
                      <input
                        type="text"
                        class="form-control border-dark border-2 p-2 ps-3"
                        id="userphoto"
                        placeholder="邊緣小杰"
                      />
                    </div>
                    <div class="col-12 mb-3 d-flex">
                      <div class="form-check me-3">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                        />
                        <label class="form-check-label" for="invalidCheck">
                          男性
                        </label>
                      </div>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck"
                        />
                        <label class="form-check-label" for="invalidCheck">
                          女性
                        </label>
                      </div>
                    </div>
                    <!-- 1.圖片寬高比必需為 1:1，請重新輸入 2. 解析度寬度至少 300像素以上，請重新輸入 -->
                    <div class="d-grid">
                      <button
                        class="btn btn-primary btn btn-primary border border-dark border-2 shadow-black border8px py-3 fw-bold"
                        type="submit"
                      >
                        送出更新
                      </button>
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
                  <form class="row px-lg-5 g-3">
                    <div class="col-12">
                      <label for="userpPassword" class="form-label fw-bold"
                        >新密碼</label
                      >
                      <input
                        type="text"
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
                        type="text"
                        class="form-control border-dark border-2 p-2 ps-3"
                        id="userpPassword1"
                        placeholder="再次輸入"
                      />
                    </div>
                    <div class="d-grid">
                      <button
                        class="btn btn-primary btn btn-primary border border-dark border-2 shadow-black border8px py-3 fw-bold"
                        type="submit"
                      >
                        送出更新
                      </button>
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
import Navbar from '@/components/Navbar.vue'
import RightBar from '@/components/RightBar.vue'
import PhoneMenu from '@/components/PhoneMenu.vue'
</script>
