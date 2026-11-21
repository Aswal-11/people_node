import { ArrowRight } from 'lucide-react'
import brandMark from '../assets/brand-mark.png'

/** Pill-shaped primary button with the round arrow badge used across the design. */
export function PrimaryButton({ children, href = '#', variant = 'brand', size = 'lg', className = '' }) {
  return (
    <a href={href} className={`btn btn--${variant} btn--${size} ${className}`}>
      <span>{children}</span>
      <span className="btn__badge" aria-hidden="true">
        <ArrowRight size={size === 'sm' ? 10 : 13} strokeWidth={2.4} />
      </span>
    </a>
  )
}

/** Small eyebrow tag that sits above section headings (rounded except bottom-left). */
export function Eyebrow({ icon, children, tone = 'white' }) {
  return (
    <span className={`eyebrow eyebrow--${tone}`}>
      {icon && <span className="eyebrow__icon">{icon}</span>}
      {children}
    </span>
  )
}

/**
 * PLACEHOLDER wordmark. The real "PEOPLE NODES" logo could not be exported from
 * Figma (Starter-plan request limit). Replace with the exported SVG when available.
 */
export function Logo({ size = 'md' }) {
  return (
    <a href="#" className={`logo logo--${size}`} aria-label="People Nodes home">
      <span className="logo__top">PEOPLE</span>
      <span className="logo__bottom">
        <img src={brandMark} alt="" className="logo__mark" />
        NODES
      </span>
    </a>
  )
}

export function BrandMark({ size = 100, className = '' }) {
  return <img src={brandMark} alt="People Nodes" width={size} height={size} className={className} />
}
