import { Button, List } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../../../actions'
import apis from '../../../apis'
import Header from '../../../components/Header'
import DiaryListItem from '../../../components/Nav2/DiaryListItem'
import DiaryModal from '../../../components/Nav2/DiaryModal'
import useStyles from './styles'

function DiaryPage({ curUser, actionCreators, diaries }) {
   const [open, setOpen] = useState(false)
   const [curDiary, setCurDiary] = useState(null)
   const handleCloseModal = () => {
      setOpen(false)
      setCurDiary(null)
   }
   const handleOpenModal = diary => {
      if (diary) {
         setCurDiary(diary)
      } else {
         setCurDiary(null)
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

         <List className={styles.diaryPage}>
            <Button className={styles.addNewDiaryBtn} onClick={() => handleOpenModal(null)}>
               Add New Diary
            </Button>
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
