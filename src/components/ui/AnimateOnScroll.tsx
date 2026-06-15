import { ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

type AnimateOnScrollProps = {
  children: ReactNode
  className?: string
  delay?: number
  direction?: Direction
}

const hiddenTransform: Record<Direction, string> = {
  up: 'translateY(28px)',
  down: 'translateY(-28px)',
  left: 'translateX(-28px)',
  right: 'translateX(28px)',
  none: 'none',
}

const AnimateOnScroll = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimateOnScrollProps) => {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'none' : hiddenTransform[direction],
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default AnimateOnScroll
