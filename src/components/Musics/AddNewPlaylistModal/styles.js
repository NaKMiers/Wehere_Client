import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   paper: {
      position: 'absolute',
      width: 350,
      top: '45%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      outline: 'none',
      borderRadius: 8,
      overflow: 'hidden'
   },

   form: {
      padding: '8px 16px 24px 16px'
   },
   heading: {
      padding: '8px 16px',
      textAlign: 'center',
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text
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
      padding: '6px 14px',
      minWidth: 0,
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text
   },
   searchIcon: {
      fontSize: 16
   },

   songList: {
      height: 400,
      padding: 0,
      overflow: 'scroll'
   },

   submitBtn: {
      width: '100%',
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text
   }
}))
