import { useEffect, useRef } from 'react'
import { CheckCircle, DollarSign } from 'lucide-react'
import { WHATSAPP_DEMO_URL } from '../whatsapp'
import './Hero.css'

const STATS = [
  { num: '47', label: 'Véhicules' },
  { num: '23', label: 'Conducteurs' },
  { num: '8', label: 'Missions' },
]

const BAR_HEIGHTS = [40, 65, 55, 80, 45, 70, 90, 60, 75, 50, 85, 65]

export default function Hero() {
  const chartRef = useRef(null)

  useEffect(() => {
    if (!chartRef.current) return
    const bars = chartRef.current.children
    BAR_HEIGHTS.forEach((h, i) => {
      if (bars[i]) bars[i].style.height = h + '%'
    })
  }, [])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-tag">Nouveau</span>
            Gestion de flotte v1.0
          </div>
          <h1>
            Gérez votre flotte<br />
            avec <span className="highlight">D-Fleet CI</span>
          </h1>
          <p>
            La plateforme tout-en-un pour le suivi de véhicules, la gestion
            des conducteurs, du carburant, de la maintenance et des missions.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener noreferrer">
              Demander une démo
            </a>
            <a className="btn-secondary" href="https://wa.me/2250716253873" target="_blank" rel="noopener noreferrer">
              Nous contacter
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="float-card top-left">
            <div className="icon-circle green">
              <CheckCircle size={18} />
            </div>
            <div className="fc-text">
              <strong>12 missions</strong>
              complétées aujourd'hui
            </div>
          </div>

          <div className="app-mockup">
            <div className="mockup-header">
              <div className="dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <span className="mockup-title">D-Fleet CI Dashboard</span>
            </div>
            <div className="mockup-body">
              <div className="mockup-stat-row">
                {STATS.map((s) => (
                  <div className="mockup-stat" key={s.label}>
                    <div className="num">{s.num}</div>
                    <div className="label">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="mockup-chart" ref={chartRef}>
                {BAR_HEIGHTS.map((_, i) => (
                  <div className={`bar ${i % 2 === 0 ? 'primary' : 'secondary'}`} key={i} />
                ))}
              </div>
            </div>
          </div>

          <div className="float-card bottom-right">
            <div className="icon-circle copper">
              <DollarSign size={18} />
            </div>
            <div className="fc-text">
              <strong>-18% coûts</strong>
              ce trimestre
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
