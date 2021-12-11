// import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import axios from 'axios'

// const getFirebaseToken = async () => {
//    const curUser = firebase.auth().currentUser
//    // console.log('curUser: ', curUser)
//    // has curUser
//    if (curUser) return curUser.getIdToken()

//    // Not logged in
//    const hasRememberAccount = localStorage.getItem('user')
//    console.log('asdasdasdasdasd: ', localStorage.getItem('user'))
//    if (!hasRememberAccount) return null

//    // Logged in but curUser indefined --> wait (10s)
//    return new Promise((resolve, reject) => {
//       const waitTimer = setTimeout(() => {
//          reject(null)
//       }, 10000)

//       const unRegisterAuthObserver = firebase.auth().onAuthStateChanged(async user => {
//          if (!user) {
//             reject(null)
//          }

//          const token = await user.getIdToken()
//          // console.log('[AXIOS]: ', token)
//          resolve(token)

//          unRegisterAuthObserver()
//          clearTimeout(waitTimer)
//       })
//    })
// }

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
