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
          </div>
        </motion.div>
      </section>

      <motion.section className="section-heading" id="projects" variants={riseVariants}>
        <div>
          <p className="eyebrow">Projects</p>
          <h2>Choose a project to inspect its analysis.</h2>
        </div>
        <p className="section-note">
          Each card links to a dedicated case study page with the same analysis flow.
        </p>
      </motion.section>

      <motion.section
        className="project-grid"
        aria-live="polite"
        initial={false}
        animate="show"
        variants={pageVariants}
        style={{ opacity: 1, filter: "none", transform: "none" }}
      >
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
        <div className="contact-heading">
          <p className="eyebrow">Contact</p>
          <h2>Let us build something remarkable</h2>
          <p className="section-note">Share your vision and timeline. I usually reply within one business day.</p>
        </div>

        <div className="contact-grid two-column">
          <form className="contact-form card neo-inset" onSubmit={(e) => e.preventDefault()}>
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" />
            </label>

            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@example.com" />
            </label>

            <label>
              <span>Message</span>
              <textarea name="message" placeholder="Tell me about your project..."></textarea>
            </label>

            <div className="form-actions">
              <button className="button button-primary" type="submit">
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginLeft: 8 }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M21 3L2 12l6 2 2 6 11-18z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </form>

          <div className="contact-info">
            <div className="contact-box neo-inset">
              <div className="icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6.5C3 5.11929 4.11929 4 5.5 4h13C20.8807 4 22 5.11929 22 6.5v11c0 1.3807-1.1193 2.5-2.5 2.5h-13C4.11929 20 3 18.8807 3 17.5v-11zM5.5 6L12 10.2 18.5 6" fill="currentColor" />
                </svg>
              </div>
              <div>
                <span>Email</span>
                <strong>mihir.s.sawant17@gmail.com</strong>
              </div>
            </div>

            <div className="contact-box neo-inset">
              <div className="icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2Z" fill="currentColor" />
                  <path d="M12 11.25C10.4812 11.25 9.25 10.0188 9.25 8.5C9.25 6.98122 10.4812 5.75 12 5.75C13.5188 5.75 14.75 6.98122 14.75 8.5C14.75 10.0188 13.5188 11.25 12 11.25Z" fill="#081421" />
                </svg>
              </div>
              <div>
                <span>Location</span>
                <strong>Mumbai, India</strong>
              </div>
            </div>
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

  // Force the analysis page to start at the title/hero section by default.
  // This overrides any existing hash so the project title always shows first.
  useEffect(() => {
    requestAnimationFrame(() => {
      scrollToSectionById("projectTitle", reduceMotion);
      try {
        history.replaceState(null, "", "#projectTitle");
      } catch (e) {
        // ignore
      }
    });
  }, [slug]);

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
        <h1 id="projectTitle">{project.title}</h1>
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