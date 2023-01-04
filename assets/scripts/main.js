const completeData = Object.assign({}, data);
const cardContainer = document.querySelector(".card-container");
const checksContainer = document.querySelector(".checks")
const searchContainer = document.getElementById("search");
const allEvents = [];


//CREO LOS CHECKBOX CON LAS CATEGORIAS

function createCategoryList ( events) {
    const checkBoxList = events.map( event => event.category)
                               .filter( ( categ, index, array) => array.indexOf(categ) === index);
    return checkBoxList;
}


function renderizeChecks ( events, createList,  where) {
    const checkBoxList = createList(events);
    
    checkBoxList.forEach(categ => {
        where.innerHTML += `<input type="checkbox" class="btn-check" id="${categ}">
                            <label class="btn btn-fondo-blanco" for="${categ}">${categ}</label>`;
        
    });
}

renderizeChecks(completeData.events, createCategoryList, checksContainer);

//FILTRO SEARCH INPUT

searchContainer.addEventListener('input', e => { 

});





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



function searchByName (events) {
    const allEvents = completeData.events.map ( event => event)
    

}



