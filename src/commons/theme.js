import { createTheme } from '@mui/material/styles'
import themeList from './ThemeList'

const renderTheme = () => {
   return themeList.map(theme =>
      createTheme({
         palette: {
            primary: {
               gradient: theme.gradient,
               main: theme.primaryColor,
               text: theme.primaryText,
            },
            secondary: {
               light: '#eee',
               dark: '#333',
               main: theme.secondaryColor,
               text: theme.secondaryText,
            },
            success: {
               main: '#00e676',
               text: '#fff',
            },
            danger: {
               gradient: 'linear-gradient(45deg, #ff416c, #ff4b2b)',
               main: '#f44336',
               text: '#fff',
            },
            warning: {
               main: '#ff6f00',
               text: '#fff',
            },
            default: {
               main: '#fff',
               secondary: '#333',
               text: '#333',
            },
         },
         glow: {
            main: '#0ff',
         },
         border: {
            light: '#ddd',
            dark: '#333',
            main: '#fff',
            highlight: '#4f00bc',
         },
         favoriteIcon: {
            main: '#ddd',
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
