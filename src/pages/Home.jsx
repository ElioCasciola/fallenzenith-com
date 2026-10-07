import logo from '../assets/logo-home-static.webp'
import animatedLogo from '../assets/logo-home-particles.webp'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <h1 className="home-logo">
        <picture>
          <source media="(prefers-reduced-motion: reduce)" srcSet={logo} />
          <img src={animatedLogo} width="1280" height="854" alt="Fallen Zenith" fetchPriority="high" decoding="async" />
        </picture>
      </h1>
    </div>
  )
}
