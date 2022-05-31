<template>
  <Navbar />
  <section class="container mt-7 px-lg-12 mb-12">
    <div class="row">
      <!-- ---left main--- -->
      <div class="col-lg-7">
        <div class="card mb-3 border8px border-2 cardDashBoard">
          <div v-if="userLoading" class="text-center" style="line-height: 88px">
            載入中...
          </div>
          <div v-else class="row g-0 px-4">
            <div class="col-2 col-lg-1 align-self-center">
              <img
                :src="correctImageUrl(specificUser.photo)"
                class="img-fluid rounded-start d-block m-auto"
                alt="user6"
              />
            </div>
            <div class="col-10 col-lg-11 d-flex justify-content-between">
              <div class="card-body">
                <h5 class="card-title fw-bold">{{ specificUser.name }}</h5>
                <p class="card-text">
                  <small class="text-muted"
                    >{{ specificUser.trackNum }} 人追蹤</small
                  >
                </p>
              </div>
              <button
                v-if="!isMe"
                type="button"
                class="btn me-2 my-4 px-lg-5 border border-dark border-2 border8px shadow-pushcard d-block fw-bold"
                :class="isTracked ? 'btn-gray-light' : 'btn-warning'"
                @click="trackHandler"
              >
                {{ isTracked ? '取消追蹤' : '追蹤' }}
              </button>
            </div>
          </div>
        </div>
        <PostFilter
          :loading="postLoading"
          :sort="sort"
          @change-sort="changeSort"
          @change-keyword="changeKeyword"
        />
        <empty-post-card v-if="postLoading">載入中...</empty-post-card>
        <template v-else>
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
          </ul>
          <EmptyPostCard v-else />
        </template>
      </div>
      <!-- ---right menu--- -->
      <RightBar />
    </div>
  </section>
  <!-- ---phone-menu----- -->
  <PhoneMenu />
</template>

<script setup>
import { ref, computed } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import PostFilter from '@/components/posts/filters/PostFilter.vue'
import PostCard from '@/components/posts/cards/PostCard.vue'
import EmptyPostCard from '@/components/posts/cards/EmptyPostCard.vue'
import { user as me } from '@/compatibles/data'
import { specificUser } from '@/compatibles/personal/data'
import { correctImageUrl } from '@/compatibles/image-url'
import { getSpecificUserProfile } from '@/apis/user'
import { getSpecificUserPosts } from '@/apis/post'
import { getTracks, postTrack, deleteTrack } from '@/apis/track'

const userLoading = ref(false)
const postLoading = ref(false)
const sort = ref('desc')
const keyword = ref('')
const tracks = ref([])
const posts = ref([])
const props = defineProps({
  userId: {
    type: String,
    required: true
  }
})

/**
 * 是否為自己
 * @returns {boolean}
 */
const isMe = computed(() => {
  return me.value._id === props.userId
})
/**
 * 是否已經追蹤
 * @returns {boolean}
 */
const isTracked = computed(() => {
  return tracks.value.some((item) => item._id === props.userId)
})
/**
 * 初始化畫面的值
 * @param {string} userId 會員編號
 */
const initData = async (userId) => {
  try {
    userLoading.value = true
    postLoading.value = true
    const [tracksData, postData] = await Promise.all([
      getTracks(),
      getPosts(userId)
    ])
    tracks.value = tracksData.data?.tracking ?? []
    posts.value = postData
  } finally {
    userLoading.value = false
    postLoading.value = false
  }
}
/**
 * 設置特定會員資訊
 * @param {string} userId 會員編號
 */
const setSpecificUser = async (userId) => {
  const { data } = await getSpecificUserProfile(userId)
  specificUser.value = data
}
/**
 * 取得個人的貼文
 * @param {string} userId 會員編號
 * @returns {promise}
 */
const getPosts = async (userId) => {
  const { data } = await getSpecificUserPosts(userId, {
    createdAt: sort.value,
    q: keyword.value
  })
  return data
}
/**
 * 設置個人的貼文
 * @param {boolean} reset 是否需初始化貼文列表和頁碼
 */
const setPosts = async ({ reset = false } = {}) => {
  try {
    postLoading.value = true
    if (reset) {
      posts.value = []
    }
    const data = await getPosts(props.userId)
    posts.value.push(...data)
  } finally {
    postLoading.value = false
  }
}
/**
 * 追蹤事件
 */
const trackHandler = () => {
  try {
    if (isTracked.value) {
      deleteTrack(props.userId)

      const index = tracks.value.findIndex((item) => item._id === props.userId)
      tracks.value.splice(index, 1)
      specificUser.value.trackNum--
    } else {
      postTrack(props.userId)
      tracks.value.push(specificUser.value)
      specificUser.value.trackNum++
    }
  } catch (e) {
    alert(e.message)
  }
}
/**
 * 按讚貼文
 * @param {string} postId 貼文編號
 */
const postLike = (postId) => {
  const post = posts.value.find((item) => item._id === postId)
  post.likes.push({ _id: me.value._id })
}
/**
 * 移除貼文的按讚
 * @param {string} postId 貼文編號
 */
const deleteLike = (postId) => {
  const post = posts.value.find((item) => item._id === postId)
  const index = post.likes.findIndex((item) => item._id === me.value._id)
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

onBeforeRouteUpdate((to, from) => {
  const {
    params: { userId }
  } = to
  if (props.userId !== userId) {
    setSpecificUser(userId)
    initData(userId)
  }
})

initData(props.userId)
</script>
