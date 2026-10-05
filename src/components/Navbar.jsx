import { NavLink } from 'react-router'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/updates/', label: 'Updates' },
  { to: '/contatti/', label: 'Contacts' },
]

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Navigazione principale">
        {links.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end}>{label}</NavLink>
        ))}
      </nav>
    </header>
  )
}
