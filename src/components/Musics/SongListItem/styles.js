import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   listItem: {
      marginBottom: 8,
      borderTopRightRadius: 16,
      padding: 0,
   },
   listItemButton: {
      borderRadius: 8,
   },

   songImg: {
      width: 42,
      height: 42,
      marginRight: 8,
      borderRadius: 8,
   },
   boxButton: {
      display: 'flex',
      flexDirection: 'column',
   },
   button: {
      padding: '4px 16px',
      textAlign: 'center',
      cursor: 'pointer',
   },

   menu: {
      '& .MuiPaper-root': {
         background: theme.palette.secondary.main,
         color: theme.palette.primary.text,
      },
   },
   menuItem: {
      padding: '6px 12px',
      minHeight: 0,
   },
}))
