import { List, Typography } from '@material-ui/core'
// import { useParams } from 'react-router-dom'
import SongListItem from '../SongListItem'
import useStyles from './styles'

function SongOfAuthor() {
   const styles = useStyles()

   return (
      <List component='div' disablePadding style={{ padding: 16 }}>
         <Typography variant='h5' className={styles.authorNameHeading}>
            Ava Max's songs
         </Typography>

         <Typography className={styles.songCount}>Songs: 256</Typography>

         {/* <SongListItem />
         <SongListItem />
         <SongListItem />
         <SongListItem /> */}
      </List>
   )
}

export default SongOfAuthor
