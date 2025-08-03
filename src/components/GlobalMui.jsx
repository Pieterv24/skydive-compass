import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeSwitcher from './ThemeSwitcher';

const theme = createTheme({
  // cssVariables: true,
  colorSchemes: {
    dark: true,
  },
  palette: {
    primary: {
      main: "#565992"
    },
    secondary: {
      main: "##928e55"
    },
    error: {
      main: "#BA1A1A"
    }
  }
});

export default function GlobalMui({children}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeSwitcher client:load />
      {children}
    </ThemeProvider>
  )
}
