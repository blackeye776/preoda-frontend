import { useEffect, useState } from 'react'

function formatDuration(diff) {
  if (diff <= 0) {
    return 'Expired'
  }

  const seconds = Math.floor(diff / 1000)
  const days = Math.floor(seconds / 86400)
  const hours = Math.floor((seconds % 86400) / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)

  return `${days}d ${hours}h ${minutes}m`
}

export default function CountdownTimer({ endAt }) {
  const [timeLeft, setTimeLeft] = useState(() =>
    formatDuration(new Date(endAt).getTime() - Date.now()),
  )

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(endAt).getTime() - Date.now()
      setTimeLeft(formatDuration(diff))
    }, 1000)

    return () => clearInterval(interval)
  }, [endAt])

  return (
    <p className="text-xs font-semibold text-orange-500" aria-label="campaign countdown">
      ⏳ {timeLeft}
    </p>
  )
}
