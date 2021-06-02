
class DispositivoEntrada {

  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }
  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }
}

class Raton extends DispositivoEntrada {

  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  get idRaton() {
    return this._idRaton;
  }

  toString() {
    return `
    Entrada: ${this._tipoEntrada}
    Marca: ${this._marca}
    Id-raton: ${this._idRaton}`;
  }
}

class Teclado extends DispositivoEntrada {

  static contadorTeclados = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados;
  }

  toString() {
    return `
    Entrada: ${this._tipoEntrada}
    Marca: ${this._marca}
    Id-teclado: ${this._idTeclado}`;
  }
}

class Monitor {

  static contadorMonitores = 0;

  constructor(marca, tamano) {
    this._marca = marca;
    this._tamano = tamano;
    this._idMonitor = ++Monitor.contadorMonitores;
  }

  get idMonitor() {
    return this._idMonitor;
  }

  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }

  get tamano() {
    return this._tamano;
  }
  set tamano(tamano) {
    this._tamano = tamano;
  }

  toString() {
    return `
    Marca: ${this._marca}
    Tamano: ${this._tamano}
    Id-monitor: ${this._idMonitor}`;
  }
}

class Computadora {

  static contadorComputadoras = 0;

  constructor(nombre, monitor, teclado, raton) {
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
    this._idComputadora = ++Computadora.contadorComputadoras;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre
  }

  get monitor() {
    return this._monitor;
  }
  set monitor(monitor) {
    this._monitor = monitor;
  }

  get teclado() {
    return this._teclado;
  }
  set teclado(teclado) {
    this._teclado = teclado
  }

  get raton() {
    return this._raton;
  }
  set raton(raton) {
    this._raton = raton
  }

  toString() {
    return `
    Nombre-pc: ${this._nombre}
    Monitor: ${this._monitor}
    Teclado: ${this._teclado}
    Raton: ${this._raton}
    Id-computadora: ${this._idComputadora}`;
  }
}

class Orden {

  static contadorOrdenes = 0;

  constructor() {
    this._computadoras = [];
    this._idOrden = ++Orden.contadorOrdenes;
  }

  agregarComputadora(computadora) {
    this._computadoras.push(computadora);
  }

  mostrarOrden() {
    return;
  }
}



