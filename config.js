// Configuration commune au jeu (index.html) et à l'administration (admin.html)

export const firebaseConfig = {
  apiKey: "AIzaSyD-0A68e-XrMh1TErfG2F2uW3KTLseRLHo",
  authDomain: "geotrouveur-suisse.firebaseapp.com",
  projectId: "geotrouveur-suisse",
  storageBucket: "geotrouveur-suisse.firebasestorage.app",
  messagingSenderId: "1058340444369",
  appId: "1:1058340444369:web:3e79496438b8ff679acdf0"
};

// Clé Google Maps (Street View). À REMPLACER par une NOUVELLE clé restreinte
// au référent https://davidvuilleumier-estra.github.io/* et à l'API "Maps JavaScript".
export const GOOGLE_MAPS_KEY = "AIzaSyDmTtMX_oK6Sj0Xm9Eg4_8Ds3p5x_pRKx0";

export const FIREBASE_SDK = "https://www.gstatic.com/firebasejs/10.14.1";

// Semestres : S1 = 1er août -> 31 janvier ; S2 = 1er février -> 31 juillet
export function semestreCourant(d = new Date()) {
  const y = d.getFullYear(), m = d.getMonth(); // 0 = janvier
  if (m >= 7) return `${y}-S1`;
  if (m === 0) return `${y - 1}-S1`;
  return `${y}-S2`;
}
export function prochainReset(d = new Date()) {
  const y = d.getFullYear(), m = d.getMonth();
  if (m >= 7) return new Date(y + 1, 1, 1);
  if (m === 0) return new Date(y, 1, 1);
  return new Date(y, 7, 1);
}
export function formatDate(d) {
  return d.toLocaleDateString("fr-CH", { day: "2-digit", month: "2-digit", year: "numeric" });
}
