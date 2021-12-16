import { Switch, Route } from 'react-router-dom'
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
            <Route
               path='/'
               exact={true}
               component={
                  <div style={{ maxWidth: 960, padding: '0px 6px', margin: 'auto' }}>
                     <ListOptionMusicPage />
                  </div>
               }
            />
            <Route
               path='/song
                              exact={true}
s'
               component={
                  <div style={{ maxWidth: 960, padding: 8, margin: 'auto' }}>
                     <SongList />
                  </div>
               }
            />
            <Route
               path='/play
                              exact={true}
lists'
               component={
                  <div style={{ maxWidth: 960, padding: 8, margin: 'auto' }}>
                     <PlaylistList />
                  </div>
               }
            />
            <Route
               path='/auth
                              exact={true}
ors/*'
               component={
                  <div style={{ maxWidth: 960, padding: 8, margin: 'auto' }}>
                     <AuthorList />
                  </div>
               }
            />
         </Switch>
         <PlayingBar />
      </>
   )
}

export default MusicPage
