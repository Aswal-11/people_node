import { Lightbulb } from 'lucide-react'
import { Eyebrow } from './ui.jsx'
import logos from '../assets/logos.png'
import challenge from '../assets/challenge-illustration.png'
import better from '../assets/better-illustration.png'

export default function Problem() {
  return (
    <section className="problem guides">
      <div className="trusted">
        <p className="trusted__text">
          Trusted by teams already work with <strong>People Nodes.</strong>
        </p>
        <div className="trusted__logos">
          <img src={logos} alt="Starship, Tabler, SolidJS, Million, Astro" />
        </div>
      </div>

      <div className="section-head">
        <Eyebrow tone="blue" icon={<Lightbulb size={14} color="#2e61ff" fill="#2e61ff" />}>
          Problem → Promise
        </Eyebrow>
        <h2 className="h2 h2--wide">Building a Digital Presence Shouldn't Be Complicated.</h2>
      </div>

      <div className="problem__cards">
        <article className="pcard pcard--light">
          <div className="pcard__body">
            <h3>Digital Challenges Holding Businesses Back</h3>
            <p>
              Outdated websites, disconnected tools, poor user experiences, and a lack of digital
              direction can make it harder for businesses to grow and connect with their customers.
            </p>
          </div>
          <img src={challenge} alt="" className="pcard__art pcard__art--bottom" />
        </article>

        <article className="pcard pcard--dark">
          <img src={better} alt="" className="pcard__art" />
          <div className="pcard__body">
            <h3>How People Nodes Makes It Better</h3>
            <p>
              We bring design, development, and AI-powered technology together to create digital
              solutions that simplify work, improve experiences, and help businesses move forward.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
