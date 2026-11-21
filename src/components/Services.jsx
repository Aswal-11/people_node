import { useState } from 'react'
import { PenTool, Code2, TrendingUp, Check, User, Briefcase } from 'lucide-react'
import { PrimaryButton, Eyebrow, BrandMark } from './ui.jsx'

const tabs = [
  {
    id: 'design',
    label: 'Design',
    icon: PenTool,
    title: 'Good design makes things feel effortless.',
    text: 'We create clean, thoughtful, and user-friendly designs that make your brand stand out and make every interaction feel natural.',
    points: ['User-focused UI/UX design', 'Website & app design', 'Branding and visual identity', 'Wireframes & prototypes'],
  },
  // NOTE: the Figma file only contains copy for the Design tab.
  // Development and Growth copy below is placeholder text — replace with final copy.
  {
    id: 'development',
    label: 'Developement',
    icon: Code2,
    title: 'Solid engineering that scales with you.',
    text: 'We build fast, reliable websites, apps and custom software on modern technology, so your product works beautifully today and grows with you tomorrow.',
    points: ['Web & mobile app development', 'Custom software & integrations', 'AI-powered automation', 'Performance & security'],
  },
  {
    id: 'growth',
    label: 'Growth',
    icon: TrendingUp,
    title: 'Turn your digital presence into results.',
    text: 'We help you reach the right people and turn attention into customers with data-driven marketing, outreach and continuous optimisation.',
    points: ['LinkedIn outreach & lead generation', 'SEO & content strategy', 'Analytics & reporting', 'Conversion optimisation'],
  },
]

/* Avatar slots in the 530×402 network card (Figma positions). */
const people = [
  [30, 173], [442, 173], [99, 79], [367, 79], [99, 269], [367, 269],
]

function NetworkCard() {
  const cx = 265, cy = 201
  return (
    <div className="network">
      <svg className="network__lines" viewBox="0 0 530 402" aria-hidden="true">
        {people.map(([x, y]) => {
          const px = x + 28, py = y + 28
          const mx = (cx + px) / 2
          return (
            <path key={`${x}-${y}`} d={`M${cx} ${cy} C ${mx} ${cy}, ${mx} ${py}, ${px} ${py}`}
              fill="none" stroke="#c9d8f5" strokeWidth="1.2" strokeDasharray="4 4" />
          )
        })}
      </svg>
      <div className="network__core">
        <span className="network__ring network__ring--2" />
        <span className="network__ring network__ring--1" />
        <BrandMark size={86} />
      </div>
      {/* PLACEHOLDER avatars — the team photos could not be exported from Figma. */}
      {people.map(([x, y], i) => (
        <span key={i} className="network__avatar" style={{ left: x, top: y }}>
          {i % 2 ? <Briefcase size={22} /> : <User size={24} />}
        </span>
      ))}
    </div>
  )
}

export default function Services() {
  const [active, setActive] = useState('design')
  const tab = tabs.find((t) => t.id === active)

  return (
    <section className="services guides" id="services">
      <div className="section-head">
        <Eyebrow icon={<PenTool size={13} color="#2e61ff" />}>What We Do</Eyebrow>
        <h2 className="h2" style={{ maxWidth: 468 }}>Everything Your Business Needs to Grow Digitally.</h2>
      </div>

      <div className="tabs" role="tablist">
        {tabs.map((t) => {
          const Icon = t.icon
          const on = t.id === active
          return (
            <button key={t.id} role="tab" aria-selected={on}
              className={`tabs__tab ${on ? 'is-active' : ''}`} onClick={() => setActive(t.id)}>
              <span className="tabs__icon"><Icon size={17} /></span>
              {t.label}
            </button>
          )
        })}
      </div>

      <div className="services__panel" key={tab.id}>
        <div className="services__copy">
          <h3>{tab.title}</h3>
          <p>{tab.text}</p>
          <span className="services__rule" />
          <ul className="checklist">
            {tab.points.map((p) => (
              <li key={p}><span className="checklist__icon"><Check size={14} strokeWidth={3} /></span>{p}</li>
            ))}
          </ul>
          <PrimaryButton>Start Free Trial</PrimaryButton>
        </div>
        <NetworkCard />
      </div>
    </section>
  )
}
