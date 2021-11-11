import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   paper: {
      position: 'absolute',
      width: 350,
      top: '45%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '16px 16px 32px 16px',
      outline: 'none'
   },
   heading: {
      padding: '8px 16px',
      textAlign: 'center'
   },
   textField: {
      width: '100%',
      marginBottom: 16
   },

   searchForm: {
      display: 'flex',
      padding: '0px 12px'
   },

   searchSongInput: {
      width: '100%',
      outline: 'none',
      border: 'none'
   },
   searchBtn: {
      padding: '2px 12px',
      minWidth: 0,
      backgroundColor: '#333',
      color: '#fff'
   },

   songList: {
      height: 400,
      padding: 0,
      overflow: 'scroll'
   },

   submitBtn: {
      width: '100%',
      backgroundColor: '#333',
      color: '#fff'
   }
}))
