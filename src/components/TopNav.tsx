import { Command, Menu, MoonStar, SunMedium } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../context/use-theme'
import { cn } from '../lib/cn'
import { MagneticButton } from './MagneticButton'

type TopNavProps = {
  onCommandMenu: () => void
}

const navItems = [
  { label: 'Archive', to: '/' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Analysis', to: '/#analysis' },
]

export function TopNav({ onCommandMenu }: TopNavProps) {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-black/35 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[rgba(91,136,178,0.12)] text-sm font-semibold text-white shadow-neon transition group-hover:scale-105">
            PA
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.34em] text-white/45">Project Analysis Archive</p>
            <p className="text-sm text-white/82">Case studies and system breakdowns</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/8 hover:text-white',
                  isActive && location.pathname === '/' ? 'bg-white/8 text-white' : '',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <MagneticButton
            onClick={onCommandMenu}
            className="hidden border-white/12 bg-white/[0.06] px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/86 lg:inline-flex"
          >
            <Command className="h-3.5 w-3.5" />
            Menu
          </MagneticButton>
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/82 transition hover:border-[rgba(91,136,178,0.4)] hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunMedium className="h-4.5 w-4.5" /> : <MoonStar className="h-4.5 w-4.5" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/82 transition hover:border-[rgba(91,136,178,0.4)] hover:bg-white/10 md:hidden"
            aria-label="Open navigation"
          >
            <Menu className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/8 bg-black/45 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:flex-wrap">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-white/80 transition hover:bg-white/8"
              >
                {item.label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={() => {
                onCommandMenu()
                setOpen(false)
              }}
              className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-left text-sm text-white/80 transition hover:bg-white/8"
            >
              Open command menu
            </button>
          </div>
        </div>
      ) : null}
    </header>
  )
}