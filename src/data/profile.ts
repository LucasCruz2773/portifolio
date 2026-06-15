export type Skill = {
  name: string
  value: number
  max: number
  color: string
}

export const profile = {
  name: 'Lucas',
  role: 'Full Stack Developer',
  location: 'Brazil',
  tagline: 'Building scalable web applications with precision and craft.',
  summary:
    '4+ years of experience delivering high-performance products with React, Next.js, and NestJS. Focused on clean architecture, thoughtful UX, and maintainable code.',
  skills: [
    { name: 'JavaScript', value: 95, max: 100, color: '#f0db4f' },
    { name: 'React', value: 95, max: 100, color: '#61dafb' },
    { name: 'NestJS', value: 90, max: 100, color: '#e0234e' },
    { name: 'Python', value: 75, max: 100, color: '#5a9e6f' },
  ] satisfies Skill[],
}
