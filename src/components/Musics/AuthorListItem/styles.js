import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   authorItem: {
      borderRadius: 80
   },
   link: {
      display: 'flex',
      textDecoration: 'none',
      alignItems: 'center',
      color: theme.palette.secondary.text
   },
   authorAvt: {
      width: 42,
      height: 42,
      marginRight: 12
   }
}))
