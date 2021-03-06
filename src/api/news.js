/*
 * @Author: Rainy
 * @Date: 2018-03-01 18:23:53
 * @Last Modified by: Rainy
 * @Last Modified time: 2018-03-13 17:52:16
 */
import axios from 'axios'

export function getThemeTitle () {
  return axios.get('api/themes').then((res) => {
    return Promise.resolve(res)
  })
}
export function getSlider () {
  return axios.get('api/news/latest').then((res) => {
    return Promise.resolve(res)
  })
}

export function getNews () {
  return axios.get('api/news/latest').then((res) => {
    return Promise.resolve(res)
  })
}

export function getMoreNews (homepageDateStr) {
  return axios('api/news/before/' + homepageDateStr).then(res => {
    return Promise.resolve(res)
  })
}

export function getNewsContent (id) {
  return axios('api/news/' + id).then(res => {
    return Promise.resolve(res)
  })
}

export function getTheme (id) {
  return axios('api/theme/' + id).then(res => {
    return Promise.resolve(res)
  })
}

export function getEditorProfile (id) {
  return axios('api/editor/' + id + '/profile-page/ios').then(res => {
    return Promise.resolve(res)
  })
}

export function getNewsExtraData (id) {
  return axios('api/story-extra/' + id).then(res => {
    return Promise.resolve(res)
  })
}

export function getLatestNews () {
  return axios('api/news/latest').then(res => {
    return Promise.resolve(res)
  })
}
