import './style.css'

const terrain = [
  [0, 0, 0, 1, 1, 1, 2],
  [0, 0, 1, 1, 1, 2, 2],
  [0, 0, 1, 1, 2, 2, 3],
  [0, 1, 1, 2, 2, 3, 3],
  [0, 1, 1, 2, 3, 3, 4],
  [0, 1, 2, 2, 3, 4, 4],
  [0, 1, 2, 3, 3, 4, 4],
  [1, 1, 2, 3, 4, 4, 4],
  [1, 2, 3, 3, 4, 4, 4],
  [1, 2, 3, 4, 4, 4, 4],
  [0, 1, 2, 3, 4, 4, 3],
  [0, 1, 1, 2, 3, 3, 2],
]

const operatingMode = [
  {
    label: 'production',
    title: 'infrastructure that survives contact with reality',
    text:
      'I like the ugly edge cases: auth boundaries, billing surfaces, settlement paths, and the quiet stuff that makes products trustworthy.',
  },
  {
    label: 'usage systems',
    title: 'metering, entitlements, and reconciliation',
    text:
      'At Drip I am building the path from event ingestion to entitlement gating, charging, settlement, and clean financial receipts.',
  },
  {
    label: 'tools',
    title: 'fast internal software with actual leverage',
    text:
      'I build agents, dashboards, and ops tooling that shorten the loop between seeing a problem and fixing it.',
  },
]

const systems = [
  {
    name: 'Drip',
    status: 'shipping',
    description:
      'Usage-to-cash control plane for API and AI businesses. The job is making billing feel boring even when the underlying paths are not.',
  },
  {
    name: 'Meeple',
    status: 'active',
    description:
      'A retrieval-heavy assistant surface tied into memory, chat history, and execution tools. Built to be useful, not cute.',
  },
  {
    name: 'Systems / HPC / AI',
    status: 'ongoing',
    description:
      'The throughline is high-leverage engineering: queues, observability, reliability, and the kinds of systems work that compounds.',
  },
]

const links = [
  { label: 'email', value: 'lucashe309@gmail.com', href: 'mailto:lucashe309@gmail.com' },
  { label: 'github', value: 'github.com/lucas-309', href: 'https://github.com/lucas-309' },
  { label: 'linkedin', value: 'linkedin.com/in/lucashe309', href: 'https://www.linkedin.com/in/lucashe309' },
  { label: 'resume', value: 'resume.pdf', href: '/resume.pdf' },
]

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) {
  throw new Error('App root not found')
}

app.innerHTML = `
  <div class="page-shell">
    <div class="ambient ambient-a"></div>
    <div class="ambient ambient-b"></div>
    <div class="grid-glow"></div>

    <main class="page">
      <section class="hero panel reveal">
        <div class="hero-copy">
          <p class="eyebrow">lucas he / cornell cs / drip</p>
          <h1>
            building <span class="accent">systems</span> that make product, money,
            and execution move faster
          </h1>
          <p class="lede">
            I am a Cornell CS student focused on systems, HPC, and AI. Right now I am
            building Drip, where the core problem is turning usage into clean, reliable cash flow.
          </p>
          <p class="lede sublede">
            Born in Hong Kong, raised in Shenzhen, now in Ithaca. I like practical engineering,
            sharp interfaces, and software that still works when the edge cases show up.
          </p>

          <div class="hero-actions">
            <a class="button button-primary" href="mailto:lucashe309@gmail.com">email me</a>
            <a class="button button-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">resume</a>
            <a class="button button-ghost" href="https://github.com/lucas-309" target="_blank" rel="noreferrer">github</a>
          </div>

          <div class="signal-row">
            <div class="signal-chip">
              <span>now</span>
              <strong>cofounder & cto @ drip (yc p26)</strong>
            </div>
            <div class="signal-chip">
              <span>bias</span>
              <strong>high-leverage engineering over fluff</strong>
            </div>
            <div class="signal-chip">
              <span>focus</span>
              <strong>reliability, billing, startup execution</strong>
            </div>
          </div>
        </div>

        <aside class="hero-art">
          <div class="terrain-card">
            <div class="terrain-head">
              <span>activity terrain</span>
              <strong>steady compounding > random spikes</strong>
            </div>
            <div class="terrain-grid" aria-hidden="true">
              ${terrain
                .map(
                  (column, columnIndex) => `
                    <div class="terrain-column" style="--column-delay:${columnIndex * 70}ms">
                      ${column
                        .map(
                          (level, rowIndex) => `
                            <span
                              class="terrain-cell level-${level}"
                              style="--lift:${level * 0.4}rem; --cell-delay:${(columnIndex + rowIndex) * 45}ms"
                            ></span>
                          `,
                        )
                        .join('')}
                    </div>
                  `,
                )
                .join('')}
            </div>
            <div class="terrain-meta">
              <div>
                <span>current mode</span>
                <strong>shipping product + surviving finals</strong>
              </div>
              <div>
                <span>design brief</span>
                <strong>clean, direct, no filler</strong>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section class="section reveal">
        <div class="section-heading">
          <p class="eyebrow">operating mode</p>
          <h2>the work I gravitate toward</h2>
        </div>
        <div class="card-grid">
          ${operatingMode
            .map(
              (item) => `
                <article class="info-card panel">
                  <p class="card-label">${item.label}</p>
                  <h3>${item.title}</h3>
                  <p>${item.text}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="section reveal">
        <div class="section-heading">
          <p class="eyebrow">selected systems</p>
          <h2>what I am building right now</h2>
        </div>
        <div class="system-list">
          ${systems
            .map(
              (system) => `
                <article class="system-row panel">
                  <div class="system-title">
                    <h3>${system.name}</h3>
                    <span class="status">${system.status}</span>
                  </div>
                  <p>${system.description}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="section dual-section reveal">
        <article class="panel column-block">
          <p class="eyebrow">right now</p>
          <h2>current focus</h2>
          <ul class="bullet-list">
            <li>hardening production paths across auth, usage metering, reconciliation, and webhooks</li>
            <li>finishing Cornell while still shipping like a startup, not a student club</li>
            <li>keeping the personal site concise, useful, and visually intentional</li>
          </ul>
        </article>

        <article class="panel column-block">
          <p class="eyebrow">links</p>
          <h2>find me</h2>
          <div class="link-list">
            ${links
              .map(
                (link) => `
                  <a class="link-row" href="${link.href}" ${link.href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>
                    <span>${link.label}</span>
                    <strong>${link.value}</strong>
                  </a>
                `,
              )
              .join('')}
          </div>
        </article>
      </section>

      <footer class="footer reveal">
        <p>last updated april 2026</p>
        <p>built with vite, cleaned up by meeple</p>
      </footer>
    </main>
  </div>
`
