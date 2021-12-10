import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '.MuiSwitch-colorSecondary': {
         color: theme.palette.secondary.light
      }
   }
}))
