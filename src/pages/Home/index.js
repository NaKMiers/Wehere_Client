import Blog from '../../components/Blog'
import Image from '../../components/Image'
import Video from '../../components/Video'
import Header from '../../components/Header'

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
