// Aplicación en la que debes ingresar un valor numérico cuyo valor debe estar entre 1 y 1000.
// Cuando el valor numérico ingresado está entre esos números, la función devuelve true, cuando no, devuelve false.

export function isAmountBounded(numero) {
 
    const valor = numero;
   
    if ((valor<1) || (valor > 1000)) {
      return false
    } else {
        return true
      }
    }