import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '.MuiSwitch-colorSecondary': {
         color: theme.palette.secondary.light,
      },
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
