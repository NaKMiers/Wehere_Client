import { Button, TextField, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'

function LoginPage() {
   const styles = useStyles()

   return (
      <div style={{ padding: 16 }}>
         <Typography variant='h3' className={styles.title}>
            Wehere
         </Typography>
         <form>
            <TextField
               className={styles.textField}
               id='filled-basic'
               label='Username or Email...'
               variant='filled'
            />
            <TextField
               className={styles.textField}
               id='filled-basic'
               label='Password...'
               variant='filled'
            />
            <Button type='submit' className={styles.loginBtn} variant='contained'>
               Login
            </Button>
            <div className={styles.subOptions}>
               <span>
                  <Link to='forget-password' style={{ textDecoration: 'none' }}>
                     Forget Password?
                  </Link>
               </span>
               <span>
                  <Link to='/register' style={{ textDecoration: 'none' }}>
                     Register
                  </Link>
               </span>
            </div>
         </form>
      </div>
   )
}

export default LoginPage
