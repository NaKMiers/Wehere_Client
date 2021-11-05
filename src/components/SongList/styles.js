import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   newSong: {
      width: '100%',
      marginBottom: 16,
      backgroundColor: '#333',
      color: '#fff'
   },
   songCount: {
      textAlign: 'right',
      color: '#aaa',
      fontSize: 15,
      marginBottom: 8
   },
   songImg: {
      border: '3px #333 solid',
      marginRight: 8
   }
}))
