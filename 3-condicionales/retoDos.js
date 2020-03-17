const NAME = 'DERLY VIVIANA MURCIA';
const NAMEDOS = 'NICOL ENDO RUIZ'
nombre = prompt("Ingrese su nombre");
if (nombre === NAME || nombre === NAMEDOS) {
    console.log('BIENVENIDA');
} else if (nombre != NAME || nombre != NAMEDOS) {
    console.log("Lo siento pero el usuario que has introducido no está registrado");
}