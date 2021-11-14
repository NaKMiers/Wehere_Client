import Image from '../../components/Image'
import Header from '../../components/Header'

function ImagePage() {
   return (
      <>
         <Header />
         <div style={{ maxWidth: 480, margin: '24px auto' }}>
            <Image />
            <Image />
         </div>
      </>
   )
}

export default ImagePage
