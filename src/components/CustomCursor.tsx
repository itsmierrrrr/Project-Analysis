import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export function CustomCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.2 })
  const springY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.2 })

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer) {
      return undefined
    }

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [x, y])

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(91,136,178,0.5)] bg-[rgba(91,136,178,0.08)] shadow-neon backdrop-blur-sm md:block"
        style={{ left: springX, top: springY }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(251,249,228,0.9)] shadow-[0_0_18px_rgba(91,136,178,0.85)] md:block"
        style={{ left: springX, top: springY }}
      />
    </>
  )
}