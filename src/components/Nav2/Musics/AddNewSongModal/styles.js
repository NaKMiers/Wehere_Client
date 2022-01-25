import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   paper: {
      position: 'absolute',
      width: 350,
      top: '45%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: 0,
      borderRadius: 8,
      overflow: 'hidden',
      outline: 'none',
   },
   heading: {
      padding: '8px 16px',
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      textAlign: 'center',
   },
   form: {
      padding: '8px 16px 24px 16px',
   },
   textField: {
      width: '100%',
      marginBottom: 16,
   },

   audioWrap: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 8,
   },
   audio: {},

   fileAndThumbWrap: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 24,
   },
   selectSongWrap: {
      width: 'calc(50% - 12px)',
   },
   selectSongBtn: {
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      padding: '4px 8px',
      width: '100%',
   },
   fileName: {
      overflow: 'scroll',
      width: '100%',
      maxHeight: 114,
      padding: '0px 10px',
      wordWrap: 'break-word',
   },

   selectThumbWrap: {
      width: 'calc(50% - 12px)',
   },
   selectThumbBtn: {
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
      width: '100%',
      padding: '4px 8px',
   },
   thumbFrame: {
      border: `2px solid ${theme.border.light}`,
      padding: 6,
   },
   thumbnail: {
      margin: 'auto',
      width: 100,
      height: 100,
   },

   submitBtn: {
      width: '100%',
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
   },
}))
