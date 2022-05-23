import axios from '@/plugins/axios'

/**
 * 貼文按讚
 * @param {string} postId 貼文編號
 * @returns {promise}
 */
export const patchLike = (postId) => axios.patch(`/posts/${postId}/like`)

/**
 * 取消貼文按讚
 * @param {string} postId 貼文編號
 * @returns {promise}
 */
export const patchUnlike = (postId) => axios.patch(`/posts/${postId}/unlike`)
