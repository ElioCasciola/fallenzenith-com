import { Fragment } from 'react'

function renderInline(text, keyPrefix) {
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g
  const parts = text.split(pattern).filter(Boolean)

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={key}>{part.slice(2, -2)}</strong>
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={key}>{part.slice(1, -1)}</em>
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={key}>{part.slice(1, -1)}</code>
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      const external = /^https?:\/\//.test(link[2])
      return <a key={key} href={link[2]} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>{link[1]}</a>
    }
    return <Fragment key={key}>{part}</Fragment>
  })
}

export default function Markdown({ source }) {
  const lines = source.trim().split(/\r?\n/)
  const blocks = []
  let index = 0

  while (index < lines.length) {
    const line = lines[index].trim()
    if (!line) {
      index += 1
      continue
    }

    const heading = line.match(/^(#{2,4})\s+(.+)$/)
    if (heading) {
      const level = heading[1].length
      const Tag = `h${level}`
      blocks.push(<Tag key={`heading-${index}`}>{renderInline(heading[2], `heading-${index}`)}</Tag>)
      index += 1
      continue
    }

    if (line.startsWith('- ')) {
      const items = []
      while (index < lines.length && lines[index].trim().startsWith('- ')) {
        items.push(lines[index].trim().slice(2))
        index += 1
      }
      blocks.push(<ul key={`list-${index}`}>{items.map((item, itemIndex) => <li key={item}>{renderInline(item, `list-${index}-${itemIndex}`)}</li>)}</ul>)
      continue
    }

    if (line.startsWith('> ')) {
      blocks.push(<blockquote key={`quote-${index}`}>{renderInline(line.slice(2), `quote-${index}`)}</blockquote>)
      index += 1
      continue
    }

    if (line === '---') {
      blocks.push(<hr key={`rule-${index}`} />)
      index += 1
      continue
    }

    const paragraph = [line]
    index += 1
    while (index < lines.length && lines[index].trim() && !/^(#{2,4})\s|^-\s|^>\s|^---$/.test(lines[index].trim())) {
      paragraph.push(lines[index].trim())
      index += 1
    }
    const text = paragraph.join(' ')
    blocks.push(<p key={`paragraph-${index}`}>{renderInline(text, `paragraph-${index}`)}</p>)
  }

  return blocks
}
