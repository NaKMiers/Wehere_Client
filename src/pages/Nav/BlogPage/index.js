import Blog from '../../../components/Nav1/Blog'
import Header from '../../../components/Header'
import AddIcon from '../../../components/Icons/AddIcon'
import { Box, Fab } from '@material-ui/core'
import useStyles from './styles'
import { connect } from 'react-redux'
import { useState } from 'react'
import BlogModal from '../../../components/Nav1/BlogModal'

function BlogPage({ curUser }) {
   const [open, setOpen] = useState(false)
   const handleCloseModal = () => setOpen(false)
   const handleOpenModal = () => setOpen(true)
   const styles = useStyles()
   return (
      <>
         <Header />
         <div style={{ padding: 24 }}>
            <Blog />
            <Blog />
         </div>
         <BlogModal curUser={curUser} open={open} handleCloseModal={handleCloseModal} />
         <Box className={styles.addDiaryBtnBox} onClick={handleOpenModal}>
            <Fab aria-label='add' className={styles.addDiaryBtn}>
               <AddIcon />
            </Fab>
         </Box>
      </>
   )
}
const mapState = state => ({
   curUser: state.user.curUser,
})

export default connect(mapState, null)(BlogPage)
