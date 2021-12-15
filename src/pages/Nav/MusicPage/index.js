import { Routes, Route } from 'react-router-dom'
import AuthorList from '../../../components/Nav2/Musics/AuthorList'
import Header from '../../../components/Header'
import ListOptionMusicPage from '../../../components/Nav2/Musics/ListOptionMusicPage'
import PlayingBar from '../../../components/Nav2/Musics/PlayingBar'
import PlaylistList from '../../../components/Nav2/Musics/PlaylistList'
import SongList from '../../../components/Nav2/Musics/SongList'

function MusicPage() {
   return (
      <>
         <Header />
         <Routes>
            <Route
               path='/'
               element={
                  <div style={{ maxWidth: 960, padding: '0px 6px', margin: 'auto' }}>
                     <ListOptionMusicPage />
                  </div>
               }
            />
            <Route
               path='/songs'
               element={
                  <div style={{ maxWidth: 960, padding: 8, margin: 'auto' }}>
                     <SongList />
                  </div>
               }
            />
            <Route
               path='/playlists'
               element={
                  <div style={{ maxWidth: 960, padding: 8, margin: 'auto' }}>
                     <PlaylistList />
                  </div>
               }
            />
            <Route
               path='/authors/*'
               element={
                  <div style={{ maxWidth: 960, padding: 8, margin: 'auto' }}>
                     <AuthorList />
                  </div>
               }
            />
         </Routes>
         <PlayingBar />
      </>
   )
}

export default MusicPage
