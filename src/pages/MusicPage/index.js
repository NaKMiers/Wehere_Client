import { Route, Switch } from 'react-router-dom'
import AuthorList from '../../components/AuthorList'
import Header from '../../components/Header'
import ListOptionMusicPage from '../../components/ListOptionMusicPage'
import PlayingBar from '../../components/PlayingBar'
import PlaylistList from '../../components/PlaylistList'
import SongList from '../../components/SongList'

function MusicPage() {
   return (
      <>
         <Header />
         <div style={{ padding: 16 }}>
            <Switch>
               <Route exact path='/musics'>
                  <ListOptionMusicPage />
               </Route>
               <Route path='/musics/songs'>
                  <SongList />
               </Route>
               <Route path='/musics/playlists'>
                  <PlaylistList />
               </Route>
               <Route path='/musics/authors'>
                  <AuthorList />
               </Route>
            </Switch>
         </div>
         <PlayingBar />
      </>
   )
}

export default MusicPage
