import { makeStyles } from '@material-ui/core'
export default makeStyles(theme => ({
   authorItem: {
      borderRadius: 80
   },
   link: {
      display: 'flex',
      textDecoration: 'none',
      color: theme.palette.secondary.text
   },
   authorAvt: {
      width: 48,
      height: 48,
      border: `3px  solid ${theme.border.light}`,
      marginRight: 12
   }
}))
