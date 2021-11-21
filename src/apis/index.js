import { API } from '../constants'
import axios from 'axios'

class Apis {
   checkUser = async (username, email) => axios.post(`${API}/users/check-user`, { username, email })
   createUser = async data => axios.post(`${API}/users/create`, data)

   checkLogin = async (usernameOrEmail, password) =>
      axios.post(`${API}/users/login`, { usernameOrEmail, password })
}

export default new Apis()
