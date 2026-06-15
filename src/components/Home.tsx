import HeroImage from '../assets/me_without_stats.png'
import { profile } from '../data/profile'
import ActionButton from './ui/ActionButton'
import AnimateOnScroll from './ui/AnimateOnScroll'
import SkillBar from './ui/SkillBar'

const Home = () => {
  return (
    <section
      id="home"
      className="site-section min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1411] via-surface to-[#080c0a]" />
      <div className="absolute top-1/4 -right-32 w-[520px] h-[520px] rounded-full bg-accent/[0.07] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full bg-[#1e3d2f]/30 blur-[90px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-surface/80 via-transparent to-transparent pointer-events-none lg:block hidden" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-surface to-transparent pointer-events-none" />

      <div className="site-container w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <AnimateOnScroll delay={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/60 px-4 py-1.5 text-xs font-medium text-text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Available for opportunities
              </span>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <header>
                <p className="font-mono text-sm text-accent mb-3 tracking-wide">
                  {profile.role}
                </p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                  Hi, I'm{' '}
                  <span className="site-gradient-text site-gradient-text-animate">
                    {profile.name}
                  </span>
                </h1>
                <p className="mt-5 text-lg md:text-xl text-text-secondary max-w-lg leading-relaxed">
                  {profile.tagline}
                </p>
              </header>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <p className="text-text-secondary leading-relaxed max-w-xl">
                {profile.summary}
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="site-card space-y-4 max-w-md">
                <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide">
                  Core Skills
                </h3>
                {profile.skills.map((skill, index) => (
                  <SkillBar key={skill.name} {...skill} delay={index * 120} />
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <div className="flex flex-wrap gap-4">
                <ActionButton to="portfolio">View Projects</ActionButton>
                <ActionButton
                  href="mailto:lucascruz2773@gmail.com"
                  variant="secondary"
                >
                  Get in Touch
                </ActionButton>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={500}>
              <p className="font-mono text-xs text-text-muted">
                Based in {profile.location}
              </p>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll direction="right" delay={200} className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-accent/10 blur-3xl animate-glow-pulse" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/40 animate-float motion-reduce:animate-none">
              <img
                src={HeroImage}
                alt="Lucas — Full Stack Developer"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

export default Home
