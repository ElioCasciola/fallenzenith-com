import logo from '../assets/logo.webp'
import './Home.css'

const embers = [
  [34, 29, 5, -1.8, 3.1, -12],
  [39, 25, 4, -0.3, 2.8, 10],
  [45, 30, 7, -2.4, 3.5, -9],
  [49, 22, 4, -1.1, 3.0, 8],
  [54, 28, 6, -0.8, 3.6, -14],
  [60, 25, 4, -2.7, 2.9, 12],
  [65, 29, 5, -1.5, 3.4, -7],
  [70, 24, 3, -0.5, 2.7, 10],
  [77, 30, 6, -2.1, 3.7, -12],
  [83, 26, 4, -1.3, 3.2, 8],
  [31, 51, 4, -2.9, 3.4, -10],
  [37, 58, 3, -1.4, 2.6, 11],
  [49, 52, 4, -0.2, 3.1, -7],
  [60, 55, 3, -2.3, 2.8, 9],
  [72, 52, 4, -1.0, 3.5, -12],
  [86, 54, 3, -2.5, 3.0, 8],
]

export default function Home() {
  return (
    <div className="home">
      <h1 className="home-logo">
        <img src={logo} width="640" height="427" alt="Fallen Zenith" fetchPriority="high" decoding="async" />
        <span className="logo-embers" aria-hidden="true">
          {embers.map(([x, y, size, delay, duration, drift], index) => (
            <span
              className="logo-ember"
              key={index}
              style={{
                '--x': `${x}%`,
                '--y': `${y}%`,
                '--size': `${size}px`,
                '--delay': `${delay}s`,
                '--duration': `${duration}s`,
                '--drift': `${drift}px`,
              }}
            />
          ))}
        </span>
      </h1>
      <p>Un RPG 2D HD. In sviluppo.</p>
    </div>
  )
}
