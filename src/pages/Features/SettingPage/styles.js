import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '*::-webkit-scrollbar': {
         width: 0,
         height: 0,
      },
      '.MuiSwitch-colorSecondary': {
         color: theme.palette.secondary.light,
      },
   },

   settingPage: {
      maxWidth: 960,
      margin: 'auto',
      padding: '62px 24px 24px 24px',
      '@media (max-width: 780px)': {
         paddingTop: 'calc(100px + 6px)',
      },
   },

   themeList: {
      width: '100%',
      height: 100,
      overflow: 'scroll',
   },
   themeItem: {
      display: 'inline-block',
      height: 50,
      border: `2px solid ${theme.border.main}`,
   },
   themeBtn: {
      width: '100%',
      height: '100%',
      fontSize: 10,
      textTransform: 'capitalize',
      fontWeight: '500',
   },

   changePWBtn: {
      background: theme.palette.success.main,
      color: theme.palette.success.text,
      margin: '8px 0px 0px 8px',
      padding: '6px 18px',
      float: 'right',
   },

   listBlockFrItem: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
   },
   linkBlockFriend: {
      display: 'flex',
      textDecoration: 'none',
      color: theme.palette.secondary.text,
   },
   deleteAccountItem: {
      background: theme.palette.danger.gradient,
      color: theme.palette.primary.text,
      textShadow: `1px 1px 2px ${theme.palette.secondary.text}}`,
      textAlign: 'center',
      width: 'calc(100% - 32px)',
      margin: 'auto',
   },
}))
