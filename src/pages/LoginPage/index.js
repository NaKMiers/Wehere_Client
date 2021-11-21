import { Button, TextField, Typography } from '@material-ui/core'
import { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../actions'
import apis from '../../apis'
import useStyles from './styles'
import { useHistory } from 'react-router-dom'

function LoginPage({ actionCreators }) {
   const [usernameOrEmail, setUsernameOrEmail] = useState('')
   const [password, setPassword] = useState('')

   const [errorUsernameOrEmail, setErrorUsernameOrEmail] = useState('')
   const [errorPassword, setErrorPassword] = useState('')

   const styles = useStyles()
   const history = useHistory()

   const handleSubmit = async e => {
      e.preventDefault()
      await handleValidate('usernameOrEmail')
      await handleValidate('password')
      await handleValidate('submit')
   }

   const handleValidate = async type => {
      if (type === 'usernameOrEmail' && usernameOrEmail.length === 0) {
         setErrorUsernameOrEmail('Username or Email is emtpy.')
      } else if (type === 'password' && password.length === 0) {
         setErrorPassword('Password is emtpy.')
      } else if (usernameOrEmail.length !== 0 && password.length !== 0 && type === 'submit') {
         const res = await apis.checkLogin(usernameOrEmail, password)
         if (!res.data.userLogin) {
            setErrorUsernameOrEmail('Username or Email does not match.')
         } else if (!res.data.matchPassword) {
            console.log(res.data)
            setErrorPassword('Password incorect.')
         } else {
            actionCreators.loginRequest(res.data.userLogin)
            history.push('/')
         }
      }
   }

   return (
      <div style={{ maxWidth: 960, padding: 24, margin: 'auto' }}>
         <Typography variant='h3' className={styles.title}>
            Wehere
         </Typography>
         <form onSubmit={handleSubmit}>
            <TextField
               className={styles.textField}
               id='filled-basic'
               label='Username or Email...'
               variant='filled'
               onChange={e => {
                  setUsernameOrEmail(e.target.value)
                  setErrorUsernameOrEmail('')
               }}
               onBlur={() => handleValidate('usernameOrEmail')}
               value={usernameOrEmail}
               error={!!errorUsernameOrEmail}
               helperText={errorUsernameOrEmail}
            />
            <TextField
               className={styles.textField}
               type='password'
               id='filled-basic'
               label='Password...'
               variant='filled'
               onChange={e => {
                  setPassword(e.target.value)
                  setErrorPassword('')
               }}
               onBlur={() => handleValidate('password')}
               value={password}
               error={!!errorPassword}
               helperText={errorPassword}
            />
            <Button type='submit' className={styles.loginBtn} variant='contained'>
               Login
            </Button>
            <div className={styles.subOptions}>
               <span>
                  <Link to='/restore-password' style={{ textDecoration: 'none' }}>
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

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(null, mapDispatch)(LoginPage)
