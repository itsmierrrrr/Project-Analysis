export const projects = [
  {
    slug: "royale-bakes",
    title: "Royale Bakes",
    category: "E-Commerce Bakery",
    summary:
      "A modern online cake shop that allows customers to browse, customize, and order freshly baked cakes with a seamless shopping experience.",
    overview:
      "Royale Bakes is an e-commerce platform designed for cake lovers to explore a wide variety of cakes, place orders online, and schedule deliveries. The platform focuses on elegant presentation, smooth navigation, and a delightful purchasing journey.",
    problem:
      "Traditional cake ordering often relies on phone calls or messaging, making customization, order tracking, and product discovery inconvenient. Customers needed a faster and more transparent way to browse and purchase cakes online.",
    designProcess: [
    "Researched customer expectations for online bakery shopping and cake customization.",
    "Designed a visually rich interface that highlights products through high-quality imagery and clear categories.",
    "Created a streamlined checkout flow to reduce friction and improve conversion rates.",
  ],

    development:
      "Built as a responsive e-commerce website using modern web technologies, featuring product catalogs, shopping cart functionality, secure checkout, order management, and mobile-first optimization.",
    challenges: [
    "Balancing visual appeal with fast page loading speeds.",
    "Designing an intuitive cake customization and ordering experience.",
    "Ensuring a consistent shopping experience across desktop and mobile devices.",
  ],
    results:
      "The platform provides customers with a convenient way to discover products, place orders, and schedule deliveries while helping the bakery manage online sales more efficiently.",
    learnings:
      "Successful e-commerce experiences depend on trust, simplicity, and product presentation. Clear navigation and a frictionless checkout process significantly improve user engagement and purchase completion.",
    metrics: [
    { label: "Products", value: "Custom & Ready-Made Cakes" },
    { label: "Platform", value: "Online Bakery Store" },
    { label: "Goal", value: "Increase Online Orders" },
  ],
  },
  {
    slug: "lessgoai",
    title: "Lessgo ai",
    category: "AI Trip Planner",
    summary:
      "An AI-powered travel planning platform that generates personalized itineraries, destination suggestions, and travel recommendations based on user preferences.",
    overview:
      "Lessgo ai helps travelers plan trips effortlessly by using artificial intelligence to create customized travel itineraries. Users can discover destinations, explore attractions, and organize their journeys without spending hours researching.",
    problem:
      "Planning a trip often requires searching across multiple websites for destinations, accommodations, activities, and schedules. This process can be time-consuming and overwhelming, especially for first-time travelers.",
    designProcess: [
    "Focused on a conversational and user-friendly experience for trip planning.",
    "Designed a clean interface that highlights destinations, itineraries, and recommendations.",
    "Structured the journey so users can move from inspiration to a complete travel plan with minimal effort.",
  ],
    development:
      "Built with a React + Vite frontend and a Node.js + Express backend, integrating AI-powered itinerary generation, destination recommendations, and responsive user interfaces optimized for all devices.",
    challenges: [
    "Generating travel plans that feel personalized rather than generic.",
    "Presenting large amounts of travel information without overwhelming users.",
    "Balancing AI-generated content with a fast and responsive user experience.",
  ],
    results:
      "The platform streamlines the travel planning process by transforming user preferences into organized itineraries, helping travelers make decisions faster and with greater confidence.",
    learnings:
      "AI is most effective when it simplifies complex decisions. Clear presentation and personalization are just as important as the intelligence behind the recommendations.",
    metrics: [
    { label: "Focus", value: "Personalized Travel Planning" },
    { label: "Technology", value: "AI-Powered Recommendations" },
    { label: "Goal", value: "Simplify Trip Planning" },
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