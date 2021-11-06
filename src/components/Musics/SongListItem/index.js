import { Avatar, IconButton, ListItem, ListItemText } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { ListItemButton } from '@mui/material'
import useStyles from './styles'

function SongListItem() {
   const styles = useStyles()
   return (
      <ListItem
         style={{
            backgroundColor: '#ddd',
            borderLeft: '4px #f44336 solid',
            marginBottom: 8,
            borderTopRightRadius: 16,
            padding: 0
         }}
      >
         <ListItemButton style={{ padding: '6px 16px' }}>
            <Avatar
               className={styles.songImg}
               src='https://phunugioi.com/wp-content/uploads/2020/10/hinh-anh-avatar-de-thuong-cute.jpg'
            />
            <ListItemText primary='So Am i' secondary='Ava Max' />
         </ListItemButton>
         <IconButton>
            <FavoriteIcon />
         </IconButton>
      </ListItem>
   )
}

export default SongListItem
