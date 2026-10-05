import { useState } from 'react'
import { Link } from 'react-router'
import styles from './ButtonStyles.module.css'
import logo from '../assets/logo.webp'

const variations = [
  ['Classic', 'Bronze frame, dark fill.', 'classic'],
  ['Cut corners', 'Angled edges, gold rim.', 'cut'],
  ['Capsule', 'Rounded, dark crimson.', 'capsule'],
  ['Oval', 'A softer, wider silhouette.', 'oval'],
  ['Lettering only', 'Gold type, no frame.', 'type'],
  ['Underline', 'A fine red line.', 'underline'],
  ['Brackets', 'Open sides, no box.', 'brackets'],
  ['Ribbon', 'Pointed ends, solid gold.', 'ribbon'],
  ['Open corners', 'Four small corner marks.', 'corners'],
  ['Medallion', 'Circular, with a fine rim.', 'medallion'],
]

function Sample({ variation: [title, description, style], number }) {
  const [selected, setSelected] = useState('Home')
  return (
    <section className={styles.sample}>
      <div className={styles.caption}>
        <span>{String(number).padStart(2, '0')}</span>
        <div><h2>{title}</h2><p>{description}</p></div>
      </div>
      <div className={styles.buttons + ' ' + styles[style]} role="group" aria-label={title + ' button previews'}>
        {['Home', 'Updates', 'Contatti'].map(label => (
          <button key={label} type="button" aria-pressed={selected === label} onClick={() => setSelected(label)}>{label}</button>
        ))}
      </div>
    </section>
  )
}

export default function ButtonStyles() {
  return (
    <div className={styles.showcase}>
      <header>
        <Link to="/" className={styles.back}>← Back to the site</Link>
        <img src={logo} width="640" height="427" alt="Fallen Zenith" />
        <h1>10 button variations</h1>
        <p>Click a button to preview its selected state. Hover or focus to compare.</p>
      </header>
      <main id="main" tabIndex={-1}>
        {variations.map((variation, i) => <Sample key={variation[2]} variation={variation} number={i + 1} />)}
      </main>
      <footer>Choose a style by its number.</footer>
    </div>
  )
}
