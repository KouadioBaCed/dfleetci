import { useState } from 'react'
import {
  LayoutGrid,
  Car,
  MapPin,
  Users,
  Wrench,
  Layers,
  Bell,
  Settings,
  AlertTriangle,
  Navigation,
  BarChart3,
  FileText,
  TrendingUp,
  TrendingDown,
  Clock,
  Star,
  Search,
  Plus,
  Eye,
  Edit3,
  Trash2,
  ChevronDown,
  Fuel,
  Activity,
  CheckCircle,
  XCircle,
  Filter,
  RefreshCw,
  Download,
  Calendar,
} from 'lucide-react'
import './Demo.css'

/* ─── Sidebar nav ─── */
const SIDEBAR_ITEMS = [
  { id: 'dashboard', icon: LayoutGrid, label: 'Dashboard' },
  { id: 'vehicles', icon: Car, label: 'Véhicules' },
  { id: 'drivers', icon: Users, label: 'Chauffeurs' },
  { id: 'missions', icon: Navigation, label: 'Missions' },
  { id: 'tracking', icon: MapPin, label: 'Suivi en direct' },
  { id: 'incidents', icon: AlertTriangle, label: 'Incidents' },
  { id: 'maintenance', icon: Wrench, label: 'Maintenance' },
  { id: 'fuel', icon: Fuel, label: 'Carburant' },
  { id: 'analytics', icon: BarChart3, label: 'Analytiques' },
  { id: 'reports', icon: FileText, label: 'Rapports' },
]

const TABS = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'vehicles', label: 'Véhicules' },
  { id: 'drivers', label: 'Chauffeurs' },
  { id: 'missions', label: 'Missions' },
  { id: 'tracking', label: 'Suivi GPS' },
  { id: 'incidents', label: 'Incidents' },
  { id: 'maintenance', label: 'Maintenance' },
  { id: 'fuel', label: 'Carburant' },
  { id: 'analytics', label: 'Analytiques' },
  { id: 'reports', label: 'Rapports' },
]

