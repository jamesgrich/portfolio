import { useState, useRef } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Fab from '@mui/material/Fab'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import PrintIcon from '@mui/icons-material/Print'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

// ─── Update this data object whenever your CV changes ────────────────────────
const cv = {
  name: 'James Richardson',
  tagline: 'Technical Support Engineer & Full Stack Developer',
  openToWork: true,
  availableFrom: '7th April 2026',
  summary: [
    "Engineering-minded Technical Support Engineer specialising in SaaS platforms, APIs, and data-driven systems. Experienced in debugging complex production issues, performing root cause analysis, and working closely with engineering teams to improve reliability and resolve defects.",
    "Operates at the intersection of support, development, and product — with hands-on experience in SQL, automation, and system-level troubleshooting. Outside of work, builds full-stack applications and IoT projects to stay technically sharp.",
  ],

  skills: {
    '💻 Languages': ['JavaScript', 'SQL', 'Java', 'HTML', 'CSS', 'Flutter'],
    '⚛️ Frameworks & Libraries': ['React', 'Vue.js', 'Angular', 'Node.js', 'Express', 'Selenium', 'Espresso'],
    '🗄️ Databases & Storage': ['PostgreSQL', 'MySQL', 'SQLite'],
    '🔧 Platforms & Tooling': ['GitLab', 'Jenkins', 'OpenSearch', 'Prometheus', 'AlertManager'],
  },

  // type: 'support' | 'dev' | 'both'
  experience: [
    {
      emoji: '🍷',
      company: 'Naked Wines',
      role: 'Level 2/3 Technical Support Engineer',
      period: 'May 2025 – Present',
      type: 'both',
      bullets: [
        'Own complex technical incidents end-to-end — from initial triage through root cause analysis to post-incident review — across a high-traffic global ecommerce platform',
        'Partner with engineering and product teams to identify systemic issues, reducing repeat incident rates by improving monitoring coverage in OpenSearch and Prometheus',
        'Serve as a technical escalation point for L1 support, significantly reducing mean time to resolution for critical customer-facing issues',
        'Drive tooling improvements and internal documentation that have tangibly reduced onboarding time for new support engineers',
      ],
    },
    {
      emoji: '🐯',
      company: 'Tiger Eye Consulting',
      role: 'Technical Analyst',
      period: 'Aug 2024 – May 2025',
      type: 'support',
      bullets: [
        'Delivered technical analysis and solution design across enterprise iManage document management deployments',
        'Acted as the primary technical liaison between stakeholders and delivery teams, translating complex requirements into clear, actionable specifications',
        "Gained iManage Help Desk Analyst certification and quickly became the team's subject matter expert on the platform",
      ],
    },
    {
      emoji: '📞',
      company: 'VoiceHost',
      role: 'Full Stack Software Developer',
      period: 'Apr 2023 – Jul 2024',
      type: 'dev',
      bullets: [
        'Built and shipped customer-facing features across a VoIP platform using JavaScript (Vue.js, Angular) on the frontend and Java/SQL on the backend',
        'Took ownership of full feature cycles — from scoping and design through to deployment and post-release monitoring',
        'Introduced testing practices that caught regressions earlier in the development pipeline, improving release confidence',
      ],
    },
    {
      emoji: '🍷',
      company: 'Naked Wines',
      role: 'Technical Support Engineer',
      period: 'May 2021 – Apr 2023',
      type: 'support',
      bullets: [
        'Provided L1/L2 technical support for a subscription platform serving hundreds of thousands of customers globally',
        'Wrote complex SQL queries to investigate data anomalies, fulfil ad-hoc reporting requests, and speed up incident investigation',
        'Built internal tooling and automations that reduced manual effort across the support team, earning recognition for process improvements',
      ],
    },
    {
      emoji: '📰',
      company: 'Archant',
      role: 'Project Support Analyst',
      period: 'Dec 2018 – May 2021',
      type: 'support',
      bullets: [
        'Significantly increased team test efficiency by designing and building a Selenium-based automation framework for regression testing across a suite of online news sites',
        'Elicited requirements for new features by collaborating closely with Development and Support teams, ensuring thorough understanding of business needs before delivery',
        'Bridged the gap between technical and non-technical stakeholders, improving delivery speed and reducing rework on key projects',
      ],
    },
    {
      emoji: '🚛',
      company: 'Proteo',
      role: 'Analyst Tester',
      period: 'May 2018 – Nov 2018',
      type: 'qa',
      bullets: [
        'Led end-to-end testing of a new GPS tracking solution for haulage drivers, ensuring reliability across diverse real-world conditions',
        'Automated key workflows of the online transport management system, improving regression coverage and reducing manual testing overhead',
      ],
    },
    {
      emoji: '📱',
      company: 'SupaPass',
      role: 'Software Test Engineer',
      period: 'Jan 2016 – May 2018',
      type: 'qa',
      bullets: [
        "Collaborated closely with the Senior Android Developer to automate end-to-end user journeys in the Android app using Google's Espresso framework",
        'Maintained comprehensive test plans providing significant coverage across web, mobile, and tablet platforms, enabling confident and frequent releases',
      ],
    },
  ],

  education: [
    {
      emoji: '🎓',
      institution: 'Southampton Solent University',
      qualification: 'BA (Hons) Music Industry Management',
      grade: '2:1',
      period: '2008 – 2011',
    },
  ],

  certifications: [
    { emoji: '💬', name: 'Effective Communication Skills', year: '2026' },
    { emoji: '📂', name: 'iManage Help Desk Analyst', year: '2024' },
    { emoji: '⚙️', name: 'ITIL V4 Foundation Certificate', year: '2022' },
    { emoji: '🧪', name: 'ISTQB Advanced Level — Technical Test Analyst', year: '2021' },
    { emoji: '🔬', name: 'BCS Intermediate Certificate in Software Testing', year: '2020' },
  ],
}
// ─────────────────────────────────────────────────────────────────────────────

