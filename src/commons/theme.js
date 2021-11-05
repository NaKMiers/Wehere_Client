import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
   palette: {
      primary: {
         main: '#333'
      },
      secondary: {
         main: '#d3d3d3'
      },
      highlight: {
         main: '#ff5757'
      },
      success: {
         main: '#00CA25'
      }
   }
})

export default theme
