let stringUrl = location.search;
let parameters = new URLSearchParams(stringUrl);
let id = parameters.get("id");

const giantCardConatiner = document.getElementById('cardGiant');

let eventFound = data.events.find(event => event._id === id);

function createTemplate ( event ) {
    let template = `<div class="row g-0 foto-descripcion">
                        <div class="col-12 col-md-5 container-img-giant">
                            <img src="${event.image}" class="card-img-top" alt="event" title="event">
                        </div>
                        <div class="col-12 col-md-5">
                            <div class="card-body card-body-giant">
                            <h5 class="card-title">${event.name}</h5>
                            <p class="card-text">${event.description}</p>
                            <p>
                                <span class="span-giant">Category : </span>
                                ${event.name}
                            </p>
                            <p>
                                <span class="span-giant">Place : </span>
                                ${event.place}
                            </p>
                            <p>
                                <span class="span-giant">Capacity : </span>
                                ${event.capacity}
                            </p>
                            <p>
                                <span class="span-giant">Assistance : </span>
                                ${event.assistance}
                            </p>
                            <p>
                                <span class="span-giant">Price : </span>
                                $${event.price}
                            </p>
                            </div>
                        </div>                 
                 </div>`
                    

    return template;
}

let card = createTemplate(eventFound);

let article = document.createElement("article");
article.className = 'card mb-3 card-giant col-10 justify-content-center';
article.innerHTML = card;

giantCardConatiner.innerHTML = "";

giantCardConatiner.appendChild(article)

