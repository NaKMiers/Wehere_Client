import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   header: {
      background: theme.palette.primary.gradient
   },
   selected: {
      transform: 'scale(1.3)',
      borderBottom: '3px solid #f44336'
   },
   selectedHome: {
      transform: 'scale(1.1)',
      outline: '#fff solid 2px',
      borderRadius: '50%'
   },
   headerIcon: {
      fontSize: 36,
      color: theme.palette.primary.text,
      marginTop: 5
   },
   headerMenuIcon: {
      color: theme.palette.primary.text,
      fontSize: 41,
      marginTop: 7
   },
   slideIcon: {
      margin: '0px -12px 0px -16px',
      fontSize: 32
   },
   gridContainer: {
      margin: 'auto',
      overflow: 'hidden'
   },
   toolbar: {
      width: '182.4%',
      display: 'flex',
      padding: '0px 6.8%',
      justifyContent: 'space-between',
      overflow: 'hidden'
   }
}))
