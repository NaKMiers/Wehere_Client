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
      padding: '8px 16px 16px 16px'
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
      marginBottom: 8
   },
   inputContentDiary: {
      width: '100%',
      resize: 'none',
      // height: 'calc(66vh - 16px)',
      height: '50vh',
      border: '3px #333 solid',
      outline: 'none',
      padding: 16,
      fontSize: 16
   },
   editDiaryWrap: {},
   expandMoreEditBtn: {
      margin: 'auto'
   },
   editDiaryItem: {
      display: 'flex',
      justifyContent: 'center'
   },
   editDiaryListBox: {
      width: 'auto',
      marginLeft: 8
   },
   buttonGroupTextColor: {
      display: 'flex'
   },
   textColorBtn: {
      maxWidth: 30,
      padding: 18,
      border: '2px solid #fff'
   }
}))