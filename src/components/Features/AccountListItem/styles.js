import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   accountItem: {
      display: 'flex',
      alignItems: 'center',
      borderLeft: `3px solid ${theme.palette.primary.main}`,
      marginBottom: 16,
      height: 64,
      paddingRight: 4,
      background: theme.palette.secondary.light,
   },
   avatar: {
      width: 42,
      height: 42,
      border: `3px solid ${theme.border.main}`,
   },
   changeAccBtn: {
      padding: '3px 0px',
      margin: '0',
      background: theme.palette.secondary.main,
   },
   changeAccIcon: {
      color: theme.palette.primary.text,
   },
   showRmIcon: {
      padding: 4,
   },
   removeAccBtn: {
      color: theme.palette.danger.main,
   },
   confirmPWWrap: {
      padding: '0px 16px',
   },
   dialogTitle: {
      fontSize: 22,
      padding: '8px 16px',
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
   },
   passwordInput: {
      width: '100%',
      marginTop: 8,
   },
   inputTextField: {
      borderRadius: 4,
      background: theme.palette.secondary.light,
   },
   dialogContent: {
      padding: '16px 0px 0px 0px',
      textAlign: 'center',
   },
   dialogBtnWrap: {
      display: 'flex',
      padding: '6px 4px 8px 4px',
   },
   dialogRmBtn: {
      flexGrow: 1,
      margin: 8,
      background: theme.palette.danger.gradient,
      color: theme.palette.primary.text,
   },
   dialogCancelBtn: {
      flexGrow: 1,
      margin: 8,
      background: theme.palette.secondary.light,
      color: theme.palette.secondary.text,
   },
}))
