import Mueble from './mueble.js'

export default class Ropero extends Mueble {
    constructor(id, producto, precio, puertas) {
        super(id, producto, precio)
        this.puertas = puertas;
    }
}
