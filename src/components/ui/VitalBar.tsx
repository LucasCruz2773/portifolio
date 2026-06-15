type VitalBarProps = {
  label: string
  current: number
  max: number
  color: string
}

const VitalBar = ({ label, current, max, color }: VitalBarProps) => (
  <div className="flex items-center gap-3">
    <span className="font-display text-xs tracking-[0.2em] text-de-cream/80 w-16 shrink-0">
      {label}
    </span>
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className="w-5 h-3 border border-de-ink/40 transition-all duration-300"
          style={{
            backgroundColor: i < current ? color : 'transparent',
            boxShadow: i < current ? `0 0 6px ${color}55` : 'none',
          }}
        />
      ))}
    </div>
    <span className="font-mono text-xs text-de-muted tabular-nums">
      {current}/{max}
    </span>
  </div>
)

export default VitalBar
