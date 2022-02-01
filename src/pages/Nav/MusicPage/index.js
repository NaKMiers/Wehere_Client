import { Box } from '@material-ui/core'
import { memo } from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthorList from '../../../components/Nav2/Musics/AuthorList'
import ListOptionMusicPage from '../../../components/Nav2/Musics/ListOptionMusicPage'
import PlaylistList from '../../../components/Nav2/Musics/PlaylistList'
import SongList from '../../../components/Nav2/Musics/SongList'
import useStyles from './styles'

function MusicPage() {
   const styles = useStyles()

   return (
      <Box className={styles.musicPage}>
         <Switch>
            <Route path='/musics' exact={true}>
               <ListOptionMusicPage />
            </Route>
            <Route path='/musics/songs' exact={true}>
               <SongList />
            </Route>
            <Route path='/musics/playlists' exact={false}>
               <PlaylistList />
            </Route>
            <Route path='/musics/authors' exact={false}>
               <AuthorList />
            </Route>
         </Switch>
      </Box>
   )
}

export default memo(MusicPage)
