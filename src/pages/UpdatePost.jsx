import { Link, useParams } from 'react-router'
import Markdown from '../components/Markdown.jsx'
import { formatUpdateDate, getUpdate } from '../lib/updates.js'
import './Updates.css'

export default function UpdatePost() {
  const { slug } = useParams()
  const post = getUpdate(slug)

  if (!post) {
    return <div className="page"><h1>Update not found</h1><p><Link to="/updates/">Back to updates</Link></p></div>
  }

  return (
    <article className="update-post">
      <Link className="update-back" to="/updates/">← All updates</Link>
      <header>
        <time dateTime={post.date}>{formatUpdateDate(post.date)}</time>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
      </header>
      <div className="update-body">
        <Markdown source={post.body} />
      </div>
    </article>
  )
}
