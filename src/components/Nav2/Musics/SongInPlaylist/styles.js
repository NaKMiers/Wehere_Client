import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   playlistThumb: {
      width: 280,
      borderRadius: 8,
      overflow: 'hidden',
      '@media (max-width: 780px)': {
         width: 140,
         height: 140,
      },
   },
   subThumbPL: {
      height: 140,
      '@media (max-width: 780px)': {
         height: 70,
      },
   },
   subThumbPlSingle: {
      height: 280,
      '@media (max-width: 780px)': {
         height: 140,
      },
   },
   playlistName: {
      fontWeight: 'bold',
      color: theme.palette.secondary.text,
   },
   songCount: {
      fontSize: 12,
      color: theme.palette.secondary.text,
   },
   playlistBtn: {
      width: '100%',
      height: 280,
      '@media (max-width: 780px)': {
         height: 140,
      },
      borderRadius: 8,
   },

   songList: {
      overflow: 'scroll',
      height: 'calc(50vh - 32px)',
      marginTop: 8,
      '@media (max-width: 780px)': {
         height: 'calc(50vh + 80px)',
      },
   },

   moreBtn: {
      position: 'absolute',
      top: 0,
      right: 0,
      cursor: 'pointer',
      padding: 12,
   },

   menu: {
      '& .MuiPaper-root': {
         background: theme.palette.secondary.main,
         color: theme.palette.primary.text,
      },
   },
   menuItem: {
      padding: '6px 12px',
      minHeight: 0,
   },
}))
