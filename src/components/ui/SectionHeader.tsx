import AnimateOnScroll from './AnimateOnScroll'

type SectionHeaderProps = {
  title: string
  subtitle?: string
  label?: string
}

const SectionHeader = ({ title, subtitle, label = 'Section' }: SectionHeaderProps) => (
  <AnimateOnScroll className="mb-12 md:mb-16">
    <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3 block">
      {label}
    </span>
    <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
      {title}
    </h2>
    <div className="mt-4 h-1 w-16 rounded-full bg-accent" />
    {subtitle && (
      <p className="mt-5 text-text-secondary text-lg max-w-2xl leading-relaxed">
        {subtitle}
      </p>
    )}
  </AnimateOnScroll>
)

export default SectionHeader