const TYPE_FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'support', label: 'Support' },
  { value: 'dev', label: 'Dev' },
]


function Section({ title, children }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography
        variant="overline"
        sx={{ color: 'primary.light', letterSpacing: '0.15em', fontSize: '0.72rem', fontWeight: 700 }}
      >
        {title}
      </Typography>
      <Divider sx={{ mt: 0.5, mb: 2.5, borderColor: 'divider' }} />
      {children}
    </Box>
  )
}

function RoleCard({ item }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2.5,
        mb: 2,
        backgroundColor: 'background.paper',
        borderColor: 'divider',
        '&:hover': { borderColor: 'rgba(124, 58, 237, 0.4)' },
        transition: 'border-color 0.2s ease',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1, mb: 0.5 }}>
        <Typography sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.95rem' }}>
          {item.emoji} {item.company}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: '"JetBrains Mono", monospace' }}>
          {item.period}
        </Typography>
      </Box>
      <Typography sx={{ color: 'secondary.light', fontSize: '0.85rem', mb: 1.5 }}>
        {item.role}
      </Typography>
      <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
        {item.bullets.map((b, i) => (
          <Typography
            key={i}
            component="li"
            variant="body2"
            sx={{ color: '#cbd5e1', mb: 0.75, lineHeight: 1.75, fontSize: { xs: '0.95rem', md: '0.875rem' } }}
          >
            {b}
          </Typography>
        ))}
      </Box>
    </Paper>
  )
}

