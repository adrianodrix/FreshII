import Login from '../components/Login'
import Register from '../components/Register'

export default [
  {path: '/login', component: Login, name: 'auth.login', meta: {guest: true, needsAuth: false}},
  {path: '/register', component: Register, name: 'auth.register', meta: {guest: true, needsAuth: false}}
]
