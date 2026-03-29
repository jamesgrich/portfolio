import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function ProjectCard({ project }) {
  const { title, description, tags, icon, github } = project

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h2" sx={{ fontSize: '2rem', mb: 1, lineHeight: 1 }}>
          {icon}
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: 'primary.light', fontWeight: 700, mb: 1.5, fontSize: '0.95rem' }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#cbd5e1', mb: 2.5, lineHeight: 1.75, fontSize: { xs: '0.95rem', md: '0.875rem' } }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant="outlined"
              sx={{ borderColor: 'rgba(6, 182, 212, 0.4)', color: '#e2e8f0', fontSize: '0.68rem' }}
            />
          ))}
        </Box>
      </CardContent>

      {github && (
        <CardActions sx={{ px: 3, pb: 2.5, pt: 0 }}>
          <Button
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            startIcon={<GitHubIcon fontSize="small" />}
            sx={{
              color: 'text.secondary',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.75rem',
              '&:hover': { color: 'primary.light' },
            }}
          >
            View on GitHub
          </Button>
        </CardActions>
      )}
    </Card>
  )
}
