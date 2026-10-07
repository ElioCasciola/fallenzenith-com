const files = import.meta.glob('../content/updates/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

function parseFrontMatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, body: source }

  const data = {}
  match[1].split(/\r?\n/).forEach((line) => {
    const separator = line.indexOf(':')
    if (separator === -1) return
    const key = line.slice(0, separator).trim()
    const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, '')
    data[key] = value
  })

  return { data, body: match[2].trim() }
}

function slugFromPath(path) {
  return path.split('/').pop().replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '')
}

export const updates = Object.entries(files)
  .map(([path, source]) => {
    const { data, body } = parseFrontMatter(source)
    return {
      slug: data.slug || slugFromPath(path),
      title: data.title || 'Untitled update',
      date: data.date || '',
      excerpt: data.excerpt || '',
      body,
    }
  })
  .sort((a, b) => b.date.localeCompare(a.date))

export function getUpdate(slug) {
  return updates.find((post) => post.slug === slug)
}

export function formatUpdateDate(date) {
  if (!date) return ''
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(`${date}T12:00:00`))
}
