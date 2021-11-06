import { Button, List, Typography } from '@material-ui/core'
// import { useParams } from 'react-router-dom'
import SongListItem from '../SongListItem'
import useStyles from './styles'

function SongOfAuthor() {
   const styles = useStyles()

   return (
      <List component='div' disablePadding>
         <Button variant='contained' className={styles.newSong}>
            Add To My Songs
         </Button>
         <Typography className={styles.songCount}>Songs: 256</Typography>

         <SongListItem />
         <SongListItem />
         <SongListItem />
         <SongListItem />
      </List>
   )
}

export default SongOfAuthor
