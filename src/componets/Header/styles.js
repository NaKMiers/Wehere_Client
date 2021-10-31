import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   selected: {
      transform: 'scale(1.3)'
   },
   selectedHome: {
      transform: 'scale(1.1)',
      outline: '#fff solid 2px',
      borderRadius: '50%'
   },
   toolbar: {
      padding: '0 32px',
      display: 'flex',
      justifyContent: 'space-between'
   },
   headerIcon: {
      fontSize: 36,
      color: '#fff',
      marginTop: 5
   },
   gridContainer: {
      margin: 'auto'
   }
}))
