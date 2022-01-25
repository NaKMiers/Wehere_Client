import types from '../../constants/actionTypes'
const initState = {
   mySongList: [],
   myPlaylistList: [],
   authorList: [],
   songPlaying: {},
   recentlyList: getRecentSongList() || [],
   playlistPlaying: [],
   randomSongList: [],
   curPlayistId: '',
   playingAt: '',
}

if (!JSON.parse(localStorage.getItem('recentlyList'))) {
   localStorage.setItem('recentlyList', JSON.stringify([]))
}

function getRecentSongList() {
   return JSON.parse(localStorage.getItem('recentlyList'))
}
function setRecentlyList(newRecentlyList) {
   return localStorage.setItem('recentlyList', JSON.stringify(newRecentlyList))
}

function musicReducer(state = initState, action) {
   const { payload } = action

   switch (action.type) {
      case types.ADD_NEW_SONG:
         return { ...state, mySongList: [...state.mySongList, payload] }

      case types.SET_MY_SONG_LIST:
         return { ...state, mySongList: payload }

      case types.ADD_NEW_PLAYLIST:
         return { ...state, myPlaylistList: [...state.myPlaylistList, payload] }

      case types.SET_MY_PLAYLIST_LIST:
         return { ...state, myPlaylistList: payload }

      case types.SET_PLAYING_SONG:
         return { ...state, songPlaying: payload }

      case types.SET_RECENTLY_LIST:
         let index = -1
         let newRecentlyList
         const putOnTop = (index, array) => {
            let result = array.splice(index, 1)

            const newAr = result.concat(array)
            return newAr
         }

         // find index of payload in recentlylist
         state.recentlyList.forEach((s, i) => {
            if (s._id === payload._id) {
               index = i
            }
         })

         if (index !== -1) {
            newRecentlyList = putOnTop(index, state.recentlyList)
         } else {
            newRecentlyList = [payload, ...state.recentlyList]
         }

         setRecentlyList(newRecentlyList)

         return { ...state, recentlyList: newRecentlyList }

      case types.SET_PLAYING_PLAYLIST:
         console.log('wassadasdsad: ', payload)
         return { ...state, playlistPlaying: payload }

      case types.SET_RANDOM_SONG_LIST:
         return { ...state, randomSongList: payload }

      case types.SET_CUR_PLAYLIST_ID:
         return { ...state, curPlayistId: payload }

      case types.SET_PLAYING_AT:
         return { ...state, playingAt: payload }

      case types.DELETE_SONG:
         return { ...state, mySongList: state.mySongList.filter(s => s._id !== action.songId) }

      case types.DELETE_PLAYLIST:
         return {
            ...state,
            myPlaylistList: state.myPlaylistList.filter(p => p._id !== action.playlistId),
         }
      default:
         return state
   }
}

export default musicReducer
