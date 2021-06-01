//CLASE MUEBLE
export default class Mueble {
    constructor(id, producto, precio) {
        this.id = id;
        this.producto = producto;
        this.precio = precio;
        this._color = 0;
    }

    detalle() {
        return `${this.producto} $ ${this.precio}`
    }

    get color() {
        switch (this._color) {
            case 1:
                return "MARRON CLARO"
            case 2:
                return "MARRON OSCURO"
            case 3:
                return "MADERA ROJA"
            default:
                return "SIN COLOR"
        }
    }

    set color(valor) {
        switch (valor) {
            case "MARRON CLARO":
                this._color = 1;
                break;
            case "MARRON OSCURO":
                this._color = 2;
                break;
            case "MADERA ROJA":
                this._color = 3;
                break;
            default:
                this._color = -1;
        }
    }

    static aumentar(muebles, aumento) {
        muebles.forEach(mueble => {mueble.precio += aumento});
    }
}
