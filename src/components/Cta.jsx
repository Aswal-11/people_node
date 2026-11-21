import { PrimaryButton, BrandMark } from './ui.jsx'

export default function Cta() {
  return (
    <section className="cta">
      <BrandMark size={56} className="cta__mark" />
      <div className="cta__copy">
        <span className="cta__glow" aria-hidden="true" />
        <h2>Supercharge Your Productivity</h2>
        <p>Organize tasks, collaborate on docs, track goals, and streamline team communication—all in one place, enhanced by AI.</p>
      </div>
      <div className="cta__action">
        <span className="cta__dash" aria-hidden="true" />
        <PrimaryButton>Start Free Trial</PrimaryButton>
        <span className="cta__dash" aria-hidden="true" />
      </div>
      <svg className="cta__curves" viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0 C 260 10, 420 120, 644 139" fill="none" stroke="#dbe5f6" />
        <path d="M1440 0 C 1180 10, 1020 120, 796 139" fill="none" stroke="#dbe5f6" />
      </svg>
    </section>
  )
}
