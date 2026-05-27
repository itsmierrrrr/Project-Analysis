import { getProject, projects } from "./data.js";

const projectGrid = document.getElementById("projectGrid");
const analysisContent = document.getElementById("analysisContent");

function renderProjectCard(project) {
  return `
    <article class="card project-card">
      <p class="eyebrow">${project.category}</p>
      <h3>${project.title}</h3>
      <p class="project-meta">${project.summary}</p>
      <a class="card-link" href="analysis.html?project=${project.slug}">View analysis →</a>
    </article>
  `;
}

function renderHome() {
  if (!projectGrid) {
    return;
  }

  projectGrid.innerHTML = projects.map(renderProjectCard).join("");
}

function renderAnalysisPage() {
  if (!analysisContent) {
    return;
  }

  const projectSlug = new URLSearchParams(window.location.search).get("project") ?? "atlas";
  const project = getProject(projectSlug);

  document.title = `${project.title} | Project Analysis`;

  const projectTag = document.getElementById("projectTag");
  const projectCategory = document.getElementById("projectCategory");
  const projectTitle = document.getElementById("projectTitle");
  const projectSummary = document.getElementById("projectSummary");

  if (projectTag) {
    projectTag.textContent = project.category;
  }

  if (projectCategory) {
    projectCategory.textContent = project.category;
  }

  if (projectTitle) {
    projectTitle.textContent = project.title;
  }

  if (projectSummary) {
    projectSummary.textContent = project.summary;
  }

  analysisContent.innerHTML = `
    <section class="card section-card" id="overview">
      <h2>Overview</h2>
      <p>${project.overview}</p>
      <div class="analysis-meta-grid">
        ${project.metrics
          .map(
            (metric) => `
              <div class="meta-box">
                <span>${metric.label}</span>
                <strong>${metric.value}</strong>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="card section-card" id="problem">
      <h2>Problem</h2>
      <p>${project.problem}</p>
    </section>

    <section class="card section-card" id="design-process">
      <h2>Design Process</h2>
      <ul>
        ${project.designProcess.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="card section-card" id="development">
      <h2>Development</h2>
      <p>${project.development}</p>
    </section>

    <section class="card section-card" id="challenges">
      <h2>Challenges</h2>
      <ul>
        ${project.challenges.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="card section-card" id="results">
      <h2>Results</h2>
      <p>${project.results}</p>
    </section>

    <section class="card section-card" id="learnings">
      <h2>Learnings</h2>
      <p>${project.learnings}</p>
    </section>
  `;
}

const page = document.body.dataset.page;

if (page === "home") {
  renderHome();
}

if (page === "analysis") {
  renderAnalysisPage();
}