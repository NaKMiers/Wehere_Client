import { Redirect, Route } from 'react-router-dom'

function AuthLogin({ children, ...rest }) {
   return (
      <Route
         {...rest}
         // component={!!localStorage.getItem('user') ? children : <Redirect to='/login' />}
         render={() => {
            if (!!localStorage.getItem('user')) {
               return children
            } else {
               return <Redirect to='/login' />
            }
         }}
      />
   )
}

export default AuthLogin
