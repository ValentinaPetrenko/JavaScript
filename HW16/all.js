

fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6')
.then((response) => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem');
                console.log(`Status Code: ${response.status}`);
                return;
            }
            return response.json();
        }
    )

    .then((beers) => {
         renderPage(beers);
        // что-то делаем с данными
    })

    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });

let listOfBeer = document.getElementById("listOfBeer")


// function renderPage(beers){
//   beers.map(beer=>{
//   console.log(beer)
//         let newBeers = document.createElement('div');
//         newBeers.classList.add('product_item');
//        newBeers.innerHTML = `
//            <div class="nameing">
//                 <div class="img_product" onclick="mw(this)">
//                 <input type="hidden" class="card_id">
//                 <img class="img_card" src="${beer.image_url}" alt="">
//             </div>
//             <div class="content_product">
//                 <h3>${beer.name}</h3>
//             </div>

//             <div class="count_in_stock">
//                 <p>${beer.description}</p>
//             </div>
//     </div>`
//     listOfBeer.appendChild(newBeers)
// })

// }


let card = document.getElementById("card");



function renderPage(beers){
    listOfBeer.innerHTML = "";

    beers.map((beer) => {

        let newElement = document.createElement("div");
        newElement.classList.add("product_item")

            let title = card.getElementsByClassName("title");
            title[0].textContent = beer.name;

            let image = card.getElementsByClassName("img_card");
            image[0].src = beer.image_url;

            let description = card.getElementsByClassName("count_in_stock");
            description[0].textContent = beer.description;


        newElement.innerHTML = card.innerHTML;
        listOfBeer.appendChild(newElement);
    });
}; 