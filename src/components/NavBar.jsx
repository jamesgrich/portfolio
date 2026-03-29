import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'CV', path: '/cv' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export default function NavBar() {
  const location = useLocation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          sx={{
            textDecoration: 'none',
            color: 'primary.light',
            fontWeight: 700,
            letterSpacing: '0.05em',
            fontSize: { xs: '0.9rem', md: '1rem' },
          }}
        >
          {'<JR />'}
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              onClick={() => setDrawerOpen(true)}
              aria-label="open menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              PaperProps={{
                sx: {
                  backgroundColor: 'background.paper',
                  width: 220,
                  borderLeft: '1px solid',
                  borderColor: 'divider',
                },
              }}
            >
              <List sx={{ pt: 4 }}>
                {navLinks.map(({ label, path }) => (
                  <ListItem key={path} disablePadding>
                    <ListItemButton
                      component={Link}
                      to={path}
                      selected={location.pathname === path}
                      onClick={() => setDrawerOpen(false)}
                      sx={{
                        '&.Mui-selected': {
                          color: 'primary.light',
                          backgroundColor: 'rgba(124, 58, 237, 0.1)',
                        },
                      }}
                    >
                      <ListItemText
                        primary={label}
                        primaryTypographyProps={{ fontFamily: '"JetBrains Mono", monospace' }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navLinks.map(({ label, path }) => (
              <Button
                key={path}
                component={Link}
                to={path}
                sx={{
                  color: location.pathname === path ? 'primary.light' : 'text.secondary',
                  borderBottom: location.pathname === path ? '2px solid' : '2px solid transparent',
                  borderColor: location.pathname === path ? 'primary.light' : 'transparent',
                  borderRadius: 0,
                  pb: 0.5,
                  '&:hover': { color: 'primary.light', backgroundColor: 'transparent' },
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}
