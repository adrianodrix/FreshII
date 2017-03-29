import http from 'axios'
import localforage from 'localforage'
import { setHttpToken } from '@/helpers'
import { isEmpty } from 'lodash'

export const register = ({ dispatch }, { user, context }) => {
  return http.post('http://localhost/api/register', user)
    .then((response) => {
      dispatch('setToken', response.data.meta.token).then(() => {
        dispatch('fechUser')
      })
    })
    .catch((error) => {
      context.errors = error.response.data.errors
    })
}

export const login = ({ dispatch }, { user, context }) => {
  return http.post('http://localhost/api/login', user)
    .then((response) => {
      dispatch('setToken', response.data.meta.token).then(() => {
        dispatch('fechUser')
      })
    })
    .catch((error) => {
      context.errors = error.response.data.errors
      return Promise.reject('NOT_AUTHENTICATED')
    })
}

export const fechUser = ({ commit }) => {
  return http.get('http://localhost/api/me').then((response) => {
    commit('setAuthenticated', true)
    commit('setUserData', response.data.data)

    return response.data.data
  })
}

export const logout = ({ commit, dispatch }) => {
  return http.post('http://localhost/api/logout').then((response) => {
    dispatch('clearAuth')
  })
}

export const setToken = ({ commit, dispatch }, token) => {
  if (isEmpty(token)) {
    return dispatch('checkTokenExists').then((token) => {
      setHttpToken(token)
    })
  }

  commit('setToken', token)
  setHttpToken(token)
}

export const checkTokenExists = ({ commit, dispatch }, token) => {
  return localforage.getItem('authtoken').then((token) => {
    if (isEmpty(token)) {
      dispatch('clearAuth')
      return Promise.reject('NO_STORAGE_TOKEN')
    }
    return Promise.resolve(token)
  })
}

export const clearAuth = ({ commit }) => {
  commit('setAuthenticated', false)
  commit('setUserData', null)
  commit('setToken', null)
  setHttpToken(null)
}
