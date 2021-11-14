import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   link: {
      display: 'flex',
      width: '100%',
      textDecoration: 'none',
      color: theme.palette.secondary.text,
      alignItems: 'center'
   },
   avatar: {
      // border: `3px  solid ${theme.border.light}`
   },
   friendBtn: {
      padding: '3px 16px',
      background: theme.palette.danger.gradient,
      color: theme.palette.primary.text
   }
}))
