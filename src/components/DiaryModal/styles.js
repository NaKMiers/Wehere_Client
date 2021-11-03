import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   boxModal: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4
   },
   addDiaryBtn: {
      position: 'fixed',
      bottom: 28,
      right: 32
   },
   diaryModal: {
      position: 'relative'
   },
   paper: {
      position: 'absolute',
      top: 56,
      left: 0,
      right: 0,
      bottom: 52,
      padding: '8px 16px 16px 16px',
      borderRadius: 16,
      // background:
      //    'url(https://images.pexels.com/photos/1624600/pexels-photo-1624600.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)',
      backgroundOrigin: 'content-box',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
   },
   modalTitle: {
      fontSize: 24,
      textAlign: 'center'
   },
   modalSubTitle: {
      fontSize: 10,
      textAlign: 'center',
      marginBottom: 8
   },
   submitDiaryBtn: {
      position: 'absolute',
      width: 'calc(100% - 32px)',
      bottom: 16,
      left: 16,
      right: 16,
      backgroundColor: '#333',
      color: '#fff'
   },
   inputTitleDiary: {
      width: '100%',
      padding: '8px 0px',
      border: 'none',
      borderBottom: '3px #333 solid',
      outline: 'none',
      fontSize: 20,
      marginBottom: 8,
      background: 'transparent'
   },
   inputContentDiary: {
      width: '100%',
      height: '60vh',
      resize: 'none',
      border: '3px #333 solid',
      outline: 'none',
      padding: 16,
      fontSize: 16,
      transition: 'height 0.2s ease-in-out',
      background: 'transparent'
   },
   diaryBody: {},
   editDiaryWrap: {},
   expandMoreEditBtn: {
      margin: 'auto'
   },
   listEditOption: {
      display: 'flex',
      flexDirection: 'column'
   },
   editDiaryItem: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '-12px 0px'
   },
   editDiaryListBox: {
      width: '100vw',
      overflow: 'scroll'
   },
   buttonGroupTextColor: {
      display: 'flex',
      justifyContent: 'center'
   },
   textColorOption: {
      maxWidth: 30,
      padding: 18,
      border: '2px solid #fff'
   },
   buttonGroupBg: {
      border: '2px solid #fff'
   },
   bgOption: {
      width: 100,
      height: 150,
      border: '2px solid #fff'
   }
}))
