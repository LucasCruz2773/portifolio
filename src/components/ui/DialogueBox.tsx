import { ReactNode } from 'react'

type DialogueBoxProps = {
  label?: string
  children: ReactNode
  variant?: 'default' | 'thought' | 'internal'
}

const variantStyles = {
  default: 'border-de-ochre/40 text-de-cream',
  thought: 'border-de-sage/30 text-de-cream/90 italic',
  internal: 'border-de-rust/50 text-de-rust-light',
}

const DialogueBox = ({ label, children, variant = 'default' }: DialogueBoxProps) => (
  <div className={`de-dialogue ${variantStyles[variant]}`}>
    {label && (
      <span className="block font-display text-xs tracking-[0.25em] text-de-muted mb-2 uppercase">
        {label}
      </span>
    )}
    <div className="font-serif text-base leading-relaxed">{children}</div>
  </div>
)

export default DialogueBox
