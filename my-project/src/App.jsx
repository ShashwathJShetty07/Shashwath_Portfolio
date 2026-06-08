import { useEffect, useRef, useState } from 'react'
import './App.css'
import profileImage from './images/myimage.jpeg'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const projects = [
  {
    title: 'Real-Time Chat Room',
    description: 'Java Spring Boot, WebSocket, real-time communication, active user tracking.',
    tags: ['Spring Boot', 'WebSocket', 'Java'],
  },
  {
    title: 'Car Rental Management System',
    description: 'MySQL DB, booking & inventory management.',
    tags: ['MySQL', 'Java'],
  },
  {
    title: 'Medical Insurance Prediction',
    description: 'Machine learning regression analysis in Python.',
    tags: ['Python', 'ML'],
  },
  {
    title: 'Gaming & Gambling Industry Survey',
    description: 'Research and market analysis.',
    tags: ['Research', 'Analysis'],
  },
]

const skills = [
  { name: 'C', level: '85%' },
  { name: 'C++', level: '78%' },
  { name: 'Python', level: '82%' },
  { name: 'Java', level: '70%' },
  { name: 'HTML/CSS/JS', level: '88%' },
  { name: 'Spring Boot', level: '65%' },
  { name: 'MySQL', level: '76%' },
  { name: 'MongoDB', level: '68%' },
]

function App() {
  const [welcomeState, setWelcomeState] = useState('visible')
  const [entered, setEntered] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    document.body.classList.toggle('portfolio-entered', entered)
    return () => document.body.classList.remove('portfolio-entered')
  }, [entered])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight
    let rafId = 0

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      hue: 230 + Math.random() * 80,
    }))

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
        if (particle.x < 0) particle.x = width
        if (particle.x > width) particle.x = 0
        if (particle.y < 0) particle.y = height
        if (particle.y > height) particle.y = 0

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.r * 12,
        )
        gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 70%, 0.22)`)
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.r * 12, 0, Math.PI * 2)
        ctx.fill()
      })
      rafId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const handleEnter = () => {
    if (welcomeState !== 'visible') return
    setWelcomeState('fading')
    setTimeout(() => {
      setEntered(true)
      setWelcomeState('hidden')
    }, 850)
  }

  const downloadResume = () => {
    const content = `Shashwath J Shetty\nFull Stack Developer\nEmail: shashwathjshetty@gmail.com\nPhone: +91 8792018224\n\nEducation:\nB.Tech Computer Science & Engineering (2023-2027) - NMAM Institute of Technology, Nitte\n\nSkills:\nC, C++, Java, Python, HTML, CSS, JavaScript, Spring Boot, MySQL, MongoDB\n\nExperience:\nSoftware Development Intern at Experimind Lab\n\nProjects:\n- Real-Time Chat Room\n- Car Rental Management System\n- Medical Insurance Prediction\n- Gaming & Gambling Industry Survey\n`
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'Shashwath_J_Shetty_Resume.txt'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="portfolio-app">
      <canvas ref={canvasRef} className="particles-canvas" aria-hidden="true" />
      <div className="mouse-glow" aria-hidden="true" />

      {welcomeState !== 'hidden' && (
        <section className={`welcome-screen ${welcomeState === 'fading' ? 'fade-out' : ''}`}>
          <div className="welcome-card">
            <p className="welcome-label">Welcome</p>
            <h1>I'm Shashwath J Shetty</h1>
            <button className="enter-button" onClick={handleEnter}>
              Enter Portfolio
            </button>
          </div>
        </section>
      )}

      <header className="portfolio-header">
        <div className="brand-block">
          <div className="brand-logo">SJ</div>
          <div className="brand-copy">
            <strong>Shashwath J Shetty</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>
        <nav className="portfolio-nav">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="portfolio-main">
        <section id="hero" className="hero-section">
          <div className="hero-left">
            <span className="eyebrow">Hello, I'm</span>
            <h2>Shashwath J Shetty</h2>
            <p className="hero-description">
              Computer Science Engineering Student | Full Stack Developer | Software Enthusiast.
              Building immersive web experiences with polished animations and modern design.
            </p>
            <div className="hero-actions">
              <button className="button primary" onClick={downloadResume}>
                Download Resume
              </button>
              <a className="button ghost" href="mailto:shashwathjshetty@gmail.com">
                Email
              </a>
              <a className="button ghost" href="https://github.com/ShashwathJShetty07" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="button ghost" href="https://linkedin.com/in/shashwath-j-shetty" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="hero-right">
            <div className="profile-wrap">
              <div className="ring" />
              <div className="glow" />
              <div className="profile-image">
                <img src={profileImage} alt="Shashwath J Shetty" />
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="section glass-panel">
          <div className="section-content">
            <span className="section-title">About</span>
            <h3>About Me</h3>
            <p>
              I am pursuing B.Tech in Computer Science & Engineering at NMAM Institute of Technology,
              Nitte. Passionate about building efficient, scalable systems and delightful user
              experiences.
            </p>
          </div>
        </section>

        <section id="education" className="section glass-panel">
          <div className="section-content">
            <span className="section-title">Education</span>
            <h3>Academic Journey</h3>
            <p>NMAM Institute of Technology, Nitte • B.Tech Computer Science & Engineering • 2023 - 2027</p>
            <p>CGPA: 6.84</p>
          </div>
        </section>

        <section id="skills" className="section skills-panel">
          <span className="section-title">Skills</span>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-pill">
                <span>{skill.name}</span>
                <strong>{skill.level}</strong>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section glass-panel">
          <span className="section-title">Projects</span>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section glass-panel contact-panel">
          <span className="section-title">Contact</span>
          <h3>Let's Connect</h3>
          <p>
            Want to collaborate or discuss a project? Send a message and I’ll get back to you soon.
          </p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:shashwathjshetty@gmail.com">
              Email Me
            </a>
            <a className="button ghost" href="https://github.com/ShashwathJShetty07" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="button ghost" href="https://linkedin.com/in/shashwath-j-shetty" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
