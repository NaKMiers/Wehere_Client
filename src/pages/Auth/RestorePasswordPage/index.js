import { Box, Button, Typography } from '@material-ui/core'
import { memo } from 'react'
import useStyles from './styles'

function RestorePasswordPage() {
   const styles = useStyles()

   return (
      <Box className={styles.wrap}>
         <Typography className={styles.heading}>Find Your Account.</Typography>
         <Box className={styles.body}>
            <Typography className={styles.subHeading}>
               Enter you email or username to find your account.
            </Typography>
            <form className={styles.form}>
               <input className={styles.input} placeholder='Email or Username...' />
               <Box className={styles.btnWrap}>
                  <Button variant='contained' className={styles.cancelBtn}>
                     Cancel
                  </Button>
                  <Button className={styles.findBtn} variant='contained'>
                     Find
                  </Button>
               </Box>
            </form>
         </Box>
      </Box>
   )
}

export default memo(RestorePasswordPage)
