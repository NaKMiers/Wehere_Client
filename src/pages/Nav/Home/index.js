import { Box } from '@material-ui/core'
import { memo } from 'react'
import { connect } from 'react-redux'
import { makeRandomList } from '../../../commons/utils'
import Blog from '../../../components/Nav1/Blog'
import Image from '../../../components/Nav1/Image'
import Short from '../../../components/Nav1/Short'
import Video from '../../../components/Nav1/Video'
import useStyles from './styles'

function HomePage({ blogs, images, videos, shorts }) {
   const styles = useStyles()

   const renderHome = () => {
      const renderedBlogs = blogs.map(b => (
         <Blog key={b.blog._id} blogPost={b.blog} author={b.author} />
      ))
      const renderedImages = images.map(img => (
         <Image key={img.image._id} imagePost={img.image} author={img.author} />
      ))
      const renderedVideos = videos.map(v => (
         <Video key={v.video._id} videoPost={v.video} author={v.author} />
      ))
      const renderedShorts = shorts.map(s => (
         <Short key={s.short._id} shortPost={s.short} author={s.author} />
      ))

      const posts = makeRandomList(
         [].concat(renderedBlogs, renderedImages, renderedVideos, renderedShorts)
      )

      return posts
   }

   return <Box className={styles.homePage}>{renderHome()}</Box>
}

const mapState = state => ({
   blogs: state.blog.blogs,
   images: state.image.images,
   videos: state.video.videos,
   shorts: state.short.shorts,
})

export default connect(mapState, null)(memo(HomePage))
