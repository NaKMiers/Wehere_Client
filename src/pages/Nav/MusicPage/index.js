import { Route, Switch } from 'react-router-dom'
import Header from '../../../components/Header'
import AuthorList from '../../../components/Nav2/Musics/AuthorList'
import ListOptionMusicPage from '../../../components/Nav2/Musics/ListOptionMusicPage'
import PlaylistList from '../../../components/Nav2/Musics/PlaylistList'
import SongList from '../../../components/Nav2/Musics/SongList'

function MusicPage() {
   return (
      <>
         <Header />
         <Switch>
            <Route path='/musics' exact={true}>
               <div style={{ maxWidth: 960, padding: '0px 6px', margin: 'auto' }}>
                  <ListOptionMusicPage />
               </div>
            </Route>
            <Route path='/musics/songs' exact={true}>
               <div style={{ maxWidth: 960, padding: 8, margin: 'auto' }}>
                  <SongList />
               </div>
            </Route>
            <Route path='/musics/playlists' exact={false}>
               <div style={{ maxWidth: 960, padding: 8, margin: 'auto' }}>
                  <PlaylistList />
               </div>
            </Route>
            <Route path='/musics/authors' exact={false}>
               <div style={{ maxWidth: 960, padding: 8, margin: 'auto' }}>
                  <AuthorList />
               </div>
            </Route>
         </Switch>
      </>
   )
}

export default MusicPage
