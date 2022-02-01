import { Box, Button, List, Typography } from '@material-ui/core'
import { memo, useCallback, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import apis from '../../../apis'
import DiaryListItem from '../../../components/Nav2/DiaryListItem'
import DiaryModal from '../../../components/Nav2/DiaryModal'
import useStyles from './styles'

function DiaryPage({ curUser, actionCreators, diaries }) {
   const [open, setOpen] = useState(false)
   const [curDiary, setCurDiary] = useState(null)
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

   const handleCloseModal = () => {
      setOpen(false)
      setCurDiary(null)
   }
   const handleOpenModal = useCallback(diary => {
      if (diary) {
         setCurDiary(diary)
      } else {
         setCurDiary(null)
      }
      setOpen(true)
   }, [])

   const renderDiaryItem = () =>
      diaries.map((d, i) => (
         <DiaryListItem
            key={i}
            diary={d}
            createdAt={d.createdAt}
            handleOpenModal={handleOpenModal}
         />
      ))

   return (
      <List className={styles.diaryPage}>
         <Button className={styles.addNewDiaryBtn} onClick={() => handleOpenModal(null)}>
            Add New Diary
         </Button>
         {diaries.length ? (
            renderDiaryItem()
         ) : (
            <Box className={styles.noDiaryWrap}>
               <Typography className={styles.noDiary}>No diary, please add a new diary.</Typography>
            </Box>
         )}
         <DiaryModal
            curUser={curUser}
            open={open}
            handleCloseModal={handleCloseModal}
            curDiary={curDiary}
         />
      </List>
   )
}

const mapState = state => ({
   curUser: state.user.curUser,
   diaries: state.diary.diaries,
})

const mapDispatch = dispatch => ({
   actionCreators: bindActionCreators(actions, dispatch),
})

export default connect(mapState, mapDispatch)(memo(DiaryPage))
