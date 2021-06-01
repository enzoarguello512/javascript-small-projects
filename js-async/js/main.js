//JS ES6 - PLANTILLA CLASE 03
//CÓDIGO SÍNCRONO
/*
document.body.append(crearH2("JAVASCRIPT MODERNO"));
document.body.append(crearH2("HOLA"));
//CÓDIGO ASÍNCRONO COOPERATIVO (CONTROLAMOS LA DURACIÓN DEL PROCESO)
//--------------------------- SETTIMEOUT ---------------------------
//setTimeout(alert, 1000, "HOLA EN 1s");
setTimeout(agregarID, 2000, 'notificacion', crearH2('HOLA EN 2s'));
setTimeout((a,b)=>{
    agregarID('notificacion', crearH2(a+b));
}, 3000, 1, 2);

//--------------------------- SETINTERVAL ---------------------------
setInterval((a,b)=>{
    agregarID('notificacion', crearH2('CADA 3 SEGUNDOS'));
}, 3000, 1, 2);
//
let segundos = 0;
setInterval(()=>{
    document.getElementById('reloj').innerHTML = segundos;
    segundos++;
},1000);
*/
//--------------------¿PARA QUE USAMOS ASÍNCRONO COOPERATIVO?-------------//
//ALERTAS PROGRAMADAS
/*
setTimeout(()=>{
    //alert('¿NECESITAS AYUDA?')
    let alerta = crearAlert('alert-info', '¿NECESITAS AYUDA?')
    agregarID('notificacion', alerta);
},3000)
//CUENTA REGRESIVA
regresiva(120);
*/
//--------------------PROMESAS-------------//
//const unPromesa = new Promise();
//console.log(unPromesa);
/*
const unPromesa = new Promise(function(){
    console.log("HOLA");
});
console.log(unPromesa);

const unPromesa = new Promise(function(f1, f2){
    console.log(f1);
    console.log(f2);
    console.log("PROMESA");
    if(true){
        f1("ACEPTADO :D");
    }else{
        f2("RECHAZADO XD");
    }

});

console.log();
unPromesa.then(resultadoPositivo).catch(resultadoNegativo);
console.log(unPromesa);

function resultadoPositivo(e){
    console.log(e);
}

function resultadoNegativo(r){
    console.log(r);
}
*/

/*
const boton = document.getElementById('btnNucleo');
let accionUsuario = false;

boton.onclick = () => {
    accionUsuario = true;
    boton.innerHTML = "SECUENCIA DE DESTRUCCION ACTIVADA...";
    controlPromise();
}


//2
function controlPromise(){
    //1º
    const controlBoton = new Promise((resolve, reject)=>{
        //PROCESO ASINCRONO
        setTimeout(()=>{
            if (!accionUsuario) {
                //resolve("SALVASTE SPRINGFIELD", "GRACIAS");
                resolve(["SALVASTE SPRINGFIELD", "GRACIAS"]);
            }else{
                reject(["SPRINGFIELD DESTRUIDA", "ES HOMERO"]);
            }
        }
        ,3000);
    })
    
    //console.log(controlBoton);
    //Tienes que envolverla en una función que puedas llamar de nuevo. Una promesa por sí misma no puede ser "reiniciada".
    controlBoton
        .then(([p1,p2])=>{
            console.log(p2);
            let alerta = crearAlert('alert-info', p1+" "+p2)
            agregarID('notificacion', alerta);
        })
        .catch(([e1,e2])=>{
            console.log(e2);
            let alerta = crearAlert('alert-danger',e1+" "+e2)
            agregarID('notificacion', alerta);
        })
}

controlPromise();

//--------------------¿PARA QUE USAMOS PROMESAS?-------------//
fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055')
    .then((respuesta) => {
        return respuesta.json();
    })
    .then((respuestaJSON)=>{
        console.log(respuestaJSON.results);
        let node = document.getElementById('generado');
        respuestaJSON.results.forEach(element => {
            //node.append(crearCard(element));
            node.insertAdjacentHTML("beforeend", crearCard(element));
        });
    })
    .catch((error) => {
        let alerta = crearAlert('alert-danger',"NO SE PUEDEN OBTNER LOS DATOS")
        agregarID('notificacion', alerta);
    })
*/
//-------------------------- BREAK ---------------------------//
/*
//ASYNC WAIT
async function soyAsyncrona(mensaje){
    //EXCEPCION
    //throw "TODO MAL"
    return mensaje;
}

//console.log(soyAsyncrona("HOLA"));
soyAsyncrona('TODO BIEN')
    .then(r => { console.log(r) })
    .catch(e => { console.log(e)});
      
async function soyAsyncronaAwait(mensaje){
    await new Promise(resolve => setTimeout(resolve, 2000));
    return mensaje
}

//console.log(soyAsyncrona("HOLA"));
soyAsyncronaAwait('TODO BIEN')
    .then(r => { console.log(r) })
    .catch(e => { console.log(e)});
        

*/
async function cargarProductos(code) {
    let respuesta = await fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${code}`);
    if (respuesta.status == 200) {
        let json = await respuesta.json()
        return json;
    }
    //throw "ERROR EN EL JSON"
    throw new Error(respuesta.status);
}

cargarProductos('MLA1512')
    .then((respuestaJSON) => {
        console.log(respuestaJSON.results);
        let node = document.getElementById('generado');
        respuestaJSON.results.forEach(element => {
            //node.append(crearCard(element));
            node.insertAdjacentHTML("beforeend", crearCard(element));
        });
    })
    .catch((error) => {
        let alerta = crearAlert('alert-danger', "NO SE PUEDEN OBTENER LOS DATOS");
        agregarID('notificacion', alerta);
    });
