<template>
  <li class="card h-100 p-3 border-0 rounded-3 mt-3 bg-gray-light">
    <div class="d-flex align-items-center mb-2">
      <img class="me-3 img-fluid" :src="comment.user.photo" alt="user2" />
      <div class="d-flex flex-column mt-2">
        <router-link to="personal" class="mb-0 fw-bold">{{
          comment.user.name
        }}</router-link>
        <small class="text-muted">{{ dayFormat(comment.createdAt) }}</small>
      </div>
      <div v-if="user._id === comment.user._id" class="ms-auto d-flex">
        <img
          src="@/assets/img/edit.png"
          class="d-block m-auto mx-2"
          alt=""
          @click="isEditing = !isEditing"
        />
        <img src="@/assets/img/trash.png" class="d-block m-auto mx-2" alt="" />
      </div>
    </div>
    <div v-if="isEditing" class="input-group mb-3">
      <input
        v-model="inputComment"
        type="text"
        class="form-control"
        placeholder="修改貼文內容"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <Button :load="loading" class="btn btn-primary rounded-0" type="button">
        OK
      </Button>
    </div>
    <p v-else class="m-0 fw-bold">{{ comment.content }}</p>
  </li>
</template>

<script setup>
import { ref } from 'vue'
import { dayFormat } from '@/plugins/day'
import { user } from '@/compatibles/data'
import { deleteComment } from '@/apis/comment'

const props = defineProps({
  postId: {
    type: String,
    required: true
  },
  comment: {
    type: Object,
    required: true
  }
})
const loading = ref(false)
const isEditing = ref(false)
const inputComment = ref('')

inputComment.value = props.comment.content

const deleteCommentHandler = async () => {
  try {
    deleteComment(props.postId, props.comment._id)
  } catch (e) {
    alert(e.message)
  }
}
</script>
