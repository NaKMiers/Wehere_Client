import { API } from '../constants'
import axios from 'axios'

class Apis {
   checkUser = async (username, email) => axios.post(`${API}/auth/check-user`, { username, email })
   createUser = async data => axios.post(`${API}/auth/create`, data)

   checkLogin = async (usernameOrEmail, password) =>
      axios.post(`${API}/auth/login`, { usernameOrEmail, password })

   getUser = async userId => axios.get(`${API}/users/${userId}`)

   changeTheme = async themeIndex => axios.put(`${API}/users/change-theme/${themeIndex}`)

   getAllTaskRequest = async taskList => axios.post(`${API}/todo-list`, { taskList })
   addNewTask = async data => {
      console.log('addNewTask')
      return axios.post(`${API}/todo-list/add-task`, data)
   }
   updateTodoList = async taskId => axios.put(`${API}/users/update-todo-list/${taskId}`)
   deleteTask = async taskId => axios.delete(`${API}/todo-list/delete-task/${taskId}`)
   editTask = async data => axios.put(`${API}/todo-list/edit-task`, { data })

   addFriendRequest = async userId => axios.put(`${API}/users/add-friend/request/${userId}`)
   addFriendResponse = async (userId, value, notifyId) =>
      axios.put(`${API}/users/add-friend/response/${userId}`, { value, notifyId })

   removeNotify = async (userRequestId, curUserId, curNotify) =>
      axios.put(`${API}/users/remove-notify`, { userRequestId, curUserId, curNotify })

   getFriends = async friends => axios.post(`${API}/users/get-friends`, { friends })

   getConversation = async userId => axios.get(`${API}/conversations/${userId}`)

   getNotifications = async notificationList =>
      axios.post(`${API}/notifications`, { notificationList })
   seenNotifications = async () => axios.put(`${API}/users/seen-notifications`)
}

export default new Apis()
