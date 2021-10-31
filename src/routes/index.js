import VideoPage from '../pages/VideoPage'
import ImagePage from '../pages/ImagePage'
import BlogPage from '../pages/BlogPage'
import { Route } from 'react-router'
const routes = [
   {
      path: '/videos',
      exact: true,
      component: () => <VideoPage />
   },
   {
      path: '/images',
      exact: true,
      component: () => <ImagePage />
   },
   {
      path: '/blogs',
      exact: true,
      component: () => <BlogPage />
   }
]

const renderRoutes = routes =>
   routes.map(route => (
      <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
   ))

export default renderRoutes(routes)
