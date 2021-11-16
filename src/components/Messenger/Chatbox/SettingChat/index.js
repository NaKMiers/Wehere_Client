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
import { useState } from 'react'
import useStyles from './styles'

const itemData = [
   {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
   },
   {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
   },
   {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
   },
   {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
   },
   {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
   },
   {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
   },
   {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
   },
   {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
   },
   {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
   },
   {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
   },
   {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
   },
   {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
   },
]

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
                        {itemData.map(item => (
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

export default SettingChat
