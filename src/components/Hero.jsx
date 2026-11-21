import { useEffect, useRef, useState } from 'react'
import { PrimaryButton, Eyebrow } from './ui.jsx'
import band from '../assets/hero-band.png'
import cardSolutions from '../assets/card-solutions.png'
import cardAiPowered from '../assets/card-ai-powered.png'
import cardAppWebAi from '../assets/card-app-web-ai.png'

/* Positions below are taken 1:1 from the Figma frame (1440px wide artboard). */
const labels = [
  { text: 'Software Solutions', x: 402, y: 61 },
  { text: 'Digital Impact', x: 912, y: 55 },
  { text: 'AI & Innovation', x: 413, y: 250 },
  { text: 'Our Services', x: 917, y: 268 },
]
function ChartCard() {
  return (
    <div className="chart-card">
      <svg viewBox="0 0 250 70" className="chart-card__line" aria-hidden="true">
        <path d="M2 58 C 30 58, 40 40, 62 44 S 95 62, 118 46 S 150 20, 172 30 S 210 8, 248 4"
          fill="none" stroke="#032952" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="172" cy="30" r="3.2" fill="#2e61ff" />
      </svg>
      <span className="chart-card__badge">10x</span>
      <ul>
        <li>More efficient workflows</li>
        <li>Better digital experiences</li>
      </ul>
    </div>
  )
}

/** Scales the fixed 1440px diagram to the available width. */
function useStageScale(ref) {
  const [scale, setScale] = useState(1)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setScale(Math.min(1, entry.contentRect.width / 1440)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [ref])
  return scale
}

export default function Hero() {
  const wrapRef = useRef(null)
  const scale = useStageScale(wrapRef)

  return (
    <section className="hero">
      <div className="hero__intro">
        <Eyebrow icon={<span className="eyebrow__bars"><i /><i /></span>}>
          AI · Technology · Innovation
        </Eyebrow>
        <h1 className="hero__title">
          We Build Software.<br />We Create Possibilities.
        </h1>
        <p className="hero__lead">
          We design, develop, and grow digital experiences that help ambitious businesses
          stand out, connect with people, and scale.
        </p>
        <PrimaryButton variant="blue">Explore Our Solutions</PrimaryButton>
      </div>

      {/* Desktop / tablet: the node diagram exactly as designed, scaled to fit */}
      <div className="hero__stage-wrap" ref={wrapRef} style={{ height: 470 * scale }}>
        <div className="hero__stage" style={{ transform: `translateX(-50%) scale(${scale})` }}>
          <img src={band} alt="" className="abs" style={{ left: 0, top: 0, width: 1440, height: 370 }} />
          <div className="hero__glow" />
          <svg className="abs" style={{ left: 622, top: 0 }} width="198" height="370" aria-hidden="true">
            <defs>
              <linearGradient id="lens" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="1" stopColor="#eef3ff" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <ellipse cx="99" cy="185" rx="97" ry="140" fill="url(#lens)" stroke="#e1e9f7" />
          </svg>
          <svg
            className="abs hero__network"
            viewBox="0 0 1440 470"
            width="1440"
            height="470"
            aria-hidden="true"
          >
            <g className="hero__network-lines" fill="none">
              <path d="M389 84 H402" />
              <path d="M575 84 C600 84 620 104 620 129 V205 H720" />
              <path d="M1063 88 H912" />
              <path d="M865 88 C840 88 820 108 820 133 V205 H720" />
              <path d="M380 263 H413" />
              <path d="M575 263 C600 263 620 243 620 218 V205 H720" />
              <path d="M1058 280 H917" />
              <path d="M865 280 C840 280 820 260 820 235 V205 H720" />
              <path d="M720 205 V358" />
            </g>
            <g className="hero__network-travelers">
              <circle r="5">
                <animateMotion dur="5.8s" begin="0s" repeatCount="indefinite" path="M720 205 H620 V129 C620 104 600 84 575 84 H402 M575 84 H389" />
              </circle>
              <circle r="5">
                <animateMotion dur="5.8s" begin="0s" repeatCount="indefinite" path="M720 205 H820 V133 C820 108 840 88 865 88 H912 M865 88 H1063" />
              </circle>
              <circle r="5">
                <animateMotion dur="5.8s" begin="0s" repeatCount="indefinite" path="M720 205 H620 V218 C620 243 600 263 575 263 H413 M575 263 H380" />
              </circle>
              <circle r="5">
                <animateMotion dur="5.8s" begin="0s" repeatCount="indefinite" path="M720 205 H820 V235 C820 260 840 280 865 280 H917 M865 280 H1058" />
              </circle>
              <circle r="5">
                <animateMotion dur="5.8s" begin="0s" repeatCount="indefinite" path="M720 205 V358" />
              </circle>
            </g>
            <g className="hero__network-node">
              <circle cx="720" cy="205" r="10" />
              <circle cx="720" cy="205" r="4" />
            </g>
            <g className="hero__network-endpoints">
              <circle cx="389" cy="84" r="5" />
              <circle cx="1063" cy="88" r="5" />
              <circle cx="380" cy="263" r="5" />
              <circle cx="1058" cy="280" r="5" />
              <circle cx="720" cy="358" r="5" />
            </g>
          </svg>

          <img src={cardSolutions} alt="Custom Software & Web Solutions — Grow with LinkedIn, Not Cold Calls"
            className="abs float-a" style={{ left: 62, top: 9, width: 327, height: 150 }} />
          <img src={cardAiPowered} alt="AI Powered, Smarter, Automated"
            className="abs float-b" style={{ left: 70, top: 177, width: 310, height: 172 }} />
          <div className="abs float-b" style={{ left: 1063, top: 4, width: 310, height: 172 }}>
            <ChartCard />
          </div>
          <img src={cardAppWebAi} alt="App, Web and AI"
            className="abs float-a" style={{ left: 1058, top: 205, width: 321, height: 150 }} />

          {labels.map((l) => (
            <span key={l.text} className="abs hero__label" style={{ left: l.x, top: l.y }}>{l.text}</span>
          ))}
          <span className="abs hero__engine" style={{ left: 618, top: 358 }}>People Node Engine</span>
        </div>
      </div>

      {/* Mobile: the same cards, stacked */}
      <div className="hero__cards-mobile">
        <img src={cardSolutions} alt="Custom Software & Web Solutions" />
        <ChartCard />
        <img src={cardAiPowered} alt="AI Powered, Smarter, Automated" />
        <img src={cardAppWebAi} alt="App, Web and AI" />
      </div>
    </section>
  )
}
