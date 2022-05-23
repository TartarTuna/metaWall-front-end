<template>
  <li class="card h-100 py-4 px-4 mb-3 border-2 shadow-pushcard border8px">
    <div class="d-flex align-items-center mb-3">
      <img class="me-3 img-fluid" :src="post.user.photo" alt="user1" />
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
          alt=""
        />
      </div>
    </div>
    <form v-if="isEditing" @submit.prevent>
      <div class="form-group mb-3">
        <label for="content fw-bold">修改貼文內容</label>
        <textarea
          class="form-control border border-dark border-2"
          type="text"
          id="content"
          rows="5"
          placeholder="輸入您的貼文內容"
        ></textarea>
      </div>
      <div class="form-group mb-3">
        <label for="content fw-bold">修改tag</label>
        <textarea
          class="form-control border border-dark border-2"
          type="text"
          id="content"
          rows="5"
          placeholder="修改tag"
        ></textarea>
      </div>
      <div class="input-group mb-3">
        <input type="text" style="display: none" placeholder="上傳圖片" />
        <button class="btn btn-dark border" style="border-radius: 8px">
          上傳圖片
        </button>
      </div>
      <img
        src="@/assets/img/photo1.png"
        alt="photo1"
        class="w-100 img-fluid mb-2"
      />
      <div class="d-grid gap-2 col-2 ms-auto mt-5">
        <button
          type="submit"
          class="btn btn-primary border border-dark border-2 fw-bold py-2 border8px"
        >
          OK
        </button>
      </div>
    </form>
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
        :src="post.image"
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
      <img :src="user.photo" alt="usr1" class="img-fluid me-1" />
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
          />
        </ul>
      </section>
    </template>
  </li>
</template>

<script setup>
import { ref, toRefs, computed } from 'vue'
import { user } from '@/compatibles/data'
import { patchLike, patchUnlike } from '@/apis/like'
import { postComment } from '@/apis/comment'
import { dayFormat } from '@/plugins/day'
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
const emit = defineEmits(['post-like', 'delete-like', 'post-comment'])
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
</script>
