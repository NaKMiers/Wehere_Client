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
      justifyContent: 'center'
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
      margin: 'auto',
      maxWidth: 960,
      marginTop: 114,
      padding: 16
   },
   tabsList: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
   },
   tabButtonsWrap: {
      margin: '8px 0 8px 0'
   },
   tabButton: {
      border: 'none',
      fontWeight: 'bold',
      padding: '6px 16px'
   },
   friendBtn: {
      padding: '2px 8px',
      backgroundColor: '#4caf50',
      color: '#fff'
   },
   infoTab: {
      borderTop: '3px #333 solid',
      width: '100%'
   },
   friendsTab: {
      borderTop: '3px #333 solid',
      width: '100%'
   },
   postsTab: {
      borderTop: '3px #333 solid',
      width: '100%'
   }
}))
