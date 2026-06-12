import { useState, useEffect, useCallback } from 'react'
import {
  X,
  ChevronLeft,
  Navigation,
  Gauge,
  Zap,
  Battery,
  Satellite,
  Pause,
  AlertTriangle,
  CheckCircle,
  Crosshair,
  Signal,
  Wifi,
  Car,
  Clock,
  MapPin,
  Play,
  Camera,
  ChevronRight,
  Home,
  Star,
  Fuel,
  ArrowRight,
} from 'lucide-react'
import './MobileDemo.css'

/* Route path for the car animation */
const ROUTE = 'M 55,350 C 75,310 95,280 130,260 S 190,220 210,195 S 250,155 275,155 S 310,170 300,195 S 265,220 250,210 S 245,180 270,160 S 310,130 345,115 S 390,95 420,65'

/* ─── SCREEN: Dashboard ─── */
function ScreenDashboard() {
  return (
    <div className="screen-content dashboard-screen">
      <div className="dash-greeting">
        <div className="dash-avatar-row">
          <div className="dash-user-avatar">A</div>
          <div>
            <div className="dash-hello">Bonjour, Ahmed</div>
            <div className="dash-role">Conducteur</div>
          </div>
        </div>
      </div>

      <div className="dash-active-mission">
        <div className="dam-label">
          <span className="dam-dot" />
          Mission active
        </div>
        <div className="dam-card">
          <div className="dam-top">
            <span className="dam-code">M-0048</span>
            <span className="dam-priority">Haute</span>
          </div>
          <div className="dam-title">Livraison Casablanca → Rabat</div>
          <div className="dam-route">
            <div className="dam-point"><span className="dam-circle green" />Casablanca, Zone Ind.</div>
            <div className="dam-line" />
            <div className="dam-point"><span className="dam-circle red" />Rabat, Hay Riad</div>
          </div>
          <button className="dam-btn"><Play size={12} /> Continuer la mission</button>
        </div>
      </div>

      <div className="dash-today">
        <div className="dash-today-title">Aujourd'hui</div>
        <div className="dash-today-stats">
          <div className="dts"><div className="dts-val">3</div><div className="dts-label">Missions</div></div>
          <div className="dts"><div className="dts-val">1</div><div className="dts-label">Terminée</div></div>
          <div className="dts"><div className="dts-val">87 km</div><div className="dts-label">Parcourus</div></div>
        </div>
      </div>

      <div className="dash-vehicle">
        <div className="dv-label">Mon véhicule</div>
        <div className="dv-card">
          <Car size={20} className="dv-icon" />
          <div className="dv-info">
            <strong>Toyota Hilux</strong>
            <span>AB-123-CD · Diesel</span>
          </div>
          <ChevronRight size={16} className="dv-arrow" />
        </div>
      </div>

      {/* Bottom nav */}
      <div className="phone-bottom-nav">
        <div className="bn-item active"><Home size={18} /><span>Accueil</span></div>
        <div className="bn-item"><Navigation size={18} /><span>Missions</span></div>
        <div className="bn-item"><Clock size={18} /><span>Historique</span></div>
        <div className="bn-item"><div className="bn-avatar">A</div><span>Profil</span></div>
      </div>
    </div>
  )
}

