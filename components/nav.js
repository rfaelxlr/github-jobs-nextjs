import Link from 'next/link'

const links = [
  { href: 'https://github.com/rfaelxlr', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/rafael-lima-34a039156/', label: 'Linkedln' },
]

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-between items-center p-4">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline text-xl md:text-5xl">GitHub Jobs</a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a href={href} className="btn-blue no-underline">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
