import './style.css'

interface Project {
  name: string;
  description: string;
  link?: string;
  tags: string[];
}

const projects: Project[] = [
  {
    name: "Personal Website",
    description: "This website! Built with Vite and TypeScript.",
    link: "https://github.com/lucas-309/lucas-309.github.io",
    tags: ["TypeScript", "Vite", "Web"]
  },
  {
    name: "HPC Experiments",
    description: "Exploring parallel computing and low-level optimizations.",
    tags: ["C++", "CUDA", "MPI"]
  },
  {
    name: "Machine Learning Ops",
    description: "Infrastructure and tooling for ML pipelines.",
    tags: ["Python", "Docker", "Kubernetes"]
  }
];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <header>
      <h1>Lucas He</h1>
      <h2>CS Sophomore @ Cornell</h2>
      <p class="subtitle">High Performance Computing | Systems | AI/ML</p>
      
      <div class="links">
        <a href="https://github.com/lucas-309" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/lucas-he-9971b9239/" target="_blank">LinkedIn</a>
        <a href="mailto:lucashe309@gmail.com">Email</a>
      </div>
    </header>

    <main>
      <section class="about">
        <h3>About Me</h3>
        <p>
          I'm a CS student at Cornell University with a deep interest in low-level systems and AI.
          Currently exploring High Performance Computing (HPC) and ML infrastructure.
          I love the intersection of hardware and software.
        </p>
      </section>

      <section class="projects">
        <h3>Projects & Interests</h3>
        <div class="project-grid">
          ${projects.map(project => `
            <div class="project-card">
              <h4>${project.name}</h4>
              <p>${project.description}</p>
              <div class="tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
              </div>
              ${project.link ? `<a href="${project.link}" target="_blank" class="project-link">View Code &rarr;</a>` : ''}
            </div>
          `).join('')}
        </div>
      </section>
    </main>
  </div>
`
