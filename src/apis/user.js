import axios from '@/plugins/axios'

/**
 * 會員登入
 * @param {object} payload 登入資料
 * @returns {promise}
 */
export const signInApi = (payload) => axios.post('/sign_in', payload)

/**
 * 會員註冊
 * @param {object} payload 註冊資料
 * @returns {promise}
 */
export const signUpApi = (payload) => axios.post('/sign_up', payload)

/**
 * 取得會員資訊
 * @returns {promise}
 */
export const getUserProfile = () => axios.get('/users/me')

/**
 * 更新會員資訊
 * @param {object} payload 會員資訊
 * @returns {promise}
 */
export const patchUserProfile = (payload) => axios.patch('/users/me', payload)

/**
 * 更新會員密碼
 * @param {object} payload 密碼資訊
 * @returns {promise}
 */
export const patchUserPassword = (payload) =>
  axios.patch('/users/password', payload)
