import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { PC_DEVICE_WIDTH } from '@/constants'

const { width } = useWindowSize()

// 当前设备是否是移动端设备
export const isMobileDevice = computed(() => {
  return width.value < PC_DEVICE_WIDTH
})
