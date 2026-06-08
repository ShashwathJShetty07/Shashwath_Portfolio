import { useState } from 'react'
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
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('Thanks! Your message has been received.')
    event.currentTarget.reset()
  }

  return (
    <div className="portfolio-app">
      <header className="portfolio-header">
        <div className="brand">
          <div className="logo">SJ</div>
          <div>
            <strong>Shashwath J Shetty</strong>
            <p>Full Stack Developer</p>
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
        <section id="hero" className="section hero-section">
          <div className="hero-copy">
            <span className="section-label">Welcome</span>
            <h1>I'm Shashwath J Shetty</h1>
            <p>
              Computer Science Engineering Student | Full Stack Developer | Problem Solver | Tech
              Enthusiast.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="mailto:shashwathjshetty@gmail.com">
                Email
              </a>
              <a className="button button-secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={profileImage} alt="Shashwath J Shetty" />
          </div>
        </section>

        <section id="about" className="section">
          <span className="section-label">About</span>
          <h2>About Me</h2>
          <p>
            I am pursuing B.Tech in Computer Science & Engineering at NMAM Institute of Technology,
            Nitte. I focus on building modern web experiences, scalable systems, and strong user
            interactions.
          </p>
          <div className="summary-cards">
            <div className="card">
              <strong>Experience</strong>
              <p>Software Development Intern at Experimind Lab</p>
            </div>
            <div className="card">
              <strong>Education</strong>
              <p>B.Tech CSE — NMAMIT, 2023–2027</p>
            </div>
            <div className="card">
              <strong>Activities</strong>
              <p>ACE Member, Hacker Club, Earth Club, NSS Volunteer</p>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <span className="section-label">Education</span>
          <h2>Academic Journey</h2>
          <div className="info-grid">
            <div className="info-card">
              <strong>B.Tech Computer Science & Engineering</strong>
              <p>NMAM Institute of Technology, Nitte</p>
              <p>2023–2027 • CGPA: 6.84</p>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <span className="section-label">Skills</span>
          <h2>Core Technical Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <div>
                  <strong>{skill.name}</strong>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: skill.level }} />
                </div>
                <span>{skill.level}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <span className="section-label">Projects</span>
          <h2>Highlighted Work</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <span className="section-label">Contact</span>
          <h2>Let's Connect</h2>
          <div className="contact-layout">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Name
                <input name="name" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="Your email" required />
              </label>
              <label>
                Message
                <textarea name="message" placeholder="Your message" required rows="5" />
              </label>
              <button className="button button-primary" type="submit">
                Send Message
              </button>
              {message && <p className="form-message">{message}</p>}
            </form>
            <aside className="contact-card">
              <h3>Get in touch</h3>
              <p>
                <strong>Email:</strong> shashwathjshetty@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +91 8792018224
              </p>
              <p>
                <strong>GitHub:</strong>{' '}
                <a href="https://github.com/ShashwathJShetty07" target="_blank" rel="noreferrer">
                  /ShashwathJShetty07
                </a>
              </p>
              <p>
                <strong>LinkedIn:</strong>{' '}
                <a href="https://linkedin.com/in/shashwath-j-shetty" target="_blank" rel="noreferrer">
                  /in/shashwath-j-shetty
                </a>
              </p>
            </aside>
          </div>
        </section>
      </main>

      <footer className="portfolio-footer">
        © {new Date().getFullYear()} Shashwath J Shetty • Built with care
      </footer>
    </div>
  )
}

export default App
