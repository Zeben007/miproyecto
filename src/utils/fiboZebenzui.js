//Función que recibirá como input la posición hasta la que 
//queremos saber de la sucesión de Fibonacci (input num) 
//y nos devuelve la sucesión de Fibonacci en esa posición.



export function fiboZebenzui(num) {
 
    const fib = [0,1]
   
    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
        return fib[num]
}