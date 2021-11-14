import Blog from '../../components/Blog'
import Header from '../../components/Header'

function BlogPage() {
   return (
      <>
         <Header />
         <div style={{ maxWidth: 480, margin: '24px auto' }}>
            <Blog />
            <Blog />
         </div>
      </>
   )
}

export default BlogPage
