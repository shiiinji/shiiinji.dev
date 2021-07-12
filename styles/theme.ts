import { createTheme } from '@material-ui/core/styles'
import { cyan, deepPurple, red } from '@material-ui/core/colors'

export const defaultTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: deepPurple[400],
    },
    secondary: {
      main: cyan[700],
    },
    error: {
      main: red.A400,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})
