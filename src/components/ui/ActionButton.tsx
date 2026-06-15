import { ReactNode } from 'react'
import { Link } from 'react-scroll'

type ActionButtonProps = {
  children: ReactNode
  onClick?: () => void
  href?: string
  to?: string
  external?: boolean
  variant?: 'primary' | 'secondary'
}

const variants = {
  primary: 'site-btn-primary',
  secondary: 'site-btn-secondary',
}

const ActionButton = ({
  children,
  onClick,
  href,
  to,
  external,
  variant = 'primary',
}: ActionButtonProps) => {
  const className = variants[variant]

  if (to) {
    return (
      <Link to={to} smooth duration={500} className={className}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={className}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export default ActionButton
