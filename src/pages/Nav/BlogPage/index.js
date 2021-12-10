import Blog from '../../../components/Blog'
import Header from '../../../components/Header'

function BlogPage() {
   return (
      <>
         <Header />
         <div style={{ padding: 24 }}>
            <Blog />
            <Blog />
         </div>
      </>
   )
}

export default BlogPage
