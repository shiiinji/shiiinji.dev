import { createTheme } from '@material-ui/core/styles'
import { cyan, deepPurple, red } from '@material-ui/core/colors'

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[400],
    },
    secondary: {
      main: cyan[700],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f8f9fa',
    },
  },
})
