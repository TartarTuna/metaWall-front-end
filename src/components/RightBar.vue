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
              ref="talkListElem"
              class="col-12 bar border-primary d-flex flex-column position-relative"
              style="overflow-y: auto; max-height: 350px; min-height: 350px"
            >
              <template v-for="item in talkMessages" :key="item.id">
                <template v-if="item.type === 'me' && item.img === ''">
                  <li
                    class="d-flex justify-content-end pt-4 pb-3 position-relative"
                  >
                    <div
                      class="p-2 m-2 rounded-3 textBg textRight position-relative"
                      style="white-space: pre-wrap"
                    >
                      {{ item.userMsg }}
                    </div>
                  </li>
                </template>
                <template v-else-if="item.type === 'you' && item.img === ''">
                  <li class="row d-flex justify-content-start pt-5 pb-3">
                    <div class="col-3" style="width: 80px; height: 80px">
                      <img
                        :src="correctImageUrl(item.userPhoto)"
                        class="img-fluid"
                      />
                    </div>
                    <div class="col d-flex flex-column align-items-start">
                      <span>{{ item.userName }}:</span>
                      <div
                        class="p-2 m-2 rounded-3 textBg textLeft position-relative"
                        style="white-space: pre-wrap"
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
                    <div class="col-3" style="width: 80px; height: 80px">
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
            <div
              v-for="item in talkImages"
              :key="item.id"
              class="col"
              @click="sendImg(item)"
            >
              <div class="card boder-0">
                <img
                  :src="item.img"
                  class="card-img-top d-block m-auto"
                  alt=""
                />
              </div>
            </div>
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
import { ref, nextTick } from 'vue'
import { io } from 'socket.io-client'
import { getChatImg } from '@/apis/chatImg'
import { user } from '@/compatibles/data'
import { correctImageUrl } from '@/compatibles/image-url'

const socket = io(import.meta.env.VITE_API_URL)
const textMsg = ref('')
const talkMessages = ref([])
const talkImages = ref([])
const talkListElem = ref(null)

/**
 * 設置聊天室的圖片
 */
const setTalkImages = async () => {
  const { data } = await getChatImg()
  talkImages.value = data
}
/**
 * 滾動聊天室至最下方
 */
const scrollTalkToBottom = async () => {
  await nextTick()
  talkListElem.value.scroll({
    top: talkListElem.value.scrollHeight,
    behavior: 'smooth'
  })
}
/**
 * 送出聊天室的文字訊息
 */
const submit = () => {
  if (textMsg.value === '') {
    return
  }
  const message = {
    userName: user.value.name,
    userPhoto: user.value.photo,
    userMsg: textMsg.value,
    img: ''
  }
  talkMessages.value.push({ ...message, type: 'me' })
  socket.emit('chat message', [{ ...message, type: 'you' }])
  textMsg.value = ''
  scrollTalkToBottom()
}
/**
 * 送出聊天室的圖片事建
 * @param {object} item 訊息資訊
 */
const sendImg = (item) => {
  const message = {
    userName: user.value.name,
    userPhoto: user.value.photo,
    userMsg: item.userMsg,
    img: item.img
  }
  talkMessages.value.push({ ...message, type: 'me' })
  socket.emit('imgSend', [{ ...message, type: 'you' }])

  const image = new Image()
  image.onload = () => {
    scrollTalkToBottom()
  }
  image.src = item.img
}
socket.on('chat message', (messages = []) => {
  talkMessages.value.push(...messages.map((item) => ({ ...item, type: 'you' })))
  scrollTalkToBottom()
})
socket.on('imgSend', (messages = []) => {
  talkMessages.value.push(...messages.map((item) => ({ ...item, type: 'you' })))

  const image = new Image()
  image.onload = () => {
    scrollTalkToBottom()
  }
  image.src = [...messages].pop().img
})

setTalkImages()
</script>
