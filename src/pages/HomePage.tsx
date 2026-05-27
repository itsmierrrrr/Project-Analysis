import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MagneticButton } from '../components/MagneticButton'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export function HomePage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative">
      <section className="relative mx-auto flex min-h-[calc(100svh-82px)] w-full max-w-7xl items-center px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
            <motion.div variants={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/60 backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5 text-[rgba(91,136,178,0.9)]" />
              Futuristic project archive
            </motion.div>
            <motion.h1 variants={item} className="mt-6 font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Project Analysis Archive
            </motion.h1>
            <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
              Breaking down the architecture, design decisions, challenges, and development process behind my work.
            </motion.p>
            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/#projects">
                <MagneticButton className="border-[rgba(91,136,178,0.45)] bg-[rgba(91,136,178,0.14)] px-6 py-3 text-sm uppercase tracking-[0.24em] text-white">
                  Explore Projects <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </Link>
              <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/65 backdrop-blur-xl">
                Premium case studies with motion, clarity, and depth.
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(91,136,178,0.32),transparent_46%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.05] p-5 shadow-glow backdrop-blur-2xl">
              <div className="rounded-[26px] border border-white/8 bg-[linear-gradient(180deg,rgba(18,44,79,0.95),rgba(0,0,0,0.82))] p-5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/45">
                  <span>Archive signal</span>
                  <span>Live preview</span>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    ['Architecture', 'Component-first, motion-rich, responsive'],
                    ['Design', 'Glass layers with disciplined spacing'],
                    ['Performance', 'Fast rendering and smooth transitions'],
                    ['Access', 'Keyboard friendly, readable, adaptive'],
                  ].map(([title, value]) => (
                    <div key={title} className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/42">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-white/76">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-3xl border border-[rgba(91,136,178,0.22)] bg-[rgba(91,136,178,0.08)] p-4">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.26em] text-white/54">
                    <span>Signal flow</span>
                    <span>Atlas / Northstar / Lumen</span>
                  </div>
                  <div className="mt-4 h-40 rounded-2xl border border-white/8 bg-[linear-gradient(135deg,rgba(91,136,178,0.18),rgba(251,249,228,0.06),rgba(0,0,0,0.1))] p-4">
                    <div className="grid h-full grid-cols-3 gap-3">
                      {['Research', 'Design', 'Ship'].map((step, index) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="flex items-end rounded-2xl border border-white/8 bg-black/20 p-3"
                        >
                          <div>
                            <p className="text-xs uppercase tracking-[0.24em] text-white/45">Step 0{index + 1}</p>
                            <p className="mt-1 font-medium text-white">{step}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.32em] text-white/42">Projects</p>
          <h2 className="mt-2 font-display text-3xl tracking-tight text-white sm:text-4xl">Featured case studies</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="analysis" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-glow backdrop-blur-2xl md:grid-cols-[1.1fr_0.9fr] md:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/42">Archive philosophy</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-white sm:text-4xl">
              Every analysis is structured to show the thinking, not just the outcome.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Architecture', 'Clear system breakdowns and data flow views.'],
              ['Design', 'Mood, hierarchy, spacing, and visual rationale.'],
              ['Challenges', 'Specific blockers and the fixes that resolved them.'],
              ['Results', 'Measured outcomes and what to optimize next.'],
            ].map(([title, value]) => (
              <div key={title} className="rounded-2xl border border-white/8 bg-black/18 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">{title}</p>
                <p className="mt-2 text-sm leading-6 text-white/72">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}