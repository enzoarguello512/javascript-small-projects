
class Persona {

  static contadorPersonas = 0;

  MaxPeopleCreated = 5;

  constructor(nombre, apellido, edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    if (Persona.contadorPersonas < this.MaxPeopleCreated) {
      this._idPersona = ++Persona.contadorPersonas;
    } else {
      console.log('Limit reached');
    }
  }
  get IdPersona() {
    return this._idPersona;
  }
  get Nombre() {
    return this._nombre;
  }
  set Nombre(nombre) {
    this._nombre = nombre;
  }
  get Apellido() {
    return this._apellido;
  }
  set Apellido(apellido) {
    this._apellido = apellido;
  }
  get Edad() {
    return this._edad;
  }
  set Edad(edad) {
    this._edad = edad;
  }
  toString() {
    //return this._idPersona + ' ' + this._nombre + ' ' + this.apellido + ' ' + this._edad;
    return `
    ${this._idPersona}
    ${this._nombre}
    ${this._apellido}
    ${this._edad}
    `

  }
}

class Empleado extends Persona {

  static contadorEmpleados = 0;

  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this._sueldo = sueldo;
    this._idEmpleado = ++Empleado.contadorEmpleados;
  }
  get IdEmpleado() {
    return this._idEmpleado;
  }
  get Sueldo() {
    return this._sueldo;
  }
  set Sueldo(sueldo) {
    this._sueldo = sueldo;
  }
  toString() {
    return super.toString() + ' ' + this._idEmpleado + ' ' + this._sueldo;
  }
}

class Cliente extends Persona {

  static contadorClientes = 0;

  constructor(nombre, apellido, edad, fechaRegistro) {
    super(nombre, apellido, edad);
    this._fechaRegistro = fechaRegistro;
    this._idCliente = ++Cliente.contadorClientes;
  }
  get IdCliente() {
    return this._idCliente;
  }
  get FechaRegistro() {
    return this._fechaRegistro;
  }
  set FechaRegistro(fecha) {
    this._fechaRegistro = fecha;
  }
  toString() {
    return super.toString() + ' ' + this._idCliente + ' ' + this._fechaRegistro;
  }
}


let miPersonita1 = new Persona('Juan', 'Perez', '18');
console.log(miPersonita1.toString());

//let miPersonita2 = new Persona('Juan', 'Perez', '18');
//console.log(miPersonita2.toString());

//let miPersonita3 = new Persona('Juan', 'Perez', '18');
//console.log(miPersonita3.toString());

//let miPersonita4 = new Persona('Juan', 'Perez', '18');
//console.log(miPersonita4.toString());

//let miPersonita5 = new Persona('Juan', 'Perez', '18');
//console.log(miPersonita5.toString());

//let miPersonita6 = new Persona('Juan', 'Perez', '18');
//console.log(miPersonita6.toString());


let miEmpleado1 = new Empleado('Pepe', 'Mantecol', 20, '$3000')
console.log(miEmpleado1.toString());


let miEmpleado2 = new Empleado('Pepe', 'Mantecol', 20, '$3000')
console.log(miEmpleado2.toString());

let miCliente1 = new Cliente('Pepe', 'Apellido', 20, new Date());
console.log(miCliente1.toString());



