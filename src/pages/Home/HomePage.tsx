import { Link } from 'react-router-dom'
import { Layers, Zap, Code, BookOpen } from 'lucide-react'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Master Data Structures & Algorithms
            <span className="hero-gradient"> Visually</span>
          </h1>
          <p className="hero-subtitle">
            Interactive visualizations and step-by-step animations to help you understand
            complex DSA concepts with ease
          </p>
          <div className="hero-cta">
            <Link to="/data-structures" className="btn btn-primary">
              Explore Data Structures
            </Link>
            <Link to="/algorithms" className="btn btn-secondary">
              View Algorithms
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose DSA GUI?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Layers size={32} />
              </div>
              <h3>Interactive Visualizations</h3>
              <p>
                Watch data structures and algorithms come to life with beautiful,
                interactive animations
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3>Step-by-Step Execution</h3>
              <p>
                Control the pace of learning with play, pause, and step controls
                for every operation
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Code size={32} />
              </div>
              <h3>Code Synchronization</h3>
              <p>
                See how code executes in real-time, synchronized with visual
                representations
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <BookOpen size={32} />
              </div>
              <h3>Comprehensive Learning</h3>
              <p>
                From basic arrays to advanced graph algorithms, we've got you covered
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Learning?</h2>
          <p>Join thousands of engineers mastering DSA through visualization</p>
          <Link to="/playground" className="btn btn-primary btn-lg">
            Try Playground
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
