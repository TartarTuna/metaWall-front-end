import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import Navbar from '@/components/Navbar.vue'
import RightBar from '@/components/RightBar.vue'
import PhoneMenu from '@/components/PhoneMenu.vue'
import Button from '@/components/Button.vue'
import '@/assets/scss/all.scss'
import 'bootstrap'

const app = createApp(App)
app.component('Navbar', Navbar)
app.component('RightBar', RightBar)
app.component('PhoneMenu', PhoneMenu)
app.component('Button', Button)
app.use(router)
app.mount('#app')
