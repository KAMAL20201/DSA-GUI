import './AboutPage.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container">
        <header className="page-header">
          <h1>About DSA GUI</h1>
        </header>

        <section className="about-content">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              DSA GUI is designed to help engineers and students master Data Structures
              and Algorithms through interactive visualizations. We believe that visual
              learning is the key to understanding complex concepts.
            </p>
          </div>

          <div className="about-section">
            <h2>Features</h2>
            <ul className="features-list">
              <li>Interactive visualizations of data structures</li>
              <li>Step-by-step algorithm execution</li>
              <li>Code synchronization with visualizations</li>
              <li>Multiple programming language support</li>
              <li>Practice problems and challenges</li>
              <li>Dark/Light theme support</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Technology Stack</h2>
            <p>
              Built with React, TypeScript, D3.js, and React Flow for the best
              visualization experience.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage
