import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   link: {
      display: 'flex',
      textDecoration: 'none',
      width: '100%',
      color: '#333'
   },
   recentlyList: {
      marginLeft: 24
   },
   songImg: {
      border: '3px #333 solid',
      marginRight: 8
   }
}))
