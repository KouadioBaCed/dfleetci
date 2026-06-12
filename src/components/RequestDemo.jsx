import { Check, CalendarClock, ShieldCheck, Sparkles } from 'lucide-react'
import { DEMO_MESSAGE, WHATSAPP_DEMO_URL } from '../whatsapp'
import './RequestDemo.css'

const BENEFITS = [
  { icon: Sparkles, text: 'Une démo adaptée à la taille et aux besoins de votre flotte' },
  { icon: CalendarClock, text: 'Un créneau de 30 min, en visio ou sur le terrain' },
  { icon: ShieldCheck, text: "Sans engagement — vous repartez avec un plan d'usage concret" },
]

export default function RequestDemo() {
  return (
    <section className="reqdemo" id="demo">
      <div className="reqdemo-inner">
        {/* ─── Colonne texte ─── */}
        <div className="reqdemo-text">
          <span className="section-label">Démo personnalisée</span>
          <h2 className="reqdemo-title">
            Découvrez D-Fleet CI<br />
            <span className="reqdemo-accent">en conditions réelles</span>
          </h2>
          <p className="reqdemo-sub">
            Plutôt qu'une démo générique, nous configurons la plateforme autour de
            votre parc. Écrivez-nous sur WhatsApp : nous revenons vers vous sous 24h
            pour planifier une présentation sur mesure.
          </p>

          <ul className="reqdemo-benefits">
            {BENEFITS.map((b) => (
              <li key={b.text}>
                <span className="rb-icon"><b.icon size={16} /></span>
                {b.text}
              </li>
            ))}
          </ul>

          <a
            className="reqdemo-btn"
            href={WHATSAPP_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden="true">
              <path d="M16.004 2.667A13.26 13.26 0 0 0 2.667 15.89a13.16 13.16 0 0 0 1.795 6.65L2.667 29.333l7.013-1.838A13.28 13.28 0 0 0 16.004 29.2 13.26 13.26 0 0 0 29.333 15.89 13.26 13.26 0 0 0 16.004 2.667Zm0 24.266a11 11 0 0 1-5.607-1.535l-.402-.239-4.166 1.093 1.113-4.063-.263-.418a10.92 10.92 0 0 1-1.679-5.88A10.99 10.99 0 0 1 16.004 4.933 10.99 10.99 0 0 1 27.067 15.89 10.99 10.99 0 0 1 16.004 26.933Zm6.03-8.227c-.33-.166-1.956-.965-2.26-1.076-.303-.11-.524-.166-.744.166-.22.33-.854 1.076-1.048 1.297-.193.22-.386.248-.716.083-.33-.166-1.394-.514-2.655-1.639-.981-.874-1.644-1.954-1.837-2.284-.193-.33-.02-.51.145-.674.149-.148.33-.386.496-.58.165-.192.22-.33.33-.55.11-.22.056-.413-.028-.58-.083-.165-.744-1.793-1.02-2.455-.268-.644-.54-.557-.744-.567l-.634-.01a1.22 1.22 0 0 0-.882.413c-.303.33-1.158 1.131-1.158 2.759 0 1.628 1.186 3.2 1.351 3.42.166.22 2.334 3.562 5.654 4.997.79.34 1.407.544 1.887.697.793.252 1.515.216 2.085.131.636-.095 1.956-.8 2.232-1.572.275-.773.275-1.435.193-1.573-.083-.138-.303-.22-.634-.386Z" />
            </svg>
            Demander une démo sur WhatsApp
          </a>

          <span className="reqdemo-note">Réponse sous 24h · Sans engagement</span>
        </div>

        {/* ─── Aperçu du message WhatsApp ─── */}
        <div className="reqdemo-preview">
          <div className="wa-window">
            <div className="wa-header">
              <div className="wa-avatar">D</div>
              <div className="wa-meta">
                <strong>D-Fleet CI</strong>
                <span><span className="wa-online-dot" /> en ligne</span>
              </div>
            </div>

            <div className="wa-body">
              <div className="wa-bubble">
                {DEMO_MESSAGE.split('\n').map((line, i) =>
                  line === '' ? <br key={i} /> : <p key={i}>{line}</p>
                )}
                <span className="wa-time">12:30 <Check size={12} className="wa-check" /></span>
              </div>
            </div>

            <div className="wa-inputbar">
              <span className="wa-input-placeholder">Votre message…</span>
              <span className="wa-send">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M3 20.5v-6l8-2.5-8-2.5v-6l19 8.5z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
