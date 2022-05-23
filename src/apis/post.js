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
