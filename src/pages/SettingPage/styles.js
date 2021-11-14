import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '.MuiSwitch-colorSecondary': {
         color: theme.palette.secondary.light
      }
   },
   userAvt: {
      // border: `3px solid ${theme.border.light}`
   },
   deleteAccountItem: {
      background: theme.palette.danger.gradient,
      color: theme.palette.primary.text,
      textShadow: `1px 1px 2px ${theme.palette.secondary.text}}`,
      textAlign: 'center',
      width: 'calc(100% - 32px)',
      margin: 'auto'
   }
}))
