import types from '../../constants/actionTypes'
const initState = {
   blogs: [],
}

function blogReducer(state = initState, action) {
   const { payload } = action

   switch (action.type) {
      case types.SET_BLOGS:
         return { ...state, blogs: payload }

      case types.ADD_BLOG:
         return { ...state, blogs: [payload, ...state.blogs] }

      case types.DELETE_BLOG:
         return { ...state, blogs: state.blogs.filter(b => b.blog._id !== action.blogId) }

      default:
         return state
   }
}

export default blogReducer
