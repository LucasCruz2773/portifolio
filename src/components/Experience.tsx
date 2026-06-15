import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import ReactImage from '../assets/react.png'
import Nextjs from '../assets/nextjs.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Nodejs from '../assets/nodejs.png'
import Nestjs from '../assets/nestjs.png'
import AnimateOnScroll from './ui/AnimateOnScroll'
import SectionHeader from './ui/SectionHeader'

const experiences = [
  { id: 1, title: 'HTML', image: Html, accent: '#e44d26' },
  { id: 2, title: 'CSS', image: Css, accent: '#264de4' },
  { id: 3, title: 'JavaScript', image: Javascript, accent: '#f0db4f' },
  { id: 4, title: 'React', image: ReactImage, accent: '#61dafb' },
  { id: 5, title: 'Tailwind', image: Tailwind, accent: '#38bdf8' },
  { id: 6, title: 'Next.js', image: Nextjs, accent: '#e8e0d0' },
  { id: 7, title: 'GitHub', image: Github, accent: '#8a9a8c' },
  { id: 8, title: 'Node.js', image: Nodejs, accent: '#68a063' },
  { id: 9, title: 'NestJS', image: Nestjs, accent: '#e0234e' },
]

const Experience = () => {
  return (
    <section id="experience" className="site-section bg-surface-elevated/30">
      <div className="site-container">
        <SectionHeader
          label="Skills"
          title="Technologies I Work With"
          subtitle="Tools and frameworks I use daily to build modern, performant applications."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5">
          {experiences.map(({ id, image, title, accent }, index) => (
            <AnimateOnScroll key={id} delay={index * 60}>
              <div className="site-tech-tile group">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-xl bg-surface-elevated transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    boxShadow: `0 0 0 1px ${accent}22`,
                  }}
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <p
                  className="text-sm font-medium transition-colors duration-300 group-hover:text-text-primary"
                  style={{ color: accent }}
                >
                  {title}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
