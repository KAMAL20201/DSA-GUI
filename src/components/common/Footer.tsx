import { Github, Heart } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            Built with <Heart size={16} className="heart-icon" /> for Engineers Learning DSA
          </p>
          <div className="footer-links">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
          <p className="footer-copyright">
            © {currentYear} DSA GUI. Open Source Project.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
