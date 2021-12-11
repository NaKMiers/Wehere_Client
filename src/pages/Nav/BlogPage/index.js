import Blog from '../../../components/Nav1/Blog'
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
