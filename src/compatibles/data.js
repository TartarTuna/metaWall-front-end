// 全站共用狀態
import { ref } from 'vue'
import { useCookies } from '@vueuse/integrations/useCookies'

export const cookieToken = useCookies(['wallToken'])

export const user = ref({})
