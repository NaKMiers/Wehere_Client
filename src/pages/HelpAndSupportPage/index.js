import { Button, Typography } from '@material-ui/core'
import Header from '../../components/Header'
import useStyles from './styles'

function HelpAndSupportPage() {
   const styles = useStyles()

   return (
      <>
         <Header />
         <div style={{ maxWidth: 960, padding: '16px 24px', margin: 'auto' }}>
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
         </div>
      </>
   )
}

export default HelpAndSupportPage
