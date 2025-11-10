import { Link, NavLink } from 'react-router-dom'
import { Code2, Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <Code2 size={28} />
            <span className="logo-text">DSA GUI</span>
          </Link>

          <nav className="nav">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Home
            </NavLink>
            <NavLink to="/data-structures" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Data Structures
            </NavLink>
            <NavLink to="/algorithms" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Algorithms
            </NavLink>
            <NavLink to="/playground" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Playground
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              About
            </NavLink>
          </nav>

          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
