import { useEffect, useRef, useState } from 'react'

/**
 * Renders children on a fixed-size artboard (Figma coordinates) and scales it down
 * proportionally when the viewport is narrower than the artboard.
 */
export default function ScaledStage({ width, height, className = '', children }) {
  const ref = useRef(null)
  const [scale, setScale] = useState(1)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => setScale(Math.min(1, e.contentRect.width / width)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [width])
  return (
    <div ref={ref} className={`stage-wrap ${className}`} style={{ height: height * scale }}>
      <div className="stage" style={{ width, height, transform: `translateX(-50%) scale(${scale})` }}>
        {children}
      </div>
    </div>
  )
}
