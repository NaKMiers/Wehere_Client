import types from '../../constants/actionTypes'
const initState = {
   mySongList: [],
   myPlaylistList: [],
   authorList: [],
   songPlaying: {},
   recentlyList: [],
   playlistPlaying: [],
   randomSongList: [],
   curPlayistId: '',
   playingAt: '',
}

function musicReducer(state = initState, action) {
   let index = -1
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
         return { ...state, recentlyList: [...state.recentlyList, payload] }

      case types.SET_PLAYING_PLAYLIST:
         return { ...state, playlistPlaying: payload }

      case types.SET_RANDOM_SONG_LIST:
         return { ...state, randomSongList: payload }

      case types.SET_CUR_PLAYLIST_ID:
         return { ...state, curPlayistId: payload }

      case types.SET_PLAYING_AT:
         return { ...state, playingAt: payload }

      case types.REMOVE_SONG_FROM_PLAYLIST:
         let playlistId = action.playlistId
         let songId = action.songId
         console.log('playlistId: ', playlistId)
         console.log('songId: ', songId)
         const playlistMatchId = state.myPlaylistList.find((p, i) => {
            if (p._id === playlistId) {
               index = i
               return true
            }
            return false
         })
         const songsInPLMatchUpdated = playlistMatchId.songs.filter(id => id !== songId)
         console.log('songsInPLMatchUpdated: ', songsInPLMatchUpdated)

         if (index !== -1) {
            state.myPlaylistList[index].songs = songsInPLMatchUpdated
            console.log(state.myPlaylistList[index].songs)
         }
         return { ...state }

      default:
         return state
   }
}

export default musicReducer
