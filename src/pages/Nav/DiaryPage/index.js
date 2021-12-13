import { List } from '@material-ui/core'
import DiaryListItem from '../../../components/Nav2/DiaryListItem'
import DiaryModal from '../../../components/Nav2/DiaryModal'
import Header from '../../../components/Header'
import { Box, Fab } from '@mui/material'
import AddIcon from '../../../components/Icons/AddIcon'
import useStyles from './styles'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import apis from '../../../apis'

function DiaryPage({ curUser, actionCreators, diaries }) {
   const [open, setOpen] = useState(false)
   const [curDiary, setCurDiary] = useState(null)
   const handleCloseModal = () => setOpen(false)
   const handleOpenModal = diary => {
      if (diary) {
         setCurDiary(diary)
      }
      setOpen(true)
   }

   const styles = useStyles()

   useEffect(() => {
      const getDiaries = async () => {
         try {
            const res = await apis.getDiaries()
            actionCreators.getDiaries(res.data)
         } catch (err) {
            console.log(err)
         }
      }
      getDiaries()
   }, [actionCreators])

   return (
      <>
         <Header />
         <List style={{ maxWidth: 960, padding: '16px 8px', margin: 'auto' }}>
            {diaries.map((d, i) => (
               <DiaryListItem
                  key={i}
                  diary={d}
                  createdAt={d.createdAt}
                  handleOpenModal={handleOpenModal}
               />
            ))}
         </List>
         <DiaryModal
            curUser={curUser}
            open={open}
            handleCloseModal={handleCloseModal}
            curDiary={curDiary}
         />
         <Box className={styles.addDiaryBtnBox} onClick={() => handleOpenModal(null)}>
            <Fab aria-label='add' className={styles.addDiaryBtn}>
               <AddIcon />
            </Fab>
         </Box>
      </>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
   diaries: state.diary.diaries,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(DiaryPage)
