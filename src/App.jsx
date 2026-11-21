import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Services from './components/Services.jsx'
import Ideas from './components/Ideas.jsx'
import Showcase from './components/Showcase.jsx'
import Testimonials from './components/Testimonials.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Ideas />
        <Showcase />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
