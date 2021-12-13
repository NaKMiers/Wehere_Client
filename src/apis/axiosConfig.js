import 'firebase/compat/auth'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001'
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
