<template>
  <li class="card h-100 py-4 px-4 mb-3 border-2 shadow-pushcard border8px">
    <div class="d-flex align-items-center mb-3">
      <img
        width="45"
        class="me-3 img-fluid"
        :src="correctImageUrl(post.user.photo)"
        alt="user1"
      />
      <div class="d-flex flex-column mt-2">
        <router-link to="personal" class="mb-0 fw-bold">{{
          post.user.name
        }}</router-link>
        <small class="text-muted">{{ dayFormat(post.createdAt) }}</small>
      </div>
      <div class="ms-auto d-flex">
        <img
          v-if="isMe"
          src="@/assets/img/edit.png"
          class="d-block m-auto mx-2"
          @click="isEditing = !isEditing"
        />
        <img src="@/assets/img/share.png" class="d-block m-auto mx-2" alt="" />
        <img
          v-if="isMe"
          src="@/assets/img/trash.png"
          class="d-block m-auto mx-2"
          @click="deletePostHandler"
        />
      </div>
    </div>
    <EditPostForm v-if="isEditing" :post="post" @edit-post="editPost" />
    <template v-else>
      <p class="fw-bold">{{ post.content }}</p>
      <!-- ---tag--- -->
      <div v-if="post.tag.length" class="card-footer border-0 bg-white d-flex">
        <div v-for="item in post.tag" :key="item" class="mx-2 text-primary">
          #{{ item }}
        </div>
      </div>
      <img
        v-if="post.image"
        :src="correctImageUrl(post.image)"
        alt="post image"
        class="img-fluid"
      />
    </template>
    <!-- ---thumb--- -->
    <div class="d-flex mt-3">
      <button type="button" class="btn py-0" @click="clickLikeHandler">
        <span
          class="material-icons material-icons-outlined fs-5"
          :class="post.likes.length ? 'text-primary' : 'text-muted'"
        >
          thumb_up
        </span>
      </button>
      <p class="m-0 fs-7" :class="{ 'text-muted': !post.likes.length }">
        {{ post.likes.length || '成為第一個按讚的朋友' }}
      </p>
    </div>
    <!-- -add--message--- -->
    <div class="d-flex mt-3">
      <img
        width="40"
        :src="correctImageUrl(user.photo)"
        alt="usr1"
        class="img-fluid me-1"
      />
      <div class="input-group">
        <input
          v-model="comment"
          type="text"
          class="form-control border-dark border-2 border-end-0"
          placeholder="留言..."
          aria-label="message"
          aria-describedby="button-message"
        />
        <Button
          :loading="loading"
          class="btn btn-primary border-dark border-2 px-4 rounded-0 fw-bold"
          type="button"
          @click="commentHandler"
        >
          留言
        </Button>
      </div>
    </div>
    <!-- ----openmessage---- -->
    <template v-if="post.comments.length">
      <div class="card h-100 py-3 border-0 rounded-0">
        <a
          class="btn btn-outline-primary border-0 fw-bold"
          data-bs-toggle="collapse"
          :href="`#collapse${post._id}`"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          style="box-shadow: none"
        >
          查看其他留言
        </a>
      </div>
      <section class="collapse" :id="`collapse${post._id}`">
        <ul class="card card-body border-0">
          <CommentItem
            v-for="item in post.comments"
            :key="item._id"
            :post-id="post._id"
            :comment="item"
            @delete-comment="deleteComment"
            @edit-comment="editComment"
          />
        </ul>
      </section>
    </template>
  </li>
</template>

<script setup>
import { ref, toRefs, computed } from 'vue'
import { user } from '@/compatibles/data'
import { correctImageUrl } from '@/compatibles/image-url'
import { patchLike, patchUnlike } from '@/apis/like'
import { postComment } from '@/apis/comment'
import { deletePost } from '@/apis/post'
import { dayFormat } from '@/plugins/day'
import EditPostForm from '@/components/posts/forms/EditPostForm.vue'
import CommentItem from '@/components/posts/CommentItem.vue'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const loading = ref(false)
const isEditing = ref(false)
const comment = ref('')
const { post } = toRefs(props)
const emit = defineEmits([
  'post-like',
  'delete-like',
  'post-comment',
  'delete-comment',
  'edit-comment',
  'edit-post',
  'delete-post'
])
const isMe = computed(() => {
  return user.value._id === post.value.user._id
})

/**
 * 按讚事件
 */
const postLikeHandler = () => {
  try {
    patchLike(post.value._id)
    emit('post-like', post.value._id)
  } catch (e) {
    alert(e.message)
    deleteLikeHandler()
  }
}
/**
 * 移除按讚事件
 */
const deleteLikeHandler = () => {
  try {
    patchUnlike(post.value._id)
    emit('delete-like', post.value._id)
  } catch (e) {
    alert(e.message)
  }
}
/**
 * 點擊按讚事件
 */
const clickLikeHandler = () => {
  if (post.value.likes.some((item) => item._id === user.value._id))
    return deleteLikeHandler()
  postLikeHandler()
}
/**
 * 貼文留言事件
 */
const commentHandler = async () => {
  try {
    if (!comment.value) return
    loading.value = true
    const { data } = await postComment(post.value._id, {
      content: comment.value
    })
    emit('post-comment', {
      postId: post.value._id,
      comment: {
        _id: data.comments.pop(),
        user: { ...user.value },
        content: comment.value,
        createdAt: new Date().toJSON()
      }
    })
    comment.value = ''
  } catch (e) {
    alert(e.message)
  } finally {
    loading.value = false
  }
}
/**
 * 刪除貼文留言
 * @param {string} commentId 留言編號
 */
const deleteComment = (commentId) => {
  emit('delete-comment', {
    postId: post.value._id,
    commentId
  })
}
/**
 * 編輯貼文留言
 * @param {object} data 留言資訊
 */
const editComment = (data) => {
  emit('edit-comment', {
    postId: post.value._id,
    ...data
  })
}
/**
 * 編輯貼文
 * @param {object} data 編輯的貼文資訊
 */
const editPost = (data) => {
  emit('edit-post', { postId: post.value._id, ...data })
  isEditing.value = false
}
/**
 * 刪除貼文事件
 */
const deletePostHandler = () => {
  if (!confirm('確定要刪除這則貼文嗎？')) return
  try {
    deletePost(post.value._id)
    emit('delete-post', post.value._id)
  } catch (e) {
    alert(e.message)
  }
}
</script>
