import { FaBrain, FaCode, FaGraduationCap, FaHandshake } from 'react-icons/fa'
import AnimateOnScroll from './ui/AnimateOnScroll'
import InfoCard from './ui/InfoCard'
import SectionHeader from './ui/SectionHeader'

const aboutItems = [
  {
    title: 'Background',
    icon: <FaCode size={16} />,
    content:
      'Versatile full-stack JavaScript developer with a strong focus on front-end development and solid performance on the back end. Deep expertise in React and NestJS, committed to building high-performance web applications.',
  },
  {
    title: 'Approach',
    icon: <FaBrain size={16} />,
    content:
      'Passionate about continuous learning and delivering innovative solutions. I prioritize clean code, thoughtful UX, and scalable architecture in every project.',
  },
  {
    title: 'Data Science',
    icon: <FaGraduationCap size={16} />,
    content:
      'Currently expanding into data science — exploring analysis, visualization, and machine learning with Python, TensorFlow, and scikit-learn through postgraduate studies.',
  },
  {
    title: 'Collaboration',
    icon: <FaHandshake size={16} />,
    content:
      'Always open to connecting with developers and data science enthusiasts to exchange insights, share knowledge, and build meaningful products together.',
  },
]

const About = () => {
  return (
    <section id="about" className="site-section bg-surface-elevated/30">
      <div className="site-container">
        <SectionHeader
          label="About"
          title="Crafting digital experiences with purpose"
          subtitle="A developer who bridges design sensibility with technical depth — from pixel-perfect interfaces to robust back-end systems."
        />

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {aboutItems.map(({ title, icon, content }, index) => (
            <AnimateOnScroll key={title} delay={index * 100}>
              <InfoCard title={title} icon={icon}>
                {content}
              </InfoCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
