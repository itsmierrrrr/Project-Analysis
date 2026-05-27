import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,136,178,0.22),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.88),rgba(0,0,0,1))]" />
      <div className="absolute inset-0 bg-grid-fine bg-[size:48px_48px] opacity-[0.13] [mask-image:linear-gradient(to_bottom,white,transparent_82%)]" />
      <motion.div
        className="absolute left-[-8%] top-[-6%] h-72 w-72 rounded-full bg-[rgba(91,136,178,0.3)] blur-3xl"
        animate={{ x: [0, 24, 0], y: [0, 20, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-10%] top-[8%] h-80 w-80 rounded-full bg-[rgba(251,249,228,0.1)] blur-3xl"
        animate={{ x: [0, -28, 0], y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 1 }}
      />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(91,136,178,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(91,136,178,0.9)_1px,transparent_1px)] [background-size:180px_180px]" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,transparent_50%,rgba(0,0,0,0.35)_100%)]"
        animate={{ opacity: [0.68, 0.86, 0.68] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(91,136,178,0.18),transparent)]" />
    </div>
  )
}