import { useState, useRef, useCallback } from 'react'
import './WhatsAppButton.css'

const PHONE = '2250716253873'

export default function WhatsAppButton() {
  const [pos, setPos] = useState({ x: 24, y: 24 }) // distance from right/bottom
  const dragging = useRef(false)
  const offset = useRef({ x: 0, y: 0 })
  const moved = useRef(false)
  const btnRef = useRef(null)

  const onPointerDown = useCallback((e) => {
    dragging.current = true
    moved.current = false
    const rect = btnRef.current.getBoundingClientRect()
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
    btnRef.current.setPointerCapture(e.pointerId)
  }, [])

  const onPointerMove = useCallback((e) => {
    if (!dragging.current) return
    moved.current = true
    const btn = btnRef.current
    const w = btn.offsetWidth
    const h = btn.offsetHeight
    const newX = window.innerWidth - (e.clientX - offset.current.x + w)
    const newY = window.innerHeight - (e.clientY - offset.current.y + h)
    setPos({
      x: Math.max(8, Math.min(newX, window.innerWidth - w - 8)),
      y: Math.max(8, Math.min(newY, window.innerHeight - h - 8)),
    })
  }, [])

  const onPointerUp = useCallback(() => {
    dragging.current = false
  }, [])

  const handleClick = useCallback(() => {
    if (moved.current) return
    window.open(`https://wa.me/${PHONE}`, '_blank', 'noopener')
  }, [])

  return (
    <button
      ref={btnRef}
      className="wa-fab"
      style={{ right: pos.x, bottom: pos.y }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onClick={handleClick}
      aria-label="Contacter sur WhatsApp"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
        <path d="M16.004 2.667A13.26 13.26 0 0 0 2.667 15.89a13.16 13.16 0 0 0 1.795 6.65L2.667 29.333l7.013-1.838A13.28 13.28 0 0 0 16.004 29.2 13.26 13.26 0 0 0 29.333 15.89 13.26 13.26 0 0 0 16.004 2.667Zm0 24.266a11 11 0 0 1-5.607-1.535l-.402-.239-4.166 1.093 1.113-4.063-.263-.418a10.92 10.92 0 0 1-1.679-5.88A10.99 10.99 0 0 1 16.004 4.933 10.99 10.99 0 0 1 27.067 15.89 10.99 10.99 0 0 1 16.004 26.933Zm6.03-8.227c-.33-.166-1.956-.965-2.26-1.076-.303-.11-.524-.166-.744.166-.22.33-.854 1.076-1.048 1.297-.193.22-.386.248-.716.083-.33-.166-1.394-.514-2.655-1.639-.981-.874-1.644-1.954-1.837-2.284-.193-.33-.02-.51.145-.674.149-.148.33-.386.496-.58.165-.192.22-.33.33-.55.11-.22.056-.413-.028-.58-.083-.165-.744-1.793-1.02-2.455-.268-.644-.54-.557-.744-.567l-.634-.01a1.22 1.22 0 0 0-.882.413c-.303.33-1.158 1.131-1.158 2.759 0 1.628 1.186 3.2 1.351 3.42.166.22 2.334 3.562 5.654 4.997.79.34 1.407.544 1.887.697.793.252 1.515.216 2.085.131.636-.095 1.956-.8 2.232-1.572.275-.773.275-1.435.193-1.573-.083-.138-.303-.22-.634-.386Z" />
      </svg>
    </button>
  )
}
