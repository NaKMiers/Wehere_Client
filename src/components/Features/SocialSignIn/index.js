import { Avatar, Box, Button, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import apis from '../../../apis'
import { firebase } from '../../../commons/firebase'
import useStyles from './styles'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import clsx from 'clsx'

function SocialSignIn({ actionCreators }) {
   const styles = useStyles()
   const history = useHistory()

   const SocialSignIn = async () => {
      const googleProvider = new firebase.auth.GoogleAuthProvider()
      try {
         const ggRes = await firebase.auth().signInWithPopup(googleProvider)
         const serverRes = await apis.signInWithSocial(ggRes.user._delegate)

         actionCreators.loginRequest(serverRes.data.userLogin)
         localStorage.setItem('user', serverRes.data.token) // set localStorage('user') for JWT
         history.push('/')
      } catch (err) {
         console.log(err)
      }
   }

   return (
      <Box className={styles.socialSignInWrap}>
         <Typography className={styles.title}>Login with socical account. </Typography>
         <Box className={styles.btnWrap}>
            <Button
               variant='contained'
               className={clsx(styles.socialBtn, styles.btn1)}
               onClick={SocialSignIn}
            >
               <Avatar alt='google' className={styles.socialLogo}>
                  G
               </Avatar>
               <Typography className={styles.text}>Sign with google</Typography>
            </Button>
            <Button
               variant='contained'
               className={clsx(styles.socialBtn, styles.btn2)}
               onClick={SocialSignIn}
            >
               <Avatar alt='facebook' className={styles.socialLogo}>
                  F
               </Avatar>
               <Typography className={styles.text}>Sign with facebook</Typography>
            </Button>
         </Box>
      </Box>
   )
}

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(null, mapDispatch)(SocialSignIn)
