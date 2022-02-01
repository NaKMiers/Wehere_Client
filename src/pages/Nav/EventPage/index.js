import { Box, CardMedia } from '@material-ui/core'
import useStyles from './styles'

function EventPage() {
   const styles = useStyles()
   return (
      <Box className={styles.eventPage}>
         <CardMedia
            className={styles.commingSoon}
            component='img'
            image='https://bom.so/ivTW8R'
            alt='image'
         />
      </Box>
   )
}

export default EventPage
