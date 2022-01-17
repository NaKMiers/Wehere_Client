import { Box } from '@material-ui/core'
import { useEffect, useState } from 'react'
import Blog from '../../../Nav1/Blog'
import Image from '../../../Nav1/Image'
import Video from '../../../Nav1/Video'
import Short from '../../../Nav1/Short'
import useStyles from './styles'
import apis from '../../../../apis'

function PostsTab({ userProfile }) {
   const [posts, setPosts] = useState([])

   const styles = useStyles()

   useEffect(() => {
      const getPosts = async () => {
         if (userProfile?._id) {
            try {
               const res = await apis.getAllPosts(userProfile._id)
               console.log('res-get-all-posts: ', res.data)
               setPosts(res.data)
            } catch (err) {
               console.log(err)
            }
         }
      }
      getPosts()
   }, [userProfile])

   const renderPosts = () =>
      posts.map(post => {
         switch (post.type) {
            case 'blog':
               return <Blog blogPost={post} author={userProfile} />

            case 'image':
               return <Image imagePost={post} author={userProfile} />

            case 'video':
               return <Video videoPost={post} author={userProfile} />

            case 'short':
               return <Short shortPost={post} author={userProfile} />

            default:
               return null
         }
      })

   console.log('renderPosts(): ', renderPosts())

   return (
      <Box className={styles.tab} style={{ padding: '24px 8px' }}>
         {renderPosts()}
      </Box>
   )
}

export default PostsTab
