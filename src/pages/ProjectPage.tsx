import { motion, useScroll } from 'framer-motion'
import { ArrowUpRight, ChevronRight, Code2, Globe, LayoutTemplate, LineChart, Sparkles } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MagneticButton } from '../components/MagneticButton'
import { projects } from '../data/projects'
import type { Project, ProjectSectionId } from '../data/projects'

const sections: Array<{ id: ProjectSectionId; label: string }> = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'design-process', label: 'Design Process' },
  { id: 'development', label: 'Development' },
  { id: 'challenges', label: 'Challenges' },
  { id: 'results', label: 'Results' },
  { id: 'learnings', label: 'Learnings' },
]

function scrollToSection(id: ProjectSectionId) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function ChallengeItem({ title, problem, solution }: Project['challenges'][number]) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <div>
          <p className="font-medium text-white">{title}</p>
          <p className="mt-2 text-sm leading-6 text-white/60">{problem}</p>
        </div>
        <ChevronRight className={`mt-1 h-4 w-4 shrink-0 text-white/45 transition ${open ? 'rotate-90' : ''}`} />
      </button>
      <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} className="overflow-hidden">
        <p className="pt-4 text-sm leading-6 text-white/74">{solution}</p>
      </motion.div>
    </div>
  )
}

export function ProjectPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = useMemo(() => projects.find((entry) => entry.slug === slug) ?? projects[0], [slug])
  const { scrollYProgress } = useScroll()
  const [activeSection, setActiveSection] = useState<ProjectSectionId>('overview')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)
        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id as ProjectSectionId)
        }
      },
      { threshold: 0.32 },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  if (!project) {
    return null
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative">
      <motion.div style={{ scaleX: scrollYProgress }} className="fixed left-0 top-[82px] z-30 h-[2px] w-full origin-left bg-[rgba(91,136,178,0.86)]" />

      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="lg:sticky lg:top-24 lg:h-[calc(100svh-120px)]">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-glow backdrop-blur-2xl">
            <div className="rounded-[22px] border border-white/8 p-4" style={{ background: project.banner }}>
              <p className="text-xs uppercase tracking-[0.28em] text-white/58">Case study</p>
              <h1 className="mt-2 font-display text-2xl font-semibold text-white">{project.title}</h1>
              <p className="mt-3 text-sm leading-6 text-white/72">{project.category}</p>
            </div>

            <div className="mt-5 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToSection(section.id)}
                  className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm transition ${activeSection === section.id ? 'bg-[rgba(91,136,178,0.16)] text-white shadow-neon' : 'text-white/68 hover:bg-white/8 hover:text-white'}`}
                >
                  <span>{section.label}</span>
                  <ChevronRight className={`h-4 w-4 transition ${activeSection === section.id ? 'translate-x-0 opacity-100' : 'opacity-40'}`} />
                </button>
              ))}
            </div>

            <div className="mt-5 grid gap-3">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left text-sm text-white/78 transition hover:bg-white/8"
              >
                Back to archive
              </button>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/65">
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/72">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className="space-y-6 pb-20">
          <section id="overview" className="scroll-mt-28 rounded-[32px] border border-white/10 bg-white/[0.04] p-5 shadow-glow backdrop-blur-2xl sm:p-7">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/55">
                  <Sparkles className="h-3.5 w-3.5 text-[rgba(91,136,178,0.9)]" />
                  Overview
                </div>
                <h2 className="mt-5 max-w-3xl font-display text-4xl tracking-tight text-white sm:text-5xl">{project.overview.headline}</h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">{project.overview.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.overview.pills.map((pill) => (
                    <span key={pill} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72">
                      {pill}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <MagneticButton className="bg-[rgba(91,136,178,0.16)] px-5 py-3 text-sm uppercase tracking-[0.22em] text-white">
                    <Code2 className="h-4 w-4" /> GitHub
                  </MagneticButton>
                  <MagneticButton className="bg-white/[0.06] px-5 py-3 text-sm uppercase tracking-[0.22em] text-white/90">
                    <Globe className="h-4 w-4" /> Live Demo
                  </MagneticButton>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 lg:items-start">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/42">{stat.label}</p>
                    <p className="mt-3 font-display text-3xl text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="problem" className="scroll-mt-28 rounded-[32px] border border-white/10 bg-white/[0.04] p-5 shadow-glow backdrop-blur-2xl sm:p-7">
            <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/42">Problem</p>
                <h2 className="mt-3 font-display text-3xl tracking-tight text-white sm:text-4xl">{project.problem.headline}</h2>
                <p className="mt-4 text-lg leading-8 text-white/68">{project.problem.body}</p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(91,136,178,0.16),rgba(0,0,0,0.2),rgba(251,249,228,0.08))] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-white/42">Visual context</p>
                <p className="mt-3 max-w-xl text-2xl leading-tight text-white/86">{project.problem.visual}</p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {['Too many choices', 'Weak prioritization', 'Long scanning time', 'Hidden system status'].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-black/24 p-4 text-sm text-white/72">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="design-process" className="scroll-mt-28 rounded-[32px] border border-white/10 bg-white/[0.04] p-5 shadow-glow backdrop-blur-2xl sm:p-7">
            <p className="text-xs uppercase tracking-[0.28em] text-white/42">Design process</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-white sm:text-4xl">How the visual system took shape</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">Wireframes</p>
                <div className="mt-4 space-y-3">
                  {project.designProcess.wireframes.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-white/76">{item}</div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">UI inspiration</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.designProcess.inspirations.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.24em] text-white/42">Iterations</p>
                <div className="mt-3 space-y-2">
                  {project.designProcess.iterations.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-white/72">{item}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">Color palette</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {project.designProcess.palette.map((swatch) => (
                    <div key={swatch.name} className="rounded-2xl border border-white/8 bg-white/[0.04] p-3">
                      <div className="h-16 rounded-xl border border-white/10" style={{ background: swatch.value }} />
                      <p className="mt-3 text-sm text-white">{swatch.name}</p>
                      <p className="text-xs text-white/45">{swatch.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">Typography showcase</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.designProcess.typography.map((type) => (
                    <div key={type.label} className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/42">{type.label}</p>
                      <p className="mt-3 font-display text-2xl text-white">{type.family}</p>
                      <p className="mt-2 text-sm text-white/62">Clean, high-contrast, and built for dense interfaces.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="development" className="scroll-mt-28 rounded-[32px] border border-white/10 bg-white/[0.04] p-5 shadow-glow backdrop-blur-2xl sm:p-7">
            <p className="text-xs uppercase tracking-[0.28em] text-white/42">Development</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-white sm:text-4xl">Architecture and system flow</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">Architecture breakdown</p>
                <div className="mt-4 space-y-3">
                  {project.development.architecture.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-white/74">
                      <LayoutTemplate className="h-4 w-4 text-[rgba(91,136,178,0.9)]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">API flow</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.development.apiFlow.map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/76">{item}</div>
                      {index < project.development.apiFlow.length - 1 ? <ArrowUpRight className="h-4 w-4 rotate-45 text-white/35" /> : null}
                    </div>
                  ))}
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/8 bg-[rgba(91,136,178,0.1)] p-4 text-sm leading-6 text-white/74">{project.development.frontend}</div>
                  <div className="rounded-2xl border border-white/8 bg-[rgba(251,249,228,0.06)] p-4 text-sm leading-6 text-white/74">{project.development.backend}</div>
                </div>
              </div>
            </div>
            <div className="mt-4 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(91,136,178,0.12),rgba(0,0,0,0.18),rgba(251,249,228,0.06))] p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-white/42">Interactive system diagram</p>
              <div className="mt-4 grid gap-3 md:grid-cols-4">
                {project.development.diagram.map((item, index) => (
                  <div key={item.title} className="rounded-2xl border border-white/8 bg-black/24 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.24em] text-white/42">0{index + 1}</span>
                      <LineChart className="h-4 w-4 text-[rgba(91,136,178,0.9)]" />
                    </div>
                    <p className="mt-3 font-medium text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-white/66">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="challenges" className="scroll-mt-28 rounded-[32px] border border-white/10 bg-white/[0.04] p-5 shadow-glow backdrop-blur-2xl sm:p-7">
            <p className="text-xs uppercase tracking-[0.28em] text-white/42">Challenges</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-white sm:text-4xl">What was difficult, and how it was resolved</h2>
            <div className="mt-6 grid gap-4">
              {project.challenges.map((challenge) => (
                <ChallengeItem key={challenge.title} {...challenge} />
              ))}
            </div>
          </section>

          <section id="results" className="scroll-mt-28 rounded-[32px] border border-white/10 bg-white/[0.04] p-5 shadow-glow backdrop-blur-2xl sm:p-7">
            <p className="text-xs uppercase tracking-[0.28em] text-white/42">Results</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-white sm:text-4xl">Measured outcomes and optimization gains</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
              <div className="grid gap-4 sm:grid-cols-3">
                {project.results.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-3xl border border-white/10 bg-black/20 p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/42">{metric.label}</p>
                    <p className="mt-4 font-display text-3xl text-white">{metric.value}</p>
                    <p className="mt-2 text-sm text-[rgba(91,136,178,0.95)]">{metric.delta}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">Lighthouse</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {project.results.lighthouse.map((score) => (
                    <div key={score.label} className="rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/42">{score.label}</p>
                      <p className="mt-3 font-display text-4xl text-white">{score.score}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-6 text-white/70">{project.results.outcome}</p>
              </div>
            </div>
          </section>

          <section id="learnings" className="scroll-mt-28 rounded-[32px] border border-white/10 bg-white/[0.04] p-5 shadow-glow backdrop-blur-2xl sm:p-7">
            <p className="text-xs uppercase tracking-[0.28em] text-white/42">Learnings</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-white sm:text-4xl">Key takeaways and future improvements</h2>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">Key takeaways</p>
                <div className="mt-4 space-y-3">
                  {project.learnings.takeaways.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-white/74">{item}</div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-white/42">Future improvements</p>
                <div className="mt-4 space-y-3">
                  {project.learnings.future.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-white/74">{item}</div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link to="/#projects">
                    <MagneticButton className="bg-[rgba(91,136,178,0.16)] px-5 py-3 text-sm uppercase tracking-[0.22em] text-white">
                      View more projects <ArrowUpRight className="h-4 w-4" />
                    </MagneticButton>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.main>
  )
}