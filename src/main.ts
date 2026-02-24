import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Lucas He</h1>
    <h2>CS Sophomore @ Cornell</h2>
    <p>High Performance Computing | Systems | AI/ML</p>
    
    <div class="links">
      <a href="https://github.com/lucas-309" target="_blank">GitHub</a>
      <a href="https://www.linkedin.com/in/lucas-he-9971b9239/" target="_blank">LinkedIn</a>
      <a href="mailto:lucashe309@gmail.com">Email</a>
    </div>

    <section>
      <h3>About Me</h3>
      <p>
        I'm a CS student at Cornell University with a deep interest in low-level systems and AI.
        Currently exploring HPC and ML infrastructure.
      </p>
    </section>
  </div>
`
