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
   },
   expandedIcon: {
      fontSize: 20,
      marginRight: 6,
      cursor: 'pointer',
      color: theme.palette.secondary.main
   },
   listIcon: {
      fontSize: 24,
      fontWeight: 300
   }
}))
