import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   homePage: {
      padding: '80px 24px 24px 24px',
      '@media (max-width: 780px)': {
         paddingTop: 'calc(100px + 24px)',
      },
   },
}))
