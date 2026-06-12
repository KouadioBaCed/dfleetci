export const PHONE = '2250716253873'

/* Message pré-rempli envoyé sur WhatsApp pour demander une démo */
export const DEMO_MESSAGE = `Bonjour D-Fleet CI 👋

Je souhaite réserver une démo personnalisée de votre plateforme de gestion de flotte.

• Nom & prénom :
• Entreprise :
• Taille de la flotte :
• Besoin principal :
• Ville :

Quel créneau me proposez-vous ? Merci !`

export const WHATSAPP_DEMO_URL = `https://wa.me/${PHONE}?text=${encodeURIComponent(DEMO_MESSAGE)}`
