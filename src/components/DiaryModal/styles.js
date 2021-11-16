import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
   addDiaryBtnBox: {
      position: 'fixed',
      bottom: 28,
      right: 32,
   },
   addDiaryBtn: {
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
   },
   diaryModal: {
      position: 'relative',
      transition: 'display 0.2s ease-in-out',
   },
   paper: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '90vw',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '8px 16px 16px 16px',
      borderRadius: 8,
      backgroundOrigin: 'content-box',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
   },
   modalTitle: {
      fontSize: 24,
      textAlign: 'center',
   },
   modalSubTitle: {
      fontSize: 10,
      textAlign: 'center',
      marginBottom: 8,
   },
   submitDiaryBtn: {
      marginTop: 4,
      background: theme.palette.primary.gradient,
      color: theme.palette.primary.text,
   },
   inputTitleDiary: {
      width: '100%',
      padding: '8px 0px',
      border: 'none',
      borderBottom: `3px solid ${theme.border.dark}`,
      outline: 'none',
      fontSize: 20,
      marginBottom: 8,
      background: 'transparent',
   },
   inputContentDiary: {
      height: '60vh',
      width: '100%',
      resize: 'none',
      border: `3px solid ${theme.border.dark}`,
      outline: 'none',
      padding: 16,
      fontSize: 16,
      transition: 'height 0.2s ease-in-out',
      background: 'transparent',
   },
   listEditOption: {
      display: 'flex',
      flexDirection: 'column',
   },
   editDiaryItem: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      margin: '-12px 0px',
   },
   editDiaryListBox: {
      width: '85vw',
      overflow: 'scroll',
   },
   buttonGroupTextColor: {
      display: 'flex',
      justifyContent: 'center',
   },
   textColorOption: {
      maxWidth: 30,
      padding: 18,
      border: `2px solid ${theme.border.main}`,
   },
   buttonGroupBg: {
      border: `2px solid ${theme.border.main}`,
   },
   bgOption: {
      width: 100,
      height: 150,
      border: `2px solid ${theme.border.main}`,
   },
}))
