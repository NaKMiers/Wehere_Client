import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   listItem: {
      marginBottom: 8,
      borderTopRightRadius: 16,
      padding: 0
   },
   listItemButton: {
      borderRadius: 8
   },
   songImg: {
      width: 48,
      height: 48,
      marginRight: 8,
      borderRadius: 8
   },
   boxButton: {
      display: 'flex',
      flexDirection: 'column'
   },
   button: {
      padding: '0px 16px',
      textAlign: 'center',
      cursor: 'pointer'
   },
   heartIcon: {
      color: theme.palette.danger.main
   },
   menu: {
      padding: 0
   },
   menuItem: {
      padding: '8px 16px',
      minHeight: 'auto'
   }
}))
