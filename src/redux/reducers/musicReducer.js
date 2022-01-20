import types from '../../constants/actionTypes'
const initState = {
   mySongList: [],
   myPlaylistList: [],
   authorList: [],
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

      default:
         return state
   }
}

export default musicReducer
