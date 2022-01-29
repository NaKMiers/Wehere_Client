import { Box } from '@material-ui/core'
import { memo, useEffect, useState } from 'react'
import Blog from '../../../Nav1/Blog'
import Image from '../../../Nav1/Image'
import Video from '../../../Nav1/Video'
import Short from '../../../Nav1/Short'
import useStyles from './styles'
import apis from '../../../../apis'
import { useMemo } from 'react'

function PostsTab({ userProfile }) {
   const [posts, setPosts] = useState([])

   const styles = useStyles()

   useEffect(() => {
      const getPosts = async () => {
         if (userProfile?._id) {
            try {
               const res = await apis.getAllPosts(userProfile._id)
               setPosts(res.data)
            } catch (err) {
               console.log(err)
            }
         }
      }
      getPosts()
   }, [userProfile])

   const renderPosts = useMemo(
      () =>
         posts.map(post => {
            switch (post.type) {
               case 'blog':
                  return <Blog key={post._id} blogPost={post} author={userProfile} />

               case 'image':
                  return <Image key={post._id} imagePost={post} author={userProfile} />

               case 'video':
                  return <Video key={post._id} videoPost={post} author={userProfile} />

               case 'short':
                  return <Short key={post._id} shortPost={post} author={userProfile} />

               default:
                  return null
            }
         }),
      [posts, userProfile]
   )

   return (
      <Box className={styles.tab} style={{ padding: '24px 8px' }}>
         {renderPosts()}
      </Box>
   )
}

export default memo(PostsTab)
