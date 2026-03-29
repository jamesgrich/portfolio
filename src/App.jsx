import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import Box from '@mui/material/Box'
import theme from './theme'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import CV from './pages/CV'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function Layout() {
  const { pathname } = useLocation()
  const showFooter = pathname !== '/'

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </Box>
      {showFooter && <Footer />}
    </Box>
  )
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  )
}
