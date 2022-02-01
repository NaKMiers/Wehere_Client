import { Box, Button, Typography } from '@material-ui/core'
import useStyles from './styles'

function HelpAndSupportPage() {
   const styles = useStyles()

   return (
      <Box className={styles.helpAndSupportPage}>
         <Typography className={styles.heading} variant='h4'>
            Help & Support
         </Typography>
         <form>
            <textarea
               name='helpAndSupport'
               className={styles.textInputArea}
               placeholder='Enter you and prolems or feedback...'
            ></textarea>
            <Button className={styles.submitBtn} variant='contained'>
               Submit
            </Button>
         </form>
      </Box>
   )
}

export default HelpAndSupportPage
