import { useInView } from '../../hooks/useInView'

type SkillBarProps = {
  name: string
  value: number
  max: number
  color: string
  delay?: number
}

const SkillBar = ({ name, value, max, color, delay = 0 }: SkillBarProps) => {
  const { ref, isInView } = useInView({ threshold: 0.3 })
  const percentage = (value / max) * 100

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between gap-3 mb-2">
        <span className="text-sm font-medium text-text-primary">{name}</span>
        <span className="font-mono text-xs text-text-muted tabular-nums">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-surface-elevated overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out motion-reduce:transition-none"
          style={{
            width: isInView ? `${percentage}%` : '0%',
            backgroundColor: color,
            boxShadow: isInView ? `0 0 12px ${color}44` : 'none',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export default SkillBar
