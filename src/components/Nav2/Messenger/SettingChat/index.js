import {
   Collapse,
   Fade,
   ImageList,
   ImageListItem,
   List,
   ListItemText,
   ListSubheader,
   Modal,
   Paper,
   Switch,
   TextField,
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { ListItemButton } from '@mui/material'
import { memo, useState } from 'react'
import useStyles from './styles'
import { backgroundChatBoxs } from '../../../../commons/commonLists'

function SettingChat({ open, handleClose }) {
   const [isOpenNicknameSetting, setOpenNicknameSetting] = useState(false)
   const [isOpenThemeSetting, setOpenThemeSetting] = useState(false)

   const handleClickNicknameSetting = () => {
      setOpenNicknameSetting(!isOpenNicknameSetting)
   }

   const handleClickThemeSetting = () => {
      setOpenThemeSetting(!isOpenThemeSetting)
   }

   const styles = useStyles()

   return (
      <Fade in={open}>
         <Modal
            open
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
         >
            <Paper className={styles.paperSetting}>
               <List
                  component='nav'
                  aria-labelledby='nested-list-subheader'
                  subheader={
                     <ListSubheader component='div' id='nested-list-subheader'>
                        Setting
                     </ListSubheader>
                  }
               >
                  <ListItemButton onClick={handleClickNicknameSetting}>
                     <ListItemText primary='Nickname' />
                     {isOpenNicknameSetting ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse
                     in={isOpenNicknameSetting}
                     timeout='auto'
                     unmountOnExit
                     className={styles.collapse}
                  >
                     <TextField
                        className={styles.nicknameInput}
                        id='filled-search'
                        label='New Nickname...'
                        type='text'
                        variant='filled'
                     />
                  </Collapse>

                  <ListItemButton onClick={handleClickThemeSetting}>
                     <ListItemText primary='Change Theme' />
                     {isOpenThemeSetting ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse
                     in={isOpenThemeSetting}
                     timeout='auto'
                     unmountOnExit
                     className={styles.collapse}
                  >
                     <ImageList cols={3} rowHeight={156}>
                        {backgroundChatBoxs.map(item => (
                           <ImageListItem key={item.img} style={{ cursor: 'pointer' }}>
                              <img
                                 src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                 srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                 alt={item.title}
                                 loading='lazy'
                              />
                           </ImageListItem>
                        ))}
                     </ImageList>
                  </Collapse>

                  <ListItemButton>
                     <ListItemText primary='Turn off notification' />
                     <Switch />
                  </ListItemButton>

                  <ListItemButton>
                     <ListItemText primary='Block' />
                     <Switch />
                  </ListItemButton>
               </List>
            </Paper>
         </Modal>
      </Fade>
   )
}

export default memo(SettingChat)
