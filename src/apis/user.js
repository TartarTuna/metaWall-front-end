import axios from 'axios'

const api = import.meta.env.VITE_API_URL

export const signInApi = (payload) => {
  const url = `${api}/sign_in`
  return axios.post(url, payload)
}

export const signUpApi = (payload) => {
  const url = `${api}/sign_up`
  return axios.post(url, payload)
}

export const facebookSignInApi = () => {
  const url = `${api}/auth/facebook`
  return axios.get(url)
}

export const googleSignInApi = () => {
  const url = `${api}/auth/google`
  return axios.get(url)
}
