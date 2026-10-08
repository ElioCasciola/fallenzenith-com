import { useState } from 'react'
import { Link } from 'react-router'
import styles from './ButtonBackgrounds.module.css'

const variations = [
  ['Ember stone', 'Charcoal stone with a restrained red glow along the lower edge.', 'ember'],
  ['Blackened bronze', 'Dark metal with fine grain and a muted bronze sheen.', 'bronze'],
  ['Obsidian glass', 'A glossy black surface with a soft diagonal reflection.', 'obsidian'],
  ['Crimson velvet', 'Deep wine red, with a soft pool of light in the center.', 'velvet'],
  ['Weathered leather', 'Warm dark brown with a subtle grain and worn edges.', 'leather'],
  ['Ash marble', 'Smoky grey stone crossed by faint diagonal veins.', 'marble'],
  ['Smoked umber', 'Near-black brown with a soft warm center.', 'parchment'],
  ['Forged iron', 'Cool gunmetal, fine ridges, and a dim red seam.', 'iron'],
  ['Midnight embers', 'A few tiny gold sparks suspended over deep black.', 'sparks'],
  ['Blood moon', 'A soft crimson halo fading into near-black.', 'moon'],
]

function Sample({ variation: [title, description, background], number }) {
  const [selected, setSelected] = useState(null)
  return (
    <section className={styles.sample}>
      <div className={styles.caption}>
        <span>{String(number).padStart(2, '0')}</span>
        <div><h2>{title}</h2><p>{description}</p></div>
      </div>
      <div className={`${styles.buttons} ${styles[background]}`} role="group" aria-label={`${title} previews`}>
        {['Home', 'Updates', 'Contacts'].map(label => (
          <button key={label} type="button" aria-pressed={selected === label} onClick={() => setSelected(selected === label ? null : label)}>
            <span>{label}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default function ButtonBackgrounds() {
  return (
    <div className={styles.showcase}>
      <header className={styles.header}>
        <Link to="/contacts/" className={styles.back}>← Back to Contacts</Link>
        <p className={styles.eyebrow}>Fallen Zenith · Background studies</p>
        <h1>10 dark button backgrounds</h1>
        <p className={styles.intro}>Hover to see the glow. Click Home, Updates, or Contacts to preview its active state.</p>
        <p className={styles.recommendation}>My picks: 01 Ember stone for the closest match, 03 Obsidian glass for a cleaner finish, or 04 Crimson velvet for richer color.</p>
      </header>
      <main id="main" tabIndex={-1} className={styles.grid}>
        {variations.map((variation, i) => <Sample key={variation[2]} variation={variation} number={i + 1} />)}
      </main>
      <footer className={styles.footer}>Choose a background by its number.</footer>
    </div>
  )
}
