import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Tooltip from '@mui/material/Tooltip'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 3,
        px: { xs: 2, md: 4 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 2,
        backgroundColor: 'background.default',
      }}
    >
      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>
        James Richardson
      </Typography>

      <Box sx={{ display: 'flex', gap: 0.5 }}>
        <Tooltip title="GitHub">
          <IconButton
            href="https://github.com/jamesgrich"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ color: 'text.secondary', '&:hover': { color: 'primary.light' } }}
            aria-label="GitHub profile"
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <IconButton
            href="https://www.linkedin.com/in/jamesgrich/"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ color: 'text.secondary', '&:hover': { color: 'secondary.light' } }}
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  )
}
