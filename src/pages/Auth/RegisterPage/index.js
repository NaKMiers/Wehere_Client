import {
   Button,
   FormControlLabel,
   FormLabel,
   Radio,
   RadioGroup,
   TextField,
   Typography,
} from '@material-ui/core'
import { FormControl } from '@mui/material'
import { useState } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import apis from '../../../apis'
import useStyles from './styles'

function RegisterPage({ actionCreators }) {
   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [passwordAgain, setPasswordAgain] = useState('')
   const [gender, setGender] = useState('male')

   const [errorUsername, setErrorUsername] = useState('')
   const [errorEmail, setErrorEmail] = useState('')
   const [errorPassword, setErrorPassword] = useState('')
   const [errorPasswordAgain, setErrorPasswordAgain] = useState('')

   const styles = useStyles()
   const history = useHistory()

   const handleSubmit = async e => {
      e.preventDefault()

      handleValidate('name')
      handleValidate('username')
      handleValidate('email', true)
      handleValidate('password')
      handleValidate('passwordAgain')

      if (
         !errorUsername &&
         !errorEmail &&
         !errorPassword &&
         !errorPasswordAgain &&
         username &&
         email &&
         password &&
         passwordAgain
      ) {
         const data = { username, email, password, gender }
         actionCreators.createNewUser(data)
         history.push('/')
      }
   }

   const handleValidate = async (type, notcheck) => {
      const validateEmail = email => {
         const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         return re.test(email)
      }
      switch (type) {
         case 'username':
            try {
               let res = await apis.checkUser(username, email)
               if (username.trim() === '') {
                  setErrorUsername(() => 'Username is empty.')
               } else if (res.data.matchOtherUsername) {
                  setErrorUsername(() => 'Username has been already.')
               }
            } catch (err) {
               console.log(err)
            }
            break
         case 'email':
            try {
               let res = await apis.checkUser(username, email)
               if (email.trim() === '') {
                  setErrorEmail(() => 'Email is empty.')
               } else if (!validateEmail(email.trim())) {
                  setErrorEmail(() => 'This must be email.')
               } else if (res.data.matchOtherEmail && !notcheck) {
                  setErrorEmail(() => 'Email has been already.')
               }
            } catch (err) {
               console.log(err)
            }
            break
         case 'password':
            if (password.trim() === '') {
               setErrorPassword(() => 'Password is empty.')
            } else if (password.length < 6) {
               setErrorPassword(() => 'Password must be at least 6 characters')
            }
            break
         case 'passwordAgain':
            if (passwordAgain.trim() === '') {
               setErrorPasswordAgain(() => 'Password gain is empty.')
            } else if (passwordAgain.trim() !== password.trim()) {
               setErrorPasswordAgain(() => 'Password does not match.')
            }
            break
         default:
            return ''
      }
   }

   return (
      <div style={{ maxWidth: 960, padding: 24, margin: 'auto' }}>
         <Typography variant='h3' className={styles.title}>
            Wehere
         </Typography>
         <form onSubmit={handleSubmit}>
            <TextField
               name='username'
               className={styles.textField}
               id='filled-basic'
               label='Username...'
               variant='filled'
               value={username}
               onChange={e => setUsername(e.target.value)}
               onBlur={() => handleValidate('username')}
               onFocus={() => setErrorUsername('')}
               error={!!errorUsername}
               helperText={errorUsername}
            />
            <TextField
               name='email'
               className={styles.textField}
               id='filled-basic'
               label='Email...'
               variant='filled'
               value={email}
               onChange={e => setEmail(e.target.value)}
               onBlur={() => handleValidate('email')}
               onFocus={() => setErrorEmail('')}
               error={!!errorEmail}
               helperText={errorEmail}
            />
            <TextField
               name='password'
               className={styles.textField}
               id='filled-basic'
               label='Password...'
               variant='filled'
               type='password'
               value={password}
               onChange={e => setPassword(e.target.value)}
               onBlur={() => handleValidate('password')}
               onFocus={() => setErrorPassword('')}
               error={!!errorPassword}
               helperText={errorPassword}
            />
            <TextField
               name='passwordAgain'
               className={styles.textField}
               id='filled-basic'
               label='Password again...'
               variant='filled'
               type='password'
               value={passwordAgain}
               onChange={e => setPasswordAgain(e.target.value)}
               onBlur={() => handleValidate('passwordAgain')}
               onFocus={() => setErrorPasswordAgain('')}
               error={!!errorPasswordAgain}
               helperText={errorPasswordAgain}
            />
            <FormControl style={{ padding: '18px 12px' }}>
               <FormLabel component='legend'>Gender</FormLabel>
               <RadioGroup
                  name='gender'
                  aria-label='gender'
                  defaultValue='female'
                  className={styles.radioGroup}
                  value={gender}
                  onChange={e => setGender(e.target.value)}
               >
                  <FormControlLabel value='male' control={<Radio />} label='Male' />
                  <FormControlLabel value='female' control={<Radio />} label='Female' />
                  <FormControlLabel value='other' control={<Radio />} label='Other' />
               </RadioGroup>
            </FormControl>
            <Button type='submit' className={styles.registerBtn} variant='contained'>
               Register
            </Button>
            <div className={styles.subOptions}>
               <span>
                  <Link to='/restore-password' style={{ textDecoration: 'none' }}>
                     Forget Password?
                  </Link>
               </span>
               <span>
                  <Link to='/login' style={{ textDecoration: 'none' }}>
                     Login
                  </Link>
               </span>
            </div>
         </form>
      </div>
   )
}

const mapStateToProps = state => ({
   validate: state.validate,
})

const mapDispatchToProps = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
