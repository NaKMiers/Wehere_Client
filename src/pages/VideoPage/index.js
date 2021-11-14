import Header from '../../components/Header'
import Video from '../../components/Video'

function VideoPage() {
   return (
      <>
         <Header />
         <div style={{ maxWidth: 480, margin: '24px auto' }}>
            <Video />
            <Video />
         </div>
      </>
   )
}

export default VideoPage
