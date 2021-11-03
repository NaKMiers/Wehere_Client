import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   topProfile: {
      margin: 'auto',
      position: 'relative',
      maxWidth: 960
   },
   bgProfile: {
      minHeight: 200,
      maxHeight: 400,
      height: 'auto',
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8
   },
   avatarWrap: {
      position: 'absolute',
      border: '6px #fff solid',
      borderRadius: '50%',
      bottom: '-8%',
      left: '50%',
      transform: 'translateX(-50%)'
   },
   avatar: {
      width: 170,
      height: 170
   },
   name: {
      position: 'absolute',
      top: '108.5%',
      width: '100%',
      textAlign: 'center',
      fontWeight: 'bold'
   },
   groupActionBtn: {
      position: 'absolute',
      bottom: '-120px',
      left: '50%',
      width: '75%',
      transform: 'translateX(-50%)',
      display: 'flex',
      margin: 'auto'
   },
   actionBtn: {
      backgroundColor: '#333',
      color: '#fff',
      fontWeight: 'bold',
      margin: '0 4px',
      padding: '6px 8px'
   },
   menuAction: {
      marginLeft: 12
   },
   menuActionItem: {
      minHeight: 'auto'
   },
   bottomProfile: {
      width: '100%',
      marginTop: 114,
      padding: 16
   }
}))
