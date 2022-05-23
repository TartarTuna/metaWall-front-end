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
          <ul v-if="posts.length" class="ps-0">
            <PostCard
              v-for="post in posts"
              :key="post._id"
              :post="post"
              @post-like="postLikeHandler"
              @delete-like="deleteLikeHandler"
              @post-comment="postCommentHandler"
            />
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
import { ref } from 'vue'
import { getPosts } from '@/apis/post'
import { user } from '@/compatibles/data'
import PostFilter from '@/components/posts/filters/PostFilter.vue'
import EmptyPostCard from '@/components/posts/cards/EmptyPostCard.vue'
import PostCard from '@/components/posts/cards/PostCard.vue'

const loading = ref(true)
const sort = ref('desc')
const keyword = ref('')
const posts = ref([])

/**
 * 取得貼文列表
 * @returns {promise}
 */
const fetchPosts = async () => {
  const { data } = await getPosts({
    createdAt: sort.value,
    q: keyword.value
  })
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
const postLikeHandler = (postId) => {
  const post = posts.value.find((item) => item._id === postId)
  post.likes.push({ _id: user.value._id })
}
/**
 * 移除貼文的按讚
 * @param {string} postId 貼文編號
 */
const deleteLikeHandler = (postId) => {
  const post = posts.value.find((item) => item._id === postId)
  const index = post.likes.findIndex((item) => item._id === user.value._id)
  if (~index) post.likes.splice(index, 1)
}
/**
 * 貼文留言
 * @param {string} postId 貼文編號
 * @param {object} comment 留言資訊
 */
const postCommentHandler = ({ postId, comment }) => {
  const post = posts.value.find((item) => item._id === postId)
  post.comments.push(comment)
}

setPosts()
</script>
