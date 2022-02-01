import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '.MuiSwitch-colorSecondary': {
         color: theme.palette.secondary.light,
      },
   },

   syncPage: {
      maxWidth: 960,
      margin: 'auto',
      padding: '62px 24px 24px 24px',
      '@media (max-width: 780px)': {
         paddingTop: 'calc(100px + 6px)',
      },
   },
}))
