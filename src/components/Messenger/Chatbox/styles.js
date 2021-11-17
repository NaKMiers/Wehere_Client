import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '*::-webkit-scrollbar': {
         width: 0,
         height: 0,
      },
      '.MuiBadge-colorPrimary': {
         background: theme.palette.success.main,
         border: `1.5px solid ${theme.border.main}`,
      },
   },
   chatHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.text,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      padding: '0px 12.5px',
   },
   moreBtn: {
      cursor: 'pointer',
      padding: 12,
   },
   moreIcon: {
      fontSize: 22,
      color: theme.palette.primary.text,
   },
   textHeader: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '0px 8px',
   },
   userName: {
      fontSize: 20,
   },
   status: {
      fontSize: 12,
      color: theme.palette.success.main,
      marginTop: -4,
   },
   avtBtn: {
      borderRadius: '50%',
   },
   avtLink: {
      position: 'relative',
   },
   avt: {
      width: 42,
      height: 42,
   },
   badge: {
      position: 'absolute',
      top: 9,
      right: 5,
   },

   menu: {
      '& .MuiPaper-root': {
         background: theme.palette.secondary.main,
         color: theme.palette.primary.text,
      },
   },
   menuItem: {
      padding: '4px 8px',
      minHeight: 0,
   },

   chatContent: {
      padding: 24,
   },

   chatInput: {
      height: 80,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: theme.palette.secondary.main,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      padding: '0px 12px',
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
