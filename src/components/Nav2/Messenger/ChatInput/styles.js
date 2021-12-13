import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '*::-webkit-scrollbar': {
         width: 0,
         height: 0,
      },
   },

   chatInput: {
      height: 80,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: theme.palette.primary.gradient,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      padding: '0px 12px',
      borderBottom: `3px solid ${theme.border.main}`,
      boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0)',
      transition: 'margin 0.3s ease-in-out',
   },
   inputTextField: {
      flexGrow: '1',
   },
   inputProps: {
      color: theme.palette.primary.text,
   },
   formIcon: {
      fontSize: 22,
      color: theme.palette.primary.text,
   },

   emojiTable: {
      textAlign: 'center',
      height: '25vh',
   },
   emojiTableWrap: {
      height: 'calc(25vh - 48px)',
      padding: 8,
      overflow: 'scroll',
   },
   emoji: {
      fontSize: 20,
   },
   emojiBar: {
      display: 'flex',
      justifyContent: 'center',
   },
   tabEmoji: {
      fontSize: 24,
      padding: 0,
      borderRadius: 0,
   },

   paperSetting: {
      position: 'absolute',
      top: 56,
      bottom: 80,
      left: 0,
      right: 0,
      overflow: 'hidden',
   },
}))
