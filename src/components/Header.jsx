import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

export default function Header() {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/about">About</Link>
        <button className="theme-toggle" onClick={toggleTheme}>
          🌓
        </button>
      </nav>
    </header>
  )
}
