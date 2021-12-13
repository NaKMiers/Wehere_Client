import types from '../../constants/actionTypes'
const initState = {
   diaries: [],
}

function diaryReducer(state = initState, action) {
   const { payload } = action

   switch (action.type) {
      case types.GET_DIARIES:
         return { ...state, diaries: payload }

      case types.ADD_DIARY:
         return { ...state, diaries: [...state.diaries, payload] }

      case types.EDIT_DIARY:
         let diaries = state.diaries.map(d => {
            if (d._id !== payload._id) {
               return d
            } else {
               return payload
            }
         })
         return { ...state, diaries }

      case types.DELETE_DIARY:
         return { ...state, diaries: state.diaries.filter(d => d._id !== action.diaryId) }

      default:
         return state
   }
}

export default diaryReducer
