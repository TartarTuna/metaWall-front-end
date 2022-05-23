import { getCookieToken } from '@/compatibles/method'
import { user } from '@/compatibles/data'
import { getUserProfile } from '@/apis/user'

const checkAuth = async (to, from) => {
  if (!getCookieToken()) {
    return { name: 'login' }
  }
  try {
    if (user.value._id) return true

    const { data } = await getUserProfile()
    user.value = data
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
