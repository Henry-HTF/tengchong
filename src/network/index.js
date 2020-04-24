import {
  request
} from './request'

export function getMenuList() {
  return request({
    url: '/config/getJobConfigEffect',
    method: 'get'
  })
}

export function getSwiper() {
  return request({
    url: '/swiper/listSwiper',
    method: 'get'
  })
}