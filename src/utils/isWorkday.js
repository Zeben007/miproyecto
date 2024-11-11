//devuelve verdadero en el caso de que el parámetro de entrada coincida con un día 
//laboral, por ejemplo: lunes, martes, miércoles, jueves o viernes. Sin embargo, 
//retorna falso cuando el valor pasado es un día no laboral (sábado o domingo) o si es cualquier otro valor

export function isWorkday(day){
    //Nodo 1
	const today = day;
	switch (today) {
        //Nodo 2
		case "lunes":
        //Nodo 3
			return true;
        //Nodo 4
		case "martes":
        //Nodo 5
			return true;
        //Nodo 6
		case "miércoles":
        //Nodo 7
			return true;
        //Nodo 8
		case "jueves":
        //Nodo 9
			return true;
        //Nodo 10
		case "viernes":
        //Nodo 11
			return true;
        //Nodo 12
		case "sábado":
        //Nodo 13
			return false;
        //Nodo 14
		case "domingo":
        //Nodo 15
			return false;
        //Nodo 16
		default:
        //Nodo 17
			return false;
	}
}