import Blog from '../../../components/Nav1/Blog'
import Header from '../../../components/Header'
import AddIcon from '../../../components/Icons/AddIcon'
import { Box, Fab } from '@material-ui/core'
import useStyles from './styles'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import BlogModal from '../../../components/Nav1/BlogModal'
import apis from '../../../apis'

function BlogPage({ curUser }) {
   const [blogs, setBlogs] = useState([]) // [{blog: ..., author: ...}]
   const [open, setOpen] = useState(false)

   const handleCloseModal = () => setOpen(false)
   const handleOpenModal = () => setOpen(true)

   const styles = useStyles()

   useEffect(() => {
      const getBlogNewfeed = async () => {
         console.log('getBlogNewfeed')
         try {
            const res = await apis.getBlogsNewfeed()
            const data = shuffle(res.data)
            setBlogs(data)
         } catch (err) {
            console.log(err)
         }
      }
      getBlogNewfeed()
   }, [])

   const shuffle = array => {
      let currentIndex = array.length,
         randomIndex

      while (currentIndex !== 0) {
         randomIndex = Math.floor(Math.random() * currentIndex)
         currentIndex--
         ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
      }

      return array
   }

   console.log('blogs: ', blogs)

   const renderBlogs = () =>
      blogs.map(b => <Blog key={b.blog._id} blogPost={b.blog} author={b.author} />)

   return (
      <>
         <Header />
         <div style={{ padding: 24 }}>{renderBlogs()}</div>
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
