'use strict'

function descargaUsuarios(cantidad) {
    const api = `https://randomuser.me/api/?nat=US&results=${cantidad}`;

    fetch(api)
        .then(respuesta => respuesta.json() )
        .then(datos => imprimirHTML( datos.results));
}

function imprimirHTML (datos) {
    datos.forEach(usuario => {
        const li =document.createElement('li');

        const { name: {first}, name:{last}, picture: {medium}, nat, location: {city}} = usuario;

        li.innerHTML = `
           <p>Nombre: ${first} ${last}</p>
           <p>Ciudad: ${city}</p>
           <p>Pais: ${nat}</p>
           <img src='${medium}'>
        `;

        li.setAttribute("class","flex");

        document.querySelector('#app').appendChild(li);
    })
}

descargaUsuarios(32);