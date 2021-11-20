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
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../../actions'

function RegisterPage({ validate, actionCreators }) {
   const [name, setName] = useState('')
   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [passwordAgain, setPasswordAgain] = useState('')
   const [gender, setGender] = useState('male')

   const [validateState, setValidate] = useState({})

   const [errors, setErrors] = useState({
      name: '',
      username: '',
      email: '',
      password: '',
      passwordAgain: '',
   })

   const styles = useStyles()

   useEffect(() => {
      setValidate(validate)
   }, [validate])

   const handleSubmit = async e => {
      e.preventDefault()
      await actionCreators.checkUser({ username, email })

      if (
         errors.name === '' &&
         errors.username === '' &&
         errors.email === '' &&
         errors.password === '' &&
         errors.passwordAgain === '' &&
         name !== '' &&
         username !== '' &&
         email !== '' &&
         password !== '' &&
         !validateState.matchOtherUsernameRegistor &&
         !validateState.matchOtherEmailRegistor
      ) {
         console.log('OK')
      }
   }

   const handleValidate = (type, message) => {
      switch (type) {
         case 'name':
            if (name.trim() === '') {
               setErrors({ ...errors, name: message })
            }
            break
         case 'username':
            if (username.trim() === '') {
               setErrors({ ...errors, username: message })
            }
            break
         case 'email':
            if (email.trim() === '') {
               setErrors({ ...errors, email: message })
            }
            break
         case 'password':
            if (password.trim() === '') {
               setErrors({ ...errors, password: message })
            } else if (password.length < 6) {
               setErrors({ ...errors, password: 'Password greater than 6 characters' })
            }
            break
         case 'passwordAgain':
            if (passwordAgain.trim() === '') {
               setErrors({ ...errors, passwordAgain: message })
            } else if (passwordAgain.trim() !== password.trim()) {
               setErrors({ ...errors, passwordAgain: 'Password does not match' })
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
               name='name'
               className={styles.textField}
               id='filled-basic'
               label='Name...'
               variant='filled'
               value={name}
               onChange={e => setName(e.target.value)}
               onBlur={() => handleValidate('name', 'Name is empty.')}
               onFocus={() => setErrors({ ...errors, name: '' })}
               error={!!errors.name}
               helperText={errors.name}
            />
            <TextField
               name='username'
               className={styles.textField}
               id='filled-basic'
               label='Username...'
               variant='filled'
               value={username}
               onChange={e => setUsername(e.target.value)}
               onBlur={() => handleValidate('username', 'Username is empty')}
               onFocus={() => setErrors({ ...errors, username: '' })}
               error={!!errors.username || validate.matchOtherUsernameRegistor}
               helperText={
                  validate.matchOtherUsernameRegistor
                     ? 'This is username has been already.'
                     : errors.username
               }
            />
            <TextField
               name='email'
               className={styles.textField}
               id='filled-basic'
               label='Email...'
               variant='filled'
               value={email}
               onChange={e => setEmail(e.target.value)}
               onBlur={() => handleValidate('email', 'Email is empty')}
               onFocus={() => setErrors({ ...errors, email: '' })}
               error={!!errors.email || validate.matchOtherEmailRegistor}
               helperText={
                  validate.matchOtherEmailRegistor
                     ? 'This is email has been already.'
                     : errors.email
               }
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
               onBlur={() => handleValidate('password', 'Password is empty')}
               onFocus={() => setErrors({ ...errors, password: '' })}
               error={!!errors.password}
               helperText={errors.password}
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
               onBlur={() => handleValidate('passwordAgain', 'Password Again is empty')}
               onFocus={() => setErrors({ ...errors, passwordAgain: '' })}
               error={!!errors.passwordAgain}
               helperText={errors.passwordAgain}
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
