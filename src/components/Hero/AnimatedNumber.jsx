import { useEffect, useRef, useState } from 'react'

export default function AnimatedNumber({ target, suffix, visible, colorClass = 'text-ink' }) {
  const [current, setCurrent] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!visible || hasRun.current) return
    hasRun.current = true
    const duration = 1500
    const start = performance.now()
    const ease = (t) => 1 - Math.pow(1 - t, 3)

    function tick(now) {
      const elapsed = now - start
      const t = Math.min(elapsed / duration, 1)
      setCurrent(Math.round(ease(t) * target))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [visible, target])

  return (
    <span className={`text-4xl sm:text-[2.5rem] font-bold font-heading tracking-tight leading-none ${colorClass}`} aria-label={`${target}${suffix}`}>
      {current}{suffix}
    </span>
  )
}
