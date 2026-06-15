import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Portifolio from './components/Portifolio'
import SocialLinks from './components/SocialLinks'

function App() {
  return (
    <div className="relative min-h-screen">
      <NavBar />
      <main>
        <Home />
        <About />
        <Portifolio />
        <Experience />
      </main>
      <SocialLinks />
      <footer className="border-t border-border py-8">
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p>
            &copy; {new Date().getFullYear()} Lucas. Built with React & Tailwind CSS.
          </p>
          <a
            href="mailto:lucascruz2773@gmail.com"
            className="hover:text-accent transition-colors duration-300"
          >
            lucascruz2773@gmail.com
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
