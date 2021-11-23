import { API } from '../constants'
import axios from 'axios'

class Apis {
   checkUser = async (username, email) => axios.post(`${API}/auth/check-user`, { username, email })
   createUser = async data => axios.post(`${API}/auth/create`, data)

   checkLogin = async (usernameOrEmail, password) =>
      axios.post(`${API}/auth/login`, { usernameOrEmail, password })

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
}

export default new Apis()
