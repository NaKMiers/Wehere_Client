import {
   Box,
   Button,
   ButtonGroup,
   Collapse,
   Fab,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   Modal,
   Paper,
   Typography
} from '@material-ui/core'
import { ExpandLess, ExpandMore, StarBorder } from '@material-ui/icons'
import AddIcon from '@material-ui/icons/Add'
import { ListItemButton } from '@mui/material'
import { useState } from 'react'
import useStyles from './styles'

function DiaryModal() {
   const [open, setOpen] = useState(false)
   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)

   const [openCollapeEdit, setOpenCollapeEdit] = useState(true)

   const handleExpandEdit = () => {
      setOpenCollapeEdit(!openCollapeEdit)
   }

   const styles = useStyles()

   return (
      <div>
         <Box className={styles.addDiaryBtn} onClick={handleOpen}>
            <Fab color='primary' aria-label='add'>
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
               <Box>
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

                  <form>
                     <input
                        name='diaryTitle'
                        className={styles.inputTitleDiary}
                        placeholder='Enter your diaries title...'
                     />

                     <textarea className={styles.inputContentDiary}></textarea>
                  </form>
                  <Box className={styles.editDiaryWrap}>
                     <ListItemButton onClick={handleExpandEdit}>
                        {openCollapeEdit ? (
                           <ExpandLess className={styles.expandMoreEditBtn} />
                        ) : (
                           <ExpandMore className={styles.expandMoreEditBtn} />
                        )}
                     </ListItemButton>
                     <Collapse in={openCollapeEdit} timeout='auto' unmountOnExit>
                        <List component='div' disablePadding>
                           <ListItem className={styles.editDiaryItem}>
                              <p style={{ fontWeight: 'bold' }}>Text: </p>
                              <Box className={styles.editDiaryListBox}>
                                 <ButtonGroup
                                    className={styles.buttonGroupTextColor}
                                    variant='outlined'
                                    aria-label='outlined button group'
                                 >
                                    <Button
                                       style={{ backgroundColor: '#f44336' }}
                                       className={styles.textColorBtn}
                                    ></Button>
                                    <Button
                                       style={{ backgroundColor: '#2196f3' }}
                                       className={styles.textColorBtn}
                                    ></Button>
                                    <Button
                                       style={{ backgroundColor: '#4caf50' }}
                                       className={styles.textColorBtn}
                                    ></Button>
                                    <Button
                                       style={{ backgroundColor: '#ffeb3b' }}
                                       className={styles.textColorBtn}
                                    ></Button>
                                    <Button
                                       style={{ backgroundColor: '#F2F7F7' }}
                                       className={styles.textColorBtn}
                                    ></Button>
                                    <Button
                                       style={{ backgroundColor: '#333' }}
                                       className={styles.textColorBtn}
                                    ></Button>
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
