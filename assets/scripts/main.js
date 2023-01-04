const completeData = Object.assign({}, data);
const cardContainer = document.querySelector(".card-container");
const checksContainer = document.querySelector(".checks")
const searchContainer = document.getElementById("searchField");


//CREO LOS CHECKBOX CON LAS CATEGORIAS

function createCategoryList ( events ) {
    const checkBoxList = events.map( event => event.category)
                               .filter( ( categ, index, array) => array.indexOf(categ) === index);
    return checkBoxList;
}


function renderizeChecks ( events, createList,  where ) {
    const checkBoxList = createList(events);
    
    checkBoxList.forEach(categ => {
        where.innerHTML += `<input type="checkbox" class="btn-check" id="${categ}">
                            <label class="btn btn-fondo-blanco" for="${categ}">${categ}</label>`;
        
    });
}


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

    const activeCategories = activeChecks.map(check => check.id.toLowerCase());
    
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

        console.log(template)

    return template;    
}
            
//HAGO DOBLE FILTRO

renderizeChecks(completeData.events, createCategoryList, checksContainer);

function performDoubleFilter ( ) {
    const categoryFilteredList = filterByCategory(completeData.events);
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


