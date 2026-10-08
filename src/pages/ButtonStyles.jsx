import { useRef, useState } from 'react'
import { Link } from 'react-router'
import logo from '../assets/logo.webp'
import styles from './ButtonStyles.module.css'
import spearFrame from '../assets/sovereign-spear.svg'
import wingsFrame from '../assets/sovereign-wings.svg'
import crownFrame from '../assets/sovereign-crown.svg'
import archFrame from '../assets/sovereign-arch.svg'
import bladesFrame from '../assets/sovereign-blades.svg'
import altarFrame from '../assets/sovereign-altar.svg'
import ovalFrame from '../assets/sovereign-oval.svg'
import barbedFrame from '../assets/sovereign-barbed.svg'
import reliquaryFrame from '../assets/sovereign-reliquary.svg'
import shieldFrame from '../assets/sovereign-shield.svg'

const labels = ['Home', 'Updates', 'Contacts']
const boldVariations = [
  { name: 'Sunforged', detail: 'Thick gilded points around a substantial black core.', style: 'zenith', family: 'Gilded armor' },
  { name: 'Imperial slab', detail: 'Heavy double gold borders, like a royal nameplate.', style: 'relic', family: 'Gilded armor' },
  { name: 'Warplate', detail: 'Clipped corners, a bronze bevel, and dark forged steel.', style: 'forge', family: 'Forged metal', pick: true },
  { name: 'Gothic gate', detail: 'A heavy arched frame with a carved inner molding.', style: 'cathedral', family: 'Carved stone' },
  { name: 'Inferno', detail: 'A bold gold rim and a deep crimson lower bevel.', style: 'ember', family: 'Ember & blood' },
  { name: 'Winged crest', detail: 'Broad pointed ends with engraved diagonal metalwork.', style: 'wingtip', family: 'Gilded armor' },
  { name: 'Runeplate', detail: 'Thick gold corner brackets on a solid stone tablet.', style: 'runes', family: 'Carved stone' },
  { name: 'Royal bronze', detail: 'A raised bronze frame with bright diamond studs.', style: 'tablet', family: 'Gilded armor', pick: true },
  { name: 'Obsidian crown', detail: 'Glossy black material surrounded by a chunky gold bevel.', style: 'obsidian', family: 'Forged metal' },
  { name: 'Volcanic slate', detail: 'Gold-capped edges and sharply fractured charcoal stone.', style: 'fractured', family: 'Carved stone' },
  { name: 'Bloodseal', detail: 'A thick stamped gold edge around dark red wax.', style: 'wax', family: 'Ember & blood' },
  { name: 'Celestial bronze', detail: 'A substantial gilded frame around midnight-blue metal.', style: 'astral', family: 'Forged metal' },
  { name: 'Reliquary', detail: 'A heavy rounded clasp with layered bronze molding.', style: 'scroll', family: 'Gilded armor' },
  { name: 'Swordguard', detail: 'A sharp, broad blade shape with a thick gold edge.', style: 'blade', family: 'Forged metal' },
  { name: 'Crownseal', detail: 'A large gold diamond crowning a richly framed plaque.', style: 'crest', family: 'Gilded armor', pick: true },
  { name: 'Ritual seal', detail: 'A heavy oval of aged gold enclosing a garnet inset.', style: 'ritual', family: 'Ember & blood' },
  { name: 'Fortress', detail: 'Wide gold pillars enclosing a recessed black panel.', style: 'citadel', family: 'Carved stone' },
  { name: 'Carved monolith', detail: 'A broad stone slab with engraved gold lettering.', style: 'inscription', family: 'Carved stone' },
  { name: 'Brass bands', detail: 'Thick gold rails and a dark, deeply recessed center.', style: 'thread', family: 'Forged metal' },
  { name: 'Golden relic', detail: 'The richly illustrated gold-and-ember fantasy frame.', style: 'ancient', family: 'Gilded armor', pick: true },
]


