import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import Itau from '../assets/portfolio/itau.png'
import Healthy from '../assets/portfolio/healthy.png'
import SolarPower from '../assets/portfolio/solarpower.png'
import Doceo from '../assets/portfolio/doceo.png'
import TimeSeries from '../assets/portfolio/time_series.png'
import AnimateOnScroll from './ui/AnimateOnScroll'
import SectionHeader from './ui/SectionHeader'

const portifolios = [
  {
    id: 1,
    title: 'Itaú Next',
    description: 'Banking platform built with Next.js',
    src: Itau,
    view: 'https://itau-next.netlify.app',
    code: 'https://github.com/LucasCruz2773/itau-nextjs',
  },
  {
    id: 2,
    title: 'Healthy Food',
    description: 'Nutrition and meal planning app',
    src: Healthy,
    view: 'https://cheery-genie-0aa094.netlify.app',
    code: 'https://github.com/LucasCruz2773/healthy-food',
  },
  {
    id: 3,
    title: 'Doceo Platform',
    description: 'Educational management system',
    src: Doceo,
    view: 'https://doceo-platform.netlify.app/',
    code: 'https://github.com/LucasCruz2773/doceo',
  },
  {
    id: 4,
    title: 'Solar Power',
    description: 'Renewable energy analytics dashboard',
    src: SolarPower,
    code: 'https://github.com/LucasCruz2773/solarpower',
  },
  {
    id: 5,
    title: 'Time Series',
    description: 'Electricity generation forecasting',
    src: TimeSeries,
    code: 'https://github.com/LucasCruz2773/eletricity_generated',
  },
]

const Portifolio = () => {
  return (
    <section id="portfolio" className="site-section">
      <div className="site-container">
        <SectionHeader
          label="Portfolio"
          title="Selected Projects"
          subtitle="A curated collection of work spanning fintech, health, education, and data-driven applications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portifolios.map(({ id, title, description, src, view, code }, index) => (
            <AnimateOnScroll key={id} delay={index * 80}>
              <article className="site-project-card group h-full">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={src}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    {view && (
                      <a
                        href={view}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-light transition-colors"
                      >
                        <FaExternalLinkAlt size={12} />
                        Live
                      </a>
                    )}
                    {code && (
                      <a
                        href={code}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-lg bg-surface-elevated/90 border border-border px-4 py-2 text-sm font-semibold text-text-primary hover:border-accent/40 transition-colors"
                      >
                        <FaGithub size={14} />
                        Code
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">{description}</p>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portifolio
