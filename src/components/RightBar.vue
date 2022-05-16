<template>
  <!-- ---right menu--- -->
  <div class="col-lg-5 d-lg-block d-none">
    <div class="border border-dark border-2 px-4 py-5">
      <div class="d-grid gap-2 mb-4">
        <router-link
          to="post"
          class="btn btn-primary shadow-black border8px border border-dark border-2 py-3 fw-bold"
        >
          張貼動態
        </router-link>
      </div>
      <ul class="ps-0 mt-6">
        <li class="card h-100 border-0 mb-3">
          <router-link to="personal">
            <div class="row d-flex align-items-center">
              <div
                class="col-3 d-flex justify-content-center align-self-center"
              >
                <img
                  class="d-block mx-auto"
                  src="@/assets/img/user1.png"
                  alt="user1"
                />
              </div>
              <div class="col-9">
                <p class="m-0 ms-xl-n3 fw-bold">邊緣小杰</p>
              </div>
            </div>
          </router-link>
        </li>
        <li class="card h-100 border-0 mb-3">
          <router-link to="follow">
            <div class="row d-flex align-items-center">
              <div
                class="col-3 d-flex justify-content-center align-self-center"
              >
                <span
                  class="material-icons-outlined fs-2 border border-dark border-2 rounded-circle bg-light hover-primary p-2"
                >
                  notifications
                </span>
              </div>
              <div class="col-9">
                <p class="m-0 ms-xl-n3 fw-bold">追蹤名單</p>
              </div>
            </div>
          </router-link>
        </li>
        <li class="card h-100 border-0 mb-3">
          <router-link to="like">
            <div class="row d-flex align-items-center">
              <div
                class="col-3 d-flex justify-content-center align-self-center"
              >
                <span
                  class="material-icons material-icons-outlined fs-2 border border-dark border-2 rounded-circle bg-light hover-primary p-2"
                >
                  thumb_up
                </span>
              </div>
              <div class="col-9">
                <p class="m-0 ms-xl-n3 fw-bold">我按讚的文章</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- ---metatalk--- -->
    <section class="font-paytone text-primary">
      <h2 class="text-dark">&MetaTalk</h2>
    </section>
    <main class="container bg-primary p-3 pb-7">
      <div class="row d-flex justify-content-center">
        <div class="col-12 bg-white">
          <div class="row border bg-white position-relative">
            <ul
              id="maintext"
              class="col-12 bar border-primary"
              style="overflow-y: auto; max-height: 230px; min-height: 230px"
            >
              <!-- ----- -->
              <li
                class="d-flex justify-content-end pt-4 pb-3 pe-2 position-relative"
              >
                <div
                  class="p-2 m-2 rounded-3 textBg textRight position-relative"
                  style="max-width: 70%"
                >
                  午餐的黑胡椒豬肉掉到褲子上醬汁擦不掉
                </div>
              </li>
              <!-- ----- -->
              <li class="row d-flex justify-content-start pt-5 pb-3 ps-2">
                <div
                  class="col-3"
                  style="
                    width: 40px;
                    height: 40px;
                    background-color: rebeccapurple;
                    border-radius: 50%;
                  "
                ></div>
                <div class="col d-flex flex-column align-items-start">
                  <span>test-2:</span>
                  <div
                    class="p-2 m-2 rounded-3 textBg textLeft position-relative"
                    style="max-width: 70%"
                  >
                    騙人的吧
                  </div>
                </div>
              </li>
              <!-- ----- -->
              <li
                class="d-flex justify-content-end pt-4 pb-3 pe-2 position-relative"
              >
                <div
                  class="p-2 m-2 rounded-3 textBg textRight position-relative"
                  style="max-width: 70%"
                >
                  求推薦可以讓褲子reset的方法
                </div>
              </li>
              <!-- ----- -->
              <li class="row d-flex justify-content-start pt-5 pb-3 ps-2">
                <div
                  class="col-3"
                  style="
                    width: 40px;
                    height: 40px;
                    background-color: red;
                    border-radius: 50%;
                  "
                ></div>
                <div class="col d-flex flex-column align-items-start">
                  <span>test-6:</span>
                  <div
                    class="p-2 m-2 rounded-3 textBg textLeft position-relative"
                    style="max-width: 70%"
                  >
                    (σ′▽‵)′▽‵)σ 哈哈哈哈～UCCU
                  </div>
                </div>
              </li>
              <!-- ----- -->
              <li
                class="d-flex justify-content-end pt-4 pb-3 pe-2 position-relative"
              >
                <div
                  class="p-2 m-2 rounded-3 textBg textRight position-relative"
                  style="max-width: 70%"
                >
                  (#`Д´)ﾉ
                </div>
              </li>
              <!-- ----- -->
            </ul>
            <div
              class="d-grid gap-2 position-absolute start-0 top-100 translate-middle ms-4"
              style="margin-top: 18px"
            >
              <a class="btn position-absolute start-50 top-50" role="button">
                <span
                  class="material-symbols-outlined position-absolute start-0 top-50 translate-middle text-white fs-2"
                >
                  image
                </span>
                <label
                  for="upload"
                  class="position-absolute start-0 top-50 translate-middle"
                  style="cursor: none"
                >
                  <input
                    style="opacity: 0; max-width: 28px"
                    id="upload"
                    type="file"
                    onchange="previewFile()"
                  />
                </label>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
    <section class="container bg-primary p-1 mt-1">
      <div class="row d-flex justify-content-center">
        <section class="col-12 rounded-3">
          <div class="input-group px-0">
            <textarea
              id="usertext"
              class="form-control"
              aria-label="With textarea"
              style="box-shadow: none; resize: none"
              placeholder="開始吵鬧吧~"
            ></textarea>
            <button
              onclick="submit()"
              class="input-group-text bg-white"
              type="submit"
            >
              <span class="material-symbols-outlined fs-2">maps_ugc</span>
            </button>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>
