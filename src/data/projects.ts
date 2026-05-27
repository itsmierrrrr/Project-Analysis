export type ProjectSectionId =
  | 'overview'
  | 'problem'
  | 'design-process'
  | 'development'
  | 'challenges'
  | 'results'
  | 'learnings'

export type Project = {
  slug: string
  title: string
  category: string
  status: 'Live' | 'In Progress' | 'Archived'
  summary: string
  description: string
  banner: string
  accent: string
  tags: string[]
  stack: string[]
  links: {
    github: string
    live: string
  }
  stats: Array<{ label: string; value: string }>
  overview: {
    headline: string
    body: string
    pills: string[]
  }
  problem: {
    headline: string
    body: string
    visual: string
  }
  designProcess: {
    wireframes: string[]
    inspirations: string[]
    iterations: string[]
    palette: Array<{ name: string; value: string }>
    typography: Array<{ label: string; family: string }>
  }
  development: {
    architecture: string[]
    apiFlow: string[]
    frontend: string
    backend: string
    diagram: Array<{ title: string; description: string }>
  }
  challenges: Array<{ title: string; problem: string; solution: string }>
  results: {
    metrics: Array<{ label: string; value: string; delta: string }>
    lighthouse: Array<{ label: string; score: string }>
    outcome: string
  }
  learnings: {
    takeaways: string[]
    future: string[]
  }
}

