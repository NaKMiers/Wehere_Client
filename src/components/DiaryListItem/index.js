import { Box, IconButton, ListItem, Menu, MenuItem, Typography } from '@material-ui/core'
import { useState } from 'react'
import MoreIcon from '../../components/Icons/MoreIcon'
import DeleteIcon from '../Icons/DeleteIcon'
import useStyles from './styles'

function DiaryListItem({ title, desc, bgImg, createdAt }) {
   const styles = useStyles()

   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   const handleEditDiary = () => {
      console.log('handleEditDiary')
   }

   return (
      <ListItem>
         <Box
            style={{ backgroundImage: `url(${bgImg})` }}
            className={styles.diaryWrap}
            maxWidth='sm'
         >
            <Typography className={styles.diaryTitle} variant='h5' onClick={handleEditDiary}>
               {title}
            </Typography>
            <IconButton aria-label='settings' className={styles.moreIconBtn} onClick={handleClick}>
               <MoreIcon rotate style={{ fontSize: 20 }} />
            </IconButton>
            <Typography className={styles.diaryTime}>{createdAt}</Typography>
            <Typography className={styles.diaryDesc} variant='subtitle1'>
               {desc}
            </Typography>
         </Box>
         <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
            className={styles.menu}
         >
            <MenuItem className={styles.menuItem} onClick={handleClose}>
               Delete <DeleteIcon />
            </MenuItem>
         </Menu>
      </ListItem>
   )
}

export default DiaryListItem
