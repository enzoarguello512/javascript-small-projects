//JS ES6 - PLANTILLA CLASE 04
//INSTANCIA DE OBJETOS MUEBLE
import Mueble from './mueble.js'
import Mesa from './mesa.js'
import Ropero from './ropero.js'

const muebles = [];
muebles.push(new Mueble(1, "Mesa Redonda Selva", 10000));
muebles.push(new Mueble(2, "Silla Selva", 4000));
muebles[0].color = "MARRON CLARO"
muebles[1].color = "MADERA ROJA"
console.log(muebles[0]);
console.log(muebles[1]);
Mueble.aumentar(muebles, 1000)
console.log(muebles[0]);
console.log(muebles[1]);
console.log(muebles[0].color);
console.log(muebles[1].color);
//------------------------------ HERENCIA ------------------------------//
const mesa = new Mesa(3, "Mesa Selva", 14000, 4);
console.log(mesa);
mesa.color = "MADERA ROJA";
console.log(mesa.color);
const ropero = new Ropero(3, "Mesa Selva", 14000, 6);
console.log(ropero);
ropero.color = "MARRON CLARO";
console.log(ropero.color);
Ropero.aumentar(muebles, 2000);
