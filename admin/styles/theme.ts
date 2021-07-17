import { createTheme } from '@material-ui/core/styles'
import { cyan, pink, red } from '@material-ui/core/colors'

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: cyan[700],
    },
    secondary: {
      main: pink[400],
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
