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
   updateAvatar = data => axios.put(`${API}/users/update-avatar`, data)
   updateBackground = data => axios.put(`${API}/users/update-background`, data)

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

   getFriends = friendList => axios.post(`${API}/users/get-friends`, { friendList })

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

   // blogs
   postBlogStatus = data => axios.post(`${API}/blogs/post`, data)
   getBlogsNewfeed = () => axios.get(`${API}/blogs/get-blogs-newfeed`)
   likeBlogStatus = (blogId, userId, value) =>
      axios.patch(`${API}/blogs/like`, { blogId, userId, value })
   deleteBlogStatus = blogId => axios.delete(`${API}/blogs/delete-blog/${blogId}`)

   // images
   postImageStatus = data => axios.post(`${API}/images/post`, data)
   getImagesNewfeed = () => axios.get(`${API}/images/get-images-newfeed`)
   likeImageStatus = (imageId, userId, value) =>
      axios.patch(`${API}/images/like`, { imageId, userId, value })
   deleteImageStatus = imageId => axios.delete(`${API}/images/delete-image/${imageId}`)

   // videos
   postVideoStatus = data => axios.post(`${API}/videos/post`, data)
   getVideosNewfeed = () => axios.get(`${API}/videos/get-videos-newfeed`)
   likeVideoStatus = (videoId, userId, value) =>
      axios.patch(`${API}/videos/like`, { videoId, userId, value })
   deleteVideoStatus = videoId => axios.delete(`${API}/videos/delete-video/${videoId}`)

   //shorts
   postShortStatus = data => axios.post(`${API}/shorts/post`, data)
   getShortsNewfeed = () => axios.get(`${API}/shorts/get-shorts-newfeed`)
   likeShortStatus = (shortId, userId, value) =>
      axios.patch(`${API}/shorts/like`, { shortId, userId, value })
   deleteShortStatus = shortId => axios.delete(`${API}/shorts/delete-short/${shortId}`)

   // musics
   addSong = data => axios.post(`${API}/musics/add-song`, data)
   getMySongList = () => axios.get(`${API}/musics/get-my-song-list`)
   addPlaylist = data => axios.post(`${API}/musics/add-playlist`, data)
   getMyPlaylistList = () => axios.get(`${API}/musics/get-my-playlist-list`)
   getPlaylist = playlistId => axios.get(`${API}/musics/get-playlist/${playlistId}`)
   getSongListInPlaylist = data => axios.post(`${API}/musics/get-songList-in-playlist`, data)
   addSongToPlaylist = (playlistId, songId) =>
      axios.post(`${API}/musics/add-song-to-playlist`, { playlistId, songId })
   removeSongFromPlaylist = (playlistId, songId) =>
      axios.patch(`${API}/musics/remove-song-from-playlist`, { playlistId, songId })
   markFavoriteSong = (songId, value) =>
      axios.patch(`${API}/musics/mark-favorite-song`, { songId, value })
   deleteSong = songId => axios.delete(`${API}/musics/delete-song/${songId}`)
   deletePlaylist = playlistId => axios.delete(`${API}/musics/delete-playlist/${playlistId}`)

   // accounts
   getAccounts = accountList => axios.post(`${API}/users/get-accounts`, { accountList })

   // profile page
   getAllPosts = userId => axios.get(`${API}/users/get-all-posts/${userId}`)
}

export default new Apis()
