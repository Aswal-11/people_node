import { useState } from 'react'
import { ArrowLeft, ArrowRight, Quote, UserRound } from 'lucide-react'
import { Eyebrow, Logo } from './ui.jsx'
import million from '../assets/logo-million.png'

// The design shows one testimonial (counter "1/4"). Add the remaining real ones here.
const testimonials = [
  {
    quote: 'LinkedFusion helped us turn LinkedIn into a predictable meeting channel. We finally stopped guessing and started booking calls consistently.',
    name: 'Jameson',
    role: 'CEO of Small Capital',
    logo: million,
  },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  const n = testimonials.length
  const t = testimonials[i]
  const go = (d) => setI((i + d + n) % n)

  return (
    <section className="testimonials">
      <div className="section-head">
        <Eyebrow tone="blue" icon={<Quote size={12} color="#2e61ff" fill="#2e61ff" />}>Testimonials</Eyebrow>
        <h2 className="h2 h2--haas" style={{ maxWidth: 387 }}>Trust That Translates Into Real Results.</h2>
      </div>

      <div className="testimonials__body">
        <figure className="quote" key={i}>
          <span className="quote__mark" aria-hidden="true">“</span>
          <blockquote>{t.quote}</blockquote>
          <span className="quote__rule" />
          <figcaption className="quote__foot">
            {/* PLACEHOLDER avatar — replace with the exported photo */}
            <span className="quote__avatar"><UserRound size={28} /></span>
            <span>
              <strong>{t.name}</strong>
              <small>{t.role}</small>
            </span>
            <span className="quote__nav">
              <button aria-label="Previous testimonial" className="sq-btn" onClick={() => go(-1)}><ArrowLeft size={18} /></button>
              <span className="quote__count">{i + 1}/{n}</span>
              <button aria-label="Next testimonial" className="sq-btn sq-btn--blue" onClick={() => go(1)}><ArrowRight size={18} /></button>
            </span>
          </figcaption>
        </figure>

        <div className="logos-stack" aria-hidden="true">
          <div className="logo-card logo-card--a"><img src={t.logo} alt="" /></div>
          <div className="logo-card logo-card--b"><Logo size="lg" /></div>
          <span className="logos-stack__line" />
        </div>
      </div>
    </section>
  )
}
