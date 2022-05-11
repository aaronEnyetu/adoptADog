import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');


async function loadData() {


    const dogs = await getDogs();
    console.log(dogs);


// on load
// fetch all dogs

// render and append all dog cards to the container
    for (let dog of dogs) {
        const dogDiv = renderDogCard(dog);
        dogListContainer.append(dogDiv);
    }
}

//loads data to home page
loadData();