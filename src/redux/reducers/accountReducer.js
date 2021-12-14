import types from '../../constants/actionTypes'

if (!JSON.parse(localStorage.getItem('accounts'))) {
   localStorage.setItem('accounts', JSON.stringify([]))
}

const initState = {
   accounts: JSON.parse(localStorage.getItem('accounts')),
}

function accountReducer(state = initState, action) {
   switch (action.type) {
      case types.ADD_ACCOUNT:
         localStorage.setItem('accounts', JSON.stringify([...state.accounts, action.accId]))
         return { ...state, accounts: [...state.accounts, action.accId] }

      case types.REMOVE_ACCOUNT:
         localStorage.setItem(
            'accounts',
            JSON.stringify(state.accounts.filter(acc => acc !== action.accId))
         )
         return { ...state, accounts: state.accounts.filter(acc => acc !== action.accId) }

      default:
         return state
   }
}

export default accountReducer