export const projects: Project[] = [
  {
    slug: 'atlas-signal',
    title: 'Atlas Signal',
    category: 'Design Systems',
    status: 'Live',
    summary: 'A high-trust analytics shell for monitoring product health and release quality.',
    description:
      'A product operations dashboard designed to make dense system data feel legible, calm, and fast to explore.',
    banner: 'linear-gradient(135deg, rgba(91, 136, 178, 0.95), rgba(18, 44, 79, 0.9) 52%, rgba(251, 249, 228, 0.14))',
    accent: 'rgba(91, 136, 178, 0.9)',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
    stack: ['React', 'TypeScript', 'Tailwind', 'Motion'],
    links: {
      github: 'https://github.com',
      live: 'https://example.com',
    },
    stats: [
      { label: 'Pages shipped', value: '18' },
      { label: 'Time to insight', value: '-42%' },
      { label: 'Accessibility', value: 'AA+' },
    ],
    overview: {
      headline: 'A dashboard that turns operational noise into a focused narrative.',
      body:
        'Atlas Signal was built for teams who need a dense analytics surface without the typical visual fatigue. The layout balances a cinematic dark shell with lightweight information layers, so the product feels premium without becoming ornamental.',
      pills: ['System design', 'Data visualization', 'Performance-first'],
    },
    problem: {
      headline: 'The team had data. What they lacked was a readable story.',
      body:
        'Metrics were scattered across internal tools, and the product team could not quickly answer what changed, why it changed, and which actions mattered most. The redesign needed to lower cognitive load while keeping deep data instantly accessible.',
      visual: 'Large-volume data, fragmented workflows, and too many competing alerts.',
    },
    designProcess: {
      wireframes: ['Nav-first shell', 'Three-column metrics view', 'Progressive drill-down panels'],
      inspirations: ['Linear command palette', 'Vercel clarity', 'Apple-style spacing and motion'],
      iterations: ['Iteration 01: dense tables', 'Iteration 02: layered cards', 'Iteration 03: focused information hierarchy'],
      palette: [
        { name: 'Midnight', value: '#000000' },
        { name: 'Deep Navy', value: '#122c4f' },
        { name: 'Steel Blue', value: '#5b88b2' },
        { name: 'Paper', value: '#fbf9e4' },
      ],
      typography: [
        { label: 'Display', family: 'Space Grotesk' },
        { label: 'Body', family: 'Inter' },
      ],
    },
    development: {
      architecture: ['React component shell', 'State-driven command menu', 'Motion-based page transitions', 'Responsive data cards'],
      apiFlow: ['Client request', 'Activity normalization', 'Insight ranking', 'Animated presentation layer'],
      frontend:
        'The frontend is structured around reusable motion components, so hero sections, cards, and accordions all share the same visual grammar. Tailwind provides the composition layer, while Framer Motion handles entrance, hover, and scroll-triggered transitions.',
      backend:
        'The backend concept is modeled as a lightweight insight service that aggregates events, scores importance, and returns ready-to-display summaries for the dashboard shell.',
      diagram: [
        { title: 'Events', description: 'Product telemetry, release flags, and usage data' },
        { title: 'Normalize', description: 'Filter and enrich incoming records' },
        { title: 'Score', description: 'Rank what needs attention first' },
        { title: 'Render', description: 'Animate the signal into readable UI' },
      ],
    },
    challenges: [
      {
        title: 'Too much information at once',
        problem: 'Dense content caused the interface to feel heavy and slow.',
        solution: 'Reduced hierarchy depth, widened spacing, and separated overview from drill-down layers.',
      },
      {
        title: 'Trust without clutter',
        problem: 'The UI needed to feel premium without adding decorative noise.',
        solution: 'Used glass surfaces, thin borders, and one neon accent rather than multiple competing effects.',
      },
      {
        title: 'Motion without distraction',
        problem: 'Animations could easily overwhelm analytic content.',
        solution: 'Limited motion to reveal, hover, and progress states while keeping the core content still.',
      },
    ],
    results: {
      metrics: [
        { label: 'Navigation speed', value: '1.6x', delta: '+60% faster' },
        { label: 'Task completion', value: '94%', delta: '+18 points' },
        { label: 'Visual clarity', value: '9.8/10', delta: 'Internal review' },
      ],
      lighthouse: [
        { label: 'Performance', score: '98' },
        { label: 'Accessibility', score: '100' },
        { label: 'Best Practices', score: '99' },
        { label: 'SEO', score: '97' },
      ],
      outcome:
        'The final archive interface gave stakeholders a fast, calm system for scanning high-volume product data and moving directly into the relevant case study.',
    },
    learnings: {
      takeaways: ['Hierarchy matters more than decoration.', 'Motion should reinforce intent, not compete with it.', 'Compact systems still need generous breathing room.'],
      future: ['Add inline search across case studies.', 'Layer in richer data visualizations.', 'Extend the command menu with keyboard macros.'],
    },
  },
  {
    slug: 'northstar-commerce',
    title: 'Northstar Commerce',
    category: 'Full Stack',
    status: 'In Progress',
    summary: 'A conversion-focused storefront with live pricing, storytelling, and a frictionless checkout path.',
    description:
      'A premium commerce concept centered on editorial product pages, guided discovery, and measurable conversion improvements.',
    banner: 'linear-gradient(135deg, rgba(18, 44, 79, 0.96), rgba(91, 136, 178, 0.9) 60%, rgba(251, 249, 228, 0.12))',
    accent: 'rgba(251, 249, 228, 0.8)',
    tags: ['React', 'Framer Motion', 'API', 'Design'],
    stack: ['React', 'API', 'Motion', 'E-commerce'],
    links: { github: 'https://github.com', live: 'https://example.com' },
    stats: [
      { label: 'Collections', value: '42' },
      { label: 'Checkout drop', value: '-26%' },
      { label: 'AOV lift', value: '+12%' },
    ],
    overview: {
      headline: 'A storefront designed to feel editorial, not transactional.',
      body:
        'Northstar Commerce blends product storytelling with a highly responsive purchase flow. The objective was to make discovery feel cinematic while ensuring the conversion path stayed fast and obvious.',
      pills: ['Editorial layout', 'Checkout optimization', 'Motion-driven product pages'],
    },
    problem: {
      headline: 'Standard product grids were not building enough confidence.',
      body:
        'The previous experience exposed products but failed to explain their value. The new structure adds narrative depth, structured comparisons, and stronger visual rhythm so users can make decisions with confidence.',
      visual: 'Flat catalog pages with weak differentiation and high bounce rates.',
    },
    designProcess: {
      wireframes: ['Hero-led discovery', 'Story blocks', 'Sticky purchase rail'],
      inspirations: ['Apple product pages', 'Vercel motion polish', 'Magazine-style pacing'],
      iterations: ['Iteration 01: grid-first', 'Iteration 02: story-first', 'Iteration 03: hybrid commerce narrative'],
      palette: [
        { name: 'Midnight', value: '#000000' },
        { name: 'Blue Drift', value: '#122c4f' },
        { name: 'Signal', value: '#5b88b2' },
        { name: 'Ivory', value: '#fbf9e4' },
      ],
      typography: [
        { label: 'Display', family: 'Space Grotesk' },
        { label: 'Reading', family: 'Inter' },
      ],
    },
    development: {
      architecture: ['Product page shells', 'Pricing service integration', 'Sticky cart state', 'Optimized image loading'],
      apiFlow: ['Catalog data', 'Pricing lookup', 'Availability check', 'Checkout preflight'],
      frontend:
        'The interface uses motion to guide attention from product features to the purchase rail without breaking the reading flow. Cards and panels are reusable across collection, detail, and checkout surfaces.',
      backend:
        'The backend concept focuses on stable inventory and pricing endpoints, with lightweight caching to avoid stale promotions and reduce checkout latency.',
      diagram: [
        { title: 'Browse', description: 'Collections, filters, editorial story blocks' },
        { title: 'Inspect', description: 'Comparison panels and product confidence cues' },
        { title: 'Checkout', description: 'Fast, trusted, low-friction payment path' },
      ],
    },
    challenges: [
      {
        title: 'Balancing story and conversion',
        problem: 'Editorial sections risked slowing users down.',
        solution: 'Kept the purchase rail visible and shortened each content block to maintain momentum.',
      },
      {
        title: 'High-quality imagery',
        problem: 'A premium look depends heavily on asset quality.',
        solution: 'Used strong gradients, crop discipline, and consistent framing for every banner.',
      },
    ],
    results: {
      metrics: [
        { label: 'Add-to-cart rate', value: '+21%', delta: 'Improved' },
        { label: 'Checkout speed', value: '1.2s', delta: '-31%' },
        { label: 'Bounce rate', value: '-19%', delta: 'Reduced' },
      ],
      lighthouse: [
        { label: 'Performance', score: '96' },
        { label: 'Accessibility', score: '98' },
        { label: 'Best Practices', score: '98' },
        { label: 'SEO', score: '95' },
      ],
      outcome:
        'Northstar Commerce demonstrates how a premium visual language can still respect the speed and clarity required for conversion.',
    },
    learnings: {
      takeaways: ['Storytelling is strongest when it supports decisions.', 'Conversion surfaces should never hide behind animation.', 'Hierarchy must stay visible on mobile.'],
      future: ['Add personalized recommendations.', 'Support richer variant previews.', 'Introduce cart recovery insights.'],
    },
  },
  {
    slug: 'lumen-ops',
    title: 'Lumen Ops',
    category: 'Motion',
    status: 'Archived',
    summary: 'A sleek internal portal that transforms process-heavy operations into quick, calm workflows.',
    description:
      'An internal platform concept for operations teams that need fast actions, clear state, and a strong sense of system status.',
    banner: 'linear-gradient(135deg, rgba(251, 249, 228, 0.16), rgba(18, 44, 79, 0.95) 55%, rgba(91, 136, 178, 0.9))',
    accent: 'rgba(91, 136, 178, 0.75)',
    tags: ['Accessibility', 'React', 'Tailwind', 'Animation'],
    stack: ['React', 'Accessibility', 'Tailwind', 'Animation'],
    links: { github: 'https://github.com', live: 'https://example.com' },
    stats: [
      { label: 'Workflows', value: '11' },
      { label: 'Task clarity', value: '+38%' },
      { label: 'Error rate', value: '-24%' },
    ],
    overview: {
      headline: 'A process-heavy portal redesigned to feel calm and immediate.',
      body:
        'Lumen Ops combines dense operational controls with highly readable status surfaces. The design leans into compact cards, crisp labels, and motion cues that help users understand what just happened and what comes next.',
      pills: ['Operations', 'Workflow design', 'Accessible motion'],
    },
    problem: {
      headline: 'Operators needed speed, but the UI was forcing them to slow down.',
      body:
        'The original portal overloaded users with nested forms and unclear statuses. The redesign prioritizes immediate recognition, so common actions can be completed with less scanning and fewer mistakes.',
      visual: 'Nested forms, unclear state labels, and long task completion paths.',
    },
    designProcess: {
      wireframes: ['Action rail', 'Compact status stack', 'Focused detail sheets'],
      inspirations: ['Linear workflows', 'Apple detail pages', 'High-contrast operator panels'],
      iterations: ['Iteration 01: form-first', 'Iteration 02: task-first', 'Iteration 03: signal-first'],
      palette: [
        { name: 'Black', value: '#000000' },
        { name: 'Navy', value: '#122c4f' },
        { name: 'Blue', value: '#5b88b2' },
        { name: 'Soft Ivory', value: '#fbf9e4' },
      ],
      typography: [
        { label: 'Display', family: 'Space Grotesk' },
        { label: 'Interface', family: 'Inter' },
      ],
    },
    development: {
      architecture: ['Operations dashboard shell', 'Status event bus', 'Task completion traces', 'Inline feedback states'],
      apiFlow: ['Task queue', 'Validation layer', 'Action execution', 'Audit trail response'],
      frontend:
        'Frontend components are designed for high certainty. Labels, colors, and spacing all reinforce whether a task is pending, blocked, or completed, while motion keeps the interface responsive without becoming noisy.',
      backend:
        'The backend would expose task histories, enforce approval rules, and return a compact state model that the UI can render immediately without extra interpretation.',
      diagram: [
        { title: 'Queue', description: 'Incoming requests and support actions' },
        { title: 'Validate', description: 'Permissions, state, and dependencies' },
        { title: 'Execute', description: 'Apply the requested change' },
        { title: 'Confirm', description: 'Reflect the outcome instantly in UI' },
      ],
    },
    challenges: [
      {
        title: 'Fast actions needed safety',
        problem: 'Operators could not afford accidental clicks.',
        solution: 'Added spacing, confirmation states, and clearer hierarchy before any destructive action.',
      },
      {
        title: 'High density on mobile',
        problem: 'Many workflows were only designed for desktop use.',
        solution: 'Collapsed the shell into stacked cards and horizontal sections for small screens.',
      },
    ],
    results: {
      metrics: [
        { label: 'Workflow speed', value: '+28%', delta: 'Faster' },
        { label: 'Support errors', value: '-24%', delta: 'Lower' },
        { label: 'Training time', value: '-33%', delta: 'Reduced' },
      ],
      lighthouse: [
        { label: 'Performance', score: '97' },
        { label: 'Accessibility', score: '99' },
        { label: 'Best Practices', score: '98' },
        { label: 'SEO', score: '96' },
      ],
      outcome:
        'Lumen Ops shows how internal tools can feel premium and fast while still staying brutally readable for day-to-day work.',
    },
    learnings: {
      takeaways: ['Operational tools benefit from visual restraint.', 'Clear state beats decorative complexity.', 'Responsive design matters even for internal software.'],
      future: ['Add inline approvals.', 'Build a richer audit timeline.', 'Integrate command macros for recurring tasks.'],
    },
  },
]

export const projectFilters = [
  'All',
  'React',
  'TypeScript',
  'Tailwind',
  'Motion',
  'Design Systems',
  'Full Stack',
  'Accessibility',
]