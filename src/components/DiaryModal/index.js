import {
   Box,
   Button,
   ButtonGroup,
   CardMedia,
   Collapse,
   Fab,
   List,
   ListItem,
   Modal,
   Paper,
   Typography
} from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import { useRef, useState } from 'react'
import ExpandIcon from '../../components/Icons/ExpandIcon'
import AddIcon from '../Icons/AddIcon'
import useStyles from './styles'

const textColorOptions = ['#f44336', '#2196f3', '#4caf50', '#F2F7F7', '#f57eeb', '#ffeb3b', '#333']
const bgOptions = [
   'https://images.pexels.com/photos/2179483/pexels-photo-2179483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
   'https://images.pexels.com/photos/3274903/pexels-photo-3274903.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
   'https://images.pexels.com/photos/1624600/pexels-photo-1624600.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
   'https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
   'https://images.pexels.com/photos/4337198/pexels-photo-4337198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
   'https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
   'https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
   'https://images.pexels.com/photos/1198817/pexels-photo-1198817.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
   'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
   'https://images.pexels.com/photos/3310691/pexels-photo-3310691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
   'https://images.pexels.com/photos/2850287/pexels-photo-2850287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
   'https://images.pexels.com/photos/4210037/pexels-photo-4210037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
   'https://images.pexels.com/photos/1553962/pexels-photo-1553962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
]

function DiaryModal() {
   const [open, setOpen] = useState(false)
   const [openCollapeEdit, setOpenCollapeEdit] = useState(false)
   const inputContentArea = useRef()
   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)

   const handleExpandEdit = () => {
      setOpenCollapeEdit(!openCollapeEdit)
      if (!openCollapeEdit) {
         Object.assign(inputContentArea.current.style, {
            height: 'calc(60vh - 310px)'
         })
      } else {
         setTimeout(
            () =>
               Object.assign(inputContentArea.current.style, {
                  height: 'calc(60vh)'
               }),
            200
         )
      }
   }

   const styles = useStyles()

   const renderTextColorOptions = () =>
      textColorOptions.map(o => (
         <Button key={o} style={{ backgroundColor: o }} className={styles.textColorOption} />
      ))

   const renderBgOptions = () =>
      bgOptions.map(o => (
         <Button key={o} style={{ border: 'none', padding: 0 }}>
            <CardMedia className={styles.bgOption} component='img' image={o} alt={o} />
         </Button>
      ))

   return (
      <div>
         <Box className={styles.addDiaryBtnBox} onClick={handleOpen}>
            <Fab aria-label='add' className={styles.addDiaryBtn}>
               <AddIcon />
            </Fab>
         </Box>
         <Modal
            open={open}
            onClose={handleClose}
            className={styles.diaryModal}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
         >
            <Paper className={styles.paper} variant='outlined'>
               <Box className={styles.diaryBody}>
                  <Typography
                     className={styles.modalTitle}
                     id='modal-modal-title'
                     variant='h6'
                     component='h2'
                  >
                     Add New Diary
                  </Typography>
                  <Typography
                     className={styles.modalSubTitle}
                     id='modal-modal-description'
                     sx={{ mt: 2 }}
                  >
                     15:11 - 2:11:2021
                  </Typography>

                  <form className={styles.formContent}>
                     <input
                        name='diaryTitle'
                        className={styles.inputTitleDiary}
                        placeholder='Enter your diaries title...'
                     />

                     <textarea
                        className={styles.inputContentDiary}
                        placeholder='Enter your diaries content...'
                        ref={inputContentArea}
                     ></textarea>
                  </form>
                  <Box className={styles.editDiaryWrap}>
                     <ListItemButton onClick={handleExpandEdit}>
                        {openCollapeEdit ? (
                           <ExpandIcon rotate color='secondary' style={{ margin: 'auto' }} />
                        ) : (
                           <ExpandIcon color='secondary' style={{ margin: 'auto' }} />
                        )}
                     </ListItemButton>
                     <Collapse in={openCollapeEdit} timeout='auto' unmountOnExit>
                        <List component='div' disablePadding className={styles.listEditOption}>
                           <ListItem className={styles.editDiaryItem}>
                              <p style={{ fontWeight: 'bold' }}>Text: </p>
                              <Box className={styles.editDiaryListBox}>
                                 <ButtonGroup
                                    className={styles.buttonGroupTextColor}
                                    variant='outlined'
                                    aria-label='outlined button group'
                                 >
                                    {renderTextColorOptions()}
                                 </ButtonGroup>
                              </Box>
                           </ListItem>
                           <ListItem className={styles.editDiaryItem}>
                              <p style={{ fontWeight: 'bold' }}>Background: </p>
                              <Box className={styles.editDiaryListBox}>
                                 <ButtonGroup
                                    className={styles.buttonGroupBg}
                                    variant='outlined'
                                    aria-label='outlined button group'
                                 >
                                    {renderBgOptions()}
                                 </ButtonGroup>
                              </Box>
                           </ListItem>
                        </List>
                     </Collapse>
                  </Box>

                  <Button variant='contained' className={styles.submitDiaryBtn}>
                     Add To My Diaries
                  </Button>
               </Box>
            </Paper>
         </Modal>
      </div>
   )
}

export default DiaryModal
