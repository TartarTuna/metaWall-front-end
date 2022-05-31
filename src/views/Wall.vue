<template>
  <Navbar />
  <!-- ---main--- -->
  <section class="container mt-7 px-lg-12 mb-12">
    <div class="row d-flex justify-content-center">
      <!-- ---left article--- -->
      <div class="col-12 col-lg-7">
        <PostFilter
          :loading="loading"
          :sort="sort"
          @change-sort="changeSort"
          @change-keyword="changeKeyword"
        />
        <!-- ---wall--- -->
        <empty-post-card v-if="loading">載入中...</empty-post-card>
        <template v-else>
          <p
            v-if="newPosts"
            class="text-muted text-center"
            style="cursor: pointer"
            @click="resetPosts"
          >
            - 有新貼文喔！點擊載入 -
          </p>
          <ul v-if="posts.length" class="ps-0">
            <PostCard
              v-for="post in posts"
              :key="post._id"
              :post="post"
              @post-like="postLike"
              @delete-like="deleteLike"
              @post-comment="postComment"
              @edit-comment="editComment"
              @delete-comment="deleteComment"
              @edit-post="editPost"
              @delete-post="deletePost"
            />
            <li
              v-if="atTheBottom"
              class="card py-4 px-4 mb-3 border-2 shadow-pushcard border8px position-relative text-center h-100"
            >
              <div>
                <span
                  class="spinner-border"
                  role="status"
                  aria-hidden="true"
                ></span>
              </div>
              <div class="pt-2">載入新的貼文中...</div>
            </li>
          </ul>
          <EmptyPostCard v-else />
        </template>
      </div>
      <!-- ---right menu--- -->
      <RightBar />
    </div>
  </section>
  <!-- -----phone-menu--- -->
  <PhoneMenu />
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, onBeforeRouteUpdate, useRouter } from 'vue-router'
import { getPosts } from '@/apis/post'
import { user } from '@/compatibles/data'
import PostFilter from '@/components/posts/filters/PostFilter.vue'
import EmptyPostCard from '@/components/posts/cards/EmptyPostCard.vue'
import PostCard from '@/components/posts/cards/PostCard.vue'
import { useInfiniteScroll } from '@vueuse/core'
import { io } from 'socket.io-client'
const socket = io('https://metawall-06.herokuapp.com') // 要記得改喔！後端網址
const router = useRouter()

/**
 * 預設一頁幾筆貼文
 */
const PAGE_SIZE = 10

const loading = ref(true)
const sort = ref('desc')
const keyword = ref('')
const posts = ref([])
const newPosts = ref(0)
const lastPageIndex = ref(1)
const atTheBottom = ref(false)

/**
 * socket
 */
socket.on('connect', () => {
  console.log(socket.id)
})
socket.on('newPost', (data) => {
  // 有新增貼文時
  if (data) {
    newPosts.value++
  }
})

let query = useRoute().query

onBeforeRouteUpdate(async (to) => {
  query = to.query
  await setPosts({ reset: true })
})

/**
 * 滾動到最底下，最後頁數就+1
 */
useInfiniteScroll(window, () => {
  lastPageIndex.value++
})

/**
 * 最後頁數更新，立馬取下一頁資料
 */
const watchStop = watch(lastPageIndex, async (lastIndex) => {
  atTheBottom.value = true
  const { data } = await getPosts({
    createdAt: sort.value,
    q: keyword.value,
    pageIndex: lastIndex,
    pageSize: PAGE_SIZE
  })
  // 資料已到最後一頁的情況
  if (data.length < PAGE_SIZE) {
    watchStop()
  }
  posts.value.push(...data)
  atTheBottom.value = false
})

/**
 * 取得貼文列表
 * @returns {promise}
 */
const fetchPosts = async () => {
  const params = {
    createdAt: sort.value,
    q: keyword.value
  }
  if (query && query.post) {
    params._id = query.post
  }
  const { data } = await getPosts(params)
  return data
}
/**
 * 設置貼文列表
 * @param {boolean} reset 是否需初始化貼文列表和頁碼
 */
const setPosts = async ({ reset = false } = {}) => {
  try {
    loading.value = true
    if (reset) {
      posts.value = []
    }
    const data = await fetchPosts()
    posts.value.push(...data)
  } finally {
    loading.value = false
  }
}
/**
 * 切換排序事件
 * @param {string} value 排序方式
 */
const changeSort = (value) => {
  sort.value = value
  setPosts({ reset: true })
}
/**
 * 變更搜尋的關鍵字
 * @param {string} value 關鍵字
 */
const changeKeyword = (value) => {
  keyword.value = value
  setPosts({ reset: true })
}
/**
 * 按讚貼文
 * @param {string} postId 貼文編號
 */
const postLike = (postId) => {
  const post = posts.value.find((item) => item._id === postId)
  post.likes.push({ _id: user.value._id })
}
/**
 * 移除貼文的按讚
 * @param {string} postId 貼文編號
 */
const deleteLike = (postId) => {
  const post = posts.value.find((item) => item._id === postId)
  const index = post.likes.findIndex((item) => item._id === user.value._id)
  if (~index) post.likes.splice(index, 1)
}
/**
 * 貼文留言
 * @param {string} postId 貼文編號
 * @param {object} comment 留言資訊
 */
const postComment = ({ postId, comment }) => {
  const post = posts.value.find((item) => item._id === postId)
  post.comments.push(comment)
}
/**
 * 編輯貼文留言
 * @param {string} postId 貼文編號
 * @param {string} commentId 留言編號
 * @param {string} content 內容
 */
const editComment = ({ postId, commentId, content }) => {
  const post = posts.value.find((item) => item._id === postId)
  const comment = post.comments.find((item) => item._id === commentId)
  comment.content = content
}
/**
 * 刪除貼文留言
 * @param {string} postId 貼文編號
 * @param {string} commentId 留言編號
 */
const deleteComment = ({ postId, commentId }) => {
  const post = posts.value.find((item) => item._id === postId)
  const index = post.comments.findIndex((item) => item._id === commentId)
  if (~index) post.comments.splice(index, 1)
}
/**
 * 編輯貼文
 * @param {string} postId 貼文編號
 * @param {string} content 內容
 * @param {string} image 圖片
 * @param {array} tag 標籤
 */
const editPost = ({ postId, content, image, tag }) => {
  const post = posts.value.find((item) => item._id === postId)
  post.content = content
  post.tag = tag
  post.image = image
}
/**
 * 刪除貼文
 * @param {string} postId 貼文編號
 */
const deletePost = (postId) => {
  const index = posts.value.findIndex((item) => item._id === postId)
  if (~index) posts.value.splice(index, 1)
}
/**
 * 重新載入貼文
 */
const resetPosts = () => {
  newPosts.value = 0
  router.push('/wall')
  if (!Object.keys(query).length) {
    setPosts({ reset: true })
  }
}

setPosts()
</script>
