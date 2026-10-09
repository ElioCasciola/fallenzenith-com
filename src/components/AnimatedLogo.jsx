import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import loop from '../assets/fallen-zenith-loop.mp4'
import fallback from '../assets/fallen-zenith-loop-fallback.webp'
import poster from '../assets/fallen-zenith-poster.webp'
import styles from './AnimatedLogo.module.css'

function subscribeMotion(callback) {
  const query = window.matchMedia('(prefers-reduced-motion: reduce)')
  query.addEventListener('change', callback)
  return () => query.removeEventListener('change', callback)
}
const getMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function AnimatedLogo({ alt = 'Fallen Zenith', blendMode = 'screen', onLoad }) {
  const reducedMotion = useSyncExternalStore(subscribeMotion, getMotion, () => true)
  const video = useRef(null)
  const [playback, setPlayback] = useState('loading')

  useEffect(() => {
    const element = video.current
    if (!element || reducedMotion) return
    let mounted = true
    element.defaultMuted = true
    element.muted = true
    element.playsInline = true
    element.play().catch(() => { if (mounted) setPlayback('fallback') })
    return () => { mounted = false; element.pause() }
  }, [reducedMotion])

  return (
    <span role="img" aria-label={alt} className={`${styles.logo} ${!reducedMotion && playback === 'playing' ? styles.playing : ''}`} style={{ '--logo-blend': blendMode }}>
      <img className={styles.poster} src={!reducedMotion && playback === 'fallback' ? fallback : poster} alt="" aria-hidden="true" width="800" height="534" decoding="async" onLoad={onLoad} />
      {!reducedMotion && playback !== 'fallback' && (
        <video ref={video} className={styles.video} src={loop} autoPlay muted playsInline loop preload="auto" width="800" height="534" aria-hidden="true" disablePictureInPicture
          onPlaying={() => setPlayback('playing')} onError={() => setPlayback('fallback')} />
      )}
    </span>
  )
}
