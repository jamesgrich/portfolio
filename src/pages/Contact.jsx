import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import SendIcon from '@mui/icons-material/Send'
import Paper from '@mui/material/Paper'

// ─── EmailJS config ───────────────────────────────────────────────────────────
// Create a free account at https://www.emailjs.com/
// Add a Gmail service, create an email template, then fill in the IDs below.
const EMAILJS_SERVICE_ID = 'service_lisvqpp'
const EMAILJS_TEMPLATE_ID = 'template_ddmzcxw'
const EMAILJS_PUBLIC_KEY = 'dWCTx7HcFw-C38VB7'
// ─────────────────────────────────────────────────────────────────────────────

const INITIAL_FORM = { from_name: '', reply_to: '', message: '' }

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm(INITIAL_FORM)
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem', // must be >= 16px to prevent iOS zoom on focus
      '& fieldset': { borderColor: 'rgba(124, 58, 237, 0.25)' },
      '&:hover fieldset': { borderColor: 'rgba(124, 58, 237, 0.5)' },
      '&.Mui-focused fieldset': { borderColor: 'primary.main' },
    },
    '& .MuiInputLabel-root': {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1rem',
    },
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
    <Container maxWidth="sm" sx={{ py: { xs: 10, md: 12 } }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Get in touch 📬
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Got a project in mind, want to work together, or just want to say hi? Fill in the form below.
        </Typography>
      </Box>

      <Paper
        variant="outlined"
        sx={{
          p: { xs: 3, md: 4 },
          backgroundColor: 'background.paper',
          borderColor: 'divider',
        }}
      >
        <Box
          component="form"
          ref={formRef}
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
          noValidate
        >
          {/* Hidden field sets the email subject */}
          <input type="hidden" name="subject" value="Web App Enquiry" />

          <TextField
            label="Your name"
            name="from_name"
            value={form.from_name}
            onChange={handleChange}
            required
            fullWidth
            autoComplete="name"
            sx={inputSx}
          />

          <TextField
            label="Your email"
            name="reply_to"
            type="email"
            value={form.reply_to}
            onChange={handleChange}
            required
            fullWidth
            autoComplete="email"
            sx={inputSx}
          />

          <TextField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            fullWidth
            multiline
            rows={5}
            sx={inputSx}
          />

          {status === 'success' && (
            <Alert severity="success" icon={false} sx={{ fontSize: '0.82rem' }}>
              ✅ Message sent — I'll get back to you soon!
            </Alert>
          )}
          {status === 'error' && (
            <Alert severity="error" sx={{ fontSize: '0.82rem' }}>
              Something went wrong. Please email me directly at{' '}
              <a href="mailto:jamesrichardson15@gmail.com" style={{ color: 'inherit' }}>
                jamesrichardson15@gmail.com
              </a>
            </Alert>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            endIcon={loading ? <CircularProgress size={16} color="inherit" /> : <SendIcon />}
            disabled={loading || !form.from_name || !form.reply_to || !form.message}
            sx={{ py: 1.3, fontSize: '0.9rem', alignSelf: { xs: 'stretch', sm: 'flex-end' }, px: 3 }}
          >
            {loading ? 'Sending...' : 'Send'}
          </Button>
        </Box>
      </Paper>
    </Container>
    </Box>
  )
}
