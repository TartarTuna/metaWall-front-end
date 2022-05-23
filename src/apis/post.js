import axios from '@/plugins/axios'

/**
 * 取得全部的貼文
 * @param {object} params query string
 * @returns {promise}
 */
export const getPosts = (params) => axios.get('/posts', { params })

/**
 * 新增貼文
 * @param {object} payload 貼文內容
 * @returns {promise}
 */
export const addPost = (payload) => axios.post('/posts', payload)

/**
 * 編輯貼文
 * @param {string} postId 貼文編號
 * @param {object} payload 編輯資訊
 * @returns {promise}
 */
export const patchPost = (postId, payload) =>
  axios.patch(`/posts/${postId}`, payload)

/**
 *刪除貼文
 * @param {string} postId 貼文編號
 * @returns {promise}
 */
export const deletePost = (postId) => axios.delete(`/posts/${postId}`)
