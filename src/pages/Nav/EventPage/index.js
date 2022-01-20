import { CardMedia } from '@material-ui/core'
import Header from '../../../components/Header'
import useStyles from './styles'

function EventPage() {
   const styles = useStyles()
   return (
      <>
         <Header />
         <CardMedia
            className={styles.commingSoon}
            component='img'
            image='https://bom.so/ivTW8R'
            alt='image'
         />
      </>
   )
}

export default EventPage
