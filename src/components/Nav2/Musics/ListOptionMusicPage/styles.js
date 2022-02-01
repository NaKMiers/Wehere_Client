import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   listItemAvt: {
      display: 'flex',
      alignItems: 'center',
   },
   avatar: {
      background: theme.palette.primary.main,
      display: 'flex',
   },
   link: {
      display: 'flex',
      textDecoration: 'none',
      width: '100%',
      color: theme.palette.secondary.text,
   },
   recentlyList: {
      marginLeft: 24,
      maxHeight: 288,
      overflow: 'scroll',
   },
   expandedIcon: {
      fontSize: 20,
      marginRight: 6,
      cursor: 'pointer',
      color: theme.palette.secondary.main,
   },
   listIcon: {
      fontSize: 24,
      fontWeight: 300,
   },

   searchTextField: {
      width: '100%',
      padding: 0,
      margin: '0px 8px 0px 0px',
   },
   searchInput: {
      color: theme.palette.primary.text,
      padding: '2px 6px',
   },
   searchBtn: {
      background: theme.palette.primary.gradient,
      marginLeft: 16,
      height: 36,
   },
}))
