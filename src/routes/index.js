import { Route } from 'react-router'
import MenuPage from '../pages/Features/MenuPage'
import SettingPage from '../pages/Features/SettingPage'
import FriendListPage from '../pages/Features/FriendListPage'
import FAQPage from '../pages/Features/FAQPage'
import SwitchAccountPage from '../pages/Features/SwitchAccountPage'
import SyncPage from '../pages/Features/Sync'
import ProfilePage from '../pages/Features/ProfilePage'
import HelpAndSupportPage from '../pages/Features/HelpAndSupportPage'

import MusicPage from '../pages/Nav/MusicPage'
import EventPage from '../pages/Nav/EventPage'
import MessengerPage from '../pages/Nav/MessengerPage'
import DiaryPage from '../pages/Nav/DiaryPage'
import NotFoundPage from '../pages/Nav/NotFoundPage'
import HomePage from '../pages/Nav/Home'
import VideoPage from '../pages/Nav/VideoPage'
import ImagePage from '../pages/Nav/ImagePage'
import BlogPage from '../pages/Nav/BlogPage'
import ShortPage from '../pages/Nav/ShortPage'
import TodoListPage from '../pages/Nav/TodoListPage'

import LoginPage from '../pages/Auth/LoginPage'
import RegisterPage from '../pages/Auth/RegisterPage'
import RestorePasswordPage from '../pages/Auth/RestorePasswordPage'

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
      exact: true,
      component: () => <RestorePasswordPage />,
   },
   {
      path: '/',
      exact: true,
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
            <AuthLogin key={route.path} path={route.path} exact={route.exact}>
               {route.component()}
            </AuthLogin>
         )
      }
   })

export default renderRoutes(routes)
