import { ArrowUpRight, CircleCheckBig } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { cn } from '../lib/cn'
import { MagneticButton } from './MagneticButton'
import { TiltCard } from './TiltCard'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <TiltCard className="h-full">
      <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] p-5 shadow-glow backdrop-blur-2xl transition duration-300 hover:border-[rgba(91,136,178,0.45)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,136,178,0.14),transparent_38%)] opacity-0 transition duration-500 group-hover:opacity-100" />
        <div className="relative space-y-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">{project.category}</p>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/80 backdrop-blur-sm">
              <CircleCheckBig className="h-3.5 w-3.5" /> {project.status}
            </span>
          </div>

          <h3 className="font-display text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
          <p className="max-w-sm text-sm leading-6 text-white/68">{project.summary}</p>
        </div>

        <div className="relative mt-8 flex items-center justify-between gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
          <Link to={`/analysis/${project.slug}`} className="shrink-0">
            <MagneticButton className={cn('border-white/12 bg-white/[0.06] px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/90')}>
              View <ArrowUpRight className="h-3.5 w-3.5" />
            </MagneticButton>
          </Link>
        </div>
      </article>
    </TiltCard>
  )
}