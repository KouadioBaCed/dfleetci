import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <img src="/logos/download.png" alt="D-Fleet CI" className="footer-logo" />
      <p>&copy; {new Date().getFullYear()} D-Fleet CI. Tous droits réservés.</p>
    </footer>
  )
}
