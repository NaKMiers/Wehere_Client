import { Button } from '@material-ui/core'
import { useState } from 'react'
import { connect } from 'react-redux'
import Header from '../../../components/Header'
import Blog from '../../../components/Nav1/Blog'
import BlogModal from '../../../components/Nav1/BlogModal'
import useStyles from './styles'

function BlogPage({ curUser, blogs }) {
   const [open, setOpen] = useState(false)

   const handleCloseModal = () => setOpen(false)
   const handleOpenModal = () => setOpen(true)

   const styles = useStyles()

   const renderBlogs = () =>
      blogs.map(b => <Blog key={b.blog._id} blogPost={b.blog} author={b.author} />)

   return (
      <>
         <Header />
         <div className={styles.blogPage}>
            <Button className={styles.addNewBlogBtn} onClick={handleOpenModal}>
               Add New Blog
            </Button>
            {renderBlogs()}
         </div>

         <BlogModal curUser={curUser} open={open} handleCloseModal={handleCloseModal} />
      </>
   )
}
const mapState = state => ({
   curUser: state.user.curUser,
   blogs: state.blog.blogs,
})

export default connect(mapState, null)(BlogPage)
