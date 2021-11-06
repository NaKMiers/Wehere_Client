import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   link: {
      display: 'flex',
      width: '100%',
      textDecoration: 'none',
      color: '#333',
      alignItems: 'center'
   },
   avatar: {
      border: '3px #ddd solid'
   },
   friendBtn: {
      padding: '3px 16px',
      backgroundColor: '#333',
      color: '#fff'
   }
}))
