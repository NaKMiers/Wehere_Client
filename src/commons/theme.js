import { createTheme } from '@mui/material/styles'

const theme = createTheme({
   palette: {
      primary: {
         gradient: 'linear-gradient(45deg, #4f00bc, #21abe2)',
         main: '#4f00bc',
         text: '#fff'
      },
      secondary: {
         light: '#eee',
         dark: '#333',
         main: '#21abe2',
         text: '#333'
      },
      success: {
         main: '#00e676'
      },
      danger: {
         gradient: 'linear-gradient(45deg, #ff416c, #ff4b2b)',
         main: '#f44336'
      },
      warning: {
         main: '#ff6f00'
      }
   },
   border: {
      light: '#ddd',
      dark: '#333',
      main: '#fff',
      highlight: '#4f00bc'
   }
})

export default theme