const relicVariations = [
  { name: 'Original relic', detail: 'The original bright gold frame and ember-cracked stone.', style: 'ancient', family: 'Reference · Number 20' },
  { name: 'Dark sovereign', detail: 'Deeper gold and a darker stone face, with the carved detail intact.', style: 'relicDark', family: 'Dark gold', pick: true },
  { name: 'Antique gold', detail: 'Muted aged gold, with quieter cracks and a weathered finish.', style: 'relicAntique', family: 'Aged metal', pick: true },
  { name: 'Moonlit gold', detail: 'Pale champagne gold on charcoal, with almost no red.', style: 'relicMoon', family: 'Pale gold' },
  { name: 'Blackened bronze', detail: 'Heavy, dark bronze with a nearly black volcanic center.', style: 'relicBronze', family: 'Dark bronze' },
  { name: 'Bloodfire', detail: 'Richer copper and vivid crimson fissures in the stone.', style: 'relicBlood', family: 'Crimson & copper' },
  { name: 'Froststeel', detail: 'Cold silver metal and blue fissures, keeping the same silhouette.', style: 'relicFrost', family: 'Silver & ice' },
  { name: 'Verdant relic', detail: 'Old brass with a green magical glow in the cracks.', style: 'relicVerdant', family: 'Brass & emerald' },
  { name: 'Twilight relic', detail: 'A subdued violet cast for a darker arcane direction.', style: 'relicTwilight', family: 'Arcane metal' },
  { name: 'Gilded shadow', detail: 'Desaturated gold, a crisp carved edge, and restrained light.', style: 'relicShadow', family: 'Gold & shadow', pick: true },
]

const sovereignVariations = [
  { name: 'Royal spear', detail: 'Long spear tips and a layered, pointed gold surround.', style: 'sovereign', family: 'Dark sovereign palette', asset: spearFrame, pick: true },
  { name: 'Winged sovereign', detail: 'Swept wings at both ends, with engraved feather ribs.', style: 'sovereign', family: 'Dark sovereign palette', asset: wingsFrame, pick: true },
  { name: 'Crowned throne', detail: 'A high central crown and flared ornamental corners.', style: 'sovereign', family: 'Dark sovereign palette', asset: crownFrame, pick: false },
  { name: 'Cathedral arch', detail: 'A bowed gothic top, dark stone, and pointed side clasps.', style: 'sovereign', family: 'Dark sovereign palette', asset: archFrame, pick: false },
  { name: 'Twin blades', detail: 'Two sweeping blades enclosing a recessed stone tablet.', style: 'sovereign', family: 'Dark sovereign palette', asset: bladesFrame, pick: false },
  { name: 'Runic altar', detail: 'An octagonal slab with thick corner plates and carved marks.', style: 'sovereign', family: 'Dark sovereign palette', asset: altarFrame, pick: false },
  { name: 'Imperial medallion', detail: 'An oval frame with sculpted gold clasps at both sides.', style: 'sovereign', family: 'Dark sovereign palette', asset: ovalFrame, pick: false },
  { name: 'Barbed relic', detail: 'Aggressive barbed corners and a sharp central crest.', style: 'sovereign', family: 'Dark sovereign palette', asset: barbedFrame, pick: false },
  { name: 'Sacred reliquary', detail: 'A carved rectangular frame with scrollwork and central seals.', style: 'sovereign', family: 'Dark sovereign palette', asset: reliquaryFrame, pick: true },
  { name: 'Fallen crest', detail: 'A faceted shield plaque with a downward crest and diamond studs.', style: 'sovereign', family: 'Dark sovereign palette', asset: shieldFrame, pick: false },
]

function Buttons({ variation, large = false }) {
  const [active, setActive] = useState('Home')
  return (
    <div className={`${styles.buttons} ${large ? styles.large : ''}`} role="group" aria-label={`${variation.name} navigation preview`}>
      {labels.map(label => (
        <button type="button" key={label} aria-label={label} className={`${styles.button} ${styles[variation.style]} ${relicVariations.includes(variation) ? styles.ancient : ''}`} style={variation.asset ? { '--sovereign-frame': `url("${variation.asset}")` } : undefined} aria-pressed={active === label} onClick={() => setActive(label)}>
          <span className={styles.label}>{label}</span>
        </button>
      ))}
    </div>
  )
}

