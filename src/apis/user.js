import axios from '@/plugins/axios'

export const signInApi = (payload) => axios.post('/sign_in', payload)

export const signUpApi = (payload) => axios.post('/sign_up', payload)

export const facebookSignInApi = () => axios.get('/auth/facebook')

export const googleSignInApi = () => axios.get('/auth/google')
