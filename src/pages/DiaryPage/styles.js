import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   '@global': {
      '*::-webkit-scrollbar': {
      width: '0.4em'
      },
      '*::-webkit-scrollbar-thumb:hover': {
         backgroundColor: '#555',
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
         height: '170px',
      },
      '&:hover $diaryTitle': {
         opacity: 0.7,
      },
      '&:hover $diaryDesc': {
         display: 'block',
         opacity: 1
      },
      
   },
   diaryTitle: {
      margin: '8px 16px',
      color: '333',
      fontSize: 30,
      textShadow: '2px 1px 2px #fff',
      transition: 'left 4s linear',
      'WebkitBoxOrient': 'vertical',
      whiteSpace: 'normal',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
   },
   diaryTime: {
      float: 'right',
      color: '#fff',
      fontSize: 15,
      textShadow: '1px 1px 1px #222',
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
      color: '#fff',
      transition: 'opacity 0.5s ease-in-out',
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
      overflowY: 'scroll',
   }
}))
