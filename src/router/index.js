import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/homepage.vue'
import SecondPage from "../components/second-page/index.vue"
import ThirdPage from "../components/third-page/index.vue"
import FourthPage from "../components/fourth-page/index.vue"


const routes = [
  { path: '/', component: HomePage },
  { path: '/second', component: SecondPage },
  { path: '/third', component: ThirdPage },
  {path: '/fourth', component: FourthPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
