import { Outlet } from 'react-router'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import './SiteLayout.css'

export default function SiteLayout() {
  // The #main target exists below; JSX anchor resolution can miss it.
  //noinspection HtmlUnknownAnchorTarget
  return (
    <div className="site-layout">
      <a className="skip" href="#main">Vai al contenuto</a>
      <Navbar />
      <main id="main" className="site-main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
