import { ReactNode } from 'react'

type InfoCardProps = {
  title: string
  children: ReactNode
  icon?: ReactNode
}

const InfoCard = ({ title, children, icon }: InfoCardProps) => (
  <div className="site-card h-full">
    <div className="flex items-center gap-3 mb-4">
      {icon && (
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
          {icon}
        </span>
      )}
      <h3 className="font-semibold text-text-primary">{title}</h3>
    </div>
    <p className="text-text-secondary leading-relaxed text-[15px]">{children}</p>
  </div>
)

export default InfoCard
