const datos = Object.assign({}, data);
const cardContainer = document.querySelector(".card-container");

function createCard (card, container) {
    container.innerHTML +=`<article class="card card-medium col-10 col-lg-3 col-md-5 justify-content-center ">
                <img src= "${card.image}" class="card-img-top" alt="avengers" title="avengers">
                <div class="card-body">
                    <h5 class="card-title">${card.name}</h5>
                    <p class="card-text">${card.description}</p>
                    <div>
                        <p class="card-text">Price: $${card.price}</p>
                        <a href="./details.html" class="btn btn-outline-light btn-info">See More</a>
                    </div>
                </div>
            </article>`;
}


function loadAllEvents (listaEventos, container) {
   
    for(let event of listaEventos.events) {
        createCard(event, container);
    }
}

loadAllEvents(datos, cardContainer)



