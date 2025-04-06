export function getTiquetsPendents() {
  const tiquetsPendents = localStorage.getItem('dades_tiquets_pendientes');
  return tiquetsPendents ? JSON.parse(tiquetsPendents) : [];
}

export function setTiquetsPendents(tiquets) {
  localStorage.setItem('dades_tiquets_pendientes', JSON.stringify(tiquets));
}

export function getTiquetsResolts() {
  const tiquetsResolts = localStorage.getItem('dades_tiquets_resueltos');
  return tiquetsResolts ? JSON.parse(tiquetsResolts) : [];
}

export function setTiquetsResolts(tiquets) {
  localStorage.setItem('dades_tiquets_resueltos', JSON.stringify(tiquets));
}