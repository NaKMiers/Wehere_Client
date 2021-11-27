import Cookies from 'js-cookie'
import { Redirect, Route } from 'react-router-dom'

function AuthLogin({ children, ...rest }) {
   return (
      <Route
         {...rest}
         render={({ location }) =>
            !!Cookies.get('user') ? (
               children
            ) : (
               <Redirect
                  to={{
                     pathname: '/login',
                     state: { from: location },
                  }}
               />
            )
         }
      />
   )
}

export default AuthLogin
