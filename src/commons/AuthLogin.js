import { Navigate, Route } from 'react-router-dom'

function AuthLogin({ children, ...rest }) {
   return (
      <Route
         {...rest}
         element={!!localStorage.getItem('user') ? children : <Navigate to='/login' />}
      />
   )
}

export default AuthLogin
