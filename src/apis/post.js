import axios from '@/plugins/axios'

/**
 * 取得全部的貼文
 * @param {object} params query string
 * @returns {promise}
 */
export const getPosts = (params) => axios.get('/posts', { params })
