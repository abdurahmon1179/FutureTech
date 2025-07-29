import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/homepage.vue'
import SecondPage from "../components/second-page/index.vue"


const routes = [
  { path: '/', component: HomePage },
  { path: '/second', component: SecondPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
