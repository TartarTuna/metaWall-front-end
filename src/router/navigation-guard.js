import { getCookieToken } from '@/compatibles/method'
import globalData from '@/compatibles/data'

const checkAuth = async (to, from) => {
  if (!getCookieToken()) {
    return { name: 'login' }
  }
  try {
    const { user } = globalData()
    if (user.value._id) return true

    // const { data } = await getProfile()
    // user.value = data
    return true
  } catch (e) {
    return { name: 'login' }
  }
}

export default {
  beforeEnter: {
    checkAuth
  }
}
