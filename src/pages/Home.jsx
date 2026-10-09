import AnimatedLogo from '../components/AnimatedLogo.jsx'
import contactFrame from '../assets/contact-panel-frame.webp'
import contactFeather from '../assets/contact-feather.webp'
import contactSeal from '../assets/contact-wax-seal.webp'
import './Home.css'

// Keep decoded images available across client-side navigation.
const warmedImages = new Map()

function preloadPageArtwork() {
  for (const source of [contactFrame, contactFeather, contactSeal]) {
    if (warmedImages.has(source)) continue
    const image = new Image()
    image.fetchPriority = 'low'
    image.decoding = 'async'
    image.onerror = () => warmedImages.delete(source)
    warmedImages.set(source, image)
    image.src = source
    if (typeof image.decode === 'function') {
      image.decode().catch(() => warmedImages.delete(source))
    }
  }
}

export default function Home() {
  return (
    <div className="home">
      <h1 className="home-logo">
        <AnimatedLogo onLoad={preloadPageArtwork} />
      </h1>
    </div>
  )
}