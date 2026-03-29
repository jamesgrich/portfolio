import { useState, useEffect } from 'react'

const ROLES = ['Developer', 'Support Engineer']
const TYPE_SPEED = 80
const DELETE_SPEED = 50
const PAUSE_AFTER_TYPE = 1800
const PAUSE_AFTER_DELETE = 400

export default function TypewriterText() {
  const [displayed, setDisplayed] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]

    let timeout

    if (!isDeleting && displayed === current) {
      // Fully typed — pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE)
    } else if (isDeleting && displayed === '') {
      // Fully deleted — move to next role
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex((i) => (i + 1) % ROLES.length)
      }, PAUSE_AFTER_DELETE)
    } else if (isDeleting) {
      timeout = setTimeout(
        () => setDisplayed((d) => d.slice(0, -1)),
        DELETE_SPEED
      )
    } else {
      timeout = setTimeout(
        () => setDisplayed((d) => current.slice(0, d.length + 1)),
        TYPE_SPEED
      )
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <span>
      {displayed}
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '1.1em',
          backgroundColor: '#06b6d4',
          marginLeft: '2px',
          verticalAlign: 'text-bottom',
          animation: 'blink 1s step-end infinite',
        }}
      />
    </span>
  )
}
