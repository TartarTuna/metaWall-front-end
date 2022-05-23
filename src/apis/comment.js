import axios from '@/plugins/axios'

/**
 * 新增貼文留言
 * @param {string} postId 貼文編號
 * @param {object} payload 留言資訊
 * @returns {promise}
 */
export const postComment = (postId, payload) =>
  axios.post(`/posts/${postId}/comment`, payload)

/**
 * 新增貼文留言
 * @param {string} postId 貼文編號
 * @param {string} commentId 留言編號
 * @returns {promise}
 */
export const deleteComment = (postId, commentId) =>
  axios.delete(`/posts/${postId}/comment/${commentId}`)
