import ajax from '@/utils/ajax'

export const getCategory = () => {
  return ajax({
    url: '/category',
  })
}
