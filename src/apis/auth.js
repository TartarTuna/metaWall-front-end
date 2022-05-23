import axios from '@/plugins/axios'

export const facebookSignInApi = () => axios.get('/auth/facebook')

export const googleSignInApi = () => axios.get('/auth/google')
