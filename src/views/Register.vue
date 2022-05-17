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
          <p class="text-center fw-bold fs-4 m-0 mb-2">註冊</p>
          <form class="px-2" @submit.prevent="submitForm">
            <div class="form-group">
              <label for="userEmail"></label>
              <input
                type="text"
                class="form-control py-2 border-2 ps-4"
                id="userName"
                aria-describedby="emailHelp"
                name="name"
                placeholder="暱稱"
                v-model.trim="name"
              />
              <span
                v-if="errors.name"
                class="text-danger text-center fs-7 mb-2"
                >{{ errors.name }}</span
              >
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
                v-model.trim="email"
              />
              <span
                v-if="errors.email"
                class="text-danger text-center fs-7 mb-2"
                >{{ errors.email }}</span
              >
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
              <span
                v-if="errors.password"
                class="text-danger text-center fs-7"
                >{{ errors.password }}</span
              >
            </div>
            <div class="d-grid gap-2 mb-2">
              <button
                type="submit"
                class="btn btn-primary shadow-black border8px border-dark border-2 py-2 fw-bold"
                :disabled="loading"
              >
                註冊
              </button>
            </div>
          </form>
          <div class="text-center mt-3 mb-5 mb-lg-0 fw-bold">
            <router-link to="/">登入</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signUpApi } from '@/apis/user.js'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import Banner from '@/components/Banner.vue'
const loading = ref(false)
const router = useRouter()

const initialValues = {
  name: '',
  email: '',
  password: ''
}

const validationSchema = yup.object({
  name: yup.string().required('暱稱必填').min(2, '暱稱至少 2 個字元以上'),
  email: yup.string().required('Email必填').email(),
  password: yup
    .string()
    .required('password必填')
    .min(8, '密碼需至少 8 碼以上，並中英混合')
})

const { errors, handleSubmit } = useForm({
  validationSchema,
  initialValues
})

const { value: name } = useField('name')
const { value: email } = useField('email')
const { value: password } = useField('password')

const submitForm = handleSubmit(async (values, actions) => {
  try {
    loading.value = true
    await signUpApi(values)
    router.push('/')
  } catch (err) {
    console.log(err)
    const emailExist = err.response.data.message
    if (emailExist) {
      actions.setFieldError('email', emailExist)
    }
    loading.value = false
  }
})
</script>
