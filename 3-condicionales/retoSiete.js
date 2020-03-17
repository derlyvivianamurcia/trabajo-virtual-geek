var año = parseInt(prompt("Ingrese un año para saber si es bisiesto "));
var añoBi = año + (año % 4);
console.log("El proximo año bisciesto es: " + añoBi);