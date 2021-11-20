import { API } from '../constants'
import axios from 'axios'

class Apis {
   checkUser = async (username, email) => {
      return axios.post(`${API}/users/check-user`, { username, email })
   }
}

export default new Apis()
