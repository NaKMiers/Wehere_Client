import HomePage from '../pages/Home'
import VideoPage from '../pages/VideoPage'
import ImagePage from '../pages/ImagePage'
import BlogPage from '../pages/BlogPage'
import { Route } from 'react-router'
import ShortPage from '../pages/ShortPage'
import TodoListPage from '../pages/TodoListPage'
import MenuPage from '../pages/MenuPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import SettingPage from '../pages/SettingPage'
import FriendListPage from '../pages/FriendListPage'
import FAQPage from '../pages/FAQPage'
import SwitchAccountPage from '../pages/SwitchAccountPage'
import SyncPage from '../pages/Sync'
const routes = [
   {
      path: '/blogs',
      exact: true,
      component: () => <BlogPage />
   },
   {
      path: '/images',
      exact: true,
      component: () => <ImagePage />
   },
   {
      path: '/',
      exact: true,
      component: () => <HomePage />
   },
   {
      path: '/videos',
      exact: true,
      component: () => <VideoPage />
   },
   {
      path: '/shorts',
      exact: true,
      component: () => <ShortPage />
   },
   {
      path: '/todolist',
      exact: true,
      component: () => <TodoListPage />
   },
   {
      path: '/friend-list',
      exact: true,
      component: () => <FriendListPage />
   },
   {
      path: '/faq',
      exact: true,
      component: () => <FAQPage />
   },
   {
      path: '/menu',
      exact: true,
      component: () => <MenuPage />
   },
   {
      path: '/menu/setting',
      exact: true,
      component: () => <SettingPage />
   },
   {
      path: '/menu/sync',
      exact: true,
      component: () => <SyncPage />
   },
   {
      path: '/menu/switch-account',
      exact: true,
      component: () => <SwitchAccountPage />
   },
   {
      path: '/login',
      exact: true,
      component: () => <LoginPage />
   },
   {
      path: '/register',
      exact: true,
      component: () => <RegisterPage />
   }
]

const renderRoutes = routes =>
   routes.map(route => (
      <Route key={route.path} exact={route.exact} path={route.path} component={route.component} />
   ))

export default renderRoutes(routes)
