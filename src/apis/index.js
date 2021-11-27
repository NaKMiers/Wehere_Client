import { API } from '../constants'
import axios from 'axios'

class Apis {
   checkUser = async (username, email) => axios.post(`${API}/auth/check-user`, { username, email })
   createUser = async data => axios.post(`${API}/auth/create`, data)

   checkLogin = async (usernameOrEmail, password) =>
      axios.post(`${API}/auth/login`, { usernameOrEmail, password })

   getUser = async userId => axios.get(`${API}/users/${userId}`)

   changeTheme = async (userId, themeIndex) =>
      axios.put(`${API}/users/change-theme/${userId}/${themeIndex}`)

   getAllTaskRequest = async taskList => axios.post(`${API}/todo-list`, { taskList })
   addNewTask = async data => {
      console.log('addNewTask')
      return axios.post(`${API}/todo-list/add-task`, data)
   }
   updateTodoList = async (userId, taskId) =>
      axios.put(`${API}/users/update-todo-list/${userId}/${taskId}`)
   deleteTask = async taskId => axios.delete(`${API}/todo-list/delete-task/${taskId}`)
   editTask = async data => axios.put(`${API}/todo-list/edit-task`, { data })

   addFriendRequest = async (userId, curUserId) =>
      axios.put(`${API}/users/add-friend/request/${userId}`, { curUserId })
   addFriendResponse = async (userId, curUserId, value) =>
      axios.put(`${API}/users/add-friend/response/${userId}`, { curUserId, value })

   removeNotify = async (userId, curUserId, value) =>
      axios.put(`${API}/users/remove-notify/${userId}`, { curUserId, value })

   getFriends = async friends => axios.post(`${API}/users/get-friends`, { friends })

   getConversation = async userId => axios.get(`${API}/conversations/${userId}`)
}

export default new Apis()
