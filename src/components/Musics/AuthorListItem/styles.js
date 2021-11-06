import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   authorItem: {
      borderRadius: 80
   },
   link: {
      display: 'flex',
      textDecoration: 'none',
      color: '#333'
   },
   authorAvt: {
      width: 48,
      height: 48,
      border: '3px #ddd solid',
      marginRight: 12
   }
}))
