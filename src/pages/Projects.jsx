import { useState, useRef } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Grid from '@mui/material/Grid'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const FILTERS = [
  { value: 'all', label: 'All Projects' },
  { value: 'pixel', label: 'Pixel Display' },
  { value: 'web', label: 'Web App' },
]

const toggleSx = {
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: '0.78rem',
  fontWeight: 600,
  px: 2.5,
  py: 1,
  textTransform: 'none',
  borderColor: 'divider',
  color: 'text.secondary',
  '&.Mui-selected': {
    backgroundColor: 'rgba(124, 58, 237, 0.15)',
    borderColor: 'primary.main',
    color: 'primary.light',
  },
  '&:hover': { backgroundColor: 'rgba(124, 58, 237, 0.08)' },
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const containerRef = useRef(null)

  const handleFilterChange = (_, val) => {
    if (!val) return
    const el = containerRef.current
    if (!el) { setFilter(val); return }
    el.style.transition = 'opacity 0.15s ease'
    el.style.opacity = '0'
    setTimeout(() => {
      setFilter(val)
      el.style.opacity = '1'
    }, 150)
  }

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Container maxWidth="lg" sx={{ py: { xs: 10, md: 12 } }}>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Projects 🛠️
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 560 }}>
            Things I've built — from pixel displays to full-stack web apps.
          </Typography>
        </Box>

        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={handleFilterChange}
          sx={{ mb: 5 }}
          aria-label="filter projects"
        >
          {FILTERS.map(({ value, label }) => (
            <ToggleButton key={value} value={value} sx={toggleSx}>
              {label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <Box ref={containerRef}>
          <Grid container spacing={3}>
            {filtered.map((project) => (
              <Grid key={project.id} size={{ xs: 12, sm: 6, lg: 6 }}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
