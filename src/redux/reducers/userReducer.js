const initState = []

function useReducer(state = initState, action) {
   switch (action.type) {
      default:
         return [...state]
   }
}

export default useReducer
