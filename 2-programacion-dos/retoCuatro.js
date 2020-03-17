const TOTAL_PERSONAS = 9;
const CUENTA_RESTAURANTE = 128;


/* Cuánto tenemos que pagar cada una ? ¿Y Ana ? */

var totalPagar = CUENTA_RESTAURANTE / TOTAL_PERSONAS
var totalAna = totalPagar + 2;
console.log('Total a pagar Ana: ' + totalAna);
var totalResto = totalAna - 2;
console.log('Total a pagar todos: ' + totalResto);
suma = (totalResto * 8) + totalAna - 2;