export function isApproved(vnota) {
 //Nodo 1
  const nota = vnota;
 //Nodo 2           Nodo 3
  if ((nota<0) || (nota > 10)) {
  //Nodo 5
    return null
  } else {
  //Nodo 4
    if (nota <5) {
  //Nodo 7
      return false
    } else {
  //Nodo 6
      return true
    }
  }
}