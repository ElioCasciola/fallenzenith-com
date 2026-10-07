import { useEffect, useRef } from 'react'
import { Link, Navigate, Route, Routes, useLocation } from 'react-router'
import SiteLayout from './components/SiteLayout.jsx'
import Home from './pages/Home.jsx'
import Updates from './pages/Updates.jsx'
import UpdatePost from './pages/UpdatePost.jsx'
import Contacts from './pages/Contacts.jsx'
import ButtonStyles from './pages/ButtonStyles.jsx'

const titles = {
  '/': 'Fallen Zenith',
  '/updates': 'Updates — Fallen Zenith',
  '/contacts': 'Contacts — Fallen Zenith',
  '/button-styles': 'Button variations — Fallen Zenith',
}

export default function App() {
  const { pathname } = useLocation()
  const previousPath = useRef(pathname)
  useEffect(() => {
    const path = pathname.replace(/\/$/, '') || '/'
    document.title = titles[path] || 'Pagina non trovata — Fallen Zenith'
    document.documentElement.lang = path === '/button-styles' ? 'en' : 'it'
    if (previousPath.current !== pathname) {
      window.scrollTo(0, 0)
      document.getElementById('main')?.focus({ preventScroll: true })
    }
    previousPath.current = pathname
  }, [pathname])

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="updates" element={<Updates />} />
        <Route path="updates/:slug" element={<UpdatePost />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="contatti" element={<Navigate to="/contacts/" replace />} />
        <Route path="*" element={<div className="page"><h1>Pagina non trovata</h1><p><Link to="/">Torna alla Home</Link></p></div>} />
      </Route>
      <Route path="button-styles" element={<ButtonStyles />} />
    </Routes>
  )
}