/* ─── SCREEN: Start Mission (multi-step) ─── */
function ScreenStartMission({ step }) {
  return (
    <div className="screen-content start-screen">
      <div className="start-header">
        <div className="start-steps">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className={`step-dot ${s <= step ? 'active' : ''} ${s === step ? 'current' : ''}`}>
              {s < step ? <CheckCircle size={10} /> : s}
            </div>
          ))}
          <div className="step-line" style={{ width: `${((step - 1) / 3) * 100}%` }} />
        </div>
      </div>

      {step === 1 && (
        <div className="start-step-content">
          <div className="ssc-icon confirm"><CheckCircle size={28} /></div>
          <h4>Confirmer la mission</h4>
          <div className="ssc-card">
            <div className="ssc-row"><span>Mission</span><strong>M-0048</strong></div>
            <div className="ssc-row"><span>Trajet</span><strong>Casa → Rabat</strong></div>
            <div className="ssc-row"><span>Distance est.</span><strong>87 km</strong></div>
            <div className="ssc-row"><span>Véhicule</span><strong>AB-123-CD</strong></div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="start-step-content">
          <div className="ssc-icon gauge"><Gauge size={28} /></div>
          <h4>Kilométrage de départ</h4>
          <div className="ssc-input-group">
            <div className="ssc-input">45 230</div>
            <span className="ssc-unit">km</span>
          </div>
          <p className="ssc-hint">Saisissez le kilométrage actuel du compteur</p>
        </div>
      )}
      {step === 3 && (
        <div className="start-step-content">
          <div className="ssc-icon fuel"><Fuel size={28} /></div>
          <h4>Niveau de carburant</h4>
          <div className="fuel-gauge">
            <div className="fuel-fill" style={{ width: '72%' }} />
            <span className="fuel-pct">72%</span>
          </div>
          <p className="ssc-hint">Estimez le niveau de carburant actuel</p>
        </div>
      )}
      {step === 4 && (
        <div className="start-step-content">
          <div className="ssc-icon gps"><Satellite size={28} /></div>
          <h4>Activation GPS</h4>
          <div className="gps-status">
            <div className="gps-ring" />
            <Satellite size={22} className="gps-sat" />
          </div>
          <div className="gps-label">Signal GPS acquis</div>
          <div className="gps-accuracy">Précision : 4m</div>
        </div>
      )}

      <button className="start-next-btn">
        {step === 4 ? 'Démarrer la mission' : 'Continuer'}
        <ArrowRight size={14} />
      </button>
    </div>
  )
}

