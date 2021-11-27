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
import DiaryPage from '../pages/DiaryPage'
import ProfilePage from '../pages/ProfilePage'
import HelpAndSupportPage from '../pages/HelpAndSupportPage'
import MusicPage from '../pages/MusicPage'
import EventPage from '../pages/EventPage'
import MessengerPage from '../pages/MessengerPage'
import RestorePasswordPage from '../pages/RestorePasswordPage'
import NotFoundPage from '../pages/NotFoundPage'
import AuthLogin from '../commons/AuthLogin'

const routes = [
   {
      path: '/',
      exact: true,
      component: () => <HomePage />,
   },
   {
      path: '/blogs',
      exact: true,
      component: () => <BlogPage />,
   },
   {
      path: '/images',
      exact: true,
      component: () => <ImagePage />,
   },
   {
      path: '/videos',
      exact: true,
      component: () => <VideoPage />,
   },
   {
      path: '/shorts',
      exact: true,
      component: () => <ShortPage />,
   },
   {
      path: '/musics',
      exact: false,
      component: () => <MusicPage />,
   },
   {
      path: '/messenger',
      exact: false,
      component: () => <MessengerPage />,
   },
   {
      path: '/events',
      exact: true,
      component: () => <EventPage />,
   },
   {
      path: '/todolist',
      exact: true,
      component: () => <TodoListPage />,
   },
   {
      path: '/profile',
      exact: false,
      component: () => <ProfilePage />,
   },
   {
      path: '/friend-list',
      exact: true,
      component: () => <FriendListPage />,
   },
   {
      path: '/diaries',
      exact: true,
      component: () => <DiaryPage />,
   },
   {
      path: '/menu',
      exact: true,
      component: () => <MenuPage />,
   },
   {
      path: '/menu/setting',
      exact: true,
      component: () => <SettingPage />,
   },
   {
      path: '/menu/faq',
      exact: true,
      component: () => <FAQPage />,
   },
   {
      path: '/menu/help-and-support',
      exact: true,
      component: () => <HelpAndSupportPage />,
   },
   {
      path: '/menu/sync',
      exact: true,
      component: () => <SyncPage />,
   },
   {
      path: '/menu/switch-account',
      exact: true,
      component: () => <SwitchAccountPage />,
   },
   {
      path: '/login',
      exact: true,
      component: () => <LoginPage />,
   },
   {
      path: '/register',
      exact: true,
      component: () => <RegisterPage />,
   },
   {
      path: '/restore-password',
      exact: false,
      component: () => <RestorePasswordPage />,
   },
   {
      path: '/',
      exact: false,
      component: () => <NotFoundPage />,
   },
]

const renderRoutes = routes =>
   routes.map(route => {
      if (['/login', '/register', '/restore-password'].includes(route.path)) {
         return (
            <Route
               key={route.path}
               exact={route.exact}
               path={route.path}
               component={route.component}
            />
         )
      } else {
         return (
            <AuthLogin key={route.path} exact={route.exact} path={route.path}>
               {route.component()}
            </AuthLogin>
         )
      }
   })

export default renderRoutes(routes)
