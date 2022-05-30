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

/**
 * 取得全部按讚的貼文
 * @returns {promise}
 */
export const getLikePosts = (params) => axios.get('/posts/likes')
