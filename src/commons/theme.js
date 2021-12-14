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
               text: '#333',
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
