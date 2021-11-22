import { createTheme } from '@mui/material/styles'
import themeList from './ThemeList'

export const themeDefault = createTheme({
   palette: {
      primary: {
         gradient: 'linear-gradient(45deg, #db03e4, #35afff)',
         main: '#db03e4',
         text: '#fff',
      },
      secondary: {
         light: '#eee',
         dark: '#333',
         main: '#35afff',
         text: '#333',
      },
      success: {
         main: '#00e676',
      },
      danger: {
         gradient: 'linear-gradient(45deg, #ff416c, #ff4b2b)',
         main: '#f44336',
      },
      warning: {
         main: '#ff6f00',
      },
   },
   border: {
      light: '#ddd',
      dark: '#333',
      main: '#fff',
      highlight: '#4f00bc',
   },
   favoriteIcon: {
      main: '#fff',
      liked: '#f44336',
   },
   message: {
      main: '#ffe3b3',
      text: '#333',
      lightText: '#ccc',
   },
})

const renderTheme = () => {
   return themeList.map(theme =>
      createTheme({
         palette: {
            primary: {
               gradient: theme.gradient,
               main: '#db03e4',
               text: '#fff',
            },
            secondary: {
               light: '#eee',
               dark: '#333',
               main: theme.secondaryColor,
               text: theme.secondaryText,
            },
            success: {
               main: '#00e676',
            },
            danger: {
               gradient: 'linear-gradient(45deg, #ff416c, #ff4b2b)',
               main: '#f44336',
            },
            warning: {
               main: '#ff6f00',
            },
         },
         border: {
            light: '#ddd',
            dark: '#333',
            main: '#fff',
            highlight: '#4f00bc',
         },
         favoriteIcon: {
            main: '#fff',
            liked: '#f44336',
         },
         message: {
            main: '#ffe3b3',
            text: '#333',
            lightText: '#ccc',
         },
      })
   )
}

export default renderTheme()
