import axios from '@/plugins/axios'

const headers = {
  'Content-Type': 'multipart/form-data'
}

/**
 * 上傳圖片
 * @param {formData} payload 圖片資訊
 * @returns {promise}
 */
export const postImage = (payload) =>
  axios.post('/images', payload, { headers })
