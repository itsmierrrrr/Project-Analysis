export const projects = [
  {
    slug: "atlas",
    title: "Atlas Dashboard",
    category: "Analytics platform",
    summary:
      "A dashboard for tracking project metrics and turning scattered status updates into one clear workspace.",
    overview:
      "Atlas Dashboard organizes project progress, key metrics, and team notes in one place so stakeholders can quickly understand what is happening without jumping between tools.",
    problem:
      "The team had progress scattered across documents, chats, and spreadsheets. That made status reviews slow and created confusion about what had been completed.",
    designProcess: [
      "Mapped the most common questions stakeholders ask during reviews.",
      "Created a layout that surfaces summary cards first, then deeper detail on demand.",
      "Used a restrained color system to keep the interface calm and readable.",
    ],
    development:
      "Built the site as a static, responsive experience with reusable project data so new case studies can be added without rewriting the layout.",
    challenges: [
      "Balancing visual polish with a simple implementation.",
      "Keeping long-form content readable on smaller screens.",
      "Making the navigation feel fast without adding complexity.",
    ],
    results:
      "The final archive makes each project easy to scan, while the analysis pages make it easy to explain decisions and outcomes in one narrative.",
    learnings:
      "A clear content structure matters more than fancy effects. The best portfolio pages help people understand your thinking, not just your screenshots.",
    metrics: [
      { label: "Focus", value: "Single source of truth" },
      { label: "Format", value: "Landing page + case study" },
      { label: "Goal", value: "Explain process clearly" },
    ],
  },
  {
    slug: "pulse",
    title: "Pulse Notes",
    category: "Study companion",
    summary:
      "A lightweight note-taking concept that helps students collect ideas, tasks, and summaries in one focused place.",
    overview:
      "Pulse Notes was framed as a compact workspace for capturing study notes, organizing quick action items, and reviewing highlights before deadlines.",
    problem:
      "Students often jump between notebooks, docs, and messaging apps. The goal was to reduce that friction with a more focused note flow.",
    designProcess: [
      "Started with a content-first layout that keeps writing and reading simple.",
      "Grouped notes by type so users can quickly separate ideas from tasks.",
      "Kept interaction states obvious and minimal to avoid distraction.",
    ],
    development:
      "The implementation keeps the data model small and consistent, which makes the content easy to maintain and extend.",
    challenges: [
      "Maintaining a strong hierarchy without overcrowding the page.",
      "Deciding how much detail belongs on the landing page versus the analysis page.",
    ],
    results:
      "The concept shows how a simple structure can still feel complete when each section answers a clear question.",
    learnings:
      "If the purpose is explanation, clarity should lead the design system from the start.",
    metrics: [
      { label: "Focus", value: "Study workflow" },
      { label: "Audience", value: "Students" },
      { label: "Priority", value: "Readability" },
    ],
  },
  {
    slug: "forge",
    title: "Forge Studio",
    category: "Creative workflow",
    summary:
      "A portfolio-style studio concept for presenting experiments, process snapshots, and polished final outcomes.",
    overview:
      "Forge Studio acts as a container for creative projects where the path to the final result is as important as the result itself.",
    problem:
      "Creative work is often presented only as a final screenshot, which hides the exploration and decisions that shaped the outcome.",
    designProcess: [
      "Split the analysis into the six sections the user needs for each project.",
      "Designed the cards and analysis pages to feel related but not repetitive.",
      "Used subtle motion and layered backgrounds to keep the site alive without becoming noisy.",
    ],
    development:
      "The site is built from a single shared project dataset so the homepage and analysis pages stay consistent.",
    challenges: [
      "Making the site feel like a portfolio instead of a generic template.",
      "Creating a route structure that stays simple in a static setup.",
    ],
    results:
      "The archive reads like a small knowledge base for your projects, which makes it useful both for review and presentation.",
    learnings:
      "A strong archive page can double as a personal narrative about how you think and work.",
    metrics: [
      { label: "Format", value: "Case study archive" },
      { label: "Structure", value: "Modular content" },
      { label: "Tone", value: "Clean and intentional" },
    ],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug) ?? projects[0];
}