import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Timeline } from './sections/Timeline'
import { Contact } from './sections/Contact'

/**
 * Portfolio — Oussema Ben Ameur
 *
 * Final composition: fixed nav + main (Hero → About → Projects → Skills →
 * Timeline → Contact) + footer. Section ids match the nav anchor links:
 * #home, #about, #projects, #skills, #education, #contact.
 */
export default function App() {
  return (
    <>
      <Nav />
      <main id="main" className="min-h-svh bg-bg text-ink">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  )
}