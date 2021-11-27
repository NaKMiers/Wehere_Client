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
