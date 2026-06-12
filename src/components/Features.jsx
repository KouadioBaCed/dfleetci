import {
  Car,
  Users,
  Wrench,
  Layers,
  MapPin,
  PieChart,
} from 'lucide-react'
import './Features.css'

const FEATURES = [
  {
    icon: Car,
    title: 'Suivi des véhicules',
    desc: "Visualisez l'état de chaque véhicule en temps réel : position, kilométrage, statut technique et disponibilité.",
    color: 'var(--primary)',
    bg: 'var(--primary-light)',
  },
  {
    icon: Users,
    title: 'Gestion des conducteurs',
    desc: 'Assignez des conducteurs, suivez leurs permis, formations et performances de conduite.',
    color: 'var(--secondary)',
    bg: 'var(--secondary-light)',
  },
  {
    icon: Wrench,
    title: 'Maintenance préventive',
    desc: 'Planifiez les entretiens, recevez des alertes automatiques et réduisez les pannes imprévues.',
    color: '#2563eb',
    bg: '#dbeafe',
  },
  {
    icon: Layers,
    title: 'Gestion du carburant',
    desc: 'Suivez la consommation, détectez les anomalies et optimisez vos dépenses en carburant.',
    color: '#d97706',
    bg: '#fef3c7',
  },
  {
    icon: MapPin,
    title: 'Suivi GPS en temps réel',
    desc: 'Localisez vos véhicules sur une carte interactive avec historique des trajets et géofencing.',
    color: '#db2777',
    bg: '#fce7f3',
  },
  {
    icon: PieChart,
    title: 'Rapports et analytics',
    desc: 'Tableaux de bord détaillés, rapports personnalisables et indicateurs clés de performance.',
    color: '#9333ea',
    bg: '#f3e8ff',
  },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <span className="section-label">Fonctionnalités</span>
      <h2 className="section-title">Tout ce qu'il faut pour gérer votre flotte</h2>
      <p className="section-sub">
        Des outils puissants et intuitifs pour optimiser chaque aspect de votre parc automobile.
      </p>
      <div className="features-grid">
        {FEATURES.map((f) => (
          <div className="feature-card" key={f.title}>
            <div className="feature-icon" style={{ background: f.bg }}>
              <f.icon size={24} color={f.color} />
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
