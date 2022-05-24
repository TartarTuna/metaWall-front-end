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

const checkUser = async (to, from) => {
  try {
    const auth = await checkAuth(to, from)
    if (auth === true) {
      // 檢查是否為有效的會員
      // await getUserCheck(to.params.userId)
      return true
    }
  } catch (e) {
    return { name: 'login' }
  }
}

export default {
  beforeEnter: {
    checkAuth,
    checkUser
  }
}
