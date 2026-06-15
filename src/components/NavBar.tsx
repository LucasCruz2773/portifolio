import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const links = [
  { id: 1, text: 'home' },
  { id: 2, text: 'about' },
  { id: 3, text: 'portfolio' },
  { id: 4, text: 'experience' },
]

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-xl border-b border-border shadow-lg shadow-black/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="site-container flex justify-between items-center h-16 md:h-20">
        <Link to="home" smooth duration={500} className="cursor-pointer group">
          <span className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
            Lucas<span className="text-accent">.</span>
          </span>
        </Link>

        <ul className="hidden md:flex gap-8">
          {links.map(({ id, text }) => (
            <li key={id}>
              <Link to={text} smooth duration={500} className="site-nav-link">
                {text}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setNav(!nav)}
          className="md:hidden text-text-secondary hover:text-accent transition-colors p-2"
          aria-label={nav ? 'Close menu' : 'Open menu'}
        >
          {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          nav ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center py-6 gap-5 border-t border-border bg-surface-elevated/95 backdrop-blur-lg">
          {links.map(({ id, text }) => (
            <li key={id}>
              <Link
                onClick={() => setNav(false)}
                to={text}
                smooth
                duration={500}
                className="text-lg font-medium text-text-secondary hover:text-accent transition-colors capitalize"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
