import { Route, Switch } from 'react-router-dom'
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
         <Switch>
            <Route exact path='/musics'>
               <div style={{ maxWidth: 960, padding: '0px 6px', margin: 'auto' }}>
                  <ListOptionMusicPage />
               </div>
            </Route>
            <Route path='/musics/songs'>
               <div style={{ maxWidth: 960, padding: 8, margin: 'auto' }}>
                  <SongList />
               </div>
            </Route>
            <Route path='/musics/playlists'>
               <div style={{ maxWidth: 960, padding: 8, margin: 'auto' }}>
                  <PlaylistList />
               </div>
            </Route>
            <Route path='/musics/authors'>
               <div style={{ maxWidth: 960, padding: 8, margin: 'auto' }}>
                  <AuthorList />
               </div>
            </Route>
         </Switch>
         <PlayingBar />
      </>
   )
}

export default MusicPage
