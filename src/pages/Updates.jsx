import { Link } from 'react-router'
import { formatUpdateDate, updates } from '../lib/updates.js'
import './Updates.css'

export default function Updates() {
  return (
    <section className="updates-page" aria-labelledby="updates-title">
      <header className="updates-heading">
        <h1 id="updates-title">Updates</h1>
        <p>Development notes from the world of Fallen Zenith.</p>
      </header>

      <div className="updates-grid">
        {updates.map((post) => (
          <Link className="update-card" to={`/updates/${post.slug}/`} key={post.slug}>
            <article>
              <time dateTime={post.date}>{formatUpdateDate(post.date)}</time>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <span aria-hidden="true">Read update</span>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
