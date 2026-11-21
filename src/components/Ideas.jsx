import {
  Lightbulb, MonitorSmartphone, LineChart, Clock3, PenTool, ClipboardList,
  CalendarDays, BriefcaseBusiness, LayoutDashboard,
} from 'lucide-react'
import { PrimaryButton, Eyebrow } from './ui.jsx'
import ScaledStage from './ScaledStage.jsx'

const techIcons = [
  { Icon: LineChart, x: 440, y: 240, label: 'Analytics' },
  { Icon: PenTool, x: 566, y: 149, label: 'Design tools' },
  { Icon: Clock3, x: 707, y: 118, label: 'Time tracking' },
  { Icon: ClipboardList, x: 848, y: 149, label: 'Forms' },
  { Icon: CalendarDays, x: 973, y: 240, label: 'Scheduling' },
  { Icon: BriefcaseBusiness, x: 1045, y: 347, label: 'Workspaces' },
  { Icon: LayoutDashboard, x: 363, y: 347, label: 'Dashboards' },
]

function Hexes() {
  // honeycomb pattern behind the "Your Business, Ready" card
  const cells = []
  const w = 71, h = 80.5
  const row1 = [79, 155, 231, 308, 384, 460, 537, 614]
  const row2 = [118, 195, 271, 348, 425, 501, 578]
  row1.forEach((x) => cells.push([x, 205]))
  row2.forEach((x) => cells.push([x, 271]))
  return (
    <svg className="hexes" viewBox="0 0 749 376" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {cells.map(([x, y]) => (
        <polygon key={`${x}-${y}`}
          points={`${x + w / 2},${y} ${x + w},${y + h * 0.25} ${x + w},${y + h * 0.75} ${x + w / 2},${y + h} ${x},${y + h * 0.75} ${x},${y + h * 0.25}`}
          fill="#ffffff" stroke="#e8eef8" strokeWidth="1" />
      ))}
    </svg>
  )
}

function ProcessCard() {
  return (
    <div className="bento__card bento__process">
      <svg viewBox="0 0 673 138" className="process__lines" aria-hidden="true">
        <path d="M118 31 h28 q6 0 6 6 v3 q0 6 6 6 h19" fill="none" stroke="#c9d8f5" />
        <path d="M255 31 h90 q6 0 6 -2 v-0 q0 -2 6 -2 h314" fill="none" stroke="#c9d8f5" />
        <path d="M386 68 h286" fill="none" stroke="#c9d8f5" />
        <path d="M200 107 h140 q6 0 6 -3 q0 -3 6 -3 h322" fill="none" stroke="#c9d8f5" />
        {[[143, 45], [361, 29], [441, 68], [351, 107]].map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="3" fill="#2e61ff" />
        ))}
      </svg>
      <span className="tag" style={{ left: 72, top: 27 }}>Concept</span>
      <span className="tag" style={{ left: 217, top: 10 }}>Design</span>
      <span className="tag" style={{ left: 152, top: 88 }}>Development</span>
      <span className="tag" style={{ left: 352, top: 49 }}>Launch</span>
    </div>
  )
}

export default function Ideas() {
  return (
    <section className="ideas">
      <div className="section-head">
        <Eyebrow tone="blue" icon={<Lightbulb size={14} color="#2e61ff" fill="#2e61ff" />}>What We Bring</Eyebrow>
        <h2 className="h2" style={{ maxWidth: 462 }}>Good Ideas. Better Digital Experiences.</h2>
      </div>

      <div className="bento">
        <div className="bento__row bento__row--top">
          <div className="bento__card bento__phone">
            {/* PLACEHOLDER phone mockup — replace with the exported "image 368" from Figma */}
            <div className="phone" aria-hidden="true"><div className="phone__screen" /></div>
            <span className="tag tag--float">
              <MonitorSmartphone size={15} color="#2e61ff" /> Your digital presence, upgraded.
            </span>
            <div className="bento__phone-foot">More than just a website.</div>
          </div>

          <div className="bento__card bento__ready">
            <span className="ready__arc ready__arc--1" />
            <span className="ready__arc ready__arc--2" />
            <Hexes />
            <div className="ready__copy">
              <h3>Your Business, Ready for What's Next.</h3>
              <p>We combine technology, thoughtful design, and AI to create digital experiences that help businesses adapt, improve, and grow.</p>
            </div>
          </div>
        </div>

        <div className="bento__row bento__row--bottom">
          <div className="bento__card bento__outreach">
            <h3>Automated Outreach</h3>
            <p>Connection requests and follow-ups run automatically in the background.</p>
          </div>
          <ProcessCard />
        </div>
      </div>

      <ScaledStage width={1440} height={622} className="tech">
        <div className="tech__arc tech__arc--outer" />
        <div className="tech__arc tech__arc--inner" />
        <div className="tech__fade" />
        {techIcons.map(({ Icon, x, y, label }) => (
          <span key={label} className="tech__icon" style={{ left: x, top: y }} title={label}>
            <Icon size={22} strokeWidth={1.6} />
          </span>
        ))}
        <h2 className="tech__title">Technology we Use</h2>
        <div className="tech__cta"><PrimaryButton>Start Free Trial</PrimaryButton></div>
        <span className="tech__baseline" />
      </ScaledStage>
    </section>
  )
}
