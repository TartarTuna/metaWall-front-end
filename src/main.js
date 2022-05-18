import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import '@/assets/scss/all.scss'
import 'bootstrap'

const app = createApp(App)
app.use(router)
app.mount('#app')
