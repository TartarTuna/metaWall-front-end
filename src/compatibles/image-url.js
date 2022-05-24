import { computed } from 'vue'

/**
 * 校正後端回傳過來的圖片id/url，讓img標籤的src屬性可以直接讀取
 */
export const correctImageUrl = computed(() => (imageIdOrUrl) => {
  if (!imageIdOrUrl) return ''
  if (imageIdOrUrl.includes('imgur.com')) {
    const id = imageIdOrUrl.split('/').pop()
    return `https://i.imgur.com/${id}.png`
  }
  return `${import.meta.env.VITE_API_URL}/images/${imageIdOrUrl}`
})
