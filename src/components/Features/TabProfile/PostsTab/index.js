import { Box } from '@material-ui/core'
import { useEffect } from 'react'
import Blog from '../../../Nav1/Blog'
import Image from '../../../Nav1/Image'
import Video from '../../../Nav1/Video'
import useStyles from './styles'
import apis from '../../../../apis'

function PostsTab({ userProfile }) {
   const styles = useStyles()

   useEffect(() => {
      const getPosts = async () => {
         if (userProfile?.id) {
            try {
               const res = apis.getAllPosts(userProfile.id)
               console.log('res-get-all-posts: ', res)
            } catch (err) {
               console.log(err)
            }
         }
      }
      getPosts()
   }, [userProfile?.id])

   return (
      <Box className={styles.tab} style={{ padding: '24px 8px' }}>
         <Video />
         <Image />
         <Blog />
      </Box>
   )
}

export default PostsTab
