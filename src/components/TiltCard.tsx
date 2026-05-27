import { motion, useMotionValue, useSpring } from 'framer-motion'
import { type MouseEvent, type ReactNode, useRef } from 'react'
import { cn } from '../lib/cn'

type TiltCardProps = {
  children: ReactNode
  className?: string
}

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 180, damping: 16, mass: 0.3 })
  const springY = useSpring(rotateY, { stiffness: 180, damping: 16, mass: 0.3 })

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const element = ref.current
    if (!element) {
      return
    }

    const rect = element.getBoundingClientRect()
    const xRatio = (event.clientX - rect.left) / rect.width - 0.5
    const yRatio = (event.clientY - rect.top) / rect.height - 0.5

    rotateX.set(yRatio * -14)
    rotateY.set(xRatio * 14)
  }

  const resetTilt = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: springX, rotateY: springY }}
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      className={cn('transform-gpu perspective-[1200px]', className)}
    >
      {children}
    </motion.div>
  )
}