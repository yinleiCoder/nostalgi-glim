import { createRouter, createWebHistory } from 'vue-router'
import { isMobileDevice } from '@/utils/flexible'
import mobileRoutes from './modules/mobile'
import pcRoutes from './modules/pc'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: isMobileDevice.value ? mobileRoutes : pcRoutes,
})

export default router