/* ─────────────────────────────────────── */
/*  DASHBOARD                              */
/* ─────────────────────────────────────── */
function DashboardPanel() {
  const stats = [
    { icon: Car, label: 'Véhicules', val: '47', sub: '42 disponibles', details: '3 en maintenance · 2 hors service', color: 'var(--primary)', trend: 'up' },
    { icon: Users, label: 'Chauffeurs', val: '23', sub: '18 actifs', details: '3 en pause · 2 indisponibles', color: 'var(--secondary)', trend: 'up' },
    { icon: Navigation, label: 'Missions', val: '12', sub: '8 complétées', details: "5 aujourd'hui · 28 cette semaine", color: 'var(--primary)', trend: 'up' },
    { icon: AlertTriangle, label: 'Alertes', val: '3', sub: '1 critique', details: '1 majeure · 1 modérée', color: '#DC2626', trend: 'down' },
  ]

  const activities = [
    { type: 'success', text: 'Mission #M-0047 complétée par Ahmed B.', time: 'Il y a 12 min' },
    { type: 'info', text: 'Nouvelle mission #M-0048 créée', time: 'Il y a 25 min' },
    { type: 'warning', text: 'Incident signalé — Pneu crevé (Toyota Hilux)', time: 'Il y a 1h' },
    { type: 'info', text: 'Véhicule Renault Kangoo passé en maintenance', time: 'Il y a 2h' },
    { type: 'success', text: 'Mission #M-0045 démarrée par Fatima K.', time: 'Il y a 3h' },
  ]

  const topDrivers = [
    { name: 'Ahmed B.', trips: 142, rating: 4.8 },
    { name: 'Fatima K.', trips: 128, rating: 4.7 },
    { name: 'Youssef M.', trips: 115, rating: 4.6 },
    { name: 'Salma R.', trips: 98, rating: 4.5 },
  ]

  return (
    <div>
      <div className="panel-header">
        <div>
          <h3 className="demo-panel-title">Bonjour, Admin</h3>
          <span className="panel-subtitle">Vue d'ensemble de votre flotte</span>
        </div>
        <span className="date-badge"><Calendar size={14} /> Mar 04, 2026</span>
      </div>

      <div className="dash-stats">
        {stats.map((s) => (
          <div className="dash-stat" key={s.label}>
            <div className="ds-header">
              <div className="ds-icon" style={{ background: s.color + '18', color: s.color }}>
                <s.icon size={18} />
              </div>
              {s.trend === 'up'
                ? <TrendingUp size={14} className="trend-up" />
                : <TrendingDown size={14} className="trend-down" />
              }
            </div>
            <div className="ds-val">{s.val}</div>
            <div className="ds-label">{s.label}</div>
            <div className="ds-sub">{s.sub}</div>
            <div className="ds-details">{s.details}</div>
          </div>
        ))}
      </div>

      <div className="dash-grid">
        <div className="dash-card">
          <h4><Activity size={16} /> Activité récente</h4>
          <div className="activity-list">
            {activities.map((a, i) => (
              <div className={`activity-item ${a.type}`} key={i}>
                <div className={`activity-dot ${a.type}`} />
                <div className="activity-body">
                  <span>{a.text}</span>
                  <small>{a.time}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="dash-card">
          <h4><Star size={16} /> Top conducteurs</h4>
          <div className="top-drivers">
            {topDrivers.map((d, i) => (
              <div className="driver-row" key={d.name}>
                <div className="driver-rank">#{i + 1}</div>
                <div className="driver-avatar">{d.name.charAt(0)}</div>
                <div className="driver-info">
                  <strong>{d.name}</strong>
                  <small>{d.trips} trajets</small>
                </div>
                <div className="driver-rating"><Star size={12} /> {d.rating}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <button className="qa-btn"><Car size={16} /> <span>47 véhicules · 42 dispo</span></button>
        <button className="qa-btn secondary"><Navigation size={16} /> <span>12 en cours · 5 en attente</span></button>
        <button className="qa-btn outline"><BarChart3 size={16} /> <span>Voir les rapports</span></button>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────── */
/*  VEHICLES                               */
/* ─────────────────────────────────────── */
function VehiclesPanel() {
  const vehicles = [
    { name: 'Toyota Hilux', plate: 'AB-123-CD', brand: 'Toyota', year: 2023, km: '45 230', fuel: 'Diesel', status: 'available', driver: 'Ahmed B.' },
    { name: 'Renault Kangoo', plate: 'EF-456-GH', brand: 'Renault', year: 2022, km: '32 100', fuel: 'Essence', status: 'in_use', driver: 'Fatima K.' },
    { name: 'Peugeot Partner', plate: 'IJ-789-KL', brand: 'Peugeot', year: 2021, km: '67 800', fuel: 'Diesel', status: 'maintenance', driver: '—' },
    { name: 'Ford Transit', plate: 'MN-012-OP', brand: 'Ford', year: 2023, km: '28 500', fuel: 'Diesel', status: 'in_use', driver: 'Youssef M.' },
    { name: 'Dacia Duster', plate: 'QR-345-ST', brand: 'Dacia', year: 2020, km: '89 200', fuel: 'Essence', status: 'out_of_service', driver: '—' },
  ]
  const statusMap = {
    available: { label: 'Disponible', cls: 'available' },
    in_use: { label: 'En mission', cls: 'in-use' },
    maintenance: { label: 'Maintenance', cls: 'maintenance' },
    out_of_service: { label: 'Hors service', cls: 'out-of-service' },
  }
  const stats = [
    { label: 'Total', val: 47, color: 'var(--primary)' },
    { label: 'Disponibles', val: 42, color: 'var(--primary)' },
    { label: 'En mission', val: 3, color: 'var(--secondary)' },
    { label: 'Maintenance', val: 2, color: '#6B7280' },
  ]

  return (
    <div>
      <div className="panel-header">
        <div>
          <h3 className="demo-panel-title">Véhicules</h3>
          <span className="panel-subtitle">Gérez votre flotte de véhicules</span>
        </div>
        <div className="panel-actions">
          <button className="icon-btn"><RefreshCw size={14} /></button>
          <button className="add-btn"><Plus size={14} /> Nouveau véhicule</button>
        </div>
      </div>

      <div className="mini-stats">
        {stats.map((s) => (
          <div className="mini-stat" key={s.label}>
            <span className="ms-val" style={{ color: s.color }}>{s.val}</span>
            <span className="ms-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="toolbar">
        <div className="search-box"><Search size={14} /><input placeholder="Rechercher..." readOnly /></div>
        <div className="filter-box"><Filter size={14} /> <span>Tous</span> <ChevronDown size={12} /></div>
      </div>

      <div className="table-wrapper">
        <table className="vehicle-table">
          <thead>
            <tr>
              <th>Véhicule</th>
              <th>Immatriculation</th>
              <th>Statut</th>
              <th>Kilométrage</th>
              <th>Carburant</th>
              <th>Année</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((v) => (
              <tr key={v.plate}>
                <td>
                  <div className="cell-vehicle">
                    <div className="v-icon"><Car size={16} /></div>
                    <div><strong>{v.name}</strong><small>{v.driver !== '—' ? v.driver : 'Non assigné'}</small></div>
                  </div>
                </td>
                <td><code className="plate">{v.plate}</code></td>
                <td><span className={`status-badge ${statusMap[v.status].cls}`}><span className="status-dot" />{statusMap[v.status].label}</span></td>
                <td>{v.km} km</td>
                <td>{v.fuel}</td>
                <td><span className="year-badge">{v.year}</span></td>
                <td>
                  <div className="row-actions">
                    <button className="ra-btn"><Eye size={13} /></button>
                    <button className="ra-btn"><Edit3 size={13} /></button>
                    <button className="ra-btn danger"><Trash2 size={13} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────── */
/*  DRIVERS                                */
/* ─────────────────────────────────────── */
function DriversPanel() {
  const drivers = [
    { name: 'Ahmed Benali', id: 'EMP-001', status: 'available', phone: '+212 6 12 34 56 78', trips: 142, rating: 4.8 },
    { name: 'Fatima Khalid', id: 'EMP-002', status: 'on_mission', phone: '+212 6 23 45 67 89', trips: 128, rating: 4.7 },
    { name: 'Youssef Mansouri', id: 'EMP-003', status: 'available', phone: '+212 6 34 56 78 90', trips: 115, rating: 4.6 },
    { name: 'Salma Rahal', id: 'EMP-004', status: 'on_break', phone: '+212 6 45 67 89 01', trips: 98, rating: 4.5 },
    { name: 'Karim Daoudi', id: 'EMP-005', status: 'off_duty', phone: '+212 6 56 78 90 12', trips: 76, rating: 4.3 },
    { name: 'Nadia Fassi', id: 'EMP-006', status: 'available', phone: '+212 6 67 89 01 23', trips: 89, rating: 4.4 },
  ]
  const statusMap = {
    available: { label: 'Disponible', cls: 'available' },
    on_mission: { label: 'En mission', cls: 'in-use' },
    on_break: { label: 'En pause', cls: 'maintenance' },
    off_duty: { label: 'Indisponible', cls: 'out-of-service' },
  }

  return (
    <div>
      <div className="panel-header">
        <div>
          <h3 className="demo-panel-title">Chauffeurs</h3>
          <span className="panel-subtitle">Gérez votre équipe de chauffeurs</span>
        </div>
        <button className="add-btn"><Plus size={14} /> Nouveau chauffeur</button>
      </div>

      <div className="mini-stats">
        <div className="mini-stat"><span className="ms-val" style={{ color: 'var(--primary)' }}>23</span><span className="ms-label">Total</span></div>
        <div className="mini-stat"><span className="ms-val" style={{ color: 'var(--primary)' }}>18</span><span className="ms-label">Disponibles</span></div>
        <div className="mini-stat"><span className="ms-val" style={{ color: 'var(--secondary)' }}>3</span><span className="ms-label">En mission</span></div>
        <div className="mini-stat"><span className="ms-val" style={{ color: '#6B7280' }}>2</span><span className="ms-label">En pause</span></div>
      </div>

      <div className="toolbar">
        <div className="search-box"><Search size={14} /><input placeholder="Rechercher un chauffeur..." readOnly /></div>
        <div className="filter-box"><Filter size={14} /> <span>Tous</span> <ChevronDown size={12} /></div>
      </div>

      <div className="drivers-grid">
        {drivers.map((d) => (
          <div className="driver-card" key={d.id}>
            <div className="dc-top">
              <div className="dc-avatar" data-status={d.status}>{d.name.charAt(0)}</div>
              <div className="dc-info">
                <strong>{d.name}</strong>
                <small>{d.id}</small>
              </div>
              <span className={`status-badge ${statusMap[d.status].cls}`}>
                <span className="status-dot" />{statusMap[d.status].label}
              </span>
            </div>
            <div className="dc-details">
              <span>{d.phone}</span>
            </div>
            <div className="dc-stats">
              <div><Navigation size={12} /> {d.trips} trajets</div>
              <div><Star size={12} /> {d.rating}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────── */
/*  MISSIONS                               */
/* ─────────────────────────────────────── */
function MissionsPanel() {
  const missions = [
    { code: 'M-0048', title: 'Livraison Casablanca → Rabat', status: 'in_progress', priority: 'high', driver: 'Ahmed B.', vehicle: 'AB-123-CD', start: '09:00', end: '14:00', distance: '87 km' },
    { code: 'M-0047', title: 'Transport matériel Fès', status: 'completed', priority: 'medium', driver: 'Fatima K.', vehicle: 'EF-456-GH', start: '08:00', end: '12:00', distance: '196 km' },
    { code: 'M-0049', title: 'Transfert personnel Tanger', status: 'pending', priority: 'urgent', driver: '—', vehicle: '—', start: '15:00', end: '20:00', distance: '310 km' },
    { code: 'M-0050', title: 'Collecte documents Marrakech', status: 'assigned', priority: 'low', driver: 'Youssef M.', vehicle: 'MN-012-OP', start: '07:00', end: '18:00', distance: '243 km' },
    { code: 'M-0046', title: 'Livraison urgente Agadir', status: 'cancelled', priority: 'high', driver: 'Salma R.', vehicle: 'QR-345-ST', start: '06:00', end: '15:00', distance: '460 km' },
  ]
  const statusMap = {
    pending: { label: 'En attente', cls: 'pending' },
    assigned: { label: 'Assignée', cls: 'assigned' },
    in_progress: { label: 'En cours', cls: 'in-progress-m' },
    completed: { label: 'Terminée', cls: 'completed' },
    cancelled: { label: 'Annulée', cls: 'cancelled' },
  }
  const priorityMap = {
    low: { label: 'Basse', cls: 'low' },
    medium: { label: 'Moyenne', cls: 'medium' },
    high: { label: 'Haute', cls: 'high' },
    urgent: { label: 'Urgente', cls: 'urgent' },
  }

  return (
    <div>
      <div className="panel-header">
        <div>
          <h3 className="demo-panel-title">Missions</h3>
          <span className="panel-subtitle">Planifiez et suivez vos missions</span>
        </div>
        <button className="add-btn"><Plus size={14} /> Nouvelle mission</button>
      </div>

      <div className="toolbar">
        <div className="search-box"><Search size={14} /><input placeholder="Rechercher une mission..." readOnly /></div>
        <div className="filter-group">
          <div className="filter-box"><span>Statut</span> <ChevronDown size={12} /></div>
          <div className="filter-box"><span>Priorité</span> <ChevronDown size={12} /></div>
        </div>
      </div>

      <div className="missions-list">
        {missions.map((m) => (
          <div className="mission-card" key={m.code}>
            <div className="mc-top">
              <code className="mission-code">{m.code}</code>
              <div className="mc-badges">
                <span className={`priority-badge ${priorityMap[m.priority].cls}`}>{priorityMap[m.priority].label}</span>
                <span className={`status-badge ${statusMap[m.status].cls}`}><span className="status-dot" />{statusMap[m.status].label}</span>
              </div>
            </div>
            <h4 className="mc-title">{m.title}</h4>
            <div className="mc-meta">
              <span><Users size={12} /> {m.driver}</span>
              <span><Car size={12} /> {m.vehicle}</span>
              <span><Clock size={12} /> {m.start} — {m.end}</span>
              <span><MapPin size={12} /> {m.distance}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────── */
/*  TRACKING                               */
/* ─────────────────────────────────────── */
function TrackingPanel() {
  const tracked = [
    { vehicle: 'Toyota Hilux', plate: 'AB-123-CD', driver: 'Ahmed B.', mission: 'M-0048', speed: '72 km/h', battery: '85%', top: '28%', left: '35%' },
    { vehicle: 'Renault Kangoo', plate: 'EF-456-GH', driver: 'Fatima K.', mission: 'M-0045', speed: '58 km/h', battery: '62%', top: '55%', left: '65%' },
    { vehicle: 'Ford Transit', plate: 'MN-012-OP', driver: 'Youssef M.', mission: 'M-0050', speed: '0 km/h', battery: '91%', top: '42%', left: '22%' },
  ]

  return (
    <div>
      <div className="panel-header">
        <div>
          <h3 className="demo-panel-title">Suivi en direct</h3>
          <span className="panel-subtitle">Positions en temps réel via WebSocket</span>
        </div>
        <div className="live-badge"><span className="live-dot" /> En direct</div>
      </div>

      <div className="tracking-layout">
        <div className="demo-map large">
          {tracked.map((t, i) => (
            <div key={i} className="map-pin labeled" style={{ top: t.top, left: t.left, animationDelay: `${i * 0.5}s` }}>
              <div className="pin-tooltip">{t.plate} · {t.speed}</div>
            </div>
          ))}
          <div className="map-roads">
            <div className="road h" style={{ top: '40%' }} />
            <div className="road v" style={{ left: '50%' }} />
            <div className="road h" style={{ top: '70%' }} />
          </div>
        </div>
        <div className="tracking-list">
          {tracked.map((t) => (
            <div className="track-item" key={t.plate}>
              <div className="ti-header">
                <strong>{t.vehicle}</strong>
                <code>{t.plate}</code>
              </div>
              <div className="ti-details">
                <span><Users size={11} /> {t.driver}</span>
                <span><Navigation size={11} /> {t.mission}</span>
                <span><Activity size={11} /> {t.speed}</span>
                <span className="battery">🔋 {t.battery}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────── */
/*  INCIDENTS                              */
/* ─────────────────────────────────────── */
function IncidentsPanel() {
  const incidents = [
    { type: 'Pneu crevé', severity: 'moderate', title: 'Crevaison sur autoroute A1', vehicle: 'AB-123-CD', driver: 'Ahmed B.', time: 'Il y a 2h', resolved: false, cost: '450 MAD' },
    { type: 'Panne', severity: 'major', title: 'Panne moteur — surchauffe', vehicle: 'QR-345-ST', driver: 'Salma R.', time: 'Hier, 16:30', resolved: false, cost: '2 800 MAD' },
    { type: 'Accident', severity: 'critical', title: 'Accrochage parking client', vehicle: 'EF-456-GH', driver: 'Fatima K.', time: '02/03/2026', resolved: true, cost: '5 200 MAD' },
    { type: 'Infraction', severity: 'minor', title: 'Excès de vitesse — 78km/h en zone 60', vehicle: 'MN-012-OP', driver: 'Youssef M.', time: '01/03/2026', resolved: true, cost: '300 MAD' },
  ]
  const severityMap = {
    minor: { label: 'Mineur', cls: 'minor' },
    moderate: { label: 'Modéré', cls: 'moderate' },
    major: { label: 'Majeur', cls: 'major' },
    critical: { label: 'Critique', cls: 'critical' },
  }

  return (
    <div>
      <div className="panel-header">
        <div>
          <h3 className="demo-panel-title">Incidents</h3>
          <span className="panel-subtitle">Suivi et résolution des incidents</span>
        </div>
        <button className="add-btn"><Plus size={14} /> Nouveau incident</button>
      </div>

      <div className="toolbar">
        <div className="search-box"><Search size={14} /><input placeholder="Rechercher..." readOnly /></div>
        <div className="filter-group">
          <div className="filter-box"><span>Type</span> <ChevronDown size={12} /></div>
          <div className="filter-box"><span>Sévérité</span> <ChevronDown size={12} /></div>
        </div>
      </div>

      <div className="incidents-list">
        {incidents.map((inc, i) => (
          <div className={`incident-card ${inc.resolved ? 'resolved' : ''}`} key={i}>
            <div className="inc-top">
              <span className={`severity-badge ${severityMap[inc.severity].cls}`}>{severityMap[inc.severity].label}</span>
              <span className="inc-type">{inc.type}</span>
              <span className={`resolve-badge ${inc.resolved ? 'yes' : 'no'}`}>
                {inc.resolved ? <><CheckCircle size={12} /> Résolu</> : <><XCircle size={12} /> Non résolu</>}
              </span>
            </div>
            <h4>{inc.title}</h4>
            <div className="inc-meta">
              <span><Car size={12} /> {inc.vehicle}</span>
              <span><Users size={12} /> {inc.driver}</span>
              <span><Clock size={12} /> {inc.time}</span>
              <span className="inc-cost">{inc.cost}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────── */
/*  MAINTENANCE                            */
/* ─────────────────────────────────────── */
function MaintenancePanel() {
  const records = [
    { type: 'Vidange', vehicle: 'AB-123-CD', status: 'scheduled', date: '10/03/2026', cost: '650 MAD', km: '50 000', tech: 'Garage Central' },
    { type: 'Changement pneus', vehicle: 'EF-456-GH', status: 'in_progress', date: '04/03/2026', cost: '3 200 MAD', km: '32 100', tech: 'PneuPro' },
    { type: 'Contrôle technique', vehicle: 'IJ-789-KL', status: 'completed', date: '28/02/2026', cost: '400 MAD', km: '67 800', tech: 'AutoContrôle' },
    { type: 'Freins', vehicle: 'MN-012-OP', status: 'scheduled', date: '15/03/2026', cost: '1 800 MAD', km: '30 000', tech: 'Garage Central' },
    { type: 'Réparation', vehicle: 'QR-345-ST', status: 'completed', date: '25/02/2026', cost: '4 500 MAD', km: '89 200', tech: 'MecaExpert' },
  ]
  const statusMap = {
    scheduled: { label: 'Planifié', cls: 'available' },
    in_progress: { label: 'En cours', cls: 'in-use' },
    completed: { label: 'Terminé', cls: 'completed' },
  }
  const typeColors = {
    'Vidange': 'var(--primary)',
    'Changement pneus': 'var(--secondary)',
    'Contrôle technique': '#7C3AED',
    'Freins': '#DC2626',
    'Réparation': '#EA580C',
  }

  return (
    <div>
      <div className="panel-header">
        <div>
          <h3 className="demo-panel-title">Maintenance</h3>
          <span className="panel-subtitle">Entretiens planifiés et historique</span>
        </div>
        <button className="add-btn"><Plus size={14} /> Planifier</button>
      </div>

      <div className="mini-stats">
        <div className="mini-stat"><span className="ms-val" style={{ color: 'var(--primary)' }}>12</span><span className="ms-label">Total</span></div>
        <div className="mini-stat"><span className="ms-val" style={{ color: 'var(--primary)' }}>4</span><span className="ms-label">Planifiés</span></div>
        <div className="mini-stat"><span className="ms-val" style={{ color: 'var(--secondary)' }}>2</span><span className="ms-label">En cours</span></div>
        <div className="mini-stat"><span className="ms-val" style={{ color: '#1E40AF' }}>6 540 MAD</span><span className="ms-label">Coût ce mois</span></div>
      </div>

      <div className="table-wrapper">
        <table className="vehicle-table">
          <thead>
            <tr><th>Type</th><th>Véhicule</th><th>Statut</th><th>Date</th><th>Coût</th><th>Technicien</th></tr>
          </thead>
          <tbody>
            {records.map((r, i) => (
              <tr key={i}>
                <td><span className="type-dot" style={{ background: typeColors[r.type] }} />{r.type}</td>
                <td><code className="plate">{r.vehicle}</code></td>
                <td><span className={`status-badge ${statusMap[r.status].cls}`}><span className="status-dot" />{statusMap[r.status].label}</span></td>
                <td>{r.date}</td>
                <td><strong>{r.cost}</strong></td>
                <td>{r.tech}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────── */
/*  FUEL                                   */
/* ─────────────────────────────────────── */
function FuelPanel() {
  const records = [
    { vehicle: 'AB-123-CD', fuel: 'Diesel', qty: '55 L', cost: '770 MAD', odo: '45 230 km', date: '04/03/2026', priceL: '14.0 MAD/L' },
    { vehicle: 'EF-456-GH', fuel: 'Essence', qty: '42 L', cost: '630 MAD', odo: '32 100 km', date: '03/03/2026', priceL: '15.0 MAD/L' },
    { vehicle: 'MN-012-OP', fuel: 'Diesel', qty: '60 L', cost: '840 MAD', odo: '28 500 km', date: '02/03/2026', priceL: '14.0 MAD/L' },
    { vehicle: 'QR-345-ST', fuel: 'Essence', qty: '38 L', cost: '570 MAD', odo: '89 200 km', date: '01/03/2026', priceL: '15.0 MAD/L' },
  ]

  return (
    <div>
      <div className="panel-header">
        <div>
          <h3 className="demo-panel-title">Carburant</h3>
          <span className="panel-subtitle">Suivi de consommation et coûts</span>
        </div>
        <button className="add-btn"><Plus size={14} /> Ajouter un plein</button>
      </div>

      <div className="mini-stats">
        <div className="mini-stat"><span className="ms-val" style={{ color: 'var(--primary)' }}>1 240 L</span><span className="ms-label">Consommation totale</span></div>
        <div className="mini-stat"><span className="ms-val" style={{ color: 'var(--secondary)' }}>7.2 L/100</span><span className="ms-label">Moyenne</span></div>
        <div className="mini-stat"><span className="ms-val" style={{ color: 'var(--primary)' }}>17 360 MAD</span><span className="ms-label">Coût total</span></div>
        <div className="mini-stat"><span className="ms-val" style={{ color: '#059669' }}>1.4 MAD/km</span><span className="ms-label">Coût/km</span></div>
      </div>

      <div className="table-wrapper">
        <table className="vehicle-table">
          <thead>
            <tr><th>Véhicule</th><th>Type</th><th>Quantité</th><th>Coût</th><th>Compteur</th><th>Prix/L</th><th>Date</th></tr>
          </thead>
          <tbody>
            {records.map((r, i) => (
              <tr key={i}>
                <td><code className="plate">{r.vehicle}</code></td>
                <td><span className={`fuel-badge ${r.fuel === 'Diesel' ? 'diesel' : 'essence'}`}>{r.fuel === 'Diesel' ? '🛢️' : '⛽'} {r.fuel}</span></td>
                <td><strong>{r.qty}</strong></td>
                <td>{r.cost}</td>
                <td>{r.odo}</td>
                <td>{r.priceL}</td>
                <td>{r.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────── */
/*  ANALYTICS                              */
/* ─────────────────────────────────────── */
function AnalyticsPanel() {
  const chartData = [
    { month: 'Jan', val: 65 }, { month: 'Fév', val: 72 }, { month: 'Mar', val: 58 },
    { month: 'Avr', val: 80 }, { month: 'Mai', val: 75 }, { month: 'Jun', val: 90 },
    { month: 'Jul', val: 85 }, { month: 'Aoû', val: 68 }, { month: 'Sep', val: 77 },
    { month: 'Oct', val: 62 }, { month: 'Nov', val: 70 }, { month: 'Déc', val: 55 },
  ]
  const vehicleRanking = [
    { name: 'Toyota Hilux', consumption: '7.1 L/100', cost: '4 200 MAD', efficiency: 'Efficient' },
    { name: 'Ford Transit', consumption: '8.3 L/100', cost: '5 100 MAD', efficiency: 'Attention' },
    { name: 'Dacia Duster', consumption: '9.8 L/100', cost: '6 800 MAD', efficiency: 'Critique' },
  ]
  const effMap = { 'Efficient': 'efficient', 'Attention': 'warning', 'Critique': 'critical' }

  return (
    <div>
      <div className="panel-header">
        <div>
          <h3 className="demo-panel-title">Analytiques</h3>
          <span className="panel-subtitle">Performance et consommation de la flotte</span>
        </div>
        <div className="filter-box"><Calendar size={14} /> <span>Ce mois</span> <ChevronDown size={12} /></div>
      </div>

      <div className="analytics-grid">
        <div className="an-card full">
          <h4>Tendance de consommation mensuelle</h4>
          <div className="chart-bars tall">
            {chartData.map((d, i) => (
              <div
                key={d.month}
                className="cb"
                style={{
                  height: d.val + '%',
                  background: i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)',
                  opacity: i % 2 === 0 ? 1 : 0.7,
                }}
                data-label={d.month}
              />
            ))}
          </div>
        </div>
        <div className="an-card">
          <h4>Classement véhicules</h4>
          <div className="ranking-list">
            {vehicleRanking.map((v, i) => (
              <div className="rank-item" key={v.name}>
                <div className="rank-num">#{i + 1}</div>
                <div className="rank-info">
                  <strong>{v.name}</strong>
                  <small>{v.consumption} · {v.cost}</small>
                </div>
                <span className={`eff-badge ${effMap[v.efficiency]}`}>{v.efficiency}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="an-card">
          <h4>Résumé</h4>
          <div className="summary-items">
            <div className="summary-row"><span>Distance totale</span><strong>12 450 km</strong></div>
            <div className="summary-row"><span>Coûts carburant</span><strong>17 360 MAD</strong></div>
            <div className="summary-row"><span>Coûts maintenance</span><strong>10 550 MAD</strong></div>
            <div className="summary-row"><span>Missions complétées</span><strong>87</strong></div>
            <div className="summary-row"><span>Incidents</span><strong>4</strong></div>
            <div className="summary-row"><span>Taux de résolution</span><strong>75%</strong></div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────── */
/*  REPORTS                                */
/* ─────────────────────────────────────── */
function ReportsPanel() {
  const reports = [
    { icon: BarChart3, title: 'Rapport global', desc: 'Vue d\'ensemble complète de la flotte', color: 'var(--primary)' },
    { icon: Fuel, title: 'Rapport carburant', desc: 'Consommation et coûts par véhicule', color: 'var(--secondary)' },
    { icon: Navigation, title: 'Rapport trajets', desc: 'Détails des missions et distances', color: '#2563eb' },
    { icon: Wrench, title: 'Rapport maintenance', desc: 'Entretiens planifiés et réalisés', color: '#7C3AED' },
    { icon: AlertTriangle, title: 'Rapport incidents', desc: 'Incidents par type et sévérité', color: '#DC2626' },
  ]

  return (
    <div>
      <div className="panel-header">
        <div>
          <h3 className="demo-panel-title">Rapports</h3>
          <span className="panel-subtitle">Générez et exportez vos rapports PDF</span>
        </div>
        <div className="panel-actions">
          <div className="filter-box"><Calendar size={14} /> <span>Ce mois</span> <ChevronDown size={12} /></div>
        </div>
      </div>

      <div className="toolbar">
        <div className="filter-group">
          <div className="filter-box"><Car size={14} /> <span>Véhicule</span> <ChevronDown size={12} /></div>
          <div className="filter-box"><Users size={14} /> <span>Chauffeur</span> <ChevronDown size={12} /></div>
        </div>
        <button className="add-btn"><Download size={14} /> Exporter tout (PDF)</button>
      </div>

      <div className="reports-grid">
        {reports.map((r) => (
          <div className="report-card" key={r.title}>
            <div className="rc-icon" style={{ background: r.color + '18', color: r.color }}>
              <r.icon size={22} />
            </div>
            <div className="rc-content">
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
            <button className="rc-dl" style={{ color: r.color }}><Download size={16} /> PDF</button>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Panel registry ─── */
const PANELS = {
  dashboard: DashboardPanel,
  vehicles: VehiclesPanel,
  drivers: DriversPanel,
  missions: MissionsPanel,
  tracking: TrackingPanel,
  incidents: IncidentsPanel,
  maintenance: MaintenancePanel,
  fuel: FuelPanel,
  analytics: AnalyticsPanel,
  reports: ReportsPanel,
}

/* ─── Main Demo component ─── */
export default function Demo() {
  const [activePanel, setActivePanel] = useState('dashboard')
  const ActiveComponent = PANELS[activePanel] || DashboardPanel

  return (
    <section className="demo" id="demo">
      <div className="demo-inner">
        <div className="demo-header">
          <span className="section-label">Démo interactive</span>
          <h2 className="section-title">Découvrez l'interface complète</h2>
          <p className="section-sub center">
            Naviguez dans les différentes sections de D-Fleet CI comme si vous utilisiez l'application.
          </p>
        </div>

        <div className="demo-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`demo-tab ${activePanel === tab.id ? 'active' : ''}`}
              onClick={() => setActivePanel(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="demo-screen">
          <div className="demo-topbar">
            <div className="topbar-left">
              <div className="topbar-logo"><Car size={16} /></div>
              <span>D-Fleet CI Fleet Management</span>
            </div>
            <div className="demo-topbar-actions">
              <div className="action"><Bell size={16} /><span className="notif-dot" /></div>
              <div className="action"><Settings size={16} /></div>
              <div className="topbar-avatar">A</div>
            </div>
          </div>
          <div className="demo-content">
            <div className="demo-sidebar">
              <div className="sidebar-brand">
                <div className="sb-logo"><Car size={18} /></div>
                <div><strong>D-Fleet CI</strong><small>Fleet Management</small></div>
              </div>
              {SIDEBAR_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className={`demo-nav-item ${activePanel === item.id ? 'active' : ''}`}
                  onClick={() => setActivePanel(item.id)}
                >
                  <item.icon size={16} />
                  {item.label}
                </div>
              ))}
            </div>
            <div className="demo-main">
              <ActiveComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
