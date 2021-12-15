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
      element: <HomePage />,
   },
   {
      path: '/blogs',
      element: <BlogPage />,
   },
   {
      path: '/images',
      element: <ImagePage />,
   },
   {
      path: '/videos',
      element: <VideoPage />,
   },
   {
      path: '/shorts',
      element: <ShortPage />,
   },
   {
      path: '/musics/*',
      element: <MusicPage />,
   },
   {
      path: '/messenger/*',
      element: <MessengerPage />,
   },
   {
      path: '/events',
      element: <EventPage />,
   },
   {
      path: '/todolist',
      element: <TodoListPage />,
   },
   {
      path: '/profile/*',
      element: <ProfilePage />,
   },
   {
      path: '/friend-list',
      element: <FriendListPage />,
   },
   {
      path: '/diaries',
      element: <DiaryPage />,
   },
   {
      path: '/menu',
      element: <MenuPage />,
   },
   {
      path: '/menu/setting',
      element: <SettingPage />,
   },
   {
      path: '/menu/faq',
      element: <FAQPage />,
   },
   {
      path: '/menu/help-and-support',
      element: <HelpAndSupportPage />,
   },
   {
      path: '/menu/sync',
      element: <SyncPage />,
   },
   {
      path: '/menu/switch-account',
      element: <SwitchAccountPage />,
   },
   {
      path: '/login',
      element: <LoginPage />,
   },
   {
      path: '/register',
      element: <RegisterPage />,
   },
   {
      path: '/restore-password',
      element: <RestorePasswordPage />,
   },
   {
      path: '/*',
      element: <NotFoundPage />,
   },
]

const renderRoutes = routes =>
   routes.map(route => {
      if (['/login', '/register', '/restore-password'].includes(route.path)) {
         return <Route key={route.path} path={route.path} element={route.element} />
      } else {
         return AuthLogin({
            children: route.element,
            key: route.path,
            path: route.path,
         })
      }
   })

export default renderRoutes(routes)
