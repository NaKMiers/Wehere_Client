import 'firebase/compat/auth'
import axios from 'axios'
import { API } from '../constants'

axios.defaults.baseURL = `${API}`
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use(async config => {
   // const token = await getFirebaseToken()
   const token = localStorage.getItem('user')
   if (token) {
      config.headers.Authorization = 'Bearer ' + token
   }

   return config
})
