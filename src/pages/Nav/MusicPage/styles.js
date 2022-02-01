import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   musicPage: {
      maxWidth: 960,
      margin: 'auto',
      padding: '64px 24px 24px 24px',
      '@media (max-width: 780px)': {
         paddingTop: 'calc(100px + 8px)',
      },
   },
}))
