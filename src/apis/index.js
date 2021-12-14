import { API } from '../constants'
import axios from 'axios'

class Apis {
   // authentication
   checkUser = (username, email) => axios.post(`${API}/auth/check-user`, { username, email })
   createUser = data => axios.post(`${API}/auth/create`, data)
   login = (usernameOrEmail, password) =>
      axios.post(`${API}/auth/login`, { usernameOrEmail, password })
   signInWithSocial = data => axios.post(`${API}/auth/sign-in-with-social`, data)

   // users
   getUser = userId => axios.get(`${API}/users/${userId}`)
   changePassword = (curPassword, newPassword) =>
      axios.put(`${API}/users/change-password`, { curPassword, newPassword })
   changeTheme = themeIndex => axios.put(`${API}/users/change-theme/${themeIndex}`)

   // todolist
   getAllTaskRequest = () => axios.post(`${API}/todo-list`)
   addNewTask = data => axios.post(`${API}/todo-list/add-task`, data)
   deleteTask = taskId => axios.delete(`${API}/todo-list/delete-task/${taskId}`)
   editTask = data => axios.put(`${API}/todo-list/edit-task`, { data })

   // add friend and unfriend
   addFriendRequest = userId => axios.put(`${API}/users/add-friend/request/${userId}`)
   addFriendResponse = (userId, value, notifyId) =>
      axios.put(`${API}/users/add-friend/response/${userId}`, { value, notifyId })
   unfriend = userId => axios.put(`${API}/users/un-friend/${userId}`)

   // notifications
   getNotifications = notificationList => axios.post(`${API}/notifications`, { notificationList })
   seenNotifications = () => axios.put(`${API}/users/seen-notifications`)
   removeNotify = curNotifyId => axios.put(`${API}/users/remove-notify/${curNotifyId}`)

   getFriends = () => axios.get(`${API}/users/get-friends`)

   // messenger
   changeOnlineStatus = status => axios.put(`${API}/users/online-status`, { status })
   getConversation = userId => axios.get(`${API}/conversations/${userId}`)
   getOneConversation = (curUserId, friendId) =>
      axios.get(`${API}/conversations/get-one-conversation/${curUserId}/${friendId}`)
   getMessages = curCvsId => axios.get(`${API}/messages/${curCvsId}`)
   sendMessage = message => axios.post(`${API}/messages/new-message`, { message })

   // diaries
   getDiaries = () => axios.get(`${API}/diaries`)
   createDiary = data => axios.post(`${API}/diaries/create`, data)
   editDiary = (diaryId, data) => axios.put(`${API}/diaries/edit/${diaryId}`, data)
   deleteDiary = diaryId => axios.delete(`${API}/diaries/delete/${diaryId}`)

   getAccounts = accountList => axios.post(`${API}/users/get-accounts`, { accountList })
}

export default new Apis()
