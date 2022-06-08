import { getCookieToken, setCookieToke } from '@/compatibles/method'
import { user, errorFromUrl } from '@/compatibles/data'
import { specificUser } from '@/compatibles/personal/data'
import { getUserProfile, getSpecificUserProfile } from '@/apis/user'

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
      const { data } = await getSpecificUserProfile(to.params.userId)
      specificUser.value = data
      return true
    }
  } catch (e) {
    return { name: 'wall' }
  }
}

const checkThirdParty = (to) => {
  const { query } = to
  if (query.token) {
    const token = query.token
    setCookieToke(token)
    return { name: 'wall', query: {} }
  }
  if (query.error) {
    errorFromUrl.value = query.error
    return { name: 'login', query: {} }
  }
  return { name: to.name }
}

export default {
  beforeEnter: {
    checkAuth,
    checkUser,
    checkThirdParty
  }
}
