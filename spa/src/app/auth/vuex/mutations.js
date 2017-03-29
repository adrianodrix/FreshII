import localforage from 'localforage'
import { isEmpty } from 'lodash'

export const setToken = (state, token) => {
  if (isEmpty(token)) {
    localforage.removeItem('authtoken', token)
    return
  }

  localforage.setItem('authtoken', token)
}

export const setAuthenticated = (state, authenticated) => {
  state.user.authenticated = authenticated
}

export const setUserData = (state, user) => {
  state.user.data = user
}
