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

function App() {
  const [showWelcome, setShowWelcome] = useState(true)
  const canvasRef = useRef(null)

  useEffect(() => {
    document.body.classList.toggle('portfolio-open', !showWelcome)
  }, [showWelcome])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight
    let animationId

    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.7,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      hue: 222 + Math.random() * 90,
      alpha: 0.22 + Math.random() * 0.2,
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

        if (particle.x < -60) particle.x = width + 60
        if (particle.x > width + 60) particle.x = -60
        if (particle.y < -60) particle.y = height + 60
        if (particle.y > height + 60) particle.y = -60

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 12,
        )
        gradient.addColorStop(0, `hsla(${particle.hue}, 90%, 72%, ${particle.alpha})`)
        gradient.addColorStop(1, 'transparent')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * 12, 0, Math.PI * 2)
        ctx.fill()
      })
      animationId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  const handleEnter = () => {
    if (!showWelcome) return
    setShowWelcome(false)
  }

  const downloadResume = () => {
    const resumeText = `Shashwath J Shetty\nFull Stack Developer\nEmail: shashwathjshetty@gmail.com\nPhone: +91 8792018224\n\nEducation:\nB.Tech Computer Science & Engineering (2023-2027) - NMAM Institute of Technology, Nitte\n\nSkills:\nC, C++, Java, Python, HTML, CSS, JavaScript, Spring Boot, MySQL, MongoDB\n\nExperience:\nSoftware Development Intern at Experimind Lab\n\nProjects:\n- Real-Time Chat Room\n- Car Rental Management System\n- Medical Insurance Prediction\n- Gaming & Gambling Industry Survey\n`
    const blob = new Blob([resumeText], { type: 'text/plain' })
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
    <div className="app-shell">
      <canvas ref={canvasRef} className="background-canvas" aria-hidden="true" />
      <div className="ambient-flares" aria-hidden="true" />

      {showWelcome && (
        <div className="welcome-screen">
          <div className="welcome-panel">
            <p className="welcome-label">Welcome</p>
            <h1>I'm Shashwath J Shetty</h1>
            <button className="enter-button" onClick={handleEnter}>
              Enter Portfolio
            </button>
          </div>
        </div>
      )}

      <div className={`page-wrapper ${showWelcome ? 'page-hidden' : 'page-visible'}`}>
        <header className="topbar">
          <div className="brand-block">
            <div className="brand-logo">SJ</div>
            <div>
              <strong>Shashwath J Shetty</strong>
              <span>Full Stack Developer</span>
            </div>
          </div>
          <nav className="topnav">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <main className="main-stage">
          <section id="hero" className="hero-section">
            <div className="hero-copy">
              <span className="eyebrow">Hello, I'm</span>
              <h2>Shashwath J Shetty</h2>
              <p className="hero-description">
                Computer Science Engineering Student | Full Stack Developer | Software Enthusiast
              </p>
              <div className="hero-actions">
                <button className="button primary" onClick={downloadResume}>
                  Download Resume
                </button>
                <a className="button ghost" href="#contact">
                  Hire Me
                </a>
                <a className="button ghost" href="https://github.com/ShashwathJShetty07" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="button ghost" href="https://linkedin.com/in/shashwath-j-shetty" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="button ghost" href="mailto:shashwathjshetty@gmail.com">
                  Email
                </a>
              </div>
            </div>

            <div className="hero-profile">
              <div className="profile-frame">
                <div className="profile-ring" />
                <div className="profile-glow" />
                <img className="profile-image" src={profileImage} alt="Shashwath J Shetty" />
              </div>
            </div>
          </section>

          <section id="about" className="section glass-card">
            <div className="section-head">
              <span>About</span>
              <h3>About Me</h3>
            </div>
            <p>
              I am pursuing B.Tech in Computer Science & Engineering at NMAM Institute of Technology,
              Nitte. I build polished web experiences, modern interfaces, and elegant animations.
            </p>
          </section>

          <section id="education" className="section glass-card">
            <div className="section-head">
              <span>Education</span>
              <h3>Academic Journey</h3>
            </div>
            <p>
              NMAM Institute of Technology, Nitte • B.Tech Computer Science & Engineering • 2023 - 2027
            </p>
            <p>CGPA: 6.84</p>
          </section>

          <section id="skills" className="section glass-card">
            <div className="section-head">
              <span>Skills</span>
              <h3>Technical Strengths</h3>
            </div>
            <div className="skill-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-pill">
                  <strong>{skill.name}</strong>
                  <span>{skill.level}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="section glass-card">
            <div className="section-head">
              <span>Projects</span>
              <h3>Highlighted Work</h3>
            </div>
            <div className="project-grid">
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

          <section id="contact" className="section glass-card contact-card">
            <div className="section-head">
              <span>Contact</span>
              <h3>Let's Connect</h3>
            </div>
            <p>If you want to collaborate or build something great, send a message or email me directly.</p>
            <div className="contact-links">
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
    </div>
  )
}

export default App
