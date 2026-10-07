import { useState } from 'react'
import contactFeather from '../assets/contact-feather.png'
import contactSeal from '../assets/contact-wax-seal.png'
import './Contacts.css'

const email = 'elio.casciola@gmail.com'

export default function Contacts() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <section className="contacts-page" aria-labelledby="contacts-title">
      <div className="contacts-plaque">
        <img className="contacts-feather" src={contactFeather} alt="" aria-hidden="true" />

        <div className="contacts-content">
          <h1 id="contacts-title">Contacts</h1>
          <div className="contacts-divider" aria-hidden="true"><span /></div>

          <p className="contacts-lead">Want to talk about Fallen Zenith?</p>
          <p className="contacts-description">
            For questions, collaborations, or updates about the project, get in touch.
          </p>

          <div className="contacts-email">
            <code>
              elio.casciola <span aria-hidden="true">[at]</span><span className="sr-only">chiocciola</span>{' '}
              gmail <span aria-hidden="true">[dot]</span><span className="sr-only">punto</span> com
            </code>
            <button type="button" onClick={copyEmail}>{copied ? 'Copied' : 'Copy'}</button>
          </div>

          <p className="sr-only" aria-live="polite">
            {copied ? 'Email address copied.' : ''}
          </p>

          <div className="contacts-links">
            <a href="https://github.com/ElioCasciola" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/eliocasciola/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <img className="contacts-seal" src={contactSeal} alt="" aria-hidden="true" />
      </div>
    </section>
  )
}
