import { useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'

export default function PageTransition({ children }) {
  const { pathname } = useLocation()

  return (
    <Box
      key={pathname}
      sx={{
        animation: 'fadeIn 0.25s ease-in-out',
        '@keyframes fadeIn': {
          from: { opacity: 0, transform: 'translateY(6px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      {children}
    </Box>
  )
}
