import Blog from '../../../components/Nav1/Blog'
import Image from '../../../components/Nav1/Image'
import Video from '../../../components/Nav1/Video'
import Header from '../../../components/Header'

function HomePage() {
   return (
      <>
         <Header />
         <div style={{ padding: 24 }}>
            <Blog />
            <Image />
            <Video />
            <Blog />
            <Image />
            <Video />
            <Video />
         </div>
      </>
   )
}

export default HomePage
