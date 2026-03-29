export const projects = [
  {
    id: 1,
    title: 'Strava Pixoo Dashboard',
    description:
      'Live Strava running stats displayed on a Divoom Pixoo 64 pixel display. Polls the Strava API every 5 minutes to show distance, pace, elevation, weekly training data, and a kudos animation system — all rendered in a custom 3×5 pixel font on a 64×64 LED display.',
    category: 'pixel',
    tags: ['Pixel Display', 'Node.js', 'Strava API'],
    icon: '🏃',
    github: 'https://github.com/jamesgrich/strava-pixoo', // update once uploaded
  },
  {
    id: 2,
    title: 'Norwich Gigs Pixoo',
    description:
      "Tonight's live music events across Norwich venues, displayed on a Divoom Pixoo 64. Scrapes 5 local venues including UEA, Norwich Arts Centre, and Brickmakers, rotating through event cards with venue, time, price, and genre. Refreshes every 30 minutes.",
    category: 'pixel',
    tags: ['Pixel Display', 'Node.js', 'Web Scraping'],
    icon: '🎵',
    github: 'https://github.com/jamesgrich/norwich-gigs-pixoo', // update once uploaded
  },
  {
    id: 3,
    title: 'Running Health Tracker',
    description:
      'A full-stack personal health and running tracker with Strava integration. Features 8 training plans, drag-and-drop run insights dashboard, fitness trend metrics (CTL/ATL/TSB), race calendar, personal bests, shoe rotation, parkrun tracking, and deep-dive run analytics with pace zones and route maps.',
    category: 'web',
    tags: ['Web App', 'React', 'Node.js', 'SQLite', 'Strava API'],
    icon: '📊',
    github: 'https://github.com/jamesgrich/running-health-tracker', // update once uploaded
  },
  {
    id: 4,
    title: "Weather App — Runner's Edition",
    description:
      'A real-time weather app built for runners. Features a smart running conditions score (0–100) based on temperature, humidity, wind, precipitation and UV index, best run window finder, 7-day forecasts, air quality monitoring, gear recommendations, and dynamic weather-based theming.',
    category: 'web',
    tags: ['Web App', 'React', 'Vite', 'Open-Meteo API'],
    icon: '🌤️',
    github: 'https://github.com/jamesgrich/weather-app-runners', // update once uploaded
  },
]