export default function CV() {
  const [expFilter, setExpFilter] = useState('all')
  const containerRef = useRef(null)

  const handleFilterChange = (_, val) => {
    if (!val) return
    const el = containerRef.current
    if (!el) { setExpFilter(val); return }
    el.style.transition = 'opacity 0.15s ease'
    el.style.opacity = '0'
    setTimeout(() => {
      setExpFilter(val)
      el.style.opacity = '1'
    }, 150)
  }

  const filteredExp = expFilter === 'all'
    ? cv.experience
    : cv.experience.filter((e) => e.type === expFilter || e.type === 'both')

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Container maxWidth="md" sx={{ py: { xs: 10, md: 12 } }}>

        {/* Header */}
        <Box sx={{ mb: 5 }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, mb: 1 }}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
                {cv.name}
              </Typography>
              {cv.openToWork && (
                <Chip
                  label={`🟢 Open to work — from ${cv.availableFrom}`}
                  sx={{
                    backgroundColor: 'rgba(6, 182, 212, 0.15)',
                    border: '1px solid rgba(6, 182, 212, 0.6)',
                    color: '#e2e8f0',
                    fontWeight: 700,
                    fontSize: { xs: '0.75rem', md: '0.85rem' },
                    height: { xs: 28, md: 32 },
                  }}
                />
              )}
            </Box>
            <Tooltip title="Print / Save as PDF">
              <Button
                onClick={() => window.print()}
                variant="outlined"
                size="small"
                startIcon={<PrintIcon fontSize="small" />}
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  borderColor: 'divider',
                  color: 'text.secondary',
                  fontSize: '0.78rem',
                  '&:hover': { borderColor: 'primary.main', color: 'primary.light' },
                }}
              >
                Print / PDF
              </Button>
            </Tooltip>
          </Box>
          <Typography sx={{ color: 'primary.light', fontWeight: 500, mb: 2, fontSize: '1rem', mt: { xs: 1.5, md: 0 } }}>
            {cv.tagline}
          </Typography>
          {cv.summary.map((para, i) => (
            <Typography key={i} sx={{ color: '#cbd5e1', maxWidth: 680, lineHeight: 1.85, fontSize: { xs: '0.97rem', md: '0.92rem' }, mb: i < cv.summary.length - 1 ? 1.5 : 0 }}>
              {para}
            </Typography>
          ))}
        </Box>

        {/* Skills */}
        <Section title="// Skills">
          {Object.entries(cv.skills).map(([category, items]) => (
            <Box key={category} sx={{ mb: 2.5 }}>
              <Typography sx={{ color: '#e2e8f0', display: 'block', mb: 1.5, fontSize: '0.9rem', fontWeight: 700 }}>
                {category}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {items.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    variant="outlined"
                    sx={{ borderColor: 'rgba(6, 182, 212, 0.5)', color: '#e2e8f0', fontSize: '0.78rem', height: 28 }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Section>

        {/* Experience */}
        <Section title="// Experience">
          <ToggleButtonGroup
            value={expFilter}
            exclusive
            onChange={handleFilterChange}
            sx={{ mb: 3, flexWrap: 'wrap', gap: 0.5, width: '100%' }}
            aria-label="filter experience"
          >
            {TYPE_FILTERS.map(({ value, label }) => (
              <ToggleButton
                key={value}
                value={value}
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  px: 2,
                  py: 0.75,
                  textTransform: 'none',
                  borderColor: 'divider',
                  color: 'text.secondary',
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(124, 58, 237, 0.15)',
                    borderColor: 'primary.main',
                    color: 'primary.light',
                  },
                  '&:hover': { backgroundColor: 'rgba(124, 58, 237, 0.08)' },
                }}
              >
                {label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>

          <Box ref={containerRef}>
            {filteredExp.map((job, i) => (
              <RoleCard key={i} item={job} />
            ))}
          </Box>
        </Section>

        {/* Education */}
        <Section title="// Education">
          {cv.education.map((edu, i) => (
            <Paper
              key={i}
              variant="outlined"
              sx={{ p: 2.5, mb: 2, backgroundColor: 'background.paper', borderColor: 'divider' }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                <Typography sx={{ fontWeight: 700, color: 'text.primary', fontSize: '0.95rem' }}>
                  {edu.emoji} {edu.institution}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: '"JetBrains Mono", monospace' }}>
                  {edu.period}
                </Typography>
              </Box>
              <Typography sx={{ color: 'secondary.light', fontSize: '0.85rem', mt: 0.5 }}>
                {edu.qualification} — <strong>{edu.grade}</strong>
              </Typography>
            </Paper>
          ))}
        </Section>

        {/* Certifications */}
        <Section title="// Certifications">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {cv.certifications.map((cert, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 1.5,
                  borderRadius: 1,
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:hover': { borderColor: 'rgba(124, 58, 237, 0.4)' },
                  transition: 'border-color 0.2s ease',
                }}
              >
                <Typography variant="body2" sx={{ color: 'text.primary' }}>
                  {cert.emoji} {cert.name}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {cert.year}
                </Typography>
              </Box>
            ))}
          </Box>
        </Section>

      </Container>

      {/* Back to top */}
      <Tooltip title="Back to top">
        <Fab
          size="small"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="back to top"
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            backgroundColor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            color: 'text.secondary',
            boxShadow: 'none',
            '&:hover': { backgroundColor: 'rgba(124,58,237,0.12)', color: 'primary.light', borderColor: 'primary.main' },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Tooltip>
    </Box>
  )
}
