const completeData = Object.assign({}, data);
const cardContainer = document.querySelector(".card-container");
const checksContainer = document.querySelector(".checks")
const searchContainer = document.getElementById("searchField");




//FILTRO POR FECHA

function filterPastEvents (compData) {

    return compData.events.filter(event => compData.currentDate > event.date);
}

const filteredPastEvents = filterPastEvents(completeData)




//CREO LOS CHECKBOX CON LAS CATEGORIAS

function createCategoryList ( events ) {
    const checkBoxList = events.map( event => event.category)
                               .filter( ( categ, index, array) => array.indexOf(categ) === index);
    return checkBoxList;
}


function renderizeChecks ( events, createList,  where ) {
    const checkBoxList = createList(events);
    
    checkBoxList.forEach((categ, index) => {
        where.innerHTML += `<input type="checkbox" class="btn-check" id="check${index}" name="${categ}">
                            <label class="btn btn-fondo-blanco" for="check${index}">${categ}</label>`;
        
    });
}

renderizeChecks(filteredPastEvents, createCategoryList, checksContainer);




//FILTRO SEARCH INPUT

searchContainer.addEventListener('input', performDoubleFilter);

function filterByInput (listEvent) {
    const eventsFilteredByName = listEvent.filter(event => event.name.toLowerCase().includes(searchContainer.value.toLowerCase()));
   
    return eventsFilteredByName;
}




//FILTRO CHECKBOX

checksContainer.addEventListener('change', performDoubleFilter);

function filterByCategory (eventList) {
    let activeChecks = document.querySelectorAll( 'input[type="checkbox"]:checked');

    activeChecks = Array.from(activeChecks);

    const activeCategories = activeChecks.map(check => check.name.toLowerCase());

    if(activeCategories.length) {
        return eventList.filter(event => activeCategories.includes(event.category.toLowerCase()));
      
    }
 
    return eventList;
}




//RENDERIZO CARTAS

function renderizeCards (cardList) {

    let template ="";
     cardList.forEach(card => {
        template +=`<article class="card card-medium col-10 col-lg-3 col-md-5 justify-content-center ">
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
        })

    return template;    
}
          



//HAGO DOBLE FILTRO

function performDoubleFilter ( ) {
    const categoryFilteredList = filterByCategory(filteredPastEvents);
    const checkedFilteredList = filterByInput(categoryFilteredList);
    let template = "";

    if(checkedFilteredList.length) {
        template = renderizeCards(checkedFilteredList, cardContainer);
    }
    else {
        template = '<h2 id="noResults">No events found with these filters. Try later!</h2>'
    }
    
    cardContainer.innerHTML = template;
}

performDoubleFilter();

