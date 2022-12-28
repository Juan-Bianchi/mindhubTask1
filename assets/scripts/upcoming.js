const datos = Object.assign({}, data);

function createCard (carta) {
    return (`<article class="card card-medium col-10 col-lg-3 col-md-5 justify-content-center ">
                <img ${carta.image} class="card-img-top" alt="avengers" title="avengers">
                <div class="card-body">
                    <h5 class="card-title">${carta.name}</h5>
                    <p class="card-text">${carta.description}</p>
                    <div>
                        <p class="card-text">Price: $${carta.price}</p>
                        <a href="./details.html" class="btn btn-outline-light btn-info">See More</a>
                    </div>
                </div>
            </article>`);
}


function filtraEventosFuturos (listaEventos, fechaReferencia) {
    let listaTerminada = []
    for(evento of listaEventos) {
        if(fechaReferencia >= evento.date ) {
            listaTerminada.push(createCard(evento));
        }
    }
    return listaTerminada;
}

let upcomingEvents = filtraEventosFuturos(datos.events, datos.currentDate);
upcomingEvents = upcomingEvents.toString();
console.log(upcomingEvents);