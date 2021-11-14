import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '*::-webkit-scrollbar': {
         width: 0,
         height: 0
      }
   },
   diaryWrap: {
      position: 'relative',
      width: '100%',
      height: '100px',
      backgroundOrigin: 'content-box',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      borderRadius: 16,
      boxShadow: '0px 1px 6px 1px rgba(0, 0, 0, 0.4)',
      transition: 'height 0.2s ease-in-out',
      overflow: 'hidden',
      '&:hover': {
         height: '170px'
      },
      '&:hover $diaryDesc': {
         display: 'block',
         opacity: 1
      },
      '&:hover $diaryTime': {
         display: 'none'
      }
   },
   diaryTitle: {
      margin: '10px 16px',
      color: theme.palette.secondary.text,
      fontSize: 30,
      textShadow: '2px 1px 2px #fff',
      transition: 'left 4s linear',
      WebkitBoxOrient: 'vertical',
      whiteSpace: 'normal',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
   },
   diaryDesc: {
      opacity: 0,
      position: 'absolute',
      bottom: 0,
      width: '100%',
      maxHeight: 111,
      minHeight: 100,
      padding: '8px 16px',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      color: theme.palette.primary.text,
      transition: 'opacity 0.5s ease-in-out',
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
      overflowY: 'scroll'
   },
   diaryTime: {
      margin: '-60px 18px',
      color: theme.palette.primary.text,
      fontSize: 10,
      textShadow: '1px 1px 1px #222'
   },
   moreIconBtn: {
      position: 'absolute',
      top: 0,
      right: 0
   },
   moreIcon: {
      color: theme.palette.primary.text
   },
   menuItem: {
      padding: '4px 8px',
      minHeight: 0
   },
   menuIcon: {
      marginLeft: 8
   }
}))
