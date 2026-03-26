import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="page">
    <header class="site-header">
      <h1>Lucas He</h1>
      <p class="subtitle">Cornell CS · Cofounder & CTO at Drip (YC P26)</p>
      <nav class="nav">
        <a href="#about">about</a>
        <a href="#work">work</a>
        <a href="#projects">projects</a>
        <a href="#cv">cv</a>
        <a href="#contact">contact</a>
      </nav>
    </header>

    <main>
      <section id="about" class="card profile-card">
        <div class="profile-photo-wrap">
          <img id="profile-photo" src="/profile.png" alt="Lucas He profile photo" />
          <div id="profile-photo-fallback" class="profile-photo-fallback" aria-hidden="true">LH</div>
        </div>
        <div>
          <h2>Hi, I'm Lucas</h2>
          <p>
            I build backend systems and product infrastructure for API/AI companies.
            Right now I’m focused on reliability, payments, billing, and startup execution.
          </p>
          <p>
            Born in Hong Kong, raised in Shenzhen, now at Cornell. I care about practical,
            high-leverage engineering over fluffy complexity.
          </p>
        </div>
      </section>

      <section id="work" class="card">
        <h2>Current Work</h2>
        <ul>
          <li>
            <strong>Drip (YC P26)</strong> — Cofounder & CTO
            <br />
            Usage-to-cash control plane for API/AI businesses:
            <span class="mono">event → entitlement gate → charge → settlement → reconciliation</span>
          </li>
          <li>
            Working on production hardening across auth boundaries, usage metering,
            reconciliation, and webhook reliability.
          </li>
        </ul>
      </section>

      <section id="projects" class="card">
        <h2>Selected Projects</h2>
        <ul>
          <li><strong>Drip SDK + dashboard work</strong> — developer experience + secure billing primitives</li>
          <li><strong>Agent tooling</strong> — Discord-based assistants with retrieval/memory pipelines</li>
          <li><strong>Systems/infra experiments</strong> — queueing, fault handling, and observability</li>
        </ul>
      </section>

      <section id="cv" class="card cv-section">
        <h2>CV</h2>
        <p>
          Open my CV in a new tab:
          <a href="/resume.pdf" target="_blank" rel="noreferrer">Open CV (PDF)</a>
        </p>
      </section>

      <section id="contact" class="card">
        <h2>Contact</h2>
        <ul>
          <li>GitHub: <a href="https://github.com/lucas-309" target="_blank" rel="noreferrer">github.com/lucas-309</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/lucashe309" target="_blank" rel="noreferrer">linkedin.com/in/lucashe309</a></li>
          <li>Email: <a href="mailto:lucashe309@gmail.com">lucashe309@gmail.com</a></li>
        </ul>
      </section>
    </main>

    <footer>
      <small>Last updated: March 2026</small>
    </footer>
  </div>
`

const photo = document.getElementById('profile-photo') as HTMLImageElement | null
const photoFallback = document.getElementById('profile-photo-fallback') as HTMLDivElement | null

if (photo && photoFallback) {
  photo.addEventListener('error', () => {
    photo.style.display = 'none'
    photoFallback.hidden = false
  })
  photo.addEventListener('load', () => {
    photoFallback.hidden = true
  })
}