/* ─── SCREEN: Active Mission (Map tracking) ─── */
function ScreenTracking({ speed, distance, maxSpeed, gpsPoints, battery }) {
  const avgSpeed = Math.max(speed - 8, 35)

  return (
    <div className="screen-content tracking-screen">
      {/* Map */}
      <div className="phone-map-area">
        {/* Realistic map background */}
        <div className="map-terrain" />
        <div className="map-water" />
        <div className="map-park p1" />
        <div className="map-park p2" />

        {/* Buildings */}
        <div className="map-building mb1" />
        <div className="map-building mb2" />
        <div className="map-building mb3" />
        <div className="map-building mb4" />
        <div className="map-building mb5" />
        <div className="map-building mb6" />
        <div className="map-building mb7" />
        <div className="map-building mb8" />
        <div className="map-building mb9" />
        <div className="map-building mb10" />

        <svg className="map-svg" viewBox="0 0 480 400">
          {/* Main roads */}
          <path d="M 0,200 L 480,200" className="main-road" />
          <path d="M 200,0 L 200,400" className="main-road" />
          <path d="M 0,330 C 100,330 150,250 240,250 S 380,200 480,150" className="main-road" />

          {/* Secondary streets */}
          <path d="M 0,100 L 480,100" className="street" />
          <path d="M 0,300 L 480,300" className="street" />
          <path d="M 80,0 L 80,400" className="street" />
          <path d="M 350,0 L 350,400" className="street" />
          <path d="M 0,50 L 480,50" className="street" />
          <path d="M 430,0 L 430,400" className="street" />

          {/* Street name labels */}
          <text x="240" y="195" className="street-name">Bd Mohammed V</text>
          <text x="195" y="180" className="street-name vert" transform="rotate(-90 195 180)">Av Hassan II</text>

          {/* Route background glow */}
          <path d={ROUTE} className="route-glow" />
          {/* Route traveled */}
          <path d={ROUTE} className="route-traveled" />
          {/* Animated head */}
          <path d={ROUTE} className="route-head" />

          {/* Start */}
          <circle cx="55" cy="350" r="12" className="marker-start-bg" />
          <circle cx="55" cy="350" r="6" fill="#059669" />
          <text x="55" y="375" textAnchor="middle" className="mlabel green">Départ</text>

          {/* End */}
          <g className="dest-group">
            <circle cx="420" cy="65" r="14" className="marker-dest-ring" />
            <circle cx="420" cy="65" r="5" fill="#DC2626" />
            <text x="420" y="50" textAnchor="middle" className="mlabel red">Arrivée</text>
          </g>

          {/* Animated car */}
          <g className="car-group">
            <animateMotion dur="14s" repeatCount="indefinite" path={ROUTE} rotate="auto" />
            <circle cx="0" cy="0" r="24" className="car-pulse-ring">
              <animate attributeName="r" values="24;30;24" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="0" cy="0" r="16" className="car-accuracy" />
            <polygon points="0,-22 -7,-4 7,-4" className="car-beam" />
            <circle cx="0" cy="0" r="11" fill="#4285F4" stroke="white" strokeWidth="3" />
            <g transform="translate(-6,-6) scale(0.5)" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.7-3.4A2 2 0 0 0 13.7 6H10.3a2 2 0 0 0-1.6.6L6 10l-2.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2" />
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
            </g>
          </g>
        </svg>

        {/* Speed HUD */}
        <div className="speed-hud">
          <div className="speed-number">{speed}</div>
          <div className="speed-km">km/h</div>
        </div>

        {/* Map controls */}
        <div className="map-ctrls">
          <button className="mc-btn"><Crosshair size={15} /></button>
        </div>

        {/* Live badge */}
        <div className="live-indicator">
          <span className="live-pulse" />
          EN DIRECT
        </div>
      </div>

      {/* Stats */}
      <div className="track-stats">
        <div className="ts-item">
          <Navigation size={14} className="ts-ico blue" />
          <div className="ts-data">
            <span className="ts-val">{distance.toFixed(1)}</span>
            <span className="ts-unit">km</span>
          </div>
          <span className="ts-label">Distance</span>
        </div>
        <div className="ts-item">
          <Gauge size={14} className="ts-ico green" />
          <div className="ts-data">
            <span className="ts-val">{avgSpeed}</span>
            <span className="ts-unit">km/h</span>
          </div>
          <span className="ts-label">Moy.</span>
        </div>
        <div className="ts-item">
          <Zap size={14} className="ts-ico orange" />
          <div className="ts-data">
            <span className="ts-val">{maxSpeed}</span>
            <span className="ts-unit">km/h</span>
          </div>
          <span className="ts-label">Max</span>
        </div>
        <div className="ts-item">
          <Battery size={14} className="ts-ico" />
          <div className="ts-data">
            <span className="ts-val">{battery}</span>
            <span className="ts-unit">%</span>
          </div>
          <span className="ts-label">Batt.</span>
        </div>
        <div className="ts-item">
          <Satellite size={14} className="ts-ico purple" />
          <div className="ts-data">
            <span className="ts-val">{gpsPoints}</span>
          </div>
          <span className="ts-label">Pts GPS</span>
        </div>
      </div>

      {/* Actions */}
      <div className="track-actions">
        <button className="ta-btn pause"><Pause size={14} /> Pause</button>
        <button className="ta-btn incident"><AlertTriangle size={14} /> Signaler</button>
        <button className="ta-btn done"><CheckCircle size={14} /> Terminer</button>
      </div>
    </div>
  )
}

