import {
   Box,
   Button,
   ButtonGroup,
   CardMedia,
   Collapse,
   Fade,
   List,
   ListItem,
   Modal,
   Paper,
   Typography,
} from '@material-ui/core'
import { ListItemButton } from '@mui/material'
import { useRef, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import apis from '../../../apis'
import ExpandIcon from '../../../components/Icons/ExpandIcon'
import useStyles from './styles'
import moment from 'moment'
import { bgOptions, textColorOptions } from '../../../commons/commonLists'

function DiaryModal({ curUser, open, handleCloseModal, curDiary, actionCreators }) {
   const [openCollapeEdit, setOpenCollapeEdit] = useState(false)
   const inputContentArea = useRef()
   const [title, setTitle] = useState('')
   const [content, setContent] = useState('')
   const [description, setDescription] = useState('')
   const [textColor, setTextColor] = useState('#333')
   const [background, setBackground] = useState('')
   const styles = useStyles()

   useEffect(() => {
      if (curDiary) {
         setTitle(() => curDiary.title)
         setContent(() => curDiary.content)
         setDescription(() => curDiary.description)
         setTextColor(() => curDiary.textColor)
         setBackground(() => curDiary.background)
      }
   }, [curDiary, open])

   const handleExpandEdit = () => {
      setOpenCollapeEdit(!openCollapeEdit)
      if (!openCollapeEdit) {
         Object.assign(inputContentArea.current.style, {
            height: 'calc(60vh - 300px)',
         })
      } else {
         setTimeout(
            () =>
               Object.assign(inputContentArea.current.style, {
                  height: 'calc(60vh)',
               }),
            200
         )
      }
   }

   const renderTextColorOptions = () =>
      textColorOptions.map(tc => (
         <Button
            key={tc}
            style={{
               backgroundColor: tc,
               border: textColor === tc && '3px solid orange',
            }}
            className={styles.textColorOption}
            onClick={() => setTextColor(tc)}
         />
      ))

   const renderBgOptions = () =>
      bgOptions.map(bg => (
         <Button key={bg} className={styles.bgOptionBtn} onClick={() => setBackground(bg)}>
            <CardMedia
               className={styles.bgOption}
               component='img'
               image={bg}
               alt={bg}
               style={{
                  border: background === bg && '4px solid orange',
               }}
            />
         </Button>
      ))

   const handleSubmit = async () => {
      const data = { userId: curUser._id, title, content, description, textColor, background }
      if (!curDiary) {
         // create diary
         if (title.trim() || content.trim() || description.trim()) {
            try {
               const res = await apis.createDiary(data)
               actionCreators.addDiary(res.data)
               setTitle('')
               setContent('')
               setDescription('')
               setTextColor('#333')
               setBackground('')
            } catch (err) {
               console.log(err)
            }
         }
      } else {
         // edit diary
         try {
            const res = await apis.editDiary(curDiary._id, data)
            actionCreators.editDiary(res.data)
         } catch (err) {
            console.log(err)
         }
      }
      handleCloseModal()
   }

   const handleClose = () => {
      if (curDiary) {
         setTitle('')
         setContent('')
         setDescription('')
         setTextColor('')
         setBackground('')
      }
      handleCloseModal()
   }

   return (
      <>
         <Fade in={open}>
            <Modal
               open
               onClose={handleClose}
               className={styles.diaryModal}
               aria-labelledby='modal-modal-title'
               aria-describedby='modal-modal-description'
            >
               <Paper className={styles.paper} variant='outlined'>
                  <Box
                     className={styles.diaryBody}
                     style={{ background: `url(${background}) no-repeat center / cover ` }}
                  >
                     <Typography
                        className={styles.modalSubTitle}
                        id='modal-modal-description'
                        style={{ color: textColor }}
                     >
                        {curDiary && moment(curDiary?.createdAt).format('MM/DD/YYYY - hh:mm:ss a')}
                     </Typography>

                     <form className={styles.formContent}>
                        <input
                           name='diaryTitle'
                           className={styles.inputTitleAndDesc}
                           placeholder='Enter your title...'
                           value={title}
                           onChange={e => setTitle(e.target.value)}
                           style={{ borderColor: textColor, color: textColor }}
                        />

                        <textarea
                           className={styles.inputContentDiary}
                           placeholder='Enter your content...'
                           ref={inputContentArea}
                           value={content}
                           onChange={e => setContent(e.target.value)}
                           style={{ borderColor: textColor, color: textColor }}
                        />

                        <input
                           name='diaryDescription'
                           className={styles.inputTitleAndDesc}
                           placeholder='Enter your description...'
                           value={description}
                           onChange={e => setDescription(e.target.value)}
                           style={{ borderColor: textColor, color: textColor }}
                        />
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
                                 <p style={{ fontWeight: 'bold', color: textColor }}>Text: </p>
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
                                 <p style={{ fontWeight: 'bold', color: textColor }}>Background:</p>
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
                  </Box>
                  <Button
                     variant='contained'
                     className={styles.submitDiaryBtn}
                     onClick={handleSubmit}
                  >
                     {curDiary ? 'Save' : 'Add To My Diaries'}
                  </Button>
               </Paper>
            </Modal>
         </Fade>
      </>
   )
}

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(null, mapDispatch)(DiaryModal)
