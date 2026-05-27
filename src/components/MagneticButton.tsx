import { motion, useMotionValue, useSpring } from 'framer-motion'
import { type ButtonHTMLAttributes, type ReactNode, useRef } from 'react'
import { cn } from '../lib/cn'

type MagneticButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export function MagneticButton({ className, children, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.3 })
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.3 })

  const handleMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const element = ref.current
    if (!element) {
      return
    }

    const bounds = element.getBoundingClientRect()
    const deltaX = event.clientX - (bounds.left + bounds.width / 2)
    const deltaY = event.clientY - (bounds.top + bounds.height / 2)

    x.set(deltaX * 0.18)
    y.set(deltaY * 0.18)
  }

  const resetPosition = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={resetPosition}
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-xl transition will-change-transform hover:border-[rgba(91,136,178,0.45)]',
        className,
      )}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,136,178,0.26),transparent_58%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
    </motion.button>
  )
}