export default function ButtonStyles() {
  const [collection, setCollection] = useState('sovereign')
  const [chosen, setChosen] = useState(0)
  const variations = collection === 'sovereign' ? sovereignVariations : collection === 'relic' ? relicVariations : boldVariations
  function changeCollection(value) { setCollection(value); setChosen(value === 'bold' ? 19 : value === 'relic' ? 1 : 0) }
  const [backdrop, setBackdrop] = useState('site')
  const hero = useRef(null)
  function preview(index) {
    setChosen(index)
    hero.current?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
  }
  return (
    <div className={styles.showcase}>
      <header className={styles.header}>
        <Link to="/" className={styles.back}>← Back to Fallen Zenith</Link>
        <p className={styles.eyebrow}>Gold · Stone · Ember</p>
        <h1>{collection === 'sovereign' ? '10 designs for Dark sovereign' : collection === 'relic' ? '10 variations of Golden relic' : '20 bolder directions for Fallen Zenith'}</h1>
        <p className={styles.intro}>{collection === 'sovereign' ? 'Dark gold, charcoal stone, and muted ember. Ten different silhouettes, carved frames, and ornaments in your chosen palette.' : collection === 'relic' ? 'Number 20, refined: the same illustrated frame in different metal finishes and dark tones. Compare each one against the game artwork.' : 'Heavier gold frames, carved edges, and stronger lettering. Pick a style to see the three buttons against the game artwork.'}</p>
        <div className={styles.collection} role="group" aria-label="Style collection">
          <button type="button" aria-pressed={collection === 'sovereign'} onClick={() => changeCollection('sovereign')}>Dark sovereign designs</button>
          <button type="button" aria-pressed={collection === 'relic'} onClick={() => changeCollection('relic')}>Golden relic variations</button>
          <button type="button" aria-pressed={collection === 'bold'} onClick={() => changeCollection('bold')}>Previous 20 styles</button>
        </div>
      </header>
      <section ref={hero} className={styles.hero} aria-label="Chosen style in context">
        <div className={styles.heroCaption}><span>{String(chosen + 1).padStart(2, '0')} — {variations[chosen].name}</span><span>Preview</span></div>
        <Buttons key={`${collection}-${chosen}`} variation={variations[chosen]} large />
        <img src={logo} alt="Fallen Zenith" width="640" height="427" />
      </section>
      <div className={styles.toolbar}>
        <p>My shortlist: <strong>{collection === 'sovereign' ? '01 Royal spear · 02 Winged sovereign · 09 Sacred reliquary' : collection === 'relic' ? '02 Dark sovereign · 03 Antique gold · 10 Gilded shadow' : '03 Warplate · 08 Royal bronze · 15 Crownseal · 20 Golden relic'}</strong></p>
        <div role="group" aria-label="Comparison background">
          <button type="button" aria-pressed={backdrop === 'site'} onClick={() => setBackdrop('site')}>Site background</button>
          <button type="button" aria-pressed={backdrop === 'plain'} onClick={() => setBackdrop('plain')}>Plain background</button>
        </div>
      </div>
      <main id="main" tabIndex={-1} className={styles.grid}>
        {variations.map((variation, index) => (
          <section key={variation.name} className={`${styles.sample} ${backdrop === 'site' ? styles.siteSample : ''} ${chosen === index ? styles.chosen : ''}`}>
            <div className={styles.caption}>
              <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
              <div><p className={styles.family}>{variation.family}{variation.pick ? ' · Shortlist' : ''}</p><h2>{variation.name}</h2><p className={styles.detail}>{variation.detail}</p></div>
            </div>
            <Buttons variation={variation} />
            <button className={styles.preview} type="button" aria-pressed={chosen === index} onClick={() => preview(index)} aria-label={`Preview ${variation.name} above`}>{chosen === index ? 'Showing above' : 'Preview above'} <span aria-hidden="true">↑</span></button>
          </section>
        ))}
      </main>
      <footer className={styles.footer}>Hover or focus for the glow. Click a navigation button to compare its active state.</footer>
    </div>
  )
}
