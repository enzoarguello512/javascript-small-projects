function crearH2(string) {
    let h2 = document.createElement("h2");
    h2.innerHTML = string;
    return h2;
}
// FUNCION PARA AGREGAR AL DOM POR ID
function agregarID(id, node) {
    document.getElementById(id).append(node)
}
// FUNCION PARA CREAR ALERTA
function crearAlert(classAlerta, text) {
    let div = document.createElement("div");
    div.classList.add('alert', classAlerta);
    div.innerHTML = text;
    return div;
}
//FUNCION REGRESIVA
function regresiva(segundos) {
    let inicio = segundos;
    let alerta = crearAlert('alert-info', `OFERTA DISPONIBLE`);
    agregarID('reloj', alerta);
    let timer = setInterval(() => {
        alerta.innerHTML = `OFERTA VENCE EN ${parseMinutos(inicio)}`;
        inicio--;
        //console.log(inicio);
        if (inicio === 0) {
            clearInterval(timer);
            alerta.innerHTML = "OFERTA PERDIDA";
        }
    }, 1000);
}

const parseMinutos = (segundos) => {
    let minutos = (segundos / 60);
    return `${parseInt(minutos)} : ${segundos % 60}`
}

function crearCard(dato) {
    return `<div class="card">
                <div class="card-header">
                ${dato.title}
                </div>
                <div class="card-body">
                <h5 class="card-title">ATRIBUTOS</h5>
                ${dato.attributes[0].name} || ${dato.attributes[0].value_name}
                <p class="card-text">$ ${dato.price}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>`
}
