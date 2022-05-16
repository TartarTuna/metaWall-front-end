<template>
  <section
    class="container vh-100 d-flex justify-content-center align-items-center"
  >
    <div
      class="card px-lg-7 px-3 bg-secondary border-2 shadow-gray rounded-0"
      style="width: 56rem"
    >
      <div class="row py-lg-10">
        <div class="col-md-6 mr-9 d-md-block d-none align-self-center">
          <img
            src="@/assets/img/banner.png"
            alt="signin"
            class="img-fluid d-block m-auto"
          />
        </div>
        <div class="col-md-6">
          <h1 class="m-auto d-block overflow-hidden text-nowrap logo">
            MetaWall
          </h1>
          <p class="text-center fw-bold fs-4 m-0 mb-2">註冊</p>
          <form class="px-2">
            <div class="form-group">
              <label for="userEmail"></label>
              <input
                type="text"
                class="form-control py-2 border-2 ps-4"
                id="userName"
                aria-describedby="emailHelp"
                name="text"
                placeholder="暱稱"
              />
              <!-- 暱稱至少 2 個字元以上 -->
            </div>
            <div class="form-group">
              <label for="userEmail"></label>
              <input
                type="email"
                class="form-control py-2 border-2 ps-4"
                id="userEmail"
                aria-describedby="emailHelp"
                name="email"
                placeholder="Email"
              />
              <!-- 帳號已被註冊，請替換新的 Email！ -->
            </div>
            <div class="form-group mb-5">
              <label for="userPassword"></label>
              <input
                type="password"
                class="form-control py-2 border-2 ps-4"
                id="userPassword"
                placeholder="Password"
                name="password"
              />
              <!-- 密碼需至少 8 碼以上，並中英混合 -->
            </div>
            <div class="d-grid gap-2 mb-2">
              <button
                type="submit"
                class="btn btn-primary shadow-black border8px border-dark border-2 py-2 fw-bold"
              >
                註冊
              </button>
            </div>
            <div class="text-center mt-3 mb-5 mb-lg-0 fw-bold">
              <router-link to="/">登入</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
