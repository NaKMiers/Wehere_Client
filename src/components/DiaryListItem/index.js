import { Box, IconButton, ListItem, Menu, MenuItem, Typography } from '@material-ui/core'
import BackspaceIcon from '@material-ui/icons/Backspace'
import { useState } from 'react'
import MoreIcon from '../../components/Icons/MoreIcon'
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
               <MoreIcon rotate />
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
               'aria-labelledby': 'basic-button'
            }}
         >
            <MenuItem className={styles.menuItem} onClick={handleClose}>
               Delete <BackspaceIcon className={styles.menuIcon} />
            </MenuItem>
         </Menu>
      </ListItem>
   )
}

export default DiaryListItem
