// 全站共用狀態
import { ref } from 'vue'
import { useCookies } from '@vueuse/integrations/useCookies'

const cookieToken = useCookies(['wallToken'])
const user = ref({})

export default () => {
  return { cookieToken, user }
}
