<template>
  <section
    class="container vh-100 d-flex justify-content-center align-items-center"
  >
    <div
      class="card px-lg-7 px-3 bg-secondary border-2 shadow-gray rounded-0"
      style="width: 56rem"
    >
      <div class="row py-lg-10">
        <Banner />
        <div class="col-md-6">
          <h1 class="m-auto d-block overflow-hidden text-nowrap logo">
            MetaWall
          </h1>
          <p class="text-center fw-bold fs-4 m-0 mb-2">
            到元宇宙展開全新社交圈
          </p>
          <form class="px-2" @submit.prevent="loginSubmit">
            <div class="form-group">
              <label for="userEmail"></label>
              <input
                type="email"
                class="form-control py-2 border-2 ps-4"
                id="userEmail"
                aria-describedby="emailHelp"
                name="email"
                placeholder="Email"
                v-model.trim="email"
              />
            </div>
            <div class="form-group mb-5">
              <label for="userPassword"></label>
              <input
                type="password"
                class="form-control py-2 border-2 ps-4"
                id="userPassword"
                placeholder="Password"
                name="password"
                v-model.trim="password"
              />
            </div>
            <div class="d-grid gap-2 mb-2">
              <button
                type="submit"
                class="btn btn-primary shadow-black border8px border-dark border-2 py-2 fw-bold"
                :disabled="loading"
              >
                登入
              </button>
              <p v-show="errorMsg" class="text-danger text-center fs-7 mb-2">
                {{ errorMsg }}
              </p>
            </div>
            <div class="d-md-flex justify-content-evenly d-grid gap-2 mt-3">
              <button type="button" class="btn btn-info" @click="facebookLogin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                  />
                </svg>
                Facebook Login
              </button>
              <button type="button" class="btn btn-danger" @click="googleLogin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-google"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                  />
                </svg>
                Google Login
              </button>
            </div>
            <div class="text-center mt-3 mb-5 mb-lg-0 fw-bold">
              <router-link to="register">註冊帳號</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signInApi, facebookSignInApi, googleSignInApi } from '@/apis/user.js'
import { setCookieToke, clearUserInfo } from '@/compatibles/method'
import Banner from '@/components/Banner.vue'

const router = useRouter()
const loading = ref(false)
const email = ref('')
const password = ref('')
const errorMsg = ref('')

const loginSubmit = async () => {
  if (!email.value || !password.value) {
    errorMsg.value = '所有欄位必填'
  } else {
    try {
      loading.value = true
      const { data } = await signInApi({
        email: email.value,
        password: password.value
      })
      errorMsg.value = ''
      setCookieToke(data.token)
      router.push({ name: 'wall' })
    } catch (err) {
      console.log(err)
      errorMsg.value = err.message
    } finally {
      loading.value = false
      email.value = ''
      password.value = ''
    }
  }
}

const facebookLogin = async () => {
  await facebookSignInApi()
}

const googleLogin = async () => {
  await googleSignInApi()
}

clearUserInfo()
</script>
