import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   topProfile: {
      position: 'relative'
   },
   bgProfile: {
      margin: 'auto',
      maxWidth: 960,
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
   }
}))
