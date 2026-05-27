import { AnimatePresence, motion } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { cn } from '../lib/cn'

type Action = {
  label: string
  description: string
  run: () => void
}

type CommandPaletteProps = {
  open: boolean
  onClose: () => void
  actions: Action[]
}

export function CommandPalette({ open, onClose, actions }: CommandPaletteProps) {
  const [query, setQuery] = useState('')

  const filteredActions = useMemo(
    () => actions.filter((action) => `${action.label} ${action.description}`.toLowerCase().includes(query.toLowerCase())),
    [actions, query],
  )

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!open) {
        return
      }

      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose, open])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-start justify-center bg-black/70 px-4 pt-24 backdrop-blur-md"
          onMouseDown={onClose}
        >
          <motion.div
            initial={{ y: 24, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 16, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[rgba(6,10,18,0.9)] shadow-glow"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/8 px-4 py-4">
              <Search className="h-4 w-4 text-white/50" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
                placeholder="Search projects, views, or actions..."
              />
              <button type="button" onClick={onClose} className="rounded-full p-2 text-white/50 transition hover:bg-white/8 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {filteredActions.length ? (
                filteredActions.map((action) => (
                  <button
                    key={action.label}
                    type="button"
                    onClick={() => {
                      action.run()
                      onClose()
                    }}
                    className={cn('flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition hover:bg-white/8')}
                  >
                    <div>
                      <p className="font-medium text-white">{action.label}</p>
                      <p className="text-sm text-white/48">{action.description}</p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.24em] text-white/30">Enter</span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-10 text-center text-sm text-white/45">No matching actions found.</div>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}