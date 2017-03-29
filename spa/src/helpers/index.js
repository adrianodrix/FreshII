import { isEmpty } from 'lodash'
import http from 'axios'

export const setHttpToken = (token) => {
  if (isEmpty(token)) {
    http.defaults.headers.common['Authorization'] = null
  }
  http.defaults.headers.common['Authorization'] = 'Bearer ' + token
}
