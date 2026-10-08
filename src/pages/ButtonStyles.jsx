import { useState } from 'react'
import { Link } from 'react-router'
import styles from './ButtonStyles.module.css'
import logo from '../assets/logo.webp'

const variations = [
  ['Fine lancet', 'Pointed ends, a single gold rim, near-black fill.', 'lancet'],
  ['Double rim', 'Two fine gold lines enclosing a charcoal surface.', 'doubleRim'],
  ['Beveled plaque', 'A small metallic bevel over dark graphite.', 'bevel'],
  ['Gothic arch', 'A gently arched top with a muted bronze border.', 'arch'],
  ['Engraved stone', 'Inset lettering and small gold corner details.', 'engraved'],
  ['Iron plate', 'Gunmetal edge, dark fill, and small brass rivets.', 'ironPlate'],
  ['Diamond tabs', 'A simple dark panel with gold diamonds at its sides.', 'diamondTabs'],
  ['Clipped plaque', 'Eight clipped corners and a restrained gold edge.', 'chamfer'],
  ['Gold rails', 'Open sides with slim gold lines above and below.', 'rails'],
  ['Garnet inset', 'A dark inset framed in gold with a faint crimson seam.', 'garnet'],
]

function Sample({ variation: [title, description, style], number }) {
  const [selected, setSelected] = useState(null)
  return (
    <section className={styles.sample}>
      <div className={styles.caption}>
        <span>{String(number).padStart(2, '0')}</span>
        <div><h2>{title}</h2><p>{description}</p></div>
      </div>
      <div className={styles.buttons + ' ' + styles[style]} role="group" aria-label={title + ' button previews'}>
        {['Home', 'Updates', 'Contacts'].map(label => (
          <button key={label} type="button" aria-pressed={selected === label} onClick={() => setSelected(selected === label ? null : label)}>{label}</button>
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
        <h1>10 more dark button styles</h1>
        <p>Click a button to preview its selected state. Hover or focus to compare.</p>
      </header>
      <main id="main" tabIndex={-1}>
        {variations.map((variation, i) => <Sample key={variation[2]} variation={variation} number={i + 1} />)}
      </main>
      <footer>Choose a style by its number.</footer>
    </div>
  )
}