/* ─── SCREEN: Report Incident ─── */
function ScreenIncident({ step }) {
  const types = [
    { icon: '🔧', label: 'Panne', active: step >= 2 },
    { icon: '🛞', label: 'Pneu crevé', active: false },
    { icon: '💥', label: 'Accident', active: false },
    { icon: '⛽', label: 'Carburant', active: false },
    { icon: '🚦', label: 'Infraction', active: false },
    { icon: '📋', label: 'Autre', active: false },
  ]

  return (
    <div className="screen-content incident-screen">
      <div className="inc-progress">
        <div className="inc-bar" style={{ width: `${(step / 6) * 100}%` }} />
      </div>
      <div className="inc-step-label">Étape {step}/6</div>

      {step === 1 && (
        <div className="inc-body">
          <h4>Type d'incident</h4>
          <div className="inc-types-grid">
            {types.map((t) => (
              <div key={t.label} className={`inc-type-card ${t.label === 'Panne' ? 'selected' : ''}`}>
                <span className="itc-icon">{t.icon}</span>
                <span className="itc-label">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="inc-body">
          <h4>Sévérité</h4>
          <div className="severity-options">
            <div className="sev-opt"><span className="sev-dot minor" />Mineur</div>
            <div className="sev-opt selected"><span className="sev-dot moderate" />Modéré</div>
            <div className="sev-opt"><span className="sev-dot major" />Majeur</div>
            <div className="sev-opt"><span className="sev-dot critical" />Critique</div>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="inc-body">
          <h4>Description</h4>
          <div className="inc-input-mock">Surchauffe moteur sur autoroute, témoin allumé...</div>
          <div className="inc-textarea-mock">Le témoin de température s'est allumé après 45km. Véhicule garé sur bande d'arrêt d'urgence.</div>
        </div>
      )}
      {step === 4 && (
        <div className="inc-body">
          <h4>Localisation</h4>
          <div className="inc-loc-card">
            <MapPin size={18} className="inc-loc-pin" />
            <div>
              <strong>Position capturée</strong>
              <span>Autoroute A1 — Km 45.2</span>
              <small>33.5731° N, 7.5898° W</small>
            </div>
          </div>
        </div>
      )}
      {step === 5 && (
        <div className="inc-body">
          <h4>Photos</h4>
          <div className="inc-photos">
            <div className="inc-photo taken" />
            <div className="inc-photo taken" />
            <div className="inc-photo add"><Camera size={20} /><span>Ajouter</span></div>
          </div>
        </div>
      )}
      {step === 6 && (
        <div className="inc-body">
          <h4>Confirmation</h4>
          <div className="inc-summary">
            <div className="incs-row"><span>Type</span><strong>🔧 Panne</strong></div>
            <div className="incs-row"><span>Sévérité</span><strong className="sev-mod">Modéré</strong></div>
            <div className="incs-row"><span>Position</span><strong>A1, Km 45.2</strong></div>
            <div className="incs-row"><span>Photos</span><strong>2 jointes</strong></div>
          </div>
          <button className="inc-submit"><AlertTriangle size={14} /> Envoyer le rapport</button>
        </div>
      )}

      <button className="inc-next">
        {step === 6 ? 'Confirmer' : 'Suivant'} <ArrowRight size={13} />
      </button>
    </div>
  )
}

/* ─── SCREENS SEQUENCE ─── */
const SCREEN_SEQUENCE = [
  { id: 'dashboard', label: 'Accueil', duration: 3500 },
  { id: 'start-1', label: 'Démarrage', duration: 2000 },
  { id: 'start-2', label: 'Kilométrage', duration: 2000 },
  { id: 'start-3', label: 'Carburant', duration: 2000 },
  { id: 'start-4', label: 'GPS', duration: 2500 },
  { id: 'tracking', label: 'Suivi GPS', duration: 10000 },
  { id: 'incident-1', label: 'Incident', duration: 2000 },
  { id: 'incident-2', label: 'Sévérité', duration: 2000 },
  { id: 'incident-3', label: 'Description', duration: 2000 },
  { id: 'incident-4', label: 'Position', duration: 2000 },
  { id: 'incident-5', label: 'Photos', duration: 2500 },
  { id: 'incident-6', label: 'Envoi', duration: 3000 },
]

/* ─── MAIN COMPONENT ─── */
export default function MobileDemo({ onClose }) {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)
  const [screenIdx, setScreenIdx] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  // Live stats
  const [distance, setDistance] = useState(0)
  const [speed, setSpeed] = useState(62)
  const [maxSpeed, setMaxSpeed] = useState(74)
  const [gpsPoints, setGpsPoints] = useState(0)
  const [battery, setBattery] = useState(85)

  // Animate in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  // Auto-advance screens
  useEffect(() => {
    if (!visible || closing) return
    const screen = SCREEN_SEQUENCE[screenIdx]
    const t = setTimeout(() => {
      setTransitioning(true)
      setTimeout(() => {
        setScreenIdx((i) => (i + 1) % SCREEN_SEQUENCE.length)
        setTransitioning(false)
      }, 300)
    }, screen.duration)
    return () => clearTimeout(t)
  }, [screenIdx, visible, closing])

  // Animate stats during tracking
  useEffect(() => {
    if (!visible || closing) return
    const current = SCREEN_SEQUENCE[screenIdx]
    if (current.id !== 'tracking') return
    const iv = setInterval(() => {
      setDistance((d) => Math.round((d + 0.08 + Math.random() * 0.12) * 100) / 100)
      setSpeed(Math.round(45 + Math.random() * 40))
      setMaxSpeed((p) => Math.max(p, Math.round(60 + Math.random() * 25)))
      setGpsPoints((g) => g + 1)
      setBattery((b) => Math.max(71, b - (Math.random() > 0.85 ? 1 : 0)))
    }, 1000)
    return () => clearInterval(iv)
  }, [screenIdx, visible, closing])

  const handleClose = useCallback(() => {
    setClosing(true)
    setTimeout(() => {
      setVisible(false)
      onClose()
    }, 500)
  }, [onClose])

  if (!visible) return null

  const current = SCREEN_SEQUENCE[screenIdx]

  const renderScreen = () => {
    if (current.id === 'dashboard') return <ScreenDashboard />
    if (current.id.startsWith('start-')) return <ScreenStartMission step={parseInt(current.id.split('-')[1])} />
    if (current.id === 'tracking') return <ScreenTracking speed={speed} distance={distance} maxSpeed={maxSpeed} gpsPoints={gpsPoints} battery={battery} />
    if (current.id.startsWith('incident-')) return <ScreenIncident step={parseInt(current.id.split('-')[1])} />
    return null
  }

  // Current phase label
  const phase = current.id === 'dashboard' ? 'Dashboard'
    : current.id.startsWith('start') ? 'Démarrage mission'
    : current.id === 'tracking' ? 'Suivi en direct'
    : 'Signalement incident'

  return (
    <div className={`md-overlay ${closing ? 'closing' : ''}`} onClick={handleClose}>
      <div className="md-content" onClick={(e) => e.stopPropagation()}>
        <button className="md-close" onClick={handleClose} aria-label="Fermer">
          <X size={20} />
        </button>

        {/* Left side */}
        <div className="md-left">
          <div className="md-badge">Application Mobile</div>
          <h2>
            Vos conducteurs<br />
            sur le <span className="md-gradient">terrain</span>
          </h2>
          <p>
            L'app mobile D-Fleet CI accompagne vos chauffeurs à chaque
            étape : démarrage de mission, suivi GPS en temps réel, et
            signalement d'incidents — le tout depuis leur smartphone.
          </p>

          {/* Screen progress */}
          <div className="md-timeline">
            {['Dashboard', 'Démarrage', 'Suivi GPS', 'Incidents'].map((label, i) => {
              const phases = [0, 1, 5, 6]
              const isActive = screenIdx >= phases[i]
              const isCurrent = (i === 0 && screenIdx === 0)
                || (i === 1 && screenIdx >= 1 && screenIdx <= 4)
                || (i === 2 && screenIdx === 5)
                || (i === 3 && screenIdx >= 6)
              return (
                <div key={label} className={`md-tl-item ${isActive ? 'active' : ''} ${isCurrent ? 'current' : ''}`}>
                  <div className="md-tl-dot" />
                  <span>{label}</span>
                </div>
              )
            })}
            <div className="md-tl-line">
              <div className="md-tl-fill" style={{ height: `${(screenIdx / (SCREEN_SEQUENCE.length - 1)) * 100}%` }} />
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="md-phone-wrapper">
          {/* Glow effect */}
          <div className="md-glow" />

          <div className="md-phone">
            {/* Dynamic Island */}
            <div className="dynamic-island">
              <div className="di-camera" />
            </div>

            {/* Status bar */}
            <div className="md-statusbar">
              <span>14:32</span>
              <div className="md-sb-right">
                <Signal size={10} />
                <Wifi size={10} />
                <div className="md-batt-icon">
                  <Battery size={10} />
                </div>
              </div>
            </div>

            {/* App bar (except dashboard) */}
            {current.id !== 'dashboard' && (
              <div className="md-appbar">
                <ChevronLeft size={18} />
                <div className="md-appbar-center">
                  <span className="md-appbar-phase">{phase}</span>
                  {current.id === 'tracking' && <span className="md-appbar-mission">M-0048 · Casablanca → Rabat</span>}
                </div>
                {current.id === 'tracking' && <span className="md-appbar-badge">Haute</span>}
              </div>
            )}

            {/* Screen */}
            <div className={`md-screen ${transitioning ? 'fade-out' : 'fade-in'}`}>
              {renderScreen()}
            </div>

            {/* Home bar */}
            <div className="md-home-bar" />
          </div>
        </div>
      </div>
    </div>
  )
}
