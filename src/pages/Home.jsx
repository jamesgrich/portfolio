import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TypewriterText from '../components/TypewriterText'
import portrait from '../images/Portrait.png'

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="md" sx={{ py: { xs: 10, md: 12 } }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: { xs: 4, md: 6 },
            flexDirection: { xs: 'column', md: 'row' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Portrait */}
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: 160, md: 260 },
              height: { xs: 160, md: 260 },
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid',
              borderColor: 'primary.main',
              boxShadow: '0 0 40px rgba(124,58,237,0.25)',
              mt: { md: 1 },
            }}
          >
            <Box
              component="img"
              src={portrait}
              alt="James Richardson"
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>

          {/* Text */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, fontWeight: 700, lineHeight: 1.3, mb: 2 }}
            >
              Hey, I'm James Richardson 👋
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.3rem', md: '1.8rem' },
                fontWeight: 500,
                color: 'text.secondary',
                mb: 3,
                minHeight: '2.5rem',
              }}
            >
              I am a{' '}
              <Box component="span" sx={{ color: 'primary.light' }}>
                <TypewriterText />
              </Box>
            </Typography>

            <Typography variant="body1" sx={{ color: '#cbd5e1', maxWidth: 520, mb: 2, fontSize: '1rem' }}>
              Based in Norwich, UK. I build web apps, automate things, and occasionally make
              tiny pixel displays show useful information.
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary', maxWidth: 520, mb: 4 }}>
              Currently exploring: Python, cloud infrastructure.
            </Typography>

            <Box sx={{ mb: 3, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Chip
                label="🟢 Ready to work — available immediately, no notice period"
                sx={{
                  backgroundColor: 'rgba(6, 182, 212, 0.15)',
                  border: '1px solid rgba(6, 182, 212, 0.6)',
                  color: '#e2e8f0',
                  fontWeight: 700,
                  fontSize: { xs: '0.72rem', md: '0.82rem' },
                  height: { xs: 28, md: 32 },
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Tooltip title="GitHub">
                <IconButton
                  href="https://github.com/jamesgrich"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    color: 'text.secondary',
                    borderRadius: 2,
                    '&:hover': { color: 'primary.light', borderColor: 'primary.main', backgroundColor: 'rgba(124,58,237,0.08)' },
                  }}
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <IconButton
                  href="https://www.linkedin.com/in/jamesgrich/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    color: 'text.secondary',
                    borderRadius: 2,
                    '&:hover': { color: 'secondary.light', borderColor: 'secondary.main', backgroundColor: 'rgba(6,182,212,0.08)' },
                  }}
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  )
}
