import {
   Button,
   FormControlLabel,
   FormLabel,
   Radio,
   RadioGroup,
   TextField,
   Typography
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'

function RegisterPage() {
   const styles = useStyles()

   return (
      <div style={{ padding: 16 }}>
         <Typography variant='h3' className={styles.title}>
            Wehere
         </Typography>
         <form>
            <TextField
               name='username'
               className={styles.textField}
               id='filled-basic'
               label='Username...'
               variant='filled'
            />
            <TextField
               name='email'
               className={styles.textField}
               id='filled-basic'
               label='Email...'
               variant='filled'
            />
            <TextField
               name='password'
               className={styles.textField}
               id='filled-basic'
               label='Password...'
               variant='filled'
               type='password'
            />
            <TextField
               className={styles.textField}
               id='filled-basic'
               label='Password again...'
               variant='filled'
               type='password'
            />
            <FormLabel component='legend'>Gender</FormLabel>
            <RadioGroup
               aria-label='gender'
               defaultValue='female'
               name='gender'
               className={styles.radioGroup}
            >
               <FormControlLabel value='female' control={<Radio />} label='Female' />
               <FormControlLabel value='male' control={<Radio />} label='Male' />
               <FormControlLabel value='other' control={<Radio />} label='Other' />
            </RadioGroup>
            <Button type='submit' className={styles.loginBtn} variant='contained'>
               <Link to='/' style={{ textDecoration: 'none', color: '#333' }}>
                  Register
               </Link>
            </Button>
            <div className={styles.subOptions}>
               <span>
                  <Link to='forget-password' style={{ textDecoration: 'none' }}>
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

export default RegisterPage
