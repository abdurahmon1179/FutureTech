import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // ❗ Routerni import qilish

const app = createApp(App)
app.use(router) // ❗ Routerni ulash
app.mount('#app')
