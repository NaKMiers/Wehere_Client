import { API } from '../constants'
import axios from 'axios'

class Apis {
   checkUser = async (username, email) => axios.post(`${API}/auth/check-user`, { username, email })
   createUser = async data => axios.post(`${API}/auth/create`, data)

   checkLogin = async (usernameOrEmail, password) =>
      axios.post(`${API}/auth/login`, { usernameOrEmail, password })

   changeTheme = async (userId, themeIndex) =>
      axios.put(`${API}/users/change-theme/${userId}/${themeIndex}`)
}

export default new Apis()
