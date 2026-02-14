import './App.css'
import { useState } from 'react';

function App(){

  const [showDesigns, setShowDesigns] = useState(false);
  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

  return (
    <div>

      {/* Header */}
      <h1 className="header">My Personal Portfolio</h1>

      {/* Navbar */}
      <nav className="navbar">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
       </ul>
      </nav>


      {/* Hero Section */}
      <section className="hero">

        <div className="hero-text">
          <h2>Hello, I'm Sriram</h2>
          <p className="role">Frontend Developer | Graphic Designer</p>

          <p className="intro">
            I am a passionate Frontend Developer and Creative Graphic Designer
            who enjoys building visually appealing, user-friendly digital
            experiences. I specialize in developing responsive web applications
            using React, JavaScript, HTML, and CSS, while also designing engaging
            visuals, branding materials, and UI layouts that enhance user
            interaction. I love combining creativity with technology to transform
            ideas into impactful digital solutions.
          </p>
        </div>

        <div className="hero-image">
          <img src="/profile.jpg" alt="profile"/>
        </div>

      </section>
      <section className="skills" id="skills">
  <h2>My Skills</h2>

  <div className="skills-grid">

    <div className="skill-card">
      <img src="/html5.png" alt="HTML"/>
      <h3>HTML</h3>
      <p>Expert</p>
    </div>

    <div className="skill-card">
      <img src="/CSS3.png" alt="CSS"/>
      <h3>CSS</h3>
      <p>Expert</p>
    </div>

    <div className="skill-card">
      <img src="/js.jpeg" alt="JavaScript"/>
      <h3>JavaScript</h3>
      <p>Intermediate</p>
    </div>

    <div className="skill-card">
      <img src="/java.png" alt="Java"/>
      <h3>Java</h3>
      <p>Intermediate</p>
    </div>

    <div className="skill-card">
      <img src="/react.png" alt="React"/>
      <h3>React</h3>
      <p>Beginner</p>
    </div>

    <div className="skill-card">
      <img src="/node.png" alt="Node"/>
      <h3>Node.js</h3>
      <p>Beginner</p>
    </div>

  </div>
</section>
<section className="projects" id="projects">
  <h2>My Projects</h2>

  <div className="projects-grid">

    <div className="project-card">
      <h3>Portfolio Website</h3>
      <p>I have build a small personal portfolio in my beginners stage by using HTML and CSS</p>
      <a
        href="https://232u1a33d1-project1.netlify.app/"
         target="_blank"
         rel="noopener noreferrer"
  className="btn"
>
  View Project
</a>

    </div>

    <div className="project-card">
      <h3>CSP Project</h3>
      <p>We conducted a survey on different OTT platforms and make a website for that</p>
      <a
        href="https://madhav2627.github.io/survey-on-different-ott-plathforms/"
         target="_blank"
         rel="noopener noreferrer"
  className="btn"
>
  View Project
</a>
    </div>

    <div className="project-card">
      <h3>Graphic Design Showcase</h3>
      <p>A collection of my posters, branding designs, and UI works.</p>
      <button className="btn" onClick={() => setShowDesigns(true)}>
  View Projects
</button>

    </div>

  </div>
</section>

<section className="contact" id="contact">
  <h2>Contact Me</h2>

  <p>Email: sriram@email.com</p>
  <p>Phone: +91-6304535145</p>

  <div className="contact-links">
    <a href="https://linkedin.com/in/Sri Ram" target="_blank">LinkedIn</a>
  </div>

  <div className="resume-buttons">

  <a href="/resume.pdf" className="btn" target="_blank">
    View Resume
  </a>

  <a href="/resume.pdf" className="btn" download>
    Download Resume
  </a>

</div>

</section>


{showDesigns && (
  <div className="design-overlay" onClick={() => setShowDesigns(false)}>

    <div className="design-popup" onClick={(e) => e.stopPropagation()}>
      <h2>Graphic Design Works</h2>

      <div className="designs-grid">
        <img src="/design1.png" alt="design"/>
        <img src="/design2.png" alt="design"/>
        <img src="/design3.png" alt="design"/>
        <img src="/design4.png" alt="design"/>
      </div>
    </div>

  </div>
)}
<button className="top-btn" onClick={scrollToTop}>
  ↑ Top
</button>


<footer className="footer">
  <p>© 2026 Sriram | All Rights Reserved</p>
</footer>


    </div>
  )
}

export default App
