import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   listItemAvt: {
      background: theme.palette.primary.main
   },
   link: {
      display: 'flex',
      textDecoration: 'none',
      width: '100%',
      color: theme.palette.secondary.text
   },
   recentlyList: {
      marginLeft: 24
   }
}))
