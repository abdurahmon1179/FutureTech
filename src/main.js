import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import i18n from './i18n' // i18n ni import qildik

const app = createApp(App)

app.use(router)
app.use(Antd)
app.use(i18n) // i18n ulash
app.mount('#app')
