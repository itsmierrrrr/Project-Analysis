import React, { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { getProject, projects } from "./data/projects";

const pageVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const riseVariants = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function scrollToSectionById(sectionId, reduceMotion = false) {
  const target = document.getElementById(sectionId);

  if (!target) {
    return;
  }

  target.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "start",
  });
}

function AppShell({ children, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`app-frame ${className}`.trim()}
      initial={reduceMotion ? false : "hidden"}
      animate="show"
      variants={pageVariants}
    >
      <motion.div
        className="background-orb orb-a"
        aria-hidden="true"
        animate={reduceMotion ? {} : { scale: [1, 1.08, 1], rotate: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="background-orb orb-b"
        aria-hidden="true"
        animate={reduceMotion ? {} : { scale: [1, 1.12, 1], x: [0, 18, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <main className="shell">{children}</main>
    </motion.div>
  );
}

function HomePage() {
  const reduceMotion = useReducedMotion();

  return (
    <AppShell className="landing-page">
      <motion.header className="site-nav" variants={riseVariants}>
        <div className="nav-inner card glass-surface">
          <button className="site-brand" type="button" onClick={() => scrollToSectionById("home", reduceMotion)}>
            Project Analysis Archive
          </button>

          <nav className="site-nav-links" aria-label="Primary">
            <button type="button" onClick={() => scrollToSectionById("home", reduceMotion)}>
              Home
            </button>
            <button type="button" onClick={() => scrollToSectionById("projects", reduceMotion)}>
              Projects
            </button>
            <button type="button" onClick={() => scrollToSectionById("contact", reduceMotion)}>
              Contact
            </button>
          </nav>
        </div>
      </motion.header>

      <section className="hero-splash card glass-surface" id="home">
        <motion.div className="hero-splash-content" variants={riseVariants}>
          <p className="eyebrow">Project Analysis Archive</p>
          <h1>Project work, explained from idea to outcome.</h1>
          <p className="hero-copy">
            A polished archive for presenting each project with its overview, problem, design process, development, challenges, results, and learnings.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={() => scrollToSectionById("projects", reduceMotion)}>
              Explore projects
            </button>
            <button className="button button-secondary" type="button" onClick={() => scrollToSectionById("overview", reduceMotion)}>
              See the structure
            </button>
          </div>
        </motion.div>
      </section>

      <motion.section className="overview-strip" id="overview" variants={riseVariants}>
        <div>
          <p className="eyebrow">Structure</p>
          <h2>A clean format for every project.</h2>
        </div>
        <div className="strip-copy">
          <p>
            Each case study uses the same flow so your visitors can compare projects quickly and understand the process without searching for the important details.
          </p>
          <div className="strip-tags">
            <span>Overview</span>
            <span>Problem</span>
            <span>Design Process</span>
            <span>Development</span>
            <span>Challenges</span>
            <span>Results</span>
            <span>Learnings</span>
          </div>
        </div>
      </motion.section>

      <motion.section className="section-heading" id="projects" variants={riseVariants}>
        <div>
          <p className="eyebrow">Projects</p>
          <h2>Choose a project to inspect its analysis.</h2>
        </div>
        <p className="section-note">
          Each card links to a dedicated case study page with the same section structure.
        </p>
      </motion.section>

      <motion.section className="project-grid" aria-live="polite" variants={pageVariants}>
        {projects.map((project) => (
          <motion.article
            className="card project-card glass-surface"
            key={project.slug}
            variants={listItemVariants}
            whileHover={{ y: -8, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <p className="eyebrow">{project.category}</p>
            <h3>{project.title}</h3>
            <p className="project-meta">{project.summary}</p>
            <Link className="card-link" to={`/analysis/${project.slug}`}>
              View analysis →
            </Link>
          </motion.article>
        ))}
      </motion.section>

      <motion.section className="contact-section" id="contact" variants={riseVariants}>
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Want to talk about a project or review?</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-box neo-inset">
            <span>Email</span>
            <strong>hello@example.com</strong>
          </div>
          <div className="contact-box neo-inset">
            <span>Response</span>
            <strong>Within 1-2 business days</strong>
          </div>
          <div className="contact-box neo-inset">
            <span>Focus</span>
            <strong>UI, product, and case studies</strong>
          </div>
        </div>
      </motion.section>
    </AppShell>
  );
}

function AnalysisPage() {
  const { slug } = useParams();
  const project = getProject(slug);
  const reduceMotion = useReducedMotion();

  const sections = [
    ["Overview", "overview"],
    ["Problem", "problem"],
    ["Design Process", "design-process"],
    ["Development", "development"],
    ["Challenges", "challenges"],
    ["Results", "results"],
    ["Learnings", "learnings"],
  ];

  const [activeSection, setActiveSection] = useState(sections[0][1]);

  useEffect(() => {
    const navEl = document.querySelector(".site-nav .nav-inner") || document.querySelector(".site-nav");
    const topbarEl = document.querySelector(".topbar");
    const navOffset = (navEl ? navEl.getBoundingClientRect().height : 0) + (topbarEl ? topbarEl.getBoundingClientRect().height : 0) + 24;

    const ids = sections.map(([, id]) => id);
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let best = { ratio: 0, id: null };
        entries.forEach((e) => {
          if (e.intersectionRatio > best.ratio) {
            best = { ratio: e.intersectionRatio, id: e.target.id };
          }
        });
        if (best.id && best.ratio > 0) setActiveSection(best.id);
      },
      { root: null, rootMargin: `-${navOffset}px 0px -40% 0px`, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [slug]);


  function scrollToSection(sectionId) {
    scrollToSectionById(sectionId, reduceMotion);
  }

  return (
    <AppShell>
      <motion.header className="topbar" variants={riseVariants}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <nav className="analysis-nav" aria-label="Analysis sections">
              {sections.map(([label, id]) => (
                <button
                  key={id}
                  type="button"
                  className={activeSection === id ? "active" : ""}
                  onClick={() => scrollToSectionById(id, reduceMotion)}
                >
                  {label}
                </button>
              ))}
            </nav>
        </div>
      </motion.header>

      <motion.section className="card analysis-hero glass-surface" variants={riseVariants}>
        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="hero-copy">{project.summary}</p>
      </motion.section>

      <section className="analysis-layout">
        {/* Side navigation removed per user request */}

        <article className="analysis-content">
              <motion.section className="section-card" id="overview" variants={riseVariants}>
            <h2>Overview</h2>
            <p>{project.overview}</p>
            <div className="analysis-meta-grid">
              {project.metrics.map((metric) => (
                <motion.div className="meta-box neo-inset" key={metric.label} whileHover={{ y: -4 }}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section className="section-card" id="problem" variants={riseVariants}>
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </motion.section>

          <motion.section className="section-card" id="design-process" variants={riseVariants}>
            <h2>Design Process</h2>
            <motion.ul initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={pageVariants}>
              {project.designProcess.map((item) => (
                <motion.li key={item} variants={listItemVariants}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          <motion.section className="section-card" id="development" variants={riseVariants}>
            <h2>Development</h2>
            <p>{project.development}</p>
          </motion.section>

          <motion.section className="section-card" id="challenges" variants={riseVariants}>
            <h2>Challenges</h2>
            <motion.ul initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={pageVariants}>
              {project.challenges.map((item) => (
                <motion.li key={item} variants={listItemVariants}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          <motion.section className="section-card" id="results" variants={riseVariants}>
            <h2>Results</h2>
            <p>{project.results}</p>
          </motion.section>

          <motion.section className="section-card" id="learnings" variants={riseVariants}>
            <h2>Learnings</h2>
            <p>{project.learnings}</p>
          </motion.section>
        </article>
      </section>

      <Link to="/" className="back-fixed card glass-surface">
        Back to projects
      </Link>
    </AppShell>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/analysis/:slug" element={<AnalysisPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;