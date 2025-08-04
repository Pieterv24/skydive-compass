import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  // cssVariables: true,
  colorSchemes: {
    dark: true,
  },
  palette: {
    primary: {
      main: '#565992',
    },
    secondary: {
      main: '##928e55',
    },
    error: {
      main: '#BA1A1A',
    },
  },
});

interface Props {
  children: React.ReactNode;
}

export default function GlobalMui({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
