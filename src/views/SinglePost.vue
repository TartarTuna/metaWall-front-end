<template>
  <Navbar />
  <section class="container mt-7 px-lg-12 mb-12">
    <div class="row">
      <!-- ---left main--- -->
      <div class="col-lg-7">
        <empty-post-card v-if="!singlePost && !isDelete"
          >載入中...
        </empty-post-card>
        <empty-post-card v-else-if="!singlePost && isDelete"
          >此貼文已刪除
        </empty-post-card>
        <template v-else>
          <ul v-if="singlePost" class="ps-0">
            <PostCard
              :post="singlePost"
              @post-like="postLike"
              @delete-like="deleteLike"
              @post-comment="postComment"
              @edit-comment="editComment"
              @delete-comment="deleteComment"
              @edit-post="editPost"
              @delete-post="deletePost"
            />
          </ul>
          <!-- <EmptyPostCard v-else /> -->
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
import { ref } from 'vue'
import { user as me } from '@/compatibles/data'
import { getSpecificUserPosts } from '@/apis/post'
import PostCard from '@/components/posts/cards/PostCard.vue'
import EmptyPostCard from '@/components/posts/cards/EmptyPostCard.vue'
import Navbar from '@/components/Navbar.vue'
import RightBar from '@/components/RightBar.vue'
import PhoneMenu from '@/components/PhoneMenu.vue'

const props = defineProps({
  userId: {
    type: String,
    required: true
  },
  postId: {
    type: String,
    required: true
  }
})

const singlePost = ref(null)
const posts = ref(null)
const isDelete = ref(false)

/**
 * 取得個人的貼文
 * @param {string} userId 會員編號
 * @returns {promise}
 */
const getUserPosts = async (userId) => {
  const { data } = await getSpecificUserPosts(userId)
  return data
}

const setSinglePostData = async () => {
  if (props) {
    const userPosts = await getUserPosts(props.userId)
    const data = userPosts.filter((item) => item._id === props.postId)
    singlePost.value = data[0]
    posts.value = data
  }
}

setSinglePostData()

/**
 * 按讚貼文
 * @param {string} postId 貼文編號
 */
const postLike = (postId) => {
  singlePost.value.likes.push({ _id: me.value._id })
}
/**
 * 移除貼文的按讚
 * @param {string} postId 貼文編號
 */
const deleteLike = (postId) => {
  const index = singlePost.value.likes.findIndex(
    (item) => item._id === me.value._id
  )
  if (~index) singlePost.value.likes.splice(index, 1)
}
/**
 * 貼文留言
 * @param {string} postId 貼文編號
 * @param {object} comment 留言資訊
 */
const postComment = ({ postId, comment }) => {
  singlePost.value.comments.push(comment)
}
/**
 * 編輯貼文留言
 * @param {string} postId 貼文編號
 * @param {string} commentId 留言編號
 * @param {string} content 內容
 */
const editComment = ({ postId, commentId, content }) => {
  const comment = singlePost.value.comments.find(
    (item) => item._id === commentId
  )
  comment.content = content
}
/**
 * 刪除貼文留言
 * @param {string} postId 貼文編號
 * @param {string} commentId 留言編號
 */
const deleteComment = ({ postId, commentId }) => {
  const index = singlePost.value.comments.findIndex(
    (item) => item._id === commentId
  )
  if (~index) singlePost.value.comments.splice(index, 1)
}
/**
 * 編輯貼文
 * @param {string} postId 貼文編號
 * @param {string} content 內容
 * @param {string} image 圖片
 */
const editPost = ({ postId, content, image }) => {
  singlePost.value.content = content
  singlePost.value.image = image
}
/**
 * 刪除貼文
 * @param {string} postId 貼文編號
 */
const deletePost = (postId) => {
  singlePost.value = null
  isDelete.value = true
}
</script>
