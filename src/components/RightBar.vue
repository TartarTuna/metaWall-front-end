<template>
  <!-- ---right menu--- -->
  <div class="col-lg-5 d-lg-block d-none">
    <div class="border border-dark border-2 px-4 py-5">
      <div class="d-grid gap-2 mb-4">
        <router-link
          :to="{ name: 'post' }"
          class="btn btn-primary shadow-black border8px border border-dark border-2 py-3 fw-bold"
        >
          張貼動態
        </router-link>
      </div>
      <ul class="ps-0 mt-6">
        <li class="card h-100 border-0 mb-3">
          <router-link :to="{ name: 'personal', params: { userId: user._id } }">
            <div class="row d-flex align-items-center">
              <div
                class="col-3 d-flex justify-content-center align-self-center"
              >
                <img
                  width="50"
                  class="d-block mx-auto"
                  :src="correctImageUrl(user.photo)"
                  alt="user1"
                />
              </div>
              <div class="col-9">
                <p class="m-0 ms-xl-n3 fw-bold">{{ user.name }}</p>
              </div>
            </div>
          </router-link>
        </li>
        <li class="card h-100 border-0 mb-3">
          <router-link :to="{ name: 'follow' }">
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
          <router-link :to="{ name: 'like' }">
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
                <p class="m-0 ms-xl-n3 fw-bold">我按讚的貼文</p>
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
    <main class="container bg-primary p-3 pb-0">
      <div class="row d-flex justify-content-center">
        <div class="col-12 bg-white">
          <div class="row border bg-white position-relative">
            <ul
              ref="msgHeight"
              class="col-12 bar border-primary d-flex flex-column position-relative"
              style="overflow-y: auto; max-height: 230px; min-height: 230px"
            >
              <template v-for="item in MsgTemp" :key="item.id">
                <template v-if="item.type === 'me' && item.img === ''">
                  <li
                    class="d-flex justify-content-end pt-4 pb-3 position-relative"
                  >
                    <div
                      class="p-2 m-2 rounded-3 textBg textRight position-relative"
                    >
                      {{ item.userMsg }}
                    </div>
                  </li>
                </template>
                <template v-else-if="item.type === 'you' && item.img === ''">
                  <li class="row d-flex justify-content-start pt-5 pb-3">
                    <div class="col-3" style="width: 40px; height: 40px">
                      <img
                        :src="correctImageUrl(item.userPhoto)"
                        class="img-fluid"
                      />
                    </div>
                    <div class="col d-flex flex-column align-items-start">
                      <span>{{ item.userName }}:</span>
                      <div
                        class="p-2 m-2 rounded-3 textBg textLeft position-relative"
                      >
                        {{ item.userMsg }}
                      </div>
                    </div>
                  </li>
                </template>
                <template v-else-if="item.img !== null && item.type === 'me'">
                  <li
                    class="d-flex justify-content-end pt-4 pb-3 position-relative"
                  >
                    <div
                      class="p-2 rounded-3 position-relative"
                      style="max-width: 70%"
                    >
                      <img :src="item.img" class="img-fluid" />
                    </div>
                  </li>
                </template>
                <template v-else-if="item.img !== null && item.type === 'you'">
                  <li class="row d-flex justify-content-start pt-5 pb-3">
                    <div class="col-3" style="width: 40px; height: 40px">
                      <img
                        :src="correctImageUrl(item.userPhoto)"
                        class="img-fluid"
                      />
                    </div>
                    <div class="col d-flex flex-column align-items-start">
                      <span>{{ item.userName }}:</span>
                      <div
                        class="p-2 rounded-3 position-relative"
                        style="max-width: 70%"
                      >
                        <img :src="item.img" class="img-fluid" />
                      </div>
                    </div>
                  </li>
                </template>
              </template>
              <!-- ----- -->
            </ul>
          </div>
        </div>
      </div>
    </main>
    <section class="d-grid gap-2 col-12 me-auto bg-primary">
      <div class="dropdown dropstart">
        <a
          class="btn btn-secondary bg-primary border-0"
          style="box-shadow: none"
          role="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span
            class="material-symbols-outlined text-dark fs-2 d-flex pt-1 text-white"
          >
            image
          </span>
        </a>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <div class="row row-cols-5 g-3 p-3">
            <template v-for="item in takeImg">
              <div class="col" @click="sendImg(item)">
                <div class="card boder-0">
                  <img
                    :src="item.img"
                    class="card-img-top d-block m-auto"
                    alt=""
                  />
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
    <section class="container bg-primary p-1">
      <div class="row d-flex justify-content-center">
        <section class="col-12 rounded-3">
          <div class="input-group px-0">
            <textarea
              id="usertext"
              class="form-control"
              aria-label="With textarea"
              style="box-shadow: none; resize: none"
              placeholder="開始吵鬧吧~"
              v-model="textMsg"
            ></textarea>
            <button
              @click="submit()"
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

<script setup>
import { user } from '@/compatibles/data'
import { correctImageUrl } from '@/compatibles/image-url'
import { getUserProfile } from '@/apis/user'

import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import { io } from 'socket.io-client'

const socket = io('https://metawall-06.herokuapp.com/')

onMounted(() => {
  getUserProfile()
    .then((res) => {
      userName.value = res.data.name
      userPhoto.value = res.data.photo
    })
    .catch((error) => console.log(error))
})

const MsgTemp = ref([])
const userName = ref('')
const userPhoto = ref()
const textMsg = ref('')

const msgHeight = ref()

const submit = () => {
  if (textMsg.value == '') {
    return
  }
  MsgTemp.value.push({
    userName: userName.value,
    userPhoto: userPhoto.value,
    userMsg: textMsg.value,
    type: 'me',
    img: ''
  })
  socket.emit('chat message', MsgTemp.value)
  textMsg.value = ''
  setTimeout(() => {
    msgHeight.value.scrollTop = msgHeight.value.scrollHeight
  }, '50')
}

socket.on('chat message', (youMsg) => {
  MsgTemp.value = []
  const addMsg = youMsg
  addMsg.forEach((item) => {
    MsgTemp.value.push({
      userName: item.userName,
      userPhoto: item.userPhoto,
      userMsg: item.userMsg,
      type: 'you',
      img: item.img
    })
  })
  setTimeout(() => {
    msgHeight.value.scrollTop = msgHeight.value.scrollHeight
  }, '50')
})

const takeImg = ref()
onMounted(() => {
  axios
    .get('https://metawall-06.herokuapp.com/chatImg')
    .then((res) => {
      console.log(res.data)
      const getImg = res.data.data
      takeImg.value = getImg
    })
    .catch((error) => console.log(error))
})

const sendImg = (item) => {
  MsgTemp.value.push({
    userName: userName.value,
    userPhoto: userPhoto.value,
    userMsg: item.userMsg,
    type: 'me',
    img: item.img
  })
  socket.emit('imgSend', MsgTemp.value)
  setTimeout(() => {
    msgHeight.value.scrollTop = msgHeight.value.scrollHeight
  }, '50')
}

socket.on('imgSend', (youImg) => {
  MsgTemp.value = []
  const addImg = youImg
  addImg.forEach((item) => {
    MsgTemp.value.push({
      userName: item.userName,
      userPhoto: item.userPhoto,
      userMsg: item.userMsg,
      type: 'you',
      img: item.img
    })
  })
  setTimeout(() => {
    msgHeight.value.scrollTop = msgHeight.value.scrollHeight
  }, '50')
})
</script>
