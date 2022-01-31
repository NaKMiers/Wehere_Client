import types from '../constants/actionTypes'

class Actions {
   checkUser = payload => ({ type: types.CHECK_USER, payload })
   createNewUser = payload => ({ type: types.CREATE_NEW_USER, payload })

   loginRequest = payload => ({ type: types.LOGIN_REQUEST, payload })
   login = payload => ({ type: types.LOGIN, payload })

   logOut = () => ({ type: types.LOG_OUT })

   getUserRequest = userId => ({ type: types.GET_USER_REQUEST, userId })
   getUser = payload => ({ type: types.GET_USER, payload })

   changeThemeRequest = payload => ({ type: types.CHANGE_THEME_REQUEST, payload })
   changeTheme = theme => ({ type: types.CHANGE_THEME, theme })
   setTheme = theme => ({ type: types.SET_THEME, theme })
   changeAvatar = payload => ({ type: types.CHANGE_AVATAR, payload })
   changeBackground = payload => ({ type: types.CHANGE_BACKGROUND, payload })

   setTodoList = payload => ({ type: types.SET_TODOLIST, payload })
   addNewTask = payload => ({ type: types.ADD_NEW_TASK, payload })
   deleteTask = taskId => ({ type: types.DELETE_TASK, taskId })
   editTask = payload => ({ type: types.EDIT_TASK, payload })
   setReadyTask = payload => ({ type: types.SET_READY_TASK, payload })
   setCompletedTask = payload => ({ type: types.SET_COMPLETED_TASK, payload })

   setConversations = payload => ({ type: types.SET_CONVERSATIONS, payload })
   setCurConversation = payload => ({ type: types.SET_CUR_CONVERSATION, payload })

   getNotifications = payload => ({ type: types.GET_NOTIFICATIONS, payload })
   seenNotifications = value => ({ type: types.SEEN_NOTIFICATIONS, value })
   removeNotify = notifyId => ({ type: types.REMOVE_NOTIFY, notifyId })

   getDiaries = payload => ({ type: types.GET_DIARIES, payload })
   addDiary = payload => ({ type: types.ADD_DIARY, payload })
   editDiary = payload => ({ type: types.EDIT_DIARY, payload })
   deleteDiary = diaryId => ({ type: types.DELETE_DIARY, diaryId })

   setFriends = payload => ({ type: types.SET_FRIENDS, payload })
   unFriend = friendId => ({ type: types.UN_FRIEND, friendId })

   addAccount = accId => ({ type: types.ADD_ACCOUNT, accId })
   removeAccount = accId => ({ type: types.REMOVE_ACCOUNT, accId })

   setBlogs = payload => ({ type: types.SET_BLOGS, payload })
   addBlog = payload => ({ type: types.ADD_BLOG, payload })
   deleteBlog = blogId => ({ type: types.DELETE_BLOG, blogId })

   setImages = payload => ({ type: types.SET_IMAGES, payload })
   addImage = payload => ({ type: types.ADD_IMAGE, payload })
   deleteImage = imageId => ({ type: types.DELETE_IMAGE, imageId })

   setVideos = payload => ({ type: types.SET_VIDEOS, payload })
   addVideo = payload => ({ type: types.ADD_VIDEO, payload })
   deleteVideo = videoId => ({ type: types.DELETE_VIDEO, videoId })

   setShorts = payload => ({ type: types.SET_SHORTS, payload })
   addShort = payload => ({ type: types.ADD_SHORT, payload })
   deleteShort = shortId => ({ type: types.DELETE_SHORT, shortId })

   addNewSong = payload => ({ type: types.ADD_NEW_SONG, payload })
   setMySongList = payload => ({ type: types.SET_MY_SONG_LIST, payload })
   addNewPlaylist = payload => ({ type: types.ADD_NEW_PLAYLIST, payload })
   setMyPlaylistList = payload => ({ type: types.SET_MY_PLAYLIST_LIST, payload })
   setPlayingSong = payload => ({ type: types.SET_PLAYING_SONG, payload })
   setRecentlyList = payload => ({ type: types.SET_RECENTLY_LIST, payload })
   setPlayingPlayList = payload => ({ type: types.SET_PLAYING_PLAYLIST, payload })
   setRandomSongList = payload => ({ type: types.SET_RANDOM_SONG_LIST, payload })
   setCurPlaylistId = payload => ({ type: types.SET_CUR_PLAYLIST_ID, payload })
   setPlayingAt = payload => ({ type: types.SET_PLAYING_AT, payload })
   deleteSong = songId => ({ type: types.DELETE_SONG, songId })
   deletePlaylist = playlistId => ({ type: types.DELETE_PLAYLIST, playlistId })

   showBackdrop = () => ({ type: types.SHOW_BACKDROP })
   hideBackdrop = () => ({ type: types.HIDE_BACKDROP })
}

export default new Actions()
