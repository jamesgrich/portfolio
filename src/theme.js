import { createTheme } from '@mui/material/styles'

const MONO = '"JetBrains Mono", monospace'
const SANS = '"Inter", sans-serif'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7c3aed',
      light: '#a78bfa',
      dark: '#5b21b6',
    },
    secondary: {
      main: '#06b6d4',
      light: '#67e8f9',
      dark: '#0891b2',
    },
    background: {
      default: '#0f0f23',
      paper: '#1a1a2e',
    },
    text: {
      primary: '#e2e8f0',
      secondary: '#b0bec5',
    },
    divider: 'rgba(124, 58, 237, 0.2)',
  },
  typography: {
    // Body text uses Inter for readability
    fontFamily: SANS,
    h1: { fontFamily: MONO, fontWeight: 700 },
    h2: { fontFamily: MONO, fontWeight: 700 },
    h3: { fontFamily: MONO, fontWeight: 600 },
    h4: { fontFamily: MONO, fontWeight: 600 },
    h5: { fontFamily: MONO, fontWeight: 500 },
    h6: { fontFamily: MONO, fontWeight: 500 },
    overline: { fontFamily: MONO },
    caption: { fontFamily: SANS },
    body1: { fontFamily: SANS, lineHeight: 1.8 },
    body2: { fontFamily: SANS, lineHeight: 1.75 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: MONO,
          fontWeight: 600,
          letterSpacing: '0.02em',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: MONO,
          fontSize: '0.7rem',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(15, 15, 35, 0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(124, 58, 237, 0.2)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(124, 58, 237, 0.15)',
          transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            borderColor: 'rgba(124, 58, 237, 0.5)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 32px rgba(124, 58, 237, 0.15)',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { fontFamily: SANS },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: { fontFamily: SANS },
      },
    },
  },
})

export default theme
