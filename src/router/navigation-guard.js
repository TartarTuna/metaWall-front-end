import { getCookieToken } from '@/compatibles/method'
import { user } from '@/compatibles/data'

const checkAuth = async (to, from) => {
  if (!getCookieToken()) {
    return { name: 'login' }
  }
  try {
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
