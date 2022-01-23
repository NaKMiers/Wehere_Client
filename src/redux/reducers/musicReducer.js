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
         return { ...state, recentlyList: [...state.recentlyList, payload] }

      case types.SET_PLAYING_PLAYLIST:
         return { ...state, playlistPlaying: payload }

      case types.SET_RANDOM_SONG_LIST:
         return { ...state, randomSongList: payload }

      case types.SET_CUR_PLAYLIST_ID:
         return { ...state, curPlayistId: payload }

      default:
         return state
   }
}

export default musicReducer
