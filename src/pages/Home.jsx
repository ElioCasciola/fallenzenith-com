import logo from '../assets/logo.webp'
import animatedLogo from '../assets/logo-particles-60fps.webp'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <h1 className="home-logo">
        <picture>
          <source media="(prefers-reduced-motion: reduce)" srcSet={logo} />
          <img src={animatedLogo} width="640" height="427" alt="Fallen Zenith" fetchPriority="high" decoding="async" />
        </picture>
      </h1>
      <p>Un RPG 2D HD. In sviluppo.</p>
    </div>
  )
}
