import Mueble from './mueble.js'

export default class Mesa extends Mueble {
    constructor(id, producto, precio, patas) {
        super(id, producto, precio)
        this.patas = patas;
    }
}
