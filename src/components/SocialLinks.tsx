import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsPersonLinesFill } from 'react-icons/bs'

const links = [
  {
    id: 1,
    label: 'LinkedIn',
    icon: <FaLinkedin size={16} />,
    href: 'https://www.linkedin.com/in/lucascruz2773',
  },
  {
    id: 2,
    label: 'GitHub',
    icon: <FaGithub size={16} />,
    href: 'https://github.com/LucasCruz2773',
  },
  {
    id: 3,
    label: 'Email',
    icon: <HiOutlineMail size={16} />,
    href: 'mailto:lucascruz2773@gmail.com',
  },
  {
    id: 4,
    label: 'Resume',
    icon: <BsPersonLinesFill size={16} />,
    href: '/resume.pdf',
    download: true,
  },
]

const SocialLinks = () => {
  return (
    <aside className="hidden lg:flex flex-col fixed top-1/2 -translate-y-1/2 left-0 z-30 gap-2">
      {links.map(({ id, label, icon, href, download }) => (
        <a
          key={id}
          href={href}
          download={download}
          target="_blank"
          rel="noreferrer"
          className="site-social-link"
        >
          <span>{label}</span>
          <span className="text-accent">{icon}</span>
        </a>
      ))}
    </aside>
  )
}

export default SocialLinks
