import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   authorCount: {
      textAlign: 'right',
      color: '#aaa',
      fontSize: 15,
      marginBottom: 8
   },
   authorItem: {
      borderRadius: 8
   },
   authorAvt: {
      width: 48,
      height: 48,
      border: '3px #ddd solid',
      marginRight: 12
   }
}))
